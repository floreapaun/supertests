import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './custom-popup-modal.component.html'
})
export class CustomPopupModalComponent {
  @Input() message;

  constructor(public activeModal: NgbActiveModal) {}
}