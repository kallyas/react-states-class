import Link from "react-router-dom";

const Home = () => {
  const cats = [
    {
      id: 1,
      name: "Barsik",
      description: "Black eyed cat",
    },
    {
      id: 2,
      name: "Murzik",
      description: "Lorem ipsum",
    },
  ];
  return (
    <div>
      {cats.map((cat) => (
        <Link
          key={cat.id}
          to={{
            pathname: `/details/${cat.id}`,
            state: cat,
          }}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
