  // components/withAuth.tsx
  import { authStorage } from "helpers/locale-storage";
  import { useRouter } from "next/router";
  import { useEffect } from "react";

  const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const WrapperComponent: React.FC = (props) => {
      const router = useRouter();

      const token = authStorage.get("auth");

      // Simulating authentication check
      const isAuthenticated = !!token;

      useEffect(() => {
        if (!isAuthenticated) {
          // User is not authenticated, redirect to login page
          router.replace("/login");
        }
      }, [isAuthenticated, router]);

      return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
  };

  export default withAuth;
