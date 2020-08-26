import React from "react"
import {Link} from "Gatsby"
import Header from ".components/header"

export default function Contact() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>txt me</p>
        </div>
    )
}