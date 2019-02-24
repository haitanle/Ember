import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	model(params) {
		return Ember.$.get('/menu/'+params.item_name+'.json');
	}
});
