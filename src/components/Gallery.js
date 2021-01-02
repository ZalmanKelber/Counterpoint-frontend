import React from "react";
import AudioPlayer from "react-h5-audio-player";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/Gallery.css"

// import ionianAudio from `${process.env.PUBLIC_URL}/frontendAudio/ionian.wav`;
// import dorianAudio from process.env.PUBLIC_URL + "/frontendAudio/dorian.wav";
// import phrygianAudio from process.env.PUBLIC_URL + "/frontendAudio/phrygian.wav";
// import lydianAudio from process.env.PUBLIC_URL + "/frontendAudio/lydian.wav";
// import mixolydianAudio from process.env.PUBLIC_URL + "/frontendAudio/mixolydian.wav";
// import aeolianAudio from process.env.PUBLIC_URL + "/frontendAudio/aeolian.wav";

// import ionianImage from process.env.PUBLIC_URL + "/images/ionian_example.png";
// import dorianImage from process.env.PUBLIC_URL + "/images/dorian_example.png";
// import phrygianImage from process.env.PUBLIC_URL + "/images/phrygian_example.png";
// import lydianImage from process.env.PUBLIC_URL + "/images/lydian_example.png";
// import mixolydianImage from process.env.PUBLIC_URL + "/images/mixolydian_example.png";
// import aeolianImage from process.env.PUBLIC_URL + "/images/aeolian_example.png";

const modes = ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian"];

class Gallery extends React.Component {

    state = { selectedMode: null }

    selectMode = mode => {
        this.setState({ ...this.state, selectedMode: mode })
    }


    render() {

        const audioFiles = [
            `${window.location.origin}/frontendAudio/ionian.wav`, 
            `${window.location.origin}/frontendAudio/dorian.wav`, 
            `${window.location.origin}/frontendAudio/phrygian.wav`, 
            `${window.location.origin}/frontendAudio/lydian.wav`, 
            `${window.location.origin}/frontendAudio/mixolydian.wav`, 
            `${window.location.origin}/frontendAudio/aeolian.wav`
        ];
        const imageFiles = [
            `/images/ionian_example.png`, 
            `/images/dorian_example.png`, 
            `/images/phrygian_example.png`, 
            `/images/lydian_example.png`, 
            `/images/mixolydian_example.png`, 
            `/images/aeolian_example.png`
        ];
        

        return (
            <div className="main">
                <Navbar />
                <h1 className="create-title">GALLERY</h1>
                <h2 className="gallery-instructions">Click on a mode to view one of the best examples of imitative counterpoint produced by the program</h2>
                <div className="gallery-container">
                    <div className="list-modes">
                        {
                            modes.map((mode, i) => {
                                return (
                                    <div key={i} className="mode-title-container" onClick={() => this.selectMode(mode)} >
                                        <div className="mode-title">{mode.charAt(0).toUpperCase() + mode.slice(1)}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        modes.map((mode, i) => {
                            if (this.state.selectedMode === mode) {
                                return (
                                    <div key={i} className="mode-display-container">
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
                </div>
                <Footer />
            </div>
        );
    }

}

export default Gallery