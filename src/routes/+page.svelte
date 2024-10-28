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

<div
	class="flex flex-col font-DynaPuff w-screen justify-center items-center min-h-screen bg-crystalblue"
>
	<div class="w-64 bg-silver flex flex-col justify-center items-center mb-12 rounded-md p-4">
		<p class="text-6xl">{score}</p>
		<div class="flex justify-between items-center w-20">
			<span class="icon-[mdi--hourglass] size-8 text-black"></span>
			<p class="text-xl">
				{formatAsTimer(timeLeft)}
			</p>
		</div>
	</div>

	<div class="flex flex-col border-4 rounded-xl p-3.5">
		{#each board as row}
			<div class="flex flex-row w-full">
				{#each row as cell}
					<button
						class="m-0.5 w-20 h-20 text-6xl rounded-lg font-GamjaFlower font-extrabold border-2"
					>
						{cell}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>

<div></div>
