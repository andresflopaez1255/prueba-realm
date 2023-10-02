import { useCallback, useEffect, useState } from "react";
import DateTimeRepository from "../../data/repositories/DateTimeRepository";
import { Properties } from "../../data/models/DateModel";

export default function useGetDateTime() {
  const [dateTime, setDateTime] = useState<Properties | null>(null);

  const fetchDate = useCallback(() => {
    const getDateTime = async () => {
      const response = await DateTimeRepository.getDatetime();
      setDateTime(response!);
    };
    getDateTime();
  }, [dateTime == null]);

  useEffect(() => {
    fetchDate()
    const intervalId = setInterval(fetchDate, 60000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [fetchDate]);

  return {
    dateTime,
  };
}
