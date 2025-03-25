const http = require("http");

// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
// 📦 Чтобы использовать PORT здесь, вам нужно импортировать его из модуля конфигурации в файле 'config.js'.
const { PORT } = require("./config");

// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
// 📦 Импортируйте функцию 'requestRouting' из модуля 'routing/routing.js'.
const { requestRouting } = require("./routing/routing");

// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.
// 🏗 Здесь создайте функцию 'requestListener', которая будет передавать 'request' и 'response' в 'requestRouting'.
const requestListener = (req, res) => {
  requestRouting(req, res);
};

// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
// 🏗 Здесь создайте сервер Node.js. Не забудьте присвоить ему константу и передать 'requestListener'.
const server = http.createServer(requestListener);

// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);
// 🏗 Запустите сервер на порту PORT.
// Подсказка: server.listen(???);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
