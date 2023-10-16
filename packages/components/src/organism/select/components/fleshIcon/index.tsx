import { motion } from "framer-motion";
import { BaseIcon } from "../../../../atoms";
import { useTheme } from "../../../../theme/context";
import { pxToVh } from "@shakil-design/utils";

const FleshIcon = ({ isVisible }: { isVisible: boolean }) => {
  const { select: { fleshIcon } = {} } = useTheme();

  return (
    <motion.div animate={{ rotate: isVisible ? 180 : 0 }}>
      <BaseIcon
        color={fleshIcon}
        name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
        size={{ height: pxToVh(7), width: pxToVh(12) }}
        unit="viewport"
      />
    </motion.div>
  );
};

export { FleshIcon };
