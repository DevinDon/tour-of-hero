import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  status = {
    loading: 0
  };

  private subjections = {
    loading: {
      value: 0,
      subject: new Subject<number>()
    }
  };

  constructor(
    private bar: MatSnackBar
  ) {
    this.subjections.loading.subject
      .pipe(auditTime(16))
      .subscribe(v => this.status.loading = v);
  }

  busy() {
    this.subjections.loading.subject.next(++this.subjections.loading.value);
  }

  free() {
    this.subjections.loading.subject.next(--this.subjections.loading.value);
  }

  openBar(message: string, action: string = 'OK', config: MatSnackBarConfig = { duration: 3000 }) {
    this.bar.open(message, action, config);
  }

  closeBar() {
    this.bar.dismiss();
  }

}
