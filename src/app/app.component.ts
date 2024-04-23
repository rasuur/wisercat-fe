import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddFilterComponent } from './components/add-filter/add-filter.component';
import { FilterService } from './service/filter.service';
import { Filter } from './model/Filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal,
              private filterService: FilterService) {
  }

  filters: Filter[] = [];

  ngOnInit(): void {
    this.getFilters()
  }

  private getFilters() {
    this.filterService.getAllFilters().subscribe(result => {
      console.log(result)
      this.filters = result;
    });
  }

  openAddFilter() {
    this.modalRef = this.modalService.open(AddFilterComponent, { size: 'xl', scrollable: true });
  }
}
