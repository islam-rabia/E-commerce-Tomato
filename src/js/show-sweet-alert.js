function showSweetAlert(message, id, color) {
  const alertList = document.querySelector(".sweet_alert_list");

  const existingAlert = alertList.querySelector(`[data-id="${id}"]`);
  if (existingAlert) {
    existingAlert.remove();
  }

  const alertItem = document.createElement("li");
  alertItem.className = "sweet_alert_item";
  alertItem.dataset.id = id;
  alertItem.textContent = message;
  alertItem.style.backgroundColor = color;

  alertList.prepend(alertItem);

  setTimeout(() => {
    alertItem.remove();
  }, 3000);
}

export { showSweetAlert };
