import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectiveComponent } from './objective/objective.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resume: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://gist.githubusercontent.com/KailashRajkumar/049b674c2f403001f26a75e879132a16/raw/0141a63800a9adedea4c7dc54e4740da3f668ea5/resume.json')
      .subscribe(res => {
        this.resume = res;
        console.log(res)
      });
  }


//   resume = {
//     name: [
//       {
//         fname: 'Kailash Rajkumar',
//         Heading: 'FrontEnd Developer',
//       }
//     ],

//     contact: [{
//       tel: "+91 9344685386",
//       email: "kailash14021999@gmail.com",
//       linkedin: "www.linkedin.com/in/kailash-rajkumar",
//       address: "Karur, TamilNadu",
//     }],
//     title: 'Resume-app',

//     profileobjective: `FrontEnd Developer Junior Programmer  with proven skills in HTML5, CSS3, Bootstrap, JavaScript, Angular. Focused on keeping a secure architecture and offering a
//     strong foundation in software engineer and software development cycle.`,
//     skills: [
//       'HTML5', 'CSS3', 'JavaScript', 'Angular2+', 'Debugging', 'Problem Solving'
//     ],
//     project: [
//       {
//         Resume: 'Resume-app Using Angular - SkillLync Workshop'
//       },
//       {
//         College: 'Company Crime Tracking System - M.Sc Computer Science Final Year Project'
//       }

//     ],

//     education: [
//       {
//         School: 'Hindustan College Of Arts And Science',
//         Program: 'M.Sc Computer Science - 75%',
//         from: '2019',
//         to: '2021'
//       },
//       {
//         School: 'Valluvar College Of Science And Management',
//         Program: 'B.Sc Computer Science - 68%',
//         from: '2016',
//         to: '2019'
//       },
//       {
//         School: 'Bharani Park Matric Hr Sec School',
//         Program: '12th - 60%',
//         from: '2015',
//         to: '2016'
//       },
//       {
//         School: 'Gurudevar Matric Hr Sec School',
//         Program: '10th - 71%',
//         from: '2013',
//         to: '2014'
//       },
//     ],

//     acheivements: [
//       {
//         certificate1: 'Certificated Course In The Complete Front-End Development - SkillLync',
//       },
//       {

//         certificate2: 'Certificated Course In Introduction Of Java Programming - SkillLync',
//       },
//       {

//         certificate3: 'Certificated Course In Data Structure And Algorithms Using Java - SkillLync',
//       },
//       {

//         certificate4: 'Certificated Course In C Program, Conversational English and Basic Computer Operation - Bharathidasan University',
//       },
//       {

//         certificate5: 'Certificated Java Internship - Uniq Technology',
//       },
//       {

//         certificate6: 'Participated In South Indian Level Poster Presentation - VIT University',
//       },
//       {

//         certificate7: 'Participated in BHARAT SCOUT And Certified'
//       }
//     ]
//   }
}
