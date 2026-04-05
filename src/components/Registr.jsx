import React, {useEffect, useState} from 'react'
import MainCard from './MainCard.jsx'
import '../css/form.css'
import Button from "./Button.jsx";
import Auth from './Auth.jsx'
import SiteBar from "./SiteBar.jsx";

export default function Registr () {
    const [onLk, setonLk] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch('http://185.251.88.165/api/v1/owners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)})
            .then(response => response.json())
            .then(data => {console.log('вот:', data)})
            .catch(error => {console.error('Ошибка:', error)})}, [])




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register:', formData);
        alert('регистрация прошла успешно')}
        setonLk(true)




  return (<MainCard>
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
                    <button type="submit" className="btn-submit" onClick={handleSubmit}>
                        Зарегистрироваться
                        <SiteBar onLk={onLk}/>
                    </button>


                </div>
            </form>
        </MainCard>)}