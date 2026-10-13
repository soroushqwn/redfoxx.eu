export const CALENDLY_URL = "https://calendly.com/soroush-redfoxx/30min";
export const WHATSAPP_NUMBER = "32456369848";
export const CHAT_ENDPOINT = "/api/chat.php";

/**
 * Rollout switch. The chat is hidden for visitors until the owner flips this to true
 * (needs the backend secrets file + a privacy policy first, see docs/chatbot.md).
 * Anyone can preview it by opening a page with ?chat=1.
 */
export const CHAT_PUBLIC = false;

export const MAX_USER_MESSAGES = 20;
export const MAX_CHARS = 1000;
