import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-post-request-colis2',
  templateUrl: './post-request-colis2.component.html',
  styleUrls: ['./post-request-colis2.component.scss']
})
export class PostRequestColis2Component implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['PROVIDER', 'SERVICE TYPE', 'DEPARTURE', 'TRIP DURATION', 'TOTAL CAPACITY', 'WEIGHT AVAILABLE', 'VOLUME AVAILABLE'];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({
        provider: 'data',
        service: 'data',
        departure: 'data ',
        total: 'data ',
        weight: 'data ',
        volume: 'data ',
        duration: 'data '
      });
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
