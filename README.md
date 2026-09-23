# Vipul Ajay Sontakke - Cloud Engineer Portfolio

A modern, high-performance portfolio website built with **HTML5, CSS3, JavaScript, Framer Motion, and Lenis Smooth Scrolling**. Tailored specifically for **AWS Cloud Engineers, CloudOps Administrators, and Infrastructure Specialists**.

---

## 🌟 Features

- **Terminal Cloud Bootloader**: A simulated cloud CLI boot sequence checking 30+ AWS accounts, compiling Terraform plans, and calculating cost optimization before revealing the site.
- **Buttery Smooth Scrolling**: Powered by **Lenis** inertia scrolling with intercepted anchor links for seamless section-to-section navigation.
- **Framer Motion Animations**: Powered by the official Motion engine (`motion` for vanilla JS) with spring transitions, scroll-triggered reveals, and timeline node scale effects.
- **Scrollytelling Timeline ("My Cloud Journey")**: Tracing milestones from Electrical Engineering (2015-19) to TCS Cloud Engineer (2021-22), FinOps ~60% Cost Reduction & Masters in Business Analytics (2022-24), Enterprise Migrations & IaC (2024-25), and Next-Gen AI CloudOps (2025+).
- **Interactive Skills Matrix**: Animated visual skill progress bars for AWS Infrastructure, Security & Compliance, DevOps/IaC/Linux, and FinOps/Analytics.
- **Architectural Case Studies**:
  1. *Linux Secrets Manager* (Bash CLI encrypted authentication vault)
  2. *AWS Enterprise Cost Optimization Suite* (Auto-scheduler saving ~60%)
  3. *Serverless Cloud Health Auditor* (Lambda + SES + IAM daily reporting)
  4. *Power BI Sales Analytics Dashboard* (Multi-source ETL & KPI forecasting)
- **Verified Certifications Showcase**:
  - AWS Certified Solutions Architect – Associate
  - AWS Certified CloudOps Engineer – Associate
  - AWS Certified AI Practitioner
  - Claude Certified Associate – Foundations (CCAO-F)
  - IIT Kharagpur AI4ICPS Certificate Programme
  - TCS Corporate Awards (Xcelerate Rank 3/40 & On-the-Spot Recognition)
- **Interactive Contact Form & Direct Dispatch**: Name, email, subject, message with mailto fallback and direct contact info.
- **Ambient Glow & Cursor Flashlight**: Subtle dynamic cursor-following spotlight on desktop devices.

---

## 🚀 How to Run

Because this project is built in **pure HTML, CSS, and vanilla JavaScript**, there is **zero build setup or npm install needed**:

1. **Option 1 (Direct Double-Click)**:
   Simply double-click `index.html` in your file explorer to open it in any web browser (Chrome, Edge, Firefox, Safari).

2. **Option 2 (Live Server in VS Code)**:
   Right-click `index.html` and select **"Open with Live Server"**.

3. **Option 3 (Python or Node Static Server)**:
   ```bash
   # In terminal inside this directory:
   python -m http.server 3000
   # or
   npx serve .
   ```
   Then open `http://localhost:3000` in your browser.

---

## ☁️ Deployment Options

- **Netlify**: Drag and drop the `vipul-portfolio` folder directly into Netlify Drop ([app.netlify.com/drop](https://app.netlify.com/drop)).
- **Vercel**: Run `npx vercel` or connect your GitHub repository.
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in Settings -> Pages.
- **AWS S3 + CloudFront**: Upload `index.html`, `css/`, and `js/` to an S3 bucket configured for static website hosting and point CloudFront with Route 53!

---

## 📁 File Structure

```
vipul-portfolio/
├── index.html           # Main semantic HTML structure
├── css/
│   └── style.css        # Cloud dark theme, glassmorphism, responsive grid, animations
├── js/
│   ├── main.js          # Terminal bootloader, typing effect, mobile menu, form
│   └── scrolly.js       # Lenis smooth scrolling, Framer Motion, cursor torch
└── README.md            # Documentation and deployment guide
```
