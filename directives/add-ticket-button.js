app.directive('addticket', function() {
    return {
        restrict: 'E',
        scope: {

        },
        template: _.join(['<form class="form-inline" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">',
        '<input type="hidden" name="cmd" value="_s-xclick">',
        '<input type="hidden" name="hosted_button_id" value="K7DVDPYFZNK3G">',
        '<input type="hidden" name="on0" value="Select">',
        '<input type="hidden" name="currency_code" value="CAD">',
        '<select class="form-control" name="os0">',
        '<option value="Adult">Adult $20.00 CAD</option>',
        '<option value="Student">Student $10.00 CAD</option>',
        '<option value="Child">Child $5.00 CAD</option>',
        '<option value="Special Guest">VIP $50.00 CAD</option>',
        '</select>',
        '<button type="submit" class="btn btn-success">add <i class="fa fa-cart-plus fa-2"></i></button>',
        '</form>'], '')

    }
});