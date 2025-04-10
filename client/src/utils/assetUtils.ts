/**
 * Utility function to get the correct path for assets on GitHub Pages
 * This handles the difference between development and production builds
 */
export const getAssetPath = (path: string): string => {
  // Check if running on GitHub Pages in production
  const isGitHubPages = import.meta.env.MODE === 'production' && window.location.hostname.includes('github.io');
  
  // If on GitHub Pages, prepend the repository name to the path
  if (isGitHubPages) {
    return `/BalconSolarCyprus${path}`;
  }
  
  // Otherwise, return the path as is for development
  return path;
}; 