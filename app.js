const SEED_ROWS = [
	{ committee: "GA", delegation: "Egypt", delegateName: "Montejano Marín Max", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "French Republic", delegateName: "Campos Garcia Héctor Daniel", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "People's Republic of China", delegateName: "Mercado Tirado Megan", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Republic of El Salvador", delegateName: "Reyes Caraza Diana Paulina", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Republic of Guatemala", delegateName: "López Miranda Alonso", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "United Mexican States", delegateName: "Santizo Elizondo María José", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "United States of America", delegateName: "Rendón Puente Sebastian", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Brazil (Federative Republic of Brazil)", delegateName: "García Taja Victoria", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Japan", delegateName: "Giselle García Cruz", school: "Liceo Británico de México" },
	{ committee: "GA", delegation: "Republic of the Philippines", delegateName: "Renata Sofia Salazar Mite", school: "Liceo Británico de México" },
	{ committee: "GA", delegation: "United Kingdom", delegateName: "Marielaine Hernández León", school: "Liceo Británico de México" },
	{ committee: "GA", delegation: "Russia (Russian Federation)", delegateName: "Amara Louise Camacho Sanchez", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Nicaragua (Republic of Nicaragua)", delegateName: "Carmina Rosales Jurado", school: "ANROD" },
	{ committee: "GA", delegation: "Cuba (Republic of Cuba)", delegateName: "Ximena Román", school: "TRINITY SCHOOL MX" },
	{ committee: "GA", delegation: "Sudan (Republic of the Sudan)", delegateName: "Jose Luis Fuentes Figueroa", school: "BENAVENTE" },
	{ committee: "GA", delegation: "Venezuela", delegateName: "Sergio Iván Martínez Herrera", school: "BENAVENTE" },
	{ committee: "GA", delegation: "India (Republic of India)", delegateName: "Julieta", school: "Trinity School mx" },

	{ committee: "SC", delegation: "French Republic", delegateName: "Ildefonso Chánez Contreras", school: "BENAVENTE" },
	{ committee: "SC", delegation: "Islamic Republic of Iran", delegateName: "Alejo González Isabella Adnaloy", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "Islamic Republic of Pakistan", delegateName: "Victorino Muro Luciana", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "Kingdom of Saudi Arabia", delegateName: "Palacios Garita Victoria Simone", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "People's Republic of China", delegateName: "Pablo Ortega", school: "Prepa Tec" },
	{ committee: "SC", delegation: "Republic of South Africa", delegateName: "Barroso Conde Ieshua Iahi", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "Republic of the Philippines", delegateName: "Castro Frackiewicz Ian", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "Egypt (Arab Republic of Egypt)", delegateName: "Pérez Garcia Tamara", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "United Kingdom of Great Britain and Northern Ireland", delegateName: "Castillo Robles José Darío", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "India", delegateName: "Barbara Melissa Bonilla Salgado", school: "Liceo Británico de México" },
	{ committee: "SC", delegation: "United States", delegateName: "Karla Andrea Limón Castañeda", school: "Liceo Británico de México" },
	{ committee: "SC", delegation: "Republic of Türkiye", delegateName: "Daniela Román Valadez", school: "Prepa Tec" },
	{ committee: "SC", delegation: "Republic of Singapore", delegateName: "Jose Eduardo Jimenez", school: "BENAVENTE" },
	{ committee: "SC", delegation: "Russia (Russian Federation)", delegateName: "Rodrigo Nicolai Bravo Robles", school: "Prepa Tec" },
	{ committee: "SC", delegation: "Mexico (United Mexican States)", delegateName: "Zoe Gasca", school: "TRINITY SCHOOL MX" },
	{ committee: "SC", delegation: "Laos", delegateName: "Jorge Santiago Carreño", school: "ANROD" },
	{ committee: "SC", delegation: "Indonesia (Republic of Indonesia)", delegateName: "Isabela Camacho", school: "TRINITY SCHOOL MX" },

	{ committee: "ECOSOC", delegation: "Arab Republic of Egypt", delegateName: "Santiago David Arzamendi Carillo", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Federal Republic of Germany", delegateName: "Fojaco Banuet Eugenio", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Federal Republic of Nigeria", delegateName: "Campos Castillo Diana Livia", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Japan", delegateName: "Marron Rivera Hanan", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Kingdom of Morocco", delegateName: "Ramírez Ibarra José Miguel", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Kingdom of Spain", delegateName: "Infante Aguilar Arturo", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "New Zealand", delegateName: "Herrera Michel Mateo Uriel", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Republic of South Africa", delegateName: "Prieto Egúibar Emilio", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Russian Federation", delegateName: "De la Pedra Esses Heriberto Mario", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Democratic Republic of the Congo", delegateName: "Maria Lizeth", school: "BUAP" },
	{ committee: "ECOSOC", delegation: "People's Republic of China", delegateName: "Izral Ortega", school: "BUAP Prepa" },
	{ committee: "ECOSOC", delegation: "Sudan (Republic of the Sudan)", delegateName: "Regina Limón Sánchez ", school: "ANAHUAC" },
	{ committee: "ECOSOC", delegation: "United Kingdom (United Kingdom of Great Britain and Northern Ireland)", delegateName: "Farah Ceballos", school: "TRINITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "United States (United States of America)", delegateName: "Itzel Ortega ", school: "BUAP" },
	{ committee: "ECOSOC", delegation: "France (French Republic)", delegateName: "Marcelo Martínez", school: "TRINNITY SCHOOL MX" },
	{ committee: "ECOSOC", delegation: "Italy (Italian Republic)", delegateName: "Shara Alkaid Huicochea Cárdenas", school: "ANAHUAC" },
	{ committee: "ECOSOC", delegation: "Kenya (Republic of Kenya)", delegateName: "Gustavo Vidal Franco Cortés", school: "ANAHUAC" },

	{ committee: "UNESCO", delegation: "Commonwealth of Australia", delegateName: "Aguirre López Dania Ximena", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Kingdom of Spain", delegateName: "Del Castillo Velasco Cholula Franco", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "New Zealand", delegateName: "Calderón Chacón Leopoldo", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "People's Republic of China", delegateName: "Méndez Candla Cario", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Republic of Ecuador", delegateName: "Issac de la Rosa Jimenez", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Republic of Indonesia", delegateName: "Montiel Rivera Lucca", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Republic of South Africa", delegateName: "Carreño Ronquillo José Adrián", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Republic of the Philippines", delegateName: "Gómez Monterrubio Olga Teresa", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "United Mexican States", delegateName: "Rodríguez Reyes Santiago", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Colombia (Republic of Colombia)", delegateName: "Bruno el nuevo", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "United States (United States of America)", delegateName: "Kassia Pinheiro Silva", school: "BENAVENTE" },
	{ committee: "UNESCO", delegation: "Russia (Russian Federation)", delegateName: "Víctor Fernando Martínez", school: "ARNOD" },
	{ committee: "UNESCO", delegation: "Haiti", delegateName: "Mikel Zurita", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "Peru (Republic of Peru)", delegateName: "Mateo Aizpuro", school: "TRINITY SCHOOL MX" },
	{ committee: "UNESCO", delegation: "France (French Republic)", delegateName: "Daniela Aguilera Arroyo", school: "BENAVENTE" },
	{ committee: "UNESCO", delegation: "Dominican Republic of Congo", delegateName: "Diego Barroeta Ruiz", school: "PEDREGAL" },
	{ committee: "UNESCO", delegation: "United Kingdom", delegateName: "Sofía Teresa Cuautle Flores", school: "BENAVENTE" },

	{ committee: "CIJ", delegation: "Reino de Arabia Saudita", delegateName: "De la Rosa García Carlos Samuel", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "Reino Unido de Gran Bretaña e Irlanda del Norte", delegateName: "Zozoaga Calderón Alessandra Lorelle", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República Bolivariana de Venezuela", delegateName: "Nava Castillo Fernando", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República de Colombia", delegateName: "Ponce Esparragosa Emiliano", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República de Filipinas", delegateName: "Crespo Solís Camila", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República de Turquía", delegateName: "Juárez Ballesteros Christian", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República Democrática Federal de Etiopía", delegateName: "Sánchez Baldera Fátima", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República Federativa de Brasil", delegateName: "Jiménez Palaijne Khalil", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "México (Estados Unidos Mexicanos)", delegateName: "Palafox Plata Camila", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República Libanesa", delegateName: "Lara Germenus Diego", school: "TRINITY SCHOOL MX" },
	{ committee: "CIJ", delegation: "República Francesa", delegateName: "Mauricio Lozano Rivera", school: "Liceo Británico de México" },
	{ committee: "CIJ", delegation: "People's Republic of China", delegateName: "Francisco Issac Ramón Fernández", school: "BUAP" },
	{ committee: "CIJ", delegation: "Russian Federation", delegateName: "David Ezequias", school: "BUAP" },
	{ committee: "CIJ", delegation: "United States of America", delegateName: "Yael Reyes Dector", school: "BUAP" },
	{ committee: "CIJ", delegation: "Siria (República Árabe Siria)", delegateName: "Valeria Fernández Gutiérrez", school: "Liceo Británico de México" },
	{ committee: "CIJ", delegation: "Irak (República de Irak)", delegateName: "Iker Furklong", school: "San Joseph" },
	{ committee: "CIJ", delegation: "Afganistán (República Islámica de Afganistán)", delegateName: "Daniela Díaz ", school: "San Joseph" },

	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Aldo Wilfrido Meza Gaspar", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Ana Paola Guzmán Bello", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Andrés Galiote Mendoza", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Carlos Josué Flores Olvera", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Carolina Guerrero Valencia", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Claudia Marcela Bello de la Cruz", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Eliud Domínguez Dimas", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Fernando de Jesús Guzmán Bretón", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Guillermo Cervantes López", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Jorge Ramos Bello", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "María Fernanda Guzmán Bello", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Maricruz Palafox Plata", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Marilian Molina Aguilar", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Mendoza Moctezuma", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Miguel Ángel Esses Castillo", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Mónica Lourdes", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Perla (Petra) Pérez Palacios", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Viviana Lizeth Bello Jaimes", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Maria Fenanda Sanchez Diaz", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Rocio Solva Espinoza", school: "TRINITY SCHOOL MX" },
	{ committee: "PROFESORES", delegation: "PROFESORES", delegateName: "Lorena Contreras Vazquez", school: "TRINITY SCHOOL MX" },

	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Victor Manuel Herrera Ruiz", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Lauro Emiliano Castillo Robles", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Diego Diaz Tovar", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Alexandra Santizo Elizondo", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Alexa Irigoyen", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Enrique Sanchez Cervantes", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Valeria Herrera Ulloa", school: "TRINITY SCHOOL MX" },
	{ committee: "HIGHCOMMAND", delegation: "HIGHCOMMAND", delegateName: "Andres Leonardo de la Rosa Jimenez", school: "TRINITY SCHOOL MX" },

	{ committee: "MESAS", delegation: "MESAS", delegateName: "Heber Jesus Jimenez Escalera", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Michelle Cuero Mares", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Maria Jose Martinez Hernandez", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Enrique Quintana Ocon", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Ximena Garcia Malagon", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Carlos Emiliano Arroyo Soto", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Maria Jose Estrada Planell", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Angel del Valle Leal", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Aranza Prieto Aguibar", school: "TRINITY SCHOOL MX" },
	{ committee: "MESAS", delegation: "MESAS", delegateName: "Emiliano Ponce Esparragosa", school: "TRINITY SCHOOL MX" },
];

const COMMITTEE_TARGETS = {
	GA: 20,
	SC: 20,
	ECOSOC: 20,
	UNESCO: 20,
	CIJ: 20,
	PROFESORES: 21,
	HIGHCOMMAND: 8,
	MESAS: 10,
};
const COMMITTEES = Object.keys(COMMITTEE_TARGETS);
const FIREBASE_CONFIG = {
	apiKey: "AIzaSyBXpphK27BdlpZ612ocmE8dHbGkBjA5Eys",
	authDomain: "comida-ac4a7.firebaseapp.com",
	projectId: "comida-ac4a7",
	storageBucket: "comida-ac4a7.firebasestorage.app",
	messagingSenderId: "938261946095",
	appId: "1:938261946095:web:cc628b2cd2f8b32fff851a",
};
const FIREBASE_COLLECTION = "delegates";
const ADMIN_EMAILS = [
	"victorbanco132@gmail.com",
	"andresrj@trinityschool.mx",
	"diegodt@trinityschool.mx",
    "vivianabj@trinityschool.mx",
    "valeriahu@trinityschool.mx",
    "enriquesc@trinityschool.mx",
    "laurocr@trinityschool.mx",
	"alexandrase@trinityschool.mx",
	"maybedmcpremium@gmail.com",
];

const committeeSections = document.getElementById("committeeSections");
const scanResult = document.getElementById("scanResult");
const qrPreview = document.getElementById("qrPreview");
const qrModal = document.getElementById("qrModal");
const qrModalClose = document.getElementById("qrModalClose");
const startScannerBtn = document.getElementById("startScannerBtn");
const stopScannerBtn = document.getElementById("stopScannerBtn");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const cloudStatus = document.getElementById("cloudStatus");
const loginOverlay = document.getElementById("loginOverlay");
const appContent = document.getElementById("appContent");
const userBar = document.getElementById("userBar");
const userRoleBadge = document.getElementById("userRoleBadge");
const userEmailEl = document.getElementById("userEmail");
const googleSignInBtn = document.getElementById("googleSignInBtn");
const guestSignInBtn = document.getElementById("guestSignInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const scannerSection = document.getElementById("scannerSection");

let currentUser = null;
let isAdmin = false;

let delegates = loadData();
let editingState = null;
let html5QrCode = null;
let scanning = false;
let previewState = null;
let searchTerm = "";
let cloudEnabled = false;
let cloudDb = null;
let cloudUnsubscribe = null;
let cloudCollection = FIREBASE_COLLECTION;
let firebaseApp = null;
let renderCycle = 0;
let fixedRowsRepairPending = true;

const FIXED_ID_COMMITTEES = new Set(["PROFESORES", "HIGHCOMMAND", "MESAS"]);

function openQrModal() {
	if (!qrModal) return;
	qrModal.hidden = false;
	document.body.style.overflow = "hidden";
	if (qrModalClose) {
		requestAnimationFrame(() => qrModalClose.focus());
	}
}

function closeQrModal() {
	if (!qrModal) return;
	qrModal.hidden = true;
	document.body.style.overflow = "";
	previewState = null;
	if (qrPreview) {
		qrPreview.innerHTML = "";
	}
}

function sanitize(text) {
	return String(text ?? "")
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function normalizeText(value, fallback) {
	const parsed = String(value ?? "").trim();
	return parsed || fallback;
}

function normalizeSearchText(value) {
	return String(value ?? "")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.trim();
}

function slug(text) {
	return String(text ?? "")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

function createSeedCode(committee, index) {
	return `${committee}-SEED-${String(index).padStart(2, "0")}`;
}

function createPaymentCode(committee, excludedId = "") {
	let code = "";
	do {
		const random = Math.random().toString(36).slice(2, 7).toUpperCase();
		code = `PAGO-${committee}-${Date.now()}-${random}`;
	} while (delegates.some((row) => row.id !== excludedId && row.code.toLowerCase() === code.toLowerCase()));
	return code;
}

function normalizeRecord(data, fallbackCode = "") {
	return {
		id: String(data.id || ""),
		committee: String(data.committee || "").trim(),
		delegation: normalizeText(data.delegation, "Sin delegación"),
		delegateName: normalizeText(data.delegateName, "Sin nombre"),
		school: normalizeText(data.school, "Sin escuela"),
		code: normalizeText(data.code, fallbackCode || "SIN-CODIGO"),
		paid: Boolean(data.paid),
		meal: Boolean(data.meal),
	};
}

function makeSeedId(committee, delegation, index) {
	const delegationSlug = slug(delegation) || `slot-${index}`;
	if (committee === "PROFESORES" || committee === "HIGHCOMMAND" || committee === "MESAS") {
		return `${committee}__${delegationSlug}_${String(index).padStart(2, "0")}`;
	}
	return `${committee}__${delegationSlug}`;
}

function buildBaseRecords() {
	const perCommitteeCount = Object.fromEntries(COMMITTEES.map((committee) => [committee, 0]));
	const output = [];

	for (const row of SEED_ROWS) {
		if (!COMMITTEES.includes(row.committee)) continue;
		perCommitteeCount[row.committee] += 1;
		const slotIndex = perCommitteeCount[row.committee];
		const id = makeSeedId(row.committee, row.delegation, slotIndex);
		output.push(normalizeRecord({
			id,
			committee: row.committee,
			delegation: row.delegation,
			delegateName: row.delegateName,
			school: row.school,
			code: createSeedCode(row.committee, slotIndex),
			paid: false,
		}, createSeedCode(row.committee, slotIndex)));
	}

	for (const committee of COMMITTEES) {
		let current = output.filter((row) => row.committee === committee).length;
		const target = COMMITTEE_TARGETS[committee] ?? 20;
		while (current < target) {
			current += 1;
			const delegation = `ESPACIO ${String(current).padStart(2, "0")}`;
			const id = `${committee}__slot_${String(current).padStart(2, "0")}`;
			const code = `${committee}-SLOT-${String(current).padStart(2, "0")}`;
			output.push(normalizeRecord({
				id,
				committee,
				delegation,
				delegateName: "Sin nombre",
				school: "Sin escuela",
				code,
				paid: false,
			}, code));
		}
	}

	return output;
}

function loadData() {
	return buildBaseRecords();
}

function saveData() {
	return;
}

function updateCloudStatus(message) {
	if (!cloudStatus) return;
	cloudStatus.textContent = message;
}

function hasConfiguredFirebaseValue(value) {
	const parsed = String(value ?? "").trim();
	return parsed !== "" && !parsed.startsWith("PEGA_AQUI");
}

function hasRequiredFirebaseConfig(config) {
	if (!config) return false;
	return ["apiKey", "projectId", "appId"].every((key) => hasConfiguredFirebaseValue(config[key]));
}

function toFirestoreDoc(row) {
	return {
		committee: row.committee,
		delegation: row.delegation,
		delegateName: row.delegateName,
		school: row.school,
		code: row.code,
		paid: row.paid,
		meal: row.meal,
	};
}

function mergeCloudRows(cloudRows) {
	const base = buildBaseRecords();
	const byId = new Map(cloudRows.map((row) => [String(row.id || ""), row]));
	const missing = [];

	const merged = base.map((baseRow) => {
		const stored = byId.get(baseRow.id);
		if (!stored) {
			missing.push(baseRow);
			return baseRow;
		}

		return normalizeRecord({
			...baseRow,
			...stored,
			id: baseRow.id,
			committee: baseRow.committee,
		}, baseRow.code);
	});

	return { merged, missing };
}

async function seedMissingCloudRows(rows) {
	if (!cloudDb || !rows.length) return;
	const batch = cloudDb.batch();
	const collectionRef = cloudDb.collection(cloudCollection);
	for (const row of rows) {
		batch.set(collectionRef.doc(row.id), toFirestoreDoc(row));
	}
	await batch.commit();
}

function isSameDelegateDoc(existing, nextDoc) {
	if (!existing) return false;
	return String(existing.committee || "") === nextDoc.committee
		&& String(existing.delegation || "") === nextDoc.delegation
		&& String(existing.delegateName || "") === nextDoc.delegateName
		&& String(existing.school || "") === nextDoc.school
		&& String(existing.code || "") === nextDoc.code
		&& Boolean(existing.paid) === nextDoc.paid
		&& Boolean(existing.meal) === nextDoc.meal;
}

async function repairFixedCommitteeRows(cloudRows) {
	if (!cloudDb || !isAdmin || !fixedRowsRepairPending) return false;
	const canonicalRows = buildBaseRecords().filter((row) => FIXED_ID_COMMITTEES.has(row.committee));
	const byId = new Map(cloudRows.map((row) => [String(row.id || ""), row]));
	const batch = cloudDb.batch();
	const collectionRef = cloudDb.collection(cloudCollection);
	let writes = 0;

	for (const canonical of canonicalRows) {
		const existing = byId.get(canonical.id);
		const doc = {
			committee: canonical.committee,
			delegation: canonical.delegation,
			delegateName: canonical.delegateName,
			school: canonical.school,
			code: (existing && String(existing.code || "").trim()) ? String(existing.code) : canonical.code,
			paid: typeof existing?.paid === "boolean" ? existing.paid : false,
			meal: typeof existing?.meal === "boolean" ? existing.meal : false,
		};

		if (!isSameDelegateDoc(existing, doc)) {
			batch.set(collectionRef.doc(canonical.id), doc);
			writes += 1;
		}
	}

	fixedRowsRepairPending = false;
	if (!writes) return false;
	await batch.commit();
	return true;
}

async function disconnectCloud(silent = false) {
	if (cloudUnsubscribe) {
		cloudUnsubscribe();
		cloudUnsubscribe = null;
	}
	cloudEnabled = false;
	cloudDb = null;
	fixedRowsRepairPending = true;
	if (!silent) {
		updateCloudStatus("Sincronización detenida. Cambios nuevos quedan solo en este dispositivo.");
	}
}

async function connectCloud() {
	if (!cloudDb && firebaseApp) {
		cloudDb = firebase.firestore(firebaseApp);
	}

	if (!cloudDb) {
		updateCloudStatus("Sincronización no disponible. Revisa FIREBASE_CONFIG.");
		return;
	}

	cloudCollection = FIREBASE_COLLECTION;
	const collectionRef = cloudDb.collection(cloudCollection);
	const firstSnapshot = await collectionRef.get();

	if (firstSnapshot.empty) {
		await seedMissingCloudRows(buildBaseRecords());
	}

	cloudUnsubscribe = collectionRef.onSnapshot(async (snapshot) => {
		const cloudRows = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		try {
			const repaired = await repairFixedCommitteeRows(cloudRows);
			if (repaired) return;
		} catch {
			fixedRowsRepairPending = false;
			updateCloudStatus("No se pudo reparar datos de PROFESORES/HIGHCOMMAND/MESAS. Revisa reglas/permisos de Firestore.");
		}
		const { merged, missing } = mergeCloudRows(cloudRows);
		delegates = merged;
		await renderCommitteeSections();
		if (missing.length) {
			await seedMissingCloudRows(missing);
		}
	}, (error) => {
		const details = error?.code ? ` (${error.code})` : "";
		updateCloudStatus(`Error en sincronizacion. Revisa reglas/permisos de Firestore${details}.`);
	});

	cloudEnabled = true;
	updateCloudStatus("Conectado en tiempo real. Los cambios se reflejan al instante.");
}

/* ── Auth helpers ── */

function checkIsAdmin(user) {
	if (!user || user.isAnonymous) return false;
	return ADMIN_EMAILS.includes((user.email || "").toLowerCase().trim());
}

function updateUserBar(user) {
	if (!user) return;
	const admin = checkIsAdmin(user);
	userRoleBadge.className = "badge " + (admin ? "ok" : "warn");
	userRoleBadge.textContent = admin ? "Admin" : "Invitado";
	userEmailEl.textContent = user.isAnonymous ? "Modo invitado" : (user.email || "");
	userBar.hidden = false;
}

function hideApp() {
	closeQrModal();
	appContent.hidden = true;
	userBar.hidden = true;
	loginOverlay.style.display = "flex";
}

async function showApp(user) {
	isAdmin = checkIsAdmin(user);
	currentUser = user;
	loginOverlay.style.display = "none";
	updateUserBar(user);
	appContent.hidden = false;

	// Show scanner only to admins
	if (scannerSection) {
		scannerSection.style.display = isAdmin ? "" : "none";
	}

	await renderCommitteeSections();

	try {
		await connectCloud();
	} catch {
		updateCloudStatus("No se pudo conectar con la nube. Revisa FIREBASE_CONFIG y reglas de Firestore.");
	}
}

async function signInWithGoogle() {
	const noteEl = document.getElementById("googleSignInNote");
	if (!firebaseApp) {
		initFirebase();
	}
	if (!firebaseApp) {
		if (noteEl) {
			noteEl.textContent = "⚠️ Firebase no configurado — completa FIREBASE_CONFIG en app.js con tus credenciales del proyecto.";
			noteEl.hidden = false;
		}
		return;
	}
	if (noteEl) noteEl.hidden = true;
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.setCustomParameters({ prompt: "select_account" });
	try {
		await firebase.auth(firebaseApp).signInWithPopup(provider);
	} catch (err) {
		if (err.code !== "auth/popup-closed-by-user" && err.code !== "auth/cancelled-popup-request") {
			if (noteEl) {
				noteEl.textContent = "Error al iniciar sesión: " + (err.message || err.code);
				noteEl.hidden = false;
			}
		}
	}
}

async function signInAsGuest() {
	if (!firebaseApp) {
		initFirebase();
	}
	if (!firebaseApp) {
		// No Firebase configured — enter local-only guest mode directly
		const localGuest = { isAnonymous: true, email: null };
		await showApp(localGuest);
		return;
	}
	try {
		await firebase.auth(firebaseApp).signInAnonymously();
	} catch (err) {
		alert("No se pudo entrar como invitado: " + (err.message || err.code));
	}
}

async function doSignOut() {
	if (html5QrCode && scanning) {
		try { await html5QrCode.stop(); await html5QrCode.clear(); } catch {}
		scanning = false;
	}
	await disconnectCloud(true);
	if (firebaseApp) {
		try { await firebase.auth(firebaseApp).signOut(); } catch {}
	}
	currentUser = null;
	isAdmin = false;
	delegates = loadData();
	hideApp();
}

function initFirebase() {
	if (!window.firebase || !hasRequiredFirebaseConfig(FIREBASE_CONFIG)) {
		updateCloudStatus("FIREBASE_CONFIG incompleto: completa apiKey, appId y messagingSenderId en app.js.");
		return;
	}
	const appName = "comida-main";
	try {
		firebaseApp = firebase.app(appName);
	} catch {
		firebaseApp = firebase.initializeApp(FIREBASE_CONFIG, appName);
	}
}

function initAuth() {
	if (!firebaseApp) {
		// No Firebase config: show app directly as guest without cloud
		isAdmin = false;
		currentUser = null;
		loginOverlay.style.display = "flex";
		return;
	}
	const auth = firebase.auth(firebaseApp);
	auth.onAuthStateChanged(async (user) => {
		if (user) {
			await showApp(user);
		} else {
			hideApp();
		}
	});
}

/* ── Login button listeners ── */

googleSignInBtn.addEventListener("click", signInWithGoogle);
guestSignInBtn.addEventListener("click", signInAsGuest);
signOutBtn.addEventListener("click", doSignOut);

async function saveRecord(next) {
	if (!isAdmin) {
		alert("Acceso denegado: solo los administradores pueden guardar cambios.");
		return;
	}
	const index = delegates.findIndex((row) => row.id === next.id);
	if (index !== -1) {
		delegates[index] = next;
	}

	if (cloudEnabled && cloudDb) {
		// Full overwrite keeps Firestore docs aligned with strict rules (hasOnly)
		// and removes legacy extra fields that can block updates globally.
		await cloudDb.collection(cloudCollection).doc(next.id).set(toFirestoreDoc(next));
	}
	saveData();
}

function describeSaveError(err) {
	const code = String(err?.code || "").toLowerCase();
	if (code.includes("permission-denied")) {
		return "Permiso denegado en Firestore (reglas o correo sin rol admin).";
	}
	if (code.includes("failed-precondition")) {
		return "Firestore requiere configuracion adicional (indice/reglas/precondiciones).";
	}
	if (code.includes("unavailable")) {
		return "Firestore no esta disponible temporalmente. Intenta de nuevo.";
	}
	if (code.includes("unauthenticated")) {
		return "Sesion no autenticada. Cierra sesion y vuelve a entrar con Google.";
	}
	return err?.message || "Error desconocido al guardar.";
}

function paymentBadge(paid) {
	return paid
		? '<span class="badge ok">YA PAGÓ</span>'
		: '<span class="badge warn">NO PAGÓ</span>';
}

function mealBadge(meal) {
	return meal
		? '<span class="badge ok">ENTREGADA</span>'
		: '<span class="badge warn">NO ENTREGADA</span>';
}

function makePayload(row) {
	return JSON.stringify({
		code: row.code,
		committee: row.committee,
		delegation: row.delegation,
		delegateName: row.delegateName,
		school: row.school,
		paid: row.paid,
		meal: row.meal,
	});
}

function getQrShareUrl(row) {
	return `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(makePayload(row))}`;
}

async function getQrSource(row) {
	const payload = makePayload(row);
	if (window.QRCode && typeof window.QRCode.toDataURL === "function") {
		try {
			return await window.QRCode.toDataURL(payload, { width: 300, margin: 2 });
		} catch {}
	}
	return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(payload)}`;
}

async function getQrBlob(src) {
	try {
		const res = await fetch(src);
		return await res.blob();
	} catch {
		return null;
	}
}

async function shareCurrentQr(channel) {
	if (!previewState) return;
	const { row, qrSource } = previewState;

	// WhatsApp: friendly pre-written message + QR image URL (no code text)
	if (channel === "whatsapp") {
		const qrUrl = getQrShareUrl(row);
		const msg = [
			`*Hola ${sanitize(row.delegateName)}* 👋`,
			`Aquí está tu acreditación para el Modelo de Naciones Unidas:`,
			``,
			`👤 *Delegado:* ${row.delegateName}`,
			`🏛 *Delegación:* ${row.delegation}`,
			`🏫 *Escuela:* ${row.school}`,
			`📋 *Comité:* ${row.committee}`,
			``,
			`📸 *Tu QR de acceso:*`,
			qrUrl,
		].join("\n");
		window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
		return;
	}

	// Copy image to clipboard
	if (channel === "copy-image") {
		const blob = await getQrBlob(qrSource);
		if (blob && navigator.clipboard && window.ClipboardItem) {
			try {
				const pngBlob = blob.type === "image/png" ? blob : await convertToPng(qrSource);
				await navigator.clipboard.write([new ClipboardItem({ "image/png": pngBlob })]);
				showToast("Imagen del QR copiada al portapapeles ✓");
				return;
			} catch {}
		}
		// Fallback: open image in new tab so user can right-click and copy
		const url = URL.createObjectURL(blob || new Blob());
		const win = window.open(url, "_blank", "noopener");
		if (!win) showToast("Abre el QR en una nueva pestaña para copiarlo manualmente.");
		return;
	}

	// Download QR image
	if (channel === "download") {
		const blob = await getQrBlob(qrSource);
		if (blob) {
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `qr-${row.delegateName.replace(/\s+/g, "-")}.png`;
			a.click();
			setTimeout(() => URL.revokeObjectURL(url), 5000);
		} else {
			window.open(qrSource, "_blank", "noopener");
		}
		return;
	}

	// Native share — tries to share as file first, falls back to URL
	if (channel === "native") {
		const blob = await getQrBlob(qrSource);
		if (navigator.share && blob) {
			try {
				const file = new File([blob], `qr-${row.delegation}.png`, { type: "image/png" });
				if (navigator.canShare && navigator.canShare({ files: [file] })) {
					await navigator.share({
						title: `QR ${row.delegateName}`,
						text: `Acreditación de ${row.delegateName} · ${row.school}`,
						files: [file],
					});
					return;
				}
			} catch {}
			// Fallback to URL share
			try {
				await navigator.share({
					title: `QR ${row.delegateName}`,
					text: `Acreditación de ${row.delegateName} · ${row.school}`,
					url: getQrShareUrl(row),
				});
				return;
			} catch {}
		}
		// No native share support
		showToast("Usa 'Copiar imagen' o 'WhatsApp' para compartir.");
	}
}

async function convertToPng(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.width || 260;
			canvas.height = img.height || 260;
			canvas.getContext("2d").drawImage(img, 0, 0);
			canvas.toBlob((b) => b ? resolve(b) : reject(new Error("toBlob failed")), "image/png");
		};
		img.onerror = reject;
		img.src = src;
	});
}

let toastTimer = null;
function showToast(msg) {
	let toast = document.getElementById("qrToast");
	if (!toast) {
		toast = document.createElement("div");
		toast.id = "qrToast";
		toast.className = "qr-toast";
		document.body.appendChild(toast);
	}
	toast.textContent = msg;
	toast.classList.add("show");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function getQrCellHtml(row) {
	if (!row.paid) {
		return '<span class="badge warn qr-hidden-badge">QR oculto (NO PAGO)</span>';
	}
	return `<button type="button" data-action="view-qr" data-id="${row.id}">Ver QR</button>`;
}

function matchesSearch(row) {
	if (!searchTerm) return true;
	const haystack = [row.delegateName, row.delegation, row.school]
		.map((part) => normalizeSearchText(part))
		.join(" ");
	return haystack.includes(searchTerm);
}

function getCommitteeRows(committee) {
	return delegates
		.filter((row) => matchesSearch(row))
		.filter((row) => row.committee === committee)
		.sort((a, b) => {
			const byDelegation = a.delegation.localeCompare(b.delegation, "es", { sensitivity: "base" });
			if (byDelegation !== 0) return byDelegation;

			const byName = a.delegateName.localeCompare(b.delegateName, "es", { sensitivity: "base" });
			if (byName !== 0) return byName;

			return a.id.localeCompare(b.id, "es", { sensitivity: "base" });
		});
}

async function renderCommitteeSections() {
	const cycle = ++renderCycle;
	const sections = await Promise.all(COMMITTEES.map(async (committee) => {
		const rows = getCommitteeRows(committee);
		const paidCount = rows.filter((row) => row.paid).length;
		const mealCount = rows.filter((row) => row.meal).length;

		const rowHtml = await Promise.all(rows.map(async (row) => {
			const isEditing = isAdmin && editingState && editingState.id === row.id;

			if (isEditing) {
				const draft = editingState.draft;
				const preview = normalizeRecord({
					...row,
					delegation: draft.delegation,
					delegateName: draft.delegateName,
					school: draft.school,
					code: draft.code,
					paid: draft.paid,
					meal: draft.meal,
				}, row.code);
				const qrHtml = getQrCellHtml(preview);
				return `
					<tr class="editing-row">
						<td data-label="Delegación"><input class="inline-input" data-edit-field="delegation" data-id="${row.id}" value="${sanitize(draft.delegation)}"></td>
						<td data-label="Delegado"><input class="inline-input" data-edit-field="delegateName" data-id="${row.id}" value="${sanitize(draft.delegateName)}"></td>
						<td data-label="Escuela"><input class="inline-input" data-edit-field="school" data-id="${row.id}" value="${sanitize(draft.school)}"></td>
						<td data-label="Código"><input class="inline-input" data-edit-field="code" data-id="${row.id}" value="${sanitize(draft.code)}"></td>
						<td data-label="Pago">
							<select class="inline-input" data-edit-field="paid" data-id="${row.id}">
								<option value="no" ${draft.paid ? "" : "selected"}>NO PAGÓ</option>
								<option value="yes" ${draft.paid ? "selected" : ""}>YA PAGÓ</option>
							</select>
						</td>
						<td class="qr-cell" data-label="QR">${qrHtml}</td>
						<td data-label="Comida">
							<select class="inline-input" data-edit-field="meal" data-id="${row.id}">
								<option value="no" ${draft.meal ? "" : "selected"}>NO ENTREGADA</option>
								<option value="yes" ${draft.meal ? "selected" : ""}>ENTREGADA</option>
							</select>
						</td>
						<td class="action-cell" data-label="Acción">
							<div class="actions no-margin inline-actions">
								<button type="button" class="action-btn" data-action="save-inline" data-id="${row.id}">Guardar</button>
								<button type="button" class="action-btn" data-action="cancel-inline" data-id="${row.id}">Cancelar</button>
							</div>
						</td>
					</tr>
				`;
			}

			if (isAdmin) {
				const qrHtml = getQrCellHtml(row);
				return `
					<tr>
						<td data-label="Delegación">${sanitize(row.delegation)}</td>
						<td data-label="Delegado">${sanitize(row.delegateName)}</td>
						<td data-label="Escuela">${sanitize(row.school)}</td>
						<td data-label="Código">${sanitize(row.code)}</td>
						<td data-label="Pago">${paymentBadge(row.paid)}</td>
						<td class="qr-cell" data-label="QR">${qrHtml}</td>
						<td data-label="Comida">${mealBadge(row.meal)}</td>
						<td class="action-cell" data-label="Acción"><button type="button" class="action-btn" data-action="edit" data-id="${row.id}">Editar</button></td>
					</tr>
				`;
			}

			// Guest / non-admin view: only delegation, name, school, payment, meal
			return `
				<tr>
					<td data-label="Delegación">${sanitize(row.delegation)}</td>
					<td data-label="Delegado">${sanitize(row.delegateName)}</td>
					<td data-label="Escuela">${sanitize(row.school)}</td>
					<td data-label="Pago">${paymentBadge(row.paid)}</td>
					<td data-label="Comida">${mealBadge(row.meal)}</td>
				</tr>
			`;
		}));

		if (!rowHtml.length) {
			return `
				<article class="committee-card">
					<div class="committee-header">
						<h3>${committee}</h3>
						<p class="small muted">0 resultados</p>
					</div>
					<p class="small muted">Sin coincidencias para la búsqueda actual.</p>
				</article>
			`;
		}

		const adminHeaders = isAdmin
			? `<th>Código</th><th>Pago</th><th>QR</th><th>Comida</th><th class="action-header">Acción</th>`
			: `<th>Pago</th><th>Comida</th>`;
		const target = COMMITTEE_TARGETS[committee] ?? rows.length;

		return `
			<article class="committee-card">
				<div class="committee-header">
					<h3>${committee}</h3>
					<p class="small muted">${rows.length}/${target} espacios · ${paidCount} pagados · ${mealCount} comidas entregadas</p>
				</div>
				<div class="table-wrap">
					<table>
						<thead>
							<tr>
								<th>Delegación</th>
								<th>Delegado</th>
								<th>Escuela</th>
								${adminHeaders}
							</tr>
						</thead>
						<tbody>${rowHtml.join("")}</tbody>
					</table>
				</div>
			</article>
		`;
	}));

	if (cycle !== renderCycle) {
		return;
	}
	committeeSections.innerHTML = sections.join("");
}

function startInlineEdit(row) {
	editingState = {
		id: row.id,
		sourcePaid: row.paid,
		generatedOnPaid: false,
		draft: {
			delegation: row.delegation,
			delegateName: row.delegateName === "Sin nombre" ? "" : row.delegateName,
			school: row.school === "Sin escuela" ? "" : row.school,
			code: row.code,
			paid: row.paid,
			meal: row.meal,
		},
	};
}

function validateEdition(nextRow) {
	if (!nextRow.delegation.trim()) {
		alert("La delegación es obligatoria.");
		return false;
	}

	if (!nextRow.code.trim()) {
		alert("El código es obligatorio.");
		return false;
	}

	const duplicate = delegates.some((row) => row.id !== nextRow.id && row.code.toLowerCase() === nextRow.code.toLowerCase());
	if (duplicate) {
		alert("Ese código ya existe. Usa un código distinto.");
		return false;
	}

	return true;
}

async function saveInlineEdit(id) {
	if (!editingState || editingState.id !== id) return;

	const index = delegates.findIndex((row) => row.id === id);
	if (index === -1) {
		editingState = null;
		await renderCommitteeSections();
		return;
	}

	const current = delegates[index];
	const draft = editingState.draft;
	let nextCode = normalizeText(draft.code, current.code);
	if (!current.paid && draft.paid) {
		nextCode = createPaymentCode(current.committee, current.id);
	}

	const next = normalizeRecord({
		...current,
		delegation: draft.delegation,
		delegateName: draft.delegateName,
		school: draft.school,
		code: nextCode,
		paid: draft.paid,
		meal: draft.meal,
	}, current.code);

	if (!validateEdition(next)) {
		return;
	}

	try {
		await saveRecord(next);
	} catch (err) {
		alert(`No se pudo guardar en Firebase. ${describeSaveError(err)}`);
		showToast("Error al guardar");
		return;
	}
	editingState = null;
	await renderCommitteeSections();
	showToast("Cambios guardados ✓");
}

function parseScannedCode(decodedText) {
	const raw = String(decodedText || "").trim();
	if (!raw) return "";
	try {
		const parsed = JSON.parse(raw);
		if (parsed && parsed.code) {
			return String(parsed.code).trim();
		}
		return raw;
	} catch {
		return raw;
	}
}

function showScanResult(type, record, scannedCode) {
	if (type === "not-found") {
		scanResult.innerHTML = `
			<div><strong>QR no encontrado</strong></div>
			<div class="small muted">Código escaneado: ${sanitize(scannedCode || "(vacío)")}</div>
		`;
		return;
	}

	if (type === "not-paid") {
		scanResult.innerHTML = `
			<div><strong>Código encontrado: NO PAGADO</strong></div>
			<div><strong>Delegado:</strong> ${sanitize(record.delegateName)}</div>
			<div><strong>Comité:</strong> ${sanitize(record.committee)}</div>
			<div><strong>Delegación:</strong> ${sanitize(record.delegation)}</div>
			<div><strong>Escuela:</strong> ${sanitize(record.school)}</div>
			<div><strong>Código:</strong> ${sanitize(record.code)}</div>
		`;
		return;
	}

	scanResult.innerHTML = `
		<div><strong>QR encontrado: PAGADO</strong></div>
		<div><strong>Delegado:</strong> ${sanitize(record.delegateName)}</div>
		<div><strong>Comité:</strong> ${sanitize(record.committee)}</div>
		<div><strong>Delegación:</strong> ${sanitize(record.delegation)}</div>
		<div><strong>Escuela:</strong> ${sanitize(record.school)}</div>
		<div><strong>Código:</strong> ${sanitize(record.code)}</div>
	`;
}

async function onScanSuccess(decodedText) {
	const scannedCode = parseScannedCode(decodedText);
	if (!scannedCode) {
		showScanResult("not-found", null, scannedCode);
		return;
	}

	const record = delegates.find((row) => row.code.toLowerCase() === scannedCode.toLowerCase());
	if (!record) {
		showScanResult("not-found", null, scannedCode);
		return;
	}

	if (!record.paid) {
		showScanResult("not-paid", record, scannedCode);
		return;
	}

	showScanResult("paid", record, scannedCode);
}

startScannerBtn.addEventListener("click", async () => {
	if (scanning) return;
	if (!window.Html5Qrcode) {
		alert("No se pudo cargar la librería del lector QR.");
		return;
	}

	html5QrCode = new Html5Qrcode("reader");
	try {
		await html5QrCode.start(
			{ facingMode: "environment" },
			{ fps: 10, qrbox: { width: 220, height: 220 } },
			onScanSuccess
		);
		scanning = true;
		startScannerBtn.disabled = true;
		stopScannerBtn.disabled = false;
	} catch {
		alert("No fue posible iniciar la cámara. Revisa permisos del navegador.");
	}
});

stopScannerBtn.addEventListener("click", async () => {
	if (!html5QrCode || !scanning) return;
	try {
		await html5QrCode.stop();
		await html5QrCode.clear();
	} finally {
		scanning = false;
		startScannerBtn.disabled = false;
		stopScannerBtn.disabled = true;
	}
});

committeeSections.addEventListener("input", (event) => {
	if (!isAdmin) return;
	const target = event.target;
	if (!(target instanceof HTMLInputElement)) return;

	const id = target.dataset.id;
	const field = target.dataset.editField;
	if (!editingState || editingState.id !== id || !field) return;

	if (field === "delegation" || field === "delegateName" || field === "school" || field === "code") {
		editingState.draft[field] = target.value;
	}
});

committeeSections.addEventListener("change", async (event) => {
	if (!isAdmin) return;
	const target = event.target;
	if (!(target instanceof HTMLSelectElement)) return;

	const id = target.dataset.id;
	const field = target.dataset.editField;
	if (!editingState || editingState.id !== id || !field) return;

	if (field === "meal") {
		editingState.draft.meal = target.value === "yes";
		return;
	}

	if (field !== "paid") return;

	const paidNow = target.value === "yes";
	editingState.draft.paid = paidNow;
	if (!editingState.sourcePaid && paidNow) {
		editingState.draft.code = createPaymentCode(
			delegates.find((row) => row.id === id)?.committee || "GEN",
			id
		);
		editingState.generatedOnPaid = true;
	}

	if (!paidNow) {
		editingState.generatedOnPaid = false;
	}

	await renderCommitteeSections();
});

committeeSections.addEventListener("click", async (event) => {
	const target = event.target;
	if (!(target instanceof HTMLButtonElement)) return;

	const action = target.dataset.action;
	const id = target.dataset.id;
	if (!action || !id) return;

	// All table actions require admin
	if (!isAdmin) return;

	if (action === "cancel-inline") {
		if (editingState && editingState.id === id) {
			editingState = null;
			await renderCommitteeSections();
		}
		return;
	}

	if (action === "save-inline") {
		await saveInlineEdit(id);
		return;
	}

	if (action === "view-qr") {
		const row = delegates.find((item) => item.id === id);
		if (!row) return;
		if (!row.paid) {
			previewState = null;
			if (qrPreview) {
				qrPreview.innerHTML = '<div class="qr-panel-empty"><strong>NO PAGÓ:</strong> este registro no tiene QR disponible.</div>';
			}
			openQrModal();
			return;
		}

		const qrSource = await getQrSource(row);
		previewState = { row, qrSource };
		qrPreview.innerHTML = `
			<div class="qr-panel">
				<div class="qr-panel-header">
					<div class="qr-panel-img-wrap">
						<img class="qr-panel-img" src="${qrSource}" alt="QR ${sanitize(row.delegateName)}" crossorigin="anonymous">
					</div>
					<div class="qr-panel-info">
						<div class="qr-info-name">${sanitize(row.delegateName)}</div>
						<div class="qr-info-row">🏛 ${sanitize(row.delegation)}</div>
						<div class="qr-info-row">🏫 ${sanitize(row.school)}</div>
						<div class="qr-info-row">📋 Comité ${sanitize(row.committee)}</div>
					</div>
				</div>
				<div class="qr-share-grid">
					<button type="button" class="qr-share-btn" data-action="qr-download">
						<span class="qr-share-icon">📥</span>
						<span>Guardar imagen</span>
					</button>
					<button type="button" class="qr-share-btn" data-action="qr-copy-image">
						<span class="qr-share-icon">📋</span>
						<span>Copiar imagen</span>
					</button>
					<button type="button" class="qr-share-btn qr-share-wa" data-action="qr-whatsapp">
						<span class="qr-share-icon">💬</span>
						<span>WhatsApp</span>
					</button>
					<button type="button" class="qr-share-btn" data-action="qr-native">
						<span class="qr-share-icon">📤</span>
						<span>Compartir</span>
					</button>
				</div>
			</div>
		`;
		openQrModal();
		return;
	}

	if (action !== "edit") return;

	const row = delegates.find((item) => item.id === id);
	if (!row) return;
	startInlineEdit(row);
	await renderCommitteeSections();
});

qrPreview.addEventListener("click", async (event) => {
	const target = event.target.closest("button[data-action]");
	if (!target) return;
	const action = target.dataset.action;
	if (action === "qr-native") await shareCurrentQr("native");
	else if (action === "qr-whatsapp") await shareCurrentQr("whatsapp");
	else if (action === "qr-copy-image") await shareCurrentQr("copy-image");
	else if (action === "qr-download") await shareCurrentQr("download");
});

if (qrModal) {
	qrModal.addEventListener("click", (event) => {
		const target = event.target;
		if (!(target instanceof HTMLElement)) return;
		if (target.dataset.action === "close-qr-modal" || target.id === "qrModal") {
			closeQrModal();
		}
	});
}

if (qrModalClose) {
	qrModalClose.addEventListener("click", closeQrModal);
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && qrModal && !qrModal.hidden) {
		closeQrModal();
	}
});

searchInput.addEventListener("input", async (event) => {
	const target = event.target;
	if (!(target instanceof HTMLInputElement)) return;
	searchTerm = normalizeSearchText(target.value);
	await renderCommitteeSections();
});

clearSearchBtn.addEventListener("click", async () => {
	searchInput.value = "";
	searchTerm = "";
	await renderCommitteeSections();
});

async function initApp() {
	closeQrModal();
	initFirebase();
	initAuth();
}

initApp();
