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
  selectedSocialPlatform:string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) this.selectedSocialPlatform.push(value);
    // Limpiamos el input
    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.selectedSocialPlatform.indexOf(value);
    if (index >= 0) this.selectedSocialPlatform.splice(index, 1);
  }
}


