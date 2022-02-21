import Users from "../users/Users";

const Home = ({ error, isLoaded, users }) => {
  return <Users error={error} isLoaded={isLoaded} users={users} />;
};

export default Home;
