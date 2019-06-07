import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css']
})
export class Angular4Component implements OnInit {

  troca: boolean = true;
  tecnologias: string[] = ['Angular 2', 'Angular 4', 'JavaScript', 'html', 'CSS'];
  email: string = "teste@teste.com";

  constructor() { }

  ngOnInit() {
  }

  mudar() {
    this.troca = !this.troca;
  }

}
