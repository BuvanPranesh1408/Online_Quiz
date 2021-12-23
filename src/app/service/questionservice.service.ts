import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(private http: HttpClient) {}
    getquestion(){
      return this.http.get<any>("assets/question.json")
    }
    angularquestion(){
      return this.http.get<any>("assets/angular.json")
    }
    htmlquestion(){
      return this.http.get<any>("assets/html.json")
    }
    javascriptquestion(){
      return this.http.get<any>("assets/javascript.json")
    }
}
