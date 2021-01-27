import { Card } from "../../components/ui/Card";
import { Info } from "../../components/ui/Info";

interface RepoDataProps {
  repoData: {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    subscribers_count: number;
    watchers: number;
    open_issues: number;
  };
  showMainLanguage: boolean;
  showOpenIssues: boolean;
}

export const RepoData: React.FC<RepoDataProps> = ({
  repoData,
  showMainLanguage,
  showOpenIssues,
}) => {
  return (
    <Card css={{ marginBottom: 20 }}>
      <h2 css={{ marginBottom: 20 }}>Repo's info</h2>
      <Info title="name" text={repoData.name} css={{ marginBottom: 20 }} />
      <Info
        title="description"
        text={repoData.description}
        css={{ marginBottom: 20 }}
      />
      <Info
        title="github page"
        text={repoData.html_url}
        isUrl={true}
        css={{ marginBottom: 20 }}
      />
      <Info
        title="homepage"
        text={repoData.homepage}
        isUrl={true}
        css={{ marginBottom: 20 }}
      />
      {showMainLanguage && (
        <Info
          title="main language"
          text={repoData.language}
          css={{ marginBottom: 20 }}
        />
      )}
      <Info
        title="subscribers"
        text={repoData.subscribers_count}
        css={{ marginBottom: 20 }}
      />
      <Info
        title="watchers"
        text={repoData.watchers}
        css={{ marginBottom: 20 }}
      />
      {showOpenIssues && (
        <Info title="open issues" text={repoData.open_issues} />
      )}
    </Card>
  );
};
