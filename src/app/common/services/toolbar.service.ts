import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private addBtnClickSubject = new Subject<void>();
  buttonClick$ = this.addBtnClickSubject.asObservable();

  emitAddButtonClick() {
    this.addBtnClickSubject.next();
  }
}