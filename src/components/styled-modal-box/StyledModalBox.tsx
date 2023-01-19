import { Box, styled } from "@mui/material";

export const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "450px",
  width: "100%",
  backgroundColor: "white",
  boxShadow: "24px",
  borderRadius: "10px",
  padding: "48px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "64px",
  "&:focus": {
    outline: "none",
  },
  wordBreak: "break-word",
});
