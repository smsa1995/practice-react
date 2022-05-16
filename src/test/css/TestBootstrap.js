import React from 'react'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function TestBootstrap() {


    return (

        <div className="container-fluid ">

            <div className="container mt-5 ">
                <div className="alert alert-success float-right "
                     role="alert"
                >
                    {/*hello world!    this is successfully alert!*/}

                    <button type="button" className="close pull-left"
                            data-dismiss="alert"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <span className="pull-right">این فرم با موفقیت اپدیت شده است!</span>

                </div>
            </div>

        </div>

        // <div id="div2" className="alert alert-info rtl">
        //     هذا هو بلدي وصف الهوى
        //     <span className="badge badge-info">122</span>
        //     <a className="btn btn-lg pull-right" style={{padding: "0"}}
        //        data-toggle="collapse" data-target="#aaa">
        //         <i className="glyphicon glyphicon-chevron-down twitp_toggleable_chevron"></i>
        //     </a>
        // </div>

    )
}


export default TestBootstrap