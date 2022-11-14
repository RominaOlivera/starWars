import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { getFilterName } from '../Redux/action'



export default function NavBar() {
  const dispatch = useDispatch()
  const [name, setname] = useState("")


  function handleInputChange(e) {
    e.preventDefault()
    setname(e.target.value)
    //   refresc()

  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getFilterName(name))

  }

  return (

    <div>
      <div className='d-flex  justify-content-center p-3'>
        <input className="rounded border-warning btn-lg w-25 bg-dark bg-opacity-50 text-white" type="text"
          placeholder='Look for your favorite character..'
          onChange={e => handleInputChange(e)}
        ></input>
        <button className='btn btn-outline-warning btn-sm' type="submit" onClick={(e) => handleSubmit(e)}>Search</button>

        <ul>
        </ul>
      </div>
    </div>


  )
}


