import { Subject } from 'rxjs';


const getRGB = (hex) => {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  };
}

// new stuff
let registered = 0;
let refs = {};
let themes = {};
let intersectRatios = {};

// theme data
const hoverSubject = new Subject();
const clickSubject = new Subject();
const defaultTheme = { primary: '#363636', secondary: '#262626' };

const navSubject = new Subject();

const intersectSubject = new Subject();
const intersectAccuracy = 0.025;
const optionsIntersect = { threshold: [] };
let accuracy = 0;
while (accuracy < 1) {
  optionsIntersect.threshold.push(accuracy = Math.min(accuracy + intersectAccuracy, 1));
}



const getAvgTheme = () => {
  const avgPrimary = { r: 0, g: 0, b: 0};
  const avgSecondary = { r: 0, g: 0, b: 0};
  const spectrum = Object.keys(avgPrimary);
  let accumulatedRatio = 0;

  for (var id in intersectRatios) {
    const ratio = intersectRatios[id];
    accumulatedRatio += ratio;
    const theme = themes[id];
    const rgbPrimary = getRGB(theme.primary);
    const rgbSecondary = getRGB(theme.secondary);
    spectrum.forEach((c) => {avgPrimary[c] += rgbPrimary[c] * ratio; avgSecondary[c] += rgbSecondary[c] * ratio;})
  }

  if (accumulatedRatio > 0) {
    spectrum.forEach((c) => {avgPrimary[c] = Math.floor(avgPrimary[c] / accumulatedRatio); avgSecondary[c] = Math.floor(avgSecondary[c] / accumulatedRatio)});
    return {primary: `rgb(${avgPrimary.r}, ${avgPrimary.g}, ${avgPrimary.b})`, secondary: `rgb(${avgSecondary.r}, ${avgSecondary.g}, ${avgSecondary.b})`};
  }

  return defaultTheme;
};

let maxIntersect = { id: -1, ratio: 0 };

const emitIntersect = (entries) => {
  let maxIntersectLocal = { id: -1, ratio: 0 };
  let isMaxChanged = false;
  entries.forEach((entry) => {
    const ratio = Math.round(entry.intersectionRatio * 10) / 10;
    const themeId = parseInt(entry.target.dataset.themeid);
    if (themeId === maxIntersect.id && ratio < maxIntersect.ratio) {
      isMaxChanged = true;
    }
    if (ratio >= maxIntersectLocal.ratio) {
      maxIntersectLocal.ratio = ratio;
      maxIntersectLocal.id = themeId;
    }
    intersectRatios[themeId] = ratio;
  });
  intersectSubject.next(getAvgTheme());
  if (maxIntersect.id === -1 || (isMaxChanged && maxIntersectLocal.id !== maxIntersect.id)) {
    maxIntersect = maxIntersectLocal;
    navSubject.next({ up: (maxIntersect.id - 1), down: (maxIntersect.id < Object.keys(intersectRatios).length - 1) ? (maxIntersect.id + 1) : -1 });
  }
};

const intersectObserver = new IntersectionObserver(emitIntersect, optionsIntersect);

export const intersectObservable = () => {
  return intersectSubject;
};



export const navObservable = () => {
  return navSubject;
};







// let activeTheme = {...defaultTheme};

/**
 * Set current theme to new theme
 * @param {*} param0 the new theme
 */
// const set = ({primary, secondary}) => {
//   // update primary color
//   if (primary) activeTheme.primary = primary;

//   // update secondary color
//   if (secondary) activeTheme.secondary = secondary;

//   // notify observers
//   themeSubject.next(activeTheme);
// };

/**
 * Get current theme
 */
const get = (id) => {
  return (!themes[id]) ? defaultTheme : themes[id];
};

/**
 * Reset current theme to default theme
 */
// const reset = () => {
//   activeTheme = {...defaultTheme};

//   // notify observers
//   themeSubject.next(activeTheme);
// };


export const hoverObservable = () => {
  return hoverSubject;
};

export const clickObservable = () => {
  return clickSubject;
};






// register

export const register = (ref) => {
  const id = registered++;
  refs[id] = ref;
  themes[id] = {...defaultTheme};
  intersectRatios[id] = 0;
  intersectObserver.observe(ref.current);
  return id;
};

export const registerObservable = () => {
  return registerObservable;
};


// unregister

export const unregister = (id) => {
  if (!refs[id]) return;
  intersectObserver.unobserve(refs[id].current);
  delete themes[id];
  delete intersectRatios[id];
  delete refs[id];
};

export const unregisterObservable = () => {
  return unregisterObservable;
};








const set = (id, theme) => {
  if (!themes[id]) return false;
  if (theme.primary) themes[id].primary = theme.primary;
  if (theme.secondary) themes[id].secondary = theme.secondary;
  return true;
};

const reset = (id) => {
  if (!themes[id]) return false;
  themes[id] = {...defaultTheme};
  return true;
};

export const startHover = (id, theme) => {
  hoverSubject.next({id, theme});
};

export const endHover = (id) => {
  hoverSubject.next({id, theme: {}});
};

export const resetActive = (id) => {
  if (reset(id)) clickSubject.next({id, theme: defaultTheme});
};

export const setActive = (id, theme) => {
  if (set(id, theme)) clickSubject.next({id, theme});
};

export const isDefault = (theme) => {
  return theme.primary === defaultTheme.primary && theme.secondary === defaultTheme.secondary;
};

export const isNone = (theme) => {
  return !theme.primary && !theme.secondary;
};

export const isEqual = (theme1, theme2) => {
  return theme1.primary === theme2.primary && theme1.secondary === theme2.secondary;
};

export default {
  // set, get, reset,
  startHover, endHover, resetActive, setActive, hoverObservable, clickObservable, get, isDefault, isNone, isEqual,
  register, unregister,
  intersectObservable,
  navObservable
};