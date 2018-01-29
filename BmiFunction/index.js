module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.weight && req.body.height) {
        context.res = {
	    var bmi = (+weight / (+height * +height)); 
            // status: 200, /* Defaults to 200 */
            body: bmi
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a weight/height on the query string"
        };
    }
    context.done();
};
