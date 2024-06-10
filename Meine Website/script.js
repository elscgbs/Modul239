function senden()
{
    if(!checkemail())
    {
        alert("Bitte eine korrekte E-Mail Adresse angeben");
        return;
    }
    is_one_empty = false;
    var BreakException = {};
    try
    {
        for(i=0;i<not_empty_elements.length;i++)
        {
            if(not_empty_elements[i].value == "")
            {
                is_one_empty = true;
                throw BreakException
            }
        }
    }
    catch(e)
    {
        if(e != BreakException) throw e
    }
    if(is_one_empty)
    {
        alert("Bitte alle Felder mit * ausfüllen")
    }
    else
    {
        alert("Vielen Dank\nIhre Anfrage wurde gesendet")
    }
}

function loeschen()
{
    for(i=0;i<input.length;i++)
    {
        input[i].value = "";
    }
    document.getElementById('anrede')
    }

    function checkemail()
    {
    if(document.getElementById('email').value == null)
    {
        return false;
    }
    let email = document.getElementById('email').value
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}