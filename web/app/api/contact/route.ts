import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In production: Send email, save to CRM, etc.
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We will respond within 24 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
