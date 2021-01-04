import React from "react";

class SelectStepHeader extends React.Component {

    render() {
        return (
            <>
            {
                this.props.showGoBackButton && 
                <div className="go-back-button" onClick={this.props.goBackFunction}>
                    &#x2190; 
                </div>
            }
            {
                !this.props.showGoBackButton && 
                <div className="back-button-placeholder">filler</div>
            }
            <h1 className="create-title">BUILD YOUR OWN EXAMPLE</h1>
            <h2 className="step-title">{this.props.stepTitle}</h2>
            <div className="step-description">{this.props.stepDescription}</div>
            <hr className="step-header-rule" />
            </>
        );
    }
}

export default SelectStepHeader;