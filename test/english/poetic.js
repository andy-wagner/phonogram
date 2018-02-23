/**
 * Phonogram English Poetic Unit Tests
 * ====================================
 */
import {poetic} from '../../src/english';

export default {
  fn: poetic,
  cases: [
    ['aboard', 'ʌbɔrd'],
    ['about', 'ʌbaʊt'],
    ['above', 'ʌbɔv'],
    ['abroad', 'ʌbrod'],
    ['absurd', 'absʌrd'],
    ['acceleration', 'aksɛlʌrɛʃʌn'],
    ['accompany', 'akɔmpani'],
    ['acquaintance', 'ʌkwɛjntɛns'],
    ['acquire', 'ʌkwajʌr'],
    ['actions', 'akʃʌnz'],
    ['administrative', 'administrativ'],
    ['aerial', 'ɛrjʌl'],
    ['Afghanistan', 'afganistan'],
    ['age', 'ɛjdʒ'],
    ['aghast', 'agast'],
    ['air', 'ɛr'],
    ['aisle', 'ajl'],
    ['Alan', 'alʌn'],
    ['allow', 'ʌlaʊ'],
    ['although', 'alðo'],
    ['ambience', 'ambiɛns'],
    ['ambush', 'ambuʃ'],
    ['amish', 'amiʃ'],
    ['ancestry', 'ɛnsɛstri'],
    ['and', 'ɛnd'],
    ['Andrew', 'ɛndru'],
    ['Andrewz', 'ɛndruz'],
    ['angel', 'ɛjndʒʌl'],
    ['Angelica', 'ɛndʒɛlika'],
    ['anger', 'ɛngʌr'],
    ['appreciate', 'apriʃjɛjt'],
    ['answer', 'ansʌr'],
    ['answering', 'ansʌring'],
    ['ant', 'ant'],
    ['anxiety', 'ɛnzajʌti'],
    ['anxious', 'ɛnkʃjʌs'],
    ['anyone', 'ɛniwan'],
    ['aorta', 'ɛjɔrta'],
    ['aouch', 'aʊtʃ'],
    ['aoutch', 'aʊtʃ'],
    ['ape', 'ɛjp'],
    ['aquatube', 'akwatjub'],
    ['are', 'ar'],
    ['aren\'t', 'ant'],
    ['armed', 'armd'],
    ['artichoke', 'artitʃok'],
    ['arsenal', 'arsnʌl'],
    ['arson', 'arsɔn'],
    ['assign', 'ʌsajn'],
    ['association', 'ʌsosjɛʃʌn'],
    ['Astley', 'asli'],
    ['at', 'at'],
    ['ate', 'ɛjt'],
    ['attic', 'atik'],
    ['Audrey', 'ɔdri'],
    ['awe', 'ɔ'],
    ['axe', 'aks'],
    ['Axel', 'aksʌl'],
    ['axis', 'aksis'],
    ['axle', 'aksʌl'],
    ['aye', 'aj'],

    ['babe', 'bɛjb'],
    ['Bach', 'bak'],
    ['band', 'bɛnd'],
    ['barnacle', 'barnakʌl'],
    ['Bateson', 'bɛjtsɔn'],
    ['bath', 'baθ'],
    ['be', 'bi'],
    ['beach', 'bitʃ'],
    ['bear', 'bɛr'],
    ['beauty', 'bjuti'],
    ['beautiful', 'bjutiful'],
    ['Bechdel', 'bɛʃdʌl'],
    ['beehive', 'bihajv'],
    ['behave', 'bihɛjv'],
    ['behold', 'bihold'],
    ['bejeweled', 'bijuld'],
    ['Belial', 'bilajʌl'],
    ['believe', 'biliv'],
    ['belong', 'bilɔng'],
    ['bighorn', 'bigɔrn'],
    ['binger', 'bindʒʌr'],
    ['bind', 'bajnd'],
    ['bird', 'bʌrd'],
    ['birds', 'bʌrdz'],
    ['bit', 'bit'],
    ['bite', 'bajt'],
    ['Bletchley', 'blɛtʃli'],
    ['blight', 'blajt'],
    ['blind', 'blajnd'],
    ['boi', 'bɔj'],
    ['boulder', 'boldʌr'],
    ['bomb', 'bɔmb'],
    ['bombs', 'bɔmbz'],
    ['bone', 'bon'],
    ['bones', 'bonz'],
    ['booze', 'buz'],
    ['bored', 'bɔrd'],
    ['borough', 'bɔro'],
    ['bosom', 'bozɔm'],
    ['bouche', 'buʃ'],
    ['bought', 'bɔt'],
    ['bowser', 'baʊzʌr'],
    ['boy', 'bɔj'],
    ['break', 'brɛk'],
    ['bread', 'brɛd'],
    ['breast', 'brɛst'],
    ['breath', 'brɛθ'],
    ['breathe', 'brið'],
    ['breathing', 'briðing'],
    ['Britain', 'britɛjn'],
    ['brought', 'brɔt'],
    ['browse', 'braʊz'],
    ['browser', 'braʊzʌr'],
    ['buried', 'bʌrid'],
    ['burlesk', 'bʌrlɛsk'],
    ['burlesque', 'bʌrlɛsk'],
    ['butthead', 'bʌthɛd'],
    ['buy', 'baj'],
    ['buyers', 'bajʌrz'],
    ['buzzard', 'bʌzʌrd'],
    ['bye', 'baj'],

    ['caboose', 'kabus'],
    ['campaign', 'kɛmpɛjn'],
    ['can', 'kan'],
    ['cane', 'kɛjn'],
    ['canoe', 'kʌnu'],
    ['can\'t', 'kant'],
    ['cap', 'kap'],
    ['cape', 'kɛjp'],
    ['Caribbean', 'karibin'],
    ['carried', 'karid'],
    ['cartouche', 'kartuʃ'],
    ['castle', 'kasʌl'],
    ['casual', 'kaʒʌl'],
    ['casually', 'kaʒʌli'],
    ['catch', 'katʃ'],
    ['caught', 'kɔt'],
    ['ceil', 'sil'],
    ['ceiling', 'siling'],
    ['celt', 'sɛlt'],
    ['center', 'sɛntʌr'],
    ['centre', 'sɛntʌr'],
    ['chafe', 'tʃɛjf'],
    ['chafing', 'tʃɛjfing'],
    ['chainsaw', 'tʃɛjnsɔ'],
    ['change', 'tʃɛjndʒ'],
    ['changed', 'tʃɛjndʒd'],
    ['changer', 'tʃɛjndʒʌr'],
    ['changing', 'tʃɛjndʒing'],
    ['chant', 'tʃant'],
    ['character', 'karaktʌr'],
    ['charge', 'tʃardʒ'],
    ['chariot', 'tʃarjɔt'],
    ['charisma', 'karizma'],
    ['charity', 'tʃariti'],
    ['Charlie', 'tʃarli'],
    ['charms', 'tʃarmz'],
    ['Chaucer', 'tʃɔsʌr'],
    ['cheesecake', 'tʃizkɛjk'],
    ['Chelsea', 'tʃɛlsi'],
    ['choice', 'tʃɔjs'],
    ['choices', 'tʃɔjsiz'],
    ['chores', 'tʃɔrz'],
    ['Christopher', 'kristɔfʌr'],
    ['chtonian', 'ktonjan'],
    ['circle', 'sʌrkʌl'],
    ['cistern', 'sistʌrn'],
    ['clawing', 'klɔing'],
    ['clean', 'klin'],
    ['cleaning', 'klining'],
    ['cleanse', 'klɛns'],
    ['climb', 'klajmb'],
    ['climbing', 'klajmbing'],
    ['cloakroom', 'klokrum'],
    ['closed', 'klozd'],
    ['clown', 'klaʊn'],
    ['coarse', 'kɔrs'],
    ['coin', 'kɔjn'],
    ['collective', 'kɔlɛktiv'],
    ['colloquial', 'kɔlokwijʌl'],
    ['column', 'kɔlʌm'],
    ['condemn', 'kɔndɛm'],
    ['confused', 'kɔnfjuzd'],
    ['convey', 'kɔnvɛ'],
    ['computer', 'kɔmpjutʌr'],
    ['corps', 'kɔr'],
    ['corpse', 'kɔrps'],
    ['corpses', 'kɔrpsiz'],
    ['corrosion', 'kɔroʒʌn'],
    ['couch', 'kaʊtʃ'],
    ['cough', 'kʌf'],
    ['could', 'kud'],
    ['council', 'kaʊnsʌl'],
    ['couple', 'kɔpʌl'],
    ['course', 'kɔrs'],
    ['courses', 'kɔrsiz'],
    ['court', 'kɔrt'],
    ['courteous', 'kɔrtjʌs'],
    ['cow', 'kaʊ'],
    ['coward', 'kaʊʌrd'],
    ['crouch', 'kraʊtʃ'],
    ['crown', 'kraʊn'],
    ['crucial', 'krʌʃʌl'],
    ['cruel', 'krul'],
    ['crumb', 'krʌmb'],
    ['crush', 'krʌʃ'],
    ['cube', 'kjub'],
    ['cue', 'kju'],
    ['cur', 'kʌr'],
    ['cure', 'kjur'],
    ['cute', 'kjut'],
    ['cutthroat', 'kʌtθrot'],
    ['cyber', 'sajbʌr'],

    ['damn', 'dam'],
    ['dance', 'dɛns'],
    ['dancing', 'dɛnsing'],
    ['danger', 'dɛjndʒʌr'],
    ['Darlene', 'darlin'],
    ['daughter', 'dɔtʌr'],
    ['dawn', 'dɔn'],
    ['day', 'dɛ'],
    ['dead', 'dɛd'],
    ['dealt', 'dɛlt'],
    ['dean', 'din'],
    ['dear', 'dir'],
    ['death', 'dɛθ'],
    ['debate', 'dibɛjt'],
    ['debates', 'dibɛjts'],
    ['debt', 'dɛt'],
    ['debts', 'dɛts'],
    ['defied', 'difajd'],
    ['deism', 'deizʌm'],
    ['Dennis', 'dɛnis'],
    ['department', 'dɛpartmɛnt'],
    ['Depp', 'dɛp'],
    ['depth', 'dɛpθ'],
    ['deputy', 'dɛpjuti'],
    ['design', 'dizajn'],
    ['deuce', 'djus'],
    ['devious', 'divjʌs'],
    ['dew', 'dju'],
    ['Dewey', 'duwi'],
    ['dexterous', 'dɛkstrʌs'],
    ['dial', 'dajʌl'],
    ['dictionary', 'dikʃʌnɛri'],
    ['died', 'dajd'],
    ['dim', 'dim'],
    ['dime', 'dajm'],
    ['diner', 'dajnʌr'],
    ['Dinner', 'dinʌr'],
    ['dire', 'dajʌr'],
    ['direct', 'dirɛkt'],
    ['disappear', 'dizapir'],
    ['dispute', 'dispjut'],
    ['disputes', 'dispjuts'],
    ['do', 'du'],
    ['dodge', 'dɔdʒ'],
    ['does', 'dɔz'],
    ['doesn\'t', 'dɔzʌnt'],
    ['door', 'dɔr'],
    ['dost', 'dɔst'],
    ['doth', 'dɔθ'],
    ['doubt', 'daʊt'],
    ['doubtful', 'daʊtful'],
    ['douche', 'duʃ'],
    ['douchebag', 'duʃbag'],
    ['dough', 'do'],
    ['dour', 'daʊr'],
    ['down', 'daʊn'],
    ['draught', 'draft'],
    ['dreadful', 'drɛdful'],
    ['dream', 'drim'],
    ['dreamt', 'drɛmt'],
    ['drew', 'dru'],
    ['dribble', 'dribʌl'],
    ['drizzle', 'drizʌl'],
    ['drove', 'drov'],
    ['drowse', 'draʊz'],
    ['duchess', 'dʌtʃɛs'],
    ['duck', 'dʌk'],
    ['duel', 'djul'],
    ['duke', 'djuk'],
    ['dull', 'dʌl'],
    ['duly', 'djuli'],
    ['dumbfounded', 'dʌmbfaʊndid'],
    ['Dwayne', 'dwɛjn'],
    ['Dwight', 'dwajt'],
    ['dye', 'daj'],
    ['dyes', 'dajz'],
    ['dyed', 'dajd'],
    ['Dylan', 'dilʌn'],

    ['ear', 'ir'],
    ['earth', 'ʌrθ'],
    ['ebb', 'ɛb'],
    ['eccentric', 'ɛksɛntrik'],
    ['ectoplasm', 'ɛktɔplazʌm'],
    ['Eden', 'idʌn'],
    ['edgy', 'ɛdʒi'],
    ['Edna', 'ɛdna'],
    ['education', 'ɛdjukɛʃʌn'],
    ['ektor', 'ɛktɔr'],
    ['egg', 'ɛg'],
    ['egghead', 'ɛghɛd'],
    ['eight', 'ɛjt'],
    ['equal', 'ikwʌl'],
    ['equate', 'ikwɛjt'],
    ['equifax', 'ɛkwifaks'],
    ['emerald', 'ɛmrald'],
    ['end', 'ɛnd'],
    ['endgame', 'ɛndgɛjm'],
    ['energy', 'ɛnʌrdʒi'],
    ['engine', 'ɛndʒin'],
    ['enough', 'ɛnʌf'],
    ['ensign', 'ɛnsajn'],
    ['entice', 'ɛntajs'],
    ['entrepreneur', 'ɛntrɛprɛnjur'],
    ['epic', 'ɛpik'],
    ['epicke', 'ɛpik'],
    ['epique', 'ɛpik'],
    ['equation', 'ikwɛʃʌn'],
    ['established', 'ɛstabliʃd'],
    ['esquire', 'ɛskwajʌr'],
    ['eternal', 'itʌrnʌl'],
    ['Ethan', 'iθʌn'],
    ['ether', 'iθʌr'],
    ['Eugene', 'judʒin'],
    ['evacuation', 'ivakjuɛʃʌn'],
    ['Eve', 'iv'],
    ['evil', 'ivʌl'],
    ['ew', 'ju'],
    ['exam', 'ɛgzam'],
    ['example', 'ɛgzɛmpʌl'],
    ['excite', 'ɛksajt'],
    ['exhaust', 'ɛgzɔst'],
    ['exhaustion', 'ɛgzɔstʃʌn'],
    ['existential', 'ɛgzistɛnʃʌl'],
    ['expect', 'ɛkspɛkt'],
    ['expected', 'ɛkspɛktid'],
    ['experience', 'ɛkspʌriɛns'],
    ['exulting', 'ɛgzʌlting'],
    ['eye', 'aj'],
    ['eyeglass', 'ajglas'],
    ['eyes', 'ajz'],

    ['faerie', 'fɛri'],
    ['factice', 'faktis'],
    ['faint', 'fɛjnt'],
    ['faintly', 'fɛjntli'],
    ['fashion', 'faʃʌn'],
    ['fasten', 'fasʌn'],
    ['Fawkes', 'fɔks'],
    ['fawn', 'fɔn'],
    ['feathers', 'fɛðʌrz'],
    ['fed', 'fɛd'],
    ['feign', 'fɛjn'],
    ['feist', 'fajst'],
    ['feud', 'fjud'],
    ['few', 'fju'],
    ['fi', 'faj'],
    ['fiend', 'find'],
    ['fiendishly', 'findiʃli'],
    ['filth', 'filθ'],
    ['find', 'fajnd'],
    ['finger', 'fingʌr'],
    ['fingered', 'fingʌrd'],
    ['five', 'fajv'],
    ['fir', 'fʌr'],
    ['fire', 'fajʌr'],
    ['first', 'fʌrst'],
    ['Firth', 'fʌrθ'],
    ['fission', 'fiʃʌn'],
    ['flair', 'flɛr'],
    ['flanger', 'flɛndʒʌr'],
    ['flies', 'flajz'],
    ['floor', 'flɔr'],
    ['flour', 'flaʊr'],
    ['fly', 'flaj'],
    ['flying', 'flajing'],
    ['fought', 'fɔt'],
    ['frantically', 'frɛntikli'],
    ['freight', 'frɛjt'],
    ['fries', 'frajz'],
    ['friend', 'frɛnd'],
    ['friendly', 'frɛndli'],
    ['frightened', 'frajtʌnd'],
    ['frown', 'fraʊn'],
    ['frowned', 'fraʊnd'],
    ['fry', 'fraj'],
    ['frying', 'frajing'],
    ['foes', 'foz'],
    ['forestry', 'fɔrɛstri'],
    ['foul', 'faʊl'],
    ['fox', 'fɔks'],
    ['fuck', 'fʌk'],
    ['fuel', 'fjul'],
    ['fugitive', 'fjudʒitiv'],
    ['fujin', 'fudʒin'],
    ['fulfill', 'fulfil'],
    ['full', 'ful'],
    ['fumes', 'fjumz'],
    ['fun', 'fʌn'],
    ['furious', 'fjurjʌs'],
    ['fury', 'fjuri'],
    ['furry', 'fʌri'],
    ['fusion', 'fjuʒʌn'],
    ['fuss', 'fʌs'],
    ['fussy', 'fʌsi'],
    ['futile', 'fjutajl'],
    ['futility', 'fjutiliti'],
    ['future', 'fjutʃʌr'],
    ['fuzzy', 'fʌzi'],

    ['gaming', 'gɛjming'],
    ['gage', 'gɛjdʒ'],
    ['gauge', 'gɛjdʒ'],
    ['gawk', 'gɔk'],
    ['geisha', 'gejʃa'],
    ['geography', 'dʒiografi'],
    ['George', 'dʒɔrdʒ'],
    ['Gerard', 'dʒʌrʌrd'],
    ['germ', 'dʒʌrm'],
    ['germs', 'dʒʌrmz'],
    ['gene', 'dʒin'],
    ['genes', 'dʒinz'],
    ['get', 'gɛt'],
    ['getter', 'gɛtʌr'],
    ['ghost', 'gost'],
    ['giggle', 'gigʌl'],
    ['gin', 'dʒin'],
    ['ginger', 'dʒindʒʌr'],
    ['girth', 'gʌrθ'],
    ['gladly', 'gladli'],
    ['glamour', 'glamʌr'],
    ['Glen', 'glɛn'],
    ['Glenn', 'glɛn'],
    ['glial', 'glajʌl'],
    ['glimmers', 'glimʌrz'],
    ['glisten', 'glisʌn'],
    ['gloomy', 'glumi'],
    ['Gloster', 'glɔstʌr'],
    ['Gloucester', 'glɔstʌr'],
    ['going', 'going'],
    ['Google', 'gugʌl'],
    ['gown', 'gaʊn'],
    ['grace', 'grɛjs'],
    ['grafs', 'grafs'],
    ['Granger', 'grɛjndʒʌr'],
    ['graphs', 'grafs'],
    ['great', 'grɛt'],
    ['Gremlins', 'grɛmlinz'],
    ['grate', 'grɛjt'],
    ['greek', 'grik'],
    ['green', 'grin'],
    ['Greene', 'grin'],
    ['Greenwich', 'grinitʃ'],
    ['greet', 'grit'],
    ['grew', 'gru'],
    ['grief', 'grif'],
    ['grievious', 'grivjʌs'],
    ['grinding', 'grajnding'],
    ['grindr', 'grajndʌr'],
    ['grizzly', 'grizli'],
    ['groin', 'grɔjn'],
    ['ground', 'graʊnd'],
    ['guy', 'gaj'],
    ['guys', 'gajz'],
    ['Gwen', 'gwɛn'],
    ['gymnast', 'dʒimnast'],

    ['Hampshire', 'hɛmpʃʌr'],
    ['harbour', 'harbʌr'],
    ['hard', 'hard'],
    ['Harry', 'hari'],
    ['Harvard', 'harvʌrd'],
    ['haunt', 'hɔnt'],
    ['hav', 'hav'],
    ['have', 'hav'],
    ['haven', 'hɛjvʌn'],
    ['having', 'having'],
    ['hawks', 'hɔks'],
    ['haze', 'hɛjz'],
    ['head', 'hɛd'],
    ['heads', 'hɛdz'],
    ['health', 'hɛlθ'],
    ['heard', 'hʌrd'],
    ['hearth', 'harθ'],
    ['heave', 'hiv'],
    ['heaven', 'hɛvʌn'],
    ['heavier', 'hɛvijʌr'],
    ['heavy', 'hɛvi'],
    ['height', 'hajt'],
    ['heightened', 'higtʌnd'],
    ['heist', 'hajst'],
    ['hello', 'hɛlo'],
    ['helped', 'hɛlpd'],
    ['here', 'hir'],
    ['hereafter', 'hiraftʌr'],
    ['hey', 'hɛ'],
    ['hero', 'hiro'],
    ['hi', 'haj'],
    ['hiccough', 'hikʌf'],
    ['hidden', 'hidʌn'],
    ['hideous', 'hidjʌs'],
    ['high', 'haj'],
    ['hold', 'hold'],
    ['home', 'hom'],
    ['horn', 'hɔrn'],
    ['horse', 'hɔrs'],
    ['horses', 'hɔrsiz'],
    ['hound', 'haʊnd'],
    ['hour', 'aʊr'],
    ['house', 'haʊs'],
    ['housing', 'haʊsing'],
    ['how', 'haʊ'],
    ['Howard', 'haʊʌrd'],
    ['howl', 'haʊl'],
    ['hubs', 'hʌbz'],
    ['hue', 'hju'],
    ['Hugh', 'hju'],
    ['Hume', 'hjum'],
    ['human', 'hjuman'],
    ['humour', 'hjumʌr'],
    ['Hun', 'hʌn'],
    ['hunger', 'hʌngʌr'],
    ['huzzah', 'hʌza'],

    ['imbue', 'imbju'],
    ['impute', 'impjut'],
    ['ingenuous', 'indʒɛnjuʌs'],
    ['intellectual', 'intɛlɛktʃuʌl'],
    ['interest', 'intrɛst'],
    ['Iran', 'iran'],
    ['island', 'ajlɛnd'],
    ['islam', 'islam'],
    ['isle', 'ajl'],
    ['isles', 'ajlz'],
    ['isn\'t', 'izʌnt'],
    ['Italy', 'itali'],

    ['Jameson', 'dʒɛjmsɔn'],
    ['January', 'dʒanjuɛri'],
    ['Jerry', 'dʒɛri'],
    ['Jesus', 'dʒisʌs'],
    ['jewish', 'dʒuiʃ'],
    ['jews', 'dʒuz'],
    ['jib', 'dʒib'],
    ['jibe', 'dʒajb'],
    ['jive', 'dʒajv'],
    ['Joan', 'dʒon'],
    ['Joe', 'dʒo'],
    ['John', 'dʒɔn'],
    ['joice', 'dʒɔjs'],
    ['join', 'dʒɔjn'],
    ['joined', 'dʒɔjnd'],
    ['Joliet', 'dʒoljɛt'],
    ['Jordan', 'dʒɔrdan'],
    ['journey', 'dʒʌrni'],
    ['Jove', 'dʒov'],
    ['Joyce', 'dʒɔjs'],
    ['Jude', 'dʒud'],
    ['Juliettes', 'dʒuljɛts'],
    ['Jules', 'dʒulz'],
    ['July', 'dʒulaj'],
    ['june', 'dʒun'],
    ['junk', 'dʒʌnk'],
    ['Justice', 'dʒʌstis'],

    ['Keanu', 'kianu'],
    ['key', 'ki'],
    ['Khorn', 'kɔrn'],
    ['Kingcaid', 'kingkɛjd'],
    ['kingsman', 'kingzman'],
    ['killed', 'kild'],
    ['kind', 'kajnd'],
    ['Kirsch', 'kirʃ'],
    ['kislev', 'kislɛv'],
    ['knew', 'nu'],
    ['knocked', 'nɔkd'],
    ['known', 'non'],
    ['Kremlin', 'krɛmlin'],

    ['labour', 'lɛjbʌr'],
    ['lattice', 'latis'],
    ['language', 'lɛngwɛjdʒ'],
    ['laugh', 'laf'],
    ['laughing', 'lafing'],
    ['laughter', 'laftʌr'],
    ['Lawrence', 'lɔrɛns'],
    ['lawyer', 'lɔjʌr'],
    ['leaf', 'lif'],
    ['league', 'lig'],
    ['lease', 'lis'],
    ['leases', 'lisiz'],
    ['leaders', 'lidʌrz'],
    ['leather', 'lɛðʌr'],
    ['led', 'lɛd'],
    ['left', 'lɛft'],
    ['Legions', 'lidʒɔnz'],
    ['Leicester', 'lɛstʌr'],
    ['length', 'lɛnθ'],
    ['lengthy', 'lɛnθi'],
    ['leapt', 'lɛpt'],
    ['lesson', 'lɛsɔn'],
    ['lethal', 'liθʌl'],
    ['Lewey', 'luwi'],
    ['Lewis', 'luwis'],
    ['lice', 'lajs'],
    ['lick', 'lik'],
    ['lied', 'lajd'],
    ['lieutenant', 'lɛftʌnant'],
    ['life', 'lajf'],
    ['linger', 'lingʌr'],
    ['lingering', 'lingʌring'],
    ['Lipovetsky', 'lipovɛtski'],
    ['liquified', 'likwifajd'],
    ['little', 'litʌl'],
    ['lives', 'livz'],
    ['lion', 'lajɔn'],
    ['lions', 'lajɔnz'],
    ['listen', 'lisʌn'],
    ['live', 'liv'],
    ['loft', 'lɔft'],
    ['Logan', 'logʌn'],
    ['loins', 'lɔjnz'],
    ['loo', 'lu'],
    ['loose', 'lus'],
    ['lounge', 'laʊdʒ'],
    ['luck', 'lʌk'],
    ['luke', 'luk'],
    ['lunch', 'lʌntʃ'],
    ['lurk', 'lʌrk'],
    ['lush', 'lʌʃ'],
    ['luxury', 'lʌkʃʌri'],
    ['lyme', 'lajm'],

    ['Mc', 'mak'],
    ['MacDonald', 'makdonald'],
    ['McDonald', 'makdonald'],
    ['MccDonald', 'makdonald'],
    ['Maggie', 'magi'],
    ['magician', 'madʒiʃʌn'],
    ['maim', 'mɛjm'],
    ['make', 'mɛjk'],
    ['manger', 'mɛjndʒʌr'],
    ['marauders', 'marɔdʌrz'],
    ['Marceus', 'marsiʌs'],
    ['Marge', 'mardʒ'],
    ['Margie', 'mardʒi'],
    ['Marlowe', 'marlo'],
    ['mat', 'mat'],
    ['Matthew', 'maθju'],
    ['Matthews', 'maθjuz'],
    ['mayorships', 'mɛrʃips'],
    ['mead', 'mid'],
    ['meadow', 'mɛdo'],
    ['mean', 'min'],
    ['meant', 'mɛnt'],
    ['measle', 'mizʌl'],
    ['measly', 'mizli'],
    ['mech', 'mɛk'],
    ['mechanism', 'mɛkanizʌm'],
    ['meddle', 'mɛdʌl'],
    ['meddling', 'mɛdling'],
    ['meeple', 'mipʌl'],
    ['meh', 'mɛ'],
    ['mehdi', 'mɛdi'],
    ['mercenary', 'mɛrsnɛri'],
    ['mice', 'majs'],
    ['mickey', 'miki'],
    ['middle', 'midʌl'],
    ['mighteous', 'majtʃʌs'],
    ['Mike', 'majk'],
    ['mind', 'majnd'],
    ['minds', 'majndz'],
    ['mine', 'majn'],
    ['Misha', 'miʃa'],
    ['mishap', 'mishap'],
    ['mishappen', 'mishapʌn'],
    ['misled', 'mislɛd'],
    ['mission', 'miʃʌn'],
    ['mixture', 'mikstʃʌr'],
    ['moat', 'mot'],
    ['monocle', 'monɔkʌl'],
    ['Moose', 'mus'],
    ['Moscow', 'mɔskaʊ'],
    ['mound', 'maʊnd'],
    ['mount', 'maʊnt'],
    ['mountain', 'maʊntɛjn'],
    ['mouse', 'maʊs'],
    ['mouth', 'maʊθ'],
    ['move', 'muv'],
    ['mud', 'mʌd'],
    ['mule', 'mjul'],
    ['mushrooms', 'mʌʃrumz'],
    ['muse', 'mjuz'],
    ['musique', 'mjuzik'],
    ['my', 'maj'],

    ['Nate', 'nɛjt'],
    ['naughty', 'nɔti'],
    ['nave', 'nɛjv'],
    ['navigate', 'navigɛjt'],
    ['navigation', 'navigɛʃʌn'],
    ['nay', 'nɛ'],
    ['Ned', 'nɛd'],
    ['Neil', 'nil'],
    ['neurotic', 'njurotik'],
    ['neutral', 'njutrʌl'],
    ['new', 'nju'],
    ['newer', 'njuʌr'],
    ['nibble', 'nibʌl'],
    ['Nichol', 'nikɔl'],
    ['night', 'najt'],
    ['Nile', 'najl'],
    ['no', 'no'],
    ['Nobel', 'nobʌl'],
    ['noble', 'nɔbʌl'],
    ['noise', 'nɔjz'],
    ['Nolan', 'nolʌn'],
    ['noose', 'nus'],
    ['nought', 'nɔt'],
    ['noun', 'naʊn'],
    ['notice', 'notis'],
    ['noticing', 'notising'],
    ['notorious', 'notɔrjʌs'],
    ['notoriously', 'notɔrjʌsli'],
    ['now', 'naʊ'],
    ['nuke', 'njuk'],
    ['nuff', 'nʌf'],

    ['obbey', 'ɔbɛ'],
    ['obsolete', 'ɔbsolit'],
    ['off', 'ɔf'],
    ['offspring', 'ɔfspring'],
    ['often', 'ɔfʌn'],
    ['Ogre', 'ogʌr'],
    ['once', 'wans'],
    ['one', 'wan'],
    ['oneself', 'wansɛlf'],
    ['oozes', 'uziz'],
    ['or', 'ɔr'],
    ['oranges', 'ɔrɛjndʒz'],
    ['otter', 'ɔtʌr'],
    ['ought', 'ɔt'],
    ['our', 'aʊr'],
    ['oxygen', 'ɔksidʒʌn'],
    ['owl', 'aʊl'],
    ['own', 'on'],

    ['pain', 'pɛjn'],
    ['pair', 'pɛr'],
    ['paranoid', 'paranɔjd'],
    ['paranoids', 'paranɔjdz'],
    ['partnered', 'partnʌrd'],
    ['passion', 'paʃʌn'],
    ['passionate', 'paʃʌnɛjt'],
    ['pawn', 'pɔn'],
    ['payn', 'pɛjn'],
    ['peaches', 'pitʃiz'],
    ['pear', 'pɛr'],
    ['pearl', 'pʌrl'],
    ['peasant', 'pɛzant'],
    ['pen', 'pɛn'],
    ['peon', 'pion'],
    ['peony', 'pioni'],
    ['people', 'pipʌl'],
    ['perfect', 'pʌrfɛkt'],
    ['peruse', 'pʌruz'],
    ['pet', 'pɛt'],
    ['Pete', 'pit'],
    ['Peter', 'pitʌr'],
    ['pheasant', 'fɛzant'],
    ['phew', 'fju'],
    ['philosophy', 'filozɔfi'],
    ['Pickett', 'pikɛt'],
    ['Pickette', 'pikɛt'],
    ['piece', 'pis'],
    ['pieces', 'pisiz'],
    ['pier', 'pir'],
    ['piety', 'pajʌti'],
    ['pin', 'pin'],
    ['pine', 'pajn'],
    ['pity', 'piti'],
    ['place', 'plɛjs'],
    ['places', 'plɛjsiz'],
    ['plaice', 'plɛjs'],
    ['plant', 'plant'],
    ['player', 'plɛjʌr'],
    ['playing', 'plɛjing'],
    ['plead', 'plid'],
    ['pleasantry', 'plɛzɛntri'],
    ['plentiful', 'plɛntiful'],
    ['pneumo', 'njumo'],
    ['Poe', 'po'],
    ['point', 'pɔjnt'],
    ['poise', 'pɔjz'],
    ['poison', 'pɔjzɔn'],
    ['poor', 'pur'],
    ['porridge', 'pɔridʒ'],
    ['Porsche', 'pɔrʃ'],
    ['posh', 'pɔʃ'],
    ['pot', 'pɔt'],
    ['pouch', 'paʊtʃ'],
    ['pounds', 'paʊndz'],
    ['pouty', 'paʊti'],
    ['pow', 'paʊ'],
    ['practice', 'praktis'],
    ['prayer', 'prɛr'],
    ['preacher', 'pritʃʌr'],
    ['precious', 'prɛʃʌs'],
    ['precise', 'prisajz'],
    ['precocious', 'prikoʃʌs'],
    ['prep', 'prɛp'],
    ['preparation', 'prɛparɛʃʌn'],
    ['prepare', 'prɛpɛr'],
    ['pressure', 'prɛʃʌr'],
    ['pretend', 'pritɛnd'],
    ['priest', 'prist'],
    ['programmable', 'programabʌl'],
    ['prove', 'pruv'],
    ['proving', 'pruving'],
    ['psycho', 'sajko'],
    ['psychology', 'sajkolodʒi'],
    ['pubes', 'pjubz'],
    ['puberty', 'pjubʌrti'],
    ['puke', 'pjuk'],
    ['pulverize', 'pʌlvʌrajz'],
    ['punk', 'pʌnk'],
    ['punisher', 'pʌniʃʌr'],
    ['puny', 'pjuni'],
    ['pupil', 'pjupʌl'],
    ['pure', 'pjur'],
    ['purify', 'pjurifaj'],
    ['push', 'puʃ'],
    ['pushes', 'puʃiz'],
    ['pussy', 'pusi'],
    ['Putney', 'pʌtni'],
    ['puzzling', 'pʌzling'],

    ['Qatar', 'katar'],
    ['Quentin', 'kwɛntin'],
    ['quest', 'kwɛst'],
    ['question', 'kwɛstʃʌn'],
    ['quiet', 'kwajʌt'],
    ['quire', 'kwajʌr'],
    ['quine', 'kwajn'],

    ['racial', 'rɛjʃʌl'],
    ['raciality', 'rɛjʃʌlti'],
    ['ran', 'ran'],
    ['Randell', 'rɛndɛl'],
    ['random', 'rɛndɔm'],
    ['range', 'rɛjndʒ'],
    ['ranger', 'rɛjndʒʌr'],
    ['rape', 'rɛjp'],
    ['ratio', 'rɛʃo'],
    ['ration', 'rɛʃʌn'],
    ['rave', 'rɛjv'],
    ['raven', 'rɛjvʌn'],
    ['raw', 'rɔ'],
    ['ready', 'rɛdi'],
    ['rebuke', 'ribjuk'],
    ['receipt', 'risit'],
    ['receipts', 'risits'],
    ['receive', 'risiv'],
    ['recoil', 'rikɔjl'],
    ['redoubt', 'ridaʊt'],
    ['referee', 'rɛfri'],
    ['refugee', 'rɛfjudʒi'],
    ['region', 'ridʒɔn'],
    ['rehab', 'rihab'],
    ['rehearse', 'rihʌrs'],
    ['reight', 'rɛjt'],
    ['reign', 'rɛjn'],
    ['reism', 'reizʌm'],
    ['religion', 'rɛlidʒɔn'],
    ['rescind', 'risind'],
    ['rescue', 'rɛskju'],
    ['resign', 'rizajn'],
    ['resource', 'risɔrs'],
    ['retail', 'ritɛjl'],
    ['Rhaegar', 'rɛgar'],
    ['rhyme', 'rajm'],
    ['rhyming', 'rajming'],
    ['right', 'rajt'],
    ['righteous', 'rajtʃʌs'],
    ['rightly', 'rajtli'],
    ['riot', 'rajɔt'],
    ['roam', 'rom'],
    ['Robin', 'robin'],
    ['Robyn', 'robin'],
    ['Robyne', 'robin'],
    ['route', 'raʊt'],
    ['Roscoe', 'rɔsko'],
    ['Rochdale', 'rɔʃdɛjl'],
    ['rude', 'rud'],
    ['rule', 'rul'],
    ['ruse', 'ruz'],
    ['Russel', 'rʌsʌl'],
    ['rush', 'rʌʃ'],
    ['Russia', 'rʌʃa'],
    ['Russians', 'rʌʃanz'],
    ['Ryan', 'rajan'],
    ['rye', 'raj'],
    ['rythm', 'riðʌm'],
    ['rythms', 'riðʌmz'],

    ['safety', 'sɛjfti'],
    ['sanctuary', 'sanktʃuɛri'],
    ['Samuel', 'samjul'],
    ['saw', 'sɔ'],
    ['sawing', 'sɔing'],
    ['scene', 'sin'],
    ['schedule', 'skɛdjul'],
    ['school', 'skul'],
    ['science', 'sajɛns'],
    ['scion', 'sajɔn'],
    ['scour', 'skaʊr'],
    ['screwed', 'skrud'],
    ['scrounged', 'skraʊdʒd'],
    ['sea', 'si'],
    ['search', 'sʌrtʃ'],
    ['seduce', 'sɛdjus'],
    ['see', 'si'],
    ['semper', 'sɛmpʌr'],
    ['Seth', 'sɛθ'],
    ['sexual', 'sɛkʃjuʌl'],
    ['Shampoo', 'ʃɛmpu'],
    ['Shaun', 'ʃɔn'],
    ['Shawn', 'ʃɔn'],
    ['shemale', 'ʃimɛjl'],
    ['Shepard', 'ʃɛpʌrd'],
    ['Sheperd', 'ʃɛpʌrd'],
    ['shield', 'ʃild'],
    ['shire', 'ʃajʌr'],
    ['shoe', 'ʃu'],
    ['should', 'ʃud'],
    ['shoulder', 'ʃoldʌr'],
    ['shouldn\'t', 'ʃudʌnt'],
    ['shoved', 'ʃovd'],
    ['showbusiness', 'ʃobiznɛs'],
    ['shown', 'ʃon'],
    ['shrew', 'ʃru'],
    ['shrunk', 'ʃrʌnk'],
    ['shunt', 'ʃʌnt'],
    ['siege', 'sidʒ'],
    ['sigh', 'saj'],
    ['sighs', 'sajz'],
    ['sign', 'sajn'],
    ['signs', 'sajnz'],
    ['simplify', 'simplifaj'],
    ['sinew', 'sinju'],
    ['sir', 'sʌr'],
    ['sire', 'sajʌr'],
    ['sister', 'sistʌr'],
    ['sit', 'sit'],
    ['site', 'sajt'],
    ['sites', 'sajts'],
    ['size', 'sajz'],
    ['sleight', 'slajt'],
    ['skew', 'skju'],
    ['sky', 'skaj'],
    ['skyman', 'skajman'],
    ['skymen', 'skajmɛn'],
    ['slaughter', 'slɔtʌr'],
    ['slouch', 'slaʊtʃ'],
    ['smoked', 'smokd'],
    ['social', 'soʃʌl'],
    ['society', 'sosajʌti'],
    ['soften', 'sɔfʌn'],
    ['sole', 'sol'],
    ['some', 'sɔm'],
    ['something', 'sɔmθing'],
    ['son', 'sɔn'],
    ['sound', 'saʊnd'],
    ['sought', 'sɔt'],
    ['soul', 'saʊl'],
    ['sour', 'saʊr'],
    ['source', 'sɔrs'],
    ['south', 'saʊθ'],
    ['southern', 'saʊðʌrn'],
    ['soviet', 'sovjɛt'],
    ['special', 'spɛʃʌl'],
    ['speciality', 'spɛʃʌlti'],
    ['speck', 'spɛk'],
    ['spell', 'spɛl'],
    ['spread', 'sprɛd'],
    ['squalid', 'skwalid'],
    ['state', 'stɛjt'],
    ['steady', 'stɛdi'],
    ['stealth', 'stɛlθ'],
    ['Stephen', 'stivʌn'],
    ['Steven', 'stivʌn'],
    ['stew', 'stju'],
    ['steward', 'stjuʌrd'],
    ['still', 'stil'],
    ['stirs', 'stʌrz'],
    ['straight', 'strɛjt'],
    ['strange', 'strɛjndʒ'],
    ['stronger', 'strɔngʌr'],
    ['struggle', 'strʌgʌl'],
    ['stuart', 'stjuart'],
    ['stu', 'stju'],
    ['stupid', 'stjupid'],
    ['styme', 'stajm'],
    ['suggest', 'sʌdʒɛst'],
    ['sun', 'sʌn'],
    ['super', 'supʌr'],
    ['supper', 'sʌpʌr'],
    ['surveil', 'sʌrvɛjl'],
    ['surveillance', 'sʌrvɛjlɛns'],
    ['survey', 'sʌrvɛ'],
    ['swam', 'swam'],
    ['swear', 'swɛr'],
    ['sword', 'sɔrd'],
    ['swordfish', 'sɔrdfiʃ'],
    ['syko', 'sajko'],
    ['symbol', 'simbɔl'],
    ['symbols', 'simbɔlz'],

    ['Tahoe', 'taho'],
    ['tail', 'tɛjl'],
    ['taoism', 'taoizʌm'],
    ['taught', 'tɔt'],
    ['taunt', 'tɔnt'],
    ['teacher', 'titʃʌr'],
    ['tech', 'tɛk'],
    ['technique', 'tɛknik'],
    ['ted', 'tɛd'],
    ['tee', 'ti'],
    ['test', 'tɛst'],
    ['Tezcatlipoca', 'tɛzkatlipoka'],
    ['tied', 'tajd'],
    ['tiger', 'tajgʌr'],
    ['tigre', 'tajgʌr'],
    ['tigres', 'tajgʌrz'],
    ['tiptoe', 'tipto'],
    ['Thaddeus', 'θadiʌs'],
    ['thane', 'θɛjn'],
    ['that', 'ðat'],
    ['Thatcher', 'θatʃʌr'],
    ['thee', 'ði'],
    ['their', 'ðɛr'],
    ['theirs', 'ðɛrz'],
    ['them', 'ðɛm'],
    ['themself', 'ðɛmsɛlf'],
    ['themselves', 'ðɛmsɛlvz'],
    ['theorem', 'θiorɛm'],
    ['these', 'ðiz'],
    ['they', 'ðɛ'],
    ['Thiel', 'θil'],
    ['thighs', 'θajz'],
    ['thine', 'ðajn'],
    ['this', 'ðis'],
    ['Thor', 'θɔr'],
    ['thorax', 'θɔraks'],
    ['thorough', 'θɔro'],
    ['those', 'ðoz'],
    ['thou', 'ðaʊ'],
    ['thoughts', 'θɔts'],
    ['thrash', 'θraʃ'],
    ['thread', 'θrɛd'],
    ['throne', 'θron'],
    ['Thror', 'θrɔr'],
    ['through', 'θru'],
    ['thrown', 'θron'],
    ['thy', 'ðaj'],
    ['thyself', 'ðajsɛlf'],
    ['Thom', 'tɔm'],
    ['Thomas', 'tɔmas'],
    ['to', 'tu'],
    ['toes', 'toz'],
    ['Tokyo', 'tokjo'],
    ['tomb', 'tumb'],
    ['tongue', 'tɔng'],
    ['tortoise', 'tɔrtɔjz'],
    ['touch', 'tʌtʃ'],
    ['touching', 'tʌtʃing'],
    ['tough', 'tʌf'],
    ['town', 'taʊn'],
    ['townsfolk', 'taʊnsfɔlk'],
    ['treachery', 'trɛtʃʌri'],
    ['treadmill', 'trɛdmil'],
    ['trove', 'trov'],
    ['truth', 'truθ'],
    ['try', 'traj'],
    ['trying', 'trajing'],
    ['tumblr', 'tʌmblʌr'],
    ['tuned', 'tjund'],
    ['turban', 'tʌrban'],
    ['turd', 'tʌrd'],
    ['turing', 'tʃʌring'],
    ['twentieth', 'twɛntijʌθ'],
    ['twice', 'twajs'],
    ['two', 'tu'],
    ['type', 'tajp'],
    ['typing', 'tajping'],
    ['tyger', 'tajgʌr'],
    ['Tyr', 'tir'],

    ['udder', 'ʌdʌr'],
    ['Ulfric', 'ʌlfrik'],
    ['under', 'ʌndʌr'],
    ['unique', 'junik'],
    ['united', 'junajtid'],
    ['upgrade', 'ʌpgrɛjd'],
    ['upgrading', 'ʌpgrɛjding'],
    ['utter', 'ʌtʌr'],

    ['vaguely', 'vɛjgli'],
    ['vamped', 'vɛmpd'],
    ['Vaughn', 'vɔn'],
    ['Vaughan', 'vɔn'],
    ['veil', 'vɛjl'],
    ['venger', 'vɛndʒʌr'],
    ['vial', 'vajʌl'],
    ['view', 'vju'],
    ['vigour', 'vigʌr'],
    ['vile', 'vajl'],
    ['Vince', 'vins'],
    ['Vincent', 'vinsɛnt'],
    ['vision', 'viʒʌn'],
    ['visual', 'viʒʌl'],
    ['violence', 'vajolɛns'],
    ['Voices', 'vɔjsiz'],
    ['void', 'vɔjd'],
    ['vouch', 'vaʊtʃ'],
    ['voucher', 'vaʊtʃʌr'],

    ['wade', 'wɛjd'],
    ['wall', 'wɔl'],
    ['wanted', 'wantid'],
    ['warmonger', 'warmɔngʌr'],
    ['Warwick', 'worik'],
    ['Warwickshire', 'worikʃʌr'],
    ['weaponize', 'wɛponajz'],
    ['wave', 'wɛjv'],
    ['wealth', 'wɛlθ'],
    ['wear', 'wɛr'],
    ['weight', 'wɛjt'],
    ['weird', 'wird'],
    ['what', 'wat'],
    ['whisper', 'wispʌr'],
    ['who', 'hu'],
    ['whom', 'hum'],
    ['whose', 'huz'],
    ['while', 'wajl'],
    ['William', 'wiljam'],
    ['Wilson', 'wilsɔn'],
    ['wird', 'wʌrd'],
    ['wizard', 'wizʌrd'],
    ['wombs', 'wumbz'],
    ['women', 'wimɛn'],
    ['wood', 'wud'],
    ['Worcester', 'wɔrstʌr'],
    ['Worcestershire', 'wɔrstʌrʃʌr'],
    ['worship', 'wɔrʃip'],
    ['would', 'wud'],
    ['wow', 'waʊ'],
    ['wowser', 'waʊzʌr'],
    ['wrestle', 'rɛsʌl'],
    ['wrestler', 'rɛslʌr'],
    ['wrestling', 'rɛsling'],
    ['wright', 'rajt'],
    ['wrist', 'rist'],
    ['wrought', 'rɔt'],
    ['wuss', 'wus'],

    ['Xanax', 'zanaks'],
    ['Xavier', 'zɛjvijʌr'],

    ['yeah', 'jɛ'],
    ['years', 'jɛrz'],
    ['Yeats', 'jɛts'],
    ['yes', 'jɛs'],
    ['yesterday', 'jɛstʌrdɛ'],
    ['yet', 'jɛt'],
    ['yield', 'jild'],
    ['you', 'ju'],
    ['young', 'jʌng'],
    ['younged', 'jʌngd'],
    ['yourself', 'jɔrsɛlf'],

    ['Zach', 'zak'],
    ['Zadeh', 'zadɛ'],
    ['zen', 'zɛn'],
    ['zero', 'ziro'],
    ['Zion', 'zajɔn'],
  ]
};
