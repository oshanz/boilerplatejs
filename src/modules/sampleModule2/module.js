define(function(require) {

    //dependencies
    var Boiler = require('Boiler'), 
        settings = require('./settings'), 
        EmployeeListRouteHandler = require('./employeeList/component'), 
        EmployeeDetailRouteHandler = require('./employeeDetails/component'), 
        SalesDashboardRouteHandler = require('./salesDashboard/component'),
        TodoRouteHandler = require('./backboneTodo/component');

    return {
        initialize : function(globalContext) {

            var context = new Boiler.Context(globalContext);
            context.addSettings(settings);

            var controller = new Boiler.UrlController($(".appcontent"));
            controller.addRoutes({
                'employee/all' : new EmployeeListRouteHandler(context),
                'employee/{id}' : new EmployeeDetailRouteHandler(context),
                'sales' : new SalesDashboardRouteHandler(context),
                'todo/:action:' : new TodoRouteHandler(context)
            });
            controller.start();
        }
    }

});
