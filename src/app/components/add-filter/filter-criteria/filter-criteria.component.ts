import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CriteriaRow } from '../../../model/CriteriaRow';
import { CriteriaType, DateCriteriaType, TitleCriteriaType, YearCriteriaType } from '../../../model/CriteriaType';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'filter-criteria',
  templateUrl: './filter-criteria.component.html'
})
export class FilterCriteriaComponent implements OnInit {

  @Input() criteria!: CriteriaRow;
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  CriteriaType = CriteriaType;
  Object = Object;
  dateStruct!: NgbDateStruct;

  ngOnInit() {
  }

  getAdditionalTypeEnum(): any {
    switch (this.criteria.type) {
      case CriteriaType.AMOUNT:
        this.criteria.choice = 0;
        return YearCriteriaType;
      case CriteriaType.TITLE:
        this.criteria.choice = "";
        return TitleCriteriaType;
      case CriteriaType.DATE:
        return DateCriteriaType;
    }
  }

  changeType(event: any) {
    this.criteria.type = event.target.value;
  }

  changeAdditionalType(event: any) {
    this.criteria.additionalType = event.target.value;
  }

  changeValue(event: any) {
    this.criteria.choice = event.target.value;
  }

  removeCriteria() {
    this.remove.emit();
  }

  changeDate() {
    this.criteria.choice = `${this.dateStruct.year}-${this.dateStruct.month}-${this.dateStruct.day}`;
  }
}
