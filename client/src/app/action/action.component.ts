import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material';
import { generate, of, Subscription } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { HeroDetailComponent } from '../hero/hero-detail/hero-detail.component';
import { destory } from '../other/destory';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit, OnDestroy {

  @ViewChild('action', { static: true }) actionElement: MatButton;

  @ViewChild('overlay', { static: true }) overlayElement: TemplateRef<any>;

  public overlayRef: OverlayRef;

  private subscriptions: Subscription[] = [];

  constructor(
    public app: AppService,
    private overlay: Overlay,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    const strategy = this.overlay
      .position()
      .flexibleConnectedTo(this.actionElement._elementRef.nativeElement)
      .withPositions([{
        offsetX: 0,
        offsetY: 0,
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom'
      }]);
    strategy.withLockedPosition(true);
    const config = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: strategy
    });
    this.overlayRef = this.overlay.create(config);
    this.subscriptions.push(
      this.overlayRef
        .backdropClick()
        .subscribe(() => this.display())
    );
  }

  add() {
    this.app.openDialog(HeroDetailComponent, { data: { id: 0 } });
  }

  display() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this.overlayElement, this.view));
    }
  }

  top() {
    generate(
      window.pageYOffset,
      y => y > 0,
      y => y - 0.05 * y - 10
    ).pipe(
      concatMap(y => of(y).pipe(delay(17)))
    ).subscribe(y => window.scrollTo(0, y));
  }

  bottom() {
    const height = document.body.scrollHeight;
    generate(
      height,
      y => y > 0,
      y => y - 0.02 * y - 10
    ).pipe(
      concatMap(y => of(y).pipe(delay(17)))
    ).subscribe(y => window.scrollTo(0, height - y));
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
