# User Info Demo App
## Getting started
### Requirments
[Node and NPM](https://nodejs.org/en/)
### Install
To install required packages run the following commands in order in the root project directory. 
 ```
$ npm install
$ (cd client && npm install)
 ```

### Run
To run the app run the following command in the root project directory.
```
$ npm run dev
```

### Navigate to:
```
http://localhost:3000/
```

### App preview:
<img src="./img/screenshot.png" alt="App preview"/>

### Notes
The warnings in the console are related to the visualizer being used ([Wavesurfer.js](https://wavesurfer-js.org/)). This visualizer is still using the depricated [ScriptProcessorNode](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) of the Web Audio APIrather than the updated AudioWorklet or Web Worker alternative. See the open issue here: https://github.com/katspaugh/wavesurfer.js/issues/1281
