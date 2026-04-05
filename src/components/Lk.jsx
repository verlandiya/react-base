import "../css/maincard.css"
import React from 'react'
import OrderInfo from "./OrderInfo.jsx"
import Companies from "./Companies.jsx"


export default function Lk ({ content = true, companies, orders }) {
    return (
        <>
            {content ? (
                <OrderInfo orders={orders} />
            ) : (
                <Companies companies={companies} />
            )}
        </>
    )
}
