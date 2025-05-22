import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError]);

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        setSuccessMessage('');
        
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

    const blurHandler = (e) => {
        setEmailDirty(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formValid) {
            const newPassword = generateRandomPassword();
            setSuccessMessage(`Новый пароль отправлен на ${email}. Ваш временный пароль: ${newPassword}`);
            setEmail('');
            setEmailDirty(false);
        }
    };

    const generateRandomPassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    return (
        <div className="authForm">
            <form onSubmit={handleSubmit}>
                <h1>Восстановление пароля</h1>
                
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}
                
                {(emailDirty && emailError) && <div className="error-message">{emailError}</div>}
                <input 
                    onChange={emailHandler} 
                    value={email} 
                    onBlur={blurHandler} 
                    name="email" 
                    type="text" 
                    placeholder="Введите ваш email..."
                />
                
                <button disabled={!formValid} type="submit">
                    Восстановить пароль
                </button>
                
                <div className="auth-links">
                    <div className="auth-link">
                        Вспомнили пароль?{' '}
                        <button 
                            type="button" 
                            onClick={() => navigate('/sign-in')}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
