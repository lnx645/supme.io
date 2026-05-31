export function joinObject(errors: object) {
  if (!errors) {
    return;
  }
  return Object.values(errors).join(",");
}

export const hasObjectKey = (obj: object, key: string) => {
  if (!obj) {
    return false;
  }

  return key in obj;
};
