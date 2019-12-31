var app=angular.module('myapp',[])
app.controller('myctrl',function($scope){
    $scope.name="General Quiz";
});
app.controller("quiz",function($scope){
    $scope.index=0;
    $scope.crt = 0;
    $scope.incrt=0;
    $scope.q = [
		{
			question: "Which is the largest country in the world by population?",
			options: ["India", "USA", "China", "Russia"],
			answer: "China"
		},
		{
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: "1945"
		},
		{
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France", "Italy", "China"],
			answer: "China"
		},
		{
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: "Atlanta"
		},
		{	
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
			answer: "Alexander Graham Bell"
		}
    ];
    $scope.next = function(){
        if($scope.index<=4){
        $scope.index = $scope.index + 1;
        console.log($scope.q[$scope.index-1].answer);
        document.querySelector("#result").removeAttribute("class","active")
        if($scope.ans==$scope.q[$scope.index-1].answer){
            console.log("correct")
            $scope.crt = $scope.crt+1;
        }else{
            console.log("incorrect");
            $scope.incrt = $scope.incrt + 1;
        }
        
        }
        if($scope.index==5){
            console.log($scope.crt);
            console.log($scope.incrt);
            document.querySelector(".question").textContent = "";
            document.querySelector("#result").setAttribute("class","active"); 
            document.querySelector("#hide").setAttribute("class","hide");
        }
    }
});