import React from "react";

import SelectStepHeader from "./SelectStepHeader";

import "../css/SelectModes.css";

class SelectMode extends React.Component {

    handleClick = async newValue => {
        await this.props.updateValue(newValue);
        this.props.goForward();
    }

    render() {
        const stepTitle = "STEP 2: CHOOSE A MODE";
        const stepDescription = `Church modes are similar to the concepts of keys in music.  They define the main and supplemental 
                                pitches available for a composition as well as the main note ("tonic" or "final") that a piece of music 
                                tends to revolve around or end on.`
        return (
            <>
            <SelectStepHeader 
                stepTitle={stepTitle}
                showGoBackButton={true}
                goBackFunction={this.props.goBackward}
                stepDescription={stepDescription}
            />
            <div className="step-content">
                <div className="show-modes">
                    <div className="mode-selection ionian" onClick={() => this.handleClick("ionian")}>
                        <div className="mode-header">
                            <h3 className="mode-selection-title">Ionian</h3>
                            <p className="mode-pitches">( do re mi fa sol la si do )</p>
                        </div>
                        <p className="mode-quote"><em>“…simple as ‘Do Re Mi’”</em><br /><br /> — Michael Jackson</p>
                    </div>
                    <div className="mode-selection dorian" onClick={() => this.handleClick("dorian")}>
                    <div className="mode-header">
                            <h3 className="mode-selection-title">Dorian</h3>
                            <p className="mode-pitches">( re mi fa sol la si do re )</p>
                        </div>
                        <p className="mode-quote"><em>“...harmony that would fittingly <br /> imitate the utterances and<br /> accents of a brave man who is <br /> engaged in warfare or in any <br /> enforced business”</em>
                        <br /><br /> — Plato</p>
                    </div>
                    <div className="mode-selection phrygian" onClick={() => this.handleClick("phrygian")}>
                    <div className="mode-header">
                            <h3 className="mode-selection-title">Phrygian</h3>
                            <p className="mode-pitches">( mi fa sol la si do re mi )</p>
                        </div>
                        <p className="mode-quote"><em>“…for such a man engaged in <br /> works of peace, not enforced but <br /> voluntary, either trying to<br />  persuade somebody of something <br /> and imploring him”</em>
                        <br /><br /> — Plato</p>
                    </div>
                    <div className="mode-selection lydian" onClick={() => this.handleClick("lydian")}>
                    <div className="mode-header">
                            <h3 className="mode-selection-title">Lydian</h3>
                            <p className="mode-pitches">( fa sol la si do re mi fa )</p>
                        </div>
                        <p className="mode-quote"><em>“…and ever, against eating<br />cares, lap me in soft Lydian airs”</em><br /><br /> — John Milton</p>
                    </div>
                    <div className="mode-selection mixolydian" onClick={() => this.handleClick("mixolydian")}>
                    <div className="mode-header">
                            <h3 className="mode-selection-title">Mixolydian</h3>
                            <p className="mode-pitches">( sol la si do re mi fa sol )</p>
                        </div>
                        <p className="mode-quote"><em>“Some of them make men sad<br />  and grave, like the so called <br /> Mixolydian”</em><br /><br /> — Aristotle</p>
                    </div>
                    <div className="mode-selection aeolian" onClick={() => this.handleClick("aeolian")}>
                    <div className="mode-header">
                            <h3 className="mode-selection-title">Aeolian</h3>
                            <p className="mode-pitches">( la si do re mi fa sol la )</p>
                        </div>
                        <p className="mode-quote"><em>“The perfection of conversation is <br /> not to play a regular sonata, <br /> but, like the Aeolian harp, <br /> to await the inspiration of the <br /> passing breeze”</em>
                        <br /><br /> — Edmund Burke</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SelectMode;