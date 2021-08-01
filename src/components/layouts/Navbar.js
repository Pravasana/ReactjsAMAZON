import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=> {
    return (
        <>
<div className="container-fluid">
   <div className="row align-items-center" style={{backgroundColor:'#131921'}}>
        <div className="col-md-8">


          <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-warning" type="submit">Search</button>
           </form>
        </div>
        <div className="col-md-4">
          <ul className="d-flex">
              <li className="list-unstyled"><Link to="/signup" className="text-decoration-none text-white px-2"><i className="bi bi-person-plus-fill" style={{color:'orange', fontSize:'20px'}}></i> &nbsp; Signup</Link></li>
              <li className="list-unstyled"><Link to="/signin" className="text-decoration-none text-white px-2"><i class="bi bi-box-arrow-in-right" style={{color:'orange', fontSize:'20px'}}></i> &nbsp; Signin</Link></li>
            <li className="list-unstyled"><Link to="" className="text-decoration-none px-2"><i class="bi bi-cart-fill" style={{color:'orange', fontSize:'25px'}}></i><sup style={{fontSize:'10px',color:'white', backgroundColor:'red', borderRadius:'50%', Padding:'3px'}}>5</sup></Link></li>

          </ul>
              
        </div>
    </div>
</div>  
          
          
           <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#232f3e'}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Online Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/deals">Deals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catogory
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Mobile</Link></li>
            <li><Link className="dropdown-item" to="#">Laptop</Link></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><Link className="dropdown-item" to="#">Printer</Link></li>
            <li><Link className="dropdown-item" to="#">Camera</Link></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav> 
        </>
    )
}

export default Navbar
