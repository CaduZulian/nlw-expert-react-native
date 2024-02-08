import { ProductCardProps } from "../cartStore/models";

import { ProductProps } from "@/utils";

export const add = (product: ProductCardProps[], newProduct: ProductProps) => {
  const existingProduct = product.find(
    ({id}) => id === newProduct.id
  );

  if (existingProduct) {
    return product.map((item) =>
      item.id === existingProduct.id
        ? {...item, quantity: item.quantity + 1}
        : item
    );
  }
    
  return [...product, {...newProduct, quantity: 1}];
  
}

