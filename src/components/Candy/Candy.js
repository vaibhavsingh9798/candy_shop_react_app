import {useCallback, useContext, useState} from 'react';
import Cart from "../Cart/Cart";
import './Candy.css'
import CartContext from '../store/CartContext';

const Candy = () =>{
const [candy,setCandy] = useState({candyName:'',candyDesc:'',candyPrice:0 })
const [items,setItems] = useState([])
 const cartCtext = useContext(CartContext)
const handleChanges = (e) =>{
    const {name,value} = e.target
    console.log('dat',name,value)
    setCandy({...candy,[name]:value})
}

const handleSubmit = (event)=>{
  event.preventDefault()
  console.log('can',candy)
  setItems([...items,candy])
  cartCtext.addItem(candy)
  setCandy({candyName:'',candyDesc:'',candyPrice:0 })
}

const showCandy = () =>{
 console.log('cn.',cartCtext.item)
    return(
        <div className='show-items'>
          {items.map((item,ind) =>(
             <div className='item' key={item.candyName}>
                 {item.candyName} -      {item.candyDesc}  -     {item.candyPrice} 
                 <button onClick={(e) => cartCtext.onCount(e,1)}>Add One</button>
                 <button onClick={(e) => cartCtext.onCount(e,2)}>Add Two</button>
                 <button onClick={(e) => cartCtext.onCount(e,3)}>Add Three</button>
                </div>
          ))}
        </div>
    )
}

    return(
        <>
        <div className="candy-container">
        <div className="candy-header">
        <h2>Candy Shop</h2>
        <Cart />
        </div>
          <div className="add-candy-form">
             <form onSubmit={handleSubmit}>
                <lable htmlFor="candyName">Name</lable>
                <input type="text" id='candyName' name="candyName" value={candy.candyName} onChange={handleChanges} />
                <lable htmlFor="candyDesc">Desc</lable>
                <input type="text" id='candyDesc' name="candyDesc" value={candy.candyDesc} onChange={handleChanges} />
                <lable htmlFor="candyPrice">Price</lable>
                <input type="number" id='candyPrice' name="candyPrice" value={candy.candyPrice} onChange={handleChanges} />
                <button type="submit">Add</button>
             </form>
          </div>
          <div className='show-item'>
             {showCandy()}
              
          </div>
        </div>

        </>
    )
}

export default Candy;