
import React from 'react'
import Registr from './components/Registr.jsx'
import Auth from './components/Auth.jsx'
import './css/app.css'
import Lk from "./components/Lk.jsx";
import SiteBar from "./components/SiteBar.jsx";


export default function App() {
    // Для демонстрации можно переключаться между формами
    const [isLogin, setIsLogin] = React.useState(true)
    return (
        <div className="app">
            <SiteBar/>
            <Lk/>
        </div>
    );
}

