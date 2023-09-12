export const formatAddress = (addressObj: any) => {
  let { city, address, district, ward } = addressObj;
  return `${address ? `${address}, ` : ""}${ward ? `${ward}, ` : ""}${
    district ? `${district}, ` : ""
  }${city ? `${city}` : ""}`;
};
