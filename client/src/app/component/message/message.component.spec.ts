import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatModule } from 'src/app/module/mat.module';
import { APPService } from 'src/app/service/app.service';
import { MessageService } from 'src/app/service/message.service';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {

  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatModule],
      declarations: [MessageComponent],
      providers: [
        APPService,
        MessageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('MessageComponent should create', () => {
    expect(component).toBeTruthy();
  });

});
