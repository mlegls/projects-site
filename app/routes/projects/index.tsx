import { redirect } from "@remix-run/server-runtime";

export async function loader() {
  // redirect to home page
  return redirect("/")
}