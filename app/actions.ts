"use server"

export async function submitApplication(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const phone = formData.get("phone")
  const problem = formData.get("problem")
  const info = formData.get("info")

  if (!name || !phone || !problem) {
    return { message: "Будь ласка, заповніть усі обов'язкові поля.", success: false }
  }

  console.log("New Application Received:")
  console.log({ name, phone, problem, info })

  try {
    // Викликаємо функцію відправки email напряму, без fetch
    const result = await sendEmail({
      name: name.toString(),
      phone: phone.toString(),
      problem: problem.toString(),
      info: info?.toString() || "",
      type: "application",
    })

    if (result.success) {
      return { message: "✅ Форма відправлена! Незабаром з вами зв'яжемось.", success: true }
    } else {
      console.error("Error sending email:", result.error)
      return {
        message: result.error || "Виникла помилка при надсиланні заявки. Будь ласка, спробуйте ще раз.",
        success: false,
      }
    }
  } catch (error) {
    console.error("Failed to send application email:", error)
    return { message: "Виникла помилка при надсиланні заявки. Будь ласка, спробуйте ще раз.", success: false }
  }
}

export async function submitCallbackRequest(prevState: any, formData: FormData) {
  const phone = formData.get("phone")

  if (!phone) {
    return { message: "Будь ласка, введіть ваш номер телефону.", success: false }
  }

  console.log("New Callback Request Received:")
  console.log({ phone })

  try {
    // Викликаємо функцію відправки email напряму, без fetch
    const result = await sendEmail({
      phone: phone.toString(),
      type: "callback",
    })

    if (result.success) {
      return {
        message: "✅ Форма відправлена! Незабаром з вами зв'яжемось.",
        success: true,
      }
    } else {
      console.error("Error sending email:", result.error)
      return {
        message: result.error || "Виникла помилка при надсиланні запиту. Будь ласка, спробуйте ще раз.",
        success: false,
      }
    }
  } catch (error) {
    console.error("Failed to send callback email:", error)
    return { message: "Виникла помилка при надсиланні запиту. Будь ласка, спробуйте ще раз.", success: false }
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

  console.log("=== EMAIL FUNCTION START ===")
  console.log("Received data:", data)
  console.log("BREVO_API_KEY exists:", !!BREVO_API_KEY)

  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is missing!")
    return { success: false, error: "API ключ не налаштований" }
  }

  let subject = ""
  let htmlContent = ""

  if (data.type === "application") {
    subject = 'Нова заявка на допомогу з сайту "Перемога"'
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Нова заявка на допомогу
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
  } else if (data.type === "callback") {
    subject = 'Запит на зворотний дзвінок з сайту "Перемога"'
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Запит на зворотний дзвінок
        </h1>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Номер телефону:</strong> <a href="tel:${data.phone}" style="color: #3b82f6; font-size: 18px;">${data.phone}</a></p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          Отримано з сайту: peremogacentre.com.ua
        </p>
      </div>
    `
  }

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

  console.log("Email payload:", JSON.stringify(emailPayload, null, 2))

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

    console.log("=== EMAIL SENT SUCCESSFULLY ===")
    console.log("Message ID:", responseData.messageId)
    return {
      success: true,
      messageId: responseData.messageId,
    }
  } catch (error) {
    console.error("=== FETCH ERROR ===")
    console.error("Error details:", error)
    return {
      success: false,
      error: "Помилка мережі: " + error.message,
    }
  }
}
