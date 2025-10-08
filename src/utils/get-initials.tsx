export const getInitials = (
  firstName: string,
  lastName?: string,
  isFullName: boolean = false,
) => {
  if (!firstName && !lastName) return "";
  if (isFullName) return getInitialsFromName(firstName);
  const initials: string = `${firstName?.charAt(0) ?? ""}${lastName?.charAt(0) ?? ""}`;
  return initials;
};

export const getFullName = (
  firstName: string,
  lastName?: string,
  fallback: string = "---",
) => {
  if (!firstName && !lastName) return fallback;
  const fullName: string = `${firstName ?? ""} ${lastName ?? ""}`;
  return fullName;
};

export const getInitialsFromName = (name: string) => {
  const nameParts: any = name?.split(" ") ?? [];
  const initials: string = `${nameParts?.[0]?.charAt(0) ?? ""}${nameParts?.[1]?.charAt(0) ?? ""}`;
  return initials;
};
