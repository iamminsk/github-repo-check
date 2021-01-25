const RepoPage = ({ data }) => {
  console.log(data);
  return <h1>RepoPage: {data.login}</h1>;
};

export async function getServerSideProps(context) {
  const { user, repo } = context.params;

  const res = await fetch(`https://api.github.com/repos/${user}/${repo}`);
  const data = await res.json();

  return { props: { data } };
}

export default RepoPage;
