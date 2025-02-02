Frontend UI/UX Showcase for Chatbot Integration Application

This repository demonstrates the frontend UI/UX for an application with a multi-step workflow designed to guide users from registration to chatbot integration and testing.

Overview
The application is structured into three main sections:

User Registration
Organization Setup
Chatbot Integration & Testing
Each section is designed to simulate a realistic user flow, with dummy data used where backend functionality is not implemented.

Workflow Details
1. User Registration
Input Fields:
Name
Email
Password
Alternative Registration:
Option to “Continue with Google”
Email Verification:
Users are prompted to enter a verification code to confirm their email address (Note: The actual authentication backend is not implemented as this project is focused on the frontend).
2. Organization Setup
Form Fields:
Company Name
Company Website URL
Company Description
Meta-Data Auto-Fetch:
A "Fetch Description" button simulates auto-fetching the meta-description from the provided website URL.
Chatbot Training Simulation:
The UI displays:
A list of webpages detected from the website.
Status indicators for each page (e.g., scraped, pending).
Details of data chunks extracted from a selected webpage.
Note: Dummy data is used to represent the background scraping and chatbot training process.
Navigation:
Users may choose to wait for the chatbot training to complete or proceed to the next step.
3. Chatbot Integration & Testing
This section provides three primary actions:

Test Chatbot:
Opens a demo version of the client's website with a chatbot interface located at the bottom right.
Includes a topbar notification: “Chatbot not working as intended? Share feedback.”
Integrate on Your Website:
Provides two options:
Step-by-step instructions with a dummy code snippet to copy into the <head> section of the client's website.
An option to email the integration instructions to the client's developer.
Test Integration:
Navigates to a confirmation screen that features:
A confetti animation or other success indicator.
Buttons for “Explore Admin Panel” and “Start talking to your chatbot.”
Social media sharing options.
Also includes an alternate UI for when integration is not detected.
User Navigation Guide
Registration Page:

Enter your email, name, and password.
Proceed to the verification code screen and enter any value (authentication is simulated).
Alternatively, click the “Continue with Google” button.
Setup Organization:

Fill out the form with organization details (e.g., use “Facebook” for the company name and www.facebook.com for the website URL).
Click the Fetch Description button to display a demo meta description.
Observe the loading progress bar, detected pages, and scraped data chunks (all populated with dummy data).
Click Continue to Chatbot Integration.
Chatbot Integration:

Test Chatbot: Opens a demo website with an interactive chatbot at the bottom right.
Integrate on Website: Opens a popup with:
A script tag ready to be copied.
An option to send integration instructions via email.
Test Integration: Initiates a success animation (confetti) and updates the status from “Integration Not Detected” to “Integration Successful.”
This repository is intended as a frontend demonstration. All backend processes (e.g., email verification, website scraping, chatbot training) are simulated with placeholder data to focus on the user interface and experience.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
