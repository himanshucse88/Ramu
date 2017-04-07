import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '../../validators/CustomValidators';
import { LoginModel } from '../../models/login_model'
@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
    // providers: [Storage]
})
export class LoginPage {
loginForm: FormGroup;
  userId: AbstractControl;
  password: AbstractControl;
  loginModel: LoginModel;

      constructor(public navController: NavController,
  public alertController: AlertController, 
  public fb: FormBuilder, 
  public loadingCtrl: LoadingController){
this.loginForm = fb.group({
    'userId': ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
     'password': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(16)])]
    });

    this.userId = this.loginForm.controls['userId'];
    this.password = this.loginForm.controls['password'];

    this.loginModel = new LoginModel();
  }
}