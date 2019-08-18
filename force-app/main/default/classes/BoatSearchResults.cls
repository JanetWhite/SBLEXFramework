public class BoatSearchResults {
    @auraEnabled
    public 	static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> boats = new List <Boat__c>();
            
        if(boatTypeId == ''){
            boats = [select Id, Picture__c, Contact__r.Name from Boat__c order by name];
        }else{
            boats = [select Id, Picture__c, Contact__r.Name from Boat__c where BoatType__c =: boatTypeId order by name ];
        }
        return boats;
    }
}