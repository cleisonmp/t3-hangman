import { normalizeString } from '../../utils/normalizeString'

const englishWords = [
  'able',
  'about',
  'absolute',
  'accept',
  'account',
  'achieve',
  'across',
  'active',
  'actual',
  'address',
  'admit',
  'advertise',
  'affect',
  'afford',
  'after',
  'afternoon',
  'again',
  'against',
  'agent',
  'agree',
  'allow',
  'almost',
  'along',
  'already',
  'alright',
  'also',
  'although',
  'always',
  'america',
  'amount',
  'another',
  'answer',
  'apart',
  'apparent',
  'appear',
  'apply',
  'appoint',
  'approach',
  'appropriate',
  'area',
  'argue',
  'around',
  'arrange',
  'associate',
  'assume',
  'attend',
  'authority',
  'available',
  'aware',
  'away',
  'awful',
  'baby',
  'back',
  'balance',
  'ball',
  'bank',
  'base',
  'basis',
  'bear',
  'beat',
  'beauty',
  'because',
  'become',
  'before',
  'begin',
  'behind',
  'believe',
  'benefit',
  'best',
  'between',
  'bill',
  'birth',
  'black',
  'bloke',
  'blood',
  'blow',
  'blue',
  'board',
  'boat',
  'body',
  'book',
  'both',
  'bother',
  'bottle',
  'bottom',
  'break',
  'brief',
  'brilliant',
  'bring',
  'britain',
  'brother',
  'budget',
  'build',
  'business',
  'busy',
  'cake',
  'call',
  'card',
  'care',
  'carry',
  'case',
  'catch',
  'cause',
  'cent',
  'centre',
  'certain',
  'chair',
  'chairman',
  'chance',
  'change',
  'chap',
  'character',
  'charge',
  'cheap',
  'check',
  'child',
  'choice',
  'choose',
  'Christ',
  'Christmas',
  'church',
  'city',
  'claim',
  'class',
  'clean',
  'clear',
  'client',
  'clock',
  'close',
  'closes',
  'clothe',
  'club',
  'coffee',
  'cold',
  'colleague',
  'collect',
  'college',
  'colour',
  'come',
  'comment',
  'commit',
  'committee',
  'common',
  'community',
  'company',
  'compare',
  'complete',
  'compute',
  'concern',
  'condition',
  'confer',
  'consider',
  'consult',
  'contact',
  'continue',
  'contract',
  'control',
  'converse',
  'cook',
  'copy',
  'corner',
  'correct',
  'cost',
  'could',
  'council',
  'count',
  'country',
  'county',
  'couple',
  'course',
  'court',
  'cover',
  'create',
  'cross',
  'current',
  'danger',
  'date',
  'dead',
  'deal',
  'dear',
  'debate',
  'decide',
  'decision',
  'deep',
  'definite',
  'degree',
  'department',
  'depend',
  'describe',
  'design',
  'detail',
  'develop',
  'difference',
  'difficult',
  'dinner',
  'direct',
  'discuss',
  'district',
  'divide',
  'doctor',
  'document',
  'door',
  'double',
  'doubt',
  'down',
  'draw',
  'dress',
  'drink',
  'drive',
  'drop',
  'during',
  'each',
  'early',
  'east',
  'easy',
  'economy',
  'educate',
  'effect',
  'eight',
  'either',
  'elect',
  'electric',
  'eleven',
  'else',
  'employ',
  'encourage',
  'engine',
  'english',
  'enjoy',
  'enough',
  'enter',
  'environment',
  'equal',
  'especial',
  'europe',
  'even',
  'evening',
  'ever',
  'every',
  'evidence',
  'exact',
  'example',
  'except',
  'excuse',
  'exercise',
  'exist',
  'expect',
  'expense',
  'experience',
  'explain',
  'express',
  'extra',
  'face',
  'fact',
  'fair',
  'fall',
  'family',
  'farm',
  'fast',
  'father',
  'favour',
  'feed',
  'feel',
  'field',
  'fight',
  'figure',
  'file',
  'fill',
  'film',
  'final',
  'finance',
  'find',
  'fine',
  'finish',
  'fire',
  'first',
  'fish',
  'five',
  'flat',
  'floor',
  'follow',
  'food',
  'foot',
  'force',
  'forget',
  'form',
  'fortune',
  'forward',
  'four',
  'france',
  'free',
  'friday',
  'friend',
  'from',
  'front',
  'full',
  'function',
  'fund',
  'further',
  'future',
  'game',
  'garden',
  'general',
  'germany',
  'girl',
  'give',
  'glass',
  'good',
  'goodbye',
  'govern',
  'grand',
  'grant',
  'great',
  'green',
  'ground',
  'group',
  'grow',
  'guess',
  'hair',
  'half',
  'hall',
  'hand',
  'hang',
  'happen',
  'happy',
  'hard',
  'hate',
  'have',
  'head',
  'health',
  'hear',
  'heart',
  'heat',
  'heavy',
  'hell',
  'help',
  'here',
  'high',
  'history',
  'hold',
  'holiday',
  'home',
  'honest',
  'hope',
  'horse',
  'hospital',
  'hour',
  'house',
  'however',
  'hullo',
  'hundred',
  'husband',
  'idea',
  'identify',
  'imagine',
  'important',
  'improve',
  'include',
  'income',
  'increase',
  'indeed',
  'individual',
  'industry',
  'inform',
  'inside',
  'instead',
  'insure',
  'interest',
  'into',
  'introduce',
  'invest',
  'involve',
  'issue',
  'item',
  'jesus',
  'join',
  'judge',
  'jump',
  'just',
  'keep',
  'kill',
  'kind',
  'king',
  'kitchen',
  'knock',
  'know',
  'labour',
  'lady',
  'land',
  'language',
  'large',
  'last',
  'late',
  'laugh',
  'lead',
  'learn',
  'leave',
  'left',
  'less',
  'letter',
  'level',
  'life',
  'light',
  'like',
  'likely',
  'limit',
  'line',
  'link',
  'list',
  'listen',
  'little',
  'live',
  'load',
  'local',
  'lock',
  'london',
  'long',
  'look',
  'lord',
  'lose',
  'love',
  'luck',
  'lunch',
  'machine',
  'main',
  'major',
  'make',
  'manage',
  'many',
  'mark',
  'market',
  'marry',
  'match',
  'matter',
  'maybe',
  'mean',
  'meaning',
  'measure',
  'meet',
  'member',
  'mention',
  'middle',
  'might',
  'mile',
  'milk',
  'million',
  'mind',
  'minister',
  'minus',
  'minute',
  'miss',
  'mister',
  'moment',
  'monday',
  'money',
  'month',
  'more',
  'morning',
  'most',
  'mother',
  'motion',
  'move',
  'much',
  'music',
  'must',
  'name',
  'nation',
  'nature',
  'near',
  'necessary',
  'need',
  'never',
  'news',
  'next',
  'nice',
  'night',
  'nine',
  'none',
  'normal',
  'north',
  'note',
  'notice',
  'number',
  'obvious',
  'occasion',
  'offer',
  'office',
  'often',
  'okay',
  'once',
  'only',
  'open',
  'operate',
  'opportunity',
  'oppose',
  'order',
  'organize',
  'original',
  'other',
  'otherwise',
  'ought',
  'over',
  'pack',
  'page',
  'paint',
  'pair',
  'paper',
  'paragraph',
  'pardon',
  'parent',
  'park',
  'part',
  'particular',
  'party',
  'pass',
  'past',
  'pence',
  'pension',
  'people',
  'percent',
  'perfect',
  'perhaps',
  'period',
  'person',
  'photograph',
  'pick',
  'picture',
  'piece',
  'place',
  'plan',
  'play',
  'please',
  'plus',
  'point',
  'police',
  'policy',
  'politic',
  'poor',
  'position',
  'positive',
  'possible',
  'post',
  'pound',
  'power',
  'practise',
  'prepare',
  'present',
  'press',
  'pressure',
  'presume',
  'pretty',
  'previous',
  'price',
  'print',
  'private',
  'probable',
  'problem',
  'proceed',
  'process',
  'produce',
  'product',
  'programme',
  'project',
  'proper',
  'propose',
  'protect',
  'provide',
  'public',
  'pull',
  'purpose',
  'push',
  'quality',
  'quarter',
  'question',
  'quick',
  'quid',
  'quiet',
  'quite',
  'radio',
  'rail',
  'raise',
  'range',
  'rate',
  'rather',
  'read',
  'ready',
  'real',
  'realise',
  'really',
  'reason',
  'receive',
  'recent',
  'reckon',
  'recognize',
  'recommend',
  'record',
  'reduce',
  'refer',
  'regard',
  'region',
  'relation',
  'remember',
  'report',
  'represent',
  'require',
  'research',
  'resource',
  'respect',
  'responsible',
  'rest',
  'result',
  'return',
  'right',
  'ring',
  'rise',
  'road',
  'role',
  'roll',
  'room',
  'round',
  'rule',
  'safe',
  'sale',
  'same',
  'saturday',
  'save',
  'scheme',
  'school',
  'science',
  'score',
  'scotland',
  'seat',
  'second',
  'secretary',
  'section',
  'secure',
  'seem',
  'self',
  'sell',
  'send',
  'sense',
  'separate',
  'serious',
  'serve',
  'service',
  'settle',
  'seven',
  'shall',
  'share',
  'sheet',
  'shoe',
  'shoot',
  'shop',
  'short',
  'should',
  'show',
  'shut',
  'sick',
  'side',
  'sign',
  'similar',
  'simple',
  'since',
  'sing',
  'single',
  'sister',
  'site',
  'situate',
  'size',
  'sleep',
  'slight',
  'slow',
  'small',
  'smoke',
  'social',
  'society',
  'some',
  'soon',
  'sorry',
  'sort',
  'sound',
  'south',
  'space',
  'speak',
  'special',
  'specific',
  'speed',
  'spell',
  'spend',
  'square',
  'staff',
  'stage',
  'stairs',
  'stand',
  'standard',
  'start',
  'state',
  'station',
  'stay',
  'step',
  'stick',
  'still',
  'stop',
  'story',
  'straight',
  'strategy',
  'street',
  'strike',
  'strong',
  'structure',
  'student',
  'study',
  'stuff',
  'stupid',
  'subject',
  'succeed',
  'such',
  'sudden',
  'suggest',
  'suit',
  'summer',
  'sunday',
  'supply',
  'support',
  'suppose',
  'sure',
  'surprise',
  'switch',
  'system',
  'table',
  'take',
  'talk',
  'tape',
  'teach',
  'team',
  'telephone',
  'television',
  'tell',
  'tend',
  'term',
  'terrible',
  'test',
  'than',
  'thank',
  'then',
  'there',
  'therefore',
  'they',
  'thing',
  'think',
  'thirteen',
  'thirty',
  'this',
  'thou',
  'though',
  'thousand',
  'three',
  'through',
  'throw',
  'thursday',
  'time',
  'today',
  'together',
  'tomorrow',
  'tonight',
  'total',
  'touch',
  'toward',
  'town',
  'trade',
  'traffic',
  'train',
  'transport',
  'travel',
  'treat',
  'tree',
  'trouble',
  'true',
  'trust',
  'tuesday',
  'turn',
  'twelve',
  'twenty',
  'type',
  'under',
  'understand',
  'union',
  'unit',
  'unite',
  'university',
  'unless',
  'until',
  'upon',
  'usual',
  'value',
  'various',
  'very',
  'video',
  'view',
  'village',
  'visit',
  'vote',
  'wage',
  'wait',
  'walk',
  'wall',
  'want',
  'warm',
  'wash',
  'waste',
  'watch',
  'water',
  'wear',
  'wednesday',
  'week',
  'weigh',
  'welcome',
  'well',
  'west',
  'what',
  'when',
  'where',
  'whether',
  'which',
  'while',
  'white',
  'whole',
  'wide',
  'wife',
  'will',
  'wind',
  'window',
  'wish',
  'with',
  'within',
  'without',
  'woman',
  'wonder',
  'wood',
  'word',
  'work',
  'world',
  'worry',
  'worse',
  'worth',
  'would',
  'write',
  'wrong',
  'year',
  'yesterday',
  'young',
]
const portugueseWords = [
  'aberto',
  'acabamento',
  'acampamento',
  'acertar',
  'acima',
  'acontecer',
  'acorde',
  'acreditar',
  'açúcar',
  'adequada',
  'adicionar',
  'agora',
  'água',
  'ainda',
  'ajudar',
  'alcançar',
  'aldeia',
  'alegria',
  'algodão',
  'alguns',
  'alimentação',
  'alimentos',
  'alto',
  'amarelo',
  'amarrar',
  'amigo',
  'ampla',
  'amplo',
  'andar',
  'anel',
  'animais',
  'antes',
  'aparecer',
  'apenas',
  'apoio',
  'aprender',
  'apressar',
  'aqueles',
  'aqui',
  'área',
  'areia',
  'arte',
  'árvore',
  'assento',
  'assim',
  'assista',
  'assunto',
  'átomo',
  'atrás',
  'através',
  'atravessar',
  'atual',
  'aumentou',
  'auto',
  'avião',
  'aviso',
  'azul',
  'baixo',
  'banco',
  'banda',
  'barco',
  'base',
  'básico',
  'bastante',
  'bater',
  'bebê',
  'bebida',
  'beleza',
  'bloco',
  'boca',
  'bola',
  'borda',
  'braço',
  'branco',
  'brilhante',
  'brilho',
  'buraco',
  'cabeça',
  'cabelo',
  'caber',
  'caça',
  'cada',
  'cadeira',
  'cair',
  'caiu',
  'caixa',
  'calma',
  'calor',
  'cama',
  'caminhão',
  'caminho',
  'campo',
  'canção',
  'cantar',
  'canto',
  'capaz',
  'Capital',
  'capitão',
  'captura',
  'capturados',
  'caráter',
  'carne',
  'caro',
  'carregam',
  'carro',
  'carta',
  'cartão',
  'casa',
  'casaco',
  'casca',
  'caso',
  'cauda',
  'causa',
  'cavalo',
  'cedo',
  'celular',
  'cento',
  'centro',
  'certo',
  'chamada',
  'chapéu',
  'chave',
  'chefe',
  'chegar',
  'cheiro',
  'chuva',
  'cidade',
  'ciência',
  'cinco',
  'cinza',
  'círculo',
  'claro',
  'classe',
  'cobertura',
  'cobrar',
  'coisa',
  'colheita',
  'colocar',
  'colônia',
  'coluna',
  'começo',
  'começou',
  'comer',
  'comércio',
  'como',
  'companhia',
  'comparar',
  'completo',
  'comprar',
  'comprimento',
  'comprou',
  'comum',
  'concordar',
  'condição',
  'conduzir',
  'conduziu',
  'conectar',
  'conjunto',
  'conselho',
  'considerar',
  'consoante',
  'construir',
  'contagem',
  'contar',
  'contêm',
  'continente',
  'continuar',
  'contra',
  'controle',
  'cópia',
  'coração',
  'corda',
  'corpo',
  'córrego',
  'correto',
  'corrida',
  'corte',
  'costa',
  'cozinheiro',
  'crescer',
  'cresceu',
  'criança',
  'crianças',
  'criar',
  'cuidados',
  'cuja',
  'curso',
  'curta',
  'custo',
  'dança',
  'decidir',
  'decimal',
  'dedo',
  'deixar',
  'dentes',
  'dependem',
  'depois',
  'descrever',
  'desde',
  'desejo',
  'desenhar',
  'desenvolver',
  'deserto',
  'desgaste',
  'deslizamento',
  'determinar',
  'deve',
  'deveria',
  'dicionário',
  'diferir',
  'difícil',
  'dificuldade',
  'dinheiro',
  'direção',
  'direito',
  'direto',
  'discurso',
  'Discussão',
  'discutir',
  'disse',
  'distante',
  'diversão',
  'dividir',
  'divisão',
  'dizer',
  'dois',
  'dólar',
  'done',
  'duplo',
  'durante',
  'efeito',
  'elemento',
  'eles',
  'elétrica',
  'elevador',
  'embora',
  'empurre',
  'encontrado',
  'encontrar',
  'energia',
  'enorme',
  'enquanto',
  'ensinar',
  'entre',
  'enviado',
  'enviar',
  'equiparar',
  'equipe',
  'errado',
  'escala',
  'escola',
  'escolher',
  'escravo',
  'escrever',
  'escreveu',
  'escrito',
  'escritório',
  'escuro',
  'esfregar',
  'espaço',
  'especial',
  'especialmente',
  'Esperamos',
  'esperar',
  'esposa',
  'esquerda',
  'estação',
  'estado',
  'este',
  'estes',
  'estrada',
  'estranho',
  'estrela',
  'estudante',
  'estudo',
  'evento',
  'exata',
  'exceto',
  'excitar',
  'exemplo',
  'exercício',
  'exigir',
  'experiência',
  'exposição',
  'facilidade',
  'falar',
  'falou',
  'família',
  'famoso',
  'faria',
  'fato',
  'favorecer',
  'fazenda',
  'fazer',
  'feira',
  'feito',
  'feliz',
  'ferramenta',
  'ferro',
  'festa',
  'ficar',
  'figo',
  'figura',
  'filho',
  'fina',
  'finais',
  'flor',
  'floresta',
  'fluir',
  'fogo',
  'folha',
  'fora',
  'foram',
  'força',
  'forma',
  'fornecer',
  'fornecimento',
  'forte',
  'fração',
  'frase',
  'frente',
  'fresco',
  'frio',
  'frutas',
  'gama',
  'gelo',
  'geral',
  'golpe',
  'gone',
  'gordura',
  'governar',
  'gráfico',
  'grama',
  'grande',
  'grau',
  'grito',
  'grossa',
  'grupo',
  'guardado',
  'guerra',
  'habilidade',
  'habitual',
  'held',
  'hill',
  'história',
  'homem',
  'homens',
  'horas',
  'humano',
  'idade',
  'idéia',
  'igual',
  'ilha',
  'imagem',
  'imaginar',
  'imprensa',
  'impressão',
  'incluir',
  'indicam',
  'indústria',
  'inferior',
  'início',
  'inimigo',
  'inseto',
  'instant',
  'instrumento',
  'inteiro',
  'introduzir',
  'inventar',
  'inverno',
  'irmã',
  'irmão',
  'janela',
  'jardim',
  'jogar',
  'jogo',
  'jovem',
  'juntar-se',
  'juntos',
  'juros',
  'justo',
  'lado',
  'lago',
  'lata',
  'lavagem',
  'legal',
  'leite',
  'lembre-se',
  'lento',
  'leste',
  'levantar',
  'libra',
  'limpo',
  'linguagem',
  'linha',
  'líquido',
  'lista',
  'livre',
  'livro',
  'local',
  'localizar',
  'loja',
  'longe',
  'longo',
  'lugar',
  'luta',
  'maçã',
  'madeira',
  'maior',
  'mais',
  'maneira',
  'manhã',
  'manter',
  'mapa',
  'máquina',
  'marca',
  'marrom',
  'massa',
  'matar',
  'médico',
  'medir',
  'medo',
  'meet',
  'meio',
  'meio-dia',
  'melhor',
  'melodia',
  'menina',
  'menino',
  'menos',
  'mente',
  'mentira',
  'mercado',
  'mergulho',
  'mesa',
  'mesmo',
  'mestre',
  'metade',
  'método',
  'milha',
  'milhão',
  'milho',
  'mina',
  'minúsculo',
  'minuto',
  'misturar',
  'moderno',
  'molécula',
  'momento',
  'montanha',
  'morrer',
  'morte',
  'morto',
  'motor',
  'mount',
  'movimento',
  'mudança',
  'muito',
  'muitos',
  'mulher',
  'mulheres',
  'multa',
  'multidão',
  'multiplicar',
  'mundo',
  'música',
  'nação',
  'nada',
  'nariz',
  'Nascido',
  'naturais',
  'natureza',
  'navio',
  'necessário',
  'negócio',
  'neve',
  'nível',
  'noite',
  'nome',
  'norte',
  'nossa',
  'nota',
  'novamente',
  'nove',
  'novo',
  'numeral',
  'número',
  'nunca',
  'nuvem',
  'objeto',
  'obrigado',
  'observar',
  'obter',
  'oceano',
  'ocorrer',
  'ocupado',
  'oeste',
  'oferta',
  'oito',
  'óleo',
  'olhar',
  'olho',
  'ombro',
  'onda',
  'onde',
  'operar',
  'oportunidade',
  'oposto',
  'ordem',
  'organizar',
  'órgão',
  'orientar',
  'original',
  'osso',
  'ouça',
  'ouro',
  'outro',
  'ouvido',
  'ouvir',
  'oxigênio',
  'padrão',
  'pagar',
  'página',
  'país',
  'palavra',
  'papel',
  'para',
  'parágrafo',
  'Pare',
  'parecem',
  'parede',
  'parte',
  'passado',
  'passar',
  'pássaro',
  'passeio',
  'passo',
  'pato',
  'pausa',
  'peça',
  'pedra',
  'peixe',
  'pele',
  'pensava',
  'pequeno',
  'perdido',
  'pergunta',
  'perguntar',
  'pergunto',
  'perigo',
  'período',
  'permitir',
  'perna',
  'perto',
  'pesado',
  'pescoço',
  'peso',
  'pesquisa',
  'pessoa',
  'pessoas',
  'pintar',
  'pinto',
  'piso',
  'pistola',
  'plain',
  'plana',
  'planeta',
  'plano',
  'planta',
  'plural',
  'pneu',
  'pobre',
  'pode',
  'poder',
  'poderia',
  'poema',
  'polegada',
  'ponto',
  'port',
  'porta',
  'posição',
  'possível',
  'pouco',
  'poucos',
  'prata',
  'prática',
  'prazo',
  'precisa',
  'preencher',
  'preparar',
  'presente',
  'preto',
  'primavera',
  'primeiro',
  'principal',
  'problema',
  'processo',
  'produto',
  'produzir',
  'profunda',
  'projeto',
  'pronto',
  'propagação',
  'propriedade',
  'próprio',
  'proteger',
  'provar',
  'provável',
  'próximo',
  'puxe',
  'quadrado',
  'qualquer',
  'quando',
  'quarto',
  'quatro',
  'quebrado',
  'queimar',
  'quente',
  'quer',
  'quintal',
  'quociente',
  'rádio',
  'raiva',
  'raiz',
  'ramo',
  'rápida',
  'rápido',
  'razão',
  'reais',
  'receber',
  'recolher',
  'região',
  'registro',
  'regra',
  'reivindicação',
  'relógio',
  'repetição',
  'representar',
  'resolver',
  'responder',
  'resposta',
  'resto',
  'resultado',
  'reta',
  'rico',
  'risada',
  'rocha',
  'roda',
  'rodada',
  'rolo',
  'rosto',
  'ruído',
  'ruim',
  'sabia',
  'saltar',
  'salvar',
  'sangue',
  'sapato',
  'seca',
  'seção',
  'século',
  'segmento',
  'segunda',
  'segurar',
  'seguro',
  'seis',
  'selecione',
  'selvagem',
  'semana',
  'semente',
  'sempre',
  'senhora',
  'senhorita',
  'sentar-se',
  'sentença',
  'sentido',
  'sentir',
  'separado',
  'serra',
  'servir',
  'sete',
  'share',
  'sharp',
  'sido',
  'siga',
  'significar',
  'significava',
  'sílaba',
  'silenciosa',
  'símbolo',
  'similar',
  'simples',
  'sinal',
  'sino',
  'sistema',
  'sobre',
  'soldado',
  'soletrar',
  'solitário',
  'solo',
  'solução',
  'sonhar',
  'sono',
  'sorriso',
  'suave',
  'subida',
  'subir',
  'súbita',
  'substância',
  'substantivo',
  'subtrair',
  'sucesso',
  'suficiente',
  'sufixo',
  'sugerir',
  'superfície',
  'suportar',
  'surpresa',
  'tais',
  'talvez',
  'tamanho',
  'também',
  'tanto',
  'tarde',
  'temperatura',
  'tempo',
  'temporada',
  'tentar',
  'terceiro',
  'terno',
  'terra',
  'teste',
  'teve',
  'tipo',
  'tocar',
  'tomar',
  'tomou',
  'topo',
  'trabalho',
  'trazer',
  'trecho',
  'trem',
  'três',
  'triângulo',
  'trilha',
  'trilho',
  'trouxe',
  'tubo',
  'tudo',
  'último',
  'único',
  'unidade',
  'usar',
  'vaca',
  'vale',
  'valor',
  'vapor',
  'vara',
  'variar',
  'vários',
  'veio',
  'veja',
  'vela',
  'velho',
  'velocidade',
  'vender',
  'vento',
  'verão',
  'verbo',
  'verdade',
  'verde',
  'verifique',
  'vermelho',
  'vestido',
  'vestir',
  'viagem',
  'viagens',
  'vida',
  'vidro',
  'vinco',
  'vinte',
  'visita',
  'vista',
  'vitória',
  'viver',
  'vizinho',
  'voar',
  'você',
  'vogal',
  'vontade',
]
export type WordsLibrary = 'EN' | 'PT'

export const getNewWord = (language: WordsLibrary, excludes?: string) => {
  const words = language === 'EN' ? englishWords : portugueseWords
  const wordsWithoutExcludes = words.filter((word) => word !== excludes)
  const totalWordCount = wordsWithoutExcludes.length - 10
  const newWord =
    wordsWithoutExcludes[Math.floor(Math.random() * totalWordCount)] ?? ''
  const normalizedResult = normalizeString(newWord)
  return normalizedResult
}
