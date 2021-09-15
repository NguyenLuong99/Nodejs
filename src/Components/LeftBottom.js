import React from "react";
class LeftBottom extends React.Component{
    render(){
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4  bot-left" >
            <br/>
            <h3>NOGUL</h3><br/><br/>
            <p>Insecurity is a waste of time. When I was young, <br/>I lived like an old man, and when I got old, I had to <br/>live like young person. Lorem ipsum dolor sit amet,
            <br/> consec adipiscinglit. Aenean commodo</p>
            <br/>
            <div className="row bot-icon">
                <img src= {`${process.env.PUBLIC_URL}/images/fb.PNG`} alt="fb_icon"/>
                <img src={`${process.env.PUBLIC_URL}/images/twitter_icon.PNG`} alt="twitter_icon"/>
                <img src={`${process.env.PUBLIC_URL}/images/gg_icon.PNG`} alt="gg_icon"/>
                <img src={`${process.env.PUBLIC_URL}/images/ins_icon.PNG`} alt="ins_icon"/>
                <img src={`${process.env.PUBLIC_URL}/images/print_icon.PNG`}alt="pr_icon"/>
            </div>
            <br/>
            <p>Copyright © 2016 ThemeSphere. All rights reserved.<br/> Designed by NguyenLuong.</p>
            </div>
            
        );
    }
}
export default LeftBottom;
