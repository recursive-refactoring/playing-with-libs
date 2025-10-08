import {
  CommonAlertDialogDeleteImage,
  CommonAlertDialogInformationImage,
  CommonAlertDialogSuccessImage,
  CommonAlertDialogWarningImage,
} from "@/assets/images/common/alert-dialog";
import { ALERT_DIALOGS_TYPES } from "@/constants/alert-dialog";

export const ALERT_DIALOGS_IMAGES: any = {
  [ALERT_DIALOGS_TYPES?.DELETE]: CommonAlertDialogDeleteImage,
  [ALERT_DIALOGS_TYPES?.SUCCESS]: CommonAlertDialogSuccessImage,
  [ALERT_DIALOGS_TYPES?.WARNING]: CommonAlertDialogWarningImage,
  [ALERT_DIALOGS_TYPES?.INFORMATION]: CommonAlertDialogInformationImage,
};
