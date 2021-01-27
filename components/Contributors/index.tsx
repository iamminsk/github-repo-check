import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "../../components/ui/Card";
import { useTheme } from "../../theme";

interface ContributorsProps {
  contributorsData: Array<{
    html_url: string;
    avatar_url: string;
    login: string;
  }>;
}

export const Contributors: React.FC<ContributorsProps> = ({
  contributorsData,
}) => {
  const { bp } = useTheme();

  return (
    <Card
      css={{
        padding: 20,
        [bp.FROM_TABLET]: {
          flexBasis: "40%",
        },
      }}
    >
      <h2 css={{ marginBottom: 20, padding: 5 }}>Top repo's contributors</h2>
      {contributorsData.slice(0, 10).map((contributor, index) => (
        <motion.a
          key={index}
          href={contributor.html_url}
          target="_blank"
          whileHover={{
            backgroundColor: "rgba(62, 133, 218, 0.2)",
          }}
          css={{
            display: "flex",
            alignItems: "center",
            padding: "10px 5px",
            transformOrigin: "left",
            color: "black",
            borderRadius: 10,
          }}
        >
          <span css={{ width: 25, fontFamily: "Cairo" }}>{index + 1}</span>
          <div
            css={{
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <Image
              src={contributor.avatar_url}
              alt="Owner's avatar"
              width={50}
              height={50}
            />
          </div>
          {contributor.login}
        </motion.a>
      ))}
    </Card>
  );
};
