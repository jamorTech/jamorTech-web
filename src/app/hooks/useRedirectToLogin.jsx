import { useRouter } from "next/navigation";

const useRedirectToLogin = () => {
  const router = useRouter();

  return () => {
    // const currentPath = window.location.pathname; // Capture current location
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

    router.push(`/login?from=${encodeURIComponent(currentPath)}`); // Redirect with query param
  };
};

export default useRedirectToLogin;
