export function parseArguments(){
    let rawArguments = process.argv.slice(2);
    let parsedArguments = {};
    rawArguments.forEach(function(parameter){
        if (!parameter.startsWith("--"))
            return;
        let parts = parameter.toLowerCase().split('=');
        parsedArguments[parts[0].substring(2)]=parts[1];
    });
    
    if (!parsedArguments.env)
        parsedArguments.env = 'qa';

    if (!parsedArguments.user)
        parsedArguments.user = 'amateur';

    if (!parsedArguments.culture)
        parsedArguments.culture = 'en';
    
    return parsedArguments;
}
