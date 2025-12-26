import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('Error parsing request body:', parseError)
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const { name, email, message, to } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Use Resend API to send email
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    // Resend requires a verified domain. Use onboarding@resend.dev for testing
    // or set FROM_EMAIL to a verified domain email in production
    const FROM_EMAIL = process.env.FROM_EMAIL && process.env.FROM_EMAIL.includes('@resend.dev') 
      ? process.env.FROM_EMAIL 
      : 'onboarding@resend.dev'

    if (!RESEND_API_KEY) {
      // Fallback: Log the email in development or return success
      console.warn('RESEND_API_KEY not configured. Email would be sent to:', to || 'dginzburg2005@gmail.com')
      console.log('Form data:', { name, email, message })
      
      // In development, just log the email
      if (process.env.NODE_ENV === 'development') {
        console.log('=== CONTACT FORM SUBMISSION ===')
        console.log('To:', to || 'dginzburg2005@gmail.com')
        console.log('From:', email)
        console.log('Name:', name)
        console.log('Message:', message)
        console.log('==============================')
        
        return NextResponse.json(
          { 
            message: 'Email logged (Resend not configured)',
            success: true 
          },
          { status: 200 }
        )
      } else {
        // In production without Resend, return an error
        return NextResponse.json(
          { 
            error: 'Email service not configured',
            message: 'Please contact dginzburg2005@gmail.com directly'
          },
          { status: 503 }
        )
      }
    }

    // Send email using Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: to || 'dginzburg2005@gmail.com',
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      }),
    })

    if (!resendResponse.ok) {
      let errorData
      try {
        errorData = await resendResponse.json()
      } catch (e) {
        errorData = { message: 'Unknown Resend API error', status: resendResponse.status }
      }
      console.error('Resend API error:', errorData)
      throw new Error(`Failed to send email via Resend: ${errorData.message || 'Unknown error'}`)
    }

    const result = await resendResponse.json()
    console.log('Email sent successfully:', result)

    return NextResponse.json(
      { message: 'Email sent successfully', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in contact API route:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
    })
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? errorMessage : 'An error occurred while sending your message'
      },
      { status: 500 }
    )
  }
}

