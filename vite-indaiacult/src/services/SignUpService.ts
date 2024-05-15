import Password from "antd/es/input/Password";
import { server } from "../server";
import { User } from "../userContext";

export const SignUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await server.post("/registrarUsuario", {
      name,
      email,
      password,
    });
    const user: User = {
      id: res.data.id,
      email: res.data.email,
      img: res.data.img,
      name: res.data.name,
      token: res.data.token,
    };
    window.localStorage.removeItem("artist");
    window.localStorage.setItem("user", JSON.stringify(user as User));
  } catch (error: any) {
    return error.message;
  }
};
