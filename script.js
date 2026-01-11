{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const form = document.getElementById("rsvpForm");\
let attending = false;\
\
function attend(choice) \{\
  attending = choice;\
\
  if (choice) \{\
    document.getElementById("step1").classList.add("hidden");\
    form.classList.remove("hidden");\
  \} else \{\
    submitNo();\
  \}\
\}\
\
form.addEventListener("submit", function(e) \{\
  e.preventDefault();\
\
  const data = \{\
    attending: "Yes",\
    first: document.getElementById("firstName").value,\
    last: document.getElementById("lastName").value,\
    adults: document.getElementById("adults").value,\
    kids: document.getElementById("kids").value\
  \};\
\
  sendData(data);\
\});\
\
function submitNo() \{\
  sendData(\{ attending: "No" \});\
\}\
\
function sendData(data) \{\
  // For demo, we just show thank you message\
  // Later, you can integrate Google Sheets or Formspree\
  document.querySelector(".card").innerHTML =\
    "<h2>Thanks for letting us know \uc0\u55357 \u56470 </h2>";\
\
  console.log("RSVP Data Submitted:", data);\
\}\
}
