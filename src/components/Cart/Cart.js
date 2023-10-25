import { useContext } from "react";
import CartContext from "../store/CartContext";

const Cart = () =>{
   let {count} = useContext(CartContext)
    return(
        <>
        <h4>Cart {count}</h4>
        
        </>
    )
}

export default Cart;