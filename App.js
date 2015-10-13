import React from 'react';
import ImageGrid from './components/ImageGrid';
import ImageAction from './actions/ImageAction';

setTimeout(() => {
  ImageAction.fetchList();
}, 5000);

React.render(<ImageGrid />,document.getElementById('container'));
