import { Component, OnInit } from '@angular/core';
import { faGithub, faWhatsapp, faTelegram, faLinkedin, faGoogle, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
//import { fa } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit 
{
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;
  faTelegram = faTelegram;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  faWhatsappSquare = faWhatsappSquare;

  constructor() 
  { 
    //
  }

  ngOnInit(): void 
  {
    //
  }

}
