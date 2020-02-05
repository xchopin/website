import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

   experiences = [
    {
      title: 'Data Engineer @ University of Lorraine',
      date: 'October 2017 - December 2019',
      location: 'Nancy, France',
      description: 'Lead developer for the creation of Big Data tools for the French Higher Education system' +
      ' in a machine-learning context (Learning Analytics).',
      tasks: [
      'Main contributor of a scalable data warehouse Java API for Big Data (Spring-Boot, MongoDB)',
      'NoSQL data modeling through open standards',
      'Developed Python scripts for treating large data volumes from SQL, LDAP and CSV sources',
      'Full-stack development of an i18n PHP web application for a large user population (Symfony)',
      'DevOps tasks (CentOS/RHEL administration, Git, Docker, Dockerfile, Logstash, CI/CD)',
      'Speaker (nationwide and international conferences)'
      ]
    },
    {
      title: 'Web Architect Intern @ Saint-Gobain',
      date: 'April 2017 - June 2019',
      location: 'Pont-à-Mousson, France',
      description: 'Design and development of applications for the Bureau of International Business of Saint-Gobain PAM.',
      tasks: [
        'Full-stack development of an i18n ASP .NET MVC application for translating XML datasheets',
        'Developed a multilingual iOS application for the sales force (Ionic)'
      ]
    },
    {
      title: 'Full-Stack Developer Intern @ French Ministry of Sports',
      date: 'April 2015 - June 2015',
      location: 'Essey-lès-Nancy, France',
      description: 'Development of a nationwide administrative web application for the French Ministry of Sports at CREPS de Nancy.',
      tasks: [
        'Full-stack development of a PHP application on a LAMP stack for managing a medium population'
      ]
    }
  ];


  educations = [
    {
      title: 'Bachelor\'s Degree in Computer Science',
      date: '2016 - 2017',
      location: 'University of Lorraine, France',
      description: 'Valedictorian, Graduated Magna Cum Laude - “Licence professionnelle CISIIE”'
    },
    {
      title: 'Associate\'s Degree in Computer Science',
      date: '2013 - 2015',
      location: 'University of Lorraine, France',
      description: '“Diplôme Universitaire de Technologie en Informatique”'
    },
    {
      title: 'Science Baccalaureate',
      date: '2013',
      location: 'Lycée Jacques Marquette, France',
      description: 'High School Diploma - “Baccalauréat Scientifique”'

    }
  ]


  constructor() { }

  ngOnInit() { }

}
