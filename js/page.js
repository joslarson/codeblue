$(function(){
    var port = chrome.runtime.connect({name: "codeblue"});
    port.postMessage({request: "options"});
    port.onMessage.addListener(function(msg) {
        if (msg.options['status'] == "on"){
            var filename = window.location.href.substr( window.location.href.lastIndexOf("/") + 1 );
            
            if(filename == "Employee_FormatEntry1.asp?FormatID=96&EmpID=32957&Admin=&FormatName=Advance%20VTO"){
                $("select[name='ExceptionDate'] :nth-child(3)").prop('selected', true);
                $("input[name='submit']").click();
            }
            
            if(filename == "Employee_FormatEntry1.asp"){
                if($("input[name='xbutton']").length > 0){
                    $("input[name='xbutton']").click();
                } else {
                    console.log(setOpt(msg.options['delay']);
                    setTimeout(function(){ $("input[name='button2']").click(); }, setOpt(msg.options['delay'], 10000));
                }
            }
        }
    });
});

function setOpt(option, def) {
    if(option === null || option === "" || option === " "){
        return def;
    } else {
        return option;
    }
}