
let photo_principale = document.getElementById("photo_principale");
let titre = document.getElementById("titre");
let description = document.getElementById("description");
let container = document.querySelectorAll(".container")[0];
let logo_lion = document.getElementById("logo_lion");
let logo_hb = document.getElementById("logo_hb");
function sel_prod(path ,nom_prod){
    photo_principale.src = path;
    if(nom_prod == "selecto"){
        titre.innerHTML = "selecto";
        description.innerHTML = "Lancée en 1907 sous le nom de marque Victoria , la boisson Selecto incarne de par son goût unique l’originalité algérienne Elle allie avec douceur les arômes naturels de pomme et de caramel";
        container.style.background = "#1128C4";
    }else if(nom_prod == "cola"){
        titre.innerHTML = "hamoud cola";
        description.innerHTML = " Découvrez notre boisson Hamoud cola, une explosion de saveurs captivantes dans chaque gorgée. Avec son mélange équilibré de douceur caramélisée et de notes épicées,cette boisson désaltérante est un incontournable pour tous les amateurs de sodas.Rafraîchissante et revigorante,elle vous offre un plaisir pétillant à chaque instant.";
        container.style.background = "none";
    }else if(nom_prod == "slim"){
        titre.innerHTML = "slim orange";
        description.innerHTML = "Dans les années 1950, sous l'égide du slogan Slim, le citron qui prime, l'aventure commerciale de cette boisson au goût fruité prit son envol. Depuis, cette gamme n'a cessé de s'enrichir, s'adaptant aux palais toujours plus exigeants et diversifiés des Algériens.";
        container.style.background = "#fc8813";

    }else{
        titre.innerHTML = "la blanche";
        description.innerHTML = "La limonade incontournable de Hamoud Boualem, Hamoud la blanche, a été médaillée d’or en 1889 lors de l'exposition universelle de Paris. Cette boisson riche en huiles essentielles de citron, est devenue un véritable emblème de la marque, perpétuant ainsi une tradition transmise de génération en génération.";
        container.style.background = "#ffcd2c";
    }


}