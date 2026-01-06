import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Button, LanguageToggle } from '@/components/common';
import './UserTypeSelection.css';

export function UserTypeSelection() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="user-type-selection">
            <div className="container">
                <div className="language-toggle-wrapper">
                    <LanguageToggle />
                </div>

                <header className="hero">
                    <h1>{t('userType.title')}</h1>
                    <p className="subtitle">{t('userType.subtitle')}</p>
                </header>

                <div className="selection-cards">
                    {/* Adopter Card */}
                    <Card className="type-card adopter-card" variant="elevated">
                        <CardBody>
                            <div className="card-icon">🏠</div>
                            <h2>{t('userType.adopter.title')}</h2>
                            <p className="card-description">{t('userType.adopter.description')}</p>

                            <ul className="features-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.adopter.features.browse')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.adopter.features.save')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.adopter.features.apply')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.adopter.features.connect')}
                                </li>
                            </ul>

                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => navigate('/signup?type=adopter')}
                                className="type-button"
                            >
                                {t('common.getStarted')} →
                            </Button>
                        </CardBody>
                    </Card>

                    {/* Rescuer Card */}
                    <Card className="type-card rescuer-card" variant="elevated">
                        <CardBody>
                            <div className="card-icon">🐾</div>
                            <h2>{t('userType.rescuer.title')}</h2>
                            <p className="card-description">{t('userType.rescuer.description')}</p>

                            <ul className="features-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.rescuer.features.post')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.rescuer.features.manage')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.rescuer.features.connect')}
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    {t('userType.rescuer.features.track')}
                                </li>
                            </ul>

                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => navigate('/signup?type=rescuer')}
                                className="type-button"
                            >
                                {t('common.getStarted')} →
                            </Button>
                        </CardBody>
                    </Card>
                </div>

                <footer className="page-footer">
                    <p>{t('app.name')} • {new Date().getFullYear()}</p>
                </footer>
            </div>
        </div>
    );
}
