import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  nome: string = "Eduardo";
  constructor() { }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('evento	meuClick do botão');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(valor): void {
    console.log(valor);
  }

  mostraNome(): void {
    console.log(this.nome);
  }

}
