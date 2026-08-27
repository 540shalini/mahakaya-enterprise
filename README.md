# Mahakaya Enterprise

Production-ready full-stack financial services website for Mahakaya Enterprise, built with React, TypeScript, Vite, Tailwind CSS, Express, MySQL, JWT authentication, Razorpay-ready payments, email notifications and responsive dashboards.

## Project Structure

```text
mahakaya-enterprise/
├── frontend/      # React + TypeScript + Vite application
├── backend/       # Express API, Sequelize models and controllers
├── database/      # MySQL schema and seed data
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Features

- Premium corporate finance website with dark mode, smooth animations and responsive navigation.
- Home, About, Services, EMI Calculator, Loan Application, Customer Dashboard and Admin Dashboard pages.
- Loan application with file uploads and field validation.
- JWT authentication, bcrypt password hashing, Helmet, CORS, rate limiting, XSS sanitization and Sequelize SQL-injection protection.
- Razorpay order creation and signature verification endpoints.
- Email notification hooks with Nodemailer and SMS/WhatsApp integration points.
- Chart.js admin analytics, loading skeletons and code-split React routes.
- SEO assets: robots.txt, sitemap.xml, dynamic meta title/description and deployment-ready public assets.

## Local Setup

1. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
2. Start MySQL and API with Docker:
   ```bash
   docker compose up --build
   ```
3. Or install locally:
   ```bash
   npm install --prefix backend
   npm install --prefix frontend
   npm run dev --prefix backend
   npm run dev --prefix frontend
   ```

## Validation

```bash
npm run build --prefix frontend
npm run test --prefix backend
```

## Default Seed Login

- Admin email: `admin@mahakayaenterprise.in`
- Sample password hash in seed data corresponds to a development password and must be changed before production.

## Production Notes

- Replace every secret in `.env` with strong production values.
- Configure SMTP and Razorpay live credentials.
- Serve over HTTPS behind a reverse proxy or managed platform.
- Store uploaded documents in private object storage for production rather than local disk.
