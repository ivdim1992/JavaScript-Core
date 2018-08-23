$(() => {
    loadTemplates();
    const  main = $('#main')

    let context = {
          contacts: [
              {firstName: 'Pesho', lastName:'Ivanov',email:'adad@abv.bg',phone:'012041023'},
              {firstName: 'Ivanka', lastName:'Ivanova',email:'ivanka@abv.bg',phone:'088128381'}
          ]
        };

    async function loadTemplates() {
        const [contactSource,listSource] = await Promise.all([$.get('contact.html'),$.get('contactsList.html')])


        Handlebars.registerPartial('contact',contactSource)
        let listTemplate = Handlebars.compile(listSource);
        let contactTemplate = Handlebars.compile(contactSource);

        main.html(listTemplate(context))
        $('#other').html(contactTemplate(context.contacts[1]))
    }
})