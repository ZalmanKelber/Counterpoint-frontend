import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "../css/DisplayResult.css";

class DisplayResult extends React.Component {

    state = {
        waitingForResults: true,
        waitingForResultsDisplayPhase: 0,
        blobURL: null
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
        xml.open("POST", "/api");
        xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xml.responseType = "blob";
        xml.onload = e => {
              const url = window.URL.createObjectURL(xml.response);
              this.setState({ ...this.state, blobURL: url });
              const MIDIjs = window.MIDIjs;
              MIDIjs.play(url)
          };
        xml.send(jsonRequest);
        this.setState({ ...this.state, waitingForResults: false});

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
                return "...waiting for results";
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
                <div className="success-container">
                    <h2 className="success-title">Success!  Here's the file you generated.  Click below to download as a MIDI file</h2>
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
                <h2 className="download-button results-button" onClick={this.downloadAudio}>Download Audio</h2>
                <h2 className="generate-option results-button" onClick={this.tryAgain}>Try again with same parameters</h2>
                <h2 className="or">or</h2>
                <h2 className="generate-option results-button" onClick={this.startNew}>Start from the beginning</h2>
                </>
    
            }
            </>
        );
    }
}

export default DisplayResult;