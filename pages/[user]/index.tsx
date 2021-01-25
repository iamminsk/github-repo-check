const UserPage = ({ data }) => {
  return <h1>UserPage: {data.login}</h1>;
};

export async function getServerSideProps(context) {
  const { user } = context.params;

  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();

  return { props: { data } };
}

export default UserPage;
