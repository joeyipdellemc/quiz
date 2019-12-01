

function myFunction() {

	 
	 //currentNum = parseInt(document.getElementById("myform").value ,10);
	 console.log(document.getElementById("myform").value);
	 //console.log(currentNum);
	 //currentNum = 0;
	//document.getElementById("myform").reset();
	//document.body.innerHTML = '';
	//document.getElementById("question_area").innerHTML = '';
	
	$.getJSON('part2.json',function(data){
	//console.log(data);
	//console.log(data.length)
	var items = [];

	//$.each(data, function(key,val){
	items.push("<p id='" + data[currentNum].question_no + "'>" + "Question : " + data[currentNum].question_no + "</p>");
	items.push("<p id='" + data[currentNum].question + "'>" + data[currentNum].question + "</p>");
	//});


	$( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  	}).appendTo(".container");
	});

	

function nextQuestion(){
	currentNum += 1 ;
	console.log(currentNum);
	myFunction(currentNum);
}

}