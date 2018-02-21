import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import {Albulm} from './albulm'

@Injectable()
export class DataService {

constructor(private http: HttpClient) { }

private dataUrl = 'https://jsonplaceholder.typicode.com/photos';  

    /** GET data from the server */
    getData (): Observable<Albulm[]> {
    return this.http.get<[Albulm]>(this.dataUrl)
    }
}