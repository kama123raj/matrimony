import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  toaster = signal(false);
  tosterText = signal('');
  interestedData = signal(0);
  shortlistedData = signal(0);
  loaderActive = signal(false);
  
}
