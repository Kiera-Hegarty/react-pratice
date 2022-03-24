import { useParams } from "react-router-dom";

const Profile = () => {
  const { nameId } = useParams();

  return (
    <>
      <h3> Name </h3>
      <h4> Profile page for id: {nameId}</h4>
    </>
  );
};

export default Profile;
