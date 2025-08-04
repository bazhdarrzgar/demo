import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from Amez CV API!',
    status: 'success',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Handle contact form submission
    if (body.type === 'contact') {
      // In a real application, you would save this to a database
      // or send an email notification
      console.log('Contact form submission:', body)
      
      return NextResponse.json({
        message: 'Message sent successfully!',
        status: 'success'
      })
    }
    
    return NextResponse.json({
      message: 'Request processed',
      status: 'success',
      received: body
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Error processing request',
      status: 'error',
      error: error.message
    }, { status: 500 })
  }
}