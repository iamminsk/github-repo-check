import Image from "next/image";

import { Card } from "../ui/Card";

interface OwnerProps {
  avatarUrl: string;
  login: string;
}

export const Owner: React.FC<OwnerProps> = ({ avatarUrl, login }) => {
  return (
    <Card css={{ marginBottom: 20 }}>
      <h2 css={{ marginBottom: 20 }}>Owner</h2>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
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
            src={avatarUrl}
            alt="Owner's avatar"
            width={100}
            height={100}
          />
        </div>

        <p css={{ color: "#EA5C5A", fontFamily: "Cairo", fontSize: 20 }}>
          {login}
        </p>
      </div>
    </Card>
  );
};
