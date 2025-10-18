import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { AdminEmailTemplate, SenderEmailTemplate } from "@/components/email-templates";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const resend = new Resend(process.env.RESEND_API_KEY);
        const params = req.nextUrl.searchParams;
        const source = params.get("source");

        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
            return new NextResponse("Insufficient data", { status: 400 });
        }

        const adminEmail = await resend.emails.send({
            from: `${data.firstName} ${data.lastName} <website@zapli.co.il>`,
            to: ["admin@zapli.co.il"],
            subject: `New Form Submition From zapli.co.il (Source: ${source})`,
            react: AdminEmailTemplate(data),
        });

        if (adminEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the admin email: ${JSON.stringify(adminEmail.error)}`,
                {
                    status: 500,
                }
            );
        }

        if (source === "Guide") return NextResponse.json({ admin: adminEmail.data });

        const senderEmail = await resend.emails.send({
            from: `Zapli Team <noreply@zapli.co.il>`,
            to: [data.email],
            subject: "קיבלנו את ההודעה שלך",
            react: SenderEmailTemplate({ firstName: data.firstName }),
        });

        if (senderEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the sender email: ${JSON.stringify(senderEmail.error)}`,
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({ admin: adminEmail.data, sender: senderEmail.data });
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${error}`, { status: 500 });
    }
}
