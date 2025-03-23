import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blogs-details',
  imports: [RouterModule],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.scss'
})
export class BlogsDetailsComponent {
  
  blog : any
  
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService){}
  
  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id)

    this.firebaseService.getBlogsById(id).subscribe((e) => this.blog = e);
  }
}
