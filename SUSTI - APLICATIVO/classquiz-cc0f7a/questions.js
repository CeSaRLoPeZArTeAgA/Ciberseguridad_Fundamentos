const QUESTION_BANK = [
  {
    id: "pc3-01",
    source: "PC3",
    topic: "PKCS12 / Java KeyStore",
    prompt: "Al recuperar material criptográfico de un archivo PKCS12 mediante la API de Java, ¿qué excepción se lanza específicamente si el dato de activación es incorrecto?",
    explanation: "La excepción específica al intentar recuperar una llave privada protegida con una contraseña incorrecta es UnrecoverableKeyException.",
    options: [
      { text: "FileNotFoundException", correct: false },
      { text: "CertificateException", correct: false },
      { text: "KeyStoreException", correct: false },
      { text: "NoSuchProviderException", correct: false },
      { text: "UnrecoverableKeyException", correct: true }
    ]
  },
  {
    id: "pc3-02",
    source: "PC3",
    topic: "Generación de llaves RSA / JCA",
    prompt: "Al inicializar un objeto KeyPairGenerator, ¿qué parámetros de configuración determinan directamente la robustez y el ecosistema de seguridad de las llaves resultantes?",
    explanation: "El proveedor define la implementación criptográfica concreta y el tamaño de llave determina la resistencia computacional del par generado.",
    options: [
      { text: "El proveedor de seguridad (Provider) establecido al solicitar la instancia.", correct: true },
      { text: "La ruta del sistema de archivos donde se almacenará el código ejecutable.", correct: false },
      { text: "El tamaño de la llave (Key Size) expresado en bits.", correct: true },
      { text: "El Distinguished Name (DN) del usuario final.", correct: false },
      { text: "El alias asignado en el archivo de propiedades del servidor de aplicaciones.", correct: false }
    ]
  },
  {
    id: "pc3-03",
    source: "PC3",
    topic: "PKCS12 / KeyStore y TrustStore",
    prompt: "De acuerdo con los métodos implementados para almacenar KeyStore's y TrustStore's en contenedores PKCS#12, seleccione el procedimiento común entre ambos métodos.",
    explanation: "En ambos procedimientos se crea un contenedor PKCS#12 en memoria con load(null, null) y luego se persiste con una contraseña o dato de activación.",
    options: [
      { text: "Inicializan contenedores en memoria vacíos y sin protección.", correct: true },
      { text: "Utilizan el mismo proveedor criptográfico.", correct: false },
      { text: "Almacenan cadenas de certificados.", correct: false },
      { text: "Manejan el mismo juego de excepciones.", correct: false },
      { text: "Requieren establecer datos de activación.", correct: true }
    ]
  },
  {
    id: "pc3-04",
    source: "PC3",
    topic: "CSR / Certificación digital",
    prompt: "Al procesar un CSR recibido, ¿qué datos críticos pertenecientes a la identidad y estructura del solicitante debe extraer la CA de forma obligatoria para mapearlos dentro del certificado final?",
    explanation: "El CSR transporta el Subject DN y la llave pública que la CA certificará. La firma del CSR verifica posesión de la privada, pero no se mapea como campo final de identidad.",
    options: [
      { text: "La llave pública del solicitante.", correct: true },
      { text: "El historial de certificados previamente emitidos e invalidados del mismo usuario.", correct: false },
      { text: "El Distinguished Name del Sujeto (Subject DN).", correct: true },
      { text: "El algoritmo de cifrado local de la base de datos del usuario.", correct: false },
      { text: "La firma digital que el solicitante aplicó originalmente sobre el archivo del CSR.", correct: false }
    ]
  },
  {
    id: "pc3-05",
    source: "PC3",
    topic: "Firma digital matemática / RSA",
    prompt: "En el protocolo de firma digital con el algoritmo RSA, ¿qué operación matemática realiza estrictamente el emisor para generar el bloque numérico que representa la firma digital?",
    explanation: "En firma RSA eficiente se calcula H(m) y luego se firma con el exponente privado: s = H(m)^d mod n.",
    options: [
      { text: "Elevar el hash del mensaje al exponente público (e) y aplicar el módulo n.", correct: false },
      { text: "Elevar el mensaje al exponente privado (d) y aplicar el módulo n.", correct: false },
      { text: "Multiplicar directamente el mensaje en texto plano por el módulo n.", correct: false },
      { text: "Dividir el exponente privado (d) entre el exponente público (e).", correct: false },
      { text: "Elevar el hash del mensaje al exponente privado (d) y aplicar el módulo n.", correct: true }
    ]
  },
  {
    id: "pc3-06",
    source: "PC3",
    topic: "Java KeyStore / setKeyEntry",
    prompt: "¿Qué componentes e información conjunta son estrictamente necesarios proveer al invocar el método setKeyEntry para guardar exitosamente una entidad de identidad digital en un KeyStore de tipo PKCS12?",
    explanation: "setKeyEntry(alias, privateKey, password, chain) requiere alias, llave privada y cadena de certificados asociada.",
    options: [
      { text: "La llave privada correspondiente a la entidad.", correct: true },
      { text: "La llave pública aislada en formato codificado de bytes puros.", correct: false },
      { text: "Un arreglo de certificados (cadena de certificación) que valide la llave pública.", correct: true },
      { text: "Un alias único en formato de cadena de caracteres.", correct: true },
      { text: "Una lista de revocación de certificados (CRL) actualizada a la fecha.", correct: false }
    ]
  },
  {
    id: "pc3-07",
    source: "PC3",
    topic: "RSA / componentes estructurales",
    prompt: "De acuerdo con la implementación matemática expuesta del protocolo firma digital con el algoritmo RSA, ¿qué componentes estructurales desde las llaves asimétricas son estrictamente necesarios para que el emisor y el receptor completen el ciclo de firma y verificación?",
    explanation: "La firma RSA requiere módulo n, exponente privado d para firmar y exponente público e para verificar.",
    options: [
      { text: "El generador criptográfico aleatorio del par de llaves asimétricas.", correct: false },
      { text: "La contraseña cifrada del contenedor local.", correct: false },
      { text: "El módulo común (n), el cual representa el producto de los dos números primos originales.", correct: true },
      { text: "El exponente privado (d), para la fase exclusiva de generación de la firma.", correct: true },
      { text: "El exponente público (e), para la fase exclusiva de recuperación del hash.", correct: true }
    ]
  },
  {
    id: "pc3-08",
    source: "PC3",
    topic: "Bouncy Castle / JcaContentSignerBuilder",
    prompt: "La clase constructora de un CSR JcaContentSignerBuilder lanza la siguiente excepción cuando sus parámetros de instanciación o configuración no son los adecuados.",
    explanation: "JcaContentSignerBuilder.build(...) puede lanzar OperatorCreationException si no puede construirse el operador de firma.",
    options: [
      { text: "OperatorCreationException", correct: true },
      { text: "InvalidKeyException", correct: false },
      { text: "NoSuchAlgorithmException", correct: false },
      { text: "IOException", correct: false },
      { text: "NoSuchProviderException", correct: false }
    ]
  },
  {
    id: "pc3-09",
    source: "PC3",
    topic: "Certificado autofirmado / Issuer y Subject",
    prompt: "En un certificado digital autofirmado, ¿qué relación matemática y formal existe entre el emisor (Issuer) y el sujeto (Subject)?",
    explanation: "En un certificado autofirmado, Issuer DN = Subject DN y la firma se verifica con la propia llave pública incluida en el certificado.",
    options: [
      { text: "El Subject debe contener de forma obligatoria la dirección web privada de la máquina que aloja el servicio.", correct: false },
      { text: "Los campos Issuer DN y Subject DN deben ser idénticos, y el certificado se valida con su propia llave pública.", correct: true },
      { text: "El Issuer se cifra con un algoritmo simétrico AES mientras que el Subject permanece en texto plano.", correct: false },
      { text: "El Issuer se deja completamente en blanco (null) para indicar que no hay una autoridad superior.", correct: false },
      { text: "El Issuer representa a una CA intermedia externa y el Subject representa al servidor web local.", correct: false }
    ]
  },
  {
    id: "pc3-10",
    source: "PC3",
    topic: "CSR / Bouncy Castle",
    prompt: "¿Qué clase de la biblioteca Bouncy Castle se encarga específicamente de empaquetar y vincular un Subject DN con una llave pública antes de aplicar la firma del CSR?",
    explanation: "JcaPKCS10CertificationRequestBuilder recibe el Subject DN y la llave pública para construir la estructura PKCS#10 del CSR antes de firmarla.",
    options: [
      { text: "OperatorCreationException", correct: false },
      { text: "X500Name", correct: false },
      { text: "JcaContentSignerBuilder", correct: false },
      { text: "JcaPKCS10CertificationRequestBuilder", correct: true },
      { text: "KeyPairGenerator", correct: false }
    ]
  },
  {
    id: "parcial-01",
    source: "Parcial",
    topic: "Hash Algorithms / SHA",
    prompt: "¿Qué algoritmo de la familia SHA produce la máxima longitud en el digest realizando 64 iteraciones?",
    explanation: "SHA-256 produce un digest de 256 bits y usa 64 iteraciones. SHA-512 y SHA-384 usan 80 iteraciones.",
    options: [
      { text: "SHA-512.", correct: false },
      { text: "SHA-1.", correct: false },
      { text: "SHA-256.", correct: true },
      { text: "SHA-224.", correct: false },
      { text: "SHA-384.", correct: false }
    ]
  },
  {
    id: "parcial-02",
    source: "Parcial",
    topic: "Java KeyStore / Persistencia PKCS12",
    prompt: "Seleccione los componentes necesarios para guardar exitosamente el KeyStore en un archivo en el medio de almacenamiento.",
    explanation: "Para persistir un KeyStore se necesita FileOutputStream, contraseña del contenedor y el método store de la instancia KeyStore.",
    options: [
      { text: "Un objeto FileOutputStream.", correct: true },
      { text: "Un objeto Certificate de confianza obligatoriamente.", correct: false },
      { text: "La contraseña del contenedor.", correct: true },
      { text: "El método store de la instancia KeyStore.", correct: true },
      { text: "El alias de la llave en formato Base64.", correct: false }
    ]
  },
  {
    id: "parcial-03",
    source: "Parcial",
    topic: "Affine Cipher / Arquitectura y pruebas",
    prompt: "Sobre la arquitectura de la solución presentada en los archivos MainAffineCipher y AffineCipherServiceTest, ¿qué prácticas de desarrollo se evidencian?",
    explanation: "La prueba valida que encrypt seguido de decrypt recupere el texto original y la implementación usa utilitarios externos para operaciones matemáticas.",
    options: [
      { text: "Uso de inyección de dependencias manual al pasar las llaves a y b a través del constructor.", correct: false },
      { text: "Uso de métodos estáticos en AffineCipherService para evitar la creación de múltiples objetos.", correct: false },
      { text: "Implementación de pruebas de regresión para verificar que un texto descifrado sea idéntico al original.", correct: true },
      { text: "Validación de la integridad del mensaje mediante códigos de autenticación (MAC) integrados.", correct: false },
      { text: "Dependencia de una clase externa de utilitarios para funciones matemáticas diferenciadas o complejas.", correct: true }
    ]
  },
  {
    id: "parcial-04",
    source: "Parcial",
    topic: "Substitution Cipher / Mayúsculas y delta",
    prompt: "En el método encrypt de la clase SubstitutionCipherService, ¿cuál es la función técnica de la variable delta y cómo influye en el procesamiento de caracteres en mayúscula?",
    explanation: "delta = 'Z' - 'z' permite desplazar temporalmente una mayúscula al rango de minúsculas, indexar key y luego restaurar su estado original.",
    options: [
      { text: "Permite convertir temporalmente el carácter a minúscula para acceder al índice del arreglo key y luego restaurar su estado original.", correct: true },
      { text: "Es un factor multiplicativo necesario para calcular el inverso modular del carácter cifrado.", correct: false },
      { text: "Define la distancia entre el alfabeto original y el mapa de sustitución para normalizar el índice.", correct: false },
      { text: "Actúa como una constante de rotación para implementar un cifrado César dentro de la sustitución.", correct: false },
      { text: "Sirve como un centinela para identificar caracteres que no pertenecen al alfabeto inglés.", correct: false }
    ]
  },
  {
    id: "parcial-05",
    source: "Parcial",
    topic: "Java KeyStore / Inicialización",
    prompt: "¿Cuál es el nombre del método de la clase KeyStore que se utiliza para inicializar un contenedor de software vacío antes de agregarle algún contenido?",
    explanation: "Luego de obtener la instancia con KeyStore.getInstance(...), el contenedor vacío se inicializa con ks.load(null, password) o ks.load(null, null).",
    options: [
      { text: "ks.store", correct: false },
      { text: "ks.load", correct: true },
      { text: "ks.setEntry", correct: false },
      { text: "ks.setKeyEntry", correct: false },
      { text: "ks.getInstance", correct: false }
    ]
  },
  {
    id: "parcial-06",
    source: "Parcial",
    topic: "AES-CBC / Propagación de errores",
    prompt: "En el proceso de descifrado CBC, si el bloque de criptograma previo C_(i-1) se corrompe durante la transmisión, ¿cómo afecta esto a la recuperación del texto plano P_i?",
    explanation: "En CBC, P_i = D_K(C_i) XOR C_(i-1). Si C_(i-1) está corrupto, la XOR final altera P_i.",
    options: [
      { text: "Todo el mensaje restante se vuelve ilegible debido al efecto avalancha.", correct: false },
      { text: "Solo el primer bit del bloque P_i se ve afectado por la propagación de errores.", correct: false },
      { text: "El bloque P_i será erróneo debido a que la operación XOR final utiliza un valor corrupto.", correct: true },
      { text: "El texto plano P_i se recupera íntegro porque AES solo depende de la llave actual.", correct: false },
      { text: "El descifrado se detiene automáticamente por una falla en la red SPN.", correct: false }
    ]
  },
  {
    id: "parcial-07",
    source: "Parcial",
    topic: "ECC / Verificación de firma digital",
    prompt: "Seleccione las acciones que forman parte del proceso de verificación de una firma ECC.",
    explanation: "La verificación ECC usa el mensaje original, la firma recibida y la llave pública del firmante, retornando verdadero o falso.",
    options: [
      { text: "Comparar el mensaje original con el incorporado en la firma proporcionada.", correct: true },
      { text: "Utilizar la llave privada para confirmar la autoría.", correct: false },
      { text: "Retornar un valor booleano según el resultado.", correct: true },
      { text: "Utilizar la llave pública del firmante.", correct: true },
      { text: "Generar un nuevo par de llaves para la sesión.", correct: false }
    ]
  },
  {
    id: "parcial-08",
    source: "Parcial",
    topic: "AES-GCM / Estructura del resultado cifrado",
    prompt: "Con relación a AES-GCM, ¿qué elementos integran el arreglo de bytes final antes de la codificación Base64?",
    explanation: "En AES-GCM se construye el arreglo final como IV || ciphertext || tag antes de codificarlo en Base64.",
    options: [
      { text: "El Vector de Inicialización.", correct: true },
      { text: "Los datos AAD en texto plano.", correct: false },
      { text: "El texto cifrado.", correct: true },
      { text: "El nombre del algoritmo utilizado.", correct: false },
      { text: "El Authentication Tag.", correct: true }
    ]
  },
  {
    id: "ef-01",
    source: "Final EF",
    topic: "PKCS#11 / Cryptoki",
    prompt: "¿Qué vulnerabilidad de diseño lógico PKCS#11 se presenta cuando un atacante aprovecha una función de descifrado estándar para extraer una llave protegida simulando que son datos comunes?",
    explanation: "El caso corresponde al conflicto de roles Wrap/Decrypt: una llave protegida es tratada como texto cifrado común y recuperada mediante C_Decrypt.",
    options: [
      { text: "Ataque de llave Trojan.", correct: false },
      { text: "Debilitamiento de algoritmos.", correct: false },
      { text: "Conflicto de roles (Wrap/Decrypt).", correct: true },
      { text: "Key Conjuring.", correct: false },
      { text: "Lectura directa por GetAttribute.", correct: false }
    ]
  },
  {
    id: "ef-02",
    source: "Final EF",
    topic: "TLS / Java Cryptography Architecture",
    prompt: "¿Qué componente de la arquitectura criptográfica de Java se encarga de validar la autenticidad del certificado presentado por el servidor durante la conexión?",
    explanation: "TrustManagerFactory construye los TrustManager usados por JSSE para validar la cadena de confianza del certificado del servidor durante el handshake TLS.",
    options: [
      { text: "SSLSessionContext", correct: false },
      { text: "TrustManagerFactory", correct: true },
      { text: "CertPathBuilder", correct: false },
      { text: "SecureRandom", correct: false },
      { text: "KeyManagerFactory", correct: false }
    ]
  },
  {
    id: "ef-03",
    source: "Final EF",
    topic: "Digital Certification / Bouncy Castle",
    prompt: "¿Qué clase de la biblioteca Bouncy Castle se utiliza como formato intermedio para contener los datos serializados del certificado firmado antes de ser convertido a un objeto X509Certificate nativo de Java?",
    explanation: "X509CertificateHolder representa el certificado X.509 ya construido y firmado antes de convertirlo a java.security.cert.X509Certificate.",
    options: [
      { text: "JcaX509CertificateConverter", correct: false },
      { text: "ContentSigner", correct: false },
      { text: "X509CertificateHolder", correct: true },
      { text: "PKCS10CertificationRequest", correct: false },
      { text: "JcaX509v3CertificateBuilder", correct: false }
    ]
  },
  {
    id: "ef-04",
    source: "Final EF",
    topic: "Post Quantum Cryptography / KEM",
    prompt: "En la secuencia operativa de un KEM post cuántico, ¿qué pasos son correctos en la comunicación entre dos entidades (Alice y Bob)?",
    explanation: "Alice genera y publica su clave pública. Bob encapsula una clave de sesión bajo esa clave pública y Alice recupera el secreto con su clave privada.",
    options: [
      { text: "Ambas partes publican llaves públicas efímeras simultáneamente en la red.", correct: false },
      { text: "Alice descifra el mensaje utilizando la llave pública generada por Bob.", correct: false },
      { text: "Alice y Bob ejecutan una operación matemática conmutativa para derivar el mismo secreto.", correct: false },
      { text: "Bob encapsula una llave de sesión aleatoria bajo la llave pública de Alice produciendo un texto cifrado.", correct: true },
      { text: "Alice publica una llave pública mientras que Bob no tiene ninguna llave publicada.", correct: true }
    ]
  },
  {
    id: "ef-05",
    source: "Final EF",
    topic: "PKCS#11 / Sesión con token",
    prompt: "De las opciones presentadas, seleccione las posibles causas que no permiten iniciar una sesión con el token físico a través de su interfaz PKCS#11.",
    explanation: "Para iniciar sesión se requiere que la librería PKCS#11 cargue, que el slot sea accesible y que el token no esté ocupado por una sesión concurrente del middleware.",
    options: [
      { text: "Sesión simultánea iniciada con su middleware.", correct: true },
      { text: "Atributo CKA_EXTRACTABLE igual a true.", correct: false },
      { text: "Índice del slot correspondiente inaccesible.", correct: true },
      { text: "Token criptográfico lleno de material criptográfico.", correct: false },
      { text: "Librería PKCS#11 correspondiente inaccesible.", correct: true }
    ]
  },
  {
    id: "pc4-01",
    source: "PC4",
    topic: "Mathematical Digital Signature / Verify",
    prompt: "En la fase de validación matemática de una firma digital (operación Verify), de todos los parámetros necesarios para su uso, ¿qué elementos criptográficos o de datos son requeridos como entrada ineludible por el objeto verificador?",
    explanation: "La verificación requiere llave pública y los mismos bytes del documento firmado para recalcular el resumen.",
    options: [
      { text: "El algoritmo de intercambio de llaves simétricas (KEM).", correct: false },
      { text: "La llave pública correspondiente al par asimétrico que generó la firma.", correct: true },
      { text: "Los datos o el documento original (en bytes) que fue firmado.", correct: true },
      { text: "La llave privada del emisor de la firma.", correct: false },
      { text: "La contraseña de protección del KeyStore.", correct: false }
    ]
  },
  {
    id: "pc4-02",
    source: "PC4",
    topic: "Post Quantum Cryptography / Trapdoor Functions",
    prompt: "¿Cuál es el concepto matemático fundamental sobre el que recae la seguridad operativa de la criptografía de llave pública clásica?",
    explanation: "La criptografía de llave pública se apoya en funciones trampa: fáciles de evaluar, difíciles de invertir sin información secreta.",
    options: [
      { text: "Permutaciones pseudoaleatorias.", correct: false },
      { text: "Funciones trampa (Trapdoor functions).", correct: true },
      { text: "Isogenias de curvas elípticas.", correct: false },
      { text: "Funciones de un solo sentido puras.", correct: false },
      { text: "Funciones hash resistentes a colisiones.", correct: false }
    ]
  },
  {
    id: "pc4-03",
    source: "PC4",
    topic: "TLS / TrustStore",
    prompt: "¿Qué elementos criptográficos son válidos y necesarios para almacenar dentro del contenedor de confianza (TrustStore) de un cliente TLS?",
    explanation: "Un TrustStore almacena certificados confiables: certificados de CA raíz o certificados autofirmados de servidor en escenarios controlados.",
    options: [
      { text: "La llave privada del propio cliente.", correct: false },
      { text: "La llave secreta de la sesión.", correct: false },
      { text: "La llave privada del servidor remoto.", correct: false },
      { text: "El certificado digital de una Autoridad Certificadora (CA) raíz.", correct: true },
      { text: "El certificado digital del servidor (en caso de ser autofirmado).", correct: true }
    ]
  },
  {
    id: "pc4-04",
    source: "PC4",
    topic: "Post Quantum Cryptography / Shor",
    prompt: "¿Cuáles de los siguientes algoritmos criptográficos actualmente desplegados se encuentran amenazados y podrían ser vulnerados por el algoritmo cuántico de Shor?",
    explanation: "Shor compromete problemas de factorización y logaritmo discreto; por eso amenaza RSA y criptografía de curvas elípticas, incluyendo ECC/ECDSA.",
    options: [
      { text: "RSA", correct: true },
      { text: "AES-256", correct: false },
      { text: "ECDSA", correct: true },
      { text: "ChaCha20", correct: false },
      { text: "ECC", correct: true }
    ]
  },
  {
    id: "pc4-05",
    source: "PC4",
    topic: "Post Quantum Cryptography / ML-DSA",
    prompt: "Al perfilar y comparar el rendimiento y uso de recursos entre ML-DSA (esquema basado en retículos) y RSA tradicional, ¿qué característica estructural es inherente a los esquemas post cuánticos estandarizados?",
    explanation: "Los esquemas post cuánticos basados en retículos suelen usar llaves y firmas más grandes que los esquemas clásicos.",
    options: [
      { text: "Proveen firmas de longitud constante y mínima (ej. 64 bytes) sin importar el nivel de seguridad.", correct: false },
      { text: "Incrementan significativamente el tamaño en bytes tanto de las llaves públicas/privadas como de las firmas.", correct: true },
      { text: "Reducen a la mitad el tamaño en bytes de la firma digital resultante.", correct: false },
      { text: "Disminuyen el tamaño de la llave pública, pero aumentan drásticamente el uso de CPU.", correct: false },
      { text: "Requieren obligatoriamente aceleración por hardware (HSM) para poder compilar.", correct: false }
    ]
  },
  {
    id: "pc4-06",
    source: "PC4",
    topic: "TLS / SSLSession",
    prompt: "Una vez que la conexión segura ha sido establecida, ¿qué datos sobre la negociación criptográfica se pueden obtener directamente consultando el objeto SSLSession en Java?",
    explanation: "SSLSession expone getCipherSuite() y getProtocol(), es decir, la suite de cifrado y el protocolo negociado.",
    options: [
      { text: "La arquitectura del procesador del cliente conectado.", correct: false },
      { text: "El código fuente de la aplicación remota.", correct: false },
      { text: "La contraseña en texto plano utilizada para abrir el KeyStore.", correct: false },
      { text: "La suite de cifrado negociada entre las partes.", correct: true },
      { text: "El protocolo criptográfico acordado.", correct: true }
    ]
  },
  {
    id: "pc1-01",
    source: "PC1",
    topic: "AES / Cifrado de bloque",
    prompt: "Sobre las características de AES como cifrado de bloque, ¿qué afirmaciones son técnicamente correctas?",
    explanation: "AES usa una red de sustitución-permutación y AES-256 aplica más rondas que AES-128. El bloque AES siempre es de 128 bits.",
    options: [
      { text: "Utiliza una estructura de Red de Sustitución-Permutación (SPN) para lograr confusión y difusión.", correct: true },
      { text: "El modo ECB es superior al modo CBC para mensajes largos porque evita la repetición de patrones.", correct: false },
      { text: "AES-256 aplica un mayor número de rondas de transformación en comparación con AES-128.", correct: true },
      { text: "Las variantes de AES definen el tamaño del bloque de datos (128, 192 o 256 bits).", correct: false },
      { text: "La seguridad de AES se basa exclusivamente en la complejidad del Vector de Inicialización.", correct: false }
    ]
  },
  {
    id: "pc1-02",
    source: "PC1",
    topic: "Caesar Cipher / Análisis de frecuencias",
    prompt: "¿Cuál es la principal vulnerabilidad del cifrado Caesar que permite su ruptura mediante el análisis de frecuencias, a pesar de que el atacante no conozca la llave k?",
    explanation: "Caesar preserva la frecuencia relativa de las letras; solo desplaza símbolos, por eso permite análisis de frecuencias.",
    options: [
      { text: "La propiedad fundamental de reversibilidad D(E(x)) = x.", correct: false },
      { text: "La preservación de la probabilidad de aparición de cada carácter P(E(x)) = P(x).", correct: true },
      { text: "El uso de un espacio de llaves extremadamente pequeño (|k| = 25).", correct: false },
      { text: "El uso de una transformación lineal simple en lugar de una exponencial.", correct: false },
      { text: "La dependencia exclusiva de la aritmética modular para el desplazamiento.", correct: false }
    ]
  },
  {
    id: "pc1-03",
    source: "PC1",
    topic: "Aritmética modular en Z_n",
    prompt: "En el contexto de la aritmética modular aplicada a la criptografía, seleccione dos afirmaciones correctas sobre las operaciones en Z_n.",
    explanation: "4^5 = 4^4·4^1 y la reducción modular conserva congruencia. Además, 9≡2 mod 7 y 8≡1 mod 7.",
    options: [
      { text: "La suma modular (a + b) mod n da el mismo resultado que sumar los restos individuales de cada operando.", correct: false },
      { text: "En la exponenciación modular, 4^5 mod 7 produce el mismo resto que 4^4*4^1 mod 7.", correct: true },
      { text: "El inverso modular de (e mod m) existe solo si el producto 'e' por 'd' es igual a (m + 1).", correct: false },
      { text: "El resultado de (a mod n) siempre debe ser un número mayor o igual a 'n'.", correct: false },
      { text: "La multiplicación modular 9*8 mod 7 es equivalente a 2*1 mod 7 debido a la congruencia de los factores.", correct: true }
    ]
  },
  {
    id: "pc1-04",
    source: "PC1",
    topic: "SubstitutionCipherService / Diseño de clase",
    prompt: "Al analizar la estructura del constructor y los atributos de la clase SubstitutionCipherService, ¿qué condiciones de seguridad y diseño se deben inferir?",
    explanation: "La clave debe ser una permutación del alfabeto para garantizar reversibilidad y private final impide reemplazar la referencia de key tras construir la instancia.",
    options: [
      { text: "La clase hereda de CaesarCipherService para reutilizar la lógica de aritmética modular.", correct: false },
      { text: "La clase garantiza la integridad del mensaje mediante un hash SHA-256 interno.", correct: false },
      { text: "La visibilidad private final del atributo key impide que el mapa de sustitución sea modificado tras la instanciación.", correct: true },
      { text: "El sistema permite el uso de llaves de longitud variable para mitigar ataques de análisis de frecuencia.", correct: false },
      { text: "El arreglo key debe ser una permutación completa del alfabeto para asegurar la reversibilidad (biyectividad).", correct: true }
    ]
  }
];
