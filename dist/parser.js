/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"orderly_schema":4,"EOF":5,"named_entry":6,";":7,"unnamed_entry":8,"named_entries":9,"unnamed_entries":10,"definition_prefix":11,"property_name":12,"definition_suffix":13,"string_prefix":14,"string_suffix":15,"INTEGER":16,"optional_range":17,"NUMBER":18,"BOOLEAN":19,"NULL":20,"ANY":21,"ARRAY":22,"{":23,"}":24,"optional_additional_marker":25,"[":26,"]":27,"OBJECT":28,"REF":29,"STRING_LIT":30,"UNION":31,"STRING":32,"optional_perl_regex":33,"optional_enum_values":34,"optional_default_value":35,"optional_requires":36,"optional_optional_marker":37,"optional_extra_properties":38,"csv_property_names":39,",":40,"`":41,"JSONObject":42,"<":43,">":44,"?":45,"*":46,"JSONArray":47,"=":48,"JSONValue":49,"JSONNumber":50,"JSONString":51,"PROPERTY":52,"REGEX":53,"NUMBER_LIT":54,"JSONNullLiteral":55,"JSONBooleanLiteral":56,"TRUE":57,"FALSE":58,"JSONText":59,"JSONMemberList":60,"JSONMember":61,":":62,"JSONElementList":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:";",16:"INTEGER",18:"NUMBER",19:"BOOLEAN",20:"NULL",21:"ANY",22:"ARRAY",23:"{",24:"}",26:"[",27:"]",28:"OBJECT",29:"REF",30:"STRING_LIT",31:"UNION",32:"STRING",40:",",41:"`",43:"<",44:">",45:"?",46:"*",48:"=",52:"PROPERTY",53:"REGEX",54:"NUMBER_LIT",57:"TRUE",58:"FALSE",62:":"},
productions_: [0,[3,2],[4,2],[4,1],[4,2],[4,1],[9,3],[9,1],[9,0],[10,3],[10,1],[10,0],[6,3],[6,3],[8,2],[8,2],[11,2],[11,2],[11,1],[11,1],[11,1],[11,6],[11,6],[11,5],[11,2],[11,4],[14,2],[15,2],[13,5],[39,3],[39,1],[38,3],[38,0],[36,3],[36,0],[37,1],[37,0],[25,1],[25,0],[34,1],[34,0],[35,2],[35,0],[17,5],[17,4],[17,4],[17,3],[17,0],[12,1],[12,1],[33,1],[33,0],[51,1],[50,1],[55,1],[56,1],[56,1],[59,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[42,2],[42,3],[61,3],[60,1],[60,3],[47,2],[47,3],[63,1],[63,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 2: this.$ = new yy.TopNode($$[$0-1]); 
break;
case 3: this.$ = new yy.TopNode($$[$0]); 
break;
case 4: this.$ = new yy.TopNode($$[$0-1]); 
break;
case 5: this.$ = new yy.TopNode($$[$0]); 
break;
case 6:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 7:this.$ = [$$[$0]];
break;
case 8:this.$ = [];
break;
case 9:this.$ = $$[$0]; $$[$0].unshift($$[$0-2]);
break;
case 10:this.$ = [$$[$0]];
break;
case 11:this.$ = [];
break;
case 12:this.$ = [$$[$0-1], $$[$0-2]]; yy.Type.addOptionals($$[$0-2], $$[$0]);
break;
case 13:this.$ = [$$[$0-1], $$[$0-2]]; yy.Type.addOptionals($$[$0-2], $$[$0]);
break;
case 14:this.$ = $$[$0-1]; yy.Type.addOptionals(this.$, $$[$0]);
break;
case 15:this.$ = $$[$0-1]; yy.Type.addOptionals(this.$, $$[$0]);
break;
case 16:this.$ = new yy.Type('integer', $$[$0]);
break;
case 17:this.$ = new yy.Type('number', $$[$0]);
break;
case 18:this.$ = new yy.Type('boolean');
break;
case 19:this.$ = new yy.Type('null');
break;
case 20:this.$ = new yy.Type('any');
break;
case 21:this.$ = new yy.Type('array', $$[$0], $$[$0-3], $$[$0-1]);
break;
case 22:this.$ = new yy.Type('array', $$[$0], $$[$0-3], $$[$0-1]);
break;
case 23:this.$ = new yy.Type('object', null, $$[$0-2], $$[$0]);
break;
case 24:this.$ = new yy.Type('ref', null, $$[$0]);
break;
case 25:this.$ = new yy.Type($$[$0-1]);
break;
case 26:this.$ = new yy.Type('string', $$[$0]);
break;
case 27:this.$ = $$[$0]; this.$.pattern = $$[$0-1];
break;
case 28:this.$ = {'enums': $$[$0-4], 'defaultv': $$[$0-3], 'requires': $$[$0-2], 'optional': $$[$0-1], 'extras': $$[$0]};
break;
case 29:this.$ = $$[$0-2]; this.$.push($$[$0]);
break;
case 30:this.$ = [$$[$0]];
break;
case 31:this.$ = $$[$0-1];
break;
case 32:this.$ = null;
break;
case 33:this.$ = $$[$0-1];
break;
case 34:this.$ = null;
break;
case 35:this.$ = true;
break;
case 36:this.$ = null;
break;
case 37:this.$ = true;
break;
case 38:this.$ = null;
break;
case 40:this.$ = null;
break;
case 41:this.$ = $$[$0];
break;
case 42:this.$ = yy.NOVALUE;
break;
case 43:this.$ = [$$[$0-3], $$[$0-1]];
break;
case 44:this.$ = [$$[$0-2], null];
break;
case 45:this.$ = [null, $$[$0-1]];
break;
case 46:this.$ = null;
break;
case 47:this.$ = null;
break;
case 49:this.$ = yytext;
break;
case 50:this.$ = yytext.substr(1, yytext.length-2);
break;
case 51:this.$ = null;
break;
case 52:this.$ = yytext;
break;
case 53:this.$ = Number(yytext);
break;
case 54:this.$ = null;
break;
case 55:this.$ = true;
break;
case 56:this.$ = false;
break;
case 64:this.$ = {};
break;
case 65:this.$ = $$[$0-1];
break;
case 66:this.$ = [$$[$0-2], $$[$0]];
break;
case 67:this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
break;
case 68:this.$ = $$[$0-2]; $$[$0-2][$$[$0][0]] = $$[$0][1];
break;
case 69:this.$ = [];
break;
case 70:this.$ = $$[$0-1];
break;
case 71:this.$ = [$$[$0]];
break;
case 72:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,8:4,11:5,14:6,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{1:[3]},{5:[1,17]},{5:[2,3],7:[1,18]},{5:[2,5],7:[1,19]},{5:[2,40],7:[2,40],12:20,13:21,26:[1,27],30:[1,25],34:24,41:[2,40],43:[2,40],45:[2,40],47:26,48:[2,40],51:22,52:[1,23]},{5:[2,51],7:[2,51],12:28,15:29,26:[2,51],30:[1,25],33:30,41:[2,51],43:[2,51],45:[2,51],48:[2,51],51:22,52:[1,23],53:[1,31]},{5:[2,47],7:[2,47],17:32,23:[1,33],24:[2,47],26:[2,47],27:[2,47],30:[2,47],41:[2,47],43:[2,47],45:[2,47],48:[2,47],52:[2,47]},{5:[2,47],7:[2,47],17:34,23:[1,33],24:[2,47],26:[2,47],27:[2,47],30:[2,47],41:[2,47],43:[2,47],45:[2,47],48:[2,47],52:[2,47]},{5:[2,18],7:[2,18],24:[2,18],26:[2,18],27:[2,18],30:[2,18],41:[2,18],43:[2,18],45:[2,18],48:[2,18],52:[2,18]},{5:[2,19],7:[2,19],24:[2,19],26:[2,19],27:[2,19],30:[2,19],41:[2,19],43:[2,19],45:[2,19],48:[2,19],52:[2,19]},{5:[2,20],7:[2,20],24:[2,20],26:[2,20],27:[2,20],30:[2,20],41:[2,20],43:[2,20],45:[2,20],48:[2,20],52:[2,20]},{23:[1,35],26:[1,36]},{23:[1,37]},{30:[1,38]},{23:[1,39]},{5:[2,47],7:[2,47],17:40,23:[1,33],24:[2,47],26:[2,47],27:[2,47],30:[2,47],41:[2,47],43:[2,47],45:[2,47],48:[2,47],52:[2,47],53:[2,47]},{1:[2,1]},{5:[2,2]},{5:[2,4]},{5:[2,40],7:[2,40],13:41,24:[2,40],26:[1,27],34:24,41:[2,40],43:[2,40],45:[2,40],47:26,48:[2,40]},{5:[2,14],7:[2,14],24:[2,14],27:[2,14]},{5:[2,48],7:[2,48],24:[2,48],26:[2,48],40:[2,48],41:[2,48],43:[2,48],44:[2,48],45:[2,48],48:[2,48],53:[2,48]},{5:[2,49],7:[2,49],24:[2,49],26:[2,49],40:[2,49],41:[2,49],43:[2,49],44:[2,49],45:[2,49],48:[2,49],53:[2,49]},{5:[2,42],7:[2,42],24:[2,42],27:[2,42],35:42,41:[2,42],43:[2,42],45:[2,42],48:[1,43]},{5:[2,52],7:[2,52],24:[2,52],26:[2,52],27:[2,52],40:[2,52],41:[2,52],43:[2,52],44:[2,52],45:[2,52],48:[2,52],53:[2,52],62:[2,52]},{5:[2,39],7:[2,39],24:[2,39],27:[2,39],41:[2,39],43:[2,39],45:[2,39],48:[2,39]},{20:[1,53],23:[1,57],26:[1,27],27:[1,44],30:[1,25],42:51,47:52,49:46,50:50,51:49,54:[1,56],55:47,56:48,57:[1,54],58:[1,55],63:45},{5:[2,51],7:[2,51],15:58,24:[2,51],26:[2,51],33:30,41:[2,51],43:[2,51],45:[2,51],48:[2,51],53:[1,31]},{5:[2,15],7:[2,15],24:[2,15],27:[2,15]},{5:[2,40],7:[2,40],13:59,24:[2,40],26:[1,27],27:[2,40],34:24,41:[2,40],43:[2,40],45:[2,40],47:26,48:[2,40]},{5:[2,50],7:[2,50],24:[2,50],26:[2,50],27:[2,50],41:[2,50],43:[2,50],45:[2,50],48:[2,50]},{5:[2,16],7:[2,16],24:[2,16],26:[2,16],27:[2,16],30:[2,16],41:[2,16],43:[2,16],45:[2,16],48:[2,16],52:[2,16]},{40:[1,61],50:60,54:[1,56]},{5:[2,17],7:[2,17],24:[2,17],26:[2,17],27:[2,17],30:[2,17],41:[2,17],43:[2,17],45:[2,17],48:[2,17],52:[2,17]},{8:63,10:62,11:64,14:65,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],24:[2,11],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{8:66,11:64,14:65,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{6:68,9:67,11:69,14:70,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],24:[2,8],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{5:[2,24],7:[2,24],24:[2,24],26:[2,24],27:[2,24],30:[2,24],41:[2,24],43:[2,24],45:[2,24],48:[2,24],52:[2,24]},{8:63,10:71,11:64,14:65,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],24:[2,11],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{5:[2,26],7:[2,26],24:[2,26],26:[2,26],27:[2,26],30:[2,26],41:[2,26],43:[2,26],45:[2,26],48:[2,26],52:[2,26],53:[2,26]},{5:[2,12],7:[2,12],24:[2,12]},{5:[2,34],7:[2,34],24:[2,34],27:[2,34],36:72,41:[2,34],43:[1,73],45:[2,34]},{20:[1,53],23:[1,57],26:[1,27],30:[1,25],42:51,47:52,49:74,50:50,51:49,54:[1,56],55:47,56:48,57:[1,54],58:[1,55]},{5:[2,69],7:[2,69],24:[2,69],27:[2,69],40:[2,69],41:[2,69],43:[2,69],45:[2,69],48:[2,69]},{27:[1,75],40:[1,76]},{27:[2,71],40:[2,71]},{5:[2,58],7:[2,58],24:[2,58],27:[2,58],40:[2,58],41:[2,58],43:[2,58],45:[2,58]},{5:[2,59],7:[2,59],24:[2,59],27:[2,59],40:[2,59],41:[2,59],43:[2,59],45:[2,59]},{5:[2,60],7:[2,60],24:[2,60],27:[2,60],40:[2,60],41:[2,60],43:[2,60],45:[2,60]},{5:[2,61],7:[2,61],24:[2,61],27:[2,61],40:[2,61],41:[2,61],43:[2,61],45:[2,61]},{5:[2,62],7:[2,62],24:[2,62],27:[2,62],40:[2,62],41:[2,62],43:[2,62],45:[2,62]},{5:[2,63],7:[2,63],24:[2,63],27:[2,63],40:[2,63],41:[2,63],43:[2,63],45:[2,63]},{5:[2,54],7:[2,54],24:[2,54],27:[2,54],40:[2,54],41:[2,54],43:[2,54],45:[2,54]},{5:[2,55],7:[2,55],24:[2,55],27:[2,55],40:[2,55],41:[2,55],43:[2,55],45:[2,55]},{5:[2,56],7:[2,56],24:[2,56],27:[2,56],40:[2,56],41:[2,56],43:[2,56],45:[2,56]},{5:[2,53],7:[2,53],24:[2,53],27:[2,53],40:[2,53],41:[2,53],43:[2,53],45:[2,53]},{24:[1,77],30:[1,25],51:80,60:78,61:79},{5:[2,13],7:[2,13],24:[2,13]},{5:[2,27],7:[2,27],24:[2,27],27:[2,27]},{40:[1,81]},{24:[1,83],50:82,54:[1,56]},{24:[1,84]},{7:[1,85],24:[2,10]},{7:[2,40],13:21,24:[2,40],26:[1,27],27:[2,40],34:24,41:[2,40],43:[2,40],45:[2,40],47:26,48:[2,40]},{7:[2,51],15:29,24:[2,51],26:[2,51],27:[2,51],33:30,41:[2,51],43:[2,51],45:[2,51],48:[2,51],53:[1,31]},{27:[1,86]},{24:[1,87]},{7:[1,88],24:[2,7]},{12:20,30:[1,25],51:22,52:[1,23]},{12:28,30:[1,25],51:22,52:[1,23]},{24:[1,89]},{5:[2,36],7:[2,36],24:[2,36],27:[2,36],37:90,41:[2,36],45:[1,91]},{12:93,30:[1,25],39:92,51:22,52:[1,23]},{5:[2,41],7:[2,41],24:[2,41],27:[2,41],41:[2,41],43:[2,41],45:[2,41]},{5:[2,70],7:[2,70],24:[2,70],27:[2,70],40:[2,70],41:[2,70],43:[2,70],45:[2,70],48:[2,70]},{20:[1,53],23:[1,57],26:[1,27],30:[1,25],42:51,47:52,49:94,50:50,51:49,54:[1,56],55:47,56:48,57:[1,54],58:[1,55]},{5:[2,64],7:[2,64],24:[2,64],27:[2,64],40:[2,64],41:[2,64],43:[2,64],45:[2,64]},{24:[1,95],40:[1,96]},{24:[2,67],40:[2,67]},{62:[1,97]},{24:[1,99],50:98,54:[1,56]},{24:[1,100]},{5:[2,46],7:[2,46],24:[2,46],26:[2,46],27:[2,46],30:[2,46],41:[2,46],43:[2,46],45:[2,46],48:[2,46],52:[2,46],53:[2,46]},{5:[2,38],7:[2,38],23:[2,38],24:[2,38],25:101,26:[2,38],27:[2,38],30:[2,38],41:[2,38],43:[2,38],45:[2,38],46:[1,102],48:[2,38],52:[2,38]},{8:63,10:103,11:64,14:65,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],24:[2,11],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{5:[2,38],7:[2,38],23:[2,38],24:[2,38],25:104,26:[2,38],27:[2,38],30:[2,38],41:[2,38],43:[2,38],45:[2,38],46:[1,102],48:[2,38],52:[2,38]},{5:[2,38],7:[2,38],24:[2,38],25:105,26:[2,38],27:[2,38],30:[2,38],41:[2,38],43:[2,38],45:[2,38],46:[1,102],48:[2,38],52:[2,38]},{6:68,9:106,11:69,14:70,16:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],24:[2,8],28:[1,13],29:[1,14],31:[1,15],32:[1,16]},{5:[2,25],7:[2,25],24:[2,25],26:[2,25],27:[2,25],30:[2,25],41:[2,25],43:[2,25],45:[2,25],48:[2,25],52:[2,25]},{5:[2,32],7:[2,32],24:[2,32],27:[2,32],38:107,41:[1,108]},{5:[2,35],7:[2,35],24:[2,35],27:[2,35],41:[2,35]},{40:[1,110],44:[1,109]},{40:[2,30],44:[2,30]},{27:[2,72],40:[2,72]},{5:[2,65],7:[2,65],24:[2,65],27:[2,65],40:[2,65],41:[2,65],43:[2,65],45:[2,65]},{30:[1,25],51:80,61:111},{20:[1,53],23:[1,57],26:[1,27],30:[1,25],42:51,47:52,49:112,50:50,51:49,54:[1,56],55:47,56:48,57:[1,54],58:[1,55]},{24:[1,113]},{5:[2,44],7:[2,44],24:[2,44],26:[2,44],27:[2,44],30:[2,44],41:[2,44],43:[2,44],45:[2,44],48:[2,44],52:[2,44],53:[2,44]},{5:[2,45],7:[2,45],24:[2,45],26:[2,45],27:[2,45],30:[2,45],41:[2,45],43:[2,45],45:[2,45],48:[2,45],52:[2,45],53:[2,45]},{5:[2,47],7:[2,47],17:114,23:[1,33],24:[2,47],26:[2,47],27:[2,47],30:[2,47],41:[2,47],43:[2,47],45:[2,47],48:[2,47],52:[2,47]},{5:[2,37],7:[2,37],23:[2,37],24:[2,37],26:[2,37],27:[2,37],30:[2,37],41:[2,37],43:[2,37],45:[2,37],48:[2,37],52:[2,37]},{24:[2,9]},{5:[2,47],7:[2,47],17:115,23:[1,33],24:[2,47],26:[2,47],27:[2,47],30:[2,47],41:[2,47],43:[2,47],45:[2,47],48:[2,47],52:[2,47]},{5:[2,23],7:[2,23],24:[2,23],26:[2,23],27:[2,23],30:[2,23],41:[2,23],43:[2,23],45:[2,23],48:[2,23],52:[2,23]},{24:[2,6]},{5:[2,28],7:[2,28],24:[2,28],27:[2,28]},{23:[1,57],42:116},{5:[2,33],7:[2,33],24:[2,33],27:[2,33],41:[2,33],45:[2,33]},{12:117,30:[1,25],51:22,52:[1,23]},{24:[2,68],40:[2,68]},{24:[2,66],40:[2,66]},{5:[2,43],7:[2,43],24:[2,43],26:[2,43],27:[2,43],30:[2,43],41:[2,43],43:[2,43],45:[2,43],48:[2,43],52:[2,43],53:[2,43]},{5:[2,21],7:[2,21],24:[2,21],26:[2,21],27:[2,21],30:[2,21],41:[2,21],43:[2,21],45:[2,21],48:[2,21],52:[2,21]},{5:[2,22],7:[2,22],24:[2,22],26:[2,22],27:[2,22],30:[2,22],41:[2,22],43:[2,22],45:[2,22],48:[2,22],52:[2,22]},{41:[1,118]},{40:[2,29],44:[2,29]},{5:[2,31],7:[2,31],24:[2,31],27:[2,31]}],
defaultActions: {17:[2,1],18:[2,2],19:[2,4],103:[2,9],106:[2,6]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comment */
break;
case 2:/* skip comment */
break;
case 3:return 7
break;
case 4:return 40
break;
case 5:return 23
break;
case 6:return 24
break;
case 7:return 26
break;
case 8:return 27
break;
case 9:return 41
break;
case 10:return 43
break;
case 11:return 44
break;
case 12:return 62
break;
case 13:return 28
break;
case 14:return 16
break;
case 15:return 18
break;
case 16:return 20
break;
case 17:return 19
break;
case 18:return 21
break;
case 19:return 22
break;
case 20:return 31
break;
case 21:return 29
break;
case 22:return 32
break;
case 23:return 57
break;
case 24:return 58
break;
case 25:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 30;
break;
case 26:return 54;
break;
case 27:return 52;
break;
case 28:return 45
break;
case 29:return 46
break;
case 30:return 48
break;
case 31:return 53;
break;
case 32:return 5;
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:\/\/[^\n]*)/,/^(?:#[^\n]*)/,/^(?:;)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:`)/,/^(?:<)/,/^(?:>)/,/^(?::)/,/^(?:object\b)/,/^(?:integer\b)/,/^(?:number\b)/,/^(?:null\b)/,/^(?:boolean\b)/,/^(?:any\b)/,/^(?:array\b)/,/^(?:union\b)/,/^(?:ref\b)/,/^(?:string\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:"(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/,/^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))?((?:[eE][-+]?[0-9]+))?\b)/,/^(?:[A-Za-z_0-9-]+)/,/^(?:\?)/,/^(?:\*)/,/^(?:=)/,/^(?:\/(?:[^\/]|\\\/)*\/)/,/^(?:$)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}