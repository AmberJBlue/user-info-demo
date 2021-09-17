import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';

class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
      dragSelection: {
        slop: 5
    }
    });

    this.waveform.load(this.props.url);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
  
    return (
     <>
      <WaveformContianer>
        <PlayButton onClick={this.handlePlay} >
          {!this.state.playing ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
        </PlayButton>
        <Wave className={'mt-2'} id={"waveform"} />
        <audio id="track" src={this.props.url} />
      </WaveformContianer>
      <p className={'text-right'}>{this.props.filename}</p>
    </>
    );
  }
};

export default Waveform;