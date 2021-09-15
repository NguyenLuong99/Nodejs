import React from "react";
class TopHeader extends React.Component{
    render(){
        return(
            <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#/">KENGAN NOGUL</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#/">Home</a></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#/">Category <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Action</a></li>
                      <li><a href="#/">Adult</a></li>
                      <li><a href="#/">Drama</a></li>
                    </ul>
                  </li>
                  <li><a href="#/">Contact</a></li>
                  <li><a href="#/">More</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        );
    }
}
export default TopHeader;
