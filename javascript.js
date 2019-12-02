
function questionIndex(){
	$.getJSON('part2.json',function(data){
		console.log(data.length);
		$("#index_area").append("<ul>" );
		//document.getElementById("index_area").innerHTML = data.length;
		$.each(data, function(key,val){
			$("#index_area").append("<li>" + val.question_no);})
		
	});
		
}

function showQuestions() {

	
	document.getElementById('question_area').innerHTML = '';
	
	$.getJSON('part2.json',function(data){
	//console.log(data);
	//console.log(data.length)
	var items = [];

	$.each(data, function(key,val){
	items.push("<p id='" + key.question_no + "'>" + "Question : " + val.question_no + "</p>");
	items.push("<p id='" + key.question + "'>" + val.question + "</p>");
	});


	$( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  	}).appendTo("#question_area");
	});

}