import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-casos-clinicos',
  templateUrl: './formulario-casos-clinicos.component.html',
  styleUrls: ['./formulario-casos-clinicos.component.scss']
})
export class FormularioCasosClinicosComponent implements OnInit {

  formCasosClinicos : FormGroup

  constructor(fb: FormBuilder) {
    this.formCasosClinicos = fb.group({
      'name': [],
    })
   }

  value: string = '';

  ngOnInit(): void {
  }

}
