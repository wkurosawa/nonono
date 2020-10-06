const path = require("path");
const JsonSchema = require("@hyperjump/json-schema");

(async() => {
  const product = require("../data/product.json");
  const productSchema = await JsonSchema.get("file://" + path.join(__dirname, "..", "schemas", "product-schema.json"));

  const output = await JsonSchema.validate(productSchema, product);

  if (output.valid) {
    console.log("Instance is valid :-)");
    process.exit(0);
  } else {
    console.log("Instance is invalid :-(");
    process.exit(1);
  }
})();
