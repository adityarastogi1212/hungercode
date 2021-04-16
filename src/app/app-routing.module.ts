import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadQrCodeComponent } from './download-qr-code/download-qr-code.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

const routes: Routes = [
  //{ path:':name/download-qr-code', component: DownloadQrCodeComponent},
  { path:'download-qr-code', component: DownloadQrCodeComponent},
  { path:'upload-image', component: UploadImageComponent},
  { path:'view-menu', component: ViewMenuComponent},
  { path:'register', component: RegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'profile', component: ProfileComponent},
  { path:'contact-us', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
