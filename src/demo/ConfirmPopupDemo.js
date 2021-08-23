import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export class ConfirmPopupDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Basic</h5>
                    <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                    <Button onClick={this.confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                    <h5>Using ConfirmPopup tag</h5>
                    <ConfirmPopup target={document.getElementById('button')} visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                        icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject} />
                    <Button id="button" onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
                </div>
            </div>
        )
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<ConfirmPopupDemo />, rootElement);