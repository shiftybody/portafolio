import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const SELECTED_MODEL = "gemma-2-2b-it-q4f32_1-MLC-1k";

// Configura el chatbot con un progreso de inicialización
async function initializeChatbot() {
  engine = await CreateWebWorkerMLCEngine(
    new Worker('./worker.js', { type: 'module' }),
    SELECTED_MODEL,
    {
      initProgressCallback: (info) => {
        console.log('Progreso de inicialización:', info);
      }
    }
  );
  console.log("Engine inicializado:", engine); // Confirmación de inicialización
}

initializeChatbot();

// Texto de bienvenida o banner
const banner = "\nInicializando Chat\nPreguntame lo que quieras sobre\nVIDEOJUEGOS\n\n.............................................................................\n\n@@@@@@@  @@@ @@@@@@@@ @@@  @@@ @@@  @@@ @@@@@@@@ @@@  @@@ @@@ @@@@@@@   @@@@@@ \n@@!  @@@ @@! @@!      @@!@!@@@ @@!  @@@ @@!      @@!@!@@@ @@! @@!  @@@ @@!  @@@\n@!@!@!@  !!@ @!!!:!   @!@@!!@! @!@  !@! @!!!:!   @!@@!!@! !!@ @!@  !@! @!@  !@!\n!!:  !!! !!: !!:      !!:  !!!  !: .:!  !!:      !!:  !!! !!: !!:  !!! !!:  !!!\n:: : ::  :   : :: ::: ::    :     ::    : :: ::: ::    :  :   :: :  :   : :. : \n";

// Función principal de carga del terminal
const load = () => {
  console.log("Cargando terminal..."); // Para verificar que `load` se ejecuta
  const t = terminal({
    prompt: () => "$ > ",
    banner: banner,
    commands: {
      clear: () => t.clear()
    }
  });
};

document.addEventListener('DOMContentLoaded', load);

// Función que crea el contenedor de opciones iniciales
const createOptions = (opts) => Object.assign({}, {
  banner: 'Hello World',
  prompt: () => '$ > ',
  tickrate: 1000 / 60,
  buflen: 8,
  commands: {}
}, opts || {});

// Crea el área de texto para la terminal
const createElement = (root) => {
  const el = document.createElement('textarea');
  el.spellcheck = false;
  el.value = '';
  root.appendChild(el);
  return el;
};

// Ajusta el rango de selección del texto
const setSelectionRange = (input) => {
  const length = input.value.length;
  input.focus();
  input.setSelectionRange(length, length);
};

// Lógica para imprimir en pantalla
const printer = ($element, buflen) => (buffer) => {
  if (buffer.length > 0) {
    const len = Math.min(buflen, buffer.length);
    const val = buffer.splice(0, len);
    $element.value += val.join('');
    setSelectionRange($element);
    $element.scrollTop = $element.scrollHeight;
    return true;
  }
  return false;
};

// Función que maneja la terminal y el input del usuario
const terminal = (opts) => {
  let buffer = [];
  const {
    prompt,
    banner,
    commands,
    buflen,
    tickrate
  } = createOptions(opts);

  const $root = document.querySelector('#terminal');
  const $element = createElement($root);

  // Función para mostrar texto en el terminal y añadir el prompt
  const output = (text = '') => {
    const textWithPrompt = text + '\n' + prompt(); // Agrega el prompt al final del texto
    buffer = buffer.concat(textWithPrompt.split(''));
  };

  const print = printer($element, buflen);

  // Muestra el banner inicial seguido del prompt
  output(banner);

  // Ciclo de renderizado
  const render = () => {
    if (buffer.length > 0) print(buffer);
    requestAnimationFrame(render);
  };
  render();

  // Procesa la entrada del usuario
  let messages = []; // Inicializa el array si no está definido

  const parseInput = async (str) => {
    if (str === 'clear') {
      buffer = [];
      $element.value = '';
      output();
    } else {
      const userMessage = {
        role: 'user',
        content: str
      };
      console.log("User input:", str); // Log para verificar la entrada

      messages.push(userMessage);

      if (!engine) {
        console.log("Engine no está inicializado.");
        return;
      }

      try {
        const chunks = await engine.chat.completions.create({
          messages,
          stream: true
        });

        let reply = "";
        for await (const chunk of chunks) {
          const choice = chunk.choices[0];
          const content = choice?.message?.content ?? "";
          reply += content;
          console.log("Content:", content); // Log para verificar el contenido de cada chunk
        }

        console.log("Reply completa:", reply);

        messages.push({
          role: 'bot',
          content: reply
        });

        // Muestra la respuesta en la terminal
        output(`\nGPT: ${reply}`);
      } catch (error) {
        console.error("Error al obtener la respuesta del modelo:", error);
        output("Error al obtener la respuesta del modelo.");
      }
    }
  };

  // Asegura que el `textarea` mantenga el foco
  const focusTerminal = () => {
    setTimeout(() => $element.focus(), 0);
  };

  $element.addEventListener('blur', focusTerminal);
  $root.addEventListener('click', focusTerminal); // Recibe el foco al hacer clic en la terminal

  $element.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const input = $element.value.split('\n').pop().replace('$ > ', '').trim(); // Obtener el último input sin prompt
      parseInput(input);
    }
  });
  focusTerminal(); // Asegura que esté enfocado al iniciar
};