import { NextRequest, NextResponse } from 'next/server';
import { FormData, ApiResponse } from '@/types';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body: FormData = await request.json();

    if (!body.name || !body.email || !body.company || !body.phone) {
      return NextResponse.json(
        {
          success: false,
          error: 'All fields are required',
        },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    if (!validatePhone(body.phone)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid phone number',
        },
        { status: 400 }
      );
    }

    console.log('Lead received:', body);

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully. We will contact you soon.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed',
    },
    { status: 405 }
  );
}