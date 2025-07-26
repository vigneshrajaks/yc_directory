import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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
