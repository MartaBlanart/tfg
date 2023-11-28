// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://127.0.0.1:443/api';
  comments: Comment[] = [];


  constructor(private http: HttpClient) {}

  addCommentToReview(reviewId: number, commentData: any): Observable<any> {
    const url = `${this.apiUrl}/reviews/${reviewId}/comments`;
    return this.http.post(url, commentData);
  }

  getCommentsForReview(reviewId: number): Observable<Comment[]> {
    const url = `${this.apiUrl}/reviews/${reviewId}/comments`;
    return this.http.get<Comment[]>(url);
  }
}


