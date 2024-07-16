import { RoleUtility } from "../..";

export type Role = "admin" | "customer" | "premium" | "inactive" | "blacklisted";

const roleUtility = RoleUtility<Role>();
export const { and, none, or, role } = roleUtility;
