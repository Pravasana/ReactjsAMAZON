import React from 'react'
import Contactform from './Contactform'
import Map from './Map'
import Navbar from '../layouts/Navbar'

export const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
     
     <center><h1 className="text-warning p-3">Contact Us</h1></center>
                <div className="row">
                    <div className="col-md-6 shadow ">
                        <Contactform/>
                    </div>
                    <div className="col-md-6">
                        <Map/>
                    </div>
                </div>


            </div>
                
        </>
    )
}
