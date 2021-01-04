import React from "react";
import AudioPlayer from "react-h5-audio-player";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/Gallery.css"

const modes = ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian"];

class Gallery extends React.Component {

    state = { selectedMode: null }

    selectMode = mode => {
        this.setState({ ...this.state, selectedMode: mode })
    }


    render() {

        const audioFiles = [
            `${process.env.PUBLIC_URL}/frontendAudio/ionian.wav`, 
            `${process.env.PUBLIC_URL}/frontendAudio/dorian.wav`, 
            `${process.env.PUBLIC_URL}/frontendAudio/phrygian.wav`, 
            `${process.env.PUBLIC_URL}/frontendAudio/lydian.wav`, 
            `${process.env.PUBLIC_URL}/frontendAudio/mixolydian.wav`, 
            `${process.env.PUBLIC_URL}/frontendAudio/aeolian.wav`
        ];
        const imageFiles = [
            `${process.env.PUBLIC_URL}/images/ionian_example.png`, 
            `${process.env.PUBLIC_URL}/images/dorian_example.png`, 
            `${process.env.PUBLIC_URL}/images/phrygian_example.png`, 
            `${process.env.PUBLIC_URL}/images/lydian_example.png`, 
            `${process.env.PUBLIC_URL}/images/mixolydian_example.png`, 
            `${process.env.PUBLIC_URL}/images/aeolian_example.png`
        ];
        

        return (
            <div className="gallery">
                <Navbar />
                <h1 className="gallery-title">GALLERY</h1>
                <div className="gallery-middle-section">
                    <h2 className="gallery-instructions">Click on a mode to view one of the best examples of imitative counterpoint produced by the program</h2>
                    <div className="gallery-container">
                        <div className="list-modes">
                            {
                                modes.map((mode, i) => {
                                    return (
                                        <div 
                                            key={i} 
                                            className={ mode === this.state.selectedMode ? "mode-title-container selected-mode-title": "mode-title-container"}
                                            onClick={() => this.selectMode(mode)} 
                                        >
                                            <div className="mode-title">
                                                {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    modes.map((mode, i) => {
                        if (this.state.selectedMode === mode) {
                            return (
                                <div key={i} className="gallery-result">
                                    <div className="gallery-audio-wrapper">
                                        <AudioPlayer
                                            autoPlay
                                            src={audioFiles[i]}
                                            showJumpControls={false}
                                            customAdditionalControls={[]}
                                            customVolumeControls={[]}
                                            layout="horizontal-reverse"
                                        />
                                    </div>
                                    <img className="gallery-image" src={imageFiles[i]} />
                                </div>
                            )
                        }
                    })
                }
                <div className="gallery-space"></div>
                <Footer />
            </div>
        );
    }

}

export default Gallery