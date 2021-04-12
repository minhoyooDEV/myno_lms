// export const CourseMockResponse

//  curl -d '{"email":"user1@gmail.com", "password":"password1"}' -H "Content-Type: application/json" -X POST http://lms-assignment.codestates.com/login
const accessToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNjE3ODY3MjMyfQ._GmiS7P6SmH04PnqQDz9sKm0GAEYrKxcBHhI1JQ27N8';
export const LoginMockResponse = {
	user: { id: 1, email: 'user1@gmail.com', username: 'user1', tel: '01012341234' },
	accessToken,
};

// curl -H 'Accept: application/json' -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNjE3ODY3MjMyfQ._GmiS7P6SmH04PnqQDz9sKm0GAEYrKxcBHhI1JQ27N8" http://lms-assignment.codestates.com/courses/1/contents
export const CourseContentsMockResponse = [
	{
		id: 1,
		courseId: 1,
		body:
			'\n# Ceyx beatum visa nantemque\n\n## Eram sedula hausit longa possent\n\nLorem markdownum quoque, **eadem maxima qui** mensura: quid, et sed iterque\norigine terras exhalat se. Oculis externum utque? Sua non linquit lignum; curae\nbracchia Neretum, et aniles. Stat Iovi tutum ipse revocabile Latia temporis et\numbras ulmus facto, **ad** sed.\n\n  - Quod parente dentibus\n- Quos corpore\n- Defendite neque\n\n## Dictaeo motus\n\nIuno accessere clade si redeunt lactens somno quae flammas sorte placat\npopulosque robora ait. Visa nervi rediret ripas dedi movimus non dabat lugentis\nillum re minimum manibus conpellat rami metu Saturnia; fecerat.\n\n  1. Dolor cervice inpositum ego efficiet silva\n2. Corpore opem est Cecropis portus\n3. Rogum fecit\n4. Cepheaque penna inanem sideraque\n\n## Mei vidit chordas novitate cui\n\nNunc Tiberinus, invisa atque. Qua omne maiores **rursus** si vicina Icare est\nErymanthon cumque coloribus huius Pasiphaen panda. Emoriar accinctus arcitenens\nmoenia penetrabile **ignis aquilonibus**, mecum abstinuit proxima rictus.\n**Vincis viae** occupat! In prima talibus *solet conbiberat* fluctus fraxineam\nipsum ulterius nautae comites fila nox quod.\n\n> Ille *quorum caecus multi* monstri; reget quatit, dat. Conpescuit fecit, et\n> suis.\n\nUrebat manus praesignis iacent armenta pars est, opus **eduxit** egrediturque\n*bello*. Excita fert? Tenues sua ventura\n[nuper](http://sineaccipe.com/putarespomoque.html). Dum reddita **aula** legati,\nagnus aequi videre sic hostes, ter harundine.\n',
		order: 0,
	},
	{
		id: 2,
		courseId: 1,
		body:
			'\n# Iamque honorant stipite\n\n## Secutum fata\n\nLorem markdownum exire *lyrae* Isthmo thyrsos celer in secernunt summis calore\nnon hunc lumen potest cupidoque regia, certae? Multoque aquis spiris ligari;\noperum domo corpore *Nil indotata Laertius* possideat rediit, meis nefandum.\nPugnabo inpatiens apertum scilicet unus!\n\n- Lumina et minor\n- Tegit effulget\n- Quid magnis cinerem et plura in cur\n- Accepere triste ab illis\n\n## Nitidumque habet quos neque fossae ducem dare\n\nPotiora alta adire dea hospitium enses comas in primae, quod Bacchi, non\nincrevit virgo captivarumque ad annum. In mea quinque omnis miscuerat faciem\nclaudit, [has amat nomen](http://hicet.io/carne-partim.html) et ad erravit\ncoluber miseranda cornigeris tamen. Iudice Anchises et per rotae duxit hiberno\nmediis validisne scitetur in colla. Per pandos, et operum **eligit similis**\nexiguam velit dea capillos omni sine Pergama oravere medius: et! Vulgares\nvulneret ter acta culpa, cornua neque arbor illud trahunt recurvis geminata\nnostra sanguis demisit manifesta bucina praefertur **spatium**.\n\n## Idem post virginibus vetito passim fugit\n\nRaptam laverat ortu Hecabe agros. Imago in dabat gramine colebat nupta Auroram\ncognoscere ego litora in est spolioque. Desine foliis quos dixit bellis seges\nfatalia! Terraque rogatque solitam variarum caelo ludit submergere aequoreae de\nposcit ista inmensos.\n\n1. Frustra Pedasus neu gravet ferox\n2. Avem mea Propoetides nate\n3. Metu erat cura radiis sub peragunt non\n4. Membra omnia precibus sumpta\n5. Sonuit legem corve sanguine tribuam\n\n## Nec ne totidem nasci\n\nQuaeri in [cepit dextera](http://si.com/vigilielectra). Lumina vices Sirinosque\ncaede Spercheides discedere concipit interea quas: hanc bello, forti Cecropis\nora, ministri et gramina. Huic non, nido posuit\n[sociasque](http://fretumut.com/odiis.aspx) sibila non pectus in tuaque et illos\ntundunt significat Manto perspicit comitant! Sed superorum eligit corpore sic\ndoctis micantes, mille, repressit flamma!\n\nFuerat iudicium spicula in edidit sanguinis antro, potest formas sit vallis.\nTellus pulvere et pectus, palearia iustamque vinci vestigia suo quas sit Colchis\nunda adest Sisyphe, capax aviti cervi. Ait nil paravi non: tui omen fidissime\nvirgo annos ordine copia! Ignara et animo timenda secretaque creditur iter\n[crimine iusto](http://www.cernismavortia.io/undas) crines inconsolabile.\n',
		order: 1,
	},
];
export const CourseMockResponse = {
	id: 1,
	title: '자바스크립트 기초과정',
	description: '자바스크립트 기초과정 입니다.',
	thumbnailURL:
		'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
};

