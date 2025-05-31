import smtplib
from email.message import EmailMessage

def email_alert(to):
    msg = EmailMessage()
    msg.set_content("Congrats on one step towards your fitness goals! This is an automated message but I'll message you about our call!")
    msg['subject'] = "Coaching Message"
    msg['to'] = to

    user = "jacoboestreichercoachingauto@gmail.com"
    msg['from'] = user
    password = "kffm afpl uluo dkga"

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(user, password)
    server.send_message(msg)
    server.quit()

def email_owner(body):
    msg = EmailMessage()

    content_body = (
        f"Full Name: {body.get('fname')} {body.get('lname')}\n"
        f"Email: {body.get('email')}\n"
        f"Phone Number: {body.get('fname')}\n"
        f"Age: {body.get('age')}\n"
        f"Height: {body.get('height')}\n"
        f"Weight: {body.get('weight')}\n"
        f"Commitment: {body.get('commit')}\n"
        f"Goal: {body.get('goal')}\n"
        f"Why they are stuck: {body.get('stuck')}\n"
        f"When they want to start: {body.get('start')}\n"
    )

    msg.set_content(content_body)
    msg['subject'] = "New Client Information"
    msg['to'] = "bunjiro1213@gmail.com"

    user = "jacoboestreichercoachingauto@gmail.com"
    msg['from'] = user
    password = "kffm afpl uluo dkga"

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(user, password)
    server.send_message(msg)
    server.quit()



