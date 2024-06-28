import { defineSchema,defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    Podcasts: defineTable({
        User:v.id('users'),
        podcastTitle:v.string(),
        podcastDescription:v.string(),
        audioURL:v.optional(v.string()),
        audioStorageId: v.union(v.id('_storage'),v.null()),
        imageURL:v.optional(v.string()),
        imageStorageId: v.union(v.id('_storage'),v.null()),
        author:v.string(),
        authorId:v.string(),
        authorImageURL:v.string(),
        voicePromt:v.string(),
        Imagepromt:v.string(),
        voiceType:v.string(),
        audioDuration:v.number(),
        views:v.number(),

    })
        .searchIndex('search_author',{searchField:'author'})
        .searchIndex('search_PodcastTitle',{searchField:'podcastTitle'})
        .searchIndex('search_body',{searchField:'podcastDescription'})
    ,
    users: defineTable({
        email: v.string(),
        imageURL:v.string(),
        clerkID:v.string(),
        name:v.string(),
        
    })

})