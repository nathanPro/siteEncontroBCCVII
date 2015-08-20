var anim = false;
var term;

function typed(finish_typing) {
    return function(term, message, delay, finish) {
        anim = true;
        var prompt = term.get_prompt();
        var c = 0;
        if (message.length > 0) {
            term.set_prompt('');
            var interval = setInterval(function() {
                term.insert(message[c++]);
                if (c == message.length) {
                    clearInterval(interval);
                    // execute in next interval
                    setTimeout(function() {
                        // swap command with prompt
                        finish_typing(term, message, prompt);
                        anim = false
                        finish && finish();
                    }, delay);
                }
            }, delay);
        }
    };
}
var typed_prompt = typed(function(term, message, prompt) {
    // swap command with prompt
    term.set_command('');
    term.set_prompt(message + ' ');
});
var typed_message = typed(function(term, message, prompt) {
    term.set_command('');
    term.echo(message)
    term.set_prompt(prompt);
});

function terminal(programacao) {
    // global to access from js terminal
    term = $('#term_demo').terminal(function(command, term) {
        if (command !== '') {

            if (command == "BCC") {
                typed_message(term, "Olá BCC", 100);
            } if (command == "programacao") {
                programacao.forEach(function(data){
                    term.echo(data.start+" - "+data.title);
                });
                term.echo("");
            } else if (command == "-help") {
                term.echo("programacao\tLista dos eventos\n");
                term.echo("alert(strinf)\tMath.abs()\tMath.acos()\tMath.acosh()\nMath.asin()\tMath.asinh()\tMath.atan()\tMath.atan2()\nMath.atanh()\tMath.cbrt()\tMath.ceil()\tMath.clz32()\nMath.cos()\tMath.cosh()\tMath.exp()\tMath.expm1()\nMath.floor()\tMath.fround()\tMath.hypot()\tMath.imul()\nMath.log()\tMath.log10()\tMath.log1p()\tMath.log2()\nMath.max()\tMath.min()\tMath.pow()\tMath.random()\nMath.round()\tMath.sign()\tMath.sin()\tMath.sinh()\nMath.sqrt()\tMath.tan()\tMath.tanh()\n");
            } else {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(new String(result));
                    }
                } catch (e) {
                    term.error("Comando não encontrado....");
                }
            }
        } else {
            term.echo('');
        }
    }, {
        greetings: '',
        name: 'js_demo',
        height: 550,
        prompt: 'user$ ',
        onInit: function(term) {
            // first question
            var msg = "Seja bem vindo!\nVocê está oficialmente convidado para o encontro do BCC 2015.\nPara ajuda -help\n";
            typed_message(term, msg, 50, function() {

            });
        }

    });
}
