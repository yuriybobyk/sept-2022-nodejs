"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../enums");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    gender: {
        type: String,
        enum: enums_1.EGenders,
    },
    status: {
        type: String,
        enum: enums_1.EUserStatus,
        default: enums_1.EUserStatus.inactive,
    },
    age: {
        type: Number,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("user", userSchema);
