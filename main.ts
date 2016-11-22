import { sayHello } from "./greet";
import * as $  from "jquery";
import * as _ from  "lodash";
$(document).ready(function(){
    $("#btn").click(function(){
          alert(sayHello("TypeScript"));
    });
});