import React from "react"

export default function Paginado({characters, pag,characterPerPage}){

    const pageNumber=[]
    
    for (let i=1; i<=Math.ceil(characters/characterPerPage); i++) {
        pageNumber.push(i);        
    }

    return (

        <nav>
            <ul className="d-flex justify-content-center ">
                {pageNumber.length? 
                pageNumber.map(number=>(
                   
                    <li className="number list-unstyled" key= {number}>
                    <button className="btn btn-outline-warning btn-sm m-2 m-3"onClick={()=> pag(number)}>{number}</button>
                    </li>
                )):null}
            </ul>
        </nav>
    )
}