const ep = "https://167.58.46.201:8080"
const errorText = document.getElementById("errortext")

var showError = false

async function ConnectLoop() {
  try {
    await fetch(ep)
      .then(response => response.json())
      .then(data => {
        showError = false;
      });
  } catch (error) {
    showError = true;
  }
}

async function ShowErrorMessage() {
  errorText.style.visibility = "visible";
}

async function main() {
  await ConnectLoop();
  if (showError) {
    ShowErrorMessage();
  }
}

main();
