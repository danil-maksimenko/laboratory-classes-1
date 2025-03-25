// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

const homeRouting = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
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
      </style>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/product/add">Add Product</a>
        <a href="/product/new">View Products</a>
        <a href="/logout">Logout</a>
      </nav>
      <h1>Welcome to the Home Page</h1>
      <p>Navigate using the menu above or use the links to explore different sections of the application.</p>
    </body>
    </html>
  `);
};
// 🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
module.exports = { homeRouting };
