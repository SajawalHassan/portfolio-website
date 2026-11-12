import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <h1>A message has been sent to you from {name}!</h1>
    <p>The email is from: {email}</p>
    <p>{message}</p>
  </div>
);
