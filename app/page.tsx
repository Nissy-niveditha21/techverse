import { supabase } from "@/lib/supabase";
import EventCard from "@/components/EventsCard";

export default async function HomePage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("deadline", { ascending: true });

  if (error) {
    return (
      <div className="p-8 text-red-600">
        Failed to load events
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Upcoming Tech Events 🚀
      </h1>

      {events && events.length === 0 && (
        <p>No events available right now.</p>
      )}

      <div className="space-y-4">
        {events?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
