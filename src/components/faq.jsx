// FAQ.jsx
import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function FAQ({ }) {
  const faqItems = [
    { question: "What is this application?", answer: "This is a demo app with a left-side navigation bar and various sections." },
    { question: "How do I navigate?", answer: "Use the navigation bar on the left to access different sections." },
    { question: "Who can use this app?", answer: "Anyone who wants to learn or explore the app." },
    { question: "How do I contact support?", answer: "You can reach support through the 'Contact' section, which will be added soon." }
  ];

  return (
    <div style={{ padding: '16px', marginLeft: '25%' }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <List>
        {faqItems.map((item, index) => (
          <ListItem key={index} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h6">{item.question}</Typography>
            <ListItemText primary={item.answer} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default FAQ;
