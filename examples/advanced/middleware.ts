import { and, none, Role } from "./roles";

interface User {
    roles: Role[];
}

const isActivePremiumUser = and("customer", "premium", none("inactive", "blacklisted"));

const activePremiumUserMiddleWare = (user: User) => isActivePremiumUser(user.roles);

let user1: User = {
    roles: ["inactive", "premium", "customer"],
};

let user2: User = {
    roles: ["premium", "customer"],
};

console.log({
    result1: activePremiumUserMiddleWare(user1),
    result2: activePremiumUserMiddleWare(user2),
});
