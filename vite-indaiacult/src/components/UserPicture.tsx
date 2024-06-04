import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useUser } from "../userContext";
import { GoPencil } from "react-icons/go";

const UserPicture = () => {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (image) {
      const imageRef = ref(storage, "image");
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((downloadUrl) => {
              setUrl(downloadUrl);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const { usuario, artista } = useUser();

  return (
    <div>
      <input
        type="file"
        id="ArtistaImagem"
        className="hidden"
        onChange={(e) => {
          e.target.files && setImage(e.target.files[0]);
        }}
      />
      <div className="flex ">
        <div className="flex items-end -space-x-8">
          <img
            src={image ? URL.createObjectURL(image) : "/default.png"}
            alt=""
            className="rounded-full border-4 border-darkblue object-cover dark:border-lightblue w-20 h-20"
          />

          <label
            htmlFor="ArtistaImagem"
            className="flex cursor-pointer items-center justify-center rounded-full px-3 py-3 w-max h-max bg-darkblue dark:bg-lightblue"
          >
            <GoPencil className="fill-white" />
          </label>
        </div>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      <h1 className="font-semibold text-xl">{usuario?.nome}</h1>
    </div>
  );
};

export default UserPicture;
