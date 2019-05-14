import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  nomesPessoas: string[] = ['João', 'Maria', 'Angular	2', 'Eduardo', 'Patricia'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomesPessoas;
  }

  addPessoa(nome: string): void {
    this.nomesPessoas.push(nome);
  }

}
