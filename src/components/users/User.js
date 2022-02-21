import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({
  user: { picture, name, login, email, dob, location, phone },
}) => {
  const getFormattedDate = (date) => {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    return `${day}/${month}/${year}`;
  };
  const getFormattedPhone = (phone) => {
    return phone.replaceAll("-", "");
  };
  return (
    <div className="card text-center">
      <img
        src={picture.thumbnail}
        alt={login.username}
        className="round-img"
        style={{ width: "60px" }}
      />
      <ul>
        <li>
          <strong>Name: </strong>
          <Link to={`/userdetails/${login.username}`}>
            {name.first} {name.last}
          </Link>
        </li>
        <li>
          <strong>Username: </strong>
          {login.username}
        </li>
        <li>
          <strong>Email: </strong>
          {email}
        </li>
        <li>
          <strong>DOB: </strong>
          {getFormattedDate(dob.date)}
        </li>
        <li>
          <strong>Address: </strong>
          {location.street.number} {location.street.name}, {location.city},{" "}
          {location.country}, {location.postcode}
        </li>
        <li>
          <strong>Phone Number: </strong>
          {getFormattedPhone(phone)}
        </li>
      </ul>
    </div>
  );
};

User.prototype = {
  user: PropTypes.object.isRequired,
};

export default User;
