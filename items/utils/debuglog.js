// Simple wrapper to enable console.log dynamically
export default class DebugLogger {
  constructor(enabled, toFile) {
    this.enabled = enabled;
    this.toFile = toFile;
  }

  log(...args) {
    if (this.enabled) {
      console.log(...args);
    }
  }
}
