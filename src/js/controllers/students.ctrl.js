export function StudentsCtrl($scope, dataService){
	$scope.deleteStudent = function($index){
		$scope.students.splice($index, 1);
	};
	$scope.addStudent = function(){
		let student = {
			name : $scope.studentName,
			gpa: $scope.studentGPA
		};
		$scope.students.unshift(student);
		$scope.studentName = null;
		$scope.studentGPA = null;
	};
	dataService.getJSON((response, callback) =>{
		$scope.students = response.data;
	});
}