import { useRouter } from "next/router";
import Head from "next/head";

import { BlockWrapper } from "../../components/ui/BlockWrapper";
import { Owner } from "../../components/Owner";
import { ErrorInfo } from "../../components/ErrorInfo";
import { Contributors } from "../../components/Contributors";
import { RepoData } from "../../components/RepoData";
import { useTheme } from "../../theme";

const RepoPage = ({ repoData, contributorsData }) => {
  const router = useRouter();
  const { bgColor, showMainLanguage, showOpenIssues } = router.query;
  const { bp } = useTheme();

  if (!repoData) {
    return <ErrorInfo />;
  }

  return (
    <main
      css={{
        backgroundColor: bgColor || "#fff",
        minHeight: "100vh",
      }}
    >
      <BlockWrapper>
        <h1
          css={{
            padding: "60px 0 30px 0",
            color: "#EA5C5A",
            fontSize: 40,
            span: {
              fontFamily: "Cairo",
            },
            [bp.FROM_TABLET]: {
              fontSize: 60,
            },
          }}
        >
          Summary of <br />
          <span
            css={{
              color: "black",
              fontSize: 60,
              [bp.FROM_TABLET]: {
                fontSize: 75,
              },
            }}
          >
            {repoData.name}{" "}
          </span>
          <span
            css={{
              whiteSpace: "nowrap",
              fontSize: 40,
              [bp.FROM_TABLET]: { fontSize: 60 },
            }}
          >
            repo by
          </span>
          <br />
          <span
            css={{
              color: "black",
              fontSize: 60,
              [bp.FROM_TABLET]: {
                fontSize: 75,
              },
            }}
          >
            {repoData.owner.login}
          </span>
        </h1>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            padding: "50px 0",
            [bp.FROM_TABLET]: {
              flexWrap: "wrap",
            },
          }}
        >
          <Owner
            avatarUrl={repoData.owner.avatar_url}
            login={repoData.owner.login}
          />
          <RepoData
            repoData={repoData}
            showMainLanguage={showMainLanguage === "true"}
            showOpenIssues={showOpenIssues === "true"}
          />
          <Contributors contributorsData={contributorsData} />
        </div>
      </BlockWrapper>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { user, repo } = context.params;

  const repoRes = await fetch(`https://api.github.com/repos/${user}/${repo}`);

  if (!repoRes.ok) {
    return { props: { repoData: null } };
  }

  const repoData = await repoRes.json();

  const contributorsRes = await fetch(
    `https://api.github.com/repos/${user}/${repo}/contributors`
  );
  const contributorsData = await contributorsRes.json();

  return { props: { repoData, contributorsData } };
}

export default RepoPage;
