import React from "react";

class SelectStepHeader extends React.Component {

    render() {
        return (
            <>
            {
                this.props.showGoBackButton && 
                <div className="go-back-button" onClick={this.props.goBackFunction}>
                    &#x2190; previous step
                </div>
            }
            <h1 className="create-title">BUILD YOUR OWN EXAMPLE</h1>
            <h2 className="step-title">{this.props.stepTitle}</h2>
            </>
        );
    }
}

export default SelectStepHeader;