import React, { useContext } from 'react'
import { WishContext } from '../../context/WishProvider'

function WishlistPage() {
  const {wishlist,removeWishlist}=useContext(WishContext)
  return (
    <div>
        {
        wishlist.map((x) => (
          <div key={x._id}>
             <img src={x.image} alt="" />
            <h3>{x.title} </h3>
            <p>{x.desc} </p>
            <span>{x.price} </span>
            <button onClick={()=>removeWishlist(x)}>x</button>


          </div>
        ))
      }
    </div>
  )
}

export default WishlistPage
