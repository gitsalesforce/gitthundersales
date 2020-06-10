public with sharing class contacttrack {
  @AuraEnabled(cacheable=true)
  public static list<Contact> concheck(){
        return [select id,name from Contact ;      
  }
}
