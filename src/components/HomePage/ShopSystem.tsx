import { Title } from "@component/title";
import { useAsync } from "@hooks/useAsync";
import { useMemo } from "react";
import { apiGetBranchs } from "services/branch";

function ShopSystem() {
  const [, branchsData] = useAsync(apiGetBranchs, {
    callOnFirst: true,
  });
  const banners = useMemo(() => branchsData?.data?.data || [], [branchsData]);
  return (
    <div>
      <Title>Hệ thống cửa hàng</Title>
      {banners?.map((banner) => (
        <div>{banner?.name}</div>
      ))}
    </div>
  );
}

export default ShopSystem;
