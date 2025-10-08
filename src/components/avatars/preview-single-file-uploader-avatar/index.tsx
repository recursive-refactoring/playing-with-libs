import { Avatar, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { getPreviewImageByType } from "@/utils/avatars";
import { truncateText } from "@/utils/string-transformation";
import { DynamicAvatar } from "../dynamic-avatar";
import { Close } from "@mui/icons-material";

const PreviewSingleFileUploaderAvatar = (props: any) => {
  const { attachedFile, setValue, name } = props;

  const deleteFile = useCallback(() => {
    setValue?.(name, null);
  }, [setValue, name]);

  return (
    <>
      {attachedFile instanceof File ? (
        <>
          <Box
            sx={{
              width: 60,
              height: 60,
              position: "relative",
              borderRadius: 2,
              margin: "auto",
              p: 0.5,
              border: "1px solid",
              borderColor: "custom.off_white_three",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -10,
                right: -10,
              }}
            >
              <Close
                sx={{
                  fontSize: "large",
                  border: "2px solid",
                  borderRadius: "50%",
                  fontWeight: "fontWeightMedium",
                }}
                color="error"
                onClick={deleteFile}
              />
            </Box>
            <Avatar
              src={getPreviewImageByType?.(attachedFile)}
              sx={{
                width: "100%",
                height: "100%",
                margin: "auto",
              }}
              variant="rounded"
            />
          </Box>
          <Typography
            variant="body2"
            color="slateBlue.main"
            whiteSpace={"nowrap"}
          >
            {truncateText(attachedFile?.name)}
          </Typography>
        </>
      ) : (
        <DynamicAvatar width={60} height={60} avatarSrc={attachedFile} />
      )}
    </>
  );
};

export default PreviewSingleFileUploaderAvatar;
