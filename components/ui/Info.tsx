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
      <p css={{ lineHeight: "1" }}>{title}</p>
      {isUrl ? (
        <a href={text}>{text}</a>
      ) : (
        <p css={{ lineHeight: "1" }}>{text}</p>
      )}
    </div>
  );
};
