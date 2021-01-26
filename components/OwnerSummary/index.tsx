import { Card } from "../ui/Card";
import { Info } from "../ui/Info";

interface OwnerSummaryProps {
  reposCount: number;
  followersCount: number;
}

export const OwnerSummary = ({ reposCount, followersCount }) => {
  return (
    <Card css={{ marginBottom: 20 }}>
      <h2 css={{ marginBottom: 20 }}>User's info</h2>
      <Info title="public repos" text={reposCount} css={{ marginBottom: 20 }} />
      <Info
        title="followers"
        text={followersCount}
        css={{ marginBottom: 20 }}
      />
    </Card>
  );
};
