import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
fetchUsers(): Observable<any>{

return this.http.get("https://reqres.in/api/users");


}

}
