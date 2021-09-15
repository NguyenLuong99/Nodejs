import React from "react";
class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div id="myCarousel" className="carousel slide" data-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                        <img  src={`${process.env.PUBLIC_URL}/images/Kengan Omega.jpg`} alt="Los Angeles" />
                        </div>

                        <div className="item">
                        <img src={`${process.env.PUBLIC_URL}/images/Ohma.jpg`} alt="Los Angeles" />
                        </div>

                        <div className="item">
                        <img src={`${process.env.PUBLIC_URL}/images/putagory.jpg`} alt="Los Angeles" />
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}
export default Banner;