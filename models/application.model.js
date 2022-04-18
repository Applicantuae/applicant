const mongoose = require("mongoose");
const Approve = require("./approved.model")
const opts = { toJSON: { virtuals: true } };

const ApplicationSchema = new mongoose.Schema({
  first_name: {
    type: String,
    // required: true,
  },
  last_name: {
    type: String,
    // required: true,
  },

  mobile_phone: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: [true, "Please add an email"],
    // unique: true,
    match: [
      /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  mother_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    require: true,
  },
  father_name: {
    type: String,
    // required: true,
  },
  birth_date: {
    type: Date,
    // required: true,
  },
  country_of_birth: {
    type: String,
    // required: true,
  },
  nationality: {
    type: String,
    // required: true,
  },
  country_of_residence: {
    type: String,
    // required: true,
  },
  city_of_residence: {
    type: String,
    // required: true,
  },
  whatsapp_number: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  passport_date_of_issue: {
    type: Date,
    // required: true,
  },
  passport_number: {
    type: String,
    // required: true,
  },
  passport_date_of_expire: {
    type: Date,
    // required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
  profile_picture:[
    {
      imageUrl: {
        type: String,
        // required: true
      }
    }
  ],
  passport:[
    {
      imageUrl: {
        type: String,
        // required: true
      }
    }
  ],

  diploma:[
    {
      imageUrl: {
        type: String,
        // required: true
      }
    }
  ],

  transcript:[
    {
      imageUrl: {
        type: String,
        // required: true
      }
    }
  ],
  approve: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Approve",
  },
],
// S1 is for university
s1: {
  type: String,
  // required: true,
},
// S2 for Degree and University
s2: {
  type: String,
  // required: true,
},
// S3 for degree type bachelor, master
s3: {
  type: String,
  // required: true,
},
// S4 for language
s4: {
  type: String,
  // required: true,
},


}, 
opts
);

ApplicationSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Approve.deleteMany({
      _id: {
        $in: doc.approve,
      },
    });
  }
});



module.exports = mongoose.model("Application", ApplicationSchema);
