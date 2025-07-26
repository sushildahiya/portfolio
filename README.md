# 🚀 Sushil Dahiya - Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise with stunning 3D animations and smooth interactions.

![Portfolio Preview](https://via.placeholder.com/800x400/0f0f23/00d9ff?text=Sushil+Dahiya+Portfolio)

## ✨ Features

- 🎨 **Futuristic 3D Developer Theme** - Matrix rain effects and floating code elements
- ⚡ **Smooth Animations** - Powered by Framer Motion for silky-smooth interactions  
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🚀 **Live Project Showcases** - Interactive project cards with live demos
- 💼 **Professional Timeline** - 4+ years of experience at Vipas.AI and HCL Technologies
- 🛠️ **Interactive Skills** - Animated progress bars and skill categorization
- 🔗 **Social Integration** - Direct links to GitHub, LinkedIn, and professional profiles

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and concurrent features
- **Framer Motion** - Smooth animations and gesture handling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Consistent icon system

### 3D & Animations
- **Custom SVG Animations** - Hand-crafted 3D elements
- **Matrix Rain Effect** - Canvas-based background animation
- **Scroll-triggered Animations** - Progressive reveals and interactions

### Development Tools
- **Yarn** - Fast, reliable package manager
- **ESLint** - Code quality and consistency
- **Craco** - Custom React configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- Yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sushildahiya/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
cd frontend
yarn install
```

3. **Start development server**
```bash
yarn start
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
cd frontend
yarn build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build first
yarn build

# Deploy build folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
yarn add --dev gh-pages

# Deploy
yarn deploy
```

## 🔧 Configuration

### Environment Variables
Create `.env` files as needed:

**Frontend (.env)**
```
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

**Backend (.env)**
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=portfolio_db
```

## 📁 Project Structure

```
portfolio/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Shadcn/ui components
│   │   │   ├── 3d-elements/# Custom 3D SVG components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── mock.js      # Portfolio data
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── backend/                # FastAPI backend (optional)
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── deployment/            # Deployment configurations
├── README.md
└── package.json
```

## 🎨 Customization

### Colors & Theme
Edit `frontend/src/index.css` to customize the color scheme:
```css
:root {
  --primary: your-color;
  --secondary: your-color;
  /* ... */
}
```

### Personal Information
Update `frontend/src/data/mock.js` with your details:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... rest of your info
};
```

### 3D Elements
Customize animations in `frontend/src/components/3d-elements/`:
- `FloatingCode.jsx` - Code symbols animation
- `HolographicCubes.jsx` - 3D cube elements  
- `CodeMatrix.jsx` - Matrix-style data visualization

## 🔗 Live Demo

**[View Live Portfolio →](https://your-portfolio-url.vercel.app)**

## 📧 Contact

**Sushil Dahiya**
- 📧 Email: sushildahiya37@gmail.com
- 🔗 LinkedIn: [linkedin.com/in/sushil-dahiya](https://linkedin.com/in/sushil-dahiya)
- 💻 GitHub: [github.com/sushildahiya](https://github.com/sushildahiya)
- 🏆 Naukri/Code360: [Profile Link](https://www.naukri.com/code360/profile/Sushil_Dahiya)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Lucide React** for consistent icons

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ using React and modern web technologies*