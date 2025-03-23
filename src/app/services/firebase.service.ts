import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  getBlogs(): Observable<any[]> {
    const blogsRef = collection(this.firestore, 'blogs');
    return collectionData(blogsRef, { idField: 'id' });
  }

  getBlogsById(id : any): Observable<any> {
    const docRef = doc(this.firestore, 'blogs', id);
    return docData(docRef, { idField: 'id' });
  }
}


// export interface Blog {
//   id : number;
//   name : string;
//   content : string;
// }