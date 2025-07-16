import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { ResultTableComponent } from './features/market/components/result-table/result-table.component';
import { InstrumentDetailsComponent } from './features/market/components/instrument-details/instrument-details.component';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { provideHighcharts } from 'highcharts-angular';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { PrimengModule } from './primeng.module';
import { VeronaTheme } from './verona.theme';
import { providePrimeNG } from 'primeng/config';
import { HighchartsChartComponent } from 'highcharts-angular';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from '@features/home/home.module';
import { MarketModule } from '@features/market/market.module';


ModuleRegistry.registerModules([AllCommunityModule]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    PrimengModule,
    HighchartsChartComponent,
    SharedModule,
    CoreModule,
    HomeModule,
    MarketModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: VeronaTheme,
    }),

    provideHighcharts(),
    provideHttpClient(withInterceptorsFromDi()),

    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
        cache: new InMemoryCache(),
      };
    }),
  ],
})
export class AppModule {}
