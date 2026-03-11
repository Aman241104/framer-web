import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = process.env.GOOGLE_SCRIPT_URL;

    if (!url) {
      return NextResponse.json({ error: 'Environment variable GOOGLE_SCRIPT_URL is missing' }, { status: 500 });
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toISOString(),
      }),
    });

    const text = await response.text();
    
    return NextResponse.json({ 
      success: response.ok,
      status: response.status,
      message: 'Forwarded to Google Script',
      googleResponse: text.substring(0, 500)
    });

  } catch (error: any) {
    return NextResponse.json({ 
      error: 'API Route Failure', 
      details: error.message 
    }, { status: 500 });
  }
}
