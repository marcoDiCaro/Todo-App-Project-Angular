import { Component, OnInit, Input } from '@angular/core';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css'],
})
export class NotificaComponent implements OnInit {
  @Input() notificaObj: any;

  faXmark = faXmark; //FontAwesome Icon

  constructor() {}

  ngOnInit(): void {}

  rimuoviNotifica() {
    this.notificaObj.statoNotifica = false;
  }
}
