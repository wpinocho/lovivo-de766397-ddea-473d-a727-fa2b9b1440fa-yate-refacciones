import type { Blog } from '@/lib/supabase'

export const blogPosts: Blog[] = [
  {
    id: '1',
    title: 'Las 10 Tendencias de Yates de Lujo para 2025',
    slug: 'tendencias-yates-lujo-2025',
    excerpt: 'Descubre las innovaciones más exclusivas que están revolucionando el mundo de la navegación de lujo. Desde tecnología de vanguardia hasta diseños sostenibles.',
    content: `
      <h2>El Futuro de la Navegación de Lujo Ha Llegado</h2>
      <p>El 2025 marca un punto de inflexión en la industria náutica de lujo, donde la innovación tecnológica se encuentra con el diseño sostenible y la máxima elegancia. Los yates modernos ya no son solo símbolos de estatus, sino obras maestras de ingeniería que priorizan la experiencia del usuario y el respeto al medio ambiente.</p>
      
      <h3>1. Propulsión Híbrida y Eléctrica</h3>
      <p>Los sistemas de propulsión híbrida están conquistando el mercado premium. Los nuevos motores combinan potencia tradicional con tecnología eléctrica, reduciendo emisiones hasta en un 40% sin sacrificar rendimiento. Marcas como Sunseeker y Ferretti Group lideran esta revolución verde.</p>
      
      <h3>2. Diseño Minimalista Escandinavo</h3>
      <p>El diseño interior se inclina hacia la simplicidad elegante con líneas limpias, materiales naturales y amplios espacios abiertos. La madera clara, el cuero suave y los acabados en piedra natural crean ambientes serenos y sofisticados.</p>
      
      <h3>3. Tecnología de Navegación Autónoma</h3>
      <p>Los sistemas de asistencia a la navegación están alcanzando niveles de sofisticación nunca vistos. Sensores LiDAR, radares de última generación y algoritmos de IA permiten maniobras precisas en puertos y navegación segura en condiciones adversas.</p>
      
      <h3>4. Beach Clubs Expandibles</h3>
      <p>Las plataformas de popa se transforman en espacios de recreación espectaculares. Terrazas que se expanden sobre el agua, piscinas infinitas integradas y áreas de lounge submarinas redefinen la experiencia de estar en contacto con el mar.</p>
      
      <h3>5. Materiales Sostenibles de Lujo</h3>
      <p>El uso de teca reciclada, fibras de cáñamo y materiales compuestos reciclados demuestra que lujo y sostenibilidad van de la mano. Los yates premium ahora presumen de su compromiso ambiental sin comprometer la exclusividad.</p>
      
      <h3>6. Wellness Centers a Bordo</h3>
      <p>Spas completos, saunas finlandesas, baños turcos y gimnasios equipados con tecnología de punta. El bienestar es ahora una prioridad, con espacios dedicados a yoga, meditación y tratamientos holísticos.</p>
      
      <h3>7. Conectividad 5G Satelital</h3>
      <p>Internet de alta velocidad sin importar dónde estés navegando. Los sistemas Starlink y OneWeb permiten videoconferencias, streaming y trabajo remoto desde cualquier punto del océano.</p>
      
      <h3>8. Cines IMAX Privados</h3>
      <p>Salas de entretenimiento con pantallas curvas 8K, sonido envolvente Dolby Atmos y asientos reclinables automáticos. La experiencia cinematográfica premium ahora se vive en alta mar.</p>
      
      <h3>9. Cubiertas Solares Integradas</h3>
      <p>Paneles solares de última generación integrados discretamente en cubiertas y estructuras, generando hasta 50kW de energía limpia para alimentar sistemas de a bordo y reducir el consumo de combustible.</p>
      
      <h3>10. Personalización Extrema</h3>
      <p>Cada detalle a medida del propietario. Desde maderas exóticas específicas hasta sistemas de audio diseñados por marcas como Bang & Olufsen, pasando por obras de arte contemporáneo y mobiliario de diseñadores exclusivos.</p>
      
      <h2>Conclusión</h2>
      <p>El futuro de los yates de lujo combina tecnología, sostenibilidad y experiencias únicas. Los astilleros están respondiendo a una clientela cada vez más exigente que busca no solo exclusividad, sino también consciencia ambiental e innovación constante.</p>
    `,
    featured_image: ['/blog/luxury-yacht-sunset.jpg'],
    status: 'published',
    store_id: '',
    created_at: '2025-01-10T09:00:00Z',
    updated_at: '2025-01-10T09:00:00Z'
  },
  {
    id: '2',
    title: 'Guía Completa: Mantenimiento Premium de tu Yate',
    slug: 'guia-mantenimiento-yate-premium',
    excerpt: 'El mantenimiento adecuado es clave para preservar el valor y rendimiento de tu inversión. Conoce los secretos que usan los profesionales más experimentados.',
    content: `
      <h2>Protege tu Inversión Millonaria</h2>
      <p>Un yate de lujo representa una inversión significativa que requiere cuidados especializados. El mantenimiento preventivo no solo protege tu inversión financiera, sino que garantiza la seguridad de todos a bordo y mantiene el rendimiento óptimo de la embarcación.</p>
      
      <h3>Inspecciones Pre-Navegación</h3>
      <p>Antes de cada salida, realiza una lista de verificación exhaustiva: niveles de fluidos, sistemas eléctricos, equipos de seguridad, y condiciones meteorológicas. Los profesionales recomiendan un check-list digitalizado que registre cada inspección.</p>
      
      <h3>Cuidado del Casco y Gelcoat</h3>
      <p>El casco es la barrera principal contra los elementos. Lávalo con productos especializados después de cada uso en agua salada. Aplica cera marina de alta calidad cada 3 meses y programa pulidos profesionales anuales. Las ampollas en el gelcoat deben tratarse inmediatamente para evitar daños estructurales.</p>
      
      <h3>Sistemas de Motor y Propulsión</h3>
      <p>Cambios de aceite cada 100 horas de operación o anualmente. Filtros de combustible y aire deben reemplazarse según especificaciones del fabricante. Los motores diésel requieren purgas de agua del sistema de combustible y revisión de inyectores profesionalmente cada temporada.</p>
      
      <h3>Mantenimiento de Teca y Maderas</h3>
      <p>La teca requiere limpieza semanal con cepillo suave y productos específicos. Evita limpiadores con ácidos fuertes que degradan las fibras. El aceite de teca debe aplicarse cada 6-8 semanas, mientras que el sellador protector anualmente.</p>
      
      <h3>Sistemas Eléctricos y Electrónicos</h3>
      <p>Revisa conexiones y terminales buscando corrosión mensualmente. Los sistemas de navegación requieren actualizaciones de software regulares. Las baterías marinas necesitan carga de mantenimiento cuando el yate está inactivo y reemplazo cada 3-4 años.</p>
      
      <h3>Tapicería e Interiores</h3>
      <p>Limpieza profunda profesional al inicio y final de temporada. Productos específicos para vinilo marino y cuero náutico. Ventilación constante previene moho y olores. Los colchones y almohadas requieren aireación y almacenamiento en espacios secos durante periodos de inactividad.</p>
      
      <h3>Sistemas de Aire Acondicionado</h3>
      <p>Limpieza de filtros mensual. Revisión de niveles de refrigerante y compresores anualmente. Los sistemas marinos trabajan más duro que los domésticos debido a la humedad y salinidad, por lo que el mantenimiento preventivo es crucial.</p>
      
      <h3>Almacenamiento Invernal</h3>
      <p>Si tu yate permanecerá inactivo: drena todos los sistemas de agua, llena el tanque de combustible y añade estabilizador, desconecta baterías, cubre con lona transpirable y establece un programa de visitas regulares para ventilación y verificación de seguridad.</p>
      
      <h2>La Importancia de Profesionales Certificados</h2>
      <p>Aunque muchas tareas pueden realizarse personalmente, los sistemas complejos requieren técnicos certificados. Establece relaciones con astilleros de confianza y programa mantenimientos según el calendario del fabricante.</p>
    `,
    featured_image: ['/blog/yacht-maintenance.jpg'],
    status: 'published',
    store_id: '',
    created_at: '2025-01-08T14:30:00Z',
    updated_at: '2025-01-08T14:30:00Z'
  },
  {
    id: '3',
    title: 'Diseño de Interiores: Los Yates Más Lujosos del Mundo',
    slug: 'diseno-interiores-yates-lujosos',
    excerpt: 'Un recorrido exclusivo por los interiores más impresionantes jamás creados. Desde suites dignas de palacios hasta tecnología que desafía la imaginación.',
    content: `
      <h2>Cuando el Arte se Encuentra con el Mar</h2>
      <p>Los yates de súper lujo han evolucionado de simples embarcaciones a palacios flotantes donde los diseñadores más prestigiosos del mundo materializan fantasías sin límites. Cada detalle cuenta una historia de artesanía, innovación y buen gusto absoluto.</p>
      
      <h3>La Suite Principal: Retiros en el Mar</h3>
      <p>Las master suites modernas ocupan hasta 200 metros cuadrados, equiparadas con las mejores habitaciones de hotel del mundo. Camas king-size personalizadas, vestidores con climatización específica, baños de mármol con bañeras de hidromasaje y duchas de lluvia panorámicas con vistas al océano.</p>
      
      <h3>Materiales Excepcionales</h3>
      <p>Maderas exóticas como ébano de Macasar, nogal europeo y roble blanco americano. Mármoles italianos de Carrara y Calacatta. Metales preciosos en acabados: oro rosa, bronce pulido y acero inoxidable satinado. Cueros de la mejor calidad provenientes de Italia y Argentina.</p>
      
      <h3>Iluminación Arquitectónica</h3>
      <p>Sistemas de iluminación inteligente que se adaptan a la hora del día. LEDs ocultos crean ambientes dramáticos sin fuentes visibles. Cristales de Murano y lámparas diseñadas por artistas reconocidos se convierten en piezas centrales de cada espacio.</p>
      
      <h3>El Arte del Espacio Abierto</h3>
      <p>Paredes corredizas de vidrio que desaparecen para fusionar interior y exterior. Terrazas de varios niveles conectadas por escaleras esculturales. Ventanales de piso a techo que maximizan las vistas oceánicas desde cada ángulo.</p>
      
      <h3>Cocinas Gourmet Profesionales</h3>
      <p>Equipadas como restaurantes Michelin. Electrodomésticos Gaggenau, Miele y Sub-Zero. Encimeras de cuarzo o granito negro absoluto. Espacios diseñados para chefs profesionales con áreas separadas de preparación, cocción y repostería.</p>
      
      <h3>Colecciones de Arte a Bordo</h3>
      <p>Galerías privadas flotantes con obras de Picasso, Warhol y artistas contemporáneos. Sistemas de seguridad de museo, iluminación especializada y control de humedad para preservar piezas invaluables en ambiente marino.</p>
      
      <h3>Tecnología Invisible</h3>
      <p>Sistemas de automatización Crestron y Control4 que manejan todo desde tablets discretos. Cortinas motorizadas, ventanas electrocrómicas que se oscurecen automáticamente, y sistemas de audio multiroom que desaparecen en la arquitectura.</p>
      
      <h3>Espacios de Bienestar</h3>
      <p>Spas con piscinas de hidroterapia, salas de masajes con vistas panorámicas, gimnasios con equipamiento Technogym, estudios de yoga con pisos de bambú, y saunas con maderas aromáticas escandinavas.</p>
      
      <h2>Los Diseñadores Legendarios</h2>
      <p>Nombres como Terence Disdale, Nuvolari Lenard, Winch Design y Reymond Langton definen el estándar. Sus creaciones no siguen tendencias, las establecen. Cada proyecto es único, reflejando la personalidad y estilo de vida del propietario.</p>
    `,
    featured_image: ['/blog/yacht-interior-luxury.jpg'],
    status: 'published',
    store_id: '',
    created_at: '2025-01-05T11:00:00Z',
    updated_at: '2025-01-05T11:00:00Z'
  },
  {
    id: '4',
    title: 'Tecnología Marina del Futuro: Innovaciones que Cambiarán tu Experiencia',
    slug: 'tecnologia-marina-futuro-innovaciones',
    excerpt: 'Desde inteligencia artificial hasta sistemas de propulsión revolucionarios. Descubre las tecnologías que están redefiniendo la navegación de lujo.',
    content: `
      <h2>Bienvenido al Futuro de la Navegación</h2>
      <p>La industria náutica está experimentando una revolución tecnológica sin precedentes. Innovaciones que parecían ciencia ficción hace una década son ahora realidades que transforman la experiencia de navegación, haciéndola más segura, eficiente y placentera.</p>
      
      <h3>Inteligencia Artificial y Machine Learning</h3>
      <p>Los sistemas de IA aprenden tus patrones de navegación y optimizan automáticamente consumo de combustible, rutas y mantenimiento predictivo. Alertas inteligentes anticipan problemas mecánicos antes de que ocurran, analizando miles de puntos de datos en tiempo real.</p>
      
      <h3>Propulsión de Hidrógeno</h3>
      <p>La próxima frontera de navegación limpia. Yates experimentales ya operan con celdas de combustible de hidrógeno, emitiendo solo vapor de agua. Autonomías de hasta 3,000 millas náuticas sin comprometer potencia o velocidad.</p>
      
      <h3>Realidad Aumentada en Navegación</h3>
      <p>Pantallas HUD (heads-up display) proyectan información de navegación directamente en el campo visual del capitán. Datos de profundidad, obstáculos, rutas y condiciones meteorológicas superpuestos en la vista real del océano.</p>
      
      <h3>Estabilización Giroscópica Avanzada</h3>
      <p>Sistemas como Seakeeper eliminan hasta el 95% del balanceo. Giroscopios de alta velocidad crean un efecto estabilizador que mantiene el yate nivelado incluso en mares agitados, transformando la comodidad a bordo.</p>
      
      <h3>Comunicaciones Satelitales de Nueva Generación</h3>
      <p>Starlink Maritime ofrece velocidades de hasta 350 Mbps en cualquier punto del océano. Videollamadas 4K, gaming online y streaming sin interrupciones. El yate se convierte en una oficina móvil completamente funcional.</p>
      
      <h3>Sistemas de Purificación de Agua</h3>
      <p>Desalinizadores de ósmosis inversa de última generación producen hasta 1,000 litros de agua potable por hora. Sistemas de reciclaje que purifican aguas grises para reutilización en sistemas no potables, reduciendo necesidad de reabastecimiento.</p>
      
      <h3>Energía Solar de Alta Eficiencia</h3>
      <p>Paneles solares flexibles de película delgada con eficiencias superiores al 25%. Integración arquitectónica invisible que no compromete la estética mientras genera suficiente energía para sistemas auxiliares completos.</p>
      
      <h3>Sistemas de Seguridad Biométricos</h3>
      <p>Control de acceso mediante reconocimiento facial y huella digital. Sistemas de CCTV con análisis de video impulsado por IA que detecta intrusos automáticamente. Integración con sistemas de alarma y respuesta automática.</p>
      
      <h3>Cockpits Digitales Integrados</h3>
      <p>Pantallas táctiles 4K de gran formato reemplazan instrumentación tradicional. Sistemas Volvo Penta IPS y Garmin Helm integran todos los controles en interfaces intuitivas. Joysticks de maniobra hacen el atraque tan simple como estacionar un auto.</p>
      
      <h2>El Horizonte Tecnológico</h2>
      <p>Lo que viene es aún más emocionante: baterías de estado sólido con autonomías triplicadas, materiales de grafeno ultra-ligeros, y sistemas de navegación totalmente autónomos. El futuro de la navegación de lujo está siendo escrito hoy.</p>
    `,
    featured_image: ['/blog/yacht-technology.jpg'],
    status: 'published',
    store_id: '',
    created_at: '2025-01-02T16:45:00Z',
    updated_at: '2025-01-02T16:45:00Z'
  }
]