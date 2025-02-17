import type { Metadata } from "next"
import ServicesPage from "../components/services-page"


export const metadata: Metadata = {
    title: "Our Services | Telemedicine",
    description: "Explore our telemedicine services. We cure, prevent, and treat various conditions.",
}

export default function Page() {
    return <ServicesPage />
}

