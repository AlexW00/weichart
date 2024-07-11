import JSConfetti from "js-confetti";

const confettiButton = document.getElementById("confetti-button")!;
const jsConfetti = new JSConfetti();

const AVAILABLE_EMOJIS = [
	"😎",
	"🌸",
	"</>",
	"👨🏻‍💻",
	"🚀",
	"👾",
	"⚡",
	"💡",
	"🌐",
	"🕹️",
	"🎉",
	"🌎",
	"🇩🇪",
	"🇮🇪",
];

const getRandomEmojis = (count: number) =>
	Array.from({ length: count }, () => {
		const randomIndex = Math.floor(Math.random() * AVAILABLE_EMOJIS.length);
		return AVAILABLE_EMOJIS[randomIndex];
	});

confettiButton.addEventListener("click", () => {
	jsConfetti.addConfetti({
		emojis: getRandomEmojis(3),
	});
});
