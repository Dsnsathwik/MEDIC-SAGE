import diseaseModel from "../models/diseaseModel.js";

// Controller function to fetch disease by name
export const fetchDiseaseByName = async (req, res) => {
    try {
        const { diseaseName } = req.body;
        console.log(diseaseName)
        // Find disease by name in the database
        // const result = await diseaseModel.insertMany({
        //     disease: diseaseName,
        //     summary: "hello world",
        //     precaution: "hello world"
        // })

        // console.log(result)

        const disease = await diseaseModel.findOne({ disease: diseaseName});
        console.log(disease)

        if (!disease) {
            return res.status(404).json({ message: "Disease not found" });
        }

        res.status(200).json({ message: "Disease found", disease });
    } catch (error) {
        console.error("Error fetching disease data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const fetchAll = async (req, res) => {
    try {
        
        const disease = await diseaseModel.find();
        console.log(disease)

        if (!disease) {
            return res.status(404).json({ message: "Disease not found" });
        }

        res.status(200).json({ message: "All Disease found", disease });
    } catch (error) {
        console.error("Error fetching disease data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};