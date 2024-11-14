const axios = require("axios");

const getJobs = async (req, res) => {
    const { description, location, full_time, page } = req.query;

    try {
        const { data } = await axios.get("https://dev6.dansmultipro.com/api/recruitment/positions.json", {
            params: { description, location, full_time, page },
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch jobs" });
    }
};

const getJobDetail = async (req, res) => {
    const { id } = req.params;

    try {
        const { data } = await axios.get(`https://dev6.dansmultipro.com/api/recruitment/positions/${id}`);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch job details" });
    }
};

module.exports = { getJobs, getJobDetail };
