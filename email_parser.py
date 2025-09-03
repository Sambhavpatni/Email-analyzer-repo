import re

def parse_email_header(header: str):
    received_chain = re.findall(r"Received: from (.*?) ", header)

    esp = "Unknown"
    if "gmail.com" in header:
        esp = "Gmail"
    elif "outlook.com" in header or "hotmail.com" in header:
        esp = "Outlook"
    elif "yahoo.com" in header:
        esp = "Yahoo"

    return {"received_chain": received_chain, "esp": esp}
