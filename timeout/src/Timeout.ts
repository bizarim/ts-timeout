export class Timeout {
    private id?: NodeJS.Timeout;
    constructor() {
        this.id = undefined;
    }
    public set(delay: number, reason?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.clear();
            const cb = undefined === reason ? () => reject(new Error(reason)) : resolve;
            this.id = setTimeout(cb, delay);
        });
    }
    public clear(): void {
        if (undefined !== this.id)
            clearTimeout(this.id);
    }
}