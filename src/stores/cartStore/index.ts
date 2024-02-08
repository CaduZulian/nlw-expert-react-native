import { create } from "zustand";

import * as cartInMemory from "../helpers/cartInMemory";

import { StateProps } from "./models";

import { ProductProps } from "@/utils";

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}));
