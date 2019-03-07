var timeString = Date().toString() + " " + Date.now();
var URLroot = "https://maker.ifttt.com/trigger/jagallery_vote/with/key/kAL7tTNl_NMHU_aaPHT-Uijak39EddbxriyONMYnFOW?value3=" + timeString;

function send()
{	var radios = document.getElementsByName('value2');
	for (var i = 0, length = radios.length; i < length; i++) {if (radios[i].checked){var vote = radios[i].value; break;}}
	var voter = document.getElementById('value1').value;
	var URL = URLroot+"&value1="+voter+"&value2="+vote;
	alert(URL);
}

