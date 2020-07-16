import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent} from './result/result.component';
import {MyCollectionComponent} from './my-collection/my-collection.component';
import {UploadComponent} from './upload/upload.component';
import {AuthGuard} from './shared/services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: ResultComponent },
  { path: 'my-collection', component: MyCollectionComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
