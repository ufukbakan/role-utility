import { RoleUtility } from "../..";

function main() {
    const { role, and, or } = RoleUtility();
    const isAdmin = role("admin");
    const isUaeAdmin = and("admin", "uae");
    const isTrAdmin = and("admin", "tr");
    const isMiddleEasternAdmin = or(isUaeAdmin, isTrAdmin);

    const user1Roles = ["customer", "tr"];
    console.log({
        isAdmin: isAdmin(user1Roles), // false
        isUaeAdmin: isUaeAdmin(user1Roles), // false
        isTrAdmin: isTrAdmin(user1Roles), // false
        isMiddleEasternAdmin: isMiddleEasternAdmin(user1Roles), // false
    });

    const user2Roles = ["admin", "uae"];
    console.log({
        isAdmin: isAdmin(user2Roles), // true
        isUaeAdmin: isUaeAdmin(user2Roles), // true
        isTrAdmin: isTrAdmin(user2Roles), // false
        isMiddleEasternAdmin: isMiddleEasternAdmin(user2Roles), // true
    });
}

main();
