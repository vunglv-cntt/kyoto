import { useMemo } from "react";
import { useRouter } from "next/router";

const useNavigate = () => {
  const router = useRouter();

  return useMemo(
    () => ({
      router,
    }),
    [router]
  );
};

export default useNavigate;
