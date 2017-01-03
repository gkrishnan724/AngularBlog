var app = angular.module("MyApp",[]);
app.controller("SimpleCtrl",function($scope){
    
   $scope.name = "World";
    $scope.Movies = [{"name":"Sultan","likes":0,"dislikes":0},
                     {"name":"Dangal","likes":0,"dislikes":0},
                     {"name":"Assasin's Creed","likes":0,"dislikes":0},
                     {"name":"Random","likes":0,"dislikes":0},
                     {"name":"Suicide Squad","likes":0,"dislikes":0}
                     ]
    
    $scope.like = function(Movie){
        Movie.likes++;
        
    }
     $scope.dislike = function(Movie){
        Movie.dislikes++;
        
    }
    
    
});