import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { PATIENTS } from '../test-patients';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private heroService: PatientService) {}

  getPatients(): void {
    this.patients = this.heroService.getPatients();
  }


  selectedPatient : Patient;


  ngOnInit(): void {
      this.getPatients();
  }

  onSelect(patient: Patient): void {
  this.selectedPatient = patient;
}

}
