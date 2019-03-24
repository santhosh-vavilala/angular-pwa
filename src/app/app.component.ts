import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SwPush } from '@angular/service-worker';

const VAPID_PUBLIC = 'BEOcNg4XUIDBokPhzy_5gqYHqdHcnnITtyZP8O4tULsFMTGaIjVenwRTbp97TsSrBh_IzOMOkrbxE-waSCFFFnk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items;
  constructor(private dataService: DataService, private swPush: SwPush){
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC
        })
        .then(subscription => {
          // send subscription to the server
          console.log(subscription);
        })
        .catch(console.error);
    }
  }

  ngOnInit(){
    this.dataService.getPosts().subscribe(x => {this.items = x});
  }
}
