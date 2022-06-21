import React, { useContext } from 'react'
import { BBContext } from '../context/context'

const Burgers = () => {
    const {burgers} = useContext(BBContext)
  return (
    <div>
        {burgers.map((burger) => (
          <>
            <p key={burger.id}>{burger.name}</p>
            <p key={burger.id}>{burger.price}</p>
            </>
        ))}
    </div>
  )
}

export default Burgers