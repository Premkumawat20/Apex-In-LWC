import { LightningElement,wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/Accountrecords.getAccountRecords';
export default class ApexInLwc extends LightningElement {
    @wire(getAccountRecords)
    accountRecords;

    
}