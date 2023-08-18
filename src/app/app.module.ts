import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateComponent } from './create/create.component';

import { provideSvgIcons } from '@ngneat/svg-icon';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { provideSvgIconsConfig } from '@ngneat/svg-icon';

import { deleteIcon } from '@app/svg/delete';
import { doneIcon } from '@app/svg/done';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, SvgIconComponent, FormsModule],
  providers: [
    provideSvgIcons([deleteIcon, doneIcon]),
    provideSvgIconsConfig({
      sizes: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '25px',
        xxl: '30px',
      },
      defaultSize: 'md', // Default size to be used
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
