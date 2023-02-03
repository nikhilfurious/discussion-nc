import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService, private router : Router) { }

  ngOnInit(): void {
  }

  threads = [
    {'Q_No':1,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'How to add routing in Angular?', description: 'Im struck at the concept of routing in Angular v.12. It will be helpful if someone helps me in this', tags: ['Angular','Routes','Technical'], answers: 22, upvotes: 3, views: 17, createdTime: '12-01-2022', category: 'Questions'},
    {'Q_No':2,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'How to add routing in React?', description: 'Im struck at the concept of routing in React. It will be helpful if someone helps me in this', tags: ['React','Routes','Technical'], answers: 13, upvotes: 1, views: 11, createdTime: '01-01-2022', category: 'Questions'},
    {'Q_No':3,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'How to add routing in Viu Js?', description: 'Im struck at the concept of routing in Viu. It will be helpful if someone helps me in this', tags: ['Viu','Routes','Technical'], answers: 3, upvotes: 1, views: 21, createdTime: '11-12-2022', category: 'Questions'},
    {'Q_No':4,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'How to setup a project in Angular with advance features?', description: 'Im interested to know how to setup a project in Angular v.15 with lazy loading and micro frontends Architecture. It will be helpful if someone helps me in this', tags: ['Angular','Project Setup','Technical'], answers: 21, upvotes: 12, views: 121, createdTime: '01-22-2023', category: 'Questions'},
    {'Q_No':5,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'How Artificial Intelligence is Changing the World?', description: 'AI allows learners to study from any place in the world, at their own pace, setting their own goals and following a personalized study program that adjusts to their necessities and availability.', tags: ['AI','ML','Technical'], answers: 31, upvotes: 1, views: 11, createdTime: '01-01-2023', category: 'Questions'},
    {'Q_No':6,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What is data binding?', description: 'Data binding is a phenomenon that allows any internet user to manipulate Web page elements using a Web browser. It uses dynamic HTML and does not require complex scripting or programming.', tags: ['Angular','Data Binding','Technical'], answers: 13, upvotes: 21, views: 11, createdTime: '01-02-2023', category: 'Questions'},
    {'Q_No':7,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What are Single Page Applications (SPA)?', description: 'Single-page applications are web applications that load once with new features just being mere additions to the user interface.', tags: ['Js Libraries','SPA','Technical'], answers: 131, upvotes: 10, views: 111, createdTime: '10-02-2023', category: 'Questions'},
    {'Q_No':8,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What are decorators in Angular?', description: 'Decorators are a design pattern or functions that define how Angular features work. They are used to make prior modifications to a class, service, or filter.', tags: ['Angular','Decorators','Technical'], answers: 113, upvotes: 1, views: 10, createdTime: '01-01-2023', category: 'Questions'},
    {'Q_No':9,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What are the limitations of React?', description: 'React is not a full-blown framework as it is only a library.', tags: ['React','Limitations','Technical'], answers: 23, upvotes: 1, views: 9, createdTime: '01-11-2022', category: 'Questions'},
    {'Q_No':10,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What is useState() in React?', description: 'The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.', tags: ['React','Use State','Technical'], answers: 3, upvotes: 1, views: 11, createdTime: '01-01-2023', category: 'Questions'},
    {'Q_No':11,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What are keys in React?', description: 'A key is a special string attribute that needs to be included when using lists of elements.', tags: ['React','Keys','Technical'], answers: 13, upvotes: 21, views: 1, createdTime: '01-27-2023', category: 'Questions'},
    {'Q_No':12,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What is JSX?', description: 'JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).', tags: ['JSX','React','Technical'], answers: 3, upvotes: 2, views: 11, createdTime: '02-01-2023', category: 'Questions'},
    {'Q_No':13,profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'What is React Hooks?', description: 'React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version.', tags: ['React','Hooks','Technical'], answers: 43, upvotes: 1, views: 101, createdTime: '01-01-2023', category: 'Questions'}
  ]
 Posts = [
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'Sharing an idea about how learning music helps in acheiving inner peace?', description: 'Classical music is known for its slow tunes, elegance, well-balanced melodies, and smooth harmonizing rhythm. These soft sounds made with mostly string and key instruments are both beautiful to the ears and calming to the nerves.', tags: ['Music','Learning','Health and Peace'], answers: 3, upvotes: 1, views: 11, createdTime: '01-12-2022', category: 'Posts'},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'Cardios for Healthy Heart', description: 'No matter where you are or how long its been, you can still get back to working out without hurting yourself, getting bored, or feeling miserable.', tags: ['Health','Fitness','Cardio'], answers: 3, upvotes: 1, views: 11, createdTime: '31-01-2022', category: 'Posts'},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'Yoga for beginners', description: 'It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe.', tags: ['Yoga','Health','Fitness'], answers: 3, upvotes: 1, views: 11, createdTime: '01-10-2022', category: 'Posts'},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: 'how to attain moksha', description: 'Moksha is achieved through meditation, achieving ones dharma, detaching from the material world, and attaining a divine understanding.', tags: ['Moksha','Spiritual','Mind'], answers: 3, upvotes: 1, views: 11, createdTime: '11-01-2022', category: 'Posts'},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=male',title: '50 Characteristics of Kaliyuga', description: 'We are living in the age of Kaliyuga. Both the Mahabharata and Shrimad Bhagavatam give a vivid description of how things are like in Kaliyuga.', tags: ['Kaliyuga','Facts','Spiritual'], answers: 3, upvotes: 1, views: 11, createdTime: '20-01-2023', category: 'Posts'},
 ]

 categoryInfo = [
  {category: 'Questions', threads: 5},
  {category: 'Posts', threads: 5},
 ]

 topUsers = [
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=female',joinedYear : 2022,name: 'Jenny', points:2212},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=female',joinedYear : 2021,name: 'Jessie', points:2111},
  {profilePic: 'https://xsgames.co/randomusers/avatar.php?g=female',joinedYear : 2023,name: 'Mary', points:1947}
 ]

 hotQuestions = [
  {question: 'How to add routing in Angular?', name: 'Jenny', answers: 29},
  {question: 'How to setup a project in Angular with advance features?', name: 'Joe', answers: 22},
  {question: 'how to attain moksha?', name: 'McNic', answers: 18},
  {question: 'How Artificial Intelligence is Changing the World?', name: 'Phillips', answers: 17},
 ]

 routeToQuestionDetails(question:any){
  this.router.navigateByUrl('/question-details')
 }

 showDetail(question:any){
  this.dataService.selectedQuestion = question;
 }

}
