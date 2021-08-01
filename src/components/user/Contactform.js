import React from 'react'
import Navbar from '../layouts/Navbar'

const Contactform = () => {
    return (
        <>
      

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
                            <label htmlFor="phone">Phone Number</label>
                            <input type="password" name="password" placeholder="contact number" className="form-control"/>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" placeholder="your message..."></textarea>
                        </div>

                        <button className="btn btn-primary">Send</button>
                   
                    </form>
        </>
    )
}

export default Contactform
