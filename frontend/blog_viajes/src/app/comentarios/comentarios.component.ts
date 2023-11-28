// comentarios.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { LoginServiceService } from '../servicios/register-service.service';
import { User } from '../model/user.model';
import { CommentData } from '../model/comment.model';
import { ModalService } from '../modal.service';



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit{
  @Input() reviewId!: number;
  newComment: string = '';
  comments: CommentData[] = [];

  constructor(
    private commentService: CommentService,
    private registerService: LoginServiceService,
    private modalService: ModalService

  ) {}
  ngOnInit() {
    this.showComment();
  }
  async addComment() {

    try {
    var user: User =await this.registerService.getObtenerUsuario();
    console.log("holapepito");
    if(!user){
      console.log("HOLA!");
      this.modalService.openLoginModal();
    } else{
      console.log("HOLA2!");
      const commentData: CommentData = { content: this.newComment, username: user.name };
      console.log(commentData);
      console.log(this.reviewId);
      this.commentService.addCommentToReview(this.reviewId, commentData)
        .subscribe((response) => {
          console.log('Comentario agregado:', response);
          this.showComment();
          this.newComment='';
        });
    }
  } catch (error) {
    console.error('Error in addComment:', error);
  }





  }

 async showComment(){
  this.commentService.getCommentsForReview(this.reviewId)
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





