import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../user/Footer'
const Signup = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
                <div className="col-md-6 offset-md-3 mb-5 shadow-lg p-3">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" name="firstname" placeholder="FirstName" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="lasttname">LastName</label>
                            <input type="text" name="lastname" placeholder="lastName" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" placeholder="Email address" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" name="cpassword" placeholder="Confirm Password" className="form-control"/>
                        </div>

                        <button className="btn btn-primary">Signup</button>
                   
                    </form>


                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Signup
