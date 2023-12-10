const website_title = "Mario Kart Roulette";

function chooseRandomElement<T>(elements: T[]) {
    return elements[Math.floor(Math.random() * elements.length)]
}

const drivers = [
    {name:"Mario",filename:"Mario.png"},
    {name:"Luigi",filename:"Luigi.png"},
    {name:"Peach",filename:"Peach.png"},
    {name:"Daisy",filename:"Daisy.png"},
    {name:"Rosalina",filename:"Rosalina.png"},
    {name:"Kanooki Mario",filename:"Kanooki Mario.png"},
    {name:"Cat Peach",filename:"Cat Peach.png"},
    {name:"Yooshi 1",filename:"Yooshi 1.png"},
    {name:"Yooshi 2",filename:"Yooshi 2.png"},
    {name:"Yooshi 3",filename:"Yooshi 3.png"},
    {name:"Yooshi 4",filename:"Yooshi 4.png"},
    {name:"Yooshi 5",filename:"Yooshi 5.png"},
    {name:"Yooshi 6",filename:"Yooshi 6.png"},
    {name:"Yooshi 7",filename:"Yooshi 7.png"},
    {name:"Yooshi 8",filename:"Yooshi 8.png"},
    {name:"Yooshi 9",filename:"Yooshi 9.png"},
    {name:"Toad",filename:"Toad.png"},
    {name:"Koopa",filename:"Koopa.png"},
    {name:"Shy Guy 1",filename:"Shy Guy 1.png"},
    {name:"Shy Guy 2",filename:"Shy Guy 2.png"},
    {name:"Shy Guy 3",filename:"Shy Guy 3.png"},
    {name:"Shy Guy 4",filename:"Shy Guy 4.png"},
    {name:"Shy Guy 5",filename:"Shy Guy 5.png"},
    {name:"Shy Guy 6",filename:"Shy Guy 6.png"},
    {name:"Shy Guy 7",filename:"Shy Guy 7.png"},
    {name:"Shy Guy 8",filename:"Shy Guy 8.png"},
    {name:"Shy Guy 9",filename:"Shy Guy 9.png"},
    {name:"Lakitu",filename:"Lakitu.png"},
    {name:"Toadette",filename:"Toadette.png"},
    {name:"King Boo",filename:"King Boo.png"},
    {name:"Baby Mario",filename:"Baby Mario.png"},
    {name:"Baby Luigi",filename:"Baby Luigi.png"},
    {name:"Baby Peach",filename:"Baby Peach.png"},
    {name:"Baby Daisy",filename:"Baby Daisy.png"},
    {name:"Baby Rosalina",filename:"Baby Rosalina.png"},
    {name:"Silver Mario",filename:"Silver Mario.png"},
    {name:"Gold Mario",filename:"Gold Mario.png"},
    {name:"Pink Gold Peach",filename:"Pink Gold Peach.png"},
    {name:"Wario",filename:"Wario.png"},
    {name:"Waluigi",filename:"Waluigi.png"},
    {name:"Donkey Kong",filename:"Donkey Kong.png"},
    {name:"Bowser",filename:"Bowser.png"},
    {name:"Knochentrocken",filename:"Knochentrocken.png"},
    {name:"Boswer Jr",filename:"Boswer Jr.png"},
    {name:"Bone Bowser",filename:"Bone Bowser.png"},
    {name:"Lemmy",filename:"Lemmy.png"},
    {name:"Larry",filename:"Larry.png"},
    {name:"Wendy",filename:"Wendy.png"},
    {name:"Ludwig",filename:"Ludwig.png"},
    {name:"Iggy",filename:"Iggy.png"},
    {name:"Roy",filename:"Roy.png"},
    {name:"Morton",filename:"Morton.png"},
    {name:"Inkling Girl 1",filename:"Inkling Girl 1.png"},
    {name:"Inkling Girl 2",filename:"Inkling Girl 2.png"},
    {name:"Inkling Girl 3",filename:"Inkling Girl 3.png"},
    {name:"Inkling Boy 1",filename:"Inkling Boy 1.png"},
    {name:"Inkling Boy 2",filename:"Inkling Boy 2.png"},
    {name:"Inkling Boy 3",filename:"Inkling Boy 3.png"},
    {name:"Link 1",filename:"Link 1.png"},
    {name:"Link 2",filename:"Link 2.png"},
    {name:"Villager Male",filename:"Villager Male.png"},
    {name:"Villager Female",filename:"Villager Female.png"},
    {name:"Isabelle",filename:"Isabelle.png"},
    {name:"Birdo 1",filename:"Birdo 1.png"},
    {name:"Birdo 2",filename:"Birdo 2.png"},
    {name:"Birdo 3",filename:"Birdo 3.png"},
    {name:"Birdo 4",filename:"Birdo 4.png"},
    {name:"Birdo 5",filename:"Birdo 5.png"},
    {name:"Birdo 6",filename:"Birdo 6.png"},
    {name:"Birdo 7",filename:"Birdo 7.png"},
    {name:"Birdo 8",filename:"Birdo 8.png"},
    {name:"Birdo 9",filename:"Birdo 9.png"},
    {name:"Piranhia",filename:"Piranhia.png"},
    {name:"Wigger",filename:"Wigger.png"},
    {name:"Kamek",filename:"Kamek.png"},
    {name:"Peachette",filename:"Peachette.png"},
    {name:"Diddy Kong",filename:"Diddy Kong.png"},
    {name:"Funky Kong",filename:"Funky Kong.png"},
    {name:"Paulina",filename:"Paulina.png"},
    {name:"Mii",filename:"Mii.png"}
];

