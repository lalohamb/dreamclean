export interface Location {
  city:       string;
  slug:       string;
  state:      string;
  stateCode:  string;
  region:     string;
  lat:        number;
  lng:        number;
  description: string;
}

export const LOCATIONS: Location[] = [
  {
    city: "Michigan City", slug: "michigan-city-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.7075, lng: -86.8950,
    description: "Our home base. We provide full cleaning and organization services throughout Michigan City and surrounding neighborhoods.",
  },
  {
    city: "La Porte", slug: "la-porte-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.6100, lng: -86.7228,
    description: "Serving La Porte residents and businesses with professional residential and commercial cleaning services.",
  },
  {
    city: "Valparaiso", slug: "valparaiso-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.4731, lng: -87.0611,
    description: "Professional cleaning services for Valparaiso homes, offices, and commercial properties.",
  },
  {
    city: "Portage", slug: "portage-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.5795, lng: -87.1764,
    description: "Residential and commercial cleaning services available throughout Portage, Indiana.",
  },
  {
    city: "Merrillville", slug: "merrillville-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.4731, lng: -87.3320,
    description: "Serving Merrillville with reliable, professional cleaning and home organization services.",
  },
  {
    city: "Hammond", slug: "hammond-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.5834, lng: -87.5001,
    description: "Professional cleaning services for Hammond homes and businesses.",
  },
  {
    city: "Chicago", slug: "chicago-illinois", state: "Illinois", stateCode: "IL",
    region: "Chicagoland", lat: 41.8781, lng: -87.6298,
    description: "Select Chicagoland cleaning services available. Travel fees may apply. Contact us to confirm availability in your area.",
  },
  {
    city: "Dyer", slug: "dyer-indiana", state: "Indiana", stateCode: "IN",
    region: "Northwest Indiana", lat: 41.4950, lng: -87.5220,
    description: "Serving Dyer residents and businesses with professional residential and commercial cleaning services.",
  },
  {
    city: "Calumet City", slug: "calumet-city-illinois", state: "Illinois", stateCode: "IL",
    region: "Chicagoland", lat: 41.6153, lng: -87.5295,
    description: "Professional cleaning services available in Calumet City. Travel fees may apply.",
  },
];
