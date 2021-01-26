import { motion } from "framer-motion";

interface InfoProps {
  title: string;
  text: string;
  isUrl?: boolean;
}

export const Info: React.FC<InfoProps & JSX.IntrinsicElements["div"]> = ({
  title,
  text,
  isUrl = false,
  ...rest
}) => {
  return (
    <div {...rest}>
      <p
        css={{
          lineHeight: "1",
          marginBottom: 5,
          color: "#EA5C5A",
        }}
      >
        {title}
      </p>
      {isUrl ? (
        <motion.a
          href={text}
          target="_blank"
          whileHover={{
            backgroundColor: "rgba(62, 133, 218, 0.2)",
          }}
          css={{ lineHeight: "1", fontSize: 20 }}
        >
          {text}
        </motion.a>
      ) : (
        <p css={{ lineHeight: "1", fontSize: 20 }}>{text}</p>
      )}
    </div>
  );
};
