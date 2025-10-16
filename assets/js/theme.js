// Has to be in the head tag, otherwise a flicker effect will occur.

const supportedThemes = ['light', 'dark'];
let configuredDefault = document.documentElement.dataset.defaultTheme;
if (!supportedThemes.includes(configuredDefault)) {
  configuredDefault = 'light';
}
const defaultTheme = configuredDefault;
const alternateTheme = defaultTheme === 'light' ? 'dark' : 'light';

let toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || defaultTheme;
  const nextTheme = currentTheme === alternateTheme ? defaultTheme : alternateTheme;
  setTheme(nextTheme);
};

let setTheme = (theme, persist = true) =>  {
  const themeToApply = theme || defaultTheme;

  transTheme();
  setHighlight(themeToApply);
  document.documentElement.setAttribute("data-theme", themeToApply);

  if (persist) {
    if (themeToApply === defaultTheme) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", themeToApply);
    }
  }
  
  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};

let setHighlight = (theme) => {
  const lightHighlight = document.getElementById("highlight_theme_light");
  const darkHighlight = document.getElementById("highlight_theme_dark");

  if (theme === "light") {
    if (darkHighlight) { darkHighlight.media = "none"; }
    if (lightHighlight) { lightHighlight.media = ""; }
  } else {
    if (lightHighlight) { lightHighlight.media = "none"; }
    if (darkHighlight) { darkHighlight.media = ""; }
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
};

let initTheme = (storedTheme) => {
  let theme = storedTheme;

  if (!theme) {
    const userPref = window.matchMedia;
    if (userPref) {
      if (defaultTheme === 'light' && userPref('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
      } else if (defaultTheme === 'dark' && userPref('(prefers-color-scheme: light)').matches) {
        theme = 'light';
      }
    }
  }
  
  setTheme(theme || defaultTheme, Boolean(storedTheme));
};

initTheme(localStorage.getItem("theme"));
