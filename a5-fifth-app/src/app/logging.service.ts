import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

export class LoggingService {
//   constructor(status) {
//     console.log("A server status changed, new status: " + status);
//   }
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
