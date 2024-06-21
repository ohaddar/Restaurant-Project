import loginUI from './pages/loginUI';
import { LoginBusinessLogic } from './logic/LoginBusinessLogic';
import './css/style.css';
import navBarUI from './pages/navBarUI';
import { PhotoDisplayLogic } from './logic/PhotoDisplayLogic';
import photoUI from './pages/photoUI';
import pizzaUI from './pages/pizzaUI';
import { PizzaDisplayLogic } from './logic/PizzaDisplayLogic';
import saladeUI from './pages/saladeUI';
import { SaladeDisplayLogic } from './logic/SaladeDisplayLogic';
import pastaUI from './pages/pastaUI';
import { PastaDisplayLogic } from './logic/PastaDisplayLogic';
import { DessertDisplayLogic } from './logic/DessertDisplayLogic';
import dessertUI from './pages/dessertUI';

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
  const navBarContainer = document.getElementById('navBar-container');
  if (formContainer) {
    formContainer.innerHTML = loginUI();
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
  }
}

window.onNavigate = function (hash) {
  routerPush(hash);
};

const routerPush = function (hash: string) {
  history.pushState({}, '', location.origin + hash);
  console.log('value de hash in routerPush', hash);
  const container: HTMLElement | null = document.getElementById('container');
  if (container) {
    container.innerHTML = '';
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
          container.innerHTML = loginUI();
          new LoginBusinessLogic();
        }
        break;
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  console.log("démarrage de l'application");
  routerPush(window.location.hash || '#Accueil');
});

export default {};
