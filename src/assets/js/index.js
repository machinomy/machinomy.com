$(() => {
    if ($('#landing-main')) {
        let allElements = $('h2 span.toggle');
        allElements.each((i, node) => {
           let element = $(node);
           element.click(() => {
               allElements.removeClass('active');
               element.addClass('active');

               let allExampleElements = $('.window-content .example');
               allExampleElements.addClass('hide');

               let toggleName = element.data('toggle');
               let exampleElement = $('.window-content .example.example-' + toggleName);
               exampleElement.removeClass('hide');
           });
        });
    }
});
