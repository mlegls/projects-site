import { Form, Link, useLoaderData } from "@remix-run/react";
import React from "react";
import subjects from "../../../resources/subjects.json";

async function wanikani(apiToken) {
  const res = await fetch(
    `https://api.wanikani.com/v2/assignments?subject_types=kanji`,
    { headers: { Authorization: `Bearer ${apiToken}` } }
  );
  return res
    .json()
    .then((data) =>
      data.data.map(
        (assignment) => subjects[assignment.data.subject_id - 1].data.characters
      )
    );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const apiToken = url.searchParams.get("apiToken");
  return apiToken ? wanikani(apiToken) : null;
}

function Auth() {
  return (
    <Form className="flex flex-col items-center" action="/projects/wk-shufa">
      <label htmlFor="apiToken">WaniKani API Token</label>
      <input type="text" name="apiToken" />
      <button type="submit">Submit</button>
    </Form>
  );
}

function Characters({ characters }) {
  return (
    <div className="flex items-center">
      {characters.map((character) => (
        <Link to={`/projects/wk-shufa/${character}`}>{character}</Link>
      ))}
    </div>
  );
}

export default function Index() {
  const data = useLoaderData();
  return data ? <Characters characters={data} /> : <Auth />;
}
