import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input, Button, Card, CardBody, LanguageToggle } from '@/components/common';
import './Signup.css';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export function Signup() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    const userType = searchParams.get('type') || 'adopter';

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong'>('weak');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const calculatePasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
        if (password.length < 8) return 'weak';

        let strength = 0;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        if (strength >= 3) return 'strong';
        if (strength >= 1) return 'medium';
        return 'weak';
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = t('validation.required');
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = t('validation.required');
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = t('validation.required');
        } else if (!validateEmail(formData.email)) {
            newErrors.email = t('validation.emailInvalid');
        }

        if (!formData.password) {
            newErrors.password = t('validation.required');
        } else if (formData.password.length < 8) {
            newErrors.password = t('validation.passwordTooShort');
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = t('validation.required');
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = t('validation.passwordsDoNotMatch');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error for this field
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }

        // Update password strength
        if (field === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Mock signup - in Story 2.4 we'll connect to real auth service
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // TODO: Actual signup logic in Story 2.4
            console.log('Signup data:', { ...formData, userType });

            // Redirect to home page (or dashboard)
            navigate('/');
        } catch (error) {
            console.error('Signup error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="language-toggle-wrapper">
                    <LanguageToggle />
                </div>

                <Card className="signup-card">
                    <CardBody>
                        <div className="signup-header">
                            <div className="signup-icon">
                                {userType === 'adopter' ? '🏠' : '🐾'}
                            </div>
                            <div className={`user-type-badge ${userType}`}>
                                {userType === 'adopter' ? t('userType.adopter.title') : t('userType.rescuer.title')}
                            </div>
                            <h1 className="signup-title">
                                {t(`auth.signup.${userType}.title`)}
                            </h1>
                            <p className="signup-subtitle">
                                {t(`auth.signup.${userType}.subtitle`)}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="name-fields">
                                <Input
                                    label={t('auth.signup.firstName')}
                                    type="text"
                                    placeholder={t('auth.signup.firstNamePlaceholder')}
                                    value={formData.firstName}
                                    onChange={(e) => handleChange('firstName', e.target.value)}
                                    error={errors.firstName}
                                    required
                                />

                                <Input
                                    label={t('auth.signup.lastName')}
                                    type="text"
                                    placeholder={t('auth.signup.lastNamePlaceholder')}
                                    value={formData.lastName}
                                    onChange={(e) => handleChange('lastName', e.target.value)}
                                    error={errors.lastName}
                                    required
                                />
                            </div>

                            <Input
                                label={t('auth.signup.email')}
                                type="email"
                                placeholder={t('auth.signup.emailPlaceholder')}
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                error={errors.email}
                                required
                            />

                            <div>
                                <Input
                                    label={t('auth.signup.password')}
                                    type="password"
                                    placeholder={t('auth.signup.passwordPlaceholder')}
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    error={errors.password}
                                    required
                                />
                                {formData.password && (
                                    <div className="password-strength">
                                        <div className="password-strength-bar">
                                            <div
                                                className={`password-strength-fill ${passwordStrength}`}
                                                style={{
                                                    width: passwordStrength === 'weak' ? '33%' :
                                                        passwordStrength === 'medium' ? '66%' : '100%'
                                                }}
                                            />
                                        </div>
                                        <span className={`password-strength-text ${passwordStrength}`}>
                                            {t(`auth.signup.passwordStrength.${passwordStrength}`)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <Input
                                label={t('auth.signup.confirmPassword')}
                                type="password"
                                placeholder={t('auth.signup.confirmPasswordPlaceholder')}
                                value={formData.confirmPassword}
                                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                error={errors.confirmPassword}
                                required
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                isLoading={isLoading}
                                style={{ width: '100%', marginTop: 'var(--spacing-4)' }}
                            >
                                {t('auth.signup.button')}
                            </Button>

                            <p className="terms-text">
                                {t('auth.signup.terms')}
                            </p>

                            <p className="signin-link">
                                {t('auth.signup.haveAccount')}{' '}
                                <Link to="/login">{t('auth.signup.loginLink')}</Link>
                            </p>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
