import { Text } from "../../../../atoms";
import { TitleMutualDefaultContentProps } from "../../tabs.type";

const TitleMutualDefaultContent = ({
  color,
  title,
  theme,
}: TitleMutualDefaultContentProps) => {
  return (
    <Text size={14} theme={theme} color={color} ellipsis>
      {title}
    </Text>
  );
};

export { TitleMutualDefaultContent };
