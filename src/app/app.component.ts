import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Data$: any
  title = 'Interceptor_practice';
  constructor(private apiService : ApiService){
  }

  public callValidApi(){
    this.apiService.getValidApi().subscribe(
      (response)=>{
        console.log("Valid API Response");
        this.Data$=response;
      },
      (error)=>{
          console.log("error",error);
      }
    );
  }

  public callFakeApi() {
    this.Data$=null;
    this.apiService.getFakeApi().subscribe(
      (response) => {
        console.log('Fake API Response:', response);
      },
      (error) => {
        console.warn('Fake API Error:', error);
      }
    );
  }


}
