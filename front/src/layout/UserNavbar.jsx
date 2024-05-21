import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
import "./usernavbarstyle.scss"

function UserNavbar() {
    const {basket}=useContext(MainContext)
  return (
    <div>
       {/* <Link to="/">Home</Link>
       <Link to="about">About</Link>


       <Link to="/admin">Adminhome</Link>
       <Link to="basket">basket {basket.length}</Link>
       <Link to="wishlist">wishlist</Link> */}
       <div className="user_navbar_background container">
        <div className="user_navbar_contain ">
            <div className="user_navbar_contain_left">
               <div>
               <div className='user_navbar_image'><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /></div>
            <h1>COURSE</h1>
            </div>
               </div>
            <div className="user_navbar_contain_middle">
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="basket"><i class="fa-solid fa-bag-shopping"></i> {basket.length}</Link></li>
                        <li> <Link to="wishlist"><i class="fa-regular fa-heart"></i></Link></li>
                        <li><Link to="/admin">Adminhome</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="user_navbar_contain_right">
            <i class="fa-solid fa-phone-volume"></i>
            <span>+43 4566 7788 2457</span>
            </div>
        </div>
       </div>


      
    </div>
  )
}

export default UserNavbar
