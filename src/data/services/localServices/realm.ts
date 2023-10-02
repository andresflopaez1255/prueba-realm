import Realm from "realm";
import { createRealmContext } from "@realm/react";


class Origin extends Realm.Object {
  static schema = {
    name: "Origin",
    properties: {
      name: "string",
      url: "string",
    },
  };
}

class Location extends Realm.Object {
  static schema = {
    name: "Location",
    properties: {
      name: "string",
      url: "string",
    },
  };
}

class Character extends Realm.Object {
  static schema = {
    name: "Character",
    primaryKey: 'id',
    properties: {
      id: "int",
      name: "string",
      status: "string",
      species: "string",
      type: "string",
      gender: "string",
      origin: "Origin?",
      location: "Location?",
      image: "string",
      episode: "string[]",
      url: "string",
      created: "date",
      isFavorite:{type:"bool", default:false}
    },
  };
}


class FavoriteCharacter extends Realm.Object {
  static schema = {
    name: "FavoriteCharacter",
    primaryKey: 'id',
    properties: {
      id: "int",
      name: "string",
      status: "string",
      species: "string",
      type: "string",
      gender: "string",
      origin: "Origin?",
      location: "Location?",
      image: "string",
      episode: "string[]",
      url: "string",
      created: "date",
      isFavorite:"bool"
    },
  };
}
// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Character,Origin,Location,FavoriteCharacter],
  deleteRealmIfMigrationNeeded: true,

};

// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);

// Expose a realm
export { RealmProvider, useRealm, useObject, useQuery };
