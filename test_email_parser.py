from app.email_parser import parse_email_header

def test_gmail_header():
    header = "Received: from smtp.gmail.com by example.com"
    result = parse_email_header(header)
    assert result["esp"] == "Gmail"
    assert "smtp.gmail.com" in result["received_chain"][0]

def test_unknown_header():
    header = "Received: from mail.unknownserver.com"
    result = parse_email_header(header)
    assert result["esp"] == "Unknown"
