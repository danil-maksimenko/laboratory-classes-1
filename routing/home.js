// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Создайте функцию 'homeRouting' для обработки главной страницы.
const homeRouting = (request, response) => {
  // 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
  // 🏗 Установите соответствующий заголовок 'Content-Type'.
  response.setHeader("Content-Type", "text/html");

  // 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
  // 🏗 Завершите HTTP-ответ после рендеринга страницы.
  response.end("<h1>Welcome to the Home Page</h1>");
};

// 🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
// 🔧 Экспортируйте функцию 'homeRouting', чтобы другие модули модули могут использовать ее.
module.exports = { homeRouting };
