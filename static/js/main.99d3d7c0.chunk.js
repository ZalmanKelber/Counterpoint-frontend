(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(28),r=n.n(c),o=n(5),l=n(6),d=n(8),u=n(7),h=n(13),p=n(9),j=n(4),m=(n(46),2e3),b=1500,O=1500,f=10,x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={audio:null,opacityLevels:{landing:1,title:0,menu:0}},e.componentDidMount=function(){e.startPage(),setTimeout((function(){e.firstFade(),setTimeout((function(){e.secondFade(),setTimeout((function(){e.thirdFade()}),b)}),m)}),1e3)},e.componentWillUnmount=function(){e.state.audio.pause()},e.startPage=function(){document.getElementById("landing").className="landing landing-before-transition";var t=new Audio("/Counterpoint-frontend/frontendAudio/mixolydian.wav");t.play(),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{audio:t}))},e.firstFade=function(){var t=0,n=setInterval((function(){var s=1-.3*++t*f/m;e.setState(Object(j.a)(Object(j.a)({},e.state),{},{opacityLevels:{landing:s,title:0,menu:0}})),t>=200&&(clearInterval(n),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{opacityLevels:{landing:1,title:0,menu:0}})),document.getElementById("landing").className="landing landing-after-transition")}),f)},e.secondFade=function(){var t=0,n=setInterval((function(){var s=++t*f/b;e.setState(Object(j.a)(Object(j.a)({},e.state),{},{opacityLevels:{landing:1,title:s,menu:0}})),t>=150&&clearInterval(n)}),f)},e.thirdFade=function(){var t=0;setInterval((function(){var n=++t*f/O;e.setState(Object(j.a)(Object(j.a)({},e.state),{},{opacityLevels:{landing:1,title:1,menu:n}}))}),f)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{id:"landing",style:{opacity:this.state.opacityLevels.landing},children:[Object(s.jsx)("h1",{className:"landing-title",style:{opacity:this.state.opacityLevels.title},children:"C O U N T E R P O I N T \u2003 \u2003 G E N E R A T O R"}),Object(s.jsxs)("div",{id:"menu",className:"landing-menu",style:{opacity:this.state.opacityLevels.menu},children:[Object(s.jsx)(h.b,{to:"/create",children:Object(s.jsx)("h3",{className:"menu-option",children:"GENERATE EXAMPLES"})}),Object(s.jsx)(h.b,{to:"/gallery",children:Object(s.jsx)("h3",{className:"menu-option",children:"GALLERY"})}),Object(s.jsx)(h.b,{to:"/about",children:Object(s.jsx)("h3",{className:"menu-option",children:"ABOUT"})})]})]})})}}]),n}(i.a.Component),y=(n(52),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)(h.b,{to:"/landing",children:Object(s.jsx)("div",{className:"enter",children:Object(s.jsxs)("div",{className:"click-to-enter",children:["COUNTERPOINT GENERATOR",Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),"CLICK TO ENTER"]})})})}}]),n}(i.a.Component)),v=n(10),g=n.n(v),w=n(12),N=n(21),C=(n(54),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)("div",{className:"navbar-title",children:"COUNTERPOINT GENERATOR"}),Object(s.jsxs)("div",{className:"menu-items",children:[Object(s.jsx)("div",{className:"menu-link",onClick:function(){return window.location.reload()},children:Object(s.jsx)(h.b,{to:"/create",children:"CREATE"})}),Object(s.jsx)("div",{className:"menu-link",onClick:function(){return window.location.reload()},children:Object(s.jsx)(h.b,{to:"/gallery",children:"GALLERY"})}),Object(s.jsx)("div",{className:"menu-link",onClick:function(){return window.location.reload()},children:Object(s.jsx)(h.b,{to:"/about",children:"ABOUT"})}),Object(s.jsx)("div",{className:"menu-link",children:Object(s.jsx)(h.b,{to:"/landing",children:"HOME"})})]})]})}}]),n}(i.a.Component)),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.showGoBackButton&&Object(s.jsx)("div",{className:"go-back-button",onClick:this.props.goBackFunction,children:"\u2190 previous step"}),Object(s.jsx)("h1",{className:"create-title",children:"BUILD YOUR OWN EXAMPLE"}),Object(s.jsx)("h2",{className:"step-title",children:this.props.stepTitle})]})}}]),n}(i.a.Component),F=(n(55),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateValue(n);case 2:e.props.goForward();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{stepTitle:"STEP 1: CHOOSE TYPE",showGoBackButton:!1}),Object(s.jsxs)("div",{className:"step-content",children:[Object(s.jsxs)("div",{className:"select-type-description",children:["Select a type of counterpoint exercise to generate.",Object(s.jsx)("br",{}),"This will be a short musical composition in the style of the Italian Renaissance composer Giovanni Pierluigi da Palestrina.",Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"show-types",children:[Object(s.jsxs)("div",{className:"arrow-container",children:[Object(s.jsx)("div",{className:"arrow-text",children:"(Simpler / Faster)"}),Object(s.jsx)("div",{className:"upward-triangle"}),Object(s.jsx)("div",{className:"arrow-body"}),Object(s.jsx)("div",{className:"arrow-filler"}),Object(s.jsx)("div",{className:"arrow-body"}),Object(s.jsx)("div",{className:"downward-triangle"}),Object(s.jsx)("div",{className:"arrow-text",children:"(More Complex)"})]}),Object(s.jsx)("div",{className:"type-title solo-melody-title",children:"Solo Melodies:"}),Object(s.jsxs)("div",{className:"type-title species-counterpoint-title",children:["Species Counterpoint: ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"complexity-warning",children:"(takes about 5-15 seconds)"})]}),Object(s.jsxs)("div",{className:"type-title two-part-counterpoint-title",children:["Two Part Counterpoint: ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"complexity-warning",children:"(takes about 5-30 seconds)"})]}),Object(s.jsxs)("div",{className:"type-selection cantus-firmus",onClick:function(){return e.handleClick("cantusFirmus")},children:[Object(s.jsx)("div",{className:"type-name",children:"Cantus Firmus"}),Object(s.jsxs)("div",{className:"type-description",children:["Simple whole-note melody that exemplifies the most basic rules of melody in ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Giovanni_Pierluigi_da_Palestrina",onClick:function(e){return e.stopPropagation()},target:"_blank",children:"Palestrina-style"})]})]}),Object(s.jsxs)("div",{className:"type-selection free-melody",onClick:function(){return e.handleClick("freeMelody")},children:[Object(s.jsx)("div",{className:"type-name",children:"Free Melody"}),Object(s.jsx)("div",{className:"type-description",children:"Complete melody with different rhythmic values; displays all the rules of melody in Palestrina-style"})]}),Object(s.jsxs)("div",{className:"type-selection first-species",onClick:function(){return e.handleClick("twoPartFirstSpecies")},children:[Object(s.jsx)("div",{className:"type-name",children:"First Species"}),Object(s.jsxs)("div",{className:"type-description",children:["Whole-note melody set against a Cantus Firmus; exemplifies the most basic rules of harmony: all intervals between two simultaneous notes are ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Consonance_and_dissonance",onClick:function(e){return e.stopPropagation()},target:"_blank",children:"consonant"})]})]}),Object(s.jsxs)("div",{className:"type-selection second-species",onClick:function(){return e.handleClick("twoPartSecondSpecies")},children:[Object(s.jsx)("div",{className:"type-name",children:"Second Species"}),Object(s.jsxs)("div",{className:"type-description",children:["Half-note melody set against a Cantus Firmus; exemplifies simplest rules of ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Consonance_and_dissonance",onClick:function(e){return e.stopPropagation()},target:"_blank",children:"dissonance"})," in harmony: dissonances only occur on weak beats"]})]}),Object(s.jsxs)("div",{className:"type-selection third-species",onClick:function(){return e.handleClick("twoPartThirdSpecies")},children:[Object(s.jsx)("div",{className:"type-name",children:"Third Species"}),Object(s.jsx)("div",{className:"type-description",children:"Quarter-note melody set against a Cantus Firmus; exemplifies more complex rules of dissonance in harmony: several types of dissonance occur on weak beats"})]}),Object(s.jsxs)("div",{className:"type-selection fourth-species",onClick:function(){return e.handleClick("twoPartFourthSpecies")},children:[Object(s.jsx)("div",{className:"type-name",children:"Fourth Species"}),Object(s.jsx)("div",{className:"type-description",children:"Half-note and syncopated whole-note melody set against a Cantus Firmus; dissonances can occur on strong beats in the form of suspensions"})]}),Object(s.jsxs)("div",{className:"type-selection fifth-species",onClick:function(){return e.handleClick("twoPartFifthSpecies")},children:[Object(s.jsx)("div",{className:"type-name",children:"Fifth Species"}),Object(s.jsx)("div",{className:"type-description",children:"Free melody set against a Cantus Firmus; combines all rules of dissonance and harmony"})]}),Object(s.jsxs)("div",{className:"type-selection free-counterpoint",onClick:function(){return e.handleClick("twoPartFreeCounterpoint")},children:[Object(s.jsx)("div",{className:"type-name",children:"Free Counterpoint"}),Object(s.jsx)("div",{className:"type-description",children:"Two free melodies set against each other"})]}),Object(s.jsxs)("div",{className:"type-selection imitative-counterpoint",onClick:function(){return e.handleClick("twoPartImitativeCounterpoint")},children:[Object(s.jsx)("div",{className:"type-name",children:"Imitative Counterpoint"}),Object(s.jsx)("div",{className:"type-description",children:"Two free melodies that begin with the same theme or motif"})]}),Object(s.jsx)("div",{className:"preview-image cantus-firmus-preview"}),Object(s.jsx)("div",{className:"preview-image free-melody-preview"}),Object(s.jsx)("div",{className:"preview-image first-species-preview"}),Object(s.jsx)("div",{className:"preview-image second-species-preview"}),Object(s.jsx)("div",{className:"preview-image third-species-preview"}),Object(s.jsx)("div",{className:"preview-image fourth-species-preview"}),Object(s.jsx)("div",{className:"preview-image fifth-species-preview"}),Object(s.jsx)("div",{className:"preview-image free-counterpoint-preview"}),Object(s.jsx)("div",{className:"preview-image imitative-counterpoint-preview"})]})]})]})}}]),n}(i.a.Component)),S=(n(56),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateValue(n);case 2:e.props.goForward();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{stepTitle:"STEP 2: CHOOSE MODE",showGoBackButton:!0,goBackFunction:this.props.goBackward}),Object(s.jsx)("div",{className:"step-content",children:Object(s.jsxs)("div",{className:"show-modes",children:[Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("ionian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Ionian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsx)("em",{children:"\u201c\u2026simple as \u2018Do Re Mi\u2019\u201d"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 Michael Jackson"]})]}),Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("dorian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Dorian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsx)("em",{children:"\u201c...harmony that would fittingly imitate the utterances and accents of a brave man who is engaged in warfare or in any enforced business\u201d"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 Plato"]})]}),Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("phrygian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Phrygian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsx)("em",{children:"\u201c\u2026for such a man engaged in works of peace, not enforced but voluntary, either trying to persuade somebody of something and imploring him\u201d"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 Plato"]})]}),Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("lydian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Lydian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsxs)("em",{children:["\u201c\u2026and ever, against eating",Object(s.jsx)("br",{}),"cares, lap me in soft Lydian airs\u201d"]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 John Milton"]})]}),Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("mixolydian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Mixolydian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsx)("em",{children:"\u201cSome of them make men sad and grave, like the so called Mixolydian\u201d"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 Aristotle"]})]}),Object(s.jsxs)("div",{className:"mode-selection",onClick:function(){return e.handleClick("aeolian")},children:[Object(s.jsx)("h3",{className:"mode-selection-title",children:"Aeolian"}),Object(s.jsxs)("p",{className:"mode-quote",children:[Object(s.jsx)("em",{children:"\u201cThe perfection of conversation is not to play a regular sonata, but, like the Aeolian harp, to await the inspiration of the passing breeze\u201d"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," \u2014 Edmund Burke"]})]})]})})]})}}]),n}(i.a.Component)),T=(n(57),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={selected:[],selectedIndex:null},e.handleSubmit=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateValue(e.state.selected);case 2:e.props.goForward();case 3:case"end":return t.stop()}}),t)}))),e.getNumberOfLines=function(){return["cantusFirmus","freeMelody"].includes(e.props.currentSelections.type)?1:2},e.getClassList=function(t,n){return 1===e.getNumberOfLines()?e.state.selected.includes(t)?"range selected-range":"range":e.state.selectedIndex===n?"range selected-range":"range"},e.handleClick=function(t,n){var s=[t];if(2===e.getNumberOfLines())switch(n){case 0:s=["alto","soprano"];break;case 1:s=["tenor","alto"];break;default:s=["bass","tenor"]}e.setState(Object(j.a)(Object(j.a)({},e.state),{},{selected:s,selectedIndex:n}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=2===this.getNumberOfLines()?[["soprano","alto"],["alto","tenor"],["tenor","bass"]]:[["soprano","alto","tenor","bass"]],n=2===this.getNumberOfLines()?"TWO VOCAL RANGES":"A VOCAL RANGE",a="STEP 3: CHOOSE ".concat(n);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{stepTitle:a,showGoBackButton:!0,goBackFunction:this.props.goBackward}),Object(s.jsx)("div",{className:"step-content",children:Object(s.jsxs)("div",{className:"choose-range-content",children:[Object(s.jsx)("div",{className:"ranges-container",children:t.map((function(t,n){return Object(s.jsx)("div",{className:"ranges-list",children:t.map((function(t,a){var i=e.getClassList(t,n);return Object(s.jsx)("div",{className:i,onClick:function(){return e.handleClick(t,n)},children:t.toUpperCase()},a)}))},n)}))}),Object(s.jsx)("div",{className:"continue-button",onClick:this.handleSubmit,style:{display:0===this.state.selected.length?"none":"block"},children:"Continue"})]})})]})}}]),n}(i.a.Component)),P=(n(58),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateValue(n);case 2:e.props.goForward();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{stepTitle:"STEP 4: CHOOSE ORIENTATION",showGoBackButton:!0,goBackFunction:this.props.goBackward}),Object(s.jsx)("div",{className:"step-content",children:Object(s.jsxs)("div",{className:"cantus-firmus-index-options",children:[Object(s.jsxs)("div",{className:"cantus-firmus-index-option",onClick:function(){return e.handleClick(0)},children:["Top line: Counterpoint",Object(s.jsx)("br",{}),"Bottom line: Cantus Firmus"]}),Object(s.jsxs)("div",{className:"cantus-firmus-index-option",onClick:function(){return e.handleClick(1)},children:["Top line: Cantus Firmus",Object(s.jsx)("br",{}),"Bottom line: Counterpoint"]})]})})]})}}]),n}(i.a.Component)),E=(n(59),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateValue(n);case 2:e.props.goForward();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t="Species"===this.props.currentSelections.type.substring(this.props.currentSelections.type.length-7)?5:4,n=["twoPartFreeCounterpoint","twoPartImitativeCounterpoint"].includes(this.props.currentSelections.type)?[16,17,18]:[8,9,10,11,12],a="STEP ".concat(t,": CHOOSE NUMBER OF MEASURES");return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{stepTitle:a,showGoBackButton:!0,goBackFunction:this.props.goBackward}),Object(s.jsx)("div",{className:"step-content",children:Object(s.jsx)("div",{className:"length-options",children:n.map((function(t,n){return Object(s.jsx)("div",{className:"measure-option",onClick:function(){return e.handleClick(t)},children:t},n)}))})})]})}}]),n}(i.a.Component)),A=n(24),R=(n(60),n(61),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={waitingForResults:!0,waitingForResultsDisplayPhase:0,blobURL:null},e.componentDidMount=Object(w.a)(g.a.mark((function t(){var n,s,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.stringify(e.props.currentSelections),s=setInterval((function(){if(e.state.blobURL)clearInterval(s),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{waitingForResultsDisplayPhase:0}));else{var t=e.state.waitingForResultsDisplayPhase+1;t%=10,e.setState(Object(j.a)(Object(j.a)({},e.state),{},{waitingForResultsDisplayPhase:t}))}}),500),(a=new XMLHttpRequest).open("POST","https://counterpoint-server.herokuapp.com/api"),a.setRequestHeader("Content-Type","application/json;charset=UTF-8"),a.responseType="blob",a.onload=function(t){if(200===a.status){var n=window.URL.createObjectURL(a.response);e.setState(Object(j.a)(Object(j.a)({},e.state),{},{blobURL:n})),window.MIDIjs.play(n)}else e.tryAgain()},a.send(n),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{waitingForResults:!1}));case 9:case"end":return t.stop()}}),t)}))),e.getWaitingForResultsDisplayString=function(){switch(e.state.waitingForResultsDisplayPhase){case 0:return"";case 1:return".";case 2:return"..";case 3:return"...";default:return"...waiting for results"}},e.downloadAudio=function(){var t=document.createElement("a");t.download="counterpoint.mid",t.href=e.state.blobURL,document.body.appendChild(t),t.click(),document.body.removeChild(t)},e.tryAgain=function(){e.props.refreshDisplayResult()},e.startNew=function(){e.props.refreshState()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getWaitingForResultsDisplayString();return Object(s.jsxs)(s.Fragment,{children:[!this.state.blobURL&&Object(s.jsx)("div",{className:"waiting-for-results",children:e}),this.state.blobURL&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"success-container",children:Object(s.jsx)("h2",{className:"success-title",children:"Success!  Here's the composition you generated.  Click below to download as a MIDI file"})}),Object(s.jsx)("h2",{className:"download-button results-button",onClick:this.downloadAudio,children:"Download MIDI"}),Object(s.jsx)("h2",{className:"generate-option results-button",onClick:this.tryAgain,children:"Try again with same parameters"}),Object(s.jsx)("h2",{className:"or",children:"or"}),Object(s.jsx)("h2",{className:"generate-option results-button",onClick:this.startNew,children:"Start from the beginning"})]})]})}}]),n}(i.a.Component)),I=(n(62),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"footer",children:"Alex Kelber, 2020"})}}]),n}(i.a.Component)),L=(n(63),"SELECT_TYPE"),M="SELECT_MODE",B="SELECT_RANGES",U="SELECT_CANTUS_FIRMUS_INDEX",_="SELECT_LENGTH",D="DISPLAY_RESULT",q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currentPhase:L,selectedValues:{type:null,mode:null,lines:null,length:null,cantusFirmusIndex:0}},e.getUpdateFunction=function(t){return function(n){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{selectedValues:Object(j.a)(Object(j.a)({},e.state.selectedValues),{},Object(N.a)({},t,n))}))}},e.getChangePhaseFunction=function(t){return function(){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPhase:t}))}},e.refreshState=function(){e.setState({currentPhase:L,selectedValues:{type:null,mode:null,lines:null,length:null,cantusFirmusIndex:0}})},e.refreshDisplayResult=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("attempting to refresh display result"),t.next=3,e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPhase:_}));case 3:e.setState(Object(j.a)(Object(j.a)({},e.state),{},{currentPhase:D}));case 4:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n,a;switch(this.state.currentPhase){case L:e=F,t=this.getChangePhaseFunction(M),a=this.getUpdateFunction("type");break;case M:e=S,t=this.getChangePhaseFunction(B),n=this.getChangePhaseFunction(L),a=this.getUpdateFunction("mode");break;case B:e=T,t="Species"===this.state.selectedValues.type.substring(this.state.selectedValues.type.length-7)?this.getChangePhaseFunction(U):this.getChangePhaseFunction(_),n=this.getChangePhaseFunction(M),a=this.getUpdateFunction("lines");break;case U:e=P,t=this.getChangePhaseFunction(_),n=this.getChangePhaseFunction(B),a=this.getUpdateFunction("cantusFirmusIndex");break;case _:e=E,t=this.getChangePhaseFunction(D),n="Species"===this.state.selectedValues.type.substring(this.state.selectedValues.type.length-7)?this.getChangePhaseFunction(U):this.getChangePhaseFunction(B),a=this.getUpdateFunction("length");break;case D:e=R}return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(C,{}),Object(s.jsx)(e,{goForward:t,goBackward:n,updateValue:a,currentSelections:this.state.selectedValues,refreshState:this.refreshState,refreshDisplayResult:this.refreshDisplayResult}),Object(s.jsx)(I,{})]})}}]),n}(i.a.Component),G=(n(64),["ionian","dorian","phrygian","lydian","mixolydian","aeolian"]),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={selectedMode:null},e.selectMode=function(t){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{selectedMode:t}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=["".concat("/Counterpoint-frontend","/frontendAudio/ionian.wav"),"".concat("/Counterpoint-frontend","/frontendAudio/dorian.wav"),"".concat("/Counterpoint-frontend","/frontendAudio/phrygian.wav"),"".concat("/Counterpoint-frontend","/frontendAudio/lydian.wav"),"".concat("/Counterpoint-frontend","/frontendAudio/mixolydian.wav"),"".concat("/Counterpoint-frontend","/frontendAudio/aeolian.wav")],n=["".concat("/Counterpoint-frontend","/images/ionian_example.png"),"".concat("/Counterpoint-frontend","/images/dorian_example.png"),"".concat("/Counterpoint-frontend","/images/phrygian_example.png"),"".concat("/Counterpoint-frontend","/images/lydian_example.png"),"".concat("/Counterpoint-frontend","/images/mixolydian_example.png"),"".concat("/Counterpoint-frontend","/images/aeolian_example.png")];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(C,{}),Object(s.jsx)("h1",{className:"create-title",children:"GALLERY"}),Object(s.jsx)("h2",{className:"gallery-instructions",children:"Click on a mode to view one of the best examples of imitative counterpoint produced by the program"}),Object(s.jsxs)("div",{className:"gallery-container",children:[Object(s.jsx)("div",{className:"list-modes",children:G.map((function(t,n){return Object(s.jsx)("div",{className:"mode-title-container",onClick:function(){return e.selectMode(t)},children:Object(s.jsx)("div",{className:"mode-title",children:t.charAt(0).toUpperCase()+t.slice(1)})},n)}))}),G.map((function(a,i){if(e.state.selectedMode===a)return Object(s.jsxs)("div",{className:"mode-display-container",children:[Object(s.jsx)("div",{className:"gallery-audio-wrapper",children:Object(s.jsx)(A.a,{autoPlay:!0,src:t[i],showJumpControls:!1,customAdditionalControls:[],customVolumeControls:[],layout:"horizontal-reverse"})}),Object(s.jsx)("img",{className:"gallery-image",src:n[i]})]},i)}))]}),Object(s.jsx)(I,{})]})}}]),n}(i.a.Component),W=(n(65),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)(C,{}),Object(s.jsx)("h1",{className:"create-title",children:"ABOUT"}),Object(s.jsxs)("div",{className:"about-content",children:[Object(s.jsxs)("h3",{className:"about-heading",children:["To learn more about this program from a technical standpoint, or to watch a short video demonstration, visit the ",Object(s.jsx)("a",{href:"https://github.com/ZalmanKelber/CounterpointWebApp",children:"Github repository"})]}),Object(s.jsx)("h3",{className:"about-heading",children:"To learn the basics of what this project is, read the following Q & A"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)("h3",{className:"about-question",children:"Q: I don't know anything about Music Theory or Music History.  What is this?"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("em",{children:"Counterpoint"})," refers to a series of musical composition exercises that have been considered fundamental to Western musical education for centuries.  This program composes and displays examples of several kinds of these exercises."]}),Object(s.jsxs)("p",{children:["There are many different ",Object(s.jsx)("em",{children:"styles"})," of counterpoint.  These examples are in the style of the 16th century Italian composer ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Giovanni_Pierluigi_da_Palestrina",children:"Giovanni Pierluigi da Palestrina"}),", whose works are often considered a pinnacle of ",Object(s.jsx)("em",{children:"contrapuntal"})," music."]}),Object(s.jsx)("h3",{className:"about-question",children:"Q: so what exactly is counterpoint?"}),Object(s.jsxs)("p",{children:["Counterpoint teaches the art of writing melody and harmony, and does so in a succession of exercises that gradually increase in difficulty and complexity.  The most basic exericise is to write a ",Object(s.jsx)("em",{children:"Cantus Firmus"})," \u2013 a simple unaccompanied melody that has no rhythmic complexity.  The focus is entirely on the order of pitches."]}),Object(s.jsxs)("p",{children:["Subsequent exercises involve writing two simultaneous, polyphonic melodies: one is a Cantus Firmus.  The other is a form of ",Object(s.jsx)("em",{children:"Species Counterpoint"}),".  Species Counterpoint melodies are different kinds of simple melodies that demonstrate various rules for melody that are dependent on a specific type of rhythm, as well as corresponding rules for harmony between the Counterpoint line and the Cantus Firmus.  The First Species is essentially identical to a Cantus Firmus. The Species culminate with the Fifth Species, which is essentially a free melody \u2013 one we might actually encounter in the works of Palestrina."]}),Object(s.jsxs)("p",{children:["After Species Counterpoint, the next task is to combine two free melodies (or Fifth Species melodies) together, utilizing all of the rules of harmony and melody that have previously been learned.  In ",Object(s.jsx)("em",{children:"Imitative Counterpoint"}),", the culmination of these exercises, each melody begins, at different times, with the same theme or motif."]}),Object(s.jsx)("h3",{className:"about-question",children:"Q: how many rules of harmony and melody are there?"}),Object(s.jsx)("p",{children:"By the time we've reached counterpoint that involves two free melodies against each other, there are several dozen rules of harmony and melody that have to be followed.  This high number is because Palestrina-style is particularly strict in a variety of ways."}),Object(s.jsx)("h3",{className:"about-question",children:"Q: Are there any rules that non-musical laypeople might understand?"}),Object(s.jsx)("p",{children:"Yes!  In this style of counterpoint, every melody can reach its highest note only once.  And in the First, Second and Third Species, the one instance of the highest note can't occur directly in the middle of the melody."}),Object(s.jsxs)("p",{children:["As a ",Object(s.jsx)("em",{children:"slightly"})," more complicated example, in the First, Second and Third Species in Palestrina-style, when subsequent notes in a melody move ",Object(s.jsx)("em",{children:"upward"}),", larger intervals (that is, the distance between notes) must precede smaller intervals.  When the melody moves ",Object(s.jsx)("em",{children:"downward"}),", smaller intervals must precede larger intervals. These rules are somewhat loosened in the Fourth and Fifth Species."]}),Object(s.jsxs)("p",{children:["The rules regarding harmony generally involve the question of when ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Consonance_and_dissonance",children:"dissonant intervals"})," between the two melodies are allowed.  These rules tend to be fairly complicated because they question of whether or not a dissonant interval is allowed generally has to do with the melodic context of both voices."]}),Object(s.jsx)("h3",{className:"about-question",children:'Q: Are these rules "rules" or "guidelines?"'}),Object(s.jsx)("p",{children:'That\'s an extremely complicated question.  Renaissance Musical Theorists, in their writings, often thought of the rules of counterpoint as manifestations of a singular, unchanging and perfect divine natural order.  The complicated reality is that the actual corpus of music from this period often shows violations of various rules.  There are also unwritten rules that are largely followed (as was particularly apparent when this program was being written).  For the purpose of this program, certain rules are followed strictly.  Others are allowed but "ranked" unfavorably, so that they occasionally but infrequently appear in examples.'}),Object(s.jsx)("h3",{className:"about-question",children:"Q: What's the gist of how this program composes these examples?  Neural networks?  Machine learning?"}),Object(s.jsxs)("p",{children:["Actually, no.  The program that composes these pieces uses a ",Object(s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Backtracking",children:"backtracking algorithm"}),".  In a given example, successive notes are placed one-by-one onto a melody, if they pass a series of rules.  If we arrive at a situation in which no notes can be legally placed, the previous note is removed and replaced with another one. In this way, several correct solutions are generated.  These solutions are then scored, and the best one is returned."]}),Object(s.jsx)("h3",{className:"about-question",children:"Q: Why can't I download an actual audio file of the examples I create as well as a pdf of the score?"}),Object(s.jsx)("p",{children:"This will likely be the next goal of the project.  Technologies that convert MIDI files to actual playable audio and generate PDF's of scores, such as fluidsynth and lilypond, tend to exist as desktop applications or command line interfaces.  There are currently no programs that perform these tasks programatically from python that can be installed as dependencies in deployment."}),Object(s.jsx)("h3",{className:"about-question",children:"Q: What are some of the other next steps for the project?"}),Object(s.jsxs)("p",{children:["The program so far only writes examples with one or two simultaneous melodies.  Traditionally, this style of counterpoint culminates with five simultanous melodies.  Eventually, this program will ideally generate a ",Object(s.jsx)("em",{children:"musical score"})," in addition to a sound file of each example (the two programs necessary for this \u2013 Lilypond and Abjad \u2013 are not easy to deploy as python dependencies)."]}),Object(s.jsx)("h3",{className:"about-question",children:"Q: Whoa.  Five simultaneous, independent melodies, obeying dozens of complex rules? What does that sound like"}),Object(s.jsxs)("p",{children:["For a famous example of five-voice, imitative counterpoint, listen to Palestrina's motet, ",Object(s.jsx)("a",{href:"https://www.youtube.com/watch?v=nRmkj19i4Yk",children:Object(s.jsx)("em",{children:"Exultate Deo"})}),"."]})]}),Object(s.jsx)(I,{})]})}}]),n}(i.a.Component)),H=(n(66),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){var e=new XMLHttpRequest;e.open("GET","https://counterpoint-server.herokuapp.com/api/wake_up"),e.onload=function(t){console.log("response from herokuWakeup:",e.response)},e.send()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(h.a,{basename:"/Counterpoint-frontend",children:[Object(s.jsx)(p.a,{path:"/landing",exact:!0,component:x}),Object(s.jsx)(p.a,{path:"/create",exact:!0,component:q}),Object(s.jsx)(p.a,{path:"/gallery",exact:!0,component:V}),Object(s.jsx)(p.a,{path:"/about",exact:!0,component:W}),Object(s.jsx)(p.a,{path:"/",exact:!0,component:y})]})}}]),n}(i.a.Component));r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.99d3d7c0.chunk.js.map