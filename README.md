# 🐾 AdoPet TJ

> A pet adoption platform connecting animal rescuers with loving adopters

AdoPet TJ is a modern web application built to streamline the pet adoption process by connecting animal rescuers (shelters and non-profit organizations) with potential pet adopters. The platform features a beautiful, user-friendly interface that makes finding and adopting pets easier than ever.

---

## ✨ Features

### For Pet Adopters
- 🔍 **Browse Available Pets** - Discover pets available for adoption with detailed profiles
- 🎯 **Advanced Filtering** - Search by species, breed, age, location, and more
- ❤️ **Save Favorites** - Keep track of pets you're interested in
- 📱 **Responsive Design** - Seamless experience on desktop and mobile devices

### For Animal Rescuers
- 📝 **Manage Pet Listings** - Add, edit, and update pet profiles
- 📊 **Track Applications** - Monitor adoption inquiries
- 🏢 **Organization Profiles** - Showcase your rescue organization

---

## 🚀 Technology Stack

- **Frontend Framework**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **Build Tool**: [Vite](https://vite.dev/) 7.2.4
- **Code Quality**: ESLint 9.39.1
- **Package Manager**: npm

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

---

## 🛠️ Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/adopet-tj.git
   cd adopet-tj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
adopet-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, icons
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components
│   ├── services/          # API services and utilities
│   ├── types/             # TypeScript type definitions
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React Context providers
│   ├── utils/             # Helper functions
│   ├── App.tsx            # Root component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

---

## 🎨 User Roles

### 1. Pet Adopter
Users looking to adopt a pet. They can:
- Browse and search for available pets
- View detailed pet profiles
- Save favorite pets
- Submit adoption applications
- Track application status

### 2. Animal Rescuer
Shelters, non-profits, or individuals rescuing animals. They can:
- Create and manage pet listings
- Upload pet photos and details
- Manage adoption applications
- Update pet status (available, pending, adopted)

---

## 🗺️ Development Roadmap

See our [GitHub Projects](https://github.com/YOUR_USERNAME/adopet-tj/projects) for the current development roadmap and user stories.

### Current Sprint
- [ ] Project structure and architecture setup
- [ ] Design system and UI components
- [ ] Authentication system
- [ ] Pet listing feed

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use ESLint rules defined in the project
- Write meaningful commit messages
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Created with ❤️ by the AdoPet TJ team

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature suggestion? Please [open an issue](https://github.com/YOUR_USERNAME/adopet-tj/issues/new).

---

## 📞 Contact

For questions or support, please reach out through:
- GitHub Issues
- Email: [your-email@example.com]

---

<div align="center">
  <strong>Every pet deserves a loving home 🏡</strong>
</div>
