(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7da0dcf0"],{"4b77":function(t,e,s){"use strict";s.r(e);var i=s("8336"),a=(s("6ca7"),s("ec29"),s("9d26")),r=s("c37a"),l=s("5607"),n=s("2b0e"),o=n["default"].extend({name:"rippleable",directives:{ripple:l["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),u=s("8547"),c=s("58df");function d(t){t.preventDefault()}var h=Object(c["a"])(r["a"],o,u["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=r["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),p=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...r["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),m=s("62ad"),v=s("a523"),g=s("4bd4"),f=s("0fd9"),b=s("8654"),k=function(){var t,e,s,a,r=this,l=r._self._c;return l(v["a"],{staticClass:"p-0",attrs:{"fill-height":"",fluid:""}},[l(f["a"],{staticClass:"fill-height"},[l(m["a"],{staticClass:"gradient d-none d-md-flex",attrs:{cols:"12",md:"7"}},[l(v["a"],{staticClass:"p-0",attrs:{"fill-height":"",fluid:""}},[l(f["a"],{staticClass:"fill-height white--text",attrs:{align:"center",justify:"center"}},[l(m["a"],{attrs:{cols:"12",md:"8"}},[l("div",{staticClass:"text-h4"},[r._v("Welcome")]),l("div",{staticClass:"text-body-1 mb-4"},[r._v("This is a simple Vuetify project by Anthony Budd")]),l(i["a"],{attrs:{outlined:"",large:"",color:"white"},on:{click:r.openGitHub}},[r._v(" GitHub ")])],1)],1)],1)],1),l(m["a"],{attrs:{cols:"12",md:"5"}},[l(v["a"],{staticClass:"p-0",attrs:{"fill-height":"",fluid:""}},[l(f["a"],{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[l(m["a"],{attrs:{cols:"12",md:"8"}},[l(g["a"],{staticClass:"px-4",model:{value:r.valid,callback:function(t){r.valid=t},expression:"valid"}},[l("div",{staticClass:"text-h6"},[r._v("Sign-up")]),l("div",{staticClass:"text-body-1 mb-4"},[r._v("Already have an account? "),l("router-link",{attrs:{to:"/login"}},[r._v("Login")])],1),l(b["a"],{attrs:{outlined:"",label:"First Name",rules:r.rules.firstName,"error-messages":null===(t=r.errors.firstName)||void 0===t?void 0:t.msg,required:""},model:{value:r.signUp.firstName,callback:function(t){r.$set(r.signUp,"firstName",t)},expression:"signUp.firstName"}}),l(b["a"],{attrs:{outlined:"",label:"Last Name",rules:r.rules.lastName,"error-messages":null===(e=r.errors.lastName)||void 0===e?void 0:e.msg,required:""},model:{value:r.signUp.lastName,callback:function(t){r.$set(r.signUp,"lastName",t)},expression:"signUp.lastName"}}),l(b["a"],{attrs:{outlined:"",label:"Email",rules:r.rules.email,"error-messages":null===(s=r.errors.email)||void 0===s?void 0:s.msg,required:""},on:{keyup:()=>r.errors.email=null},model:{value:r.signUp.email,callback:function(t){r.$set(r.signUp,"email",t)},expression:"signUp.email"}}),l(b["a"],{attrs:{outlined:"",type:"password",label:"Password",rules:r.rules.password,"error-messages":null===(a=r.errors.password)||void 0===a?void 0:a.msg,required:""},model:{value:r.signUp.password,callback:function(t){r.$set(r.signUp,"password",t)},expression:"signUp.password"}}),l(p,{attrs:{required:"",rules:r.rules.tos,value:"2022-12-13","validate-on-blur":""},scopedSlots:r._u([{key:"label",fn:function(){return[l("div",[r._v(" I have read and agreed to the "),l("a",{attrs:{target:"_blank",href:"/terms-of-service"}},[r._v(" Terms of Service ")])])]},proxy:!0}]),model:{value:r.signUp.tos,callback:function(t){r.$set(r.signUp,"tos",t)},expression:"signUp.tos"}}),l(i["a"],{attrs:{block:"",large:"",color:"primary",disabled:!r.valid},on:{click:r.onClickSignUp}},[r._v("Sign-Up")])],1)],1)],1)],1)],1)],1)],1)},y=[],C=s("2f62"),w=s("fce9"),x={name:"Sign-up",data(){return{valid:!0,errors:{},signUp:{firstName:"",lastName:"",email:"",password:"",tos:!1},rules:{firstName:[t=>!!t||"First name is required"],lastName:[t=>!!t||"Last name is required"],email:[t=>!!t||"E-mail is required",t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||"E-mail must be valid"],password:[t=>!!t||"Password is required",t=>t.length>7||"Password must be more than 8 characters",t=>/[a-z]/.test(t)||"Password must contain at least 1 lowercase letter",t=>/[A-Z]/.test(t)||"Password must contain at least 1 uppercase letter",t=>/[0-9]/.test(t)||"Password must contain at least 1 number"],tos:[t=>!!t||"Required"]}}},async mounted(){},methods:{...Object(C["c"])(["setUser"]),openGitHub(){window.location.href="https://github.com/AndreyGoldaevich"},async onClickSignUp(){try{const{data:t}=await w["a"].auth.signUp(this.signUp);localStorage.setItem("AccessToken",t.accessToken),w["a"].setJWT(t.accessToken);const{data:e}=await w["a"].user.get();this.setUser(e),this.$router.push("/")}catch(t){this.$root.errorHandler(t,t=>{if(t){const{status:e,data:s}=t;422===e&&(this.errors=s.errors)}})}}}},I=x,S=(s("bef1"),s("2877")),U=Object(S["a"])(I,k,y,!1,null,null,null);e["default"]=U.exports},"6ca7":function(t,e,s){},"86ed":function(t,e,s){},bef1:function(t,e,s){"use strict";s("86ed")},ec29:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7da0dcf0.4bf6b65e.js.map