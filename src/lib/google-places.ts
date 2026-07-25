export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GooglePlaceData = {
  overallRating: number;
  reviewCount: number;
  googleMapsUri: string | null;
  reviews: GoogleReview[];
};

const FIELD_MASK = "id,displayName,rating,userRatingCount,googleMapsUri,reviews";
const RESTAURANT_QUERY = "Eurasia Restaurant & Bar, Lisboa, Portugal";

async function findPlaceId(apiKey: string): Promise<string | null> {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({ textQuery: RESTAURANT_QUERY }),
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.places?.[0]?.id ?? null;
}

export async function getGooglePlaceData(): Promise<{ data: GooglePlaceData | null; error: string | null }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return { data: null, error: "GOOGLE_PLACES_API_KEY is not set." };
  }

  let placeId = process.env.GOOGLE_PLACE_ID || "";
  if (!placeId) {
    const found = await findPlaceId(apiKey);
    if (!found) {
      return { data: null, error: "Could not find the restaurant via Google Places Text Search." };
    }
    placeId = found;
  }

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { data: null, error: `Google Places Details request failed: ${res.status} ${body}` };
  }

  const place = await res.json();

  const reviews: GoogleReview[] = (place.reviews ?? []).map(
    (r: {
      name: string;
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
      authorAttribution?: { displayName?: string; photoUri?: string };
    }) => ({
      id: r.name,
      authorName: r.authorAttribution?.displayName ?? "Google user",
      authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 0,
      text: r.text?.text ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
    })
  );

  return {
    data: {
      overallRating: place.rating ?? 0,
      reviewCount: place.userRatingCount ?? 0,
      googleMapsUri: place.googleMapsUri ?? null,
      reviews,
    },
    error: null,
  };
}
