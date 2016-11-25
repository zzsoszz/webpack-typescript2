import {Greet} from "./greet";
import {Hello} from "./hello";
import * as $  from "jquery";

$(document).ready(function(){
    $("#btn").click(function(){
            var g:Greet=new Greet();
            g.sayHi();
            var h:Hello=new Hello();
            h.sayHello();
            // require.ensure(['./greet'], function(require) {
            // 	var Greet = <typeof Greet>require('./greet');
            //     var g2:Greet=new Greet();
            //     g2.sayHi();
            // });
    });
});
