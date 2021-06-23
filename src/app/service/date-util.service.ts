import { Injectable } from '@angular/core';
import {
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';
import { addMonths } from 'date-fns/esm';

@Injectable({
  providedIn: 'root',
})
export class DateUtilService {
  constructor() {}

  getDiffToNow(diff: string | number | Date) {
    const result: string[] = [];
    const now: Date = new Date();
    diff = new Date(diff);

    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