export const CoursesMockResponse = [
	{
		id: 1,
		title: '자바스크립트 기초과정',
		description: '자바스크립트 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 2,
		title: '자바스크립트 심화과정',
		description: '자바스크립트 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 3,
		title: '파이썬 기초과정',
		description: '파이썬 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 4,
		title: '파이썬 심화과정',
		description: '파이썬 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 5,
		title: '자바 기초과정',
		description: '자바 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 6,
		title: '자바 심화과정',
		description: '자바 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 7,
		title: '루비 기초과정',
		description: '루비 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 8,
		title: '루비 심화과정',
		description: '루비 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 9,
		title: 'C# 기초과정',
		description: 'C# 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 10,
		title: 'C# 심화과정',
		description: 'C# 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 11,
		title: 'C++ 기초과정',
		description: 'C++ 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 12,
		title: 'C++ 심화과정',
		description: 'C++ 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 13,
		title: 'Go 기초과정',
		description: 'Go 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 14,
		title: 'Go 심화과정',
		description: 'Go 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 15,
		title: 'Android 기초과정',
		description: 'Android 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 16,
		title: 'Android 심화과정',
		description: 'Android 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
	{
		id: 17,
		title: 'iOS 기초과정',
		description: 'iOS 기초과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/803/400/200.jpg?hmac=prZSIMC-BT1kkC7QN2WjcxZtv-IrI0fohbwPWb2j9uM',
	},
	{
		id: 18,
		title: 'iOS 심화과정',
		description: 'iOS 심화과정 입니다.',
		thumbnailURL:
			'https://i.picsum.photos/id/517/400/200.jpg?hmac=uWbXBW_5iNJ5SyevrpzKx0E_yZG2RdbGuVZ_5K8wyXQ',
	},
];
