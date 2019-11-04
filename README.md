# ts-timeout
node typescript timeout

```javascript
import { Timeout } from './Timeout';

async run(): void {
  const timeout = new Timeout();
  await timeout.set(1000);
}
```
