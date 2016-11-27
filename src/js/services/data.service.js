export function dataService($http){
	this.getJSON = (callback, arg) =>{
		$http.get("./data/students.json")
			.then(callback)
	};
}