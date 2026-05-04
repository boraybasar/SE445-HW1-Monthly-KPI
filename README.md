# SE445-HW1-Monthly-KPI
SE445 HW1 - Monthly KPI Reporter workflow and implementation

## HW2 – Corrected Live Data Pipeline
This corrected HW2 implementation uses Google Apps Script to read KPI values from a live Google Sheet and send them via Gmail.

### Workflow
Google Sheets → Apps Script → Gmail

### Evidence
- Google Sheet data source
- Apps Script implementation
- Execution log showing successful email delivery
- Received email with KPI values

All screenshots are available in the `/evidence` folder.

### Key Guarantees
- Live data pipeline 
- Real email delivery 
- No data loss 
- No formatting errors 

# SE445 HW3 – KPI Analysis with AI

## Overview

This project extends HW2 by integrating AI-based analysis into the KPI reporting pipeline.  
The system reads KPI data from a live Google Sheet, computes growth metrics, and generates a business-oriented summary and highlights.

The final output is delivered via email, including both raw data and interpreted insights.

---

## Features

- Reads live KPI data from Google Sheets  
- Computes growth/decline using spreadsheet formulas  
- Uses a structured AI prompt to generate:
  - Narrative summary  
  - Bullet point highlights  
- Sends a formatted email via Gmail  
- End-to-end automated reporting workflow  

---

## System Workflow


Google Sheets → Apps Script → AI Prompt → Email


---

## Data Structure

The system uses the following KPI fields:

- Month  
- Revenue  
- Previous Revenue  
- Growth  
- New Customers  
- Churn  
- Support Tickets  

Growth is calculated in the spreadsheet using:


=IFERROR((Revenue / Previous Revenue) - 1, 0)


---

## Implementation Details

The project is implemented using **Google Apps Script**.

Main steps:
1. Retrieve KPI data from Google Sheets  
2. Format structured data for AI prompt  
3. Generate summary and highlights  
4. Send email using Gmail service  

---

## AI Integration

A structured prompt is used to convert raw KPI data into meaningful insights.

The AI output includes:
- A short narrative summary  
- Key business highlights  

> Note: API key is not included in the repository for security reasons.

---

## Output

The email contains:
- Raw KPI data (table format)  
- Growth calculation  
- AI-generated summary  
- Bullet point highlights  

---

## Security Note

The API key used for AI integration has been removed from the shared code for security purposes.

---

## Author

Boray Başar  
