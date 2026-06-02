export const getAllErrors = (key: string|undefined, obj: Object|undefined) => {

  if (!obj) {
    return false;
  }
  return Object.hasOwnProperty.call(obj, key as string);
};
