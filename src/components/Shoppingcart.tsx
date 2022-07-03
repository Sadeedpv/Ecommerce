import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingcartcontext } from '../context/ContextProvider'
import Cartitems from './Cartitems';

function Shoppingcart({isOpen}: {isOpen: boolean}) {
    const {closeCart, cartitems} = useShoppingcartcontext();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header closeButton> 
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartitems.length === 0 && <h1>There is no thing here yet.</h1>}
                {cartitems.map((item) =>{
                    return  <Cartitems key={item.id} {...item} />
                })}
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Shoppingcart