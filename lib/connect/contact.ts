import { Form } from "@/app/types/Contact.type";

export const postContact = async (content: Form) => {
    const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT ?? '',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "お問い合わせ",
                avatar_url: "https://avatars.githubusercontent.com/u/35647163?v=4",
                content: `名前: ${content.name}\nメールアドレス: ${content.email}\n\nお問い合わせ内容: \n${content.message}`,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
};
