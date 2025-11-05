// Has to be in the head tag, otherwise a flicker effect will occur.

const THEME_STORAGE_KEY = "theme";
const THEME_SOURCE_KEY = "theme_source";

let toggleTheme = (theme) => {
  const activeTheme = theme || document.documentElement.getAttribute("data-theme") || "dark";

  if (activeTheme == "light") {
    setTheme(null, { persist: true, source: "user" }); // Switch to dark
  } else {
    setTheme("light", { persist: true, source: "user" }); // Switch to light
  }
}


let setTheme = (theme, options = {}) =>  {
  const { persist = true, source = "user" } = options;
  const normalizedTheme = (theme === "dark") ? null : theme;

  transTheme();
  setHighlight(normalizedTheme);

  if (normalizedTheme) {
    document.documentElement.setAttribute("data-theme", normalizedTheme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (persist) {
    persistTheme(normalizedTheme, source);
  }
  
  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};


let persistTheme = (theme, source) => {
  if (theme === "light") {
    localStorage.setItem(THEME_STORAGE_KEY, "light");
  } else if (theme === null) {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");
  } else if (typeof theme === "string") {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } else {
    localStorage.removeItem(THEME_STORAGE_KEY);
  }

  if (source) {
    localStorage.setItem(THEME_SOURCE_KEY, source);
  } else {
    localStorage.removeItem(THEME_SOURCE_KEY);
  }
}

let setHighlight = (theme) => {
  const darkLink = document.getElementById("highlight_theme_dark");
  const lightLink = document.getElementById("highlight_theme_light");

  if (!darkLink || !lightLink) {
    return;
  }

  if (theme == "light") {
    darkLink.media = "none";
    lightLink.media = "";
  } else {
    // Default/dark theme
    lightLink.media = "none";
    darkLink.media = "";
  }
}


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let readStoredTheme = (legacyTheme) => {
  let storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const storedSource = localStorage.getItem(THEME_SOURCE_KEY);

  if (storedTheme == null && typeof legacyTheme !== 'undefined') {
    storedTheme = legacyTheme;
  }

  if (storedTheme === 'null') {
    storedTheme = null;
  }

  if (!storedSource && storedTheme) {
    if (storedTheme === "dark" && window.defaultTheme === "light") {
      localStorage.removeItem(THEME_STORAGE_KEY);
      localStorage.removeItem(THEME_SOURCE_KEY);
      return undefined;
    }
    if (storedTheme === "light" && window.defaultTheme === "dark") {
      localStorage.removeItem(THEME_STORAGE_KEY);
      localStorage.removeItem(THEME_SOURCE_KEY);
      return undefined;
    }
  }

  if (storedTheme === "dark") {
    return null;
  }

  if (storedTheme === "light") {
    return "light";
  }

  if (typeof storedTheme === "string" && storedTheme !== "") {
    return storedTheme;
  }

  return undefined;
}


let resolveDefaultTheme = () => {
  let configuredTheme = (typeof window !== 'undefined') ? window.defaultTheme : null;

  if (configuredTheme === 'light' || configuredTheme === 'dark') {
    return configuredTheme;
  }

  if (configuredTheme === 'system' || configuredTheme == null || configuredTheme === '') {
    const userPref = window.matchMedia;
    return (userPref && userPref('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  }

  return configuredTheme;
}


let initTheme = (legacyTheme) => {
  const storedPreference = readStoredTheme(legacyTheme);

  if (typeof storedPreference !== 'undefined') {
    setTheme(storedPreference, { persist: false });
    return;
  }

  const defaultTheme = resolveDefaultTheme();
  const normalizedDefault = (defaultTheme === 'dark') ? null : defaultTheme;

  setTheme(normalizedDefault, { persist: false, source: 'config' });
}


initTheme(localStorage.getItem("theme"));
