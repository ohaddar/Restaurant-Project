import loginUI from './ts/pages/loginUI';
import { LoginBusinessLogic } from './ts/logic/LoginBusinessLogic';
import './css/style.css';
import navBarUI from './ts/layouts/navBarUI';
import { PhotoDisplayLogic } from './ts/logic/PhotoDisplayLogic';
import photoUI from './ts/pages/photoUI';
import pizzaUI from './ts/pages/pizzaUI';
import { PizzaDisplayLogic } from './ts/logic/PizzaDisplayLogic';
import saladeUI from './ts/pages/saladeUI';
import { SaladeDisplayLogic } from './ts/logic/SaladeDisplayLogic';
import pastaUI from './ts/pages/pastaUI';
import { PastaDisplayLogic } from './ts/logic/PastaDisplayLogic';
import { DessertDisplayLogic } from './ts/logic/DessertDisplayLogic';
import dessertUI from './ts/pages/dessertUI';
import notification from './ts/layouts/notification';
import registerUI from './ts/pages/registerUI';

window.addEventListener('DOMContentLoaded', () => {
  const photoDessertContainer: HTMLElement | null = document.getElementById(
    'photo-dessert-container'
  );
  if (photoDessertContainer) {
    photoDessertContainer.innerHTML = dessertUI();
    new DessertDisplayLogic();
  }

  const photoPastaContainer: HTMLElement | null = document.getElementById(
    'photo-pasta-container'
  );
  if (photoPastaContainer) {
    photoPastaContainer.innerHTML = pastaUI();
    new PastaDisplayLogic();
  }

  const photoSaladeContainer: HTMLElement | null = document.getElementById(
    'photo-salade-container'
  );
  if (photoSaladeContainer) {
    photoSaladeContainer.innerHTML = saladeUI();
    new SaladeDisplayLogic();
  }
  const photoPizzaContainer: HTMLElement | null = document.getElementById(
    'photo-pizza-container'
  );
  if (photoPizzaContainer) {
    photoPizzaContainer.innerHTML = pizzaUI();
    new PizzaDisplayLogic();
  }
  const photoMain: HTMLElement | null =
    document.getElementById('photo-container');

  if (photoMain) {
    photoMain.innerHTML = photoUI();
    new PhotoDisplayLogic();
  }
  const formContainer = document.getElementById('login-container');
  const registerContainer = document.getElementById('register-container');
  const navBarContainer = document.getElementById('navBar-container');
  if (formContainer) {
    formContainer.innerHTML = loginUI();
    new LoginBusinessLogic();
  }
  if (registerContainer) {
    registerContainer.innerHTML = registerUI();
    new LoginBusinessLogic();
  }
  if (navBarContainer) {
    navBarContainer.innerHTML = navBarUI();
    new LoginBusinessLogic();
  }
});

declare global {
  interface Window {
    onNavigate: (hash: string) => void;
    loginLogout: () => void;
  }
}

window.onNavigate = function (hash) {
  routerPush(hash);
};

window.loginLogout = () => {
  if (localStorage.getItem('isLogged') === 'yes') {
    localStorage.removeItem('isLogged');
  }
  window.onNavigate('#Login');
};

const routerPush = function (hash: string) {
  history.pushState({}, '', location.origin + hash);
  const container: HTMLElement | null = document.getElementById('container');

  if (container) {
    container.innerHTML = '';

    container.innerHTML += notification();
    document.body.insertAdjacentHTML('beforeend', notification());

    switch (hash) {
      case '#Accueil':
        if (container) {
          container.innerHTML = photoUI();
          new PhotoDisplayLogic();
        }
        break;
      case '#Pizza':
        if (container) {
          container.innerHTML = pizzaUI();
          new PizzaDisplayLogic();
        }
        break;
      case '#Dessert':
        if (container) {
          container.innerHTML = dessertUI();
          new DessertDisplayLogic();
        }
        break;
      case '#Salade':
        if (container) {
          container.innerHTML = saladeUI();
          new SaladeDisplayLogic();
        }
        break;
      case '#Pasta':
        if (container) {
          container.innerHTML = pastaUI();
          new PastaDisplayLogic();
        }
        break;
      case '#Login':
        if (container) {
          const isLogged = localStorage.getItem('isLogged') === 'yes';
          if (isLogged) {
            history.pushState({}, '', location.origin + '#Accueil');
            container.innerHTML = photoUI();
            new PhotoDisplayLogic();
          } else {
            container.innerHTML = loginUI();
            new LoginBusinessLogic();
          }
        }
        break;
      case '#Register':
        if (container) {
          container.innerHTML = registerUI();
          new LoginBusinessLogic();
        }
        break;
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  routerPush(window.location.hash || '#Accueil');
});

window.addEventListener('popstate', () => {
  location.reload();
});

export default {};
