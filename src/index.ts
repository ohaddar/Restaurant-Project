import loginUI from './pages/loginUI';
import { LoginBusinessLogic } from './logic/LoginBusinessLogic';
import './css/style.css';
import navBarUI from './pages/navBarUI';
import { PhotoDisplayLogic } from './logic/PhotoDisplayLogic';
import photoUI from './pages/photoUI';

window.addEventListener('DOMContentLoaded', () => {
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
