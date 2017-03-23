var app = angular.module('firstApplication',[]);

app.filter('base',function(){
 var something = function(input,base){
        
     var parsed = parseInt(input,10);
     var based = parseInt(base,10);
     if(isNaN(parsed)||isNaN(based))
             return input;
     return parsed.toString(based);
    }
 return something;
});

app.controller('people',function(){
    
});