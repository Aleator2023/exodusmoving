export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'GET') {
    return response.status(405).json({
      error: 'Method not allowed',
    });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return response.status(500).json({
      error: 'Google API key or Place ID is missing',
    });
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'name,rating,user_ratings_total,url,reviews',
    language: 'he',
    key: apiKey,
  });

  const googleUrl =
    `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

  try {
    const googleResponse = await fetch(googleUrl);
    const placeData = await googleResponse.json();

    if (placeData.status !== 'OK') {
      return response.status(400).json({
        error: 'Google Places API error',
        status: placeData.status,
        details: placeData.error_message ?? placeData,
      });
    }

    const place = placeData.result;

    const reviews = (place.reviews ?? []).map((review, index) => ({
      id: review.time ?? index + 1,
      authorName: review.author_name ?? 'Google User',
      authorPhoto: review.profile_photo_url ?? null,
      rating: review.rating ?? 5,
      text: review.text ?? '',
      timeDescription: review.relative_time_description ?? '',
      googleMapsUri: review.author_url ?? place.url ?? '',
    }));

    return response.status(200).json({
      businessName: place.name ?? 'Exodus Moving',
      rating: place.rating ?? null,
      userRatingCount: place.user_ratings_total ?? null,
      googleMapsUri: place.url ?? '',
      reviews,
    });
  } catch (error) {
    return response.status(500).json({
      error: 'Server error',
      details: error.message,
    });
  }
}