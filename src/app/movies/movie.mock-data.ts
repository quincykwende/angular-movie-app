import { genreType } from "./movie.model";

export const movies: any[] = [
	{
		id: 1,
		key: "deadpool",
		name: "Deadpool",
		description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
		genres: [genreType.action, genreType.adventure, genreType.comedy],
		rate: "8.6",
		length: "1hr 48mins",
		img: "deadpool.jpg"
	},
	{
		id: 2,
		key: "we-are-the-millers",
		name: "We're the Millers",
		description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
		genres: [genreType.adventure, genreType.comedy, genreType.crime],
		rate: "7.0",
		length: "1hr 50mins",
		img: "we-are-the-millers.jpg"
	},
	{
		id: 3,
		key: "straight-outta-compton",
		name: "Straight Outta Compton",
		description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
		genres: [genreType.biography, genreType.drama, genreType.history],
		rate: "8.0",
		length: "2hr 27mins",
		img: "straight-outta-compton.jpg"
	},
	{
		id: 4,
		key: "gridiron-gang",
		name: "Gridiron Gang",
		description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
		genres: [genreType.crime, genreType.drama, genreType.sport],
		rate: "6.9",
		length: "2hr 5mins",
		img: "gridiron-gang.jpg"
	},
	{
		id: 5,
		key: "american-gangster",
		name: "American Gangster",
		description: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
		genres: [genreType.biography, genreType.crime, genreType.drama],
		rate: "7.8",
		length: "2hr 37mins",
		img: "american-gangster.jpg"
	},
	{
		id: 6,
		key: "gangster-squad",
		name: "Gangster Squad",
		description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
		genres: [genreType.action, genreType.crime, genreType.drama],
		rate: "6.8",
		length: "1hr 53mins",
		img: "gangster-squad.jpg"
	},
	{
		id: 7,
		key: "now-you-see-me",
		name: "Now You See Me",
		description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
		genres: [genreType.crime, genreType.mystery, genreType.thriller],
		rate: "7.3",
		length: "1hr 55mins",
		img: "now-you-see-me.jpg"
	},
	{
		id: 8,
		key: "jurassic-world",
		name: "Jurassic World",
		description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
		genres: [genreType.action, genreType.adventure, genreType.scifi],
		rate: "7.1",
		length: "2hr 4mins",
		img: "jurassic-world.jpg"
	},
	{
		id: 9,
		key: "mission-impossible-rogue-nation",
		name: "Mission: Impossible: Rogue Nation",
		description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
		genres: [genreType.action, genreType.adventure, genreType.thriller],
		rate: "7.5",
		length: "2hr 11mins",
		img: "mission-impossible-rogue-nation.jpg"
	},
	{
		id: 10,
		key: "the-man-from-uncle",
		name: "The Man from U.N.C.L.E.",
		description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
		genres: [genreType.action, genreType.adventure, genreType.thriller],
		rate: "7.3",
		length: "1hr 56mins",
		img: "the-man-from-uncle.jpg"
	},
	{
		id: 10,
		key: "spectre",
		name: "Spectre",
		description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
		genres: [genreType.action, genreType.adventure, genreType.thriller],
		rate: "6.9",
		length: "2hr 28mins",
		img: "spectre.jpg"
	},
	{
		id: 11,
		key: "legend",
		name: "Legend",
		description: "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
		genres: [genreType.biography, genreType.crime, genreType.drama],
		rate: "7.0",
		length: "2hr 28mins",
		img: "legend.jpg"
	},
	{
		id: 12,
		key: "southpaw",
		name: "Southpaw",
		description: "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
		genres: [genreType.action, genreType.drama, genreType.sport],
		rate: "7.5",
		length: "2hr 4mins",
		img: "southpaw.jpg"
	},
	{
		id: 13,
		key: "bridge-of-spies",
		name: "Bridge of Spies",
		description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
		genres: [genreType.biography, genreType.drama, genreType.thriller],
		rate: "7.7",
		length: "2hr 22mins",
		img: "bridge-of-spies.jpg"
	},
	{
		id: 14,
		key: "ant-man",
		name: "Ant-Man",
		description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
		genres: [genreType.action, genreType.adventure, genreType.scifi],
		rate: "7.4",
		length: "1hr 57mins",
		img: "ant-man.jpg"
	},
	{
		id: 15,
		key: "fast-and-furious-7",
		name: "Fast & Furious 7",
		description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
		genres: [genreType.action, genreType.crime, genreType.thriller],
		rate: "7.3",
		length: "2hr 17mins",
		img: "fast-and-furious-7.jpg"
	},
	{
		id: 16,
		key: "tracers",
		name: "Tracers",
		description: "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
		genres: [genreType.action, genreType.crime, genreType.drama],
		rate: "5.6",
		length: "1hr 34mins",
		img: "tracers.jpg"
	},
	{
		id: 17,
		key: "running-scared",
		name: "Running Scared",
		description: "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
		genres: [genreType.action, genreType.crime, genreType.drama],
		rate: "7.4",
		length: "2hr 2mins",
		img: "running-scared.jpg"
	},
	{
		id: 18,
		key: "the-hangover",
		name: "The Hangover",
		description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
		genres: [genreType.comedy],
		rate: "7.8",
		length: "1hr 40mins",
		img: "the-hangover.jpg"
	},
	{
		id: 19,
		key: "project-x",
		name: "Project X",
		description: "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
		genres: [genreType.comedy, genreType.crime],
		rate: "6.7",
		length: "1hr 28mins",
		img: "project-x.jpg"
	},
	{
		id: 20,
		key: "the-dark-knight",
		name: "The Dark Knight",
		description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		genres: [genreType.action, genreType.crime, genreType.drama],
		rate: "9.0",
		length: "2hr 32mins",
		img: "the-dark-knight.jpg"
	},
	{
		id: 21,
		key: "the-tournament",
		name: "The Tournament",
		description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
		genres: [genreType.action, genreType.thriller],
		rate: "6.1",
		length: "1hr 35mins",
		img: "the-tournament.jpg"
	},
	{
		id: 22,
		key: "the-matrix",
		name: "The Matrix",
		description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
		genres: [genreType.action, genreType.scifi],
		rate: "8.7",
		length: "2hr 16mins",
		img: "the-matrix.jpg"
	},
	{
		id: 23,
		key: "bad-boys",
		name: "Bad Boys",
		description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
		genres: [genreType.action, genreType.comedy, genreType.crime],
		rate: "6.8",
		length: "1hr 59mins",
		img: "bad-boys.jpg"
	}
];