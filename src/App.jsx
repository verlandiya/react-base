import React, { useState, useEffect } from 'react'
import Registr from './components/Registr.jsx'
import Auth from './components/Auth.jsx'
import SiteBar from './components/SiteBar.jsx'
import './css/app.css'

export default function App() {
    const [isLogin, setIsLogin] = useState(true)
    const [companies, setCompanies] = useState([])
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/businesses")
            .then(res => res.json())
            .then(data => setCompanies(data))

        fetch("http://localhost:8000/api/v1/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="app">
            {isLogin ? (
                <SiteBar
                    companies={companies}
                    orders={orders}
                />
            ) : (
                <Registr />
            )}
        </div>
    )
}
