import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import App from './components/App'

import { Container } from 'react-bulma-components/full'; 

import { Provider } from 'react-redux';
import { createStore } from 'redux';



ReactDOM.render( 
               <App/> , document.getElementById('root'));


// The purpose of this challenge is to understand how you apply ​React & Redux
// concepts when consuming an API.THE CHALLENGE
// Build a ​HackerNews​ infinite scroll news listing page.
// Use one of the many online APIs and connect to HackerNews, 
// get the data, and build a web app which lists all the items from HN.
// The page should have infinite scroll(when user reaches the end of the page more articles should be loaded).
// Your focus should be functionality and performance.BONUS
//     - Show your creativity and redesign HackerNews using ​Bulma.io.
// Make reasonable assumptions, state your assumptions, and proceed.Once you have completed the challenge let us know and share your thoughts on the problems/solutions.
// Please deliver your solution in a GitHub repository and add a README file detailing how to start your application.
// Good luck!



//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty