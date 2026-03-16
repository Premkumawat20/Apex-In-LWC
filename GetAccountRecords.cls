public with sharing class GetAccountRecords {
     @AuraEnabled(cacheable=true)
    public  static List<Account>getaccrecords(String type) {
             return [SELECT Id, Name, Phone,Industry, Website FROM Account where Type=:type LIMIT 5];
    }
}