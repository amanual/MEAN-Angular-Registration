import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thanks = '';
  wish = '';
  user = {
    firstName:'',
    lastName:'',
    email: '',
    password: '',
    password_conf: '',
    birthday: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    radio:'',

};
  users = [];
  onSubmit(){
    // this.users.push(this.user);
    // this.user = {username:''}
    console.log("this happens on submit");
    this.thanks = "Thank you for registering with us " + this.user.firstName + ".We just sent you a confirmation email at " + this.user.email + " , and we will send all mail to "+ this.user.street + " ," + this.user.city + " ," + this.user.state + "."
    this.wish = "Have a wonderful day!"
  }
}
