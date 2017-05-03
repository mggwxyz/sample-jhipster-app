import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipsterappv3AuthorModule } from './author/author.module';
import { Jhipsterappv3BookModule } from './book/book.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jhipsterappv3AuthorModule,
        Jhipsterappv3BookModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterappv3EntityModule {}
