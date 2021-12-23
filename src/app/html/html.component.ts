import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../service/questionservice.service';
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  public name: string="";
  public questionlist: any = [];
  public currentquestion:number = 0;
  correctanswer:number=0;
  wronganswer:number=0
  progress:string="0"
  isquizcompletd:Boolean= false;
 

  constructor(private questionservice : QuestionserviceService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getallquestion();
  }
  getallquestion(){
    this.questionservice.htmlquestion()
    .subscribe(res=>{
     this.questionlist= res.questions; 
    })

  }
  nextquestion(){
    this.currentquestion++;
  }
  previousquestion(){
      this.currentquestion--;
  }
  answer(currentqo:number,option:any){
    if(currentqo===this.questionlist.length){
      this.isquizcompletd = true;
    }
    if(option.correct){
      console.log("correct")
      this.correctanswer++
      setTimeout(()=> {
        this.currentquestion++;
        this.getprogress();
      },1000);

    }else{
     setTimeout(()=>{
      console.log("Wrong anser")
      this.currentquestion++;
      this.wronganswer++;
      this.getprogress();
     },1000)

    }
  }
  getprogress(){
    this.progress = ((this.currentquestion/this.questionlist.length)*100).toString();
    return this.progress;
  }
}
