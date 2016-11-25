import * as greet from "./greet";
import * as $  from "jquery";
$(document).ready(function(){
    $("#btn").click(function(){
            require.ensure(['./greet'], function(require) {
            	// These require calls are emitted (note these are NOT TypeScript
            	// `import ... require` statements). `require.ensure` is defined in
            	// require.d.ts. Webpack sees this and automatically puts c and d
            	// into a separate chunk. 
            	var cModule = <typeof greet>require('./greet');
            	// cModule and dModule will typed as strings
                var g=new cModule.Greet();
            	console.log(g.sayHello());
            });
    });
});
