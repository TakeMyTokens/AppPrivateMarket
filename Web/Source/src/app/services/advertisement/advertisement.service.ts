import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAdvertisement } from 'src/app/models/advertisement';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  url = `${environment.server.api.host}${environment.server.api.host.endsWith('/')?'':'/'}api/v${environment.server.api.version}/advertisements/`;

  constructor(private http: HttpClient) { }
  getAll(active: boolean = true): Observable<IAdvertisement[]> {
    return this.http.get(`${this.url}?active=${active}`) as any;
  }
  getById(id: string): Observable<IAdvertisement> {
    return this.http.get(`${this.url}?id=${id}`) as any;
  }
  add(advertisement: IAdvertisement): Observable<IAdvertisement> {
    return this.http.post(`${this.url}`, advertisement) as any;
  }
  edit(id: string, advertisement: IAdvertisement): Observable<IAdvertisement> {
    return this.http.post(`${this.url}?id=${id}`, advertisement) as any;
  }
  deleteById(id: string): Observable<IAdvertisement> {
    return this.http.delete(`${this.url}?id=${id}`) as any;
  }
}
