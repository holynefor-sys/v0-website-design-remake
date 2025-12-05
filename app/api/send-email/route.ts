import { NextResponse } from "next/server"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"

export async function POST(request: Request) {
  try {
    const { name, phone, problem, info, type } = await request.json()

    console.log("=== EMAIL REQUEST START ===")
    console.log("Received data:", { name, phone, problem, info, type })
    console.log("BREVO_API_KEY exists:", !!BREVO_API_KEY)
    console.log("BREVO_API_KEY first 10 chars:", BREVO_API_KEY?.substring(0, 10))

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY is missing!")
      return NextResponse.json({ message: "API ключ не налаштований" }, { status: 500 })
    }

    let subject = ""
    let htmlContent = ""

    if (type === "application") {
      subject = 'Нова заявка на допомогу з сайту "Перемога"'
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Нова заявка на допомогу
          </h1>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ім'я:</strong> ${name}</p>
            <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Проблема:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
              ${problem}
            </div>
            ${
              info
                ? `
              <p><strong>Додаткова інформація:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
                ${info}
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
    } else if (type === "callback") {
      subject = 'Запит на зворотний дзвінок з сайту "Перемога"'
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Запит на зворотний дзвінок
          </h1>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Номер телефону:</strong> <a href="tel:${phone}" style="color: #3b82f6; font-size: 18px;">${phone}</a></p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Отримано з сайту: peremogacentre.com.ua
          </p>
        </div>
      `
    } else if (type === "contact") {
      subject = 'Нове повідомлення з контактної форми сайту "Перемога"'
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Нове повідомлення з контактної форми
          </h1>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ім'я:</strong> ${name}</p>
            <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Проблема:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
              ${problem}
            </div>
            ${
              info
                ? `
              <p><strong>Додаткова інформація:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
                ${info}
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
    } else {
      return NextResponse.json({ message: "Невідомий тип форми." }, { status: 400 })
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
    console.log("Attempting to send email with Brevo...")

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
    console.log("Brevo response headers:", Object.fromEntries(response.headers.entries()))

    const data = await response.json()
    console.log("Brevo response data:", data)

    if (!response.ok) {
      console.error("=== BREVO API ERROR ===")
      console.error("Status:", response.status)
      console.error("Response:", data)
      return NextResponse.json(
        {
          message: "Помилка при відправці email через Brevo: " + JSON.stringify(data),
        },
        { status: 500 },
      )
    }

    console.log("=== EMAIL SENT SUCCESSFULLY ===")
    console.log("Message ID:", data.messageId)
    return NextResponse.json(
      {
        message: "Email успішно надіслано через Brevo!",
        messageId: data.messageId,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("=== SERVER ERROR ===")
    console.error("Error details:", error)
    return NextResponse.json(
      {
        message: "Виникла помилка сервера: " + error.message,
      },
      { status: 500 },
    )
  }
}
