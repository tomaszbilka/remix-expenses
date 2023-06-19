import { redirect } from "react-router";

export const loader = ({ params }) => {
  if (params["*"] === "exp") {
    return redirect("expenses");
  }
  return new Response("Not found", { status: 404 });
};
