import mongoose from "mongoose";

const DiseaseSchema = {
    disease:{type: String,required: true},
    summary: {type: String},
    precaution: {type: String}
}

const diseaseModel = mongoose.model("new_diseases", DiseaseSchema)
export default diseaseModel