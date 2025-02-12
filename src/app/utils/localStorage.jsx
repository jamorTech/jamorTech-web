// "use client"
// let storage;

// if (typeof window !== "undefined" && window.sessionStorage) {
//   storage = window.sessionStorage;
// } else {
//   console.warn("sessionStorage is not available - using dummy storage.");
//   storage = {
//     setItem: () => {},
//     getItem: () => null,
//     removeItem: () => {},
//     clear: () => {},
//   };
// }

// export const storeData = (key, value) => {
//   try {
//     storage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error("Error storing data:", error);
//   }
// };

// export const getData = (key) => {
//   try {
//     const item = storage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     return null;
//   }
// };

// export const removeData = (key) => {
//   try {
//     storage.removeItem(key);
//   } catch (error) {
//     console.error("Error removing data:", error);
//   }
// };

// export const isDataPresent = (key) => {
//   try {
//     return storage.getItem(key) !== null;
//   } catch (error) {
//     console.error("Error checking data presence:", error);
//     return false;
//   }
// };

// export const clearAllData = () => {
//   try {
//     storage.clear();
//   } catch (error) {
//     console.error("Error clearing all data:", error);
//   }
// };
