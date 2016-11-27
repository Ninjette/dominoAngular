require('../sass/style.scss');

import { DominoCtrl } from './controllers/domino.ctrl.js';
import { StudentsCtrl } from './controllers/students.ctrl.js';

import { dataService } from './services/data.service.js';


angular.module('testApp', ['ngRoute'])
	.controller('DominoCtrl', DominoCtrl)
	.controller("StudentsCtrl", StudentsCtrl)
	.service('dataService', dataService)
	.config(function($routeProvider){
		$routeProvider
			.when('/domino',{
				templateUrl: './domino.html',
				controller: 'DominoCtrl'
			})
			.when('/students',{
				templateUrl: './students.html',
				controller: 'StudentsCtrl'
			})
	});