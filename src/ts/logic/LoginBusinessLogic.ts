import form from '../components/form';
import navBarForm from '../components/navBarForm';
import { FormData } from '../types/type';
import loginIcon from './images/icons/sign-in.png';
import logoutIcon from './images/icons/sign-out.png';
import NotificationService from '../services/NotificationService';
import AuthService from '../services/AuthService';
import registerForm from '../components/registerForm';

export class LoginBusinessLogic {
  data: FormData;
  navBarData: FormData;

  constructor() {
    this.data = {
      id: 'login-form',
      inputs: [
        {
          id: 'email',
          name: 'email',
          type: 'email',
          placeholder: 'Entrer votre email',
        },
        {
          id: 'password',
          name: 'password',
          type: 'password',
          placeholder: 'Entrer votre mot de passe',
        },
      ],
      buttons: [
        {
          id: 'submit-button',
          name: 'submit-button',
          type: 'submit',
          textContent: 'Valider',
        },
        {
          id: 'reset-button',
          name: 'reset-button',
          type: 'reset',
          textContent: 'Reset',
        },
      ],
      buttonRegister: [
        {
          id: 'register-button',
          name: 'register-button',
          type: 'button',
          textContent: "Don't have an account: register",
        },
      ],
    };
    this.navBarData = {
      id: 'navBar',
      NavBars: [
        {
          id: 'home-div',
          name: 'home',
          type: 'string',
          textContent: 'ChezBobo',
          display: true,
        },
        {
          id: 'contact-div',
          name: 'logout',
          type: 'string',
          src: logoutIcon,
          display: localStorage.getItem('isLogged') === 'yes',
        },
        {
          id: 'login-div',
          name: 'login',
          type: 'string',
          src: loginIcon,
          display: localStorage.getItem('isLogged') !== 'yes',
        },
      ],
    };

    const navBarMain: HTMLElement | null =
      document.getElementById('navBar-container');
    if (navBarMain) {
      navBarMain.innerHTML = navBarForm(this.navBarData);
    }
    const loginMain: HTMLElement | null = document.getElementById('login-main');
    if (loginMain) {
      loginMain.innerHTML = form(this.data);
    }
    const registerMain: HTMLElement | null =
      document.getElementById('register-main');
    if (registerMain) {
      registerMain.innerHTML = registerForm(this.data);
    }

    this.attachEventListeners();
  }

  attachEventListeners() {
    const formElement = document.getElementById(this.data.id!);
    if (formElement) {
      formElement.addEventListener('submit', this.onSubmit.bind(this));
      formElement.addEventListener('reset', this.onReset.bind(this));
    }
    const registerButton = document.getElementById('register-button');
    if (registerButton) {
      registerButton.addEventListener('click', this.onRegister.bind(this));
    }
  }

  async onSubmit(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      new NotificationService().setMessage(
        'Email ou Mot de passe oublié',
        'negative'
      );
      return;
    }

    const isLoggedIn = await AuthService.login({
      email: email,
      password: password,
    });

    if (isLoggedIn) {
      window.onNavigate('#Accueil');
      localStorage.setItem('isLogged', 'yes');

      new NotificationService().setMessage(
        '<span>Connexion réussie 🎉\n</span><span>Bienvenue ' +
          email.split('@')[0].charAt(0).toUpperCase() +
          email.split('@')[0].slice(1).toLowerCase() +
          '</span>',
        'positive'
      );
    } else {
      new NotificationService().setMessage(
        '❌ Informations incorrectes',
        'negative'
      );
    }
  }

  onReset(e: Event) {
    const formReset = document.getElementById(this.data.id!) as HTMLFormElement;
    if (formReset) {
      formReset.reset();
    }
  }

  onRegister(e: Event) {
    window.onNavigate('#Register');
  }
}
