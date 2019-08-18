({
	onSearch : function(component, event , boatTypeId) {
		var action = component.get('c.getBoats');
        action.setParams({
            "boatTypeId" : boatTypeId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' && component.isValid()){
                component.set('v.boats' , response.getReturnValue());
            }else{
                
            }
        });
        $A.enqueueAction(action);
	}
})