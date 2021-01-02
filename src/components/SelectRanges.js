import React from "react";

import SelectStepHeader from "./SelectStepHeader";

import "../css/SelectRanges.css";

class SelectRanges extends React.Component {

    state = {
        selected: [],
        selectedIndex: null
    }

    handleSubmit = async () => {
        await this.props.updateValue(this.state.selected);
        this.props.goForward();
    }

    getNumberOfLines = () => {
        return ["cantusFirmus", "freeMelody"].includes(this.props.currentSelections.type) ? 1 : 2;
    }

    getClassList = (vocalRange, i) => {
        if (this.getNumberOfLines() === 1) return this.state.selected.includes(vocalRange) ? "range selected-range" : "range";
        return this.state.selectedIndex === i ? "range selected-range" : "range";
    }

    handleClick = (vocalRange, i) => {
        let rangeList = [vocalRange]
        if (this.getNumberOfLines() === 2) {
            switch (i) {
                case 0:
                    rangeList = ["alto", "soprano"];
                    break;
                case 1:
                    rangeList = ["tenor", "alto"];
                    break;
                default:
                    rangeList = ["bass", "tenor"];
            }
        } 
        this.setState({ ...this.state, selected: rangeList, selectedIndex: i });
    }

    render() {
        const vocalRangesList = this.getNumberOfLines() === 2 ? [["soprano", "alto"], ["alto", "tenor"], ["tenor", "bass"]]: [["soprano", "alto", "tenor", "bass"]];
        const instructionString = this.getNumberOfLines() === 2 ? "TWO VOCAL RANGES" : "A VOCAL RANGE";
        const stepTitle = `STEP 3: CHOOSE ${instructionString}`
        return (
            <>
            <SelectStepHeader 
                stepTitle={stepTitle}
                showGoBackButton={true}
                goBackFunction={this.props.goBackward}
            />
            <div className="step-content">
                <div className="choose-range-content">
                    <div className="ranges-container">
                        {
                            vocalRangesList.map((vocalRanges, i) => {
                                return (
                                    <div className="ranges-list" key={i}>
                                        {
                                            vocalRanges.map((vocalRange, j) => {
                                                const classList = this.getClassList(vocalRange, i);
                                                return (
                                                <div key={j} className={classList} onClick={() => this.handleClick(vocalRange, i)}>{vocalRange.toUpperCase()}</div>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="continue-button" onClick={this.handleSubmit} style={{ display: this.state.selected.length === 0 ? "none" : "block" }}>
                        Continue
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SelectRanges;