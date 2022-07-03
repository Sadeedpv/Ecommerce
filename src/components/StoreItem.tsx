import React from 'react'
import { Card, Button} from 'react-bootstrap'
import { useShoppingcartcontext } from '../context/ContextProvider'

type StoreItemsprops = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function StoreItem({id, name, price, imgUrl}:StoreItemsprops) {
 
    const { increasecardQuantity, decreasecardquantity, getItemquantity, removeFromCart } = useShoppingcartcontext();
    const quantity = getItemquantity(id);
  return (
    <>
        <Card className='mt-3'>
            <Card.Img variant="top" src={imgUrl} height='300px' style={{objectFit:'cover'}} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>${price}</span>

                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (<Button  className='w-100' onClick={() =>{
                        increasecardQuantity(id);
                    }}>Add to cart + </Button>):
                    (
                        <div className='d-flex flex-column align-items-center' style={{ gap: ".5rem" }}>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                            <Button  onClick={() =>{
                        decreasecardquantity(id);
                    }} >-</Button>
                                <div>
                                <span className="ps-3 pe-3 pb-5">{quantity}</span> 
                                </div>
                            <Button  onClick={() =>{
                        increasecardQuantity(id);
                    }}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() =>{
                                removeFromCart(id);
                            }}>Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default StoreItem