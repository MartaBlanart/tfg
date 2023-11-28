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
  @Input() reviewId!: number;// Usa el operador '!' para indicar a TypeScript que será inicializado
  newComment: string = ''

  constructor(
    private commentService: CommentService,
    private registerService: LoginServiceService

  ) {}
  async addComment() {

    console.log("---------------------------------------------------")
    var userName = "";
    var user: User =await this.registerService.getObtenerUsuario();
    console.log("---------------------------------------------------")
    console.log(user)

    const commentData: CommentData = { content: this.newComment, username: userName };

    this.commentService.addCommentToReview(this.reviewId, commentData)
      .subscribe((response) => {
        console.log('Comentario agregado:', response);
        // Puedes hacer algo después de agregar el comentario, si es necesario
      });
  }
}




