import frida
import time 

device = frida.get_usb_device()
pid = device.spawn("com.android.insecurebankv2")
device.resume(pid)

time.sleep(1) # avoid crash

session = device.attach(pid)

hook_script = """
Java.perform 
(
    function ()
    {
        console.log("speaking from hook");
        class_PostLogin = Java.use('com.android.insecurebankv2.PostLogin');
        class_PostLogin.doesSuperuserapkexist.implementation = function (x) 
            {
                return true;
            };
    };
);
"""

script = session.create_script(hook_script)
script.load()

input('...?') # prevent terminate