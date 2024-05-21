import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainProvider';
import { Link } from 'react-router-dom';
import { WishContext } from '../../context/WishProvider';
import { Helmet } from 'react-helmet-async';
import "./homestyle.scss"

function Home() {
  const { addbasket } = useContext(MainContext)
  const { addwishlist } = useContext(WishContext)
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllProduct()
  }, []);

  async function getAllProduct() {
    const response = await fetch('http://localhost:3000/meryem');
    const data = await response.json();
    setProduct(data)

  }
  function incAZ(property) {
    setProduct([...product].sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0))
    )
  }
  function incZA(property) {
    setProduct([...product].sort((a, b) => (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0))
    )
  }
  return (

    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>



      <div className="education_background">
        <div>
          <h1>Get Your <span>Education </span> Today!</h1>
        </div>

      </div>
      <div className="fetch_sec_background">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button onClick={() => incAZ("title")}>A-Z</button>
          <button onClick={() => incZA("title")}>Z-A</button>
          <button onClick={() => incAZ("price")}>artan</button>
          <button onClick={() => incZA("price")}>azalan</button>
        <div className="fetch_sec_contain">

          {
            product
            .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
            
            .map((x) => (
              // <div key={x._id}>
              //   <h3>{x.title} </h3>
              //   <p>{x.desc} </p>
              //   <span>{x.price} </span>
              //   <button onClick={()=>addbasket(x)}>add basket</button>
              //   <button onClick={()=>addwishlist(x)}>add wishlist</button>

              //   <button><Link to={`detail/${x._id}`}>detail</Link> </button>
              // </div>
              <div className="fetch_sec_box" key={x._id}>
                <div className="fetch_image">
                  <img src={x.image} alt="" />
                </div>
                <div className="fetch_text">
                  <h5>{x.title}</h5>
                  <p>{x.desc}</p>
                  <button onClick={()=>addbasket(x)}>add basket</button>
                  <button onClick={()=>addwishlist(x)}>add wishlist</button>
                  <button><Link to={`detail/${x._id}`}>detail</Link> </button>
                </div>
                <div className="fetch_price">
                  <div className="fetch_price_left">
                    <p>Michael Smith, </p>
                    <span>Author</span>
                  </div>
                  <div className="fetch_price_right">
                    <h5>${x.price}</h5>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
