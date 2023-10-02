import { useEffect, useState } from "react";
import { Result } from "../../data/models/RicksResults";
import RickApiRepository from "../../data/repositories/RickApiRepository";
import { useRealm } from "../../data/services/localServices/realm";
import { up } from "@realm/react";

export default function useRickApi() {
  const [rickResults, setRickResults] = useState<Result[] | null>(null);
  const realm = useRealm();
  const [loaded, setLoaded] = useState(false);

  const insertManyItems = async (items: Result[]) => {
    try {
      realm.write(() => {
        items.forEach((item: Result) => {
          realm.create(
            "Character",
            {
              ...item,
              id: item.id,
            },
            Realm.UpdateMode.Modified
          );
        });
      });
    } catch (error) {
      console.error("Error inserting items:", error);
    }
  };

  const saveItems = async (data: Result[]) => {
    insertManyItems(data);
    setLoaded(true); 
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!loaded) {
        const response = await RickApiRepository.getDataRicks();
        saveItems(response!);
      }

      const charactersFromRealm = realm.objects<Result>("Character");
      setRickResults(charactersFromRealm);
    };

    fetchData();
  }, [realm, loaded]);

  return {
    rickResults,
    setRickResults
  };
}
