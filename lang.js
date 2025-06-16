async function setLanguage() {
  const userLang = navigator.language.slice(0, 2); // 'fr', 'en', etc.
  const response = await fetch('lang.json');
  const translations = await response.json();

  const lang = translations[userLang] || translations['fr']; // fallback: fr

  document.getElementById('welcome').textContent = lang.welcome;
  document.getElementById('don').textContent = lang
