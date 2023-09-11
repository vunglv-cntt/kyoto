import { memo } from "react";
import { ProductType } from "services/main/models";
import { StyledProduct } from "./styles";
import { Image } from "@component/image";
import { Text } from "@component/text";
import { formatCurrency } from "helpers/string";
import { CartIcon } from "assets/icons";
import { Button } from "@component/button";
import Link from "next/link";
import { PATHS } from "@constants/routes";

type Props = {
  product: ProductType;
};

const Product = memo((props: Props) => {
  const {
    product: { id, name, price, images, category_detail_id },
  } = props;

  return (
    <Link href={PATHS.item(category_detail_id.toString(), id.toString())}>
      <StyledProduct>
        <Image
          src={images.length > 0 ? images[0].url : null}
          alt="image"
          className="h-[124px] md:h-[164px] image"
          size="cover"
        />

        <Text className="name text-[14px] md:text-[16px]">{name}</Text>
        <Text className="price">{formatCurrency(price)}</Text>
        <Button icon={<CartIcon />} className="order-button">
          Đặt Hàng
        </Button>
      </StyledProduct>
    </Link>
  );
});

export { Product };
