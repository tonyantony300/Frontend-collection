const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = ["Message one", "Message two", "Message three"];

button.addEventListener("click", () => createToast());

function createToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = randonMessage();
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function randonMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
