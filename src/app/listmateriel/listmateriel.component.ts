import { Component } from '@angular/core';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent {
  materiels = [
    { nom: 'Scanner', reference: 'e7f8', image: 'assets/scanner.jpg', 
    prix: 253.45, etat: 'réparé' },
    { nom: 'Ecran', reference: 'ec18', image: 'assets/ee.jpg', 
    prix: 403.5, etat: 'endommagé' },
    { nom: 'Imprimante', reference: 'imp88', 
    image: 'assets/impri.jpg', prix: 189.5, etat: 'endommagé' },
    { nom: 'Pc Portable', reference: 'hp58',
     image: 'assets/pc.jpg', prix: 1512.8, etat: 'réparé' }
  ];

  
  reparerMateriel(materiel: any) {
    materiel.etat = 'réparé';
  }
}


