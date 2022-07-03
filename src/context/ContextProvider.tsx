import { createContext, useContext, useState } from "react";
import Shoppingcart from "../components/Shoppingcart";
import { uselocalstorage } from "../hooks/Uselocalstorage";

type CartItem = {
    id:number,
    quantity:number
}

type shoppinCartcontext = {
    openCart:()=>void;
    closeCart:()=>void;
    getItemquantity: (id:number) => number;
    increasecardQuantity: (id:number) => void;
    decreasecardquantity: (id:number) => void;
    removeFromCart: (id:number) => void;
    cartQuantity: number;
    cartitems: CartItem[];
}

const Provider = createContext({} as shoppinCartcontext);

export function useShoppingcartcontext(){
    return useContext(Provider);
}

export function ShoppingContext({children}: {children: React.ReactNode}) {
    const [cartitems, setcartitems] = uselocalstorage<CartItem[]>('shopping-cart',[]);
    const [isOpen, setopen] = useState(false);

    const openCart = () => {
        setopen(true);
    }

    const closeCart = () => {
        setopen(false)
    }

    const cartQuantity = 
        cartitems.reduce((quantity, item) =>
            quantity + item.quantity,0
        );

    function getItemquantity(id:number){
        return cartitems.find(item => item.id === id)?.quantity || 0;
    }

    function increasecardQuantity(id:number){
        setcartitems(currItems =>{
            if (currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1}];
            }else{
                return currItems.map(item =>{
                    if (item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    }else{
                        return item;
                    }
                })
            }
        })
    }
    function decreasecardquantity(id:number){
        setcartitems(currItems =>{
            if (currItems.find(item => item.id === id) == null){
                return currItems.filter(item => item.id !== id);
            }else{
                return currItems.map(item =>{
                    if (item.id === id){
                        return {...item, quantity: item.quantity - 1};
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setcartitems(currItems =>{
            return currItems.filter(item => item.id !== id);
        })
    }

    return (
        <Provider.Provider value={{getItemquantity, increasecardQuantity, decreasecardquantity, removeFromCart, cartitems, openCart, closeCart, cartQuantity}}>
            {children}
            <Shoppingcart isOpen={isOpen} />
        </Provider.Provider>
    )
}