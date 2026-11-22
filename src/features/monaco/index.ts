import type z from "zod";
import { BaseSchema } from "./base";
import { CompassCardSchema, CompassSchema } from "./compass";
import { PartnerSchema } from "./partnersList";
import { RussianDictionarySchema } from "./russianDictionary";
import { RouterConfigSchema } from "./router";
import { HomeSectionConfigSchema } from "./homeSection";
import { HomeContentConfigSchema } from "./homeContent";
import { StoredFileSchema } from "./storedFile";

export { PartnerSchema, RussianDictionarySchema };
export { BaseSchema, CompassCardSchema, CompassSchema };
export { RouterConfigSchema };
export { HomeSectionConfigSchema };
export { HomeContentConfigSchema };
export { StoredFileSchema };

export type RouterConfig = z.infer<typeof RouterConfigSchema>;
export type HomeSectionConfig = z.infer<typeof HomeSectionConfigSchema>;
export type HomeContentConfig = z.infer<typeof HomeContentConfigSchema>;
export type StoredFile = z.infer<typeof StoredFileSchema>;

export type BaseConfig = z.infer<typeof BaseSchema>;
export type CompassCard = z.infer<typeof CompassCardSchema>;
export type Compass = z.infer<typeof CompassSchema>;

export type Partner = z.infer<typeof PartnerSchema>;
export type RussianDictionary = z.infer<typeof RussianDictionarySchema>;
