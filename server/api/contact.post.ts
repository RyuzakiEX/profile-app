type ResendResponse = {
  id: string;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate the incoming data
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    // Validate environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_EMAIL_FROM;
    const toEmail = process.env.RESEND_EMAIL_TO;

    if (!apiKey || !fromEmail || !toEmail) {
      throw createError({
        statusCode: 500,
        statusMessage: "Email configuration missing",
      });
    }

    // Send email using Resend REST API directly
    const response = await $fetch<ResendResponse>(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: {
          from: fromEmail,
          to: toEmail,
          reply_to: body.email,
          subject: `Portfolio Contact: ${body.subject}`,
          html: contactFormTemplate({
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          }),
        },
      }
    );

    return {
      success: true,
      messageId: response.id,
    };
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Handle fetch errors
    if (error.data) {
      throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: error.data.message || "Failed to send email",
      });
    }

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Failed to send email",
    });
  }
});
