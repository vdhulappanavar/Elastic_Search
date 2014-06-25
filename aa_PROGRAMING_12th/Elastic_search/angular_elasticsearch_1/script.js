// Code goes here

// Code goes here

var main=function($scope,$http) {
  $scope.message="hello";
  
  
  var esCallback=function(response){
    
  
  console.log(response);  
    console.log(response.data);
    
    $scope.schoolDynamic = response.data._source;
  };
  
   $http({
     method:"GET",
      url: 'http://localhost:9200/vivekanandaschool/student/2',
      data:{}
      }).then(esCallback);
   
};