App.UserController = Ember.ObjectController.extend(
{
	actions: 
	{
	 	editUser: function() 
		{
     			this.set('isEditing', true);
   		},

   		doneEditingUser: function() 
		{
		        this.set('isEditing', false);

			if (!Ember.isEmpty(this.get('model.name'))) 
			{
				this.get('model').save();
			}
		},
		removeUser: function() 
		{
		    var usr = this.get('model');
		    usr.deleteRecord();
 		    usr.save();
  		},
		selectUser: function(){
    		      var model = this.get('model');
		      var val = !model.get('isSelected');
		      model.set('isSelected', val);
		      model.save();
  		}
	},	
  	isEditing: false,
isSelected: function(key, value){
    		var model = this.get('model');
		return model.get('isSelected');
  	}.property('@each.isSelected')
});
