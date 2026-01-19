// GROQ Queries for Sanity
// These are used when connected to a real Sanity project

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  photographerName,
  bio,
  profileImage,
  email,
  phone,
  location,
  social
}`;

export const allAlbumsQuery = `*[_type == "album"] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  category,
  date,
  featured,
  "photoCount": count(*[_type == "photo" && references(^._id)])
}`;

export const featuredAlbumsQuery = `*[_type == "album" && featured == true] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  category,
  date,
  "photoCount": count(*[_type == "photo" && references(^._id)])
}`;

export const albumBySlugQuery = `*[_type == "album" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  category,
  date,
  featured,
  "photos": *[_type == "photo" && references(^._id)] | order(order asc){
    _id,
    title,
    "slug": slug.current,
    image,
    width,
    height,
    description,
    camera,
    lens,
    aperture,
    shutterSpeed,
    iso,
    location,
    dateTaken,
    tags
  }
}`;

export const albumSlugsQuery = `*[_type == "album"]{ "slug": slug.current }`;

export const allPhotosQuery = `*[_type == "photo"] | order(dateTaken desc){
  _id,
  title,
  "slug": slug.current,
  image,
  width,
  height,
  description,
  camera,
  lens,
  aperture,
  shutterSpeed,
  iso,
  location,
  dateTaken,
  tags,
  "album": album->{
    title,
    "slug": slug.current
  }
}`;

export const photoBySlugQuery = `*[_type == "photo" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  image,
  width,
  height,
  description,
  camera,
  lens,
  aperture,
  shutterSpeed,
  iso,
  location,
  dateTaken,
  tags,
  "album": album->{
    title,
    "slug": slug.current
  }
}`;

export const clientGalleriesQuery = `*[_type == "clientGallery"]{
  _id,
  clientName,
  "slug": slug.current,
  eventName,
  eventDate,
  coverImage,
  password,
  downloadEnabled,
  expiresAt,
  message
}`;

export const clientGalleryBySlugQuery = `*[_type == "clientGallery" && slug.current == $slug][0]{
  _id,
  clientName,
  "slug": slug.current,
  eventName,
  eventDate,
  coverImage,
  password,
  downloadEnabled,
  expiresAt,
  message,
  "photos": photos[]->{
    _id,
    title,
    "slug": slug.current,
    image,
    width,
    height
  }
}`;

export const categoriesQuery = `array::unique(*[_type == "album"].category)`;
