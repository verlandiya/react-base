import Button from './Button.jsx'
import OrderInfo from "./OrderInfo.jsx";
import {useState} from "react";
/* общая информация, предприятия, доки*/

export default function Lk(){
    const [selectedCard, setselectedCard] = useState('Заказы')
    if (selectedCard==='Заказы'){
        return <OrderInfo orders={['1', '2', '3', '4', '5', '6', '7', '8', '9']}/>
    }
    if (selectedCard==='Мои компании'){
        return null
    }
    if (selectedCard==='Документы'){
        return null
    }
    return(
        <div className='all-info'>
           <Button title='Заказы' onClick={() => setselectedCard('Заказы')}/>
            <Button title='Мои компании' onClick={() => setselectedCard('Мои компании')}/>
            <Button title='Документы' onClick={() => setselectedCard('Документы')}/>
        </div>
    )
}