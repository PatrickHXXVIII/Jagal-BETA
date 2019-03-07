var timeString = Date().toString() + " " + Date.now();
var URLroot = "https://maker.ifttt.com/trigger/jagallery_vote/with/key/kAL7tTNl_NMHU_aaPHT-Uijak39EddbxriyONMYnFOW?value3=" + timeString;
var radios = document.getElementsByName('value2');

function check()
{	for (var i = 0, length = radios.length; i < length; i++) {if (radios[i].checked){var rad = radios[i].value; break;}}
	if(document.getElementById('value1').value == "")
	{	alert("Please enter your name!");}
	else
	{	send();}}

function send()
{	for (var i = 0, length = radios.length; i < length; i++) {if (radios[i].checked){var vote = radios[i].value; break;}}
	var voter = document.getElementById('value1').value;
	var URL = URLroot+"&value1="+voter+"&value2="+vote;
	alert(URL);
}

