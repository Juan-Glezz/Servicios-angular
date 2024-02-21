import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlaceHolder } from '../interface/place-holder';


@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  public resultadoPeticion: any; 
  public inputIdGet: string = '';
  public url: string = "https://jsonplaceholder.typicode.com/posts"


  constructor (private http: HttpClient) {

  }

  ngOnInit(){
    this.get();
  }
  get(){
    this.http.get(this.url)
    .subscribe(data => {this.resultadoPeticion = data});
  }

  get2(){
    this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe(data => {this.resultadoPeticion = data;
    console.log(this.resultadoPeticion);
    });
  }
  get3(){
    this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe(
      {
      next:(respuesta: PlaceHolder)=>{
        this.resultadoPeticion = respuesta;
        console.log(this.resultadoPeticion.id);
        console.log(this.resultadoPeticion.userId);
        console.log(this.resultadoPeticion.body);
        console.log(this.resultadoPeticion.title);

      },
      error:(err)=>{console.log("Error");}
    }
    );
  }
  post() {
    this.http.post(this.url, {
      userId: 2,
      id: 200,
      title: 'Titulo Error',
      body: 'Body error'
    })
 .subscribe(data=>{this.resultadoPeticion=data;})
}
put(){
  this.http.put(this.url+"/10", {
    userId: 2,
    title: 'Titulo Error',
    body: 'Body error'
  }).subscribe(data=>{this.resultadoPeticion=data;})
}
patch(){
  this.http.put(this.url+"/10", {
    userId: 2,
    title: 'Titulo Error',
    body: 'Body error'
  }).subscribe(data=>{this.resultadoPeticion=data;})
}
delete(){
  this.http.delete(this.url+"/10").subscribe(data=>{this.resultadoPeticion=data;})
}
}

