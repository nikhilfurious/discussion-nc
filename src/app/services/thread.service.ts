import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IThreads } from "../models/thread.interface";

@Injectable({ providedIn: 'root' })
export class DiscussionsService {
  
    constructor(private httpClient: HttpClient) { 
 
    }

    // fetchThreads(): Observable<IThreads[]> {

    // }
    fetchThreads () {
    
    }
}