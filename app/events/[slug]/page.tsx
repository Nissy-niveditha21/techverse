export const dynamic = "force-dynamic";

import { supabase } from "../../../lib/supabase";



type Props = {
    params: { slug: string };
};

export default async function EventDetailPage({ params }: Props) {
    const { data: event, error } = await supabase
        .from("events")
        .select("*")
        .eq("slug", params.slug)
        .single();

    if (error || !event) {
        return <p className="p-6">Event not found</p>;
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-semibold mb-4">{event.name}</h1>

            <p className="text-gray-600 mb-6">{event.description}</p>

            <div className="mb-6 text-sm text-gray-700">
                <p><strong>Mode:</strong> {event.mode}</p>
                <p><strong>City:</strong> {event.city || "Online"}</p>
                <p><strong>Skill level:</strong> {event.skill_level}</p>
                <p><strong>Cost:</strong> {event.cost === 0 ? "Free" : `₹${event.cost}`}</p>
                <p><strong>Deadline:</strong> {event.deadline}</p>
            </div>

            <section className="mb-6">
                <h3 className="font-semibold">Who should attend</h3>
                <p className="text-gray-600">{event.who_should_attend}</p>
            </section>

            <section className="mb-6">
                <h3 className="font-semibold">Who should skip</h3>
                <p className="text-gray-600">{event.who_should_skip}</p>
            </section>

            <section className="mb-8">
                <h3 className="font-semibold">Verdict</h3>
                <p className="font-medium text-green-700">
                    {event.verdict.replace("_", " ")}
                </p>
            </section>

            <a
                href={event.registration_link}
                target="_blank"
                className="inline-block px-6 py-3 bg-black text-white rounded-md"
            >
                Register Now
            </a>
        </div>
    );
}
