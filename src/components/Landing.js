
import React from "react";
import { Link } from "react-router-dom";

import "../css/Landing.css";

const START_TIME = 1000
const FIRST_FADE = 2000
const SECOND_FADE = 1500
const THIRD_FADE = 1500
const INTERVAL_TIME = 10


class Landing extends React.Component {

    state = { 
        audio: null,
        opacityLevels: {
            landing: 1,
            title: 0,
            menu: 0
        } 
    }

    componentDidMount = () => {
        this.startPage()
        setTimeout(() => {
           this.firstFade() 
           setTimeout(() => {
               this.secondFade()
               setTimeout(() => {
                   this.thirdFade()
               }, SECOND_FADE);
           }, FIRST_FADE);
        }, START_TIME);
    }

    componentWillUnmount = () => {
        this.state.audio.pause()
    }

    //starts audio by assigning audio player to state.audio
    startPage = () => {
        document.getElementById("landing").className = "landing landing-before-transition";
        const audio = new Audio(process.env.PUBLIC_URL + "/frontendAudio/mixolydian.wav");
        audio.play();
        this.setState({ ...this.state, audio: audio })
    }

    //changes opacity of entire component from 1 to .7
    firstFade = () => {
        let count = 0;
        const handler = setInterval(() => {
            count++;
            const newOpacity = 1 - (count * .3 * INTERVAL_TIME / FIRST_FADE);
            this.setState({ ...this.state, opacityLevels: {
                landing: newOpacity, title: 0, menu: 0
            } })
            if (count >= FIRST_FADE / INTERVAL_TIME) {
                clearInterval(handler);
                this.setState({ ...this.state, opacityLevels: {
                    landing: 1, title: 0, menu: 0
                } })
                document.getElementById("landing").className = "landing landing-after-transition";
            }
        }, INTERVAL_TIME);
    }

    //background opacity remains at .7 (handled in css) while title fades in
    secondFade = () => {
        let count = 0;
        const handler = setInterval(() => {
            count++;
            const newOpacity = count * INTERVAL_TIME / SECOND_FADE;
            this.setState({ ...this.state, opacityLevels: {
                landing: 1, title: newOpacity, menu: 0
            } })
            if (count >= SECOND_FADE / INTERVAL_TIME) {
                clearInterval(handler);
            }
        }, INTERVAL_TIME);
    }

    //menu options fade in
    thirdFade = () => {
        let count = 0;
        const handler = setInterval(() => {
            count++;
            const newOpacity = count * INTERVAL_TIME / THIRD_FADE;
            this.setState({ ...this.state, opacityLevels: {
                landing: 1, title: 1, menu: newOpacity
            } })
            if (count >= THIRD_FADE / INTERVAL_TIME) {
            }
        }, INTERVAL_TIME);
    }


    render() {

        return (
            <>
            <div id="landing" style={{opacity: this.state.opacityLevels.landing}}>
                <h1 className="landing-title" style={{opacity: this.state.opacityLevels.title}}>
                    C O U N T E R P O I N T &emsp; &emsp; G E N E R A T O R
                </h1>
                <div id="menu" className="landing-menu" style={{opacity: this.state.opacityLevels.menu}}>
                    <Link to="/create">
                        <h3 className="menu-option">GENERATE EXAMPLES</h3>
                    </Link>
                    <Link to="/gallery">
                        <h3 className="menu-option">GALLERY</h3>
                    </Link>
                    <Link to="/about">
                        <h3 className="menu-option">ABOUT</h3>
                    </Link>
                </div>
            </div>
            </>
        );
    }

}

export default Landing 