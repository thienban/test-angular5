import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from "rxjs";

import {Albulm} from './albulm'

@Injectable()
export class DataService {

    AlbulmSubject: BehaviorSubject<Albulm[]> = new BehaviorSubject([]);

constructor(private http: HttpClient) {
    this.refresh();
 }

private dataUrl = 'https://jsonplaceholder.typicode.com/photos';  

    /** GET data from the server */
    getData (): Observable<Albulm[]> {
    return this.http.get<[Albulm]>(this.dataUrl)
    }

    lister(): Observable<Albulm[]> {
        // Make the HTTP request:
        return this.AlbulmSubject.asObservable();
      }

    refresh() {
        this.http
          .get<Albulm[]>(this.dataUrl)
          .subscribe(als => this.AlbulmSubject.next(als));
    }

    sauvegarder(newAlbulm: Albulm): Observable<Albulm> {
        const httpOptions = {
          headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.http
          .post<Albulm>(
            this.dataUrl,
            JSON.stringify(newAlbulm),
            httpOptions
          )
          .map(cols => {
            this.refresh();
            return cols;
          });
    }
}