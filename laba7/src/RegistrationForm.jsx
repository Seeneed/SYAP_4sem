import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [confirmPasswordError, setConfirmPasswordError] = useState('Подтвердите пароль');
    const [formValid, setFormValid] = useState(false);
    const [allFieldsTouched, setAllFieldsTouched] = useState(false);

    useEffect(() => {
        const fieldsTouched = nameDirty && emailDirty && passwordDirty && confirmPasswordDirty;
        setAllFieldsTouched(fieldsTouched);

        if (fieldsTouched) {
            if (nameError || emailError || passwordError || confirmPasswordError) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }
        } else {
            setFormValid(false);
        }
    }, [nameError, emailError, passwordError, confirmPasswordError, 
        nameDirty, emailDirty, passwordDirty, confirmPasswordDirty]);

    const nameHandler = (e) => {
        const value = e.target.value;
        setName(value);
        
        if (!value.trim()) {
            setNameError('Поле имя не может быть пустым');
            return;
        }
        
        if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
            setNameError('Имя должно содержать только буквы');
            return;
        }
        
        if (value.length < 2) {
            setNameError('Имя должно быть длиннее 2 символов');
            return;
        }
        
        if (value.length > 50) {
            setNameError('Имя должно быть короче 50 символов');
            return;
        }
        
        setNameError('');
    };

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        
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
        
        if (!value) {
            setPasswordError('Пароль не может быть пустым');
            return;
        }
        
        if (/\s/.test(value)) {
            setPasswordError('Пароль не должен содержать пробелы');
            return;
        }
        
        if (value.length < 8) {
            setPasswordError('Пароль должен быть длиннее 8 символов');
            return;
        }

        if (value.length > 20) {
            setPasswordError('Пароль должен быть менее 20 символов');
            return;
        }
        
        if (!/[A-Z]/.test(value)) {
            setPasswordError('Пароль должен содержать хотя бы одну заглавную букву');
            return;
        }
        
        if (!/[a-z]/.test(value)) {
            setPasswordError('Пароль должен содержать хотя бы одну строчную букву');
            return;
        }
        
        if (!/[0-9]/.test(value)) {
            setPasswordError('Пароль должен содержать хотя бы одну цифру');
            return;
        }
        
        setPasswordError('');
        
        if (confirmPassword && value !== confirmPassword) {
            setConfirmPasswordError('Пароли не совпадают');
        } else {
            setConfirmPasswordError('');
        }
    };

    const confirmPasswordHandler = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        
        if (!value) {
            setConfirmPasswordError('Подтвердите пароль');
            return;
        }
        
        if (value !== password) {
            setConfirmPasswordError('Пароли не совпадают');
            return;
        }
        
        setConfirmPasswordError('');
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'confirmPassword':
                setConfirmPasswordDirty(true);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!allFieldsTouched) {
            setNameDirty(true);
            setEmailDirty(true);
            setPasswordDirty(true);
            setConfirmPasswordDirty(true);
            return;
        }
        
        if (formValid) {
            alert('Регистрация прошла успешно!');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setNameDirty(false);
            setEmailDirty(false);
            setPasswordDirty(false);
            setConfirmPasswordDirty(false);
        }
    };

    return (
        <div className="registrationForm">
            <form onSubmit={handleSubmit}>
                <h1>Регистрация</h1>
                
                {(nameDirty && nameError) && <div className="error-message">{nameError}</div>}
                <input 
                    onChange={nameHandler} 
                    value={name} 
                    onBlur={blurHandler} 
                    name="name" 
                    type="text" 
                    placeholder="Введите ваше имя..."
                />
                
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
                
                {(confirmPasswordDirty && confirmPasswordError) && <div className="error-message">{confirmPasswordError}</div>}
                <input 
                    onChange={confirmPasswordHandler} 
                    value={confirmPassword} 
                    onBlur={blurHandler} 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Подтвердите ваш пароль..."
                />
                
                <button 
                    disabled={!formValid} 
                    type="submit"
                    className={!formValid && allFieldsTouched ? 'invalid-button' : ''}
                >
                    Зарегистрироваться
                </button>
                
                {!formValid && allFieldsTouched && (
                    <div className="error-message" style={{ textAlign: 'center', marginTop: '10px' }}>
                        Пожалуйста, заполните все поля корректно
                    </div>
                )}
                
                <div className="auth-link">
                    Уже есть аккаунт?{' '}
                    <button 
                        type="button" 
                        onClick={() => navigate('/sign-in')}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
