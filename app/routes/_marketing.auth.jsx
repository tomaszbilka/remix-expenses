import { redirect } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";

import { signup } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";
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

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      //loginlogic
    } else {
      await signup(credentials);
      return redirect("/expenses");
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
};
