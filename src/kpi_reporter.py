"""
SE445 HW1 - Monthly KPI Reporter Setup
Primary logic file for the assignment deliverable.
"""

from dataclasses import dataclass
from typing import Dict, Any


@dataclass
class KPIRequest:
    sheet_name: str = "Monthly_KPIs"
    run_mode: str = "monthly"
    cron: str = "0 9 1 * *"


def start_workflow() -> Dict[str, str]:
    """Represents the processing function that starts after the trigger fires."""
    req = KPIRequest()
    return {
        "status": "trigger_received",
        "sheet_name": req.sheet_name,
        "run_mode": req.run_mode,
        "cron": req.cron,
    }


def fetch_kpi_row() -> Dict[str, Any]:
    """
    Sample KPI payload that would normally be returned by Google Sheets API.
    HW1 only needs to prove the component flow and first function/data handoff.
    """
    return {
        "Month": "March",
        "Revenue": 125000,
        "New Customers": 340,
        "Churn": "4.2%",
        "Support Tickets": 85,
    }


def build_ai_prompt(sheet_row: Dict[str, Any]) -> str:
    """Formats the spreadsheet row for the AI completion step."""
    month = sheet_row.get("Month", "Unknown")
    revenue = sheet_row.get("Revenue", "N/A")
    new_customers = sheet_row.get("New Customers", "N/A")
    churn = sheet_row.get("Churn", "N/A")
    support_tickets = sheet_row.get("Support Tickets", "N/A")

    return f"""You are a business reporting assistant.
Summarize the following KPI data for management.
Month: {month}
Revenue: {revenue}
New Customers: {new_customers}
Churn: {churn}
Support Tickets: {support_tickets}
Write a short professional executive summary."""


def main() -> None:
    workflow_state = start_workflow()
    kpi_row = fetch_kpi_row()
    prompt = build_ai_prompt(kpi_row)

    print("Workflow state:", workflow_state)
    print("KPI row:", kpi_row)
    print("\nAI Prompt:\n")
    print(prompt)


if __name__ == "__main__":
    main()
