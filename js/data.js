let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// Esercizio di oggi:
// cartella / repo js - es6 - icons
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// 	Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// 	Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina ?
// 	Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.Solamente quando la parte logica è completa, ci dedichiamo al css.

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// 	Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
const container = document.querySelector(".container");

icons.forEach((element) => {
	container.innerHTML += `
	<div class="box">
	<i class="${element.family} ${element.prefix}${element.name}" id="${element.color}"></i>
	<h3>${element.name}</h3>
	</div>
	`;
})

// 	Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
