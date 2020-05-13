import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordDetail } from './forgot-password.interface';

@Component({
  selector: 'app-login',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  username: string = '';
  email: string = '';

  constructor(
    public router: Router
    // private authService: AuthenticateService,
    // public commonDataStreamService : CommonDataStreamService,
    // private globals: Globals,
    // private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {

  }

  onPasswordReset(model) {

  //   this.authService.resetUserPassword(model)
  //   .then(
  //     (response) => {
  //       if ( response.result === "success" ) {
  //         alert( response.message );
  //         this.router.navigate(['/login']);
  //       } else {
  //         alert( response.message );
  //       }
  //     }
  //   );
  
  }

}
