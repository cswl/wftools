// A tiny wrapper around console to toggle enable logging,

class Konsole {
  constructor(enabled) {
    this.enabled = enabled;
  }

  log(enable, msg) {
    if (this.enabled && enable) {
      console.log(msg);
    }
  }
}

if (window) {
  window.Konsole = Konsole;
}
export default Konsole;
