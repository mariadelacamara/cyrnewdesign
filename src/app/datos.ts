import cocina1 from './assets/pagina/cocinas/pieldevidriochica.png';
import cocina2 from './assets/pagina/cocinas/rauvisiochica.jpg';
import cocina3 from './assets/pagina/cocinas/termoformado.jpg';
import cocina4 from './assets/pagina/cocinas/melamina.jpg';
import cocina5 from './assets/pagina/cocinas/lacachica.jpg';


import dormitorio1 from './assets/pagina/dormitorios/dormitorios.png';
import dormitorio2 from './assets/pagina/dormitorios/juveniles.png';

import vestidores1 from './assets/pagina/vestidores/florencia.png';
import vestidores2 from './assets/pagina/vestidores/genova.png';
import vestidores3 from './assets/pagina/vestidores/roma.png';

import juveniles1 from './assets/lineas/dormitorios/Juveniles/imagen1.png';
import juveniles2 from './assets/lineas/dormitorios/Juveniles/imagen2.png';
import juveniles3 from './assets/lineas/dormitorios/Juveniles/imagen3.png';
import juveniles4 from './assets/lineas/dormitorios/Juveniles/imagen4.png';

import dormitorios1 from './assets/lineas/dormitorios/Dormitorios/imagen1.png';
import dormitorios2 from './assets/lineas/dormitorios/Dormitorios/imagen2.png';
import dormitorios3 from './assets/lineas/dormitorios/Dormitorios/imagen3.png';
import dormitorios4 from './assets/lineas/dormitorios/Dormitorios/imagen4.png';

import banos1 from './assets/lineas/baños/imagen1.png';
import banos2 from './assets/lineas/baños/imagen2.png';
import banos3 from './assets/lineas/baños/imagen3.png';
import banos4 from './assets/lineas/baños/imagen4.png';

import muebles1 from './assets/lineas/muebles/imagen1.png';
import muebles2 from './assets/lineas/muebles/imagen2.png';
import muebles3 from './assets/lineas/muebles/imagen3.png';
import muebles4 from './assets/lineas/muebles/imagen4.png';

import piel1 from './assets/lineas/cocinas/cocinapdv1.jpg';
import piel2 from './assets/lineas/cocinas/cocinapdv2.jpg';

import rauvisio1 from './assets/lineas/cocinas/cocina rauvisio/rauvisio1.jpg';
import rauvisio2 from './assets/lineas/cocinas/cocina rauvisio/rauvisio2.jpg';

import termoformado1 from './assets/lineas/cocinas/cocina termoformado/termoformado1.jpg';
import termoformado2 from './assets/lineas/cocinas/cocina termoformado/termoformado2.jpg';

import melamina1 from './assets/lineas/cocinas/cocina melamina/melamina1.jpg';
import melamina2 from './assets/lineas/cocinas/cocina melamina/melamina2.jpg';

import laca1 from './assets/lineas/cocinas/cocina laca/laca1.jpg';
import laca2 from './assets/lineas/cocinas/cocina laca/laca2.jpg';

import florencia1 from './assets/lineas/vestidores/florencia/imagen1.png';
import florencia2 from './assets/lineas/vestidores/florencia/imagen2.png';
import florencia3 from './assets/lineas/vestidores/florencia/imagen3.png';
import florencia4 from './assets/lineas/vestidores/florencia/imagen4.png';

import genova1 from './assets/lineas/vestidores/genova/imagen1.png';
import genova2 from './assets/lineas/vestidores/genova/imagen2.png';
import genova3 from './assets/lineas/vestidores/genova/imagen3.png';
import genova4 from './assets/lineas/vestidores/genova/imagen4.png';

import roma1 from './assets/lineas/vestidores/roma/imagen1.png';
import roma2 from './assets/lineas/vestidores/roma/imagen2.png';
import roma3 from './assets/lineas/vestidores/roma/imagen3.png';
import roma4 from './assets/lineas/vestidores/roma/imagen4.png';


