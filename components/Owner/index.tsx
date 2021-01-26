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
      <div css={{ display: "flex", alignItems: "center" }}>
        <Image src={avatarUrl} alt="Owner's avatar" width={100} height={100} />
        <p css={{ marginLeft: 50 }}>{login}</p>
      </div>
    </Card>
  );
};
