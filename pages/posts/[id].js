export async function getStaticPaths() {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } };
}

const Posts = ({ id }) => {
  return (
    <>
      <h1>Post number: {id}</h1>
    </>
  );
};

export default Posts;
