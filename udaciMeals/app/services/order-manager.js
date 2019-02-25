import Service from '@ember/service'; 

export default Service.extend({
	selectedDay: 'Monday',
	
	menuSelection: Object.freeze({
		Monday: {},
		Tuesday: {},
		Wedesday: {},
		Thursday: {},
		Friday: {},
		Saturday: {},
		Sunday: {}
	}),

	setSelectedDayTo(day){
		this.set('selectedDay',day);
	},

	chooseMenuOption(mealCategory, menuItemName){
		this.set('menuSelection.'+ this.get('selectedDay') +'.'+ mealCategory, menuItemName)
	}, 

	removeMenuOption(day, mealCategory){
		this.set('menuSelection.'+day+'.'+mealCategory,'');
	}

});
