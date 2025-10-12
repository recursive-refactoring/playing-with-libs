import { useEffect, useRef } from "react";

export function useWhyDidYouUpdate(componentName: any, props: any) {
  const prevProps = useRef(props);

  useEffect(() => {
    const changedProps: any = {};

    for (const key of Object.keys(props)) {
      if (props[key] !== prevProps.current[key]) {
        changedProps[key] = {
          previous: prevProps.current[key],
          current: props[key],
          type: typeof props[key],
        };
      }
    }

    if (Object.keys(changedProps).length > 0) {
      console.group(`🔍 [${componentName}] props changed`);
      for (const key in changedProps) {
        console.log(`%c${key}`, "color: #0aa;", changedProps[key]);
      }
      console.groupEnd();
    }

    prevProps.current = props;
  });
}
