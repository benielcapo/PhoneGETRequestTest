const ep = "http://167.58.46.201:8080"
const errorText = document.getElementById("errortext")

var showError = false

function ConnectLoop() {
  var cancelFlag = false
  while (cancelFlag === false) {
    fetch(ep)
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => {
        if (error) {
          cancelFlag = true
        }
    );
  }
  showError = true
}

function ShowErrorMessage() {
  errorText.style.visibility = "visible"
}

ConnectLoop()
while (!showError) {
  
}

ShowErrorMessage()
