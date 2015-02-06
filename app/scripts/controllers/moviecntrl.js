'use strict';


app.controller('MovieCtrl',['$scope','$state','$stateParams','$http',function($scope,$state,$stateParams,$http){
	$scope.count = 0;
	$scope.hideMovieDetails = 0;

	$scope.get_movie_data = function(movie_data_url){
        $http.jsonp(movie_data_url).success(function(data){
          $scope.movie_data = data;
          $scope.count++;
          if($scope.count == 2){
          		$scope.count = 0;
          		$scope.hideMovieDetails = 0;
          }
        });
     };
     $scope.get_movie_review = function(movie_review_url){
        $http.jsonp(movie_review_url).success(function(data){
          $scope.movie_review = data;
          $scope.count++;
          if($scope.count == 2){
          	$scope.hideMovieDetails = 0;
          }
        });
     };
	 $scope.get_movie_details = function(){
        var id = $stateParams.id;
        var movie_url_review = "http://api.rottentomatoes.com/api/public/v1.0/movies/"+id+"/reviews.json?callback=JSON_CALLBACK&apikey=bfkvbw3kgpu2adnpca9cu4u3";
        var movie_url_data = "http://api.rottentomatoes.com/api/public/v1.0/movies/"+id+".json?callback=JSON_CALLBACK&apikey=bfkvbw3kgpu2adnpca9cu4u3";
        $scope.get_movie_data(movie_url_data);
        $scope.get_movie_review(movie_url_review);
	};
   	$scope.get_movie_details();
   	$scope.hideMovieDetails = 1;
   	
}]);