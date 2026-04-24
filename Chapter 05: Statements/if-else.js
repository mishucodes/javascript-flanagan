//There are only 02 legal keywords in JS: "if" & "else". The "else if" does not exist.
//This is what we're effectively doing:

if(true)
    ;
else
    if(true)
        ;
    else ;