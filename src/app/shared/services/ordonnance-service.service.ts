import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceServiceService {

  constructor(private httpClient: HttpClient) { }

  getPrescriptions(): Observable<Prescription[]> {
    return this.httpClient.get<Prescription[]>(environment.DATABASE_URL + '/prescriptions');
  }
}
