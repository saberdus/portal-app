import { NgModule } from "@angular/core";
import { MatButtonModule, MatToolbarModule, MatCardModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
})
export class CustomMaterialModule { }
