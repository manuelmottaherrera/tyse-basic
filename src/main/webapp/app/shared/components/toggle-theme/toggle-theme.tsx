import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, FormGroup, Label, Input, NavItem, NavLink } from 'reactstrap';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { IThemeProps } from 'app/shared/interfaces/ThemeProps';
import { Theme } from 'app/shared/types/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleTheme({ theme, onTheme }: IThemeProps) {
  useEffect(() => {
    loadTheme(theme);
  }, [theme]);

  const loadTheme = (themeName: Theme) => {
    // Remove existing theme link if exists
    const existingLink = document.getElementById('theme-style');
    if (existingLink) {
      existingLink.remove();
    }
    // else for first load, set local storage value
    else {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        themeName = savedTheme;
        onTheme(savedTheme);
      } else {
        localStorage.setItem('theme', themeName);
      }
    }

    // Create new link element for the selected theme
    const link = document.createElement('link');
    link.id = 'theme-style';
    link.rel = 'stylesheet';
    link.href = `/css/themes/${themeName}.css`;
    document.head.appendChild(link);
    document.documentElement.setAttribute('data-theme', themeName);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    onTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    toast.info(`Cambiando a tema ${newTheme === 'light' ? 'claro' : 'oscuro'}`);
  };

  return (
    <NavItem>
      <NavLink className="d-flex align-items-center" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size="xl" />
      </NavLink>
    </NavItem>
  );
}
