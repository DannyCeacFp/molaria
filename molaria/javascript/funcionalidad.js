//funcion para cambiar idioma
function cambiarIdioma() {
 

  var idioma=window.localStorage.getItem("idioma")
  if (idioma==null) {
      idioma="castellano";
  }

    $.ajax({
        
        url: 'javascript/idiomas.json',
        dataType: 'json',
        success: function(data) {
            
            
            if (idioma=="castellano") {
                for (let a in data.castellano) {
                    $("."+a).html(data.castellano[a]);
                }
            }else if (idioma=="ingles") {
                for (let a in data.ingles) {
                    $("."+a).html(data.ingles[a]);
                }
            }else if (idioma=="catalan") {
                for (let a in data.catalan) {
                    $("."+a).html(data.catalan[a]);
                }
            }
        },
        error: function(error) {
            debugger
        }
      });  
}


//cargando la pagina de inicio y el idioma castellano
$(document).ready(function () {
  cambiarIdioma()
});

//seleccionar idioma
$("body").on("click",".idioma", function () {
    window.localStorage.setItem("idioma",$(this).attr("data-idioma"))
    cambiarIdioma()

});

/*
Cambiar de mamá a papá:
cuento-parrafo-2"
cuento-parrafo-3"
cuento-parrafo-43
cuento-parrafo-44
*/


/*traduccion index
{
  "index-texto-1": "Cuento",
  "index-texto-2": "MOLARIA",
  "index-texto-3": "INICIO",
  "index-texto-4": "CUENTO",
  "index-texto-5": "INFORMACIÓN",
  "index-texto-6": "Imagen",
  "index-texto-7": "Castellano",
  "index-texto-8": "Inglés",
  "index-texto-9": "Catalán",
  "index-texto-10": "DATOS DE CONTACTO:",
  "index-texto-11": "Teléfono: 911 08 94 03",
  "index-texto-12": "Correo: info@ceacfp.com",
  "index-texto-13": "ENCUÉNTRANOS EN:",
  "index-texto-14": "Redes sociales:",
  "index-texto-15": "Instagram",
  "index-texto-16": "Twitter",
  "index-texto-17": "Facebook",
  "index-texto-18": "Dirección: Pl. Cronos, 1, 28037 Madrid"
  "indice-texto-1": "LEER CUENTO",
  "indice-texto-2": "INFORMACIÓN"
}

ingles
{
  "index-texto-1": "Story",
  "index-texto-2": "MOLARIA",
  "index-texto-3": "HOME",
  "index-texto-4": "STORY",
  "index-texto-5": "INFORMATION",
  "index-texto-6": "Image",
  "index-texto-7": "Spanish",
  "index-texto-8": "English",
  "index-texto-9": "Catalan",
  "index-texto-10": "CONTACT INFORMATION:",
  "index-texto-11": "Phone: 911 08 94 03",
  "index-texto-12": "Email: info@ceacfp.com",
  "index-texto-13": "FIND US AT:",
  "index-texto-14": "Social media:",
  "index-texto-15": "Instagram",
  "index-texto-16": "Twitter",
  "index-texto-17": "Facebook",
  "index-texto-18": "Address: Pl. Cronos, 1, 28037 Madrid"
  "indice-texto-1": "READ STORY",
  "indice-texto-2": "INFORMATION"
}

catalan
{
  "index-texto-1": "Conte",
  "index-texto-2": "MOLARIA",
  "index-texto-3": "INICI",
  "index-texto-4": "CONTE",
  "index-texto-5": "INFORMACIÓ",
  "index-texto-6": "Imatge",
  "index-texto-7": "Castellà",
  "index-texto-8": "Anglès",
  "index-texto-9": "Català",
  "index-texto-10": "DADES DE CONTACTE:",
  "index-texto-11": "Telèfon: 911 08 94 03",
  "index-texto-12": "Correu: info@ceacfp.com",
  "index-texto-13": "TROBA'NS A:",
  "index-texto-14": "Xarxes socials:",
  "index-texto-15": "Instagram",
  "index-texto-16": "Twitter",
  "index-texto-17": "Facebook",
  "index-texto-18": "Adreça: Pl. Cronos, 1, 28037 Madrid",
  "indice-texto-1": "LLEGEIX CONTE",
  "indice-texto-2": "INFORMACIÓ"
}



*/


