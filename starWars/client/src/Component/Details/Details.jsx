import React from 'react'
import { getDetail } from '../Redux/action'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import logo from "../Home/logo.png"



export default function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams();

    const detailCharacters = useSelector((state) => state.detail)


    useEffect(() => {
        dispatch(getDetail(id))

    }, [dispatch, id])



    return (

        <div>
            <div className=' mt d-flex'>
                <img src={logo} alt="" className='justify-content-center w-25' />
            </div>
            {detailCharacters.name ?
                <div>
                    <div className="detail d-flex mt-15 text-white justify-content-center p-3 ">

                        <div className='border rounded border-warning p-3 bg-dark bg-opacity-50 '>
                            <h5><span>Name : </span>{detailCharacters.name}</h5>
                            <h5><span>Birth year : </span> {detailCharacters.birth_year}</h5>
                            <h5><span>Gender : </span>{detailCharacters.gender}</h5>
                            <h5><span>Mass : </span>{detailCharacters.mass}</h5>
                            <h5><span>Hair color : </span>{detailCharacters.hair_color}</h5>
                            <h5><span>Skin color : </span>{detailCharacters.skin_color}</h5>
                            <h5><span>Homeworld : </span>{detailCharacters.homeworld}</h5>

                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <Link to="/home"><button className=' btn btn-outline-warning btn-sm'>Volver</button></Link>
                    </div>
                </div>
                :
                <div className='d-flex justify-content-center'>
                    <img src="https://pa1.narvii.com/7617/5d11a14f5fa53c6b86b54e232cb8c0215d8fa15ar1-600-600_hq.gif" alt="no found" />
                </div>
            }

        </div>
    )
}
