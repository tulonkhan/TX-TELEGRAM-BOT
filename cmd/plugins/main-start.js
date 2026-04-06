module.exports.config = {
  name: "start",
  aliases: [],
  description: "Displays the premium start menu",
  version: "1.0.1",
  prefix: true,
  permission: 0,
  category: "general",
  usages: "/start"
};

module.exports.start = async ({ api, event}) => {
  const chatId = event.threadId || event.message.chat.id;
  const user = event.sender || event.message.from;

  const firstName = user.first_name || "";
  const lastName = user.last_name || "";
  const prefix = global.config?.prefix || "/";

  const welcomeMessage = `
✨ *Welcome to Tx Creative Bot!* ✨

👋 Hello, *${firstName} ${lastName}*

💡 I am your all-in-one assistant, ready to help you with:
─────────────────────────────
📌 *Features:*
• 🔒 Chat Lock System → \`${prefix}lock\`
• 🤖 AI Chat (Gemini) → \`${prefix}gemini\`
• 🖼 AI Image Tools → \`${prefix}img\`
• 🤖 AI Chat (GPT) → \`${prefix}ai\`
• ⚙️ Help See All cmnd → \`${prefix}help\`
─────────────────────────────

🚀 *Quick Tips:*
• Type \`${prefix}help\` to see all commands.
• Reply to images with \`${prefix}img\` to use AI tools.
• Use \`${prefix}lock\` to manage chat locks.
• Explore Gemini AI with \`${prefix}gemini\`.

💎 *Premium Experience Activated!* Enjoy smooth, fast, and responsive commands.
─────────────────────────────

© *Developed by Tx Tulon*
`;

  await api.sendMessage(chatId, welcomeMessage, { parse_mode: "Markdown", reply_to_message_id: event.message.message_id });
};
