window.onload = () => {
  this.sessionStorage.setItem("username", "Admin@123");
  this.sessionStorage.setItem("password", "12345678");
};

var userName = document.getElementById("username");
var password = document.getElementById("password");
var login = document.getElementById("submit-btn");
var form = document.querySelector(".form");
form.onsubmit = () => {
  return false;
};

function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "" && password === "") {
    console.log("username", username);
    console.log("password", password);
    document.getElementById("usererror").innerHTML = "*Please fill username ";
    document.getElementById("passworderror").innerHTML = "*Please fill password fields.";
  } else if (username === "" && password) {
    console.log("username", username);
    document.getElementById("usererror").innerHTML = "*Please fill username ";
    document.getElementById("passworderror").innerHTML = "";
  } else if (username && password === "") {
    console.log("username", username);
    document.getElementById("passworderror").innerHTML = "*Please fill password fields.";
    document.getElementById("usererror").innerHTML = "";
  } else if (username && password) {
    let storedusername = sessionStorage.getItem("username");
    let storedpassword = sessionStorage.getItem("password");
    if (username === storedusername && password === storedpassword) {
      document.getElementById("usererror").innerHTML = "";
      document.getElementById("passworderror").innerHTML = "";

      form.onsubmit = () => {
        return username, password;
      };
      alert("Entered credentials Correct");
      window.location.href = "http://127.0.0.1:5500/post.html";
    } else {
      document.getElementById("passworderror").innerHTML = "";
      document.getElementById("usererror").innerHTML = "";
      alert("Entered credentials wrong");
    }
  }
}
