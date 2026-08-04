import type { AnyObject } from "@/types";

export const isObject = (item: unknown): item is AnyObject => {
    return typeof item === "object" && !Array.isArray(item) && item !== null;
};
