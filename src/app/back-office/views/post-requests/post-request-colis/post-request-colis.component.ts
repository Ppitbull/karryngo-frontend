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
  posts: any[];

  constructor(
    private router: Router,
    public packageService: PackageService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    // this.posts = this.packageService.getPackageList();
    // console.log(this.posts);
    // this.packageService.getPackages();
    // this.initPage();
    this.packageService.getAllPackagesUser();
    this.posts = JSON.parse(localStorage.getItem('packages-list'));
    console.log('poste variable', this.posts);
  }

  pushPackageForm() {
    console.log('Second: ', PackageService.currentPackage);
    this.packageService.packageCreation(PackageService.currentPackage);
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
