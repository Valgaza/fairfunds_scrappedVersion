// src/app/your-space/page.js
'use client';

import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import axios from 'axios';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function YourSpacePage() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  const categories = ['Food', 'Travel', 'Salary', 'Rent', 'Entertainment'];

  // Fetch existing data on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const expenseResponse = await axios.get('http://127.0.0.1:8000/api/v1/expenses');
        const incomeResponse = await axios.get('http://127.0.0.1:8000/api/v1/income');
        setExpenses(expenseResponse.data);
        setIncome(incomeResponse.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  // Form validation
  const validateForm = () => {
    if (!amount || !date || !type || !description) {
      alert('Please fill out all required fields.');
      return false;
    }
    return true;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newEntry = {
      amount,
      date,
      category,
      type,
      description,
    };

    try {
      const endpoint = type === 'Expense' ? '/api/v1/expenses' : '/api/v1/income';
      await axios.post(`http://127.0.0.1:8000${endpoint}`, newEntry);

      if (type === 'Expense') {
        setExpenses([...expenses, newEntry]);
      } else {
        setIncome([...income, newEntry]);
      }
    } catch (error) {
      console.error('Failed to submit data:', error);
    }

    setAmount('');
    setDate('');
    setCategory('');
    setType('');
    setDescription('');
  };

  return (
    <ProtectedRoute>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Space
        </Typography>

        {/* Form to Add Expense/Income */}
        <Box component="form" sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Add Expense / Income</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              fullWidth
            >
              <MenuItem value="Expense">Expense</MenuItem>
              <MenuItem value="Income">Income</MenuItem>
            </TextField>
          </Box>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={2}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>

        {/* Tables for Expenses and Income */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Expenses Table */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h6" gutterBottom>
              Expenses
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Item</TableCell>
                    <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Type</TableCell>
                    <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Date</TableCell>
                    <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Amount</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.map((expense, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{expense.category}</TableCell>
                      <TableCell align="center">{expense.type}</TableCell>
                      <TableCell align="center">{expense.date}</TableCell>
                      <TableCell align="center">{expense.amount}</TableCell>
                      <TableCell align="center">{expense.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Income Table */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Income
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Amount</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {income.map((inc, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{inc.amount}</TableCell>
                      <TableCell align="center">{inc.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </ProtectedRoute>
  );
}
