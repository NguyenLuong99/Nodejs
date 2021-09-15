import React from "react";
class MiddleBottom extends React.Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4  bot-middle" >
                    <br/>
                <h3>LASTEST POST</h3>
                <br/>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bot-middle-top">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bot-middle-top-left">
                            <img src={`${process.env.PUBLIC_URL}/images/aokiyama.jpg`} alt="aokiyama"/>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 bot-middle-top-right">
                            <br/>
                            <h4> Cảnh sát điên</h4>
                            <h4>Võ sĩ Kengan hội</h4>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  bot-middle-top">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 bot-middle-top-left">
                            <img src={`${process.env.PUBLIC_URL}/images/muteba.jpg`} alt="aokiyama"/>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8  bot-middle-top-right">
                            <br/>
                            <h4>Lính đánh thuê</h4>
                            <h4>Võ sĩ Kengan hội</h4>
                        </div>
                    </div>
                </div>
        );
    }
}
export default MiddleBottom;
