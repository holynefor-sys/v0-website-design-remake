"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const phone = formData.get("phone")
  const problem = formData.get("problem")
  const info = formData.get("info")

  if (!name || !phone || !problem) {
    return { message: "Будь ласка, заповніть усі обов'язкові поля.", success: false }
  }

  console.log("New Contact Form Submission:")
  console.log({ name, phone, problem, info })

  try {
    // Викликаємо функцію відправки email напряму, без fetch
    const result = await sendEmail({
      name: name.toString(),
      phone: phone.toString(),
      problem: problem.toString(),
      info: info?.toString() || "",
      type: "contact",
    })

    if (result.success) {
      return { message: "✅ Форма відправлена! Незабаром з вами зв'яжемось.", success: true }
    } else {
      console.error("Error sending email:", result.error)
      return {
        message: result.error || "Виникла помилка при надсиланні повідомлення. Будь ласка, спробуйте ще раз.",
        success: false,
      }
    }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return { message: "Виникла помилка при надсиланні повідомлення. Будь ласка, спробуйте ще раз.", success: false }
  }
}

// Функція для відправки email через Brevo
async function sendEmail(data: {
  name?: string
  phone: string
  problem?: string
  info?: string
  type: string
}) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"

  console.log("=== CONTACT EMAIL FUNCTION START ===")
  console.log("Received data:", data)
  console.log("BREVO_API_KEY exists:", !!BREVO_API_KEY)

  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is missing!")
    return { success: false, error: "API ключ не налаштований" }
  }

  const subject = 'Нове повідомлення з контактної форми сайту "Перемога"'
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
        Нове повідомлення з контактної форми
      </h1>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Ім'я:</strong> ${data.name}</p>
        <p><strong>Телефон:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Проблема:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
          ${data.problem}
        </div>
        ${
          data.info
            ? `
          <p><strong>Додаткова інформація:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
            ${data.info}
          </div>
        `
            : ""
        }
      </div>
      <p style="color: #6b7280; font-size: 14px;">
        Отримано з сайту: peremogacentre.com.ua
      </p>
    </div>
  `

  const emailPayload = {
    sender: {
      name: "Центр Перемога",
      email: "noreply@peremogacentre.com.ua",
    },
    to: [
      {
        email: "srp.2.com@gmail.com",
        name: "Центр Перемога",
      },
    ],
    subject: subject,
    htmlContent: htmlContent,
    replyTo: {
      email: "srp.2.com@gmail.com",
      name: "Центр Перемога",
    },
  }

  console.log("Contact email payload:", JSON.stringify(emailPayload, null, 2))

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    })

    console.log("Brevo response status:", response.status)
    const responseData = await response.json()
    console.log("Brevo response data:", responseData)

    if (!response.ok) {
      console.error("=== BREVO API ERROR ===")
      console.error("Status:", response.status)
      console.error("Response:", responseData)
      return {
        success: false,
        error: "Помилка при відправці email через Brevo: " + JSON.stringify(responseData),
      }
    }

    console.log("=== CONTACT EMAIL SENT SUCCESSFULLY ===")
    console.log("Message ID:", responseData.messageId)
    return {
      success: true,
      messageId: responseData.messageId,
    }
  } catch (error) {
    console.error("=== CONTACT FETCH ERROR ===")
    console.error("Error details:", error)
    return {
      success: false,
      error: "Помилка мережі: " + error.message,
    }
  }
}
