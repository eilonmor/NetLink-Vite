// import * as faker from "@faker-js/faker"; // faker library to generate random data
import { faker } from '@faker-js/faker';
// Defines user type influencer


interface SocialMedia{
  instegram: boolean;
  facebook: boolean;
  linkedin: boolean;
  pinterest: boolean;
  reddit: boolean;
  snapchat: boolean;
  tiktok: boolean;
  twiter: boolean;
  twitch: boolean;
  youtube: boolean;
  wechat: boolean;
  qq: boolean;
}

interface Food{
  meat: boolean;
  gril: boolean;
  vegan: boolean;
  cooking: boolean;
}

interface Fashion{
  blogFashion: boolean;
  model: boolean;
}

interface Sports{
  football: boolean;
  basketBall: boolean;
  gym: boolean;
  fitness: boolean;
}

interface Sector{
  food: Food;
  sports: Sports;
  fashion: Fashion; 
}

// create interface for User from type Influncer.
export interface UserInfluncer{
  name: string;
  State: string;
  Country: string;
  city: string;
  socialMedia: SocialMedia;
  age: number;
  sector: Sector;
  picture?: string;
}


// create a random Influncer User
export function generateRandomUser(): UserInfluncer {
  return {
    name: faker.name.fullName(),
    State: faker.address.state(),
    Country: faker.address.country(),
    city: faker.address.city(),
    socialMedia: {
      instegram: Math.random() > 0.5,
      facebook: Math.random() > 0.5,
      linkedin: Math.random() > 0.5,
      pinterest: Math.random() > 0.5,
      reddit: Math.random() > 0.5,
      snapchat: Math.random() > 0.5,
      tiktok: Math.random() > 0.5,
      twiter: Math.random() > 0.5,
      twitch: Math.random() > 0.5,
      youtube: Math.random() > 0.5,
      wechat: Math.random() > 0.5,
      qq: Math.random() > 0.5
    },
    age: Math.floor(Math.random() * (60 - 18) + 18),
    sector: {
      food: {
        meat: Math.random() > 0.5,
        gril: Math.random() > 0.5,
        vegan: Math.random() > 0.5,
        cooking: Math.random() > 0.5
      },
      sports: {
        football: Math.random() > 0.5,
        basketBall: Math.random() > 0.5,
        gym: Math.random() > 0.5,
        fitness: Math.random() > 0.5
      },
      fashion: {
        blogFashion: Math.random() > 0.5,
        model: Math.random() > 0.5
      }
    }
  }
}

//crate a random list of users

export const users1: UserInfluncer[] = []
for (let i = 0; i < 10; i++) {
  users1.push(generateRandomUser())
}