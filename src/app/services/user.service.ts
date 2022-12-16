import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { UserLoginResponse } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.API_AUTH;
  user$: BehaviorSubject<string>  = new BehaviorSubject(localStorage.getItem("user") || '');

  get getUser() {
    return this.user$.asObservable();
  }

  set setUser(name: string) {
    localStorage.setItem("user", name);
    this.user$.next(name)
  }

  constructor(private http: HttpClient) { }

  login(user: any): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.url}/login`, user);
  }

  logout(): void {
    localStorage.removeItem("user");
    this.setUser = '';
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem("user");
    if(!user || this.user$.value === '') return false;
    return true;
  }
}
