import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Container = (props: Props) => {
  const { className = "", children } = props;
  return (
    <div
      {...props}
      className={"max-w-screen-xl mx-auto px-4 flex flex-col " + className}
    >
      {children}
    </div>
  );
};

export { Container };
