import React from "react";

import SelectStepHeader from "./SelectStepHeader";

import "../css/SelectType.css";

class SelectType extends React.Component {

    handleClick = async newValue => {
        await this.props.updateValue(newValue);
        this.props.goForward();
    }

    render() {

        const stepTitle = "STEP 1: CHOOSE TYPE";
        const stepDescription = `Select a type of counterpoint exercise to generate. \r\n
                                This will be a short musical composition in the style of the Italian Renaissance composer Giovanni Pierluigi da Palestrina.`

        return (
            <>
            <SelectStepHeader 
                stepTitle={stepTitle}
                showGoBackButton={false}
                stepDescription={stepDescription}
            />
            <div className="step-content">
                <div className="show-types">
                    <div className="type-title solo-melody-title">Solo Melodies:</div>
                    <div className="type-selection-container">
                        <div className="type-selection cantus-firmus" onClick={() => this.handleClick("cantusFirmus")}>
                            <div className="type-name">Cantus Firmus</div>
                            <span className="complexity-warning">(takes about 1-5 seconds)</span>
                            <div className="type-description">Simple whole-note melody that exemplifies the most basic rules of 
                            melody in <a href="https://en.wikipedia.org/wiki/Giovanni_Pierluigi_da_Palestrina" onClick={e => e.stopPropagation()} target="_blank">
                                Palestrina-style
                                </a>
                            </div>
                            <div className="preview-image cantus-firmus-preview" ></div>
                        </div>
                        <div className="type-selection free-melody" onClick={() => this.handleClick("freeMelody")}>
                            <div className="type-name">Free Melody</div>
                            <span className="complexity-warning">(takes about 1-10 seconds)</span>
                            <div className="type-description">Complete melody with different rhythmic values; displays all the rules of 
                            melody in Palestrina-style
                            </div>
                            <div className="preview-image free-melody-preview" ></div>
                        </div>
                    </div>
                    <hr />
                    <div className="type-title species-counterpoint-title">Species 
                        Counterpoint: <br />
                    </div>
                    <div className="type-selection-container">
                        <div className="type-selection first-species" onClick={() => this.handleClick("twoPartFirstSpecies")}>
                            <div className="type-name">First Species</div>
                            <span className="complexity-warning">(takes about 5-10 seconds)</span>
                            <div className="type-description">Whole-note melody set against a Cantus Firmus; exemplifies the most basic rules of harmony:
                            all intervals between two simultaneous notes are <a href="https://en.wikipedia.org/wiki/Consonance_and_dissonance" onClick={e => e.stopPropagation()} target="_blank">
                                consonant
                                </a>
                            </div>
                            <div className="preview-image first-species-preview" ></div>
                        </div>
                        <div className="type-selection second-species" onClick={() => this.handleClick("twoPartSecondSpecies")}>
                            <div className="type-name">Second Species</div>
                            <span className="complexity-warning">(takes about 5-15 seconds)</span>
                            <div className="type-description">Half-note melody set against a Cantus Firmus; exemplifies simplest rules 
                            of <a href="https://en.wikipedia.org/wiki/Consonance_and_dissonance" onClick={e => e.stopPropagation()} target="_blank">
                                dissonance
                                </a> in harmony: dissonances only occur on weak beats
                            </div>
                            <div className="preview-image second-species-preview" ></div>
                        </div>
                        <div className="type-selection third-species" onClick={() => this.handleClick("twoPartThirdSpecies")}>
                            <div className="type-name">Third Species</div>
                            <span className="complexity-warning">(takes about 5-20 seconds)</span>
                            <div className="type-description">Quarter-note melody set against a Cantus Firmus; exemplifies more complex rules of dissonance in harmony:
                            several types of dissonance occur on weak beats</div>
                            <div className="preview-image third-species-preview" ></div>
                        </div>
                        <div className="type-selection fourth-species" onClick={() => this.handleClick("twoPartFourthSpecies")}>
                            <div className="type-name">Fourth Species</div>
                            <span className="complexity-warning">(takes about 20-30 seconds)</span>
                            <div className="type-description">Half-note and syncopated whole-note melody set against a Cantus Firmus; 
                            dissonances can occur on strong beats in the form of suspensions</div>
                            <div className="preview-image fourth-species-preview" ></div>
                        </div>
                        <div className="type-selection fifth-species" onClick={() => this.handleClick("twoPartFifthSpecies")}>
                            <div className="type-name">Fifth Species</div>
                            <span className="complexity-warning">(takes about 5-30 seconds)</span>
                            <div className="type-description">Free melody set against a Cantus Firmus; combines all rules of dissonance and harmony</div>
                            <div className="preview-image fifth-species-preview" ></div>
                        </div>
                    </div>
                    <hr />
                    <div className="type-title two-part-counterpoint-title">Two Part 
                     Counterpoint: <br />
                    </div>
                    <div className="type-selection-container">
                        <div className="type-selection free-counterpoint" onClick={() => this.handleClick("twoPartFreeCounterpoint")}>
                            <div className="type-name">Free Counterpoint</div>
                            <span className="complexity-warning">(takes about 20-40 seconds)</span>
                            <div className="type-description">Two free melodies set against each other</div>
                            <div className="preview-image free-counterpoint-preview" ></div>
                        </div>
                        <div className="type-selection imitative-counterpoint" onClick={() => this.handleClick("twoPartImitativeCounterpoint")}>
                            <div className="type-name">Imitative Counterpoint</div>
                            <span className="complexity-warning">(takes about 20-60 seconds)</span>
                            <div className="type-description">Two free melodies that begin with the same theme or motif</div>
                            <div className="preview-image imitative-counterpoint-preview" ></div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SelectType;