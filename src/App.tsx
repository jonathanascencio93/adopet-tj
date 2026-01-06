import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/common/Card';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="app">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--spacing-4)' }}>
          <LanguageToggle />
        </div>

        <header className="app-header">
          <h1>🐾 {t('app.name')}</h1>
          <p>{t('app.tagline')}</p>
        </header>

        <div className="demo-grid">
          {/* Buttons Demo */}
          <Card>
            <CardHeader>
              <h2>{t('common.submit')}</h2>
            </CardHeader>
            <CardBody>
              <div className="button-showcase">
                <Button variant="primary">{t('common.getStarted')}</Button>
                <Button variant="secondary">{t('common.learnMore')}</Button>
                <Button variant="outline">{t('common.edit')}</Button>
                <Button variant="ghost">{t('common.cancel')}</Button>
                <Button variant="danger">{t('common.delete')}</Button>
              </div>
              <div className="button-showcase">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="button-showcase">
                <Button isLoading>{t('common.loading')}</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardBody>
          </Card>

          {/* Form Demo */}
          <Card>
            <CardHeader>
              <h2>{t('auth.login.title')}</h2>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="form-demo">
                <Input
                  label={t('auth.login.email')}
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText="We'll never share your email"
                />
                <Input
                  label={t('auth.login.password')}
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  isLoading={isLoading}
                  style={{ width: '100%' }}
                >
                  {t('auth.login.button')}
                </Button>
              </form>
            </CardBody>
          </Card>

          {/* Pet Card Demo */}
          <Card variant="elevated">
            <div className="pet-image">🐕</div>
            <CardBody>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Max</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Golden Retriever • {t('pets.age', { count: 3 })} • {t('pets.male')}
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Friendly, house-trained, great with kids. Looking for a loving forever home!
              </p>
              <div style={{
                display: 'inline-block',
                padding: 'var(--spacing-1) var(--spacing-3)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-success-100)',
                color: 'var(--color-success-700)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)'
              }}>
                {t('pets.available')}
              </div>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Max
                </Button>
                <Button variant="secondary">
                  {t('common.learnMore')}
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <div className="pet-image">🐈</div>
            <CardBody>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Luna</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Siamese Cat • {t('pets.age', { count: 2 })} • {t('pets.female')}
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Calm, affectionate, indoor cat. Perfect for apartment living.
              </p>
              <div style={{
                display: 'inline-block',
                padding: 'var(--spacing-1) var(--spacing-3)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-warning-100)',
                color: 'var(--color-warning-600)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)'
              }}>
                {t('pets.pending')}
              </div>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Luna
                </Button>
                <Button variant="secondary">
                  {t('common.learnMore')}
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <div className="pet-image">🐦</div>
            <CardBody>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Charlie</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Parakeet • {t('pets.age', { count: 1 })} • {t('pets.male')}
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Playful, loves to sing, needs a spacious cage and toys.
              </p>
              <div style={{
                display: 'inline-block',
                padding: 'var(--spacing-1) var(--spacing-3)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-success-100)',
                color: 'var(--color-success-700)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)'
              }}>
                {t('pets.available')}
              </div>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Charlie
                </Button>
                <Button variant="secondary">
                  {t('common.learnMore')}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <footer style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-12)',
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--text-sm)'
        }}>
          <p>{t('app.name')} • Sky Blue + Amber (Color-Blind Accessible) 🌟</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
