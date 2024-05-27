const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts";

export default async (request, context) => {
  const apiKey = "AIzaSyAGtrYV4g9feB2dZUQrVXKGkWQFnXgB3IU";
  const origins = "Washington,DC";
  const destinations = "New York City,NY";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origins
  )}&destinations=${encodeURIComponent(destinations)}&units=imperial&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Failed fetching data" }, { status: 500 });
  }
};
