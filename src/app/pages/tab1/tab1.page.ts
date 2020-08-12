import { Component, OnInit } from '@angular/core';
import { DataService }  from '../../services/data.service';
import { dataApi, question } from 'src/app/Interfaces/interfaces';
import { ModalController } from '@ionic/angular'
import { ResultsPage } from '../results/results.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit{

  starting = true;
  data: question[] = [];
  answers: any[] = [];
  current :number = -1;
  selectedValue: boolean = true;
  currentQestion: question;
  score :any = 0;
  percentage = '';

  constructor(private service: DataService,
              private modalCtrl: ModalController) {}

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.getData().subscribe( 
      (resp: dataApi) => {
        this.data = resp.results;
        console.log(this.data);
      }
    )
  }

  showQuestion(){
    this.starting = false;
    this.current = this.current + 1;
    this.currentQestion = this.data[this.current];
  }

  netxQuestion(answer){
    this.current = this.current + 1;
    

    if(this.current === 9 ){
      this.percentage = (this.score/10) * 100 + ' %';
      let all: any = {
        score: this.score,
        percentage: this.percentage,
        answers: this.answers
      }
     this.showEnd(all);
    } else {
      if(this.current >0){
       this.checkAnswer(answer);
      }
      this.currentQestion = this.data[this.current];
      console.log(this.answers)
      console.log(this.score)
    }
  }

  firstTime(){
   
  }

  checkAnswer(answer){
    let completeAnswer = {question:  this.currentQestion.question, answer:true};
    if( this.currentQestion.correct_answer.toLowerCase() === answer.toString() ) {
      this.score = this.score + 1;
      completeAnswer.answer = true
      this.answers.push(completeAnswer);
    } else {
      completeAnswer.answer = false;
      this.answers.push(completeAnswer);
    }
  }

  async showEnd( allData){
   
    const modal = await this.modalCtrl.create({
      component: ResultsPage,
      componentProps:{
        allData
      }
    });
    modal.present();
    this.starting = true
    this.data = [];
    this.answers = [];
    this.current = -1;
    this.getData()
    this.currentQestion = this.data[this.current];
  }

  

}