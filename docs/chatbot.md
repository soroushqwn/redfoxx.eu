# Website chatbot

A chat widget (`src/chat/`) talks to `public/api/chat.php`, which calls the Anthropic Messages API.
The bot answers questions about REDFOXX, qualifies visitors, shows a Calendly booking button
(prefilled with name/email) and, after explicit consent, emails the lead to info@redfoxx.be.
There is also a "Verder op WhatsApp" link (`wa.me`). No fixed prices, ROI claims or client names are in the prompt.

## Status: hidden for visitors
`CHAT_PUBLIC` in `src/chat/config.ts` is `false`. Preview any page with `?chat=1`.
Do not set it to `true` before: (1) the secrets file below exists on Hostinger, (2) a privacy policy
(mentioning the AI chat and that messages are processed by Anthropic) is online, (3) the owner agrees.

## Hostinger setup (once)
1. Create an API key at console.anthropic.com (set a monthly spend limit there).
2. Create the file `redfoxx-secrets.php` ONE LEVEL ABOVE `public_html` (not web accessible):

```php
<?php
return [
  'api_key'         => 'sk-ant-...',
  'model'           => 'claude-haiku-5-5',          // or 'claude-sonnet-5-5' for higher quality
  'notify_to'       => 'info@redfoxx.be',
  'mail_from'       => 'info@redfoxx.be',            // must be a mailbox on the domain (SPF/DKIM)
  'allowed_origins' => ['https://redfoxx.be'],
  'daily_cap'       => 1500,                          // max chat requests per day, whole site
  'ip_per_hour'     => 40,
  // 'prompt_caching' => true,
];
```
3. Lead mail: to make the lead mails land in the inbox (and not in spam), send them through the owner's own Microsoft 365
   mailbox with Microsoft Graph. Register an app in Entra (Mail.Send, application permission, admin consent), create a client secret and add:

```php
  'graph_tenant_id'     => '...',   // Directory (tenant) ID
  'graph_client_id'     => '...',   // Application (client) ID
  'graph_client_secret' => '...',   // client secret VALUE (expires: put a reminder in the calendar)
  'graph_sender'        => 'soroush@redfoxx.be', // a real mailbox (not an alias)
```
   Without these, or when Graph fails, `chat.php` falls back to PHP `mail()` from the Hostinger server (may be marked as spam).
   Restrict the app to this one mailbox with an Application Access Policy (Exchange Online PowerShell), otherwise it could send as anyone in the tenant.
4. Check that PHP has the `curl` extension and `mail()` works (send yourself a test lead).

## Local test
`REDFOXX_SECRETS=/path/secrets.php php -S 127.0.0.1:8080 -t dist` with `api_url` pointing to a mock server
and `mail_log` set to a file (writes the lead mail there instead of sending).

## Later: automatic WhatsApp notification (step 2)
Needs the WhatsApp Business Platform (Meta verification, approved message templates, per-conversation cost,
and a number that is not in use in the normal WhatsApp app unless Coexistence is available). Until then: email + `wa.me` link.
