// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.

// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

const fs = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");

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

const renderAddProductPage = (response) => {
  response.setHeader("Content-Type", "text/html");
  response.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Add Product</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        nav { 
          background-color: #f0f0f0; 
          padding: 10px; 
          margin-bottom: 20px; 
        }
        nav a { 
          margin-right: 10px; 
          text-decoration: none; 
          color: #333; 
          padding: 5px 10px; 
          gap: 10px; 
        }
        nav a:hover { 
          color: white; 
          background-color: #404040; 
          border-radius: 3px; 
        }
        form { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
        input, button { margin: 10px 0; padding: 5px; }
      </style>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/product/add">Add Product</a>
        <a href="/product/new">View Products</a>
        <a href="/logout">Logout</a>
      </nav>
      <h1>Add New Product</h1>
      <form action="/product/add" method="POST">
        <input type="text" name="productName" placeholder="Enter product name" required>
        <button type="submit">Add Product</button>
      </form>
    </body>
    </html>
  `);
};

const renderNewProductPage = (response) => {
  fs.readFile("product.txt", "utf8", (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.end(STATUS_CODE[500]);
      return;
    }
    response.setHeader("Content-Type", "text/html");
    response.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>View Products</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        nav { 
          background-color: #f0f0f0; 
          padding: 10px; 
          margin-bottom: 20px; 
        }
        nav a { 
          margin-right: 10px; 
          text-decoration: none; 
          color: #333; 
          padding: 5px 10px; 
          gap: 10px; 
        }
        nav a:hover { 
          color: white; 
          background-color: #404040; 
          border-radius: 3px; 
        }
          .product-box { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/product/add">Add Product</a>
          <a href="/product/new">View Products</a>
          <a href="/logout">Logout</a>
        </nav>
        <h1>Latest Product</h1>
        <div class="product-box">
          <h2>New Product: ${data}</h2>
          <p>This is the most recently added product.</p>
        </div>
        <p><a href="/product/add">Add Another Product</a></p>
      </body>
      </html>
    `);
  });
};

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
module.exports = { productRouting };
