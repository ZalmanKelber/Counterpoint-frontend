import React from "react";

import SelectStepHeader from "./SelectStepHeader";

import "../css/SelectCantusFirmusIndex.css";

class SelectCantusFirmusIndex extends React.Component {

    handleClick = async newValue => {
        await this.props.updateValue(newValue);
        this.props.goForward();
    }

    render() {
        const stepTitle = "STEP 4: CHOOSE ORIENTATION";
        return (
            <>
            <SelectStepHeader 
                stepTitle={stepTitle}
                showGoBackButton={true}
                goBackFunction={this.props.goBackward}
            />
            <div className="step-content">
                <div className="cantus-firmus-index-options">
                    <div className="cantus-firmus-index-option" onClick={() => this.handleClick(0)}>
                        Top line: Counterpoint<br />Bottom line: Cantus Firmus
                    </div>
                    <div className="cantus-firmus-index-option" onClick={() => this.handleClick(1)}>
                        Top line: Cantus Firmus<br />Bottom line: Counterpoint
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SelectCantusFirmusIndex;