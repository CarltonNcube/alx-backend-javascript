// full_server/controllers/AppController.js
class AppController {
  static getHomepage(request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
