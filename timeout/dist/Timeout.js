"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timeout {
    constructor() {
        this.id = undefined;
    }
    set(delay, reason) {
        return new Promise((resolve, reject) => {
            this.clear();
            const cb = undefined === reason ? () => reject(new Error(reason)) : resolve;
            this.id = setTimeout(cb, delay);
        });
    }
    clear() {
        if (undefined !== this.id)
            clearTimeout(this.id);
    }
}
exports.Timeout = Timeout;
//# sourceMappingURL=Timeout.js.map