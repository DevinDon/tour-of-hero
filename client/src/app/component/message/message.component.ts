import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  constructor(
    public app: AppService,
    public messageService: MessageService
  ) { }

  ngOnInit() { }

}