const gliders = [
    {name: "Super Glider", filename: '120px-SuperGliderMK8.png'},
    {name: "Cloud Glider", filename: '120px-Cloud_Glider.png'},
    {name: "Wario Wing", filename: '120px-WarioWingMK8.png'},
    {name: "Waddle Wing", filename: '120px-WaddleWingMK8.png'},
    {name: "Peach Parasol", filename: '120px-PeachParasolGliderMK8.png'},
    {name: "Parachute", filename: '120px-ParachuteGliderMK8.png'},
    {name: "Parafoil", filename: '120px-ParafoilGliderMK8.png'},
    {name: "Flower Glider", filename: '120px-FlowerGliderMK8.png'},
    {name: "Bowser Kite", filename: '120px-BowserKiteMK8.png'},
    {name: "Plane Glider", filename: '120px-PlaneGliderMK8.png'},
    {name: "MKTV Parafoil", filename: '120px-MKTVParafoilGliderMK8.png'},
    {name: "Gold Glider", filename: '120px-GoldGliderMK8.png'},
    {name: "Hylian Kite", filename: '120px-MK8-HylianKite.png'},
    {name: "Paper Glider", filename: '120px-PaperGliderIcon-MK8.png'},
    {name: "Paraglider", filename: '120px-MK8D_Paraglider.png'},
];

const tires = [
	{name: "Normal", filename: '120px-StandardTiresMK8.png'},
	{name: "Monster", filename: '120px-MonsterTiresMK8.png'},
	{name: "Roller", filename: '120px-RollerTiresMK8.png'},
	{name: "Slim", filename: '120px-SlickTiresMK8.png'},
	{name: "Slick", filename: '120px-SlimTiresMK8.png'},
	{name: "Metal", filename: '120px-MetalTiresMK8.png'},
	{name: "Button", filename: '120px-ButtonTiresMK8.png'},
	{name: "Off-Road", filename: '120px-Off-Road.png'},
	{name: "Sponge", filename: '120px-SpongeTiresMK8.png'},
	{name: "Wooden", filename: '120px-WoodTiresMK8.png'},
	{name: "Cushion", filename: '120px-CushionTiresMK8.png'},
	{name: "Normal Blue", filename: '120px-Blue_Standard.png'},
	{name: "Funky Monster", filename: '120px-HotMonsterTiresMK8.png'},
	{name: "Azure Roller", filename: '120px-AzureRollerTiresMK8.png'},
	{name: "Crimson Slim", filename: '120px-CrimsonSlimTiresMK8.png'},
	{name: "Cyber Slick", filename: '120px-CyberSlickTiresMK8.png'},
	{name: "Retro Off-Road", filename: '120px-MK8D_Ancient_Tires.png'},
	{name: "Gold Wheels", filename: '120px-Gold_Tires_MK8.png'},
	{name: "GLA Wheels", filename: '120px-GLATires-MK8.png'},
	{name: "Triforce Tyres", filename: '120px-MK8-TriforceTires.png'},
	{name: "Leaf Tyres", filename: '120px-Leaf_Tires_MK8.png'},
    {name: "Retro Offroad", filename: '120px-Retro_Off-Road.png'}
];

