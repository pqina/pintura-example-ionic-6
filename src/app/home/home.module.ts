import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { AngularPinturaModule } from '@pqina/angular-pintura';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, AngularPinturaModule],
    declarations: [HomePage],
})
export class HomePageModule {}
