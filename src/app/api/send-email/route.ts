import { sendEmail } from '@/utils/email';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { from, subject, emailType, ...rest } = data;

    let emailBody = '';

    if (emailType === 'bulk-purchase') {
      emailBody = `
        Name: ${rest.name}
        Email: ${rest.email}
        Institution: ${rest.institution}
        City: ${rest.city}
        Purchase Intent: ${rest.purchaseIntent}
        Phone: ${rest.phone}
        Message: ${rest.message}
        Business Nature: ${rest.businessNature}
      `;
    } else if (emailType === 'newsletter') {
      emailBody = `New Newsletter Signup! \n\nEmail: ${rest.email}`;
    }

    const response = await sendEmail(from, process.env.EMAIL, subject, emailBody);

    if (!response.success) {
      return NextResponse.json({ success: false, error: response.error }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}
