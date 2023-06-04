const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
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
app.use(morgan("dev"));

// verify JWT

const verifyJWT = (req, res, next) => {
	const authorization = req.headers.authorization;
	if (!authorization) {
		return res.send({ error: true, message: "You Are Not Authorized" });
	}
	const token = authorization.split(" ")[1];
	jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
		if (error) {
			return res
				.status(401)
				.send({ error: true, message: "Unauthorized" });
		}
		req.decoded = decoded;
		next();
	});
};

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

		app.post("/jwt", (req, res) => {
			const user = req.body;
			const token = jwt.sign(user, process.env.TOKEN_SECRET, {
				expiresIn: "1h",
			});

			res.send(token);
		});

		app.put("/users/:email", async (req, res) => {
			const email = req.params.email;
			const user = req.body;
			const query = { email: email };
			const options = { upsert: true };
			const updateDoc = {
				$set: user,
			};
			const result = await usersCollection.updateOne(
				query,
				updateDoc,
				options
			);
			res.send(result);
		});

		app.get("/users", async (req, res) => {
			const result = await usersCollection.find().toArray();
			res.send(result);
		});

		app.get("/packages", async (req, res) => {
			const result = await packagesCollection.find().toArray();
			res.send(result);
		});

		// Cart API's ----------------------------------------------------

		app.get("/cart",verifyJWT, async (req, res) => {
			const email = req.query.email;
			if (!email) {
				res.send([]);
      }
      console.log(req.decoded.email);

			const query = { email: email };
			const result = await cartCollection.find(query).toArray();
			res.send(result);
    });
    


		app.post("/cart", async (req, res) => {
			const cartItem = req.body;
			const result = await cartCollection.insertOne(cartItem);
			res.send(result);
		});
		app.delete("/cart/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };

			const result = await cartCollection.deleteOne(query);
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
