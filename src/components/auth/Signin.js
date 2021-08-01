import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../user/Footer'
const Signin = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="col-md-6 offset-md-3 mb-5 shadow-lg p-3">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" className="form-control"/>
                        </div>
                        <button className= "btn btn-primary">Signin</button>


                     </form>  
                 </div>
            </div>
            <Footer/>
        </>
    )
}

export default Signin
