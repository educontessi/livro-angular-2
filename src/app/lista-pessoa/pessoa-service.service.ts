import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  constructor() { }

  getPessoas(): string [] {
    return ['João', 'Maria', 'Angular	2', 'Eduardo', 'Patricia'];
}

}
