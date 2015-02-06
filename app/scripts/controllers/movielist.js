app.controller("ListCtrl",function($scope,$http,$stateParams){
	
	$scope.init = function(mov_data_common){
		var movieName = $stateParams.name;
      var startYear = $stateParams.startyear;
      var endYear = $stateParams.endyear;

      if(movieName)
        $scope.$parent.queryMovie = movieName;
      if(startYear)
        $scope.$parent.selectedStartDate = startYear;
      if(endYear)  
        $scope.$parent.selectedEndDate = endYear;

		$scope.name = $stateParams.name;
		$scope.startyear = $stateParams.startyear ? $stateParams.startyear : null;
		$scope.endyear = $stateParams.endyear ? $stateParams.endyear : null;
		$scope.get_movies();
	};
	 $scope.get_movies = function(){
  		$http.jsonp("http://api.rottentomatoes.com/api/public/v1.0/movies.json?callback=JSON_CALLBACK&apikey=bfkvbw3kgpu2adnpca9cu4u3&q="
  			+$scope.name)
  		.success(function(data){
  			$scope.data = data;
  			
		});
  	};

	$scope.in_range = function(movie){
		if($scope.startyear == null && $scope.endYear == null)
			return true;
		if($scope.startyear == null && $scope.endYear != null)
			return movie.year < $scope.endyear;
		if($scope.startyear != null && $scope.endYear == null)
			return movie.year > $scope.startyear;
		return movie.year < $scope.endyear && movie.year > $scope.startyear   
	}

	$scope.init();
  });