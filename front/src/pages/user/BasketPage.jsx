import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'

function BasketPage() {
    const {basket,addbasket,removeBasket,decrease}=useContext(MainContext)
  return (
    <div>
  {
        basket.map((x) => (
          <div key={x._id}>
            <img src={x.image} alt="" />
            <h3>{x.title} </h3>
            <p>{x.desc} </p>
            <span>{x.price} </span>
            <button onClick={()=>addbasket(x)}>+</button>
            <button onClick={()=>decrease(x)}>-</button>
            <button onClick={()=>removeBasket(x)}>x</button>

            <p>count:{x.count}</p>
          </div>
        ))
      }
    </div>
  )
}

export default BasketPage
