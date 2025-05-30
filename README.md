# EcoPak Better UI

[Live Demo](https://eco-pack-better-ui.vercel.app/)

A modern, enhanced UI/UX version of the original EcoPak ecommerce website built with Next.js and Tailwind CSS. This project was created as a testing ground to improve the design, responsiveness, and overall user experience.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [API](#api)  
- [Contributing](#contributing)  
- [License](#license)

---

## About

EcoPak Better UI is a frontend project inspired by an existing ecommerce platform, focused on delivering a cleaner, more intuitive user interface and smoother interactions. The site includes product collections, bulk purchase options, email integrations, and responsive design for an optimal shopping experience.

---

## Features

- Responsive design with mobile-first approach  
- Product collections and detailed product pages  
- Bulk purchase page for wholesale customers  
- Integrated email sending API for newsletters and inquiries  
- Smooth animations and interactive UI components  
- Toast notifications for user feedback  
- SEO optimized with Next.js 13 features

---

## Tech Stack

- Next.js 13 (App Router)  
- React 18  
- Tailwind CSS  
- TypeScript  
- Nodemailer (Email API)  
- React Hot Toast (Notifications)  
- Swiper.js (Carousel/Slider)  
- React Icons  
- Biome (Formatter & Linter)

---

## Project Structure

app
 ├─ api/send-email/route.ts          # API route to handle email sending
 ├─ bulk-purchase/page.tsx           # Bulk purchase page
 ├─ collections/listing/page.tsx     # Product collections listing
 ├─ collections/page.tsx             # Collections overview
 ├─ product/page.tsx                 # Product detail page
components                           # Reusable UI components
Constants                            # Constant values for features and contact info
ui-components                        # Custom UI elements like Accordion, Slider, Toast
utils                                # Utility functions (e.g. email helpers)
styles                               # Global and component-specific styles

---

## Getting Started

### Prerequisites

- Node.js (>=18.x)  
- npm or yarn

### Installation

git clone git@github.com:Noor648/eco-pack-better-ui.git
cd ecopak
npm install

### Installation

Create a .env file in the root of the project and add your SMTP configuration for the email service:

SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL=your_email@gmail.com

### Running Locally

npm run dev

