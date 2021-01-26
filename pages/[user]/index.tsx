import { useRouter } from "next/router";

import { BlockWrapper } from "../../components/ui/BlockWrapper";
import { Owner } from "../../components/Owner";
import { OwnerSummary } from "../../components/OwnerSummary";

const UserPage = ({ userData }) => {
  const router = useRouter();
  const { bgColor } = router.query;

  const { login, avatar_url, public_repos, followers } = userData;

  return (
    <main css={{ backgroundColor: bgColor || "yellow", minHeight: "100vh" }}>
      <BlockWrapper wrapperCss={{ backgroundColor: "#DA4167" }}>
        <h1 css={{ padding: "100px 0" }}>Summary of {login} account</h1>
      </BlockWrapper>
      <BlockWrapper>
        <div css={{ display: "flex", flexWrap: "wrap", padding: "50px 0" }}>
          <Owner avatarUrl={avatar_url} login={login} />
          <OwnerSummary reposCount={public_repos} followersCount={followers} />
        </div>
      </BlockWrapper>
    </main>
  );
};

export async function getServerSideProps(context) {
  const { user } = context.params;

  const userRes = await fetch(`https://api.github.com/users/${user}`);
  const userData = await userRes.json();

  return { props: { userData } };
}

export default UserPage;
