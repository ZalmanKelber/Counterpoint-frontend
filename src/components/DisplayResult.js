import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "../css/DisplayResult.css";

class DisplayResult extends React.Component {

    state = {
        waitingForResults: true,
        waitingForResultsDisplayPhase: 0,
        blobURL: null,
        midiPlayer: window.MIDIjs,
        playing: false,
        inProgress: false,
        midiLength: 100
    }

    componentDidMount = async () => {
        const jsonRequest = JSON.stringify(this.props.currentSelections);
        const handler = setInterval(() => {
            if (this.state.blobURL) {
                clearInterval(handler);
                this.setState({ ...this.state, waitingForResultsDisplayPhase: 0 });
            } else {
                let nextPhase = this.state.waitingForResultsDisplayPhase + 1
                nextPhase %= 10;
                this.setState({ ...this.state, waitingForResultsDisplayPhase: nextPhase });
            }
        }, 500);
        const xml = new XMLHttpRequest();
        xml.open("POST", "https://counterpoint-server.herokuapp.com/api");
        xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xml.responseType = "blob";
        xml.onerror = () => {
            this.tryAgain();
        }
        xml.onload = e => {
            const url = window.URL.createObjectURL(xml.response);
            this.setState({ ...this.state, blobURL: url, playing: true, inProgress: true });
            this.state.midiPlayer.play(url)
            this.state.midiPlayer.get_duration(url, seconds => this.setState({ ...this.state, midiLength: seconds }));
            this.state.midiPlayer.player_callback = data => {
                if (data.time > this.state.midiLength) {
                    this.setState({ ...this.state, playing: false, inProgress: false });
                }
            }
          };
        xml.send(jsonRequest);
        this.setState({ ...this.state, waitingForResults: false});

    }

    togglePlaying = () => {
        if (this.state.playing) {
            this.state.midiPlayer.pause();
        } else if (this.state.inProgress) {
            this.state.midiPlayer.resume();
        } else {
            this.state.midiPlayer.play(this.state.blobURL)
        }
        this.setState({ ...this.state, playing: !this.state.playing, inProgress: true });
    }

    componentWillUnmount = () => {
        this.state.midiPlayer.stop()
    }

    getWaitingForResultsDisplayString = () => {
        switch (this.state.waitingForResultsDisplayPhase) {
            case 0:
                return "";
            case 1:
                return ".";
            case 2:
                return "..";
            case 3:
                return "...";
            default:
                return "...composing counterpoint";
        }
    }

    downloadAudio = () => {
        const link = document.createElement("a");
        link.download = "counterpoint.mid";
        link.href = this.state.blobURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    tryAgain = () => {
        this.props.refreshDisplayResult();
    }

    startNew = () => {
        this.props.refreshState();
    }

    render() {
        const waitingForResultsDisplayString = this.getWaitingForResultsDisplayString();

        return (
            <>
            {
                !this.state.blobURL && <div className="waiting-for-results">{waitingForResultsDisplayString}</div>
            }
            {
                this.state.blobURL && 
                <>
                <h2 className="success-title">Success!  The algorithm composed this piece based on your specifications!  
                <br /><br />Click below to download it as a MIDI file, to generate another example with the same specifications, or to start again from the beginning</h2>
                <div className="success-container">
                    <div className="toggle-button-outer" onClick={this.togglePlaying}>
                        <div className={this.state.playing ? "pause-button" : "play-button"}></div>
                    </div>
                    {/* <div className="audio-player-container">
                        <AudioPlayer
                            autoPlay
                            src={this.state.blobURL}
                            showJumpControls={false}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            layout="horizontal-reverse"
                        />
                    </div> */}
                </div>
                <h2 className="download-button results-button" onClick={this.downloadAudio}>Download MIDI</h2>
                <h2 className="generate-option results-button" onClick={this.tryAgain}>Try again with same parameters</h2>
                <h2 className="or">or</h2>
                <h2 className="start-new results-button" onClick={this.startNew}>Start from the beginning</h2>
                </>
    
            }
            </>
        );
    }
}

export default DisplayResult;