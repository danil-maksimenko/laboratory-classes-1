// 📦 Zaimportuj moduł odpowiedzialne za routing poszczególnych części aplikacji.
// 📦 Импортируйте модуль, отвечающий за маршрутизацию отдельных частей приложения.
const { homeRouting } = require("./home");
const { logoutRouting } = require("./logout");
const { productRouting } = require("./product");

// 📦 Zaimportuj obiekt STATUS_CODE.
// 📦 Импортируйте объект STATUS_CODE.
const { STATUS_CODE } = require("../constants/statusCode");

// 🏗 Stwórz tutaj funkcję 'requestRouting', która będzie obsługiwać zapytania HTTP.
// 🏗 Создайте здесь функцию 'requestRouting' для обработки HTTP-запросов.
const requestRouting = (request, response) => {
  // 🏗 Tutaj stwórz logowanie do konsoli informacji, mówiące o typie logowania (INFO), dacie, metodzie oraz url żądania.
  // 🏗 Здесь создайте лог для информационной консоли, указав тип лога (INFO), дату, метод и url запроса
  console.log(
    `INFO: ${new Date().toISOString()} - ${request.method} ${request.url}`
  );

  // 🏗 Tutaj stwórz podstawowy 'request routing' dla ścieżek '/', zawierającej /product' oraz '/logout'. Przekaż `request` i `routing` do odpowiednio routingu.
  // 🏗 Здесь создается базовый `request routing` для путей ` /`, содержащих /product` и ` /logout`. Передайте `request` и `routing` в маршрутизацию соответственно.
  if (request.url === "/" && request.method === "GET") {
    homeRouting(request, response);
  } else if (request.url.startsWith("/product")) {
    productRouting(request, response);
  } else if (request.url === "/logout" && request.method === "GET") {
    logoutRouting(request, response);
  } else if (request.url === "/kill" && request.method === "GET") {
    // 🏗 Obsłuż specjalny przypadek, jeśli użytkownik zostanie przekierowany na ścieżkę /kill, aplikacja się zamknie.
    // 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.
    // 🏗 Обработайте особый случай, если пользователь будет перенаправлен по пути /kill, приложение закроется.
    // 🏗 Также создайте лог в информационной консоли, указав тип входа (PROCESS), дату и информацию о том, что произошел выход из системы и приложение закрывается.
    console.log(
      `PROCESS: ${new Date().toISOString()} - Application shutdown initiated`
    );
    response.end("Application is shutting down");
    process.exit();
  } else {
    // 🏗 Tutaj stwórz obsługę przypadku, jeśli żądany URL nie istnieje. Zwróć wtedy błąd 404.
    // 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
    // 🏗 Здесь создается случай, когда запрашиваемый URL не существует. Тогда возвращается ошибка 404.
    // 🏗 Также создайте лог в информационной консоли, указав тип лога (ERROR), дату и информацию о том, что запрашиваемый URL не существует.
    response.statusCode = STATUS_CODE.NOT_FOUND;
    response.end(String(STATUS_CODE.NOT_FOUND));
    console.log(
      `ERROR: ${new Date().toISOString()} - ${request.url} not found`
    );
  }
};

// 🔧 Wyeksportuj funkcję 'requestRouting', aby inne moduł mogły jej używać.
// 🔧 Экспортируйте функцию 'requestRouting', чтобы другие модули могли ее использовать.
module.exports = { requestRouting };
