import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceServiceService {

  URL = 'https://bordeaux-gfr-hack.javarover.wilders.dev/prescriptions';

  constructor(private http: HttpClient) { }

  getPrescriptions() {
    return this.http.get<any[]>(this.URL);
  }
}
