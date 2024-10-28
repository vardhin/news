<script>
  import { Sun, Moon } from 'lucide-svelte';
  export let brandName = "Brand";  // Changed from 'string' to a default string value
  
  // Add theme state management
  let isDark = false;
  
  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark');
  }
</script>

<nav class="navbar">
  <div class="brand">
    <a href="/">{brandName}</a>
  </div>
  
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/latest">Latest</a>
    <a href="/videos">Videos</a>
    <a href="/gallery">Gallery</a>
    <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
      {#if isDark}
        <Sun size={24} />
      {:else}
        <Moon size={24} />
      {/if}
    </button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .brand a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .brand a:hover {
    color: #e0e0e0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .nav-links a:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .theme-toggle {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      padding: 1rem;
    }

    .nav-links {
      margin-top: 1rem;
      gap: 1rem;
    }
  }
</style>
