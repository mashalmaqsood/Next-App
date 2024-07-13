import React from "react";

type Props = {
  params: { slug: string[] }; //params in the url
  searchParams: { sortOrder: string }; //http://localhost:3000/products?sortOrder=name
};
const ProductsPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductsPage {slug} {sortOrder}
    </div>
  );
};

export default ProductsPage;
