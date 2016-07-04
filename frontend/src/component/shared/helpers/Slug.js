(function(namespace, Handlebars) {
  /**
   * Return a string with the format "string-to-be-formated"
   *
   * @param  {String} text
   * @param  {Sttring} separador
   * @return {String}
   */
  function slug(text, separator) {
    var
      slugged;

    separator = separator || '-';

    slugged = text.toLowerCase();
    slugged = slugged.replace(/\-/g, '');
    slugged = slugged.replace(/\s/g, separator);
    // Remove acentos
    slugged = slugged.replace(/[áàã]/g, 'a');
    slugged = slugged.replace(/é/g, 'e');
    slugged = slugged.replace(/í/g, 'i');
    slugged = slugged.replace(/ó/g, 'o');
    slugged = slugged.replace(/ú/g, 'u');
    slugged = slugged.replace(/ç/g, 'c');

    return slugged;
  }

  namespace.Slug = slug;

  Handlebars.registerHelper('slug', function(context) {
    return slug(context, '-');
  });

})(app.helpers = app.helpers || {}, Handlebars);
