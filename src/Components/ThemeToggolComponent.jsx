import React, { useState } from "react";

const ThemeToggleComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove("dark"); // Remove dark mode class
        } else {
            document.documentElement.classList.add("dark"); // Add dark mode class
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
            {isDarkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
    );
};

export default ThemeToggleComponent;
