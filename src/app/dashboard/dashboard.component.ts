import { Component } from '@angular/core';
import { LoginService } from '../../services/login/';
import { HttpClient } from '../../services/main.service';
import { AppState } from '../app.service';
import { Routes, Router, RouterModule } from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'dashboard'
  selector: 'dashboard',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    LoginService,
    RouterModule
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './dashboard.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor(public appState: AppState, private loginService: LoginService, private router: Router) {

  }

  logout(){
    const router = this.router;
    this.loginService.getLogout().subscribe(
      function(dat){
        if(dat.success == true){
          router.navigateByUrl('/');
        }  
      });
  }

  ngOnInit() {
   
  }

}
