import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private loader: ToastService
  ) {}

  profileId!: number;
  profileData: any;
  pageData: any;
  subscription!: Subscription;
  routerSubscription!: Subscription;

  ngOnInit(): void {
    this.loader.loaderActive.set(true);
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      this.getData(this.profileId);
    });
  }

  getData(id: number): void {
    this.subscription = this.apiService
      .getDataFromServer('profiles')
      .subscribe({
        next: (data) => {
          this.profileData = data;
          let profile = this.profileData.find((profile: any) => {
            return profile.id == id;
          });
          if (profile) {
            this.pageData = profile;
          } else {
            console.log('Profile not found for ID:', id);
          }
          setTimeout(() => {
            this.loader.loaderActive.set(false);
          }, 300);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }
}
