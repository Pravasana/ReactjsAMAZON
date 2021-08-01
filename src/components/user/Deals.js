import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from './Footer'
const Deals = () => {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <h3>Deals and Promotions</h3>
                    <span>Shop Today's Deals, Lightning Deals, and limited time discounts</span>
                    <div className="col-md-2 p-3 shadow-lg" style={{backgroundColor:'#f5f5f5'}}>
                         <h4> Categories</h4>
                         <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Mobile
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Laptop
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Books
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Fashion
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Camera
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Printer
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Fan
                                    </label>
                                    
                            </div>
                           <Link to="#" className="text-decoration-none" >See more category</Link>
                         </form>
                         <h5 className="mt-2">Deal Type</h5>
                         
                            <Link to="#" className=" text-decoration-none">
                                 Deal of the day
                                 </Link><br/>
                           
                            <Link to="#" className=" text-decoration-none">
                                Lightening Deals
                                 </Link><br/>
                            
                           <Link to="#" className=" text-decoration-none">
                                 Savings and sales
                                 </Link><br/>
                           
                          <Link to="#" className=" text-decoration-none">
                                 Prime early Access Deals
                                 </Link><br/>
                          
                        <h5 className="mt-2">Availability</h5>
                        <Link to="" className="text-decoration-none">Clear</Link>
                        <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Active
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Upcomming
                                    </label>
                                    
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                       Missed
                                    </label>
                                    
                            </div>

                        <h5 className="mt-2">Price</h5>
                        <Link to="#" className=" text-decoration-none">
                        Under $25
                                 </Link><br/>
                           
                            <Link to="#" className=" text-decoration-none">
                            $25 to $50
                                 </Link><br/>
                            
                           <Link to="#" className=" text-decoration-none">
                           $50 to $100
                                 </Link><br/>
                           
                          <Link to="#" className=" text-decoration-none">
                          $100 to $200
                       
                                 </Link><br/>
                        <Link to="#" className=" text-decoration-none">
                         
                          $200 & Above
                                 </Link><br/>
                    
                                 <h5 className="mt-2">Discount</h5>
                        <Link to="#" className=" text-decoration-none">
                        10% Off or More
                                 </Link><br/>
                           
                            <Link to="#" className=" text-decoration-none">
                            25% Off or More
                                 </Link><br/>
                            
                           <Link to="#" className=" text-decoration-none">
                           50% Off or More
                                 </Link><br/>
                           
                          <Link to="#" className=" text-decoration-none">
                          70% Off or More
                       
                                 </Link><br/>
                                 
                        <h5 className="mt-2">Average customer Review</h5>
                      
                        <i class="bi bi-star"  style={{backgroundColor:'yellow'}}></i><i class="bi bi-star text-warning bg-warning"></i><i class="bi bi-star text-warning"></i><i class="bi bi-star text-warning"></i><i class="bi bi-star  ">&nbsp;</i><Link to="#" className=" text-decoration-none">
                         & Up
                        </Link><br/>
                        <i class="bi bi-star text-warning"></i><i class="bi bi-star text-warning"></i><i class="bi bi-star text-warning"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><Link to="#" className=" text-decoration-none">
                         & Up
                        </Link><br/>
                        <i class="bi bi-star text-warning"></i><i class="bi bi-star text-warning"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><Link to="#" className=" text-decoration-none">
                         & Up
                        </Link><br/>
                        <i class="bi bi-star text-warning"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> <Link to="#" className=" text-decoration-none">
                         & Up
                        </Link><br/>

                     </div>

                <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
  <div className="col ">
    <div className="card shadow">
      <img src="images/g1.jpg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/g.jpg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/wallpaper.jpg" className="card-img-top" alt="..."style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
    
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/winter.jpeg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/dog.jpg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/cat.jpeg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
   
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card shadow">
      <img src="images/bird.jpg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="images/ab1.jpg" className="card-img-top" alt="..." style={{height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="btn btn-warning">Add To Cart</button>
   
      </div>
    </div>
  </div>
  ----------------
</div>
                </div> 
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Deals
