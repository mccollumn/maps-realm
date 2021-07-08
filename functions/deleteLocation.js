exports = async function deleteLocation(id) {
  const mongodb = context.services.get("mongodb-atlas");
  const locations = mongodb.db("maps").collection("locations");
  const results = await locations.deleteOne({ _id: BSON.ObjectId(id) });
  const stringified = JSON.stringify(results);

  return JSON.parse(stringified);
};
