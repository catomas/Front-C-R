import { NgModule } from '@angular/core';

//Prime Ng

import {CardModule} from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    CardModule,
    MenubarModule,
  ],
})
export class PrimeNgModule {}
