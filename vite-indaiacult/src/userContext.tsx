import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface User {
  id: string;
  name: string;
  img: string;
  email: string;
  token: string;
}

interface Artist extends User {
  genre: string;
  description: string;
  image: string;
  banner: string;
}

interface UserContextType {
  user: User | null;
  artist: Artist | null;
  isLoggedIn: boolean | null;
  keepLoggedIn: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [artist, setArtist] = useState<Artist | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const keepLoggedIn = () => {
    const storedUser = localStorage.getItem("user");
    const storedArtist = localStorage.getItem("artist");

    if (storedUser) {
      const parsed = JSON.parse(storedUser) as User;
      const isValidToken: boolean =
        parsed.token ==
        document.cookie
          .split("; ")
          .find((row) => row.trim().startsWith("jwt="))
          ?.split("=")[1];
      console.log(isValidToken);
      if (isValidToken) {
        setUser(parsed);
        setIsLoggedIn(true);
      }
    } else if (storedArtist) {
      const parsed = JSON.parse(storedArtist) as Artist;
      const isValidToken: boolean =
        parsed.token ===
        document.cookie
          .split("; ")
          .find((row) => row.trim().startsWith("jwt="))
          ?.split("=")[1];
      if (isValidToken) {
        setArtist(parsed);
        setIsLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    keepLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, user, artist, keepLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
