window.onload = function() {
    var paper = new Raphael(document.getElementById('map'), 900, 750);

    var crocus = paper.rect(300, 600, 250, 100);
    var crocus_text = paper.text(230, 550, "Crocus");
    var crocus_box = paper.rect(350, 300, 175, 200, 20);
    var crocus_description = paper.text(440, 400, "Crocus\nType : Cafeteria\nNombre de places : xx\n");
    crocus_box.attr({fill: 'pink'});
    crocus.transform('r45, 450, 375');

    var pasteur = paper.rect(280, 50, 250, 100);
    var pasteur_text = paper.text(230, 210, "Salle Pasteur");
    pasteur.transform('r-45, 450, 375');
}