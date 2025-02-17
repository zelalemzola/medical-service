import { MedicalCard } from "./medical-card"


const services = [
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Respiratory System",
        symptoms: [
            "Coughing",
            "Shortness of breath",
            "Wheezing",
            "Difficulty breathing",
            "Chest pain or discomfort",
            "Fatigue",
            "Bluish lips or nail beds",
            "Persistent chest congestion",
            "Frequent respiratory infections",
            "Sputum production (coughing up mucus)",
            "Facial pain",
            "Fever or headache",
            "Fast breathing",
            "Changes in breathing pattern",
            "Excessive mucus production",
            "Rapid breathing",
            "Nasal congestion",
            "Sore throat",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Integumentary System",
        symptoms: [
            "Skin changes such as redness, swelling, or discoloration",
            "Itching or irritation",
            "Pain or tenderness",
            "Burning or tingling sensations",
            "Dry, flaky, or peeling skin",
            "Blisters or sores",
            "Rash or hives",
            "Hair loss or thinning",
            "Nail changes or abnormalities",
            "Increased sensitivity to touch or temperature",
            "Scaling or thickening of the skin",
            "Changes in skin temperature or texture",
            "Persistent or unusual skin growths",
            "Changes in skin pigmentation or appearance",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Skeletal System",
        symptoms: [
            "Pain or tenderness in the bones or joints",
            "Swelling, redness, or warmth in the affected area",
            "Limited range of motion or difficulty moving a joint",
            "Deformities in the bones or joints",
            "Weakness or instability in the affected area",
            "Difficulty bearing weight on the affected limb",
            "Bone fractures or breaks",
            "Stiffness or discomfort in the bones or joints",
            "Numbness or tingling in the extremities",
            "Grinding or popping sensations in the joints",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Muscular System",
        symptoms: [
            "Muscle weakness",
            "Muscle pain or tenderness",
            "Muscle stiffness or tightness",
            "Reduced range of motion",
            "Muscle cramps or spasms",
            "Swelling or inflammation in the muscles",
            "Difficulty moving or performing daily activities",
            "Fatigue or tiredness",
            "Loss of muscle mass or muscle atrophy",
            "Numbness or tingling in the muscles",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Nervous System",
        symptoms: [
            "Headaches",
            "Fatigue",
            "Weakness",
            "Numbness or tingling in extremities",
            "Dizziness or lightheadedness",
            "Muscle tremors or spasms",
            "Difficulty concentrating or remembering",
            "Changes in vision or hearing",
            "Unexplained pain or sensitivity",
            "Balance and coordination problems",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Endocrine System",
        symptoms: [
            "Fatigue",
            "Weight gain or loss",
            "Changes in menstrual cycle or fertility",
            "Changes in mood or behavior",
            "Sweatiness or feeling hot or cold",
            "Muscle weakness or tremors",
            "Changes in libido or sexual function",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Digestive System",
        symptoms: [
            "Abdominal pain",
            "Bloating",
            "Constipation",
            "Diarrhea",
            "Heartburn",
            "Indigestion",
            "Nausea",
            "Vomiting",
            "Changes in bowel habits",
            "Blood in stool",
            "Unexplained weight loss",
            "Fatigue",
            "Loss of appetite",
            "Difficulty swallowing",
            "Excessive gas",
            "Foul-smelling stools",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Urinary System",
        symptoms: [
            "Frequent urination",
            "Pain or burning sensation during urination",
            "Blood in urine",
            "Strong-smelling urine",
            "Difficulty urinating",
            "Abdominal pain or pressure",
            "Urinary incontinence",
            "Feeling the need to urinate urgently",
            "Fever",
            "Fatigue",
            "Back pain",
        ],
    },
    {
        image: "/placeholder.svg?height=100&width=100",
        organ: "Lymphatic System",
        symptoms: [
            "Swelling or edema in the arms, legs, or other parts of the body",
            "Chronic fatigue or weakness",
            "Frequent infections or illnesses",
            "Skin conditions such as dryness, itchiness, or rash",
            "Digestive issues such as bloating or abdominal pain",
            "Cellulite or water retention",
            "Persistent sore throat or swollen glands",
            "Unexplained weight gain or difficulty losing weight",
            "Chronic pain or inflammation in the body",
            "Feeling generally unwell or rundown",
        ],
    },
]

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-6 text-primary">Our Services</h1>
                <p className="text-lg text-muted-foreground">
                    We provide comprehensive telemedicine services to help you stay healthy from the comfort of your home.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-[#141414] ">We Cure, Prevent, and Treat</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <MedicalCard key={index} {...service} />
                    ))}
                </div>
            </section>
        </div>
    )
}

