import { Button, FormControl, TextField, Typography } from "@mui/material";
import styles from "./simpleForm.module.scss";
const SimpleForm = (): JSX.Element => {
  return (
    <div className={styles.formPlace}>
      <Typography variant="h4">A Very Professional Form</Typography>
      <FormControl className={styles.formFields}>
        <TextField label="Name" />
        <TextField label="Email" />
        <Button variant="contained" color="primary">
          submit
        </Button>
      </FormControl>
    </div>
  );
};

export default SimpleForm;
