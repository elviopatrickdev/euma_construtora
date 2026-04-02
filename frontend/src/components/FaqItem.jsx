import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqItem({ panel, expanded, handleChange, question, answer }) {
  return (
    <Accordion
      expanded={expanded === panel}
      onChange={handleChange(panel)}
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid #ccc",
        "&:before": { display: "none" }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontSize: "18px", color: "var(--color-dark)" }}>
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography sx={{ fontSize: "14px", color: "var(--color-gray)" }}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqItem;