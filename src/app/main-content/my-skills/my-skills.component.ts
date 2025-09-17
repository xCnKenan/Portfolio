import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  mySkills = [
    {
      img: 'html.png',
      skill: 'HTML',
    },
    {
      img: 'css.png',
      skill: 'CSS',
    },
    {
      img: 'javascript.png',
      skill: 'JavaScript',
    },
    {
      img: 'typescript.png',
      skill: 'TypeScript',
    },
    {
      img: 'angular.png',
      skill: 'Angular',
    },
    {
      img: 'firebase.png',
      skill: 'Firebase',
    },
    {
      img: 'git.png',
      skill: 'Git',
    },
    {
      img: 'rest-api.png',
      skill: 'REST-API',
    },
    {
      img: 'scrum.png',
      skill: 'Scrum',
    },
    {
      img: 'material-design.png',
      skill: 'Material Design',
    },
    {
      img: 'interest.svg',
      skill: 'Continually learning',
    },
  ];

  constructor() {
    
  }
}
