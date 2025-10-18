interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export function AdminEmailTemplate({ firstName, lastName, email, phone, message }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>New Contact Form Submission</h1>
            <p>
                <strong>Name:</strong> {firstName} {lastName}
            </p>
            <p>
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
                <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <div style={{ marginTop: "20px" }}>
                <strong>Message:</strong>
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        backgroundColor: "#f9f9f9",
                        marginTop: "5px",
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {message}
                </div>
            </div>
        </div>
    );
}

export async function SenderEmailTemplate({ firstName }: { firstName: string }) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>תודה שפנית אלינו, {firstName}!</h1>
            <p>קיבלנו את ההודעה שלך ונחזור אליך בהקדם האפשרי. בדרך כלל לוקח לנו 24 שעות לענות.</p>
            <p>
                אם מדובר בפנייה דחופה, תרגישו חופשי לפנות אלינו בוואטסאפ{" "}
                <a href="https://wa.me/972527088557">+972-527-088-557</a>
            </p>

            <p style={{ marginTop: "30px" }}>
                בברכה,
                <br />
                צוות זאפלי
            </p>
        </div>
    );
}
