import { Component } from '@angular/core';
import { LoginService } from '../../../services/login/';
import { HttpClient } from '../../../services/main.service';
import { AppState } from '../../app.service';
import { Routes, Router, RouterModule } from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    LoginService,
    RouterModule
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // Set our default values
  // TypeScript public modifiers
  response = {};
  constructor(public appState: AppState, private loginService: LoginService, private router: Router) {

  }

  clicked(){
    var router = this.router;
    this.loginService.postLogin({ email: 'carlosreyesk@gmail.com', password: 'password'}).subscribe(
      function(res){ 
        if(res.success == false){
          
        }else{
          router.navigateByUrl('/dashboard');
        }
       });
  }

  logout(){
    this.loginService.getLogout().subscribe(
      function(dat){ console.log(dat) });
  }

  ngOnInit() {
    // console.log('hello `Login` component');
    // this.loginService.postLogin({ email: 'carlosreyesk@gmail.com', password: 'password'}).subscribe(
    // function(dat){
      const router = this.router;
      this.loginService.getLogin().subscribe(function(data){
      if(data.success == false){
        // this.router.navigate(['/about'], {});
          console.log("try again");
      }else{
         router.navigateByUrl('/dashboard');
      }
    });
    // });
  }

  submitState(value: string) {
    console.log('submitState', value);
    // this.appState.set('value', value);
    // this.localState.value = '';
  }
}
