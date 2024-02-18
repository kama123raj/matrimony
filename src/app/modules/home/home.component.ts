import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'profileTask';
  recommendedProfile: any;
  myMatchesProfile!: any;
  subscription!: Subscription;

  constructor(private apiService: ApiService, private loader: ToastService) {}

  ngOnInit(): void {
    this.getPagedata();
    this.loader.loaderActive.set(true);
  }

  getPagedata(): void {
    this.subscription = this.apiService
      .getDataFromServer('profiles')
      .subscribe({
        next: (data) => {
          this.recommendedProfile = data;
          this.myMatchesProfile = data;
          setTimeout(() => {
            this.loader.loaderActive.set(false);
          }, 300);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
