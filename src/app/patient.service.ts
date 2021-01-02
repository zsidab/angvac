import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PATIENTS } from './test-patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getPatients(): Patient[] {
    return PATIENTS;
  }
  constructor() { }
}
