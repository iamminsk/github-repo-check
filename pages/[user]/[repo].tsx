import { useRouter } from "next/router";
import Image from "next/image";

import { BlockWrapper } from "../../components/ui/BlockWrapper";
import { Card } from "../../components/ui/Card";
import { Info } from "../../components/ui/Info";

const RepoPage = ({ repoData, contributorsData }) => {
  console.log(contributorsData);

  const router = useRouter();
  const { bgColor } = router.query;

  return (
    <main css={{ backgroundColor: bgColor || "yellow", minHeight: "100vh" }}>
      <BlockWrapper wrapperCss={{ backgroundColor: "blue" }}>
        <h1 css={{ padding: "100px 0" }}>
          Summary of {repoData.owner.login}'s {repoData.name} repo
        </h1>
      </BlockWrapper>
      <BlockWrapper>
        <div css={{ display: "flex", flexWrap: "wrap", padding: "50px 0" }}>
          <Card css={{ marginBottom: 20 }}>
            <h2 css={{ marginBottom: 20 }}>Owner</h2>
            <div css={{ display: "flex", alignItems: "center" }}>
              <Image
                src={repoData.owner.avatar_url}
                alt="Owner's avatar"
                width={100}
                height={100}
              />
              <p css={{ marginLeft: 50 }}>{repoData.owner.login}</p>
            </div>
          </Card>
          <Card css={{ marginBottom: 20 }}>
            <h2 css={{ marginBottom: 20 }}>Repo's info</h2>
            <Info
              title="name"
              text={repoData.name}
              css={{ marginBottom: 20 }}
            />
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
            <Info
              title="language"
              text={repoData.language}
              css={{ marginBottom: 20 }}
            />
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
            <Info
              title="open issues"
              text={repoData.open_issues}
              css={{ marginBottom: 20 }}
            />
          </Card>
          <Card>
            <h2 css={{ marginBottom: 20 }}>Top repo's contributors</h2>
            {contributorsData.slice(0, 10).map((contributor) => (
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 0",
                }}
              >
                <div
                  css={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={contributor.avatar_url}
                    alt="Owner's avatar"
                    width={50}
                    height={50}
                  />
                </div>
                <a
                  href={contributor.html_url}
                  target="_blank"
                  css={{ marginLeft: 20 }}
                >
                  {contributor.login}
                </a>
              </div>
            ))}
          </Card>
        </div>
      </BlockWrapper>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { user, repo } = context.params;

  const repoRes = await fetch(`https://api.github.com/repos/${user}/${repo}`);
  const repoData = await repoRes.json();

  const contributorsRes = await fetch(
    `https://api.github.com/repos/${user}/${repo}/contributors`
  );
  const contributorsData = await contributorsRes.json();

  return { props: { repoData, contributorsData } };
}

export default RepoPage;
