import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationRoutingModule } from './navigation-routing.module';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    //Material
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [

  ],
})
export class NavigationModule { }