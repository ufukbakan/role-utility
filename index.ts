type RoleParam<T extends string = string> = T | BooleanProcuder<T>;
type BooleanProcuder<T extends string = string> = (args: RoleParam<T>[]) => boolean;

function andRole<T extends string = string>(...acceptedRoles: RoleParam<T>[]): BooleanProcuder<T> {
    return (userRoles: RoleParam<T>[]) =>
        acceptedRoles.every((acceptedRole) => {
            if (typeof acceptedRole === "function") return acceptedRole(userRoles);
            return userRoles.includes(acceptedRole);
        });
}

function orRole<T extends string = string>(...acceptedRoles: RoleParam<T>[]): BooleanProcuder<T> {
    return (userRoles: RoleParam<T>[]) =>
        acceptedRoles.some((acceptedRole) => {
            if (typeof acceptedRole === "function") return acceptedRole(userRoles);
            return userRoles.includes(acceptedRole);
        });
}

export function noRole<T extends string = string>(...blockedRoles: RoleParam<T>[]): BooleanProcuder<T> {
    return (userRoles: RoleParam<T>[]) =>
        !blockedRoles.some((blockedRole) => {
            if (typeof blockedRole === "function") return blockedRole(userRoles);
            return userRoles.includes(blockedRole);
        });
}

export const role = <T extends string>(role: RoleParam<T>) => andRole(role);

interface RoleUtiltyInterface<T extends string> {
    and: typeof andRole<T>;
    or: typeof orRole<T>;
    none: typeof noRole<T>;
    role: typeof role<T>;
}

export const RoleUtility: <T extends string>() => RoleUtiltyInterface<T> = () => ({
    and: andRole,
    none: noRole,
    or: orRole,
    role: role,
});
