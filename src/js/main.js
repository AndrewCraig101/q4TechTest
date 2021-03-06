// One small syntax error corrected on this page and a span containing file-size and file_type added on line 17, 18.

var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item ">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'+
                    '</a>' +

                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" alt="Report file size and type" target="_blank">{{title}} <span>({{file_size}} {{file_type}})</span></a>' + 
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +

                '</article>' +
                
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();