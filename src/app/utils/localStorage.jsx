// storage.js
// This module uses sessionStorage as a drop-in replacement for SecureLS.
// It provides the same API: storeData, getData, removeData, isDataPresent, and clearAllData.

let storage = null;

// Initialize sessionStorage only in the browser environment
if (typeof window !== "undefined" && window.sessionStorage) {
  storage = window.sessionStorage;
} else {
  console.warn("sessionStorage is not available - running on the server.");
}

// Save any value (object, string, number, etc.) with the specified key
export const storeData = (key, value) => {
  try {
    if (storage) {
      // Convert the value to a JSON string before storing
      storage.setItem(key, JSON.stringify(value));
    } else {
      console.error("Cannot store data - sessionStorage is not available.");
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

// Retrieve stored data by key
export const getData = (key) => {
  try {
    if (storage) {
      const item = storage.getItem(key);
      // If item exists, parse it; otherwise, return null
      return item ? JSON.parse(item) : null;
    }
    console.error("Cannot retrieve data - sessionStorage is not available.");
    return null;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

// Remove data by key
export const removeData = (key) => {
  try {
    if (storage) {
      storage.removeItem(key);
    } else {
      console.error("Cannot remove data - sessionStorage is not available.");
    }
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

// Check if data exists by key
export const isDataPresent = (key) => {
  try {
    if (storage) {
      return storage.getItem(key) !== null;
    }
    console.error("Cannot check data presence - sessionStorage is not available.");
    return false;
  } catch (error) {
    console.error("Error checking data:", error);
    return false;
  }
};

// Clear all stored data
export const clearAllData = () => {
  try {
    if (storage) {
      storage.clear();
    } else {
      console.error("Cannot clear data - sessionStorage is not available.");
    }
  } catch (error) {
    console.error("Error clearing all data:", error);
  }
};
