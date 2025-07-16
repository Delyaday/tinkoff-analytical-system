import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { TinkoffApiService } from './services/tinkoff-api.service';

@NgModule({
  providers: [AppStateService, TinkoffApiService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already imported.',
      );
    }
  }
}
