import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme";
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
        wrapperClassName={classes["icon"]}
        size={{ height: 107, width: 91 }}
        name="Shelf-View-_-Traffic-Cone"
      />
      <Text color={noContent} size={16}>
        {text}
      </Text>
    </div>
  );
};

export { NoContent };
