import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PackageService } from '../../../../shared/service/back-office/package.service';

declare var $: any;

@Component({
  selector: 'app-post-request-colis',
  templateUrl: './post-request-colis.component.html',
  styleUrls: ['./post-request-colis.component.scss']
})
@Injectable()
export class PostRequestColisComponent implements OnInit {

  title = 'New package request ';
  titleInterface: string;
  interface1 = true;
  interface2 = false;
  interface3 = false;
  visible = true;
  visiblePrev = false;

  constructor(
    private router: Router,
    public packageService: PackageService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initPage();
  }

  // init the interface package
  initPage() {
    if (this.interface1) {
      this.titleInterface = this.title + '1/3';
      this.visible = true;
      this.visiblePrev = false;
    } else if (this.interface2) {
      this.titleInterface = this.title + '2/3';
      this.visible = true;
      this.visiblePrev = true;
    } else if (this.interface3) {
      this.titleInterface = this.title + '3/3';
      this.visible = false;
      this.visiblePrev = true;
    }
  }

  next() {
    if (this.interface1) {
      this.interface1 = false;
      this.interface2 = true;
      this.interface3 = false;
    } else if (this.interface2) {
      this.interface1 = false;
      this.interface2 = false;
      this.interface3 = true;
    }
    this.initPage();
  }


  prevPage() {
    if (this.interface1) {
      this.titleInterface = this.title + '1/3';
      this.visible = true;
      this.visiblePrev = false;
    } else if (this.interface2) {
      this.titleInterface = this.title + '2/3';
      this.visible = true;
      this.visiblePrev = true;
    } else if (this.interface3) {
      this.titleInterface = this.title + '3/3';
      this.visible = false;
      this.visiblePrev = true;
    }
  }

  prev() {
    if (this.interface2) {
      this.interface1 = true;
      this.interface2 = false;
      this.interface3 = false;
    } else if (this.interface3) {
      this.interface1 = false;
      this.interface2 = true;
      this.interface3 = false;
    }
    this.prevPage();
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

  pushPackageForm() {
    console.log(PackageService.currentPackage);
    this.packageService.packageCreation(PackageService.currentPackage);
  }

}
