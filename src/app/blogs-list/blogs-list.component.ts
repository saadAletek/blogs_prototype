import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blogs-list',
  imports: [RouterModule],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.scss'
})
export class BlogsListComponent {
  blogs: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBlogs().subscribe((e) => this.blogs = e);
  }
}
