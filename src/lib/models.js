// import mongoose from "mongoose";
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            max: 50,
        },
        password: {
            type: String,
        },
        provider: {
            type: String,
            required: true,
            max: 50,
            default: 'credentials'
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: true}
);

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        message: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);
userSchema.index({email: 1, provider: 1}, {unique: true})
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Contact = mongoose.models?.Contact || mongoose.model("Contact", contactSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);