import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material';
import { Subscription } from 'rxjs';
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

  private overlayRef: OverlayRef;

  private subscriptions: Subscription[] = [];

  constructor(
    public app: AppService,
    private overlay: Overlay,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    console.log(this.actionElement);
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

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
