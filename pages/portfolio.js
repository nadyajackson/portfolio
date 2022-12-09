import React, { useContext } from "react";
import Image from 'next/image'
import {PageContext} from '../pages/paginationContext';

function Portfolio() {
  const {page} = useContext(PageContext)
  return (
    <div>
        <h1>Title</h1>
      {console.log(page)}
        <Image src="/smirk.jpg"  layout='raw' width= "100%" height="100%" 
            alt="picture of nadya jackson holding a stack of books"
            className="pImg img-fluid rounded-circle"/>
        <div>
            <h3>Info</h3>
            <p>Program :</p>
            <p>Database :</p>
            <p></p>
        </div>
    </div>
  )
}

export default Portfolio