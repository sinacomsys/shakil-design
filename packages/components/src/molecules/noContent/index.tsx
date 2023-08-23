import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme/context";
import { pxToVh } from "@shakil-design/utils";
import { useStyles } from "./style";

export interface NoContentProps {
  text: string;
}

const NoContent = ({ text }: NoContentProps) => {
  const classes = useStyles();
  const { noContent } = useTheme();
  return (
    <div className={classes["noContent"]}>
      <BaseIcon
        wrapperStyle={{ marginBottom: 10 }}
        size={{ height: pxToVh(107), width: pxToVh(91) }}
        name="Shelf-View-_-Traffic-Cone"
        unit="viewport"
      />
      <Text color={noContent} size={16}>
        {text}
      </Text>
    </div>
  );
};

export { NoContent };
