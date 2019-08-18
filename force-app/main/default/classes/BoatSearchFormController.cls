public class BoatSearchFormController {

@AuraEnabled
    public  Static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> boatTypes = [select Id, name from BoatType__c order by name];
        return boatTypes;
        }
}