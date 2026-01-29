"use client";

export default function PersonalizePage() {
    function savePrefs(e: any) {
        e.preventDefault();
        const form = e.target;
        localStorage.setItem(
            "techverse_prefs",
            JSON.stringify({
                city: form.city.value,
                level: form.level.value,
            })
        );
        alert("Preferences saved. Go to Events.");
    }

    return (
        <div className="max-w-xl mx-auto px-6 py-16">
            <h1 className="text-2xl font-semibold mb-6">
                Personalize Your Experience
            </h1>

            <form onSubmit={savePrefs} className="space-y-4">
                <select name="city" className="border p-2 w-full">
                    <option value="Hyderabad">Hyderabad</option>
                </select>

                <select name="level" className="border p-2 w-full">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <button className="w-full bg-black text-white py-2 rounded">
                    Save Preferences
                </button>
            </form>
        </div>
    );
}
