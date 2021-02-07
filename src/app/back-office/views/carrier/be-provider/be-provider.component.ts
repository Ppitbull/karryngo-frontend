import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  templateUrl: 'be-provider.component.html',
  styleUrls: ['be-provider.component.scss']
})
export class BeProviderComponent {

  beCarrierForm: FormGroup
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,) { }
    
  ngOnInit(): void {
    this.beCarrierForm = this.formBuilder.group({
      'field_name': ['', Validators.required],
      'field_description': ['', ],
      'field_location': ['', ],
      'field_fieles': ['', ],
    });
  }



    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
       
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  showNotification(from, align, colortype, icon, text) {

    $.notify({
      icon: icon,
      message: text
    }, {
      type: colortype,
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }

}
