import { Component, Input } from '@angular/core';
import { Question } from '../../model/language/language.module';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
     
  
  @Input() question!: Question;
  markRead() {
    this.question.isRead = true;
  }
}
