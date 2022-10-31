import { Component, OnInit } from '@angular/core';
import { faGithub, faWhatsapp, faTelegram, faLinkedin, faGoogle, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;
  faTelegram = faTelegram;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  faContactCard = faContactCard;
  faWhatsappSquare = faWhatsappSquare;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

  goToLigas(medio: string) {
    //*REDIRIGIR EN UNA PESTAÑA NUEVA
    switch (medio) {
      case "whatsapp":
        // https://wa.me/522228634123
        break;
      case "telegram":
        // https://t.me/Joaquin_CR
        break;
      case "linkedin":
        // https://www.linkedin.com/in/joaquin-carre%C3%B1o-rodriguez-52bbb320b
        break;
    }
  }

}
