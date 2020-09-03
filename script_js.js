Array.from(document.querySelectorAll(".switch-button")).forEach((item) => {
    item.onclick = () => {
      item.parentElement.classList.toggle("change");
    };
});
