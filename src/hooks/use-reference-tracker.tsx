import { useEffect, useRef } from "react";

export function useReferenceTracker(label: any, entries: any) {
  const prev = useRef(entries.map((e: any) => (Array.isArray(e) ? e[1] : e)));

  useEffect(() => {
    const changed: any = [];
    entries.forEach((entry: any, i: any) => {
      const [name, value] = Array.isArray(entry) ? entry : [`#${i}`, entry];
      if (value !== prev.current[i]) {
        changed.push({
          name,
          type: typeof value,
          previous: prev.current[i],
          current: value,
        });
      }
    });

    if (changed.length > 0) {
      console.group(`🔍 [${label}] Reference changes`);
      changed.forEach((change: any) => {
        console.log(`%c${change.name} (${change.type})`, "color: #0aa;", {
          previous: change.previous,
          current: change.current,
        });
      });
      console.groupEnd();
    }

    prev.current = entries.map((e: any) => (Array.isArray(e) ? e[1] : e));
  });
}
