// Import Tone.js library
const Tone = require('tone');

// Create a new synthesizer
const synth = new Tone.Synth().toDestination();

// Play the C4 tone
synth.triggerAttackRelease('C4', '4n');
