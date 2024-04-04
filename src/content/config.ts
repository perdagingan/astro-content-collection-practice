import { z, defineCollection, reference } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(60, {
        message: "Judul maksimal 60 karakter.",
      }),
      description: z.string().max(60, {
        message: "deskripsi maksimal 160 karakter."
      }),
      image: z.string().optional(),
      date: z.date(),
      author: reference("author"),
      relatedPosts: z.array(reference("posts")).optional(),
    }),
  }),
  author: defineCollection({
    type: "data",
    schema: ({image}) => 
      z.object({
        name: z.string(),
        bio: z.string(),
        email: z.string(),
        role: z.enum(["Pengurus DKM", "IRMAS", "Ustaz", "Ustazah", "Jamaah", "Administrator"]),
        headshot: image(),
    }),
  }),
};