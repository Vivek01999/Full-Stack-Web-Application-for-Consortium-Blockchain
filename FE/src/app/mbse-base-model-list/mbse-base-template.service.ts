import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class MBSEBaseTemplateService {
     user: any

    constructor(
        private http: HttpClient
    ) {
        
    }

   
    getMBSEBasetemplateList(){
        return this.http.get(`${environment.API_URL}/getAllBaseModelTemplate`);
      }
}