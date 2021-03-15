import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
    return (
        <div>
            {props.children}
            <br />
            <span> Full name: {props.fullName}</span>
            <br />
            <span> Bio: {props.bio}</span>
            <br />
            <span>Profession: {props.profession}</span>
            <br />
            <button onClick={() => props.handleName(props.fullName)}>
                Click here
            </button>
        </div>
    );
};

export default ProfileComponent;

ProfileComponent.defaultProps = {
    fullName: "Mr X",
    bio: "nothing to be said",
    profession: "IT Engineer",
};
ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};
