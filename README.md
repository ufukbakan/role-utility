# Role-Utility
Abstraction for commonly repeated authorization methods in Javascript with great Typescript support.

Supports both CJS and ESM.

## Javascript example
```js
import { role } from "role-utility";

const { role, and, or } = RoleUtility();
const isUaeAdmin = and("admin", "uae");
const isTrAdmin = and("admin", "tr");
const isMiddleEasternAdmin = or(isUaeAdmin, isTrAdmin);

const userRoles = ["admin", "uae"];
console.log(isMiddleEasternAdmin(userRoles)); // true
```

## Typescript example

```ts
import { role } from "role-utility";

type Role = "admin" | "customer" | "uae" | "usa" | "tr";

const { role, and, or } = RoleUtility<Role>();
const isUaeAdmin = and("admin", "uae");
const isTrAdmin = and("admin", "tr");
const isMiddleEasternAdmin = or(isUaeAdmin, isTrAdmin);

const userRoles = ["admin", "uae"];
console.log(isMiddleEasternAdmin(userRoles)); // true
```