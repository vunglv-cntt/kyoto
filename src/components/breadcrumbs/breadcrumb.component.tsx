/** @format */

import { Breadcrumb } from "antd";
import { memo, useMemo } from "react";

import { ROUTES } from "@constants/routes";
import Link from "next/link";
import { Text } from "@component/text";
import useNavigate from "@hooks/useNavigate";
import styled from "styled-components";

const BreadCrumbs = () => {
  const { router } = useNavigate();
  const pathSnippets = router.pathname.split("/");

  const breadcrumbItems = useMemo(
    () =>
      pathSnippets.map((i, index) => {
        const url = `/${i}`;
        const isLastItem = index === pathSnippets.length - 1;
        return {
          key: url,
          title: (
            <Link href={url}>
              <StyledText
                className={`cursor-pointer ${isLastItem ? "font-bold" : ""}`}
              >
                {ROUTES.find((i) => url === i.href)?.title}
              </StyledText>
            </Link>
          ),
        };
      }),
    [pathSnippets]
  );

  return (
    <Breadcrumb
      items={breadcrumbItems}
      className="my-6 items-center"
      separator=">"
    />
  );
};

const StyledText = styled(Text)`
  font-size: 14px;
`;

export default memo(BreadCrumbs);
