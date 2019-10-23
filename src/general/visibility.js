// default tracking options
const defaultOptions = {
  threshold: 0
};


// visibility tracking singlton class
class Visibility {
  constructor() {
    this.counter = 0;     // visibility element counter
    this.targetMap = {};  // Map intersection targetId => {element ref, handle change callback}
    // Create intersection observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = this.targetMap[entry.target.getAttribute('id')];
        if (target) {
          target.callback(entry);
        }
      });
    });
  }

  register(ref, options = {}) {
    console.log(options);
    if (typeof options.enterCallback !== 'function' || typeof options.exitCallback !== 'function') return -1;
    const id = `visibility-${this.counter++}`;
    this.targetMap[id] = {ref, callback: this.registerHandleChange(options)};
    this.observer.observe(ref.current);
    return id;
  }

  unregiser(id) {
    if (id) {
      this.observer.unobserve(this.targetMap[id].ref.current);
      delete this.targetMap[id];
    }
  }

  registerHandleChange(options) {
    return (entry) => {
      if (entry.intersectionRatio > (options.threshold || defaultOptions.threshold)) {
        options.enterCallback(entry);
      }
      else {
        options.exitCallback(entry);
      }
    }
  }
};


export default (new Visibility());