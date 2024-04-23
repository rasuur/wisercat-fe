import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Selection } from '../../model/Selection';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../../model/Filter';
import { FilterService } from '../../service/filter.service';
import { CriteriaType, YearCriteriaType } from '../../model/CriteriaType';
import { CriteriaRow } from '../../model/CriteriaRow';
import { Router } from '@angular/router';

@Component({
  selector: 'add-filter',
  templateUrl: './add-filter.component.html',
  styleUrls: ['./add-filter.component.css']
})
export class AddFilterComponent implements OnInit {

  @Input() filter: Filter = {
    title: '',
    criterias: [ this.getDefaultCriteria() ],
    category: ''
  };
  @Input() isModal: boolean = true;
  @ViewChild('modal') modal: any;
  Category = Selection;


  constructor(private activeModal: NgbActiveModal,
              private filterService: FilterService) { }

  ngOnInit() {
    if (!this.filter.criterias || this.filter!.criterias!.length === 0) {
      this.filter.criterias = [this.getDefaultCriteria()];
    }
  }

  addCriteria() {
    this.filter.criterias!.push(this.getDefaultCriteria());
  }

  removeCriteria(i: number) {
    this.filter.criterias!.splice(i, 1);
  }

  saveFilterAndCloseModal() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  onFilterFormSubmit() {
    this.filterService.addFilter(this.filter).subscribe(() => {});
    location.reload();
  }

  changeSelection(event: any) {
    this.filter.category = event.target.value;
  }

  getDefaultCriteria(): CriteriaRow {
    return { type: CriteriaType.AMOUNT, additionalType: YearCriteriaType.EQUALS, choice: "" };
  }
}
