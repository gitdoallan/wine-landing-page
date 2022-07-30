export const isDarkModeActive = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

if (isDarkModeActive) console.log('DARK MODE'); //TODO
else console.log('NORMAL MODE'); //TODO
