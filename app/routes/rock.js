import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return ['Robert Plant', 'Jimmy Page', 'Jon Bonham', 'John Paul Jones'];
	}
});
