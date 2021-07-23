/*!
* Start Bootstrap - Shop Homepage v5.0.2 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
import React, { Component } from 'react'
import './styletask6.css'



class Task6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            enablecart:false,
            count:0,
            params:[{
                ratingval:0,
             enable:true,
             rating:false,
             Name:"Fancy Product1",
             cost:"$40.00 - $80.00",
             option:{option1:"Add to Cart",option2:"Remove from Cart"},
             sale:false,
             cartitem:""
             
            },{ratingval:0,
                enable:true,
                rating:true,
                Name:"Special Item1",
                cost:"$20.00 $18.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:true,
                cartitem:""
             },
             {  ratingval:0,
                enable:true,
                rating:false,
                Name:"Sale Item1",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:true,
                cartitem:""
             },
             {  ratingval:0,
                enable:true,
                rating:true,
                Name:"Popular Item1",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:false,
                cartitem:""
             },
             {  ratingval:0,
                enable:true,
                rating:false,
                Name:"Fancy Product2",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:true,
                cartitem:""
             },
             {  ratingval:0,
                enable:true,
                rating:false,
                Name:"Sale Item2",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:false,
                cartitem:""
             },
             { ratingval:0,
                enable:true,
                rating:true,
                Name:"Fancy Product2",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:true,
                cartitem:""
             }, {
                ratingval:0,
                enable:true,
                rating:true,
                Name:"Papular Item2",
                cost:"$40.00 - $80.00",
                option:{option1:"Add to Cart",option2:"Remove from Cart"},
                sale:false,
                cartitem:""
             }

        ]}}
        // countfun=(event)=>{
        //     console.log(event.target.id)
            
        //     document.getElementById(event.target.id).disabled = true;
        // }
    
    btn1=(event)=>{
        const {params}=this.state
        console.log(event.target.id)
        
        const index = this.state.params.findIndex((params) => params.Name == event.target.id);
        params[index].enable = !params[index].enable;
        const item=<p><p className="item">{event.target.id} </p><p><div  id={event.target.id}  className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="disabled"  id={event.target.id}  className="text-center"><a   id={event.target.id} onClick={this.decrement}  
        className="btn btn-primary btn-lg "   href="#" > Remove From Cart</a></div>
    </div></p> </p>
        params[index].cartitem = item
    
    console.log(item)
                this.setState({...this.state,params,count:this.state.count+1})
       }
        
       decrement=(event)=>{
        const {params}=this.state
        console.log(event.target.id)
        const item=""
        const index = this.state.params.findIndex((params) => params.Name == event.target.id);
        params[index].enable = !params[index].enable;
        params[index].cartitem = item;
       
                this.setState({...this.state,params,count:this.state.count-1})
       }
       cart=()=>{
        const enablecart1=!this.state.enablecart
           this.setState({...this.state.enablecart,
           enablecart:enablecart1
        })
       }
     post=({target:{name,value,id}})=>{
        const {params}=this.state
        console.log(name,value,id)
        value=Math.round(value)
        const index = this.state.params.findIndex((params) => params.Name ==id);
        console.log(index)
        params[index].ratingval = value;
        this.setState({ ...this.state,params})
    }
    
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button onClick={this.cart} className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{this.state.count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {//<!-- Header-->
        }
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <br></br>
        {this.state.enablecart?
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                   {this.state.params.map((params)=>{return(
                   <p className="lead fw-normal text-white-50 mb-0">{params.cartitem}</p>)
                   })}
                   {this.state.count? "":<p className="item">The cart is empty</p>}
                    
                </div>
            </div>
        </header>:<></>}
       {// <!-- Section-->
    }
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        this.state.params.map(({enable,Name,cost,option,rating,sale,ratingval})=>{
                     return(
                      
                    <div className="col mb-5">
                    
                        <div className="card h-100">
                            { sale? 
                        <div className="badge bg-dark text-white position-absolute" props="top: 0.5rem; right: 0.5rem">Sale</div>:""
                           }
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                 
                                    <h5 className="fw-bolder">{Name}</h5>
                                   {
                                   (rating) ?"":<div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className={ratingval>4 ?"bi-star-fill":"bi-star"}></div>
                                        <div className={ratingval>3 ?"bi-star-fill":"bi-star"}></div>
                                        <div className={ratingval>2 ?"bi-star-fill":"bi-star"}></div>
                                        <div className={ratingval>1 ?"bi-star-fill":"bi-star"}></div>
                                        <div className={ratingval>0 ?"bi-star-fill":"bi-star"}></div>
                                        
                                        <input type="number" id={Name} name="ratingval" onChange={this.post} placeholder="Rate Out of 5"></input>
                                    </div>}
                                   
                                    {cost}
                                </div>
                            </div>
                          {  //<!-- Product actions-->
    }
    
                            <div  id={Name}  className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="disabled"  id={Name}  className="text-center"><a   id={Name} onClick={this.btn1}  
                                className={enable ?"btn btn-primary btn-lg ":"btn btn-primary btn-lg disabled" }  href="#" >{option.option1}</a></div>
                            </div>
                            
                           
                            
                        </div>
                    </div>)
                      })
                }
                   
                </div>
            </div>
        </section>
       
        <footer class="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      
        <script src="js/scripts.js"></script>
            </div>
        )
    }
}

export default Task6

