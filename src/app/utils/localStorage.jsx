import SecureLS from "secure-ls";

let ls = null;

// Initialize SecureLS only in the browser environment
if (typeof window !== "undefined") {
  ls = new SecureLS({
    encodingType: "aes",
    encryptionSecret: process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRETE,
  });
} else {
  console.warn("SecureLS is not initialized - running on the server.");
}

// A flexible store function to save any value with a dynamic name
export const storeData = (key, value) => {
  try {
    if (ls) {
      ls.set(key, value);
    } else {
      console.error("Cannot store data - SecureLS is not available.");
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

// A flexible get function to retrieve stored data by key
export const getData = (key) => {
  try {
    if (ls) {
      return ls.get(key);
    }
    console.error("Cannot retrieve data - SecureLS is not available.");
    return null;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

// A function to remove data by key
export const removeData = (key) => {
  try {
    if (ls) {
      ls.remove(key);
    } else {
      console.error("Cannot remove data - SecureLS is not available.");
    }
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

// Function to check if data exists
export const isDataPresent = (key) => {
  try {
    if (ls) {
      return ls.get(key) !== null;
    }
    console.error("Cannot check data presence - SecureLS is not available.");
    return false;
  } catch (error) {
    console.error("Error checking data:", error);
    return false;
  }
};

// Function to clear all data stored
export const clearAllData = () => {
  try {
    if (ls) {
      ls.clear();
    } else {
      console.error("Cannot clear data - SecureLS is not available.");
    }
  } catch (error) {
    console.error("Error clearing all data:", error);
  }
};
