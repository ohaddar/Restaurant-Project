import paragraph from '../pages/paragraph';

class NotificationService {
  notifElement: HTMLElement | null;
  constructor() {
    this.notifElement = document.getElementById('notification');
    if (!this.notifElement) {
      console.error('Notification element not found.');
    }
  }

  setMessage(val: string, type: string) {
    if (this.notifElement) {
      this.notifElement.innerHTML = paragraph(
        `notification-animation--${type}`,
        val
      );
    } else {
      console.error('Notification element not found.');
    }
  }
}

export default NotificationService;
