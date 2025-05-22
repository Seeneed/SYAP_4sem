import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    const [authError, setAuthError] = useState('');

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        setAuthError('');
        
        if (!value.trim()) {
            setEmailError('Email не может быть пустым');
            return;
        }
        
        if (/\s/.test(value)) {
            setEmailError('Email не должен содержать пробелы');
            return;
        }
        
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value.toLowerCase())) {
            setEmailError('Некорректный email');
            return;
        }
        
        setEmailError('');
    };

    const passwordHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
        setAuthError('');
        
        if (!value) {
            setPasswordError('Пароль не может быть пустым');
            return;
        }
        
        setPasswordError('');
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formValid) {
            if (email === 'test@test.com' && password === 'test') {
                alert('Авторизация прошла успешно!');
            } else {
                setAuthError('Неверный email или пароль');
            }
        }
    };

    return (
        <div className="authForm">
            <form onSubmit={handleSubmit}>
                <h1>Вход в систему</h1>
                
                {authError && <div className="error-message">{authError}</div>}
                
                {(emailDirty && emailError) && <div className="error-message">{emailError}</div>}
                <input 
                    onChange={emailHandler} 
                    value={email} 
                    onBlur={blurHandler} 
                    name="email" 
                    type="text" 
                    placeholder="Введите ваш email..."
                />
                
                {(passwordDirty && passwordError) && <div className="error-message">{passwordError}</div>}
                <input 
                    onChange={passwordHandler} 
                    value={password} 
                    onBlur={blurHandler} 
                    name="password" 
                    type="password" 
                    placeholder="Введите ваш пароль..."
                />
                
                <button disabled={!formValid} type="submit">
                    Войти
                </button>
                
                <div className="auth-links">
                    <div className="auth-link">
                        Нет аккаунта?{' '}
                        <button 
                            type="button" 
                            onClick={() => navigate('/sign-up')}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                    <div className="auth-link">
                        <button 
                            type="button" 
                            onClick={() => navigate('/reset-password')}
                        >
                            Забыли пароль?
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
