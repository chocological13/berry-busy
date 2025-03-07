import { useEffect, useState } from "react";
import { Floaties } from "@/constants/types";

export const useFloaties = ({ amount }: { amount: number }) => {
  const [floaties, setFloaties] = useState<Floaties[]>([]);

  useEffect(() => {
    const berries: Floaties[] = Array.from({ length: amount }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 30) + 10,
      delay: Math.random() * 2,
      duration: 2,
      left: Math.random() * 90 + 5, // 5 - 95% of screen width
      top: Math.random() * 80,
    }));
    setFloaties(berries);
  }, [amount]);

  return {
    floaties,
  };
};
