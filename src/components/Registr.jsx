import React, { useState } from 'react'
import MainCard from './MainCard.jsx'
import '../css/form.css'


export default function Registr () {
    const [formData, setFormData] = useState({
        name: '',
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
        console.log('Register:', formData);
        // Здесь будет логика регистрации
    }

    return (
        <MainCard>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form-title">Регистрация</h2>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
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
                        placeholder="пароль"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn-submit">
                        Зарегистрироваться
                    </button>
                    <button
                        type="button"
                        className="corner-button"
                    >
                        Войти
                    </button>

                </div>
            </form>
        </MainCard>
    )
}