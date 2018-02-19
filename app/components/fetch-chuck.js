import Component from '@ember/component';




export default Component.extend({
	
	gotJoke: false,
	joke: '',
	actions:{
		getJoke: function(){
			var that = this;
			$.ajax({
				type: 'GET',
				url: 'https://api.chucknorris.io/jokes/random',
				success: function(response){
					console.log(response.value)
					that.setProperties({
						joke: response.value,
						gotJoke: true
					});

				},
				error: function() { 
					alert("Jokes on you");
				}
			});
		}
	}

});
