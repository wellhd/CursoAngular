import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicao',
  templateUrl: './adicao.component.html',
  styleUrls: ['./adicao.component.css']
})
export class AdicaoComponent implements OnInit {

  constructor() {}

  listaHome!: Array<number>;
  value1: number | undefined
  value2: number | undefined
  valorTotal: number | undefined

  public isActive: boolean = false;

  calcularSoma(){
    this.valorTotal = Number(this.value1) + Number(this.value2);

  }

  ngOnInit(): void {
    var lista = new Array<number>();
    for (let index = 0; index < 12; index++) {
      lista.push(index);
    }

    this.listaHome = lista;
  }
  clear(): void{
    this.value1 = undefined;
    this.value2 = undefined;
    this.valorTotal = undefined;

    }

    change(): void {

      this.isActive = !this.isActive;

    }

}
