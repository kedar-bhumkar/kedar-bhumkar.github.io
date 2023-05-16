import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from '../reports/reports.component';


@NgModule({
    declarations: [ ReportsComponent ],
    exports: [ ReportsComponent ],
    imports: [ CommonModule ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class LandingModule { }
