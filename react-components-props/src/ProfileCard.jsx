import PropTypes from 'prop-types';
import './ProfileCard.css';

function ProfileCard({ name, age, isMember, hobbies,onHobbyClick }) {
  return (
    <div className="profile-card">
      <h3 className="profile-name">Name: {name}</h3>
      <h3 className="profile-age">Age: {age}</h3>
      <h3 className="profile-status">Status: {isMember ? "Active member" : "Guest"}</h3>
      <h3 className="profile-hobbies-title">Hobbies:</h3>
      <ul className="profile-hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index} onClick={()=>onHobbyClick(hobby)} className="profile-hobby">{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileCard;