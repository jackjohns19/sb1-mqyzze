import React from 'react';
import { Dashboard } from './components/Dashboard';
import { useGameStore } from './store/useGameStore';

function App() {
  const setUser = useGameStore((state) => state.setUser);

  React.useEffect(() => {
    // Initialize with mock user data
    setUser({
      id: '1',
      name: 'Math Explorer',
      level: 1,
      experience: 0,
      achievements: [],
    });
  }, [setUser]);

  return <Dashboard />;
}

export default App;