import ButtonBar from "./ButtonBar.jsx"
import '../css/sitebar.css'
import {useState} from 'react'
import OrderInfo from "./OrderInfo.jsx"
import Companies from "./Companies.jsx";
import Lk from "./Lk.jsx"

export default function SiteBar ({ companies, orders }) {
    const [isCont, setIsCont] = useState(true)

    return (
        <>
            <div className="site-bar-container">
                <div className="site-bar">
                    <ButtonBar title='Заказы' onClick={() => setIsCont(true)}/>
                    <ButtonBar title='Мои компании' onClick={() => setIsCont(false)}/>
                </div>
            </div>

            <Lk
                content={isCont}
                companies={companies}
                orders={orders}
            />
        </>
    )
}