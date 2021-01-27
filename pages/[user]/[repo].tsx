import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import { BlockWrapper } from "../../components/ui/BlockWrapper";
import { Card } from "../../components/ui/Card";
import { Info } from "../../components/ui/Info";
import { Owner } from "../../components/Owner";

const RepoPage = ({ repoData, contributorsData }) => {
  const router = useRouter();
  const { bgColor } = router.query;

  if (!repoData) {
    return (
      <main>
        <BlockWrapper
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
          wrapperCss={{ minHeight: "100vh" }}
        >
          <p css={{ fontFamily: "Cairo", fontSize: 80, lineHeight: "1.1" }}>
            Ayyyyy something went wrong
          </p>
        </BlockWrapper>
      </main>
    );
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
          }}
        >
          Summary of <br />
          <span css={{ color: "black", fontSize: 60 }}>{repoData.name} </span>
          <span css={{ whiteSpace: "nowrap", fontSize: 40 }}>repo by</span>
          <br />
          <span css={{ color: "black", fontSize: 60 }}>
            {repoData.owner.login}
          </span>
        </h1>
      </BlockWrapper>
      <BlockWrapper>
        <div css={{ display: "flex", flexWrap: "wrap", padding: "50px 0" }}>
          <Owner
            avatarUrl={repoData.owner.avatar_url}
            login={repoData.owner.login}
          />
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
              title="main language"
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
            <Info title="open issues" text={repoData.open_issues} />
          </Card>
          <Card css={{ padding: 20 }}>
            <h2 css={{ marginBottom: 20, padding: 5 }}>
              Top repo's contributors
            </h2>
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
                <span css={{ width: 25, fontFamily: "Cairo" }}>
                  {index + 1}
                </span>
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
        </div>
      </BlockWrapper>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { user, repo } = context.params;

  const repoRes = await fetch(`https://api.github.com/repos/${user}/${repo}`);

  console.log("AAAA", repoRes);

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
