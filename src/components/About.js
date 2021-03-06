import React from "react";


import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/About.css"

class About extends React.Component {

    render() {

        return (
            <div className="about">
                <Navbar />
                <h1 className="create-title">ABOUT</h1>
                <div className="about-content">
                    <h3 className="about-heading">
                        To learn more about this program from a technical standpoint,
                        visit the <a href="https://github.com/ZalmanKelber/Counterpoint-frontend">Github repository</a>
                    </h3>
                    <h3 className="about-heading">
                        To view a brief demo and explanation, 
                        watch <a href="https://www.youtube.com/watch?v=WRb-gmUWNR0&feature=youtu.be">this video</a>
                    </h3>
                    <h3 className="about-heading">
                        To learn more,  
                        read <a href="https://alexkelber.medium.com/using-a-backtracking-algorithm-to-generate-two-part-imitative-polyphony-in-the-style-of-palestrina-41dac93023b0">
                        this Medium post</a>
                    </h3> 
                    <h3 className="about-heading">
                        To learn the basics of what this project is, read the following Q & A
                    </h3>
                    <br /><br /><hr />
                    <h3 className="about-question">Q: I don't know anything about Music Theory or Music History.  What is this?</h3>
                    <p>
                        <em>Counterpoint</em> refers to a series of musical composition exercises that have been considered fundamental to 
                        Western musical education for centuries.  This program uses an algorithm to compose and display examples of several kinds of these exercises.
                    </p>
                    <p>
                        There are many different <em>styles</em> of counterpoint.  These examples are in the style of 
                        the 16th century Italian composer <a href="https://en.wikipedia.org/wiki/Giovanni_Pierluigi_da_Palestrina">
                        Giovanni Pierluigi da Palestrina</a>, whose works are often considered a pinnacle of <em>contrapuntal</em> music.
                    </p>
                    <h3 className="about-question">Q: so what exactly is counterpoint?</h3>
                    <p>
                        Counterpoint teaches the art of writing melody and harmony, and does so in a succession of exercises that gradually
                        increase in difficulty and complexity.  The most basic exericise is to write a <em>Cantus Firmus</em> – a 
                        simple unaccompanied melody that has no rhythmic complexity.  The focus is entirely on the order of pitches.
                    </p>
                    <p>
                        Subsequent exercises involve writing two simultaneous, polyphonic melodies: one is a Cantus Firmus.  The other is a form 
                        of <em>Species Counterpoint</em>.  Species Counterpoint melodies are different kinds of simple melodies that demonstrate 
                        various rules that are specific to particular rhythms, as well as corresponding rules for 
                        harmony between the Counterpoint line and the Cantus Firmus.  The First Species is essentially identical to a Cantus Firmus.  
                        The Species culminate with the Fifth Species, which is essentially a free melody – one we might actually encounter in the 
                        works of Palestrina.
                    </p>
                    <p>
                        After Species Counterpoint, the next task is to combine two free melodies (or Fifth Species melodies) together, utilizing 
                        all of the rules of harmony and melody that have previously been learned.  In <em>Imitative Counterpoint</em>, the culmination
                        of these exercises, each melody begins, at different times, with the same theme or motif. 
                    </p>
                    <h3 className="about-question">Q: how many rules of harmony and melody are there?</h3>
                    <p>
                        By the time we've reached counterpoint that involves two free melodies against each other, there are several dozen 
                        rules of harmony and melody that have to be followed.  This high number is because Palestrina-style is particularly 
                        strict in a variety of ways.
                    </p>
                    <h3 className="about-question">Q: Are there any rules that non-musical laypeople might understand?</h3>
                    <p>
                        Yes!  In this style of counterpoint, every melody can reach its highest note only once.  And in the First, Second
                        and Third Species, the one instance of the highest note can't occur directly in the middle of the melody.
                    </p>
                    <p>
                        As a <em>slightly</em> more complicated example, in the First, Second and Third Species in Palestrina-style, 
                        when subsequent notes in a melody move <em>upward</em>, larger intervals (that is, the distance between notes) must
                        precede smaller intervals.  When the melody moves <em>downward</em>, smaller intervals must precede larger intervals.
                        These rules are somewhat loosened in the Fourth and Fifth Species.
                    </p>
                    <p>
                        The rules regarding harmony generally involve the question of when <a href="https://en.wikipedia.org/wiki/Consonance_and_dissonance">
                        dissonant intervals</a> between the two melodies are allowed.  These rules tend to be fairly complicated because the question 
                        of whether or not a dissonant interval is allowed generally has to do with the melodic context of both voices.
                    </p>
                    <h3 className="about-question">Q: Are these rules "rules" or "guidelines?"</h3>
                    <p>
                        That's an extremely complicated question.  Renaissance Musical Theorists, in their writings, often thought of 
                        the rules of counterpoint as manifestations of a singular, unchanging and perfect divine natural order.  The complicated 
                        reality is that the actual corpus of music from this period often shows violations of various rules.  There are also
                        unwritten rules that are largely followed (as was particularly apparent when this program was being written).  For the purpose 
                        of this program, certain rules are followed strictly.  Others are allowed but "ranked" unfavorably, so that they occasionally 
                        but infrequently appear in examples.
                    </p>
                    <h3 className="about-question">Q: What's the gist of how this program composes these examples?  Neural networks?  Machine learning?</h3>
                    <p>
                        Actually, no.  The program that composes these pieces uses a <a href="https://en.wikipedia.org/wiki/Backtracking">
                        backtracking algorithm</a>.  In a given example, successive notes are placed one-by-one onto a melody, if they pass a series of 
                        rules.  If we arrive at a situation in which no notes can be legally placed, the previous note is removed and replaced with another one.  
                        In this way, several correct solutions are generated.  These solutions are then scored, and the best one is returned.
                    </p>
                    <h3 className="about-question">Q: Why can't I download an actual audio file of the examples I create as well as a pdf of the score?</h3>
                    <p>
                        This will likely be the next goal of the project.  Technologies that convert MIDI files to actual playable audio and generate PDF's of 
                        scores, such as fluidsynth and lilypond, tend to exist as desktop applications or command line interfaces.  There are currently no programs that
                        perform these tasks programatically from python that can be installed as dependencies in deployment.
                    </p>

                    <h3 className="about-question">Q: What are some of the other next steps for the project?</h3>
                    <p>
                        The program so far only writes examples with one or two simultaneous melodies.  Traditionally, this style of counterpoint 
                        culminates with five simultanous melodies.
                    </p>
                    <p>
                        Switching from a backtracking algorithm to a local search algorithm has the possibility of dramatically increasing performance,
                        however this will likely require a complete rewrite of most of the code.
                    </p>
                    <h3 className="about-question">Q: Whoa.  Five simultaneous, independent melodies, obeying dozens of complex rules?
                    What does that sound like</h3>
                    <p>
                        For a famous example of five-voice, imitative counterpoint, listen to Palestrina's motet, <a href="https://www.youtube.com/watch?v=nRmkj19i4Yk">
                        <em>Exultate Deo</em></a>.
                    </p>
                    <hr />
                    <h3 className="about-heading">Technologies used in this project:</h3>
                    <p>Frontend: React, React Router Dom, React H5 Audio Player, MIDIjs</p>
                    <p>API: Flask, Gunicorn, MIDIUtil</p>
                    <h3 className="about-heading">Photo Credits:</h3>
                    <p>
                        All images of Renaissance artwork from Wikimedia Commons.  All others images from <a href="https://pixabay.com/">Pixabay</a>.
                    </p>
                    <p>
                        Homepage: Jacques Gaimard, Navbar: Rob Porter, Gallery: Dimitris Vetsikas, Results Player: Enrique Lopez Garre, Thumbnail: Christo Anestev, 
                        Ionian box: Robert Balog, Dorian box: Goran Horvat, Phrygian box: Enrique Lopez Garre, Lydian box: Markus Wittmann, 
                        Mixolydian box: Hans Braxmeier, Aeolian box: Alexander Stein
                    </p>


                </div>
                <Footer />
            </div>
        );
    }

}

export default About