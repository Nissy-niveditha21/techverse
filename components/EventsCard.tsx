import Link from "next/link";

export default function EventCard({ event }: any) {
    return (
        <div className="border rounded-lg p-6 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-600">
                    {event.mode} • {event.city || "Online"}
                </p>
                <p className="text-sm text-gray-600">
                    {event.skill_level} • {event.cost === 0 ? "Free" : `₹${event.cost}`}
                </p>
                <p className="text-sm mt-2">
                    Deadline: <strong>{event.deadline}</strong>
                </p>
                <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                    {event.verdict.replace("_", " ")}
                </span>
            </div>

            <Link
                href={`/events/${event.slug}`}
                className="text-sm font-medium underline"
            >
                View details
            </Link>
        </div>
    );
}
