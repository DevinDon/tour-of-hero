import { BaseHandler } from '@rester/core';

export class CORSHandler extends BaseHandler {

  handle(next: () => Promise<any>): Promise<any> {
    this.response.setHeader('Access-Control-Allow-Origin', '*');
    this.response.setHeader('Access-Control-Allow-Methods', '*');
    this.response.setHeader('Access-Control-Allow-Headers', '*');
    this.response.setHeader('Access-Control-Max-Age', 86400);
    return next();
  }

}
