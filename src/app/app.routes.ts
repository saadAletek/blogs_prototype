import { Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';

export const routes: Routes = [
    {
        path : '',
        component : BlogsListComponent
    },
    {
        path : 'blogs/:id',
        component : BlogsDetailsComponent
    }
];
