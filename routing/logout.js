// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Создайте функцию 'logoutRouting' для обработки страницы выхода из системы.
const logoutRouting = (request, response) => {
  // 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
  // 🏗 Установите соответствующий заголовок 'Content-Type'.
  response.setHeader("Content-Type", "text/html");

  // 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
  // 🏗 Завершите HTTP-ответ после рендеринга страницы.
  response.end("<h1>You have been logged out</h1>");
};

// 🔧 Wyeksportuj funkcję 'logoutRouting', aby inne moduł mogły jej używać.
// 🔧 Экспортируйте функцию 'logoutRouting', чтобы другие модули могли ее использовать.
module.exports = { logoutRouting };
