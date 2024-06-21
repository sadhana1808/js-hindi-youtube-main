/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const emojiDiv = document.getElementById("emoji");

  const emojis = [
    "🤣",
    "😊",
    "😎",
    "😍",
    "😜",
    "🤪",
    "😇",
    "🤔",
    "🤗",
    "😅",
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "👀",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
  ];

  emojiDiv.addEventListener("mouseover", () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiDiv.textContent = randomEmoji;
    emojiDiv.classList.remove("grayscale");
  });

  emojiDiv.addEventListener("mouseout", () => {
    emojiDiv.classList.add("grayscale");
  });
});
