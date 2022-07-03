import React from 'react'
import { Row, Col} from 'react-bootstrap'
import storeItems from '../data/Items.json'
import StoreItem from './StoreItem'

function Store() {
  return (
    <>
        <h1 className='ps-5 pt-4'>Store</h1>
        <Row md='2' xs='1' lg='3' className='ms-3'>
            {storeItems.map(item =>{
                return (<Col key={item.id}><StoreItem {...item}/></Col>)
            })}
        </Row>
    </>
  )
}

export default Store