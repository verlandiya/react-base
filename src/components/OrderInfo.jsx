import "../css/orderinfo.css"
import React from 'react'
import Button from "./Button.jsx";
import MainCard from "./MainCard.jsx"

export default function OrderInfo({ orders }) {

    const onNo = () => {console.log('')}
    const onYes = () => {console.log('урвааааа')}
    return (

        <MainCard>
        <div className="order-info-card">
            {orders && orders.length > 0 ? (
                <div className="order-info-content">
                    {orders.map((order, index) => (
                        <div key={index} className="order-item">
                        <div className="order-controls">
                            <Button title='✅' onClick={onYes}/>
                            <Button title='❌' onClick={onNo}/>
                        </div>
                        <div className="order-text">{order}</div>
                        </div>
                    ))}
                </div>


            ) : (
                <p>Заказов нет</p>
            )}
        </div>
        </MainCard>
    )
}