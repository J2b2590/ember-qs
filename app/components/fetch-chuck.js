import Component from '@ember/component';




export default Component.extend({

	willRender() {
		$.getJSON('https://api.chucknorris.io/jokes/random').then(data =>{
			console.log(data.value)

			this.set('chuck', data.value);
			
		});
	}

	

 });