const vehicles = [
    // KARTS
	{name:"Standard Kart", filename: '120px-StandardKartBodyMK8.png' },
	{name:"Pipe Frame", filename: '120px-PipeFrameBodyMK8.png' },
	{name:"Mach 8", filename: '120px-Mach8BodyMK8.png' },
	{name:"Steel Driver", filename: '120px-Steel_Driver.png' },
	{name:"Cat Cruiser", filename: '120px-CatCruiserBodyMK8.png' },
	{name:"Circuit Special", filename: '120px-CircuitSpecialBodyMK8.png' },
	{name:"Tri-Speeder", filename: '120px-TrispeederBodyMK8.png' },
	{name:"Badwagon", filename: '120px-BadwagonBodyMK8.png' },
	{name:"Prancer", filename: '120px-PrancerBodyMK8.png' },
	{name:"Buggybud", filename: '120px-BiddybuggyBodyMK8.png' },
	{name:"Landship", filename: '120px-LandshipBodyMK8.png' },
	{name:"Bounder", filename: '120px-BiddybuggyBodyMK8.png' },
	{name:"Sports Coupé", filename: '120px-SportsCoupeMK8.png' },
	{name:"Gold Kart", filename: '120px-Gold_Standard.png' },
	{name:"GLA", filename: '120px-GLA-MK8.png' },
	{name:"W 25 Silver Arrow", filename: '120px-W25SilverArrow-MK8.png' },
	{name:"300 SL Roadster", filename: '120px-300SLRoadster_MK8.png' },
	{name:"Blue Falcon", filename: '120px-MK8BlueFalcon.png' },
	{name:"Tanooki Kart", filename: '120px-MK8_Tanooki_Buggy_Sprite.png' },
	{name:"B Dasher", filename: '120px-ZeldaMK8Bdasher.png' },
	{name:"Streetle", filename: '120px-MK8Streetle.png' },
	{name:"P-Wing", filename: '120px-MK8PWing.png'},
	{name:"Koopa Clown", filename: '120px-MK8DX_Koopa_Clown.png' },

    // BIKES
	{name:"Standard Bike", filename: '120px-StandardBikeBodyMK8.png' },
	{name:"Comet+", filename: '120px-CometBodyMK8.png ' },
	{name:"Sport Bike+", filename: '120px-SportBikeBodyMK8.png' },
	{name:"The Duke", filename: '120px-TheDukeBodyMK8.png' },
	{name:"Flame Rider", filename: '120px-FlameRiderBodyMK8.png' },
	{name:"Varmint", filename: '120px-VarmintBodyMK8.png' },
	{name:"Mr Scooty", filename: '120px-MrScootyBodyMK8.png' },
	{name:"Jet Bike+",filename: '120px-JetBikeBodyMK8.png' },
	{name:"Yoshi Bike+", filename: '120px-YoshiBikeBodyMK8.png' },
	{name:"Master Cycle+", filename: '120px-MK8D_Master_Cycle_Zero.png' },
	{name:"City Tripper", filename: '120px-MK8_Light-Green_City_Tripper.png'},

    // ATV
	{name:"Standard Quad", filename: '120px-StandardATVBodyMK8.png' },
	{name:"Wild Wiggler", filename: '120px-WildWigglerBodyMK8.png ' },
	{name:"Teddy Buggy", filename: '120px-TeddyBuggyBodyMK8.png' },
	{name:"Bone Rattler", filename: '120px-MK8BoneRattler.png' },
	{name:"Splat Buggy", filename: '120px-MK8DX_Splat_Buggy.png' },
	{name:"Inkstriker", filename: '120px-MK8DX_Inkstriker.png' },
];

