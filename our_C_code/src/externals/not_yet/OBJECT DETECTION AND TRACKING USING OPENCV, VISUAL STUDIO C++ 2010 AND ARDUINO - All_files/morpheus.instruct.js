(function(q){var b={M:1500,G:"300x250 300x600 300x1050 300x50 320x50 320x100 728x90 160,600 120x600 970x250 970x90".split(" "),A:!1,a:{},m:[],N:{},D:!1,w:!1,B:function(){var d=b.c.f.defineSlot;b.c.f.defineSlot=function(){var a={l:arguments[0],o:arguments[2],b:{"new":!0,pending:null,displayed:null,fetched:null,refreshed:null,targeted:null,disabled:!1}},c=d.apply(this,arguments);a.s=c;for(var m="",k=[],e=c.getSizes(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||
document.documentElement.clientHeight||document.body.clientHeight),r=0;r<e.length;r++)m=e[r].getWidth()+"x"+e[r].getHeight(),-1!=b.G.indexOf(m)&&k.push(m);k=k.join(",");a.sizes=k;""===k&&(b.log(a,"ineligible sizes - we dont support the sizes for this ad","body"),b.log(a,"disabled - this unit is disabled for cypher","body"),a.b.disabled=!0);b.a[a.o]=a;b.log(a,"new - ad unit created","body");var h=c.fetchStarted;c.fetchStarted=function(a,b){return function(){h.apply(b.s,arguments);b.b.H=!0;a.log(b,
"fetched - ad call has been made for this ad unit","body")}}(b,a);return c};var c=b.c.f.enableServices;b.C=!1;b.c.f.enableServices=function(){b.log(null,"enableServices called","body");if(b.C)return c.apply(this,arguments);b.C=!0;for(var a in b.a)b.a[a].b["new"]&&(b.a[a].b["new"]=!1,b.a[a].b.j=!0,b.log(b.a[a],"pending - trinity request has started for this unit","body"));b.v(b.a,function(a){b.D?b.w?b.log(null,"Single Request, Disable Initial Load - Slots will only fetch after call to refresh for each one...",
"body"):b.log(null,"Single Request - All slots will be fetched after the first call to display...","body"):b.log(null,"Multi Request","body");for(var c in a)null!=b.a[c].b.h&&(b.log(a[c],"display - This element has been marked as displayable","body"),b.a[c].b.h.apply(b.c.f)),null!=b.a[c].b.i&&(b.log(a[c],"refresh - This element has been refreshed","body"),b.a[c].b.i())});return c.apply(this,arguments)};var a=b.c.g.enableSingleRequest;b.c.g.enableSingleRequest=function(){b.log(null,"enableSingleRequest called",
"body");var c=a.apply(this,arguments);return b.D=c};var e=b.c.g.disableInitialLoad;b.c.g.disableInitialLoad=function(){b.log(null,"disableInitialLoad called","body");b.w=!0;return e.apply(this,arguments)};var f=b.c.f.display;b.c.f.display=function(){var a=arguments,c=arguments[0];if(!(c in b.a))return b.log(null,"display initiated for non-cypher slot "+c,"body"),f.apply(this,a);b.a[c].b.h=f.bind(this,a[0]);b.a[c].b.u?b.a[c].b.h.apply(b.c.f):b.a[c].b["new"]&&(b.a[c].b["new"]=!1,b.a[c].b.j=!0,b.log(b.a[c],
"pending - trinity request has started for this unit","body"),a={},a[c]=b.a[c],b.v(a,function(a){for(var c in a)null!=b.a[c].b.h&&(b.log(a[c],"display - This element has been marked as displayable","body"),b.a[c].b.h.apply(b.c.f)),null!=b.a[c].b.i&&(b.log(a[c],"refresh - This element has been refreshed","body"),b.a[c].b.i())}))};var h=b.c.g.refresh;b.c.g.refresh=function(){var a={};if(0<arguments.length)if("[object Array]"===Object.prototype.toString.call(arguments[0]))for(var c=0,d;c<arguments[0].length;c++)d=
arguments[0][c],d=d.getSlotElementId(),a[d]=b.a[d];else d=arguments[0].getSlotElementId(),a[d]=b.a[d];else a=b.a;var c={},k;for(k in a)b.a[k].b.i=h.bind(b.c.g,[b.a[k].s]),null!=a[k].b.u?(1==a[k].b.H&&b.log(a[k],"ad refreshed","body"),null!=a[k].b.h?b.log(a[k],"ad refreshed, and fetched","body"):b.log(a[k],"ad refreshed without first calling display","body"),b.a[k].b.i()):null==b.a[k].b.j&&(c[k]=b.a[k],b.a[k].b.j=!0);0!=Object.keys(c).length&&b.v(c,function(a){for(var c in a)b.a[c].b.i(),b.log(a[c],
"ad refreshed after new trinity","body")})}},v:function(d,c){var a="//apex.go.sonobi.com/trinity.js?key_maker="+b.I(d)+"&s="+Math.floor(1E5*Math.random());b.K(a,function(){for(var a in d)b.L(b.a[a]),b.a[a].b.u=!0,b.a[a].b.j=null,b.a[a].b.disabled||b.log(d[a],"targeted - this unit now has Sonobi key-value targeting","body");c(d)})},I:function(d){var c={},a;for(a in d)b.a[a].b.disabled||b.a[a].b.u||(c[b.a[a].l+"|"+a]=b.a[a].sizes);return JSON.stringify(c)},J:function(){b.log(null,"Morpheus Cypher Initialized",
"header");b.c={};window.googletag=window.googletag||{};b.c.f=window.googletag;b.c.f.cmd=b.c.f.cmd||[];null!=googletag.cmd.length?(b.log(null,"Cypher is probably loaded syncrhonously","header"),b.log(null,"GPT is probably loaded asyncrhonously","header"),b.log(null,"Cypher is observing the GPT cmd queue","body"),b.c.f.cmd.unshift(function(){b.c.g=googletag.pubads();b.B()})):("-1"!=function(){return b.c.f.getEventLog().getAllEvents().map(function(b){return b.getMessage().getMessageId()})}().indexOf(8)&&
b.log(null,"GPT ALREADY FULLY LOADED!! CYPHER WON'T WORK NOW!!","header"),b.c.f.cmd.push(function(){b.c.g=googletag.pubads();b.B()}))},K:function(d,c){if(null!=d){null==c&&(c=function(){});try{var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=d;if(c!=function(){}){var e=setTimeout(function(){try{c()}catch(a){}c=function(){}},b.M);a.readyState?a.onreadystatechange=function(){clearTimeout(e);if("loaded"==a.readyState||"complete"==a.readyState){a.onreadystatechange=null;
try{c()}catch(b){}c=function(){}}}:a.onload=function(){clearTimeout(e);try{c()}catch(a){}c=function(){}}}var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}catch(h){}}},L:function(d){if("undefined"!=typeof window.sbi_trinity){var c=d.s;c.getSlotElementId();var a=c.getTargetingMap();d=d.l+"|"+d.o;for(var e in a)"sbi"==e.substr(0,3)&&c.clearTargeting(e);if(d in window.sbi_trinity)for(e in window.sbi_trinity[d])c.setTargeting(e,[""+window.sbi_trinity[d][e]]);b.c.g.setTargeting("sbi_dc",
window.sbi_dc)}},outputCypherLog:function(){b.A=!0;for(var d=0;d<b.m.length;d++){var c=b.m[d].slice();c.unshift("%c%s: %s - %s");console.debug.apply(console,c)}},log:function(d,c,a){d=null!=d?d.l+"|"+d.o:"Note";null==a&&(a="");var e="";switch(a){case "header":e="color: black;font-size: 20px;-webkit-text-fill-color: red;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;";break;case "body":e="color: #0D4F8B;font-size: 16px;";break;default:e=""}a=Date.now();b.m.push([e,a,d,c]);b.A&&console.debug("%c%s: %s - %s",
e,a,d,c)},outputDFPLog:function(){for(var d=0,c=b.c.f.getEventLog().getAllEvents();d<c.length;d++){var a=c[d].getMessage(),a=b.F(a.getMessageId(),a.getMessageArgs());b.log(null,a,"body")}},F:function(b,c){if(null==c)c=[null,null,null];else if(3>c.length)for(;3>c.length;)c.push(null);return{1:function(){return"Page load complete"},2:function(a){return"Created slot: "+a[0]},3:function(a){return"Fetching ad for slot: "+a[0]},4:function(a){return"Receiving ad for slot: "+a[0]},5:function(a){return"Rendering ad for slot: "+
a[0]},6:function(a){return"Completed rendering ad for slot: "+a[0]},8:function(){return"Google service JS loaded"},9:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+a[2]))))},10:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+(a[2]+" after its contents have been loaded")))))},12:function(a){return"Service "+(a[0]+(" is already associated with slot "+a[1]))},13:function(a){return"Error in processing size mapping: "+a[0]},14:function(a){return"Setting slot level ad category exclusion: "+
a[0]},16:function(){return"Clearing all slot level ad category exclusions"},17:function(a){return"Setting targeting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+a[2]))))},19:function(){return"Clearing slot targeting."},20:function(a){return"Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: "+a[0]},21:function(a){return"Unable to write to slot "+(a[0]+". It has not yet been rendered.")},22:function(a){return"Unable to find the div container with id "+
(a[0]+(" for slot "+a[1]))},23:function(a){return"Slot "+(a[0]+(" does not have a container div with id: "+(a[1]+".")))},26:function(a){return"Unknown div id in display(): "+(a[0]+".")},27:function(a){return"Div "+(a[0]+" is not mapped to a known ad unit.")},28:function(a){return"Div element "+(a[0]+" is already associated with another slot.")},30:function(a){return"Exception when invoking function: "+a[0]},31:function(a){return"Invoked queued function. Total: "+(a[0]+(". Errors: "+(a[1]+".")))},
34:function(){return"Size mapping is null because invalid mappings were added"},35:function(a){return"Created service: "+a[0]},36:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},37:function(a){return"Unable to set attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},38:function(){return"Service is already enabled"},39:function(a){return"Failed to enable service: "+a[0]},40:function(a){return'Associated service "'+(a[0]+('" with slot "'+(a[1]+
'".')))},41:function(){return"The master ad size specified is invalid."},42:function(){return"Persistent roadblock requested, but ad slots are incorrectly configured. All ad slots on page must have both pubads and companionAds services attached. Skipping refresh."},43:function(a){return a[0]+(" service is not enabled, cannot use "+(a[1]+" feature."))},44:function(){return"Pubads service is not enabled, cannot check whether slot is a persistent roadblock. Content writing allowed."},45:function(a){return"Cannot find slot with id "+
(a[0]+".")},46:function(a){return"Fetching "+(a[0]+" implementation")},47:function(a){return"Unable to fetch "+(a[0]+" implementation")},48:function(a){return a[0]+" implementation fetched."},49:function(){return"Bad call to check pending refreshes before implementation is loaded."},50:function(){return"Calling fillslot."},52:function(){return"Attempting to display ad in sync mode after page load is complete."},53:function(a){return'Delaying rendering of ad slot "'+(a[0]+('". Pending loading of the '+
(a[1]+" implementation")))},54:function(a){return'Delaying passback of ad slot "'+(a[0]+('". Pending loading ofthe '+(a[1]+" implementation")))},55:function(a){return'Skipping rendering of slot "'+(a[0]+'" due to missing GPT implementation')},98:function(a){return'Unable to process ad unit path for slot "'+a[0]},56:function(a){return'Unable to process name for slot "'+a[0]},57:function(a){return'Ignoring unknown pubads attribute "'+(a[0]+('" with value "'+(a[1]+'"')))},58:function(a){return'Ignoring unknown pubads attribute "'+
(a[0]+('" with value "'+(a[1]+('" for slot "'+(a[2]+'"')))))},59:function(a){return"Cookie options must be an integer number, 0 or greater. Ignoring value: "+a[0]},95:function(a){return"Correlator must be a positive integer number.Ignoring value: "+a[0]},60:function(a){return'Ignoring call to "'+(a[0]+'" since the service is already enabled.')},61:function(a){return'Ignoring call "'+(a[0]+('" since the '+(a[1]+" service is already enabled.")))},62:function(a){return'Ignoring call "'+(a[0]+('" since the service is already enabled. Not setting id: '+
a[1]))},63:function(a){return"Using "+(a[0]+" mode to fetch ads.")},64:function(a){return"Setting "+(a[0]+(" to "+(a[1]+".")))},65:function(a){return"Slots specified, but no valid slots found. "+(a[0]+" aborted.")},66:function(){return"The ads cannot be refreshed because the GPT implementation Javascript is not yet loaded."},67:function(){return"The no_refresh state cannot be cleared because the GPT implementation Javascript is not yet loaded."},68:function(){return"The slots content cannot be cleared because the GPT implementation Javascript is not yet loaded."},
69:function(){return"Refresh pushed on pending list until GPT implementation Javascript loads."},70:function(){return"Refreshing ads."},71:function(){return"Clearing slot contents."},72:function(){return"Clearing no_refresh state."},73:function(a){return a[0]+" must be an array."},74:function(a){return a[0]+" must be a boolean."},75:function(a){return a[0]+" must be a number."},76:function(a){return a[0]+" must be a string."},77:function(a){return'Location "'+(a[0]+('" is longer than '+(a[1]+('.Truncating it to "'+
(a[2]+'"')))))},78:function(a){return"Enabling collapsing of containers when there is no ad content. Collapse before ad fetch: "+(a[0]+".")},79:function(){return"Ignoring subsequent call to set div collapse mode (already set)."},80:function(a){return"Slot object at position "+(a[0]+" is of incorrect type.")},82:function(a){return'Clearing targeting attribute "'+(a[0]+('" for service "'+(a[1]+'"')))},84:function(a){return'Cannot find targeting attribute "'+(a[0]+('" for service "'+(a[1]+'"')))},85:function(a){return"Setting page level ad category exclusion: "+
a[0]},87:function(){return"Clearing all page level ad category exclusions"},88:function(a){return"Setting targeting attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},90:function(a){return"Child directed treatment tag value must be an integer number. Valid values are 0 and 1. Ignoring value: "+a[0]},97:function(a){return"Kids friendly ads tag value must be an integer number. Valid values are 0 and 1. Ignoring value: "+a[0]},92:function(a){return'Exception thrown in event listener: "'+
(a[0]+'"')},93:function(a){return"Failed to register listener. Unknown event type: "+a[0]},94:function(a){return"Unknown service passed to addService() method for slot: "+(a[0]+".")},96:function(a){return"Invalid arguments: "+(a[0]+("("+(a[1]+")")))}}[b](c)},enableReactiveSizes:function(){b.log(null,"Deprecated - sbi_morpheus.enableReactiveSizes","body")},callOperator:function(){b.log(null,"Deprecated - sbi_morpheus.callOperator","body")},register:function(){b.log(null,"Deprecated - sbi_morpheus.register",
"body")}};window[q]=b;"object"!=typeof JSON&&(JSON={});(function(){function d(a){return 10>a?"0"+a:a}function c(a){return f.lastIndex=0,f.test(a)?'"'+a.replace(f,function(a){var b=q[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function a(b,d){var e,f,n,t,p,u=h,g=d[b];switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(b)),"function"==typeof m&&(g=m.call(d,b,g)),typeof g){case "string":return c(g);case "number":return isFinite(g)?
g+"":"null";case "boolean":case "null":return g+"";case "object":if(!g)return"null";if(h+=l,p=[],"[object Array]"===Object.prototype.toString.apply(g)){t=g.length;for(e=0;t>e;e+=1)p[e]=a(e,g)||"null";return n=0===p.length?"[]":h?"[\n"+h+p.join(",\n"+h)+"\n"+u+"]":"["+p.join(",")+"]",h=u,n}if(m&&"object"==typeof m)for(t=m.length,e=0;t>e;e+=1)"string"==typeof m[e]&&(f=m[e],n=a(f,g),n&&p.push(c(f)+(h?": ":":")+n));else for(f in g)Object.prototype.hasOwnProperty.call(g,f)&&(n=a(f,g),n&&p.push(c(f)+(h?
": ":":")+n));return n=0===p.length?"{}":h?"{\n"+h+p.join(",\n"+h)+"\n"+u+"}":"{"+p.join(",")+"}",h=u,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(b.valueOf())?b.getUTCFullYear()+"-"+d(b.getUTCMonth()+1)+"-"+d(b.getUTCDate())+"T"+d(b.getUTCHours())+":"+d(b.getUTCMinutes())+":"+d(b.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return b.valueOf()});var e,f,h,l,q,m;"function"!=typeof JSON.stringify&&
(f=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,q={"\b":"\\b","    ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(b,c,d){var e;if(h="",l="","number"==typeof d)for(e=0;d>e;e+=1)l+=" ";else"string"==typeof d&&(l=d);if(m=c,c&&"function"!=typeof c&&("object"!=typeof c||"number"!=typeof c.length))throw Error("JSON.stringify");return a("",{"":b})});"function"!=typeof JSON.parse&&(e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
JSON.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"==typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);return b.call(a,d,g)}var d;if(a+="",e.lastIndex=0,e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
"")))return d=eval("("+a+")"),"function"==typeof b?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();Object.keys||(Object.keys=function(){var b=Object.prototype.hasOwnProperty,c=!{toString:null}.propertyIsEnumerable("toString"),a="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),e=a.length;return function(f){if("object"!==typeof f&&("function"!==typeof f||null===f))throw new TypeError("Object.keys called on non-object");var h=[],l;for(l in f)b.call(f,
l)&&h.push(l);if(c)for(l=0;l<e;l++)b.call(f,a[l])&&h.push(a[l]);return h}}());Function.prototype.bind||(Function.prototype.bind=function(b){function c(){return f.apply(this instanceof a?this:b,e.concat(Array.prototype.slice.call(arguments)))}function a(){}if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),f=this;return a.prototype=this.prototype,c.prototype=new a,c});window[q].J()})("sbi_morpheus");
//8595: 2.0.2