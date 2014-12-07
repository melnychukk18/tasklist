var app = angular.module('toDo',[]);

app.controller('toDoController', function($scope){
	$scope.addShow = false;
	$scope.color = 'green';
	$scope.imp = 2;
	$scope.tasks = [{id:0, text:'Call Mother', done:false, deleted:false, importance:"1", color:'red'},
	{id:1, text:'Clean house', done:true, deleted:false, importance:"2", color:'orange'},
	{id:2, text:'Buy bread', done:false, deleted:false, importance:"3", color:'pink'}];
	$scope.create_task = function(){
		if ($scope.task){
		var ids = [];
		for (var obj in $scope.tasks){
			ids.push($scope.tasks[obj].id)
		};

		myId = ids.sort(function(a,b){return a - b})[ids.length-1] + 1;
		$scope.tasks.push({id:myId,text:$scope.task,done:false,deleted:false,importance:$scope.imp, color:$scope.color});
		$scope.task = "";
		}
	};

	$scope.done_task = function(task_id){
		$scope.tasks[task_id].done = !$scope.tasks[task_id].done;
	};
	$scope.delete_task = function(task_id){
		$scope.tasks[task_id].deleted = true;
	};

	$scope.show_add = function(){
		$scope.addShow = true;
	};
	$scope.close_add_form = function(){
		$scope.addShow = false;
	};
});