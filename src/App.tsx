import { useState } from 'react';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/common/Card';
import './App.css';

function App() {
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
        <header className="app-header">
          <h1>🐾 AdoPet TJ</h1>
          <p>Find your perfect companion</p>
        </header>

        <div className="demo-grid">
          {/* Buttons Demo */}
          <Card>
            <CardHeader>
              <h2>Buttons</h2>
            </CardHeader>
            <CardBody>
              <div className="button-showcase">
                <Button variant="primary">Adopt Now</Button>
                <Button variant="secondary">Learn More</Button>
                <Button variant="outline">View Details</Button>
                <Button variant="ghost">Cancel</Button>
                <Button variant="danger">Delete</Button>
              </div>
              <div className="button-showcase">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="button-showcase">
                <Button isLoading>Loading...</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardBody>
          </Card>

          {/* Form Demo */}
          <Card>
            <CardHeader>
              <h2>Sign In</h2>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="form-demo">
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText="We'll never share your email"
                />
                <Input
                  label="Password"
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
                  Sign In
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
                Golden Retriever • 3 years old • Male
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Friendly, house-trained, great with kids. Looking for a loving forever home!
              </p>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Max
                </Button>
                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <div className="pet-image">🐈</div>
            <CardBody>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Luna</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Siamese Cat • 2 years old • Female
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Calm, affectionate, indoor cat. Perfect for apartment living.
              </p>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Luna
                </Button>
                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <div className="pet-image">🐦</div>
            <CardBody>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Charlie</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-4)' }}>
                Parakeet • 1 year old • Male
              </p>
              <p style={{ marginBottom: 'var(--spacing-4)' }}>
                Playful, loves to sing, needs a spacious cage and toys.
              </p>
            </CardBody>
            <CardFooter>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  Adopt Charlie
                </Button>
                <Button variant="secondary">
                  Learn More
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
          <p>AdoPet TJ Design System • Sky Blue + Amber (Color-Blind Accessible) 🌟</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
