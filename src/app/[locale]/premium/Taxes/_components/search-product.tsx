"use client";
import SearchIcon from "@/src/assets/icons/search";
import XIcon from "@/src/assets/icons/x";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import placeholderImg from "@/src/assets/images/placTableProduct.png";
import CloseIcon from "@/src/assets/icons/close";
interface Product {
  id: number;
  name: string;
  image: StaticImageData;
}

const initialProducts: Product[] = [
  { id: 1, name: "Samsung S24 Ultra", image: placeholderImg },
  { id: 2, name: "Apple Mobile", image: placeholderImg },
  { id: 3, name: "Apple Mobile", image: placeholderImg },
  { id: 4, name: "Apple Mobile", image: placeholderImg },
];
function SearchProduct() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selected, setSelected] = useState<Product[]>([]);

  const handleAssign = (product: Product) => {
    if (!selected.some((p) => p.id === product.id)) {
      setSelected([...selected, product]);
    }
  };

  const handleRemove = (id: number) => {
    setSelected(selected.filter((p) => p.id !== id));
  };
  return (
    <div className="">
      {/* Search Bar */}
      <Input
        leftSection={<SearchIcon className="w-4 h-auto" fill="#6F6B7D" />}
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputClassName="bg-white h-12 rounded-xl"
        className="mb-4"
      />

      {/* Product List */}
      <div className="space-y-2">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b last-of-type:border-none p-2  transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-md"
                />
                <div>
                  <p className="text-xs text-grayMedium font-Regular">
                    Product Name
                  </p>
                  <p className="text-sm">{product.name}</p>
                </div>
              </div>
              {selected.some((p) => p.id === product.id) ? (
                <button onClick={() => handleRemove(product.id)}>
                  <CloseIcon className="w-5 h-5 text-red-500" />
                </button>
              ) : (
                <Button
                  className={"h-7 !text-xs !px-4 rounded-lg !border"}
                  onClick={() => handleAssign(product)}
                >
                  Assign
                </Button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchProduct;
