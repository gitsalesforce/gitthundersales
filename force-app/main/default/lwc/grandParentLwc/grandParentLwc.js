import { LightningElement, api } from 'lwc';

export default class GrandParentLwc extends LightningElement {
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess1(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
    }
    handleSubmit1(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
}