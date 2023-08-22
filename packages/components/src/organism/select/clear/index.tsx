import { motion } from "framer-motion";
import { DOMAttributes } from "react";
import { BaseIcon } from "../../../atoms";
import { useTheme } from "../../../theme/context";

const Clear = ({
  handleOnClear,
  whatVisible,
  isVisible,
}: {
  handleOnClear: () => void;
  whatVisible: "cross" | "arrow" | null;
  isVisible: boolean;
}) => {
  const { color_primary_1, color_primary_3 } = useTheme();
  const handleOnClick: DOMAttributes<HTMLDivElement>["onClick"] = (e) => {
    e.stopPropagation();
    handleOnClear();
  };
  return (
    <>
      <div
        onClick={handleOnClick}
        style={{
          display: whatVisible === "cross" ? "block" : "none",
        }}
      >
        <BaseIcon
          color={color_primary_1}
          name={"Performance-_-Table-Setting-_-Cross-icon-for-Delete-Item"}
          size={{ height: 10, width: 12 }}
        />
      </div>
      <div
        style={{
          display: whatVisible === "arrow" ? "block" : "none",
        }}
      >
        <motion.div animate={{ rotate: isVisible ? 180 : 0 }}>
          <BaseIcon
            color={isVisible ? color_primary_1 : color_primary_3}
            name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
            size={{ height: 6, width: 12 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export { Clear };
