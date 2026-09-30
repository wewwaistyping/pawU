/* ============================================================
   PAW U — data.js
   Канон из лорбука и карточек персонажей. Два языка:
   любое текстовое поле = {en:"…", ru:"…"} (строка или массив).
   [[в двойных скобках]] — не подтверждено каноном.
   cards: ссылки на карточку персонажа — ST card и Janitor AI.
   ============================================================ */

const SITE = {

meta: {
  name: "PAW U",
  full: "Paw University · San Soleil, CA",
  motto: "Prowl And Wail",
  event: {
    title: "VERSUS",
    when:  { en:"Halloween", ru:"Хэллоуин" },
    where: "Blackwood Hall",
    line:  { en:"The administration is fanning the hype. Every PAW U social feed is buzzing.",
             ru:"Администрация раскачивает хайп. Все соцсети университета гудят." },
    origin:{ en:"It started with Troy and Selene's argument in the cafeteria, witnessed by the entire college.",
             ru:"Началось с ссоры Троя и Селен в столовой на глазах у всего колледжа." }
  }
},

/* =========================== ГРУППЫ =========================== */
groups: [
{
  id:"hickeys", name:"SORRY 'BOUT YOUR GIRL'S HICKEY", short:"HICKEYS", alt:"SBYGH",
  kind:{ en:"pop-punk · college rock", ru:"поп-панк · колледж-рок" },
  turf:"The Howl · The Doghouse",
  oneLiner:{ en:"PAW U's resident pop-punk band. The campus's true agents of chaos. The beloved underdogs of the local scene.",
             ru:"Резидентный поп-панк PAW U. Истинные хаоситы кампуса. Любимые андердоги сцены." },
  bio:{ en:[
    "Troy put the band together back in high school. The sound is raw and dirty, worshipping Sum 41, Green Day and the early 2000s. Shows are explosive and unpredictable and usually end in a sweaty, screaming mess.",
    "At university they recorded \"woof if you feel the same\" — a loud anthem for a generation about being lost and not giving a damn. The whole campus has known them since.",
    "Troy works barks and howls into the songs. They're not afraid to sing about things straight and to show imperfection."
  ], ru:[
    "Трой собрал группу ещё в старшей школе. Звук сырой и грязный, воспевающий треки Sum 41, Green Day и ранние двухтысячные. Концерты взрывные и непредсказуемые, обычно заканчиваются потной орущей кашей.",
    "В университете записали «woof if you feel the same» – громкий гимн поколения о том, как можно быть потерянным и не париться. С тех пор их знает весь кампус.",
    "Трой встраивает в песни лай и завывания. Они не стесняются петь о вещах напрямую и показывать несовершенство."
  ]},
  members:["troy","joe","chase","jackob"],
  tracks:[]
},
{
  id:"hbs", name:"HEARTBEAT SLAY", short:"HBS", alt:"CAT5",
  kind:{ en:"electropop · K-pop", ru:"электро-поп · к-поп" },
  turf:"The Purr · The Scratching Post",
  oneLiner:{ en:"PAW U's most prominent and commercially successful act. Electropop drawing straight from K-pop.",
             ru:"Самый заметный и коммерчески успешный акт PAW U. Электропоп с прямой оглядкой на K-pop." },
  bio:{ en:[
    "Slick choreography, expensive outfits, powerful confident anthems about self-love, ambition and heartbreak. Playful cat-like ad-libs — \"meow\", \"purr\" — in the songs.",
    "The band is bilingual: Jin and Sandy often sing in Mandarin.",
    "They don't need to chase the mainstream — they set it.",
    "They hang out at the Purr and the Scratching Post. Half the campus thinks they're stuck-up. The other half worships them."
  ], ru:[
    "Слаженная хореография, дорогие костюмы, мощные уверенные гимны про любовь к себе, амбиции и разбитые сердца. В песнях – кошачьи адлибы «meow» и «purr».",
    "Группа двуязычная: Джин и Сэнди часто поют на китайском.",
    "Им не нужно гнаться за мейнстримом – они сами его задают.",
    "Тусуются в «Purr» и в «Scratching Post». Часть кампуса считает их зазнайками. Другая часть – на них молится."
  ]},
  members:["selene","veronica","sandy","jin"],
  tracks:[]
},
{
  id:"tj", name:"TJ", short:"TJ", alt:"The Doberman", solo:true,
  kind:{ en:"rap · New Sincerity", ru:"рэп · New Sincerity" },
  turf:{ en:"Inglewood · Malibu · the PAW U lawn", ru:"Инглвуд · Малибу · газон PAW U" },
  oneLiner:{ en:"Solo rapper, 23, fourth-year Business Analytics at PAW U. Owns his label, parks a Lambo on the lawn. The face of West Coast New Sincerity — radical emotional honesty wrapped in maximalist production.",
             ru:"Соло-рэпер, 23, четвёртый курс бизнес-аналитики PAW U. Свой лейбл, Lambo на газоне. Лицо западного побережья «Новой искренности»: радикальная честность в максималистском продакшене." },
  bio:{ en:[
    "Fourth-year Business Analytics. Expelled once, came back after making a name for himself — and despite the job, he actually shows up to class. Parks on the lawn, treats San Soleil like his backyard. The rock kids respect him for authenticity, the pop kids for success. He transcends campus factions because his music does.",
    "The press calls him \"The Doberman\" and \"Inglewood's Demigod\". His mother calls him \"mijo\".",
    "He runs on a dual-core processor. In public — confidence, playful arrogance, the self-crowned Demigod. In private — insomniac, fatherless, hypervigilant, lonely in the specific way only someone surrounded by millions of listeners gets. His genius is his curse."
  ], ru:[
    "Четвёртый курс бизнес-аналитики. Один раз отчислен, вернулся, когда сделал себе имя, — и, несмотря на работу, реально ходит на пары. Паркуется на газоне, обращается с San Soleil как со своим двором. Рокеры уважают его за подлинность, поп-тусовка — за успех. Он выше фракций кампуса, потому что его музыка выше.",
    "Пресса зовёт его «Доберман» и «Полубог из Инглвуда». Мать зовёт «mijo».",
    "Работает на двух ядрах. Публично — уверенность, игривая наглость, самокоронованный Полубог. Наедине — бессонница, безотцовщина, гипербдительность и одиночество того особого сорта, который бывает только у людей с миллионами слушателей. Его гений — его проклятие."
  ]},
  members:["tj"],
  tracks:[]
}],

/* ============================ ТРЕКИ ============================ */
tracks:[
{
  id:"woof", group:"hickeys", title:"WOOF IF YOU FEEL THE SAME", bpm:"—", style:{ en:"pop-punk", ru:"поп-панк" }, top:true,
  about:{ en:"A loud anthem for a generation about being lost and not giving a damn. The track that made the whole campus know HICKEYS.",
          ru:"Громкий гимн поколения о том, как можно быть потерянным и не париться. Трек, после которого HICKEYS узнал весь кампус." },
  credits:{ en:["Troy Leeroy — words, vocals","HICKEYS"], ru:["Трой Лирой — слова, вокал","HICKEYS"] },
  versions:[{lang:"EN", label:"WOOF IF YOU FEEL THE SAME", audio:"../TRACKS/HICKEYS/WOOF_IF_YOU_FEEL_THE_SAME.mp3", lyricsFile:null}]
},
{
  id:"welcome", group:"hickeys", title:"WELCOME TO PAW U", bpm:"—", style:{ en:"pop-punk", ru:"поп-панк" },
  about:{ en:"", ru:"" },
  credits:{ en:["HICKEYS"], ru:["HICKEYS"] },
  versions:[{lang:"EN", label:"WELCOME TO PAW U", audio:"../TRACKS/HICKEYS/WELCOME_TO_PAW_U.mp3", lyricsFile:null}]
},
{
  id:"pawprint", group:"hickeys", title:"THE PAW PRINT ON MY HEART", bpm:"—", style:{ en:"pop-punk", ru:"поп-панк" },
  about:{ en:"", ru:"" },
  credits:{ en:["HICKEYS"], ru:["HICKEYS"] },
  versions:[{lang:"EN", label:"THE PAW PRINT ON MY HEART", audio:"../TRACKS/HICKEYS/THE_PAW_PRINT_ON_MY_HEART.mp3", lyricsFile:null}]
},
{
  id:"sun", group:"tj", title:"OUT (OF) MY SUN", bpm:"—", style:{ en:"rap · New Sincerity", ru:"рэп · New Sincerity" }, top:true,
  about:{ en:"", ru:"" },
  credits:{ en:["TJ"], ru:["TJ"] },
  versions:[{lang:"EN", label:"OUT (OF) MY SUN", audio:"../TRACKS/TJ/OUT_OF_MY_SUN.mp3", lyricsFile:null}]
},
{
  id:"mother-lover", group:"tj", title:"MOTHER LOVER", bpm:"—", style:{ en:"rap · New Sincerity", ru:"рэп · New Sincerity" },
  about:{ en:"", ru:"" },
  credits:{ en:["TJ"], ru:["TJ"] },
  versions:[{lang:"EN", label:"MOTHER LOVER", audio:"../TRACKS/TJ/MOTHER_LOVER.mp3", lyricsFile:null}]
},
{
  id:"tjruto", group:"tj", title:"TJRUTO [DEMO]", bpm:"—", style:{ en:"rap · New Sincerity", ru:"рэп · New Sincerity" },
  about:{ en:"", ru:"" },
  credits:{ en:["TJ"], ru:["TJ"] },
  versions:[{lang:"EN", label:"TJRUTO [DEMO]", audio:"../TRACKS/TJ/TJRUTO.mp3", lyricsFile:null}]
},
{
  id:"slay", group:"hbs", title:"WE'RE A HEARTBEAT SLAY [DEMO]", bpm:"—", style:{ en:"electropop · K-pop", ru:"электро-поп · к-поп" }, top:true,
  about:{ en:"", ru:"" },
  credits:{ en:["HEARTBEAT SLAY"], ru:["HEARTBEAT SLAY"] },
  versions:[{lang:"EN/ZH", label:"WE'RE A HEARTBEAT SLAY [DEMO]", audio:"../TRACKS/HBS/WERE_A_HEARTBEAT_SLAY.mp3", lyricsFile:null}]
}],

/* ========================== ПЕРСОНАЖИ ==========================
   main:true — основной персонаж с карточкой (есть ST card / Janitor).
   cards.st / cards.janitor — ссылки; пусто = кнопка ждёт ссылку.   */
npcs:[
/* ---------- HICKEYS ---------- */
{ id:"troy", name:"TROY LEEROY", short:"Troy", age:21, main:true,
  cards:{ st:"https://drive.google.com/drive/folders/1aWmQESt0PwZStd2UANaqqPUCBTrrA-6E",
          janitor:"https://janitorai.com/characters/cbe16e94-eac8-44cf-b21c-d20f5029d896_character-troy-leeroy-adhd-frontman-paw-u" },
  species:{ en:"demi × white wolf", ru:"деми × белый волк" },
  major:{ en:"law", ru:"право" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"vocals, founder", ru:"вокал, основатель" }, group:"hickeys", loc:"howl", ink:"red",
  oneLiner:{ en:"Founded HICKEYS in high school, doesn't give a shit about law. Almost everyone on campus knows his name — and who doesn't, soon will, because he'll throw a set right in the middle of the hallway to piss someone off.",
             ru:"Основал HICKEYS в школе, плевать хотел на юрфак. Все на кампусе знают его имя — а кто не знает, скоро узнает, потому что он устроит концерт прямо в коридоре, чтобы кого-нибудь позлить." },
  bio:{ en:[
    "6'3\", muscular, pale, blue eyes, messy short white-dyed hair, fluffy wolf ears with a piercing and a fluffy wolf tail, Nordic features, tattoos all over his hands and neck. Smells of beer, cigarettes and a leather jacket.",
    "Youngest of three brothers, raised in love and support — he only applied to university because his parents worried about his future. He doesn't blame them. He hates his soon-to-be law degree with all his heart.",
    "A rebel, but a lawful one. Give him a chance to mess with the system and he'll take it gladly. Bores fast, always needs action. His tail and ears are never still. He has noticeable fangs and knows it — he smiles with them on purpose.",
    "After an argument with Selene in the cafeteria, witnessed by the entire college, he challenged HEARTBEAT SLAY to a versus. The battle is at the Halloween party, in two weeks."
  ], ru:[
    "6'3\", мускулистый, бледный, голубые глаза, растрёпанные белые волосы, пушистые волчьи уши с пирсингом и хвост, татуировки на руках и шее. Пахнет пивом, сигаретами и кожаной курткой.",
    "Младший из трёх братьев, вырос в любви и поддержке — в универ пошёл только потому, что родители волновались за его будущее. Не винит их. Но свой почти-диплом юриста ненавидит искренне.",
    "Бунтарь, но законопослушный. Если есть шанс подгадить системе — сделает с удовольствием. Быстро скучает, всегда нужно действие. Уши и хвост не замирают ни на секунду. Клыки заметные, и он это знает — улыбается ими нарочно.",
    "После ссоры с Селен в столовой на глазах у всего колледжа вызвал HEARTBEAT SLAY на versus. Битва — на хэллоуинской вечеринке через две недели."
  ]},
  likes:{ en:"music, parties, beer, vanilla latte, Doritos, workout, Sum 41, Green Day, Limp Bizkit, Foo Fighters",
          ru:"музыка, вечеринки, пиво, ванильный латте, Doritos, качалка, Sum 41, Green Day, Limp Bizkit, Foo Fighters" },
  dislikes:{ en:"classes, authority, rich and annoying people, thinking about a \"normal\" future",
             ru:"пары, начальство, богатые и назойливые, мысли о «нормальном» будущем" },
  quotes:{ en:["ROAR~"], ru:["ROAR~"] } },

{ id:"joe", name:"JAMES 'JOE' SULLIVAN", short:"Joe", age:21, main:true,
  cards:{ st:"https://drive.google.com/drive/folders/18cyXcmnI1vpFSN-6w2Ul4-u5Av1iaXH5",
          janitor:"https://janitorai.com/characters/4a8540ab-e713-4df3-82ea-0013844939cb_character-joe-grumpy-drummer-paw-u" },
  species:{ en:"demi × black dog", ru:"деми × чёрный пёс" },
  major:{ en:"fine arts", ru:"изобразительное искусство" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"drums", ru:"барабаны" }, group:"hickeys", loc:"howl", ink:"red",
  oneLiner:{ en:"One of the most reliable people in the most unreliable band on campus. Without him HICKEYS falls apart. A dog demi-human who acts like a cat.",
             ru:"Самый надёжный человек в самой ненадёжной группе кампуса. Без него HICKEYS развалятся. Пёс, который ведёт себя как кот." },
  bio:{ en:[
    "6'3\", very muscular, gym-built, broad shoulders, warm beige skin, blue eyes, short tousled black hair, pointed black dog ears and a fluffy black tail, a beauty mark under his right eye, tattoos covering hands and neck — fine-line pieces mixed with flash he got drunk with Troy.",
    "Went into art because it was the only major that didn't make him want to claw his own eyes out — and because Troy was going. Friends since childhood: Troy got them into trouble, Joe got them out. Troy dragged him into the band, and Joe discovered that hitting drums was the best therapy money couldn't buy.",
    "At a party he's the guy leaning against the wall with a beer, watching everyone else make fools of themselves with a smirk. Sharp, dry, sarcastic in a way that makes people laugh before they realize they've been insulted. He'll roast you to your face and then carry you home when you're too drunk.",
    "His tail betrays him: it wags when he's genuinely pleased, tucks when he's uncomfortable, goes stiff when he's pissed. He hates this. Drums on every surface. The only thing he cares about is not embarrassing himself on stage."
  ], ru:[
    "6'3\", качковый, широкие плечи, тёплая бежевая кожа, голубые глаза, короткие чёрные волосы, острые чёрные уши и пушистый хвост, родинка под правым глазом, татуировки на руках и шее — часть тонкой линией, часть набита по пьяни с Троем.",
    "Пошёл на арт, потому что это единственный факультет, от которого не хотелось выцарапать себе глаза, — и потому что туда шёл Трой. Дружат с детства: Трой втягивал в неприятности, Джо вытаскивал. Трой затащил его в группу, и Джо обнаружил, что бить по барабанам — лучшая терапия, которую нельзя купить.",
    "На вечеринке — тот, кто стоит у стены с пивом и с ухмылкой смотрит, как остальные позорятся. Сухой, острый, саркастичный так, что ты смеёшься раньше, чем понимаешь, что тебя оскорбили. Обстебает в лицо и донесёт домой, когда ты слишком пьян.",
    "Хвост его выдаёт: виляет, когда он доволен, поджимается, когда неловко, каменеет, когда взбешён. Он это ненавидит. Барабанит по любой поверхности. Единственное, что его волнует — не опозориться на сцене."
  ]},
  likes:{ en:"gym, drums, the band, beer, steak, rock music, dogs, quiet mornings, sleeping in",
          ru:"зал, барабаны, группа, пиво, стейк, рок, собаки, тихие утра, поспать подольше" },
  dislikes:{ en:"loud hyperactive people, milk, cat fur (makes him sneeze), being called \"James\", drama queens",
             ru:"слишком громкие люди, молоко, кошачья шерсть (чихает), когда зовут «Джеймс», драма" },
  quotes:{ en:["If he's mean to you, he likes you. If he's polite, he doesn't care about you at all."],
           ru:["Если он с тобой груб — ты ему нравишься. Если вежлив — ему всё равно."] } },

{ id:"chase", name:"CHASE STAR", short:"Chase", age:25, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × black fox", ru:"деми × чёрный лис" },
  major:{ en:"psychology, PhD", ru:"психология, PhD" }, year:{ en:"PhD student", ru:"аспирант" },
  role:{ en:"guitar", ru:"гитара" }, group:"hickeys", loc:"blackwood", ink:"red",
  oneLiner:{ en:"Older than the whole band, \"experienced\" — but in fact has achieved nothing and keeps himself artificially young. TJ's former producer.",
             ru:"Старше всей группы, с «опытом» — но по факту ничего не добился и искусственно молодится. Бывший продюсер TJ." },
  bio:{ en:[
    "6'1\", lean, messy black hair, pointed fox ears, a black fluffy fox tail, tattoos all over his hands and neck.",
    "Party animal, trickster, cold-minded. Troy treats him like an older brother and respects him deeply. Joe quietly suspects Chase treats the band like a side project — and Joe is wrong.",
    "He produced TJ's early work. Told him \"You changed, TJ\" — meaning \"You stopped being profitable.\" TJ wanted New Sincerity; Chase wanted streams. They don't speak."
  ], ru:[
    "6'1\", худой, растрёпанные чёрные волосы, острые лисьи уши, чёрный пушистый хвост, татуировки на руках и шее.",
    "Тусовщик, трикстер, холодная голова. Трой считает его старшим братом и очень уважает. Джо подозревает, что Чейз относится к группе как к побочному проекту — и ошибается.",
    "Продюсировал ранние работы TJ. Сказал ему «Ты изменился, TJ» — имея в виду «ты перестал приносить деньги». TJ хотел Новую искренность, Чейз хотел стримы. Они не разговаривают."
  ]},
  quotes:{ en:["You changed, TJ."], ru:["Ты изменился, TJ."] } },

{ id:"jackob", name:"JACKOB BLACK", short:"Jackob", age:18, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × hyena", ru:"деми × гиена" },
  major:{ en:"acting", ru:"актёрское" }, year:{ en:"1st year", ru:"1 курс" },
  role:{ en:"bass", ru:"бас" }, group:"hickeys", loc:"howl", ink:"red",
  oneLiner:{ en:"The youngest in the band and the first to respond to any adventure, even the stupidest one. The emotionally unstable hyena bassist.",
             ru:"Самый младший в группе и первый, кто отзывается на любую авантюру, даже самую тупую. Эмоционально нестабильный гиена-басист." },
  bio:{ en:[
    "6'0\", lean and thin, yellow eyes, brown dreadlocks, hyena ears and a brown hyena tail.",
    "Has known Troy since school but is younger — that's why he's in the band in his first year. Sarcastic, always looking for trouble, loves to laugh, smile and tease. Always pulls stupid faces in photos.",
    "His girlfriend Bella left him for a demi-human bat named Edward."
  ], ru:[
    "6'0\", худой, жёлтые глаза, коричневые дреды, уши и хвост гиены.",
    "Знает Троя со школы, но младше — поэтому в группе уже с первого курса. Саркастичный, вечно ищет неприятности, любит смеяться, улыбаться и дразнить. На любом фото корчит тупые рожи.",
    "Его девушка Белла ушла к деми-летучей мыши по имени Эдвард."
  ]},
  quotes:{ en:[], ru:[] } },

/* ---------- HEARTBEAT SLAY ---------- */
{ id:"selene", name:"SELENE DUPRÉ", short:"Selene", age:20, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × lioness", ru:"деми × львица" },
  major:{ en:"acting", ru:"актёрское" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"lead vocals, leader", ru:"лид-вокал, лидер" }, group:"hbs", loc:"purr", ink:"violet",
  oneLiner:{ en:"The daughter of wealthy parents who sponsor her creativity. High self-esteem, cocky, can act arrogant. Trying to escape the golden cage.",
             ru:"Дочь богатых родителей, которые спонсируют её творчество. Высокая самооценка, дерзость, может быть высокомерной. Пытается вырваться из золотой клетки." },
  bio:{ en:[
    "5'7\", thin, blue eyes, long blonde hair and blonde lioness fur, cat ears and a blonde lioness tail.",
    "Her conflict is to prove she's worth something without her parents' money. She gets TJ's New Sincerity thesis; there's mutual respect between them.",
    "She and Troy constantly trade jabs. Their argument in the cafeteria is what started the versus."
  ], ru:[
    "5'7\", тонкая, голубые глаза, длинные светлые волосы, кошачьи уши и львиный хвост.",
    "Её конфликт — доказать, что она чего-то стоит без родительских денег. Понимает тезис Новой искренности TJ; между ними взаимное уважение.",
    "С Троем постоянно обмениваются колкостями. Ссора с ним в столовой и стала причиной versus."
  ]},
  quotes:{ en:[], ru:[] } },

{ id:"veronica", name:"VERONICA MILLER", short:"Veronica", age:19, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × bat", ru:"деми × летучая мышь" },
  major:{ en:"law", ru:"право" }, year:{ en:"2nd year", ru:"2 курс" },
  role:{ en:"bass, backing vocals", ru:"бас, бэк-вокал" }, group:"hbs", loc:"purr", ink:"violet",
  oneLiner:{ en:"A tomboy raised by a single father in a family of boys. The toughness is a defense mechanism. Boy stuff is cool, girly stuff is ew.",
             ru:"Пацанка, выращенная отцом-одиночкой в семье пацанов. Брутальность — защитный механизм. Пацанское — круто, девчачье — фу." },
  bio:{ en:[
    "5'8\", thin, blue eyes, long black hair and black bat fur, bat ears, no tail.",
    "Cocky, trickster, funny, hot-headed. Her challenge to the world is armor.",
    "Not close with Troy, but they smoke together and share news. Joe finds her bratty and exhausting — grudging mutual respect buried under layers of irritation."
  ], ru:[
    "5'8\", худая, голубые глаза, длинные чёрные волосы, уши летучей мыши, хвоста нет.",
    "Дерзкая, трикстер, смешная, вспыльчивая. Её вызов миру — броня.",
    "С Троем не близки, но курят вместе и делятся новостями. Джо считает её капризной и утомительной — под слоями раздражения зарыто взаимное уважение."
  ]},
  quotes:{ en:[], ru:[] } },

{ id:"sandy", name:"QIAN 'SANDY' LIU", short:"Sandy", age:20, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × white fox", ru:"деми × белая лиса" },
  major:{ en:"medicine", ru:"медицина" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"guitar, backing vocals", ru:"гитара, бэк-вокал" }, group:"hbs", loc:"purr", ink:"violet",
  oneLiner:{ en:"Everybody calls her Sandy, Sunny or Sunshine. She actually sings better than Selene — but is always second. Shy and insecure, even though her sister tries to support her.",
             ru:"Все зовут её Sandy, Sunny или Sunshine. Поёт лучше Селен — но всегда на вторых ролях. Стеснительная и неуверенная, хотя сестра пытается её поддерживать." },
  bio:{ en:[
    "5'3\", skinny, grey eyes, long pink-dyed hair and white fox fur, fox ears and a fluffy fox tail.",
    "Shy, good, lawful, modest, smiley, soft-hearted. Jin Liu's twin sister. Their parents love her more than her sister.",
    "Befriending Shelly from the Scratching Post. Troy enjoys embarrassing her. Joe can't decide whether her shyness is adorable or pathetic."
  ], ru:[
    "5'3\", худенькая, серые глаза, длинные розовые волосы и белый лисий мех, лисьи уши и пушистый хвост.",
    "Застенчивая, добрая, законопослушная, скромная, улыбчивая, мягкосердечная. Сестра-близнец Джин. Родители любят её больше, чем сестру.",
    "Дружит с Шелли из Scratching Post. Трой обожает её смущать. Джо не может решить, её застенчивость — милая или жалкая."
  ]},
  quotes:{ en:[], ru:[] } },

{ id:"jin", name:"JIN LIU", short:"Jin", age:20, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × black fox", ru:"деми × чёрная лиса" },
  major:{ en:"[[—]]", ru:"[[—]]" }, year:{ en:"2nd year", ru:"2 курс" },
  role:{ en:"drums, backing vocals", ru:"барабаны, бэк-вокал" }, group:"hbs", loc:"purr", ink:"violet",
  oneLiner:{ en:"Had to repeat a year, so she's a year behind her twin at university. The black sheep of a family that praises her sister. She loves her sister anyway.",
             ru:"Второгодница, на год отстаёт от сестры-близнеца. Паршивая овца семьи, которая восхваляет её сестру. Сестру при этом любит." },
  bio:{ en:[
    "5'3\", skinny, blue-grey eyes, long black-dyed hair and black fox fur, fox ears and a fluffy black fox tail.",
    "Rough, straightforward, rebel, sarcastic, nihilist. Repeated a year of school due to poor grades. If you give her orders, she'll do everything wrong.",
    "Troy and Joe find her gloomy vibe depressing.",
        "Rumor has it she had a thing with Chase. Other rumors say Jackob plans to make a move on her — just for form's sake, not because he likes cold women. Of course."], ru:[
    "5'3\", худенькая, сине-серые глаза, длинные чёрные волосы и чёрный лисий мех, лисьи уши и чёрный пушистый хвост.",
    "Грубая, прямая, бунтарка, саркастичная, нигилистка. Осталась на второй год из-за оценок. Если отдать ей приказ — сделает всё наоборот.",
    "Трой и Джо считают её мрачность угнетающей."
  ]},
  quotes:{ en:[], ru:[,
        "Ходят слухи, что у неё были мутки с Chase. Ходят другие слухи, что Jackob планирует к ней подкатить — просто для проформы, а не потому что ему нравятся холодные женщины. Конечно."] } },

/* ---------- TJ ---------- */
{ id:"tj", name:"TJ", short:"TJ", age:23, main:true, cards:{ st:"", janitor:"" },
  species:{ en:"demi × Doberman", ru:"деми × доберман" },
  major:{ en:"Business Analytics", ru:"бизнес-аналитика" }, year:{ en:"4th year", ru:"4 курс" },
  role:{ en:"solo", ru:"соло" }, group:"tj", loc:"yard", ink:"orange",
  oneLiner:{ en:"The Self-Crowned Demigod. If no one is going to crown you, crown yourself. The persona is an amplification, not a lie.",
             ru:"Самокоронованный Полубог. Если никто не собирается тебя короновать — коронуй себя сам. Персона — усиление, а не ложь." },
  bio:{ en:[
    "6'3\", lean and athletic with defined arms, ebony skin, deep amber-brown eyes, short black hair with a clean fade and long naturally curly strands on top, pointed cropped Doberman ears that swivel to track sound across a room, a Doberman tail. A human face — sharp, angular, aristocratic; canines show when he grins. Slight scarring on his hands from manual labor. A single heavy silver chain he never takes off. A Rolex.",
    "Born in Inglewood to a single mother of Latina descent; the father, an African-American Doberman demi, was never present. His mother cleaned houses for wealthy families in Bel Air and raised him with a network of relatives. Childhood was economic precarity braided with radical warmth. Discovered rap as a teenager, broke his jaw at 17 and was back on stage in three weeks. Wrote \"DEMIGOD\", self-produced and self-released everything until the industry came calling, then built his own label rather than sign. Now: gold records, a 40-foot mural of him on Figueroa Boulevard, sold-out tours, and the same insomnia he had at thirteen.",
    "Full name Tyler Joaquin Rodríguez; TJ on every release. Fourth-year Business Analytics at PAW U — expelled once, came back after making a name for himself. Despite the job, he regularly attends classes. Parks the Lambo on the lawn and treats San Soleil like his backyard.",
    "Reads philosophy and quotes it mid-conversation without noticing it intimidates people: Kierkegaard, then \"no shit\". Naruto is his personal gospel, the orphan-to-Hokage pipeline. Plays the Sims, Kojima and Mario Kart genuinely, not performatively. Eats food he doesn't like because he went hungry as a kid. When insomnia wins he drives PCH alone between 1 and 4 AM, counting things under his breath, and sometimes ends up on his mother's porch in Inglewood by dawn. Ears pin back when he's vulnerable and point forward when he's alert; he talks with his hands and hides them in his pockets when nervous. Naruto-runs when he thinks nobody's watching. Calls everyone \"doggo\"."
  ], ru:[
    "6'3\", поджарый, атлетичный, с рельефными руками, тёмная кожа, глубокие янтарно-карие глаза, короткие чёрные волосы с чистым фейдом и длинными кудрявыми прядями сверху, купированные доберманьи уши, которые поворачиваются на звук через всю комнату, доберманий хвост. Лицо человеческое — резкое, угловатое, аристократичное; когда ухмыляется, видны клыки. Лёгкие шрамы на руках от физической работы. Одна тяжёлая серебряная цепь, которую он не снимает. Rolex.",
    "Родился в Инглвуде у матери-одиночки латиноамериканского происхождения; отец, афроамериканец-доберман, в жизни не присутствовал. Мать убирала дома богатых семей в Бель-Эйр и растила его вместе с сетью родственников. Детство — экономическая шаткость, сплетённая с радикальным теплом. Рэп открыл подростком, в семнадцать сломал челюсть и через три недели вернулся на сцену. Написал «DEMIGOD», всё продюсировал и выпускал сам, пока индустрия не пришла сама, — и тогда построил свой лейбл вместо того, чтобы подписаться. Сейчас: золотые пластинки, сорокафутовый мурал с его лицом на Figueroa, солд-ауты и та же бессонница, что в тринадцать.",
    "Полное имя Тайлер Хоакин Родригес; на всех релизах — TJ. Четвёртый курс бизнес-аналитики PAW U — один раз отчислен, вернулся, когда сделал себе имя. Несмотря на работу, регулярно ходит на пары. Паркует Lambo на газоне и обращается с San Soleil как со своим двором.",
    "Читает философию и цитирует её посреди разговора, не замечая, что это давит на людей: Кьеркегор, потом «no shit». Наруто — личное евангелие, путь сироты к Хокаге. В Sims, Кодзиму и Mario Kart играет по-настоящему, не напоказ. Ест еду, которую не любит, потому что в детстве голодал. Когда бессонница побеждает, ездит по PCH один между часом и четырьмя ночи, считая что-нибудь под нос, и иногда к рассвету оказывается на крыльце у матери в Инглвуде. Уши прижимаются, когда он уязвим, и торчат вперёд, когда насторожен; говорит руками, а когда нервничает, прячет их в карманы. Бегает как Наруто, если думает, что никто не видит. Всех зовёт «пёся»."
  ]},
  likes:{ en:"philosophy, Naruto, the Sims, Kojima, Mario Kart, sunsets over the Pacific, people who have their own inner world, tacos at midnight, the craft of language itself",
          ru:"философия, Наруто, Sims, Кодзима, Mario Kart, закаты над Тихим, люди со своим внутренним миром, тако в полночь, само ремесло языка" },
  dislikes:{ en:"inauthenticity in all forms, labels that treat artists as products, controlling partners, the demi-human tier hierarchy, empty apartments at night, milk",
             ru:"неискренность в любой форме, лейблы, для которых артист — продукт, контролирующие партнёры, иерархия деми-людей, пустые квартиры по ночам, молоко" },
  quotes:{ en:["Believe it.","For real for real."], ru:["Believe it.","For real for real."] } },

/* ---------- NPC ---------- */
{ id:"bea", name:"BEA", short:"Bea", age:21, main:false,
  species:{ en:"demi × cow", ru:"деми × корова" },
  major:{ en:"biology", ru:"биофак" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"president of the HICKEYS fan club", ru:"президент фан-клуба HICKEYS" }, group:null, loc:"howl", ink:"violet",
  oneLiner:{ en:"HICKEYS' biggest fan and president of their fan club. Stubborn, tall, hot-headed — a real punk.",
             ru:"Главная фанатка HICKEYS и президент их фан-клуба. Упёртая, высокая, вспыльчивая — настоящий панк." },
  bio:{ en:["Friends with Troy, Joe and Jackob. Helps the guys out backstage."],
        ru:["Дружит с Троем, Джо и Джейкобом. Помогает ребятам на бэкстейджах."] },
  quotes:{ en:[,
        "Friends with Veronica — they keep ribbing each other about Bea not being an HBS fan."], ru:[
        "Дружит с Veronica — периодически подкалывают друг друга, что Bea не фанатка HBS."] } },

{ id:"agi", name:"AGI", short:"Agi", age:20, main:false,
  species:{ en:"demi × wolf", ru:"деми × волчица" },
  major:{ en:"mythology (transferred from 2nd-year history)", ru:"мифология (перевелась со 2 курса истории)" }, year:{ en:"1st year", ru:"1 курс" },
  role:{ en:"backyard resident. MY TREE", ru:"обитательница заднего двора. МОЁ ДЕРЕВО" }, group:null, loc:null, ink:"green",
  oneLiner:{ en:"Sleeps under a tree in the backyard (MY TREE), gets into fights, can't stand crowds or noise. The infirmary is the second-best place to find her.",
             ru:"Спит под деревом на заднем дворе (МОЁ ДЕРЕВО), лезет в драки, не выносит толпу и шум. Медпункт — второе место, где её можно встретить." },
  bio:{ en:["Also answers to Ag, Agatik and «Bashennaya». Transferred to first-year mythology from second-year history.",
            "Mostly seen with Nico Ferrari — her boyfriend. They're soulmates.",
            "Avoids Troy because of his pushy socializing and his ULT-level loudness. Troy thinks they're friends and she's just playing hide-and-seek."],
        ru:["Отзывается также на Аг, Агатик и «Башенная». Перевелась на первый курс мифологии со второго курса истории.",
            "В основном в компании Нико Феррари — это её парень, они соулмейты.",
            "Избегает Троя из-за навязчивого общения и его УЛЬТА громкости. Трой думает, что они друзья и она просто играет в прятки."] },
  quotes:{ en:["MY TREE."], ru:["МОЁ ДЕРЕВО."] } },

{ id:"nico", name:"NICO FERRARI", short:"Nico", age:24, main:false,
  species:{ en:"human", ru:"человек" },
  major:{ en:"journalism", ru:"журналистика" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"local self-proclaimed detective", ru:"местный самопровозглашённый детектив" }, group:null, loc:null, ink:"green",
  oneLiner:{ en:"Agi's boyfriend. Cynical, passionate, blunt, protective of Agi.",
             ru:"Парень Аги. Циничный, страстный, прямолинейный, защищает Аги." },
  bio:{ en:["Switches to Italian when emotional. Military-level discipline. Has a pet crow."],
        ru:["Когда эмоционирует, переходит на итальянский. Дисциплинирован по-военному. У него есть ручная ворона."] },
  quotes:{ en:[], ru:[] } },

{ id:"shelly", name:"SHELLY LAMB", short:"Shelly", age:21, main:false,
  species:{ en:"demi × sheep", ru:"деми × овца" },
  major:{ en:"management", ru:"менеджмент" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"baker and barista at the Scratching Post", ru:"пекарь и бариста в Scratching Post" }, group:null, loc:"scratching-post", ink:"blue",
  oneLiner:{ en:"Easy to impress. Loves HBS, doramas, cupcakes and sunny days.", ru:"Её легко впечатлить. Любит HBS, дорамы, капкейки и солнечные дни." },
  bio:{ en:["Befriending Sandy. Has a brother who looks like a sister.",
        "A huge HBS fan and a member of their fan club; secretly, madly admires Selene. At TJ's request she sometimes drives her pastries to his mother Camila in Inglewood."], ru:["Дружит с Sandy. Есть брат, который выглядит как сестра.",
        "Большая фанатка HBS и член их фан-клуба; тайно безумно восхищается Selene. По просьбе TJ иногда возит свою выпечку его матери Камиле в Инглвуд."] },
  quotes:{ en:[], ru:[] } },

{ id:"socks", name:"SOCRATES 'SOCKS' LAMB", short:"Socks", age:20, main:false,
  species:{ en:"demi × sheep", ru:"деми × барашек" },
  major:{ en:"design", ru:"дизайн" }, year:{ en:"2nd year", ru:"2 курс" },
  role:{ en:"president of the HBS fan club", ru:"президент фан-клуба HBS" }, group:null, loc:null, ink:"violet",
  oneLiner:{ en:"Shelly's younger brother. A bratty guy. Looks feminine and milks it.",
             ru:"Младший брат Шелли. Вредина. Выглядит женственно и вовсю этим пользуется." },
  bio:{ en:["Loves plushies, sending memes and Chinese web novels. Sometimes goes full femboy."],
        ru:["Любит плюшевые игрушки, кидать мемы и китайские веб-новеллы. Иногда выходит в полном фембой-образе."] },
  quotes:{ en:[], ru:[] } },

{ id:"denny", name:"DANA 'DENNY' JELLY", short:"Denny", age:20, main:false,
  species:{ en:"demi × possum", ru:"деми × опоссум" },
  major:{ en:"comp-sci", ru:"компьютерные науки" }, year:{ en:"3rd year", ru:"3 курс" },
  role:{ en:"HICKEYS' pyrotechnics", ru:"пиротехника HICKEYS" }, group:null, loc:"howl", ink:"red",
  oneLiner:{ en:"Local prankster and hacker. Likes garbage, screaming and pretending to be dead.", ru:"Местный пранкер и хакер. Любит мусор, орать и притворяться мёртвой." },
  bio:{ en:["Befriends Troy and Jackob. Helps HICKEYS with pyrotechnics on stage. Friends with Veronica."], ru:["Дружит с Троем и Джейкобом. Делает HICKEYS пиротехнику на сцене. Дружит с Veronica."] },
  quotes:{ en:[], ru:[] } },

{ id:"tadhg", name:"TADHG CHOLMONDELEY", short:"Tadhg", age:23, main:false,
  species:{ en:"demi × black cat", ru:"деми × чёрный кот" },
  major:{ en:"fine arts", ru:"изобразительное искусство" }, year:{ en:"4th year", ru:"4 курс" },
  role:{ en:"carries a sword everywhere", ru:"везде ходит с мечом" }, group:null, loc:null, ink:"blue",
  oneLiner:{ en:"Smokes heavily. Has his own sword. Like, yeah, the dude carries a fucking sword with him everywhere.",
             ru:"Курит как паровоз. У него есть свой меч. Ну да, этот чувак реально везде таскает с собой грёбаный меч." },
  bio:{ en:["Pronounced \"Tyge Chumley\". Hates it when people mispronounce his name.",
            "Likes Warhammer 40K, D&D and all that geek stuff."],
        ru:["Читается «Тайг Чамли». Ненавидит, когда его имя произносят неправильно.",
            "Любит Warhammer 40K, D&D и всю эту гиковскую фигню."] },
  quotes:{ en:[], ru:[] } },

{ id:"taylor", name:"TAYLOR VAN DER WOODSEN", short:"Taylor", age:22, main:false,
  species:{ en:"demi × snow leopard", ru:"деми × снежный барс" },
  major:{ en:"fashion photography", ru:"fashion-фотография" }, year:{ en:"—", ru:"—" },
  role:{ en:"head of PAW U GOSSIP", ru:"глава PAW U GOSSIP" }, group:null, loc:"yard", ink:"blue",
  oneLiner:{ en:"Royal-blooded ancestors. Daughter of a wealthy magazine owner. Abuses her apex status. Knows every gossip on campus.",
             ru:"Королевская кровь в родословной. Дочь владелицы богатого журнала. Злоупотребляет апекс-статусом. Знает каждую сплетню на кампусе." },
  bio:{ en:["Some of her own secrets may be used against her.",
        "Once tried to blackmail TJ with a \"scandalous\" PAW U GOSSIP piece. He laughed and did nothing. She has resented him ever since; he couldn't care less."], ru:["Некоторые из её собственных секретов могут быть использованы против неё.",
        "Однажды попыталась шантажировать TJ «скандальной» публикацией в PAW U GOSSIP. Тот рассмеялся и ничего не предпринял. С тех пор она его не выносит; ему всё равно."] },
  quotes:{ en:[], ru:[] } }
],

/* ========================== ЛОКАЦИИ ========================== */
locations:[
{ id:"san-soleil", name:"San Soleil", kind:{ en:"city", ru:"город" }, ink:"orange",
  oneLiner:{ en:"A resort city between Los Angeles and San Diego. \"Without Sun\" in French — a local in-joke about the shadows under a perpetually sunny facade.",
             ru:"Курортный город между Лос-Анджелесом и Сан-Диего. По-французски «без солнца» — местная шутка про тени под вечно солнечным фасадом." },
  bio:{ en:["The coast and the hills: pristine beaches, boutiques, multi-million dollar mansions, influencers. The natural habitat of HEARTBEAT SLAY.",
            "Away from the coastline is the \"real\" San Soleil: older neighborhoods, strip malls, dive bars. Where service workers, artists and PAW U students can actually afford to live. The spirit of HICKEYS.",
            "The divide between those two cities is the battleground of the two bands."],
        ru:["Побережье и холмы — пляжи, бутики, особняки за миллионы, инфлюенсеры. Естественная среда HEARTBEAT SLAY.",
            "Вдали от берега — «настоящий» San Soleil: старые районы, стрип-моллы, дайв-бары. Здесь живут официанты, художники и студенты PAW U. Дух HICKEYS.",
            "Разрыв между этими двумя городами и есть поле битвы двух групп."] } },
{ id:"yard", name:"The Yard", kind:{ en:"campus", ru:"кампус" }, ink:"orange",
  oneLiner:{ en:"The main lawn. The hub of student life: sunbathing, jam sessions, club rallies. Where TJ parks his Lambo.",
             ru:"Главный газон. Центр студенческой жизни: загорают, джемят, митингуют. Здесь TJ паркует Lambo." },
  bio:{ en:["Always buzzing, always something happening."], ru:["Всегда шумно и всегда что-то происходит."] } },
{ id:"howl", name:"The Howl", kind:{ en:"campus", ru:"кампус" }, ink:"red",
  oneLiner:{ en:"The student union: food court, PAW U Radio, common areas that are constantly loud and chaotic. HICKEYS' turf.",
             ru:"Студенческий союз: фудкорт, радио PAW U и общие зоны, где всегда громко и хаотично. Территория HICKEYS." },
  bio:{ en:["The Howl crowd sees the Purr crowd as stuck-up and elitist."], ru:["Те, кто тусуется в Howl, считают публику Purr зазнайками и элитой."] } },
{ id:"purr", name:"The Purr", kind:{ en:"campus", ru:"кампус" }, ink:"violet",
  oneLiner:{ en:"The main library. Quiet, soundproof study pods, luxurious seating on the upper floors. HEARTBEAT SLAY's turf.",
             ru:"Главная библиотека. Тишина, звукоизолированные кабинки, роскошные кресла на верхних этажах. Территория HEARTBEAT SLAY." },
  bio:{ en:["The Purr crowd sees the Howl students as chaotic and immature. It's not about buildings — it's a cultural war."],
        ru:["Публика Purr считает Howl хаотичными и незрелыми. Это не про здания — это культурная война."] } },
{ id:"blackwood", name:"Blackwood Hall", kind:{ en:"campus", ru:"кампус" }, ink:"red",
  oneLiner:{ en:"The old, slightly dilapidated music and arts building. The best and most soundproof practice rooms, constantly fought over.",
             ru:"Старый обшарпанный корпус музыки и искусств. Лучшие и самые звукоизолированные репетиционные, за которые постоянно дерутся." },
  bio:{ en:["The walls are covered in years of graffiti and band stickers. The versus will happen here."],
        ru:["Стены покрыты годами граффити и стикеров групп. Здесь пройдёт versus."] } },
{ id:"grotto", name:"The Grotto", kind:{ en:"campus", ru:"кампус" }, ink:"green",
  oneLiner:{ en:"A hidden, off-the-books student lounge in the basement of Blackwood Hall. Word-of-mouth only.",
             ru:"Скрытый неофициальный лаундж в подвале Blackwood Hall. Доступ только по сарафану." },
  bio:{ en:["Neutral ground. HEARTBEAT SLAY and HICKEYS can occasionally be found here in a tense, forced truce."],
        ru:["Нейтральная территория. Здесь HEARTBEAT SLAY и HICKEYS иногда сидят в напряжённом вынужденном перемирии."] } },
{ id:"doghouse", name:"The Doghouse", kind:{ en:"off campus", ru:"за кампусом" }, ink:"red",
  oneLiner:{ en:"The grungy bar for the rock and alternative crowd. Where HICKEYS might play an impromptu set.",
             ru:"Грязный бар для рок- и альтернативной публики. Здесь HICKEYS могут сыграть внезапный сет." },
  bio:{ en:[], ru:[] } },
{ id:"scratching-post", name:"The Scratching Post", kind:{ en:"off campus", ru:"за кампусом" }, ink:"violet",
  oneLiner:{ en:"A trendy, expensive cafe near campus: artisanal drinks and aesthetic. HEARTBEAT SLAY's hangout.",
             ru:"Модное дорогое кафе рядом с кампусом: авторские напитки и эстетика. Тусовка HEARTBEAT SLAY." },
  bio:{ en:["Shelly bakes here and works the counter."], ru:["Шелли печёт здесь и стоит за стойкой."] } },
{ id:"greek-row", name:"Greek Row", kind:{ en:"campus", ru:"кампус" }, ink:"orange",
  oneLiner:{ en:"Wild themed parties at the fraternities and sororities. Beach bonfires in San Soleil on weekends.",
             ru:"Дикие тематические вечеринки братств и сестринств. Пляжные костры в San Soleil — на выходных." },
  bio:{ en:["[[Where exactly is the Halloween party?]]"], ru:["[[Хэллоуинская вечеринка — где именно?]]"] } },
{ id:"inglewood", name:"Inglewood", kind:{ en:"Los Angeles", ru:"Лос-Анджелес" }, ink:"orange",
  oneLiner:{ en:"Where TJ is from. The apartment on Figueroa with a milk crate for a table — and a 40-foot mural on the same boulevard.",
             ru:"Откуда TJ. Квартира на Figueroa с ящиком из-под молока вместо стола — и сорокафутовый мурал на том же бульваре." },
  bio:{ en:["Camila lives here. TJ sometimes ends up on her porch by dawn when the insomnia wins."],
        ru:["Здесь живёт Камила. Сюда TJ иногда приезжает к рассвету, когда бессонница выигрывает."] } }
],

/* ========================== СВЯЗИ ========================== */
links:[
  {a:"troy",   b:"selene",   label:{ en:"trade jabs. he has a crush on her",            ru:"обмениваются колкостями. он в неё влюблён" }},
  {a:"troy",   b:"joe",      label:{ en:"best friends since childhood, dormmates",       ru:"лучшие друзья с детства, соседи по общаге" }},
  {a:"troy",   b:"chase",    label:{ en:"like an older brother",                        ru:"как старший брат" }},
  {a:"troy",   b:"jackob",   label:{ en:"first to answer any adventure",                ru:"первый на любую авантюру" }},
  {a:"troy",   b:"veronica", label:{ en:"smoke together. law classmates",               ru:"курят вместе. оба на юрфаке" }},
  {a:"troy",   b:"sandy",    label:{ en:"enjoys embarrassing her",                      ru:"обожает её смущать" }},
  {a:"joe",    b:"jackob",   label:{ en:"annoying little brother",                      ru:"надоедливый младший брат" }},
  {a:"joe",    b:"chase",    label:{ en:"quietly suspects him. wrong",                   ru:"тихо подозревает. ошибается" }},
  {a:"joe",    b:"tj",       label:{ en:"sees through the Demigod. TJ likes that",       ru:"видит сквозь Полубога. TJ это нравится" }},
  {a:"tj",     b:"chase",    label:{ en:"\"you changed, TJ\". they don't speak",         ru:"«ты изменился, TJ». не разговаривают" }},
  {a:"tj",     b:"selene",   label:{ en:"mutual respect. she gets New Sincerity",        ru:"взаимное уважение. она понимает New Sincerity" }},
  {a:"sandy",  b:"jin",      label:{ en:"twins. their parents love Sandy more",         ru:"близнецы. родители любят Sandy больше" }},
  {a:"sandy",  b:"shelly",   label:{ en:"friends",                                      ru:"дружат" }},
  {a:"denny",  b:"troy",     label:{ en:"pyrotechnics",                                 ru:"пиротехника" }},
  {a:"denny",  b:"jackob",   label:{ en:"pyrotechnics",                                 ru:"пиротехника" }},
  {a:"bea",    b:"troy",     label:{ en:"friends. runs the fan club",                    ru:"дружат. ведёт фан-клуб" }},
  {a:"bea",    b:"joe",      label:{ en:"friends. backstage help",                      ru:"дружат. помогает на бэкстейдже" }},
  {a:"bea",    b:"jackob",   label:{ en:"friends. backstage help",                      ru:"дружат. помогает на бэкстейдже" }},
  /* --- внутри HICKEYS: все пары --- */
  {a:"chase",  b:"jackob",   label:{ en:"bandmates. guitar and bass",                      ru:"в одной группе. гитара и бас" }},
  /* --- внутри HBS: все пары --- */
  {a:"selene", b:"veronica", label:{ en:"bandmates. the leader and her bassist",           ru:"в одной группе. лидер и её басистка" }},
  {a:"selene", b:"sandy",    label:{ en:"bandmates. Sandy sings better — and stays second", ru:"в одной группе. Sandy поёт лучше — и остаётся второй" }},
  {a:"selene", b:"jin",      label:{ en:"bandmates. the leader and her drummer",           ru:"в одной группе. лидер и её барабанщица" }},
  {a:"veronica",b:"sandy",   label:{ en:"bandmates",                                       ru:"в одной группе" }},
  {a:"veronica",b:"jin",     label:{ en:"bandmates. bass and drums",                       ru:"в одной группе. бас и барабаны" }},
  /* --- между группами: из карточек Троя и Джо --- */
  {a:"troy",   b:"jin",      label:{ en:"finds her gloomy vibe depressing",               ru:"её мрачность его угнетает" }},
  {a:"joe",    b:"selene",   label:{ en:"annoys him on principle. what really bothers him is Troy simping for her", ru:"раздражает его из принципа. по-настоящему бесит, как Трой перед ней стелется" }},
  {a:"joe",    b:"veronica", label:{ en:"bratty and exhausting. grudging respect under the irritation", ru:"капризная и утомительная. под раздражением — неохотное уважение" }},
  {a:"joe",    b:"sandy",    label:{ en:"her shyness is adorable or pathetic, depending on his mood", ru:"её застенчивость — милая или жалкая, смотря по настроению" }},
  {a:"joe",    b:"jin",      label:{ en:"fellow drummer. she gives him nothing to work with", ru:"коллега-барабанщица. работать не с чем" }},
  /* --- между группами: соперники на versus --- */
  {a:"chase",  b:"selene",   label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"chase",  b:"veronica", label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"chase",  b:"sandy",    label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"chase",  b:"jin",      label:{ en:"rumor has it they had a thing",                   ru:"ходят слухи, что у них были мутки" }},
  {a:"jackob", b:"selene",   label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"jackob", b:"veronica", label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"jackob", b:"sandy",    label:{ en:"rival bands. the Halloween versus",               ru:"соперники. versus на Хэллоуин" }},
  {a:"jackob", b:"jin",      label:{ en:"rumor has it he plans to make a move — just for form's sake, not because he likes cold women (of course)", ru:"ходят слухи, что планирует подкатить — просто для проформы, а не потому что ему нравятся холодные женщины (конечно)" }},
  /* --- NPC --- */
  {a:"shelly", b:"tj",       label:{ en:"at his request she sometimes drives pastries to his mother in Inglewood", ru:"по его просьбе иногда возит выпечку его матери в Инглвуд" }},
  {a:"shelly", b:"selene",   label:{ en:"in the HBS fan club. secretly, madly admires her", ru:"в фан-клубе HBS. тайно безумно ею восхищается" }},
  {a:"bea",    b:"veronica", label:{ en:"friends. they rib each other about Bea not being an HBS fan", ru:"дружат. подкалывают друг друга, что Bea не фанатка HBS" }},
  {a:"taylor", b:"tj",       label:{ en:"tried to blackmail him with a \"scandalous\" GOSSIP piece. he laughed and did nothing. she resents him since; he doesn't care", ru:"пыталась шантажировать «скандальной» публикацией в GOSSIP. он рассмеялся и ничего не сделал. с тех пор она его не выносит, ему всё равно" }},
  {a:"denny",  b:"veronica", label:{ en:"friends", ru:"дружат" }},
  {a:"agi",    b:"troy",     label:{ en:"avoids him. he thinks they are friends and she is playing hide-and-seek", ru:"избегает его. он думает, что они друзья и она играет в прятки" }},
  {a:"troy",   b:"tj",       label:{ en:"respects his authenticity, knows the band's stuff. hallway nods", ru:"уважает за подлинность, знает их материал. кивки в коридоре" }},
  {a:"taylor", b:"selene",   label:{ en:"rivals, but with respect. Selene may know Taylor's secret", ru:"соперничают, но уважают друг друга. Селен, возможно, знает секрет Тейлор" }},
  /* --- новые NPC: Нико, Сокс, Тайг --- */
  {a:"shelly", b:"socks",    label:{ en:"siblings. he's her younger brother",          ru:"брат и сестра. он младший" }},
  {a:"agi",    b:"nico",     label:{ en:"dating. soulmates",                           ru:"встречаются. соулмейты" }},
  {a:"nico",   b:"denny",    label:{ en:"tolerates her",                               ru:"терпит её" }},
  {a:"nico",   b:"taylor",   label:{ en:"business relationship",                       ru:"деловые отношения" }},
  {a:"nico",   b:"joe",      label:{ en:"sometimes drink together",                    ru:"иногда выпивают вместе" }},
  {a:"tadhg",  b:"denny",    label:{ en:"friends. he has a secret crush on her",       ru:"дружат. у него тайный краш в неё" }},
  {a:"socks",  b:"denny",    label:{ en:"friends",                                     ru:"дружат" }},
  {a:"sandy",  b:"socks",    label:{ en:"friends",                                     ru:"дружат" }},
  {a:"bea",    b:"denny",    label:{ en:"friends",                                     ru:"дружат" }},
  {a:"denny",  b:"agi",      label:{ en:"friends",                                     ru:"дружат" }},
  {a:"socks",  b:"bea",      label:{ en:"mock feud. actually pals",                    ru:"шуточно враждуют. на самом деле приятели" }},
  {a:"socks",  b:"jackob",   label:{ en:"torments him and sends him into femboy panic", ru:"изводит и разводит на фембой-панику" }},
  {a:"nico",   b:"tj",       label:{ en:"private investigations for him. pals",        ru:"иногда ведёт для него частные расследования. приятели" }},
  {a:"nico",   b:"selene",   label:{ en:"private investigations for her. she pays on time but looks down on him for being human", ru:"иногда ведёт для неё частные расследования. платит исправно, но пренебрежительна: он человек" }},
  {a:"jin",    b:"agi",      label:{ en:"pals. sometimes hang out in silence",         ru:"приятельницы. иногда молча тусуются вместе" }},
  {a:"jin",    b:"nico",     label:{ en:"pals. sometimes hang out in silence",         ru:"приятели. иногда молча тусуются вместе" }},
  {a:"bea",    b:"sandy",    label:{ en:"keeps hitting on her. Sandy doesn't get it",  ru:"постоянно смущает её подкатами. Сэнди не считывает" }},
  {a:"tadhg",  b:"nico",     label:{ en:"friends. Tadhg won't admit it",               ru:"дружат. Тадж этого не признаёт" }},
  {a:"tadhg",  b:"agi",      label:{ en:"friends. Tadhg won't admit it",               ru:"дружат. Тадж этого не признаёт" }},
  {a:"tadhg",  b:"jackob",   label:{ en:"fencing sometimes. Jackob can't fence",       ru:"иногда фехтуют. Джейкоб не умеет" }},
  {a:"tadhg",  b:"troy",     label:{ en:"fencing sometimes. Troy can't fence",         ru:"иногда фехтуют. Трой не умеет" }},
  {a:"tadhg",  b:"socks",    label:{ en:"torments him with Warhammer lore: he's already a femboy, after all", ru:"мучает его лором Вархаммера: он же уже фембой" }},
  {a:"selene", b:"denny",    label:{ en:"Denny annoys her. calls her a trash rat",     ru:"Денни её раздражает. зовёт её помойной крысой" }},
  {a:"shelly", b:"tadhg",    label:{ en:"he's her regular. she pranks him with extra milk in his coffee", ru:"он её постоянный клиент. шутки ради доливает ему в кофе больше молока" }},
  {a:"shelly", b:"denny",    label:{ en:"pals. the best matcha. Denny begs for popping candy in everything", ru:"приятельницы. лучшая матча. Денни уговаривает добавлять взрывную карамель во всё" }},
  {a:"taylor", b:"jackob",   label:{ en:"thinks he's a pathetic trash animal",         ru:"считает его жалким помойным животным" }},
  {a:"taylor", b:"chase",    label:{ en:"maybe had a thing",                           ru:"возможно, что-то было" }},
  {a:"veronica",b:"tadhg",   label:{ en:"thrilled by his fencing, begs him to teach her. wants to play D&D with him", ru:"в восторге от его фехтования, просит научить. хочет сыграть с ним в D&D" }},
  {a:"veronica",b:"socks",   label:{ en:"adores his feminine looks",                   ru:"обожает его феминные образы" }}
],

/* ============================= ЛОР ============================= */
lore:[
 { title:{ en:"The world", ru:"Мир" },
   body:{ en:["Modern-day USA, California. 70% of the population are demi-humans — hybrids of humans and animals with ears, tails and slightly enhanced abilities related to their nature. 30% are ordinary humans, treated with condescension: without animal genes they're assumed to be less gifted."],
          ru:["Современные США, Калифорния. 70% населения — деми-люди, гибриды человека и животного: уши, хвосты, слегка усиленные способности своей натуры. 30% — обычные люди, к которым относятся со снисхождением: считается, что без звериных генов они менее одарены."] } },
 { title:{ en:"PAW U", ru:"PAW U" },
   body:{ en:["One of California's most popular and prestigious universities for \"gifted\" students. The student body decodes PAW as \"Prowl And Wail\". Extremely liberal; it encourages self-expression and freedom above all. The downside: the academics aren't rigorous, and skipping classes is the norm."],
          ru:["Один из самых популярных и престижных университетов Калифорнии для «одарённых». Студенты расшифровывают PAW как «Prowl And Wail». Крайне либеральный, поощряет самовыражение и свободу. Обратная сторона: учебная программа так себе, прогуливать и халтурить — норма."] } },
 { title:{ en:"The hierarchy", ru:"Иерархия" },
   body:{ en:["Apex — predators: wolves, big cats, foxes, hawks, bears. They get leadership, charisma and the sports teams. Mid — common and domesticated: dogs (excluding wolves), cats, rabbits, horses, deer. The backbone of campus; they earn status through talent. Low — rodents, reptiles, insects. Microaggressions and back-handed compliments."],
          ru:["Апекс — хищники: волки, большие кошки, лисы, ястребы, медведи. Им достаётся лидерство, харизма и спортивные команды. Мид — домашние и обычные: собаки (кроме волков), кошки, кролики, лошади, олени. Хребет кампуса, статус зарабатывают талантом. Низ — грызуны, рептилии, насекомые. Микроагрессии и комплименты с подвохом."] } },
 { title:{ en:"Howl vs Purr", ru:"Howl против Purr" },
   body:{ en:["Not about buildings — a cultural war. The Howl sees the Purr as snobs, the Purr sees the Howl as chaos and immaturity. The Grotto in Blackwood's basement is the only neutral ground."],
          ru:["Не про здания — про культурную войну. Howl видит в Purr зазнаек, Purr в Howl — хаос и незрелость. Grotto в подвале Blackwood — единственная нейтральная земля."] } },
 { title:{ en:"Pawlympics", ru:"Pawlympics" },
   body:{ en:["The annual series of silly physical and mental competitions between clubs and fraternities. Where rivalries, friendly and serious, play out in public."],
          ru:["Ежегодные дурацкие физические и умственные соревнования между клубами и братствами. Место, где соперничества — дружеские и не очень — разыгрываются публично."] } },
 { title:{ en:"New Sincerity", ru:"New Sincerity" },
   body:{ en:["West Coast. TJ is the face of the movement. Radical emotional honesty wrapped in maximalist production. Chase wanted streams. TJ wanted this."],
          ru:["Западное побережье, TJ — лицо движения. Радикальная эмоциональная честность, завёрнутая в максималистский продакшен. Чейз хотел стримы. TJ хотел это."] } }
],

/* ===================== ИНТЕРФЕЙС И ПРЕДУПРЕЖДЕНИЕ ===================== */
ui:{
  en:{ nav:{ places:"Places", lore:"Lore" }, guest:"special guest", back:"VERSUS", places:"Places", lore:"Lore",
       species:"species", age:"age", major:"studies", year:"year", where:"find at", team:"band", members:"members",
       turf:"turf", tracks:"Tracks", listen:"Listen", listenAll:"▶ play all", lyrics:"Lyrics", nothing:"[COMING SOON]",
       likes:"likes", dislikes:"dislikes", rel:"Connections", here:"Who's here", made:"credits", tempo:"tempo",
       versions:"versions", style:"style prompt", stCard:"ST card", janitor:"Janitor AI", noLink:"link not added yet",
       silence:"Silence", pick:"pick a track", top:"top track", upNext:"Up next", collapse:"Collapse", openPlayer:"Open player", download:"download", nolyr:"No lyrics yet — set lyricsFile in data.js.",
       nofetch:"Can't read the file: open the site through a local server.",
       nofile:"File not found:", e404:"no such screen", tbd:"not confirmed by canon",
       gateTitle:"Before you enter", gateAge:"I confirm that I am 18 years of age or older.",
       gateFic:"This universe and all of its characters are fictional. Any resemblance to real persons is coincidental.",
       gateIn:"Enter", gateOut:"Leave",
       chars:"Main characters", solo:"Solo artists", npcs:"NPC", open:"open",
       links:"Connections", linksHint:"Tap a portrait — see who they're tied to. Tap again — open the sheet. Rows on the right jump to the next person.", openSheet:"open sheet", pickOne:"pick someone",
       imgNote:"Images are made to convey the atmosphere and may not reflect what the place actually looks like." },
  ru:{ nav:{ places:"Места", lore:"Лор" }, guest:"спецгость", back:"VERSUS", places:"Места", lore:"Лор",
       species:"вид", age:"возраст", major:"учится", year:"курс", where:"где искать", team:"группа", members:"состав",
       turf:"территория", tracks:"Треки", listen:"Слушать", listenAll:"▶ слушать всё", lyrics:"Текст", nothing:"[COMING SOON]",
       likes:"любит", dislikes:"не любит", rel:"Связи", here:"Кто здесь", made:"сделано", tempo:"темп",
       versions:"версий", style:"стиль", stCard:"ST card", janitor:"Janitor AI", noLink:"ссылка ещё не добавлена",
       silence:"Тишина", pick:"выбери трек", top:"топ-трек", upNext:"Дальше", collapse:"Свернуть", openPlayer:"Открыть плеер", download:"скачать", nolyr:"Текста ещё нет — поле lyricsFile в data.js.",
       nofetch:"Файл не читается: открой сайт через локальный сервер.",
       nofile:"Файл не найден:", e404:"такого экрана нет", tbd:"не подтверждено каноном",
       gateTitle:"Прежде чем войти", gateAge:"Я подтверждаю, что мне есть 18 лет.",
       gateFic:"Эта вселенная и все её персонажи выдуманы. Любые совпадения с реальными людьми случайны.",
       gateIn:"Войти", gateOut:"Уйти",
       chars:"Основные персонажи", solo:"Сольные артисты", npcs:"NPC", open:"открыть",
       links:"Связи", linksHint:"Клик по портрету — с кем связан. Ещё клик — открыть лист. Строки справа перекидывают на следующего.", openSheet:"открыть лист", pickOne:"выбери кого-нибудь",
       imgNote:"Изображения созданы, чтобы передать атмосферу, и могут не отражать реальной картины." }
}

};
