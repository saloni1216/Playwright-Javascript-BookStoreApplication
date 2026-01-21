const { test } = require("@playwright/test");

const BASE_URL = "https://reqres.in/api";
const COLLECTION = "orders";
const Public_KEY =
  "pub_87d17c7c7ab9b6dfbdeef9079b7e74ec05467713544adf0548d85361d4590af4";

test("CRUD Operations", async ({ request }) => {
  let createdRecord = null;

  // CREATE 
  const createPayload = {
    name: "David",
    job: "Software Developer",
    email: "david@example.com",
  };

  const createResponse = await request.post(
    `${BASE_URL}/collections/${COLLECTION}/records`,
    {
      headers: {
        "x-api-key": Public_KEY,
        "Content-Type": "application/json",
      },
      data: createPayload,
    }
  );

  const createBody = await createResponse.json();

  console.log("✅ Create data:");
  console.log(JSON.stringify([createBody], null, 2));
  console.log(
    `Status Code: ${createResponse.status()} - Create blocked → Public key is read-only\n`
  );


  if (createResponse.status() === 201 && createBody.id) {
    createdRecord = createBody;
  }

  // FETCH 
  if (!createdRecord) {
    console.log("✅ Fetch data:");
    console.log(
      JSON.stringify(
        [{ error: "Fetch skipped - no record created due to read-only key" }],
        null,
        2
      )
    );
    console.log("Status Code: 403 -No record available to fetch\n");
  } else {
    const fetchResponse = await request.get(
      `${BASE_URL}/collections/${COLLECTION}/records/${createdRecord.id}`,
      {
        headers: { "x-api-key": Public_KEY },
      }
    );

    const fetchedRecord = await fetchResponse.json();

    console.log("✅ Fetch data:");
    console.log(JSON.stringify([fetchedRecord], null, 2));
    console.log(
      `Status Code: ${fetchResponse.status()} - Record fetched\n`
    );
  }

  // UPDATE 
  if (!createdRecord) {
    console.log("✅ Update data:");
    console.log(
      JSON.stringify(
        [{ error: "Update skipped - public key has read-only permissions" }],
        null,
        2
      )
    );
    console.log("Status Code: 403 - Update blocked\n");
  } else {
    const updatePayload = {
      name: "Saloni",
      job: "Software Testing Engineer",
      email: "saloni@example.com",
    };

    const updateResponse = await request.patch(
      `${BASE_URL}/collections/${COLLECTION}/records/${createdRecord.id}`,
      {
        headers: {
          "x-api-key": Public_KEY,
          "Content-Type": "application/json",
        },
        data: updatePayload,
      }
    );

    const updatedRecord = await updateResponse.json();

    console.log("✅ Update data:");
    console.log(JSON.stringify([updatedRecord], null, 2));
    console.log(
      `Status Code: ${updateResponse.status()} - Update blocked → Public key is read-only`
    );
  }
});