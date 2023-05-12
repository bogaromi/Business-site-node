var view = require("./view");

exports.homePage = function(response)
{

    view.begin("Start-Up Digital", response);

    view.aboutUs(response);

    view.end(response);
    
};
exports.ourJobs = function(response)
{

    view.begin("Munkáink", response);

    view.referencies(response);

    view.end(response);
    
};
exports.contactInfo = function(response)
{

    view.begin("Elérhetőségeink", response);

    view.contactDetails(response);

    view.end(response);
    
};
exports.contactPage = function(response)
{

    view.begin("Kapcsolat", response);

    view.contactUs(response); 
    view.contactForm(response); 

    view.end(response);
    
};




