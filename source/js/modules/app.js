export default class App {
  static init() {
    document.addEventListener(`DOMContentLoaded`, () => {
      const body = document.getElementsByTagName(`body`)[0];
      body.classList.add(`content-loaded`);
    });
  }
}
