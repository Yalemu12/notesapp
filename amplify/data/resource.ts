import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Note: a
    .model({
      name: a.string(),
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*
// Example of how to fetch and display notes in a React component
const { data: notes } = await client.models.Note.list()

return <ul>{notes.map(note => (
  <li key={note.id}>
    <h3>{note.name}</h3>
    <p>{note.description}</p>
    {note.image && <img src={note.image} alt={note.name} />}
  </li>
))}</ul>
*/