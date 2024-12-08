import { cn } from "@/src/lib/utils";
import React from "react";
interface ItemDescriptionsProps {
  title?: string;
  description?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}
function ItemDescriptions({
  title = "",
  description = "",
  titleStyle = "",
  descriptionStyle = "",
}: ItemDescriptionsProps) {
  return (
    <div>
      {title && (
        <h3
          className={cn("text-base lg:text-xl font-Regular mb-2 lg:mb-4  ", titleStyle)}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          className={cn(
            "text-xs lg:text-base font-Regular text-grayMedium mb-2 ",
            descriptionStyle
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default ItemDescriptions;
