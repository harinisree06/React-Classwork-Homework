import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Box, Typography } from '@mui/material';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
        <h2 >Enter your name favourite fruit :</h2>
      <TextField
        label="Name"
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Autocomplete
        options={fruits}
        data-testid="autocomplete"
        renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        value={fruit}
        onChange={(event, newValue) => setFruit(newValue)}
        fullWidth
        margin="normal"
      />
      <Button 
        variant="contained" 
        type="submit" 
        data-testid="button"
         sx={{ mt: 2 }}
      >
        Submit
      </Button>
      {submitted && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Hello, {name}! Your favorite fruit is {fruit}.
        </Typography>
      )}
    </Box>
    </div>
  );
};

export default FruitSurvey;
