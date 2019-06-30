import { ComponentType } from '@angular/cdk/portal';
import { Injectable, isDevMode, OnDestroy, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { destory } from './other/destory';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  public static API = 'https://api.don.red/tour-of-heroes';

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
    public dialog: MatDialog,
    public router: Router
  ) {
    if (isDevMode()) {
      AppService.API = 'http://localhost:8080';
    }
    this.subscriptions.push(
      this.subjections.loading.subject
        .pipe(auditTime(16))
        .subscribe(v => this.status.loading = v)
    );
    this.subscriptions.push(
      router.events
        .subscribe(event => event instanceof NavigationEnd && this.runReload())
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

  setReload(path: string, method: () => void) {
    this.inits.set(path, method);
  }

  runReload(path: string = this.router.routerState.snapshot.url) {
    if (this.inits.has(path)) {
      this.inits.get(path)();
    }
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
