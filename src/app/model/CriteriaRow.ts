import {
  CriteriaType, DateCriteriaType, TitleCriteriaType, YearCriteriaType
} from './CriteriaType';

export type CriteriaRow = YearCriteria | TitleCriteria | DateCriteria;

export type YearCriteria = {
  type: CriteriaType.AMOUNT;
  additionalType: YearCriteriaType;
  choice: any;
}

export type TitleCriteria = {
  type: CriteriaType.TITLE;
  additionalType: TitleCriteriaType;
  choice: any;
}

export type DateCriteria = {
  type: CriteriaType.DATE;
  additionalType: DateCriteriaType;
  choice: any;
}
