import Password from "antd/es/input/Password";
import { server } from "../server";
import { User } from "../userContext";

export const SignUpUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const res = await server.post("/registrar", {
      name,
      email,
      password,
      confirmPassword,
    });
    const user: User = {
      id: res.data.id,
      email: res.data.email,
      img: res.data.img,
      name: res.data.name,
      token: res.data.token,
    };
  } catch {}
};
