import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser = internalMutation({
    args:{
        clerkID:v.string(),
        email: v.string(),
        imagUrl: v.string(),
        name: v.string(),

        
    },
    handler: async(ctx,args)=>{
        await ctx.db.insert('users',{
            clerkID: args.clerkID,
            imageURL: args.imagUrl,
            email: args.email,
            name: args.name,
        })
    }
})