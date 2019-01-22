import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = [];

  constructor() { }

  add(message: string) {
    this.message.push(message);
  }

  clear() {
    this.message = [];
  }

}
