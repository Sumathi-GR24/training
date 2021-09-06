import { LightningElement } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
            { label: 'Canceled', value: 'canceled' },
            { label: 'Closed', value: 'closed'}
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
