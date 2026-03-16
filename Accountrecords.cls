public with sharing class Accountrecords {
    @auraEnabled(cacheable=true)
    public static List<Account>getAccountRecords() {
           return [SELECT Id, Name, Phone,Industry, Website FROM Account LIMIT 5];
    }
}
