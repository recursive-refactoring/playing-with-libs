import { useState, useEffect, useCallback } from "react";
import { ConditionalAlertPropsI } from "../feedbacks.interface";
import { ALERTS_TIMER } from "@/constants/snackbar";

export const useConditionalAlert = (props: ConditionalAlertPropsI) => {
  const { condition, message } = props;
  const [alert, setAlert] = useState<{ message: string; open: boolean }>({
    message: "",
    open: false,
  });

  const showAlert = useCallback(() => {
    setAlert({ message, open: true });

    const timer = setTimeout(() => {
      setAlert({ message: "", open: false });
    }, ALERTS_TIMER?.CONDITIONAL_ALERT);

    return () => clearTimeout(timer);
  }, [message]);

  useEffect(() => {
    if (condition) {
      showAlert();
    }
  }, [condition, message, showAlert]);

  return { alert };
};
