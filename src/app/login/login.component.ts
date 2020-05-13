import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from './loginform.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username: string = '';
    password: string = '';

    constructor(
        public router: Router
    ) {
    }

    ngOnInit() {
    }

    onLoggedin(model: LoginForm) {

        // this.spinner.show();
        // this.authService.authenticateUser(model)
        //     .then(
        //         (response) => {
        //
        //             let body = response;
        //             if ( body.status ) {
        //
        //                 this.globals.clearSessionStorage();
        //
        //                 sessionStorage.setItem('ili', this.globals.getLocalEncryptData({ isLoggedin: 'true' }));
        //                 sessionStorage.setItem('ur', this.globals.getLocalEncryptData({ userRole: body.role }));
        //                 sessionStorage.setItem('un', this.globals.getLocalEncryptData({ username: body.empid }));
        //                 sessionStorage.setItem('ufl', this.globals.getLocalEncryptData({ userFullName: body.empname }));
        //                 sessionStorage.setItem('tkn', this.globals.getLocalEncryptData({ token: body.token }));
        //
        //                 this.globals.resetUserDetails();
        //
        //                 if ( body.lpc_at === null ) {
        //                     this.router.navigate(['/password', "null"]);
        //                 } else {
        //                     this.router.navigate(['/dashboard']);
        //                 }
        //
        //             } else {
        //                 alert( body.message );
        //                 this.globals.logout();
        //                 this.spinner.hide();
        //             }
        //         },
        //         (error) => {
        //           this.spinner.hide();
        //           console.log(error);
        //         }
        //     );

    }

}
