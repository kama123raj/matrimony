import { Component, Input, effect } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
 
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
 
tosterData:any;
toastActive:boolean = false;
tostContent!:string;


constructor( private toastService:ToastService) {
   effect(()=>{
    this.toastActive = this.toastService.toaster();
    this.tostContent = this.toastService.tosterText();
  })
}
 
}
