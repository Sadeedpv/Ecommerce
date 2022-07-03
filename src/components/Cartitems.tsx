import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { useShoppingcartcontext } from '../context/ContextProvider';
import storeItems from '../data/Items.json'

function Cartitems({id, quantity}: {id: number, quantity: number}) {
    const {removeFromCart} = useShoppingcartcontext();
    const item =storeItems.find(item => item.id === id);
    if (!item) return null
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.imgUrl} style={{
            width:'125px',
            height:'75px',
            objectFit:'cover'
        }}/>
        <div className='me-auto'>
            <div>
                {item.name}{' '}
                {quantity > 1 && <span className='text-muted'>x{quantity}</span>}
            </div>
            <div>
                <span className='text-muted' style={{
                    fontSize: '0.75rem'
                }}>${item.price}</span>
            </div>
        </div>
        <div>
            <span className='text-muted'>${item.price * quantity}</span>
        </div>
        <Button variant='outline-danger' size='sm' onClick={() =>{
            removeFromCart(item.id);
        }} >&times;</Button>
    </Stack>
  )
}

export default Cartitems