import { LightningElement,wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/GetAccountRecords.getaccrecords'
export default class WireApexWithParams extends LightningElement {
   
    selectedType;
    @wire(getAccountRecords,{type:'$selectedType'})
    accountRecords;
    get options(){
        return [
            { label: 'Partner', value: 'Partner' },
            { label: 'Person', value: 'Person' }
        ]
    }
     handleChange(event) {
        this.selectedType = event.target.value;
    }
}