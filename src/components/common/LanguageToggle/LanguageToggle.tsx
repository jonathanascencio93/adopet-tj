import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Toggle language"
        >
            <span className="language-option">
                {i18n.language === 'en' ? '🇺🇸 EN' : '🇲🇽 ES'}
            </span>
            <span className="language-divider">|</span>
            <span className="language-option inactive">
                {i18n.language === 'en' ? 'ES' : 'EN'}
            </span>
        </button>
    );
}
