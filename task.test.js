const request = require("supertest")
const mongoose = require("mongoose")
const app = require("./app") 
const Task = require("./models/taskModel")

describe("Task API Endpoints", () => {
	beforeAll(async () => {
		// Connect to a test database
		const DB =
			process.env.DATABASE
		await mongoose.connect(DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	})

	afterAll(async () => {
		// Cleanup: Delete all tasks and disconnect the database
		await Task.deleteMany({})
		await mongoose.connection.close()
	})

	describe("POST /api/v1/tasks", () => {
		it("should create a new task", async () => {
			const newTask = {
				title: "Test Task",
				description: "This is a test task",
				dueDate: "2025-01-01",
				priority: "high",
			}

			const response = await request(app)
				.post("/api/v1/tasks")
				.send(newTask)
				.expect(201) // Expect HTTP 201 Created

			// Assertions
			expect(response.body.status).toBe("success")
			expect(response.body.data.task).toHaveProperty("_id")
			expect(response.body.data.task.title).toBe(newTask.title)
		})
	})

	describe("GET /api/v1/tasks", () => {
		it("should return all tasks", async () => {
			// Seed a task for testing
			await Task.create({
				title: "Another Task",
				description: "This is another test task",
				dueDate: "2025-01-02",
				priority: "medium",
			})

			const response = await request(app)
				.get("/api/v1/tasks")
				.expect(200) // Expect HTTP 200 OK

			// Assertions
			expect(response.body.status).toBe("success")
			expect(response.body.results).toBeGreaterThan(0) // Ensure at least one task exists
			expect(response.body.data.tasks.length).toBeGreaterThan(0)
			expect(response.body.data.tasks[0]).toHaveProperty("title")
		})
	})
})
