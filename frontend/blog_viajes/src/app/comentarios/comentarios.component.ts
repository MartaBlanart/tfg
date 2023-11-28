// comentarios.component.ts
import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { LoginServiceService } from '../servicios/register-service.service';
import { User } from '../user/user.model';

interface CommentData {
  content: string;
  username: string;
}

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent {
  @Input() reviewId!: number;
  newComment: string = '';
  comments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private registerService: LoginServiceService

  ) {}
  async addComment() {


    var user: User =await this.registerService.getObtenerUsuario();


    const commentData: CommentData = { content: this.newComment, username: user.name };
    console.log(commentData);
    console.log(this.reviewId);
    this.commentService.addCommentToReview(this.reviewId, commentData)
      .subscribe((response) => {
        console.log('Comentario agregado:', response);
      });

      this.commentService.getCommentsForReview(this.reviewId.toString())
      .subscribe(
        (comments) => {
          this.comments = comments;
        },
        (error) => {
          console.error('Error al obtener comentarios:', error);
        }
      );

  }
}





