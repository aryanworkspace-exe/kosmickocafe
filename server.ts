/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // MongoDB Connection
  if (process.env.MONGO_URI) {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log('MongoDB Connected'))
      .catch((err) => console.error('MongoDB connection error:', err));
  } else {
    console.warn('MONGO_URI not found. MongoDB integration disabled.');
  }

  // Booking Model
  const bookingSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      guests: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
      specialRequest: { type: String },
    },
    { timestamps: true }
  );

  const Booking = mongoose.model('Booking', bookingSchema);

  // Nodemailer Setup
  const getTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return null;
    }
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  };

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Kosmicko Cafe Backend Running Successfully' });
  });

  app.post(
    '/api/book-table',
    [
      body('name').notEmpty().trim().escape(),
      body('phone').notEmpty().trim().escape(),
      body('guests').notEmpty().trim().escape(),
      body('date').notEmpty().trim().escape(),
      body('time').notEmpty().trim().escape(),
    ],
    async (req: express.Request, res: express.Response) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, phone, guests, date, time, request: specialRequest } = req.body;

        let booking = null;
        if (mongoose.connection.readyState === 1) {
          booking = await Booking.create({ name, phone, guests, date, time, specialRequest });
        }

        const transporter = getTransporter();
        const ownerEmail = process.env.OWNER_EMAIL || 'kosmickocafe@gmail.com';
        if (transporter) {
          // Email to Owner
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: ownerEmail,
            subject: 'New Table Booking - Kosmicko Cafe',
            html: `
              <div style="font-family: Arial; padding: 20px; background: #000; color: #fff;">
                <h2 style="color: #ea580c;">New Reservation Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Guests:</strong> ${guests}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Special Request:</strong> ${specialRequest || 'None'}</p>
              </div>
            `,
          });

          // Email to Customer (if you had their email, but we don't have an email field in the form yet)
          // The user's code sent to OWNER_EMAIL for both, which is likely for testing or placeholder.
        }

        res.status(201).json({
          success: true,
          message: 'Table booked successfully',
          booking
        });
      } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
      }
    }
  );

  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const transporter = getTransporter();
      const ownerEmail = process.env.OWNER_EMAIL || 'kosmickocafe@gmail.com';
      
      if (transporter) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: ownerEmail,
          subject: `New Contact Message from ${name}`,
          html: `
            <div style="font-family: Arial; padding: 20px; background: #000; color: #fff;">
              <h2 style="color: #ea580c;">New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
          `,
        });
      }

      res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Contact Error:', error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  });

  // Vite Middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
