import Spinner from "../layouts/Spinner";
import User from "./User";

const Users = ({ error, isLoaded, users }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="card-style">
        {users.map((user) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
