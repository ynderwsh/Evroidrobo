document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".page-button");
  const prevButton = document.querySelector(".selections-page__prev");
  const nextButton = document.querySelector(".selections-page__next");

  // Функция для перехода на страницу
  function goToPage(page) {
    let pageUrl = `blog-${page}.html`; // Формируем URL blog-1, blog-2, blog-3
    localStorage.setItem("selectedPage", page); // Сохраняем текущую страницу
    window.location.href = pageUrl; // Переход
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
          button.style.backgroundColor = "#8A35F2"; // Делаем кнопку зелёной
        } else {
          button.style.backgroundColor = ""; // Сбрасываем цвет
        }
      });
    }
  }

  highlightButton(); // Запускаем функцию при загрузке

  // Prev / Next навигация
  prevButton.addEventListener("click", function () {
    let currentPage = parseInt(localStorage.getItem("selectedPage")) || 1;
    if (currentPage > 1) {
      goToPage((currentPage - 1).toString());
    }
  });

  nextButton.addEventListener("click", function () {
    let currentPage = parseInt(localStorage.getItem("selectedPage")) || 1;
    if (currentPage < 3) {
      goToPage((currentPage + 1).toString());
    }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const dropdown = document.querySelector(".dropdown");

  menuButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Остановить всплытие
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function () {
      dropdown.style.display = "none";
  });

  dropdown.addEventListener("click", function (event) {
      event.stopPropagation(); // Остановить закрытие при клике внутри меню
  });
});


document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      const img = this.querySelector('img');
      const isActive = panel.style.display === 'block';
      
      document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.accordion-header img').forEach(img => img.src = 'images/plus.svg'); 
      
      if (!isActive) {
          panel.style.display = 'block';
          img.src = 'images/minus.svg'; 
      }
  });
});

