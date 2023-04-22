const lilyRoute = (req, res) => {
    res.send('Lily Huang');
}
const chloeRoute = (req,res) => {
    res.send("Chloe Huang");
}
const andyRoute = (req,res) => {
    res.send("Andy Hsieh");
}
module.exports = {
    lilyRoute,
    chloeRoute,
    andyRoute
};