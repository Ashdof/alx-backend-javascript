/**
 * Contains the miscellaneous route handlers.
 * @author Emmanuel Enchill <https://github.com/Ashdof>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
