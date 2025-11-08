import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
    firstName: z.string("שם פרטי הוא שדה חובה").trim().min(2, "שם פרטי חייב להיות באורך של 2 תווים לפחות"),
    lastName: z.string("שם משפחה הוא שדה חובה").trim().min(2, "שם משפחה חייב להיות באורך של 2 תווים לפחות"),
    phone: z
        .string("מס' טלפון הוא שדה חובה")
        .trim()
        .transform((val) => val.replace(/\D/g, "")),
    timeWaster: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function GuideForm() {
    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            timeWaster: "",
        },
    });

    const { mutate: send, isPending } = useMutation({
        mutationKey: ["send-email"],
        mutationFn: async (data: FormValues) => axios.post("/api/whatsapp/guide", data),
        onError: () => toast.error("משהו השתבש בשליחת הבקשה שלכם. אנא נסו שוב מאוחר יותר."),
        onSuccess: () => router.push("/guide/success"),
    });

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit((d) => send({ ...d, phone: "972" + d.phone }))}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>מס' טלפון</FormLabel>
                            <FormControl>
                                <Input
                                    dir="ltr"
                                    type="tel"
                                    placeholder="+972523456789"
                                    className="text-right"
                                    autoComplete="tel"
                                    inputMode="tel"
                                    {...field}
                                    value={"+972" + field.value}
                                    onChange={(e) => field.onChange(e.target.value.slice(4).replace(/\D/g, ""))}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="timeWaster"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                מה מבזבז לך הכי הרבה זמן כרגע?{" "}
                                <span className="text-muted-foreground text-sm font-normal">(אופציונלי)</span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="לענות לטלפונים עם שאלות חוזרות" {...field} />
                            </FormControl>
                            <FormDescription>זה עוזר לנו להבין איך לעזור לך.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full text-lg h-12 font-semibold rounded-full" disabled={isPending}>
                    {isPending && <Spinner />}
                    שלח לי את המדריך בחינם
                </Button>

                <p className="text-xs text-center text-muted-foreground font-rubik">
                    לא נשלח לך ספאם. רק תוכן שימושי מדי פעם.
                </p>
            </form>
        </Form>
    );
}

export { GuideForm };
