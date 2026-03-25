import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId, sensorData } = await req.json();

    // ML-based emergency classification (simplified)
    const emergency = classifyEmergency(sensorData);

    if (emergency.isEmergency) {
      // Trigger financial actions
      await triggerFinancialActions(userId, emergency);
    }

    return NextResponse.json({
      isEmergency: emergency.isEmergency,
      type: emergency.type,
      severity: emergency.severity,
      confidence: emergency.confidence,
      actionsTriggered: emergency.actions,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Emergency detection failed" },
      { status: 500 }
    );
  }
}

function classifyEmergency(data: any) {
  const { heartRate, fallDetected, location, accelerometer } = data;

  // Cardiac emergency
  if (heartRate && (heartRate > 180 || heartRate < 40)) {
    return {
      isEmergency: true,
      type: "CARDIAC_EVENT",
      severity: "CRITICAL",
      confidence: 0.94,
      actions: ["AUTHORIZE_MEDICAL_PAYMENT", "TRANSFER_FUNDS", "INSURANCE_CLAIM"],
    };
  }

  // Fall detection
  if (fallDetected && accelerometer && Math.abs(accelerometer[2]) > 15) {
    return {
      isEmergency: true,
      type: "FALL_DETECTED",
      severity: "HIGH",
      confidence: 0.87,
      actions: ["CONTACT_NOTIFICATION", "TRANSFER_FUNDS"],
    };
  }

  // Disaster zone
  if (location && location.disasterZone) {
    return {
      isEmergency: true,
      type: "NATURAL_DISASTER",
      severity: "HIGH",
      confidence: 0.99,
      actions: ["DEFER_PAYMENT", "INSURANCE_CLAIM", "EMERGENCY_LOAN"],
    };
  }

  return {
    isEmergency: false,
    type: null,
    severity: null,
    confidence: 0,
    actions: [],
  };
}

async function triggerFinancialActions(userId: string, emergency: any) {
  // Log actions for execution
  console.log(`Triggering actions for user ${userId}:`, emergency.actions);
  // In production: Execute via banking/insurance APIs
}
