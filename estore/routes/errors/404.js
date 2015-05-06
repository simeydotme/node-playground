    
    module.exports = function(req, res, next) {

        res.status(404);

        if (req.accepts("html")) {
            res.render("error/404", { url: req.url });
            return;
        }

        if (req.accepts("json")) {
            res.send({ error: "Not found" });
            return;
        }

        res.type("txt").send("Not found");

    };