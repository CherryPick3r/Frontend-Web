import { Box, LinearProgress, Typography } from "@mui/material";

export function ProgressBarWithPercent({ description, percent }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {description !== null ? (
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      ) : null}
      <Box sx={{ width: "100%", mr: 1 }} className="cherry-linear-progress">
        <LinearProgress
          valueBuffer={100}
          value={percent}
          variant="determinate"
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          percent
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default ProgressBarWithPercent;
