import { ComponentType } from '@angular/cdk/portal';
import { Injectable, isDevMode, OnDestroy, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { destory } from './other/destory';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  public static API$HOST = 'https://api.don.red/tour-of-heroes';

  public status = {
    loading: 0
  };

  private subjections = {
    loading: {
      value: 0,
      subject: new Subject<number>()
    }
  };

  private subscriptions: Subscription[] = [];

  private inits: Map<string, () => any> = new Map();

  constructor(
    public bar: MatSnackBar,
    public dialog: MatDialog
  ) {
    if (isDevMode()) {
      AppService.API$HOST = 'http://localhost:8080';
    }
    this.subscriptions.push(
      this.subjections.loading.subject
        .pipe(auditTime(16))
        .subscribe(v => this.status.loading = v)
    );
  }

  busy() {
    this.subjections.loading.subject.next(++this.subjections.loading.value);
  }

  free() {
    this.subjections.loading.subject.next(--this.subjections.loading.value);
  }

  openBar(
    message: string,
    action: string = 'OK',
    config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    }
  ) {
    return this.bar.open(message, action, config);
  }

  closeBar() {
    this.bar.dismiss();
  }

  openDialog<T>(
    component: ComponentType<T> | TemplateRef<T>,
    config?: MatDialogConfig
  ) {
    return this.dialog.open(
      component,
      Object.assign(
        config || {},
        {
          width: '100vw',
          maxWidth: '20rem'
        }
      )
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  setInit(component: string, method: () => void) {
    this.inits.set(component, method);
  }

  runInit(component: string) {
    if (this.inits.has(component)) {
      this.inits.get(component)();
    }
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
