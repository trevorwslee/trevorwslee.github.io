let U=0,W=`string`,Q=1,Y=`Object`,S=`utf-8`,P=null,R=`undefined`,$=4,X=`function`,_=16,N=Array,T=Error,Z=FinalizationRegistry,a1=Promise,a0=Reflect,V=Uint8Array,O=undefined;var H=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var w=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h218b38c76de66351(b,c,g(d))});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==P){return `${a}`};if(b==W){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==P){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==W&&b.length>U){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>U){c+=l(a[U])};for(let d=Q;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>Q){d=c[Q]}else{return toString.call(a)};if(d==Y){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Y}};if(a instanceof T){return `${a.name}: ${a.message}\n${a.stack}`};return d});var u=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__hb91b1f15f0d751f0(b,c,g(d))});var J=((a,b)=>{});var g=(a=>{if(d===b.length)b.push(b.length+ Q);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function z(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var x=((a,b)=>{if(a===U){return c(b)}else{return k(a,b)}});var r=(()=>{if(q===P||q.byteLength===U){q=new Int32Array(a.memory.buffer)};return q});var y=(a=>a===O||a===P);var c=(a=>b[a]);var M=(async(b)=>{if(a!==O)return a;if(typeof b===R){b=new URL(`rusty_dumb_calculator_web-d3355ca6733be106_bg.wasm`,import.meta.url)};const c=I();if(typeof b===W||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});var L=(b=>{if(a!==O)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new T();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/$+ Q]=g;r()[b/$+ U]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=x(b,c);if(b!==U){a.__wbindgen_free(b,c,Q)};console.error(d)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===O;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===P;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==Q){b.a=U;return !0};const c=!1;return c});b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return y(b)?U:g(b)});b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return y(b)?U:g(b)});b.wbg.__wbg_createComment_5c92617cda72a113=((a,b,d)=>{var e=x(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_createDocumentFragment_ba4b959e9d93916b=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return z(((a,b,d)=>{var e=x(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_createTextNode_ea32ad2506f7ae78=((a,b,d)=>{var e=x(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{var e=x(b,d);c(a).innerHTML=e});b.wbg.__wbg_removeAttribute_0c021c98a4dc7402=function(){return z(((a,b,d)=>{var e=x(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setAttribute_f7ffa687ef977957=function(){return z(((a,b,d,e,f)=>{var g=x(b,d);var h=x(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_6ea6598a4cb72792=function(){return z(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_f7de42c5f9035d0e=(a=>{c(a).remove()});b.wbg.__wbg_target_6795373f170fd786=(a=>{const b=c(a).target;return y(b)?U:g(b)});b.wbg.__wbg_cancelBubble_ae95595adf5ae83d=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_bd8a0336a042e053=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_view_38a0bacb59ad00ee=(a=>{const b=c(a).view;return y(b)?U:g(b)});b.wbg.__wbg_respond_fee44bba73c2fc8a=function(){return z(((a,b)=>{c(a).respond(b>>>U)}),arguments)};b.wbg.__wbg_append_125fff38dadbc15f=function(){return z(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_addEventListener_f984e99465a6a7f4=function(){return z(((a,b,d,e)=>{var f=x(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_bc4a7ad4cc72c6bf=function(){return z(((a,b,d,e,f)=>{var g=x(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_setdata_3f18cd2879ddb8d5=((a,b,d)=>{var e=x(b,d);c(a).data=e});b.wbg.__wbg_close_23aa806471e38253=function(){return z((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_fe9e340e2bc8714b=function(){return z(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_value_99f5294791d62576=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/$+ Q]=g;r()[b/$+ U]=f});b.wbg.__wbg_parentNode_e3a5ee563364a613=(a=>{const b=c(a).parentNode;return y(b)?U:g(b)});b.wbg.__wbg_childNodes_535387effca84f4e=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_previousSibling_28df8137ae6104f8=(a=>{const b=c(a).previousSibling;return y(b)?U:g(b)});b.wbg.__wbg_nextSibling_87d2b32dfbf09fe3=(a=>{const b=c(a).nextSibling;return y(b)?U:g(b)});b.wbg.__wbg_appendChild_4153ba1b5d54d73b=function(){return z(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_cloneNode_ea49a704f0699b2e=function(){return z((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_length_8a9352f7b7360c37=(a=>{const b=c(a).length;return b});b.wbg.__wbg_byobRequest_643426f0037311f0=(a=>{const b=c(a).byobRequest;return y(b)?U:g(b)});b.wbg.__wbg_close_0b618a762cdb578b=function(){return z((a=>{c(a).close()}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_ef56f954a86c7472=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_dfffc3b2ba786fb8=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>U];return g(d)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{var c=x(a,b);const d=new Function(c);return g(d)});b.wbg.__wbg_get_3fddfed2c83f434c=function(){return z(((a,b)=>{const d=a0.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_3f093dd26d5569f8=function(){return z(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_self_05040bd9523805b9=function(){return z((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return z((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return z((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return z((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_new_73a5987615ec8862=((a,b)=>{var c=x(a,b);const d=new T(c);return g(d)});b.wbg.__wbg_call_67f2111acd2dfdb6=function(){return z(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_is_bd5dc4ae269cba1c=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_new_70828a4353259d4b=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=U;try{return A(d,c.b,a,b)}finally{c.a=d}};const e=new a1(d);return g(e)}finally{c.a=c.b=U}});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=a1.resolve(c(a));return g(b)});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_buffer_b914fb8b50ebbc3e=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=((a,b,d)=>{const e=new V(c(a),b>>>U,d>>>U);return g(e)});b.wbg.__wbg_set_7d988c98e6ced92d=((a,b,d)=>{c(a).set(c(b),d>>>U)});b.wbg.__wbg_length_21c4b0ae73cba59d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_buffer_67e624f5a0ab2319=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_byteLength_4f4b58172d990c0a=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_adbd2a554609eb4e=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_set_961700853a212a39=function(){return z(((a,b,d)=>{const e=a0.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/$+ Q]=g;r()[b/$+ U]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new T(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_closure_wrapper103=((a,b,c)=>{const d=t(a,b,19,u);return g(d)});b.wbg.__wbindgen_closure_wrapper306=((a,b,c)=>{const d=t(a,b,111,v);return g(d)});b.wbg.__wbindgen_closure_wrapper2322=((a,b,c)=>{const d=t(a,b,201,w);return g(d)});return b});var A=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h7c3491a491d798c1(b,c,g(d),g(e))});var v=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__he9f7cdb0034857eb(b,c,g(d))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:Q,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=U;try{return e(c,f.b,...b)}finally{if(--f.cnt===U){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===O){const c=n.encode(a);const d=b(c.length,Q)>>>U;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,Q)>>>U;const f=j();let g=U;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==U){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,Q)>>>U;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written;e=c(e,d,g,Q)>>>U};m=g;return e});var j=(()=>{if(i===P||i.byteLength===U){i=new V(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>U;return h.decode(j().subarray(a,a+ b))});var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;q=P;i=P;a.__wbindgen_start();return a});let a;const b=new N(128).fill(O);b.push(O,P,!0,!1);let d=b.length;const h=typeof TextDecoder!==R?new TextDecoder(S,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw T(`TextDecoder not available`)}};if(typeof TextDecoder!==R){h.decode()};let i=P;let m=U;const n=typeof TextEncoder!==R?new TextEncoder(S):{encode:()=>{throw T(`TextEncoder not available`)}};const o=typeof n.encodeInto===X?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=P;const s=typeof Z===R?{register:()=>{},unregister:()=>{}}:new Z(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const B=typeof Z===R?{register:()=>{},unregister:()=>{}}:new Z(b=>a.__wbg_intounderlyingbytesource_free(b>>>U));class C{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;B.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-_);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/$+ U];var c=r()[e/$+ Q];var d=x(b,c);if(b!==U){a.__wbindgen_free(b,c,Q)};return d}finally{a.__wbindgen_add_to_stack_pointer(_)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>U}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,g(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const D=typeof Z===R?{register:()=>{},unregister:()=>{}}:new Z(b=>a.__wbg_intounderlyingsink_free(b>>>U));class E{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;D.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,g(b));return f(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return f(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,g(b));return f(d)}}const F=typeof Z===R?{register:()=>{},unregister:()=>{}}:new Z(b=>a.__wbg_intounderlyingsource_free(b>>>U));class G{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;F.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default M;export{C as IntoUnderlyingByteSource,E as IntoUnderlyingSink,G as IntoUnderlyingSource,L as initSync}