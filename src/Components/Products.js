import React from "react";
class Products extends React.Component{
  render(){
      return(
         
         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 container">
             <div className="thumbnail">
                <img src={`${process.env.PUBLIC_URL}/images/${this.props.image}`} alt="kengan"/>
                 <div className="caption">
                     <h3>{this.props.name}</h3>
                     <p>
                        {this.props.des}
                     </p>
                     <p>
                         <a href="#/" className="btn btn-primary">Read</a>
                         <a href="#/" className="btn btn-default">Buy</a>
                     </p>
                 </div>     
                 
                 
             </div>
             
         </div>
         
      );
  }
}
export default Products;