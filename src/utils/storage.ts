const storage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const getItem = <T>(key: string): T | null => {
  try {
    const item = storage?.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setItem = <T>(key: string, value: T) => {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = (key: string) => {
  try {
    storage?.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
