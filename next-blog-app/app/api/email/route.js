
import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";
const LoadDB = async () => {
  await ConnectDB();
}
LoadDB();
export async function POST(request) {
  const formData = await request.formData();
    const emailData = {
      email:`${formData.get("email")}`,
  }

  await EmailModel.create(emailData);

  return NextResponse.json({
    success: true,
    msg: "Email Subscribed",
  });
}

export async function GET(request) {
    const emails = await EmailModel.find({});
  return NextResponse.json({
    success: true,
    emails,
  });
}


export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        success: false,
        msg: "Email ID is required",
      });
    }

    const email = await EmailModel.findById(id);
    if (!email) {
      return NextResponse.json({
        success: false,
        msg: "Email not found",
      });
    }

    await EmailModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      msg: "Email Deleted",
    });
  } catch (error) {
    console.error("Error deleting email:", error);
    return NextResponse.json({
      success: false,
      msg: "An error occurred while deleting the email",
    });
  }
}
