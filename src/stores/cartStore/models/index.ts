import { ProductProps } from "@/utils";

export interface ProductCardProps extends ProductProps {
  quantity: number;
}

export interface StateProps {
  products: ProductCardProps[];
  add: (product: ProductProps) => void;
}