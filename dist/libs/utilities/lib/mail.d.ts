import { default as React } from 'react';
interface SendEmailOptions {
    to: string;
    subject: string;
    react?: React.ReactElement;
    text?: string;
    html?: string;
}
export declare const sendEmail: ({ to, subject, react, text, html, }: SendEmailOptions) => Promise<void>;
export {};
