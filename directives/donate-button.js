app.directive('donate', function() {
    return {
        restrict: 'E',
        scope: {

        },
        template: _.join(['<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">',
            '<input type="hidden" name="cmd" value="_s-xclick">',
            '<input type="hidden" name="hosted_button_id" value="ND5JG2NZLNAZC">',
            '<button type="submit" class="btn btn-primary btn-lg"><strong> DONATE </strong> <i class="fa fa-heart"></i></button>',
            '</form'], '')

    }
});