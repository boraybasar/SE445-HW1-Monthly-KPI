function sendMonthlyKPIEmail() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const headers = data[0];
  const row = data[1];

  const month = row[0];
  const revenue = row[1];
  const newCustomers = row[2];
  const churn = row[3];
  const supportTickets = row[4];

  const recipient = "bobasar2001@gmail.com";
  const subject = "HW2 Monthly KPI Raw Data Report - " + month;

  const htmlBody = `
    <h2>Monthly KPI Raw Data Report - ${month}</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <th>KPI</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Revenue</td>
        <td>${revenue}</td>
      </tr>
      <tr>
        <td>New Customers</td>
        <td>${newCustomers}</td>
      </tr>
      <tr>
        <td>Churn</td>
        <td>${churn}</td>
      </tr>
      <tr>
        <td>Support Tickets</td>
        <td>${supportTickets}</td>
      </tr>
    </table>
    <p>This email was generated from live Google Sheet data.</p>
  `;

  GmailApp.sendEmail(recipient, subject, "Monthly KPI raw data report", {
    htmlBody: htmlBody
  });

  Logger.log("Email sent successfully.");
  Logger.log("Month: " + month);
  Logger.log("Revenue: " + revenue);
  Logger.log("New Customers: " + newCustomers);
  Logger.log("Churn: " + churn);
  Logger.log("Support Tickets: " + supportTickets);
}
