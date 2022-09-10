const password = document.getElementById("password")
const passConfirm = document.getElementById("pass-confirm")
const dontMatchLabel = document.getElementById("dont-match")

const samePass = function() {

if (password.value == passConfirm.value) {
 password.setAttribute("style", "border-color: #E5E7EB")
 passConfirm.setAttribute("style", "border-color: #E5E7EB")
 dontMatchLabel.textContent = ""
}
else {
    password.setAttribute("style", "border-color:red")
    passConfirm.setAttribute("style", "border-color:red")
    dontMatchLabel.textContent = "* Passwords do not match"
   }

}