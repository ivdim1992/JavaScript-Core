handlers.contactController = function (ctx) {
    $.get('data.json')
        .then(function (data) {
            ctx.contacts = data
        });

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        contact: './templates/common/contact.hbs',
        contact_list: './templates/common/contactList.hbs',
        contact_details: './templates/common/details.hbs'
    }).then(function () {
        ctx.partials = this.partials;
        ctx.partial('./templates/contacts.hbs')
    })
};