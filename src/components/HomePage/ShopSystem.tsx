import { Text } from "@component/text";
import { useAsync } from "@hooks/useAsync";
import { useMemo } from "react";
import { apiGetBranchs } from "services/branch";

function ShopSystem() {
  const [, branchsData] = useAsync(apiGetBranchs, {
    callOnFirst: true,
  });
  const banners = useMemo(() => branchsData?.data?.data || [], [branchsData]);
  return (
    <>
      <Text>Hệ thống cửa hàng</Text>
      {banners?.map((banner) => (
        <div>{banner?.name}</div>
      ))}
    </>
  );
}

export default ShopSystem;
