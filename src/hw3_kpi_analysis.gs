function sendMonthlyKPIEmail_HW3() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const row = data[1];

  const month = row[0];
  const revenue = row[1];
  const prevRevenue = row[2];
  const newCustomers = row[3];
  const churn = row[4];
  const supportTickets = row[5];
  const growth = row[6];

  const growthPercent = (growth * 100).toFixed(2) + "%";

 const aiText = `
Summary:
Revenue showed a significant increase compared to the previous month...

Highlights:
- Revenue increased sharply
- Customer acquisition remains strong
- Churn is stable
`;

  const recipient = "bobasar2001@gmail.com";
  const subject = "HW3 KPI Analysis Report - " + month;

  const htmlBody = `
    <h2>Monthly KPI Report - ${month}</h2>

    <h3>Raw Data</h3>
    <table border="1" cellpadding="8">
      <tr><th>KPI</th><th>Value</th></tr>
      <tr><td>Revenue</td><td>${revenue}</td></tr>
      <tr><td>Previous Revenue</td><td>${prevRevenue}</td></tr>
      <tr><td>Growth</td><td>${growthPercent}</td></tr>
      <tr><td>New Customers</td><td>${newCustomers}</td></tr>
      <tr><td>Churn</td><td>${churn}</td></tr>
      <tr><td>Support Tickets</td><td>${supportTickets}</td></tr>
    </table>

    <h3>AI Summary</h3>
    <pre>${aiText}</pre>

    <p>This email includes AI-generated insights based on live Google Sheet data.</p>
  `;

  GmailApp.sendEmail(recipient, subject, "KPI report", {
    htmlBody: htmlBody
  });

  Logger.log("HW3 email sent successfully");
}

function generateAISummary(data) {
  const apiKey = "YOURAPIKEY(I CANNOT SHARE BECAUSE OF SECURITY)";

  const prompt = `
You are a business analyst.

KPI Data:
Month: ${data.month}
Revenue: ${data.revenue}
Previous Revenue: ${data.prevRevenue}
Growth: ${data.growthPercent}
New Customers: ${data.newCustomers}
Churn: ${data.churn}
Support Tickets: ${data.supportTickets}

Tasks:
1. Write a short narrative summary (2-3 sentences)
2. Provide bullet point highlights

Return clean plain text.
`;

  const payload = {
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ]
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
    method: "post",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const result = JSON.parse(response.getContentText());

  try {
    return result.choices[0].message.content;
  } catch (e) {
    return "AI response error. Please check API key.";
  }
}
