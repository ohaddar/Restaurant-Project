import form from '../ts/components/form';
import navBarForm from '../ts/components/navBarForm';
import { FormData } from '../types/type';
import homeIcon from './images/icons/home.png';
import eatIcon from './images/icons/eat.png';
import NotificationService from '../ts/services/NotificationService';
import AuthService from '../ts/services/AuthServics';
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
    };
    this.navBarData = {
      id: 'navBar',
      NavBars: [
        {
          id: 'home-div',
          name: 'home',
          type: 'string',
          textContent: 'ChezBobo',
        },
        {
          id: 'contact-div',
          name: 'contact',
          type: 'string',
          src: homeIcon,
        },
        {
          id: 'login-div',
          name: 'login',
          type: 'string',
          src: eatIcon,
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

    this.attachEventListeners();
  }

  attachEventListeners() {
    const formElement = document.getElementById(this.data.id!);
    if (formElement) {
      formElement.addEventListener('submit', this.onSubmit.bind(this));
      formElement.addEventListener('reset', this.onReset.bind(this));
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
    }
    const isLoggedIn = await AuthService.login({
      email: email,
      password: password,
    });

    if (isLoggedIn) {
      new NotificationService().setMessage(
        '<span>Connexion réussie 🎉\n</span><span>Bienvenue ' +
          email.split('@')[0].charAt(0).toUpperCase() +
          password.split('@')[0].slice(1).toLowerCase() +
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
      console.log([]);
    }
  }
}
