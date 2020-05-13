import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';


@NgModule({
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule {
}
