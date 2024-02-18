import { Component, effect } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
interestedCount:any = 0;
shortlistCount:any = 0;
  constructor(private count:ToastService) {
    effect(()=>{
    this.interestedCount =  this.count.interestedData();
     this.shortlistCount =  this.count.shortlistedData();
    })
  }

}
