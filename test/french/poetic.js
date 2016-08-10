/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [
    ['abasourdie', 'abazurdi'],
    ['abeille', 'abɛj'],
    ['Abidjan', 'abidʒã'],
    ['aigüe', 'ɛgy'],
    ['aiguës', 'ɛgy'],
    ['ail', 'aj'],
    ['alcool', 'alkɔl'],
    ['alcoolisé', 'alkɔlize'],
    ['Aleppes', 'alɛp'],
    ['almanach', 'almana'],
    ['accentuation', 'aksãtyasjõ'],
    ['âme', 'am'],
    ['ambiance', 'ãbjãs'],
    ['amphétamine', 'ãfetamin'],
    ['amphore', 'ãfɔr'],
    ['an', 'ã'],
    ['antagoniste', 'ãtagonist'],
    ['antisocial', 'ãtisosjal'],
    ['août', 'ut'],
    ['aplomb', 'aplõ'],
    ['apostat', 'aposta'],
    ['asphyxier', 'asfiksje'],
    ['arabesque', 'arabɛsk'],
    ['architecture', 'arʃitɛktyr'],
    ['arhe', 'ar'],
    ['arriveront', 'arivørõ'],
    ['Arnoult', 'arnu'],
    ['aux', 'o'],
    ['Auxerres', 'osɛr'],
    ['aulx', 'o'],
    ['auxilliaire', 'oksiljɛr'],
    ['ayant', 'ɛjã'],
    ['ayatollah', 'ajatɔla'],
    ['ayez', 'ɛje'],

    ['Bach', 'bak'],
    ['badaud', 'bado'],
    ['badauds', 'bado'],
    ['baie', 'bɛ'],
    ['baignoire', 'bɛnwar'],
    ['barbecue', 'barbøkju'],
    ['beauvillaine', 'bovilɛn'],
    ['bel', 'bɛl'],
    ['belle', 'bɛl'],
    ['belles', 'bɛl'],
    ['beau', 'bo'],
    ['beur', 'bʌr'],
    ['beurre', 'bʌr'],
    ['beurré', 'børe'],
    ['bibelot', 'bibelo'],
    ['bitte', 'bit'],
    ['blanc', 'blã'],
    ['bleu', 'blø'],
    ['boa', 'boa'],
    ['bœuf', 'bʌf'],
    ['bogoss', 'bogɔs'],
    ['bonbon', 'bõbõ'],
    ['bonheur', 'bonʌr'],
    ['boulgour', 'bulgur'],
    ['bretzel', 'bretsɛl'],
    // ['brioche', 'briɔʃ'],
    ['broc', 'bro'],
    ['Bruxelles', 'brysɛl'],
    ['buisson', 'bɥisõ'],

    ['cacao', 'kakao'],
    ['cacochyme', 'kakoʃim'],
    ['caecum', 'sekʌm'],
    ['cæcal', 'sekal'],
    ['calmement', 'kalmømã'],
    ['camembert', 'kamãbɛr'],
    ['Carentan', 'karãtã'],
    ['cartes', 'kart'],
    ['cases', 'kaz'],
    ['ce', 'sø'],
    ['ceci', 'søsi'],
    ['cerf', 'sɛr'],
    ['ceriseraies', 'sørizørɛ'],
    ['chaire', 'ʃɛr'],
    ['charmille', 'ʃarmij'],
    ['chateau', 'ʃato'],
    ['chateaux', 'ʃato'],
    ['chemin', 'ʃømẽ'],
    ['chevreuil', 'ʃøvrøj'],
    ['chien', 'ʃjẽ'],
    ['chiroubles', 'ʃirubl'],
    ['chnoque', 'ʃnɔk'],
    ['chorizo', 'ʃorizo'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['citroën', 'sitroɛn'],
    ['claymore', 'klɛmɔr'],
    ['clef', 'kle'],
    ['cloque', 'klɔk'],
    ['coelacanthe', 'kølakãt'],
    ['cœlacanthe', 'kølakãt'],
    ['coin', 'kwẽ'],
    ['coing', 'kwẽ'],
    ['coings', 'kwẽ'],
    ['coït', 'koit'],
    ['coit', 'kwa'],
    ['col', 'kɔl'],
    ['cool', 'kul'],
    ['confidentiel', 'kõfidãsjɛl'],
    ['confidentielle', 'kõfidãsjɛl'],
    ['conne', 'kɔn'],
    ['constitution', 'kõstitysjõ'],
    ['contestation', 'kõtɛstasjõ'],
    ['coucou', 'kuku'],
    ['couille', 'kuj'],
    ['craie', 'krɛ'],
    ['crapaud', 'krapo'],
    ['croc', 'kro'],
    ['cruel', 'kryɛl'],
    ['cul', 'ky'],

    ['daim', 'dẽ'],
    ['darmstadt', 'darmstat'],
    ['demi', 'dømi'],
    ['démocratie', 'demokrasi'],
    ['dessein', 'desẽ'],
    ['deuil', 'døj'],
    ['dévorée', 'devore'],
    ['dieu', 'djø'],
    ['doigt', 'dwa'],
    ['Doisneau', 'dwano'],
    ['Doubs', 'du'],
    ['du', 'dy'],
    ['dû', 'dy'],

    ['effet', 'efɛ'],
    ['effort', 'efɔr'],
    ['effraie', 'efrɛ'],
    ['élection', 'elɛksjõ'],
    ['emmerder', 'ãmɛrde'],
    ['empâtement', 'ãpatømã'],
    // ['engrosser', 'ãgrose'],
    ['éphore', 'efɔr'],
    ['essaim', 'esẽ'],
    ['ès', 'ɛs'],
    ['es', 'ɛ'],
    ['est', 'ɛ'],
    ['estomac', 'ɛstoma'],
    ['et', 'e'],
    ['eu', 'y'],
    ['euphorie', 'øfori'],
    ['eusse', 'ys'],
    ['eussiez', 'ysje'],
    ['Eustache', 'østaʃ'],
    ['eût', 'y'],
    ['eux', 'ø'],
    ['éventualité', 'evãtyalite'],
    ['excalibur', 'ekskalibyr'],
    ['exception', 'eksepsjõ'],
    ['excitation', 'eksitasjõ'],
    ['exulter', 'egzylte'],
    ['exutoire', 'egzytwar'],

    ['faisan', 'føzã'],
    ['faisons', 'føzõ'],
    ['faisiez', 'føzje'],
    ['faon', 'fã'],
    ['faute', 'fot'],
    ['femme', 'fam'],
    ['fenouil', 'fønuj'],
    ['fête', 'fɛt'],
    ['fils', 'fis'],
    ['finaux', 'fino'],
    ['fleur', 'flʌr'],
    ['floc', 'flɔk'],
    ['flop', 'flɔp'],
    ['fluet', 'flyɛ'],
    ['folie', 'foli'],
    ['folle', 'fɔl'],
    ['folles', 'fɔl'],
    ['forestier', 'forɛstje'],
    ['forêt', 'forɛ'],
    ['fouine', 'fwin'],
    ['fourmille', 'furmij'],
    ['fresne', 'frɛn'],
    ['froc', 'frɔk'],

    ['gageure', 'gaʒyr'],
    ['galop', 'galo'],
    ['gaufres', 'gofr'],
    ['gazole', 'gazɔl'],
    ['genoux', 'ʒenu'],
    ['gérard', 'ʒerar'],
    ['gleyre', 'glɛr'],
    ['gout', 'gu'],
    ['goût', 'gu'],
    ['gnaquer', 'njake'],
    ['gnognotte', 'njonjɔt'],
    ['gnôle', 'njol'],
    ['gnon', 'njõ'],
    ['gnosticisme', 'gnostisism'],
    ['gnou', 'gnu'],
    ['gouache', 'gwaʃ'],
    ['gouine', 'gwin'],
    ['gourd', 'gur'],
    ['gourre', 'gur'],
    ['gourrer', 'gure'],
    ['Grimault', 'grimo'],
    ['guacamole', 'gwakamɔl'],
    ['guatémala', 'gwatemala'],
    ['guatémaltèque', 'gwatemaltɛk'],
    ['guam', 'gwam'],
    ['guillaume', 'gijom'],
    ['güise', 'gyiz'],
    ['gwyneth', 'gwinet'],
    ['gypaète', 'ʒipaɛt'],

    ['hasard', 'azar'],
    ['haschich', 'aʃiʃ'],
    ['hêtre', 'ɛtr'],
    ['homosexuel', 'omoseksyɛl'],
    ['horrible', 'oribl'],
    ['hun', 'ẽ'],

    ['idoine', 'idwan'],
    ['ignoble', 'injɔbl'],
    ['illégal', 'illegal'],
    ['imbu', 'ẽby'],
    ['inquiet', 'ẽkjɛ'],
    ['inquisition', 'ẽkizisjõ'],
    ['institut', 'ẽstity'],

    ['jaunisse', 'ʒonis'],
    ['javelot', 'ʒavelo'],
    ['je', 'ʒø'],
    ['jeu', 'ʒø'],
    ['jeun', 'ʒẽ'],
    ['julie', 'ʒyli'],

    ['laitue', 'lɛty'],
    ['lapin', 'lapẽ'],
    ['lavabo', 'lavabo'],
    ['le', 'lø'],
    ['leur', 'lʌr'],
    ['leurre', 'lʌr'],
    ['litigieuse', 'litiʒjøz'],
    ['Livaro', 'livaro'],
    ['lobe', 'lɔb'],
    ['lunaire', 'lynɛr'],
    ['lyncher', 'lẽʃe'],

    ['mangeant', 'mãʒã'],
    ['mangeoire', 'mãʒwar'],
    ['mangeoires', 'mãʒwar'],
    ['manger', 'mãʒe'],
    ['manteau', 'mãto'],
    ['me', 'mø'],
    ['même', 'mɛm'],
    ['mercredi', 'mɛrkrødi'],
    ['mes', 'mɛ'],
    ['mesclun', 'mɛsklẽ'],
    ['messieurs', 'mesjø'],
    ['meurs', 'mʌr'],
    ['meurt', 'mʌr'],
    ['mezzanine', 'mɛdzanin'],
    ['mille', 'mil'],
    ['millepatte', 'milpat'],
    ['millet', 'mijɛ'],
    ['milliard', 'miljar'],
    ['milliers', 'milje'],
    ['million', 'miljõ'],
    ['minutie', 'minysi'],
    ['moignon', 'mwanjõ'],
    ['moitié', 'mwatje'],
    ['monsieur', 'møsjø'],
    ['monsieurs', 'møsjø'],
    ['montez', 'mõte'],
    ['montjoie', 'mõʒwa'],
    ['motte', 'mɔt'],
    ['moult', 'mult'],
    ['Munster', 'mẽstɛr'],
    ['Münster', 'mẽstɛr'],

    ['nerf', 'nɛr'],
    ['net', 'nɛt'],
    ['nette', 'nɛt'],
    ['ney', 'nɛ'],
    ['Nietzsche', 'njetsʃ'],
    ['nimbée', 'nẽbe'],
    ['noir', 'nwar'],
    ['nos', 'no'],
    ['noyau', 'nwajo'],
    ['noyauter', 'nwajote'],
    ['nuit', 'nɥi'],

    ['oc', 'ɔk'],
    ['ocre', 'ɔkr'],
    ['oeil', 'ʌj'],
    ['œil', 'ʌj'],
    ['oeuf', 'ʌf'],
    ['oignon', 'onjõ'],
    ['oint', 'wẽ'],
    ['oiseau', 'wazo'],
    ['ombres', 'õbr'],
    ['onion', 'onjõ'],
    ['oreille', 'orɛj'],
    ['ornithorynque', 'ornitorẽk'],
    ['ôter', 'ote'],
    ['où', 'u'],
    ['ouaf', 'waf'],
    ['Ouarzazate', 'warzazat'],
    ['oui', 'wi'],
    ['ouïgour', 'uigur'],
    ['ouistiti', 'wistiti'],
    ['Ouzbékistan', 'uzbekistã'],
    ['oyez', 'oje'],

    ['pain', 'pẽ'],
    ['paon', 'pã'],
    ['papier', 'papje'],
    ['parpaing', 'parpẽ'],
    ['parterre', 'partɛr'],
    ['patiemment', 'pasjamã'],
    ['patience', 'pasjãs'],
    ['patronage', 'patronaʒ'],
    ['pause', 'poz'],
    ['pébroc', 'pebrɔk'],
    ['pelote', 'pølɔt'],
    ['pestacle', 'pɛstakl'],
    ['pétaouchnok', 'petauʃnɔk'],
    ['pétrole', 'petrɔl'],
    ['pharisien', 'farizjẽ'],
    ['pharynx', 'farẽks'],
    ['photo', 'foto'],
    ['pigeon', 'piʒõ'],
    ['pingouin', 'pẽgwẽ'],
    ['plomb', 'plõ'],
    ['plombes', 'plõb'],
    ['plongeoir', 'plõʒwar'],
    ['pneu', 'pnø'],
    ['poing', 'pwẽ'],
    ['point', 'pwẽ'],
    ['poix', 'pwa'],
    ['pokémon', 'pɔkemõ'],
    ['pomme', 'pɔm'],
    ['pommes', 'pɔm'],
    ['pommeaux', 'pomo'],
    ['pose', 'poz'],
    ['posément', 'pozemã'],
    ['poubelle', 'pubɛl'],
    ['poux', 'pu'],
    // ['primesautier', 'primsotje'],
    ['proc', 'prɔk'],
    ['provençal', 'provãsal'],
    ['puissamment', 'pɥisamã'],

    ['quadrilatère', 'kwadrilatɛr'],
    ['qualité', 'kalite'],
    ['quantité', 'kãtite'],
    ['quartz', 'kwarts'],
    ['que', 'kø'],
    ['quidam', 'kidam'],
    ['quille', 'kij'],
    ['quoi', 'kwa'],

    ['rach', 'rak'],
    ['rappelle', 'rapɛl'],
    ['rappelez', 'rapøle'],
    ['rat', 'ra'],
    ['rayon', 'rɛjõ'],
    ['rayoner', 'rɛjone'],
    ['reine', 'rɛn'],
    ['remerciements', 'rømɛrsimã'],
    ['renard', 'rønar'],
    ['renart', 'rønar'],
    ['renne', 'rɛn'],
    ['requartzifier', 'røkwartsifje'],
    ['resnober', 'røsnobe'],
    ['resurgir', 'røsyrʒir'],
    // ['rets', 'rɛ'],
    ['rhume', 'rym'],
    ['roi', 'rwa'],
    ['rose', 'roz'],
    ['rote', 'rɔt'],
    ['roter', 'rote'],
    ['roy', 'rwa'],

    ['salop', 'salo'],
    ['salut', 'saly'],
    ['sagement', 'saʒømã'],
    ['Saoudite', 'saudit'],
    ['saoul', 'su'],
    ['saoûler', 'sule'],
    ['sashimi', 'saʃimi'],
    ['saut', 'so'],
    ['savon', 'savõ'],
    ['scenario', 'senarjo'],
    ['schnock', 'ʃnɔk'],
    ['schnoque', 'ʃnɔk'],
    ['sciemment', 'sjamã'],
    ['scotcher', 'skotʃe'],
    ['se', 'sø'],
    ['sel', 'sɛl'],
    ['semi', 'sømi'],
    ['semis', 'sømi'],
    ['sensation', 'sãsasjõ'],
    ['sensationnel', 'sãsasjonɛl'],
    ['sentier', 'sãtje'],
    ['serf', 'sɛr'],
    ['ses', 'sɛ'],
    ['shampooing', 'ʃãpwẽ'],
    ['shawarma', 'ʃawarma'],
    ['snob', 'snɔb'],
    ['sortie', 'sorti'],
    ['soubs', 'su'],
    ['souhaites', 'suɛt'],
    ['squale', 'skwal'],
    ['Staël', 'stɛl'],
    ['sursaut', 'syrso'],
    ['sursauter', 'syrsote'],
    ['susurrer', 'sysyre'],
    ['synthèse', 'sẽtɛz'],
    ['synthétique', 'sẽtetik'],
    ['syrop', 'siro'],

    ['tabac', 'taba'],
    ['tapecul', 'tapky'],
    ['téraflops', 'teraflɔps'],
    ['terrain', 'tɛrẽ'],
    ['te', 'tø'],
    ['tes', 'tɛ'],
    ['teub', 'tʌb'],
    ['teubé', 'tøbe'],
    ['thérapie', 'terapi'],
    ['thermostat', 'tɛrmosta'],
    ['Thibault', 'tibo'],
    ['tiare', 'tjar'],
    ['tien', 'tjẽ'],
    ['toc', 'tɔk'],
    ['top', 'tɔp'],
    ['toque', 'tɔk'],
    ['toquer', 'tɔke'],
    ['toutou', 'tutu'],
    ['tranquille', 'trãkil'],
    ['trans', 'trãs'],
    ['trappes', 'trap'],
    ['tricératops', 'triseratɔps'],
    ['troène', 'troɛn'],
    ['tronc', 'trõ'],
    ['trône', 'tron'],
    ['trop', 'tro'],
    ['truelle', 'tryɛl'],
    ['tuile', 'tɥil'],
    ['tunnel', 'tynɛl'],
    ['turlutte', 'tyrlyt'],

    ['un', 'ẽ'],
    ['unitaire', 'ynitɛr'],

    ['vademecum', 'vademekʌm'],
    ['vair', 'vɛr'],
    ['verre', 'vɛr'],
    ['veule', 'vøl'],
    ['villa', 'vila'],
    ['villain', 'vilẽ'],
    ['villardière', 'vilardjɛr'],
    ['ville', 'vil'],
    ['vîmes', 'vim'],
    ['voilà', 'wala'],
    ['voir', 'war'],
    ['voiture', 'watyr'],
    ['vos', 'vo'],
    ['vraie', 'vrɛ'],

    ['wagon', 'vagõ'],
    ['wapiti', 'wapiti'],
    ['wifi', 'wifi'],

    ['xylophone', 'gzilofɔn'],

    ['yannick', 'janik'],
    ['yaourt', 'jaurt'],
    ['yeux', 'jø'],

    ['zèbre', 'zɛbr'],
    ['zoo', 'zoo'],
    ['zoologie', 'zooloʒi'],
    ['zoulous', 'zulu'],
    ['zyeuter', 'zjøte']
  ]
};
