"use client";

import React, { JSX, ReactNode } from "react";
import { useDropzone } from "react-dropzone";
import { styled, Theme, useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Stack,
  Button,
  TypographyOwnProps,
} from "@mui/material";
import {
  EditIcon as AddSquareIcon,
  EditIcon as DocumentUploadIcon,
  EditIcon as UploadFolderIcon,
} from "@/assets";

const DropZoneStyle = styled("div")(({ theme }: any) => ({
  outline: "none",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: theme.palette.background.neutral,
  border: `1px solid ${theme.palette.primary.lighter}`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
}));

interface UploadMultipleFileProps {
  files: File[];
  error?: boolean;
  dragText?: string;
  onChange?: (files: File[]) => void;
  showIcon?: ReactNode;
  sx?: object;
  showUploadButton?: boolean;
  dragTextVariant: TypographyOwnProps["variant"];
  dragTextColor?: string;
  buttonVariant?: boolean;
  upLoadFileIcon?: ReactNode;
  maxFileSize?: number;
}

export default function UploadMultipleFile({
  error = false,
  files = [],
  sx,
  onChange = (data: File[]) => data,
  dragText,
  dragTextVariant,
  dragTextColor,
  showUploadButton,
  showIcon = true,
  buttonVariant = false,
  upLoadFileIcon = <UploadFolderIcon />,
  maxFileSize,
  ...other
}: UploadMultipleFileProps): JSX.Element {
  const theme: Theme = useTheme();

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: true,
      onDropAccepted: (acceptedFiles: any) => {
        onChange([...files, ...acceptedFiles]);
      },
      ...other,
    });

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "error.lighter",
          }),
        }}
      >
        <input {...getInputProps()} />

        <Stack alignItems="center" justifyContent="center">
          {showIcon && upLoadFileIcon}

          <Box sx={{ display: "contents" }}>
            <Typography
              gutterBottom
              variant={dragTextVariant}
              color={dragTextColor}
            >
              {dragText}
            </Typography>

            {showUploadButton && (
              <Button
                variant="contained"
                color="primary"
                endIcon={
                  <DocumentUploadIcon fill={theme.palette.common.white} />
                }
                sx={{
                  backgroundColor: "primary.main",
                  textTransform: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                Browse Files
              </Button>
            )}

            {buttonVariant && (
              <Button
                variant="text"
                color="primary"
                startIcon={<AddSquareIcon />}
                sx={{
                  textTransform: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                browse
              </Button>
            )}
          </Box>
        </Stack>
      </DropZoneStyle>

      {files.length > 0 && (
        <Box mt={2}>
          {files.map((file, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {file.name}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}
