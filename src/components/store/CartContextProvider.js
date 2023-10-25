import {useState} from 'react'
import CartContext from "./CartContext"

const CartContextProvider = (props)=>{
 const [items,setItems] = useState([])
 const [countItem,setCountItem] = useState(0)

 const handleItem = (event,data)=> {
   setItems([...items,data])
   console.log('add..',data)
 }

 const handleCount = (event,count)=> {
    event.preventDefault()
   setCountItem(countItem+count)
 }

 return(
    <CartContext.Provider value={{addItem:handleItem,onCount:handleCount,item:items,count:countItem}}>
        {props.children}
    </CartContext.Provider>
 )
}
export default CartContextProvider;