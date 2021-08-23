import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { TextFilterComponent } from './components/text-filter/text-filter.component';
import { FlowersListItemComponent } from './components/flowers-list-item/flowers-list-item.component';
import { FlowersApiService } from './services/flowers-api/flowers-api.service';
import { FiltersService } from './services/filters/filters.service';
import { StoreService } from './services/store/store.service';
import { FlowerDetailsResolver } from './resolvers/flower-details.resolver';
import { FlowersListComponent } from './pages/flowers-list/flowers-list.component';
import { FlowerDetailsComponent } from './pages/flower-details/flower-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    TextFilterComponent,
    FlowersListComponent,
    FlowersListItemComponent,
    FlowerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FlowersApiService,
    FiltersService,
    StoreService,
    FlowerDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
