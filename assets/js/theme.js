// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "light") {
    setTheme(null); // Switch to dark (default)
  } else {
    setTheme("light"); // Switch to light
  }
}


let setTheme = (theme) =>  {
  transTheme();
  setHighlight(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme || "dark");
  
  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};

let setHighlight = (theme) => {
  if (theme == "light") {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  } else {
    // Default/dark theme
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  }
}


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let initTheme = (theme) => {
  if (theme == null || theme == 'null') {
    let configuredTheme = (typeof window !== 'undefined') ? window.defaultTheme : null;

    if (configuredTheme === 'system') {
      const userPref = window.matchMedia;
      theme = (userPref && userPref('(prefers-color-scheme: light)').matches) ? 'light' : null;
    } else if (configuredTheme === 'light') {
      theme = 'light';
    } else if (configuredTheme === 'dark') {
      theme = 'dark';
    } else if (configuredTheme) {
      theme = configuredTheme;
    } else {
      const userPref = window.matchMedia;
      if (userPref && userPref('(prefers-color-scheme: light)').matches) {
        theme = 'light';
      } else {
        theme = null;
      }
    }
  }

  setTheme(theme);
}


initTheme(localStorage.getItem("theme"));
