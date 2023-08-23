import { searchIban } from './IBAN';
import './scss/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  if (searchForm && searchForm instanceof HTMLFormElement) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      searchIban();
    });
  }
});
