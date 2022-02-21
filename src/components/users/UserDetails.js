import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

const UserDetails = ({ users }) => {
  let { username } = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getUserDetails(username);
  }, []);

  const getUserDetails = (user) => {
    setIsLoaded(true);
    setUserDetails(users.find((u) => u.login.username === user));
  };
  if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <>
        {/* { picture, name, login, email, dob, location, phone } */}
        <Link to="/" className="btn btn-light">
          Back To Home
        </Link>
        Gender:{" "}
        <strong className="text-primary text-capitalize">
          {userDetails.gender}
        </strong>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={userDetails.picture.large}
              className="round-img"
              alt={userDetails.login.username}
              style={{ width: "150px" }}
            />
            <h1>
              {userDetails.name.title} {userDetails.name.first}{" "}
              {userDetails.name.last}
            </h1>
            <p>
              Location: {userDetails.location.street.number}{" "}
              {userDetails.location.street.name}, {userDetails.location.city},{" "}
              {userDetails.location.country}, {userDetails.location.postcode}
            </p>
          </div>
          <div>
            <ul>
              <li>
                <strong>Username: </strong> {userDetails.login.username}
              </li>
              <li>
                <strong>Email: </strong> {userDetails.email}
              </li>
              <li>
                <strong>Phone Number: </strong> {userDetails.phone}
              </li>
              <li>
                <strong>Age: </strong> {userDetails.dob.age}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <strong>Coordinates: </strong>
          <div className="badge badge-primary">
            Latitude: {userDetails.location.coordinates.latitude}
          </div>
          <div className="badge badge-success">
            Longitude: {userDetails.location.coordinates.longitude}
          </div>
        </div>
      </>
    );
  }
};

export default UserDetails;
