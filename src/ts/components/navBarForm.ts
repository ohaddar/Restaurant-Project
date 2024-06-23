import { FormData, NavBar } from '../types/type';

export default function navBarForm(navBarData: FormData): string {
  const renderNavBar = (el: NavBar): string => {
    if (el.textContent) {
      return `<a id="text-context" href="/"  onclick="event.preventDefault();  window.onNavigate('#Accueil')">${el.textContent}</a>`;
    }
    return '';
  };

  const renderNavBarWithSrc = (el: NavBar): string => {
    if (el.src && el.display === true) {
      return `
      <a href="/"><img src="${el.src}" alt="${el.name}" class="icon-img" onclick="event.preventDefault();  window.loginLogout();"></a>
      `;
    }
    return '';
  };

  const navBars = navBarData.NavBars
    ? navBarData.NavBars.map(renderNavBar).join('')
    : '';

  const navBarsWithSrc = navBarData.NavBars
    ? navBarData.NavBars.map(renderNavBarWithSrc).join('')
    : '';

  return `
    <nav id="${navBarData.id || 'nav-form'}">
      ${navBars}
      ${navBarsWithSrc ? `<nav id="nav-icons">${navBarsWithSrc}</nav>` : ''}
    </nav>
  `;
}
