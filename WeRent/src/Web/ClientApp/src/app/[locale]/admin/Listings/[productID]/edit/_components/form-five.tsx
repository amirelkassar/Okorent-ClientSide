import CardList from "@/src/components/card-list";
import ItemVariations from "@/src/components/form-list/item-variations";
import React, { ChangeEvent, useState } from "react";
interface Variation {
  name: string;
  attribute1: string;
  attribute2: string;
}
const OptionAvailability = [
  {
    value: "always",
    label: "Always available",
  },
  {
    value: "pick",
    label: "Pick a specific dates",
    title: "",
  },
];
function FormFive() {
  const [variations, setVariations] = useState<Variation[]>([]);
  const addVariation = () => {
    setVariations([
      ...variations,
      { name: "", attribute1: "", attribute2: "" },
    ]);
  };
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event);

    const { name, value } = event.target;
    const updatedVariations = variations.map((variation, i) =>
      i === index ? { ...variation, [name]: value } : variation
    );
    setVariations(updatedVariations);
  };
  const handleInputChangeSelect = (index: number, value: any, name: string) => {
    const updatedVariations = variations.map((variation, i) =>
      i === index ? { ...variation, [name]: value } : variation
    );
    setVariations(updatedVariations);
  };
  return (
    <CardList title="Variations">
      <h3 className="text-base lg:text-xl font-Regular mb-4  ">
        You can add many variations for the same product or you can skip : Ex.
        Size and color
      </h3>
      <ItemVariations
        handleInputChange={handleInputChange}
        variations={variations}
        setVariations={setVariations}
        addVariation={addVariation}
        handleInputChangeSelect={handleInputChangeSelect}
      />
    </CardList>
  );
}

export default FormFive;
