import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { Jhipsterappv3SharedModule, UserRouteAccessService } from './shared';
import { Jhipsterappv3HomeModule } from './home/home.module';
import { Jhipsterappv3AdminModule } from './admin/admin.module';
import { Jhipsterappv3AccountModule } from './account/account.module';
import { Jhipsterappv3EntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Jhipsterappv3SharedModule,
        Jhipsterappv3HomeModule,
        Jhipsterappv3AdminModule,
        Jhipsterappv3AccountModule,
        Jhipsterappv3EntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Jhipsterappv3AppModule {}
