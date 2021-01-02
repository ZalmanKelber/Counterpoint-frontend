import React from "react";

import SelectStepHeader from "./SelectStepHeader";

import "../css/SelectLength.css";

class SelectLength extends React.Component {

    handleClick = async newValue => {
        await this.props.updateValue(newValue);
        this.props.goForward();
    }

    render() {
        const stepNumber = this.props.currentSelections.type.
            substring(this.props.currentSelections.type.length - 7) === "Species" ? 5 : 4;

        const measureOptions = ["twoPartFreeCounterpoint", "twoPartImitativeCounterpoint"]
            .includes(this.props.currentSelections.type) ? [16, 17, 18] : [8, 9, 10, 11, 12]

        const stepTitle = `STEP ${stepNumber}: CHOOSE NUMBER OF MEASURES`
        return (
            <>
            <SelectStepHeader 
                stepTitle={stepTitle}
                showGoBackButton={true}
                goBackFunction={this.props.goBackward}
            />
            <div className="step-content">
                <div className="length-options">
                    {
                        measureOptions.map((measure, i) => {
                            return (
                                <div 
                                    key={i} 
                                    className="measure-option"
                                    onClick={() => this.handleClick(measure)}
                                >
                                    {measure}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            </>
        );
    }
}

export default SelectLength;