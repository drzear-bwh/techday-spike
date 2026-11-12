(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const r1="170",$0=0,U1=1,K0=2,Zo=1,Jo=2,Tn=3,Zn=0,Be=1,An=2,Xn=0,Di=1,N1=2,F1=3,O1=4,j0=5,ai=100,Q0=101,t2=102,e2=103,n2=104,i2=200,r2=201,s2=202,a2=203,ca=204,ha=205,o2=206,l2=207,c2=208,h2=209,u2=210,f2=211,d2=212,p2=213,m2=214,ua=0,fa=1,da=2,Oi=3,pa=4,ma=5,qa=6,_a=7,$o=0,q2=1,_2=2,Yn=0,g2=1,x2=2,v2=3,Ko=4,M2=5,y2=6,S2=7,jo=300,Bi=301,zi=302,ga=303,xa=304,fs=306,va=1e3,li=1001,Ma=1002,ln=1003,E2=1004,br=1005,pn=1006,Ms=1007,ci=1008,Dn=1009,Qo=1010,t0=1011,ur=1012,s1=1013,fi=1014,Rn=1015,gr=1016,a1=1017,o1=1018,ki=1020,e0=35902,n0=1021,i0=1022,on=1023,r0=1024,s0=1025,Ii=1026,Hi=1027,a0=1028,l1=1029,o0=1030,c1=1031,h1=1033,$r=33776,Kr=33777,jr=33778,Qr=33779,ya=35840,Sa=35841,Ea=35842,ba=35843,Ta=36196,wa=37492,Aa=37496,Ca=37808,Ra=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,ts=36492,Va=36494,Ga=36495,l0=36283,Wa=36284,Xa=36285,Ya=36286,b2=3200,T2=3201,c0=0,w2=1,Vn="",Xe="srgb",Xi="srgb-linear",ds="linear",ce="srgb",_i=7680,B1=519,A2=512,C2=513,R2=514,h0=515,P2=516,L2=517,D2=518,I2=519,z1=35044,k1="300 es",Pn=2e3,rs=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,Za=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function U2(i,t){return(i%t+t)%t}function Ss(i,t,e){return(1-e)*i+e*t}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,r,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],q=n[8],g=r[0],m=r[3],f=r[6],y=r[1],x=r[4],_=r[7],I=r[2],T=r[5],w=r[8];return s[0]=a*g+o*y+l*I,s[3]=a*m+o*x+l*T,s[6]=a*f+o*_+l*w,s[1]=c*g+h*y+d*I,s[4]=c*m+h*x+d*T,s[7]=c*f+h*_+d*w,s[2]=u*g+p*y+q*I,s[5]=u*m+p*x+q*T,s[8]=u*f+p*_+q*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,q=e*d+n*u+r*p;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/q;return t[0]=d*g,t[1]=(r*c-h*n)*g,t[2]=(o*n-r*a)*g,t[3]=u*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Jt;function u0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N2(){const i=ss("canvas");return i.style.display="block",i}const H1={};function sr(i){i in H1||(H1[i]=!0,console.warn(i))}function F2(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function O2(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function B2(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?ds:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const V1=[.64,.33,.3,.6,.15,.06],G1=[.2126,.7152,.0722],W1=[.3127,.329],X1=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y1=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Xi]:{primaries:V1,whitePoint:W1,transfer:ds,toXYZ:X1,fromXYZ:Y1,luminanceCoefficients:G1,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:V1,whitePoint:W1,transfer:ce,toXYZ:X1,fromXYZ:Y1,luminanceCoefficients:G1,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let gi;class z2{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=ss("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let k2=0;class f0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?z2.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H2=0;class ze extends Yi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=li,r=li,s=pn,a=ci,o=on,l=Dn,c=ze.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Zi(),this.name="",this.source=new f0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case va:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case va:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=jo;ze.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],q=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(q-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(q+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,I=(f+1)/2,T=(h+u)/4,w=(d+g)/4,R=(q+m)/4;return x>_&&x>I?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=w/n):_>I?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=R/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=w/s,r=R/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-q)*(m-q)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-q)/y,this.y=(d-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V2 extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ze(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new f0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends V2{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class d0 extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class G2 extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const u=s[a+0],p=s[a+1],q=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=q,t[e+3]=g;return}if(d!==g||l!==u||c!==p||h!==q){let m=1-o;const f=l*u+c*p+h*q+d*g,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),T=Math.atan2(I,f*y);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I}const _=o*y;if(l=l*m+u*_,c=c*m+p*_,h=h*m+q*_,d=d*m+g*_,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],q=s[a+3];return t[e]=o*q+h*d+l*p-c*u,t[e+1]=l*q+h*u+c*d-o*p,t[e+2]=c*q+h*p+o*u-l*d,t[e+3]=h*q-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),q=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*q,this._y=c*p*d-u*h*q,this._z=c*h*q+u*p*d,this._w=c*h*d-u*p*q;break;case"YXZ":this._x=u*h*d+c*p*q,this._y=c*p*d-u*h*q,this._z=c*h*q-u*p*d,this._w=c*h*d+u*p*q;break;case"ZXY":this._x=u*h*d-c*p*q,this._y=c*p*d+u*h*q,this._z=c*h*q+u*p*d,this._w=c*h*d-u*p*q;break;case"ZYX":this._x=u*h*d-c*p*q,this._y=c*p*d+u*h*q,this._z=c*h*q-u*p*d,this._w=c*h*d+u*p*q;break;case"YZX":this._x=u*h*d+c*p*q,this._y=c*p*d+u*h*q,this._z=c*h*q-u*p*d,this._w=c*h*d-u*p*q;break;case"XZY":this._x=u*h*d-c*p*q,this._y=c*p*d-u*h*q,this._z=c*h*q+u*p*d,this._w=c*h*d+u*p*q;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Z1.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Z1.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new D,Z1=new xr;class vr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),wr.subVectors(this.max,Qi),xi.subVectors(t.a,Qi),vi.subVectors(t.b,Qi),Mi.subVectors(t.c,Qi),Nn.subVectors(vi,xi),Fn.subVectors(Mi,vi),Kn.subVectors(xi,Mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!ws(e,xi,vi,Mi,wr)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,xi,vi,Mi,wr))?!1:(Ar.crossVectors(Nn,Fn),e=[Ar.x,Ar.y,Ar.z],ws(e,xi,vi,Mi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new D,new D,new D,new D,new D,new D,new D,new D],nn=new D,Tr=new vr,xi=new D,vi=new D,Mi=new D,Nn=new D,Fn=new D,Kn=new D,Qi=new D,wr=new D,Ar=new D,jn=new D;function ws(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){jn.fromArray(i,s);const o=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const W2=new vr,tr=new D,As=new D;class u1{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):W2.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(As.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(As)),this.expandByPoint(tr.copy(t.center).sub(As))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new D,Cs=new D,Cr=new D,On=new D,Rs=new D,Rr=new D,Ps=new D;class p0{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Cs.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Cs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=On.dot(this.direction),l=-On.dot(Cr),c=On.lengthSq(),h=Math.abs(1-a*a);let d,u,p,q;if(h>0)if(d=a*l-o,u=a*o-l,q=s*h,d>=0)if(u>=-q)if(u<=q){const g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-q?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=q?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cs).addScaledVector(Cr,u),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,r,s){Rs.subVectors(e,t),Rr.subVectors(n,t),Ps.crossVectors(Rs,Rr);let a=this.direction.dot(Ps),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);const l=o*this.direction.dot(Rr.crossVectors(On,Rr));if(l<0)return null;const c=o*this.direction.dot(Rs.cross(On));if(c<0||l+c>a)return null;const h=-o*On.dot(Ps);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,r,s,a,o,l,c,h,d,u,p,q,g,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,d,u,p,q,g,m)}set(t,e,n,r,s,a,o,l,c,h,d,u,p,q,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=q,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/yi.setFromMatrixColumn(t,0).length(),s=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*d,q=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+q*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=q+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,q=c*h,g=c*d;e[0]=u+g*o,e[4]=q*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-q,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,q=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=q+p*o,e[1]=p+q*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,q=o*h,g=o*d;e[0]=l*h,e[4]=q*c-p,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=p*c-q,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,q=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=q*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+q,e[10]=u-g*d}else if(t.order==="XZY"){const u=a*l,p=a*c,q=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=p*d-q,e[2]=q*d-p,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(X2,t,Y2)}lookAt(t,e,n){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Bn.crossVectors(n,Ve),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Bn.crossVectors(n,Ve)),Bn.normalize(),Pr.crossVectors(Ve,Bn),r[0]=Bn.x,r[4]=Pr.x,r[8]=Ve.x,r[1]=Bn.y,r[5]=Pr.y,r[9]=Ve.y,r[2]=Bn.z,r[6]=Pr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],q=n[2],g=n[6],m=n[10],f=n[14],y=n[3],x=n[7],_=n[11],I=n[15],T=r[0],w=r[4],R=r[8],E=r[12],v=r[1],P=r[5],G=r[9],k=r[13],W=r[2],K=r[6],X=r[10],at=r[14],Y=r[3],ft=r[7],gt=r[11],Tt=r[15];return s[0]=a*T+o*v+l*W+c*Y,s[4]=a*w+o*P+l*K+c*ft,s[8]=a*R+o*G+l*X+c*gt,s[12]=a*E+o*k+l*at+c*Tt,s[1]=h*T+d*v+u*W+p*Y,s[5]=h*w+d*P+u*K+p*ft,s[9]=h*R+d*G+u*X+p*gt,s[13]=h*E+d*k+u*at+p*Tt,s[2]=q*T+g*v+m*W+f*Y,s[6]=q*w+g*P+m*K+f*ft,s[10]=q*R+g*G+m*X+f*gt,s[14]=q*E+g*k+m*at+f*Tt,s[3]=y*T+x*v+_*W+I*Y,s[7]=y*w+x*P+_*K+I*ft,s[11]=y*R+x*G+_*X+I*gt,s[15]=y*E+x*k+_*at+I*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],q=t[3],g=t[7],m=t[11],f=t[15];return q*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*p-n*l*p)+g*(+e*l*p-e*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+m*(+e*c*d-e*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+f*(-r*o*h-e*l*d+e*o*u+r*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],q=t[12],g=t[13],m=t[14],f=t[15],y=d*m*c-g*u*c+g*l*p-o*m*p-d*l*f+o*u*f,x=q*u*c-h*m*c-q*l*p+a*m*p+h*l*f-a*u*f,_=h*g*c-q*d*c+q*o*p-a*g*p-h*o*f+a*d*f,I=q*d*l-h*g*l-q*o*u+a*g*u+h*o*m-a*d*m,T=e*y+n*x+r*_+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(g*u*s-d*m*s-g*r*p+n*m*p+d*r*f-n*u*f)*w,t[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*f+n*l*f)*w,t[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*w,t[4]=x*w,t[5]=(h*m*s-q*u*s+q*r*p-e*m*p-h*r*f+e*u*f)*w,t[6]=(q*l*s-a*m*s-q*r*c+e*m*c+a*r*f-e*l*f)*w,t[7]=(a*u*s-h*l*s+h*r*c-e*u*c-a*r*p+e*l*p)*w,t[8]=_*w,t[9]=(q*d*s-h*g*s-q*n*p+e*g*p+h*n*f-e*d*f)*w,t[10]=(a*g*s-q*o*s+q*n*c-e*g*c-a*n*f+e*o*f)*w,t[11]=(h*o*s-a*d*s-h*n*c+e*d*c+a*n*p-e*o*p)*w,t[12]=I*w,t[13]=(h*g*r-q*d*r+q*n*u-e*g*u-h*n*m+e*d*m)*w,t[14]=(q*o*r-a*g*r-q*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*d*r-h*o*r+h*n*l-e*d*l-a*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,q=s*d,g=a*h,m=a*d,f=o*d,y=l*c,x=l*h,_=l*d,I=n.x,T=n.y,w=n.z;return r[0]=(1-(g+f))*I,r[1]=(p+_)*I,r[2]=(q-x)*I,r[3]=0,r[4]=(p-_)*T,r[5]=(1-(u+f))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(q+x)*w,r[9]=(m-y)*w,r[10]=(1-(u+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const a=yi.set(r[4],r[5],r[6]).length(),o=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],rn.copy(this);const c=1/s,h=1/a,d=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Pn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),u=(n+r)/(n-r);let p,q;if(o===Pn)p=-(a+s)/(a-s),q=-2*a*s/(a-s);else if(o===rs)p=-a/(a-s),q=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=q,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Pn){const l=this.elements,c=1/(e-t),h=1/(n-r),d=1/(a-s),u=(e+t)*c,p=(n+r)*h;let q,g;if(o===Pn)q=(a+s)*d,g=-2*d;else if(o===rs)q=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-q,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new D,rn=new ve,X2=new D(0,0,0),Y2=new D(1,1,1),Bn=new D,Pr=new D,Ve=new D,J1=new ve,$1=new xr;class qn{constructor(t=0,e=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return J1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J1,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $1.setFromEuler(this),this.setFromQuaternion($1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class f1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Z2=0;const K1=new D,Si=new xr,yn=new ve,Lr=new D,er=new D,J2=new D,$2=new xr,j1=new D(1,0,0),Q1=new D(0,1,0),to=new D(0,0,1),eo={type:"added"},K2={type:"removed"},Ei={type:"childadded",child:null},Ls={type:"childremoved",child:null};class Pe extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new D,e=new qn,n=new xr,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(j1,t)}rotateY(t){return this.rotateOnAxis(Q1,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return K1.copy(t).applyQuaternion(this.quaternion),this.position.add(K1.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(j1,t)}translateY(t){return this.translateOnAxis(Q1,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(er,Lr,this.up):yn.lookAt(Lr,er,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eo),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K2),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eo),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,J2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,$2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),q=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),q.length>0&&(n.nodes=q)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new D(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new D,Sn=new D,Ds=new D,En=new D,bi=new D,Ti=new D,no=new D,Is=new D,Us=new D,Ns=new D,Fs=new fe,Os=new fe,Bs=new fe;class an{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),sn.subVectors(t,e),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){sn.subVectors(r,e),Sn.subVectors(n,e),Ds.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Sn),l=sn.dot(Ds),c=Sn.dot(Sn),h=Sn.dot(Ds),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,q=(a*h-o*l)*u;return s.set(1-p-q,q,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Fs.setScalar(0),Os.setScalar(0),Bs.setScalar(0),Fs.fromBufferAttribute(t,e),Os.fromBufferAttribute(t,n),Bs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Fs,s.x),a.addScaledVector(Os,s.y),a.addScaledVector(Bs,s.z),a}static isFrontFacing(t,e,n,r){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,n),Ti.subVectors(s,n),Is.subVectors(t,n);const l=bi.dot(Is),c=Ti.dot(Is);if(l<=0&&c<=0)return e.copy(n);Us.subVectors(t,r);const h=bi.dot(Us),d=Ti.dot(Us);if(h>=0&&d<=h)return e.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);Ns.subVectors(t,s);const p=bi.dot(Ns),q=Ti.dot(Ns);if(q>=0&&p<=q)return e.copy(s);const g=p*c-l*q;if(g<=0&&c>=0&&q<=0)return o=c/(c-q),e.copy(n).addScaledVector(Ti,o);const m=h*q-p*d;if(m<=0&&d-h>=0&&p-q>=0)return no.subVectors(s,r),o=(d-h)/(d-h+(p-q)),e.copy(r).addScaledVector(no,o);const f=1/(m+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=re.workingColorSpace){if(t=U2(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=zs(a,s,t+1/3),this.g=zs(a,s,t),this.b=zs(a,s,t-1/3)}return re.toWorkingColorSpace(this,r),this}setStyle(t,e=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=m0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return re.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Xe){re.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Dr);const n=Ss(zn.h,Dr.h,e),r=Ss(zn.s,Dr.s,e),s=Ss(zn.l,Dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new ie;ie.NAMES=m0;let j2=0;class Mr extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j2++}),this.uuid=Zi(),this.name="",this.blending=Di,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B1&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class q0 extends Mr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new D,Ir=new ut;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=z1,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),r=Fe(r,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==z1&&(t.usage=this.usage),t}}class _0 extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class g0 extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Q2=0;const $e=new ve,ks=new Pe,wi=new D,Ge=new vr,nr=new vr,we=new D;class ke extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?g0:_0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return ks.lookAt(t),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new u1);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ge.min,nr.min),Ge.expandByPoint(we),we.addVectors(Ge.max,nr.max),Ge.expandByPoint(we)):(Ge.expandByPoint(nr.min),Ge.expandByPoint(nr.max))}Ge.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),we.add(wi)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,d=new D,u=new ut,p=new ut,q=new ut,g=new D,m=new D;function f(R,E,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,v),u.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),q.fromBufferAttribute(s,v),h.sub(c),d.sub(c),p.sub(u),q.sub(u);const P=1/(p.x*q.y-q.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(q.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-q.x).multiplyScalar(P),o[R].add(g),o[E].add(g),o[v].add(g),l[R].add(m),l[E].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,E=y.length;R<E;++R){const v=y[R],P=v.start,G=v.count;for(let k=P,W=P+G;k<W;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new D,_=new D,I=new D,T=new D;function w(R){I.fromBufferAttribute(r,R),T.copy(I);const E=o[R];x.copy(E),x.sub(I.multiplyScalar(I.dot(E))).normalize(),_.crossVectors(T,E);const P=_.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,E=y.length;R<E;++R){const v=y[R],P=v.start,G=v.count;for(let k=P,W=P+G;k<W;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const q=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,q),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,q),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(q,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,q=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)u[q++]=c[p++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new ve,Qn=new p0,Ur=new u1,ro=new D,Nr=new D,Fr=new D,Or=new D,Hs=new D,Br=new D,so=new D,zr=new D;class je extends Pe{constructor(t=new ke,e=new q0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Hs.fromBufferAttribute(d,t),a?Br.addScaledVector(Hs,h):Br.addScaledVector(Hs.sub(e),h))}e.add(Br)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Ur.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ur,ro)===null||Qn.origin.distanceToSquared(ro)>(t.far-t.near)**2))&&(io.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(io),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let q=0,g=u.length;q<g;q++){const m=u[q],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=x;_<I;_+=3){const T=o.getX(_),w=o.getX(_+1),R=o.getX(_+2);r=kr(this,f,t,n,c,h,d,T,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const q=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=q,f=g;m<f;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);r=kr(this,a,t,n,c,h,d,y,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let q=0,g=u.length;q<g;q++){const m=u[q],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=x;_<I;_+=3){const T=_,w=_+1,R=_+2;r=kr(this,f,t,n,c,h,d,T,w,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const q=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=q,f=g;m<f;m+=3){const y=m,x=m+1,_=m+2;r=kr(this,a,t,n,c,h,d,y,x,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function tl(i,t,e,n,r,s,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Zn,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:i}}function kr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Nr),i.getVertexPosition(l,Fr),i.getVertexPosition(c,Or);const h=tl(i,t,e,n,Nr,Fr,Or,so);if(h){const d=new D;an.getBarycoord(so,Nr,Fr,Or,d),r&&(h.uv=an.getInterpolatedAttribute(r,o,l,c,d,new ut)),s&&(h.uv1=an.getInterpolatedAttribute(s,o,l,c,d,new ut)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};an.getNormal(Nr,Fr,Or,u.normal),h.face=u,h.barycoord=d}return h}class mi extends ke{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;q("z","y","x",-1,-1,n,e,t,a,s,0),q("z","y","x",1,-1,n,e,-t,a,s,1),q("x","z","y",1,1,t,n,e,r,a,2),q("x","z","y",1,-1,t,n,-e,r,a,3),q("x","y","z",1,-1,t,e,n,r,s,4),q("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function q(g,m,f,y,x,_,I,T,w,R,E){const v=_/w,P=I/R,G=_/2,k=I/2,W=T/2,K=w+1,X=R+1;let at=0,Y=0;const ft=new D;for(let gt=0;gt<X;gt++){const Tt=gt*P-k;for(let Ht=0;Ht<K;Ht++){const it=Ht*v-G;ft[g]=it*y,ft[m]=Tt*x,ft[f]=W,c.push(ft.x,ft.y,ft.z),ft[g]=0,ft[m]=0,ft[f]=T>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push(Ht/w),d.push(1-gt/R),at+=1}}for(let gt=0;gt<R;gt++)for(let Tt=0;Tt<w;Tt++){const Ht=u+Tt+K*gt,it=u+Tt+K*(gt+1),O=u+(Tt+1)+K*(gt+1),B=u+(Tt+1)+K*gt;l.push(Ht,it,B),l.push(it,O,B),Y+=6}o.addGroup(p,Y,E),p+=Y,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const r in n)t[r]=n[r]}return t}function el(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function x0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const nl={clone:Vi,merge:Ue};var il=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Mr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=il,this.fragmentShader=rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=el(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class v0 extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new D,ao=new ut,oo=new ut;class Ye extends v0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,ao,oo),e.subVectors(oo,ao)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class sl extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ye(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const s=new Ye(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const a=new Ye(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),q=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=q,n.texture.needsPMREMUpdate=!0}}class M0 extends ze{constructor(t,e,n,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class al extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new M0(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mi(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Xn});s.uniforms.tEquirect.value=e;const a=new je(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=pn),new sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Vs=new D,ol=new D,ll=new Jt;class ii{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Vs.subVectors(n,e).cross(ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ll.getNormalMatrix(t),r=this.coplanarPoint(Vs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new u1,Hr=new D;class d1{constructor(t=new ii,e=new ii,n=new ii,r=new ii,s=new ii,a=new ii){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],q=r[9],g=r[10],m=r[11],f=r[12],y=r[13],x=r[14],_=r[15];if(n[0].setComponents(l-s,u-c,m-p,_-f).normalize(),n[1].setComponents(l+s,u+c,m+p,_+f).normalize(),n[2].setComponents(l+a,u+h,m+q,_+y).normalize(),n[3].setComponents(l-a,u-h,m-q,_-y).normalize(),n[4].setComponents(l-o,u-d,m-g,_-x).normalize(),e===Pn)n[5].setComponents(l+o,u+d,m+g,_+x).normalize();else if(e===rs)n[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Hr.x=r.normal.x>0?t.max.x:t.min.x,Hr.y=r.normal.y>0?t.max.y:t.min.y,Hr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cl(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,q)=>p.start-q.start);let u=0;for(let p=1;p<d.length;p++){const q=d[u],g=d[p];g.start<=q.start+q.count+1?q.count=Math.max(q.count,g.start+g.count-q.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,q=d.length;p<q;p++){const g=d[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ps extends ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=t/o,u=e/l,p=[],q=[],g=[],m=[];for(let f=0;f<h;f++){const y=f*u-a;for(let x=0;x<c;x++){const _=x*d-s;q.push(_,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const x=y+c*f,_=y+c*(f+1),I=y+1+c*(f+1),T=y+1+c*f;p.push(x,_,T),p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new pe(q,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var hl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ul=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ml=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_l=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ml=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,El=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Il=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ul=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zl="gl_FragColor = linearToOutputTexel( gl_FragColor );",kl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$l=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ql=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,X3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:hl,alphahash_pars_fragment:ul,alphamap_fragment:fl,alphamap_pars_fragment:dl,alphatest_fragment:pl,alphatest_pars_fragment:ml,aomap_fragment:ql,aomap_pars_fragment:_l,batching_pars_vertex:gl,batching_vertex:xl,begin_vertex:vl,beginnormal_vertex:Ml,bsdfs:yl,iridescence_fragment:Sl,bumpmap_pars_fragment:El,clipping_planes_fragment:bl,clipping_planes_pars_fragment:Tl,clipping_planes_pars_vertex:wl,clipping_planes_vertex:Al,color_fragment:Cl,color_pars_fragment:Rl,color_pars_vertex:Pl,color_vertex:Ll,common:Dl,cube_uv_reflection_fragment:Il,defaultnormal_vertex:Ul,displacementmap_pars_vertex:Nl,displacementmap_vertex:Fl,emissivemap_fragment:Ol,emissivemap_pars_fragment:Bl,colorspace_fragment:zl,colorspace_pars_fragment:kl,envmap_fragment:Hl,envmap_common_pars_fragment:Vl,envmap_pars_fragment:Gl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:n3,envmap_vertex:Xl,fog_vertex:Yl,fog_pars_vertex:Zl,fog_fragment:Jl,fog_pars_fragment:$l,gradientmap_pars_fragment:Kl,lightmap_pars_fragment:jl,lights_lambert_fragment:Ql,lights_lambert_pars_fragment:t3,lights_pars_begin:e3,lights_toon_fragment:i3,lights_toon_pars_fragment:r3,lights_phong_fragment:s3,lights_phong_pars_fragment:a3,lights_physical_fragment:o3,lights_physical_pars_fragment:l3,lights_fragment_begin:c3,lights_fragment_maps:h3,lights_fragment_end:u3,logdepthbuf_fragment:f3,logdepthbuf_pars_fragment:d3,logdepthbuf_pars_vertex:p3,logdepthbuf_vertex:m3,map_fragment:q3,map_pars_fragment:_3,map_particle_fragment:g3,map_particle_pars_fragment:x3,metalnessmap_fragment:v3,metalnessmap_pars_fragment:M3,morphinstance_vertex:y3,morphcolor_vertex:S3,morphnormal_vertex:E3,morphtarget_pars_vertex:b3,morphtarget_vertex:T3,normal_fragment_begin:w3,normal_fragment_maps:A3,normal_pars_fragment:C3,normal_pars_vertex:R3,normal_vertex:P3,normalmap_pars_fragment:L3,clearcoat_normal_fragment_begin:D3,clearcoat_normal_fragment_maps:I3,clearcoat_pars_fragment:U3,iridescence_pars_fragment:N3,opaque_fragment:F3,packing:O3,premultiplied_alpha_fragment:B3,project_vertex:z3,dithering_fragment:k3,dithering_pars_fragment:H3,roughnessmap_fragment:V3,roughnessmap_pars_fragment:G3,shadowmap_pars_fragment:W3,shadowmap_pars_vertex:X3,shadowmap_vertex:Y3,shadowmask_pars_fragment:Z3,skinbase_vertex:J3,skinning_pars_vertex:$3,skinning_vertex:K3,skinnormal_vertex:j3,specularmap_fragment:Q3,specularmap_pars_fragment:t4,tonemapping_fragment:e4,tonemapping_pars_fragment:n4,transmission_fragment:i4,transmission_pars_fragment:r4,uv_pars_fragment:s4,uv_pars_vertex:a4,uv_vertex:o4,worldpos_vertex:l4,background_vert:c4,background_frag:h4,backgroundCube_vert:u4,backgroundCube_frag:f4,cube_vert:d4,cube_frag:p4,depth_vert:m4,depth_frag:q4,distanceRGBA_vert:_4,distanceRGBA_frag:g4,equirect_vert:x4,equirect_frag:v4,linedashed_vert:M4,linedashed_frag:y4,meshbasic_vert:S4,meshbasic_frag:E4,meshlambert_vert:b4,meshlambert_frag:T4,meshmatcap_vert:w4,meshmatcap_frag:A4,meshnormal_vert:C4,meshnormal_frag:R4,meshphong_vert:P4,meshphong_frag:L4,meshphysical_vert:D4,meshphysical_frag:I4,meshtoon_vert:U4,meshtoon_frag:N4,points_vert:F4,points_frag:O4,shadow_vert:B4,shadow_frag:z4,sprite_vert:k4,sprite_frag:H4},pt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},fn={basic:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ue([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ue([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ue([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ue([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ue([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ue([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ue([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ue([pt.lights,pt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};fn.physical={uniforms:Ue([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Vr={r:0,b:0,g:0},ei=new qn,V4=new ve;function G4(i,t,e,n,r,s,a){const o=new ie(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function q(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const _=q(y);_===null?f(o,l):_&&_.isColor&&(f(_,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const _=q(x);_&&(_.isCubeTexture||_.mapping===fs)?(h===void 0&&(h=new je(new mi(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Vi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ei.copy(x.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V4.makeRotationFromEuler(ei)),h.material.toneMapped=re.getTransfer(_.colorSpace)!==ce,(d!==_||u!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new je(new ps(2,2),new Jn({name:"BackgroundMaterial",uniforms:Vi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(Vr,x0(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m}}function W4(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(v,P,G,k,W){let K=!1;const X=d(k,G,P);s!==X&&(s=X,c(s.object)),K=p(v,k,G,W),K&&q(v,k,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(v,P,G,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,P,G){const k=G.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let K=W[P.id];K===void 0&&(K={},W[P.id]=K);let X=K[k];return X===void 0&&(X=u(l()),K[k]=X),X}function u(v){const P=[],G=[],k=[];for(let W=0;W<e;W++)P[W]=0,G[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,P,G,k){const W=s.attributes,K=P.attributes;let X=0;const at=G.getAttributes();for(const Y in at)if(at[Y].location>=0){const gt=W[Y];let Tt=K[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Tt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Tt=v.instanceColor)),gt===void 0||gt.attribute!==Tt||Tt&&gt.data!==Tt.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function q(v,P,G,k){const W={},K=P.attributes;let X=0;const at=G.getAttributes();for(const Y in at)if(at[Y].location>=0){let gt=K[Y];gt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));const Tt={};Tt.attribute=gt,gt&&gt.data&&(Tt.data=gt.data),W[Y]=Tt,X++}s.attributes=W,s.attributesNum=X,s.index=k}function g(){const v=s.newAttributes;for(let P=0,G=v.length;P<G;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){const G=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;G[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),W[v]!==P&&(i.vertexAttribDivisor(v,P),W[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==v[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function x(v,P,G,k,W,K,X){X===!0?i.vertexAttribIPointer(v,P,G,W,K):i.vertexAttribPointer(v,P,G,k,W,K)}function _(v,P,G,k){g();const W=k.attributes,K=G.getAttributes(),X=P.defaultAttributeValues;for(const at in K){const Y=K[at];if(Y.location>=0){let ft=W[at];if(ft===void 0&&(at==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),at==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ft!==void 0){const gt=ft.normalized,Tt=ft.itemSize,Ht=t.get(ft);if(Ht===void 0)continue;const it=Ht.buffer,O=Ht.type,B=Ht.bytesPerElement,et=O===i.INT||O===i.UNSIGNED_INT||ft.gpuType===s1;if(ft.isInterleavedBufferAttribute){const rt=ft.data,Mt=rt.stride,Ct=ft.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Y.locationSize;Ot++)f(Y.location+Ot,rt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<Y.locationSize;Ot++)m(Y.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ot=0;Ot<Y.locationSize;Ot++)x(Y.location+Ot,Tt/Y.locationSize,O,gt,Mt*B,(Ct+Tt/Y.locationSize*Ot)*B,et)}else{if(ft.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)f(Y.location+rt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let rt=0;rt<Y.locationSize;rt++)x(Y.location+rt,Tt/Y.locationSize,O,gt,Tt*B,Tt/Y.locationSize*rt*B,et)}}else if(X!==void 0){const gt=X[at];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(Y.location,gt);break;case 3:i.vertexAttrib3fv(Y.location,gt);break;case 4:i.vertexAttrib4fv(Y.location,gt);break;default:i.vertexAttrib1fv(Y.location,gt)}}}}y()}function I(){R();for(const v in n){const P=n[v];for(const G in P){const k=P[G];for(const W in k)h(k[W].object),delete k[W];delete P[G]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const G in P){const k=P[G];for(const W in k)h(k[W].object),delete k[W];delete P[G]}delete n[v.id]}function w(v){for(const P in n){const G=n[P];if(G[v.id]===void 0)continue;const k=G[v.id];for(const W in k)h(k[W].object),delete k[W];delete G[v.id]}}function R(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function X4(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let q=0;q<d;q++)p+=h[q];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let q=0;q<c.length;q++)a(c[q],h[q],u[q]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let q=0;for(let g=0;g<d;g++)q+=h[g]*u[g];e.update(q,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y4(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==on&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),q=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=q>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:q,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function Z4(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ii,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const q=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||q===null||q.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let _=f.clippingState||null;l.value=_,_=h(q,u,x,p);for(let I=0;I!==x;++I)_[I]=e[I];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,q){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,q!==!0||m===null){const f=p+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,_=p;x!==g;++x,_+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function J4(i){let t=new WeakMap;function e(a,o){return o===ga?a.mapping=Bi:o===xa&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ga||o===xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new al(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class S0 extends v0{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,lo=[.125,.215,.35,.446,.526,.582],oi=20,Gs=new S0,co=new ie;let Ws=null,Xs=0,Ys=0,Zs=!1;const ri=(1+Math.sqrt(5))/2,Ri=1/ri,ho=[new D(-ri,Ri,0),new D(ri,Ri,0),new D(-Ri,0,ri),new D(Ri,0,ri),new D(0,ri,-Ri),new D(0,ri,Ri),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ws,Xs,Ys),this._renderer.xr.enabled=Zs,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:gr,format:on,colorSpace:Xi,depthBuffer:!1},r=fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$4(s)),this._blurMaterial=K4(s,t,e)}return r}_compileMaterial(t){const e=new je(this._lodPlanes[0],t);this._renderer.compile(e,Gs)}_sceneToCubeUV(t,e,n,r){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(co),h.toneMapping=Yn,h.autoClear=!1;const p=new q0({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),q=new je(new mi,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(co),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;Gr(r,y*x,f>2?x:0,x,x),h.setRenderTarget(r),g&&h.render(q,o),h.render(t,o)}q.geometry.dispose(),q.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Bi||t.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Gs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ho[(r-s-1)%ho.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new je(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[n]-1,q=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oi-1),g=s/q,m=isFinite(s)?1+Math.floor(h*g):oi;m>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const f=[];let y=0;for(let w=0;w<oi;++w){const R=w/g,E=Math.exp(-R*R/2);f.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=q,u.mipInt.value=x-n;const _=this._sizeLods[r],I=3*_*(r>x-Pi?r-x+Pi:0),T=4*(this._cubeSize-_);Gr(e,I,T,3*_,2*_),l.setRenderTarget(e),l.render(d,Gs)}}function $4(i){const t=[],e=[],n=[];let r=i;const s=i-Pi+1+lo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Pi?l=lo[a-i+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,q=6,g=3,m=2,f=1,y=new Float32Array(g*q*p),x=new Float32Array(m*q*p),_=new Float32Array(f*q*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,R=T>2?0:-1,E=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(E,g*q*T),x.set(u,m*q*T);const v=[T,T,T,T,T,T];_.set(v,f*q*T)}const I=new ke;I.setAttribute("position",new mn(y,g)),I.setAttribute("uv",new mn(x,m)),I.setAttribute("faceIndex",new mn(_,f)),t.push(I),r>Pi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fo(i,t,e){const n=new di(i,t,e);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function K4(i,t,e){const n=new Float32Array(oi),r=new D(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:p1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function po(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:p1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function mo(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:p1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function p1(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j4(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ga||l===xa,h=l===Bi||l===zi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Q4(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tc(i,t,e,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const q in u.attributes)t.remove(u.attributes[q]);for(const q in u.morphAttributes){const g=u.morphAttributes[q];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const q in u)t.update(u[q],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const q in p){const g=p[q];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,q=d.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,_=y.length;x<_;x+=3){const I=y[x+0],T=y[x+1],w=y[x+2];u.push(I,T,T,w,w,I)}}else if(q!==void 0){const y=q.array;g=q.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const I=x+0,T=x+1,w=x+2;u.push(I,T,T,w,w,I)}}else return;const m=new(u0(u)?g0:_0)(u,1);m.version=g;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ec(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function c(u,p,q){q!==0&&(i.drawElementsInstanced(n,p,s,u*a,q),e.update(p,n,q))}function h(u,p,q){if(q===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,q);let m=0;for(let f=0;f<q;f++)m+=p[f];e.update(m,n,1)}function d(u,p,q,g){if(q===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,g,0,q);let f=0;for(let y=0;y<q;y++)f+=p[y]*g[y];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function nc(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ic(i,t,e){const n=new WeakMap,r=new fe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,q=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),q===!0&&(x=2),g===!0&&(x=3);let _=o.attributes.position.count*x,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*I*4*d),w=new d0(T,_,I,d);w.type=Rn,w.needsUpdate=!0;const R=x*4;for(let v=0;v<d;v++){const P=m[v],G=f[v],k=y[v],W=_*I*4*v;for(let K=0;K<P.count;K++){const X=K*R;p===!0&&(r.fromBufferAttribute(P,K),T[W+X+0]=r.x,T[W+X+1]=r.y,T[W+X+2]=r.z,T[W+X+3]=0),q===!0&&(r.fromBufferAttribute(G,K),T[W+X+4]=r.x,T[W+X+5]=r.y,T[W+X+6]=r.z,T[W+X+7]=0),g===!0&&(r.fromBufferAttribute(k,K),T[W+X+8]=r.x,T[W+X+9]=r.y,T[W+X+10]=r.z,T[W+X+11]=k.itemSize===4?r.w:1)}}u={count:d,texture:w,size:new ut(_,I)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const q=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",q),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function rc(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class E0 extends ze{constructor(t,e,n,r,s,a,o,l,c,h=Ii){if(h!==Ii&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=fi),n===void 0&&h===Hi&&(n=ki),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const b0=new ze,qo=new E0(1,1),T0=new d0,w0=new G2,A0=new M0,_o=[],go=[],xo=new Float32Array(16),vo=new Float32Array(9),Mo=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_o[r];if(s===void 0&&(s=new Float32Array(r),_o[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ms(i,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sc(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ac(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function oc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function lc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function cc(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;Mo.set(n),i.uniformMatrix2fv(this.addr,!1,Mo),Te(e,n)}}function hc(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),Te(e,n)}}function uc(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),Te(e,n)}}function fc(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function pc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function mc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function qc(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _c(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function gc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function xc(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function vc(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qo.compareFunction=h0,s=qo):s=b0,e.setTexture2D(t||s,r)}function Mc(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||w0,r)}function yc(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||A0,r)}function Sc(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||T0,r)}function Ec(i){switch(i){case 5126:return sc;case 35664:return ac;case 35665:return oc;case 35666:return lc;case 35674:return cc;case 35675:return hc;case 35676:return uc;case 5124:case 35670:return fc;case 35667:case 35671:return dc;case 35668:case 35672:return pc;case 35669:case 35673:return mc;case 5125:return qc;case 36294:return _c;case 36295:return gc;case 36296:return xc;case 35678:case 36198:case 36298:case 36306:case 35682:return vc;case 35679:case 36299:case 36307:return Mc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return Sc}}function bc(i,t){i.uniform1fv(this.addr,t)}function Tc(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function wc(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Ac(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Cc(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rc(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pc(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lc(i,t){i.uniform1iv(this.addr,t)}function Dc(i,t){i.uniform2iv(this.addr,t)}function Ic(i,t){i.uniform3iv(this.addr,t)}function Uc(i,t){i.uniform4iv(this.addr,t)}function Nc(i,t){i.uniform1uiv(this.addr,t)}function Fc(i,t){i.uniform2uiv(this.addr,t)}function Oc(i,t){i.uniform3uiv(this.addr,t)}function Bc(i,t){i.uniform4uiv(this.addr,t)}function zc(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);be(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||b0,s[a])}function kc(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);be(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||w0,s[a])}function Hc(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);be(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||A0,s[a])}function Vc(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);be(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||T0,s[a])}function Gc(i){switch(i){case 5126:return bc;case 35664:return Tc;case 35665:return wc;case 35666:return Ac;case 35674:return Cc;case 35675:return Rc;case 35676:return Pc;case 5124:case 35670:return Lc;case 35667:case 35671:return Dc;case 35668:case 35672:return Ic;case 35669:case 35673:return Uc;case 5125:return Nc;case 36294:return Fc;case 36295:return Oc;case 36296:return Bc;case 35678:case 36198:case 36298:case 36306:case 35682:return zc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return Hc;case 36289:case 36303:case 36311:case 36292:return Vc}}class Wc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ec(e.type)}}class Xc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gc(e.type)}}class Yc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function yo(i,t){i.seq.push(t),i.map[t.id]=t}function Zc(i,t,e){const n=i.name,r=n.length;for(Js.lastIndex=0;;){const s=Js.exec(n),a=Js.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yo(e,c===void 0?new Wc(o,i,t):new Xc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Yc(o),yo(e,d)),e=d}}}class es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Zc(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function So(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jc=37297;let $c=0;function Kc(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Eo=new Jt;function jc(i){re._getMatrix(Eo,re.workingColorSpace,i);const t=`mat3( ${Eo.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Kc(i.getShaderSource(t),a)}else return r}function Qc(i,t){const e=jc(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t5(i,t){let e;switch(t){case g2:e="Linear";break;case x2:e="Reinhard";break;case v2:e="Cineon";break;case Ko:e="ACESFilmic";break;case y2:e="AgX";break;case S2:e="Neutral";break;case M2:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new D;function e5(){re.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n5(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function i5(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r5(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ar(i){return i!==""}function To(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(s5,o5)}const a5=new Map;function o5(i,t){let e=Kt[t];if(e===void 0){const n=a5.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const l5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(i){return i.replace(l5,c5)}function c5(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Co(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h5(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function u5(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f5(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function d5(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $o:t="ENVMAP_BLENDING_MULTIPLY";break;case q2:t="ENVMAP_BLENDING_MIX";break;case _2:t="ENVMAP_BLENDING_ADD";break}return t}function p5(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function m5(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=h5(e),c=u5(e),h=f5(e),d=d5(e),u=p5(e),p=n5(e),q=i5(s),g=r.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,q].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,q].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,q,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,q,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?t5("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Qc("linearToOutputTexel",e.outputColorSpace),e5(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),a=Ja(a),a=To(a,e),a=wo(a,e),o=Ja(o),o=To(o,e),o=wo(o,e),a=Ao(a),o=Ao(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===k1?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===k1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+a,_=y+f+o,I=So(r,r.VERTEX_SHADER,x),T=So(r,r.FRAGMENT_SHADER,_);r.attachShader(g,I),r.attachShader(g,T),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(I).trim(),W=r.getShaderInfoLog(T).trim();let K=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,I,T);else{const at=bo(r,I,"vertex"),Y=bo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+at+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:K,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(I),r.deleteShader(T),R=new es(r,g),E=r5(r,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Jc)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$c++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=T,this}let q5=0;class _5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g5(t),e.set(t,n)),n}}class g5{constructor(t){this.id=q5++,this.code=t,this.usedTimes=0}}function x5(i,t,e,n,r,s,a){const o=new f1,l=new _5,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,G,k){const W=G.fog,K=k.geometry,X=E.isMeshStandardMaterial?G.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),Y=at&&at.mapping===fs?at.image.height:null,ft=q[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=gt!==void 0?gt.length:0;let Ht=0;K.morphAttributes.position!==void 0&&(Ht=1),K.morphAttributes.normal!==void 0&&(Ht=2),K.morphAttributes.color!==void 0&&(Ht=3);let it,O,B,et;if(ft){const le=fn[ft];it=le.vertexShader,O=le.fragmentShader}else it=E.vertexShader,O=E.fragmentShader,l.update(E),B=l.getVertexShaderID(E),et=l.getFragmentShaderID(E);const rt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ct=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,Qt=!!E.map,j=!!E.matcap,lt=!!at,C=!!E.aoMap,Ut=!!E.lightMap,st=!!E.bumpMap,bt=!!E.normalMap,dt=!!E.displacementMap,Bt=!!E.emissiveMap,St=!!E.metalnessMap,b=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,J=E.dispersion>0,nt=E.iridescence>0,$=E.sheen>0,Rt=E.transmission>0,mt=M&&!!E.anisotropyMap,Et=z&&!!E.clearcoatMap,te=z&&!!E.clearcoatNormalMap,ot=z&&!!E.clearcoatRoughnessMap,wt=nt&&!!E.iridescenceMap,zt=nt&&!!E.iridescenceThicknessMap,kt=$&&!!E.sheenColorMap,At=$&&!!E.sheenRoughnessMap,ne=!!E.specularMap,$t=!!E.specularColorMap,me=!!E.specularIntensityMap,U=Rt&&!!E.transmissionMap,qt=Rt&&!!E.thicknessMap,Z=!!E.gradientMap,tt=!!E.alphaMap,yt=E.alphaTest>0,xt=!!E.alphaHash,Wt=!!E.extensions;let ye=Yn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Le={shaderID:ft,shaderType:E.type,shaderName:E.name,vertexShader:it,fragmentShader:O,defines:E.defines,customVertexShaderID:B,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&k.instanceColor!==null,instancingMorph:Ct&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xi,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:j,envMap:lt,envMapMode:lt&&at.mapping,envMapCubeUVHeight:Y,aoMap:C,lightMap:Ut,bumpMap:st,normalMap:bt,displacementMap:u&&dt,emissiveMap:Bt,normalMapObjectSpace:bt&&E.normalMapType===w2,normalMapTangentSpace:bt&&E.normalMapType===c0,metalnessMap:St,roughnessMap:b,anisotropy:M,anisotropyMap:mt,clearcoat:z,clearcoatMap:Et,clearcoatNormalMap:te,clearcoatRoughnessMap:ot,dispersion:J,iridescence:nt,iridescenceMap:wt,iridescenceThicknessMap:zt,sheen:$,sheenColorMap:kt,sheenRoughnessMap:At,specularMap:ne,specularColorMap:$t,specularIntensityMap:me,transmission:Rt,transmissionMap:U,thicknessMap:qt,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Di&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:xt,combine:E.combine,mapUv:Qt&&g(E.map.channel),aoMapUv:C&&g(E.aoMap.channel),lightMapUv:Ut&&g(E.lightMap.channel),bumpMapUv:st&&g(E.bumpMap.channel),normalMapUv:bt&&g(E.normalMap.channel),displacementMapUv:dt&&g(E.displacementMap.channel),emissiveMapUv:Bt&&g(E.emissiveMap.channel),metalnessMapUv:St&&g(E.metalnessMap.channel),roughnessMapUv:b&&g(E.roughnessMap.channel),anisotropyMapUv:mt&&g(E.anisotropyMap.channel),clearcoatMapUv:Et&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(E.sheenRoughnessMap.channel),specularMapUv:ne&&g(E.specularMap.channel),specularColorMapUv:$t&&g(E.specularColorMap.channel),specularIntensityMapUv:me&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:qt&&g(E.thicknessMap.channel),alphaMapUv:tt&&g(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(bt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Qt||tt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===ce,decodeVideoTextureEmissive:Bt&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Wt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&E.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function f(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(v,E),x(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function y(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function x(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const v=q[E.type];let P;if(v){const G=fn[v];P=nl.clone(G.uniforms)}else P=E.uniforms;return P}function I(E,v){let P;for(let G=0,k=h.length;G<k;G++){const W=h[G];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new m5(i,v,E,s),h.push(P)),P}function T(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:R}}function v5(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function M5(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ro(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Po(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,u,p,q,g,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:q,renderOrder:d.renderOrder,z:g,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=q,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function o(d,u,p,q,g,m){const f=a(d,u,p,q,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(d,u,p,q,g,m){const f=a(d,u,p,q,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||M5),n.length>1&&n.sort(u||Ro),r.length>1&&r.sort(u||Ro)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function y5(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Po,i.set(n,[a])):r>=s.length?(a=new Po,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function S5(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ie};break;case"SpotLight":e={position:new D,direction:new D,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function E5(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b5=0;function T5(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w5(i){const t=new S5,e=E5(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new ve,a=new ve;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,q=0,g=0,m=0,f=0,y=0,x=0,_=0,I=0,T=0,w=0;c.sort(T5);for(let E=0,v=c.length;E<v;E++){const P=c[E],G=P.color,k=P.intensity,W=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*k,d+=G.g*k,u+=G.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);w++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const at=P.shadow,Y=e.get(P);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;const at=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,at.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=at.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=K,_++}g++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(G).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const at=P.shadow,Y=e.get(P);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,Y.shadowCameraNear=at.camera.near,Y.shadowCameraFar=at.camera.far,n.pointShadow[q]=Y,n.pointShadowMap[q]=K,n.pointShadowMatrix[q]=P.shadow.matrix,x++}n.point[q]=X,q++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==q||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=q,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=p,R.pointLength=q,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=w,n.version=b5++)}function l(c,h){let d=0,u=0,p=0,q=0,g=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[q];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),q++}else if(x.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Lo(i){const t=new w5(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function A5(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Lo(i),t.set(r,[o])):s>=a.length?(o=new Lo(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class C5 extends Mr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=b2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R5 extends Mr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const P5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D5(i,t,e){let n=new d1;const r=new ut,s=new ut,a=new fe,o=new C5({depthPacking:T2}),l=new R5,c={},h=e.maxTextureSize,d={[Zn]:Be,[Be]:Zn,[An]:An},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:P5,fragmentShader:L5}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const q=new ke;q.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new je(q,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let f=this.type;this.render=function(T,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Xn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==Tn&&this.type===Tn,W=f===Tn&&this.type!==Tn;for(let K=0,X=T.length;K<X;K++){const at=T[K],Y=at.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ft=Y.getFrameExtents();if(r.multiply(ft),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ft.x),r.x=s.x*ft.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ft.y),r.y=s.y*ft.y,Y.mapSize.y=s.y)),Y.map===null||k===!0||W===!0){const Tt=this.type!==Tn?{minFilter:ln,magFilter:ln}:{};Y.map!==null&&Y.map.dispose(),Y.map=new di(r.x,r.y,Tt),Y.map.texture.name=at.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const gt=Y.getViewportCount();for(let Tt=0;Tt<gt;Tt++){const Ht=Y.getViewport(Tt);a.set(s.x*Ht.x,s.y*Ht.y,s.x*Ht.z,s.y*Ht.w),G.viewport(a),Y.updateMatrices(at,Tt),n=Y.getFrustum(),_(w,R,Y.camera,at,this.type)}Y.isPointLightShadow!==!0&&this.type===Tn&&y(Y,R),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,P)};function y(T,w){const R=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,u,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,p,g,null)}function x(T,w,R,E){let v=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=v.uuid,k=w.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let K=W[k];K===void 0&&(K=v.clone(),W[k]=K,w.addEventListener("dispose",I)),v=K}if(v.visible=w.visible,v.wireframe=w.wireframe,E===Tn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=i.properties.get(v);G.light=R}return v}function _(T,w,R,E,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Tn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const k=t.update(T),W=T.material;if(Array.isArray(W)){const K=k.groups;for(let X=0,at=K.length;X<at;X++){const Y=K[X],ft=W[Y.materialIndex];if(ft&&ft.visible){const gt=x(T,ft,E,v);T.onBeforeShadow(i,T,w,R,k,gt,Y),i.renderBufferDirect(R,null,k,gt,T,Y),T.onAfterShadow(i,T,w,R,k,gt,Y)}}}else if(W.visible){const K=x(T,W,E,v);T.onBeforeShadow(i,T,w,R,k,K,null),i.renderBufferDirect(R,null,k,K,T,null),T.onAfterShadow(i,T,w,R,k,K,null)}}const G=T.children;for(let k=0,W=G.length;k<W;k++)_(G[k],w,R,E,v)}function I(T){T.target.removeEventListener("dispose",I);for(const R in c){const E=c[R],v=T.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const I5={[ua]:fa,[da]:qa,[pa]:_a,[Oi]:ma,[fa]:ua,[qa]:da,[_a]:pa,[ma]:Oi};function U5(i,t){function e(){let U=!1;const qt=new fe;let Z=null;const tt=new fe(0,0,0,0);return{setMask:function(yt){Z!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){U=yt},setClear:function(yt,xt,Wt,ye,Le){Le===!0&&(yt*=ye,xt*=ye,Wt*=ye),qt.set(yt,xt,Wt,ye),tt.equals(qt)===!1&&(i.clearColor(yt,xt,Wt,ye),tt.copy(qt))},reset:function(){U=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,qt=!1,Z=null,tt=null,yt=null;return{setReversed:function(xt){if(qt!==xt){const Wt=t.get("EXT_clip_control");qt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ye=yt;yt=null,this.setClear(ye)}qt=xt},getReversed:function(){return qt},setTest:function(xt){xt?rt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(xt){Z!==xt&&!U&&(i.depthMask(xt),Z=xt)},setFunc:function(xt){if(qt&&(xt=I5[xt]),tt!==xt){switch(xt){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=xt}},setLocked:function(xt){U=xt},setClear:function(xt){yt!==xt&&(qt&&(xt=1-xt),i.clearDepth(xt),yt=xt)},reset:function(){U=!1,Z=null,tt=null,yt=null,qt=!1}}}function r(){let U=!1,qt=null,Z=null,tt=null,yt=null,xt=null,Wt=null,ye=null,Le=null;return{setTest:function(le){U||(le?rt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(le){qt!==le&&!U&&(i.stencilMask(le),qt=le)},setFunc:function(le,tn,gn){(Z!==le||tt!==tn||yt!==gn)&&(i.stencilFunc(le,tn,gn),Z=le,tt=tn,yt=gn)},setOp:function(le,tn,gn){(xt!==le||Wt!==tn||ye!==gn)&&(i.stencilOp(le,tn,gn),xt=le,Wt=tn,ye=gn)},setLocked:function(le){U=le},setClear:function(le){Le!==le&&(i.clearStencil(le),Le=le)},reset:function(){U=!1,qt=null,Z=null,tt=null,yt=null,xt=null,Wt=null,ye=null,Le=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],q=null,g=!1,m=null,f=null,y=null,x=null,_=null,I=null,T=null,w=new ie(0,0,0),R=0,E=!1,v=null,P=null,G=null,k=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,at=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=at>=2);let ft=null,gt={};const Tt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),it=new fe().fromArray(Tt),O=new fe().fromArray(Ht);function B(U,qt,Z,tt){const yt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(U,xt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Z;Wt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(qt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return xt}const et={};et[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Oi),st(!1),bt(U1),rt(i.CULL_FACE),C(Xn);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Mt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ct(U,qt){return d[U]!==qt?(i.bindFramebuffer(U,qt),d[U]=qt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=qt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function Ot(U,qt){let Z=p,tt=!1;if(U){Z=u.get(qt),Z===void 0&&(Z=[],u.set(qt,Z));const yt=U.textures;if(Z.length!==yt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=yt.length;xt<Wt;xt++)Z[xt]=i.COLOR_ATTACHMENT0+xt;Z.length=yt.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Qt(U){return q!==U?(i.useProgram(U),q=U,!0):!1}const j={[ai]:i.FUNC_ADD,[Q0]:i.FUNC_SUBTRACT,[t2]:i.FUNC_REVERSE_SUBTRACT};j[e2]=i.MIN,j[n2]=i.MAX;const lt={[i2]:i.ZERO,[r2]:i.ONE,[s2]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[u2]:i.SRC_ALPHA_SATURATE,[c2]:i.DST_COLOR,[o2]:i.DST_ALPHA,[a2]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[h2]:i.ONE_MINUS_DST_COLOR,[l2]:i.ONE_MINUS_DST_ALPHA,[f2]:i.CONSTANT_COLOR,[d2]:i.ONE_MINUS_CONSTANT_COLOR,[p2]:i.CONSTANT_ALPHA,[m2]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,qt,Z,tt,yt,xt,Wt,ye,Le,le){if(U===Xn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),U!==j0){if(U!==m||le!==E){if((f!==ai||_!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,_=ai),le)switch(U){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case N1:i.blendFunc(i.ONE,i.ONE);break;case F1:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case O1:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case N1:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case F1:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case O1:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,I=null,T=null,w.set(0,0,0),R=0,m=U,E=le}return}yt=yt||qt,xt=xt||Z,Wt=Wt||tt,(qt!==f||yt!==_)&&(i.blendEquationSeparate(j[qt],j[yt]),f=qt,_=yt),(Z!==y||tt!==x||xt!==I||Wt!==T)&&(i.blendFuncSeparate(lt[Z],lt[tt],lt[xt],lt[Wt]),y=Z,x=tt,I=xt,T=Wt),(ye.equals(w)===!1||Le!==R)&&(i.blendColor(ye.r,ye.g,ye.b,Le),w.copy(ye),R=Le),m=U,E=!1}function Ut(U,qt){U.side===An?Mt(i.CULL_FACE):rt(i.CULL_FACE);let Z=U.side===Be;qt&&(Z=!Z),st(Z),U.blending===Di&&U.transparent===!1?C(Xn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function bt(U){U!==$0?(rt(i.CULL_FACE),U!==P&&(U===U1?i.cullFace(i.BACK):U===K0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=U}function dt(U){U!==G&&(X&&i.lineWidth(U),G=U)}function Bt(U,qt,Z){U?(rt(i.POLYGON_OFFSET_FILL),(k!==qt||W!==Z)&&(i.polygonOffset(qt,Z),k=qt,W=Z)):Mt(i.POLYGON_OFFSET_FILL)}function St(U){U?rt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+K-1),ft!==U&&(i.activeTexture(U),ft=U)}function M(U,qt,Z){Z===void 0&&(ft===null?Z=i.TEXTURE0+K-1:Z=ft);let tt=gt[Z];tt===void 0&&(tt={type:void 0,texture:void 0},gt[Z]=tt),(tt.type!==U||tt.texture!==qt)&&(ft!==Z&&(i.activeTexture(Z),ft=Z),i.bindTexture(U,qt||et[U]),tt.type=U,tt.texture=qt)}function z(){const U=gt[ft];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(U){it.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),it.copy(U))}function At(U){O.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),O.copy(U))}function ne(U,qt){let Z=c.get(qt);Z===void 0&&(Z=new WeakMap,c.set(qt,Z));let tt=Z.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(qt,U.name),Z.set(U,tt))}function $t(U,qt){const tt=c.get(qt).get(U);l.get(qt)!==tt&&(i.uniformBlockBinding(qt,tt,U.__bindingPointIndex),l.set(qt,tt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,gt={},d={},u=new WeakMap,p=[],q=null,g=!1,m=null,f=null,y=null,x=null,_=null,I=null,T=null,w=new ie(0,0,0),R=0,E=!1,v=null,P=null,G=null,k=null,W=null,it.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:Mt,bindFramebuffer:Ct,drawBuffers:Ot,useProgram:Qt,setBlending:C,setMaterial:Ut,setFlipSided:st,setCullFace:bt,setLineWidth:dt,setPolygonOffset:Bt,setScissorTest:St,activeTexture:b,bindTexture:M,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:wt,texImage3D:zt,updateUBOMapping:ne,uniformBlockBinding:$t,texStorage2D:te,texStorage3D:ot,texSubImage2D:$,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:kt,viewport:At,reset:me}}function Do(i,t,e,n){const r=N5(n);switch(e){case n0:return i*t;case r0:return i*t;case s0:return i*t*2;case a0:return i*t/r.components*r.byteLength;case l1:return i*t/r.components*r.byteLength;case o0:return i*t*2/r.components*r.byteLength;case c1:return i*t*2/r.components*r.byteLength;case i0:return i*t*3/r.components*r.byteLength;case on:return i*t*4/r.components*r.byteLength;case h1:return i*t*4/r.components*r.byteLength;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case ba:return Math.max(i,16)*Math.max(t,8)/4;case ya:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ts:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case l0:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N5(i){switch(i){case Dn:case Qo:return{byteLength:1,components:1};case ur:case t0:case gr:return{byteLength:2,components:1};case a1:case o1:return{byteLength:2,components:4};case fi:case s1:case Rn:return{byteLength:4,components:1};case e0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function F5(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function q(b,M){return p?new OffscreenCanvas(b,M):ss("canvas")}function g(b,M,z){let J=1;const nt=St(b);if((nt.width>z||nt.height>z)&&(J=z/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(J*nt.width),Rt=Math.floor(J*nt.height);d===void 0&&(d=q($,Rt));const mt=M?q($,Rt):d;return mt.width=$,mt.height=Rt,mt.getContext("2d").drawImage(b,0,0,$,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Rt+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,M,z,J,nt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const Rt=nt?ds:re.getTransfer(J);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Rt===ce?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(b,M){let z;return b?M===null||M===fi||M===ki?z=i.DEPTH24_STENCIL8:M===Rn?z=i.DEPTH32F_STENCIL8:M===ur&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===ki?z=i.DEPTH_COMPONENT24:M===Rn?z=i.DEPTH_COMPONENT32F:M===ur&&(z=i.DEPTH_COMPONENT16),z}function I(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ln&&b.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){const M=b.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&h.delete(M)}function w(b){const M=b.target;M.removeEventListener("dispose",w),v(M)}function R(b){const M=n.get(b);if(M.__webglInit===void 0)return;const z=b.source,J=u.get(z);if(J){const nt=J[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(b),Object.keys(J).length===0&&u.delete(z)}n.remove(b)}function E(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const z=b.source,J=u.get(z);delete J[M.__cacheKey],a.memory.textures--}function v(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let nt=0;nt<M.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=b.textures;for(let J=0,nt=z.length;J<nt;J++){const $=n.get(z[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(b)}let P=0;function G(){P=0}function k(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function W(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function K(b,M){const z=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(z,b,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function X(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){O(z,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function at(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){O(z,b,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Y(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){B(z,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const ft={[va]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},gt={[ln]:i.NEAREST,[E2]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Tt={[A2]:i.NEVER,[I2]:i.ALWAYS,[C2]:i.LESS,[h0]:i.LEQUAL,[R2]:i.EQUAL,[D2]:i.GEQUAL,[P2]:i.GREATER,[L2]:i.NOTEQUAL};function Ht(b,M){if(M.type===Rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===pn||M.magFilter===Ms||M.magFilter===br||M.magFilter===ci||M.minFilter===pn||M.minFilter===Ms||M.minFilter===br||M.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ft[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ft[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ft[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,gt[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==br&&M.minFilter!==ci||M.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function it(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",T));const J=M.source;let nt=u.get(J);nt===void 0&&(nt={},u.set(J,nt));const $=W(M);if($!==b.__cacheKey){nt[$]===void 0&&(nt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),nt[$].usedTimes++;const Rt=nt[b.__cacheKey];Rt!==void 0&&(nt[b.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(M)),b.__cacheKey=$,b.__webglTexture=nt[$].texture}return z}function O(b,M,z){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const nt=it(b,M),$=M.source;e.bindTexture(J,b.__webglTexture,i.TEXTURE0+z);const Rt=n.get($);if($.version!==Rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);const mt=re.getPrimaries(re.workingColorSpace),Et=M.colorSpace===Vn?null:re.getPrimaries(M.colorSpace),te=M.colorSpace===Vn||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ot=g(M.image,!1,r.maxTextureSize);ot=Bt(M,ot);const wt=s.convert(M.format,M.colorSpace),zt=s.convert(M.type);let kt=x(M.internalFormat,wt,zt,M.colorSpace,M.isVideoTexture);Ht(J,M);let At;const ne=M.mipmaps,$t=M.isVideoTexture!==!0,me=Rt.__version===void 0||nt===!0,U=$.dataReady,qt=I(M,ot);if(M.isDepthTexture)kt=_(M.format===Hi,M.type),me&&($t?e.texStorage2D(i.TEXTURE_2D,1,kt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,wt,zt,null));else if(M.isDataTexture)if(ne.length>0){$t&&me&&e.texStorage2D(i.TEXTURE_2D,qt,kt,ne[0].width,ne[0].height);for(let Z=0,tt=ne.length;Z<tt;Z++)At=ne[Z],$t?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,wt,zt,At.data):e.texImage2D(i.TEXTURE_2D,Z,kt,At.width,At.height,0,wt,zt,At.data);M.generateMipmaps=!1}else $t?(me&&e.texStorage2D(i.TEXTURE_2D,qt,kt,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,wt,zt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,wt,zt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,kt,ne[0].width,ne[0].height,ot.depth);for(let Z=0,tt=ne.length;Z<tt;Z++)if(At=ne[Z],M.format!==on)if(wt!==null)if($t){if(U)if(M.layerUpdates.size>0){const yt=Do(At.width,At.height,M.format,M.type);for(const xt of M.layerUpdates){const Wt=At.data.subarray(xt*yt/At.data.BYTES_PER_ELEMENT,(xt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,xt,At.width,At.height,1,wt,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,ot.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,kt,At.width,At.height,ot.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,ot.depth,wt,zt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,kt,At.width,At.height,ot.depth,0,wt,zt,At.data)}else{$t&&me&&e.texStorage2D(i.TEXTURE_2D,qt,kt,ne[0].width,ne[0].height);for(let Z=0,tt=ne.length;Z<tt;Z++)At=ne[Z],M.format!==on?wt!==null?$t?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,wt,zt,At.data):e.texImage2D(i.TEXTURE_2D,Z,kt,At.width,At.height,0,wt,zt,At.data)}else if(M.isDataArrayTexture)if($t){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,kt,ot.width,ot.height,ot.depth),U)if(M.layerUpdates.size>0){const Z=Do(ot.width,ot.height,M.format,M.type);for(const tt of M.layerUpdates){const yt=ot.data.subarray(tt*Z/ot.data.BYTES_PER_ELEMENT,(tt+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,wt,zt,yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,ot.width,ot.height,ot.depth,0,wt,zt,ot.data);else if(M.isData3DTexture)$t?(me&&e.texStorage3D(i.TEXTURE_3D,qt,kt,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,kt,ot.width,ot.height,ot.depth,0,wt,zt,ot.data);else if(M.isFramebufferTexture){if(me)if($t)e.texStorage2D(i.TEXTURE_2D,qt,kt,ot.width,ot.height);else{let Z=ot.width,tt=ot.height;for(let yt=0;yt<qt;yt++)e.texImage2D(i.TEXTURE_2D,yt,kt,Z,tt,0,wt,zt,null),Z>>=1,tt>>=1}}else if(ne.length>0){if($t&&me){const Z=St(ne[0]);e.texStorage2D(i.TEXTURE_2D,qt,kt,Z.width,Z.height)}for(let Z=0,tt=ne.length;Z<tt;Z++)At=ne[Z],$t?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,wt,zt,At):e.texImage2D(i.TEXTURE_2D,Z,kt,wt,zt,At);M.generateMipmaps=!1}else if($t){if(me){const Z=St(ot);e.texStorage2D(i.TEXTURE_2D,qt,kt,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,kt,wt,zt,ot);m(M)&&f(J),Rt.__version=$.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function B(b,M,z){if(M.image.length!==6)return;const J=it(b,M),nt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const $=n.get(nt);if(nt.version!==$.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const Rt=re.getPrimaries(re.workingColorSpace),mt=M.colorSpace===Vn?null:re.getPrimaries(M.colorSpace),Et=M.colorSpace===Vn||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const te=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let tt=0;tt<6;tt++)!te&&!ot?wt[tt]=g(M.image[tt],!0,r.maxCubemapSize):wt[tt]=ot?M.image[tt].image:M.image[tt],wt[tt]=Bt(M,wt[tt]);const zt=wt[0],kt=s.convert(M.format,M.colorSpace),At=s.convert(M.type),ne=x(M.internalFormat,kt,At,M.colorSpace),$t=M.isVideoTexture!==!0,me=$.__version===void 0||J===!0,U=nt.dataReady;let qt=I(M,zt);Ht(i.TEXTURE_CUBE_MAP,M);let Z;if(te){$t&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ne,zt.width,zt.height);for(let tt=0;tt<6;tt++){Z=wt[tt].mipmaps;for(let yt=0;yt<Z.length;yt++){const xt=Z[yt];M.format!==on?kt!==null?$t?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,xt.width,xt.height,kt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ne,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,xt.width,xt.height,kt,At,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ne,xt.width,xt.height,0,kt,At,xt.data)}}}else{if(Z=M.mipmaps,$t&&me){Z.length>0&&qt++;const tt=St(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ne,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){$t?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt[tt].width,wt[tt].height,kt,At,wt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,wt[tt].width,wt[tt].height,0,kt,At,wt[tt].data);for(let yt=0;yt<Z.length;yt++){const Wt=Z[yt].image[tt].image;$t?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Wt.width,Wt.height,kt,At,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ne,Wt.width,Wt.height,0,kt,At,Wt.data)}}else{$t?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,kt,At,wt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,kt,At,wt[tt]);for(let yt=0;yt<Z.length;yt++){const xt=Z[yt];$t?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,kt,At,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ne,kt,At,xt.image[tt])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),$.__version=nt.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function et(b,M,z,J,nt,$){const Rt=s.convert(z.format,z.colorSpace),mt=s.convert(z.type),Et=x(z.internalFormat,Rt,mt,z.colorSpace),te=n.get(M),ot=n.get(z);if(ot.__renderTarget=M,!te.__hasExternalTextures){const wt=Math.max(1,M.width>>$),zt=Math.max(1,M.height>>$);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,Et,wt,zt,M.depth,0,Rt,mt,null):e.texImage2D(nt,$,Et,wt,zt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),bt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,nt,ot.__webglTexture,0,st(M)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,nt,ot.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const J=M.depthTexture,nt=J&&J.isDepthTexture?J.type:null,$=_(M.stencilBuffer,nt),Rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=st(M);bt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,b)}else{const J=M.textures;for(let nt=0;nt<J.length;nt++){const $=J[nt],Rt=s.convert($.format,$.colorSpace),mt=s.convert($.type),Et=x($.internalFormat,Rt,mt,$.colorSpace),te=st(M);z&&bt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Et,M.width,M.height):bt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const nt=J.__webglTexture,$=st(M);if(M.depthTexture.format===Ii)bt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(M.depthTexture.format===Hi)bt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const M=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=J}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),rt(M.__webglDepthbuffer[J],b,!1);else{const nt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),rt(M.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,M,z){const J=n.get(b);M!==void 0&&et(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ct(b)}function Qt(b){const M=b.texture,z=n.get(b),J=n.get(M);b.addEventListener("dispose",w);const nt=b.textures,$=b.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)z.__webglFramebuffer[mt][Et]=i.createFramebuffer()}else z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)z.__webglFramebuffer[mt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,Et=nt.length;mt<Et;mt++){const te=n.get(nt[mt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&bt(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<nt.length;mt++){const Et=nt[mt];z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);const te=s.convert(Et.format,Et.colorSpace),ot=s.convert(Et.type),wt=x(Et.internalFormat,te,ot,Et.colorSpace,b.isXRRenderTarget===!0),zt=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)et(z.__webglFramebuffer[mt][Et],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else et(z.__webglFramebuffer[mt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,Et=nt.length;mt<Et;mt++){const te=nt[mt],ot=n.get(te);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Ht(i.TEXTURE_2D,te),et(z.__webglFramebuffer,b,te,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(te)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),Ht(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)et(z.__webglFramebuffer[Et],b,M,i.COLOR_ATTACHMENT0,mt,Et);else et(z.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,mt,0);m(M)&&f(mt),e.unbindTexture()}b.depthBuffer&&Ct(b)}function j(b){const M=b.textures;for(let z=0,J=M.length;z<J;z++){const nt=M[z];if(m(nt)){const $=y(b),Rt=n.get(nt).__webglTexture;e.bindTexture($,Rt),f($),e.unbindTexture()}}}const lt=[],C=[];function Ut(b){if(b.samples>0){if(bt(b)===!1){const M=b.textures,z=b.width,J=b.height;let nt=i.COLOR_BUFFER_BIT;const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(b),mt=M.length>1;if(mt)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Et]);const te=n.get(M[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,nt,i.NEAREST),l===!0&&(lt.length=0,C.length=0,lt.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push($),C.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Et]);const te=n.get(M[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function st(b){return Math.min(r.maxSamples,b.samples)}function bt(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(b){const M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Bt(b,M){const z=b.colorSpace,J=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==Xi&&z!==Vn&&(re.getTransfer(z)===ce?(J!==on||nt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function St(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=at,this.setTextureCube=Y,this.rebindTextures=Ot,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=et,this.useMultisampledRTT=bt}function O5(i,t){function e(n,r=Vn){let s;const a=re.getTransfer(r);if(n===Dn)return i.UNSIGNED_BYTE;if(n===a1)return i.UNSIGNED_SHORT_4_4_4_4;if(n===o1)return i.UNSIGNED_SHORT_5_5_5_1;if(n===e0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===t0)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===s1)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===gr)return i.HALF_FLOAT;if(n===n0)return i.ALPHA;if(n===i0)return i.RGB;if(n===on)return i.RGBA;if(n===r0)return i.LUMINANCE;if(n===s0)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===a0)return i.RED;if(n===l1)return i.RED_INTEGER;if(n===o0)return i.RG;if(n===c1)return i.RG_INTEGER;if(n===h1)return i.RGBA_INTEGER;if(n===$r||n===Kr||n===jr||n===Qr)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Sa||n===Ea||n===ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===wa||n===Aa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ta||n===wa)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ts||n===Va||n===Ga)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ts)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===l0||n===Wa||n===Xa||n===Ya)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class B5 extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xe extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z5={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,q=.005;c.inputState.pinching&&u>p+q?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-q&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z5)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const k5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:k5,fragmentShader:H5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new je(new ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G5 extends Yi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,q=null;const g=new V5,m=e.getContextAttributes();let f=null,y=null;const x=[],_=[],I=new ut;let T=null;const w=new Ye;w.viewport=new fe;const R=new Ye;R.viewport=new fe;const E=[w,R],v=new B5;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=x[O];return B===void 0&&(B=new $s,x[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=x[O];return B===void 0&&(B=new $s,x[O]=B),B.getGripSpace()},this.getHand=function(O){let B=x[O];return B===void 0&&(B=new $s,x[O]=B),B.getHandSpace()};function k(O){const B=_.indexOf(O.inputSource);if(B===-1)return;const et=x[B];et!==void 0&&(et.update(O.inputSource,O.frame,c||a),et.dispatchEvent({type:O.type,data:O.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let O=0;O<x.length;O++){const B=_[O];B!==null&&(_[O]=null,x[O].disconnect(B))}P=null,G=null,g.reset(),t.setRenderTarget(f),p=null,u=null,d=null,r=null,y=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return q},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const B={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,B),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new di(p.framebufferWidth,p.framebufferHeight,{format:on,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,et=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=m.stencil?Hi:Ii,et=m.stencil?ki:fi);const Mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};d=new XRWebGLBinding(r,e),u=d.createProjectionLayer(Mt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new di(u.textureWidth,u.textureHeight,{format:on,type:Dn,depthTexture:new E0(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(O){for(let B=0;B<O.removed.length;B++){const et=O.removed[B],rt=_.indexOf(et);rt>=0&&(_[rt]=null,x[rt].disconnect(et))}for(let B=0;B<O.added.length;B++){const et=O.added[B];let rt=_.indexOf(et);if(rt===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=_.length){_.push(et),rt=Ct;break}else if(_[Ct]===null){_[Ct]=et,rt=Ct;break}if(rt===-1)break}const Mt=x[rt];Mt&&Mt.connect(et)}}const X=new D,at=new D;function Y(O,B,et){X.setFromMatrixPosition(B.matrixWorld),at.setFromMatrixPosition(et.matrixWorld);const rt=X.distanceTo(at),Mt=B.projectionMatrix.elements,Ct=et.projectionMatrix.elements,Ot=Mt[14]/(Mt[10]-1),Qt=Mt[14]/(Mt[10]+1),j=(Mt[9]+1)/Mt[5],lt=(Mt[9]-1)/Mt[5],C=(Mt[8]-1)/Mt[0],Ut=(Ct[8]+1)/Ct[0],st=Ot*C,bt=Ot*Ut,dt=rt/(-C+Ut),Bt=dt*-C;if(B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Bt),O.translateZ(dt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Mt[10]===-1)O.projectionMatrix.copy(B.projectionMatrix),O.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const St=Ot+dt,b=Qt+dt,M=st-Bt,z=bt+(rt-Bt),J=j*Qt/b*St,nt=lt*Qt/b*St;O.projectionMatrix.makePerspective(M,z,J,nt,St,b),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ft(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let B=O.near,et=O.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(et=g.depthFar)),v.near=R.near=w.near=B,v.far=R.far=w.far=et,(P!==v.near||G!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,G=v.far),w.layers.mask=O.layers.mask|2,R.layers.mask=O.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;const rt=O.parent,Mt=v.cameras;ft(v,rt);for(let Ct=0;Ct<Mt.length;Ct++)ft(Mt[Ct],rt);Mt.length===2?Y(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),gt(O,v,rt)};function gt(O,B,et){et===null?O.matrix.copy(B.matrixWorld):(O.matrix.copy(et.matrixWorld),O.matrix.invert(),O.matrix.multiply(B.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(B.projectionMatrix),O.projectionMatrixInverse.copy(B.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Za*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let Tt=null;function Ht(O,B){if(h=B.getViewerPose(c||a),q=B,h!==null){const et=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let rt=!1;et.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Ct=0;Ct<et.length;Ct++){const Ot=et[Ct];let Qt=null;if(p!==null)Qt=p.getViewport(Ot);else{const lt=d.getViewSubImage(u,Ot);Qt=lt.viewport,Ct===0&&(t.setRenderTargetTextures(y,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(y))}let j=E[Ct];j===void 0&&(j=new Ye,j.layers.enable(Ct),j.viewport=new fe,E[Ct]=j),j.matrix.fromArray(Ot.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ot.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ct===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(j)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Ct=d.getDepthInformation(et[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,r.renderState)}}for(let et=0;et<x.length;et++){const rt=_[et],Mt=x[et];rt!==null&&Mt!==void 0&&Mt.update(rt,B,c||a)}Tt&&Tt(O,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),q=null}const it=new y0;it.setAnimationLoop(Ht),this.setAnimationLoop=function(O){Tt=O},this.dispose=function(){}}}const ni=new qn,W5=new ve;function X5(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,x0(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),q(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,ni.copy(_),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(W5.makeRotationFromEuler(ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function q(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y5(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(q(y),_=h(y),r[y.id]=_,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const T=t.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){const x=d();y.__bindingPointIndex=x;const _=i.createBuffer(),I=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=r[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=_.length;T<w;T++){const R=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,v=R.length;E<v;E++){const P=R[E];if(p(P,T,E,I)===!0){const G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let K=0;K<k.length;K++){const X=k[K],at=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,I){const T=y.value,w=x+"_"+_;if(I[w]===void 0)return typeof T=="number"||typeof T=="boolean"?I[w]=T:I[w]=T.clone(),!0;{const R=I[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return I[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function q(y){const x=y.uniforms;let _=0;const I=16;for(let w=0,R=x.length;w<R;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,P=E.length;v<P;v++){const G=E[v],k=Array.isArray(G.value)?G.value:[G.value];for(let W=0,K=k.length;W<K;W++){const X=k[W],at=g(X),Y=_%I,ft=Y%at.boundary,gt=Y+ft;_+=ft,gt!==0&&I-gt<at.storage&&(_+=I-gt),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=at.storage}}}const T=_%I;return T>0&&(_+=I-T),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Z5{constructor(t={}){const{canvas:e=N2(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const q=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Yn,this.toneMappingExposure=1;const _=this;let I=!1,T=0,w=0,R=null,E=-1,v=null;const P=new fe,G=new fe;let k=null;const W=new ie(0);let K=0,X=e.width,at=e.height,Y=1,ft=null,gt=null;const Tt=new fe(0,0,X,at),Ht=new fe(0,0,X,at);let it=!1;const O=new d1;let B=!1,et=!1;const rt=new ve,Mt=new ve,Ct=new D,Ot=new fe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function lt(){return R===null?Y:1}let C=n;function Ut(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${r1}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),C===null){const N="webgl2";if(C=Ut(N,S),C===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let st,bt,dt,Bt,St,b,M,z,J,nt,$,Rt,mt,Et,te,ot,wt,zt,kt,At,ne,$t,me,U;function qt(){st=new Q4(C),st.init(),$t=new O5(C,st),bt=new Y4(C,st,t,$t),dt=new U5(C,st),bt.reverseDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),Bt=new nc(C),St=new v5,b=new F5(C,st,dt,St,bt,$t,Bt),M=new J4(_),z=new j4(_),J=new cl(C),me=new W4(C,J),nt=new tc(C,J,Bt,me),$=new rc(C,nt,J,Bt),kt=new ic(C,bt,b),ot=new Z4(St),Rt=new x5(_,M,z,st,bt,me,ot),mt=new X5(_,St),Et=new y5,te=new A5(st),zt=new G4(_,M,z,dt,$,p,l),wt=new D5(_,$,bt),U=new Y5(C,Bt,bt,dt),At=new X4(C,st,Bt),ne=new ec(C,st,Bt),Bt.programs=Rt.programs,_.capabilities=bt,_.extensions=st,_.properties=St,_.renderLists=Et,_.shadowMap=wt,_.state=dt,_.info=Bt}qt();const Z=new G5(_,C);this.xr=Z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(X,at,!1))},this.getSize=function(S){return S.set(X,at)},this.setSize=function(S,N,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,at=N,e.width=Math.floor(S*Y),e.height=Math.floor(N*Y),H===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(X*Y,at*Y).floor()},this.setDrawingBufferSize=function(S,N,H){X=S,at=N,Y=H,e.width=Math.floor(S*H),e.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Tt)},this.setViewport=function(S,N,H,V){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,N,H,V),dt.viewport(P.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,N,H,V){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,N,H,V),dt.scissor(G.copy(Ht).multiplyScalar(Y).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){dt.setScissorTest(it=S)},this.setOpaqueSort=function(S){ft=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(S=!0,N=!0,H=!0){let V=0;if(S){let F=!1;if(R!==null){const ht=R.texture.format;F=ht===h1||ht===c1||ht===l1}if(F){const ht=R.texture.type,vt=ht===Dn||ht===fi||ht===ur||ht===ki||ht===a1||ht===o1,Lt=zt.getClearColor(),Dt=zt.getClearAlpha(),Vt=Lt.r,Xt=Lt.g,It=Lt.b;vt?(q[0]=Vt,q[1]=Xt,q[2]=It,q[3]=Dt,C.clearBufferuiv(C.COLOR,0,q)):(g[0]=Vt,g[1]=Xt,g[2]=It,g[3]=Dt,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}N&&(V|=C.DEPTH_BUFFER_BIT),H&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),te.dispose(),St.dispose(),M.dispose(),z.dispose(),$.dispose(),me.dispose(),U.dispose(),Rt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",w1),Z.removeEventListener("sessionend",A1),$n.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=Bt.autoReset,N=wt.enabled,H=wt.autoUpdate,V=wt.needsUpdate,F=wt.type;qt(),Bt.autoReset=S,wt.enabled=N,wt.autoUpdate=H,wt.needsUpdate=V,wt.type=F}function xt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wt(S){const N=S.target;N.removeEventListener("dispose",Wt),ye(N)}function ye(S){Le(S),St.remove(S)}function Le(S){const N=St.get(S).programs;N!==void 0&&(N.forEach(function(H){Rt.releaseProgram(H)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,V,F,ht){N===null&&(N=Qt);const vt=F.isMesh&&F.matrixWorld.determinant()<0,Lt=Y0(S,N,H,V,F);dt.setMaterial(V,vt);let Dt=H.index,Vt=1;if(V.wireframe===!0){if(Dt=nt.getWireframeAttribute(H),Dt===void 0)return;Vt=2}const Xt=H.drawRange,It=H.attributes.position;let se=Xt.start*Vt,qe=(Xt.start+Xt.count)*Vt;ht!==null&&(se=Math.max(se,ht.start*Vt),qe=Math.min(qe,(ht.start+ht.count)*Vt)),Dt!==null?(se=Math.max(se,0),qe=Math.min(qe,Dt.count)):It!=null&&(se=Math.max(se,0),qe=Math.min(qe,It.count));const _e=qe-se;if(_e<0||_e===1/0)return;me.setup(F,V,Lt,H,Dt);let Ne,ae=At;if(Dt!==null&&(Ne=J.get(Dt),ae=ne,ae.setIndex(Ne)),F.isMesh)V.wireframe===!0?(dt.setLineWidth(V.wireframeLinewidth*lt()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(F.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),dt.setLineWidth(Nt*lt()),F.isLineSegments?ae.setMode(C.LINES):F.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else F.isPoints?ae.setMode(C.POINTS):F.isSprite&&ae.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ae.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Nt=F._multiDrawStarts,xn=F._multiDrawCounts,oe=F._multiDrawCount,en=Dt?J.get(Dt).bytesPerElement:1,qi=St.get(V).currentProgram.getUniforms();for(let He=0;He<oe;He++)qi.setValue(C,"_gl_DrawID",He),ae.render(Nt[He]/en,xn[He])}else if(F.isInstancedMesh)ae.renderInstances(se,_e,F.count);else if(H.isInstancedBufferGeometry){const Nt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xn=Math.min(H.instanceCount,Nt);ae.renderInstances(se,_e,xn)}else ae.render(se,_e)};function le(S,N,H){S.transparent===!0&&S.side===An&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,Er(S,N,H),S.side=Zn,S.needsUpdate=!0,Er(S,N,H),S.side=An):Er(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),f=te.get(H),f.init(N),x.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ht=F.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const Lt=ht[vt];le(Lt,H,F),V.add(Lt)}else le(ht,H,F),V.add(ht)}),x.pop(),f=null,V},this.compileAsync=function(S,N,H=null){const V=this.compile(S,N,H);return new Promise(F=>{function ht(){if(V.forEach(function(vt){St.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){F(S);return}setTimeout(ht,10)}st.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let tn=null;function gn(S){tn&&tn(S)}function w1(){$n.stop()}function A1(){$n.start()}const $n=new y0;$n.setAnimationLoop(gn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){tn=S,Z.setAnimationLoop(S),S===null?$n.stop():$n.start()},Z.addEventListener("sessionstart",w1),Z.addEventListener("sessionend",A1),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,N,R),f=te.get(S,x.length),f.init(N),x.push(f),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),O.setFromProjectionMatrix(Mt),et=this.localClippingEnabled,B=ot.init(this.clippingPlanes,et),m=Et.get(S,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ht=_.xr.getDepthSensingMesh();ht!==null&&vs(ht,N,-1/0,_.sortObjects)}vs(S,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ft,gt),j=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,j&&zt.addToRenderList(m,S),this.info.render.frame++,B===!0&&ot.beginShadows();const H=f.state.shadowsArray;wt.render(H,S,N),B===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ht=N.cameras;if(F.length>0)for(let vt=0,Lt=ht.length;vt<Lt;vt++){const Dt=ht[vt];R1(V,F,S,Dt)}j&&zt.render(S);for(let vt=0,Lt=ht.length;vt<Lt;vt++){const Dt=ht[vt];C1(m,S,Dt,Dt.viewport)}}else F.length>0&&R1(V,F,S,N),j&&zt.render(S),C1(m,S,N);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(_,S,N),me.resetDefaultState(),E=-1,v=null,x.pop(),x.length>0?(f=x[x.length-1],B===!0&&ot.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vs(S,N,H,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||O.intersectsSprite(S)){V&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);const vt=$.update(S),Lt=S.material;Lt.visible&&m.push(S,vt,Lt,H,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||O.intersectsObject(S))){const vt=$.update(S),Lt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ot.copy(vt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){const Dt=vt.groups;for(let Vt=0,Xt=Dt.length;Vt<Xt;Vt++){const It=Dt[Vt],se=Lt[It.materialIndex];se&&se.visible&&m.push(S,vt,se,H,Ot.z,It)}}else Lt.visible&&m.push(S,vt,Lt,H,Ot.z,null)}}const ht=S.children;for(let vt=0,Lt=ht.length;vt<Lt;vt++)vs(ht[vt],N,H,V)}function C1(S,N,H,V){const F=S.opaque,ht=S.transmissive,vt=S.transparent;f.setupLightsView(H),B===!0&&ot.setGlobalState(_.clippingPlanes,H),V&&dt.viewport(P.copy(V)),F.length>0&&Sr(F,N,H),ht.length>0&&Sr(ht,N,H),vt.length>0&&Sr(vt,N,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function R1(S,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new di(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?gr:Dn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ht=f.state.transmissionRenderTarget[V.id],vt=V.viewport||P;ht.setSize(vt.z,vt.w);const Lt=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(W),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),j&&zt.render(H);const Dt=_.toneMapping;_.toneMapping=Yn;const Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),B===!0&&ot.setGlobalState(_.clippingPlanes,V),Sr(S,H,V),b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht),st.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,se=N.length;It<se;It++){const qe=N[It],_e=qe.object,Ne=qe.geometry,ae=qe.material,Nt=qe.group;if(ae.side===An&&_e.layers.test(V.layers)){const xn=ae.side;ae.side=Be,ae.needsUpdate=!0,P1(_e,H,V,Ne,ae,Nt),ae.side=xn,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(b.updateMultisampleRenderTarget(ht),b.updateRenderTargetMipmap(ht))}_.setRenderTarget(Lt),_.setClearColor(W,K),Vt!==void 0&&(V.viewport=Vt),_.toneMapping=Dt}function Sr(S,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ht=S.length;F<ht;F++){const vt=S[F],Lt=vt.object,Dt=vt.geometry,Vt=V===null?vt.material:V,Xt=vt.group;Lt.layers.test(H.layers)&&P1(Lt,N,H,Dt,Vt,Xt)}}function P1(S,N,H,V,F,ht){S.onBeforeRender(_,N,H,V,F,ht),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,N,H,V,S,ht),F.transparent===!0&&F.side===An&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,_.renderBufferDirect(H,N,V,F,S,ht),F.side=Zn,F.needsUpdate=!0,_.renderBufferDirect(H,N,V,F,S,ht),F.side=An):_.renderBufferDirect(H,N,V,F,S,ht),S.onAfterRender(_,N,H,V,F,ht)}function Er(S,N,H){N.isScene!==!0&&(N=Qt);const V=St.get(S),F=f.state.lights,ht=f.state.shadowsArray,vt=F.state.version,Lt=Rt.getParameters(S,F.state,ht,N,H),Dt=Rt.getProgramCacheKey(Lt);let Vt=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",Wt),Vt=new Map,V.programs=Vt);let Xt=Vt.get(Dt);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===vt)return D1(S,Lt),Xt}else Lt.uniforms=Rt.getUniforms(S),S.onBeforeCompile(Lt,_),Xt=Rt.acquireProgram(Lt,Dt),Vt.set(Dt,Xt),V.uniforms=Lt.uniforms;const It=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=ot.uniform),D1(S,Lt),V.needsLights=J0(S),V.lightsStateVersion=vt,V.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Xt,V.uniformsList=null,Xt}function L1(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=es.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function D1(S,N){const H=St.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Y0(S,N,H,V,F){N.isScene!==!0&&(N=Qt),b.resetTextureUnits();const ht=N.fog,vt=V.isMeshStandardMaterial?N.environment:null,Lt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xi,Dt=(V.isMeshStandardMaterial?z:M).get(V.envMap||vt),Vt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,qe=!!H.morphAttributes.color;let _e=Yn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=_.toneMapping);const Ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Ne!==void 0?Ne.length:0,Nt=St.get(V),xn=f.state.lights;if(B===!0&&(et===!0||S!==v)){const Je=S===v&&V.id===E;ot.setState(V,S,Je)}let oe=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==xn.state.version||Nt.outputColorSpace!==Lt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==Dt||V.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==Xt||Nt.morphTargets!==It||Nt.morphNormals!==se||Nt.morphColors!==qe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Nt.__version=V.version);let en=Nt.currentProgram;oe===!0&&(en=Er(V,N,F));let qi=!1,He=!1,$i=!1;const ge=en.getUniforms(),cn=Nt.uniforms;if(dt.useProgram(en.program)&&(qi=!0,He=!0,$i=!0),V.id!==E&&(E=V.id,He=!0),qi||v!==S){dt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),O2(rt),B2(rt),ge.setValue(C,"projectionMatrix",rt)):ge.setValue(C,"projectionMatrix",S.projectionMatrix),ge.setValue(C,"viewMatrix",S.matrixWorldInverse);const In=ge.map.cameraPosition;In!==void 0&&In.setValue(C,Ct.setFromMatrixPosition(S.matrixWorld)),bt.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,He=!0,$i=!0)}if(F.isSkinnedMesh){ge.setOptional(C,F,"bindMatrix"),ge.setOptional(C,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ge.setValue(C,"boneTexture",Je.boneTexture,b))}F.isBatchedMesh&&(ge.setOptional(C,F,"batchingTexture"),ge.setValue(C,"batchingTexture",F._matricesTexture,b),ge.setOptional(C,F,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",F._indirectTexture,b),ge.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",F._colorsTexture,b));const Ki=H.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&kt.update(F,H,en),(He||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ge.setValue(C,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cn.envMap.value=Dt,cn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),He&&(ge.setValue(C,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Z0(cn,$i),ht&&V.fog===!0&&mt.refreshFogUniforms(cn,ht),mt.refreshMaterialUniforms(cn,V,Y,at,f.state.transmissionRenderTarget[S.id]),es.upload(C,L1(Nt),cn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(es.upload(C,L1(Nt),cn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(C,"center",F.center),ge.setValue(C,"modelViewMatrix",F.modelViewMatrix),ge.setValue(C,"normalMatrix",F.normalMatrix),ge.setValue(C,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Je=V.uniformsGroups;for(let In=0,Un=Je.length;In<Un;In++){const I1=Je[In];U.update(I1,en),U.bind(I1,en)}}return en}function Z0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function J0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,N,H){St.get(S.texture).__webglTexture=N,St.get(S.depthTexture).__webglTexture=H;const V=St.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const H=St.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){R=S,T=N,w=H;let V=!0,F=null,ht=!1,vt=!1;if(S){const Dt=St.get(S);if(Dt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Dt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(Dt.__hasExternalTextures)b.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const It=S.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&St.has(It)&&(S.width!==It.image.width||S.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(vt=!0);const Xt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?F=Xt[N][H]:F=Xt[N],ht=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?F=St.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?F=Xt[H]:F=Xt,P.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else P.copy(Tt).multiplyScalar(Y).floor(),G.copy(Ht).multiplyScalar(Y).floor(),k=it;if(dt.bindFramebuffer(C.FRAMEBUFFER,F)&&V&&dt.drawBuffers(S,F),dt.viewport(P),dt.scissor(G),dt.setScissorTest(k),ht){const Dt=St.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,H)}else if(vt){const Dt=St.get(S.texture),Vt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,H||0,Vt)}E=-1},this.readRenderTargetPixels=function(S,N,H,V,F,ht,vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){dt.bindFramebuffer(C.FRAMEBUFFER,Lt);try{const Dt=S.texture,Vt=Dt.format,Xt=Dt.type;if(!bt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F&&C.readPixels(N,H,V,F,$t.convert(Vt),$t.convert(Xt),ht)}finally{const Dt=R!==null?St.get(R).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,V,F,ht,vt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Lt=Lt[vt]),Lt){const Dt=S.texture,Vt=Dt.format,Xt=Dt.type;if(!bt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F){dt.bindFramebuffer(C.FRAMEBUFFER,Lt);const It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,ht.byteLength,C.STREAM_READ),C.readPixels(N,H,V,F,$t.convert(Vt),$t.convert(Xt),0);const se=R!==null?St.get(R).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,se);const qe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await F2(C,qe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ht),C.deleteBuffer(It),C.deleteSync(qe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,H=0){S.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(S.image.width*V),ht=Math.floor(S.image.height*V),vt=N!==null?N.x:0,Lt=N!==null?N.y:0;b.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,vt,Lt,F,ht),dt.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,V=null,F=0){S.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let ht,vt,Lt,Dt,Vt,Xt,It,se,qe;const _e=S.isCompressedTexture?S.mipmaps[F]:S.image;H!==null?(ht=H.max.x-H.min.x,vt=H.max.y-H.min.y,Lt=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Vt=H.min.y,Xt=H.isBox3?H.min.z:0):(ht=_e.width,vt=_e.height,Lt=_e.depth||1,Dt=0,Vt=0,Xt=0),V!==null?(It=V.x,se=V.y,qe=V.z):(It=0,se=0,qe=0);const Ne=$t.convert(N.format),ae=$t.convert(N.type);let Nt;N.isData3DTexture?(b.setTexture3D(N,0),Nt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Nt=C.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Nt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const xn=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),en=C.getParameter(C.UNPACK_SKIP_PIXELS),qi=C.getParameter(C.UNPACK_SKIP_ROWS),He=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,_e.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_e.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xt);const $i=S.isDataArrayTexture||S.isData3DTexture,ge=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const cn=St.get(S),Ki=St.get(N),Je=St.get(cn.__renderTarget),In=St.get(Ki.__renderTarget);dt.bindFramebuffer(C.READ_FRAMEBUFFER,Je.__webglFramebuffer),dt.bindFramebuffer(C.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Un=0;Un<Lt;Un++)$i&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(S).__webglTexture,F,Xt+Un),S.isDepthTexture?(ge&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(N).__webglTexture,F,qe+Un),C.blitFramebuffer(Dt,Vt,ht,vt,It,se,ht,vt,C.DEPTH_BUFFER_BIT,C.NEAREST)):ge?C.copyTexSubImage3D(Nt,F,It,se,qe+Un,Dt,Vt,ht,vt):C.copyTexSubImage2D(Nt,F,It,se,qe+Un,Dt,Vt,ht,vt);dt.bindFramebuffer(C.READ_FRAMEBUFFER,null),dt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ge?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Nt,F,It,se,qe,ht,vt,Lt,Ne,ae,_e.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,F,It,se,qe,ht,vt,Lt,Ne,_e.data):C.texSubImage3D(Nt,F,It,se,qe,ht,vt,Lt,Ne,ae,_e):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,It,se,ht,vt,Ne,ae,_e.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,It,se,_e.width,_e.height,Ne,_e.data):C.texSubImage2D(C.TEXTURE_2D,F,It,se,ht,vt,Ne,ae,_e);C.pixelStorei(C.UNPACK_ROW_LENGTH,xn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,en),C.pixelStorei(C.UNPACK_SKIP_ROWS,qi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He),F===0&&N.generateMipmaps&&C.generateMipmap(Nt),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H=null,V=null,F=0){return S.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,H,V,F)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,dt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class J5 extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,p=(a-h)/u;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ut:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,l=new ve;for(let p=0;p<=t;p++){const q=p/t;r[p]=this.getTangentAt(q,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const q=Math.acos(Re(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,q))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Re(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let q=1;q<=t;q++)s[q].applyMatrix4(l.makeRotationAxis(r[q],p*q)),a[q].crossVectors(r[q],s[q])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class m1 extends _n{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $5 extends m1{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function q1(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Xr=new D,Ks=new q1,js=new q1,Qs=new q1;class C0 extends _n{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Xr.subVectors(r[0],r[1]).add(r[0]),c=Xr);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Xr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let q=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);g<1e-4&&(g=1),q<1e-4&&(q=g),m<1e-4&&(m=g),Ks.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,q,g,m),js.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,q,g,m),Qs.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,q,g,m)}else this.curveType==="catmullrom"&&(Ks.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),js.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qs.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ks.calc(l),js.calc(l),Qs.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Io(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function K5(i,t){const e=1-i;return e*e*t}function j5(i,t){return 2*(1-i)*i*t}function Q5(i,t){return i*i*t}function cr(i,t,e,n){return K5(i,t)+j5(i,e)+Q5(i,n)}function t6(i,t){const e=1-i;return e*e*e*t}function e6(i,t){const e=1-i;return 3*e*e*i*t}function n6(i,t){return 3*(1-i)*i*i*t}function i6(i,t){return i*i*i*t}function hr(i,t,e,n,r){return t6(i,t)+e6(i,e)+n6(i,n)+i6(i,r)}class R0 extends _n{constructor(t=new ut,e=new ut,n=new ut,r=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,r.x,s.x,a.x,o.x),hr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r6 extends _n{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,r.x,s.x,a.x,o.x),hr(t,r.y,s.y,a.y,o.y),hr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class P0 extends _n{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s6 extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class L0 extends _n{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(cr(t,r.x,s.x,a.x),cr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D0 extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(cr(t,r.x,s.x,a.x),cr(t,r.y,s.y,a.y),cr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Io(o,l.x,c.x,h.x,d.x),Io(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ut().fromArray(r))}return this}}var as=Object.freeze({__proto__:null,ArcCurve:$5,CatmullRomCurve3:C0,CubicBezierCurve:R0,CubicBezierCurve3:r6,EllipseCurve:m1,LineCurve:P0,LineCurve3:s6,QuadraticBezierCurve:L0,QuadraticBezierCurve3:D0,SplineCurve:I0});class a6 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new as[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new as[r.type]().fromJSON(r))}return this}}class os extends a6{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new P0(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new L0(this.currentPoint.clone(),new ut(t,e),new ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new R0(this.currentPoint.clone(),new ut(t,e),new ut(n,r),new ut(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new I0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new m1(t,e,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _1 extends ke{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,d=new D,u=new ut,p=new D,q=new D,g=new D;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,q.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(q)}for(let y=0;y<=e;y++){const x=n+y*h*r,_=Math.sin(x),I=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*_,d.y=t[T].y,d.z=t[T].x*I,a.push(d.x,d.y,d.z),u.x=y/e,u.y=T/(t.length-1),o.push(u.x,u.y);const w=l[3*T+0]*_,R=l[3*T+1],E=l[3*T+0]*I;c.push(w,R,E)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,I=_,T=_+t.length,w=_+t.length+1,R=_+1;s.push(I,T,R),s.push(w,R,T)}this.setIndex(s),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _1(t.points,t.segments,t.phiStart,t.phiLength)}}class fr extends _1{constructor(t=1,e=1,n=4,r=8){const s=new os;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new fr(t.radius,t.length,t.capSegments,t.radialSegments)}}class qs extends ke{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let q=0;const g=[],m=n/2;let f=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2));function y(){const _=new D,I=new D;let T=0;const w=(e-t)/n;for(let R=0;R<=s;R++){const E=[],v=R/s,P=v*(e-t)+t;for(let G=0;G<=r;G++){const k=G/r,W=k*l+o,K=Math.sin(W),X=Math.cos(W);I.x=P*K,I.y=-v*n+m,I.z=P*X,d.push(I.x,I.y,I.z),_.set(K,w,X).normalize(),u.push(_.x,_.y,_.z),p.push(k,1-v),E.push(q++)}g.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const v=g[E][R],P=g[E+1][R],G=g[E+1][R+1],k=g[E][R+1];(t>0||E!==0)&&(h.push(v,P,k),T+=3),(e>0||E!==s-1)&&(h.push(P,G,k),T+=3)}c.addGroup(f,T,0),f+=T}function x(_){const I=q,T=new ut,w=new D;let R=0;const E=_===!0?t:e,v=_===!0?1:-1;for(let G=1;G<=r;G++)d.push(0,m*v,0),u.push(0,v,0),p.push(.5,.5),q++;const P=q;for(let G=0;G<=r;G++){const W=G/r*l+o,K=Math.cos(W),X=Math.sin(W);w.x=E*X,w.y=m*v,w.z=E*K,d.push(w.x,w.y,w.z),u.push(0,v,0),T.x=K*.5+.5,T.y=X*.5*v+.5,p.push(T.x,T.y),q++}for(let G=0;G<r;G++){const k=I+G,W=P+G;_===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}c.addGroup(f,R,_===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dr extends qs{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new dr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class g1 extends ke{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,_=new D,I=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],_),p(e[T+2],I),l(x,_,I,y)}function l(y,x,_,I){const T=I+1,w=[];for(let R=0;R<=T;R++){w[R]=[];const E=y.clone().lerp(_,R/T),v=x.clone().lerp(_,R/T),P=T-R;for(let G=0;G<=P;G++)G===0&&R===T?w[R][G]=E:w[R][G]=E.clone().lerp(v,G/P)}for(let R=0;R<T;R++)for(let E=0;E<2*(T-R)-1;E++){const v=Math.floor(E/2);E%2===0?(u(w[R][v+1]),u(w[R+1][v]),u(w[R][v])):(u(w[R][v+1]),u(w[R+1][v+1]),u(w[R+1][v]))}}function c(y){const x=new D;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function h(){const y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;a.push(_,1-I)}q(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],I=a[y+4],T=Math.max(x,_,I),w=Math.min(x,_,I);T>.9&&w<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function q(){const y=new D,x=new D,_=new D,I=new D,T=new ut,w=new ut,R=new ut;for(let E=0,v=0;E<s.length;E+=9,v+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),T.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),I.copy(y).add(x).add(_).divideScalar(3);const P=m(I);g(T,v+0,y,P),g(w,v+2,x,P),g(R,v+4,_,P)}}function g(y,x,_,I){I<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new g1(t.vertices,t.indices,t.radius,t.details)}}class ns extends os{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new os().fromJSON(r))}return this}}const o6={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=U0(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=f6(i,t,s,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let q=e;q<r;q+=e)d=i[q],u=i[q+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return pr(s,a,e,o,l,p,0),a}};function U0(i,t,e,n,r){let s,a;if(r===S6(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Uo(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Uo(s,i[s],i[s+1],a);return a&&_s(a,a.next)&&(qr(a),a=a.next),a}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_s(e,e.next)||Me(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&_6(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?c6(i,n,r,s):l6(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=h6(pi(i),t,e),pr(i,t,e,n,r,s,2)):a===2&&u6(i,t,e,n,r,s):pr(pi(i),t,e,n,r,s,1);break}}}function l6(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let q=n.next;for(;q!==t;){if(q.x>=h&&q.x<=u&&q.y>=d&&q.y<=p&&Li(r,o,s,l,a,c,q.x,q.y)&&Me(q.prev,q,q.next)>=0)return!1;q=q.next}return!0}function c6(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Me(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,q=h<d?h<u?h:u:d<u?d:u,g=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=$a(p,q,t,e,n),y=$a(g,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=f&&_&&_.z<=y;){if(x.x>=p&&x.x<=g&&x.y>=q&&x.y<=m&&x!==r&&x!==a&&Li(o,h,l,d,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=g&&_.y>=q&&_.y<=m&&_!==r&&_!==a&&Li(o,h,l,d,c,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=g&&x.y>=q&&x.y<=m&&x!==r&&x!==a&&Li(o,h,l,d,c,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=g&&_.y>=q&&_.y<=m&&_!==r&&_!==a&&Li(o,h,l,d,c,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function h6(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!_s(r,s)&&N0(r,n,n.next,s)&&mr(r,s)&&mr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),qr(n),qr(n.next),n=i=s),n=n.next}while(n!==i);return pi(n)}function u6(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v6(a,o)){let l=F0(a,o);a=pi(a,a.next),l=pi(l,l.next),pr(a,t,e,n,r,s,0),pr(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function f6(i,t,e,n){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=U0(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(x6(c));for(r.sort(d6),s=0;s<r.length;s++)e=p6(r[s],e);return e}function d6(i,t){return i.x-t.x}function p6(i,t){const e=m6(i,t);if(!e)return t;const n=F0(e,i);return pi(n,n.next),pi(e,e.next)}function m6(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,r=e.x<e.next.x?e:e.next,u===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,d;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Li(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(s-e.x),mr(e,i)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&q6(r,e)))&&(r=e,h=d)),e=e.next;while(e!==o);return r}function q6(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function _6(i,t,e,n){let r=i;do r.z===0&&(r.z=$a(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,g6(r)}function g6(i){let t,e,n,r,s,a,o,l,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function $a(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function x6(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Li(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function v6(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!M6(i,t)&&(mr(i,t)&&mr(t,i)&&y6(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||_s(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _s(i,t){return i.x===t.x&&i.y===t.y}function N0(i,t,e,n){const r=Zr(Me(i,t,e)),s=Zr(Me(i,t,n)),a=Zr(Me(e,n,i)),o=Zr(Me(e,n,t));return!!(r!==s&&a!==o||r===0&&Yr(i,e,t)||s===0&&Yr(i,n,t)||a===0&&Yr(e,i,n)||o===0&&Yr(e,t,n))}function Yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function M6(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&N0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mr(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function y6(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function F0(i,t){const e=new Ka(i.i,i.x,i.y),n=new Ka(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Uo(i,t,e,n){const r=new Ka(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S6(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Ni{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ni.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];No(t),Fo(n,t);let a=t.length;e.forEach(No);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Fo(n,e[l]);const o=o6.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function No(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class x1 extends ke{constructor(t=new ns([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,q=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:E6;let x,_=!1,I,T,w,R;f&&(x=f.getSpacedPoints(h),_=!0,u=!1,I=f.computeFrenetFrames(h,!1),T=new D,w=new D,R=new D),u||(m=0,p=0,q=0,g=0);const E=o.extractPoints(c);let v=E.shape;const P=E.holes;if(!Ni.isClockWise(v)){v=v.reverse();for(let j=0,lt=P.length;j<lt;j++){const C=P[j];Ni.isClockWise(C)&&(P[j]=C.reverse())}}const k=Ni.triangulateShape(v,P),W=v;for(let j=0,lt=P.length;j<lt;j++){const C=P[j];v=v.concat(C)}function K(j,lt,C){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(lt,C)}const X=v.length,at=k.length;function Y(j,lt,C){let Ut,st,bt;const dt=j.x-lt.x,Bt=j.y-lt.y,St=C.x-j.x,b=C.y-j.y,M=dt*dt+Bt*Bt,z=dt*b-Bt*St;if(Math.abs(z)>Number.EPSILON){const J=Math.sqrt(M),nt=Math.sqrt(St*St+b*b),$=lt.x-Bt/J,Rt=lt.y+dt/J,mt=C.x-b/nt,Et=C.y+St/nt,te=((mt-$)*b-(Et-Rt)*St)/(dt*b-Bt*St);Ut=$+dt*te-j.x,st=Rt+Bt*te-j.y;const ot=Ut*Ut+st*st;if(ot<=2)return new ut(Ut,st);bt=Math.sqrt(ot/2)}else{let J=!1;dt>Number.EPSILON?St>Number.EPSILON&&(J=!0):dt<-Number.EPSILON?St<-Number.EPSILON&&(J=!0):Math.sign(Bt)===Math.sign(b)&&(J=!0),J?(Ut=-Bt,st=dt,bt=Math.sqrt(M)):(Ut=dt,st=Bt,bt=Math.sqrt(M/2))}return new ut(Ut/bt,st/bt)}const ft=[];for(let j=0,lt=W.length,C=lt-1,Ut=j+1;j<lt;j++,C++,Ut++)C===lt&&(C=0),Ut===lt&&(Ut=0),ft[j]=Y(W[j],W[C],W[Ut]);const gt=[];let Tt,Ht=ft.concat();for(let j=0,lt=P.length;j<lt;j++){const C=P[j];Tt=[];for(let Ut=0,st=C.length,bt=st-1,dt=Ut+1;Ut<st;Ut++,bt++,dt++)bt===st&&(bt=0),dt===st&&(dt=0),Tt[Ut]=Y(C[Ut],C[bt],C[dt]);gt.push(Tt),Ht=Ht.concat(Tt)}for(let j=0;j<m;j++){const lt=j/m,C=p*Math.cos(lt*Math.PI/2),Ut=q*Math.sin(lt*Math.PI/2)+g;for(let st=0,bt=W.length;st<bt;st++){const dt=K(W[st],ft[st],Ut);rt(dt.x,dt.y,-C)}for(let st=0,bt=P.length;st<bt;st++){const dt=P[st];Tt=gt[st];for(let Bt=0,St=dt.length;Bt<St;Bt++){const b=K(dt[Bt],Tt[Bt],Ut);rt(b.x,b.y,-C)}}}const it=q+g;for(let j=0;j<X;j++){const lt=u?K(v[j],Ht[j],it):v[j];_?(w.copy(I.normals[0]).multiplyScalar(lt.x),T.copy(I.binormals[0]).multiplyScalar(lt.y),R.copy(x[0]).add(w).add(T),rt(R.x,R.y,R.z)):rt(lt.x,lt.y,0)}for(let j=1;j<=h;j++)for(let lt=0;lt<X;lt++){const C=u?K(v[lt],Ht[lt],it):v[lt];_?(w.copy(I.normals[j]).multiplyScalar(C.x),T.copy(I.binormals[j]).multiplyScalar(C.y),R.copy(x[j]).add(w).add(T),rt(R.x,R.y,R.z)):rt(C.x,C.y,d/h*j)}for(let j=m-1;j>=0;j--){const lt=j/m,C=p*Math.cos(lt*Math.PI/2),Ut=q*Math.sin(lt*Math.PI/2)+g;for(let st=0,bt=W.length;st<bt;st++){const dt=K(W[st],ft[st],Ut);rt(dt.x,dt.y,d+C)}for(let st=0,bt=P.length;st<bt;st++){const dt=P[st];Tt=gt[st];for(let Bt=0,St=dt.length;Bt<St;Bt++){const b=K(dt[Bt],Tt[Bt],Ut);_?rt(b.x,b.y+x[h-1].y,x[h-1].x+C):rt(b.x,b.y,d+C)}}}O(),B();function O(){const j=r.length/3;if(u){let lt=0,C=X*lt;for(let Ut=0;Ut<at;Ut++){const st=k[Ut];Mt(st[2]+C,st[1]+C,st[0]+C)}lt=h+m*2,C=X*lt;for(let Ut=0;Ut<at;Ut++){const st=k[Ut];Mt(st[0]+C,st[1]+C,st[2]+C)}}else{for(let lt=0;lt<at;lt++){const C=k[lt];Mt(C[2],C[1],C[0])}for(let lt=0;lt<at;lt++){const C=k[lt];Mt(C[0]+X*h,C[1]+X*h,C[2]+X*h)}}n.addGroup(j,r.length/3-j,0)}function B(){const j=r.length/3;let lt=0;et(W,lt),lt+=W.length;for(let C=0,Ut=P.length;C<Ut;C++){const st=P[C];et(st,lt),lt+=st.length}n.addGroup(j,r.length/3-j,1)}function et(j,lt){let C=j.length;for(;--C>=0;){const Ut=C;let st=C-1;st<0&&(st=j.length-1);for(let bt=0,dt=h+m*2;bt<dt;bt++){const Bt=X*bt,St=X*(bt+1),b=lt+Ut+Bt,M=lt+st+Bt,z=lt+st+St,J=lt+Ut+St;Ct(b,M,z,J)}}}function rt(j,lt,C){l.push(j),l.push(lt),l.push(C)}function Mt(j,lt,C){Ot(j),Ot(lt),Ot(C);const Ut=r.length/3,st=y.generateTopUV(n,r,Ut-3,Ut-2,Ut-1);Qt(st[0]),Qt(st[1]),Qt(st[2])}function Ct(j,lt,C,Ut){Ot(j),Ot(lt),Ot(Ut),Ot(lt),Ot(C),Ot(Ut);const st=r.length/3,bt=y.generateSideWallUV(n,r,st-6,st-3,st-2,st-1);Qt(bt[0]),Qt(bt[1]),Qt(bt[3]),Qt(bt[1]),Qt(bt[2]),Qt(bt[3])}function Ot(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Qt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return b6(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new as[r.type]().fromJSON(r)),new x1(n,t.options)}}const E6={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ut(s,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],p=t[r*3+1],q=t[r*3+2],g=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-d),new ut(u,1-q),new ut(g,1-f)]:[new ut(o,1-l),new ut(h,1-d),new ut(p,1-q),new ut(m,1-f)]}};function b6(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ls extends g1{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ls(t.radius,t.detail)}}class hi extends ke{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,p=[],q=[],g=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const T=I/e;d.x=-t*Math.cos(r+T*s)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(r+T*s)*Math.sin(a+x*o),q.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(T+_,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=h[f][y+1],_=h[f][y],I=h[f+1][y],T=h[f+1][y+1];(f!==0||a>0)&&p.push(x,_,T),(f!==n-1||l<Math.PI)&&p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new pe(q,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends ke{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let q=0;q<=r;q++){const g=q/r*s,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(q/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let q=1;q<=r;q++){const g=(r+1)*p+q-1,m=(r+1)*(p-1)+q-1,f=(r+1)*(p-1)+q,y=(r+1)*p+q;a.push(g,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class v1 extends ke{constructor(t=new D0(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new ut;let h=new D;const d=[],u=[],p=[],q=[];g(),this.setIndex(q),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2));function g(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),y(),f()}function m(x){h=t.getPointAt(x/e,h);const _=a.normals[x],I=a.binormals[x];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,R=Math.sin(w),E=-Math.cos(w);l.x=E*_.x+R*I.x,l.y=E*_.y+R*I.y,l.z=E*_.z+R*I.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=e;x++)for(let _=1;_<=r;_++){const I=(r+1)*(x-1)+(_-1),T=(r+1)*x+(_-1),w=(r+1)*x+_,R=(r+1)*(x-1)+_;q.push(I,T,R),q.push(T,w,R)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=r;_++)c.x=x/e,c.y=_/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new v1(new as[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Cn extends Mr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Oo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class T6{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],q=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return q}return null}}}const w6=new T6;class M1{constructor(t){this.manager=t!==void 0?t:w6,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}M1.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class A6 extends Error{constructor(t,e){super(t),this.response=e}}class C6 extends M1{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Oo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(bn[t]!==void 0){bn[t].push({onLoad:e,onProgress:n,onError:r});return}bn[t]=[],bn[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=bn[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,q=p!==0;let g=0;const m=new ReadableStream({start(f){y();function y(){d.read().then(({done:x,value:_})=>{if(x)f.close();else{g+=_.byteLength;const I=new ProgressEvent("progress",{lengthComputable:q,loaded:g,total:p});for(let T=0,w=h.length;T<w;T++){const R=h[T];R.onProgress&&R.onProgress(I)}f.enqueue(_),y()}},x=>{f.error(x)})}}});return new Response(m)}else throw new A6(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(q=>p.decode(q))}}}).then(c=>{Oo.add(t,c);const h=bn[t];delete bn[t];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=bn[t];if(h===void 0)throw this.manager.itemError(t),c;delete bn[t];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class y1 extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class R6 extends y1{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new ve,Bo=new D,zo=new D;class O0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new d1,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bo),zo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zo),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ko=new ve,ir=new D,ea=new D;class P6 extends O0{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),ea.copy(n.position),ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ea),n.updateMatrixWorld(),r.makeTranslation(-ir.x,-ir.y,-ir.z),ko.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko)}}class L6 extends y1{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new P6}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class D6 extends O0{constructor(){super(new S0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I6 extends y1{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new D6}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U6{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ho();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ho(){return performance.now()}const Vo=new ve;class N6{constructor(t,e,n=0,r=1/0){this.ray=new p0(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new f1,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vo),this}intersectObject(t,e=!0,n=[]){return ja(t,this,n,e),n.sort(Go),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ja(t[r],this,n,e);return n.sort(Go),n}}function Go(i,t){return i.distance-t.distance}function ja(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ja(s[a],t,e,!0)}}class F6{constructor(){this.type="ShapePath",this.color=new ie,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new os,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,a){return this.currentPath.bezierCurveTo(t,e,n,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){const y=[];for(let x=0,_=f.length;x<_;x++){const I=f[x],T=new ns;T.curves=I.curves,y.push(T)}return y}function n(f,y){const x=y.length;let _=!1;for(let I=x-1,T=0;T<x;I=T++){let w=y[I],R=y[T],E=R.x-w.x,v=R.y-w.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(w=y[T],E=-E,R=y[I],v=-v),f.y<w.y||f.y>R.y)continue;if(f.y===w.y){if(f.x===w.x)return!0}else{const P=v*(f.x-w.x)-E*(f.y-w.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(f.y!==w.y)continue;if(R.x<=f.x&&f.x<=w.x||w.x<=f.x&&f.x<=R.x)return!0}}return _}const r=Ni.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new ns,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=t?!h:h;const d=[],u=[];let p=[],q=0,g;u[q]=void 0,p[q]=[];for(let f=0,y=s.length;f<y;f++)o=s[f],g=o.getPoints(),a=r(g),a=t?!a:a,a?(!h&&u[q]&&q++,u[q]={s:new ns,p:g},u[q].s.curves=o.curves,h&&q++,p[q]=[]):p[q].push({h:o,p:g[0]});if(!u[0])return e(s);if(u.length>1){let f=!1,y=0;for(let x=0,_=u.length;x<_;x++)d[x]=[];for(let x=0,_=u.length;x<_;x++){const I=p[x];for(let T=0;T<I.length;T++){const w=I[T];let R=!0;for(let E=0;E<u.length;E++)n(w.p,u[E].p)&&(x!==E&&y++,R?(R=!1,d[E].push(w)):f=!0);R&&d[x].push(w)}}y>0&&f===!1&&(p=d)}let m;for(let f=0,y=u.length;f<y;f++){l=u[f].s,c.push(l),m=p[f];for(let x=0,_=m.length;x<_;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:r1}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=r1);const rr=new D;function Ke(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;rr.copy(t),rr[n]=0,rr.normalize();const c=.5*a/(a+o),h=1-rr.angleTo(i)/l;return Math.sign(rr[e])===1?h*c:o/(a+o)+c+c*(1-h)}class O6 extends mi{constructor(t=1,e=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,q=new D,g=.5/r;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:q.set(1,0,0),u[f+0]=Ke(q,l,"z","y",s,n),u[f+1]=1-Ke(q,l,"y","z",s,e);break;case 1:q.set(-1,0,0),u[f+0]=1-Ke(q,l,"z","y",s,n),u[f+1]=1-Ke(q,l,"y","z",s,e);break;case 2:q.set(0,1,0),u[f+0]=1-Ke(q,l,"x","z",s,t),u[f+1]=Ke(q,l,"z","x",s,n);break;case 3:q.set(0,-1,0),u[f+0]=1-Ke(q,l,"x","z",s,t),u[f+1]=1-Ke(q,l,"z","x",s,n);break;case 4:q.set(0,0,1),u[f+0]=1-Ke(q,l,"x","y",s,t),u[f+1]=1-Ke(q,l,"y","x",s,e);break;case 5:q.set(0,0,-1),u[f+0]=Ke(q,l,"x","y",s,t),u[f+1]=1-Ke(q,l,"y","x",s,e);break}}}class B6 extends M1{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new C6(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=s.parse(JSON.parse(o));e&&e(l)},n,r)}parse(t){return new z6(t)}}class z6{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=k6(t,e,this.data);for(let s=0,a=r.length;s<a;s++)n.push(...r[s].toShapes());return n}}function k6(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const d=H6(h,r,o,l,e);o+=d.offsetX,a.push(d.path)}}return a}function H6(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const a=new F6;let o,l,c,h,d,u,p,q;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=g.length;m<f;)switch(g[m++]){case"m":o=g[m++]*t+e,l=g[m++]*t+n,a.moveTo(o,l);break;case"l":o=g[m++]*t+e,l=g[m++]*t+n,a.lineTo(o,l);break;case"q":c=g[m++]*t+e,h=g[m++]*t+n,d=g[m++]*t+e,u=g[m++]*t+n,a.quadraticCurveTo(d,u,c,h);break;case"b":c=g[m++]*t+e,h=g[m++]*t+n,d=g[m++]*t+e,u=g[m++]*t+n,p=g[m++]*t+e,q=g[m++]*t+n,a.bezierCurveTo(d,u,p,q,c,h);break}}return{offsetX:s.ha*t,path:a}}const V6=JSON.parse('{"0":{"x_min":43,"x_max":722,"ha":765,"o":"m 722 495 q 703 281 722 375 q 643 121 684 186 q 538 20 602 55 q 381 -14 473 -14 q 232 20 295 -14 q 126 121 168 55 q 63 281 84 186 q 43 495 43 375 q 61 710 43 615 q 120 871 80 805 q 225 972 161 937 q 381 1007 290 1007 q 530 972 467 1007 q 637 871 594 937 q 700 711 679 806 q 722 495 722 616 m 253 495 q 281 240 253 326 q 381 155 310 155 q 481 240 450 155 q 511 495 511 325 q 481 751 511 665 q 381 837 450 837 q 321 815 346 837 q 281 751 297 794 q 259 644 266 708 q 253 495 253 580 "},"1":{"x_min":63,"x_max":555.25,"ha":765,"o":"m 555 0 l 345 0 l 345 574 q 345 616 345 591 q 346 668 345 641 q 348 721 347 694 q 350 771 349 749 q 338 759 347 767 q 320 741 330 751 q 299 721 310 731 q 278 702 288 711 l 164 611 l 63 737 l 382 992 l 555 992 l 555 0 "},"2":{"x_min":53.296875,"x_max":720.8125,"ha":765,"o":"m 720 0 l 56 0 l 56 145 l 287 397 q 367 485 331 444 q 428 563 403 525 q 468 640 454 601 q 482 725 482 679 q 452 803 482 775 q 372 831 422 831 q 269 804 318 831 q 166 729 220 778 l 53 864 q 117 917 83 892 q 190 962 150 942 q 278 994 230 982 q 386 1006 326 1006 q 513 986 457 1006 q 610 930 570 966 q 671 842 650 894 q 693 726 693 790 q 672 614 693 668 q 617 510 652 561 q 535 408 581 459 q 436 305 489 358 l 317 185 l 317 176 l 720 176 l 720 0 "},"3":{"x_min":39,"x_max":711,"ha":765,"o":"m 682 768 q 665 675 682 717 q 619 603 648 634 q 552 551 591 572 q 467 520 513 531 l 467 516 q 649 443 587 501 q 711 287 711 385 q 687 167 711 222 q 615 71 664 112 q 493 8 567 31 q 320 -14 420 -14 q 170 0 240 -14 q 39 39 99 12 l 39 217 q 103 188 69 200 q 171 166 137 175 q 237 153 204 157 q 299 148 270 148 q 396 159 357 148 q 458 190 435 170 q 490 237 481 210 q 500 298 500 265 q 488 353 500 329 q 447 396 475 378 q 374 423 419 413 q 262 432 328 432 l 192 432 l 192 580 l 260 580 q 362 591 321 580 q 427 622 402 602 q 461 667 451 641 q 471 722 471 693 q 439 806 471 776 q 336 836 406 836 q 276 829 304 836 q 224 813 248 823 q 180 792 200 803 q 145 768 161 780 l 40 908 q 102 946 68 929 q 175 977 135 964 q 259 998 214 991 q 356 1006 305 1006 q 489 989 429 1006 q 592 943 549 973 q 658 869 635 913 q 682 768 682 825 "},"4":{"x_min":3,"x_max":741.625,"ha":765,"o":"m 741 205 l 622 205 l 622 0 l 412 0 l 412 205 l 3 205 l 3 351 l 423 992 l 622 992 l 622 368 l 741 368 l 741 205 m 412 368 l 412 536 q 412 562 412 545 q 413 599 412 578 q 415 643 414 620 q 417 686 416 665 q 419 721 418 706 q 420 743 420 736 l 414 743 q 387 683 402 715 q 352 619 372 651 l 187 368 l 412 368 "},"5":{"x_min":58,"x_max":707,"ha":765,"o":"m 405 634 q 524 614 469 634 q 620 556 579 594 q 683 461 660 518 q 707 331 707 405 q 681 186 707 250 q 607 78 656 122 q 486 9 559 33 q 320 -14 414 -14 q 246 -10 283 -14 q 176 0 210 -7 q 112 15 142 5 q 58 39 82 26 l 58 220 q 113 194 81 206 q 178 174 144 182 q 245 160 211 165 q 310 155 279 155 q 449 193 401 155 q 496 313 496 231 q 450 425 496 387 q 306 464 403 464 q 268 462 288 464 q 229 456 248 460 q 192 449 209 453 q 161 442 174 446 l 78 486 l 115 992 l 639 992 l 639 817 l 297 817 l 280 619 q 331 629 302 624 q 405 634 360 634 "},"6":{"x_min":52,"x_max":724,"ha":765,"o":"m 52 420 q 59 562 52 492 q 87 698 67 633 q 141 818 107 762 q 228 915 176 874 q 354 979 281 956 q 526 1003 428 1003 q 558 1002 541 1003 q 592 1000 574 1001 q 625 997 609 999 q 655 992 642 995 l 655 826 q 600 836 629 832 q 542 840 571 840 q 393 817 451 840 q 299 753 334 794 q 250 655 265 712 q 233 528 236 598 l 241 528 q 273 574 254 553 q 318 611 293 595 q 376 635 344 626 q 448 644 408 644 q 563 622 512 644 q 650 561 615 601 q 705 463 686 521 q 724 329 724 405 q 701 185 724 249 q 636 77 678 121 q 534 9 594 32 q 400 -14 475 -14 q 263 12 327 -14 q 152 91 199 38 q 78 227 105 145 q 52 420 52 308 m 393 155 q 442 165 420 155 q 480 197 464 176 q 504 250 496 218 q 513 327 513 282 q 484 440 513 398 q 396 481 455 481 q 341 469 366 481 q 298 437 316 457 q 271 394 281 418 q 262 345 262 369 q 270 277 262 311 q 295 216 278 243 q 336 172 311 189 q 393 155 360 155 "},"7":{"x_min":37,"x_max":721,"ha":765,"o":"m 140 0 l 493 815 l 37 815 l 37 990 l 721 990 l 721 859 l 359 0 l 140 0 "},"8":{"x_min":49,"x_max":717,"ha":765,"o":"m 383 1004 q 499 989 444 1004 q 595 944 554 974 q 661 869 637 914 q 686 764 686 825 q 672 683 686 720 q 635 618 658 647 q 579 565 611 588 q 508 523 546 542 q 585 476 547 502 q 652 418 623 450 q 699 346 681 386 q 717 256 717 306 q 692 144 717 195 q 624 59 668 94 q 518 5 580 24 q 383 -14 457 -14 q 240 4 303 -14 q 135 56 178 22 q 71 140 93 90 q 49 251 49 189 q 63 342 49 302 q 104 416 78 383 q 165 473 130 448 q 239 518 199 499 q 176 563 205 539 q 126 618 147 588 q 92 685 105 648 q 80 766 80 722 q 104 869 80 825 q 171 944 129 913 q 268 989 213 974 q 383 1004 323 1004 m 259 263 q 267 213 259 236 q 290 174 274 190 q 328 149 305 158 q 381 139 351 139 q 475 173 444 139 q 506 262 506 207 q 496 313 506 290 q 469 355 485 336 q 431 391 452 374 q 389 422 410 407 l 376 431 q 328 399 349 417 q 291 361 306 382 q 267 316 276 340 q 259 263 259 292 m 382 850 q 345 843 362 850 q 316 823 328 836 q 297 791 304 810 q 290 749 290 773 q 297 700 290 721 q 317 664 305 679 q 347 635 330 648 q 383 611 364 623 q 418 634 401 621 q 447 664 434 647 q 468 701 460 680 q 475 749 475 722 q 468 791 475 773 q 449 823 461 810 q 419 843 436 836 q 382 850 402 850 "},"9":{"x_min":43,"x_max":715,"ha":765,"o":"m 715 568 q 707 425 715 496 q 679 290 699 355 q 625 170 659 226 q 538 73 590 114 q 412 9 485 32 q 239 -14 338 -14 q 208 -13 225 -14 q 174 -11 191 -12 q 140 -8 156 -10 q 112 -4 124 -7 l 112 163 q 165 152 136 156 q 224 148 194 148 q 373 171 315 148 q 467 235 432 194 q 516 333 501 276 q 533 459 530 390 l 525 459 q 492 413 511 434 q 448 377 473 392 q 390 352 422 361 q 318 344 357 344 q 202 365 254 344 q 116 426 151 386 q 61 524 80 466 q 43 658 43 582 q 65 802 43 739 q 130 911 88 866 q 232 979 172 955 q 366 1003 292 1003 q 503 976 439 1003 q 614 897 567 950 q 687 761 660 843 q 715 568 715 679 m 373 833 q 324 823 347 833 q 286 792 302 813 q 262 738 270 770 q 253 661 253 705 q 282 548 253 590 q 371 506 311 506 q 425 518 401 506 q 468 550 450 530 q 495 594 485 569 q 504 643 504 618 q 496 711 504 677 q 471 772 488 745 q 430 816 455 799 q 373 833 406 833 "},"Á":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 335 1071 l 335 1089 q 365 1134 349 1108 q 397 1187 381 1160 q 427 1242 413 1215 q 453 1293 442 1269 l 685 1293 l 685 1278 q 663 1250 677 1266 q 630 1214 649 1233 q 591 1175 612 1195 q 549 1136 570 1155 q 507 1100 527 1117 q 472 1071 488 1083 l 335 1071 "},"ĥ":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 534 565 560 524 q 456 606 509 606 q 389 590 416 606 q 345 542 362 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 1055 l 315 1055 l 315 840 q 314 780 315 811 q 311 722 313 748 q 306 661 308 690 l 317 661 q 402 746 350 720 q 518 773 453 773 q 620 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 m 594 1109 q 522 1161 559 1131 q 449 1227 484 1190 q 377 1161 412 1190 q 307 1109 342 1131 l 170 1109 l 170 1127 q 209 1172 187 1146 q 252 1225 230 1198 q 294 1280 274 1253 q 330 1331 315 1307 l 571 1331 q 606 1280 586 1307 q 648 1225 626 1253 q 692 1172 670 1198 q 732 1127 715 1146 l 732 1109 l 594 1109 "},"»":{"x_min":58,"x_max":759,"ha":813,"o":"m 759 370 l 549 63 l 401 143 l 548 380 l 401 616 l 549 697 l 759 388 l 759 370 m 416 370 l 206 63 l 58 143 l 205 380 l 58 616 l 206 697 l 416 388 l 416 370 "},"ţ":{"x_min":32,"x_max":530,"ha":575,"o":"m 416 152 q 474 158 446 152 q 530 175 501 165 l 530 20 q 457 -4 500 5 q 364 -14 414 -14 q 271 -2 314 -14 q 198 38 229 9 q 148 115 166 67 q 131 237 131 164 l 131 604 l 32 604 l 32 691 l 145 759 l 205 919 l 337 919 l 337 758 l 521 758 l 521 604 l 337 604 l 337 238 q 359 173 337 194 q 416 152 381 152 m 174 -288 q 186 -242 180 -268 q 197 -188 192 -216 q 208 -134 203 -161 q 215 -85 213 -107 l 407 -85 l 407 -98 q 358 -198 386 -145 q 294 -307 330 -251 l 174 -307 l 174 -288 "},"«":{"x_min":56,"x_max":757,"ha":813,"o":"m 56 388 l 265 697 l 414 616 l 266 380 l 414 143 l 265 63 l 56 370 l 56 388 m 399 388 l 608 697 l 757 616 l 609 380 l 757 143 l 608 63 l 399 370 l 399 388 "},"í":{"x_min":99,"x_max":449,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 99 842 l 99 860 q 129 905 113 879 q 161 958 145 931 q 191 1013 177 986 q 217 1064 206 1040 l 449 1064 l 449 1049 q 427 1021 441 1037 q 394 985 413 1004 q 355 946 376 966 q 313 907 334 926 q 271 871 291 888 q 236 842 252 854 l 99 842 "},"ņ":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 535 565 560 524 q 456 606 510 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 m 317 -288 q 329 -242 323 -268 q 340 -188 335 -216 q 351 -134 346 -161 q 358 -85 356 -107 l 550 -85 l 550 -98 q 501 -198 529 -145 q 437 -307 473 -251 l 317 -307 l 317 -288 "},"µ":{"x_min":109,"x_max":766,"ha":875,"o":"m 315 315 q 341 193 315 234 q 421 152 366 152 q 486 168 460 152 q 529 216 513 184 q 552 295 545 248 q 559 401 559 341 l 559 758 l 766 758 l 766 0 l 607 0 l 578 102 l 570 102 q 511 15 547 44 q 425 -14 476 -14 q 358 1 388 -14 q 309 47 328 17 q 312 -10 310 18 q 314 -64 313 -35 q 315 -117 315 -92 l 315 -334 l 109 -334 l 109 758 l 315 758 l 315 315 "},"M":{"x_min":125,"x_max":1143,"ha":1268,"o":"m 523 0 l 305 778 l 299 778 q 306 657 303 715 q 308 605 307 632 q 310 553 309 579 q 311 503 311 527 q 312 461 312 480 l 312 0 l 125 0 l 125 992 l 410 992 l 625 233 l 629 233 l 856 992 l 1143 992 l 1143 0 l 947 0 l 947 469 q 947 509 947 487 q 948 556 947 531 q 950 607 949 581 q 951 657 951 633 q 956 776 954 714 l 951 776 l 716 0 l 523 0 "},"ũ":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 322 906 q 288 890 301 906 q 268 840 276 874 l 167 840 q 184 934 171 894 q 220 999 198 973 q 272 1037 242 1024 q 337 1050 301 1050 q 391 1040 365 1050 q 444 1017 418 1030 q 495 995 470 1005 q 545 985 521 985 q 578 1001 566 985 q 599 1051 591 1017 l 701 1051 q 683 958 696 997 q 646 893 669 919 q 594 854 624 867 q 530 842 565 842 q 476 852 503 842 q 423 874 448 862 q 372 896 397 886 q 322 906 346 906 "},"ŭ":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 678 1071 q 656 978 674 1020 q 608 906 639 936 q 532 858 576 875 q 429 842 487 842 q 325 858 369 842 q 250 904 280 874 q 204 976 220 934 q 186 1071 188 1018 l 301 1071 q 313 1024 304 1041 q 339 998 323 1007 q 378 987 355 989 q 430 985 401 985 q 477 988 455 985 q 516 1000 499 991 q 545 1026 534 1009 q 559 1071 557 1043 l 678 1071 "},"{":{"x_min":21,"x_max":492,"ha":505,"o":"m 195 183 q 150 277 195 249 q 21 304 105 304 l 21 467 q 96 473 63 467 q 151 494 129 479 q 185 532 173 509 q 195 587 196 555 l 195 803 q 207 889 195 853 q 254 947 220 924 q 345 981 287 970 q 492 992 403 992 l 492 838 q 442 833 464 838 q 405 819 420 829 q 382 790 390 808 q 374 743 374 772 l 374 540 q 215 390 369 414 l 215 382 q 334 333 293 370 q 374 232 376 295 l 374 29 q 382 -18 374 0 q 405 -47 390 -36 q 442 -61 420 -57 q 492 -66 464 -66 l 492 -220 q 345 -209 403 -220 q 254 -175 287 -198 q 207 -116 220 -152 q 195 -30 195 -80 l 195 183 "},"¼":{"x_min":32,"x_max":1141.203125,"ha":1224,"o":"m 929 992 l 378 0 l 216 0 l 767 992 l 929 992 m 365 397 l 204 397 l 204 700 q 204 734 204 713 q 205 776 204 755 q 207 814 206 797 q 209 840 208 832 q 198 828 205 835 q 185 813 192 820 q 171 799 178 805 q 158 787 164 792 l 105 746 l 32 832 l 235 992 l 365 992 l 365 397 m 1141 101 l 1056 101 l 1056 0 l 895 0 l 895 101 l 635 101 l 635 207 l 896 599 l 1056 599 l 1056 217 l 1141 217 l 1141 101 m 895 217 l 895 328 q 896 388 895 356 q 899 453 897 419 q 889 429 895 444 q 875 399 882 415 q 860 370 867 384 q 846 346 852 356 l 760 217 l 895 217 "},"Ĳ":{"x_min":44.28125,"x_max":876,"ha":1000,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 539 -292 q 462 -287 495 -292 q 406 -277 429 -283 l 406 -103 q 458 -112 431 -108 q 518 -117 486 -117 q 576 -110 549 -117 q 623 -86 603 -103 q 654 -42 643 -70 q 665 27 665 -14 l 665 992 l 876 992 l 876 35 q 851 -111 876 -49 q 782 -213 826 -173 q 675 -273 737 -254 q 539 -292 614 -292 "},"Ê":{"x_min":125,"x_max":703,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 565 1071 q 493 1123 530 1093 q 420 1189 455 1152 q 348 1123 383 1152 q 278 1071 313 1093 l 141 1071 l 141 1089 q 180 1134 158 1108 q 223 1187 201 1160 q 265 1242 245 1215 q 301 1293 286 1269 l 542 1293 q 577 1242 557 1269 q 619 1187 597 1215 q 663 1134 641 1160 q 703 1089 686 1108 l 703 1071 l 565 1071 "},")":{"x_min":41,"x_max":415,"ha":471,"o":"m 415 380 q 402 214 415 296 q 365 57 390 133 q 301 -89 340 -19 q 210 -220 263 -158 l 42 -220 q 125 -84 89 -156 q 186 64 162 -12 q 223 221 211 141 q 235 381 235 301 q 186 704 235 547 q 41 992 137 861 l 210 992 q 301 857 263 928 q 365 708 340 785 q 402 547 390 630 q 415 380 415 465 "},"a":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 "},"Ę":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 520 -154 q 535 -196 520 -182 q 574 -209 550 -209 q 617 -205 595 -209 q 652 -197 638 -201 l 652 -318 q 605 -329 630 -324 q 546 -334 580 -334 q 475 -322 507 -334 q 422 -290 444 -310 q 388 -241 400 -269 q 377 -177 377 -212 q 386 -124 377 -148 q 412 -78 395 -99 q 451 -38 429 -57 q 499 0 473 -19 l 620 0 q 546 -81 573 -44 q 520 -154 520 -118 "},"Z":{"x_min":33,"x_max":716,"ha":749,"o":"m 716 0 l 33 0 l 33 137 l 453 817 l 45 817 l 45 992 l 703 992 l 703 855 l 283 174 l 716 174 l 716 0 "},"k":{"x_min":109,"x_max":819.25,"ha":819,"o":"m 307 412 l 383 527 l 568 758 l 801 758 l 527 429 l 819 0 l 580 0 l 396 291 l 315 235 l 315 0 l 109 0 l 109 1055 l 315 1055 l 315 584 l 305 412 l 307 412 "},"Ù":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 479 1071 q 424 1118 456 1089 q 360 1175 391 1146 q 303 1233 329 1205 q 267 1278 277 1260 l 267 1293 l 498 1293 q 524 1242 509 1269 q 554 1187 538 1215 q 586 1134 570 1160 q 617 1089 602 1108 l 617 1071 l 479 1071 "},"Ů":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 671 1231 q 657 1163 671 1193 q 621 1112 644 1133 q 566 1080 597 1091 q 498 1069 535 1069 q 430 1080 461 1069 q 377 1112 399 1091 q 343 1162 355 1132 q 331 1230 331 1193 q 343 1297 331 1267 q 377 1347 355 1327 q 430 1379 399 1368 q 498 1391 461 1391 q 566 1379 534 1391 q 620 1347 597 1368 q 657 1297 643 1327 q 671 1231 671 1268 m 565 1230 q 547 1278 565 1260 q 501 1295 529 1295 q 454 1278 472 1295 q 436 1230 436 1260 q 452 1182 436 1199 q 501 1164 468 1164 q 547 1182 529 1164 q 565 1230 565 1199 "},"¢":{"x_min":97,"x_max":672.984375,"ha":765,"o":"m 368 -14 l 368 126 q 255 160 305 134 q 170 230 205 185 q 115 343 134 276 q 97 504 97 411 q 115 668 97 599 q 170 783 134 737 q 256 855 206 829 q 368 889 306 880 l 368 1006 l 488 1006 l 488 895 q 540 890 514 894 q 590 881 565 887 q 635 869 614 876 q 672 855 656 863 l 614 705 q 582 718 600 711 q 545 729 564 724 q 507 737 526 734 q 472 741 488 741 q 396 727 427 741 q 344 685 365 713 q 316 613 324 656 q 307 510 307 570 q 346 339 307 393 q 472 284 384 284 q 572 297 524 284 q 654 326 620 309 l 654 164 q 577 133 619 144 q 488 122 535 123 l 488 -14 l 368 -14 "},"ē":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 204 985 l 622 985 l 622 842 l 204 842 l 204 985 "},"¥":{"x_min":4.75,"x_max":776.25,"ha":765,"o":"m 390 583 l 563 992 l 776 992 l 530 485 l 662 485 l 662 364 l 496 364 l 496 271 l 662 271 l 662 150 l 496 150 l 496 0 l 286 0 l 286 150 l 117 150 l 117 271 l 286 271 l 286 364 l 117 364 l 117 485 l 247 485 l 4 992 l 219 992 l 390 583 "},"Ĥ":{"x_min":125,"x_max":882,"ha":1007,"o":"m 882 0 l 671 0 l 671 428 l 335 428 l 335 0 l 125 0 l 125 992 l 335 992 l 335 603 l 671 603 l 671 992 l 882 992 l 882 0 m 642 1071 q 570 1123 607 1093 q 497 1189 532 1152 q 425 1123 460 1152 q 355 1071 390 1093 l 218 1071 l 218 1089 q 257 1134 235 1108 q 300 1187 278 1160 q 342 1242 322 1215 q 378 1293 363 1269 l 619 1293 q 654 1242 634 1269 q 696 1187 674 1215 q 740 1134 718 1160 q 780 1089 763 1108 l 780 1071 l 642 1071 "},"U":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 "},"Ñ":{"x_min":125,"x_max":963,"ha":1088,"o":"m 963 0 l 697 0 l 305 750 l 299 750 q 306 646 303 698 q 310 554 308 602 q 312 466 312 505 l 312 0 l 125 0 l 125 992 l 389 992 l 781 248 l 785 248 q 780 350 783 300 q 778 395 779 372 q 777 440 777 417 q 776 484 776 463 q 775 522 775 505 l 775 992 l 963 992 l 963 0 m 423 1135 q 389 1119 402 1135 q 369 1069 377 1103 l 268 1069 q 285 1163 272 1123 q 321 1228 299 1202 q 373 1266 343 1253 q 438 1279 402 1279 q 492 1269 466 1279 q 545 1246 519 1259 q 596 1224 571 1234 q 646 1214 622 1214 q 679 1230 667 1214 q 700 1280 692 1246 l 802 1280 q 784 1187 797 1226 q 747 1122 770 1148 q 695 1083 725 1096 q 631 1071 666 1071 q 577 1081 604 1071 q 524 1103 549 1091 q 473 1125 498 1115 q 423 1135 447 1135 "},"F":{"x_min":125,"x_max":693,"ha":762,"o":"m 330 0 l 125 0 l 125 992 l 693 992 l 693 817 l 330 817 l 330 564 l 667 564 l 667 389 l 330 389 l 330 0 "},"å":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 571 1002 q 557 934 571 964 q 521 883 544 904 q 466 851 497 862 q 398 840 435 840 q 330 851 361 840 q 277 883 299 862 q 243 933 255 903 q 231 1001 231 964 q 243 1068 231 1038 q 277 1118 255 1098 q 330 1150 299 1139 q 398 1162 361 1162 q 466 1150 434 1162 q 520 1118 497 1139 q 557 1068 543 1098 q 571 1002 571 1039 m 465 1001 q 447 1049 465 1031 q 401 1066 429 1066 q 354 1049 372 1066 q 336 1001 336 1031 q 352 953 336 970 q 401 935 368 935 q 447 953 429 935 q 465 1001 465 970 "},"ō":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 206 985 l 624 985 l 624 842 l 206 842 l 206 985 "},"”":{"x_min":16,"x_max":601,"ha":615,"o":"m 284 977 q 261 898 274 939 q 232 815 248 857 q 198 731 216 772 q 164 652 181 690 l 16 652 q 35 737 25 692 q 54 827 45 782 q 71 913 63 871 q 83 992 78 956 l 273 992 l 284 977 m 601 977 q 578 898 591 939 q 548 815 564 857 q 515 731 532 772 q 481 652 498 690 l 332 652 q 352 737 342 692 q 371 827 362 782 q 387 913 380 871 q 400 992 395 956 l 590 992 l 601 977 "},"ö":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 181 953 q 188 994 181 977 q 208 1022 195 1011 q 238 1039 221 1034 q 275 1045 255 1045 q 312 1039 295 1045 q 342 1022 329 1034 q 363 994 355 1011 q 371 953 371 977 q 363 913 371 930 q 342 885 355 896 q 312 868 329 873 q 275 863 295 863 q 238 868 255 863 q 208 885 221 873 q 188 913 195 896 q 181 953 181 930 m 454 953 q 461 994 454 977 q 481 1022 468 1011 q 512 1039 494 1034 q 550 1045 529 1045 q 586 1039 569 1045 q 617 1022 603 1034 q 638 994 630 1011 q 646 953 646 977 q 638 913 646 930 q 617 885 630 896 q 586 868 603 873 q 550 863 569 863 q 481 885 509 863 q 454 953 454 907 "},"ć":{"x_min":69,"x_max":664,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 m 314 842 l 314 860 q 344 905 328 879 q 376 958 360 931 q 406 1013 392 986 q 432 1064 421 1040 l 664 1064 l 664 1049 q 642 1021 656 1037 q 609 985 628 1004 q 570 946 591 966 q 528 907 549 926 q 486 871 506 888 q 451 842 467 854 l 314 842 "},"þ":{"x_min":109,"x_max":775,"ha":844,"o":"m 315 659 q 348 704 329 683 q 391 739 366 724 q 445 764 415 755 q 512 773 475 773 q 619 747 571 773 q 701 673 667 722 q 755 550 736 623 q 775 380 775 476 q 756 209 775 283 q 702 86 737 136 q 619 11 668 36 q 512 -14 571 -14 q 445 -6 475 -14 q 390 12 414 0 q 348 42 366 25 q 315 77 330 58 l 306 77 q 311 35 308 55 q 314 0 313 18 q 315 -27 315 -17 l 315 -334 l 109 -334 l 109 1055 l 315 1055 l 315 789 q 314 751 315 773 q 311 708 313 728 q 306 659 308 684 l 315 659 m 443 606 q 384 594 408 606 q 345 556 360 581 q 323 492 330 531 q 315 403 317 454 l 315 380 q 322 282 315 325 q 343 211 328 239 q 383 167 358 182 q 444 152 407 152 q 534 211 505 152 q 563 382 563 269 q 534 550 563 494 q 443 606 505 606 "},"]":{"x_min":35,"x_max":363,"ha":460,"o":"m 35 -76 l 183 -76 l 183 848 l 35 848 l 35 992 l 363 992 l 363 -220 l 35 -220 l 35 -76 "},"ĭ":{"x_min":-34,"x_max":458,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 458 1071 q 436 978 454 1020 q 388 906 419 936 q 312 858 356 875 q 209 842 267 842 q 105 858 149 842 q 30 904 60 874 q -15 976 0 934 q -34 1071 -31 1018 l 81 1071 q 93 1024 84 1041 q 119 998 103 1007 q 158 987 135 989 q 210 985 181 985 q 257 988 235 985 q 296 1000 279 991 q 325 1026 314 1009 q 339 1071 337 1043 l 458 1071 "},"R":{"x_min":125,"x_max":875.25,"ha":875,"o":"m 335 545 l 393 545 q 520 581 481 545 q 558 685 558 616 q 517 786 558 756 q 389 817 476 817 l 335 817 l 335 545 m 335 379 l 335 0 l 125 0 l 125 992 l 396 992 q 678 918 587 992 q 769 694 769 844 q 755 601 769 642 q 719 527 741 559 q 666 471 696 495 q 604 430 637 447 q 739 215 679 310 q 789 136 765 175 q 832 67 813 98 q 863 18 851 37 l 875 0 l 641 0 l 427 379 l 335 379 "},"Ż":{"x_min":33,"x_max":716,"ha":749,"o":"m 716 0 l 33 0 l 33 137 l 453 817 l 45 817 l 45 992 l 703 992 l 703 855 l 283 174 l 716 174 l 716 0 m 275 1183 q 283 1232 275 1213 q 307 1263 292 1251 q 343 1280 323 1275 q 387 1285 364 1285 q 430 1280 410 1285 q 466 1263 451 1275 q 490 1232 481 1251 q 500 1183 500 1213 q 490 1135 500 1155 q 466 1104 481 1115 q 430 1087 451 1092 q 387 1082 410 1082 q 343 1087 364 1082 q 307 1104 323 1092 q 283 1135 292 1115 q 275 1183 275 1155 "},"ħ":{"x_min":3,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 400 q 534 522 560 482 q 456 563 509 563 q 389 547 416 563 q 345 498 362 530 q 322 420 329 467 q 315 314 315 374 l 315 0 l 109 0 l 109 808 l 3 808 l 3 946 l 109 946 l 109 1055 l 315 1055 l 315 946 l 529 946 l 529 808 l 315 808 l 315 796 q 314 736 315 767 q 311 678 313 705 l 306 617 l 317 617 q 402 703 350 677 q 518 730 453 730 q 620 714 575 730 q 699 664 666 698 q 749 577 731 630 q 767 452 767 525 l 767 0 "},"õ":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 301 906 q 267 890 280 906 q 247 840 255 874 l 146 840 q 163 934 150 894 q 199 999 177 973 q 251 1037 221 1024 q 316 1050 280 1050 q 370 1040 344 1050 q 423 1017 397 1030 q 474 995 449 1005 q 524 985 500 985 q 557 1001 545 985 q 578 1051 570 1017 l 680 1051 q 662 958 675 997 q 625 893 648 919 q 573 854 603 867 q 509 842 544 842 q 455 852 482 842 q 402 874 427 862 q 351 896 376 886 q 301 906 325 906 "},"ê":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 556 842 q 484 894 521 864 q 411 960 446 923 q 339 894 374 923 q 269 842 304 864 l 132 842 l 132 860 q 171 905 149 879 q 214 958 192 931 q 256 1013 236 986 q 292 1064 277 1040 l 533 1064 q 568 1013 548 1040 q 610 958 588 986 q 654 905 632 931 q 694 860 677 879 l 694 842 l 556 842 "},"Â":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 596 1071 q 524 1123 561 1093 q 451 1189 486 1152 q 379 1123 414 1152 q 309 1071 344 1093 l 172 1071 l 172 1089 q 211 1134 189 1108 q 254 1187 232 1160 q 296 1242 276 1215 q 332 1293 317 1269 l 573 1293 q 608 1242 588 1269 q 650 1187 628 1215 q 694 1134 672 1160 q 734 1089 717 1108 l 734 1071 l 596 1071 "},"Į":{"x_min":44.28125,"x_max":495.96875,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 272 -154 q 287 -196 272 -182 q 326 -209 302 -209 q 369 -205 347 -209 q 404 -197 390 -201 l 404 -318 q 357 -329 382 -324 q 298 -334 332 -334 q 227 -322 259 -334 q 174 -290 196 -310 q 140 -241 152 -269 q 129 -177 129 -212 q 138 -124 129 -148 q 164 -78 147 -99 q 203 -38 181 -57 q 251 0 225 -19 l 372 0 q 298 -81 325 -44 q 272 -154 272 -118 "},"Ţ":{"x_min":28,"x_max":735,"ha":762,"o":"m 487 0 l 277 0 l 277 817 l 28 817 l 28 992 l 735 992 l 735 817 l 487 817 l 487 0 m 250 -288 q 262 -242 256 -268 q 273 -188 268 -216 q 284 -134 279 -161 q 291 -85 289 -107 l 483 -85 l 483 -98 q 434 -198 462 -145 q 370 -307 406 -251 l 250 -307 l 250 -288 "},"´":{"x_min":225,"x_max":575,"ha":802,"o":"m 225 842 l 225 860 q 255 905 239 879 q 287 958 271 931 q 317 1013 303 986 q 343 1064 332 1040 l 575 1064 l 575 1049 q 553 1021 567 1037 q 520 985 539 1004 q 481 946 502 966 q 439 907 460 926 q 397 871 417 888 q 362 842 378 854 l 225 842 "},"Ĉ":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 m 666 1071 q 594 1123 631 1093 q 521 1189 556 1152 q 449 1123 484 1152 q 379 1071 414 1093 l 242 1071 l 242 1089 q 281 1134 259 1108 q 324 1187 302 1160 q 366 1242 346 1215 q 402 1293 387 1269 l 643 1293 q 678 1242 658 1269 q 720 1187 698 1215 q 764 1134 742 1160 q 804 1089 787 1108 l 804 1071 l 666 1071 "},"Ö":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 291 1182 q 298 1223 291 1206 q 318 1251 305 1240 q 348 1268 331 1263 q 385 1274 365 1274 q 422 1268 405 1274 q 452 1251 439 1263 q 473 1223 465 1240 q 481 1182 481 1206 q 473 1142 481 1159 q 452 1114 465 1125 q 422 1097 439 1102 q 385 1092 405 1092 q 348 1097 365 1092 q 318 1114 331 1102 q 298 1142 305 1125 q 291 1182 291 1159 m 564 1182 q 571 1223 564 1206 q 591 1251 578 1240 q 622 1268 604 1263 q 660 1274 639 1274 q 696 1268 679 1274 q 727 1251 713 1263 q 748 1223 740 1240 q 756 1182 756 1206 q 748 1142 756 1159 q 727 1114 740 1125 q 696 1097 713 1102 q 660 1092 679 1092 q 591 1114 619 1092 q 564 1182 564 1136 "},"z":{"x_min":37,"x_max":595,"ha":635,"o":"m 595 0 l 37 0 l 37 117 l 347 604 l 58 604 l 58 758 l 582 758 l 582 628 l 281 153 l 595 153 l 595 0 "},"Ř":{"x_min":125,"x_max":875.25,"ha":875,"o":"m 335 545 l 393 545 q 520 581 481 545 q 558 685 558 616 q 517 786 558 756 q 389 817 476 817 l 335 817 l 335 545 m 335 379 l 335 0 l 125 0 l 125 992 l 396 992 q 678 918 587 992 q 769 694 769 844 q 755 601 769 642 q 719 527 741 559 q 666 471 696 495 q 604 430 637 447 q 739 215 679 310 q 789 136 765 175 q 832 67 813 98 q 863 18 851 37 l 875 0 l 641 0 l 427 379 l 335 379 m 704 1274 q 664 1229 687 1255 q 620 1176 642 1203 q 578 1121 598 1148 q 543 1071 558 1094 l 302 1071 q 266 1121 287 1094 q 224 1176 246 1148 q 181 1229 202 1203 q 142 1274 159 1255 l 142 1293 l 279 1293 q 349 1240 314 1270 q 421 1174 384 1211 q 494 1240 456 1211 q 566 1293 531 1270 l 704 1293 l 704 1274 "},"Ň":{"x_min":125,"x_max":963,"ha":1088,"o":"m 963 0 l 697 0 l 305 750 l 299 750 q 306 646 303 698 q 310 554 308 602 q 312 466 312 505 l 312 0 l 125 0 l 125 992 l 389 992 l 781 248 l 785 248 q 780 350 783 300 q 778 395 779 372 q 777 440 777 417 q 776 484 776 463 q 775 522 775 505 l 775 992 l 963 992 l 963 0 m 816 1274 q 776 1229 799 1255 q 732 1176 754 1203 q 690 1121 710 1148 q 655 1071 670 1094 l 414 1071 q 378 1121 399 1094 q 336 1176 358 1148 q 293 1229 314 1203 q 254 1274 271 1255 l 254 1293 l 391 1293 q 461 1240 426 1270 q 533 1174 496 1211 q 606 1240 568 1211 q 678 1293 643 1270 l 816 1293 l 816 1274 "},"É":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 288 1071 l 288 1089 q 318 1134 302 1108 q 350 1187 334 1160 q 380 1242 366 1215 q 406 1293 395 1269 l 638 1293 l 638 1278 q 616 1250 630 1266 q 583 1214 602 1233 q 544 1175 565 1195 q 502 1136 523 1155 q 460 1100 480 1117 q 425 1071 441 1083 l 288 1071 "},"³":{"x_min":40,"x_max":470,"ha":526,"o":"m 451 846 q 423 766 451 800 q 335 712 396 732 l 335 703 q 395 682 370 697 q 437 649 420 668 q 461 608 453 631 q 470 562 470 586 q 410 433 470 480 q 224 386 350 386 q 128 397 173 386 q 40 433 84 409 l 40 562 q 129 518 84 535 q 224 501 174 501 q 298 519 275 501 q 322 573 322 537 q 316 600 322 587 q 298 623 311 613 q 263 639 285 633 q 208 645 241 645 l 132 645 l 132 754 l 193 754 q 249 760 228 754 q 283 776 271 766 q 299 800 295 787 q 303 828 303 814 q 286 871 303 854 q 235 888 269 888 q 175 875 203 888 q 109 834 147 862 l 41 930 q 134 982 83 961 q 255 1004 185 1004 q 333 992 297 1004 q 395 961 369 981 q 436 911 421 940 q 451 846 451 882 "},"[":{"x_min":97,"x_max":425,"ha":460,"o":"m 425 -220 l 97 -220 l 97 992 l 425 992 l 425 848 l 276 848 l 276 -76 l 425 -76 l 425 -220 "},"ğ":{"x_min":14,"x_max":735.140625,"ha":766,"o":"m 735 757 l 735 644 l 624 610 q 643 562 638 587 q 649 509 649 537 q 630 403 649 451 q 576 322 612 356 q 486 269 540 288 q 360 251 432 251 q 326 252 345 251 q 299 256 308 254 q 279 232 286 244 q 271 201 271 219 q 280 179 271 187 q 303 165 289 170 q 336 158 317 160 q 375 157 355 157 l 493 157 q 591 144 547 157 q 664 106 634 131 q 710 40 694 80 q 727 -54 727 0 q 701 -170 727 -118 q 624 -258 675 -222 q 497 -314 573 -295 q 322 -334 421 -334 q 187 -319 244 -334 q 91 -277 129 -304 q 33 -211 52 -249 q 14 -123 14 -172 q 28 -51 14 -81 q 66 0 42 -20 q 120 36 90 22 q 182 57 150 49 q 154 74 168 63 q 129 99 140 85 q 111 131 118 113 q 104 167 104 148 q 110 206 104 189 q 128 239 116 224 q 159 268 141 254 q 200 296 177 282 q 105 379 140 322 q 71 513 71 436 q 89 622 71 574 q 145 704 108 670 q 236 755 182 737 q 360 773 290 773 q 391 771 374 773 q 424 767 408 769 q 455 762 441 764 q 477 757 469 759 l 735 757 m 193 -107 q 200 -141 193 -125 q 224 -169 207 -157 q 266 -189 240 -181 q 331 -196 293 -196 q 490 -166 437 -196 q 543 -85 543 -135 q 510 -27 543 -42 q 408 -13 477 -13 l 312 -13 q 273 -17 294 -13 q 234 -33 252 -22 q 205 -62 217 -44 q 193 -107 193 -80 m 265 510 q 289 415 265 448 q 360 381 312 381 q 432 415 410 381 q 454 510 454 448 q 432 607 454 571 q 360 643 410 643 q 265 510 265 643 m 592 1071 q 570 978 588 1020 q 522 906 553 936 q 446 858 490 875 q 343 842 401 842 q 239 858 283 842 q 164 904 194 874 q 118 976 134 934 q 100 1071 102 1018 l 215 1071 q 227 1024 218 1041 q 253 998 237 1007 q 292 987 269 989 q 344 985 315 985 q 391 988 369 985 q 430 1000 413 991 q 459 1026 448 1009 q 473 1071 471 1043 l 592 1071 "},"ª":{"x_min":32,"x_max":444,"ha":504,"o":"m 351 518 l 330 592 q 264 531 303 553 q 181 510 226 510 q 120 519 147 510 q 73 546 92 528 q 42 594 53 565 q 32 661 32 622 q 46 730 32 701 q 88 776 60 758 q 155 803 115 794 q 246 815 195 812 l 307 818 q 287 876 307 859 q 230 894 267 894 q 170 883 203 894 q 102 855 137 872 l 58 947 q 150 986 100 969 q 262 1003 200 1003 q 342 989 308 1003 q 399 952 376 976 q 432 894 421 928 q 444 817 444 859 l 444 518 l 351 518 m 251 732 q 209 723 225 730 q 184 707 193 716 q 172 685 175 697 q 169 661 169 674 q 181 623 169 636 q 213 611 194 611 q 252 619 234 611 q 281 639 269 626 q 300 671 294 653 q 307 712 307 690 l 307 736 l 251 732 "},"T":{"x_min":28,"x_max":735,"ha":762,"o":"m 487 0 l 277 0 l 277 817 l 28 817 l 28 992 l 735 992 l 735 817 l 487 817 l 487 0 "},"š":{"x_min":63,"x_max":625,"ha":668,"o":"m 614 225 q 592 120 614 165 q 530 45 570 75 q 433 0 490 15 q 305 -14 376 -14 q 236 -11 268 -14 q 176 -3 204 -9 q 121 9 147 1 q 67 30 94 17 l 67 201 q 127 176 95 187 q 189 156 158 164 q 249 143 220 148 q 304 139 279 139 q 351 144 331 139 q 383 158 370 149 q 401 179 395 167 q 407 205 407 191 q 402 230 407 219 q 382 254 398 242 q 337 283 367 267 q 256 322 307 299 q 171 366 207 344 q 112 415 135 388 q 77 477 88 442 q 66 561 66 512 q 86 653 66 614 q 144 720 106 693 q 234 759 181 746 q 351 773 286 773 q 480 757 419 773 q 605 710 541 741 l 543 564 q 445 604 492 588 q 352 619 398 619 q 291 604 310 619 q 272 563 272 589 q 277 539 272 550 q 296 518 282 529 q 336 493 310 506 q 403 461 362 480 q 490 419 451 440 q 556 372 528 398 q 599 310 584 345 q 614 225 614 275 m 625 1045 q 585 1000 608 1026 q 541 947 563 974 q 499 892 519 919 q 464 842 479 865 l 223 842 q 187 892 208 865 q 145 947 167 919 q 102 1000 123 974 q 63 1045 80 1026 l 63 1064 l 200 1064 q 270 1011 235 1041 q 342 945 305 982 q 415 1011 377 982 q 487 1064 452 1041 l 625 1064 l 625 1045 "},"Þ":{"x_min":125,"x_max":769,"ha":831,"o":"m 769 522 q 751 400 769 458 q 694 297 734 342 q 590 225 654 252 q 429 199 525 199 l 335 199 l 335 0 l 125 0 l 125 992 l 335 992 l 335 837 l 444 837 q 589 814 528 837 q 690 751 650 792 q 749 652 730 710 q 769 522 769 594 m 335 365 l 393 365 q 517 402 476 365 q 558 523 558 438 q 522 634 558 598 q 406 670 485 670 l 335 670 l 335 365 "},"j":{"x_min":-56,"x_max":324.5,"ha":424,"o":"m 68 -334 q 1 -329 36 -334 q -56 -317 -32 -324 l -56 -154 q -16 -164 -34 -161 q 24 -167 1 -167 q 56 -162 41 -167 q 83 -144 72 -157 q 101 -109 94 -131 q 108 -52 108 -87 l 108 758 l 315 758 l 315 -82 q 301 -180 315 -134 q 259 -260 288 -226 q 182 -314 229 -294 q 68 -334 135 -334 m 99 953 q 108 1002 99 983 q 132 1033 116 1021 q 168 1050 147 1045 q 211 1055 188 1055 q 255 1050 234 1055 q 290 1033 275 1045 q 315 1002 306 1021 q 324 953 324 983 q 315 905 324 925 q 290 874 306 885 q 255 857 275 862 q 211 852 234 852 q 168 857 188 852 q 132 874 147 862 q 108 905 116 885 q 99 953 99 925 "},"ĉ":{"x_min":69,"x_max":677,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 m 539 842 q 467 894 504 864 q 394 960 429 923 q 322 894 357 923 q 252 842 287 864 l 115 842 l 115 860 q 154 905 132 879 q 197 958 175 931 q 239 1013 219 986 q 275 1064 260 1040 l 516 1064 q 551 1013 531 1040 q 593 958 571 986 q 637 905 615 931 q 677 860 660 879 l 677 842 l 539 842 "},"ī":{"x_min":4,"x_max":422,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 4 985 l 422 985 l 422 842 l 4 842 l 4 985 "},"Ď":{"x_min":125,"x_max":892,"ha":973,"o":"m 892 505 q 857 285 892 379 q 758 127 823 190 q 600 31 693 63 q 386 0 506 0 l 125 0 l 125 992 l 415 992 q 612 960 524 992 q 762 868 700 929 q 858 715 824 806 q 892 505 892 624 m 681 499 q 665 641 681 581 q 616 740 648 701 q 538 798 584 779 q 432 817 492 817 l 335 817 l 335 174 l 413 174 q 614 255 547 174 q 681 499 681 336 m 739 1274 q 699 1229 722 1255 q 655 1176 677 1203 q 613 1121 633 1148 q 578 1071 593 1094 l 337 1071 q 301 1121 322 1094 q 259 1176 281 1148 q 216 1229 237 1203 q 177 1274 194 1255 l 177 1293 l 314 1293 q 384 1240 349 1270 q 456 1174 419 1211 q 529 1240 491 1211 q 601 1293 566 1270 l 739 1293 l 739 1274 "},"&":{"x_min":56,"x_max":1000,"ha":1003,"o":"m 1000 0 l 744 0 l 678 67 q 559 8 624 30 q 415 -14 493 -14 q 267 6 333 -14 q 154 63 201 26 q 81 152 107 100 q 56 267 56 204 q 68 361 56 320 q 104 435 81 402 q 160 495 127 468 q 233 547 193 523 q 190 607 208 578 q 161 664 172 636 q 145 720 150 692 q 141 779 141 748 q 161 874 141 832 q 219 945 182 915 q 307 990 256 974 q 419 1006 358 1006 q 527 991 477 1006 q 611 950 576 977 q 667 882 647 922 q 688 790 688 841 q 672 704 688 743 q 632 632 657 665 q 572 571 607 598 q 498 519 538 543 l 673 337 q 716 432 697 382 q 747 532 734 481 l 959 532 q 935 450 948 493 q 903 364 921 407 q 861 278 885 321 q 809 197 838 236 l 1000 0 m 267 287 q 278 233 267 257 q 309 193 289 209 q 355 168 329 177 q 413 159 382 159 q 490 170 455 159 q 555 200 525 180 l 346 423 q 288 362 308 395 q 267 287 267 330 m 493 762 q 486 798 493 783 q 469 822 480 812 q 445 836 458 831 q 418 840 432 840 q 389 836 404 840 q 362 823 374 832 q 343 798 350 814 q 335 761 335 783 q 351 694 335 725 q 393 632 366 663 q 468 691 442 662 q 493 762 493 721 "},"G":{"x_min":81,"x_max":895,"ha":1006,"o":"m 502 557 l 895 557 l 895 42 q 815 18 855 29 q 732 1 775 8 q 642 -9 689 -5 q 542 -14 595 -14 q 345 18 431 -14 q 200 116 259 51 q 111 276 142 181 q 81 497 81 372 q 114 708 81 613 q 214 868 148 802 q 377 970 281 934 q 599 1006 474 1006 q 754 989 678 1006 q 893 944 830 972 l 823 776 q 719 815 777 799 q 597 831 661 831 q 473 806 528 831 q 378 738 418 782 q 318 632 339 694 q 297 492 297 569 q 311 358 297 419 q 357 253 326 298 q 438 185 388 209 q 555 160 487 160 q 631 165 600 160 q 689 174 662 169 l 689 382 l 502 382 l 502 557 "},"`":{"x_min":225,"x_max":575,"ha":802,"o":"m 437 842 q 382 889 414 860 q 318 946 349 917 q 261 1004 287 976 q 225 1049 235 1031 l 225 1064 l 456 1064 q 482 1013 467 1040 q 512 958 496 986 q 544 905 528 931 q 575 860 560 879 l 575 842 l 437 842 "},"ŏ":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 660 1071 q 638 978 656 1020 q 590 906 621 936 q 514 858 558 875 q 411 842 469 842 q 307 858 351 842 q 232 904 262 874 q 186 976 202 934 q 168 1071 170 1018 l 283 1071 q 295 1024 286 1041 q 321 998 305 1007 q 360 987 337 989 q 412 985 383 985 q 459 988 437 985 q 498 1000 481 991 q 527 1026 516 1009 q 541 1071 539 1043 l 660 1071 "},"ý":{"x_min":-0.25,"x_max":749.25,"ha":749,"o":"m 0 758 l 226 758 l 348 331 q 364 256 359 296 q 371 184 369 216 l 375 184 q 378 219 376 200 q 384 257 381 238 q 392 296 388 277 q 401 331 396 316 l 521 758 l 749 758 l 449 -96 q 334 -275 407 -217 q 152 -334 261 -334 q 91 -330 116 -334 q 47 -322 65 -326 l 47 -158 q 83 -164 61 -161 q 128 -167 104 -167 q 184 -158 161 -167 q 224 -133 207 -149 q 252 -95 240 -117 q 273 -44 264 -72 l 286 -6 l 0 758 m 267 842 l 267 860 q 297 905 281 879 q 329 958 313 931 q 359 1013 345 986 q 385 1064 374 1040 l 617 1064 l 617 1049 q 595 1021 609 1037 q 562 985 581 1004 q 523 946 544 966 q 481 907 502 926 q 439 871 459 888 q 404 842 420 854 l 267 842 "},"º":{"x_min":39,"x_max":472,"ha":511,"o":"m 472 756 q 456 652 472 697 q 413 574 441 606 q 344 526 384 543 q 254 510 304 510 q 168 526 207 510 q 99 574 128 543 q 54 652 70 606 q 39 756 39 697 q 54 861 39 815 q 97 938 69 907 q 166 986 125 970 q 257 1003 206 1003 q 342 986 303 1003 q 410 938 381 970 q 455 861 439 907 q 472 756 472 815 m 176 757 q 194 653 176 688 q 256 618 213 618 q 316 653 297 618 q 335 757 335 688 q 316 860 335 826 q 256 894 297 894 q 194 860 213 894 q 176 757 176 826 "},"ź":{"x_min":37,"x_max":595,"ha":635,"o":"m 595 0 l 37 0 l 37 117 l 347 604 l 58 604 l 58 758 l 582 758 l 582 628 l 281 153 l 595 153 l 595 0 m 212 842 l 212 860 q 242 905 226 879 q 274 958 258 931 q 304 1013 290 986 q 330 1064 319 1040 l 562 1064 l 562 1049 q 540 1021 554 1037 q 507 985 526 1004 q 468 946 489 966 q 426 907 447 926 q 384 871 404 888 q 349 842 365 854 l 212 842 "},"ń":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 535 565 560 524 q 456 606 510 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 m 320 842 l 320 860 q 350 905 334 879 q 382 958 366 931 q 412 1013 398 986 q 438 1064 427 1040 l 670 1064 l 670 1049 q 648 1021 662 1037 q 615 985 634 1004 q 576 946 597 966 q 534 907 555 926 q 492 871 512 888 q 457 842 473 854 l 320 842 "},"¤":{"x_min":62,"x_max":703,"ha":765,"o":"m 114 490 q 123 561 114 527 q 149 624 133 594 l 62 710 l 162 810 l 249 724 q 312 750 278 741 q 381 760 347 760 q 451 750 418 760 q 515 722 483 741 l 601 810 l 703 713 l 615 625 q 642 562 632 597 q 652 490 652 527 q 642 419 652 452 q 615 355 633 386 l 700 271 l 601 173 l 515 257 q 452 232 485 241 q 381 223 418 223 q 310 231 344 223 q 247 257 276 239 l 162 174 l 63 272 l 149 357 q 114 490 114 418 m 262 490 q 272 440 262 464 q 297 399 281 417 q 335 372 313 382 q 381 362 356 362 q 428 372 406 362 q 467 399 450 382 q 493 440 484 417 q 503 490 503 464 q 493 541 503 518 q 467 582 484 565 q 428 610 450 599 q 381 620 406 620 q 335 610 356 620 q 297 582 313 599 q 272 541 281 565 q 262 490 262 518 "},"Ĝ":{"x_min":81,"x_max":895,"ha":1006,"o":"m 502 557 l 895 557 l 895 42 q 815 18 855 29 q 732 1 775 8 q 642 -9 689 -5 q 542 -14 595 -14 q 345 18 431 -14 q 200 116 259 51 q 111 276 142 181 q 81 497 81 372 q 114 708 81 613 q 214 868 148 802 q 377 970 281 934 q 599 1006 474 1006 q 754 989 678 1006 q 893 944 830 972 l 823 776 q 719 815 777 799 q 597 831 661 831 q 473 806 528 831 q 378 738 418 782 q 318 632 339 694 q 297 492 297 569 q 311 358 297 419 q 357 253 326 298 q 438 185 388 209 q 555 160 487 160 q 631 165 600 160 q 689 174 662 169 l 689 382 l 502 382 l 502 557 m 690 1071 q 618 1123 655 1093 q 545 1189 580 1152 q 473 1123 508 1152 q 403 1071 438 1093 l 266 1071 l 266 1089 q 305 1134 283 1108 q 348 1187 326 1160 q 390 1242 370 1215 q 426 1293 411 1269 l 667 1293 q 702 1242 682 1269 q 744 1187 722 1215 q 788 1134 766 1160 q 828 1089 811 1108 l 828 1071 l 690 1071 "},"p":{"x_min":109,"x_max":775,"ha":844,"o":"m 507 -14 q 440 -5 470 -14 q 388 15 411 2 q 347 45 365 28 q 315 81 330 62 l 305 81 q 310 37 307 57 q 314 0 312 19 q 315 -27 315 -17 l 315 -334 l 109 -334 l 109 758 l 277 758 l 306 659 l 315 659 q 348 703 330 682 q 390 739 366 723 q 445 763 414 754 q 512 773 475 773 q 619 747 571 773 q 702 673 668 722 q 756 550 737 623 q 775 380 775 476 q 755 209 775 283 q 700 86 735 136 q 615 11 664 36 q 507 -14 566 -14 m 443 606 q 384 594 408 606 q 345 556 360 581 q 323 492 330 531 q 315 403 317 454 l 315 380 q 322 282 315 325 q 343 211 328 239 q 383 167 358 182 q 444 152 407 152 q 534 211 505 152 q 563 382 563 269 q 534 550 563 494 q 443 606 505 606 "},"S":{"x_min":63.46875,"x_max":668,"ha":728,"o":"m 668 275 q 645 155 668 208 q 578 64 622 102 q 471 6 535 26 q 326 -14 408 -14 q 187 0 254 -14 q 63 45 120 15 l 63 241 q 129 211 96 225 q 196 185 162 197 q 265 167 231 174 q 333 160 299 160 q 392 168 368 160 q 432 190 417 176 q 455 223 448 203 q 462 264 462 242 q 450 314 462 292 q 417 354 438 335 q 365 390 396 372 q 298 427 335 408 q 228 467 267 444 q 155 524 189 490 q 98 607 121 558 q 75 723 75 655 q 97 842 75 790 q 159 931 119 895 q 258 987 200 968 q 388 1006 316 1006 q 458 1001 424 1006 q 526 987 492 996 q 594 965 560 978 q 663 936 627 953 l 596 772 q 539 797 565 786 q 487 816 512 808 q 438 827 462 823 q 389 831 414 831 q 308 802 336 831 q 280 727 280 774 q 288 683 280 702 q 316 646 297 663 q 364 612 334 630 q 435 572 393 594 q 529 517 486 545 q 603 454 572 488 q 651 376 634 420 q 668 275 668 333 "},"/":{"x_min":9.75,"x_max":567.25,"ha":574,"o":"m 567 992 l 197 0 l 9 0 l 379 992 l 567 992 "},"Ŧ":{"x_min":28,"x_max":735,"ha":762,"o":"m 487 0 l 277 0 l 277 404 l 116 404 l 116 576 l 277 576 l 277 817 l 28 817 l 28 992 l 735 992 l 735 817 l 487 817 l 487 576 l 648 576 l 648 404 l 487 404 l 487 0 "},"y":{"x_min":-0.25,"x_max":749.25,"ha":749,"o":"m 0 758 l 226 758 l 348 331 q 364 256 359 296 q 371 184 369 216 l 375 184 q 378 219 376 200 q 384 257 381 238 q 392 296 388 277 q 401 331 396 316 l 521 758 l 749 758 l 449 -96 q 334 -275 407 -217 q 152 -334 261 -334 q 91 -330 116 -334 q 47 -322 65 -326 l 47 -158 q 83 -164 61 -161 q 128 -167 104 -167 q 184 -158 161 -167 q 224 -133 207 -149 q 252 -95 240 -117 q 273 -44 264 -72 l 286 -6 l 0 758 "},"–":{"x_min":56,"x_max":639,"ha":695,"o":"m 56 296 l 56 452 l 639 452 l 639 296 l 56 296 "},"ë":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 181 953 q 188 994 181 977 q 208 1022 195 1011 q 238 1039 221 1034 q 275 1045 255 1045 q 312 1039 295 1045 q 342 1022 329 1034 q 363 994 355 1011 q 371 953 371 977 q 363 913 371 930 q 342 885 355 896 q 312 868 329 873 q 275 863 295 863 q 238 868 255 863 q 208 885 221 873 q 188 913 195 896 q 181 953 181 930 m 454 953 q 461 994 454 977 q 481 1022 468 1011 q 512 1039 494 1034 q 550 1045 529 1045 q 586 1039 569 1045 q 617 1022 603 1034 q 638 994 630 1011 q 646 953 646 977 q 638 913 646 930 q 617 885 630 896 q 586 868 603 873 q 550 863 569 863 q 481 885 509 863 q 454 953 454 907 "},"J":{"x_min":-135,"x_max":335,"ha":460,"o":"m -1 -292 q -78 -287 -45 -292 q -135 -277 -111 -283 l -135 -103 q -82 -112 -109 -108 q -22 -117 -54 -117 q 35 -110 8 -117 q 82 -86 62 -103 q 113 -42 102 -70 q 124 27 124 -14 l 124 992 l 335 992 l 335 35 q 310 -111 335 -49 q 241 -213 285 -173 q 134 -273 196 -254 q -1 -292 73 -292 "},"ŷ":{"x_min":-0.25,"x_max":749.25,"ha":749,"o":"m 0 758 l 226 758 l 348 331 q 364 256 359 296 q 371 184 369 216 l 375 184 q 378 219 376 200 q 384 257 381 238 q 392 296 388 277 q 401 331 396 316 l 521 758 l 749 758 l 449 -96 q 334 -275 407 -217 q 152 -334 261 -334 q 91 -330 116 -334 q 47 -322 65 -326 l 47 -158 q 83 -164 61 -161 q 128 -167 104 -167 q 184 -158 161 -167 q 224 -133 207 -149 q 252 -95 240 -117 q 273 -44 264 -72 l 286 -6 l 0 758 m 519 842 q 447 894 484 864 q 374 960 409 923 q 302 894 337 923 q 232 842 267 864 l 95 842 l 95 860 q 134 905 112 879 q 177 958 155 931 q 219 1013 199 986 q 255 1064 240 1040 l 496 1064 q 531 1013 511 1040 q 573 958 551 986 q 617 905 595 931 q 657 860 640 879 l 657 842 l 519 842 "},"ŕ":{"x_min":109,"x_max":580,"ha":603,"o":"m 504 773 q 522 772 512 773 q 541 771 532 772 q 558 769 550 770 q 570 766 565 768 l 570 572 q 555 575 564 574 q 535 578 545 576 q 514 579 524 579 q 497 579 504 579 q 423 569 457 579 q 366 536 390 559 q 329 476 342 513 q 315 386 315 439 l 315 0 l 109 0 l 109 758 l 265 758 l 296 644 l 306 644 q 341 697 322 673 q 383 738 360 721 q 436 763 407 754 q 504 773 466 773 m 230 842 l 230 860 q 260 905 244 879 q 292 958 276 931 q 322 1013 308 986 q 348 1064 337 1040 l 580 1064 l 580 1049 q 558 1021 572 1037 q 525 985 544 1004 q 486 946 507 966 q 444 907 465 926 q 402 871 422 888 q 367 842 383 854 l 230 842 "},"D":{"x_min":125,"x_max":892,"ha":973,"o":"m 892 505 q 857 285 892 379 q 758 127 823 190 q 600 31 693 63 q 386 0 506 0 l 125 0 l 125 992 l 415 992 q 612 960 524 992 q 762 868 700 929 q 858 715 824 806 q 892 505 892 624 m 681 499 q 665 641 681 581 q 616 740 648 701 q 538 798 584 779 q 432 817 492 817 l 335 817 l 335 174 l 413 174 q 614 255 547 174 q 681 499 681 336 "},"ł":{"x_min":0.203125,"x_max":458.6875,"ha":458,"o":"m 331 630 l 379 659 l 458 526 l 331 450 l 331 0 l 125 0 l 125 323 l 76 294 l 0 427 l 125 503 l 125 1055 l 331 1055 l 331 630 "},"ĺ":{"x_min":109,"x_max":472,"ha":424,"o":"m 315 0 l 109 0 l 109 1055 l 315 1055 l 315 0 m 122 1110 l 122 1128 q 152 1173 136 1147 q 184 1226 168 1199 q 214 1281 200 1254 q 240 1332 229 1308 l 472 1332 l 472 1317 q 450 1289 464 1305 q 417 1253 436 1272 q 378 1214 399 1234 q 336 1175 357 1194 q 294 1139 314 1156 q 259 1110 275 1122 l 122 1110 "},"$":{"x_min":66,"x_max":720,"ha":765,"o":"m 720 310 q 702 216 720 259 q 648 140 684 172 q 559 86 612 107 q 437 58 507 65 l 437 -80 l 345 -80 l 345 56 q 261 61 300 57 q 190 72 223 65 q 126 90 157 80 q 67 114 96 101 l 67 293 q 129 266 95 279 q 199 242 163 253 q 272 224 235 232 q 345 215 309 217 l 345 430 q 333 435 339 432 q 322 439 327 437 q 313 443 317 441 q 204 492 251 466 q 127 550 158 518 q 81 620 96 582 q 66 708 66 659 q 85 800 66 759 q 140 873 104 842 q 228 923 176 904 q 345 948 280 942 l 345 1055 l 437 1055 l 437 953 q 558 936 496 949 q 688 893 620 922 l 619 734 q 527 766 575 752 q 437 783 479 780 l 437 584 l 464 575 q 576 526 528 551 q 656 470 625 501 q 704 400 688 439 q 720 310 720 361 m 515 306 q 511 334 515 322 q 497 357 507 346 q 473 375 488 367 q 437 393 458 384 l 437 222 q 496 249 477 228 q 515 306 515 269 m 270 712 q 288 659 270 681 q 345 624 305 638 l 345 782 q 289 761 307 778 q 270 712 270 745 "},"w":{"x_min":-0.25,"x_max":1120.25,"ha":1120,"o":"m 688 0 l 629 265 q 622 297 626 276 q 612 346 618 319 q 601 403 607 372 q 589 463 595 433 q 559 613 575 532 l 555 613 q 527 462 539 532 q 515 402 521 432 q 504 344 510 371 q 494 296 499 317 q 487 262 490 274 l 426 0 l 204 0 l 0 758 l 205 758 l 282 422 q 294 359 288 395 q 306 284 301 322 q 317 213 312 246 q 324 160 322 179 l 328 160 q 331 193 329 172 q 337 237 334 214 q 344 286 341 261 q 352 332 348 311 q 359 371 356 354 q 364 394 362 387 l 447 758 l 674 758 l 754 394 q 763 348 757 379 q 774 281 768 317 q 784 212 780 246 q 789 160 788 178 l 793 160 q 800 210 795 176 q 811 281 805 243 q 824 357 817 320 q 837 422 831 395 l 917 758 l 1120 758 l 913 0 l 688 0 "},"Ç":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 m 628 -169 q 617 -239 628 -208 q 582 -290 606 -269 q 517 -322 558 -311 q 418 -334 477 -334 q 363 -329 387 -334 q 319 -319 338 -325 l 319 -205 q 341 -210 329 -208 q 367 -215 354 -213 q 393 -218 380 -217 q 416 -220 406 -220 q 450 -210 435 -220 q 465 -178 465 -201 q 440 -133 465 -153 q 352 -105 414 -114 l 405 0 l 536 0 l 517 -41 q 558 -59 538 -48 q 593 -87 578 -71 q 618 -124 608 -103 q 628 -169 628 -144 "},"Ŝ":{"x_min":63.46875,"x_max":668,"ha":728,"o":"m 668 275 q 645 155 668 208 q 578 64 622 102 q 471 6 535 26 q 326 -14 408 -14 q 187 0 254 -14 q 63 45 120 15 l 63 241 q 129 211 96 225 q 196 185 162 197 q 265 167 231 174 q 333 160 299 160 q 392 168 368 160 q 432 190 417 176 q 455 223 448 203 q 462 264 462 242 q 450 314 462 292 q 417 354 438 335 q 365 390 396 372 q 298 427 335 408 q 228 467 267 444 q 155 524 189 490 q 98 607 121 558 q 75 723 75 655 q 97 842 75 790 q 159 931 119 895 q 258 987 200 968 q 388 1006 316 1006 q 458 1001 424 1006 q 526 987 492 996 q 594 965 560 978 q 663 936 627 953 l 596 772 q 539 797 565 786 q 487 816 512 808 q 438 827 462 823 q 389 831 414 831 q 308 802 336 831 q 280 727 280 774 q 288 683 280 702 q 316 646 297 663 q 364 612 334 630 q 435 572 393 594 q 529 517 486 545 q 603 454 572 488 q 651 376 634 420 q 668 275 668 333 m 530 1071 q 458 1123 495 1093 q 385 1189 420 1152 q 313 1123 348 1152 q 243 1071 278 1093 l 106 1071 l 106 1089 q 145 1134 123 1108 q 188 1187 166 1160 q 230 1242 210 1215 q 266 1293 251 1269 l 507 1293 q 542 1242 522 1269 q 584 1187 562 1215 q 628 1134 606 1160 q 668 1089 651 1108 l 668 1071 l 530 1071 "},"C":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 "},"Ĵ":{"x_min":-135,"x_max":508,"ha":460,"o":"m -1 -292 q -78 -287 -45 -292 q -135 -277 -111 -283 l -135 -103 q -82 -112 -109 -108 q -22 -117 -54 -117 q 35 -110 8 -117 q 82 -86 62 -103 q 113 -42 102 -70 q 124 27 124 -14 l 124 992 l 335 992 l 335 35 q 310 -111 335 -49 q 241 -213 285 -173 q 134 -273 196 -254 q -1 -292 73 -292 m 370 1071 q 298 1123 335 1093 q 225 1189 260 1152 q 153 1123 188 1152 q 83 1071 118 1093 l -54 1071 l -54 1089 q -14 1134 -36 1108 q 28 1187 6 1160 q 70 1242 50 1215 q 106 1293 91 1269 l 347 1293 q 382 1242 362 1269 q 424 1187 402 1215 q 468 1134 446 1160 q 508 1089 491 1108 l 508 1071 l 370 1071 "},"È":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 388 1071 q 333 1118 365 1089 q 269 1175 300 1146 q 212 1233 238 1205 q 176 1278 186 1260 l 176 1293 l 407 1293 q 433 1242 418 1269 q 463 1187 447 1215 q 495 1134 479 1160 q 526 1089 511 1108 l 526 1071 l 388 1071 "},"X":{"x_min":-0.25,"x_max":871.25,"ha":871,"o":"m 871 0 l 631 0 l 428 375 l 224 0 l 0 0 l 301 511 l 20 992 l 252 992 l 438 635 l 620 992 l 847 992 l 563 500 l 871 0 "},"ô":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 557 842 q 485 894 522 864 q 412 960 447 923 q 340 894 375 923 q 270 842 305 864 l 133 842 l 133 860 q 172 905 150 879 q 215 958 193 931 q 257 1013 237 986 q 293 1064 278 1040 l 534 1064 q 569 1013 549 1040 q 611 958 589 986 q 655 905 633 931 q 695 860 678 879 l 695 842 l 557 842 "},"Ė":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 296 1164 q 304 1213 296 1194 q 328 1244 313 1232 q 364 1261 344 1256 q 408 1266 385 1266 q 451 1261 431 1266 q 487 1244 472 1256 q 511 1213 502 1232 q 521 1164 521 1194 q 511 1116 521 1136 q 487 1085 502 1096 q 451 1068 472 1073 q 408 1063 431 1063 q 364 1068 385 1063 q 328 1085 344 1073 q 304 1116 313 1096 q 296 1164 296 1136 "},"Ŀ":{"x_min":125,"x_max":696,"ha":743,"o":"m 125 0 l 125 992 l 335 992 l 335 174 l 696 174 l 696 0 l 125 0 m 452 509 q 460 558 452 539 q 484 589 469 577 q 520 606 500 601 q 564 611 541 611 q 607 606 587 611 q 643 589 628 601 q 667 558 658 577 q 677 509 677 539 q 667 461 677 481 q 643 430 658 441 q 607 413 628 418 q 564 408 587 408 q 520 413 541 408 q 484 430 500 418 q 460 461 469 441 q 452 509 452 481 "},"ŋ":{"x_min":109,"x_max":767,"ha":871,"o":"m 521 -334 q 454 -329 489 -334 q 397 -317 420 -324 l 397 -154 q 435 -164 417 -161 q 476 -167 453 -167 q 509 -162 494 -167 q 535 -143 524 -156 q 553 -108 547 -130 q 560 -51 560 -86 l 560 458 q 533 569 560 532 q 456 606 507 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 -82 q 753 -180 767 -134 q 711 -260 740 -226 q 634 -314 681 -294 q 521 -334 588 -334 "},"ü":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 200 953 q 207 994 200 977 q 227 1022 214 1011 q 257 1039 240 1034 q 294 1045 274 1045 q 331 1039 314 1045 q 361 1022 348 1034 q 382 994 374 1011 q 390 953 390 977 q 382 913 390 930 q 361 885 374 896 q 331 868 348 873 q 294 863 314 863 q 257 868 274 863 q 227 885 240 873 q 207 913 214 896 q 200 953 200 930 m 473 953 q 480 994 473 977 q 500 1022 487 1011 q 531 1039 513 1034 q 569 1045 548 1045 q 605 1039 588 1045 q 636 1022 622 1034 q 657 994 649 1011 q 665 953 665 977 q 657 913 665 930 q 636 885 649 896 q 605 868 622 873 q 569 863 588 863 q 500 885 528 863 q 473 953 473 907 "},"Ÿ":{"x_min":-0.25,"x_max":812.25,"ha":811,"o":"m 406 583 l 585 992 l 812 992 l 511 385 l 511 0 l 301 0 l 301 379 l 0 992 l 227 992 l 406 583 m 174 1182 q 181 1223 174 1206 q 201 1251 188 1240 q 231 1268 214 1263 q 268 1274 248 1274 q 305 1268 288 1274 q 335 1251 322 1263 q 356 1223 348 1240 q 364 1182 364 1206 q 356 1142 364 1159 q 335 1114 348 1125 q 305 1097 322 1102 q 268 1092 288 1092 q 231 1097 248 1092 q 201 1114 214 1102 q 181 1142 188 1125 q 174 1182 174 1159 m 447 1182 q 454 1223 447 1206 q 474 1251 461 1240 q 505 1268 487 1263 q 543 1274 522 1274 q 579 1268 562 1274 q 610 1251 596 1263 q 631 1223 623 1240 q 639 1182 639 1206 q 631 1142 639 1159 q 610 1114 623 1125 q 579 1097 596 1102 q 543 1092 562 1092 q 474 1114 502 1092 q 447 1182 447 1136 "},"€":{"x_min":45,"x_max":755.671875,"ha":765,"o":"m 520 829 q 405 781 450 829 q 345 644 360 734 l 584 644 l 584 523 l 335 523 q 334 512 335 517 q 333 500 333 506 q 333 488 333 494 q 333 468 333 475 q 335 447 333 461 l 542 447 l 542 326 l 346 326 q 410 197 364 238 q 533 155 457 155 q 631 167 586 155 q 717 199 676 179 l 717 26 q 630 -3 678 6 q 518 -14 582 -14 q 261 74 355 -14 q 137 326 167 162 l 45 326 l 45 447 l 125 447 q 122 469 122 458 q 122 488 122 480 q 122 507 122 498 q 123 523 123 517 l 45 523 l 45 644 l 135 644 q 178 793 148 727 q 257 904 209 859 q 370 974 305 950 q 516 999 435 999 q 643 984 586 999 q 755 943 701 970 l 690 786 q 604 817 644 806 q 520 829 563 829 "},"ß":{"x_min":109,"x_max":897,"ha":946,"o":"m 805 841 q 791 765 805 798 q 755 706 776 732 q 709 661 734 680 q 662 625 683 641 q 627 594 641 609 q 612 565 612 580 q 621 540 612 551 q 647 515 629 528 q 692 484 665 501 q 758 441 720 467 q 817 398 791 420 q 860 350 843 376 q 887 292 878 323 q 897 220 897 261 q 817 45 897 104 q 584 -14 738 -14 q 469 -4 518 -14 q 379 28 420 5 l 379 192 q 419 170 395 181 q 468 151 442 160 q 521 138 494 143 q 571 133 548 133 q 655 154 625 133 q 685 218 685 175 q 680 250 685 236 q 661 278 675 264 q 622 309 648 292 q 557 348 597 325 q 485 394 514 373 q 438 437 456 416 q 413 481 420 458 q 405 532 405 505 q 419 594 405 567 q 454 641 433 620 q 499 679 475 662 q 545 715 524 697 q 580 753 566 733 q 593 801 593 774 q 560 870 593 844 q 460 896 526 896 q 351 864 388 896 q 315 761 315 831 l 315 0 l 109 0 l 109 772 q 134 901 109 846 q 205 991 159 955 q 317 1045 251 1027 q 461 1063 382 1063 q 602 1048 539 1063 q 711 1005 666 1033 q 781 936 756 977 q 805 841 805 894 "},"Ű":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 272 1071 l 272 1089 q 302 1134 286 1108 q 334 1187 318 1160 q 364 1242 350 1215 q 389 1293 379 1269 l 594 1293 l 594 1278 q 572 1250 586 1266 q 539 1214 558 1233 q 500 1175 521 1195 q 457 1136 478 1155 q 416 1100 436 1117 q 381 1071 396 1083 l 272 1071 m 541 1071 l 541 1089 q 571 1134 555 1108 q 603 1187 587 1160 q 633 1242 619 1215 q 658 1293 648 1269 l 863 1293 l 863 1278 q 841 1250 855 1266 q 808 1214 827 1233 q 769 1175 790 1195 q 727 1136 748 1155 q 686 1100 705 1117 q 650 1071 666 1083 l 541 1071 "},"c":{"x_min":69,"x_max":648.703125,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 "},"¶":{"x_min":77,"x_max":792,"ha":910,"o":"m 792 -176 l 682 -176 l 682 919 l 569 919 l 569 -176 l 460 -176 l 460 379 q 361 367 418 367 q 244 384 296 367 q 154 441 191 401 q 97 546 117 481 q 77 706 77 611 q 99 873 77 806 q 161 980 121 939 q 258 1038 201 1021 q 382 1055 314 1055 l 792 1055 l 792 -176 "},"­":{"x_min":41,"x_max":406,"ha":447,"o":"m 41 287 l 41 457 l 406 457 l 406 287 l 41 287 "},":":{"x_min":79,"x_max":316,"ha":396,"o":"m 79 97 q 88 151 79 129 q 113 187 97 173 q 151 206 129 200 q 198 213 173 213 q 243 206 221 213 q 280 187 264 200 q 306 151 297 173 q 316 97 316 129 q 306 45 316 66 q 280 9 297 23 q 243 -11 264 -5 q 198 -18 221 -18 q 151 -11 173 -18 q 113 9 129 -5 q 88 45 97 23 q 79 97 79 66 m 79 657 q 88 711 79 689 q 113 747 97 733 q 151 766 129 760 q 198 773 173 773 q 243 766 221 773 q 280 747 264 760 q 306 711 297 733 q 316 657 316 689 q 306 604 316 626 q 280 568 297 582 q 243 548 264 554 q 198 542 221 542 q 151 548 173 542 q 113 568 129 554 q 88 604 97 582 q 79 657 79 626 "},"ś":{"x_min":66,"x_max":614,"ha":668,"o":"m 614 225 q 592 120 614 165 q 530 45 570 75 q 433 0 490 15 q 305 -14 376 -14 q 236 -11 268 -14 q 176 -3 204 -9 q 121 9 147 1 q 67 30 94 17 l 67 201 q 127 176 95 187 q 189 156 158 164 q 249 143 220 148 q 304 139 279 139 q 351 144 331 139 q 383 158 370 149 q 401 179 395 167 q 407 205 407 191 q 402 230 407 219 q 382 254 398 242 q 337 283 367 267 q 256 322 307 299 q 171 366 207 344 q 112 415 135 388 q 77 477 88 442 q 66 561 66 512 q 86 653 66 614 q 144 720 106 693 q 234 759 181 746 q 351 773 286 773 q 480 757 419 773 q 605 710 541 741 l 543 564 q 445 604 492 588 q 352 619 398 619 q 291 604 310 619 q 272 563 272 589 q 277 539 272 550 q 296 518 282 529 q 336 493 310 506 q 403 461 362 480 q 490 419 451 440 q 556 372 528 398 q 599 310 584 345 q 614 225 614 275 m 232 842 l 232 860 q 262 905 246 879 q 294 958 278 931 q 324 1013 310 986 q 350 1064 339 1040 l 582 1064 l 582 1049 q 560 1021 574 1037 q 527 985 546 1004 q 488 946 509 966 q 446 907 467 926 q 404 871 424 888 q 369 842 385 854 l 232 842 "}," ":{"x_min":0,"x_max":0,"ha":361},"¾":{"x_min":61,"x_max":1161.203125,"ha":1224,"o":"m 977 992 l 426 0 l 264 0 l 815 992 l 977 992 m 1161 101 l 1076 101 l 1076 0 l 915 0 l 915 101 l 655 101 l 655 207 l 916 599 l 1076 599 l 1076 217 l 1161 217 l 1161 101 m 915 217 l 915 328 q 916 388 915 356 q 919 453 917 419 q 909 429 915 444 q 895 399 902 415 q 880 370 887 384 q 866 346 872 356 l 780 217 l 915 217 m 472 846 q 444 766 472 800 q 356 712 417 732 l 356 703 q 416 682 391 697 q 458 649 441 668 q 482 608 474 631 q 491 562 491 586 q 431 433 491 480 q 245 386 371 386 q 149 397 194 386 q 61 433 105 409 l 61 562 q 150 518 105 535 q 245 501 195 501 q 319 519 296 501 q 343 573 343 537 q 337 600 343 587 q 319 623 332 613 q 284 639 306 633 q 229 645 262 645 l 153 645 l 153 754 l 214 754 q 270 760 249 754 q 304 776 292 766 q 320 800 316 787 q 324 828 324 814 q 307 871 324 854 q 256 888 290 888 q 196 875 224 888 q 130 834 168 862 l 62 930 q 155 982 104 961 q 276 1004 206 1004 q 354 992 318 1004 q 416 961 390 981 q 457 911 442 940 q 472 846 472 882 "},"ŉ":{"x_min":16,"x_max":937,"ha":1040,"o":"m 937 0 l 730 0 l 730 442 q 705 565 730 524 q 626 606 680 606 q 558 590 585 606 q 515 542 531 574 q 492 463 499 510 q 485 356 485 416 l 485 0 l 279 0 l 279 758 l 437 758 l 464 661 l 476 661 q 516 711 492 690 q 567 746 539 732 q 626 766 595 760 q 690 773 657 773 q 791 757 745 773 q 869 707 836 741 q 919 620 901 673 q 937 494 937 568 l 937 0 m 273 992 l 284 977 q 261 898 274 939 q 232 815 248 857 q 198 731 216 772 q 164 652 181 690 l 16 652 q 35 737 25 692 q 54 827 45 782 q 71 913 63 871 q 83 992 78 956 l 273 992 "},"Ģ":{"x_min":81,"x_max":895,"ha":1006,"o":"m 502 557 l 895 557 l 895 42 q 815 18 855 29 q 732 1 775 8 q 642 -9 689 -5 q 542 -14 595 -14 q 345 18 431 -14 q 200 116 259 51 q 111 276 142 181 q 81 497 81 372 q 114 708 81 613 q 214 868 148 802 q 377 970 281 934 q 599 1006 474 1006 q 754 989 678 1006 q 893 944 830 972 l 823 776 q 719 815 777 799 q 597 831 661 831 q 473 806 528 831 q 378 738 418 782 q 318 632 339 694 q 297 492 297 569 q 311 358 297 419 q 357 253 326 298 q 438 185 388 209 q 555 160 487 160 q 631 165 600 160 q 689 174 662 169 l 689 382 l 502 382 l 502 557 m 427 -288 q 439 -242 433 -268 q 450 -188 445 -216 q 461 -134 456 -161 q 468 -85 466 -107 l 660 -85 l 660 -98 q 611 -198 639 -145 q 547 -307 583 -251 l 427 -307 l 427 -288 "},"m":{"x_min":109,"x_max":1204,"ha":1308,"o":"m 759 0 l 553 0 l 553 442 q 528 565 553 524 q 452 606 504 606 q 386 590 412 606 q 344 542 360 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 345 711 322 690 q 395 746 368 732 q 452 766 422 760 q 514 773 483 773 q 646 746 592 773 q 730 661 701 719 l 747 661 q 786 711 763 690 q 837 746 809 732 q 896 766 865 760 q 958 773 927 773 q 1142 706 1080 773 q 1204 494 1204 640 l 1204 0 l 997 0 l 997 442 q 972 565 997 524 q 896 606 948 606 q 791 548 822 606 q 759 380 759 489 l 759 0 "},"ž":{"x_min":37,"x_max":612,"ha":635,"o":"m 595 0 l 37 0 l 37 117 l 347 604 l 58 604 l 58 758 l 582 758 l 582 628 l 281 153 l 595 153 l 595 0 m 612 1045 q 572 1000 595 1026 q 528 947 550 974 q 486 892 506 919 q 451 842 466 865 l 210 842 q 174 892 195 865 q 132 947 154 919 q 89 1000 110 974 q 50 1045 67 1026 l 50 1064 l 187 1064 q 257 1011 222 1041 q 329 945 292 982 q 402 1011 364 982 q 474 1064 439 1041 l 612 1064 l 612 1045 "},"á":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 300 842 l 300 860 q 330 905 314 879 q 362 958 346 931 q 392 1013 378 986 q 418 1064 407 1040 l 650 1064 l 650 1049 q 628 1021 642 1037 q 595 985 614 1004 q 556 946 577 966 q 514 907 535 926 q 472 871 492 888 q 437 842 453 854 l 300 842 "},"×":{"x_min":73.9375,"x_max":691.796875,"ha":765,"o":"m 276 490 l 73 694 l 176 799 l 380 596 l 587 799 l 691 697 l 484 490 l 689 285 l 587 181 l 380 386 l 176 183 l 75 286 l 276 490 "},"K":{"x_min":125,"x_max":880.25,"ha":880,"o":"m 880 0 l 641 0 l 413 412 l 335 354 l 335 0 l 125 0 l 125 992 l 335 992 l 335 514 l 417 654 l 644 992 l 877 992 l 561 544 l 880 0 "},"¨":{"x_min":168,"x_max":633,"ha":802,"o":"m 168 953 q 175 994 168 977 q 195 1022 182 1011 q 225 1039 208 1034 q 262 1045 242 1045 q 299 1039 282 1045 q 329 1022 316 1034 q 350 994 342 1011 q 358 953 358 977 q 350 913 358 930 q 329 885 342 896 q 299 868 316 873 q 262 863 282 863 q 225 868 242 863 q 195 885 208 873 q 175 913 182 896 q 168 953 168 930 m 441 953 q 448 994 441 977 q 468 1022 455 1011 q 499 1039 481 1034 q 537 1045 516 1045 q 573 1039 556 1045 q 604 1022 590 1034 q 625 994 617 1011 q 633 953 633 977 q 625 913 633 930 q 604 885 617 896 q 573 868 590 873 q 537 863 556 863 q 468 885 496 863 q 441 953 441 907 "},"Y":{"x_min":-0.25,"x_max":812.25,"ha":811,"o":"m 406 583 l 585 992 l 812 992 l 511 385 l 511 0 l 301 0 l 301 379 l 0 992 l 227 992 l 406 583 "},"E":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 "},"Ô":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 662 1071 q 590 1123 627 1093 q 517 1189 552 1152 q 445 1123 480 1152 q 375 1071 410 1093 l 238 1071 l 238 1089 q 277 1134 255 1108 q 320 1187 298 1160 q 362 1242 342 1215 q 398 1293 383 1269 l 639 1293 q 674 1242 654 1269 q 716 1187 694 1215 q 760 1134 738 1160 q 800 1089 783 1108 l 800 1071 l 662 1071 "},"Ï":{"x_min":37,"x_max":502,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 37 1182 q 44 1223 37 1206 q 64 1251 51 1240 q 94 1268 77 1263 q 131 1274 111 1274 q 168 1268 151 1274 q 198 1251 185 1263 q 219 1223 211 1240 q 227 1182 227 1206 q 219 1142 227 1159 q 198 1114 211 1125 q 168 1097 185 1102 q 131 1092 151 1092 q 94 1097 111 1092 q 64 1114 77 1102 q 44 1142 51 1125 q 37 1182 37 1159 m 310 1182 q 317 1223 310 1206 q 337 1251 324 1240 q 368 1268 350 1263 q 406 1274 385 1274 q 442 1268 425 1274 q 473 1251 459 1263 q 494 1223 486 1240 q 502 1182 502 1206 q 494 1142 502 1159 q 473 1114 486 1125 q 442 1097 459 1102 q 406 1092 425 1092 q 337 1114 365 1092 q 310 1182 310 1136 "},"ġ":{"x_min":14,"x_max":735.140625,"ha":766,"o":"m 735 757 l 735 644 l 624 610 q 643 562 638 587 q 649 509 649 537 q 630 403 649 451 q 576 322 612 356 q 486 269 540 288 q 360 251 432 251 q 326 252 345 251 q 299 256 308 254 q 279 232 286 244 q 271 201 271 219 q 280 179 271 187 q 303 165 289 170 q 336 158 317 160 q 375 157 355 157 l 493 157 q 591 144 547 157 q 664 106 634 131 q 710 40 694 80 q 727 -54 727 0 q 701 -170 727 -118 q 624 -258 675 -222 q 497 -314 573 -295 q 322 -334 421 -334 q 187 -319 244 -334 q 91 -277 129 -304 q 33 -211 52 -249 q 14 -123 14 -172 q 28 -51 14 -81 q 66 0 42 -20 q 120 36 90 22 q 182 57 150 49 q 154 74 168 63 q 129 99 140 85 q 111 131 118 113 q 104 167 104 148 q 110 206 104 189 q 128 239 116 224 q 159 268 141 254 q 200 296 177 282 q 105 379 140 322 q 71 513 71 436 q 89 622 71 574 q 145 704 108 670 q 236 755 182 737 q 360 773 290 773 q 391 771 374 773 q 424 767 408 769 q 455 762 441 764 q 477 757 469 759 l 735 757 m 193 -107 q 200 -141 193 -125 q 224 -169 207 -157 q 266 -189 240 -181 q 331 -196 293 -196 q 490 -166 437 -196 q 543 -85 543 -135 q 510 -27 543 -42 q 408 -13 477 -13 l 312 -13 q 273 -17 294 -13 q 234 -33 252 -22 q 205 -62 217 -44 q 193 -107 193 -80 m 265 510 q 289 415 265 448 q 360 381 312 381 q 432 415 410 381 q 454 510 454 448 q 432 607 454 571 q 360 643 410 643 q 265 510 265 643 m 251 954 q 259 1003 251 984 q 283 1034 268 1022 q 319 1051 299 1046 q 363 1056 340 1056 q 406 1051 386 1056 q 442 1034 427 1046 q 466 1003 457 1022 q 476 954 476 984 q 466 906 476 926 q 442 875 457 886 q 406 858 427 863 q 363 853 386 853 q 319 858 340 853 q 283 875 299 863 q 259 906 268 886 q 251 954 251 926 "},"b":{"x_min":109,"x_max":775,"ha":844,"o":"m 512 773 q 619 747 571 773 q 701 673 667 722 q 755 550 736 623 q 775 380 775 476 q 755 209 775 282 q 701 85 736 135 q 616 11 665 36 q 507 -14 567 -14 q 440 -5 469 -14 q 387 15 410 2 q 347 46 364 29 q 315 82 330 64 l 301 82 l 267 0 l 109 0 l 109 1055 l 315 1055 l 315 809 q 314 761 315 787 q 311 712 313 734 q 307 659 309 686 l 315 659 q 348 704 330 683 q 390 739 366 724 q 445 764 414 755 q 512 773 475 773 m 443 606 q 384 594 408 606 q 345 556 360 581 q 323 492 330 531 q 315 403 317 454 l 315 380 q 322 282 315 325 q 343 211 328 239 q 383 167 358 182 q 444 152 407 152 q 534 211 505 152 q 563 382 563 269 q 534 550 563 494 q 443 606 505 606 "},"Ŋ":{"x_min":113,"x_max":950,"ha":1063,"o":"m 634 -292 q 557 -287 590 -292 q 501 -277 524 -283 l 501 -103 q 553 -112 526 -108 q 614 -117 581 -117 q 670 -111 643 -117 q 719 -92 697 -106 q 756 -55 741 -78 q 775 2 771 -32 l 293 750 l 287 750 q 294 646 291 698 q 298 554 296 602 q 300 466 300 505 l 300 0 l 113 0 l 113 992 l 378 992 l 768 387 l 772 387 q 768 489 770 439 q 766 534 767 511 q 764 579 765 556 q 763 623 763 602 q 762 661 762 644 l 762 992 l 950 992 l 950 0 q 926 -130 950 -75 q 862 -221 903 -186 q 763 -274 821 -257 q 634 -292 705 -292 "},"Ũ":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 382 1135 q 348 1119 361 1135 q 328 1069 336 1103 l 227 1069 q 244 1163 231 1123 q 280 1228 258 1202 q 332 1266 302 1253 q 397 1279 361 1279 q 451 1269 425 1279 q 504 1246 478 1259 q 555 1224 530 1234 q 605 1214 581 1214 q 638 1230 626 1214 q 659 1280 651 1246 l 761 1280 q 743 1187 756 1226 q 706 1122 729 1148 q 654 1083 684 1096 q 590 1071 625 1071 q 536 1081 563 1071 q 483 1103 508 1091 q 432 1125 457 1115 q 382 1135 406 1135 "},"L":{"x_min":125,"x_max":696,"ha":743,"o":"m 125 0 l 125 992 l 335 992 l 335 174 l 696 174 l 696 0 l 125 0 "},"ď":{"x_min":69,"x_max":1031,"ha":844,"o":"m 329 -14 q 224 11 271 -14 q 141 85 176 36 q 88 208 107 134 q 69 377 69 281 q 88 549 69 475 q 142 672 107 622 q 227 747 178 722 q 335 773 276 773 q 402 764 372 773 q 457 741 433 756 q 500 706 481 726 q 534 663 520 687 l 541 663 q 534 716 537 690 q 528 765 530 739 q 526 813 526 791 l 526 1055 l 735 1055 l 735 0 l 575 0 l 534 99 l 526 99 q 493 54 512 75 q 451 18 475 34 q 397 -5 427 3 q 329 -14 367 -14 m 406 152 q 467 164 442 152 q 508 202 492 177 q 531 266 524 228 q 540 355 539 304 l 540 378 q 533 476 540 433 q 511 547 526 519 q 470 591 496 576 q 404 606 444 606 q 310 547 340 606 q 280 376 280 489 q 310 208 280 264 q 406 152 341 152 m 798 851 q 810 898 804 872 q 821 951 816 924 q 832 1006 827 979 q 839 1056 837 1033 l 1031 1056 l 1031 1042 q 982 942 1010 996 q 918 834 954 888 l 798 834 l 798 851 "},"Ĭ":{"x_min":22,"x_max":514,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 514 1300 q 492 1207 510 1249 q 444 1135 475 1165 q 368 1087 412 1104 q 265 1071 323 1071 q 161 1087 205 1071 q 86 1133 116 1103 q 40 1205 56 1163 q 22 1300 24 1247 l 137 1300 q 149 1253 140 1270 q 175 1227 159 1236 q 214 1216 191 1218 q 266 1214 237 1214 q 313 1217 291 1214 q 352 1229 335 1220 q 381 1255 370 1238 q 395 1300 393 1272 l 514 1300 "},"ŧ":{"x_min":32,"x_max":530,"ha":575,"o":"m 416 152 q 474 158 446 152 q 530 175 501 165 l 530 20 q 457 -4 500 5 q 364 -14 414 -14 q 271 -2 314 -14 q 198 37 229 8 q 148 114 166 66 q 131 234 131 162 l 131 334 l 44 334 l 44 472 l 131 472 l 131 604 l 32 604 l 32 692 l 145 759 l 205 924 l 337 924 l 337 758 l 521 758 l 521 604 l 337 604 l 337 472 l 498 472 l 498 334 l 337 334 l 337 236 q 359 172 337 193 q 416 152 381 152 "},"À":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 429 1071 q 374 1118 406 1089 q 310 1175 341 1146 q 253 1233 279 1205 q 217 1278 227 1260 l 217 1293 l 448 1293 q 474 1242 459 1269 q 504 1187 488 1215 q 536 1134 520 1160 q 567 1089 552 1108 l 567 1071 l 429 1071 "},"½":{"x_min":32,"x_max":1164.28125,"ha":1224,"o":"m 929 992 l 378 0 l 216 0 l 767 992 l 929 992 m 365 397 l 204 397 l 204 700 q 204 734 204 713 q 205 776 204 755 q 207 814 206 797 q 209 840 208 832 q 198 828 205 835 q 185 813 192 820 q 171 799 178 805 q 158 787 164 792 l 105 746 l 32 832 l 235 992 l 365 992 l 365 397 m 1164 0 l 725 0 l 725 111 l 877 260 q 930 313 909 290 q 963 354 951 335 q 981 388 976 372 q 986 422 986 404 q 970 462 986 448 q 926 476 953 476 q 869 462 899 476 q 803 418 839 449 l 719 521 q 818 584 763 560 q 947 609 873 609 q 1029 597 992 609 q 1092 564 1066 586 q 1133 511 1118 543 q 1148 438 1148 479 q 1139 379 1148 406 q 1112 323 1131 351 q 1065 265 1094 295 q 996 197 1037 234 l 925 132 l 1164 132 l 1164 0 "},"\'":{"x_min":90,"x_max":279.21875,"ha":370,"o":"m 279 992 l 251 634 l 117 634 l 90 992 l 279 992 "},"ĳ":{"x_min":100.1875,"x_max":721.5,"ha":821,"o":"m 100 953 q 109 1002 100 983 q 133 1033 117 1021 q 169 1050 148 1045 q 212 1055 189 1055 q 256 1050 235 1055 q 291 1033 276 1045 q 316 1002 307 1021 q 325 953 325 983 q 316 905 325 925 q 291 874 307 885 q 256 857 276 862 q 212 852 235 852 q 169 857 189 852 q 133 874 148 862 q 109 905 117 885 q 100 953 100 925 m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 465 -334 q 398 -329 433 -334 q 341 -317 364 -324 l 341 -154 q 380 -164 362 -161 q 421 -167 398 -167 q 453 -162 438 -167 q 480 -144 469 -157 q 498 -109 491 -131 q 505 -52 505 -87 l 505 758 l 712 758 l 712 -82 q 698 -180 712 -134 q 656 -260 685 -226 q 579 -314 626 -294 q 465 -334 532 -334 m 496 953 q 505 1002 496 983 q 529 1033 513 1021 q 565 1050 544 1045 q 608 1055 585 1055 q 652 1050 631 1055 q 687 1033 672 1045 q 712 1002 703 1021 q 721 953 721 983 q 712 905 721 925 q 687 874 703 885 q 652 857 672 862 q 608 852 631 852 q 565 857 585 852 q 529 874 544 862 q 505 905 513 885 q 496 953 496 925 "},"Ć":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 m 434 1071 l 434 1089 q 464 1134 448 1108 q 496 1187 480 1160 q 526 1242 512 1215 q 552 1293 541 1269 l 784 1293 l 784 1278 q 762 1250 776 1266 q 729 1214 748 1233 q 690 1175 711 1195 q 648 1136 669 1155 q 606 1100 626 1117 q 571 1071 587 1083 l 434 1071 "},"£":{"x_min":56,"x_max":739,"ha":765,"o":"m 461 1006 q 596 989 535 1006 q 711 950 656 973 l 649 794 q 563 824 602 813 q 482 836 524 836 q 413 810 438 836 q 388 719 388 784 l 388 589 l 608 589 l 608 441 l 388 441 l 388 344 q 379 279 388 306 q 355 231 369 251 q 322 198 340 211 q 285 174 304 184 l 739 174 l 739 0 l 56 0 l 56 166 q 107 193 84 179 q 145 227 129 207 q 169 275 161 247 q 178 342 178 303 l 178 441 l 57 441 l 57 589 l 178 589 l 178 721 q 199 852 178 798 q 258 940 220 906 q 347 990 295 974 q 461 1006 399 1006 "},"ů":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 604 1002 q 590 934 604 964 q 554 883 577 904 q 499 851 530 862 q 431 840 468 840 q 363 851 394 840 q 310 883 332 862 q 276 933 288 903 q 264 1001 264 964 q 276 1068 264 1038 q 310 1118 288 1098 q 363 1150 332 1139 q 431 1162 394 1162 q 499 1150 467 1162 q 553 1118 530 1139 q 590 1068 576 1098 q 604 1002 604 1039 m 498 1001 q 480 1049 498 1031 q 434 1066 462 1066 q 387 1049 405 1066 q 369 1001 369 1031 q 385 953 369 970 q 434 935 401 935 q 480 953 462 935 q 498 1001 498 970 "},"Ō":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 316 1214 l 734 1214 l 734 1071 l 316 1071 l 316 1214 "},"Ğ":{"x_min":81,"x_max":895,"ha":1006,"o":"m 502 557 l 895 557 l 895 42 q 815 18 855 29 q 732 1 775 8 q 642 -9 689 -5 q 542 -14 595 -14 q 345 18 431 -14 q 200 116 259 51 q 111 276 142 181 q 81 497 81 372 q 114 708 81 613 q 214 868 148 802 q 377 970 281 934 q 599 1006 474 1006 q 754 989 678 1006 q 893 944 830 972 l 823 776 q 719 815 777 799 q 597 831 661 831 q 473 806 528 831 q 378 738 418 782 q 318 632 339 694 q 297 492 297 569 q 311 358 297 419 q 357 253 326 298 q 438 185 388 209 q 555 160 487 160 q 631 165 600 160 q 689 174 662 169 l 689 382 l 502 382 l 502 557 m 782 1300 q 760 1207 778 1249 q 712 1135 743 1165 q 636 1087 680 1104 q 533 1071 591 1071 q 429 1087 473 1071 q 354 1133 384 1103 q 308 1205 324 1163 q 290 1300 292 1247 l 405 1300 q 417 1253 408 1270 q 443 1227 427 1236 q 482 1216 459 1218 q 534 1214 505 1214 q 581 1217 559 1214 q 620 1229 603 1220 q 649 1255 638 1238 q 663 1300 661 1272 l 782 1300 "},"v":{"x_min":-0.25,"x_max":749.25,"ha":749,"o":"m 268 0 l 0 758 l 216 758 l 341 326 q 361 245 353 287 q 372 170 370 204 l 376 170 q 387 247 378 206 q 407 326 395 287 l 532 758 l 749 758 l 480 0 l 268 0 "},"û":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 571 842 q 499 894 536 864 q 426 960 461 923 q 354 894 389 923 q 284 842 319 864 l 147 842 l 147 860 q 186 905 164 879 q 229 958 207 931 q 271 1013 251 986 q 307 1064 292 1040 l 548 1064 q 583 1013 563 1040 q 625 958 603 986 q 669 905 647 931 q 709 860 692 879 l 709 842 l 571 842 "},"Ź":{"x_min":33,"x_max":716,"ha":749,"o":"m 716 0 l 33 0 l 33 137 l 453 817 l 45 817 l 45 992 l 703 992 l 703 855 l 283 174 l 716 174 l 716 0 m 264 1071 l 264 1089 q 294 1134 278 1108 q 326 1187 310 1160 q 356 1242 342 1215 q 382 1293 371 1269 l 614 1293 l 614 1278 q 592 1250 606 1266 q 559 1214 578 1233 q 520 1175 541 1195 q 478 1136 499 1155 q 436 1100 456 1117 q 401 1071 417 1083 l 264 1071 "},"Ĺ":{"x_min":125,"x_max":696,"ha":743,"o":"m 125 0 l 125 992 l 335 992 l 335 174 l 696 174 l 696 0 l 125 0 m 182 1071 l 182 1089 q 212 1134 196 1108 q 244 1187 228 1160 q 274 1242 260 1215 q 300 1293 289 1269 l 532 1293 l 532 1278 q 510 1250 524 1266 q 477 1214 496 1233 q 438 1175 459 1195 q 396 1136 417 1155 q 354 1100 374 1117 q 319 1071 335 1083 l 182 1071 "},"Č":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 m 808 1274 q 768 1229 791 1255 q 724 1176 746 1203 q 682 1121 702 1148 q 647 1071 662 1094 l 406 1071 q 370 1121 391 1094 q 328 1176 350 1148 q 285 1229 306 1203 q 246 1274 263 1255 l 246 1293 l 383 1293 q 453 1240 418 1270 q 525 1174 488 1211 q 598 1240 560 1211 q 670 1293 635 1270 l 808 1293 l 808 1274 "},"x":{"x_min":6.75,"x_max":754.25,"ha":761,"o":"m 263 387 l 19 758 l 254 758 l 380 530 l 508 758 l 743 758 l 495 387 l 754 0 l 519 0 l 380 245 l 241 0 l 6 0 l 263 387 "},"è":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 392 842 q 337 889 369 860 q 273 946 304 917 q 216 1004 242 976 q 180 1049 190 1031 l 180 1064 l 411 1064 q 437 1013 422 1040 q 467 958 451 986 q 499 905 483 931 q 530 860 515 879 l 530 842 l 392 842 "},"Ń":{"x_min":125,"x_max":963,"ha":1088,"o":"m 963 0 l 697 0 l 305 750 l 299 750 q 306 646 303 698 q 310 554 308 602 q 312 466 312 505 l 312 0 l 125 0 l 125 992 l 389 992 l 781 248 l 785 248 q 780 350 783 300 q 778 395 779 372 q 777 440 777 417 q 776 484 776 463 q 775 522 775 505 l 775 992 l 963 992 l 963 0 m 417 1071 l 417 1089 q 447 1134 431 1108 q 479 1187 463 1160 q 509 1242 495 1215 q 535 1293 524 1269 l 767 1293 l 767 1278 q 745 1250 759 1266 q 712 1214 731 1233 q 673 1175 694 1195 q 631 1136 652 1155 q 589 1100 609 1117 q 554 1071 570 1083 l 417 1071 "},".":{"x_min":79,"x_max":316,"ha":396,"o":"m 79 97 q 88 151 79 129 q 113 187 97 173 q 151 206 129 200 q 198 213 173 213 q 243 206 221 213 q 280 187 264 200 q 306 151 297 173 q 316 97 316 129 q 306 45 316 66 q 280 9 297 23 q 243 -11 264 -5 q 198 -18 221 -18 q 151 -11 173 -18 q 113 9 129 -5 q 88 45 97 23 q 79 97 79 66 "},"‘":{"x_min":16,"x_max":284,"ha":298,"o":"m 25 652 l 16 666 q 38 744 25 703 q 67 828 51 786 q 100 912 83 870 q 135 992 118 954 l 284 992 q 263 905 273 950 q 244 816 254 861 q 228 730 235 772 q 215 652 220 687 l 25 652 "},"l":{"x_min":109,"x_max":315.859375,"ha":424,"o":"m 315 0 l 109 0 l 109 1055 l 315 1055 l 315 0 "},"Ś":{"x_min":63.46875,"x_max":668,"ha":728,"o":"m 668 275 q 645 155 668 208 q 578 64 622 102 q 471 6 535 26 q 326 -14 408 -14 q 187 0 254 -14 q 63 45 120 15 l 63 241 q 129 211 96 225 q 196 185 162 197 q 265 167 231 174 q 333 160 299 160 q 392 168 368 160 q 432 190 417 176 q 455 223 448 203 q 462 264 462 242 q 450 314 462 292 q 417 354 438 335 q 365 390 396 372 q 298 427 335 408 q 228 467 267 444 q 155 524 189 490 q 98 607 121 558 q 75 723 75 655 q 97 842 75 790 q 159 931 119 895 q 258 987 200 968 q 388 1006 316 1006 q 458 1001 424 1006 q 526 987 492 996 q 594 965 560 978 q 663 936 627 953 l 596 772 q 539 797 565 786 q 487 816 512 808 q 438 827 462 823 q 389 831 414 831 q 308 802 336 831 q 280 727 280 774 q 288 683 280 702 q 316 646 297 663 q 364 612 334 630 q 435 572 393 594 q 529 517 486 545 q 603 454 572 488 q 651 376 634 420 q 668 275 668 333 m 278 1071 l 278 1089 q 308 1134 292 1108 q 340 1187 324 1160 q 370 1242 356 1215 q 396 1293 385 1269 l 628 1293 l 628 1278 q 606 1250 620 1266 q 573 1214 592 1233 q 534 1175 555 1195 q 492 1136 513 1155 q 450 1100 470 1117 q 415 1071 431 1083 l 278 1071 "},"Ü":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 267 1182 q 274 1223 267 1206 q 294 1251 281 1240 q 324 1268 307 1263 q 361 1274 341 1274 q 398 1268 381 1274 q 428 1251 415 1263 q 449 1223 441 1240 q 457 1182 457 1206 q 449 1142 457 1159 q 428 1114 441 1125 q 398 1097 415 1102 q 361 1092 381 1092 q 324 1097 341 1092 q 294 1114 307 1102 q 274 1142 281 1125 q 267 1182 267 1159 m 540 1182 q 547 1223 540 1206 q 567 1251 554 1240 q 598 1268 580 1263 q 636 1274 615 1274 q 672 1268 655 1274 q 703 1251 689 1263 q 724 1223 716 1240 q 732 1182 732 1206 q 724 1142 732 1159 q 703 1114 716 1125 q 672 1097 689 1102 q 636 1092 655 1092 q 567 1114 595 1092 q 540 1182 540 1136 "},"à":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 375 842 q 320 889 352 860 q 256 946 287 917 q 199 1004 225 976 q 163 1049 173 1031 l 163 1064 l 394 1064 q 420 1013 405 1040 q 450 958 434 986 q 482 905 466 931 q 513 860 498 879 l 513 842 l 375 842 "},"ó":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 294 842 l 294 860 q 324 905 308 879 q 356 958 340 931 q 386 1013 372 986 q 412 1064 401 1040 l 644 1064 l 644 1049 q 622 1021 636 1037 q 589 985 608 1004 q 550 946 571 966 q 508 907 529 926 q 466 871 486 888 q 431 842 447 854 l 294 842 "},"¦":{"x_min":309,"x_max":457.53125,"ha":765,"o":"m 309 1051 l 457 1051 l 457 499 l 309 499 l 309 1051 m 309 238 l 457 238 l 457 -315 l 309 -315 l 309 238 "},"Ő":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 310 1071 l 310 1089 q 340 1134 324 1108 q 372 1187 356 1160 q 402 1242 388 1215 q 427 1293 417 1269 l 632 1293 l 632 1278 q 610 1250 624 1266 q 577 1214 596 1233 q 538 1175 559 1195 q 495 1136 516 1155 q 454 1100 474 1117 q 419 1071 434 1083 l 310 1071 m 579 1071 l 579 1089 q 609 1134 593 1108 q 641 1187 625 1160 q 671 1242 657 1215 q 696 1293 686 1269 l 901 1293 l 901 1278 q 879 1250 893 1266 q 846 1214 865 1233 q 807 1175 828 1195 q 765 1136 786 1155 q 724 1100 743 1117 q 688 1071 704 1083 l 579 1071 "},"Ž":{"x_min":33,"x_max":716,"ha":749,"o":"m 716 0 l 33 0 l 33 137 l 453 817 l 45 817 l 45 992 l 703 992 l 703 855 l 283 174 l 716 174 l 716 0 m 645 1274 q 605 1229 628 1255 q 561 1176 583 1203 q 519 1121 539 1148 q 484 1071 499 1094 l 243 1071 q 207 1121 228 1094 q 165 1176 187 1148 q 122 1229 143 1203 q 83 1274 100 1255 l 83 1293 l 220 1293 q 290 1240 255 1270 q 362 1174 325 1211 q 435 1240 397 1211 q 507 1293 472 1270 l 645 1293 l 645 1274 "},"Î":{"x_min":-11,"x_max":551,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 413 1071 q 341 1123 378 1093 q 268 1189 303 1152 q 196 1123 231 1152 q 126 1071 161 1093 l -11 1071 l -11 1089 q 28 1134 6 1108 q 71 1187 49 1160 q 113 1242 93 1215 q 149 1293 134 1269 l 390 1293 q 425 1242 405 1269 q 467 1187 445 1215 q 511 1134 489 1160 q 551 1089 534 1108 l 551 1071 l 413 1071 "},"e":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 "},"Ĕ":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 658 1300 q 636 1207 654 1249 q 588 1135 619 1165 q 512 1087 556 1104 q 409 1071 467 1071 q 305 1087 349 1071 q 230 1133 260 1103 q 184 1205 200 1163 q 166 1300 168 1247 l 281 1300 q 293 1253 284 1270 q 319 1227 303 1236 q 358 1216 335 1218 q 410 1214 381 1214 q 457 1217 435 1214 q 496 1229 479 1220 q 525 1255 514 1238 q 539 1300 537 1272 l 658 1300 "},"ļ":{"x_min":82,"x_max":315.859375,"ha":424,"o":"m 315 0 l 109 0 l 109 1055 l 315 1055 l 315 0 m 82 -288 q 94 -242 88 -268 q 105 -188 100 -216 q 116 -134 111 -161 q 123 -85 121 -107 l 315 -85 l 315 -98 q 266 -198 294 -145 q 202 -307 238 -251 l 82 -307 l 82 -288 "},"ò":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 396 842 q 341 889 373 860 q 277 946 308 917 q 220 1004 246 976 q 184 1049 194 1031 l 184 1064 l 415 1064 q 441 1013 426 1040 q 471 958 455 986 q 503 905 487 931 q 534 860 519 879 l 534 842 l 396 842 "},"^":{"x_min":5,"x_max":736,"ha":739,"o":"m 5 353 l 302 997 l 399 997 l 736 353 l 573 353 l 355 788 q 259 569 308 679 q 165 353 211 458 l 5 353 "},"ū":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 224 985 l 642 985 l 642 842 l 224 842 l 224 985 "},"č":{"x_min":69,"x_max":687,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 m 687 1045 q 647 1000 670 1026 q 603 947 625 974 q 561 892 581 919 q 526 842 541 865 l 285 842 q 249 892 270 865 q 207 947 229 919 q 164 1000 185 974 q 125 1045 142 1026 l 125 1064 l 262 1064 q 332 1011 297 1041 q 404 945 367 982 q 477 1011 439 982 q 549 1064 514 1041 l 687 1064 l 687 1045 "},"’":{"x_min":16,"x_max":284,"ha":298,"o":"m 273 992 l 284 977 q 261 898 274 939 q 232 815 248 857 q 198 731 216 772 q 164 652 181 690 l 16 652 q 35 737 25 692 q 54 827 45 782 q 71 913 63 871 q 83 992 78 956 l 273 992 "},"-":{"x_min":41,"x_max":406,"ha":447,"o":"m 41 287 l 41 457 l 406 457 l 406 287 l 41 287 "},"Q":{"x_min":81,"x_max":999.25,"ha":1050,"o":"m 970 496 q 956 345 970 416 q 916 215 943 274 q 849 112 889 157 q 754 36 809 66 l 999 -236 l 729 -236 l 547 -12 q 538 -13 542 -12 q 531 -14 535 -14 q 525 -14 527 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 "},"ě":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 698 1045 q 658 1000 681 1026 q 614 947 636 974 q 572 892 592 919 q 537 842 552 865 l 296 842 q 260 892 281 865 q 218 947 240 919 q 175 1000 196 974 q 136 1045 153 1026 l 136 1064 l 273 1064 q 343 1011 308 1041 q 415 945 378 982 q 488 1011 450 982 q 560 1064 525 1041 l 698 1064 l 698 1045 "},"œ":{"x_min":69,"x_max":1222,"ha":1289,"o":"m 922 -14 q 774 11 842 -14 q 657 90 706 36 q 551 11 612 37 q 413 -14 489 -14 q 274 12 337 -14 q 166 88 211 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 335 773 q 548 746 488 773 q 653 667 608 719 q 759 746 698 720 q 895 773 821 773 q 1031 750 970 773 q 1134 683 1092 727 q 1199 574 1176 639 q 1222 427 1222 510 l 1222 327 l 757 327 l 757 321 q 808 187 761 235 q 936 139 854 139 q 1001 143 970 139 q 1062 154 1032 146 q 1120 172 1091 161 q 1179 198 1149 184 l 1179 39 q 1124 15 1151 25 q 1066 -1 1096 5 q 1000 -10 1035 -7 q 922 -14 965 -14 m 280 380 q 312 209 280 267 q 416 152 344 152 q 519 210 487 152 q 551 380 551 267 q 519 550 551 494 q 414 606 487 606 q 312 550 343 606 q 280 380 280 494 m 896 625 q 844 616 868 625 q 803 586 821 606 q 775 536 786 567 q 761 465 764 506 l 1027 465 q 1018 529 1026 499 q 993 579 1010 558 q 953 613 977 601 q 896 625 928 625 "},"#":{"x_min":31,"x_max":867,"ha":897,"o":"m 677 574 l 645 414 l 821 414 l 821 275 l 619 275 l 567 0 l 417 0 l 470 275 l 339 275 l 287 0 l 142 0 l 192 275 l 31 275 l 31 414 l 218 414 l 250 574 l 80 574 l 80 714 l 275 714 l 328 990 l 476 990 l 424 714 l 558 714 l 611 990 l 757 990 l 704 714 l 867 714 l 867 574 l 677 574 m 365 414 l 498 414 l 530 574 l 397 574 l 365 414 "},"Å":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 622 1062 q 608 994 622 1024 q 572 943 595 964 q 517 911 548 922 q 449 900 486 900 q 381 911 412 900 q 328 943 350 922 q 294 993 306 963 q 282 1061 282 1024 q 294 1128 282 1098 q 328 1178 306 1158 q 381 1210 350 1199 q 449 1222 412 1222 q 517 1210 485 1222 q 571 1178 548 1199 q 608 1128 594 1158 q 622 1062 622 1099 m 516 1061 q 498 1109 516 1091 q 452 1126 480 1126 q 405 1109 423 1126 q 387 1061 387 1091 q 403 1013 387 1030 q 452 995 419 995 q 498 1013 480 995 q 516 1061 516 1030 "},"¸":{"x_min":-25,"x_max":284,"ha":285,"o":"m 284 -169 q 273 -239 284 -208 q 238 -290 262 -269 q 173 -322 214 -311 q 74 -334 133 -334 q 19 -329 43 -334 q -25 -319 -5 -325 l -25 -205 q -2 -210 -14 -208 q 23 -215 10 -213 q 49 -218 36 -217 q 72 -220 62 -220 q 106 -210 91 -220 q 121 -178 121 -201 q 96 -133 121 -153 q 8 -105 70 -114 l 61 0 l 192 0 l 173 -41 q 214 -59 194 -48 q 249 -87 234 -71 q 274 -124 264 -103 q 284 -169 284 -144 "},"=":{"x_min":60,"x_max":705,"ha":765,"o":"m 60 546 l 60 695 l 705 695 l 705 546 l 60 546 m 60 284 l 60 433 l 705 433 l 705 284 l 60 284 "},"ú":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 313 842 l 313 860 q 343 905 327 879 q 375 958 359 931 q 405 1013 391 986 q 431 1064 420 1040 l 663 1064 l 663 1049 q 641 1021 655 1037 q 608 985 627 1004 q 569 946 590 966 q 527 907 548 926 q 485 871 505 888 q 450 842 466 854 l 313 842 "},"¯":{"x_min":-4,"x_max":699,"ha":695,"o":"m 699 1056 l -4 1056 l -4 1192 l 699 1192 l 699 1056 "},"u":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 "},"é":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 304 842 l 304 860 q 334 905 318 879 q 366 958 350 931 q 396 1013 382 986 q 422 1064 411 1040 l 654 1064 l 654 1049 q 632 1021 646 1037 q 599 985 618 1004 q 560 946 581 966 q 518 907 539 926 q 476 871 496 888 q 441 842 457 854 l 304 842 "},"Ş":{"x_min":63.46875,"x_max":668,"ha":728,"o":"m 668 275 q 645 155 668 208 q 578 64 622 102 q 471 6 535 26 q 326 -14 408 -14 q 187 0 254 -14 q 63 45 120 15 l 63 241 q 129 211 96 225 q 196 185 162 197 q 265 167 231 174 q 333 160 299 160 q 392 168 368 160 q 432 190 417 176 q 455 223 448 203 q 462 264 462 242 q 450 314 462 292 q 417 354 438 335 q 365 390 396 372 q 298 427 335 408 q 228 467 267 444 q 155 524 189 490 q 98 607 121 558 q 75 723 75 655 q 97 842 75 790 q 159 931 119 895 q 258 987 200 968 q 388 1006 316 1006 q 458 1001 424 1006 q 526 987 492 996 q 594 965 560 978 q 663 936 627 953 l 596 772 q 539 797 565 786 q 487 816 512 808 q 438 827 462 823 q 389 831 414 831 q 308 802 336 831 q 280 727 280 774 q 288 683 280 702 q 316 646 297 663 q 364 612 334 630 q 435 572 393 594 q 529 517 486 545 q 603 454 572 488 q 651 376 634 420 q 668 275 668 333 m 510 -169 q 499 -239 510 -208 q 464 -290 488 -269 q 399 -322 440 -311 q 300 -334 359 -334 q 245 -329 269 -334 q 201 -319 220 -325 l 201 -205 q 223 -210 211 -208 q 249 -215 236 -213 q 275 -218 262 -217 q 298 -220 288 -220 q 332 -210 317 -220 q 347 -178 347 -201 q 322 -133 347 -153 q 234 -105 296 -114 l 287 0 l 418 0 l 399 -41 q 440 -59 420 -48 q 475 -87 460 -71 q 500 -124 490 -103 q 510 -169 510 -144 "},"B":{"x_min":125,"x_max":818,"ha":892,"o":"m 125 992 l 415 992 q 579 978 508 992 q 697 936 649 965 q 768 858 744 906 q 793 740 793 810 q 782 662 793 698 q 752 597 772 625 q 705 551 733 569 q 640 526 677 532 l 640 519 q 709 496 677 511 q 766 454 742 480 q 804 386 790 427 q 818 287 818 345 q 794 166 818 219 q 726 76 770 113 q 618 19 681 39 q 474 0 554 0 l 125 0 l 125 992 m 335 599 l 444 599 q 509 606 483 599 q 552 627 536 613 q 575 662 568 641 q 582 711 582 683 q 547 792 582 768 q 434 817 511 817 l 335 817 l 335 599 m 335 432 l 335 174 l 459 174 q 529 184 501 174 q 575 211 557 193 q 600 253 592 228 q 607 309 607 278 q 600 359 607 336 q 574 398 592 382 q 527 423 556 414 q 454 432 497 432 l 335 432 "},"…":{"x_min":79,"x_max":1109,"ha":1188,"o":"m 79 97 q 88 151 79 129 q 113 187 97 173 q 151 206 129 200 q 198 213 173 213 q 243 206 221 213 q 280 187 264 200 q 306 151 297 173 q 316 97 316 129 q 306 45 316 66 q 280 9 297 23 q 243 -11 264 -5 q 198 -18 221 -18 q 151 -11 173 -18 q 113 9 129 -5 q 88 45 97 23 q 79 97 79 66 m 475 97 q 484 151 475 129 q 509 187 493 173 q 547 206 525 200 q 595 213 569 213 q 640 206 618 213 q 677 187 661 200 q 703 151 694 173 q 713 97 713 129 q 703 45 713 66 q 677 9 694 23 q 640 -11 661 -5 q 595 -18 618 -18 q 547 -11 569 -18 q 509 9 525 -5 q 484 45 493 23 q 475 97 475 66 m 872 97 q 881 151 872 129 q 906 187 890 173 q 944 206 922 200 q 991 213 966 213 q 1036 206 1014 213 q 1073 187 1057 200 q 1099 151 1090 173 q 1109 97 1109 129 q 1099 45 1109 66 q 1073 9 1090 23 q 1036 -11 1057 -5 q 991 -18 1014 -18 q 944 -11 966 -18 q 906 9 922 -5 q 881 45 890 23 q 872 97 872 66 "},"H":{"x_min":125,"x_max":882,"ha":1007,"o":"m 882 0 l 671 0 l 671 428 l 335 428 l 335 0 l 125 0 l 125 992 l 335 992 l 335 603 l 671 603 l 671 992 l 882 992 l 882 0 "},"î":{"x_min":-70,"x_max":492,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 354 842 q 282 894 319 864 q 209 960 244 923 q 137 894 172 923 q 67 842 102 864 l -70 842 l -70 860 q -30 905 -52 879 q 12 958 -9 931 q 54 1013 34 986 q 90 1064 75 1040 l 331 1064 q 366 1013 346 1040 q 408 958 386 986 q 452 905 430 931 q 492 860 475 879 l 492 842 l 354 842 "},"ā":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 189 985 l 607 985 l 607 842 l 189 842 l 189 985 "},"ĵ":{"x_min":-70,"x_max":492,"ha":424,"o":"m 68 -334 q 1 -329 36 -334 q -56 -317 -32 -324 l -56 -154 q -16 -164 -34 -161 q 24 -167 1 -167 q 56 -162 41 -167 q 83 -144 72 -157 q 101 -109 94 -131 q 108 -52 108 -87 l 108 758 l 315 758 l 315 -82 q 301 -180 315 -134 q 259 -260 288 -226 q 182 -314 229 -294 q 68 -334 135 -334 m 354 842 q 282 894 319 864 q 209 960 244 923 q 137 894 172 923 q 67 842 102 864 l -70 842 l -70 860 q -30 905 -52 879 q 12 958 -9 931 q 54 1013 34 986 q 90 1064 75 1040 l 331 1064 q 366 1013 346 1040 q 408 958 386 986 q 452 905 430 931 q 492 860 475 879 l 492 842 l 354 842 "},"Ĩ":{"x_min":3,"x_max":537,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 158 1135 q 124 1119 137 1135 q 104 1069 112 1103 l 3 1069 q 20 1163 7 1123 q 56 1228 34 1202 q 108 1266 78 1253 q 173 1279 137 1279 q 227 1269 201 1279 q 280 1246 254 1259 q 331 1224 306 1234 q 381 1214 357 1214 q 414 1230 402 1214 q 435 1280 427 1246 l 537 1280 q 519 1187 532 1226 q 482 1122 505 1148 q 430 1083 460 1096 q 366 1071 401 1071 q 312 1081 339 1071 q 259 1103 284 1091 q 208 1125 233 1115 q 158 1135 182 1135 "},"*":{"x_min":42.8125,"x_max":714.546875,"ha":757,"o":"m 467 1055 l 439 805 l 692 875 l 714 704 l 483 688 l 635 487 l 481 405 l 375 617 l 282 406 l 122 487 l 272 688 l 42 706 l 69 875 l 316 805 l 289 1055 l 467 1055 "},"ă":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 654 1071 q 632 978 650 1020 q 584 906 615 936 q 508 858 552 875 q 405 842 463 842 q 301 858 345 842 q 226 904 256 874 q 180 976 196 934 q 162 1071 164 1018 l 277 1071 q 289 1024 280 1041 q 315 998 299 1007 q 354 987 331 989 q 406 985 377 985 q 453 988 431 985 q 492 1000 475 991 q 521 1026 510 1009 q 535 1071 533 1043 l 654 1071 "},"°":{"x_min":63,"x_max":532,"ha":595,"o":"m 63 771 q 81 862 63 819 q 131 936 99 904 q 206 987 163 968 q 297 1006 248 1006 q 389 987 346 1006 q 463 936 432 968 q 513 862 495 904 q 532 771 532 819 q 513 679 532 722 q 463 605 495 637 q 389 555 432 573 q 297 538 346 538 q 206 555 248 538 q 131 605 163 573 q 81 679 99 637 q 63 771 63 722 m 211 771 q 218 735 211 752 q 236 705 224 718 q 263 685 248 692 q 297 677 279 677 q 330 685 314 677 q 358 705 346 692 q 376 735 369 718 q 383 771 383 752 q 376 807 383 790 q 358 838 369 825 q 330 858 346 851 q 297 866 314 866 q 263 858 279 866 q 236 838 248 851 q 218 807 224 825 q 211 771 211 790 "},"Ķ":{"x_min":125,"x_max":880.25,"ha":880,"o":"m 880 0 l 641 0 l 413 412 l 335 354 l 335 0 l 125 0 l 125 992 l 335 992 l 335 514 l 417 654 l 644 992 l 877 992 l 561 544 l 880 0 m 300 -288 q 312 -242 306 -268 q 323 -188 318 -216 q 334 -134 329 -161 q 341 -85 339 -107 l 533 -85 l 533 -98 q 484 -198 512 -145 q 420 -307 456 -251 l 300 -307 l 300 -288 "},"ŵ":{"x_min":-0.25,"x_max":1120.25,"ha":1120,"o":"m 688 0 l 629 265 q 622 297 626 276 q 612 346 618 319 q 601 403 607 372 q 589 463 595 433 q 559 613 575 532 l 555 613 q 527 462 539 532 q 515 402 521 432 q 504 344 510 371 q 494 296 499 317 q 487 262 490 274 l 426 0 l 204 0 l 0 758 l 205 758 l 282 422 q 294 359 288 395 q 306 284 301 322 q 317 213 312 246 q 324 160 322 179 l 328 160 q 331 193 329 172 q 337 237 334 214 q 344 286 341 261 q 352 332 348 311 q 359 371 356 354 q 364 394 362 387 l 447 758 l 674 758 l 754 394 q 763 348 757 379 q 774 281 768 317 q 784 212 780 246 q 789 160 788 178 l 793 160 q 800 210 795 176 q 811 281 805 243 q 824 357 817 320 q 837 422 831 395 l 917 758 l 1120 758 l 913 0 l 688 0 m 702 842 q 630 894 667 864 q 557 960 592 923 q 485 894 520 923 q 415 842 450 864 l 278 842 l 278 860 q 317 905 295 879 q 360 958 338 931 q 402 1013 382 986 q 438 1064 423 1040 l 679 1064 q 714 1013 694 1040 q 756 958 734 986 q 800 905 778 931 q 840 860 823 879 l 840 842 l 702 842 "},"Ļ":{"x_min":125,"x_max":696,"ha":743,"o":"m 125 0 l 125 992 l 335 992 l 335 174 l 696 174 l 696 0 l 125 0 m 268 -288 q 280 -242 274 -268 q 291 -188 286 -216 q 302 -134 297 -161 q 309 -85 307 -107 l 501 -85 l 501 -98 q 452 -198 480 -145 q 388 -307 424 -251 l 268 -307 l 268 -288 "},"Õ":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 415 1135 q 381 1119 394 1135 q 361 1069 369 1103 l 260 1069 q 277 1163 264 1123 q 313 1228 291 1202 q 365 1266 335 1253 q 430 1279 394 1279 q 484 1269 458 1279 q 537 1246 511 1259 q 588 1224 563 1234 q 638 1214 614 1214 q 671 1230 659 1214 q 692 1280 684 1246 l 794 1280 q 776 1187 789 1226 q 739 1122 762 1148 q 687 1083 717 1096 q 623 1071 658 1071 q 569 1081 596 1071 q 516 1103 541 1091 q 465 1125 490 1115 q 415 1135 439 1135 "},"Ľ":{"x_min":125,"x_max":696,"ha":743,"o":"m 125 0 l 125 992 l 335 992 l 335 174 l 696 174 l 696 0 l 125 0 m 444 788 q 456 835 450 809 q 467 888 462 861 q 478 943 473 916 q 485 993 483 970 l 677 993 l 677 979 q 628 879 656 933 q 564 771 600 825 l 444 771 l 444 788 "},"ť":{"x_min":32,"x_max":654,"ha":575,"o":"m 416 152 q 474 158 446 152 q 530 175 501 165 l 530 20 q 457 -4 500 5 q 364 -14 414 -14 q 271 -2 314 -14 q 198 38 229 9 q 148 115 166 67 q 131 237 131 164 l 131 604 l 32 604 l 32 691 l 145 759 l 205 919 l 337 919 l 337 758 l 521 758 l 521 604 l 337 604 l 337 238 q 359 173 337 194 q 416 152 381 152 m 421 865 q 433 912 427 886 q 444 965 439 938 q 455 1020 450 993 q 462 1070 460 1047 l 654 1070 l 654 1056 q 605 956 633 1010 q 541 848 577 902 l 421 848 l 421 865 "},"o":{"x_min":69,"x_max":762,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 "},"d":{"x_min":69,"x_max":735,"ha":844,"o":"m 329 -14 q 224 11 271 -14 q 141 85 176 36 q 88 208 107 134 q 69 377 69 281 q 88 549 69 475 q 142 672 107 622 q 227 747 178 722 q 335 773 276 773 q 402 764 372 773 q 457 741 433 756 q 500 706 481 726 q 534 663 520 687 l 541 663 q 534 716 537 690 q 528 765 530 739 q 526 813 526 791 l 526 1055 l 735 1055 l 735 0 l 575 0 l 534 99 l 526 99 q 493 54 512 75 q 451 18 475 34 q 397 -5 427 3 q 329 -14 367 -14 m 406 152 q 467 164 442 152 q 508 202 492 177 q 531 266 524 228 q 540 355 539 304 l 540 378 q 533 476 540 433 q 511 547 526 519 q 470 591 496 576 q 404 606 444 606 q 310 547 340 606 q 280 376 280 489 q 310 208 280 264 q 406 152 341 152 "},",":{"x_min":43,"x_max":312,"ha":403,"o":"m 312 145 q 289 67 302 108 q 259 -15 275 26 q 226 -99 243 -57 q 192 -179 209 -141 l 43 -179 q 63 -92 53 -137 q 82 -3 73 -48 q 98 82 91 40 q 111 161 106 125 l 301 161 l 312 145 "},"\\"":{"x_min":90,"x_max":565.21875,"ha":656,"o":"m 279 992 l 251 634 l 117 634 l 90 992 l 279 992 m 565 992 l 537 634 l 403 634 l 376 992 l 565 992 "},"ľ":{"x_min":109,"x_max":611,"ha":424,"o":"m 315 0 l 109 0 l 109 1055 l 315 1055 l 315 0 m 378 851 q 390 898 384 872 q 401 951 396 924 q 412 1006 407 979 q 419 1056 417 1033 l 611 1056 l 611 1042 q 562 942 590 996 q 498 834 534 888 l 378 834 l 378 851 "},"ė":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 296 954 q 304 1003 296 984 q 328 1034 313 1022 q 364 1051 344 1046 q 408 1056 385 1056 q 451 1051 431 1056 q 487 1034 472 1046 q 511 1003 502 1022 q 521 954 521 984 q 511 906 521 926 q 487 875 502 886 q 451 858 472 863 q 408 853 431 853 q 364 858 385 853 q 328 875 344 863 q 304 906 313 886 q 296 954 296 926 "},"Í":{"x_min":44.28125,"x_max":510,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 160 1071 l 160 1089 q 190 1134 174 1108 q 222 1187 206 1160 q 252 1242 238 1215 q 278 1293 267 1269 l 510 1293 l 510 1278 q 488 1250 502 1266 q 455 1214 474 1233 q 416 1175 437 1195 q 374 1136 395 1155 q 332 1100 352 1117 q 297 1071 313 1083 l 160 1071 "},"Ú":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 387 1071 l 387 1089 q 417 1134 401 1108 q 449 1187 433 1160 q 479 1242 465 1215 q 505 1293 494 1269 l 737 1293 l 737 1278 q 715 1250 729 1266 q 682 1214 701 1233 q 643 1175 664 1195 q 601 1136 622 1155 q 559 1100 579 1117 q 524 1071 540 1083 l 387 1071 "},"Ŷ":{"x_min":-0.25,"x_max":812.25,"ha":811,"o":"m 406 583 l 585 992 l 812 992 l 511 385 l 511 0 l 301 0 l 301 379 l 0 992 l 227 992 l 406 583 m 548 1071 q 476 1123 513 1093 q 403 1189 438 1152 q 331 1123 366 1152 q 261 1071 296 1093 l 124 1071 l 124 1089 q 163 1134 141 1108 q 206 1187 184 1160 q 248 1242 228 1215 q 284 1293 269 1269 l 525 1293 q 560 1242 540 1269 q 602 1187 580 1215 q 646 1134 624 1160 q 686 1089 669 1108 l 686 1071 l 548 1071 "},"Ý":{"x_min":-0.25,"x_max":812.25,"ha":811,"o":"m 406 583 l 585 992 l 812 992 l 511 385 l 511 0 l 301 0 l 301 379 l 0 992 l 227 992 l 406 583 m 287 1071 l 287 1089 q 317 1134 301 1108 q 349 1187 333 1160 q 379 1242 365 1215 q 405 1293 394 1269 l 637 1293 l 637 1278 q 615 1250 629 1266 q 582 1214 601 1233 q 543 1175 564 1195 q 501 1136 522 1155 q 459 1100 479 1117 q 424 1071 440 1083 l 287 1071 "},"ŝ":{"x_min":66,"x_max":633,"ha":668,"o":"m 614 225 q 592 120 614 165 q 530 45 570 75 q 433 0 490 15 q 305 -14 376 -14 q 236 -11 268 -14 q 176 -3 204 -9 q 121 9 147 1 q 67 30 94 17 l 67 201 q 127 176 95 187 q 189 156 158 164 q 249 143 220 148 q 304 139 279 139 q 351 144 331 139 q 383 158 370 149 q 401 179 395 167 q 407 205 407 191 q 402 230 407 219 q 382 254 398 242 q 337 283 367 267 q 256 322 307 299 q 171 366 207 344 q 112 415 135 388 q 77 477 88 442 q 66 561 66 512 q 86 653 66 614 q 144 720 106 693 q 234 759 181 746 q 351 773 286 773 q 480 757 419 773 q 605 710 541 741 l 543 564 q 445 604 492 588 q 352 619 398 619 q 291 604 310 619 q 272 563 272 589 q 277 539 272 550 q 296 518 282 529 q 336 493 310 506 q 403 461 362 480 q 490 419 451 440 q 556 372 528 398 q 599 310 584 345 q 614 225 614 275 m 495 842 q 423 894 460 864 q 350 960 385 923 q 278 894 313 923 q 208 842 243 864 l 71 842 l 71 860 q 110 905 88 879 q 153 958 131 931 q 195 1013 175 986 q 231 1064 216 1040 l 472 1064 q 507 1013 487 1040 q 549 958 527 986 q 593 905 571 931 q 633 860 616 879 l 633 842 l 495 842 "},"ą":{"x_min":58,"x_max":702,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 570 -154 q 585 -196 570 -182 q 624 -209 600 -209 q 667 -205 645 -209 q 702 -197 688 -201 l 702 -318 q 655 -329 680 -324 q 596 -334 630 -334 q 525 -322 557 -334 q 472 -290 494 -310 q 438 -241 450 -269 q 427 -177 427 -212 q 436 -124 427 -148 q 462 -78 445 -99 q 501 -38 479 -57 q 549 0 523 -19 l 670 0 q 596 -81 623 -44 q 570 -154 570 -118 "},"ã":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 289 906 q 255 890 268 906 q 235 840 243 874 l 134 840 q 151 934 138 894 q 187 999 165 973 q 239 1037 209 1024 q 304 1050 268 1050 q 358 1040 332 1050 q 411 1017 385 1030 q 462 995 437 1005 q 512 985 488 985 q 545 1001 533 985 q 566 1051 558 1017 l 668 1051 q 650 958 663 997 q 613 893 636 919 q 561 854 591 867 q 497 842 532 842 q 443 852 470 842 q 390 874 415 862 q 339 896 364 886 q 289 906 313 906 "},"æ":{"x_min":58,"x_max":1159,"ha":1225,"o":"m 860 -14 q 698 20 771 -14 q 578 125 625 54 q 521 62 549 89 q 459 19 492 36 q 384 -5 426 2 q 287 -14 342 -14 q 199 0 241 -14 q 126 44 157 15 q 76 119 94 74 q 58 226 58 164 q 135 404 58 346 q 367 467 212 461 l 488 471 l 488 528 q 460 598 488 575 q 384 620 433 620 q 289 606 335 620 q 195 568 242 592 l 128 705 q 254 755 185 737 q 399 774 323 774 q 618 685 544 774 q 832 773 704 773 q 968 750 907 773 q 1071 683 1029 727 q 1136 574 1113 639 q 1159 427 1159 510 l 1159 327 l 694 327 q 708 248 696 283 q 744 189 721 213 q 799 152 767 165 q 873 139 831 139 q 996 154 937 139 q 1116 199 1056 168 l 1116 39 q 1061 15 1089 25 q 1003 -1 1034 5 q 937 -10 972 -7 q 860 -14 902 -14 m 488 351 l 419 348 q 348 337 377 347 q 302 312 320 328 q 277 274 285 296 q 269 226 269 252 q 292 159 269 178 q 353 139 316 139 q 406 149 382 139 q 449 177 431 158 q 477 225 467 197 q 488 289 488 252 l 488 351 m 833 625 q 740 586 777 625 q 698 465 704 548 l 964 465 q 955 529 963 499 q 931 579 947 558 q 890 613 915 601 q 833 625 866 625 "},"ĩ":{"x_min":-55,"x_max":479,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 100 906 q 66 890 79 906 q 46 840 54 874 l -55 840 q -37 934 -50 894 q -1 999 -23 973 q 50 1037 20 1024 q 115 1050 79 1050 q 169 1040 143 1050 q 222 1017 196 1030 q 273 995 248 1005 q 323 985 299 985 q 356 1001 344 985 q 377 1051 369 1017 l 479 1051 q 461 958 474 997 q 424 893 447 919 q 372 854 402 867 q 308 842 343 842 q 254 852 281 842 q 201 874 226 862 q 150 896 175 886 q 100 906 124 906 "},"~":{"x_min":60,"x_max":705,"ha":765,"o":"m 358 417 q 313 435 333 428 q 278 447 294 443 q 248 453 262 452 q 218 455 234 455 q 177 449 198 455 q 136 431 156 442 q 96 405 116 420 q 60 373 77 390 l 60 530 q 137 585 94 566 q 233 604 180 604 q 271 602 253 604 q 307 595 288 600 q 350 582 326 591 q 406 560 374 574 q 451 542 432 549 q 487 531 471 535 q 518 525 503 526 q 547 523 532 523 q 587 529 566 523 q 629 547 608 536 q 668 573 649 558 q 705 605 688 588 l 705 448 q 531 375 636 375 q 493 376 511 375 q 457 382 476 378 q 414 395 438 387 q 358 417 390 404 "},"ŀ":{"x_min":109,"x_max":620,"ha":603,"o":"m 315 0 l 109 0 l 109 1055 l 315 1055 l 315 0 m 395 471 q 403 520 395 501 q 427 551 412 539 q 463 568 443 563 q 507 573 484 573 q 550 568 530 573 q 586 551 571 563 q 610 520 601 539 q 620 471 620 501 q 610 423 620 443 q 586 392 601 403 q 550 375 571 380 q 507 370 530 370 q 463 375 484 370 q 427 392 443 380 q 403 423 412 403 q 395 471 395 443 "},"Ċ":{"x_min":81,"x_max":836.296875,"ha":885,"o":"m 546 831 q 439 807 485 831 q 361 740 392 784 q 313 633 329 696 q 297 492 297 571 q 311 351 297 413 q 356 247 326 289 q 433 183 386 205 q 546 160 481 160 q 667 174 606 160 q 799 213 727 188 l 799 36 q 734 13 766 23 q 669 -1 702 4 q 601 -10 636 -7 q 526 -14 566 -14 q 327 22 411 -14 q 188 125 243 59 q 107 285 133 192 q 81 494 81 379 q 111 700 81 606 q 201 862 142 794 q 346 968 260 930 q 546 1006 433 1006 q 694 987 620 1006 q 836 936 768 968 l 768 765 q 656 811 712 791 q 546 831 600 831 m 424 1183 q 432 1232 424 1213 q 456 1263 441 1251 q 492 1280 472 1275 q 536 1285 513 1285 q 579 1280 559 1285 q 615 1263 600 1275 q 639 1232 630 1251 q 649 1183 649 1213 q 639 1135 649 1155 q 615 1104 630 1115 q 579 1087 600 1092 q 536 1082 559 1082 q 492 1087 513 1082 q 456 1104 472 1092 q 432 1135 441 1115 q 424 1183 424 1155 "},"¡":{"x_min":79,"x_max":316,"ha":397,"o":"m 113 410 l 278 410 l 313 -250 l 79 -250 l 113 410 m 316 642 q 306 588 316 610 q 281 552 297 566 q 243 533 265 539 q 196 527 221 527 q 151 533 173 527 q 114 552 130 539 q 88 588 97 566 q 79 642 79 610 q 88 695 79 673 q 114 731 97 717 q 151 751 130 745 q 196 758 173 758 q 243 751 221 758 q 281 731 265 745 q 306 695 297 717 q 316 642 316 673 "},"P":{"x_min":125,"x_max":769,"ha":831,"o":"m 335 526 l 377 526 q 513 561 467 526 q 558 674 558 596 q 517 782 558 747 q 389 817 476 817 l 335 817 l 335 526 m 769 682 q 749 557 769 616 q 684 451 729 497 q 565 379 639 406 q 383 352 492 352 l 335 352 l 335 0 l 125 0 l 125 992 l 400 992 q 565 970 496 992 q 680 909 635 949 q 747 812 725 869 q 769 682 769 754 "},"%":{"x_min":43,"x_max":1181,"ha":1224,"o":"m 213 695 q 229 566 213 608 q 278 523 244 523 q 327 565 311 523 q 343 695 343 607 q 278 865 343 865 q 229 823 244 865 q 213 695 213 781 m 514 695 q 500 564 514 622 q 457 465 486 505 q 383 404 427 425 q 276 383 338 383 q 175 404 219 383 q 102 465 131 425 q 57 564 72 505 q 43 695 43 622 q 56 826 43 769 q 98 924 70 884 q 171 984 127 963 q 276 1006 215 1006 q 379 984 335 1006 q 453 924 423 963 q 498 826 483 884 q 514 695 514 769 m 967 992 l 416 0 l 254 0 l 805 992 l 967 992 m 880 299 q 896 170 880 213 q 945 128 911 128 q 994 170 978 128 q 1010 299 1010 212 q 945 469 1010 469 q 896 427 911 469 q 880 299 880 386 m 1181 300 q 1167 168 1181 226 q 1123 70 1153 110 q 1050 9 1094 30 q 943 -12 1005 -12 q 842 9 885 -12 q 769 70 798 30 q 724 168 739 110 q 710 300 710 226 q 723 430 710 373 q 765 528 737 488 q 838 588 794 567 q 943 610 882 610 q 1046 588 1001 610 q 1120 528 1090 567 q 1165 430 1150 488 q 1181 300 1181 373 "},"_":{"x_min":-3,"x_max":574,"ha":571,"o":"m 574 -219 l -3 -219 l -3 -125 l 574 -125 l 574 -219 "},"ñ":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 535 565 560 524 q 456 606 510 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 m 324 906 q 290 890 303 906 q 270 840 278 874 l 169 840 q 186 934 173 894 q 222 999 200 973 q 274 1037 244 1024 q 339 1050 303 1050 q 393 1040 367 1050 q 446 1017 420 1030 q 497 995 472 1005 q 547 985 523 985 q 580 1001 568 985 q 601 1051 593 1017 l 703 1051 q 685 958 698 997 q 648 893 671 919 q 596 854 626 867 q 532 842 567 842 q 478 852 505 842 q 425 874 450 862 q 374 896 399 886 q 324 906 348 906 "},"Ŕ":{"x_min":125,"x_max":875.25,"ha":875,"o":"m 335 545 l 393 545 q 520 581 481 545 q 558 685 558 616 q 517 786 558 756 q 389 817 476 817 l 335 817 l 335 545 m 335 379 l 335 0 l 125 0 l 125 992 l 396 992 q 678 918 587 992 q 769 694 769 844 q 755 601 769 642 q 719 527 741 559 q 666 471 696 495 q 604 430 637 447 q 739 215 679 310 q 789 136 765 175 q 832 67 813 98 q 863 18 851 37 l 875 0 l 641 0 l 427 379 l 335 379 m 310 1071 l 310 1089 q 340 1134 324 1108 q 372 1187 356 1160 q 402 1242 388 1215 q 428 1293 417 1269 l 660 1293 l 660 1278 q 638 1250 652 1266 q 605 1214 624 1233 q 566 1175 587 1195 q 524 1136 545 1155 q 482 1100 502 1117 q 447 1071 463 1083 l 310 1071 "},"Æ":{"x_min":0,"x_max":1198,"ha":1280,"o":"m 1198 0 l 628 0 l 628 235 l 315 235 l 213 0 l 0 0 l 444 992 l 1198 992 l 1198 817 l 838 817 l 838 602 l 1173 602 l 1173 427 l 838 427 l 838 174 l 1198 174 l 1198 0 m 392 410 l 628 410 l 628 810 l 562 810 l 392 410 "},"Ū":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 287 1214 l 705 1214 l 705 1071 l 287 1071 l 287 1214 "},"Œ":{"x_min":81,"x_max":1228,"ha":1310,"o":"m 1228 0 l 657 0 q 594 -10 627 -6 q 525 -14 561 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 412 1007 q 596 1003 563 1007 q 660 992 629 999 l 1228 992 l 1228 817 l 868 817 l 868 602 l 1203 602 l 1203 427 l 868 427 l 868 174 l 1228 174 l 1228 0 m 526 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 599 167 566 160 q 658 187 632 174 l 658 804 q 600 824 632 817 q 526 832 567 832 "},"Ą":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 712 -154 q 727 -196 712 -182 q 766 -209 742 -209 q 809 -205 787 -209 q 844 -197 830 -201 l 844 -318 q 797 -329 822 -324 q 738 -334 772 -334 q 667 -322 699 -334 q 614 -290 636 -310 q 580 -241 592 -269 q 569 -177 569 -212 q 578 -124 569 -148 q 604 -78 587 -99 q 643 -38 621 -57 q 691 0 665 -19 l 812 0 q 738 -81 765 -44 q 712 -154 712 -118 "},"<":{"x_min":60,"x_max":705,"ha":765,"o":"m 705 138 l 60 434 l 60 531 l 705 868 l 705 705 l 268 490 l 705 300 l 705 138 "},"¬":{"x_min":60,"x_max":705,"ha":765,"o":"m 705 168 l 556 168 l 556 415 l 60 415 l 60 564 l 705 564 l 705 168 "},"t":{"x_min":32,"x_max":530,"ha":575,"o":"m 416 152 q 474 158 446 152 q 530 175 501 165 l 530 20 q 457 -4 500 5 q 364 -14 414 -14 q 271 -2 314 -14 q 198 38 229 9 q 148 115 166 67 q 131 237 131 164 l 131 604 l 32 604 l 32 691 l 145 759 l 205 919 l 337 919 l 337 758 l 521 758 l 521 604 l 337 604 l 337 238 q 359 173 337 194 q 416 152 381 152 "},"ù":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 395 842 q 340 889 372 860 q 276 946 307 917 q 219 1004 245 976 q 183 1049 193 1031 l 183 1064 l 414 1064 q 440 1013 425 1040 q 470 958 454 986 q 502 905 486 931 q 533 860 518 879 l 533 842 l 395 842 "},"ï":{"x_min":-21,"x_max":444,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m -21 953 q -13 994 -21 977 q 6 1022 -6 1011 q 36 1039 19 1034 q 73 1045 53 1045 q 110 1039 93 1045 q 140 1022 127 1034 q 161 994 153 1011 q 169 953 169 977 q 161 913 169 930 q 140 885 153 896 q 110 868 127 873 q 73 863 93 863 q 36 868 53 863 q 6 885 19 873 q -13 913 -6 896 q -21 953 -21 930 m 252 953 q 259 994 252 977 q 279 1022 266 1011 q 310 1039 292 1034 q 348 1045 327 1045 q 384 1039 367 1045 q 415 1022 401 1034 q 436 994 428 1011 q 444 953 444 977 q 436 913 444 930 q 415 885 428 896 q 384 868 401 873 q 348 863 367 863 q 279 885 307 863 q 252 953 252 907 "},"Ò":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 495 1071 q 440 1118 472 1089 q 376 1175 407 1146 q 319 1233 345 1205 q 283 1278 293 1260 l 283 1293 l 514 1293 q 540 1242 525 1269 q 570 1187 554 1215 q 602 1134 586 1160 q 633 1089 618 1108 l 633 1071 l 495 1071 "},"I":{"x_min":44.28125,"x_max":495.96875,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 "},"·":{"x_min":79,"x_max":316,"ha":396,"o":"m 79 490 q 88 544 79 522 q 113 580 97 566 q 151 599 129 593 q 198 606 173 606 q 243 599 221 606 q 280 580 264 593 q 306 544 297 566 q 316 490 316 522 q 306 437 316 459 q 280 401 297 415 q 243 381 264 387 q 198 375 221 375 q 151 381 173 375 q 113 401 129 387 q 88 437 97 415 q 79 490 79 459 "},"¿":{"x_min":45,"x_max":628,"ha":638,"o":"m 465 410 l 465 359 q 457 297 465 325 q 436 243 450 269 q 398 194 421 218 q 342 145 375 171 q 294 105 314 122 q 262 70 274 87 q 245 34 250 53 q 239 -9 239 15 q 266 -73 239 -48 q 345 -98 292 -98 q 446 -78 392 -98 q 558 -30 501 -58 l 628 -180 q 564 -213 598 -197 q 492 -239 529 -228 q 417 -258 455 -251 q 343 -265 379 -265 q 218 -248 274 -265 q 125 -200 163 -231 q 65 -123 86 -168 q 45 -19 45 -77 q 54 56 45 22 q 82 118 63 89 q 129 174 101 147 q 194 231 157 201 q 240 270 222 253 q 268 301 258 286 q 282 332 278 316 q 285 370 285 349 l 285 410 l 465 410 m 487 642 q 477 588 487 610 q 452 552 468 566 q 414 533 436 539 q 367 527 392 527 q 322 533 344 527 q 285 552 301 539 q 259 588 268 566 q 250 642 250 610 q 259 695 250 673 q 285 731 268 717 q 322 751 301 745 q 367 758 344 758 q 414 751 392 758 q 452 731 436 745 q 477 695 468 717 q 487 642 487 673 "},"ſ":{"x_min":109,"x_max":537,"ha":504,"o":"m 389 896 q 332 870 349 896 q 315 804 315 844 l 315 0 l 109 0 l 109 814 q 126 934 109 886 q 176 1010 144 982 q 255 1051 209 1039 q 358 1063 301 1063 q 464 1053 421 1063 q 537 1030 507 1043 l 488 877 q 444 890 467 884 q 389 896 421 896 "},"ű":{"x_min":104,"x_max":804,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 213 842 l 213 860 q 243 905 227 879 q 275 958 259 931 q 305 1013 291 986 q 330 1064 320 1040 l 535 1064 l 535 1049 q 513 1021 527 1037 q 480 985 499 1004 q 441 946 462 966 q 398 907 419 926 q 357 871 377 888 q 322 842 337 854 l 213 842 m 482 842 l 482 860 q 512 905 496 879 q 544 958 528 931 q 574 1013 560 986 q 599 1064 589 1040 l 804 1064 l 804 1049 q 782 1021 796 1037 q 749 985 768 1004 q 710 946 731 966 q 668 907 689 926 q 627 871 646 888 q 591 842 607 854 l 482 842 "},";":{"x_min":43,"x_max":316,"ha":403,"o":"m 301 161 l 312 145 q 289 67 302 108 q 259 -15 275 26 q 226 -99 243 -57 q 192 -179 209 -141 l 43 -179 q 63 -92 53 -137 q 82 -3 73 -48 q 98 82 91 40 q 111 161 106 125 l 301 161 m 79 657 q 88 711 79 689 q 113 747 97 733 q 151 766 129 760 q 198 773 173 773 q 243 766 221 773 q 280 747 264 760 q 306 711 297 733 q 316 657 316 689 q 306 604 316 626 q 280 568 297 582 q 243 548 264 554 q 198 542 221 542 q 151 548 173 542 q 113 568 129 554 q 88 604 97 582 q 79 657 79 626 "},"Ġ":{"x_min":81,"x_max":895,"ha":1006,"o":"m 502 557 l 895 557 l 895 42 q 815 18 855 29 q 732 1 775 8 q 642 -9 689 -5 q 542 -14 595 -14 q 345 18 431 -14 q 200 116 259 51 q 111 276 142 181 q 81 497 81 372 q 114 708 81 613 q 214 868 148 802 q 377 970 281 934 q 599 1006 474 1006 q 754 989 678 1006 q 893 944 830 972 l 823 776 q 719 815 777 799 q 597 831 661 831 q 473 806 528 831 q 378 738 418 782 q 318 632 339 694 q 297 492 297 569 q 311 358 297 419 q 357 253 326 298 q 438 185 388 209 q 555 160 487 160 q 631 165 600 160 q 689 174 662 169 l 689 382 l 502 382 l 502 557 m 437 1183 q 445 1232 437 1213 q 469 1263 454 1251 q 505 1280 485 1275 q 549 1285 526 1285 q 592 1280 572 1285 q 628 1263 613 1275 q 652 1232 643 1251 q 662 1183 662 1213 q 652 1135 662 1155 q 628 1104 643 1115 q 592 1087 613 1092 q 549 1082 572 1082 q 505 1087 526 1082 q 469 1104 485 1092 q 445 1135 454 1115 q 437 1183 437 1155 "},"n":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 535 565 560 524 q 456 606 510 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 "},"ģ":{"x_min":14,"x_max":735.140625,"ha":766,"o":"m 735 757 l 735 644 l 624 610 q 643 562 638 587 q 649 509 649 537 q 630 403 649 451 q 576 322 612 356 q 486 269 540 288 q 360 251 432 251 q 326 252 345 251 q 299 256 308 254 q 279 232 286 244 q 271 201 271 219 q 280 179 271 187 q 303 165 289 170 q 336 158 317 160 q 375 157 355 157 l 493 157 q 591 144 547 157 q 664 106 634 131 q 710 40 694 80 q 727 -54 727 0 q 701 -170 727 -118 q 624 -258 675 -222 q 497 -314 573 -295 q 322 -334 421 -334 q 187 -319 244 -334 q 91 -277 129 -304 q 33 -211 52 -249 q 14 -123 14 -172 q 28 -51 14 -81 q 66 0 42 -20 q 120 36 90 22 q 182 57 150 49 q 154 74 168 63 q 129 99 140 85 q 111 131 118 113 q 104 167 104 148 q 110 206 104 189 q 128 239 116 224 q 159 268 141 254 q 200 296 177 282 q 105 379 140 322 q 71 513 71 436 q 89 622 71 574 q 145 704 108 670 q 236 755 182 737 q 360 773 290 773 q 391 771 374 773 q 424 767 408 769 q 455 762 441 764 q 477 757 469 759 l 735 757 m 193 -107 q 200 -141 193 -125 q 224 -169 207 -157 q 266 -189 240 -181 q 331 -196 293 -196 q 490 -166 437 -196 q 543 -85 543 -135 q 510 -27 543 -42 q 408 -13 477 -13 l 312 -13 q 273 -17 294 -13 q 234 -33 252 -22 q 205 -62 217 -44 q 193 -107 193 -80 m 265 510 q 289 415 265 448 q 360 381 312 381 q 432 415 410 381 q 454 510 454 448 q 432 607 454 571 q 360 643 410 643 q 265 510 265 643 m 497 1045 q 484 999 490 1025 q 473 945 478 973 q 462 891 467 918 q 455 842 457 864 l 264 842 l 264 856 q 312 955 284 902 q 376 1064 340 1008 l 497 1064 l 497 1045 "},"ň":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 535 565 560 524 q 456 606 510 606 q 388 590 415 606 q 345 542 361 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 758 l 267 758 l 294 661 l 306 661 q 346 711 322 690 q 397 746 369 732 q 456 766 425 760 q 520 773 487 773 q 621 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 m 717 1045 q 677 1000 700 1026 q 633 947 655 974 q 591 892 611 919 q 556 842 571 865 l 315 842 q 279 892 300 865 q 237 947 259 919 q 194 1000 215 974 q 155 1045 172 1026 l 155 1064 l 292 1064 q 362 1011 327 1041 q 434 945 397 982 q 507 1011 469 982 q 579 1064 544 1041 l 717 1064 l 717 1045 "},"ę":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 536 -140 q 551 -182 536 -168 q 590 -195 566 -195 q 633 -191 611 -195 q 668 -183 654 -187 l 668 -304 q 621 -315 646 -310 q 562 -320 596 -320 q 491 -308 523 -320 q 438 -276 460 -296 q 404 -227 416 -255 q 393 -163 393 -198 q 402 -110 393 -134 q 428 -64 411 -85 q 467 -24 445 -43 q 515 14 489 -5 l 636 14 q 562 -67 589 -30 q 536 -140 536 -104 "},"į":{"x_min":73,"x_max":348,"ha":424,"o":"m 100 953 q 109 1002 100 983 q 133 1033 117 1021 q 169 1050 148 1045 q 212 1055 189 1055 q 256 1050 235 1055 q 291 1033 276 1045 q 316 1002 307 1021 q 325 953 325 983 q 316 905 325 925 q 291 874 307 885 q 256 857 276 862 q 212 852 235 852 q 169 857 189 852 q 133 874 148 862 q 109 905 117 885 q 100 953 100 925 m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 216 -154 q 231 -196 216 -182 q 270 -209 246 -209 q 313 -205 291 -209 q 348 -197 334 -201 l 348 -318 q 301 -329 326 -324 q 242 -334 276 -334 q 171 -322 203 -334 q 118 -290 140 -310 q 84 -241 96 -269 q 73 -177 73 -212 q 82 -124 73 -148 q 108 -78 91 -99 q 147 -38 125 -57 q 195 0 169 -19 l 316 0 q 242 -81 269 -44 q 216 -154 216 -118 "},"ĸ":{"x_min":109,"x_max":819,"ha":819,"o":"m 307 383 l 393 515 l 580 758 l 801 758 l 527 421 l 819 0 l 585 0 l 396 283 l 315 227 l 315 0 l 109 0 l 109 758 l 315 758 l 315 559 q 314 501 315 532 q 310 444 312 470 q 305 383 307 412 l 307 383 "},"g":{"x_min":14,"x_max":735.140625,"ha":766,"o":"m 735 757 l 735 644 l 624 610 q 643 562 638 587 q 649 509 649 537 q 630 403 649 451 q 576 322 612 356 q 486 269 540 288 q 360 251 432 251 q 326 252 345 251 q 299 256 308 254 q 279 232 286 244 q 271 201 271 219 q 280 179 271 187 q 303 165 289 170 q 336 158 317 160 q 375 157 355 157 l 493 157 q 591 144 547 157 q 664 106 634 131 q 710 40 694 80 q 727 -54 727 0 q 701 -170 727 -118 q 624 -258 675 -222 q 497 -314 573 -295 q 322 -334 421 -334 q 187 -319 244 -334 q 91 -277 129 -304 q 33 -211 52 -249 q 14 -123 14 -172 q 28 -51 14 -81 q 66 0 42 -20 q 120 36 90 22 q 182 57 150 49 q 154 74 168 63 q 129 99 140 85 q 111 131 118 113 q 104 167 104 148 q 110 206 104 189 q 128 239 116 224 q 159 268 141 254 q 200 296 177 282 q 105 379 140 322 q 71 513 71 436 q 89 622 71 574 q 145 704 108 670 q 236 755 182 737 q 360 773 290 773 q 391 771 374 773 q 424 767 408 769 q 455 762 441 764 q 477 757 469 759 l 735 757 m 193 -107 q 200 -141 193 -125 q 224 -169 207 -157 q 266 -189 240 -181 q 331 -196 293 -196 q 490 -166 437 -196 q 543 -85 543 -135 q 510 -27 543 -42 q 408 -13 477 -13 l 312 -13 q 273 -17 294 -13 q 234 -33 252 -22 q 205 -62 217 -44 q 193 -107 193 -80 m 265 510 q 289 415 265 448 q 360 381 312 381 q 432 415 410 381 q 454 510 454 448 q 432 607 454 571 q 360 643 410 643 q 265 510 265 643 "},"²":{"x_min":31.578125,"x_max":476.28125,"ha":526,"o":"m 476 397 l 37 397 l 37 508 l 189 657 q 242 710 221 687 q 275 751 263 732 q 293 785 288 769 q 298 819 298 801 q 282 859 298 845 q 238 873 265 873 q 181 859 211 873 q 115 815 151 846 l 31 918 q 130 981 75 957 q 259 1006 185 1006 q 341 994 304 1006 q 404 961 378 983 q 445 908 430 940 q 460 835 460 876 q 451 776 460 803 q 424 720 443 748 q 377 662 406 692 q 308 594 349 631 l 237 529 l 476 529 l 476 397 "},"Ã":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 342 1135 q 308 1119 321 1135 q 288 1069 296 1103 l 187 1069 q 204 1163 191 1123 q 240 1228 218 1202 q 292 1266 262 1253 q 357 1279 321 1279 q 411 1269 385 1279 q 464 1246 438 1259 q 515 1224 490 1234 q 565 1214 541 1214 q 598 1230 586 1214 q 619 1280 611 1246 l 721 1280 q 703 1187 716 1226 q 666 1122 689 1148 q 614 1083 644 1096 q 550 1071 585 1071 q 496 1081 523 1071 q 443 1103 468 1091 q 392 1125 417 1115 q 342 1135 366 1135 "},"©":{"x_min":68,"x_max":1088,"ha":1156,"o":"m 606 699 q 504 645 540 699 q 468 495 468 591 q 501 344 468 397 q 606 291 534 291 q 690 302 645 291 q 774 331 735 312 l 774 212 q 695 187 735 196 q 603 178 655 178 q 476 201 530 178 q 385 266 422 224 q 331 366 349 308 q 313 497 313 425 q 330 625 313 567 q 383 725 348 683 q 473 789 419 766 q 597 813 526 813 q 706 799 654 813 q 804 765 758 786 l 754 659 q 606 699 677 699 m 68 495 q 86 631 68 566 q 137 753 104 696 q 217 856 170 809 q 320 936 264 903 q 442 987 377 969 q 578 1006 507 1006 q 713 987 648 1006 q 835 936 778 969 q 938 856 892 903 q 1018 753 985 809 q 1069 631 1051 696 q 1088 495 1088 566 q 1069 359 1088 425 q 1018 238 1051 294 q 938 134 985 181 q 835 55 892 88 q 713 3 778 21 q 578 -14 648 -14 q 442 3 507 -14 q 320 55 377 21 q 217 134 264 88 q 137 238 170 181 q 86 359 104 294 q 68 495 68 425 m 164 496 q 196 334 164 409 q 285 203 229 259 q 416 114 341 147 q 578 82 491 82 q 739 114 664 82 q 870 203 814 147 q 959 334 926 259 q 991 496 991 409 q 959 657 991 582 q 870 788 926 732 q 739 877 814 844 q 578 909 664 909 q 416 877 491 909 q 285 788 341 844 q 196 657 229 732 q 164 496 164 582 "},"Ă":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 698 1300 q 676 1207 694 1249 q 628 1135 659 1165 q 552 1087 596 1104 q 449 1071 507 1071 q 345 1087 389 1071 q 270 1133 300 1103 q 224 1205 240 1163 q 206 1300 208 1247 l 321 1300 q 333 1253 324 1270 q 359 1227 343 1236 q 398 1216 375 1218 q 450 1214 421 1214 q 497 1217 475 1214 q 536 1229 519 1220 q 565 1255 554 1238 q 579 1300 577 1272 l 698 1300 "},"ÿ":{"x_min":-0.25,"x_max":749.25,"ha":749,"o":"m 0 758 l 226 758 l 348 331 q 364 256 359 296 q 371 184 369 216 l 375 184 q 378 219 376 200 q 384 257 381 238 q 392 296 388 277 q 401 331 396 316 l 521 758 l 749 758 l 449 -96 q 334 -275 407 -217 q 152 -334 261 -334 q 91 -330 116 -334 q 47 -322 65 -326 l 47 -158 q 83 -164 61 -161 q 128 -167 104 -167 q 184 -158 161 -167 q 224 -133 207 -149 q 252 -95 240 -117 q 273 -44 264 -72 l 286 -6 l 0 758 m 143 953 q 150 994 143 977 q 170 1022 157 1011 q 200 1039 183 1034 q 237 1045 217 1045 q 274 1039 257 1045 q 304 1022 291 1034 q 325 994 317 1011 q 333 953 333 977 q 325 913 333 930 q 304 885 317 896 q 274 868 291 873 q 237 863 257 863 q 200 868 217 863 q 170 885 183 873 q 150 913 157 896 q 143 953 143 930 m 416 953 q 423 994 416 977 q 443 1022 430 1011 q 474 1039 456 1034 q 512 1045 491 1045 q 548 1039 531 1045 q 579 1022 565 1034 q 600 994 592 1011 q 608 953 608 977 q 600 913 608 930 q 579 885 592 896 q 548 868 565 873 q 512 863 531 863 q 443 885 471 863 q 416 953 416 907 "},"Ł":{"x_min":1.5625,"x_max":696,"ha":743,"o":"m 125 0 l 125 333 l 78 306 l 1 439 l 125 514 l 125 992 l 335 992 l 335 641 l 432 701 l 511 568 l 335 461 l 335 173 l 696 173 l 696 0 l 125 0 "},"\\\\":{"x_min":7.75,"x_max":566.25,"ha":574,"o":"m 195 992 l 566 0 l 378 0 l 7 992 l 195 992 "},"Ì":{"x_min":29,"x_max":495.96875,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 241 1071 q 186 1118 218 1089 q 122 1175 153 1146 q 65 1233 91 1205 q 29 1278 39 1260 l 29 1293 l 260 1293 q 286 1242 271 1269 q 316 1187 300 1215 q 348 1134 332 1160 q 379 1089 364 1108 l 379 1071 l 241 1071 "},"Ē":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 202 1214 l 620 1214 l 620 1071 l 202 1071 l 202 1214 "},"!":{"x_min":79,"x_max":316,"ha":397,"o":"m 281 330 l 116 330 l 81 992 l 316 992 l 281 330 m 79 97 q 88 151 79 129 q 113 187 97 173 q 151 206 129 200 q 198 213 173 213 q 243 206 221 213 q 280 187 264 200 q 306 151 297 173 q 316 97 316 129 q 306 45 316 66 q 280 9 297 23 q 243 -11 264 -5 q 198 -18 221 -18 q 151 -11 173 -18 q 113 9 129 -5 q 88 45 97 23 q 79 97 79 66 "},"ç":{"x_min":69,"x_max":648.703125,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 m 528 -169 q 517 -239 528 -208 q 482 -290 506 -269 q 417 -322 458 -311 q 318 -334 377 -334 q 263 -329 287 -334 q 219 -319 238 -325 l 219 -205 q 241 -210 229 -208 q 267 -215 254 -213 q 293 -218 280 -217 q 316 -220 306 -220 q 350 -210 335 -220 q 365 -178 365 -201 q 340 -133 365 -153 q 252 -105 314 -114 l 305 0 l 436 0 l 417 -41 q 458 -59 438 -48 q 493 -87 478 -71 q 518 -124 508 -103 q 528 -169 528 -144 "},"đ":{"x_min":69,"x_max":841,"ha":844,"o":"m 331 -14 q 224 9 272 -14 q 142 80 176 33 q 88 196 107 127 q 69 356 69 265 q 88 518 69 448 q 143 635 107 588 q 228 706 178 682 q 337 730 277 730 q 404 721 373 730 q 459 698 434 713 q 502 662 483 683 q 536 618 522 642 l 543 618 q 536 673 539 645 q 530 724 532 696 q 528 776 528 751 l 528 811 l 315 811 l 315 946 l 528 946 l 528 1055 l 735 1055 l 735 946 l 841 946 l 841 811 l 735 811 l 735 0 l 576 0 l 536 97 l 528 97 q 495 54 513 74 q 453 18 477 33 q 399 -5 429 3 q 331 -14 369 -14 m 407 150 q 469 162 444 150 q 510 196 495 173 q 534 254 526 219 q 542 335 541 289 l 542 354 q 535 443 542 405 q 513 508 528 482 q 471 548 497 534 q 406 561 445 561 q 310 508 341 561 q 280 353 280 455 q 310 201 280 252 q 407 150 341 150 "},"ċ":{"x_min":69,"x_max":648.703125,"ha":693,"o":"m 424 -14 q 277 8 342 -14 q 165 78 211 30 q 93 198 118 125 q 69 375 69 272 q 94 564 69 488 q 166 687 119 641 q 278 753 212 733 q 424 773 343 773 q 540 758 482 773 q 648 718 597 744 l 588 562 q 502 594 544 581 q 423 606 461 606 q 314 549 348 606 q 280 376 280 491 q 314 206 280 261 q 421 152 348 152 q 528 167 480 152 q 627 206 576 182 l 627 35 q 578 13 601 23 q 530 -1 554 4 q 480 -10 506 -7 q 424 -14 453 -14 m 302 954 q 310 1003 302 984 q 334 1034 319 1022 q 370 1051 350 1046 q 414 1056 391 1056 q 457 1051 437 1056 q 493 1034 478 1046 q 517 1003 508 1022 q 527 954 527 984 q 517 906 527 926 q 493 875 508 886 q 457 858 478 863 q 414 853 437 853 q 370 858 391 853 q 334 875 350 863 q 310 906 319 886 q 302 954 302 926 "},"Ā":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 243 1214 l 661 1214 l 661 1071 l 243 1071 l 243 1214 "},"ø":{"x_min":69,"x_max":762,"ha":832,"o":"m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 339 -7 374 -14 q 271 11 304 0 l 233 -51 l 123 9 l 169 84 q 95 209 122 134 q 69 380 69 283 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 498 764 459 773 q 572 739 537 755 l 605 793 l 713 728 l 671 661 q 738 541 714 612 q 762 380 762 470 m 280 380 q 288 278 280 322 l 480 589 q 414 606 453 606 q 312 550 343 606 q 280 380 280 494 m 550 380 q 546 457 550 424 l 365 162 q 389 154 376 156 q 415 152 401 152 q 518 210 486 152 q 550 380 550 267 "},"â":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 544 841 q 472 893 509 863 q 399 959 434 922 q 327 893 362 922 q 257 841 292 863 l 120 841 l 120 859 q 159 904 137 878 q 202 957 180 930 q 244 1012 224 985 q 280 1063 265 1039 l 521 1063 q 556 1012 536 1039 q 598 957 576 985 q 642 904 620 930 q 682 859 665 878 l 682 841 l 544 841 "},"}":{"x_min":21,"x_max":492,"ha":505,"o":"m 318 -30 q 305 -116 318 -80 q 258 -175 292 -152 q 167 -209 225 -198 q 21 -220 109 -220 l 21 -66 q 69 -61 48 -66 q 106 -47 91 -57 q 130 -18 122 -36 q 138 29 138 0 l 138 232 q 178 333 136 295 q 296 382 219 370 l 296 390 q 138 540 143 414 l 138 743 q 130 790 138 772 q 106 819 122 808 q 69 833 91 829 q 21 838 48 838 l 21 992 q 167 981 109 992 q 258 947 225 970 q 305 889 292 924 q 318 803 318 853 l 318 587 q 328 532 317 555 q 361 494 339 509 q 416 473 383 479 q 492 467 449 467 l 492 304 q 362 277 407 304 q 318 183 318 249 l 318 -30 "},"Ä":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 m 220 1182 q 227 1223 220 1206 q 247 1251 234 1240 q 277 1268 260 1263 q 314 1274 294 1274 q 351 1268 334 1274 q 381 1251 368 1263 q 402 1223 394 1240 q 410 1182 410 1206 q 402 1142 410 1159 q 381 1114 394 1125 q 351 1097 368 1102 q 314 1092 334 1092 q 277 1097 294 1092 q 247 1114 260 1102 q 227 1142 234 1125 q 220 1182 220 1159 m 493 1182 q 500 1223 493 1206 q 520 1251 507 1240 q 551 1268 533 1263 q 589 1274 568 1274 q 625 1268 608 1274 q 656 1251 642 1263 q 677 1223 669 1240 q 685 1182 685 1206 q 677 1142 685 1159 q 656 1114 669 1125 q 625 1097 642 1102 q 589 1092 608 1092 q 520 1114 548 1092 q 493 1182 493 1136 "},"ř":{"x_min":57,"x_max":619,"ha":603,"o":"m 504 773 q 522 772 512 773 q 541 771 532 772 q 558 769 550 770 q 570 766 565 768 l 570 572 q 555 575 564 574 q 535 578 545 576 q 514 579 524 579 q 497 579 504 579 q 423 569 457 579 q 366 536 390 559 q 329 476 342 513 q 315 386 315 439 l 315 0 l 109 0 l 109 758 l 265 758 l 296 644 l 306 644 q 341 697 322 673 q 383 738 360 721 q 436 763 407 754 q 504 773 466 773 m 619 1045 q 579 1000 602 1026 q 535 947 557 974 q 493 892 513 919 q 458 842 473 865 l 217 842 q 181 892 202 865 q 139 947 161 919 q 96 1000 117 974 q 57 1045 74 1026 l 57 1064 l 194 1064 q 264 1011 229 1041 q 336 945 299 982 q 409 1011 371 982 q 481 1064 446 1041 l 619 1064 l 619 1045 "},"—":{"x_min":56,"x_max":1333,"ha":1389,"o":"m 56 296 l 56 452 l 1333 452 l 1333 296 l 56 296 "},"N":{"x_min":125,"x_max":963,"ha":1088,"o":"m 963 0 l 697 0 l 305 750 l 299 750 q 306 646 303 698 q 310 554 308 602 q 312 466 312 505 l 312 0 l 125 0 l 125 992 l 389 992 l 781 248 l 785 248 q 780 350 783 300 q 778 395 779 372 q 777 440 777 417 q 776 484 776 463 q 775 522 775 505 l 775 992 l 963 992 l 963 0 "},"Ó":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 400 1071 l 400 1089 q 430 1134 414 1108 q 462 1187 446 1160 q 492 1242 478 1215 q 518 1293 507 1269 l 750 1293 l 750 1278 q 728 1250 742 1266 q 695 1214 714 1233 q 656 1175 677 1195 q 614 1136 635 1155 q 572 1100 592 1117 q 537 1071 553 1083 l 400 1071 "},"ų":{"x_min":104,"x_max":762,"ha":871,"o":"m 603 0 l 576 96 l 565 96 q 524 46 548 67 q 473 12 501 26 q 414 -7 445 -1 q 350 -14 383 -14 q 249 1 295 -14 q 171 51 204 17 q 121 137 139 85 q 104 263 104 190 l 104 758 l 310 758 l 310 314 q 335 191 310 232 q 414 150 360 150 q 482 167 455 150 q 525 215 509 183 q 548 293 541 247 q 555 401 555 340 l 555 758 l 762 758 l 762 0 l 603 0 m 625 -154 q 640 -196 625 -182 q 679 -209 655 -209 q 722 -205 700 -209 q 757 -197 743 -201 l 757 -318 q 710 -329 735 -324 q 651 -334 685 -334 q 580 -322 612 -334 q 527 -290 549 -310 q 493 -241 505 -269 q 482 -177 482 -212 q 491 -124 482 -148 q 517 -78 500 -99 q 556 -38 534 -57 q 604 0 578 -19 l 725 0 q 651 -81 678 -44 q 625 -154 625 -118 "},"Ŭ":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 741 1300 q 719 1207 737 1249 q 671 1135 702 1165 q 595 1087 639 1104 q 492 1071 550 1071 q 388 1087 432 1071 q 313 1133 343 1103 q 267 1205 283 1163 q 249 1300 251 1247 l 364 1300 q 376 1253 367 1270 q 402 1227 386 1236 q 441 1216 418 1218 q 493 1214 464 1214 q 540 1217 518 1214 q 579 1229 562 1220 q 608 1255 597 1238 q 622 1300 620 1272 l 741 1300 "},"ĝ":{"x_min":14,"x_max":735.140625,"ha":766,"o":"m 735 757 l 735 644 l 624 610 q 643 562 638 587 q 649 509 649 537 q 630 403 649 451 q 576 322 612 356 q 486 269 540 288 q 360 251 432 251 q 326 252 345 251 q 299 256 308 254 q 279 232 286 244 q 271 201 271 219 q 280 179 271 187 q 303 165 289 170 q 336 158 317 160 q 375 157 355 157 l 493 157 q 591 144 547 157 q 664 106 634 131 q 710 40 694 80 q 727 -54 727 0 q 701 -170 727 -118 q 624 -258 675 -222 q 497 -314 573 -295 q 322 -334 421 -334 q 187 -319 244 -334 q 91 -277 129 -304 q 33 -211 52 -249 q 14 -123 14 -172 q 28 -51 14 -81 q 66 0 42 -20 q 120 36 90 22 q 182 57 150 49 q 154 74 168 63 q 129 99 140 85 q 111 131 118 113 q 104 167 104 148 q 110 206 104 189 q 128 239 116 224 q 159 268 141 254 q 200 296 177 282 q 105 379 140 322 q 71 513 71 436 q 89 622 71 574 q 145 704 108 670 q 236 755 182 737 q 360 773 290 773 q 391 771 374 773 q 424 767 408 769 q 455 762 441 764 q 477 757 469 759 l 735 757 m 193 -107 q 200 -141 193 -125 q 224 -169 207 -157 q 266 -189 240 -181 q 331 -196 293 -196 q 490 -166 437 -196 q 543 -85 543 -135 q 510 -27 543 -42 q 408 -13 477 -13 l 312 -13 q 273 -17 294 -13 q 234 -33 252 -22 q 205 -62 217 -44 q 193 -107 193 -80 m 265 510 q 289 415 265 448 q 360 381 312 381 q 432 415 410 381 q 454 510 454 448 q 432 607 454 571 q 360 643 410 643 q 265 510 265 643 m 504 842 q 432 894 469 864 q 359 960 394 923 q 287 894 322 923 q 217 842 252 864 l 80 842 l 80 860 q 119 905 97 879 q 162 958 140 931 q 204 1013 184 986 q 240 1064 225 1040 l 481 1064 q 516 1013 496 1040 q 558 958 536 986 q 602 905 580 931 q 642 860 625 879 l 642 842 l 504 842 "},"s":{"x_min":66,"x_max":614,"ha":668,"o":"m 614 225 q 592 120 614 165 q 530 45 570 75 q 433 0 490 15 q 305 -14 376 -14 q 236 -11 268 -14 q 176 -3 204 -9 q 121 9 147 1 q 67 30 94 17 l 67 201 q 127 176 95 187 q 189 156 158 164 q 249 143 220 148 q 304 139 279 139 q 351 144 331 139 q 383 158 370 149 q 401 179 395 167 q 407 205 407 191 q 402 230 407 219 q 382 254 398 242 q 337 283 367 267 q 256 322 307 299 q 171 366 207 344 q 112 415 135 388 q 77 477 88 442 q 66 561 66 512 q 86 653 66 614 q 144 720 106 693 q 234 759 181 746 q 351 773 286 773 q 480 757 419 773 q 605 710 541 741 l 543 564 q 445 604 492 588 q 352 619 398 619 q 291 604 310 619 q 272 563 272 589 q 277 539 272 550 q 296 518 282 529 q 336 493 310 506 q 403 461 362 480 q 490 419 451 440 q 556 372 528 398 q 599 310 584 345 q 614 225 614 275 "},"?":{"x_min":17,"x_max":601,"ha":638,"o":"m 180 330 l 180 380 q 187 442 180 414 q 208 496 194 470 q 246 545 223 521 q 302 595 269 569 q 351 635 331 617 q 383 670 370 653 q 400 706 395 687 q 406 750 406 725 q 380 814 406 789 q 299 839 353 839 q 198 819 252 839 q 86 771 144 800 l 17 921 q 80 953 46 938 q 151 980 114 968 q 226 999 188 992 q 301 1006 264 1006 q 426 989 370 1006 q 520 940 482 972 q 580 863 559 909 q 601 760 601 818 q 591 683 601 717 q 563 621 582 650 q 516 566 544 592 q 451 509 488 539 q 404 470 422 487 q 376 439 386 453 q 362 408 366 424 q 359 370 359 392 l 359 330 l 180 330 m 158 97 q 167 151 158 129 q 192 187 176 173 q 230 206 208 200 q 278 213 252 213 q 323 206 301 213 q 360 187 344 200 q 386 151 377 173 q 396 97 396 129 q 386 45 396 66 q 360 9 377 23 q 323 -11 344 -5 q 278 -18 301 -18 q 230 -11 252 -18 q 192 9 208 -5 q 167 45 176 23 q 158 97 158 66 "},"Ņ":{"x_min":125,"x_max":963,"ha":1088,"o":"m 963 0 l 697 0 l 305 750 l 299 750 q 306 646 303 698 q 310 554 308 602 q 312 466 312 505 l 312 0 l 125 0 l 125 992 l 389 992 l 781 248 l 785 248 q 780 350 783 300 q 778 395 779 372 q 777 440 777 417 q 776 484 776 463 q 775 522 775 505 l 775 992 l 963 992 l 963 0 m 385 -288 q 397 -242 391 -268 q 408 -188 403 -216 q 419 -134 414 -161 q 426 -85 424 -107 l 618 -85 l 618 -98 q 569 -198 597 -145 q 505 -307 541 -251 l 385 -307 l 385 -288 "},"Ī":{"x_min":44.28125,"x_max":495.96875,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 62 1214 l 480 1214 l 480 1071 l 62 1071 l 62 1214 "},"•":{"x_min":66,"x_max":455,"ha":522,"o":"m 66 507 q 80 606 66 566 q 121 673 95 647 q 183 711 148 699 q 260 723 219 723 q 336 711 300 723 q 398 673 371 699 q 439 606 424 647 q 455 507 455 566 q 439 409 455 450 q 398 342 424 368 q 336 304 371 316 q 260 292 300 292 q 183 304 219 292 q 121 342 148 316 q 80 409 95 368 q 66 507 66 450 "},"(":{"x_min":56,"x_max":430,"ha":471,"o":"m 56 380 q 68 547 56 465 q 105 708 80 630 q 169 857 130 785 q 260 992 207 928 l 430 992 q 284 704 333 861 q 235 381 235 547 q 247 221 235 301 q 284 64 259 141 q 345 -84 308 -12 q 428 -220 381 -156 l 260 -220 q 169 -89 207 -158 q 105 57 130 -19 q 68 214 80 133 q 56 380 56 296 "},"Ħ":{"x_min":0,"x_max":1007,"ha":1007,"o":"m 1007 860 l 1007 722 l 882 722 l 882 0 l 671 0 l 671 428 l 335 428 l 335 0 l 125 0 l 125 722 l 0 722 l 0 860 l 125 860 l 125 992 l 335 992 l 335 860 l 671 860 l 671 992 l 882 992 l 882 860 l 1007 860 m 671 603 l 671 722 l 335 722 l 335 603 l 671 603 "},"Û":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 639 1071 q 567 1123 604 1093 q 494 1189 529 1152 q 422 1123 457 1152 q 352 1071 387 1093 l 215 1071 l 215 1089 q 254 1134 232 1108 q 297 1187 275 1160 q 339 1242 319 1215 q 375 1293 360 1269 l 616 1293 q 651 1242 631 1269 q 693 1187 671 1215 q 737 1134 715 1160 q 777 1089 760 1108 l 777 1071 l 639 1071 "},"V":{"x_min":-0.25,"x_max":847.25,"ha":847,"o":"m 634 992 l 847 992 l 537 0 l 308 0 l 0 992 l 212 992 l 380 394 q 389 356 383 383 q 401 296 395 329 q 414 231 408 263 q 423 176 420 198 q 433 231 427 198 q 446 296 439 263 q 459 355 453 328 q 469 394 465 382 l 634 992 "},"Ŗ":{"x_min":125,"x_max":875.25,"ha":875,"o":"m 335 545 l 393 545 q 520 581 481 545 q 558 685 558 616 q 517 786 558 756 q 389 817 476 817 l 335 817 l 335 545 m 335 379 l 335 0 l 125 0 l 125 992 l 396 992 q 678 918 587 992 q 769 694 769 844 q 755 601 769 642 q 719 527 741 559 q 666 471 696 495 q 604 430 637 447 q 739 215 679 310 q 789 136 765 175 q 832 67 813 98 q 863 18 851 37 l 875 0 l 641 0 l 427 379 l 335 379 m 332 -288 q 344 -242 338 -268 q 355 -188 350 -216 q 366 -134 361 -161 q 373 -85 371 -107 l 565 -85 l 565 -98 q 516 -198 544 -145 q 452 -307 488 -251 l 332 -307 l 332 -288 "},"@":{"x_min":69,"x_max":1134,"ha":1203,"o":"m 1134 509 q 1118 382 1134 445 q 1072 269 1103 319 q 994 188 1041 219 q 883 158 946 158 q 834 164 857 158 q 793 182 812 170 q 760 210 774 194 q 738 245 746 226 l 728 245 q 698 212 715 228 q 661 184 682 196 q 614 165 640 172 q 559 158 589 158 q 459 177 503 158 q 385 232 415 196 q 340 317 356 267 q 325 427 325 367 q 346 556 325 497 q 406 656 367 614 q 501 722 445 699 q 627 746 558 746 q 690 742 658 746 q 753 733 723 739 q 810 721 783 728 q 855 708 836 714 l 841 423 q 840 394 840 408 q 840 376 840 380 q 844 329 840 347 q 855 300 848 311 q 872 286 863 290 q 891 282 881 282 q 932 300 915 282 q 961 349 950 318 q 979 422 973 381 q 985 511 985 464 q 959 665 985 597 q 888 780 933 733 q 779 851 842 827 q 642 875 716 875 q 459 841 538 875 q 327 744 380 806 q 247 598 274 682 q 219 412 219 513 q 243 246 219 318 q 313 125 266 174 q 428 50 360 76 q 586 25 497 25 q 664 30 624 25 q 744 43 704 35 q 822 62 783 51 q 895 87 860 74 l 895 -42 q 753 -87 831 -70 q 588 -104 676 -104 q 368 -69 465 -104 q 205 31 272 -34 q 104 192 139 97 q 69 408 69 287 q 87 569 69 492 q 140 712 105 646 q 224 832 174 778 q 338 924 274 886 q 478 983 401 962 q 642 1004 555 1004 q 839 969 749 1004 q 995 871 929 935 q 1097 715 1060 807 q 1134 509 1134 624 m 482 425 q 508 315 482 349 q 576 282 533 282 q 625 295 604 282 q 659 332 646 308 q 679 390 672 356 q 688 465 686 423 l 696 615 q 665 620 683 618 q 627 622 646 622 q 560 605 587 622 q 515 560 532 588 q 490 497 497 533 q 482 425 482 461 "},"i":{"x_min":100.1875,"x_max":325.359375,"ha":424,"o":"m 100 953 q 109 1002 100 983 q 133 1033 117 1021 q 169 1050 148 1045 q 212 1055 189 1055 q 256 1050 235 1055 q 291 1033 276 1045 q 316 1002 307 1021 q 325 953 325 983 q 316 905 325 925 q 291 874 307 885 q 256 857 276 862 q 212 852 235 852 q 169 857 189 852 q 133 874 148 862 q 109 905 117 885 q 100 953 100 925 m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 "},"ĕ":{"x_min":69,"x_max":741,"ha":807,"o":"m 414 625 q 322 586 358 625 q 279 465 285 548 l 546 465 q 537 529 545 499 q 512 579 529 558 q 471 613 496 601 q 414 625 447 625 m 441 -14 q 291 9 359 -14 q 173 81 222 33 q 96 202 123 129 q 69 373 69 275 q 94 548 69 473 q 164 672 119 622 q 272 747 209 722 q 413 773 336 773 q 549 750 489 773 q 653 683 610 727 q 718 574 695 639 q 741 427 741 510 l 741 327 l 275 327 q 289 248 277 283 q 325 189 302 213 q 380 152 348 165 q 454 139 412 139 q 520 143 489 139 q 580 154 551 146 q 638 172 609 161 q 697 198 667 184 l 697 39 q 642 15 669 25 q 584 -1 614 5 q 518 -10 553 -7 q 441 -14 483 -14 m 651 1071 q 629 978 647 1020 q 581 906 612 936 q 505 858 549 875 q 402 842 460 842 q 298 858 342 842 q 223 904 253 874 q 177 976 193 934 q 159 1071 161 1018 l 274 1071 q 286 1024 277 1041 q 312 998 296 1007 q 351 987 328 989 q 403 985 374 985 q 450 988 428 985 q 489 1000 472 991 q 518 1026 507 1009 q 532 1071 530 1043 l 651 1071 "},"ż":{"x_min":37,"x_max":595,"ha":635,"o":"m 595 0 l 37 0 l 37 117 l 347 604 l 58 604 l 58 758 l 582 758 l 582 628 l 281 153 l 595 153 l 595 0 m 214 954 q 222 1003 214 984 q 246 1034 231 1022 q 282 1051 262 1046 q 326 1056 303 1056 q 369 1051 349 1056 q 405 1034 390 1046 q 429 1003 420 1022 q 439 954 439 984 q 429 906 439 926 q 405 875 420 886 q 369 858 390 863 q 326 853 349 853 q 282 858 303 853 q 246 875 262 863 q 222 906 231 886 q 214 954 214 926 "},"ő":{"x_min":69,"x_max":774,"ha":832,"o":"m 280 380 q 312 209 280 267 q 415 152 344 152 q 518 210 486 152 q 550 380 550 267 q 518 550 550 494 q 414 606 486 606 q 312 550 343 606 q 280 380 280 494 m 762 380 q 737 212 762 285 q 668 88 713 138 q 558 12 623 38 q 413 -14 494 -14 q 275 12 338 -14 q 166 88 212 38 q 94 212 120 138 q 69 380 69 285 q 93 548 69 474 q 162 671 117 621 q 271 747 207 721 q 417 773 336 773 q 555 747 492 773 q 664 671 618 721 q 736 548 710 621 q 762 380 762 474 m 183 842 l 183 860 q 213 905 197 879 q 245 958 229 931 q 275 1013 261 986 q 300 1064 290 1040 l 505 1064 l 505 1049 q 483 1021 497 1037 q 450 985 469 1004 q 411 946 432 966 q 368 907 389 926 q 327 871 347 888 q 292 842 307 854 l 183 842 m 452 842 l 452 860 q 482 905 466 879 q 514 958 498 931 q 544 1013 530 986 q 569 1064 559 1040 l 774 1064 l 774 1049 q 752 1021 766 1037 q 719 985 738 1004 q 680 946 701 966 q 638 907 659 926 q 597 871 616 888 q 561 842 577 854 l 452 842 "},"Ŏ":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 m 770 1300 q 748 1207 766 1249 q 700 1135 731 1165 q 624 1087 668 1104 q 521 1071 579 1071 q 417 1087 461 1071 q 342 1133 372 1103 q 296 1205 312 1163 q 278 1300 280 1247 l 393 1300 q 405 1253 396 1270 q 431 1227 415 1236 q 470 1216 447 1218 q 522 1214 493 1214 q 569 1217 547 1214 q 608 1229 591 1220 q 637 1255 626 1238 q 651 1300 649 1272 l 770 1300 "},"İ":{"x_min":44.28125,"x_max":495.96875,"ha":541,"o":"m 495 0 l 44 0 l 44 119 l 165 174 l 165 817 l 44 872 l 44 992 l 495 992 l 495 872 l 375 817 l 375 174 l 495 119 l 495 0 m 154 1183 q 162 1232 154 1213 q 186 1263 171 1251 q 222 1280 202 1275 q 266 1285 243 1285 q 309 1280 289 1285 q 345 1263 330 1275 q 369 1232 360 1251 q 379 1183 379 1213 q 369 1135 379 1155 q 345 1104 360 1115 q 309 1087 330 1092 q 266 1082 289 1082 q 222 1087 243 1082 q 186 1104 202 1092 q 162 1135 171 1115 q 154 1183 154 1155 "},"Ě":{"x_min":124,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 686 1274 q 646 1229 669 1255 q 602 1176 624 1203 q 560 1121 580 1148 q 525 1071 540 1094 l 284 1071 q 248 1121 269 1094 q 206 1176 228 1148 q 163 1229 184 1203 q 124 1274 141 1255 l 124 1293 l 261 1293 q 331 1240 296 1270 q 403 1174 366 1211 q 476 1240 438 1211 q 548 1293 513 1270 l 686 1293 l 686 1274 "},"ķ":{"x_min":109,"x_max":819.25,"ha":819,"o":"m 307 412 l 383 527 l 568 758 l 801 758 l 527 429 l 819 0 l 580 0 l 396 291 l 315 235 l 315 0 l 109 0 l 109 1055 l 315 1055 l 315 584 l 305 412 l 307 412 m 303 -288 q 315 -242 309 -268 q 326 -188 321 -216 q 337 -134 332 -161 q 344 -85 342 -107 l 536 -85 l 536 -98 q 487 -198 515 -145 q 423 -307 459 -251 l 303 -307 l 303 -288 "},"ì":{"x_min":-29,"x_max":321,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 m 183 842 q 128 889 160 860 q 64 946 95 917 q 7 1004 33 976 q -29 1049 -18 1031 l -29 1064 l 202 1064 q 228 1013 213 1040 q 258 958 242 986 q 290 905 274 931 q 321 860 306 879 l 321 842 l 183 842 "},"±":{"x_min":60.09375,"x_max":705.765625,"ha":765,"o":"m 309 457 l 60 457 l 60 606 l 309 606 l 309 856 l 457 856 l 457 606 l 705 606 l 705 457 l 457 457 l 457 209 l 309 209 l 309 457 m 60 0 l 60 148 l 705 148 l 705 0 l 60 0 "},"|":{"x_min":309,"x_max":457.53125,"ha":765,"o":"m 309 1051 l 457 1051 l 457 -315 l 309 -315 l 309 1051 "},"§":{"x_min":72,"x_max":607,"ha":675,"o":"m 82 546 q 89 601 82 576 q 108 648 96 626 q 137 686 121 669 q 172 715 154 703 q 105 782 129 742 q 82 873 82 822 q 101 954 82 917 q 157 1016 121 990 q 244 1056 193 1042 q 356 1070 294 1070 q 485 1054 425 1070 q 602 1013 545 1038 l 547 884 q 453 923 501 906 q 353 941 405 941 q 273 925 298 941 q 248 877 248 909 q 256 845 248 860 q 282 818 264 831 q 327 791 299 804 q 392 762 354 778 q 480 720 440 743 q 547 669 519 697 q 591 606 575 641 q 607 530 607 572 q 583 421 607 462 q 522 354 560 379 q 585 291 564 327 q 607 205 607 255 q 585 114 607 155 q 526 45 564 74 q 432 1 487 17 q 308 -14 377 -14 q 176 0 234 -14 q 72 39 119 14 l 72 181 q 129 155 98 167 q 190 134 159 144 q 252 120 222 125 q 309 114 282 114 q 372 120 347 114 q 412 137 397 127 q 434 162 427 148 q 440 193 440 177 q 435 224 440 210 q 415 250 430 237 q 372 277 400 262 q 300 310 345 291 q 207 353 248 331 q 139 402 166 375 q 96 464 111 430 q 82 546 82 499 m 234 561 q 272 485 234 518 q 390 418 310 452 l 400 414 q 420 431 411 421 q 437 453 430 441 q 449 480 445 465 q 454 512 454 495 q 447 552 454 534 q 422 588 440 571 q 373 622 404 605 q 295 656 342 639 q 272 642 283 651 q 253 620 261 632 q 239 593 244 608 q 234 561 234 578 "},"q":{"x_min":69,"x_max":735,"ha":844,"o":"m 407 152 q 470 164 444 152 q 511 202 495 177 q 534 265 526 227 q 542 354 541 303 l 542 379 q 535 476 542 434 q 513 548 529 519 q 471 591 497 577 q 406 606 445 606 q 311 548 341 606 q 280 378 280 489 q 311 208 280 264 q 407 152 342 152 m 331 -14 q 224 11 272 -14 q 141 85 176 36 q 87 208 106 134 q 69 377 69 281 q 88 548 69 474 q 143 672 107 622 q 228 747 178 722 q 337 773 277 773 q 405 764 375 773 q 460 741 436 756 q 504 706 485 726 q 538 663 523 687 l 543 663 l 560 758 l 735 758 l 735 -334 l 528 -334 l 528 -13 q 529 19 528 0 q 532 57 531 39 q 536 101 534 79 l 528 101 q 496 56 514 78 q 453 19 478 35 q 399 -4 429 4 q 331 -14 369 -14 "},"®":{"x_min":68,"x_max":1088,"ha":1156,"o":"m 785 614 q 758 513 785 550 q 688 456 732 475 l 848 185 l 676 185 l 555 414 l 523 414 l 523 185 l 368 185 l 368 806 l 547 806 q 727 758 670 806 q 785 614 785 711 m 523 528 l 545 528 q 609 547 590 528 q 629 611 629 566 q 623 650 629 635 q 608 675 618 666 q 581 688 597 684 q 543 692 565 692 l 523 692 l 523 528 m 68 495 q 86 631 68 566 q 137 753 104 696 q 217 856 170 809 q 320 936 264 903 q 442 987 377 969 q 578 1006 507 1006 q 713 987 648 1006 q 835 936 778 969 q 938 856 892 903 q 1018 753 985 809 q 1069 631 1051 696 q 1088 495 1088 566 q 1069 359 1088 425 q 1018 238 1051 294 q 938 134 985 181 q 835 55 892 88 q 713 3 778 21 q 578 -14 648 -14 q 442 3 507 -14 q 320 55 377 21 q 217 134 264 88 q 137 238 170 181 q 86 359 104 294 q 68 495 68 425 m 164 496 q 196 334 164 409 q 285 203 229 259 q 416 114 341 147 q 578 82 491 82 q 739 114 664 82 q 870 203 814 147 q 959 334 926 259 q 991 496 991 409 q 959 657 991 582 q 870 788 926 732 q 739 877 814 844 q 578 909 664 909 q 416 877 491 909 q 285 788 341 844 q 196 657 229 732 q 164 496 164 582 "}," ":{"x_min":0,"x_max":0,"ha":361},"+":{"x_min":60.09375,"x_max":705.765625,"ha":765,"o":"m 309 415 l 60 415 l 60 564 l 309 564 l 309 814 l 457 814 l 457 564 l 705 564 l 705 415 l 457 415 l 457 168 l 309 168 l 309 415 "},"Ë":{"x_min":125,"x_max":696,"ha":778,"o":"m 696 0 l 125 0 l 125 992 l 696 992 l 696 817 l 335 817 l 335 602 l 670 602 l 670 427 l 335 427 l 335 174 l 696 174 l 696 0 m 186 1182 q 193 1223 186 1206 q 213 1251 200 1240 q 243 1268 226 1263 q 280 1274 260 1274 q 317 1268 300 1274 q 347 1251 334 1263 q 368 1223 360 1240 q 376 1182 376 1206 q 368 1142 376 1159 q 347 1114 360 1125 q 317 1097 334 1102 q 280 1092 300 1092 q 243 1097 260 1092 q 213 1114 226 1102 q 193 1142 200 1125 q 186 1182 186 1159 m 459 1182 q 466 1223 459 1206 q 486 1251 473 1240 q 517 1268 499 1263 q 555 1274 534 1274 q 591 1268 574 1274 q 622 1251 608 1263 q 643 1223 635 1240 q 651 1182 651 1206 q 643 1142 651 1159 q 622 1114 635 1125 q 591 1097 608 1102 q 555 1092 574 1092 q 486 1114 514 1092 q 459 1182 459 1136 "},"Š":{"x_min":63.46875,"x_max":668,"ha":728,"o":"m 668 275 q 645 155 668 208 q 578 64 622 102 q 471 6 535 26 q 326 -14 408 -14 q 187 0 254 -14 q 63 45 120 15 l 63 241 q 129 211 96 225 q 196 185 162 197 q 265 167 231 174 q 333 160 299 160 q 392 168 368 160 q 432 190 417 176 q 455 223 448 203 q 462 264 462 242 q 450 314 462 292 q 417 354 438 335 q 365 390 396 372 q 298 427 335 408 q 228 467 267 444 q 155 524 189 490 q 98 607 121 558 q 75 723 75 655 q 97 842 75 790 q 159 931 119 895 q 258 987 200 968 q 388 1006 316 1006 q 458 1001 424 1006 q 526 987 492 996 q 594 965 560 978 q 663 936 627 953 l 596 772 q 539 797 565 786 q 487 816 512 808 q 438 827 462 823 q 389 831 414 831 q 308 802 336 831 q 280 727 280 774 q 288 683 280 702 q 316 646 297 663 q 364 612 334 630 q 435 572 393 594 q 529 517 486 545 q 603 454 572 488 q 651 376 634 420 q 668 275 668 333 m 655 1274 q 615 1229 638 1255 q 571 1176 593 1203 q 529 1121 549 1148 q 494 1071 509 1094 l 253 1071 q 217 1121 238 1094 q 175 1176 197 1148 q 132 1229 153 1203 q 93 1274 110 1255 l 93 1293 l 230 1293 q 300 1240 265 1270 q 372 1174 335 1211 q 445 1240 407 1211 q 517 1293 482 1270 l 655 1293 l 655 1274 "},"ð":{"x_min":50,"x_max":744,"ha":802,"o":"m 310 887 q 260 917 286 901 q 205 949 234 934 l 270 1065 q 363 1018 320 1041 q 445 969 407 995 l 599 1063 l 667 959 l 549 887 q 634 787 598 840 q 695 673 671 734 q 731 540 719 611 q 744 388 744 470 q 719 217 744 291 q 649 91 695 142 q 539 12 604 39 q 394 -14 475 -14 q 256 9 319 -14 q 147 76 193 32 q 75 184 101 120 q 50 331 50 248 q 72 478 50 414 q 133 585 94 541 q 228 652 173 629 q 350 675 284 675 q 461 653 415 675 q 529 598 507 631 l 543 599 q 490 711 524 659 q 411 802 456 764 l 254 704 l 185 810 l 310 887 m 532 360 q 524 421 532 392 q 500 472 516 450 q 458 508 483 495 q 398 521 432 521 q 293 474 324 521 q 261 330 261 426 q 269 252 261 287 q 293 192 277 217 q 336 153 310 167 q 398 139 362 139 q 501 194 469 139 q 532 360 532 249 "},"ş":{"x_min":66,"x_max":614,"ha":668,"o":"m 614 225 q 592 120 614 165 q 530 45 570 75 q 433 0 490 15 q 305 -14 376 -14 q 236 -11 268 -14 q 176 -3 204 -9 q 121 9 147 1 q 67 30 94 17 l 67 201 q 127 176 95 187 q 189 156 158 164 q 249 143 220 148 q 304 139 279 139 q 351 144 331 139 q 383 158 370 149 q 401 179 395 167 q 407 205 407 191 q 402 230 407 219 q 382 254 398 242 q 337 283 367 267 q 256 322 307 299 q 171 366 207 344 q 112 415 135 388 q 77 477 88 442 q 66 561 66 512 q 86 653 66 614 q 144 720 106 693 q 234 759 181 746 q 351 773 286 773 q 480 757 419 773 q 605 710 541 741 l 543 564 q 445 604 492 588 q 352 619 398 619 q 291 604 310 619 q 272 563 272 589 q 277 539 272 550 q 296 518 282 529 q 336 493 310 506 q 403 461 362 480 q 490 419 451 440 q 556 372 528 398 q 599 310 584 345 q 614 225 614 275 m 473 -169 q 462 -239 473 -208 q 427 -290 451 -269 q 362 -322 403 -311 q 263 -334 322 -334 q 208 -329 232 -334 q 164 -319 183 -325 l 164 -205 q 186 -210 174 -208 q 212 -215 199 -213 q 238 -218 225 -217 q 261 -220 251 -220 q 295 -210 280 -220 q 310 -178 310 -201 q 285 -133 310 -153 q 197 -105 259 -114 l 250 0 l 381 0 l 362 -41 q 403 -59 383 -48 q 438 -87 423 -71 q 463 -124 453 -103 q 473 -169 473 -144 "},"ı":{"x_min":109,"x_max":315.859375,"ha":424,"o":"m 315 0 l 109 0 l 109 758 l 315 758 l 315 0 "},"ä":{"x_min":58,"x_max":694,"ha":798,"o":"m 548 0 l 508 104 l 502 104 q 457 51 479 73 q 408 14 434 28 q 349 -7 382 0 q 272 -14 316 -14 q 187 0 226 -14 q 119 44 148 15 q 74 119 90 74 q 58 226 58 164 q 135 404 58 347 q 366 467 212 461 l 487 472 l 487 529 q 460 598 487 575 q 384 620 432 620 q 289 606 335 620 q 196 568 242 592 l 129 705 q 255 755 186 737 q 400 774 324 774 q 618 707 542 774 q 694 505 694 641 l 694 0 l 548 0 m 487 351 l 418 348 q 348 337 377 347 q 302 312 319 328 q 277 274 285 296 q 269 226 269 253 q 292 159 269 178 q 353 139 315 139 q 406 149 381 139 q 448 177 430 158 q 476 225 466 197 q 487 289 487 253 l 487 351 m 173 953 q 180 994 173 977 q 200 1022 187 1011 q 230 1039 213 1034 q 267 1045 247 1045 q 304 1039 287 1045 q 334 1022 321 1034 q 355 994 347 1011 q 363 953 363 977 q 355 913 363 930 q 334 885 347 896 q 304 868 321 873 q 267 863 287 863 q 230 868 247 863 q 200 885 213 873 q 180 913 187 896 q 173 953 173 930 m 446 953 q 453 994 446 977 q 473 1022 460 1011 q 504 1039 486 1034 q 542 1045 521 1045 q 578 1039 561 1045 q 609 1022 595 1034 q 630 994 622 1011 q 638 953 638 977 q 630 913 638 930 q 609 885 622 896 q 578 868 595 873 q 542 863 561 863 q 473 885 501 863 q 446 953 446 907 "},"¹":{"x_min":63,"x_max":396.421875,"ha":526,"o":"m 396 397 l 235 397 l 235 700 q 235 734 235 713 q 236 776 235 755 q 238 814 237 797 q 240 840 239 832 q 229 828 236 835 q 216 813 223 820 q 202 799 209 805 q 189 787 195 792 l 136 746 l 63 832 l 266 992 l 396 992 l 396 397 "},"W":{"x_min":-0.25,"x_max":1287.25,"ha":1287,"o":"m 1048 0 l 809 0 l 687 489 q 681 517 684 499 q 672 559 677 536 q 663 607 667 582 q 654 656 658 632 q 647 700 650 679 q 642 732 644 720 q 638 700 641 720 q 631 656 635 679 q 622 608 627 633 q 613 559 618 582 q 605 517 609 536 q 598 487 601 498 l 477 0 l 238 0 l 0 992 l 206 992 l 319 450 q 325 418 321 439 q 333 372 328 398 q 343 318 338 346 q 353 262 348 289 q 361 211 357 235 q 368 173 366 188 q 373 211 370 188 q 381 260 377 234 q 390 314 385 286 q 399 366 395 342 q 407 409 404 390 q 413 436 411 428 l 551 992 l 735 992 l 873 436 q 879 409 875 428 q 887 366 882 390 q 896 314 891 342 q 905 260 901 286 q 913 211 910 234 q 919 173 917 188 q 925 211 921 188 q 933 262 929 235 q 943 318 938 289 q 953 372 948 346 q 962 418 958 398 q 967 450 965 439 l 1080 992 l 1287 992 l 1048 0 "},">":{"x_min":60,"x_max":705,"ha":765,"o":"m 60 300 l 496 490 l 60 705 l 60 868 l 705 531 l 705 434 l 60 138 l 60 300 "},"Ų":{"x_min":118,"x_max":876,"ha":994,"o":"m 876 992 l 876 349 q 852 205 876 272 q 781 90 829 139 q 661 13 733 41 q 492 -14 589 -14 q 331 12 401 -14 q 213 86 261 38 q 142 202 166 134 q 118 352 118 269 l 118 992 l 328 992 l 328 367 q 339 272 328 311 q 371 208 349 233 q 424 172 392 184 q 498 160 455 160 q 626 212 586 160 q 665 368 665 264 l 665 992 l 876 992 m 514 -154 q 529 -196 514 -182 q 568 -209 544 -209 q 611 -205 589 -209 q 646 -197 632 -201 l 646 -318 q 599 -329 624 -324 q 540 -334 574 -334 q 469 -322 501 -334 q 416 -290 438 -310 q 382 -241 394 -269 q 371 -177 371 -212 q 380 -124 371 -148 q 406 -78 389 -99 q 445 -38 423 -57 q 493 0 467 -19 l 614 0 q 540 -81 567 -44 q 514 -154 514 -118 "},"Ŵ":{"x_min":-0.25,"x_max":1287.25,"ha":1287,"o":"m 1048 0 l 809 0 l 687 489 q 681 517 684 499 q 672 559 677 536 q 663 607 667 582 q 654 656 658 632 q 647 700 650 679 q 642 732 644 720 q 638 700 641 720 q 631 656 635 679 q 622 608 627 633 q 613 559 618 582 q 605 517 609 536 q 598 487 601 498 l 477 0 l 238 0 l 0 992 l 206 992 l 319 450 q 325 418 321 439 q 333 372 328 398 q 343 318 338 346 q 353 262 348 289 q 361 211 357 235 q 368 173 366 188 q 373 211 370 188 q 381 260 377 234 q 390 314 385 286 q 399 366 395 342 q 407 409 404 390 q 413 436 411 428 l 551 992 l 735 992 l 873 436 q 879 409 875 428 q 887 366 882 390 q 896 314 891 342 q 905 260 901 286 q 913 211 910 234 q 919 173 917 188 q 925 211 921 188 q 933 262 929 235 q 943 318 938 289 q 953 372 948 346 q 962 418 958 398 q 967 450 965 439 l 1080 992 l 1287 992 l 1048 0 m 785 1071 q 713 1123 750 1093 q 640 1189 675 1152 q 568 1123 603 1152 q 498 1071 533 1093 l 361 1071 l 361 1089 q 400 1134 378 1108 q 443 1187 421 1160 q 485 1242 465 1215 q 521 1293 506 1269 l 762 1293 q 797 1242 777 1269 q 839 1187 817 1215 q 883 1134 861 1160 q 923 1089 906 1108 l 923 1071 l 785 1071 "},"Ð":{"x_min":32.078125,"x_max":892,"ha":973,"o":"m 32 577 l 125 577 l 125 992 l 415 992 q 612 960 524 992 q 762 868 700 929 q 858 715 824 806 q 892 505 892 624 q 857 285 892 379 q 758 127 823 190 q 600 31 693 63 q 386 0 506 0 l 125 0 l 125 402 l 32 402 l 32 577 m 681 499 q 665 641 681 581 q 616 740 648 701 q 538 798 584 779 q 432 817 492 817 l 335 817 l 335 577 l 495 577 l 495 402 l 335 402 l 335 174 l 413 174 q 614 255 547 174 q 681 499 681 336 "},"r":{"x_min":109,"x_max":570,"ha":603,"o":"m 504 773 q 522 772 512 773 q 541 771 532 772 q 558 769 550 770 q 570 766 565 768 l 570 572 q 555 575 564 574 q 535 578 545 576 q 514 579 524 579 q 497 579 504 579 q 423 569 457 579 q 366 536 390 559 q 329 476 342 513 q 315 386 315 439 l 315 0 l 109 0 l 109 758 l 265 758 l 296 644 l 306 644 q 341 697 322 673 q 383 738 360 721 q 436 763 407 754 q 504 773 466 773 "},"Ø":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 316 27 403 -14 l 268 -51 l 154 11 l 209 102 q 112 270 144 170 q 81 498 81 371 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 640 995 588 1007 q 737 963 693 984 l 784 1038 l 897 973 l 843 886 q 938 720 906 819 q 970 496 970 621 m 297 496 q 329 296 297 374 l 639 802 q 526 832 592 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 699 q 297 496 297 574 m 753 496 q 724 691 753 612 l 415 188 q 465 169 438 175 q 525 162 492 162 q 629 185 585 162 q 699 251 672 208 q 740 356 727 294 q 753 496 753 418 "},"÷":{"x_min":60,"x_max":705,"ha":765,"o":"m 60 415 l 60 564 l 705 564 l 705 415 l 60 415 m 288 224 q 295 259 288 245 q 315 282 302 273 q 346 294 328 290 q 382 298 363 298 q 418 294 401 298 q 448 282 435 290 q 469 259 461 273 q 477 224 477 245 q 469 190 477 204 q 448 167 461 176 q 418 154 435 158 q 382 150 401 150 q 346 154 363 150 q 315 167 328 158 q 295 190 302 176 q 288 224 288 204 m 288 754 q 295 789 288 775 q 315 812 302 803 q 346 825 328 821 q 382 829 363 829 q 418 825 401 829 q 448 812 435 821 q 469 789 461 803 q 477 754 477 775 q 469 720 477 734 q 448 697 461 706 q 418 684 435 688 q 382 680 401 680 q 346 684 363 680 q 315 697 328 688 q 295 720 302 706 q 288 754 288 734 "},"h":{"x_min":109,"x_max":767,"ha":871,"o":"m 767 0 l 560 0 l 560 442 q 534 565 560 524 q 456 606 509 606 q 389 590 416 606 q 345 542 362 574 q 322 463 329 510 q 315 356 315 416 l 315 0 l 109 0 l 109 1055 l 315 1055 l 315 840 q 314 780 315 811 q 311 722 313 748 q 306 661 308 690 l 317 661 q 402 746 350 720 q 518 773 453 773 q 620 757 575 773 q 699 707 666 741 q 749 620 731 673 q 767 494 767 568 l 767 0 "},"f":{"x_min":28,"x_max":570,"ha":538,"o":"m 503 604 l 348 604 l 348 0 l 142 0 l 142 604 l 28 604 l 28 703 l 142 758 l 142 813 q 159 934 142 886 q 209 1010 177 982 q 288 1051 242 1039 q 392 1063 334 1063 q 497 1053 454 1063 q 570 1030 540 1043 l 521 877 q 477 890 500 884 q 422 896 454 896 q 365 871 382 896 q 348 804 348 845 l 348 758 l 503 758 l 503 604 "},"“":{"x_min":16,"x_max":601,"ha":615,"o":"m 332 666 q 355 744 341 703 q 384 828 368 786 q 417 912 400 870 q 452 992 435 954 l 601 992 q 580 905 590 950 q 561 816 570 861 q 545 730 552 772 q 532 652 537 687 l 342 652 l 332 666 m 16 666 q 38 744 25 703 q 67 828 51 786 q 100 912 83 870 q 135 992 118 954 l 284 992 q 263 905 273 950 q 244 816 254 861 q 228 730 235 772 q 215 652 220 687 l 25 652 l 16 666 "},"A":{"x_min":-0.25,"x_max":903.25,"ha":903,"o":"m 690 0 l 623 238 l 280 238 l 212 0 l 0 0 l 322 996 l 579 996 l 903 0 l 690 0 m 574 413 l 510 629 q 498 669 506 642 q 480 731 489 697 q 463 798 471 764 q 451 856 455 832 q 444 821 449 841 q 434 778 440 800 q 422 732 428 755 q 411 688 416 709 q 401 652 405 668 q 394 629 396 637 l 331 413 l 574 413 "},"O":{"x_min":81,"x_max":970,"ha":1050,"o":"m 970 496 q 943 287 970 382 q 861 126 916 193 q 722 22 806 59 q 525 -14 639 -14 q 327 22 411 -14 q 189 126 243 59 q 107 288 134 193 q 81 498 81 382 q 107 707 81 613 q 189 867 134 801 q 328 970 244 934 q 526 1007 411 1007 q 723 970 640 1007 q 861 867 807 934 q 943 706 916 800 q 970 496 970 612 m 297 496 q 310 355 297 417 q 352 250 324 293 q 423 184 380 207 q 525 160 466 160 q 629 184 585 160 q 699 250 672 207 q 740 355 727 293 q 753 496 753 417 q 740 636 753 574 q 699 742 727 698 q 629 808 672 785 q 526 832 586 832 q 424 808 467 832 q 352 742 380 785 q 310 636 324 698 q 297 496 297 574 "},"Đ":{"x_min":32.078125,"x_max":892,"ha":973,"o":"m 32 577 l 125 577 l 125 992 l 415 992 q 612 960 524 992 q 762 868 700 929 q 858 715 824 806 q 892 505 892 624 q 857 285 892 379 q 758 127 823 190 q 600 31 693 63 q 386 0 506 0 l 125 0 l 125 402 l 32 402 l 32 577 m 681 499 q 665 641 681 581 q 616 740 648 701 q 538 798 584 779 q 432 817 492 817 l 335 817 l 335 577 l 495 577 l 495 402 l 335 402 l 335 174 l 413 174 q 614 255 547 174 q 681 499 681 336 "},"Ť":{"x_min":28,"x_max":735,"ha":762,"o":"m 487 0 l 277 0 l 277 817 l 28 817 l 28 992 l 735 992 l 735 817 l 487 817 l 487 0 m 664 1274 q 624 1229 647 1255 q 580 1176 602 1203 q 538 1121 558 1148 q 503 1071 518 1094 l 262 1071 q 226 1121 247 1094 q 184 1176 206 1148 q 141 1229 162 1203 q 102 1274 119 1255 l 102 1293 l 239 1293 q 309 1240 274 1270 q 381 1174 344 1211 q 454 1240 416 1211 q 526 1293 491 1270 l 664 1293 l 664 1274 "},"ŗ":{"x_min":77,"x_max":570,"ha":603,"o":"m 504 773 q 522 772 512 773 q 541 771 532 772 q 558 769 550 770 q 570 766 565 768 l 570 572 q 555 575 564 574 q 535 578 545 576 q 514 579 524 579 q 497 579 504 579 q 423 569 457 579 q 366 536 390 559 q 329 476 342 513 q 315 386 315 439 l 315 0 l 109 0 l 109 758 l 265 758 l 296 644 l 306 644 q 341 697 322 673 q 383 738 360 721 q 436 763 407 754 q 504 773 466 773 m 77 -288 q 89 -242 83 -268 q 100 -188 95 -216 q 111 -134 106 -161 q 118 -85 116 -107 l 310 -85 l 310 -98 q 261 -198 289 -145 q 197 -307 233 -251 l 77 -307 l 77 -288 "}}'),G6="bold",W6=1290,X6=-154,Y6="normal",Z6={yMin:-407,xMin:-269,yMax:1391,xMax:1695},J6=1e3,$6={license:"Apache License 2.0 (Droid Sans)"},K6=-328,j6="Droid Sans",Q6=1617,th=102,eh={glyphs:V6,cssFontWeight:G6,ascender:W6,underlinePosition:X6,cssFontStyle:Y6,boundingBox:Z6,resolution:J6,original_font_information:$6,descender:K6,familyName:j6,lineHeight:Q6,underlineThickness:th},Q={coral:"#EA5B48",white:"#ffffff",black:"#111111",bg:"#f3e9dc",plinth:"#efe4d3",cap:"#fbf3e6",facade:"#EA5B48",facadeDark:"#c94a39",wood:"#8d5b3a",woodTop:"#4f3121",brass:"#e0ac4c",red:"#d9573f",teal:"#2a9d8f",cream:"#fff6e6",ink:"#2a2522",steel:"#c9d1d8",skin:"#f3bf98",blush:"#f08a7a",night:"#2b3f73",pink:"#ff4fa6"},Gt=4.2,Pt=3,ue=2.5,Ft=.14,A=(i,t={})=>new Cn({color:i,roughness:.78,metalness:0,...t}),Yt=(i,t,e=2)=>new Cn({color:i,emissive:t,emissiveIntensity:e,roughness:.4}),ee=(i=Q.steel)=>A(i,{metalness:.75,roughness:.3});function de(i,t,e=0,n=0,r=0,s=!0){const a=new je(i,t);return a.position.set(e,n,r),a.castShadow=s,a.receiveShadow=!0,a}const L=(i,t,e,n,r,s,a,o=.04)=>de(new O6(i,t,e,2,Math.max(.001,Math.min(o,i/2-.001,t/2-.001,e/2-.001))),n,r,s,a),ct=(i,t,e,n,r,s,a,o=20)=>de(new qs(i,t,e,o),n,r,s,a),Zt=(i,t,e,n,r,s=20)=>de(new hi(i,s,Math.round(s*.6)),t,e,n,r),he=(i,t,e,n,r,s,a)=>{const o=Zt(1,n,r,s,a);return o.scale.set(i,t,e),o},Qa=(i,t,e,n,r,s,a=Math.PI*2)=>de(new Ze(i,t,10,28,a),e,n,r,s),_t=(...i)=>{const t=new xe;return i.forEach(e=>t.add(e)),t},jt=(i,t=0,e=0,n=0,r=0)=>(i.position.set(t,e,n),i.rotation.y=r,i);function Gi(i,t,e,n,r,s){const a=new L6(i,t,e,2);return a.position.set(n,r,s),a}function S1(i=1){const t=_t(ct(.17,.13,.3,A("#c9744f"),0,.15,0));for(let e=0;e<7;e++){const n=e/7*Math.PI*2,r=he(.07,.22,.03,A(e%2?"#3e9c6b":"#2f7d55",{roughness:.7}),Math.cos(n)*.1,.48,Math.sin(n)*.1);r.rotation.set(Math.sin(n)*.5,0,-Math.cos(n)*.5),t.add(r)}return t.scale.setScalar(i),t}function B0(){const i=A(Q.cap);return _t(L(.07,.95,1.15,i,0,0,0,.03),L(.075,.82,1.02,A(Q.night,{emissive:"#22356e",emissiveIntensity:.7,roughness:.2}),.01,0,0,.01),Zt(.09,Yt("#fff3c4","#ffe08a",1.2),.05,.22,-.25),L(.09,.82,.045,i,.02,0,0,.01),L(.09,.045,1.02,i,.02,0,0,.01),L(.16,.06,1.25,i,.05,-.5,0,.02))}function Hn({shirt:i,hair:t,hairStyle:e="short",height:n=1.85,apron:r,smile:s=!0,extras:a}){const o=new xe,l=A(Q.skin,{roughness:.6}),c=n*.52,h=n*.17,d=de(new fr(.22,c-.44,6,20),A(i),0,c/2+.02,0);d.scale.set(1,1,.8),o.add(d),r&&o.add(L(.34,c*.62,.05,A(r),0,c*.42,.17,.025));const u=[];for(const m of[-1,1]){const f=de(new fr(.065,.26,4,10),A(i),m*.26,c*.62,.02);f.rotation.z=m*.25,o.add(f),u.push(f),o.add(Zt(.07,l,m*.31,c*.4,.05,12))}const p=Zt(h,l,0,c+h*.9,0,28);o.add(p);const q=A(Q.ink,{roughness:.3});for(const m of[-1,1])p.add(he(h*.1,h*.15,h*.06,q,m*h*.36,h*.05,h*.93)),p.add(he(h*.16,h*.1,h*.05,A(Q.blush,{roughness:.7}),m*h*.6,-h*.22,h*.78));if(s){const m=de(new Ze(h*.22,h*.045,6,16,Math.PI),q,0,-h*.18,h*.95);m.rotation.z=Math.PI,p.add(m)}p.add(he(h*.12,h*.1,h*.1,l,0,-h*.02,h*.98));const g=A(t,{roughness:.85});if(e!=="none"){const m=de(new hi(h*1.06,28,14,0,Math.PI*2,0,Math.PI*.5),g,0,h*.05,-h*.05);m.rotation.x=-.35,p.add(m)}if(e==="bun"&&p.add(Zt(h*.42,g,0,h*.95,-h*.45,16)),e==="quiff"){const m=he(h*.5,h*.3,h*.45,g,h*.2,h*.9,h*.3);m.rotation.z=-.4,p.add(m)}return e==="gray"&&(p.children.at(-1).material=A("#c9c4bd",{roughness:.85})),Object.assign(o.userData,{head:p,arms:u}),a&&a(o,{bodyH:c,headR:h,head:p,skin:l,hm:g}),o}function nh(i,t,e=Q.ink){const n=A(e,{roughness:.3});for(const r of[-1,1])i.add(Qa(t*.17,t*.025,n,r*t*.36,t*.05,t*.98));i.add(L(t*.25,t*.04,t*.04,n,0,t*.07,t*1,.005))}function ih(i,t="#6fd6ff"){const e=new Cn({color:t,emissive:t,emissiveIntensity:.9,transparent:!0,opacity:.55,roughness:.3});return i.traverse(n=>{n.isMesh&&(n.material=e,n.castShadow=!1)}),i}function Wo({color:i="#d9a35b",lying:t=!1}={}){const e=A(i,{roughness:.85}),n=A("#6b4428"),r=A(Q.ink,{roughness:.3}),s=new xe,a=he(.32,.2,.2,e,0,t?.2:.4,0);s.add(a);const o=_t(Zt(.17,e,0,0,0,20),he(.09,.07,.1,e,0,-.04,.14),Zt(.035,r,0,-.01,.24,10));for(const c of[-1,1])o.add(he(.05,.12,.03,n,c*.14,-.03,-.02).rotateZ(c*.3)),t?o.add(L(.06,.012,.01,r,c*.07,.04,.155,.004)):o.add(Zt(.025,r,c*.07,.05,.14,10));if(o.position.set(.3,t?.28:.62,.02),o.rotation.y=.9,s.add(o),!t)for(const[c,h]of[[-.2,-.1],[-.2,.1],[.18,-.1],[.18,.1]])s.add(ct(.05,.045,.3,e,c,.15,h,10));const l=ct(.025,.035,.25,e,-.35,t?.25:.5,0,8);return l.rotation.z=t?1.3:.7,s.add(l),s.userData.tail=l,s}function is({a:i,b:t,tiles:e=!1,nx:n=10,nz:r=7,rough:s=.78}){const a=new xe,o=A(i,{roughness:s}),l=A(t,{roughness:s});if(e){const c=Gt/n,h=Pt/r;for(let d=0;d<n;d++)for(let u=0;u<r;u++)a.add(L(c-.01,.05,h-.01,(d+u)%2?o:l,-Gt/2+c*(d+.5),.025,-Pt/2+h*(u+.5),.008))}else{const c=Gt/n;for(let h=0;h<n;h++)a.add(L(c-.012,.06,Pt,h%2?o:l,-Gt/2+c*(h+.5),.03,0,.012))}return a}const or=new B6().parse(eh),na=new Map;function rh(i,t){const e=i+t;if(!na.has(e)){const n=or.generateShapes(i,1);na.set(e,n.length?new x1(n,{depth:t,bevelEnabled:!1,curveSegments:3}):null)}return na.get(e)}function sh(i){if(i.length<=14||!i.includes(" "))return[i];const t=i.length/2;let e=-1;for(let n=0;n<i.length;n++)i[n]===" "&&(e<0||Math.abs(n-t)<Math.abs(e-t))&&(e=n);return[i.slice(0,e),i.slice(e+1)]}function ia(i,{maxW:t,maxH:e,material:n,depth:r=.15,jitter:s=0}){const a=new xe,o=[],l=or.data.resolution,c=1.25,h=sh(i.trim()||" ");let d=7;const u=()=>(d=d*16807%2147483647)/2147483647-.5;let p=0;h.forEach((m,f)=>{const y=new xe;let x=0;for(const _ of m){const I=or.data.glyphs[_]||or.data.glyphs["?"],T=rh(or.data.glyphs[_]?_:"?",r);if(T){const w=new je(T,n);w.position.x=x,s&&(w.rotation.z=u()*s,w.position.y=u()*s*.3),w.castShadow=!1,y.add(w),o.push(w)}x+=I.ha/l}y.position.set(-x/2,(h.length-1)*c/2-f*c-.36,0),p=Math.max(p,x),a.add(y)});const q=h.length*c-.25,g=Math.min(t/p,e/q);return a.scale.set(g,g,1),a.userData.letters=o,a}const gs=(i,t)=>i.add(is(t)),Ce=(i,t,e)=>new D(i,t,e);function yr(i,{wall:t,wainscot:e,rail:n="#5a3722",tile:r}){const s=A(t);if(i.add(L(Gt,ue,.03,s,0,ue/2,-Pt/2+.015,.005)),i.add(L(.03,ue,Pt,s,-Gt/2+.015,ue/2,0,.005)),e){const a=A(e),o=A(n,{roughness:.5});i.add(L(Gt,.9,.04,a,0,.45,-Pt/2+.05,.01)),i.add(L(.04,.9,Pt,a,-Gt/2+.05,.45,0,.01));for(let l=0;l<6;l++)i.add(L(.5,.5,.03,o,-Gt/2+.38+l*.68,.45,-Pt/2+.08,.02));for(let l=0;l<4;l++)i.add(L(.03,.5,.5,o,-Gt/2+.08,.45,-Pt/2+.4+l*.7,.02));i.add(L(Gt,.06,.09,o,0,.92,-Pt/2+.075,.02)),i.add(L(.09,.06,Pt,o,-Gt/2+.075,.92,0,.02))}if(r){const a=A(r);for(let o=.3;o<1.6;o+=.3)i.add(L(Gt,.012,.01,a,0,o,-Pt/2+.035,.002));for(let o=-Gt/2+.3;o<Gt/2;o+=.3)i.add(L(.012,1.6,.01,a,o,.8,-Pt/2+.035,.002));i.add(L(Gt,.05,.05,a,0,1.62,-Pt/2+.04,.01))}}function t1(i,t,e="#e8b04b",n=2,r=2.8){const s=_t(ct(.007,.007,.6,A(Q.ink),0,ue-.3,0,6),ct(.05,.22,.2,A(e,{roughness:.5}),0,ue-.68,0,24),Zt(.06,Yt("#fff3c4","#ffd27a",2.6),0,ue-.78,0,12));return s.children[2].castShadow=!1,s.add(Gi("#ffcf8a",n,r,0,ue-.85,0)),jt(s,i,0,t)}function ah(i){yr(i,{wall:"#e9c98f",wainscot:"#b5653f",rail:"#7a3f25"});const t=A("#9c5a36"),e=A("#f7efe2",{roughness:.3}),n=ee(Q.brass),r=_t(L(2.2,.84,.55,t,0,.42,0,.05),L(2.34,.07,.7,e,0,.875,.02,.03),L(2.2,.05,.02,n,0,.65,.285,.01),L(.6,.18,.02,A(Q.cream),0,.45,.29,.01));i.add(jt(r,0,0,-.1)),i.add(L(2.2,.15,.7,A("#7a4f33"),0,.075,-.85,.03));const s=_t(L(.9,.6,.04,t,0,0,0,.03));for(let l=0;l<4;l++)for(let c=0;c<2;c++)s.add(ct(.012,.012,.05,n,-.3+l*.2,.15-c*.25,.04,6).rotateX(Math.PI/2)),(l+c)%3&&s.add(L(.05,.1,.012,A(l%2?Q.red:Q.teal),-.3+l*.2,.08-c*.25,.05,.01));i.add(jt(s,1,1.65,-Pt/2+.06));const a=_t(ct(.22,.22,.05,A(Q.cream),0,0,0).rotateX(Math.PI/2),de(new Ze(.22,.03,8,28),n));a.add(L(.02,.14,.01,A(Q.ink),0,.06,.04,.005),L(.1,.02,.01,A(Q.ink),.04,0,.04,.005)),i.add(jt(a,-.8,1.85,-Pt/2+.06)),i.add(jt(B0(),-Gt/2+.06,1.6,.45));const o=_t(L(.7,.3,.65,A(Q.red),0,.3,0,.1),L(.7,.55,.16,A(Q.red),0,.6,-.25,.08),L(.14,.42,.65,A("#c04a35"),-.33,.42,0,.06),L(.14,.42,.65,A("#c04a35"),.33,.42,0,.06));i.add(jt(o,-1.45,0,.75,.6)),i.add(L(1.6,.012,.9,A("#d8a25b"),-.2,.06,.95,.005)),i.add(jt(S1(),1.75,0,-1.15)),i.add(t1(-.4,.2,"#2f6f73",1.8))}function oh(i){gs(i,{a:"#a7a49d",b:"#9a978f",tiles:!0}),yr(i,{wall:"#8fb0bf",tile:"#7a99a8"}),A("#f2f2ee",{roughness:.4});const t=A(Q.ink),e=ee("#c9784a");i.add(ct(.045,.045,Gt,e,0,ue-.2,-Pt/2+.15).rotateZ(Math.PI/2)),i.add(ct(.035,.035,Gt,ee("#8a9aa6"),0,ue-.34,-Pt/2+.13).rotateZ(Math.PI/2)),i.add(ct(.045,.045,ue-.2,e,.68,(ue-.2)/2,-Pt/2+.15)),i.add(de(new Ze(.1,.02,8,20),A(Q.red),.68,1.2,-Pt/2+.24));const n=_t(L(.8,.5,.5,A("#4d6b7a"),0,.4,0,.04));for(const[s,a]of[[-.32,-.2],[.32,-.2],[-.32,.2],[.32,.2]])n.add(Zt(.06,t,s,.06,a,10));["#ffffff","#f2b5a8","#ffffff","#a8d5e8"].forEach((s,a)=>n.add(L(.36,.08,.3,A(s,{roughness:.95}),-.17+a%2*.36,.69+Math.floor(a/2)*.08,0,.03))),i.add(jt(n,.4,0,.75,-.2)),i.add(_t(ct(.16,.13,.28,A("#f2b544"),0,.14,0),ct(.015,.015,1.3,A("#b98d5a"),.05,.75,0,6).rotateZ(-.12)).translateX(-1.75).translateZ(.9));const r=_t(ct(.006,.006,.5,t,0,ue-.25,0,6),Zt(.07,Yt("#fff3c4","#ffd27a",2.4),0,ue-.55,0,12));r.children[1].castShadow=!1,r.add(Gi("#ffe0a8",1.8,2.8,0,ue-.65,0)),i.add(jt(r,-.3,0,.1))}function lh(i){gs(i,{a:"#c9a27a",b:"#bf966d"}),yr(i,{wall:"#7a4a63",wainscot:"#5e3449",rail:Q.brass});const t=ee(Q.brass),e=A("#5a3722");i.add(L(2.6,.012,1.7,A("#e7d3b0"),-.2,.065,.1,.005));for(const s of[-1.45,1.05])i.add(L(.45,.5,.4,e,s,.25,-1.15,.04)),i.add(_t(ct(.06,.08,.25,t,0,.62,0),ct(.12,.17,.2,Yt("#fff1d2","#ffcf8a",.7),0,.84,0)).translateX(s).translateZ(-1.15));i.add(Gi("#ffcf8a",1.4,2.4,1.05,1,-.9));const n=_t(ct(.008,.008,.4,t,0,ue-.2,0,6),de(new Ze(.28,.025,8,28),t,0,ue-.45,0).rotateX(Math.PI/2));for(let s=0;s<6;s++){const a=s/6*Math.PI*2,o=Zt(.045,Yt("#fff3c4","#ffd27a",2.2),Math.cos(a)*.28,ue-.39,Math.sin(a)*.28,10);o.castShadow=!1,n.add(o)}n.add(Gi("#ffd9a0",1.6,3,0,ue-.6,0)),i.add(jt(n,-.2,0,.3));const r=_t(ct(.25,.25,.04,e,0,.6,0),ct(.03,.03,.58,t,0,.3,0,8),ct(.15,.15,.03,t,0,.015,0));r.add(ct(.09,.07,.18,ee(),0,.71,0),ct(.03,.035,.3,A("#2f6b4a",{roughness:.2}),.02,.85,0,10)),i.add(jt(r,1.6,0,.6))}function ch(i){gs(i,{a:"#c08a5a",b:"#ab774b"}),yr(i,{wall:"#2f5d62",wainscot:"#7a4f33"}),i.add(jt(B0(),-Gt/2+.06,1.6,.55));const t={wood:A(Q.wood),top:A(Q.woodTop,{roughness:.4}),brass:ee(Q.brass),red:A(Q.red,{roughness:.55}),ink:A(Q.ink)},e=Yt("#ff8cc4",Q.pink,2.4),n=new xe,r=(l,c=!1)=>n.add(new je(new v1(new C0(l.map(([h,d])=>Ce(h,d,0)),c,"catmullrom",.01),48,.028,8,c),e));r([[-.34,.32],[.34,.32],[0,-.04]],!0),r([[0,-.04],[0,-.38]]),r([[-.2,-.38],[.2,-.38]]),n.add(Zt(.055,Yt("#c8ff8a","#7dff3a",1.8),.17,.25,0,12)),n.add(L(.9,.95,.03,A("#24474b"),0,-.02,-.04,.03)),i.add(jt(n,1.62,1.68,-Pt/2+.08)),i.add(Gi("#ff5fb0",1,2,1.62,1.66,-Pt/2+.4));const s=_t(L(2.3,.84,.55,t.wood,0,.42,0,.05),L(2.46,.08,.72,t.top,0,.88,.02,.035),L(2.3,.045,.045,t.brass,0,.2,.34,.02));for(let l=0;l<4;l++)s.add(L(.48,.52,.03,A("#9c6a47"),-.84+l*.56,.45,.285,.03));const a=A("#d8eef2",{roughness:.1,transparent:!0,opacity:.55});for(const l of[-.75,-.6])s.add(ct(.05,.04,.13,a,l,.99,.12,14));s.add(ct(.13,.09,.07,A(Q.cream),.85,.96,.1));for(const[l,c]of[[.8,.08],[.9,.12],[.85,.15]])s.add(he(.05,.045,.045,A("#f2c84b",{roughness:.6}),l,1.02,c));i.add(jt(s,.55,0,.15)),i.add(L(2.3,.22,.7,t.wood,.55,.11,-.55,.03));const o=new xe;o.add(L(1.5,1,.06,t.top,0,1.6,-.12,.03));for(const l of[1.3,1.75])o.add(L(1.42,.05,.3,t.top,0,l,0,.02));i.add(jt(o,.3,0,-Pt/2+.23)),i.add(t1(-.5,.15)),i.add(t1(1.65,.15)),i.add(jt(S1(),-Gt/2+.3,0,-Pt/2+.3))}function hh(i){gs(i,{a:"#f2efe8",b:"#3b3a38",tiles:!0}),yr(i,{wall:"#e3ece7",tile:"#c3d1ca"});const t=ee(),e=A("#3b3a38");A(Q.ink);const n=_t(L(1,.86,.66,t,0,.43,0,.04),L(1.04,.05,.7,A("#d8dde1",{metalness:.5,roughness:.3}),0,.885,0,.02));n.add(L(.45,.03,.3,A("#d9a36b"),-.15,.925,.05,.01)),n.add(Zt(.06,A(Q.red,{roughness:.5}),-.25,.98,.05,12),Zt(.05,A("#7fb84a"),-.08,.97,.08,12)),i.add(jt(n,.5,0,-1.12));const r=_t(L(.72,2,.66,ee("#dfe5ea"),0,1,0,.06),L(.03,.5,.04,t,-.27,1.45,.35,.015),L(.03,.3,.04,t,-.27,.6,.35,.015),L(.7,.015,.02,A("#b8c0c8"),0,.92,.335,.005));i.add(jt(r,1.62,0,-1.12)),i.add(ct(.015,.015,1.2,t,.4,1.95,-Pt/2+.1).rotateZ(Math.PI/2));for(const[s,a]of[[0,.14],[.35,.11],[.7,.16]])i.add(_t(ct(a,a,.03,A("#b06a3a",{metalness:.6,roughness:.35}),0,0,0).rotateX(Math.PI/2),L(.03,.16,.02,e,0,a+.08,0,.01)).translateX(s).translateY(1.95-a-.15).translateZ(-Pt/2+.12));i.add(L(1.2,.06,.18,Yt("#ffffff","#fff7e6",1.4),0,ue-.05,.2,.02)),i.add(Gi("#fff4e0",1.8,3.2,0,ue-.3,.2)),i.add(_t(L(.5,.86,.5,t,0,.43,0,.04),ct(.15,.1,.03,A("#ffffff",{roughness:.3}),0,.88,0),he(.08,.04,.06,A("#f2c84b"),0,.92,0)).translateX(1.5).translateZ(.7))}const e1={reception:{build:ah,col:-1,row:0,label:"#2f6f73",slots:{frontdesk:Ce(-.1,.15,-.8),pms:Ce(.65,.91,-.15),floor:Ce(0,0,0)}},housekeeping:{build:oh,col:1,row:0,label:"#4d6b7a",slots:{security:Ce(-1.3,0,-.75),storage:Ce(-.15,0,-1.15),laundry:Ce(1.4,0,-1.12)}},bar:{build:ch,col:-1,row:1,label:"#2f5d62",slots:{bartender:Ce(.55,.22,-.55),noticeboard:Ce(-Gt/2+.09,1.5,-.62),seating:Ce(0,0,0),shelf:Ce(.3,0,-Pt/2+.23)}},kitchen:{build:hh,col:1,row:1,label:"#3b3a38",slots:{chef:Ce(-.85,0,-.45),kitchenwall:Ce(-Gt/2+.06,1.45,.25),stove:Ce(-.95,0,-1.12)}},suite:{build:lh,col:0,row:2,label:"#7a4a63",slots:{bed:Ce(-.2,.06,-.45),wallart:Ce(-.2,1.75,-Pt/2+.06),view:Ce(-Gt/2+.06,1.6,.55)}}},hn=()=>A(Q.ink,{roughness:.3});function Jr(i,{bezel:t=Q.ink,w:e=.5,h:n=.32}={}){return _t(L(.22,.02,.16,A(t),0,.01,0,.008),L(.04,.16,.03,A(t),0,.1,-.02,.01),L(e+.04,n+.04,.035,A(t),0,.33,0,.012),L(e,n,.01,i,0,.33,.02,.004))}const uh=()=>_t(L(.85,.06,.5,A("#9c6a47"),0,.72,0,.02),L(.06,.7,.44,A("#7a4f33"),-.37,.35,0,.02),L(.06,.7,.44,A("#7a4f33"),.37,.35,0,.02)),ra=(i,t,e,n=.04)=>_t(L(i+.1,t+.1,n,A(e,{roughness:.5}),0,0,0,.015)),fh=()=>{const i=new xe,t=Yt("#ffffff","#ffffff",.4);return[[0,0,.09],[.12,.14,.07],[.22,.26,.05]].forEach(([e,n,r])=>{i.add(L(r,r*.2,.01,t,e,n+r/2,0,.003),L(r,r*.2,.01,t,e,n-r/2,0,.003));const s=L(r*1.3,r*.2,.01,t,e,n,0,.003);s.rotation.z=Math.PI/4,i.add(s)}),i},dh={frontdesk_bell(){const i=_t(ct(.08,.09,.02,ee(Q.brass),0,.77,.7),de(new hi(.07,20,10,0,Math.PI*2,0,Math.PI/2),ee(Q.brass),0,.78,.7),Zt(.015,ee(Q.brass),0,.86,.7,8)),t=L(.2,.13,.01,A(Q.cream),.22,.83,.68,.003);return t.rotation.set(-.3,-.2,.08),i.add(t,L(.12,.012,.005,hn(),.22,.85,.69,.002).rotateX(-.3),L(.08,.012,.005,hn(),.2,.82,.7,.002).rotateX(-.3)),i},frontdesk_newbie(){return Hn({shirt:"#7fb84a",hair:"#a8622f",hairStyle:"short",extras:(i,{bodyH:t})=>{i.add(L(.15,.075,.02,A("#f2b544"),-.08,t*.72,.2,.012));const e=L(.12,.08,.01,A(Q.teal),.32,t*.45,.14,.01);e.rotation.z=.4,i.add(e);const n=Qa(.07,.02,A(Q.brass),.05,t+.75,0,Math.PI*1.4);n.rotation.z=-.6,i.add(n,Zt(.025,A(Q.brass),.02,t+.57,0,8))}})},frontdesk_pro(){return Hn({shirt:"#24365a",hair:"#c9c4bd",hairStyle:"short",height:1.92,extras:(i,{bodyH:t,head:e,headR:n})=>{nh(e,n),i.add(L(.14,t*.5,.05,A("#ffffff"),0,t*.62,.17,.02)),i.add(L(.06,t*.4,.06,A(Q.red),0,t*.6,.19,.02))}})},frontdesk_hologram(){const i=ih(Hn({shirt:"#6fd6ff",hair:"#6fd6ff",hairStyle:"quiff"}));i.position.y=.05;const t=ct(.3,.32,.05,Yt("#bdeeff","#6fd6ff",1.2),0,.025,0),e=ct(.28,.3,2,new Cn({color:"#6fd6ff",emissive:"#6fd6ff",emissiveIntensity:.5,transparent:!0,opacity:.12}),0,1,0,24);return e.castShadow=!1,_t(t,i,e)},pms_floppy(){const i=A("#e6dcc3"),t=_t(L(.42,.36,.4,i,0,.2,-.05,.05),L(.3,.24,.02,Yt("#3c6b3c","#2fa84f",.7),0,.22,.155,.02),L(.42,.03,.16,i,0,.015,.25,.01)),e=L(.12,.12,.01,A("#2a3c78"),.27,.07,.1,.005);return e.rotation.set(-.2,-.3,.15),t.add(e,L(.05,.035,.012,ee(),.27,.11,.105,.003).rotateY(-.3)),t},pms_hotsoft(){return Jr(Yt("#ffb15a","#ff8a2a",.8))},pms_mews(){const i=Jr(Yt("#ffffff","#ffffff",.7),{bezel:"#e8e8e8"});for(let t=0;t<3;t++)i.add(L(.36-t*.08,.03,.005,A(Q.ink),-.04+t*.04,.42-t*.07,.027,.003));return i},pms_opera(){const i=Jr(Yt("#e86a5a","#c74634",.9)),t=_t(Zt(.08,A("#ffffff"),0,0,0,14),Zt(.06,A("#ffffff"),.08,-.02,0,14),Zt(.06,A("#ffffff"),-.08,-.02,0,14));return i.add(jt(t,.18,.62,0)),i.userData.bob=t,i},security_sticky(){const i=jt(Jr(Yt("#9fc3d9","#5a8fb0",.5)),0,.75,-.05),t=L(.1,.1,.006,A("#ffe14d"),.22,.43,.03,.002);return t.rotation.z=.15,i.add(t,L(.06,.01,.002,hn(),.22,.44,.034,.001).rotateZ(.15)),_t(uh(),i)},security_dog(){const i=ct(.45,.45,.12,A("#c94f3d",{roughness:.95}),0,.06,0,24);i.scale.z=.7;const t=jt(Wo({lying:!0}),0,.08,0,-.3);return _t(i,t,jt(fh(),.35,.65,0))},security_defender(){const i=_t(he(.32,.38,.06,Yt("#4a9be8","#2b7de0",.9),0,0,0),L(.08,.3,.03,Yt("#ffffff","#ffffff",.6),-.06,-.04,.05,.01).rotateZ(.6),L(.08,.45,.03,Yt("#ffffff","#ffffff",.6),.08,.04,.05,.01).rotateZ(-.5)),t=_t(ct(.2,.25,.9,A("#3b4a57"),0,.45,0),jt(i,0,1.35,0));return t.userData.spin=i,t},security_tarek(){return Hn({shirt:"#1f3b57",hair:"#2a1d16",height:1.95,extras:(i,{bodyH:t,head:e,headR:n})=>{e.add(L(n*.12,n*.4,n*.12,hn(),n*.98,-n*.1,.02,.01)),i.add(L(.2,.08,.02,A(Q.brass),.08,t*.72,.2,.01))}})},storage_usb(){const i=new xe,t=["#d9573f","#2a9d8f","#e2b13c","#3b3a38","#6aa7c9","#8a4fa0"];for(let e=0;e<22;e++){const n=e*2.4,r=.05+e%7*.04,s=Math.floor(e/9),a=L(.12,.035,.05,A(t[e%t.length],{roughness:.5}),Math.cos(n)*r,.02+s*.035,.15+Math.sin(n)*r*.6,.01);a.rotation.y=n,i.add(a)}return i},storage_cabinet(){const i=_t(L(.55,1.3,.55,A("#8a979f",{metalness:.3,roughness:.5}),0,.65,0,.03));for(let t=0;t<4;t++)i.add(L(.48,.27,.02,A("#9eabb3",{metalness:.3,roughness:.5}),0,.17+t*.31,.28,.01),L(.14,.03,.03,ee(),0,.24+t*.31,.3,.01));for(let t=0;t<7;t++){const e=L(.32,.01,.25,A(Q.cream),-.1+t%3*.08,1.32+t*.02,.05+t%2*.06,.003);e.rotation.set(.1*(t%3),t*.6,.12*(t%2*2-1)),i.add(e)}for(let t=0;t<3;t++){const e=L(.3,.2,.01,A(Q.cream),-.05+t*.05,.4+t*.31,.3,.003);e.rotation.x=-.4,i.add(e)}return i},storage_shelves(){const i=A("#c08a5a"),t=_t(L(.05,1.7,.4,i,-.6,.85,0,.01),L(.05,1.7,.4,i,.6,.85,0,.01)),e=["#e2b13c","#2a9d8f","#d9573f"];for(let n=0;n<4;n++)if(t.add(L(1.25,.04,.4,i,0,.1+n*.5,0,.01)),n<3)for(let r=0;r<3;r++)t.add(L(.32,.3,.32,A(e[(n+r)%3],{roughness:.9}),-.38+r*.38,.27+n*.5,0,.02),L(.16,.06,.01,A("#ffffff"),-.38+r*.38,.3+n*.5,.165,.003));return t},bed_camp(){const i=_t(L(.8,.05,1.85,A("#5f7a4a",{roughness:.95}),0,.42,-.1,.02));for(const t of[-1,1])i.add(ct(.02,.02,1.85,ee("#6b6b6b"),t*.4,.42,-.1,8).rotateX(Math.PI/2));for(const t of[-.9,.7])for(const e of[-1,1]){const n=ct(.018,.018,.55,ee("#6b6b6b"),0,.21,t,6);n.rotation.z=e*.7,i.add(n)}return i.add(L(.5,.1,.3,A("#d8cfb8"),0,.5,-.82,.04),L(.75,.06,.8,A("#8a6b4a",{roughness:.95}),0,.48,.3,.03)),i},bed_double(){return Xo()},bed_fourposter(){const i=Xo("#8a1f3a"),t=A("#4f3121"),e=A("#b23a5a",{roughness:.9});for(const[n,r]of[[-.8,-1.02],[.8,-1.02],[-.8,.82],[.8,.82]])i.add(ct(.04,.045,2.15,t,n,1.075,r,10),Zt(.06,ee(Q.brass),n,2.18,r,10));i.add(L(1.72,.12,1.96,e,0,2.08,-.1,.03));for(const n of[-.8,.8])for(const r of[-1,.8]){const s=ct(.1,.16,1.7,e,n*.97,1.2,r,12);s.scale.x=.6,i.add(s)}return i},wallart_stock(){const i=ra(1,.62,"#ffffff",.03);i.add(L(1,.62,.01,A("#f6b26b"),0,0,.018,.003),Zt(.1,Yt("#fff3c4","#ffd27a",.6),.18,.04,.02,14)),i.add(he(.6,.16,.01,A("#b65a58"),-.2,-.3,.024),he(.5,.12,.01,A("#8a3f50"),.3,-.3,.026));for(const[t,e]of[[-.25,.12],[.25,-.1]]){const n=L(.45,.06,.005,new Cn({color:"#ffffff",transparent:!0,opacity:.6}),t,e,.032,.002);n.rotation.z=.35,n.castShadow=!1,i.add(n)}return i},wallart_ai(){const i=ra(.9,.65,"#1f1a17",.03);i.add(L(.9,.65,.01,A("#3a2d6b"),0,0,.018,.003)),[["#ff6fb5",-.2,.1,.18],["#59e3c8",.15,-.05,.22],["#ffd34d",.25,.18,.1],["#8a6bff",-.25,-.18,.12]].forEach(([e,n,r,s],a)=>i.add(he(s,s*.8,.01,Yt(e,e,.3),n,r,.022+a*.002)));const t=_t(he(.06,.07,.01,A(Q.skin),0,0,0));for(let e=0;e<6;e++){const n=L(.018,.07,.008,A(Q.skin),-.05+e*.02,.08,0,.008);n.rotation.z=(e-2.5)*.12,t.add(n)}return i.add(jt(t,0,-.05,.035)),i},wallart_painting(){const i=ra(.9,.62,Q.brass,.07);return i.children[0].material=ee(Q.brass),i.add(L(.9,.62,.01,A("#9cc6d8"),0,0,.036,.003)),i.add(he(.5,.18,.01,A("#5f8a4a"),-.15,-.25,.042),he(.45,.14,.01,A("#3e6b3a"),.25,-.28,.044)),i.add(ct(.012,.015,.22,A("#5a3722"),.2,-.12,.048,6),Zt(.08,A("#3e7d45"),.2,0,.048,12),Zt(.05,A("#ffffff"),-.25,.18,.045,10),Zt(.04,A("#ffffff"),-.18,.2,.045,10)),i},floor_wood(){return is({a:"#b98552",b:"#a8743f"})},floor_checker(){return is({a:"#f4ead8",b:"#2f6f73",tiles:!0})},floor_marble(){const i=is({a:"#f6f3ee",b:"#e9e3d9",tiles:!0,nx:5,nz:3,rough:.12}),t=A("#c9c1b4",{roughness:.2});return[[-1.4,-.9,.5],[.2,.4,-.7],[1.3,-.5,1.1],[-.6,1,.2],[.9,1.1,-1.2]].forEach(([e,n,r])=>{const s=L(.6,.004,.012,t,e,.052,n,.002);s.rotation.y=r,s.castShadow=!1,i.add(s)}),i},laundry_washboard(){const i=A("#a7763f"),t=ee("#8a9aa6"),e=_t(ct(.34,.28,.42,i,0,.21,.15,24),ct(.3,.3,.02,A("#a8d5e8",{roughness:.1}),0,.4,.15,24));for(const r of[.08,.32])e.add(de(new Ze(.33-r*.12,.012,6,28),t,0,r,.15).rotateX(Math.PI/2));const n=_t(L(.34,.62,.03,i,0,0,0,.02));for(let r=0;r<8;r++)n.add(ct(.012,.012,.26,ee("#c9d1d8"),0,-.2+r*.045,.02,6).rotateZ(Math.PI/2));return n.position.set(.05,.6,.05),n.rotation.x=-.35,e.add(n,L(.1,.05,.07,A("#f2e6a0"),-.45,.03,.4,.02)),e.add(ct(.006,.006,1,A(Q.cream),.1,1.9,-.25,6).rotateZ(Math.PI/2)),[[-.2,Q.red],[.1,"#2a9d8f"],[.38,"#f2b544"]].forEach(([r,s])=>e.add(L(.08,.2,.02,A(s,{roughness:.95}),r,1.8,-.25,.02))),e},laundry_machines(){const i=new xe,t=A("#f2f2ee",{roughness:.4});for(const[e,n]of[[-.3,!0],[.32,!1]]){const r=_t(L(.58,.82,.6,t,0,.41,0,.05),L(.5,.1,.02,A("#d6dbe0"),0,.73,.3,.01));r.add(de(new Ze(.17,.035,10,28),ee(),0,.38,.31)),r.add(ct(.15,.15,.02,n?Yt("#7fc7e8","#3aa0d0",.6):A("#5a6b78",{roughness:.2}),0,.38,.305).rotateX(Math.PI/2)),i.add(jt(r,e,0,0))}return i},laundry_tower(){const i=new xe,t=ee("#b8c0c8");for(const e of[-.3,.32])for(const[n,r]of[[0,e<0],[.86,e>0]]){const s=_t(L(.6,.84,.62,t,0,.42,0,.04),L(.5,.08,.02,Yt("#1d2a33","#59e3c8",.6),0,.74,.31,.01));s.add(de(new Ze(.19,.04,10,28),ee("#e3e8ec"),0,.36,.32)),s.add(ct(.16,.16,.02,r?Yt("#bfe8ff","#5ab8f0",.9):A("#41505b",{roughness:.2}),0,.36,.315).rotateX(Math.PI/2)),i.add(jt(s,e,n,0))}return i.add(L(1.26,.06,.66,A("#3b4a57"),.01,1.75,0,.02),L(.18,.04,.02,Yt("#7dff8a","#3aff5a",1.2),-.45,1.75,.34,.01)),i},view_parking(){return sa(i=>{i.add(aa("#9aa3ad",.4)),i.add(L(.01,.3,1.02,A("#4a4f55"),.012,-.26,0,.002));for(let t=0;t<3;t++)i.add(L(.01,.012,.12,A("#f2f2ee"),.018,-.3,-.35+t*.35,.002));i.add(L(.01,.12,.3,A(Q.red),.02,-.22,-.15,.03),L(.01,.08,.18,A("#bfe0f0"),.024,-.13,-.15,.02)),i.add(L(.01,.55,.025,A("#3b3a38"),.02,.02,.32,.005),Zt(.04,Yt("#fff3c4","#ffd27a",1.4),.025,.3,.3,10))})},view_city(){return sa(i=>{i.add(aa(Q.night,.7,"#22356e"));const t=Yt("#ffe7a0","#ffcf5a",1.2),e=A("#1d2340");[[-.38,.4],[-.22,.6],[-.05,.3],[.1,.72],[.27,.45],[.4,.55]].forEach(([n,r],s)=>{i.add(L(.012,r,.14,e,.012,-.41+r/2,n,.003));for(let a=0;a<Math.floor(r/.1);a++)(a*3+s)%4&&i.add(L(.01,.025,.025,t,.02,-.36+a*.1,n+(a%2?.03:-.03),.002))})})},view_aurora(){return sa(i=>{i.add(aa("#0f1a3a",.5,"#0f1a3a")),[["#5cffb0",.05,-.15,.2],["#9a6bff",.18,.15,-.25],["#3fe0d0",-.05,.25,.1]].forEach(([t,e,n,r])=>{const s=he(.01,.07,.42,new Cn({color:t,emissive:t,emissiveIntensity:1.3,transparent:!0,opacity:.75}),.015,e,n);s.rotation.x=r,s.castShadow=!1,i.add(s)});for(let t=0;t<9;t++)i.add(Zt(.008,Yt("#ffffff","#ffffff",1.5),.02,.3-t%3*.08,-.42+t*.1,6));i.add(he(.012,.12,.6,A("#1d2a4a"),.016,-.42,.1))})},seating_garden(){const i=new xe,t=A("#f4f4f0",{roughness:.5});return[[-.3,.1],[.55,-.05],[1.4,.18]].forEach(([e,n])=>{const r=_t(L(.42,.04,.4,t,0,.45,0,.03),L(.42,.42,.04,t,0,.7,.2,.03));for(const[s,a]of[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]])r.add(ct(.022,.018,.45,t,s,.22,a,8));r.rotation.set(0,n*2,n*.4),i.add(jt(r,e,0,1,n*2))}),i},seating_stools(){const i=new xe,t=A(Q.red,{roughness:.55}),e=ee(Q.brass);for(const n of[-.3,.55,1.4])i.add(_t(ct(.21,.21,.09,t,0,.64,0),ct(.19,.21,.04,t,0,.58,0),ct(.035,.035,.56,e,0,.3,0,10),de(new Ze(.14,.016,8,24),e,0,.32,0).rotateX(Math.PI/2),ct(.19,.21,.03,e,0,.015,0)).translateX(n).translateZ(.9));return i},seating_velvet(){const i=new xe,t=A("#5b2a6e",{roughness:.95}),e=ee(Q.brass);for(const n of[-.3,.55,1.4]){const r=_t(ct(.24,.22,.14,t,0,.68,0,24),ct(.25,.25,.03,e,0,.6,0,24),L(.46,.36,.08,t,0,.92,.2,.04),L(.5,.04,.1,e,0,1.11,.2,.02));for(const[s,a]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])r.add(ct(.022,.016,.6,e,s,.3,a,8));r.add(de(new Ze(.2,.014,8,24),e,0,.28,0).rotateX(Math.PI/2)),i.add(jt(r,n,0,.95))}return i},shelf_boxwine(){const i=new xe,t=A("#c69a63",{roughness:.95});for(const[e,n]of[[-.4,1.325],[.35,1.325],[-.05,1.775]])i.add(L(.3,.26,.24,t,e,n+.13,0,.02),L(.18,.08,.005,A("#8a1f3a"),e,n+.16,.122,.002),ct(.02,.02,.05,A(Q.ink),e+.08,n+.04,.13,8).rotateX(Math.PI/2));return i.add(ct(.045,.052,.26,A("#3f8f5a",{roughness:.2}),.5,1.905,0,16),ct(.018,.026,.08,A("#3f8f5a",{roughness:.2}),.5,2.07,0,10)),i},shelf_bottles(){const i=new xe,t=["#3f8f5a","#c94f3d","#e2b13c","#6aa7c9","#8a4fa0","#d97b2d","#2f6b4a","#b23a5a"];let e=0;for(const n of[1.325,1.775])for(let r=-.57;r<=.58;r+=.19){const s=A(t[e%t.length],{roughness:.2}),a=.2+e*37%9/55;e*7%5===0?i.add(ct(.07,.07,.12,s,r,n+.06,0,16)):i.add(ct(.045,.052,a,s,r,n+a/2,0,16),ct(.018,.026,.08,s,r,n+a+.04,0,10),L(.07,.05,.005,A(Q.cream),r,n+a*.45,.052,.002)),e++}return i},shelf_whisky(){const i=_t(L(1.42,.92,.02,Yt("#ffcf8a","#ffa43a",.9),0,1.58,-.09,.01)),t=n=>new Cn({color:n,roughness:.08,metalness:.1,emissive:n,emissiveIntensity:.25});let e=0;for(const n of[1.325,1.775])for(let r=-.55;r<=.56;r+=.22){const s=t(["#c46a1a","#e09a3a","#8a3f12"][e%3]);e%3===1?i.add(Zt(.08,s,r,n+.09,0,16),ct(.02,.02,.06,s,r,n+.2,0,8),Zt(.03,ee(Q.brass),r,n+.25,0,8)):i.add(L(.1,.24,.07,s,r,n+.12,0,.02),ct(.02,.02,.06,s,r,n+.27,0,8),L(.07,.07,.005,A(Q.cream),r,n+.12,.037,.002)),e++}return i},stove_camping(){const i=_t(L(.7,.55,.5,A("#b98d5a",{roughness:.95}),0,.275,0,.02));for(const t of[.12,.42])i.add(L(.72,.04,.02,A("#8d6a3f"),0,t,.26,.01));return i.add(ct(.12,.14,.08,ee("#5a6b78"),0,.59,0),de(new dr(.06,.12,12),Yt("#8ad0ff","#3a8cff",1.6),0,.68,0)),i.add(Zt(.13,ee("#c94f3d"),0,.8,0,18),ct(.02,.03,.14,ee("#c94f3d"),.14,.82,0,8).rotateZ(-.9),Qa(.07,.012,A(Q.ink),0,.95,0,Math.PI)),i.add(ct(.06,.06,.18,A("#f2b544"),-.25,.64,.05,12)),i},stove_range(){const i=ee(),t=A("#3b3a38"),e=A(Q.ink),n=_t(L(1.3,.86,.66,i,0,.43,0,.04),L(1.3,.05,.66,t,0,.885,0,.02));for(const[r,s]of[[-.35,-.12],[.35,-.12],[-.35,.16],[.35,.16]])n.add(ct(.12,.12,.02,A("#1d1c1b"),r,.915,s));n.add(ct(.18,.16,.26,ee("#b8c0c8"),-.35,1.05,-.1),ct(.2,.2,.025,ee("#b8c0c8"),-.35,1.19,-.1)),n.add(ct(.16,.16,.06,A(Q.ink,{roughness:.3}),.35,.95,.16),ct(.02,.02,.3,e,.6,.97,.16,6).rotateZ(Math.PI/2));for(let r=0;r<4;r++)n.add(ct(.03,.03,.03,A(Q.red),-.45+r*.3,.7,.34,10).rotateX(Math.PI/2));return n.add(L(1.4,.4,.75,i,0,2.1,-.02,.04)),n},stove_pizza(){const i=A("#b5553a"),t=_t(L(1.3,.8,.7,A("#8a8580"),0,.4,0,.04));for(let n=0;n<4;n++)t.add(ct(.05,.05,.6,A("#7a4f33"),-.3+n*.12,.08+n%2*.09,.2,8).rotateZ(Math.PI/2).rotateY(.1*n));const e=de(new hi(.62,28,14,0,Math.PI*2,0,Math.PI/2),i,0,.8,-.02);return e.scale.set(1,.85,.55),t.add(e,L(.5,.36,.08,A("#2a1a12"),0,1,.3,.12),L(.4,.22,.04,Yt("#ff8a3a","#ff5a1a",2),0,.97,.3,.08),L(.62,.08,.12,A(Q.cream),0,1.22,.32,.03)),t.add(ct(.1,.12,.9,i,.3,1.6,-.1,14)),t},bartender_honesty(){const i=_t(L(.4,.3,.28,A("#d9b382"),0,.85,.6,.03),L(.22,.025,.05,hn(),0,1,.6,.01),L(.3,.12,.01,A(Q.cream),0,.86,.745,.005));for(let t=0;t<3;t++)i.add(ct(.06,.06,.012,ee(Q.brass),.34+t*.03,.71+t*.012,.6));return i},bartender_trainee(){return Hn({shirt:Q.teal,hair:"#4a2f22",hairStyle:"bun",apron:Q.cream,extras:(i,{bodyH:t,skin:e})=>{const n=_t(de(new fr(.065,.3,4,10),A(Q.teal),0,.2,0),Zt(.075,e,0,.4,.02,12),ct(.075,.06,.24,ee("#d7dde3"),0,.56,.02),ct(.04,.06,.07,ee("#d7dde3"),0,.71,.02));n.position.set(.26,t*.68,.02),n.rotation.z=-.55,i.remove(i.userData.arms[1]),i.add(n),i.userData.wave=n,i.add(L(.15,.075,.02,A("#f2b544"),-.08,t*.72,.2,.012))}})},bartender_mixologist(){return Hn({shirt:Q.cream,hair:"#1f1a17",hairStyle:"quiff",height:2,smile:!1,extras:(i,{bodyH:t,head:e,headR:n})=>{i.add(L(.42,t*.55,.05,A(Q.ink),0,t*.5,.17,.03));const r=de(new ls(.06),A(Q.red),0,t*.92,.2);r.scale.set(1.8,.8,.5),i.add(r);for(const s of[-1,1]){const a=he(n*.2,n*.07,n*.06,A("#1f1a17"),s*n*.16,-n*.16,n*.95);a.rotation.z=s*.35,e.add(a)}}})},noticeboard_cork(){const i=_t(L(.06,.62,.82,A("#8d5b3a"),0,0,0,.03),L(.03,.54,.74,A("#cf9d62"),.025,0,0,.01)),t=L(.015,.26,.2,A("#f6e7a8"),.045,.04,-.12,.004);return t.rotation.x=.14,i.add(t,Zt(.018,A(Q.red),.055,.15,-.12,8)),i},noticeboard_whiteboard(){const i=_t(L(.06,.64,.92,A("#cfd6dd",{metalness:.3,roughness:.4}),0,0,0,.02),L(.03,.56,.84,A("#ffffff",{roughness:.25}),.025,0,0,.01));return["#2f6db5","#d9573f",Q.ink].forEach((t,e)=>i.add(L(.01,.022,.32+e*.12,A(t),.045,.16-e*.12,-.12,.005))),i.add(L(.08,.03,.5,A("#cfd6dd"),.05,-.33,0,.01)),i},noticeboard_workvivo(){const i=_t(L(.07,.62,.98,A(Q.ink),0,0,0,.035),L(.02,.54,.9,Yt("#7fd1c7","#45bfb0",.9),.04,0,0,.01));for(let t=0;t<3;t++)i.add(L(.01,.085,.62,Yt("#ffffff","#ffffff",.7),.052,.15-t*.15,.06,.01),Zt(.04,Yt("#ffd27a","#ffb84a",.8),.055,.15-t*.15,-.3,10));return i},chef_microwave(){const i=_t(L(.52,.3,.38,A("#f2f2ee",{roughness:.4}),0,.15,0,.03),L(.32,.22,.01,Yt("#3a3a2a","#ffcf6a",.35),-.07,.15,.19,.01),L(.1,.04,.01,Yt("#7dff8a","#3aff5a",1.2),.17,.22,.19,.005));return jt(i,1.45,.91,-.7)},chef_linecook(){return Hn({shirt:"#ffffff",hair:"#2a1d16",apron:"#3b3a38",extras:(i,{head:t,headR:e})=>{const n=de(new hi(e*1.1,24,10,0,Math.PI*2,0,Math.PI*.42),A(Q.red),0,e*.12,-e*.03);n.rotation.x=-.2,t.add(n);const r=_t(ct(.13,.12,.04,A(Q.ink,{roughness:.3}),0,0,0),ct(.015,.015,.25,A(Q.ink),.2,0,0,6).rotateZ(Math.PI/2));i.add(jt(r,.38,.62,.2))}})},chef_headchef(){return Hn({shirt:"#ffffff",hair:"#5a3722",height:2,extras:(i,{bodyH:t,head:e,headR:n})=>{const r=_t(ct(n*.8,n*.8,n*.5,A("#ffffff"),0,0,0,20));for(let s=0;s<5;s++){const a=s/5*Math.PI*2;r.add(Zt(n*.45,A("#ffffff"),Math.cos(a)*n*.4,n*.55,Math.sin(a)*n*.4,14))}r.add(Zt(n*.5,A("#ffffff"),0,n*.7,0,14)),e.add(jt(r,0,n*1.05,-n*.05)),i.add(L(.36,.08,.06,A(Q.red),0,t*.92,.16,.03));for(let s=0;s<2;s++)for(const a of[-1,1])i.add(Zt(.025,A("#3b3a38"),a*.08,t*(.7-s*.18),.2,8))}})},kitchenwall_napkin(){const i=_t(L(.01,.3,.3,A("#ffffff",{roughness:.95}),0,0,0,.004));for(let t=0;t<3;t++)i.add(L(.006,.015,.16-t*.03,hn(),.006,.07-t*.06,0,.003));return i.add(Zt(.02,A(Q.red),.012,.12,0,8)),i.rotation.x=.2,i},kitchenwall_spreadsheet(){const i=_t(L(.01,.48,.66,A("#ffffff"),0,0,0,.003));for(let t=0;t<9;t++)i.add(L(.004,.004,.6,A("#9aa7b0"),.007,-.21+t*.05,0,.001));for(let t=0;t<9;t++)i.add(L(.004,.44,.004,A("#9aa7b0"),.007,0,-.3+t*.075,.001));i.add(L(.005,.04,.6,A("#7fb84a"),.008,.2,0,.001));for(const[t,e]of[[.24,.3],[.24,-.3]]){const n=L(.008,.05,.12,A("#f2e8b0",{transparent:!0,opacity:.8}),.01,t,e,.002);n.rotation.x=e>0?.6:-.6,i.add(n)}return i},kitchenwall_dashboard(){const i=_t(L(.06,.6,.96,A(Q.ink),0,0,0,.03),L(.02,.52,.88,A("#14202a",{emissive:"#14202a",emissiveIntensity:.4}),.035,0,0,.01));return[.15,.3,.22,.38,.28,.42].forEach((t,e)=>i.add(L(.01,t,.07,Yt(e%2?"#59e3c8":"#ffd34d",e%2?"#2fcfb0":"#ffb83a",1.1),.05,-.22+t/2,-.32+e*.1,.004))),i.add(L(.01,.06,.26,Yt("#ff6f5a","#ff4a3a",1.1),.05,.18,.28,.006),L(.01,.04,.2,Yt("#ffffff","#ffffff",.7),.05,.08,.28,.006)),i},sign_cardboard({name:i}){const t=_t(L(1.8,.7,.03,A("#c69a63",{roughness:.95}),0,.75,0,.01));t.children[0].rotation.z=-.04,t.add(jt(ia(i,{maxW:1.55,maxH:.48,material:hn(),depth:.008,jitter:.16}),0,.76,.02));for(const e of[-.6,.6])t.add(L(.05,.8,.05,A("#a77a4a"),e,.4,-.05,.01));return t},sign_neon({name:i}){const t=_t(L(2.3,.8,.08,A("#24282f"),0,.9,0,.04)),e=ia(i,{maxW:2.05,maxH:.56,material:Yt("#ff9ccd",Q.pink,2.2),depth:.04}),n=e.userData.letters;if(n.length){const r=n[Math.floor(n.length*.6)];r.material=Yt("#ff9ccd",Q.pink,.1),t.userData.flicker=r}t.add(jt(e,0,.92,.05));for(const r of[-.8,.8])t.add(ct(.03,.03,.55,ee("#8a9aa6"),r,.27,-.02,8));return t},sign_smart({name:i}){const t=_t(L(2.5,.78,.12,A("#111111",{roughness:.35}),0,.9,0,.05),L(2.5,.07,.13,A(Q.coral,{roughness:.4}),0,.53,0,.02));t.add(jt(ia(i,{maxW:2.25,maxH:.5,material:Yt("#ffffff","#ffffff",1),depth:.03}),0,.93,.06));for(const e of[-.9,.9])t.add(L(.12,.5,.12,A("#111111"),e,.25,-.02,.03));return t},mascot_rock(){const i=he(.28,.22,.24,A("#8f8a84",{roughness:.95}),0,.22,0),t=_t(i);for(const e of[-1,1])t.add(he(.03,.045,.02,hn(),e*.08,.28,.225),he(.04,.02,.01,A(Q.blush),e*.14,.2,.215));return t},mascot_goldfish(){const i=_t(ct(.18,.22,.6,A(Q.cream),0,.3,0),ct(.24,.24,.04,A(Q.brass),0,.62,0)),t=Zt(.25,new Cn({color:"#8fd3f0",transparent:!0,opacity:.45,roughness:.05}),0,.86,0,24);t.castShadow=!1;const e=_t(he(.08,.055,.04,A("#ff8a2a",{roughness:.4}),0,0,0),Zt(.012,hn(),.055,.015,.03,8)),n=de(new dr(.05,.08,4),A("#ff6a1a"),-.1,0,0);return n.rotation.z=Math.PI/2,e.add(n),i.add(jt(e,0,.84,.05),t),i.userData.swim=e,i},mascot_dog(){const i=Wo();i.rotation.y=-.5;const t=_t(i);return t.userData.tail=i.userData.tail,t},mascot_llama(){const i=A("#f2e6d0",{roughness:.95}),t=hn(),e=_t(he(.36,.24,.22,i,0,.72,0));for(const[r,s]of[[-.22,-.1],[-.22,.1],[.22,-.1],[.22,.1]])e.add(ct(.05,.045,.55,i,r,.28,s,10));e.add(ct(.09,.11,.55,i,.28,1.08,0,14).rotateZ(-.15));const n=_t(he(.12,.11,.1,i,0,0,0),he(.08,.06,.08,i,.02,-.04,.1));for(const r of[-1,1])n.add(Zt(.02,t,r*.06,.03,.09,8),he(.025,.08,.02,i,r*.06,.13,-.02));return e.add(jt(n,.32,1.42,.02)),e.add(de(new ls(.05),A(Q.red),.3,1.2,.1).rotateZ(Math.PI/2)),e.add(ct(.07,.08,.06,A(Q.red),.32,1.55,0),ct(.09,.09,.012,A(Q.ink),.32,1.52,.02)),e.rotation.y=-.6,e}};function sa(i){const t=A(Q.cap),e=_t(L(.07,.95,1.15,t,0,0,0,.03)),n=new xe;return n.position.x=.03,i(n),e.add(n,L(.09,.82,.045,t,.05,0,0,.01),L(.09,.045,1.02,t,.05,0,0,.01),L(.16,.06,1.25,t,.07,-.5,0,.02)),e}const aa=(i,t=.4,e=i)=>L(.01,.82,1.02,A(i,{emissive:e,emissiveIntensity:t,roughness:.2}),0,0,0,.005);function Xo(i="#2a9d8f"){const t=A("#6b4428"),e=_t(L(1.65,.3,1.95,t,0,.17,-.1,.05),L(1.58,.2,1.88,A("#ffffff"),0,.42,-.1,.06),L(1.62,.12,1.25,A(i,{roughness:.9}),0,.53,.25,.06),L(1.7,.95,.1,t,0,.55,-1.05,.05));for(const n of[-.4,.4])e.add(L(.6,.14,.32,A(Q.cream,{roughness:.9}),n,.58,-.78,.06));return e}const z0={frontdesk:"frontdesk_bell",pms:"pms_floppy",security:"security_sticky",storage:"storage_usb",wallart:"wallart_stock",bed:"bed_camp",bartender:"bartender_honesty",noticeboard:"noticeboard_cork",chef:"chef_microwave",kitchenwall:"kitchenwall_napkin",mascot:"mascot_rock",sign:"sign_cardboard",floor:"floor_wood",laundry:"laundry_washboard",view:"view_parking",seating:"seating_garden",shelf:"shelf_boxwine",stove:"stove_camping"},wn=(i,t,e)=>new D(i,t,e),un=ue+Ft,ph=i=>i*(Gt+Ft)/2,We=Gt+1.5*Ft,si=1.9,mh={sign:wn(0,3*un,.1),mascot:wn(-1.55,0,Pt/2+.95)};function qh(i){const t=A(Q.facade),e=A(Q.facadeDark),n=A(Q.cap),r=A("#d9d2c5"),s=A("#8cbf6a"),a=u=>i.add(u);a(L(2*We+1.4,.3,Pt+Ft+si+.6,A(Q.plinth),0,-.15,(si-Ft)/2,.1)),a(L(2*We+1.2,.04,si-.15,r,0,.02,Pt/2+si/2,.01));for(let u=0;u<8;u++)a(L(.01,.045,si-.2,A("#c7bfb1"),-We-.4+u*(2*We+.8)/7,.022,Pt/2+si/2,.002));for(const u of[-1,1])a(L(.5,.06,Pt+Ft,s,u*(We+.4),.03,-Ft/2,.02));for(const u of[1,2])a(L(2*We,Ft,Pt+Ft,t,0,u*un-Ft/2,-Ft/2,.02)),a(L(2*We+.04,Ft+.04,.06,n,0,u*un-Ft/2,Pt/2,.02));const o=2*un-Ft;a(L(Ft,o,Pt+Ft,t,-Gt-Ft,o/2,-Ft/2,.02)),a(L(Ft,o,Pt+Ft,t,Gt+Ft,o/2,-Ft/2,.02)),a(L(Ft,o,Pt,t,0,o/2,0,.02)),a(L(2*We,o,Ft,t,0,o/2,-Pt/2-Ft/2,.02));for(const u of[-Gt-Ft,0,Gt+Ft])a(L(Ft+.04,o,.06,n,u,o/2,Pt/2,.02));for(let u=.4;u<o;u+=.5)a(L(.02,.05,Pt+Ft,e,We+.01,u,-Ft/2,.01));const l=2*un,c=ue;a(L(Ft,c,Pt+Ft,t,-Gt/2-Ft/2,l+c/2,-Ft/2,.02)),a(L(Ft,c,Pt+Ft,t,Gt/2+Ft/2,l+c/2,-Ft/2,.02)),a(L(Gt+2*Ft,c,Ft,t,0,l+c/2,-Pt/2-Ft/2,.02)),a(L(Gt+2*Ft+.2,Ft,Pt+Ft+.2,t,0,3*un-Ft/2,-Ft/2,.03)),a(L(Gt+2*Ft+.24,Ft+.04,.06,n,0,3*un-Ft/2,Pt/2+.1,.02));for(const u of[-1,1])a(L(Ft+.04,c,.06,n,u*(Gt/2+Ft/2),l+c/2,Pt/2,.02));for(const u of[-1,1]){const p=u*(Gt/2+Ft+(We-Gt/2-Ft)/2),q=We-Gt/2-Ft;a(L(q,.05,.05,A(Q.cap),p,l+.42,Pt/2-.05,.02));for(let g=0;g<=4;g++)a(ct(.015,.015,.4,A(Q.cap),p-q/2+.05+g*(q-.1)/4,l+.2,Pt/2-.05,6));a(jt(S1(.9),p+u*.4,l,-Pt/2+.3))}const h=_t(ct(.02,.02,1.5,A(Q.cap),0,.75,0,6),de(new dr(.75,.3,8),A(Q.coral),0,1.55,0));a(jt(h,-3.24,l,.1)),a(jt(_t(L(.9,.1,.45,A(Q.cream),0,.3,0,.04),L(.9,.06,.45,A(Q.black),0,.37,0,.03)),-3.24,l,.75));const d=_t(ct(.025,.025,1.6,A(Q.white),0,.8,0,8),Zt(.04,A(Q.white),0,1.62,0,10),L(.7,.42,.02,A(Q.coral,{roughness:.9}),.36,1.32,0,.01),L(.7,.07,.025,A(Q.white),.36,1.32,0,.005));a(jt(d,Gt/2-.1,3*un,-Pt/2+.2))}function _h(){const i=new xe,t=de(new mi(Gt+.02,ue-.02,Pt+.02),new Cn({color:"#2a2522",transparent:!0,opacity:.82,roughness:1}),0,ue/2,0,!1);t.receiveShadow=!1;const e=_t(L(.72,.56,.26,A("#f2b544",{metalness:.35,roughness:.4}),0,0,0,.09),de(new Ze(.24,.065,12,32,Math.PI),A("#d7dde3",{metalness:.8,roughness:.3}),0,.28,0),ct(.07,.07,.05,A(Q.ink),0,.03,.13).rotateX(Math.PI/2));return e.position.set(0,1.2,Pt/2+.2),i.add(t,e),{g:i,veil:t,lock:e}}async function gh(){const i=new J5;i.background=new ie(Q.bg),i.add(new R6("#fff4e6","#8a7a6a",1.15));const t=new I6("#fff1dd",1.7);t.castShadow=!0,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:40}),t.shadow.bias=-6e-4,t.shadow.radius=4,i.add(t,t.target);const e=new xe;i.add(e),qh(e);const n={},r={};for(const[it,O]of Object.entries(e1)){const B=new xe;B.position.set(ph(O.col),O.row*un,0),O.build(B),e.add(B),n[it]={g:B,def:O,lock:null,locked:!1};for(const et of Object.keys(O.slots))r[et]=it}const s=it=>r[it]?n[r[it]].g:e,a=it=>r[it]?e1[r[it]].slots[it]:mh[it],o=new Ye(26,1,.1,200),l=wn(.4,.36,1).normalize(),c=wn(0,1,0),h=(it,O,B,et,rt,Mt)=>{const Ct=[];for(const Ot of[it,O])for(const Qt of[B,et])for(const j of[rt,Mt])Ct.push(wn(Ot,Qt,j));return Ct},d={hotel:{corners:h(-We-.2,We+.2,-.3,3*un+1.35,-Pt/2-Ft,Pt/2+si)}};for(const[it,O]of Object.entries(n)){const B=O.g.position.x,et=O.g.position.y;d[it]={corners:h(B-Gt/2-.1,B+Gt/2+.1,et-.05,et+ue+.05,-Pt/2,Pt/2+.1)}}for(const it of Object.values(d))it.target=it.corners.reduce((O,B)=>O.add(B),wn(0,0,0)).multiplyScalar(1/8);let u=0;function p(it,O,B){o.aspect=O,o.clearViewOffset(),o.setViewOffset(1e3*O,1e3,0,500*u,1e3*O,1e3);let et=2,rt=160;for(let Mt=0;Mt<28;Mt++){const Ct=(et+rt)/2;o.position.copy(it.target).addScaledVector(l,Ct),o.lookAt(it.target),o.updateMatrixWorld(!0),it.corners.every(Qt=>{const j=Qt.clone().project(o);return Math.abs(j.x)<=B&&j.y<=B&&j.y>=-B+2*u})?rt=Ct:et=Ct}return rt*1.04}let q="hotel";const g={target:d.hotel.target.clone(),dist:30},m={x:0,y:0};let f=0;function y(it,O=0){u=O;for(const[B,et]of Object.entries(d))et.dist=p(et,it,B==="hotel"?.92:.99);w.includes(G)||(g.target.copy(d[q].target),g.dist=d[q].dist),_()}const x=wn(6,10,8);function _(){const it=l.clone().applyAxisAngle(c,f+m.x*.16),O=wn(0,0,0).crossVectors(c,it).normalize();it.applyAxisAngle(O,-m.y*.09),o.position.copy(g.target).addScaledVector(it,g.dist),o.lookAt(g.target),o.updateMatrixWorld(!0),t.target.position.copy(g.target),t.position.copy(x).applyAxisAngle(c,m.x*.55),t.position.y*=1+m.y*.25,t.position.add(g.target),t.target.updateMatrixWorld()}const I=(it,O)=>{m.x=it,m.y=O,_()},T=it=>{f=it,_()},w=[],R=(it,O,B)=>w.push({t0:null,ms:it,fn:O,done:B}),E=it=>1+2.7*(it-1)**3+1.7*(it-1)**2,v=it=>it<.5?4*it**3:1-(-2*it+2)**3/2;let P=!0,G=null;function k(it){const O=it||"hotel";if(O===q)return;q=O;const B=d[O];if(!P){g.target.copy(B.target),g.dist=B.dist,_();return}const et=g.target.clone(),rt=g.dist;w.push(G={t0:null,ms:750,fn:Mt=>{const Ct=v(Mt);g.target.lerpVectors(et,B.target,Ct),g.dist=Math.exp(Math.log(rt)+(Math.log(B.dist)-Math.log(rt))*Ct),_()}})}const W={};let K="My Hotel";function X(it){const O=(it||"").trim()||"My Hotel";if(O===K)return;K=O;const B=W.sign;if(B?.value){const et=B.value;return B.value=null,at("sign",et)}}async function at(it,O){const B=W[it]||={};if(O||=z0[it],B.value===O)return;B.value=O;const et=await dh[O]({name:K});if(B.value!==O)return;et.position.add(a(it)),s(it).add(et);const Mt=B.current;if(B.current=et,!P){Mt&&Mt.parent.remove(Mt);return}Mt&&R(180,Ct=>Mt.scale.setScalar(Math.max(.001,1-Ct*Ct)),()=>Mt.parent?.remove(Mt)),et.scale.setScalar(.001),R(480,Ct=>et.scale.setScalar(Math.max(.001,E(Ct))))}function Y(it,O){const B=n[it];if(!B||B.locked===O)return;B.locked=O,B.lock||=_h();const et=B.lock;if(O){B.g.add(et.g),et.veil.material.opacity=.82,et.lock.scale.setScalar(1),et.lock.position.y=1.2;return}if(!P){B.g.remove(et.g);return}R(700,rt=>{et.veil.material.opacity=.82*(1-rt),et.lock.scale.setScalar(1+rt*.6),et.lock.position.y=1.2+rt*1.2},()=>B.g.remove(et.g))}const ft=new N6;function gt(it,O){ft.setFromCamera(new ut(it,O),o);const B=ft.intersectObject(e,!0)[0];if(!B)return null;const et=e.worldToLocal(B.point.clone());for(const[rt,Mt]of Object.entries(n)){const{x:Ct,y:Ot}=Mt.g.position;if(Math.abs(et.x-Ct)<=Gt/2+.1&&et.y>=Ot-.1&&et.y<=Ot+ue+.1&&et.z<=Pt/2+.6)return rt}return null}const Tt=it=>{const O=n[it];return e.localToWorld(wn(O.g.position.x,O.g.position.y+ue*.92,Pt/2))};function Ht(it){for(let O=w.length-1;O>=0;O--){const B=w[O];B.t0??=it;const et=Math.min(1,(it-B.t0)/B.ms);B.fn(et),et>=1&&(w.splice(O,1),B.done?.())}for(const O of Object.values(n))O.lock&&O.locked&&(O.lock.lock.rotation.y=Math.sin(it/600)*.25);for(const O of Object.values(W)){const B=O.current?.userData;B&&(B.wave&&(B.wave.rotation.z=-.55+Math.sin(it/170)*.22),B.tail&&(B.tail.rotation.x=Math.sin(it/90)*.5),B.swim&&(B.swim.position.x=Math.sin(it/900)*.09,B.swim.rotation.y=Math.cos(it/900)>0?0:Math.PI),B.bob&&(B.bob.position.y=.62+Math.sin(it/500)*.03),B.spin&&(B.spin.rotation.y=Math.sin(it/800)*.5),B.flicker&&(B.flicker.material.emissiveIntensity=Math.sin(it/37)*Math.sin(it/113)>.3?2.2:.1))}}return{scene:i,camera:o,hotel:e,rooms:Object.keys(n),frame:y,focus:k,setTilt:I,setYaw:T,setItem:at,setName:X,setLocked:Y,pick:gt,labelAnchor:Tt,update:Ht,get view(){return q},setAnimate:it=>{P=it}}}const xh=[{id:"reception",name:{en:"Reception"}},{id:"housekeeping",name:{en:"Housekeeping and Maintenance"}},{id:"suite",name:{en:"Presidential Suite"}},{id:"bar",name:{en:"Bar"}},{id:"kitchen",name:{en:"Kitchen"}}],vh=[{id:"frontdesk",room:"reception",name:{en:"Front desk"}},{id:"pms",room:"reception",name:{en:"PMS"}},{id:"floor",room:"reception",name:{en:"Floor"}},{id:"security",room:"housekeeping",name:{en:"Security"}},{id:"storage",room:"housekeeping",name:{en:"Storage"}},{id:"laundry",room:"housekeeping",name:{en:"Laundry"}},{id:"wallart",room:"suite",name:{en:"Wall art"}},{id:"bed",room:"suite",name:{en:"Bed"}},{id:"view",room:"suite",name:{en:"View"}},{id:"bartender",room:"bar",name:{en:"Bartender"}},{id:"noticeboard",room:"bar",name:{en:"Noticeboard"}},{id:"seating",room:"bar",name:{en:"Seating"}},{id:"shelf",room:"bar",name:{en:"Top shelf"}},{id:"chef",room:"kitchen",name:{en:"Chef"}},{id:"kitchenwall",room:"kitchen",name:{en:"Kitchen wall"}},{id:"stove",room:"kitchen",name:{en:"Stove"}},{id:"mascot",room:"hotel",name:{en:"Mascot"}},{id:"sign",room:"hotel",name:{en:"Sign"}}],Mh=[{id:"frontdesk_bell",slot:"frontdesk",price:0,name:{en:"Bell with a handwritten note"},description:{en:"Ring for service. Someone might come."}},{id:"frontdesk_newbie",slot:"frontdesk",price:4,name:{en:"The newbie"},description:{en:"Day one, big smile, still looking for the key cards."}},{id:"frontdesk_pro",slot:"frontdesk",price:8,name:{en:"The seasoned pro"},description:{en:"Has seen every guest complaint twice and solved it once."}},{id:"frontdesk_hologram",slot:"frontdesk",price:12,name:{en:"Aiden hologram"},description:{en:"Checks you in, never sleeps, slightly see-through."}},{id:"pms_floppy",slot:"pms",price:0,name:{en:"PMS on a floppy disk"},description:{en:"A fictional system from 1994. Please do not eject."}},{id:"pms_hotsoft",slot:"pms",price:8,name:{en:"Hotsoft"},description:{en:"PRICE TBD: ask David."}},{id:"pms_mews",slot:"pms",price:8,name:{en:"Mews"},description:{en:"PRICE TBD: ask David."}},{id:"pms_opera",slot:"pms",price:8,name:{en:"Opera Cloud"},description:{en:"PRICE TBD: ask David."}},{id:"floor_wood",slot:"floor",price:0,name:{en:"Scuffed wood floor"},description:{en:"Every scratch tells a story about a suitcase."}},{id:"floor_checker",slot:"floor",price:4,name:{en:"Checkerboard tiles"},description:{en:"Crisp, classic and good for pretending to play chess."}},{id:"floor_marble",slot:"floor",price:8,name:{en:"Polished marble"},description:{en:"So shiny you can check your hair in it."}},{id:"security_sticky",slot:"security",price:0,name:{en:"Password on a sticky note"},description:{en:"Very secure, as long as nobody looks at the monitor."}},{id:"security_dog",slot:"security",price:4,name:{en:"Sleepy guard dog"},description:{en:"Wakes up for snacks and nothing else."}},{id:"security_defender",slot:"security",price:8,name:{en:"Defender"},description:{en:"Watches every laptop, quietly, all the time."}},{id:"security_tarek",slot:"security",price:12,name:{en:"Tarek himself"},description:{en:"TBD: check Tarek is happy to be for sale."}},{id:"storage_usb",slot:"storage",price:0,name:{en:"Pile of USB sticks"},description:{en:"One of them has the backup. Probably."}},{id:"storage_cabinet",slot:"storage",price:4,name:{en:"Overflowing filing cabinet"},description:{en:"Everything is in here. Finding it is extra."}},{id:"storage_shelves",slot:"storage",price:8,name:{en:"Tidy labeled shelves"},description:{en:"A place for everything, and a label maker for the rest."}},{id:"laundry_washboard",slot:"laundry",price:0,name:{en:"Washboard and tub"},description:{en:"Elbow grease included."}},{id:"laundry_machines",slot:"laundry",price:4,name:{en:"Washing machines"},description:{en:"One of them is always running."}},{id:"laundry_tower",slot:"laundry",price:8,name:{en:"Industrial washer tower"},description:{en:"Washes, dries and almost folds."}},{id:"wallart_stock",slot:"wallart",price:0,name:{en:"Stock photo with watermark"},description:{en:"A lovely sunset, faintly covered in someone else's name."}},{id:"wallart_ai",slot:"wallart",price:4,name:{en:"Obviously AI-generated art"},description:{en:"Count the fingers. Then count them again."}},{id:"wallart_painting",slot:"wallart",price:8,name:{en:"A real painting"},description:{en:"Made by a human, with paint, on purpose."}},{id:"bed_camp",slot:"bed",price:0,name:{en:"Camp bed"},description:{en:"Presidential, if the president is on a hiking trip."}},{id:"bed_double",slot:"bed",price:4,name:{en:"Comfortable double"},description:{en:"Two pillows, no complaints."}},{id:"bed_fourposter",slot:"bed",price:8,name:{en:"Four-poster"},description:{en:"Curtains on a bed. Truly the height of luxury."}},{id:"view_parking",slot:"view",price:0,name:{en:"View of the parking lot"},description:{en:"Watch the guests arrive. And leave."}},{id:"view_city",slot:"view",price:4,name:{en:"City lights"},description:{en:"A skyline that sparkles all night."}},{id:"view_aurora",slot:"view",price:8,name:{en:"Northern lights"},description:{en:"Booked specially. Weather permitting."}},{id:"bartender_honesty",slot:"bartender",price:0,name:{en:"Honesty box"},description:{en:"Pour your own, pay what you think is fair."}},{id:"bartender_trainee",slot:"bartender",price:4,name:{en:"Enthusiastic trainee"},description:{en:"Every drink comes with a story about how it was made."}},{id:"bartender_mixologist",slot:"bartender",price:8,name:{en:"Master mixologist"},description:{en:"Knows your order before you sit down."}},{id:"noticeboard_cork",slot:"noticeboard",price:0,name:{en:"Cork board with one old flyer"},description:{en:"The summer party was great. In 2019."}},{id:"noticeboard_whiteboard",slot:"noticeboard",price:4,name:{en:"Whiteboard"},description:{en:"Half-erased plans and one permanent marker mistake."}},{id:"noticeboard_workvivo",slot:"noticeboard",price:8,name:{en:"Workvivo screen"},description:{en:"Live news, shout-outs and somebody's dog."}},{id:"seating_garden",slot:"seating",price:0,name:{en:"Plastic garden chairs"},description:{en:"Borrowed from someone's patio. Slightly wobbly."}},{id:"seating_stools",slot:"seating",price:4,name:{en:"Red bar stools"},description:{en:"Spin once for luck."}},{id:"seating_velvet",slot:"seating",price:8,name:{en:"Velvet stools"},description:{en:"Gold legs, deep purple velvet, zero regrets."}},{id:"shelf_boxwine",slot:"shelf",price:0,name:{en:"Box wine"},description:{en:"It has a tap. That counts as a cocktail menu."}},{id:"shelf_bottles",slot:"shelf",price:4,name:{en:"Well-stocked shelf"},description:{en:"Something for everyone, and a few things for no one."}},{id:"shelf_whisky",slot:"shelf",price:8,name:{en:"Rare whisky wall"},description:{en:"Backlit, aged and priced by the thimble."}},{id:"chef_microwave",slot:"chef",price:0,name:{en:"A microwave"},description:{en:"Three minutes on high. Stir halfway."}},{id:"chef_linecook",slot:"chef",price:4,name:{en:"Line cook"},description:{en:"Fast, focused and slightly scared of the head chef."}},{id:"chef_headchef",slot:"chef",price:8,name:{en:"Head chef"},description:{en:"Tall hat, high standards, perfect omelette."}},{id:"kitchenwall_napkin",slot:"kitchenwall",price:0,name:{en:"Menu on a napkin"},description:{en:"Today's special is whatever is left."}},{id:"kitchenwall_spreadsheet",slot:"kitchenwall",price:4,name:{en:"Printed spreadsheet"},description:{en:"Forty columns, size 6 font, taped to the fridge."}},{id:"kitchenwall_dashboard",slot:"kitchenwall",price:8,name:{en:"Live dashboard"},description:{en:"Covers, waste and stock, updated every minute."}},{id:"stove_camping",slot:"stove",price:0,name:{en:"Camping stove"},description:{en:"One burner, one kettle, unlimited optimism."}},{id:"stove_range",slot:"stove",price:4,name:{en:"Gas range"},description:{en:"Four burners and a pot that is always simmering."}},{id:"stove_pizza",slot:"stove",price:8,name:{en:"Wood-fired oven"},description:{en:"Ninety seconds to a perfect pizza."}},{id:"mascot_rock",slot:"mascot",price:0,name:{en:"Pet rock"},description:{en:"Low maintenance. Very good at sitting still."}},{id:"mascot_goldfish",slot:"mascot",price:4,name:{en:"Goldfish"},description:{en:"Greets every guest as if for the first time."}},{id:"mascot_dog",slot:"mascot",price:8,name:{en:"Hotel dog"},description:{en:"Head of guest happiness. Accepts belly rubs."}},{id:"mascot_llama",slot:"mascot",price:12,name:{en:"Llama concierge"},description:{en:"Excellent restaurant tips. Do not make it angry."}},{id:"sign_cardboard",slot:"sign",price:0,name:{en:"Handwritten cardboard"},description:{en:"Black marker, slightly wonky, full of heart."}},{id:"sign_neon",slot:"sign",price:4,name:{en:"Neon with a flickering letter"},description:{en:"Buzzes at night. One letter has given up."}},{id:"sign_smart",slot:"sign",price:8,name:{en:"Smart brand-standard sign"},description:{en:"Correct font, correct colors, correct everything."}}],xs={rooms:xh,slots:vh,items:Mh},Ae=i=>document.getElementById(i),Gn=Ae("app"),Qe=new Z5({antialias:!0,preserveDrawingBuffer:!0});Qe.setPixelRatio(Math.min(window.devicePixelRatio,2));Qe.shadowMap.enabled=!0;Qe.shadowMap.type=Jo;Qe.toneMapping=Ko;Qe.toneMappingExposure=1.05;Qe.outputColorSpace=Xe;Gn.appendChild(Qe.domElement);const Wi=Qe.domElement,Ee=await gh(),{scene:k0,camera:E1}=Ee,b1=Object.fromEntries(xs.rooms.map(i=>[i.id,i.name.en])),yh=Object.fromEntries(xs.slots.map(i=>[i.id,i.name.en])),H0={};for(const i of xs.items)(H0[i.slot]||=[]).push(i);const Sh=Object.fromEntries(xs.items.map(i=>[i.id,i.price??0])),cs={...z0},Eh=i=>i==="hotel"?["sign","mascot"]:Object.keys(e1[i].slots);function T1(){Qe.setSize(Gn.clientWidth,Gn.clientHeight,!1);const i=Math.min(.5,Ae("sheet").offsetHeight/Gn.clientHeight);Ee.frame(Gn.clientWidth/Gn.clientHeight,i)}window.addEventListener("resize",T1);const Wn=new Set;function ui(i,t=!1){if(!t){const e=!!history.state?.room;if(i==="hotel"){if(e)return history.back()}else e?history.replaceState({room:i},""):history.pushState({room:i},"")}Ee.focus(i==="hotel"?null:i),Ae("title").textContent=i==="hotel"?lr.trim()||"Your hotel":b1[i],Ae("back").hidden=i==="hotel",Ae("labels").classList.toggle("off",i!=="hotel"),i==="hotel"&&bh(),n1(i),T1()}const Yo={};let lr="";function n1(i){const t=Ae("sheet");t.replaceChildren();const e=Eh(i),n=Yo[i]||=e[0];if(i==="hotel"){const a=document.createElement("label");a.className="name",a.innerHTML='<span>Hotel name</span><input maxlength="40" placeholder="My Hotel" autocomplete="off" enterkeyhint="done">';const o=a.querySelector("input");o.value=lr;let l;o.oninput=()=>{lr=o.value,clearTimeout(l),l=setTimeout(()=>Ee.setName(lr),350),Ae("title").textContent=lr.trim()||"Your hotel"},o.onkeydown=c=>{c.key==="Enter"&&o.blur()},t.appendChild(a)}const r=document.createElement("div");r.className="tabs";for(const a of e){const o=document.createElement("button");o.textContent=yh[a],o.setAttribute("aria-selected",String(a===n)),o.onclick=()=>{Yo[i]=a,n1(i)},r.appendChild(o)}if(i!=="hotel"){const a=document.createElement("button");a.className="demo",a.textContent=Wn.has(i)?"🔓 demo":"🔒 demo",a.onclick=()=>{Wn.has(i)?Wn.delete(i):Wn.add(i),Ee.setLocked(i,Wn.has(i)),n1(i),_r()},r.appendChild(a)}t.appendChild(r);const s=document.createElement("div");s.className="items";for(const a of H0[n]){const o=document.createElement("button");o.innerHTML=`${a.name.en}<small>${a.price?`${a.price} pts`:"Free"}</small>`,o.setAttribute("aria-pressed",String(cs[n]===a.id)),o.onclick=()=>{cs[n]=a.id,s.querySelectorAll("button").forEach(l=>l.setAttribute("aria-pressed",String(l===o))),Ee.setItem(n,a.id),V0()},s.appendChild(o)}t.appendChild(s)}function V0(){Ae("points").textContent=`${Object.values(cs).reduce((i,t)=>i+Sh[t],0)} pts spent`}Ae("back").onclick=()=>ui("hotel");const G0=()=>{history.state||history.pushState({hotel:!0},"")};window.addEventListener("popstate",i=>{if(i.state?.room)return ui(i.state.room,!0);if(i.state?.hotel)return Ae("leave").hidden=!0,ui("hotel",!0);ui("hotel",!0),Ae("leave").hidden=!1});Ae("stay").onclick=()=>{Ae("leave").hidden=!0,G0()};Ae("bye").onclick=()=>history.back();const Fi={};for(const i of Ee.rooms){const t=document.createElement("button");t.textContent=b1[i],t.onclick=()=>ui(i),Ae("labels").appendChild(t),Fi[i]=t}let W0=0,hs=null;function bh(i=2500){W0=performance.now()+i,_r(),setTimeout(_r,i+20)}function _r(){const i=performance.now()<W0;for(const t of Ee.rooms)Fi[t].classList.toggle("show",i||hs===t||Wn.has(t)),Fi[t].textContent=(Wn.has(t)?"🔒 ":"")+b1[t],Fi[t].style.background=Wn.has(t)?"var(--accent)":"var(--ink)"}const oa=new D;function Th(){if(Ee.view==="hotel")for(const i of Ee.rooms)oa.copy(Ee.labelAnchor(i)).project(E1),Fi[i].style.left=`${(oa.x*.5+.5)*Gn.clientWidth}px`,Fi[i].style.top=`${(.5-oa.y*.5)*Gn.clientHeight}px`}let la=0,i1=0,dn=null;const X0=i=>{const t=Wi.getBoundingClientRect();return[(i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1]};Wi.addEventListener("pointerdown",i=>{dn={x:i.clientX,y:i.clientY,t:performance.now(),lastX:i.clientX},Wi.setPointerCapture(i.pointerId),Ee.view==="hotel"&&(hs=Ee.pick(...X0(i)),_r())});Wi.addEventListener("pointermove",i=>{dn&&(i1=Math.max(-.5,Math.min(.35,i1+(i.clientX-dn.lastX)*.006)),dn.lastX=i.clientX)});Wi.addEventListener("pointerup",i=>{if(!dn)return;const t=Math.hypot(i.clientX-dn.x,i.clientY-dn.y),e=performance.now()-dn.t<400;if(dn=null,hs&&(hs=null,setTimeout(_r,600)),t>10||!e)return;const n=Ee.pick(...X0(i));n&&n!==Ee.view&&ui(n)});const Oe={x:0,y:0,tx:0,ty:0,base:null},us=i=>Math.max(-1,Math.min(1,i)),wh=matchMedia("(prefers-reduced-motion: reduce)").matches;function Ah(i){i.beta==null||i.gamma==null||(Oe.base??=i.beta,Oe.tx=us(i.gamma/25),Oe.ty=us((i.beta-Oe.base)/25))}async function Ch(){if(!wh)try{if(typeof DeviceOrientationEvent?.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted")return;window.addEventListener("deviceorientation",Ah)}catch{}}Ae("go").addEventListener("click",()=>{Ch(),G0(),Ae("start").hidden=!0});window.addEventListener("pointermove",i=>{i.pointerType!=="mouse"||dn||(Oe.tx=us(i.clientX/innerWidth*2-1),Oe.ty=us(i.clientY/innerHeight*2-1))});Ae("card").onclick=()=>{Qe.render(k0,E1);const i=document.createElement("a");i.download="my-hotel.png",i.href=Wi.toDataURL("image/png"),i.click()};for(const[i,t]of Object.entries(cs))await Ee.setItem(i,t);history.state?.room&&history.replaceState({hotel:!0},"");ui("hotel",!0);T1();V0();const Rh=new U6;Qe.setAnimationLoop(()=>{const i=Rh.getDelta();Ee.update(performance.now()),la+=(i1-la)*Math.min(1,i*8);const t=Math.min(1,i*5);Oe.x+=(Oe.tx-Oe.x)*t,Oe.y+=(Oe.ty-Oe.y)*t,Ee.setYaw(la),Ee.setTilt(Oe.x,Oe.y),Th(),Qe.render(k0,E1)});
