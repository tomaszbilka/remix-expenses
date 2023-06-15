import AuthForm from "~/components/auth/AuthForm";

import styles from "~/styles/auth.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Auth = () => {
  return <AuthForm />;
};

export default Auth;
