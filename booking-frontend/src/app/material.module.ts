import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BookingComponent } from './booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, NgbModule],
  exports: [MatButtonModule, MatMenuModule, BookingComponent],
  bootstrap: [BookingComponent],
})
export class MaterialModule {}