const cups = [
    {
        id: 0,
        name: "Mushroom",
        tracks: [ 
            { id: 0, title: 'Mario Kart Stadium' },
            { id: 1, title: 'Water Park'},
            { id: 2, title: 'Sweet Sweet Canyon'}, 
            { id: 3, title: 'Thwomp Ruins'}
        ],
    },
    {
        id: 1,
        name: "Flower",
        tracks:[
            { id: 0, title: 'Mario Circuit' },
            { id: 1, title: 'Toad Harbor'},
            { id: 2, title: 'Twisted Mansion'}, 
            { id: 3, title: 'Shy Guy Falls'},
        ]
    },
    {
        id: 2,
        name: "Star",
        tracks: [
            { id: 0, title: 'Sunshine Airport' },
            { id: 1, title: 'Dolphin Shoals'},
            { id: 2, title: 'Electrodrome'}, 
            { id: 3, title: 'Mount Wario'}
        ],
    },
    {
        name: "Special",
        id: 3,
        tracks: [
            { id: 0, title: 'Cloudtop Cruise' },
            { id: 1, title: 'Bone-Dry Dunes'},
            { id: 2, title: "Bowser's Castle"}, 
            { id: 3, title: 'Rainbow Road'}
        ],
    },
    {
        name: "Shell",
        id: 4,
        tracks: [
            { id: 0, title: 'Wii Moo Moo Meadows'},
            { id: 1, title: 'GBA Mario Circuit'},
            { id: 2, title: 'DS Cheep Cheep Beach'}, 
            { id: 3, title: "N64 Toad's Turnpike"}
        ],
    },
    {
        name: "Banana",
        id: 5,
        tracks: [
            { id: 0, title: 'GCN Dry Dry Desert'},
            { id: 1, title: 'SNES Donut Plains 3'},
            { id: 2, title: 'N64 Royal Raceway'}, 
            { id: 3, title: '3DS DK Jungle'},
        ],
    },
    {
        name: "Leaf",
        id: 6,
        tracks: [
            { id: 0, title: 'DS Wario Stadium'},
            { id: 1, title: 'GCN Sherbet Land'},
            { id: 2, title: '3DS Music Park'}, 
            { id: 3, title: 'N64 Yoshi Valley'},
        ],
    },
    {
        name: "Lightning",
        id: 7,
        tracks: [
          { id: 0, title: "DS Tick-Tock Clock" },
          { id: 1, title: "3DS Piranha Plant Slide" },
          { id: 2, title: "Wii Grumble Volcano" },
          { id: 3, title: "N64 Rainbow Road" }
        ]
      },
    {
        name: "Egg",
        id: 8,
        tracks: [
            { id: 0, title: "GCN Yoshi Circuit" },
            { id: 1, title: "Excitebike Arena" },
            { id: 2, title: "Dragon Driftway" },
            { id: 3, title: "Mute City" }
        ]
    },
    {
        name: "Triforce",
        id: 9,
        tracks: [
            { id: 0, title: "Wii Wario's Gold Mine" },
            { id: 1, title: "SNES Rainbow Road" },
            { id: 2, title: "Ice Ice Outpost" },
            { id: 3, title: "Hyrule Circuit" }
        ]
    },
    {
        name: "Crossing",
        id: 10,
        tracks: [
            { id: 0, title: "GCN Baby Park" },
            { id: 1, title: "GBA Cheese Land" },
            { id: 2, title: "Wild Woods" },
            { id: 3, title: "Animal Crossing" }
        ]
    },
    {
        name: "Bell",
        id: 11,
        tracks: [
            { id: 0, title: "3DS Neo Bowser City" },
            { id: 1, title: "GBA Ribbon Road" },
            { id: 2, title: "Super Bell Subway" },
            { id: 3, title: "Big Blue" }
        ]
    },

    // DLC GAME
    {
        id: 12,
        name: "Golden Dash",
        tracks: [
            { id: 0, title: "Tour Paris Promenade" },
            { id: 1, title: "3DS Toad Circuit" },
            { id: 2, title: "N64 Choco Mountain" },
            { id: 3, title: "Wii Coconut Mall" }
        ]
    },
    {
        id: 13,
        name: "Lucky Cat",
        tracks: [
            { id: 0, title: "Tour Tokyo Blur" },
            { id: 1, title: "DS Shroom Ridge" },
            { id: 2, title: "GBA Sky Garden" },
            { id: 3, title: "Ninja Hideaway" }
        ]
    },
    {
        id: 14,
        name: "Turnip",
        tracks: [
            { id: 0, title: "Tour New York Minute" },
            { id: 1, title: "SNES Mario Circuit 3" },
            { id: 2, title: "N64 Kalimari Desert" },
            { id: 3, title: "DS Waluigi Pinball" }
        ]
    },
    {
        id: 15,
        name: "Propeller",
        tracks: [
            { id: 0, title: "Tour Sydney Sprint" },
            { id: 1, title: "GBA Snow Land" },
            { id: 2, title: "Wii Mushroom Gorge" },
            { id: 3, title: "Sky-high Sundae" }
        ]
    },
    {
        id: 16,
        name: "Rock",
        tracks: [
            { id: 0, title: "Tour London Loop" },
            { id: 1, title: "GBA Boo Lake" },
            { id: 2, title: "3DS Rock Rock Mountain" },
            { id: 3, title: "Wii Maple Treeway" }
        ]
    },
    {
        id: 17,
        name: "Moon",
        tracks: [
            { id: 0, title: "Tour Berlin Byways" },
            { id: 1, title: "DS Peach Gardens" },
            { id: 2, title: "Merry Mountain" },
            { id: 3, title: "3DS Rainbow road" }
        ]
    },
    {
        id: 18,
        name: "Fruit",
        tracks: [
            { id: 0, title: "Tour Amsterdam Drift" },
            { id: 1, title: "GBA Riverside Park" },
            { id: 2, title: "Wii DK Summit" },
            { id: 3, title: "Yoshi's Island" }
        ]
    },
    {
        id: 19,
        name: "Boomerang",
        tracks: [
            { id: 0, title: "Tour Bangkok Rush" },
            { id: 1, title: "DS Mario Circuit" },
            { id: 2, title: "GCN Waluigi Stadium" },
            { id: 3, title: "Tour Singapore Speedway" }
        ]
    },
    {
        id: 20,
        name: "Feather",
        tracks: [
            { id: 0, title: "Tour Athens Dash" },
            { id: 1, title: "GCN Daisy Cruiser" },
            { id: 2, title: "Wii Moonview Highway" },
            { id: 3, title: "Squeaky Clean Sprint" }
        ]
    },
    {
        id: 21,
        name: "Cherry",
        tracks: [
            { id: 0, title: "Tour Los Angeles Laps" },
            { id: 1, title: "GBA Sunset Wilds" },
            { id: 2, title: "Wii Koopa Cape" },
            { id: 3, title: "Tour Vancour Velocity" }
        ]
    },
    {
        id: 22,
        name: "Acorn",
        tracks: [
            { id: 0, title: "Rome Avanti" },
            { id: 1, title: "DK Mountain" },
            { id: 2, title: "Daisy Circuit" },
            { id: 3, title: "Piranha Plant Cove" }
        ]
    },
    {
        id: 23,
        name: "Spiny",
        tracks: [
            { id: 0, title: "Madrid Drive" },
            { id: 1, title: "Rosalina's Ice World" },
            { id: 2, title: "Bowser Castle 3" },
            { id: 3, title: "Wii Rainbow Road" }
        ]
    }
]

type CupType = typeof cups[number];
type TrackType = typeof cups[number]["tracks"][number];

interface CupTrack {
    cup: typeof cups[number];
    track: typeof cups[number]["tracks"][number];
}

export type {
    CupTrack,
    CupType,
    TrackType,
}

export {
    website_title,
    chooseRandomElement,
    drivers, gliders, vehicles, tires, cups
}