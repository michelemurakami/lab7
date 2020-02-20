var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
    //response.render('index', projects["viewAlt"]=false);
    projects["viewAlt"] = false;
    response.render('index', projects);
};

exports.viewAlt = function(request, response){
  	//response.render('index', projects["viewAlt"]=true);
    projects["viewAlt"] = true;
    response.render('index', projects);
};
