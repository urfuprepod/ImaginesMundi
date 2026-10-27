import type z from "zod";
import { BaseSchema } from "./base";
import { CompassCardSchema, CompassSchema } from "./compass";
import { PartnerSchema, PartnersListSchema } from "./partnersList";
import { RussianDictionarySchema } from "./russianDictionary";

export { PartnerSchema, PartnersListSchema, RussianDictionarySchema };
export { BaseSchema, CompassCardSchema, CompassSchema };

export type BaseConfig = z.infer<typeof BaseSchema>;
export type CompassCard = z.infer<typeof CompassCardSchema>;
export type Compass = z.infer<typeof CompassSchema>;

export type Partner = z.infer<typeof PartnerSchema>;
export type PartnersList = z.infer<typeof PartnersListSchema>;
export type RussianDictionary = z.infer<typeof RussianDictionarySchema>;
