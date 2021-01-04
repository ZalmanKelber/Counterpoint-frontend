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

    handleClick = async (vocalRange, i) => {
        if (this.getNumberOfLines() === 2) {
            switch (i) {
                case 0:
                    await this.props.updateValue(["alto", "soprano"]);
                    break;
                case 1:
                    await this.props.updateValue(["tenor", "alto"]);
                    break;
                default:
                    await this.props.updateValue(["bass", "tenor"]);
            }
        } else {
            await this.props.updateValue([vocalRange]);
        }
        this.props.goForward();
    }

    render() {
        const vocalRangesList = this.getNumberOfLines() === 2 ? [["soprano", "alto"], ["alto", "tenor"], ["tenor", "bass"]]: [["soprano"], ["alto"], ["tenor"], ["bass"]];
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
                                    <div 
                                        key={i}
                                        className="range-list" 
                                        onClick={this.getNumberOfLines() === 2 ? () => this.handleClick("", i) : null}
                                    >
                                        {
                                            vocalRanges.map((vocalRange, j) => {
                                                const classList = "range " + vocalRange
                                                return (
                                                <div key={j}>
                                                <div className={classList} onClick={() => this.handleClick(vocalRange, i)}>
                                                    <div className="range-text">{vocalRange.toUpperCase()}</div>
                                                </div>
                                                {
                                                    this.getNumberOfLines() === 2 && j !== vocalRanges.length - 1 && 
                                                    <div className="between-ranges">and</div>
                                                }
                                                </div>
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