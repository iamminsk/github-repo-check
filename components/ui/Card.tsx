export const Card = (props) => (
  <div
    css={{
      borderRadius: 10,
      flexBasis: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      padding: 30,
      boxShadow: "rgba(234, 92, 90, 0.2) 0px 7px 29px 0px",
    }}
    {...props}
  />
);
