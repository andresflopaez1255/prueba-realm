import Realm from "realm";

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
   
    properties: {
      id: "int",
      name: "string",
      status: "string",
      species: "string",
      type: "string",
      gender: "string",
      origin: { type: "object", objectType: "Origin" },
      location: { type: "object", objectType:Origin },
      image: "string",
      episode: "string[]",
      url: "string",
      created: "date",
    },
  };
}

export default Character;
