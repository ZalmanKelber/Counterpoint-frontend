import React from "react";
import { Link } from "react-router-dom";

import "../css/Enter.css"

class Enter extends React.Component {


    render() {

        return (
            <Link to="/landing">
                <div className="enter">
                    <div className="click-to-enter">
                        COUNTERPOINT GENERATOR<br />
                       <hr />
                        CLICK TO ENTER
                    </div>
                </div>
            </Link>
        );
    }

}

export default Enter