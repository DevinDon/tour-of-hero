import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  status = {
    loading: 0
  };

  constructor() { }

  busy() {
    return ++this.status.loading;
  }

  free() {
    return --this.status.loading;
  }

}
