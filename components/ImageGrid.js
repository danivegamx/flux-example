import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
  mixins:[Reflux.connect(ImageStore,'imagestore')],
  render(){
    if(this.state.imagestore) {
      return <div>
      {
        this.state.imagestore.map((image) => {
          return <div className="image">
                    <a href={image.link}>
                      <img src={image.media.m}/>
                    </a>
                  </div>
        })
      }
      </div>
    }
    else {
      return (<div>No images to show!</div>);
    }
  }
});

export default ImageGrid;
