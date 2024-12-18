# Math Adventure 🚀

Math Adventure is an engaging, interactive mathematics learning platform designed to make learning math fun and accessible for everyone. The application features adaptive learning, real-time feedback, and gamification elements to keep users motivated and engaged.

## Features ✨

### 1. Personalized Learning Experience
- Three difficulty levels: Beginner, Intermediate, and Advanced
- Adaptive problem generation based on user performance
- Customized learning paths
- Progress tracking and experience points system

### 2. Interactive Practice Modes
- Four fundamental operations:
  - Addition ➕
  - Subtraction ➖
  - Multiplication ✖️
  - Division ➗
- Real-time feedback with visual indicators
- Helpful hints system for each problem
- Step-by-step problem breakdowns

### 3. Gamification Elements
- Experience points (XP) system
- Level progression
- Achievement tracking
- Visual feedback and animations
- Daily challenges (coming soon)

## Technology Stack 🛠️

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/math-adventure.git
cd math-adventure
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure 📁

```
src/
├── components/         # React components
│   ├── practice/      # Practice mode components
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions and helpers
├── store/             # State management
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail 🎯

### Practice Mode

1. **Difficulty Selection**
   - Beginner: Numbers 1-10
   - Intermediate: Numbers 10-50
   - Advanced: Numbers 50-100

2. **Operation Types**
   - Addition: Practice adding numbers
   - Subtraction: Practice taking numbers away
   - Multiplication: Practice multiplying numbers
   - Division: Practice dividing numbers

3. **Problem Solving**
   - Clear, large-format problem display
   - Immediate feedback on answers
   - Helpful hints system
   - Visual progress indicators

### Experience System

- Gain XP based on problem difficulty:
  - Beginner: 10 XP
  - Intermediate: 20 XP
  - Advanced: 30 XP
- Level up as you accumulate experience
- Track progress through the achievement system

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Icons provided by [Lucide Icons](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- UI components styled with [Tailwind CSS](https://tailwindcss.com)