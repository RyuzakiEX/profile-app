export function contactFormTemplate(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f7; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                    📩 New Contact Form Submission
                  </h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Info Card -->
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px;">
                    <tr>
                      <td style="padding: 18px 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #667eea;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="padding-bottom: 12px;">
                              <span style="display: inline-block; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">From</span>
                              <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: 500;">${
                                data.name
                              }</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 12px;">
                              <span style="display: inline-block; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</span>
                              <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: 500;">${
                                data.email
                              }</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span style="display: inline-block; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Subject</span>
                              <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: 500;">${
                                data.subject
                              }</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message Section -->
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding-bottom: 12px;">
                        <span style="display: inline-block; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #374151; white-space: pre-line;">${data.message.replace(
                          /\n/g,
                          "<br>"
                        )}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 25px 30px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; font-size: 13px; color: #6b7280; text-align: center; line-height: 1.5;">
                    This message was sent from your portfolio contact form<br>
                    <span style="color: #9ca3af;">${timestamp}</span>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
