import AuthForm from "~/components/auth/AuthForm";

import styles from "~/styles/auth.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Auth = () => {
  return <AuthForm />;
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  // validation

  if (authMode === "login") {
    //loginlogic
  } else {
    //signup logic
  }
};
