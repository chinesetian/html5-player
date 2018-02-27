import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../components/player';

// import 'src/style';

var div = document.createElement('div');
div.setAttribute('id', 'test');
document.body.appendChild(div);

ReactDOM.render(
  <Player file="https://media.w3.org/2010/05/sintel/trailer.mp4" />,
  document.getElementById('test')
);