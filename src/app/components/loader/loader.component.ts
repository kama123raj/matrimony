import { Component, effect } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: boolean = true;
  constructor(private loader: ToastService) {
    effect(() => {
      this.isLoading = this.loader.loaderActive();
    });
  }
}
