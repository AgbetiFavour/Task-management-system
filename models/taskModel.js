const mongoose = require("mongoose")
const slugify = require("slugify")
const validator = require("validator")

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "A task must have a title"],
			unique: true,
			trim: true,
			maxlength: [
				100,
				"The task title must have less than or equal to 100 characters",
			],
			minlength: [
				5,
				"The task title must have more than or equal to 5 characters",
			],
		},
		slug: String,
		description: {
			type: String,
			trim: true,
			required: [true, "A task must have a description"], 
		},
		dueDate: {
			type: Date,
			required: [true, "A task must have a due date"],
		},
		priority: {
			type: String,
			required: [true, "A task must have a priority level"],
			enum: {
				values: ["low", "medium", "high"],
				message: "Priority is either low, medium, or high",
			},
		},
		createdAt: {
			type: Date,
			default: Date.now(),
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	
)

// DOCUMENT MIDDLEWARE: RUN BEFORE THE .SAVE() AND .CREATE()
taskSchema.pre("save", function(next) {
	// console.log(this);
	this.slug = slugify(this.title, { lower: true }) 
	next()
})

// // QUERY MIDDLEWARE
// tourSchema.pre(/^find/, function(next) {
// 	// tourSchema.pre('find', function(next) {
// 	this.find({ secretTour: { $ne: true } })
// 	this.start = Date.now()
// 	next()
// })
taskSchema.pre(/^find/, function(next) {
	this.populate({
		path: "guides",
		select: "-_v -passwordChangedAt",
	})
	next()
})

taskSchema.post(/^find/, function(docs, next) {
	next()
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task
 