// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.
// 📦 Импортируйте модули 'fs' и 'STATUS_CODE' для работы с продуктами.
const fs = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.
// 🏗 Создайте функцию 'productRouting' для обработки запросов на товары.
const productRouting = (request, response) => {
  if (request.url === "/product/add" && request.method === "GET") {
    renderAddProductPage(response);
  } else if (request.url === "/product/new" && request.method === "GET") {
    renderNewProductPage(response);
  } else if (request.url === "/product/add" && request.method === "POST") {
    addNewProduct(request, response);
  } else {
    response.statusCode = STATUS_CODE.NOT_FOUND;
    response.end(STATUS_CODE.NOT_FOUND);
  }
};

// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.
// 🏗 Создайте функцию 'renderAddProductPage', которая отображает страницу добавления продукта.
const renderAddProductPage = (response) => {
  response.setHeader("Content-Type", "text/html");
  response.end(
    '<form action="/product/add" method="POST"><input type="text" name="productName"><button type="submit">Add Product</button></form>'
  );
};

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);
// 🏗 Создайте функцию 'renderNewProductPage' для отображения последнего продукта из файла 'product.txt'.
// Подсказка: fileSystem.readFile(...);
const renderNewProductPage = (response) => {
  fs.readFile("product.txt", "utf8", (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.end(STATUS_CODE[500]);
      return;
    }
    response.setHeader("Content-Type", "text/html");
    response.end(`<h1>New Product: ${data}</h1>`);
  });
};

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");
// 🏗 Создайте функцию 'addNewProduct' для добавления нового продукта, сохранения его в файл 'product.txt' и перехода пользователя на страницу '/product/new'.
// Подсказка: fileSystem.writeFile(...);
// Подсказка: response.setHeader('Location', '/product/new');
const addNewProduct = (request, response) => {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk.toString();
  });
  request.on("end", () => {
    const productName = new URLSearchParams(body).get("productName");
    fs.writeFile("product.txt", productName, (err) => {
      if (err) {
        response.statusCode = 500;
        response.end(STATUS_CODE[500]);
        return;
      }
      response.statusCode = STATUS_CODE.FOUND;
      response.setHeader("Location", "/product/new");
      response.end();
    });
  });
};

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
// 🔧 Экспортируйте функцию 'productRouting', чтобы другие модули могли ее использовать.
module.exports = { productRouting };
