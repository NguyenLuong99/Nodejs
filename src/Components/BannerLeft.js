import React from "react";
class BannerLeft extends React.Component{
    render(){
        return(
            <div className="banner_left">
                <img src= {`${process.env.PUBLIC_URL}/images/ohma_1.jpg`} alt="Tokita Ohma"/>
            </div>
        );
    }
}
export default BannerLeft;