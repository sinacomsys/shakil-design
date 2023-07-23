import { useState } from "react";
import { Text } from "../../atoms";
import { BaseIcon } from "../../atoms/baseIcon";
import { useTheme } from "../../theme/context";
import { useStyle } from "./style";

const Cover = () => {
  const classes = useStyle();
  const { color_primary_2, color_secondary_1 } = useTheme();
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover((prev) => !prev);
  };
  return (
    <div className={classes["cover"]}>
      <div className={classes["title"]}>
        <BaseIcon
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          size={{ height: 20, width: 20 }}
          name="Title-Bar-Icon-_-Exit"
          color={isHover ? color_secondary_1 : color_primary_2}
          wrapperStyle={{ cursor: "pointer" }}
        />
        <Text size={16} color={color_primary_2}>
          Hi! LOAD OR CREATE A PROJECT AND START!
        </Text>
      </div>
    </div>
  );
};
export { Cover };
