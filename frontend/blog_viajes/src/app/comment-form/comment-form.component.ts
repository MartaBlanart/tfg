// comment-form.component.ts
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  @Output() commentSubmitted = new EventEmitter<string>();
  @Input() username!: string; // Agrega el nombre de usuario como entrada

  newComment: string = '';

  submitForm() {
    // Envía el comentario junto con el nombre de usuario
    this.commentSubmitted.emit(`${this.username}: ${this.newComment}`);
    this.newComment = ''; // Limpiar el área de texto después de emitir el comentario
  }
}


