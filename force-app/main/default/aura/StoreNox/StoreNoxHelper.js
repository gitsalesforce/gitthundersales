({
    getAccontRecord : function( component ) {
        var action = component.get("c.getAccountRecord");
        
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.accLst", response.getReturnValue());  // Adding values in Aura attribute variable.   
        });
        $A.enqueueAction(action);
    }
})