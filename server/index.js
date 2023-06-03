const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.DB_ACCESS_SECRET;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		const usersCollection = client.db("devTrav").collection("users");
		const cartCollection = client.db("devTrav").collection("cart");
		const packagesCollection = client.db("devTrav").collection("packages");

		app.put("/users/:email", async (req, res) => {
			const email = req.params.email;
			const user = req.body;
		});

		app.get("/users", async (req, res) => {
			const result = await usersCollection.find().toArray();
			res.send(result);
		});

		app.get("/packages", async (req, res) => {
			const result = await packagesCollection.find().toArray();
			res.send(result);
		});

		// cart-----------------------------------------
		// ================================================

		app.get("/cart", async (req, res) => {
			const email = req.query.email;
			const query = { email: email };
			const result = await cartCollection.find(query).toArray();
			res.send(result);
		});

		app.post("/cart", async (req, res) => {
			console.log("Hitted");
			const cartItem = req.body;
			const result = await cartCollection.insertOne(cartItem);
			res.send(result);
		});

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("devTrav Server is running..");
});

app.listen(port, () => {
	console.log(`devTrav is running on port ${port}`);
});