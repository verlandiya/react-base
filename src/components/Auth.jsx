import React from 'react'
import Button from './Button.jsx'
import {useState} from 'react'
import "../css/form.css"


export default function Register() {
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        name: '',
        password: '',
    })

    /* useEffect */

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)

    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder={'Введите имя и фамилию'}/>
                <input name="password" value={form.password} onChange={handleChange} placeholder={'Введите пароль'}/>
                {error && <p>{error}</p>}
                <Button title='Вход' onClick={handleSubmit}/>
            </form></div>
    )
}

