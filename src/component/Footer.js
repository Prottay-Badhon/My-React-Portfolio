import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Footer extends Component {
    render() {
        return (
            <>
                <div className="" style={{background: "#090c33"}}>
                <div className="container text-center">
                    <div className="row align-items-center" style={{height: "500px"}}>
                        <div className="col-lg-12 text-light ">
                            <h3 className="px-5" style={{}}>PORTFOLIO</h3>
                            <div className="py-3" style={{}}>
                                <h1>Badhon</h1>
                               <p>#Nuralam Cottage,Zero point,Chittagong Varsity</p>
                            </div>
                            <div className="mt-4">
                               <p> Copyright to prottaybadhon54@gmail.com </p>
                            </div>
                        </div>
                    </div>

                 </div>
                </div>
            </>
        );
    }
}

export default Footer;