exports = async function getAllLocations() {
  const mongodb = context.services.get("mongodb-atlas");
  const locations = mongodb.db("maps").collection("locations");
  const cursor = await locations.find({});
  const results = await cursor.toArray();
  const stringified = JSON.stringify(results);

  return JSON.parse(stringified);
};
