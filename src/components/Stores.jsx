import React, { useContext } from 'react'
import { BBContext } from '../context/context'
import './Stores.scss'

const Stores = () => {
  const {stores} = useContext(BBContext);
  return (
    <div className='stores'>
      {stores.map((store) => (
        <div className='cardStore'>
          <p key={store.id}>{store.name}</p>
          <img src={store.image} alt={store.name}></img>
        </div>
      ))}
    </div>
  )
}

export default Stores