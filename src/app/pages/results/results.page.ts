import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  @Input() allData;

  newFormat: any[] = [];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.allData);
    this.allData.answers.forEach(element => {
      
    });
  }

  back(){
    this.modalCtrl.dismiss();
  }

}
