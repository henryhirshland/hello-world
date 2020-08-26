import React from "react"
import {Link} from "gatsby"
import Header from "./components/header"


export default function Home() {
  return(
    <div>
      <h1 style={{color:'purple', fontSize: '72px'}}>Hello World</h1>
      <Link to="/contact/">Contaccc</Link>
      <p style={{color:'orange'}}>My name is Henry</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
