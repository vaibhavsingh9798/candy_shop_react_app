import { createContext } from "react";

const CartContext = createContext({
    addItem:()=>{},
    onCount:()=>{},
    item:[],
    count:0

})

export default CartContext ;
