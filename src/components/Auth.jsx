
import React, { useState } from 'react';
import MainCard from './MainCard';
import '../css/form.css';

export default function Auth () {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', formData);
        // Здесь будет логика входа
    }

    return (
        <MainCard>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form-title">Вход</h2>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Почта"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn-submit">
                        Войти
                    </button>


                </div>
            </form>
        </MainCard>
    );
};

