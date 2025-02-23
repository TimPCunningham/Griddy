import React, { useState, useEffect } from 'react'

export default function ThemePicker() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function handleThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value);
  } 

  return (
    <select onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="nature">Nature</option>
      <option value="coffee">Coffee</option>
      <option value="ocean">Ocean</option>
      <option value="sunset">Sunset</option>
      <option value="forest">Forest</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="retro">Retro</option>
    </select>
  )
}
