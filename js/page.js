$(function(){
    var port = chrome.runtime.connect({name: "codeblue"});
    port.postMessage({request: "options"});
    port.onMessage.addListener(function(msg) {
        if (msg.options['status'] == "on"){
            var filename = window.location.href.substr( window.location.href.lastIndexOf("/") + 1 );
            // if(filename == "Login.asp" || filename == "login.asp"){
            //     $('#UserID').val(setOpt(msg.options['username'], ""));
            //     $('#Password').val(setOpt(msg.options['password'], ""));
            //     if($('#UserID').val() !== "" && $('#Password').val() !== ""){
            //         $('#submit1').click();
            //     }
            // }
            // if(filename == "Home.asp"){
            //     window.location.replace("http://jetblue.rp4me.com/Employee_FormatEntry_Home.asp");
            // }

            // if(filename == "Employee_FormatEntry_Home.asp"){
            //     var location = $('a:contains(Advance VTO)').attr('href');
            //     window.location.replace(location);
            // }
            if(filename == "Employee_FormatEntry1.asp?FormatID=96&EmpID=32957&Admin=&FormatName=Advance%20VTO"){
                $("select[name='ExceptionDate'] :nth-child(3)").prop('selected', true);
                // $("select[name='StartTime'] option").filter(function() {
                //     return $(this).val() == msg.options['start'];
                // }).prop('selected', true);
                // $("select[name='StopTime'] option").filter(function() {
                //     return $(this).val() == msg.options['end'];
                // }).prop('selected', true);
                $("input[name='submit']").click();
            }
            if(filename == "Employee_FormatEntry1.asp"){
                setTimeout(function(){ $("input[name='button2']").click(); }, setOpt(msg.options['delay'], 400));
            }
        }
    });
});

function setOpt(option, def) {
    if(option === null || option === "" || option === " "){
        return def;
    } else {
        console.log("[" + option + "]");
        return option;
    }
}