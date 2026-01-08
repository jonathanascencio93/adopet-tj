import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input, Button, Card, CardBody, LanguageToggle } from '@/components/common';
import './Signup.css';

interface FormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
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
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong'>('weak');
    const [passwordsMatch, setPasswordsMatch] = useState<boolean | null>(null);
    const [isFormValid, setIsFormValid] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const calculateAge = (birthDate: string): number => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const calculatePasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
        if (password.length < 8) return 'weak';

        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[^a-zA-Z0-9]/.test(password);

        const requirementsMet = [hasLowercase, hasUppercase, hasNumber, hasSymbol].filter(Boolean).length;

        if (requirementsMet === 4 && password.length >= 12) return 'strong';
        if (requirementsMet >= 3 && password.length >= 10) return 'strong';
        if (requirementsMet >= 2 && password.length >= 8) return 'medium';
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

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = t('validation.required');
        } else {
            const age = calculateAge(formData.dateOfBirth);
            if (isNaN(age)) {
                newErrors.dateOfBirth = t('validation.invalidDate');
            } else if (age < 18) {
                newErrors.dateOfBirth = t('validation.mustBe18');
            }
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
        } else {
            const hasLowercase = /[a-z]/.test(formData.password);
            const hasUppercase = /[A-Z]/.test(formData.password);
            const hasNumber = /[0-9]/.test(formData.password);
            const hasSymbol = /[^a-zA-Z0-9]/.test(formData.password);

            if (!hasLowercase || !hasUppercase || !hasNumber || !hasSymbol) {
                newErrors.password = t('validation.passwordRequirements');
            }
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = t('validation.required');
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = t('validation.passwordsDoNotMatch');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const checkFormValidity = () => {
        const isValid =
            formData.firstName.trim().length >= 2 &&
            formData.lastName.trim().length >= 2 &&
            formData.dateOfBirth !== '' &&
            calculateAge(formData.dateOfBirth) >= 18 &&
            validateEmail(formData.email) &&
            formData.password.length >= 8 &&
            /[a-z]/.test(formData.password) &&
            /[A-Z]/.test(formData.password) &&
            /[0-9]/.test(formData.password) &&
            /[^a-zA-Z0-9]/.test(formData.password) &&
            formData.password === formData.confirmPassword;

        setIsFormValid(isValid);
    };

    // Check form validity whenever formData changes
    useEffect(() => {
        checkFormValidity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    const handleChange = (field: keyof FormData, value: string) => {
        let processedValue = value;

        // Only allow alphabetical characters for name fields
        if (field === 'firstName' || field === 'lastName') {
            processedValue = value.replace(/[^a-zA-Z\u00c0-\u00ff\s'-]/g, '');
        }

        setFormData(prev => ({ ...prev, [field]: processedValue }));

        // Clear error for this field
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }

        // Real-time email validation
        if (field === 'email' && processedValue.length > 0) {
            if (!validateEmail(processedValue)) {
                setErrors(prev => ({ ...prev, email: t('validation.emailInvalid') }));
            }
        }

        // Update password strength
        if (field === 'password') {
            setPasswordStrength(calculatePasswordStrength(processedValue));

            // Check if passwords match when password changes
            if (formData.confirmPassword) {
                setPasswordsMatch(processedValue === formData.confirmPassword);
            }
        }

        // Check password match when confirm password changes
        if (field === 'confirmPassword') {
            if (processedValue && formData.password) {
                setPasswordsMatch(processedValue === formData.password);
            } else {
                setPasswordsMatch(null);
            }
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
                            <p className="signup-subtitle">
                                {t(`auth.signup.${userType}.subtitle`)}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="name-fields">
                                <Input
                                    label={t('auth.signup.firstName')}
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => handleChange('firstName', e.target.value)}
                                    error={errors.firstName}
                                    required
                                />

                                <Input
                                    label={t('auth.signup.lastName')}
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => handleChange('lastName', e.target.value)}
                                    error={errors.lastName}
                                    required
                                />
                            </div>

                            <Input
                                label={t('auth.signup.dateOfBirth')}
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                                error={errors.dateOfBirth}
                                required
                            />

                            <Input
                                label={t('auth.signup.email')}
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                error={errors.email}
                                required
                            />

                            <div>
                                <Input
                                    label={t('auth.signup.password')}
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    error={errors.password}
                                    helperText={!errors.password ? t('auth.signup.passwordRequirements') : undefined}
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

                            <div>
                                <Input
                                    label={t('auth.signup.confirmPassword')}
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                    error={errors.confirmPassword}
                                    required
                                />
                                {passwordsMatch !== null && formData.confirmPassword && (
                                    <div className={`password-match-feedback ${passwordsMatch ? 'match' : 'no-match'}`}>
                                        {passwordsMatch ? t('auth.signup.passwordsMatch') : t('auth.signup.passwordsDontMatch')}
                                    </div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                isLoading={isLoading}
                                disabled={!isFormValid || isLoading}
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
