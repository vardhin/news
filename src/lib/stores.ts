import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial theme from localStorage or system preference
function getInitialTheme(): boolean {
    if (!browser) return false;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Create the theme store
export const isDarkMode = writable<boolean>(getInitialTheme());

// Subscribe to changes and update localStorage and DOM
if (browser) {
    isDarkMode.subscribe((dark) => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', dark);
    });
}