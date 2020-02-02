import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

   testimonials = [
    {
      id : '1',
      name : 'Madeon',
      position: 'World-renowned music producer',
      company: 'Universal Music Group',
      feedback: 'Wow Xavier made an Adventure-inspired game !! So so cool, thank you.'
    },
    {
      id : '2',
      name : 'Jean-Michel Vahl',
      position: 'Director of Digital Operations',
      company: 'University of Lorraine, France',
      feedback: 'The quality of Xavier\'s developments, his rigor and his communicative cheerfulness are examples to follow.'
    },
    {
      id : '3',
      name : 'Ph. D. Samuel-Cruz Lara',
      position: 'Director of Nancy-Charlemagne Institute',
      company: 'University of Lorraine, France',
      // tslint:disable-next-line:max-line-length
      feedback: 'Xavier is a motivated, enthusiast and passionate developer. I am convinced that he will bring a lot to any company that can hire him.'
    },
    {
      id : '4',
      name : 'Benjamin Seclier',
      position: 'Sr. System Administrator',
      company: 'University of Lorraine, France',
      // tslint:disable-next-line:max-line-length
      feedback: 'The work made by Xavier profits to numerous universities, all of which acknowledge the quality and the meaningfulness of his developments.'
    },
    {
      id : '5',
      name : 'Ph. D. Olivier Perrin',
      position: 'Researcher and Full professor in Computer Science',
      company: 'University of Lorraine, France',
      // tslint:disable-next-line:max-line-length
      feedback: 'Xavier is a motivated student, enthusiastic, rigorous, with a very good programming skills and interesting leadership skills.'
    },
    {
      id : '6',
      name : 'Ph. D. Philippe Dosch',
      position: 'Head of a Bachelor\'s Degree in CS / Researcher',
      company: 'University of Lorraine, France',
      // tslint:disable-next-line:max-line-length
      feedback: 'Xavier is a brilliant student, he has a very good understanding of the inherent concepts but also of the underlying topics.'
    },
    {
      id : '7',
      name : 'Jean-Marie Canavero',
      position: 'Head of the training department',
      company: 'CREPS de Lorraine (French Ministry of Sports)',
      // tslint:disable-next-line:max-line-length
      feedback: 'Xavier created quality tools that met the expectations of our needs, he was therefore considered as an efficient collaborator.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
