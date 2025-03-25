// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();
const logoutRouting = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Logout Page</title>
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
        .shutdown-link a {
          color: #ff0000;
          text-decoration: none;
          padding: 10px 15px;
          background-color: #ffeeee;
          border: 1px solid #ff0000;
          border-radius: 5px;
        }
        .shutdown-link a:hover {
          background-color: #ff0000;
          color: #ffffff;
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
      <h1>You have been logged out</h1>
      <p>Thank you for using the application. <a href="/">Return to Home</a></p>

      <div class="shutdown-link">
        <a href="/kill">Shutdown Application</a>
      </div>
    </body>
    </html>
  `);
};

module.exports = { logoutRouting };
