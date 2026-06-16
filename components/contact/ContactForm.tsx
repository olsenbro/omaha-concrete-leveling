const projectTypes = [
  "Driveway",
  "Sidewalk",
  "Patio",
  "Pool Deck",
  "Garage Floor",
  "Basement Floor",
  "Other",
] as const;

const severityOptions = [
  "Minor — less than 1 inch",
  "Moderate — 1–3 inches",
  "Significant — more than 3 inches",
  "Not sure",
] as const;

const timelineOptions = [
  "ASAP",
  "Within 2 weeks",
  "Within a month",
  "Just getting quotes",
] as const;

const inputClassName =
  "w-full rounded-lg border border-primary/20 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  return (
    <form
      action="/__bs_submit"
      data-bs-form
      className="rounded-xl bg-white p-8 shadow-sm"
    >
      <h2 className="font-display text-xl font-bold text-primary">Request Your Free Estimate</h2>
      <p className="mt-2 text-sm text-muted">
        Fill out the form below and we&apos;ll get back to you with a written quote.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="label-caps mb-1 block">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-caps mb-1 block">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClassName}
            placeholder="(402) 749-8050"
          />
        </div>

        <div>
          <label htmlFor="email" className="label-caps mb-1 block">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="address" className="label-caps mb-1 block">
            Address / City <span className="text-accent">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            autoComplete="street-address"
            className={inputClassName}
            placeholder="123 Main St, Papillion, NE"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="label-caps mb-1 block">
            What needs leveling? <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="severity" className="label-caps mb-1 block">
            How severe is the settling? <span className="text-accent">*</span>
          </label>
          <select
            id="severity"
            name="severity"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select severity
            </option>
            {severityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="label-caps mb-1 block">
            How soon do you need service? <span className="text-accent">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="label-caps mb-1 block">
            Message / Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClassName}
            placeholder="Tell us about the sunken concrete — location, size, how long it's been settling..."
          />
        </div>

        <button type="submit" className="btn-primary w-full py-4 text-base">
          Request My Free Estimate
        </button>
      </div>
    </form>
  );
}
