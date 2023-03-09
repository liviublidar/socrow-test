import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const helloMessage = {
      "message": "Hello from the backend :)"
    }
    return JSON.stringify(helloMessage);
  }
}
