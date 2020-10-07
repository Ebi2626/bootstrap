import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu.component';
import { SliderComponent } from './home/slider/slider.component';
import { TextSectionComponent } from './home/text-section/text-section.component';
import { CardListComponent } from './home/card-list/card-list.component';
import { CardComponent } from './home/card-list/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TabbedInterfaceComponent } from './about/tabbed-interface/tabbed-interface.component';
import { TabComponent } from './about/tabbed-interface/tab/tab.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    SliderComponent,
    TextSectionComponent,
    CardListComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    TabbedInterfaceComponent,
    TabComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
