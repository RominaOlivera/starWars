import React from 'react'
import "./Card.css"
export default function Card({name,birth_year,gender,id}) {
  return (
    <div className="card-dody text-white ">
        <div className='card p-3 m-3 bg-dark bg-opacity-50'>
        <h5 className='card-title text-center'>{name}</h5>
        <div className='card-content'>
        <h6><span>Birth year : </span>{birth_year}</h6>
        <h6><span>Gender : </span>{gender}</h6>
    
        </div>
        <a href={id} className='btn btn-outline-warning btn-sm justify-content-center'>See more</a>
        </div>

    </div>
  )
}
