document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".page-button");
  const prevButton = document.querySelector(".selections-page__prev");
  const nextButton = document.querySelector(".selections-page__next");

  // Функция для перехода на страницу
  function goToPage(page) {
    localStorage.setItem("selectedPage", page); // Сохраняем текущую страницу
    window.location.href = `page${page}.html`; // Переход
  }

  // Вешаем обработчик на каждую кнопку
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const page = this.getAttribute("data-page");
      goToPage(page);
    });
  });

  // Функция для окрашивания кнопки при загрузке страницы
  function highlightButton() {
    const savedPage = localStorage.getItem("selectedPage");
    if (savedPage) {
      buttons.forEach(button => {
        if (button.getAttribute("data-page") === savedPage) {
          button.style.backgroundColor = "#8A35F2";
        }
      });
    }
  }

  highlightButton(); // Запускаем функцию при загрузке

  // Prev / Next навигация
  prevButton.addEventListener("click", function () {
    let currentPage = parseInt(localStorage.getItem("selectedPage")) || 1;
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  nextButton.addEventListener("click", function () {
    let currentPage = parseInt(localStorage.getItem("selectedPage")) || 1;
    if (currentPage < 3) {
      goToPage(currentPage + 1);
    }
  });
});