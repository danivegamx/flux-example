import Reflux from 'reflux';
import $ from 'jquery';
import ImageAction from '../actions/ImageAction';

let ImageStore = Reflux.createStore({
	'url':'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	'listenables':[ImageAction],
	'imageList' : [],
	'init' : function() {
		this.fetchList();
	},
	'fetchList': function() {
		let tags = [ 'music', 'animals', 'food', 'sport' ];
		let randomTag = tags[Math.floor(Math.random()*tags.length)];
		$.ajax({
			url						: 	this.url+'&tag=${randomTag}',
			dataType			: 	'jsonp',
			jsonpCallback :   'jsonFlickrFeed',
			cache					: 	false,
			context				:		this,
			success				:   function(data) {
				console.log('Fetch ok!');
				this.imageList = data.items;
				this.trigger(this.imageList);
			}
		});
	}
});

export default ImageStore;
