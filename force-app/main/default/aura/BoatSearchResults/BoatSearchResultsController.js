({
    doInit : function(component, event, helper) {
        helper.onSearch(component, event , '');
    },
	doSearch : function(component, event, helper) {
		helper.onSearch(component, event, '');
	},
    search : function(component, event, helper) {
        var params = event.getParam('arguments');
        console.log(event);
        component.set('v.boatTypeId', params.boatTypeId);
        helper.onSearch(component, event, params.boatTypeId);
    },
    onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam('boatId');
        component.set('v.selectedBoatId' , boatId);
    },
})