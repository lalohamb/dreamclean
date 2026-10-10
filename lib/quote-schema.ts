import { z } from "zod";

export const quoteSchema = z.object({
  fullName:        z.string().min(2,  "Please enter your full name."),
  email:           z.string().email("Please enter a valid email address."),
  phone:           z.string().min(7,  "Please enter a valid phone number."),
  service:         z.string().min(1,  "Please select a service."),
  propertyType:    z.union([z.literal("residential"), z.literal("commercial")], { error: "Please select residential or commercial." }),
  city:            z.string().min(2,  "Please enter your city or location."),
  propertySize:    z.string().optional(),
  bedrooms:        z.string().optional(),
  bathrooms:       z.string().optional(),
  preferredDate:   z.string().optional(),
  frequency:       z.union([z.literal("one-time"), z.literal("recurring"), z.literal("unsure")]).optional(),
  priorities:      z.string().optional(),
  comments:        z.string().optional(),
  consent:         z.literal(true, { message: "Please acknowledge the consent statement." }),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
