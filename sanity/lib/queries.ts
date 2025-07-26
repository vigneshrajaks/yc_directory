import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc) {
    _id, 
    title, 
    category, 
    description, 
    image, 
    author -> {_id, name, bio}, 
    slug, 
    views,
    _createdAt
}`);