export const lineas = {
    cocinas: [
        {titulo:'Piel de Vidrio', imagen:cocina1, url:"/cocinas/pieldevidrio" },
        {titulo:'Rauvisio', imagen:cocina2, url:"/cocinas/rauvisio" },
        {titulo:'Termoformado', imagen:cocina3, url:"/cocinas/termoformado" },
        {titulo:'Melamina', imagen:cocina4, url:"/cocinas/melamina" },
        {titulo:'Laca', imagen:cocina5, url:"/cocinas/laca" }
    ],
    dormitorios: [
        {titulo:'Dormitorio', imagen:dormitorio1, url:"/dormitorios/dormitorio" },
        {titulo:'Juveniles', imagen:dormitorio2, url:"/dormitorios/juveniles" },
    ],
    vestidores: [
        {titulo:'Florencia', imagen:vestidores1, url:"/vestidores/florencia" },
        {titulo:'Genova', imagen:vestidores2, url:"/vestidores/genova" },
        {titulo:'Roma', imagen:vestidores3, url:"/vestidores/roma" },
    ]
}

export const paginas = {
    dormitorios: {
        juveniles: {
            titulo: 'Juveniles',
            texto1: 'Dormitorios Juveniles',
            texto2: 'Diseñamos y desarrollamos de manera integral dormitorios para niños y adolescentes divertidos y super funcionales para que puedan seguir adáptandose en las distintas etapas de crecimiento.',
            texto3: 'Nuestro trabajo destaca por aunar funcionalidad y estética, siempre de forma personalizada, aportando soluciones a medida para todo tipo de espacios.',
            imagen1: juveniles1,
            imagen2: juveniles2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1265173783577295"
        },
        dormitorios: {
            titulo: 'Dormitorios',
            texto1: 'Diseños vanguardistas, frescos, jugando con colores, formas y materiales, lacas, vidrio, enchapado y ciernás.',
            texto2: 'Buscamos diseñar amoblamientos de primera calidad, y sobre todo, confortables, de forma personalizada, aportando soluciones a medida para los diferentes hábitos o rutinas de vida.',
            texto3: 'Además contamos con diseño de placards y vestidores.',
            imagen1: dormitorios1,
            imagen2: dormitorios2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1140641306030544"
        }, 
    },
    vestidores: {
        florencia:{
            titulo: 'Florencia',
            texto1: 'El Placard Florencia ofrece frentes lisos integrado con un nuevo sistema corredizo donde las guias no se encuentran a la vista ayudando a mantener ocultos los sectores de guardado de indumentaria, calzado y accesorios.',
            texto2: 'Este placard se realiza en melanina con cantos de PVC a tono.',
            texto3: 'Los frentes pueden ser en vidrio, en espejos o en el enchapado deseado. Las divisiones interiores varían según la necesidad de cada cliente para mantener el espacio organizado y funcional.',
            imagen1: florencia1,
            imagen2: florencia2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=356075467820469"
        },
        roma:{
            titulo: 'Roma',
            texto1: 'El placard Roma ofrece frentes con perfiles de aluminio a la vista, detalles unicos donde las guías no se encuentran a la vista ayudando a mantener ocultos los sectores de guardado de indumentaria, calzado y accesorios.',
            imagen1: roma1,
            imagen2: roma2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=356075467820469"

        },
        genova:{
            titulo: 'Genova',
            texto1: 'Combina con vos',
            texto2: 'El vestidor Génova ofrece un gran espacio de guardado y una máxima funcionalidad. Todo esta ordenado, a la vista y de fácil acceso, para hacer tu vida mas fácil y rápida.',
            texto3: 'Es una opción para los amantes de la ropa y el orden. Estantes, colgantes y cajones continuos dan como resultado un mueble despojado de tiradores y máxima funcionalidad. Recomendado para ambientes amplios, normalmente se lo arma sin puertas, facilitando la visión y la búsqueda de tus objetos, combinado con la ambientacíón del espacio. ',
            imagen1: genova1,
            imagen2: genova2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=356075467820469"
        }
    },
    cocinas:{
        termoformado: {
            titulo: 'Termoformado',
            texto1: 'Cocina resistente y duradera',
            texto2: 'El revestimiento termoformado posee características que le confieren al producto terminaciones y colores inalterables a lo largo del tiempo.',
            texto3: 'Fácil mantenimiento, limpieza, resistencia a la humedad, impacto y abrasión. Versatilidad para la elaboración de diversos diseños.',
            imagen1: termoformado1,
            imagen2: termoformado2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1436317913129547"
        },
        rauvisio: {
            titulo: 'Rauvisio',
            texto1: 'Hacé que tu cocina brille!',
            texto2: 'Es un laminado de última generación y gracias a su excelente efecto relieve brillante, puede sustituir los costosos elementos lacados de alta calidad.',
            texto3: 'Además, es altamente resistente y no se producen alteraciones en su color.',
            imagen1: rauvisio1,
            imagen2: rauvisio2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1103485299746145"
        },
        melamina: {
            titulo: 'Melamina',
            texto1: 'Versatilidad a tu alcance',
            texto2: 'Posibilita realizar diseños tanto elegantes como modernos, por lo que podrás encontrar justo lo que necesitas en un mueble de este material',
            texto3: 'Además es resistente al vapor y a la humedad y muy fácil de limpiar.',
            imagen1: melamina2,
            imagen2: melamina1,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1109482399146435"
        },
        piel: {
            titulo: 'Piel de Vidrio',
            texto1: 'Ponele color a tu cocina!',
            texto2: 'Realizadas en vidrio, pueden combinarse con otros materiales de primera calidad.',
            texto3: 'Moderna o vintage, se adapta a tu estilo. Podés elegir entre mas de 1000 colores!',
            imagen1: piel1,
            imagen2: piel2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1086988634729145"
        },
        laca: {
            titulo: 'Laca',
            texto1: 'Cocina distinguida',
            texto2: 'Material exclusivo, con una amplia variedad de colores lo que hace que tu cocina sea totalmente personalizada.',
            texto3: 'Preferidos por sus posibilidades de diseño, modulación, colores y texturas. De fácil limpieza y acabado estético.',
            imagen1: laca1,
            imagen2: laca2,
            conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=357913554303327"
        }
    },
    muebles:{
        titulo: 'Muebles',
        texto1: 'El espacio que vivis todos los dias merece el mayor diseño. Pensamos, diseñamos y fabricamos todo tipo de muebles para hacer tu vida mas confortable y práctica.',
        texto2: 'Trabajamos para crear espacios de calidad perdurables en el tiempo. Hacemos amoblamientos para el hogar y también comerciales.',
        texto3: 'Envianos tu idea y recibí asesoramiento por parte de nuestros profesionales.',
        imagen1: muebles1,
        imagen2: muebles2,
        conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1153733381388003"
    },
    banos: {
        titulo: 'Baños',
        texto1: 'Reforma tu baño!',
        texto2: 'Rediseñamos baños y ofrecemos soluciones innovadoras que mejoraran tu calidad de vida. hacemos todo tipo de reformas, integrales y parciales de baños, adaptandonos al espacio y estilo de cada persona.',
        texto3: 'Contamos con amplia variedad de bachas y grifería de primera calidad con modernos diseños para que tu baño se destaque. Nuestros proyectos aseguran un diseño innovador y un óptimo aprovechamiento del espacio otorgando la comodidad e intimidad que precisa.',
        imagen1: banos1,
        imagen2: banos2,
        conocemas: "https://www.facebook.com/pg/amoblamientoscyr/photos/?tab=album&album_id=1112801475481194"
    }
}

