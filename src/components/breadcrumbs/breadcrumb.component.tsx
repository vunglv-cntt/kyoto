/** @format */

import { Breadcrumb } from "antd";
import { memo } from "react";
import { HomeFilled } from "@ant-design/icons";

import { ROUTES } from "@constants/routes";
import Link from "next/link";
import { Text } from "@component/text";
import useNavigate from "@hooks/useNavigate";

const BreadCrumbs = () => {
  const { router } = useNavigate();
  const pathSnippets = router.pathname.split("/");

  const breadcrumbItems = pathSnippets
    .filter((i) => !!i)
    .map((i) => {
      const url = `/${i}`;
      return {
        key: url,
        title: (
          <Link href={url}>
            <Text>{ROUTES.find((i) => url === i.href)?.title}</Text>
          </Link>
        ),
      };
    });

  return <Breadcrumb items={breadcrumbItems} className="mb-6" />;
};

export default memo(BreadCrumbs);
