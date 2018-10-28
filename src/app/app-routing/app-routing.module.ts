import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { SearchResultComponent } from '../search-result/search-result.component';
    import { SearchDetailsComponent } from '../search-result/search-details/search-details.component';
    import { LoginPageComponent } from '../login-page/login-page.component'


    const routes: Routes = [
        {
            path: 'book-ticket',
            component: SearchResultComponent,
        },
           
            {
            path: 'search-details',
            component: SearchDetailsComponent,
        },
        {
            path: '',
            component: LoginPageComponent,
        },
        
        
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    