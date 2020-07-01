import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './custom-popup-modal.component.html'
})
export class CustomPopupModalComponent {
  @Input() message;
  @Output() passData: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  passBack(val:boolean) {
    this.passData.emit(val);
    this.activeModal.dismiss('Cross click')
    }
}