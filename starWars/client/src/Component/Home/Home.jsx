import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'
import { getCharacters, filterGender } from '../Redux/action'
import Paginado from '../Paginado/Paginado'
import logo from "../Home/logo.png"
import './Home.css'



export default function Home() {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)
  const [current, setCurrent] = useState(1)
  const [characterPerPage] = useState(10)
  const indexOfLasCharacter = current * characterPerPage
  const indexOfFirstCharacter = indexOfLasCharacter - characterPerPage
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLasCharacter)

  const pag = (pageNumber) => {
    setCurrent(pageNumber)
  }

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters())
  }

  function handleFilterGender(e) {

    dispatch(filterGender(e.target.value))
  }

  return (
    <>
      <div className=' mt d-flex'>
        <img src={logo} alt="logo" className='w-25' />
      </div>
      <div className='mt-15'>
        <NavBar />
        <div>
          <div className='d-flex justify-content-around '>
            <select className=' rounded border-warning bg-dark bg-opacity-50 text-white mr-5 p-2' onChange={e => handleFilterGender(e)}>
              <option hidden>Gender:</option>
              <option value="All">All</option>
              <option value="female" >Female</option>
              <option value="male">Male</option>
              <option value="n/a">N/A</option>
            </select>
            <button className=' btn btn-outline-warning btn-sm bg-opacity-50' onClick={e => { handleClick(e) }}>Volver a cargar</button>
          </div>
          <br />
          <div className='d-flex flex-wrap justify-content-center '>
            {characters.length ?
              currentCharacters?.map(e => {
                return (
                  <div>
                    <div>
                      <div>
                        <Card id={e.id} name={e.name}
                          gender={e.gender} birth_year={e.birth_year}
                        />
                      </div>
                    </div>
                  </div>)
              }) : <div className='d-flex justify-content-center'>
                <img src="https://pa1.narvii.com/7617/5d11a14f5fa53c6b86b54e232cb8c0215d8fa15ar1-600-600_hq.gif" alt="no found" />
              </div>
            }
          </div>
        </div>
        <Paginado characters={characters.length} pag={pag} characterPerPage={characterPerPage} />
      </div>
    </>
  )
}
