<script>
	import { randomLetter, formatAsTimer } from '$lib/util.js';

	let dimensions = 5;
	let board = generateBoard();

	let score = 0;
	let timer = 60_000;
	let start = Date.now();

	function generateBoard() {
		return Array(dimensions)
			.fill()
			.map(() =>
				Array(dimensions)
					.fill()
					.map(() => randomLetter())
			);
	}

	let timeLeft = timer - (Date.now() - start);
	setInterval(() => {
		timeLeft = timer - (Date.now() - start);
	}, 500);
</script>

<div class="flex flex-col font-DynaPuff w-screen justify-center items-center min-h-screen bg-four">
	<div
		class="max-w-full w-64 bg-silver flex flex-col justify-center items-center mb-12 rounded-xl p-4 bg-three text-one border-4 border-five"
	>
		<p class="text-6xl">{score}</p>
		<div class="flex justify-between items-center w-20">
			<span class="icon-[mdi--hourglass] size-8"></span>
			<p class="text-xl">
				{formatAsTimer(timeLeft)}
			</p>
		</div>
	</div>

	<div
		class="grid border-8 rounded-xl p-3.5 border-five bg-three overflow-auto"
		style={`
			grid-template-columns: repeat(${dimensions}, minmax(0, 1fr));
			grid-template-rows: repeat(${dimensions}, minmax(0, 1fr));
		`}
	>
		{#each board as row}
			{#each row as cell}
				<button
					class="aspect-square m-0.5 p-1 text-3xl md:text-6xl rounded-lg font-Titan border-4 text-one border-five bg-four"
				>
					{cell}
				</button>
			{/each}
		{/each}
	</div>
</div>

<div></div>
