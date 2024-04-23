import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddFilterComponent } from './add-filter.component';
import { FilterCriteriaComponent } from './filter-criteria/filter-criteria.component';
import { NgbActiveModal, NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddFilterComponent,
    FilterCriteriaComponent
  ],
  imports: [
    BrowserModule,
    NgbDatepicker,
    FormsModule,
    NgbInputDatepicker,
  ],
  providers: [
    NgbActiveModal
  ],
  exports: [
    AddFilterComponent
  ]
})
export class AddFilterModule { }