/*
traduccion informacion
castellano
{
  "info-texto-1": "BIENVENIDOS A MOLARIA",
  "info-texto-2": "¿Quiénes somos?",
  "info-texto-3": "¿Qué es Molaria? Dens os lo cuenta…",
  "info-texto-4": "¿Cuál es su finalidad?",
  "info-texto-5": "Nuestros objetivos, lo más importante",
  "info-texto-6": "¿Quiénes lo van a llevar a cabo?",
  "info-texto-7": "Para finalizar, un anticipo de nuestra historia…",
  "info-texto-8": "CEAC FP MADRID. Pl. Cronos, 1, 28037 Madrid",
  "info-texto-9": "CEAC FP BARCELONA. C. de Salvador Espriu, 38, 08908 L'Hospitalet de Llobregat, Barcelona",
  "info-texto-10": "Contamos con una experiencia educativa de más de 75 años, pero no nos limitamos a ella. Le sumamos la del abanico de empresas que avalan nuestras formaciones y colaboran como desarrolladoras o participantes en los planes de estudios.",
  "info-texto-11": "¡Hola!, soy Dens, el protagonista de este proyecto. Molaria es un programa educativo que va dirigido al alumnado del segundo ciclo de educación infantil con edades comprendidas entre los 3 y los 6 años en materia de salud bucodental.",
  "info-texto-12": "Este proyecto engloba de una forma lúdica y atractiva los hábitos de alimentación saludable, las técnicas de higiene oral adaptadas a esta etapa y la utilización de los diferentes productos específicos para ello. Este programa se llevará a cabo a través de la técnica de la gamificación, accesible y sostenible en el tiempo para ponerlo en práctica de manera efectiva y sencilla.",
  "info-texto-13": "Se trabajará en la prevención de problemas y patologías bucodentales concretas de los niños entre 3 y 6 años, es decir, atajar el problema antes de que aparezca.",
  "info-texto-14": "Dado que la aparición de estas patologías está asociada a hábitos alimenticios y de higiene bucodental, se aborda el proyecto desde un punto de vista integral que incluye todos los factores implicados.",
  "info-texto-15": "Fomentar el autocuidado y la salud bucodental en la población infantil.",
  "info-texto-16": "Concienciar sobre la importancia de la alimentación para el cuidado de la salud bucodental.",
  "info-texto-17": "Adaptar el proyecto educativo en diferentes lenguas.",
  "info-texto-18": "Desarrollar un proyecto accesible.",
  "info-texto-19": "Aplicar una metodología lúdica y participativa.",
  "info-texto-20": "Proporcionar recursos y herramientas digitales a los centros educativos, docentes y familias para la promoción de la salud bucodental en la población infantil.",
  "info-texto-21": "Ofrecer a los departamentos de orientación de los centros educativos la posibilidad de descubrir la Formación Profesional y el trabajo que se realiza en cada una de las familias profesionales.",
  "info-texto-22": "Molaria cuenta un episodio en la vida de Dens, un niño al que le gusta mucho comer dulces, entre ellos chocolate, galletas, caramelos, piruletas… Un día, sus padres le llevan por primera vez a la consulta del dentista y al examinarlo comienza la historia.",
  "info-texto-23": "Una muela nos cuenta la historia de Molaria y sus habitantes, la ciudad dental de Dens. Comienza presentando a los dientes y sus funciones. En un principio, sólo había dos incisivos, población que fue aumentando y variando a medida que Dens iba creciendo."
}
ingles
{
  "info-text-1": "WELCOME TO MOLARIA",
  "info-text-2": "Who we are?",
  "info-text-3": "What is Molaria? Dens tells you...",
  "info-text-4": "What is its purpose?",
  "info-text-5": "Our goals, the most important",
  "info-text-6": "Who will carry it out?",
  "info-text-7": "To finish, a preview of our story...",
  "info-text-8": "CEAC FP MADRID. Pl. Cronos, 1, 28037 Madrid",
  "info-text-9": "CEAC FP BARCELONA. C. de Salvador Espriu, 38, 08908 L'Hospitalet de Llobregat, Barcelona",
  "info-text-10": "We have an educational experience of more than 75 years, but we don't limit ourselves to that. We add the experience of the range of companies that endorse our training and collaborate as developers or participants in the study plans.",
  "info-text-11": "Hello!, I'm Dens, the protagonist of this project. Molaria is an educational program aimed at students in the second cycle of early childhood education aged between 3 and 6 years in oral health matters.",
  "info-text-12": "This project encompasses in a playful and attractive way the habits of healthy eating, oral hygiene techniques adapted to this stage, and the use of different specific products for it. This program will be carried out through the technique of gamification, accessible and sustainable over time to implement it effectively and simply.",
  "info-text-13": "We will work on the prevention of specific oral problems and pathologies in children between 3 and 6 years old, that is, tackle the problem before it appears.",
  "info-text-14": "Since the appearance of these pathologies is associated with dietary and oral hygiene habits, the project is approached from a comprehensive perspective that includes all the factors involved.",
  "info-text-15": "Promote self-care and oral health in the child population.",
  "info-text-16": "Raise awareness about the importance of nutrition for the care of oral health.",
  "info-text-17": "Adapt the educational project in different languages.",
  "info-text-18": "Develop an accessible project.",
  "info-text-19": "Apply a playful and participatory methodology.",
  "info-text-20": "Provide digital resources and tools to educational centers, teachers, and families for the promotion of oral health in the child population.",
  "info-text-21": "Offer the guidance departments of educational centers the opportunity to discover Vocational Training and the work carried out in each of the professional families.",
  "info-text-22": "Molaria tells an episode in the life of Dens, a boy who loves to eat sweets, including chocolate, cookies, candies, lollipops... One day, his parents take him for the first time to the dentist's office, and when examining him, the story begins.",
  "info-text-23": "A molar tells us the story of Molaria and its inhabitants, the dental city of Dens. It begins by presenting the teeth and their functions. At first, there were only two incisors, a population that increased and varied as Dens grew."
}
catalan
{
  "info-text-1": "BENVINGUTS A MOLARIA",
  "info-text-2": "Qui som?",
  "info-text-3": "Què és Molaria? Dens us ho explica...",
  "info-text-4": "Quina és la seva finalitat?",
  "info-text-5": "Els nostres objectius, el més important",
  "info-text-6": "Qui ho portarà a terme?",
  "info-text-7": "Per acabar, un avanç de la nostra història...",
  "info-text-8": "CEAC FP MADRID. Pl. Cronos, 1, 28037 Madrid",
  "info-text-9": "CEAC FP BARCELONA. C. de Salvador Espriu, 38, 08908 L'Hospitalet de Llobregat, Barcelona",
  "info-text-10": "Tenim una experiència educativa de més de 75 anys, però no ens limitem a això. Sumem l'experiència del ventall d'empreses que avalen les nostres formacions i col·laboren com a desenvolupadores o participants en els plans d'estudi.",
  "info-text-11": "Hola!, sóc Dens, el protagonista d'aquest projecte. Molaria és un programa educatiu adreçat als alumnes del segon cicle d'educació infantil amb edats compreses entre els 3 i els 6 anys en matèria de salut bucòdental.",
  "info-text-12": "Aquest projecte engloba d'una manera lúdica i atractiva els hàbits d'alimentació saludable, les tècniques d'higiene oral adaptades a aquesta etapa i l'ús dels diferents productes específics per a això. Aquest programa es durà a terme mitjançant la tècnica de la gamificació, accessible i sostenible en el temps per posar-lo en pràctica de manera efectiva i senzilla.",
  "info-text-13": "Treballarem en la prevenció de problemes i patologies bucals concretes dels nens entre 3 i 6 anys, és a dir, abordar el problema abans que aparegui.",
  "info-text-14": "Atès que l'aparició d'aquestes patologies està associada als hàbits alimentaris i d'higiene bucòdental, s'aborda el projecte des d'un punt de vista integral que inclou tots els factors implicats.",
  "info-text-15": "Fomentar l'autocura i la salut bucopoblacióodental en la infantil.",
  "info-text-16": "Conscienciar sobre la importància de l'alimentació per a la cura de la salut bucodental.",
  "info-text-17": "Adaptar el projecte educatiu en diferents llengües.",
  "info-text-18": "Desenvolupar un projecte accessible.",
  "info-text-19": "Aplicar una metodologia lúdica i participativa.",
  "info-text-20": "Proporcionar recursos i eines digitals als centres educatius, docents i famílies per a la promoció de la salut bucodental en la població infantil.",
  "info-text-21": "Ofereixi als departaments d'orientació dels centres educatius la possibilitat de descobrir la Formació Professional i la feina que es realitza a cadascuna de les famílies professionals.",
  "info-text-22": "Molaria explica un episodi a la vida de Dens, un nen a qui li agrada molt menjar dolços, entre ells xocolata, galetes, caràmbans, piruletes... Un dia, els seus pares el porten per primera vegada a la consulta del dentista i en examinar-lo, comença la història.",
  "info-text-23": "Una dent ens explica la història de Molaria i els seus habitants, la ciutat dental de Dens. Comença presentant als dents i les seves funcions. En un principi, només hi havia dos incisius, una població que va anar augmentant i variant a mesura que Dens anava creixent."
}

 */