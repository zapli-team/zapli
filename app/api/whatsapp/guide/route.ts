import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { WHATSAPP_HUMAN_NUMBER } from "@/utils/consts";

import { GRAPH_URL, META_TOKEN } from "../utils/consts";
import { Payload } from "../utils/types";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    timeWaster: z.string().optional(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { success, data } = schema.safeParse(body);
        if (!success || !data) return new NextResponse("Incorrect data", { status: 400 });

        const adminPayload: Payload = {
            messaging_product: "whatsapp",
            to: WHATSAPP_HUMAN_NUMBER,
            type: "template",
            template: {
                name: "guide_form_admin_message",
                language: { code: "he" },
                components: [
                    {
                        type: "body",
                        parameters: [
                            { type: "text", parameter_name: "first_name", text: data.firstName },
                            { type: "text", parameter_name: "last_name", text: data.lastName },
                            { type: "text", parameter_name: "phone", text: data.phone },
                            { type: "text", parameter_name: "time_waster", text: data.timeWaster || "" },
                        ],
                    },
                ],
            },
        };

        const senderPayload: Payload = {
            messaging_product: "whatsapp",
            to: data.phone,
            type: "template",
            template: {
                name: "guide_form_sender_message",
                language: { code: "he" },
                components: [
                    {
                        type: "body",
                        parameters: [{ type: "text", parameter_name: "first_name", text: data.firstName }],
                    },
                ],
            },
        };

        const [admin, sender] = await Promise.all([
            axios.post(GRAPH_URL, adminPayload, { headers: { Authorization: `Bearer ${META_TOKEN}` } }),
            axios.post(GRAPH_URL, senderPayload, { headers: { Authorization: `Bearer ${META_TOKEN}` } }),
        ]);

        return NextResponse.json({ admin, sender });
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${error}`, { status: 500 });
    }
}
