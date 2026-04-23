"""
SE445 HW2 - Raw Data Export
Reads KPI numbers from a single sheet and prepares a raw email report.
"""

from typing import Dict, Any


def fetch_kpi_row() -> Dict[str, Any]:
    """
    Sample KPI data from a single sheet.
    In a real version, this would come from Google Sheets API.
    """
    return {
        "Month": "March",
        "Revenue": 125000,
        "New Customers": 340,
        "Churn": "4.2%",
        "Support Tickets": 85,
    }


def format_email_subject(sheet_row: Dict[str, Any]) -> str:
    month = sheet_row.get("Month", "Unknown Month")
    return f"Monthly KPI Raw Report - {month}"


def format_email_body(sheet_row: Dict[str, Any]) -> str:
    month = sheet_row.get("Month", "Unknown")
    revenue = sheet_row.get("Revenue", "N/A")
    new_customers = sheet_row.get("New Customers", "N/A")
    churn = sheet_row.get("Churn", "N/A")
    support_tickets = sheet_row.get("Support Tickets", "N/A")

    return f"""Hello,

Please find below the raw KPI numbers for {month}:

- Revenue: {revenue}
- New Customers: {new_customers}
- Churn: {churn}
- Support Tickets: {support_tickets}

Best regards,
KPI Reporting System
"""


def send_email(to_email: str, subject: str, body: str) -> None:
    """
    Simulated email sending for HW2.
    """
    print("=== EMAIL SENT ===")
    print(f"To: {to_email}")
    print(f"Subject: {subject}")
    print()
    print(body)


def main() -> None:
    recipient_email = "manager@example.com"
    kpi_row = fetch_kpi_row()

    subject = format_email_subject(kpi_row)
    body = format_email_body(kpi_row)

    print("KPI row:", kpi_row)
    print()

    send_email(
        to_email=recipient_email,
        subject=subject,
        body=body,
    )


if __name__ == "__main__":
    main()
