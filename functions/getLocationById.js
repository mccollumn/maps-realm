exports = async function getLocationById(id) {
  console.log("Location ID:", id);
  const mongodb = context.services.get("mongodb-atlas");
  const locations = mongodb.db("maps").collection("locations");
  const results = await locations.findOne({ _id: BSON.ObjectId(id) });
  const stringified = JSON.stringify(results);

  return JSON.parse(stringified);
};
