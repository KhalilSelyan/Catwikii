import { atomWithStorage } from "jotai/utils";

export const breedListAtom = atomWithStorage<Breed[]>("breeds", []);
export const catImagesAtom = atomWithStorage<catImage[]>("CatImages", []);
export const catSpecificInfoAtom = atomWithStorage<Breed>("catSpecificInfo", {
  adaptability: 0,
  affection_level: 0,
  alt_names: "",
  cfa_url: "",
  country_code: "",
  country_codes: "",
  description: "",
  dog_friendly: 0,
  child_friendly: 0,
  energy_level: 0,
  experimental: 0,
  grooming: 0,
  hairless: 0,
  health_issues: 0,
  hypoallergenic: 0,
  id: "",
  indoor: 0,
  intelligence: 0,
  lap: 0,
  life_span: "",
  name: "",
  natural: 0,
  origin: "",
  rare: 0,
  reference_image_id: "",
  rex: 0,
  shedding_level: 0,
  short_legs: 0,
  social_needs: 0,
  stranger_friendly: 0,
  suppressed_tail: 0,
  temperament: "",
  vcahospitals_url: "",
  vetstreet_url: "",
  vocalisation: 0,
  weight: { imperial: "", metric: "" },
  wikipedia_url: "",
});

export type catImage = {
  breeds: Breed[];
  height: number;
  id: string;
  url: string;
  width: number;
};

export type Breed = {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  child_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: { imperial: string; metric: string };
  wikipedia_url: string;
};
