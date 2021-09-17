import React from 'react';
import Waveform from './Waveform/Waveform'
let listOfTracks =[];

class TracksList extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    
    render(){
        listOfTracks = this.importAll(require.context('../../public/uploads', false, /\.(wav|mp3)$/));
        return(
          <div>
              {
                listOfTracks.map(
                      (track, index) => <Waveform key={index} url={track} filename={track.split("/").pop().replace(/\..*$/,"")}></Waveform> 
                    )
              }
          </div>
        )
    }
}

export default TracksList;