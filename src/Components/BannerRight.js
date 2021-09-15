import React from "react";
class BannerRight extends React.Component{
    render(){
        return(
            <div className="banner_right">
                <img src= {`${process.env.PUBLIC_URL}/images/raian_1.jpg`} alt="Tokita Ohma"/>
            </div>
        );
    }
}
export default BannerRight;