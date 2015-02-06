'use strict';
app.filter('daterange', function ()
{
  var result = [];
  return function(movies, start_date, end_date)
  {
   if (movies && movies.length > 0)
    {
      $.each(movies, function (index, movie)
      {
        var movieDate = movie.year;
        if (movieDate >= start_date && movieDate <= end_date)
        {
          result.push(movie);
        }
      });
      return result;
    }
  };
});


app.controller('MainCtrl', function ($scope,$http,$state,$stateParams) {
      var movieName = $stateParams.name;
      var startYear = $stateParams.startyear;
      var endYear = $stateParams.endyear;

      $scope.queryMovie = null;
      $scope.selectedStartDate = null;
      $scope.selectedEndDate = null;


      if(movieName)
        $scope.queryMovie = movieName;
      if(startYear)
        $scope.selectedStartDate = startYear;
      if(endYear)  
        $scope.selectedEndDate = endYear;
      

      $scope.find_movies = function(){
          var startYear = $scope.selectedStartDate == null?'' : (new Date($scope.selectedStartDate)).getFullYear();
          var endYear = $scope.selectedEndDate == null?'' : (new Date($scope.selectedEndDate)).getFullYear();  
          $state.go("default.list",{name:$scope.queryMovie,startyear:$.trim(startYear)!==''?startYear:null,endyear:$.trim(endYear)!==''?endYear:null});
      };

  });
