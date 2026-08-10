import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pgdetail_cookie_consent';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p>Utilizamos cookies propias y de terceros para mejorar su experiencia. Al aceptar, nos autoriza a procesar datos conforme a nuestra <a href="/politica-cookies">Política de Cookies</a>.</p>
        <button className="button button-small" onClick={acceptCookies}>Aceptar cookies</button>
      </div>
    </div>
  );
}
