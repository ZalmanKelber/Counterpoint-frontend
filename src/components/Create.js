import React from "react";

import Navbar from "./Navbar";
import SelectType from "./SelectType";
import SelectMode from "./SelectMode";
import SelectRanges from "./SelectRanges";
import SelectCantusFirmusIndex from "./SelectCantusFirmusIndex";
import SelectLength from "./SelectLength";
import DisplayResult from "./DisplayResult";
import Footer from "./Footer";

import "../css/Create.css"

const phases = {
    SELECT_TYPE: "SELECT_TYPE",
    SELECT_MODE: "SELECT_MODE",
    SELECT_RANGES: "SELECT_RANGES",
    SELECT_CANTUS_FRMUS_INDEX: "SELECT_CANTUS_FIRMUS_INDEX",
    SELECT_LENGTH: "SELECT_LENGTH",
    DISPLAY_RESULT: "DISPLAY_RESULT"
}


class Create extends React.Component {

    //phase keeps track of which step the user is in, and thus which component should be rendered
    //selected values will form the JSON request sent to the backend

    state = {
        currentPhase: phases.SELECT_TYPE,
        selectedValues: {
            type: null, mode: null, lines: null, length: null, cantusFirmusIndex: 0
        }
    }

    //returns a function (to be passed down through props) that updates state by assining a value to a particular
    //category in selectedValues
    getUpdateFunction = parameterToChange => {
        const updateFunction = newValue => {
            this.setState({
                ...this.state,
                selectedValues: {
                    ...this.state.selectedValues,
                    [parameterToChange]: newValue
                }
            });
        }
        return updateFunction;
    }

    //returns a function (to be passed down through props) that changes state to the specificed phase
    getChangePhaseFunction = newPhase => {
        const getChangePhaseFunction = () => {
            this.setState({
                ...this.state,
                currentPhase: newPhase
            });
        }
        return getChangePhaseFunction;
    }

    //returns state to default values
    refreshState = () => {
        this.setState({
            currentPhase: phases.SELECT_TYPE,
            selectedValues: {
                type: null, mode: null, lines: null, length: null, cantusFirmusIndex: 0
            }
        })
    }

    //changes the phase twice in order to re-mount the DisplayResult component (and thus re-send the request to the backend called in 
    //that component's componentDidMount function)
    refreshDisplayResult = async () => {
        await this.setState({
            ...this.state,
            currentPhase: phases.SELECT_LENGTH
        });
        this.setState({
            ...this.state,
            currentPhase: phases.DISPLAY_RESULT
        });
    }

    render() {
        let DisplayComponent;
        let goForward;
        let goBackward;
        let updateValue;
        switch (this.state.currentPhase) {
            case phases.SELECT_TYPE:
                DisplayComponent = SelectType;
                goForward = this.getChangePhaseFunction(phases.SELECT_MODE);
                updateValue = this.getUpdateFunction("type");
                break;
            case phases.SELECT_MODE:
                DisplayComponent = SelectMode;
                goForward = this.getChangePhaseFunction(phases.SELECT_RANGES);
                goBackward = this.getChangePhaseFunction(phases.SELECT_TYPE);
                updateValue = this.getUpdateFunction("mode");
                break;
            case phases.SELECT_RANGES:
                DisplayComponent = SelectRanges;
                if (this.state.selectedValues.type.substring(this.state.selectedValues.type.length - 7) === "Species") {
                    goForward = this.getChangePhaseFunction(phases.SELECT_CANTUS_FRMUS_INDEX);
                } else {
                    goForward = this.getChangePhaseFunction(phases.SELECT_LENGTH);
                }
                goBackward = this.getChangePhaseFunction(phases.SELECT_MODE);
                updateValue = this.getUpdateFunction("lines");
                break;
            case phases.SELECT_CANTUS_FRMUS_INDEX:
                DisplayComponent = SelectCantusFirmusIndex;
                goForward = this.getChangePhaseFunction(phases.SELECT_LENGTH);
                goBackward = this.getChangePhaseFunction(phases.SELECT_RANGES);
                updateValue = this.getUpdateFunction("cantusFirmusIndex");
                break;
            case phases.SELECT_LENGTH:
                DisplayComponent = SelectLength;
                goForward = this.getChangePhaseFunction(phases.DISPLAY_RESULT);
                if (this.state.selectedValues.type.substring(this.state.selectedValues.type.length - 7) === "Species") {
                    goBackward = this.getChangePhaseFunction(phases.SELECT_CANTUS_FRMUS_INDEX);
                } else {
                    goBackward = this.getChangePhaseFunction(phases.SELECT_RANGES);
                }
                updateValue = this.getUpdateFunction("length");
                break;
            case phases.DISPLAY_RESULT:
                DisplayComponent = DisplayResult;
                break;
        } 

        return (
            <div className="main">
                <Navbar />
                <DisplayComponent
                    goForward={goForward}
                    goBackward={goBackward}
                    updateValue={updateValue}
                    currentSelections={this.state.selectedValues}
                    refreshState={this.refreshState}
                    refreshDisplayResult={this.refreshDisplayResult}
                />
                <Footer />
            </div>
        );
    }

}

export default Create 