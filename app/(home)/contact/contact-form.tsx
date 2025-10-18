"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/funcs";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = /^\+972\d{8,9}$/;

const contactSchema = z.object({
    firstName: z.string("שם פרטי הוא שדה חובה").trim().min(2, "שם פרטי חייב להיות באורך של 2 תווים לפחות"),
    lastName: z.string("שם משפחה הוא שדה חובה").trim().min(2, "שם משפחה חייב להיות באורך של 2 תווים לפחות"),
    email: z.email("דוא" + '"' + "ל הוא שדה חובה").trim(),
    phone: z
        .string("טלפון הוא שדה חובה")
        .trim()
        .transform((v) => v.replace(/\s|-/g, ""))
        .refine((v) => v.startsWith("+972"), "הטלפון חייב להתחיל ב-972+")
        .refine((v) => phoneRegex.test(v), "מספר הטלפון צריך להכיל 8–9 ספרות לאחר 972+"),
    message: z
        .string("הודעה היא שדה חובה")
        .trim()
        .min(10, "ההודעה צריכה להיות באורך של לפחות 10 תווים")
        .max(1000, "ההודעה ארוכה מדי (מקסימום 1000 תווים)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm({ className, ...props }: React.ComponentProps<"form">) {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "+972",
            message: "",
        },
    });

    async function onSubmit(values: ContactFormValues) {
        console.log("Contact form submitted:", values);
        form.reset({ ...form.getValues(), message: "" });
    }

    return (
        <Form {...form}>
            <form {...props} onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>שם פרטי</FormLabel>
                                <FormControl>
                                    <Input placeholder="אבי" autoComplete="given-name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>שם משפחה</FormLabel>
                                <FormControl>
                                    <Input placeholder="כהן" autoComplete="family-name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>דוא"ל</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    autoComplete="email"
                                    inputMode="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>מס' טלפון</FormLabel>
                            <FormControl>
                                <Input
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="+972541234567"
                                    {...field}
                                    onFocus={(e) => {
                                        if (!e.currentTarget.value) {
                                            field.onChange("+972");
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormDescription>מספר ישראלי בפורמט בינלאומי 9725XXXXXXXX+</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>הודעה</FormLabel>
                            <FormControl>
                                <Textarea placeholder="כיתבו כאן את ההודעה שלכם..." className="min-h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="rounded-2xl px-6 w-full">
                    שליחה
                </Button>
            </form>
        </Form>
    );
}

export { ContactForm };
