import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const WishContext=createContext()

function WishProvider(  {children}) {
    const [wishlist, setwishlist] = useLocalStorage("wishlist",[])

    function addwishlist(item) {
        const index=wishlist.findIndex(x=>x._id ===item._id)
        if (index !==-1) {
            wishlist[index].count++
            setwishlist([...wishlist])
            
        }else{

            setwishlist([...wishlist,{...item,count:1}])
        }
        
    }
    function removeWishlist(item) {
        setwishlist(wishlist.filter(x=>x._id!==item._id))
        
    }
  return <WishContext.Provider value={{wishlist,addwishlist,removeWishlist}} >
  {children}
</WishContext.Provider>
}

export default WishProvider
