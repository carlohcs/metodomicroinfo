(function(namespace, Handlebars) {
  /**
   * Retorna uma string no formato "uma-texto-a-ser-formatado"
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
    slugged = slugged.replace(/\-/g, ''); // Remove '-'
    slugged = slugged.replace(/\s/g, separator); // Adiciona separador nos espaços
    // Remove acentos
    slugged = slugged.replace(/[áàã]/g, 'a');
    slugged = slugged.replace(/é/g, 'e');
    slugged = slugged.replace(/í/g, 'i');
    slugged = slugged.replace(/ó/g, 'o');
    slugged = slugged.replace(/ú/g, 'u');
    slugged = slugged.replace(/ç/g, 'c');

    return slugged;
  }

  namespace.slug = slug;

  Handlebars.registerHelper('slug', function(context) {
    return slug(context, '-');
  });

})(app.helpers = app.helpers || {}, Handlebars);
