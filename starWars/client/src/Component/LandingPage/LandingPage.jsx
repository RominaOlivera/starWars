import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from "../Home/logo.png"




export default function LandingPage() {
    return (
        <div><div className='d-flex '>
            <img src={logo} alt="logo" className='m w-50' />
        </div>
            <h1 className='text-white h4 text-center m-5'>Do you want to know more about your favorite characters?</h1>
            <Link to="/Home" className="text-decoration-none"><button className='btn btn-outline-warning btn-sm p-3 d-flex ml'>Go!</button></Link>
        </div>
    )
}
