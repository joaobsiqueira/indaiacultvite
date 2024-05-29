import { useUser } from "../userContext";
import UserPicture from "./UserPicture";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  const { usuario, artista } = useUser();
  return (
    <div className="flex flex-row items-center justify-center">
      <Link to={`/artists/${usuario?._id}`}>
        <h1 className="font-semibold text-xl">{usuario?.nome}</h1>
      </Link>
    </div>
  );
};

export default ProfileButton;
