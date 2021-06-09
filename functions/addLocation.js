exports = async function addLocation(data) {
  const mongodb = context.services.get("mongodb-atlas");
  const locations = mongodb.db("maps").collection("locations");
  return await locations.insertOne(data);
};
