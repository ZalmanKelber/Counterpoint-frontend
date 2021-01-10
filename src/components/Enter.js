import React from "react";
import { Link } from "react-router-dom";

import "../css/Enter.css"

class Enter extends React.Component {


    render() {

        return (
                <div className="enter">
                    <Link to="/landing">
                    <div className="click-to-enter">
                        COUNTERPOINT GENERATOR<br />
                       <hr />
                        CLICK TO ENTER
                    </div>
                    </Link>
                </div>
        );
    }

}

export default Enter