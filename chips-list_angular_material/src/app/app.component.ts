import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chips-list_angular_material';
  // Teclas separadoras. 
  readonly separatorKeys = [ENTER, COMMA] as const;
  socialPlatforms:string[] = [];
  selected:string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) this.socialPlatforms.push(value);
    // Limpiamos el input
    event.chipInput!.clear();
  }
  
  remove(value: string): void {
    let index = this.socialPlatforms.indexOf(value);
    if (index >= 0) this.socialPlatforms.splice(index, 1);
    this.changeSelection(value, true);
  }

  changeSelection(value:string, onlyRemove = false){
    const index = this.selected.indexOf(value);
    if (index >= 0) this.selected.splice(index, 1);
    else if(!onlyRemove) this.selected.push(value);
  }

  isSelected = (item:string) => this.selected.includes(item);
  getSrc = (item:string) => logos[item.toLowerCase()];
}

const logos:{[key:string]:string} = {
  facebook: "../assets/logos/facebook.svg",
  instagram: "../assets/logos/instagram.png",
  tiktok: "../assets/logos/tiktok.png",
  youtube: "../assets/logos/youTube.webp"
}



