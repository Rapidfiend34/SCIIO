(()=>{/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xu=0,Jl=1,Ku=2;var nu=1,$u=2,vn=3,Qn=0,Be=1,xn=2,Bn=0,Di=1,ql=2,jl=3,Xl=4,th=5,ni=100,eh=101,nh=102,ih=103,sh=104,rh=200,ah=201,oh=202,lh=203,Za=204,Wa=205,ch=206,uh=207,hh=208,dh=209,fh=210,ph=211,mh=212,gh=213,Mh=214,Ya=0,Ja=1,qa=2,Li=3,ja=4,Xa=5,Ka=6,$a=7,iu=0,Eh=1,Vh=2,kn=0,vh=1,yh=2,xh=3,Rh=4,_h=5,Sh=6,Ah=7;var su=300,Oi=301,Bi=302,to=303,eo=304,Hr=306,no=1e3,si=1001,io=1002,rn=1003,Th=1004;var Ns=1005;var ve=1006,ha=1007;var ri=1008;var An=1009,ru=1010,au=1011,fs=1012,pl=1013,ai=1014,Rn=1015,Rs=1016,ml=1017,gl=1018,ki=1020,ou=35902,lu=1021,cu=1022,sn=1023,uu=1024,hu=1025,Fi=1026,Qi=1027,du=1028,Ml=1029,fu=1030,El=1031;var Vl=1033,lr=33776,cr=33777,ur=33778,hr=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,go=37812,Mo=37813,Eo=37814,Vo=37815,vo=37816,yo=37817,xo=37818,Ro=37819,_o=37820,So=37821,dr=36492,Ao=36494,To=36495,pu=36283,Io=36284,bo=36285,wo=36286;var pr=2300,Uo=2301,da=2302,Kl=2400,$l=2401,tc=2402;var Ih=3200,bh=3201;var wh=0,Uh=1,Ln="",Je="srgb",Zn="srgb-linear",Gr="linear",ne="srgb";var Ei=7680;var ec=519,Nh=512,Ch=513,Dh=514,mu=515,Fh=516,zh=517,Ph=518,Lh=519,nc=35044;var ic="300 es",_n=2e3,mr=2001,Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fr=Math.PI/180,No=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Oh(i,t){return(i%t+t)%t}function fa(i,t,e){return(1-e)*i+e*t}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],E=s[0],m=s[3],f=s[6],S=s[1],x=s[4],V=s[7],C=s[2],I=s[5],b=s[8];return r[0]=a*E+o*S+l*C,r[3]=a*m+o*x+l*I,r[6]=a*f+o*V+l*b,r[1]=c*E+u*S+h*C,r[4]=c*m+u*x+h*I,r[7]=c*f+u*V+h*b,r[2]=d*E+p*S+g*C,r[5]=d*m+p*x+g*I,r[8]=d*f+p*V+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=h*E,t[1]=(s*c-u*n)*E,t[2]=(o*n-s*a)*E,t[3]=d*E,t[4]=(u*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=p*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pa=new Bt;function gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){let i=gr("canvas");return i.style.display="block",i}var sc={};function os(i){i in sc||(sc[i]=!0,console.warn(i))}function kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rc=[.64,.33,.3,.6,.15,.06],ac=[.2126,.7152,.0722],oc=[.3127,.329],lc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Zn]:{primaries:rc,whitePoint:oc,transfer:Gr,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:ac,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:rc,whitePoint:oc,transfer:ne,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:ac,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Vi,Co=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=gr("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gh=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zh=0,Ge=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=ve,a=ri,o=sn,l=An,c=i.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=qi(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=su;Ge.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,V=(p+1)/2,C=(f+1)/2,I=(u+d)/4,b=(h+E)/4,U=(g+m)/4;return x>V&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=I/n,r=b/n):V>C?V<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(V),n=I/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=b/r,s=U/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-E)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Do{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],E=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=E;return}if(h!==E||l!==d||c!==p||u!==g){let m=1-o,f=l*d+c*p+u*g+h*E,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let C=Math.sqrt(x),I=Math.atan2(C,f*S);m=Math.sin(m*I)/C,o=Math.sin(o*I)/C}let V=o*S;if(l=l*m+d*V,c=c*m+p*V,u=u*m+g*V,h=h*m+E*V,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-o*p,t[e+2]=c*g+u*p+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new N,uc=new Gn,oi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Ds.subVectors(this.max,ns),vi.subVectors(t.a,ns),yi.subVectors(t.b,ns),xi.subVectors(t.c,ns),Nn.subVectors(yi,vi),Cn.subVectors(xi,yi),qn.subVectors(vi,xi);let e=[0,-Nn.z,Nn.y,0,-Cn.z,Cn.y,0,-qn.z,qn.y,Nn.z,0,-Nn.x,Cn.z,0,-Cn.x,qn.z,0,-qn.x,-Nn.y,Nn.x,0,-Cn.y,Cn.x,0,-qn.y,qn.x,0];return!Ma(e,vi,yi,xi,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,vi,yi,xi,Ds))?!1:(Fs.crossVectors(Nn,Cn),e=[Fs.x,Fs.y,Fs.z],Ma(e,vi,yi,xi,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,Cs=new oi,vi=new N,yi=new N,xi=new N,Nn=new N,Cn=new N,qn=new N,ns=new N,Ds=new N,Fs=new N,jn=new N;function Ma(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Wh=new oi,is=new N,Ea=new N,Hi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Ea)),this.expandByPoint(is.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gn=new N,Va=new N,zs=new N,Dn=new N,va=new N,Ps=new N,ya=new N,Vr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=Dn.dot(this.direction),l=-Dn.dot(zs),c=Dn.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let E=1/u;h*=E,d*=E,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Va).addScaledVector(zs,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);let n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),Ps.subVectors(n,t),ya.crossVectors(va,Ps);let a=this.direction.dot(ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);let l=o*this.direction.dot(Ps.crossVectors(Dn,Ps));if(l<0)return null;let c=o*this.direction.dot(va.cross(Dn));if(c<0||l+c>a)return null;let u=-o*Dn.dot(ya);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,a,o,l,c,u,h,d,p,g,E,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,E,m)}set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,E,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,p=a*h,g=o*u,E=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-E*c,e[9]=-o*l,e[2]=E-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,p=l*h,g=c*u,E=c*h;e[0]=d+E*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=E+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,p=l*h,g=c*u,E=c*h;e[0]=d-E*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=E-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,p=a*h,g=o*u,E=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+E,e[1]=l*h,e[5]=E*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,E=o*c;e[0]=l*u,e[4]=E-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-E*h}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,E=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+E,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=E*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yh,t,Jh)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Fn.crossVectors(n,Qe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Fn.crossVectors(n,Qe)),Fn.normalize(),Ls.crossVectors(Qe,Fn),s[0]=Fn.x,s[4]=Ls.x,s[8]=Qe.x,s[1]=Fn.y,s[5]=Ls.y,s[9]=Qe.y,s[2]=Fn.z,s[6]=Ls.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],E=n[6],m=n[10],f=n[14],S=n[3],x=n[7],V=n[11],C=n[15],I=s[0],b=s[4],U=s[8],_=s[12],y=s[1],w=s[5],H=s[9],P=s[13],L=s[2],W=s[6],B=s[10],$=s[14],G=s[3],ot=s[7],ht=s[11],pt=s[15];return r[0]=a*I+o*y+l*L+c*G,r[4]=a*b+o*w+l*W+c*ot,r[8]=a*U+o*H+l*B+c*ht,r[12]=a*_+o*P+l*$+c*pt,r[1]=u*I+h*y+d*L+p*G,r[5]=u*b+h*w+d*W+p*ot,r[9]=u*U+h*H+d*B+p*ht,r[13]=u*_+h*P+d*$+p*pt,r[2]=g*I+E*y+m*L+f*G,r[6]=g*b+E*w+m*W+f*ot,r[10]=g*U+E*H+m*B+f*ht,r[14]=g*_+E*P+m*$+f*pt,r[3]=S*I+x*y+V*L+C*G,r[7]=S*b+x*w+V*W+C*ot,r[11]=S*U+x*H+V*B+C*ht,r[15]=S*_+x*P+V*$+C*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],E=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*p-n*l*p)+E*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],E=t[13],m=t[14],f=t[15],S=h*m*c-E*d*c+E*l*p-o*m*p-h*l*f+o*d*f,x=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,V=u*E*c-g*h*c+g*o*p-a*E*p-u*o*f+a*h*f,C=g*h*l-u*E*l-g*o*d+a*E*d+u*o*m-a*h*m,I=e*S+n*x+s*V+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/I;return t[0]=S*b,t[1]=(E*d*r-h*m*r-E*s*p+n*m*p+h*s*f-n*d*f)*b,t[2]=(o*m*r-E*l*r+E*s*c-n*m*c-o*s*f+n*l*f)*b,t[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*p-n*l*p)*b,t[4]=x*b,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*b,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*b,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*p+e*l*p)*b,t[8]=V*b,t[9]=(g*h*r-u*E*r-g*n*p+e*E*p+u*n*f-e*h*f)*b,t[10]=(a*E*r-g*o*r+g*n*c-e*E*c-a*n*f+e*o*f)*b,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*b,t[12]=C*b,t[13]=(u*E*s-g*h*s+g*n*d-e*E*d-u*n*m+e*h*m)*b,t[14]=(g*o*s-a*E*s-g*n*l+e*E*l+a*n*m-e*o*m)*b,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,E=a*u,m=a*h,f=o*h,S=l*c,x=l*u,V=l*h,C=n.x,I=n.y,b=n.z;return s[0]=(1-(E+f))*C,s[1]=(p+V)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(p-V)*I,s[5]=(1-(d+f))*I,s[6]=(m+S)*I,s[7]=0,s[8]=(g+x)*b,s[9]=(m-S)*b,s[10]=(1-(d+E))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);let c=1/r,u=1/a,h=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=_n){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===_n)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*c,p=(n+s)*u,g,E;if(o===_n)g=(a+r)*h,E=-2*h;else if(o===mr)g=r*h,E=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ri=new N,en=new me,Yh=new N(0,0,0),Jh=new N(1,1,1),Fn=new N,Ls=new N,Qe=new N,hc=new me,dc=new Gn,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qh=0,fc=new N,_i=new Gn,Mn=new me,Os=new N,ss=new N,jh=new N,Xh=new Gn,pc=new N(1,0,0),mc=new N(0,1,0),gc=new N(0,0,1),Mc={type:"added"},Kh={type:"removed"},Si={type:"childadded",child:null},xa={type:"childremoved",child:null},je=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Tn,n=new Gn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Bt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(pc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(gc,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ss,Os,this.up):Mn.lookAt(Os,ss,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(Mn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kh),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};je.DEFAULT_UP=new N(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new N,En=new N,Ra=new N,Vn=new N,Ai=new N,Ti=new N,Ec=new N,_a=new N,Sa=new N,Aa=new N,Ta=new de,Ia=new de,ba=new de,On=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),En.subVectors(n,e),Ra.subVectors(t,e);let a=nn.dot(nn),o=nn.dot(En),l=nn.dot(Ra),c=En.dot(En),u=En.dot(Ra),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ta.setScalar(0),Ia.setScalar(0),ba.setScalar(0),Ta.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),Ti.subVectors(r,n),_a.subVectors(t,n);let l=Ai.dot(_a),c=Ti.dot(_a);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);let u=Ai.dot(Sa),h=Ti.dot(Sa);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ai,a);Aa.subVectors(t,r);let p=Ai.dot(Aa),g=Ti.dot(Aa);if(g>=0&&p<=g)return e.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ti,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ec.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Ec,o);let f=1/(m+E+d);return a=E*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Oh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wa(a,r,t+1/3),this.g=wa(a,r,t),this.b=wa(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return qt.fromWorkingColorSpace(be.copy(this),t),Math.round(we(be.r*255,0,255))*65536+Math.round(we(be.g*255,0,255))*256+Math.round(we(be.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Je){qt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Bs);let n=fa(zn.h,Bs.h,e),s=fa(zn.s,Bs.s,e),r=fa(zn.l,Bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Yt;Yt.NAMES=Mu;var $h=0,li=class extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=qi(),this.name="",this.blending=Di,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Wa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yr=class extends li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new N,ks=new ct,qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}};var xr=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},td=0,Ye=new me,Ua=new je,Ii=new N,He=new oi,rs=new oi,_e=new N,Ne=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gu(t)?Rr:xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(He.min,rs.min),He.expandByPoint(_e),_e.addVectors(He.max,rs.max),He.expandByPoint(_e)):(He.expandByPoint(rs.min),He.expandByPoint(rs.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),_e.add(Ii)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new N,l[U]=new N;let c=new N,u=new N,h=new N,d=new ct,p=new ct,g=new ct,E=new N,m=new N;function f(U,_,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),o[U].add(E),o[_].add(E),o[y].add(E),l[U].add(m),l[_].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,_=S.length;U<_;++U){let y=S[U],w=y.start,H=y.count;for(let P=w,L=w+H;P<L;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let x=new N,V=new N,C=new N,I=new N;function b(U){C.fromBufferAttribute(s,U),I.copy(C);let _=o[U];x.copy(_),x.sub(C.multiplyScalar(C.dot(_))).normalize(),V.crossVectors(I,_);let w=V.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,w)}for(let U=0,_=S.length;U<_;++U){let y=S[U],w=y.start,H=y.count;for(let P=w,L=w+H;P<L;P+=3)b(t.getX(P+0)),b(t.getX(P+1)),b(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),E=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=new me,Xn=new Vr,Qs=new Hi,vc=new N,Hs=new N,Gs=new N,Zs=new N,Na=new N,Ws=new N,yc=new N,Ys=new N,Ue=class extends je{constructor(t=new Ne,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Na.fromBufferAttribute(h,t),a?Ws.addScaledVector(Na,u):Ws.addScaledVector(Na.sub(e),u))}e.add(Ws)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(Qs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Qs,vc)===null||Xn.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let V=S,C=x;V<C;V+=3){let I=o.getX(V),b=o.getX(V+1),U=o.getX(V+2);s=Js(this,f,t,n,c,u,h,I,b,U),s&&(s.faceIndex=Math.floor(V/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let S=o.getX(m),x=o.getX(m+1),V=o.getX(m+2);s=Js(this,a,t,n,c,u,h,S,x,V),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let V=S,C=x;V<C;V+=3){let I=V,b=V+1,U=V+2;s=Js(this,f,t,n,c,u,h,I,b,U),s&&(s.faceIndex=Math.floor(V/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let S=m,x=m+1,V=m+2;s=Js(this,a,t,n,c,u,h,S,x,V),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ed(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qn,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Zs);let u=ed(i,t,e,n,Hs,Gs,Zs,yc);if(u){let h=new N;On.getBarycoord(yc,Hs,Gs,Zs,h),s&&(u.uv=On.getInterpolatedAttribute(s,o,l,c,h,new ct)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,h,new ct)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};On.getNormal(Hs,Gs,Zs,d.normal),u.face=d,u.barycoord=h}return u}var ci=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(h,2));function g(E,m,f,S,x,V,C,I,b,U,_){let y=V/b,w=C/U,H=V/2,P=C/2,L=I/2,W=b+1,B=U+1,$=0,G=0,ot=new N;for(let ht=0;ht<B;ht++){let pt=ht*w-P;for(let wt=0;wt<W;wt++){let kt=wt*y-H;ot[E]=kt*S,ot[m]=pt*x,ot[f]=L,c.push(ot.x,ot.y,ot.z),ot[E]=0,ot[m]=0,ot[f]=I>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(wt/b),h.push(1-ht/U),$+=1}}for(let ht=0;ht<U;ht++)for(let pt=0;pt<b;pt++){let wt=d+pt+W*ht,kt=d+pt+W*(ht+1),Y=d+(pt+1)+W*(ht+1),it=d+(pt+1)+W*ht;l.push(wt,kt,it),l.push(kt,Y,it),G+=6}o.addGroup(p,G,_),p+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function nd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var id={clone:Gi,merge:Ce},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_r=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new N,xc=new ct,Rc=new ct,De=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,Rc),e.subVectors(Rc,xc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bi=-90,wi=1,zo=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(bi,wi,t,e);s.layers=this.layers,this.add(s);let r=new De(bi,wi,t,e);r.layers=this.layers,this.add(r);let a=new De(bi,wi,t,e);a.layers=this.layers,this.add(a);let o=new De(bi,wi,t,e);o.layers=this.layers,this.add(o);let l=new De(bi,wi,t,e);l.layers=this.layers,this.add(l);let c=new De(bi,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sr=class extends Ge{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Po=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Bn});r.uniforms.tEquirect.value=e;let a=new Ue(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=ve),new zo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ca=new N,ad=new N,od=new Bt,yn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ca.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||od.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Hi,qs=new N,Ar=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],S=s[13],x=s[14],V=s[15];if(n[0].setComponents(l-r,d-c,m-p,V-f).normalize(),n[1].setComponents(l+r,d+c,m+p,V+f).normalize(),n[2].setComponents(l+a,d+u,m+g,V+S).normalize(),n[3].setComponents(l-a,d-u,m-g,V-S).normalize(),n[4].setComponents(l-o,d-h,m-E,V-x).normalize(),e===_n)n[5].setComponents(l+o,d+h,m+E,V+x).normalize();else if(e===mr)n[5].setComponents(o,h,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ld(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],E=h[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let E=h[p];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ui=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],g=[],E=[],m=[];for(let f=0;f<u;f++){let S=f*d-a;for(let x=0;x<c;x++){let V=x*h-r;g.push(V,-S,0),E.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let x=S+c*f,V=S+c*(f+1),C=S+1+c*(f+1),I=S+1+c*f;p.push(x,V,I),p.push(V,C,I)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(E,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
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
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
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
#endif`,lf=`struct PhysicalMaterial {
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
}`,cf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
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
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,Mp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,_p=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Np=`#define PHONG
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
}`,Cp=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Fp=`#define TOON
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
}`,zp=`#define TOON
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
}`,Pp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 color;
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
}`,kp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:cd,alphahash_pars_fragment:ud,alphamap_fragment:hd,alphamap_pars_fragment:dd,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:Md,batching_vertex:Ed,begin_vertex:Vd,beginnormal_vertex:vd,bsdfs:yd,iridescence_fragment:xd,bumpmap_pars_fragment:Rd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Td,color_fragment:Id,color_pars_fragment:bd,color_pars_vertex:wd,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Fd,displacementmap_vertex:zd,emissivemap_fragment:Pd,emissivemap_pars_fragment:Ld,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:kd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:ef,envmap_vertex:Zd,fog_vertex:Wd,fog_pars_vertex:Yd,fog_fragment:Jd,fog_pars_fragment:qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Xd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:$d,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:uf,lights_fragment_end:hf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:Mf,map_particle_fragment:Ef,map_particle_pars_fragment:Vf,metalnessmap_fragment:vf,metalnessmap_pars_fragment:yf,morphinstance_vertex:xf,morphcolor_vertex:Rf,morphnormal_vertex:_f,morphtarget_pars_vertex:Sf,morphtarget_vertex:Af,normal_fragment_begin:Tf,normal_fragment_maps:If,normal_pars_fragment:bf,normal_pars_vertex:wf,normal_vertex:Uf,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:zf,opaque_fragment:Pf,packing:Lf,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:kf,dithering_pars_fragment:Qf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Jf,skinbase_vertex:qf,skinning_pars_vertex:jf,skinning_vertex:Xf,skinnormal_vertex:Kf,specularmap_fragment:$f,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:sp,uv_pars_fragment:rp,uv_pars_vertex:ap,uv_vertex:op,worldpos_vertex:lp,background_vert:cp,background_frag:up,backgroundCube_vert:hp,backgroundCube_frag:dp,cube_vert:fp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:Mp,distanceRGBA_frag:Ep,equirect_vert:Vp,equirect_frag:vp,linedashed_vert:yp,linedashed_frag:xp,meshbasic_vert:Rp,meshbasic_frag:_p,meshlambert_vert:Sp,meshlambert_frag:Ap,meshmatcap_vert:Tp,meshmatcap_frag:Ip,meshnormal_vert:bp,meshnormal_frag:wp,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Cp,meshphysical_frag:Dp,meshtoon_vert:Fp,meshtoon_frag:zp,points_vert:Pp,points_frag:Lp,shadow_vert:Op,shadow_frag:Bp,sprite_vert:kp,sprite_frag:Qp},ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},cn={basic:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ce([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ce([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ce([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ce([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ce([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ce([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ce([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ce([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ce([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ce([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ce([ut.lights,ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var js={r:0,b:0,g:0},$n=new Tn,Hp=new me;function Gp(i,t,e,n,s,r,a){let o=new Yt(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function E(S){let x=!1,V=g(S);V===null?f(o,l):V&&V.isColor&&(f(V,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){let V=g(x);V&&(V.isCubeTexture||V.mapping===Hr)?(u===void 0&&(u=new Ue(new ci(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Gi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$n.copy(x.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.material.uniforms.envMap.value=V,u.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler($n)),u.material.toneMapped=qt.getTransfer(V.colorSpace)!==ne,(h!==V||d!==V.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=V,d=V.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):V&&V.isTexture&&(c===void 0&&(c=new Ue(new ui(2,2),new Fe({name:"BackgroundMaterial",uniforms:Gi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=V,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(V.colorSpace)!==ne,V.matrixAutoUpdate===!0&&V.updateMatrix(),c.material.uniforms.uvTransform.value.copy(V.matrix),(h!==V||d!==V.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=V,d=V.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(js,Eu(i)),n.buffers.color.setClear(js.r,js.g,js.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:E,addToRenderList:m}}function Zp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,w,H,P,L){let W=!1,B=h(P,H,w);r!==B&&(r=B,c(r.object)),W=p(y,P,H,L),W&&g(y,P,H,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,V(y,w,H,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,w,H){let P=H.wireframe===!0,L=n[y.id];L===void 0&&(L={},n[y.id]=L);let W=L[w.id];W===void 0&&(W={},L[w.id]=W);let B=W[P];return B===void 0&&(B=d(l()),W[P]=B),B}function d(y){let w=[],H=[],P=[];for(let L=0;L<e;L++)w[L]=0,H[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:P,object:y,attributes:{},index:null}}function p(y,w,H,P){let L=r.attributes,W=w.attributes,B=0,$=H.getAttributes();for(let G in $)if($[G].location>=0){let ht=L[G],pt=W[G];if(pt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),ht===void 0||ht.attribute!==pt||pt&&ht.data!==pt.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(y,w,H,P){let L={},W=w.attributes,B=0,$=H.getAttributes();for(let G in $)if($[G].location>=0){let ht=W[G];ht===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));let pt={};pt.attribute=ht,ht&&ht.data&&(pt.data=ht.data),L[G]=pt,B++}r.attributes=L,r.attributesNum=B,r.index=P}function E(){let y=r.newAttributes;for(let w=0,H=y.length;w<H;w++)y[w]=0}function m(y){f(y,0)}function f(y,w){let H=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;H[y]=1,P[y]===0&&(i.enableVertexAttribArray(y),P[y]=1),L[y]!==w&&(i.vertexAttribDivisor(y,w),L[y]=w)}function S(){let y=r.newAttributes,w=r.enabledAttributes;for(let H=0,P=w.length;H<P;H++)w[H]!==y[H]&&(i.disableVertexAttribArray(H),w[H]=0)}function x(y,w,H,P,L,W,B){B===!0?i.vertexAttribIPointer(y,w,H,L,W):i.vertexAttribPointer(y,w,H,P,L,W)}function V(y,w,H,P){E();let L=P.attributes,W=H.getAttributes(),B=w.defaultAttributeValues;for(let $ in W){let G=W[$];if(G.location>=0){let ot=L[$];if(ot===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){let ht=ot.normalized,pt=ot.itemSize,wt=t.get(ot);if(wt===void 0)continue;let kt=wt.buffer,Y=wt.type,it=wt.bytesPerElement,Rt=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===pl;if(ot.isInterleavedBufferAttribute){let at=ot.data,Ut=at.stride,zt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)f(G.location+Dt,at.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)m(G.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Dt=0;Dt<G.locationSize;Dt++)x(G.location+Dt,pt/G.locationSize,Y,ht,Ut*it,(zt+pt/G.locationSize*Dt)*it,Rt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)f(G.location+at,ot.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let at=0;at<G.locationSize;at++)x(G.location+at,pt/G.locationSize,Y,ht,pt*it,pt/G.locationSize*at*it,Rt)}}else if(B!==void 0){let ht=B[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}S()}function C(){U();for(let y in n){let w=n[y];for(let H in w){let P=w[H];for(let L in P)u(P[L].object),delete P[L];delete w[H]}delete n[y]}}function I(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let H in w){let P=w[H];for(let L in P)u(P[L].object),delete P[L];delete w[H]}delete n[y.id]}function b(y){for(let w in n){let H=n[w];if(H[y.id]===void 0)continue;let P=H[y.id];for(let L in P)u(P[L].object),delete P[L];delete H[y.id]}}function U(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:S}}function Wp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let E=0;E<h;E++)g+=u[E]*d[E];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==sn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let U=b===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==An&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!U)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),V=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:V,vertexTextures:C,maxSamples:I}}function Jp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,x=S*4,V=f.clippingState||null;l.value=V,V=u(g,d,x,p);for(let C=0;C!==x;++C)V[C]=e[C];f.clippingState=V,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){let E=h!==null?h.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,V=p;x!==E;++x,V+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,V),m[V+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function qp(i){let t=new WeakMap;function e(a,o){return o===to?a.mapping=Oi:o===eo&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===to||o===eo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Po(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ps=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ni=4,_c=[.125,.215,.35,.446,.526,.582],ii=20,Da=new ps,Sc=new Yt,Fa=null,za=0,Pa=0,La=!1,ei=(1+Math.sqrt(5))/2,Ui=1/ei,Ac=[new N(-ei,Ui,0),new N(ei,Ui,0),new N(-Ui,0,ei),new N(Ui,0,ei),new N(0,ei,-Ui),new N(0,ei,Ui),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,za,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:Rs,format:sn,colorSpace:Zn,depthBuffer:!1},s=Tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(r)),this._blurMaterial=Xp(r,t,e)}return s}_compileMaterial(t){let e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s){let o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sc),u.toneMapping=kn,u.autoClear=!1;let p=new yr({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Ue(new ci,p),E=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,E=!0):(p.color.copy(Sc),E=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;Xs(s,S*x,f>2?x:0,x,x),u.setRenderTarget(s),E&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ac[(s-r-1)%Ac.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ue(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ii-1),E=r/g,m=isFinite(r)?1+Math.floor(u*E):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);let f=[],S=0;for(let b=0;b<ii;++b){let U=b/E,_=Math.exp(-U*U/2);f.push(_),b===0?S+=_:b<m&&(S+=2*_)}for(let b=0;b<f.length;b++)f[b]=f[b]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let V=this._sizeLods[s],C=3*V*(s>x-Ni?s-x+Ni:0),I=4*(this._cubeSize-V);Xs(e,C,I,3*V,2*V),l.setRenderTarget(e),l.render(h,Da)}};function jp(i){let t=[],e=[],n=[],s=i,r=i-Ni+1+_c.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=_c[a-i+Ni-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,E=3,m=2,f=1,S=new Float32Array(E*g*p),x=new Float32Array(m*g*p),V=new Float32Array(f*g*p);for(let I=0;I<p;I++){let b=I%3*2/3-1,U=I>2?0:-1,_=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];S.set(_,E*g*I),x.set(d,m*g*I);let y=[I,I,I,I,I,I];V.set(y,f*g*I)}let C=new Ne;C.setAttribute("position",new qe(S,E)),C.setAttribute("uv",new qe(x,m)),C.setAttribute("faceIndex",new qe(V,f)),t.push(C),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tc(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xp(i,t,e){let n=new Float32Array(ii),s=new N(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ic(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function bc(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function Kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===to||l===eo,u=l===Oi||l===Bi;if(c||u){let h=t.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Tr(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Tr(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $p(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tm(i,t,e,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let E=d.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)t.remove(E[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)t.update(E[m],i.ARRAY_BUFFER)}}function c(h){let d=[],p=h.index,g=h.attributes.position,E=0;if(p!==null){let S=p.array;E=p.version;for(let x=0,V=S.length;x<V;x+=3){let C=S[x+0],I=S[x+1],b=S[x+2];d.push(C,I,I,b,b,C)}}else if(g!==void 0){let S=g.array;E=g.version;for(let x=0,V=S.length/3-1;x<V;x+=3){let C=x+0,I=x+1,b=x+2;d.push(C,I,I,b,b,C)}}else return;let m=new(gu(d)?Rr:xr)(d,1);m.version=E;let f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function em(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,E,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*E[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function im(i,t,e){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),E===!0&&(x=3);let V=o.attributes.position.count*x,C=1;V>t.maxTextureSize&&(C=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);let I=new Float32Array(V*C*4*h),b=new Er(I,V,C,h);b.type=Rn,b.needsUpdate=!0;let U=x*4;for(let y=0;y<h;y++){let w=m[y],H=f[y],P=S[y],L=V*C*4*y;for(let W=0;W<w.count;W++){let B=W*U;p===!0&&(s.fromBufferAttribute(w,W),I[L+B+0]=s.x,I[L+B+1]=s.y,I[L+B+2]=s.z,I[L+B+3]=0),g===!0&&(s.fromBufferAttribute(H,W),I[L+B+4]=s.x,I[L+B+5]=s.y,I[L+B+6]=s.z,I[L+B+7]=0),E===!0&&(s.fromBufferAttribute(P,W),I[L+B+8]=s.x,I[L+B+9]=s.y,I[L+B+10]=s.z,I[L+B+11]=P.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new ct(V,C)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ir=class extends Ge{constructor(t,e,n,s,r,a,o,l,c,u=Fi){if(u!==Fi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fi&&(n=ai),n===void 0&&u===Qi&&(n=ki),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vu=new Ge,wc=new Ir(1,1),yu=new Er,xu=new Fo,Ru=new Sr,Uc=[],Nc=[],Cc=new Float32Array(16),Dc=new Float32Array(9),Fc=new Float32Array(4);function ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),xe(e,n)}}function um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),xe(e,n)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),xe(e,n)}}function dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=mu,r=wc):r=vu,e.setTexture2D(t||r,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xu,s)}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function Rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function _m(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return Mm;case 36295:return Em;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Sm(i,t){i.uniform1fv(this.addr,t)}function Am(i,t){let e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Tm(i,t){let e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){let e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function bm(i,t){let e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wm(i,t){let e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){let e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nm(i,t){i.uniform1iv(this.addr,t)}function Cm(i,t){i.uniform2iv(this.addr,t)}function Dm(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function zm(i,t){i.uniform1uiv(this.addr,t)}function Pm(i,t){i.uniform2uiv(this.addr,t)}function Lm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vu,r[a])}function km(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xu,r[a])}function Qm(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ru,r[a])}function Hm(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yu,r[a])}function Gm(i){switch(i){case 5126:return Sm;case 35664:return Am;case 35665:return Tm;case 35666:return Im;case 35674:return bm;case 35675:return wm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Cm;case 35668:case 35672:return Dm;case 35669:case 35673:return Fm;case 5125:return zm;case 36294:return Pm;case 36295:return Lm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return Hm}}var Lo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}},Oo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gm(e.type)}},Bo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function zc(i,t){i.seq.push(t),i.map[t.id]=t}function Zm(i,t,e){let n=i.name,s=n.length;for(Oa.lastIndex=0;;){let r=Oa.exec(n),a=Oa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zc(e,c===void 0?new Lo(o,i,t):new Oo(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Bo(o),zc(e,h)),e=h}}}var Pi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wm=37297,Ym=0;function Jm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lc=new Bt;function qm(i){qt._getMatrix(Lc,qt.workingColorSpace,i);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jm(i.getShaderSource(t),a)}else return s}function jm(i,t){let e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xm(i,t){let e;switch(t){case vh:e="Linear";break;case yh:e="Reinhard";break;case xh:e="Cineon";break;case Rh:e="ACESFilmic";break;case Sh:e="AgX";break;case Ah:e="Neutral";break;case _h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ks=new N;function Km(){qt.getLuminanceCoefficients(Ks);let i=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function Bc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=Ht[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(rg,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function hg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=og(e),c=lg(e),u=cg(e),h=ug(e),d=hg(e),p=$m(e),g=tg(r),E=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==kn?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,jm("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=ko(a),a=Bc(a,e),a=kc(a,e),o=ko(o),o=Bc(o,e),o=kc(o,e),a=Qc(a),o=Qc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=S+m+a,V=S+f+o,C=Pc(s,s.VERTEX_SHADER,x),I=Pc(s,s.FRAGMENT_SHADER,V);s.attachShader(E,C),s.attachShader(E,I),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(w){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(E).trim(),P=s.getShaderInfoLog(C).trim(),L=s.getShaderInfoLog(I).trim(),W=!0,B=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,C,I);else{let $=Oc(s,C,"vertex"),G=Oc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+$+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(P===""||L==="")&&(B=!1);B&&(w.diagnostics={runnable:W,programLog:H,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:f}})}s.deleteShader(C),s.deleteShader(I),U=new Pi(s,E),_=eg(s,E)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(E,Wm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=I,this}var fg=0,Qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ho(t),e.set(t,n)),n}},Ho=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,a){let o=new vr,l=new Qo,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,w,H,P){let L=H.fog,W=P.geometry,B=_.isMeshStandardMaterial?H.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),G=$&&$.mapping===Hr?$.image.height:null,ot=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=ht!==void 0?ht.length:0,wt=0;W.morphAttributes.position!==void 0&&(wt=1),W.morphAttributes.normal!==void 0&&(wt=2),W.morphAttributes.color!==void 0&&(wt=3);let kt,Y,it,Rt;if(ot){let te=cn[ot];kt=te.vertexShader,Y=te.fragmentShader}else kt=_.vertexShader,Y=_.fragmentShader,l.update(_),it=l.getVertexShaderID(_),Rt=l.getFragmentShaderID(_);let at=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),zt=P.isInstancedMesh===!0,Dt=P.isBatchedMesh===!0,Jt=!!_.map,X=!!_.matcap,st=!!$,T=!!_.aoMap,It=!!_.lightMap,et=!!_.bumpMap,vt=!!_.normalMap,lt=!!_.displacementMap,Nt=!!_.emissiveMap,Et=!!_.metalnessMap,A=!!_.roughnessMap,v=_.anisotropy>0,O=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,q=_.sheen>0,_t=_.transmission>0,dt=v&&!!_.anisotropyMap,Vt=O&&!!_.clearcoatMap,Gt=O&&!!_.clearcoatNormalMap,nt=O&&!!_.clearcoatRoughnessMap,yt=K&&!!_.iridescenceMap,Ct=K&&!!_.iridescenceThicknessMap,Ft=q&&!!_.sheenColorMap,xt=q&&!!_.sheenRoughnessMap,Wt=!!_.specularMap,Qt=!!_.specularColorMap,ie=!!_.specularIntensityMap,D=_t&&!!_.transmissionMap,ft=_t&&!!_.thicknessMap,Z=!!_.gradientMap,j=!!_.alphaMap,Mt=_.alphaTest>0,mt=!!_.alphaHash,Lt=!!_.extensions,pe=kn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Te={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:Y,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&P._colorsTexture!==null,instancing:zt,instancingColor:zt&&P.instanceColor!==null,instancingMorph:zt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Zn,alphaToCoverage:!!_.alphaToCoverage,map:Jt,matcap:X,envMap:st,envMapMode:st&&$.mapping,envMapCubeUVHeight:G,aoMap:T,lightMap:It,bumpMap:et,normalMap:vt,displacementMap:d&&lt,emissiveMap:Nt,normalMapObjectSpace:vt&&_.normalMapType===Uh,normalMapTangentSpace:vt&&_.normalMapType===wh,metalnessMap:Et,roughnessMap:A,anisotropy:v,anisotropyMap:dt,clearcoat:O,clearcoatMap:Vt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:K,iridescenceMap:yt,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:Wt,specularColorMap:Qt,specularIntensityMap:ie,transmission:_t,transmissionMap:D,thicknessMap:ft,gradientMap:Z,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:Mt,alphaHash:mt,combine:_.combine,mapUv:Jt&&E(_.map.channel),aoMapUv:T&&E(_.aoMap.channel),lightMapUv:It&&E(_.lightMap.channel),bumpMapUv:et&&E(_.bumpMap.channel),normalMapUv:vt&&E(_.normalMap.channel),displacementMapUv:lt&&E(_.displacementMap.channel),emissiveMapUv:Nt&&E(_.emissiveMap.channel),metalnessMapUv:Et&&E(_.metalnessMap.channel),roughnessMapUv:A&&E(_.roughnessMap.channel),anisotropyMapUv:dt&&E(_.anisotropyMap.channel),clearcoatMapUv:Vt&&E(_.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&E(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&E(_.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&E(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&E(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&E(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&E(_.sheenRoughnessMap.channel),specularMapUv:Wt&&E(_.specularMap.channel),specularColorMapUv:Qt&&E(_.specularColorMap.channel),specularIntensityMapUv:ie&&E(_.specularIntensityMap.channel),transmissionMapUv:D&&E(_.transmissionMap.channel),thicknessMapUv:ft&&E(_.thicknessMap.channel),alphaMapUv:j&&E(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(Jt||j),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ut,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Jt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&_.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function f(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)y.push(w),y.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(S(y,_),x(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function x(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function V(_){let y=g[_.type],w;if(y){let H=cn[y];w=id.clone(H.uniforms)}else w=_.uniforms;return w}function C(_,y){let w;for(let H=0,P=u.length;H<P;H++){let L=u[H];if(L.cacheKey===y){w=L,++w.usedTimes;break}}return w===void 0&&(w=new dg(i,y,_,r),u.push(w)),w}function I(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:V,acquireProgram:C,releaseProgram:I,releaseShaderCache:b,programs:u,dispose:U}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,g,E,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:E,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=E,f.group=m),t++,f}function o(h,d,p,g,E,m){let f=a(h,d,p,g,E,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,E,m){let f=a(h,d,p,g,E,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||gg),n.length>1&&n.sort(d||Gc),s.length>1&&s.sort(d||Gc)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Mg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Zc,i.set(n,[a])):s>=r.length?(a=new Zc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vg=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){let t=new Eg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new me,a=new me;function o(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,S=0,x=0,V=0,C=0,I=0,b=0;c.sort(yg);for(let _=0,y=c.length;_<y;_++){let w=c[_],H=w.color,P=w.intensity,L=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*P,h+=H.g*P,d+=H.b*P;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],P);b++}else if(w.isDirectionalLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let $=w.shadow,G=e.get(w);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=w.shadow.matrix,S++}n.directional[p]=B,p++}else if(w.isSpotLight){let B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(H).multiplyScalar(P),B.distance=L,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[E]=B;let $=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,$.updateMatrices(w),w.castShadow&&I++),n.spotLightMatrix[E]=$.matrix,w.castShadow){let G=e.get(w);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[E]=G,n.spotShadowMap[E]=W,V++}E++}else if(w.isRectAreaLight){let B=t.get(w);B.color.copy(H).multiplyScalar(P),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){let $=w.shadow,G=e.get(w);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=B,g++}else if(w.isHemisphereLight){let B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(P),B.groundColor.copy(w.groundColor).multiplyScalar(P),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==E||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==S||U.numPointShadows!==x||U.numSpotShadows!==V||U.numSpotMaps!==C||U.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=E,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=V,n.spotShadowMap.length=V,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=V+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=b,U.directionalLength=p,U.pointLength=g,U.spotLength=E,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=S,U.numPointShadows=x,U.numSpotShadows=V,U.numSpotMaps=C,U.numLightProbes=b,n.version=vg++)}function l(c,u){let h=0,d=0,p=0,g=0,E=0,m=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let x=c[f];if(x.isDirectionalLight){let V=n.directional[h];V.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),V.direction.sub(s),V.direction.transformDirection(m),h++}else if(x.isSpotLight){let V=n.spot[p];V.position.setFromMatrixPosition(x.matrixWorld),V.position.applyMatrix4(m),V.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),V.direction.sub(s),V.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let V=n.rectArea[g];V.position.setFromMatrixPosition(x.matrixWorld),V.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),V.halfWidth.set(x.width*.5,0,0),V.halfHeight.set(0,x.height*.5,0),V.halfWidth.applyMatrix4(a),V.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let V=n.point[d];V.position.setFromMatrixPosition(x.matrixWorld),V.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let V=n.hemi[E];V.direction.setFromMatrixPosition(x.matrixWorld),V.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:n}}function Wc(i){let t=new xg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Wc(i),t.set(s,[o])):r>=a.length?(o=new Wc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Go=class extends li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zo=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function Ag(i,t,e){let n=new Ar,s=new ct,r=new ct,a=new de,o=new Go({depthPacking:bh}),l=new Zo,c={},u=e.maxTextureSize,h={[Qn]:Be,[Be]:Qn,[xn]:xn},d=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:_g,fragmentShader:Sg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ne;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let f=this.type;this.render=function(I,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let P=f!==vn&&this.type===vn,L=f===vn&&this.type!==vn;for(let W=0,B=I.length;W<B;W++){let $=I[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||P===!0||L===!0){let pt=this.type!==vn?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new Ze(s.x,s.y,pt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ht=G.getViewportCount();for(let pt=0;pt<ht;pt++){let wt=G.getViewport(pt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),H.viewport(a),G.updateMatrices($,pt),n=G.getFrustum(),V(b,U,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&S(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,y,w)};function S(I,b){let U=t.update(E);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ze(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(b,null,U,d,E,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(b,null,U,p,E,null)}function x(I,b,U,_){let y=null,w=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)y=w;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let H=y.uuid,P=b.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let W=L[P];W===void 0&&(W=y.clone(),L[P]=W,b.addEventListener("dispose",C)),y=W}if(y.visible=b.visible,y.wireframe=b.wireframe,_===vn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=i.properties.get(y);H.light=U}return y}function V(I,b,U,_,y){if(I.visible===!1)return;if(I.layers.test(b.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===vn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);let P=t.update(I),L=I.material;if(Array.isArray(L)){let W=P.groups;for(let B=0,$=W.length;B<$;B++){let G=W[B],ot=L[G.materialIndex];if(ot&&ot.visible){let ht=x(I,ot,_,y);I.onBeforeShadow(i,I,b,U,P,ht,G),i.renderBufferDirect(U,null,P,ht,I,G),I.onAfterShadow(i,I,b,U,P,ht,G)}}}else if(L.visible){let W=x(I,L,_,y);I.onBeforeShadow(i,I,b,U,P,W,null),i.renderBufferDirect(U,null,P,W,I,null),I.onAfterShadow(i,I,b,U,P,W,null)}}let H=I.children;for(let P=0,L=H.length;P<L;P++)V(H[P],b,U,_,y)}function C(I){I.target.removeEventListener("dispose",C);for(let U in c){let _=c[U],y=I.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var Tg={[Ya]:Ja,[qa]:Ka,[ja]:$a,[Li]:Xa,[Ja]:Ya,[Ka]:qa,[$a]:ja,[Xa]:Li};function Ig(i,t){function e(){let D=!1,ft=new de,Z=null,j=new de(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!D&&(i.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){D=Mt},setClear:function(Mt,mt,Lt,pe,Te){Te===!0&&(Mt*=pe,mt*=pe,Lt*=pe),ft.set(Mt,mt,Lt,pe),j.equals(ft)===!1&&(i.clearColor(Mt,mt,Lt,pe),j.copy(ft))},reset:function(){D=!1,Z=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,Z=null,j=null,Mt=null;return{setReversed:function(mt){if(ft!==mt){let Lt=t.get("EXT_clip_control");ft?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let pe=Mt;Mt=null,this.setClear(pe)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?at(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(mt){Z!==mt&&!D&&(i.depthMask(mt),Z=mt)},setFunc:function(mt){if(ft&&(mt=Tg[mt]),j!==mt){switch(mt){case Ya:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=mt}},setLocked:function(mt){D=mt},setClear:function(mt){Mt!==mt&&(ft&&(mt=1-mt),i.clearDepth(mt),Mt=mt)},reset:function(){D=!1,Z=null,j=null,Mt=null,ft=!1}}}function s(){let D=!1,ft=null,Z=null,j=null,Mt=null,mt=null,Lt=null,pe=null,Te=null;return{setTest:function(te){D||(te?at(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(te){ft!==te&&!D&&(i.stencilMask(te),ft=te)},setFunc:function(te,Ke,fn){(Z!==te||j!==Ke||Mt!==fn)&&(i.stencilFunc(te,Ke,fn),Z=te,j=Ke,Mt=fn)},setOp:function(te,Ke,fn){(mt!==te||Lt!==Ke||pe!==fn)&&(i.stencilOp(te,Ke,fn),mt=te,Lt=Ke,pe=fn)},setLocked:function(te){D=te},setClear:function(te){Te!==te&&(i.clearStencil(te),Te=te)},reset:function(){D=!1,ft=null,Z=null,j=null,Mt=null,mt=null,Lt=null,pe=null,Te=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,E=!1,m=null,f=null,S=null,x=null,V=null,C=null,I=null,b=new Yt(0,0,0),U=0,_=!1,y=null,w=null,H=null,P=null,L=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=$>=2);let ot=null,ht={},pt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),kt=new de().fromArray(pt),Y=new de().fromArray(wt);function it(D,ft,Z,j){let Mt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(D,mt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Z;Lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(ft+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return mt}let Rt={};Rt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Li),et(!1),vt(Jl),at(i.CULL_FACE),T(Bn);function at(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ut(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function zt(D,ft){return h[D]!==ft?(i.bindFramebuffer(D,ft),h[D]=ft,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Dt(D,ft){let Z=p,j=!1;if(D){Z=d.get(ft),Z===void 0&&(Z=[],d.set(ft,Z));let Mt=D.textures;if(Z.length!==Mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Lt=Mt.length;mt<Lt;mt++)Z[mt]=i.COLOR_ATTACHMENT0+mt;Z.length=Mt.length,j=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,j=!0);j&&i.drawBuffers(Z)}function Jt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let X={[ni]:i.FUNC_ADD,[eh]:i.FUNC_SUBTRACT,[nh]:i.FUNC_REVERSE_SUBTRACT};X[ih]=i.MIN,X[sh]=i.MAX;let st={[rh]:i.ZERO,[ah]:i.ONE,[oh]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[fh]:i.SRC_ALPHA_SATURATE,[hh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[lh]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[dh]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[ph]:i.CONSTANT_COLOR,[mh]:i.ONE_MINUS_CONSTANT_COLOR,[gh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(D,ft,Z,j,Mt,mt,Lt,pe,Te,te){if(D===Bn){E===!0&&(Ut(i.BLEND),E=!1);return}if(E===!1&&(at(i.BLEND),E=!0),D!==th){if(D!==m||te!==_){if((f!==ni||V!==ni)&&(i.blendEquation(i.FUNC_ADD),f=ni,V=ni),te)switch(D){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,x=null,C=null,I=null,b.set(0,0,0),U=0,m=D,_=te}return}Mt=Mt||ft,mt=mt||Z,Lt=Lt||j,(ft!==f||Mt!==V)&&(i.blendEquationSeparate(X[ft],X[Mt]),f=ft,V=Mt),(Z!==S||j!==x||mt!==C||Lt!==I)&&(i.blendFuncSeparate(st[Z],st[j],st[mt],st[Lt]),S=Z,x=j,C=mt,I=Lt),(pe.equals(b)===!1||Te!==U)&&(i.blendColor(pe.r,pe.g,pe.b,Te),b.copy(pe),U=Te),m=D,_=!1}function It(D,ft){D.side===xn?Ut(i.CULL_FACE):at(i.CULL_FACE);let Z=D.side===Be;ft&&(Z=!Z),et(Z),D.blending===Di&&D.transparent===!1?T(Bn):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function vt(D){D!==Xu?(at(i.CULL_FACE),D!==w&&(D===Jl?i.cullFace(i.BACK):D===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),w=D}function lt(D){D!==H&&(B&&i.lineWidth(D),H=D)}function Nt(D,ft,Z){D?(at(i.POLYGON_OFFSET_FILL),(P!==ft||L!==Z)&&(i.polygonOffset(ft,Z),P=ft,L=Z)):Ut(i.POLYGON_OFFSET_FILL)}function Et(D){D?at(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+W-1),ot!==D&&(i.activeTexture(D),ot=D)}function v(D,ft,Z){Z===void 0&&(ot===null?Z=i.TEXTURE0+W-1:Z=ot);let j=ht[Z];j===void 0&&(j={type:void 0,texture:void 0},ht[Z]=j),(j.type!==D||j.texture!==ft)&&(ot!==Z&&(i.activeTexture(Z),ot=Z),i.bindTexture(D,ft||Rt[D]),j.type=D,j.texture=ft)}function O(){let D=ht[ot];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){kt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),kt.copy(D))}function xt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Wt(D,ft){let Z=c.get(ft);Z===void 0&&(Z=new WeakMap,c.set(ft,Z));let j=Z.get(D);j===void 0&&(j=i.getUniformBlockIndex(ft,D.name),Z.set(D,j))}function Qt(D,ft){let j=c.get(ft).get(D);l.get(ft)!==j&&(i.uniformBlockBinding(ft,j,D.__bindingPointIndex),l.set(ft,j))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,ht={},h={},d=new WeakMap,p=[],g=null,E=!1,m=null,f=null,S=null,x=null,V=null,C=null,I=null,b=new Yt(0,0,0),U=0,_=!1,y=null,w=null,H=null,P=null,L=null,kt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Ut,bindFramebuffer:zt,drawBuffers:Dt,useProgram:Jt,setBlending:T,setMaterial:It,setFlipSided:et,setCullFace:vt,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:Et,activeTexture:A,bindTexture:v,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:K,texImage2D:yt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Qt,texStorage2D:Gt,texStorage3D:nt,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:dt,compressedTexSubImage3D:Vt,scissor:Ft,viewport:xt,reset:ie}}function Yc(i,t,e,n){let s=bg(n);switch(e){case lu:return i*t;case uu:return i*t;case hu:return i*t*2;case du:return i*t/s.components*s.byteLength;case Ml:return i*t/s.components*s.byteLength;case fu:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case cu:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Vl:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case Ao:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pu:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bo:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(i){switch(i){case An:case ru:return{byteLength:1,components:1};case fs:case au:case Rs:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case ai:case pl:case Rn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):gr("canvas")}function E(A,v,O){let J=1,K=Et(A);if((K.width>O||K.height>O)&&(J=O/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(J*K.width),_t=Math.floor(J*K.height);h===void 0&&(h=g(q,_t));let dt=v?g(q,_t):h;return dt.width=q,dt.height=_t,dt.getContext("2d").drawImage(A,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+_t+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,v,O,J,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let _t=K?Gr:qt.getTransfer(J);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=_t===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function V(A,v){let O;return A?v===null||v===ai||v===ki?O=i.DEPTH24_STENCIL8:v===Rn?O=i.DEPTH32F_STENCIL8:v===fs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ai||v===ki?O=i.DEPTH_COMPONENT24:v===Rn?O=i.DEPTH_COMPONENT32F:v===fs&&(O=i.DEPTH_COMPONENT16),O}function C(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==ve?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function I(A){let v=A.target;v.removeEventListener("dispose",I),U(v),v.isVideoTexture&&u.delete(v)}function b(A){let v=A.target;v.removeEventListener("dispose",b),y(v)}function U(A){let v=n.get(A);if(v.__webglInit===void 0)return;let O=A.source,J=d.get(O);if(J){let K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(A),Object.keys(J).length===0&&d.delete(O)}n.remove(A)}function _(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let O=A.source,J=d.get(O);delete J[v.__cacheKey],a.memory.textures--}function y(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let K=0;K<v.__webglFramebuffer[J].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[J][K]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let J=0,K=O.length;J<K;J++){let q=n.get(O[J]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(A)}let w=0;function H(){w=0}function P(){let A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function L(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){let O=n.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function B(A,v){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function $(A,v){let O=n.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(A,v){let O=n.get(A);if(A.version>0&&O.__version!==A.version){it(O,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ot={[no]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ht={[rn]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[ve]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},pt={[Nh]:i.NEVER,[Lh]:i.ALWAYS,[Ch]:i.LESS,[mu]:i.LEQUAL,[Dh]:i.EQUAL,[Ph]:i.GEQUAL,[Fh]:i.GREATER,[zh]:i.NOTEQUAL};function wt(A,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ve||v.magFilter===ha||v.magFilter===Ns||v.magFilter===ri||v.minFilter===ve||v.minFilter===ha||v.minFilter===Ns||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ot[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ot[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ot[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==Ns&&v.minFilter!==ri||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function kt(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",I));let J=v.source,K=d.get(J);K===void 0&&(K={},d.set(J,K));let q=L(v);if(q!==A.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let _t=K[A.__cacheKey];_t!==void 0&&(K[A.__cacheKey].usedTimes--,_t.usedTimes===0&&_(v)),A.__cacheKey=q,A.__webglTexture=K[q].texture}return O}function Y(A,v,O){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let K=kt(A,v),q=v.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+O);let _t=n.get(q);if(q.version!==_t.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let dt=qt.getPrimaries(qt.workingColorSpace),Vt=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Ln||dt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let nt=E(v.image,!1,s.maxTextureSize);nt=Nt(v,nt);let yt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),Ft=x(v.internalFormat,yt,Ct,v.colorSpace,v.isVideoTexture);wt(J,v);let xt,Wt=v.mipmaps,Qt=v.isVideoTexture!==!0,ie=_t.__version===void 0||K===!0,D=q.dataReady,ft=C(v,nt);if(v.isDepthTexture)Ft=V(v.format===Qi,v.type),ie&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,yt,Ct,null));else if(v.isDataTexture)if(Wt.length>0){Qt&&ie&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Wt[0].width,Wt[0].height);for(let Z=0,j=Wt.length;Z<j;Z++)xt=Wt[Z],Qt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Ct,xt.data):e.texImage2D(i.TEXTURE_2D,Z,Ft,xt.width,xt.height,0,yt,Ct,xt.data);v.generateMipmaps=!1}else Qt?(ie&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,yt,Ct,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,yt,Ct,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,Wt[0].width,Wt[0].height,nt.depth);for(let Z=0,j=Wt.length;Z<j;Z++)if(xt=Wt[Z],v.format!==sn)if(yt!==null)if(Qt){if(D)if(v.layerUpdates.size>0){let Mt=Yc(xt.width,xt.height,v.format,v.type);for(let mt of v.layerUpdates){let Lt=xt.data.subarray(mt*Mt/xt.data.BYTES_PER_ELEMENT,(mt+1)*Mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,mt,xt.width,xt.height,1,yt,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,nt.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ft,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,nt.depth,yt,Ct,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ft,xt.width,xt.height,nt.depth,0,yt,Ct,xt.data)}else{Qt&&ie&&e.texStorage2D(i.TEXTURE_2D,ft,Ft,Wt[0].width,Wt[0].height);for(let Z=0,j=Wt.length;Z<j;Z++)xt=Wt[Z],v.format!==sn?yt!==null?Qt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Ct,xt.data):e.texImage2D(i.TEXTURE_2D,Z,Ft,xt.width,xt.height,0,yt,Ct,xt.data)}else if(v.isDataArrayTexture)if(Qt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Ft,nt.width,nt.height,nt.depth),D)if(v.layerUpdates.size>0){let Z=Yc(nt.width,nt.height,v.format,v.type);for(let j of v.layerUpdates){let Mt=nt.data.subarray(j*Z/nt.data.BYTES_PER_ELEMENT,(j+1)*Z/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,yt,Ct,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,yt,Ct,nt.data);else if(v.isData3DTexture)Qt?(ie&&e.texStorage3D(i.TEXTURE_3D,ft,Ft,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,yt,Ct,nt.data);else if(v.isFramebufferTexture){if(ie)if(Qt)e.texStorage2D(i.TEXTURE_2D,ft,Ft,nt.width,nt.height);else{let Z=nt.width,j=nt.height;for(let Mt=0;Mt<ft;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Ft,Z,j,0,yt,Ct,null),Z>>=1,j>>=1}}else if(Wt.length>0){if(Qt&&ie){let Z=Et(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Ft,Z.width,Z.height)}for(let Z=0,j=Wt.length;Z<j;Z++)xt=Wt[Z],Qt?D&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt,Ct,xt):e.texImage2D(i.TEXTURE_2D,Z,Ft,yt,Ct,xt);v.generateMipmaps=!1}else if(Qt){if(ie){let Z=Et(nt);e.texStorage2D(i.TEXTURE_2D,ft,Ft,Z.width,Z.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,yt,Ct,nt);m(v)&&f(J),_t.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function it(A,v,O){if(v.image.length!==6)return;let J=kt(A,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let _t=qt.getPrimaries(qt.workingColorSpace),dt=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),Vt=v.colorSpace===Ln||_t===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!Gt&&!nt?yt[j]=E(v.image[j],!0,s.maxCubemapSize):yt[j]=nt?v.image[j].image:v.image[j],yt[j]=Nt(v,yt[j]);let Ct=yt[0],Ft=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Wt=x(v.internalFormat,Ft,xt,v.colorSpace),Qt=v.isVideoTexture!==!0,ie=q.__version===void 0||J===!0,D=K.dataReady,ft=C(v,Ct);wt(i.TEXTURE_CUBE_MAP,v);let Z;if(Gt){Qt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Ct.width,Ct.height);for(let j=0;j<6;j++){Z=yt[j].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){let mt=Z[Mt];v.format!==sn?Ft!==null?Qt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,mt.width,mt.height,Ft,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,Wt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,mt.width,mt.height,Ft,xt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,Wt,mt.width,mt.height,0,Ft,xt,mt.data)}}}else{if(Z=v.mipmaps,Qt&&ie){Z.length>0&&ft++;let j=Et(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Qt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Ft,xt,yt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,yt[j].width,yt[j].height,0,Ft,xt,yt[j].data);for(let Mt=0;Mt<Z.length;Mt++){let Lt=Z[Mt].image[j].image;Qt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,Lt.width,Lt.height,Ft,xt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,Wt,Lt.width,Lt.height,0,Ft,xt,Lt.data)}}else{Qt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,xt,yt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Wt,Ft,xt,yt[j]);for(let Mt=0;Mt<Z.length;Mt++){let mt=Z[Mt];Qt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,Ft,xt,mt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,Wt,Ft,xt,mt.image[j])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Rt(A,v,O,J,K,q){let _t=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),Vt=x(O.internalFormat,_t,dt,O.colorSpace),Gt=n.get(v),nt=n.get(O);if(nt.__renderTarget=v,!Gt.__hasExternalTextures){let yt=Math.max(1,v.width>>q),Ct=Math.max(1,v.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,Vt,yt,Ct,v.depth,0,_t,dt,null):e.texImage2D(K,q,Vt,yt,Ct,0,_t,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,nt.__webglTexture,0,et(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,nt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let J=v.depthTexture,K=J&&J.isDepthTexture?J.type:null,q=V(v.stencilBuffer,K),_t=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=et(v);vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,A)}else{let J=v.textures;for(let K=0;K<J.length;K++){let q=J[K],_t=r.convert(q.format,q.colorSpace),dt=r.convert(q.type),Vt=x(q.internalFormat,_t,dt,q.colorSpace),Gt=et(v);O&&vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Vt,v.width,v.height):vt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let K=J.__webglTexture,q=et(v);if(v.depthTexture.format===Fi)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Qi)vt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function zt(A){let v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=J}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,A)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),at(v.__webglDepthbuffer[J],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),at(v.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(A,v,O){let J=n.get(A);v!==void 0&&Rt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&zt(A)}function Jt(A){let v=A.texture,O=n.get(A),J=n.get(v);A.addEventListener("dispose",b);let K=A.textures,q=A.isWebGLCubeRenderTarget===!0,_t=K.length>1;if(_t||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let Vt=0;Vt<v.mipmaps.length;Vt++)O.__webglFramebuffer[dt][Vt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_t)for(let dt=0,Vt=K.length;dt<Vt;dt++){let Gt=n.get(K[dt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<K.length;dt++){let Vt=K[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);let Gt=r.convert(Vt.format,Vt.colorSpace),nt=r.convert(Vt.type),yt=x(Vt.internalFormat,Gt,nt,Vt.colorSpace,A.isXRRenderTarget===!0),Ct=et(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),at(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),wt(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Vt=0;Vt<v.mipmaps.length;Vt++)Rt(O.__webglFramebuffer[dt][Vt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Vt);else Rt(O.__webglFramebuffer[dt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let dt=0,Vt=K.length;dt<Vt;dt++){let Gt=K[dt],nt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),wt(i.TEXTURE_2D,Gt),Rt(O.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),wt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Vt=0;Vt<v.mipmaps.length;Vt++)Rt(O.__webglFramebuffer[Vt],A,v,i.COLOR_ATTACHMENT0,dt,Vt);else Rt(O.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&f(dt),e.unbindTexture()}A.depthBuffer&&zt(A)}function X(A){let v=A.textures;for(let O=0,J=v.length;O<J;O++){let K=v[O];if(m(K)){let q=S(A),_t=n.get(K).__webglTexture;e.bindTexture(q,_t),f(q),e.unbindTexture()}}}let st=[],T=[];function It(A){if(A.samples>0){if(vt(A)===!1){let v=A.textures,O=A.width,J=A.height,K=i.COLOR_BUFFER_BIT,q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),dt=v.length>1;if(dt)for(let Vt=0;Vt<v.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Vt=0;Vt<v.length;Vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Vt]);let Gt=n.get(v[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,K,i.NEAREST),l===!0&&(st.length=0,T.length=0,st.push(i.COLOR_ATTACHMENT0+Vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push(q),T.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Vt=0;Vt<v.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Vt]);let Gt=n.get(v[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function et(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Nt(A,v){let O=A.colorSpace,J=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Zn&&O!==Ln&&(qt.getTransfer(O)===ne?(J!==sn||K!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Dt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=vt}function Ug(i,t){function e(n,s=Ln){let r,a=qt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===sn)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===hu)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===du)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===fu)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===lr||n===cr||n===ur||n===hr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===go||n===Mo||n===Eo||n===Vo||n===vo||n===yo||n===xo||n===Ro||n===_o||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Ao||n===To)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===Io||n===bo||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wo=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,n),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
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

}`,Yo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:Cg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jo=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,E=new Yo,m=e.getContextAttributes(),f=null,S=null,x=[],V=[],C=new ct,I=null,b=new De;b.viewport=new de;let U=new De;U.viewport=new de;let _=[b,U],y=new Wo,w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=x[Y];return it===void 0&&(it=new cs,x[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=x[Y];return it===void 0&&(it=new cs,x[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=x[Y];return it===void 0&&(it=new cs,x[Y]=it),it.getHandSpace()};function P(Y){let it=V.indexOf(Y.inputSource);if(it===-1)return;let Rt=x[it];Rt!==void 0&&(Rt.update(Y.inputSource,Y.frame,c||a),Rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<x.length;Y++){let it=V[Y];it!==null&&(V[Y]=null,x[Y].disconnect(it))}w=null,H=null,E.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,S=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",L),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ze(p.framebufferWidth,p.framebufferHeight,{format:sn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Rt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Qi:Fi,Rt=m.stencil?ki:ai);let Ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ze(d.textureWidth,d.textureHeight,{format:sn,type:An,depthTexture:new Ir(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function W(Y){for(let it=0;it<Y.removed.length;it++){let Rt=Y.removed[it],at=V.indexOf(Rt);at>=0&&(V[at]=null,x[at].disconnect(Rt))}for(let it=0;it<Y.added.length;it++){let Rt=Y.added[it],at=V.indexOf(Rt);if(at===-1){for(let zt=0;zt<x.length;zt++)if(zt>=V.length){V.push(Rt),at=zt;break}else if(V[zt]===null){V[zt]=Rt,at=zt;break}if(at===-1)break}let Ut=x[at];Ut&&Ut.connect(Rt)}}let B=new N,$=new N;function G(Y,it,Rt){B.setFromMatrixPosition(it.matrixWorld),$.setFromMatrixPosition(Rt.matrixWorld);let at=B.distanceTo($),Ut=it.projectionMatrix.elements,zt=Rt.projectionMatrix.elements,Dt=Ut[14]/(Ut[10]-1),Jt=Ut[14]/(Ut[10]+1),X=(Ut[9]+1)/Ut[5],st=(Ut[9]-1)/Ut[5],T=(Ut[8]-1)/Ut[0],It=(zt[8]+1)/zt[0],et=Dt*T,vt=Dt*It,lt=at/(-T+It),Nt=lt*-T;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Et=Dt+lt,A=Jt+lt,v=et-Nt,O=vt+(at-Nt),J=X*Jt/A*Et,K=st*Jt/A*Et;Y.projectionMatrix.makePerspective(v,O,J,K,Et,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,Rt=Y.far;E.texture!==null&&(E.depthNear>0&&(it=E.depthNear),E.depthFar>0&&(Rt=E.depthFar)),y.near=U.near=b.near=it,y.far=U.far=b.far=Rt,(w!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,H=y.far),b.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|U.layers.mask;let at=Y.parent,Ut=y.cameras;ot(y,at);for(let zt=0;zt<Ut.length;zt++)ot(Ut[zt],at);Ut.length===2?G(y,b,U):y.projectionMatrix.copy(b.projectionMatrix),ht(Y,y,at)};function ht(Y,it,Rt){Rt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=No*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(y)};let pt=null;function wt(Y,it){if(u=it.getViewerPose(c||a),g=it,u!==null){let Rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let at=!1;Rt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let zt=0;zt<Rt.length;zt++){let Dt=Rt[zt],Jt=null;if(p!==null)Jt=p.getViewport(Dt);else{let st=h.getViewSubImage(d,Dt);Jt=st.viewport,zt===0&&(t.setRenderTargetTextures(S,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(S))}let X=_[zt];X===void 0&&(X=new De,X.layers.enable(zt),X.viewport=new de,_[zt]=X),X.matrix.fromArray(Dt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Dt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),zt===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(X)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let zt=h.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&E.init(t,zt,s.renderState)}}for(let Rt=0;Rt<x.length;Rt++){let at=V[Rt],Ut=x[Rt];at!==null&&Ut!==void 0&&Ut.update(at,it,c||a)}pt&&pt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let kt=new Vu;kt.setAnimationLoop(wt),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}},ti=new Tn,Fg=new me;function zg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Eu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,x,V){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,V)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),x=S.envMap,V=S.envMapRotation;x&&(m.envMap.value=x,ti.copy(V),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(ti)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let V=x.program;n.uniformBlockBinding(S,V)}function c(S,x){let V=s[S.id];V===void 0&&(g(S),V=u(S),s[S.id]=V,S.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(S,C);let I=t.render.frame;r[S.id]!==I&&(d(S),r[S.id]=I)}function u(S){let x=h();S.__bindingPointIndex=x;let V=i.createBuffer(),C=S.__size,I=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,V),i.bufferData(i.UNIFORM_BUFFER,C,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,V),V}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let x=s[S.id],V=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let I=0,b=V.length;I<b;I++){let U=Array.isArray(V[I])?V[I]:[V[I]];for(let _=0,y=U.length;_<y;_++){let w=U[_];if(p(w,I,_,C)===!0){let H=w.__offset,P=Array.isArray(w.value)?w.value:[w.value],L=0;for(let W=0;W<P.length;W++){let B=P[W],$=E(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,H+L,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,V,C){let I=S.value,b=x+"_"+V;if(C[b]===void 0)return typeof I=="number"||typeof I=="boolean"?C[b]=I:C[b]=I.clone(),!0;{let U=C[b];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return C[b]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(S){let x=S.uniforms,V=0,C=16;for(let b=0,U=x.length;b<U;b++){let _=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,w=_.length;y<w;y++){let H=_[y],P=Array.isArray(H.value)?H.value:[H.value];for(let L=0,W=P.length;L<W;L++){let B=P[L],$=E(B),G=V%C,ot=G%$.boundary,ht=G+ot;V+=ot,ht!==0&&C-ht<$.storage&&(V+=C-ht),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=V,V+=$.storage}}}let I=V%C;return I>0&&(V+=C-I),S.__size=V,S.__cache={},this}function E(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let V=a.indexOf(x.__bindingPointIndex);a.splice(V,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var br=class{constructor(t={}){let{canvas:e=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=kn,this.toneMappingExposure=1;let V=this,C=!1,I=0,b=0,U=null,_=-1,y=null,w=new de,H=new de,P=null,L=new Yt(0),W=0,B=e.width,$=e.height,G=1,ot=null,ht=null,pt=new de(0,0,B,$),wt=new de(0,0,B,$),kt=!1,Y=new Ar,it=!1,Rt=!1,at=new me,Ut=new me,zt=new N,Dt=new de,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function st(){return U===null?G:1}let T=n;function It(R,F){return e.getContext(R,F)}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),T===null){let F="webgl2";if(T=It(F,R),T===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let et,vt,lt,Nt,Et,A,v,O,J,K,q,_t,dt,Vt,Gt,nt,yt,Ct,Ft,xt,Wt,Qt,ie,D;function ft(){et=new $p(T),et.init(),Qt=new Ug(T,et),vt=new Yp(T,et,t,Qt),lt=new Ig(T,et),vt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Nt=new nm(T),Et=new mg,A=new wg(T,et,lt,Et,vt,Qt,Nt),v=new qp(V),O=new Kp(V),J=new ld(T),ie=new Zp(T,J),K=new tm(T,J,Nt,ie),q=new sm(T,K,J,Nt),Ft=new im(T,vt,A),nt=new Jp(Et),_t=new pg(V,v,O,et,vt,ie,nt),dt=new zg(V,Et),Vt=new Mg,Gt=new Rg(et),Ct=new Gp(V,v,O,lt,q,p,l),yt=new Ag(V,q,vt),D=new Pg(T,Nt,vt,lt),xt=new Wp(T,et,Nt),Wt=new em(T,et,Nt),Nt.programs=_t.programs,V.capabilities=vt,V.extensions=et,V.properties=Et,V.renderLists=Vt,V.shadowMap=yt,V.state=lt,V.info=Nt}ft();let Z=new Jo(V,T);this.xr=Z,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let R=et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(B,$,!1))},this.getSize=function(R){return R.set(B,$)},this.setSize=function(R,F,k=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,$=F,e.width=Math.floor(R*G),e.height=Math.floor(F*G),k===!0&&(e.style.width=R+"px",e.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(B*G,$*G).floor()},this.setDrawingBufferSize=function(R,F,k){B=R,$=F,G=k,e.width=Math.floor(R*k),e.height=Math.floor(F*k),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,F,k,Q){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,F,k,Q),lt.viewport(w.copy(pt).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(wt)},this.setScissor=function(R,F,k,Q){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,F,k,Q),lt.scissor(H.copy(wt).multiplyScalar(G).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(R){lt.setScissorTest(kt=R)},this.setOpaqueSort=function(R){ot=R},this.setTransparentSort=function(R){ht=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(R=!0,F=!0,k=!0){let Q=0;if(R){let z=!1;if(U!==null){let rt=U.texture.format;z=rt===Vl||rt===El||rt===Ml}if(z){let rt=U.texture.type,gt=rt===An||rt===ai||rt===fs||rt===ki||rt===ml||rt===gl,St=Ct.getClearColor(),At=Ct.getClearAlpha(),Pt=St.r,Ot=St.g,Tt=St.b;gt?(g[0]=Pt,g[1]=Ot,g[2]=Tt,g[3]=At,T.clearBufferuiv(T.COLOR,0,g)):(E[0]=Pt,E[1]=Ot,E[2]=Tt,E[3]=At,T.clearBufferiv(T.COLOR,0,E))}else Q|=T.COLOR_BUFFER_BIT}F&&(Q|=T.DEPTH_BUFFER_BIT),k&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Vt.dispose(),Gt.dispose(),Et.dispose(),v.dispose(),O.dispose(),q.dispose(),ie.dispose(),D.dispose(),_t.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bl),Z.removeEventListener("sessionend",kl),Jn.stop()};function j(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=Nt.autoReset,F=yt.enabled,k=yt.autoUpdate,Q=yt.needsUpdate,z=yt.type;ft(),Nt.autoReset=R,yt.enabled=F,yt.autoUpdate=k,yt.needsUpdate=Q,yt.type=z}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Lt(R){let F=R.target;F.removeEventListener("dispose",Lt),pe(F)}function pe(R){Te(R),Et.remove(R)}function Te(R){let F=Et.get(R).programs;F!==void 0&&(F.forEach(function(k){_t.releaseProgram(k)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,k,Q,z,rt){F===null&&(F=Jt);let gt=z.isMesh&&z.matrixWorld.determinant()<0,St=Ju(R,F,k,Q,z);lt.setMaterial(Q,gt);let At=k.index,Pt=1;if(Q.wireframe===!0){if(At=K.getWireframeAttribute(k),At===void 0)return;Pt=2}let Ot=k.drawRange,Tt=k.attributes.position,jt=Ot.start*Pt,se=(Ot.start+Ot.count)*Pt;rt!==null&&(jt=Math.max(jt,rt.start*Pt),se=Math.min(se,(rt.start+rt.count)*Pt)),At!==null?(jt=Math.max(jt,0),se=Math.min(se,At.count)):Tt!=null&&(jt=Math.max(jt,0),se=Math.min(se,Tt.count));let le=se-jt;if(le<0||le===1/0)return;ie.setup(z,Q,St,k,At);let Le,Kt=xt;if(At!==null&&(Le=J.get(At),Kt=Wt,Kt.setIndex(Le)),z.isMesh)Q.wireframe===!0?(lt.setLineWidth(Q.wireframeLinewidth*st()),Kt.setMode(T.LINES)):Kt.setMode(T.TRIANGLES);else if(z.isLine){let bt=Q.linewidth;bt===void 0&&(bt=1),lt.setLineWidth(bt*st()),z.isLineSegments?Kt.setMode(T.LINES):z.isLineLoop?Kt.setMode(T.LINE_LOOP):Kt.setMode(T.LINE_STRIP)}else z.isPoints?Kt.setMode(T.POINTS):z.isSprite&&Kt.setMode(T.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let bt=z._multiDrawStarts,pn=z._multiDrawCounts,$t=z._multiDrawCount,$e=At?J.get(At).bytesPerElement:1,Mi=Et.get(Q).currentProgram.getUniforms();for(let ke=0;ke<$t;ke++)Mi.setValue(T,"_gl_DrawID",ke),Kt.render(bt[ke]/$e,pn[ke])}else if(z.isInstancedMesh)Kt.renderInstances(jt,le,z.count);else if(k.isInstancedBufferGeometry){let bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pn=Math.min(k.instanceCount,bt);Kt.renderInstances(jt,le,pn)}else Kt.render(jt,le)};function te(R,F,k){R.transparent===!0&&R.side===xn&&R.forceSinglePass===!1?(R.side=Be,R.needsUpdate=!0,Us(R,F,k),R.side=Qn,R.needsUpdate=!0,Us(R,F,k),R.side=xn):Us(R,F,k)}this.compile=function(R,F,k=null){k===null&&(k=R),f=Gt.get(k),f.init(F),x.push(f),k.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),R!==k&&R.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let Q=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let rt=z.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){let St=rt[gt];te(St,k,z),Q.add(St)}else te(rt,k,z),Q.add(rt)}),x.pop(),f=null,Q},this.compileAsync=function(R,F,k=null){let Q=this.compile(R,F,k);return new Promise(z=>{function rt(){if(Q.forEach(function(gt){Et.get(gt).currentProgram.isReady()&&Q.delete(gt)}),Q.size===0){z(R);return}setTimeout(rt,10)}et.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ke=null;function fn(R){Ke&&Ke(R)}function Bl(){Jn.stop()}function kl(){Jn.start()}let Jn=new Vu;Jn.setAnimationLoop(fn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(R){Ke=R,Z.setAnimationLoop(R),R===null?Jn.stop():Jn.start()},Z.addEventListener("sessionstart",Bl),Z.addEventListener("sessionend",kl),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,F,U),f=Gt.get(R,x.length),f.init(F),x.push(f),Ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ut),Rt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,Rt),m=Vt.get(R,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){let rt=V.xr.getDepthSensingMesh();rt!==null&&ua(rt,F,-1/0,V.sortObjects)}ua(R,F,0,V.sortObjects),m.finish(),V.sortObjects===!0&&m.sort(ot,ht),X=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,X&&Ct.addToRenderList(m,R),this.info.render.frame++,it===!0&&nt.beginShadows();let k=f.state.shadowsArray;yt.render(k,R,F),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,z=m.transmissive;if(f.setupLights(),F.isArrayCamera){let rt=F.cameras;if(z.length>0)for(let gt=0,St=rt.length;gt<St;gt++){let At=rt[gt];Hl(Q,z,R,At)}X&&Ct.render(R);for(let gt=0,St=rt.length;gt<St;gt++){let At=rt[gt];Ql(m,R,At,At.viewport)}}else z.length>0&&Hl(Q,z,R,F),X&&Ct.render(R),Ql(m,R,F);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(V,R,F),ie.resetDefaultState(),_=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],it===!0&&nt.setGlobalState(V.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ua(R,F,k,Q){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)k=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){Q&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);let gt=q.update(R),St=R.material;St.visible&&m.push(R,gt,St,k,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){let gt=q.update(R),St=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(St)){let At=gt.groups;for(let Pt=0,Ot=At.length;Pt<Ot;Pt++){let Tt=At[Pt],jt=St[Tt.materialIndex];jt&&jt.visible&&m.push(R,gt,jt,k,Dt.z,Tt)}}else St.visible&&m.push(R,gt,St,k,Dt.z,null)}}let rt=R.children;for(let gt=0,St=rt.length;gt<St;gt++)ua(rt[gt],F,k,Q)}function Ql(R,F,k,Q){let z=R.opaque,rt=R.transmissive,gt=R.transparent;f.setupLightsView(k),it===!0&&nt.setGlobalState(V.clippingPlanes,k),Q&&lt.viewport(w.copy(Q)),z.length>0&&ws(z,F,k),rt.length>0&&ws(rt,F,k),gt.length>0&&ws(gt,F,k),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Hl(R,F,k,Q){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new Ze(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Rs:An,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let rt=f.state.transmissionRenderTarget[Q.id],gt=Q.viewport||w;rt.setSize(gt.z,gt.w);let St=V.getRenderTarget();V.setRenderTarget(rt),V.getClearColor(L),W=V.getClearAlpha(),W<1&&V.setClearColor(16777215,.5),V.clear(),X&&Ct.render(k);let At=V.toneMapping;V.toneMapping=kn;let Pt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),it===!0&&nt.setGlobalState(V.clippingPlanes,Q),ws(R,k,Q),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Tt=0,jt=F.length;Tt<jt;Tt++){let se=F[Tt],le=se.object,Le=se.geometry,Kt=se.material,bt=se.group;if(Kt.side===xn&&le.layers.test(Q.layers)){let pn=Kt.side;Kt.side=Be,Kt.needsUpdate=!0,Gl(le,k,Q,Le,Kt,bt),Kt.side=pn,Kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}V.setRenderTarget(St),V.setClearColor(L,W),Pt!==void 0&&(Q.viewport=Pt),V.toneMapping=At}function ws(R,F,k){let Q=F.isScene===!0?F.overrideMaterial:null;for(let z=0,rt=R.length;z<rt;z++){let gt=R[z],St=gt.object,At=gt.geometry,Pt=Q===null?gt.material:Q,Ot=gt.group;St.layers.test(k.layers)&&Gl(St,F,k,At,Pt,Ot)}}function Gl(R,F,k,Q,z,rt){R.onBeforeRender(V,F,k,Q,z,rt),R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(V,F,k,Q,R,rt),z.transparent===!0&&z.side===xn&&z.forceSinglePass===!1?(z.side=Be,z.needsUpdate=!0,V.renderBufferDirect(k,F,Q,z,R,rt),z.side=Qn,z.needsUpdate=!0,V.renderBufferDirect(k,F,Q,z,R,rt),z.side=xn):V.renderBufferDirect(k,F,Q,z,R,rt),R.onAfterRender(V,F,k,Q,z,rt)}function Us(R,F,k){F.isScene!==!0&&(F=Jt);let Q=Et.get(R),z=f.state.lights,rt=f.state.shadowsArray,gt=z.state.version,St=_t.getParameters(R,z.state,rt,F,k),At=_t.getProgramCacheKey(St),Pt=Q.programs;Q.environment=R.isMeshStandardMaterial?F.environment:null,Q.fog=F.fog,Q.envMap=(R.isMeshStandardMaterial?O:v).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Pt===void 0&&(R.addEventListener("dispose",Lt),Pt=new Map,Q.programs=Pt);let Ot=Pt.get(At);if(Ot!==void 0){if(Q.currentProgram===Ot&&Q.lightsStateVersion===gt)return Wl(R,St),Ot}else St.uniforms=_t.getUniforms(R),R.onBeforeCompile(St,V),Ot=_t.acquireProgram(St,At),Pt.set(At,Ot),Q.uniforms=St.uniforms;let Tt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Wl(R,St),Q.needsLights=ju(R),Q.lightsStateVersion=gt,Q.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.directionalShadowMap.value=z.state.directionalShadowMap,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotShadowMap.value=z.state.spotShadowMap,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMap.value=z.state.pointShadowMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),Q.currentProgram=Ot,Q.uniformsList=null,Ot}function Zl(R){if(R.uniformsList===null){let F=R.currentProgram.getUniforms();R.uniformsList=Pi.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Wl(R,F){let k=Et.get(R);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Ju(R,F,k,Q,z){F.isScene!==!0&&(F=Jt),A.resetTextureUnits();let rt=F.fog,gt=Q.isMeshStandardMaterial?F.environment:null,St=U===null?V.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zn,At=(Q.isMeshStandardMaterial?O:v).get(Q.envMap||gt),Pt=Q.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Tt=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color,le=kn;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=V.toneMapping);let Le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=Le!==void 0?Le.length:0,bt=Et.get(Q),pn=f.state.lights;if(it===!0&&(Rt===!0||R!==y)){let We=R===y&&Q.id===_;nt.setState(Q,R,We)}let $t=!1;Q.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==pn.state.version||bt.outputColorSpace!==St||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==At||Q.fog===!0&&bt.fog!==rt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Ot||bt.morphTargets!==Tt||bt.morphNormals!==jt||bt.morphColors!==se||bt.toneMapping!==le||bt.morphTargetsCount!==Kt)&&($t=!0):($t=!0,bt.__version=Q.version);let $e=bt.currentProgram;$t===!0&&($e=Us(Q,F,z));let Mi=!1,ke=!1,$i=!1,ce=$e.getUniforms(),ln=bt.uniforms;if(lt.useProgram($e.program)&&(Mi=!0,ke=!0,$i=!0),Q.id!==_&&(_=Q.id,ke=!0),Mi||y!==R){lt.buffers.depth.getReversed()?(at.copy(R.projectionMatrix),Qh(at),Hh(at),ce.setValue(T,"projectionMatrix",at)):ce.setValue(T,"projectionMatrix",R.projectionMatrix),ce.setValue(T,"viewMatrix",R.matrixWorldInverse);let wn=ce.map.cameraPosition;wn!==void 0&&wn.setValue(T,zt.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&ce.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ce.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,ke=!0,$i=!0)}if(z.isSkinnedMesh){ce.setOptional(T,z,"bindMatrix"),ce.setOptional(T,z,"bindMatrixInverse");let We=z.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ce.setValue(T,"boneTexture",We.boneTexture,A))}z.isBatchedMesh&&(ce.setOptional(T,z,"batchingTexture"),ce.setValue(T,"batchingTexture",z._matricesTexture,A),ce.setOptional(T,z,"batchingIdTexture"),ce.setValue(T,"batchingIdTexture",z._indirectTexture,A),ce.setOptional(T,z,"batchingColorTexture"),z._colorsTexture!==null&&ce.setValue(T,"batchingColorTexture",z._colorsTexture,A));let ts=k.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Ft.update(z,k,$e),(ke||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,ce.setValue(T,"receiveShadow",z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ln.envMap.value=At,ln.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&F.environment!==null&&(ln.envMapIntensity.value=F.environmentIntensity),ke&&(ce.setValue(T,"toneMappingExposure",V.toneMappingExposure),bt.needsLights&&qu(ln,$i),rt&&Q.fog===!0&&dt.refreshFogUniforms(ln,rt),dt.refreshMaterialUniforms(ln,Q,G,$,f.state.transmissionRenderTarget[R.id]),Pi.upload(T,Zl(bt),ln,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Pi.upload(T,Zl(bt),ln,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ce.setValue(T,"center",z.center),ce.setValue(T,"modelViewMatrix",z.modelViewMatrix),ce.setValue(T,"normalMatrix",z.normalMatrix),ce.setValue(T,"modelMatrix",z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let We=Q.uniformsGroups;for(let wn=0,Un=We.length;wn<Un;wn++){let Yl=We[wn];D.update(Yl,$e),D.bind(Yl,$e)}}return $e}function qu(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function ju(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,F,k){Et.get(R.texture).__webglTexture=F,Et.get(R.depthTexture).__webglTexture=k;let Q=Et.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=k===void 0,Q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,F){let k=Et.get(R);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,k=0){U=R,I=F,b=k;let Q=!0,z=null,rt=!1,gt=!1;if(R){let At=Et.get(R);if(At.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(At.__hasExternalTextures)A.rebindTextures(R,Et.get(R.texture).__webglTexture,Et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Tt=R.depthTexture;if(At.__boundDepthTexture!==Tt){if(Tt!==null&&Et.has(Tt)&&(R.width!==Tt.image.width||R.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}let Pt=R.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(gt=!0);let Ot=Et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?z=Ot[F][k]:z=Ot[F],rt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?z=Et.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[k]:z=Ot,w.copy(R.viewport),H.copy(R.scissor),P=R.scissorTest}else w.copy(pt).multiplyScalar(G).floor(),H.copy(wt).multiplyScalar(G).floor(),P=kt;if(lt.bindFramebuffer(T.FRAMEBUFFER,z)&&Q&&lt.drawBuffers(R,z),lt.viewport(w),lt.scissor(H),lt.setScissorTest(P),rt){let At=Et.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,k)}else if(gt){let At=Et.get(R.texture),Pt=F||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,k||0,Pt)}_=-1},this.readRenderTargetPixels=function(R,F,k,Q,z,rt,gt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){lt.bindFramebuffer(T.FRAMEBUFFER,St);try{let At=R.texture,Pt=At.format,Ot=At.type;if(!vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-Q&&k>=0&&k<=R.height-z&&T.readPixels(F,k,Q,z,Qt.convert(Pt),Qt.convert(Ot),rt)}finally{let At=U!==null?Et.get(U).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(R,F,k,Q,z,rt,gt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){let At=R.texture,Pt=At.format,Ot=At.type;if(!vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=R.width-Q&&k>=0&&k<=R.height-z){lt.bindFramebuffer(T.FRAMEBUFFER,St);let Tt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.bufferData(T.PIXEL_PACK_BUFFER,rt.byteLength,T.STREAM_READ),T.readPixels(F,k,Q,z,Qt.convert(Pt),Qt.convert(Ot),0);let jt=U!==null?Et.get(U).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,jt);let se=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await kh(T,se,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,rt),T.deleteBuffer(Tt),T.deleteSync(se),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,F=null,k=0){R.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,R=arguments[1]);let Q=Math.pow(2,-k),z=Math.floor(R.image.width*Q),rt=Math.floor(R.image.height*Q),gt=F!==null?F.x:0,St=F!==null?F.y:0;A.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,gt,St,z,rt),lt.unbindTexture()},this.copyTextureToTexture=function(R,F,k=null,Q=null,z=0){R.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],F=arguments[2],z=arguments[3]||0,k=null);let rt,gt,St,At,Pt,Ot,Tt,jt,se,le=R.isCompressedTexture?R.mipmaps[z]:R.image;k!==null?(rt=k.max.x-k.min.x,gt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,At=k.min.x,Pt=k.min.y,Ot=k.isBox3?k.min.z:0):(rt=le.width,gt=le.height,St=le.depth||1,At=0,Pt=0,Ot=0),Q!==null?(Tt=Q.x,jt=Q.y,se=Q.z):(Tt=0,jt=0,se=0);let Le=Qt.convert(F.format),Kt=Qt.convert(F.type),bt;F.isData3DTexture?(A.setTexture3D(F,0),bt=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),bt=T.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),bt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);let pn=T.getParameter(T.UNPACK_ROW_LENGTH),$t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),$e=T.getParameter(T.UNPACK_SKIP_PIXELS),Mi=T.getParameter(T.UNPACK_SKIP_ROWS),ke=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ot);let $i=R.isDataArrayTexture||R.isData3DTexture,ce=F.isDataArrayTexture||F.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let ln=Et.get(R),ts=Et.get(F),We=Et.get(ln.__renderTarget),wn=Et.get(ts.__renderTarget);lt.bindFramebuffer(T.READ_FRAMEBUFFER,We.__webglFramebuffer),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Un=0;Un<St;Un++)$i&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Et.get(R).__webglTexture,z,Ot+Un),R.isDepthTexture?(ce&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Et.get(F).__webglTexture,z,se+Un),T.blitFramebuffer(At,Pt,rt,gt,Tt,jt,rt,gt,T.DEPTH_BUFFER_BIT,T.NEAREST)):ce?T.copyTexSubImage3D(bt,z,Tt,jt,se+Un,At,Pt,rt,gt):T.copyTexSubImage2D(bt,z,Tt,jt,se+Un,At,Pt,rt,gt);lt.bindFramebuffer(T.READ_FRAMEBUFFER,null),lt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ce?R.isDataTexture||R.isData3DTexture?T.texSubImage3D(bt,z,Tt,jt,se,rt,gt,St,Le,Kt,le.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(bt,z,Tt,jt,se,rt,gt,St,Le,le.data):T.texSubImage3D(bt,z,Tt,jt,se,rt,gt,St,Le,Kt,le):R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,z,Tt,jt,rt,gt,Le,Kt,le.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,z,Tt,jt,le.width,le.height,Le,le.data):T.texSubImage2D(T.TEXTURE_2D,z,Tt,jt,rt,gt,Le,Kt,le);T.pixelStorei(T.UNPACK_ROW_LENGTH,pn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,$e),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke),z===0&&F.generateMipmaps&&T.generateMipmap(bt),lt.unbindTexture()},this.copyTextureToTexture3D=function(R,F,k=null,Q=null,z=0){return R.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],F=arguments[3],z=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,F,k,Q,z)},this.initRenderTarget=function(R){Et.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),lt.unbindTexture()},this.resetState=function(){I=0,b=0,U=null,lt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var hi=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Zi=class extends li{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wr=new N,Ur=new N,Jc=new me,as=new Vr,$s=new Hi,Ba=new N,qc=new N,Wi=class extends je{constructor(t=new Ne,e=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wr.distanceTo(Ur);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;Jc.copy(s).invert(),as.copy(t.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let E=p,m=g-1;E<m;E+=c){let f=u.getX(E),S=u.getX(E+1),x=tr(this,t,as,l,f,S);x&&e.push(x)}if(this.isLineLoop){let E=u.getX(g-1),m=u.getX(p),f=tr(this,t,as,l,E,m);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let E=p,m=g-1;E<m;E+=c){let f=tr(this,t,as,l,E,E+1);f&&e.push(f)}if(this.isLineLoop){let E=tr(this,t,as,l,g-1,p);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(wr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),e.distanceSqToSegment(wr,Ur,Ba,qc)>n)return;Ba.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ba);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var jc=new N,Xc=new N,Nr=class extends Wi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jc.fromBufferAttribute(e,s),Xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(Xc);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Cr=class extends Wi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var ms=class extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],a=[],o=new N,l=new me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gs=class extends Xe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qo=class extends gs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var er=new N,ka=new yl,Qa=new yl,Ha=new yl,Ms=class extends Xe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),c=er);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),ka.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,E,m),Qa.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,E,m),Ha.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,E,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Qa.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ha.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ka.calc(l),Qa.calc(l),Ha.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Lg(i,t){let e=1-i;return e*e*t}function Og(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function us(i,t,e,n){return Lg(i,t)+Og(i,e)+Bg(i,n)}function kg(i,t){let e=1-i;return e*e*e*t}function Qg(i,t){let e=1-i;return 3*e*e*i*t}function Hg(i,t){return 3*(1-i)*i*i*t}function Gg(i,t){return i*i*i*t}function hs(i,t,e,n,s){return kg(i,t)+Qg(i,e)+Hg(i,n)+Gg(i,s)}var Dr=class extends Xe{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jo=class extends Xe{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,s.x,r.x,a.x,o.x),hs(t,s.y,r.y,a.y,o.y),hs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Xe{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends Xe{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends Xe{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Xe{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(us(t,s.x,r.x,a.x),us(t,s.y,r.y,a.y),us(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Kc(o,l.x,c.x,u.x,h.x),Kc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},$o=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:Ms,CubicBezierCurve:Dr,CubicBezierCurve3:jo,EllipseCurve:gs,LineCurve:Fr,LineCurve3:Xo,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Ko,SplineCurve:Pr}),tl=class extends Xe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new $o[s.type]().fromJSON(s))}return this}},Lr=class extends tl{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zr(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new gs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Or=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,E=[],m=n/2,f=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function S(){let V=new N,C=new N,I=0,b=(e-t)/n;for(let U=0;U<=r;U++){let _=[],y=U/r,w=y*(e-t)+t;for(let H=0;H<=s;H++){let P=H/s,L=P*l+o,W=Math.sin(L),B=Math.cos(L);C.x=w*W,C.y=-y*n+m,C.z=w*B,h.push(C.x,C.y,C.z),V.set(W,b,B).normalize(),d.push(V.x,V.y,V.z),p.push(P,1-y),_.push(g++)}E.push(_)}for(let U=0;U<s;U++)for(let _=0;_<r;_++){let y=E[_][U],w=E[_+1][U],H=E[_+1][U+1],P=E[_][U+1];(t>0||_!==0)&&(u.push(y,w,P),I+=3),(e>0||_!==r-1)&&(u.push(w,H,P),I+=3)}c.addGroup(f,I,0),f+=I}function x(V){let C=g,I=new ct,b=new N,U=0,_=V===!0?t:e,y=V===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let w=g;for(let H=0;H<=s;H++){let L=H/s*l+o,W=Math.cos(L),B=Math.sin(L);b.x=_*B,b.y=m*y,b.z=_*W,h.push(b.x,b.y,b.z),d.push(0,y,0),I.x=W*.5+.5,I.y=B*.5*y+.5,p.push(I.x,I.y),g++}for(let H=0;H<s;H++){let P=C+H,L=w+H;V===!0?u.push(L,L+1,P):u.push(L+1,L,P),U+=3}c.addGroup(f,U,V===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var el=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let x=new N,V=new N,C=new N;for(let I=0;I<e.length;I+=3)p(e[I+0],x),p(e[I+1],V),p(e[I+2],C),l(x,V,C,S)}function l(S,x,V,C){let I=C+1,b=[];for(let U=0;U<=I;U++){b[U]=[];let _=S.clone().lerp(V,U/I),y=x.clone().lerp(V,U/I),w=I-U;for(let H=0;H<=w;H++)H===0&&U===I?b[U][H]=_:b[U][H]=_.clone().lerp(y,H/w)}for(let U=0;U<I;U++)for(let _=0;_<2*(I-U)-1;_++){let y=Math.floor(_/2);_%2===0?(d(b[U][y+1]),d(b[U+1][y]),d(b[U][y])):(d(b[U][y+1]),d(b[U+1][y+1]),d(b[U+1][y]))}}function c(S){let x=new N;for(let V=0;V<r.length;V+=3)x.x=r[V+0],x.y=r[V+1],x.z=r[V+2],x.normalize().multiplyScalar(S),r[V+0]=x.x,r[V+1]=x.y,r[V+2]=x.z}function u(){let S=new N;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];let V=m(S)/2/Math.PI+.5,C=f(S)/Math.PI+.5;a.push(V,1-C)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){let x=a[S+0],V=a[S+2],C=a[S+4],I=Math.max(x,V,C),b=Math.min(x,V,C);I>.9&&b<.1&&(x<.2&&(a[S+0]+=1),V<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,x){let V=S*3;x.x=t[V+0],x.y=t[V+1],x.z=t[V+2]}function g(){let S=new N,x=new N,V=new N,C=new N,I=new ct,b=new ct,U=new ct;for(let _=0,y=0;_<r.length;_+=9,y+=6){S.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),V.set(r[_+6],r[_+7],r[_+8]),I.set(a[y+0],a[y+1]),b.set(a[y+2],a[y+3]),U.set(a[y+4],a[y+5]),C.copy(S).add(x).add(V).divideScalar(3);let w=m(C);E(I,y+0,S,w),E(b,y+2,x,w),E(U,y+4,V,w)}}function E(S,x,V,C){C<0&&S.x===1&&(a[x]=S.x-1),V.x===0&&V.z===0&&(a[x]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var nr=new N,ir=new N,Ga=new N,sr=new On,Br=class extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(fr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:E,b:m,c:f}=sr;if(E.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),sr.getNormal(Ga),h[0]=`${Math.round(E.x*s)},${Math.round(E.y*s)},${Math.round(E.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){let x=(S+1)%3,V=h[S],C=h[x],I=sr[u[S]],b=sr[u[x]],U=`${V}_${C}`,_=`${C}_${V}`;_ in d&&d[_]?(Ga.dot(d[_].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(b.x,b.y,b.z)),d[_]=null):U in d||(d[U]={index0:c[S],index1:c[x],normal:Ga.clone()})}}for(let g in d)if(d[g]){let{index0:E,index1:m}=d[g];nr.fromBufferAttribute(o,E),ir.fromBufferAttribute(o,m),p.push(nr.x,nr.y,nr.z),p.push(ir.x,ir.y,ir.z)}this.setAttribute("position",new re(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},di=class extends Lr{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lr().fromJSON(s))}return this}},Zg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_u(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,p;if(n&&(r=jg(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return Es(r,a,e,o,l,p,0),a}};function _u(i,t,e,n,s){let r,a;if(s===oM(i,t,e,n)>0)for(r=t;r<e;r+=n)a=$c(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=$c(r,i[r],i[r+1],a);return a&&Wr(a,a.next)&&(vs(a),a=a.next),a}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wr(e,e.next)||fe(e.prev,e,e.next)===0)){if(vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,s,r,a){if(!i)return;!a&&r&&eM(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Yg(i,n,s,r):Wg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),vs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Jg(fi(i),t,e),Es(i,t,e,n,s,r,2)):a===2&&qg(i,t,e,n,s,r):Es(fi(i),t,e,n,s,r,1);break}}}function Wg(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Ci(s,o,r,l,a,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,E=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=nl(p,g,t,e,n),S=nl(E,m,t,e,n),x=i.prevZ,V=i.nextZ;for(;x&&x.z>=f&&V&&V.z<=S;){if(x.x>=p&&x.x<=E&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ci(o,u,l,h,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0||(x=x.prevZ,V.x>=p&&V.x<=E&&V.y>=g&&V.y<=m&&V!==s&&V!==a&&Ci(o,u,l,h,c,d,V.x,V.y)&&fe(V.prev,V,V.next)>=0))return!1;V=V.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=E&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ci(o,u,l,h,c,d,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;V&&V.z<=S;){if(V.x>=p&&V.x<=E&&V.y>=g&&V.y<=m&&V!==s&&V!==a&&Ci(o,u,l,h,c,d,V.x,V.y)&&fe(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function Jg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Wr(s,r)&&Su(s,n,n.next,r)&&Vs(s,r)&&Vs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vs(n),vs(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function qg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sM(a,o)){let l=Au(a,o);a=fi(a,a.next),l=fi(l,l.next),Es(a,t,e,n,s,r,0),Es(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_u(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(iM(c));for(s.sort(Xg),r=0;r<s.length;r++)e=Kg(s[r],e);return e}function Xg(i,t){return i.x-t.x}function Kg(i,t){let e=$g(i,t);if(!e)return t;let n=Au(e,i);return fi(n,n.next),fi(e,e.next)}function $g(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ci(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Vs(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&tM(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function tM(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function eM(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nM(s)}function nM(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function iM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ci(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rM(i,t)&&(Vs(i,t)&&Vs(t,i)&&aM(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Wr(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wr(i,t){return i.x===t.x&&i.y===t.y}function Su(i,t,e,n){let s=ar(fe(i,t,e)),r=ar(fe(i,t,n)),a=ar(fe(e,n,i)),o=ar(fe(e,n,t));return!!(s!==r&&a!==o||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||a===0&&rr(e,i,n)||o===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ar(i){return i>0?1:i<0?-1:0}function rM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function aM(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Au(i,t){let e=new il(i.i,i.x,i.y),n=new il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $c(i,t,e,n){let s=new il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oM(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ds=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];tu(t),eu(n,t);let a=t.length;e.forEach(tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,eu(n,e[l]);let o=Zg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function tu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function eu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yi=class i extends Ne{constructor(t=new di([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:lM,x,V=!1,C,I,b,U;f&&(x=f.getSpacedPoints(u),V=!0,d=!1,C=f.computeFrenetFrames(u,!1),I=new N,b=new N,U=new N),d||(m=0,p=0,g=0,E=0);let _=o.extractPoints(c),y=_.shape,w=_.holes;if(!ds.isClockWise(y)){y=y.reverse();for(let X=0,st=w.length;X<st;X++){let T=w[X];ds.isClockWise(T)&&(w[X]=T.reverse())}}let P=ds.triangulateShape(y,w),L=y;for(let X=0,st=w.length;X<st;X++){let T=w[X];y=y.concat(T)}function W(X,st,T){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(st,T)}let B=y.length,$=P.length;function G(X,st,T){let It,et,vt,lt=X.x-st.x,Nt=X.y-st.y,Et=T.x-X.x,A=T.y-X.y,v=lt*lt+Nt*Nt,O=lt*A-Nt*Et;if(Math.abs(O)>Number.EPSILON){let J=Math.sqrt(v),K=Math.sqrt(Et*Et+A*A),q=st.x-Nt/J,_t=st.y+lt/J,dt=T.x-A/K,Vt=T.y+Et/K,Gt=((dt-q)*A-(Vt-_t)*Et)/(lt*A-Nt*Et);It=q+lt*Gt-X.x,et=_t+Nt*Gt-X.y;let nt=It*It+et*et;if(nt<=2)return new ct(It,et);vt=Math.sqrt(nt/2)}else{let J=!1;lt>Number.EPSILON?Et>Number.EPSILON&&(J=!0):lt<-Number.EPSILON?Et<-Number.EPSILON&&(J=!0):Math.sign(Nt)===Math.sign(A)&&(J=!0),J?(It=-Nt,et=lt,vt=Math.sqrt(v)):(It=lt,et=Nt,vt=Math.sqrt(v/2))}return new ct(It/vt,et/vt)}let ot=[];for(let X=0,st=L.length,T=st-1,It=X+1;X<st;X++,T++,It++)T===st&&(T=0),It===st&&(It=0),ot[X]=G(L[X],L[T],L[It]);let ht=[],pt,wt=ot.concat();for(let X=0,st=w.length;X<st;X++){let T=w[X];pt=[];for(let It=0,et=T.length,vt=et-1,lt=It+1;It<et;It++,vt++,lt++)vt===et&&(vt=0),lt===et&&(lt=0),pt[It]=G(T[It],T[vt],T[lt]);ht.push(pt),wt=wt.concat(pt)}for(let X=0;X<m;X++){let st=X/m,T=p*Math.cos(st*Math.PI/2),It=g*Math.sin(st*Math.PI/2)+E;for(let et=0,vt=L.length;et<vt;et++){let lt=W(L[et],ot[et],It);at(lt.x,lt.y,-T)}for(let et=0,vt=w.length;et<vt;et++){let lt=w[et];pt=ht[et];for(let Nt=0,Et=lt.length;Nt<Et;Nt++){let A=W(lt[Nt],pt[Nt],It);at(A.x,A.y,-T)}}}let kt=g+E;for(let X=0;X<B;X++){let st=d?W(y[X],wt[X],kt):y[X];V?(b.copy(C.normals[0]).multiplyScalar(st.x),I.copy(C.binormals[0]).multiplyScalar(st.y),U.copy(x[0]).add(b).add(I),at(U.x,U.y,U.z)):at(st.x,st.y,0)}for(let X=1;X<=u;X++)for(let st=0;st<B;st++){let T=d?W(y[st],wt[st],kt):y[st];V?(b.copy(C.normals[X]).multiplyScalar(T.x),I.copy(C.binormals[X]).multiplyScalar(T.y),U.copy(x[X]).add(b).add(I),at(U.x,U.y,U.z)):at(T.x,T.y,h/u*X)}for(let X=m-1;X>=0;X--){let st=X/m,T=p*Math.cos(st*Math.PI/2),It=g*Math.sin(st*Math.PI/2)+E;for(let et=0,vt=L.length;et<vt;et++){let lt=W(L[et],ot[et],It);at(lt.x,lt.y,h+T)}for(let et=0,vt=w.length;et<vt;et++){let lt=w[et];pt=ht[et];for(let Nt=0,Et=lt.length;Nt<Et;Nt++){let A=W(lt[Nt],pt[Nt],It);V?at(A.x,A.y+x[u-1].y,x[u-1].x+T):at(A.x,A.y,h+T)}}}Y(),it();function Y(){let X=s.length/3;if(d){let st=0,T=B*st;for(let It=0;It<$;It++){let et=P[It];Ut(et[2]+T,et[1]+T,et[0]+T)}st=u+m*2,T=B*st;for(let It=0;It<$;It++){let et=P[It];Ut(et[0]+T,et[1]+T,et[2]+T)}}else{for(let st=0;st<$;st++){let T=P[st];Ut(T[2],T[1],T[0])}for(let st=0;st<$;st++){let T=P[st];Ut(T[0]+B*u,T[1]+B*u,T[2]+B*u)}}n.addGroup(X,s.length/3-X,0)}function it(){let X=s.length/3,st=0;Rt(L,st),st+=L.length;for(let T=0,It=w.length;T<It;T++){let et=w[T];Rt(et,st),st+=et.length}n.addGroup(X,s.length/3-X,1)}function Rt(X,st){let T=X.length;for(;--T>=0;){let It=T,et=T-1;et<0&&(et=X.length-1);for(let vt=0,lt=u+m*2;vt<lt;vt++){let Nt=B*vt,Et=B*(vt+1),A=st+It+Nt,v=st+et+Nt,O=st+et+Et,J=st+It+Et;zt(A,v,O,J)}}}function at(X,st,T){l.push(X),l.push(st),l.push(T)}function Ut(X,st,T){Dt(X),Dt(st),Dt(T);let It=s.length/3,et=S.generateTopUV(n,s,It-3,It-2,It-1);Jt(et[0]),Jt(et[1]),Jt(et[2])}function zt(X,st,T,It){Dt(X),Dt(st),Dt(It),Dt(st),Dt(T),Dt(It);let et=s.length/3,vt=S.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Jt(vt[0]),Jt(vt[1]),Jt(vt[3]),Jt(vt[1]),Jt(vt[2]),Jt(vt[3])}function Dt(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function Jt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cM(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $o[s.type]().fromJSON(s)),new i(n,t.options)}},lM={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],E=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-h),new ct(d,1-g),new ct(E,1-f)]:[new ct(o,1-l),new ct(u,1-h),new ct(p,1-g),new ct(m,1-f)]}};function cM(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ys=class i extends el{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var xs=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new N,d=new N,p=[],g=[],E=[],m=[];for(let f=0;f<=n;f++){let S=[],x=f/n,V=0;f===0&&a===0?V=.5/e:f===n&&l===Math.PI&&(V=-.5/e);for(let C=0;C<=e;C++){let I=C/e;h.x=-t*Math.cos(s+I*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+I*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),m.push(I+V,1-x),S.push(c++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let x=u[f][S+1],V=u[f][S],C=u[f+1][S],I=u[f+1][S+1];(f!==0||a>0)&&p.push(x,V,I),(f!==n-1||l<Math.PI)&&p.push(V,C,I)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(E,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kr=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new N,h=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(E),h.y=(t+e*Math.cos(m))*Math.sin(E),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(E,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function or(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $l:r=t,o=2*e-n;break;case tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:a=t,l=2*n-e;break;case tc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),E=g*g,m=E*g,f=-d*m+2*d*E-d*g,S=(1+d)*m+(-1.5-2*d)*E+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*E+.5*g,V=p*m-p*E;for(let C=0;C!==o;++C)r[C]=f*a[u+C]+S*a[c+C]+x*a[l+C]+V*a[h+C];return r}},rl=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},al=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&uM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let E=e[h+g];if(E!==e[d+g]||E!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Uo;var pi=class extends an{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=pr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends an{};ol.prototype.ValueTypeName="color";var ll=class extends an{};ll.prototype.ValueTypeName="number";var cl=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends an{InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends an{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=pr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends an{};ul.prototype.ValueTypeName="vector";var hl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},hM=new hl,dl=class{constructor(t){this.manager=t!==void 0?t:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var xl="\\[\\]\\.:\\/",dM=new RegExp("["+xl+"]","g"),Rl="[^"+xl+"]",fM="[^"+xl.replace("\\.","")+"]",pM=/((?:WC+[\/:])*)/.source.replace("WC",Rl),mM=/(WCOD+)?/.source.replace("WCOD",fM),gM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),MM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),EM=new RegExp("^"+pM+mM+gM+MM+"$"),VM=["material","materials","bones","map"],fl=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dM,"")}static parseTrackName(t){let e=EM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);VM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=fl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var vM="varying vec3 vNormal;varying vec3 vPosition;void main(){vNormal=normalize(mat3(modelMatrix)*normal);vPosition=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vPosition,1.);}",yM="precision highp float;uniform float uTone;uniform float uScan;varying vec3 vNormal;varying vec3 vPosition;void main(){float diffuse=max(dot(normalize(vNormal),normalize(vec3(-.4,.8,1.3))),0.);float light=uTone*(.35+.65*diffuse);if(uScan>=0.)light+=.45*(1.-smoothstep(.015,.22,abs(vPosition.y-uScan)));gl_FragColor=vec4(vec3(light),1.);}",Iu=i=>new Yt(i,i,i),xM=Math.PI*2/28;function Xi(i,t=.42,e=!1){let n=new Ne().setFromPoints(i.map(r=>new N(...r))),s=new Zi({color:Iu(t)});return e?new Cr(n,s):new Wi(n,s)}function Yr(i,t,e=.13,n=.15){let s=new di,r=-i/2,a=-t/2;s.moveTo(r+e,a),s.lineTo(r+i-e,a),s.quadraticCurveTo(r+i,a,r+i,a+e),s.lineTo(r+i,a+t-e),s.quadraticCurveTo(r+i,a+t,r+i-e,a+t),s.lineTo(r+e,a+t),s.quadraticCurveTo(r,a+t,r,a+t-e),s.lineTo(r,a+e),s.quadraticCurveTo(r,a,r+e,a);let o=new Yi(s,{depth:n,bevelEnabled:!0,bevelSegments:1,bevelSize:.035,bevelThickness:.035,steps:1,curveSegments:7});return o.translate(0,0,-n/2),o}var Jr=class{constructor(t,e,n){this.host=e,this.options=n,this.renderer=n.renderer,this.mode="cloud",this.alive=!0,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.auto=!this.reduced,this.motionTime=0,this.lastTime=0,this.rotationY=0,this.yaw=this.targetYaw=.3,this.pitch=this.targetPitch=.22,this.distance=this.targetDistance=this.baseDistance=13.2,this.fade=0,this.fadeTarget=0,this.materials=new Map,this.scanUniform={value:-1},this.scanStart=-1,this.packetPaths=[],this.scene=new hi,this.scene.background=new Yt(0),this.camera=new De(32,1,.1,80),this.target=new Ze(1,1,{minFilter:ve,magFilter:ve,depthBuffer:!0}),this.groups={cloud:this.buildCloud(),team:this.buildTeam(),apps:this.buildApps(),hermes:this.buildHermes(),station:this.buildSignalStation(),clinic:this.buildSignalClinic(),observatory:this.buildSignalObservatory()};for(let[s,r]of Object.entries(this.groups))r.visible=s===this.mode,this.scene.add(r);this.resize(),t.addEventListener("webglcontextlost",s=>{s.preventDefault(),this.alive=!1,n.onError?.()}),t.addEventListener("webglcontextrestored",()=>location.reload())}material(t){return this.materials.has(t)||this.materials.set(t,new Fe({vertexShader:vM,fragmentShader:yM,uniforms:{uTone:{value:t},uScan:this.scanUniform}})),this.materials.get(t)}solid(t,e=.24,n=.62){let s=new Ue(t,this.material(e));return n&&s.add(new Nr(new Br(t,28),new Zi({color:Iu(n)}))),s}box(t,e,n,s,r,a,o,l=.2,c=.6){let u=this.solid(new ci(r,a,o),l,c);return u.position.set(e,n,s),t.add(u),u}link(t,e,n=0){let s=new Ms(e.map(a=>new N(...a)));t.add(Xi(s.getPoints(44).map(a=>a.toArray()),.34));let r=this.solid(new ys(.085),.95,0);t.add(r),this.packetPaths.push({curve:s,packet:r,phase:n})}buildCloud(){let t=new Se;t.name="Cloud computer, closing laptop and phone";let e=new di;e.moveTo(-1.8,0),e.bezierCurveTo(-3,0,-3,1.6,-1.75,1.7),e.bezierCurveTo(-1.9,3.15,.6,3.3,.9,1.95),e.bezierCurveTo(2.25,2.6,3.2,.35,1.8,0),e.lineTo(-1.8,0);let n=new Yi(e,{depth:.5,bevelEnabled:!0,bevelSegments:2,bevelSize:.09,bevelThickness:.08,curveSegments:14,steps:1});n.translate(0,-.8,-.25),this.cloudBody=this.solid(n,.21,.78),this.cloudBody.position.set(0,2.5,-.75),t.add(this.cloudBody),this.cloudCore=this.solid(new ys(.42),.7,.8),this.cloudCore.position.set(0,2.6,-.29),t.add(this.cloudCore),this.laptop=new Se,this.laptop.position.set(-3,-1.05,1.35),this.laptop.rotation.y=.1,t.add(this.laptop),this.box(this.laptop,0,0,0,3,.13,1.85,.18,.76),this.box(this.laptop,0,.083,.48,.65,.015,.33,.15,.43);for(let a=0;a<3;a++)this.laptop.add(Xi([[-1.15,.085,-.61+a*.21],[1.15,.085,-.61+a*.21]],.34));this.lid=new Se,this.lid.position.set(0,.06,-.85),this.laptop.add(this.lid);let s=this.solid(Yr(3,1.85,.1,.13),.12,.85);s.position.y=.94,this.lid.add(s),this.box(this.lid,0,1,.087,2.6,1.45,.018,.065,.26);for(let a=0;a<3;a++)this.lid.add(Xi([[-.91,.63+a*.28,.107],[.63-a%2*.32,.63+a*.28,.107]],.5));let r=new Se;r.position.set(3.1,.08,1.1),r.rotation.y=-.12,r.rotation.z=-.075,t.add(r),r.add(this.solid(Yr(1.43,2.65,.23,.2),.19,.9)),this.box(r,0,.06,.13,1.15,2.1,.022,.075,.38),this.box(r,0,.83,.16,.65,.15,.02,.6,0);for(let a=0;a<3;a++)this.box(r,-.05,.38-a*.38,.16,.82-a*.1,.1,.02,.4,0);return this.box(r,0,-.87,.16,.42,.09,.02,.72,0),this.link(t,[[-2.1,.1,.7],[-2.5,1,.2],[-1.1,1.9,-.5]],0),this.link(t,[[3.05,1.3,.9],[2.85,2.4,.1],[1.7,2.7,-.5]],.4),t.add(Xi([[-4.8,-1.35,1.9],[4.35,-1.35,1.9]],.12)),t}avatar(t,e,n,s){let r=new Se;r.position.set(e,n,s);let a=this.solid(new xs(.32,16,12),.63,0);r.add(a);let o=this.solid(new xs(1,16,10),.31,0);o.scale.set(.6,.38,.28),o.position.y=-.58,r.add(o);let l=[];for(let c=0;c<44;c++){let u=c/44*Math.PI*2;l.push([Math.cos(u)*.86,-1.03,Math.sin(u)*.54])}return r.add(Xi(l,.29,!0)),t.add(r),r}buildTeam(){let t=new Se;t.name="Three collaborators, shared app and private workspace lock";let e=new Se;e.position.set(0,1.5,-.65),t.add(e),e.add(this.solid(Yr(4.7,3.1,.17,.2),.1,.82)),this.box(e,0,1.13,.15,4.26,.43,.025,.22,0);for(let r=0;r<3;r++)this.box(e,-1.45+r*1.42,.02,.15,1.02,1.28,.025,.17+r*.05,.39);for(let r=0;r<3;r++)this.box(e,-1.4+r*1.4,-1.07,.17,.91,.17,.025,.45,0);this.teamCursors=[];for(let r=0;r<2;r++){let a=new di;a.moveTo(0,.35),a.lineTo(0,-.28),a.lineTo(.23,-.07),a.lineTo(.41,-.06),a.closePath();let o=this.solid(new Yi(a,{depth:.03,bevelEnabled:!1}),.9,0);o.position.z=.25,e.add(o),this.teamCursors.push(o)}this.people=[this.avatar(t,-3.35,.45,1.55),this.avatar(t,3.35,.45,1.55),this.avatar(t,0,-.85,2.2)],this.link(t,[[-3.2,.65,1.3],[-2.7,1.8,.55],[-1.8,2.2,-.4]],.1),this.link(t,[[3.2,.65,1.3],[2.7,1.7,.55],[1.8,2.2,-.4]],.5),this.link(t,[[0,-.55,1.9],[.2,.2,.55],[0,.3,-.4]],.8);let n=new Se;n.position.set(2,3.36,-.34),this.box(n,0,0,0,.83,.67,.23,.45,.82);let s=this.solid(new kr(.27,.075,7,24,Math.PI),.6,0);return s.position.y=.33,n.add(s),this.box(n,0,-.01,.15,.1,.24,.018,.04,0),t.add(n),t}buildApps(){let t=new Se;t.name="Production application and elastic serverless compute";let e=new Se;e.position.set(0,1.92,-.45),t.add(e);for(let s=2;s>=0;s--){let r=this.solid(Yr(5.15,3.15,.13,.12),s===0?.1:.07,s===0?.85:.31);r.position.set(s*.22,s*.17,-s*.43),e.add(r)}this.box(e,0,1.17,.11,4.73,.36,.027,.22,0);for(let s=0;s<3;s++)this.box(e,-2.07+s*.28,1.17,.14,.09,.09,.02,.65,0);this.appBars=[];for(let s=0;s<4;s++){let r=this.box(e,-1.7+s*.49,-.12,.14,.27,.72+s*.19,.04,.35+s*.09,.31);this.appBars.push(r)}for(let s=0;s<4;s++)this.box(e,1.2,.55-s*.4,.14,1.45-s%2*.35,.12,.028,.39,0);this.box(e,1.1,-1.09,.14,1.43,.3,.035,.59,0),this.cells=[];for(let s=0;s<5;s++){let r=this.solid(new Or(.48,.48,.32,6),.27,.61);r.position.set(-2.65+s*1.31,-1.12,1.43+s%2*.17),t.add(r),this.cells.push(r);let a=r.position.x;this.link(t,[[a,-.85,r.position.z],[a*.85,-.2,.6],[a*.7,.5,-.22]],s*.19)}let n=[];for(let s=0;s<64;s++){let r=s/64*Math.PI*2;n.push([Math.cos(r)*3.9,-1.37,Math.sin(r)*1.3+.8])}return t.add(Xi(n,.15,!0)),t}resize(){let{width:t,height:e}=this.host.getBoundingClientRect();this.target.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.baseDistance=t<500?14.3:13.2,this.hasZoomed||(this.targetDistance=this.baseDistance)}setMode(t){!this.groups[t]||t===this.mode&&!this.pendingMode||(this.pendingMode=t,this.transitionAt=performance.now(),this.fadeTarget=1,this.reduced&&this.swapMode())}swapMode(){this.mode=this.pendingMode,this.pendingMode=null;for(let[t,e]of Object.entries(this.groups))e.visible=t===this.mode;this.reset(),this.fadeTarget=0}zoom(t){this.targetDistance=Math.max(8,Math.min(23,this.targetDistance+t*.65)),this.hasZoomed=!0}reset(){this.targetYaw=.3,this.targetPitch=.22,this.targetDistance=this.baseDistance,this.hasZoomed=!1}startScan(){this.scanStart=performance.now()}draw(t){if(!this.alive)return;let e=Math.min(.12,this.lastTime?(t-this.lastTime)/1e3:.016);this.lastTime=t,this.reduced||(this.motionTime+=e);let n=this.motionTime;animateHermesWorld(this,n);this.signalRing.rotation.z=n*.18;this.signalRecall.rotation.y=n*.45;this.signalScope.rotation.z=n*.15;this.pendingMode&&t-this.transitionAt>210&&this.swapMode(),this.auto&&!this.reduced&&(this.rotationY+=e*xM);for(let l of Object.values(this.groups))l.rotation.y=this.rotationY;let s=1-Math.exp(-e*9);this.yaw+=(this.targetYaw-this.yaw)*s,this.pitch+=(this.targetPitch-this.pitch)*s,this.distance+=(this.targetDistance-this.distance)*s,this.fade+=(this.fadeTarget-this.fade)*(1-Math.exp(-e*15));let r=new N(0,this.mode==="cloud"?1.4:1.05,.25);this.camera.position.set(Math.sin(this.yaw)*Math.cos(this.pitch)*this.distance,Math.sin(this.pitch)*this.distance+r.y,Math.cos(this.yaw)*Math.cos(this.pitch)*this.distance),this.camera.lookAt(r),this.cloudBody.position.y=2.5+Math.sin(n*.63)*.08,this.cloudCore.rotation.y=n*.7,this.cloudCore.rotation.z=n*.25;let a=n%12/12,o=(1-Math.cos(a*Math.PI*2))*.5;this.lid.rotation.x=.1+Math.pow(o,.62)*1.43,this.teamCursors.forEach((l,c)=>{l.position.x=Math.sin(n*.5+c*2.5)*1.25,l.position.y=Math.cos(n*.62+c*2.2)*.54}),this.people.forEach((l,c)=>{l.position.y=(c===2?-.85:.45)+Math.sin(n*.7+c)*.06}),this.appBars.forEach((l,c)=>{l.scale.y=.84+Math.sin(n*.65+c*.8)*.16}),this.cells.forEach((l,c)=>{l.scale.y=.7+Math.pow((Math.sin(n*1.7-c*1.25)+1)*.5,2)*.72});for(let{curve:l,packet:c,phase:u}of this.packetPaths)c.position.copy(l.getPoint((n*.19+u)%1)),c.rotation.y=n;if(this.scanStart>=0){let l=Math.min(1,(t-this.scanStart)/3e3);this.scanUniform.value=-1.8+l*7,this.options.onScanProgress?.(l),l===1&&(this.scanStart=-1,this.scanUniform.value=-1,this.options.onScanComplete?.())}this.renderer.setRenderTarget(this.target),this.renderer.render(this.scene,this.camera)}get components(){return this.groups[this.mode].name}};var ee=12,ae=18,_l=["#000000","#dedede","#a8a8a8","#ffffff","#c4c4c4","#000000","#ededed","#494949"],RM="\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\xB7\u2022\u2591\u2592\u2593\u2588\u258C\u2590\u2580\u2584\u25A0\u25A1\u2582\u2583\u2585\u2586\u2587\u25B2\u25BC\u25C0\u25B6\u25C6\u25C7\u2197\u2198\u2199\u2196\u2194\u2195\u2191\u2193\u2190\u2192\u21B3\u21B5\u21BA\u2315\u2316\u27F3\xB0\u221E\xD7\u2713\u2212\u2014\u2013\u2018\u2019\u201C\u201D\xA9\xAE",qr=Array.from({length:95},(i,t)=>String.fromCharCode(32+t)).concat([...RM]),Sl=new Map(qr.map((i,t)=>[i,t])),bu="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",_M=`
precision highp float;
uniform sampler2D uUI,uWorld,uGlyphs,uIntroLogo;
uniform vec2 uGrid,uSourceSize;
uniform vec4 uRect;
uniform vec3 uIntro;
uniform float uVisibility,uMosaic,uTime,uScan;
varying vec2 vUv;
float intensity(vec3 c){return dot(c,vec3(.299,.587,.114));}
void main(){
  vec2 cell=vec2(vUv.x,1.-vUv.y)*uGrid;
  vec3 ui=texture2D(uUI,vUv).rgb;
  vec3 outputColor=ui;
  if(uVisibility>.001&&cell.x>=uRect.x&&cell.x<uRect.x+uRect.z&&cell.y>=uRect.y&&cell.y<uRect.y+uRect.w){
    vec2 index=floor(cell)-uRect.xy;
    vec2 uv=(index+.5)/uRect.zw;uv.y=1.-uv.y;
    vec2 d=1./uSourceSize;
    vec3 s=texture2D(uWorld,uv).rgb;
    s=max(s,texture2D(uWorld,uv+vec2(d.x*3.,0.)).rgb);
    s=max(s,texture2D(uWorld,uv-vec2(d.x*3.,0.)).rgb);
    s=max(s,texture2D(uWorld,uv+vec2(0.,d.y*4.)).rgb);
    s=max(s,texture2D(uWorld,uv-vec2(0.,d.y*4.)).rgb);
    float luminance=clamp(pow(intensity(s)*2.25,.7),0.,1.);
    if(uScan>=0.&&intensity(s)>.008)luminance=min(1.,luminance+.45*(1.-smoothstep(0.,1.3,abs(cell.y-(uRect.y+uScan*uRect.w)))));
    float glyphIndex=floor(luminance*15.99);
    vec2 within=fract(cell);
    float glyph=texture2D(uGlyphs,vec2((glyphIndex+within.x)/16.,1.-within.y)).r;
    float mosaic=step(.1,luminance)*(.35+.65*step(.5,luminance));
    mosaic*=step(.1,within.x)*step(within.x,.9)*step(.05,within.y)*step(within.y,.95);
    float ink=mix(glyph,mosaic,uMosaic);
    vec3 projected=vec3(.91)*ink*(.28+luminance*.85);
    // Every visible 3D sample occupies precisely one terminal cell.
    outputColor=max(ui,projected*uVisibility);
  }
  if(uIntro.z>0.){
    // Only add the logo ink. The background's circular clearance and density
    // falloff already exist in the character grid, not in a shader overlay.
    vec2 logoUV=(cell-uIntro.xy)/vec2(10.,7.);
    if(logoUV.x>=0.&&logoUV.x<=1.&&logoUV.y>=0.&&logoUV.y<=1.){
      vec3 mark=texture2D(uIntroLogo,vec2(logoUV.x,1.-logoUV.y)).rgb;
      outputColor=max(outputColor,mark*uIntro.z);
    }
  }
  gl_FragColor=vec4(outputColor,1.);
}`,SM=`
precision highp float;
uniform sampler2D uTerminal;
uniform vec3 uPhosphor,uBleed,uHaze;
uniform vec2 uResolution,uPointer;
uniform float uTime,uCurvature,uGlow,uGain,uCRT,uBoot;
varying vec2 vUv;
vec3 sampleScreen(vec2 uv){if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)return vec3(0.);return textureLod(uTerminal,uv,0.).rgb;}
// The terminal target keeps a mip chain, so every level is a cheaper, wider
// blur of the same frame. Five taps per level round off the box filter.
float bloom(vec2 uv,float lod,vec2 texel){
  vec2 o=texel*exp2(lod)*.8;
  float s=textureLod(uTerminal,uv,lod).r*.4;
  s+=textureLod(uTerminal,uv+o,lod).r*.15;
  s+=textureLod(uTerminal,uv-o,lod).r*.15;
  s+=textureLod(uTerminal,uv+vec2(o.x,-o.y),lod).r*.15;
  s+=textureLod(uTerminal,uv+vec2(-o.x,o.y),lod).r*.15;
  return s;
}
// Rolls channels off above .8 instead of clipping them, so two bright levels
// driven past full scale (a label on a lit bar) stay distinguishable.
vec3 shoulder(vec3 x){return mix(x,.8+.2*(1.-exp(-(x-.8)/.2)),step(.8,x));}
void main(){
  vec2 p=vUv*2.-1.;
  vec2 lens=p;
  lens.x*=1.+p.y*p.y*uCurvature;
  lens.y*=1.+p.x*p.x*uCurvature*.72;
  lens+=uPointer*.009*(1.-min(dot(p,p)*.45,1.));
  vec2 uv=lens*.5+.5;
  vec2 texel=1./vec2(textureSize(uTerminal,0));
  vec3 c=sampleScreen(uv);
  // Phosphor as a film camera saw it (halation): a slightly defocused core
  // driven past full scale, so its strongest channels saturate and it reads
  // hotter (orange burns yellow). The film smears the bloom sideways: a bleed
  // lands a little right of what emits it and stays on top of it, and a haze
  // drifts well to the left across the black glass. Each phosphor carries its
  // own pair (orange bleeds red into a violet haze, green into teal, ...).
  vec2 bleedShift=vec2(texel.x*5.,0.);
  vec2 hazeShift=vec2(texel.x*44.,0.);
  float soft=textureLod(uTerminal,uv,1.).r;
  float near=bloom(uv-bleedShift,2.,texel);
  float mid=bloom(uv-bleedShift,3.5,texel);
  float far=bloom(uv+hazeShift,5.,texel);
  float core=mix(c.r,soft,.2*min(uGlow,1.));
  vec3 bleed=near*mix(uPhosphor,uBleed,.5)*.38+mid*uBleed*.72;
  vec3 haze=far*uHaze*.6;
  c=core*uPhosphor*(1.+.3*uGlow);
  c+=bleed*uGlow*(1.-smoothstep(0.,.8,core)*.2);
  c+=haze*uGlow*(1.-smoothstep(0.,.8,core)*.9);
  c=shoulder(c);
  // Interlaced raster: the beam draws lines about two texels tall (never under
  // 2.6 device pixels, which would alias), and each field, 30 per second,
  // repaints every other line, so the line it left last field has dimmed.
  // Reduced motion freezes uTime and with it a single field.
  float lineY=uv.y*min(.5/texel.y,uResolution.y/2.6);
  float field=mod(floor(uTime*30.),2.);
  float stale=mod(floor(lineY)+field,2.);
  float beam=sin(fract(lineY)*3.14159265);
  float scan=(1.-uCRT*(.2*(1.-beam)+.24*stale))*(1.+.19*uCRT);
  float grain=fract(sin(dot(floor(uv*uResolution),vec2(12.9898,78.233))+floor(uTime*12.))*43758.5453);
  c*=scan;
  c*=1.+(grain-.5)*.04*uCRT;
  float edge=clamp((1.-pow(abs(lens.x),7.))*(1.-pow(abs(lens.y),7.)),0.,1.);
  c*=pow(edge,.27)*uGain;
  float aperture=smoothstep(0.,.035,uBoot-abs(vUv.y-.5)*2.);
  c*=aperture;
  if(uv.x<0.||uv.x>1.||uv.y<0.||uv.y>1.)c=vec3(0.);
  gl_FragColor=vec4(c,1.);
}`,_s=class{constructor(t,e){this.cols=t,this.rows=e,this.canvas=document.createElement("canvas"),this.canvas.width=t*ee,this.canvas.height=e*ae,this.ctx=this.canvas.getContext("2d",{alpha:!1}),this.current=new Uint32Array(t*e),this.previous=new Uint32Array(t*e).fill(4294967295),this.atlases=_l.map(n=>this.atlas(n)),this.texture=new ms(this.canvas),this.texture.minFilter=ve,this.texture.magFilter=ve,this.texture.generateMipmaps=!1,this.clear()}atlas(t){let e=document.createElement("canvas");e.width=qr.length*ee,e.height=ae;let n=e.getContext("2d");return n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.font="24px Terminal, monospace",qr.forEach((s,r)=>{let a=r*ee;if(s==="\u2588")n.fillRect(a,0,ee,ae);else if(s==="\u2580")n.fillRect(a,0,ee,ae/2);else if(s==="\u2584")n.fillRect(a,ae/2,ee,ae/2);else if(s==="\u258C")n.fillRect(a,0,ee/2,ae);else if(s==="\u2590")n.fillRect(a+ee/2,0,ee/2,ae);else if(s==="\u2500")n.fillRect(a,ae*.51,ee,1);else if(s==="\u2502")n.fillRect(a+ee/2,0,1,ae);else if("\u2591\u2592\u2593".includes(s)){let o=s==="\u2591"?1:s==="\u2592"?2:3;for(let l=0;l<ae;l+=2)for(let c=0;c<ee;c+=2)(c/2+l/2)%4<o&&n.fillRect(a+c,l,1.25,1.25)}else n.fillText(s,a+ee/2,ae*.48)}),e}clear(){this.current.fill(0)}toLines(){return Array.from({length:this.rows},(t,e)=>Array.from({length:this.cols},(n,s)=>qr[this.current[e*this.cols+s]&1023]||" ").join(""))}put(t,e,n,s=1,r=0){if(t<0||e<0||t>=this.cols||e>=this.rows)return;let a=Sl.get(n)??Sl.get("?");this.current[e*this.cols+t]=a|s<<10|r<<14}text(t,e,n,s=1,r=0,a=1/0){[...String(n)].slice(0,a).forEach((o,l)=>this.put(t+l,e,o,s,r))}fill(t,e,n,s,r=" ",a=1,o=0){for(let l=0;l<s;l++)for(let c=0;c<n;c++)this.put(t+c,e+l,r,a,o)}rule(t,e,n,s=2,r="\u2500"){this.fill(t,e,n,1,r,s)}box(t,e,n,s,r=2,a=0){this.fill(t,e,n,s," ",r,a),this.rule(t+1,e,n-2,r),this.rule(t+1,e+s-1,n-2,r);for(let o=1;o<s-1;o++)this.put(t,e+o,"\u2502",r,a),this.put(t+n-1,e+o,"\u2502",r,a);this.put(t,e,"\u250C",r,a),this.put(t+n-1,e,"\u2510",r,a),this.put(t,e+s-1,"\u2514",r,a),this.put(t+n-1,e+s-1,"\u2518",r,a)}flush(t=1,e=!1){let n=!1,s=t<1?Math.floor(this.current.length*t):this.current.length;for(let r=0;r<this.current.length;r++){let a=r<s?this.current[r]:0;if(e&&t<1){let d=r%this.cols,p=Math.floor(r/this.cols),g=(d/this.cols-.5)*2,E=(p/this.rows-.45)*1.7,m=Math.hypot(g,E)*.47+p/this.rows*.12+(d*17+p*31)%29/29*.13;a=t>m?this.current[r]:0,a&&t-m<.075&&(a=Sl.get("\u2592")|2048)}if(this.previous[r]===a)continue;n=!0,this.previous[r]=a;let o=a&1023,l=a>>10&15,c=a>>14&15,u=r%this.cols*ee,h=Math.floor(r/this.cols)*ae;this.ctx.fillStyle=_l[c]||_l[0],this.ctx.fillRect(u,h,ee,ae),o!==0&&this.ctx.drawImage(this.atlases[l]||this.atlases[1],o*ee,0,ee,ae,u,h,ee,ae)}return n&&(this.texture.needsUpdate=!0),n}dispose(){this.texture.dispose()}};function AM(){let i=" .,:;-=+*ox%#@MW",t=document.createElement("canvas");t.width=ee*16,t.height=ae;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,t.width,t.height),e.fillStyle="#fff",e.font="24px Terminal,monospace",e.textAlign="center",e.textBaseline="middle";for(let s=0;s<16;s++)e.fillText(i[s],s*ee+ee/2,ae*.48);let n=new ms(t);return n.minFilter=ve,n.magFilter=ve,n.generateMipmaps=!1,n}var jr=class{constructor(t,{cols:e,rows:n,worldRect:s,introMark:r,onScanProgress:a,onScanComplete:o,onError:l}){this.canvas=t,this.grid=new _s(e,n),this.rect=s,this.pointer=new ct,this.targetPointer=new ct,this.curvature=.11,this.glow=.9,this.gain=1,this.crt=1,this.visibility=0,this.worldVisibility=0,this.mosaic=0,this.targetMosaic=0,this.boot=0,this.started=performance.now(),this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.color=new N(1,.55,.2),this.targetColor=this.color.clone(),this.bleed=new N(1,.12,.11),this.targetBleed=this.bleed.clone(),this.haze=new N(.21,.085,.7),this.targetHaze=this.haze.clone(),this.renderer=new br({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Zn;let c={getBoundingClientRect:()=>({width:this.rect.w*ee,height:this.rect.h*ae})};this.world=new Jr(t,c,{renderer:this.renderer,onScanProgress:a,onScanComplete:o,onError:l}),this.introLogo=new _s(10,7),r?.draw(this.introLogo,0,0,0,!0),this.introLogo.flush(),this.target=new Ze(e*ee,n*ae,{minFilter:ri,magFilter:ve,generateMipmaps:!0,depthBuffer:!1}),this.compositeUniforms={uUI:{value:this.grid.texture},uWorld:{value:this.world.target.texture},uGlyphs:{value:AM()},uIntroLogo:{value:this.introLogo.texture},uIntro:{value:new N},uGrid:{value:new ct(e,n)},uSourceSize:{value:new ct(s.w*ee,s.h*ae)},uRect:{value:new de(s.x,s.y,s.w,s.h)},uVisibility:{value:1},uMosaic:{value:0},uTime:{value:0},uScan:{value:0}},this.compositeScene=new hi,this.camera=new ps(-1,1,1,-1,0,1),this.compositeScene.add(new Ue(new ui(2,2),new Fe({vertexShader:bu,fragmentShader:_M,uniforms:this.compositeUniforms,depthTest:!1,depthWrite:!1}))),this.glassUniforms={uTerminal:{value:this.target.texture},uPhosphor:{value:this.color},uBleed:{value:this.bleed},uHaze:{value:this.haze},uResolution:{value:new ct(e*ee,n*ae)},uPointer:{value:this.pointer},uTime:{value:0},uCurvature:{value:this.curvature},uGlow:{value:this.glow},uGain:{value:1},uCRT:{value:1},uBoot:{value:0}},this.glassScene=new hi,this.glassScene.add(new Ue(new ui(2,2),new Fe({vertexShader:bu,fragmentShader:SM,uniforms:this.glassUniforms,depthTest:!1,depthWrite:!1}))),this.resizeCanvas()}resizeCanvas(){let t=innerWidth<650?8:30,e=Math.min((innerWidth-t)/(this.grid.cols*ee),(innerHeight-t)/(this.grid.rows*ae),1.72);this.displayWidth=Math.floor(this.grid.cols*ee*e),this.displayHeight=Math.floor(this.grid.rows*ae*e),this.canvas.style.width=`${this.displayWidth}px`,this.canvas.style.height=`${this.displayHeight}px`,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),this.renderer.setSize(this.displayWidth,this.displayHeight,!1),this.glassUniforms.uResolution.value.set(this.displayWidth*Math.min(devicePixelRatio||1,1.6),this.displayHeight*Math.min(devicePixelRatio||1,1.6))}reflow(t,e,n){this.rect=n,this.grid.dispose(),this.grid=new _s(t,e),this.compositeUniforms.uUI.value=this.grid.texture,this.compositeUniforms.uGrid.value.set(t,e),this.compositeUniforms.uRect.value.set(n.x,n.y,n.w,n.h),this.compositeUniforms.uSourceSize.value.set(n.w*ee,n.h*ae),this.target.setSize(t*ee,e*ae),this.world.resize(),this.resizeCanvas()}setColor(t,e=!1){this.targetColor.set(...t.rgb),this.targetBleed.set(...t.bleed),this.targetHaze.set(...t.haze),(e||this.reduced)&&(this.color.copy(this.targetColor),this.bleed.copy(this.targetBleed),this.haze.copy(this.targetHaze))}setIntro(t){let e=t;this.compositeUniforms.uIntro.value.set(e?.x||0,e?.y||0,e?.opacity||0)}locate(t,e){let n=this.canvas.getBoundingClientRect(),s=(t-n.left)/n.width,r=1-(e-n.top)/n.height,a=s*2-1,o=r*2-1,l=a*(1+o*o*this.curvature),c=o*(1+a*a*this.curvature*.72),u=1-Math.min((a*a+o*o)*.45,1);return l+=this.pointer.x*.009*u,c+=this.pointer.y*.009*u,{x:(l*.5+.5)*this.grid.cols,y:(1-(c*.5+.5))*this.grid.rows,u:s*2-1,v:r*2-1}}draw(t,e){(this.worldVisibility>.001||this.visibility>.005)&&this.world.draw(t),this.pointer.lerp(this.targetPointer,1-Math.exp(-e*4)),this.visibility+=(this.worldVisibility-this.visibility)*(1-Math.exp(-e*12)),this.mosaic+=(this.targetMosaic-this.mosaic)*(1-Math.exp(-e*7)),this.color.lerp(this.targetColor,1-Math.exp(-e*8)),this.bleed.lerp(this.targetBleed,1-Math.exp(-e*8)),this.haze.lerp(this.targetHaze,1-Math.exp(-e*8)),this.compositeUniforms.uVisibility.value=this.visibility*(1-this.world.fade),this.compositeUniforms.uMosaic.value=this.mosaic,this.compositeUniforms.uTime.value=t*.001,this.renderer.setRenderTarget(this.target),this.renderer.render(this.compositeScene,this.camera);let n=this.glassUniforms;n.uTime.value=this.reduced?0:t*.001,n.uCurvature.value=this.curvature,n.uGlow.value=this.glow,n.uGain.value=this.gain,n.uCRT.value=this.crt,n.uBoot.value=this.boot,this.renderer.setRenderTarget(null),this.renderer.render(this.glassScene,this.camera)}};var Xr=class{constructor(){this.ctx=null,this.active=!1,this.nodes=[],this.frequency=89.4}async toggle(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)throw new Error("Audio unavailable");this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);let n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=680,n.Q.value=.3,n.connect(this.master);for(let[h,d,p]of[[55,.05,-7],[82.4069,.025,4],[110,.018,7],[164.8138,.009,-4]]){let g=e.createOscillator(),E=e.createGain();g.type="sine",g.frequency.value=h,g.detune.value=p,E.gain.value=d,g.connect(E),E.connect(n),g.start(),this.nodes.push(g)}let s=e.createBuffer(1,e.sampleRate*4,e.sampleRate),r=s.getChannelData(0),a=0;for(let h=0;h<r.length;h++){let d=Math.random()*2-1;a=(a+.02*d)/1.02,r[h]=a*3.5}let o=e.createBufferSource();o.buffer=s,o.loop=!0,this.noiseFilter=e.createBiquadFilter(),this.noiseFilter.type="bandpass",this.noiseFilter.frequency.value=1600,this.noiseFilter.Q.value=.5;let l=e.createGain();l.gain.value=.027,o.connect(this.noiseFilter),this.noiseFilter.connect(l),l.connect(this.master),o.start(),this.nodes.push(o);let c=e.createOscillator(),u=e.createGain();c.frequency.value=.085,u.gain.value=200,c.connect(u),u.connect(n.frequency),c.start(),this.nodes.push(c)}return await this.ctx.resume(),this.active=!this.active,this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.active?.7:0,this.ctx.currentTime,.35),this.active}setFrequency(t){this.frequency=t,this.ctx&&this.noiseFilter&&this.noiseFilter.frequency.setTargetAtTime(400+(t-76)*80,this.ctx.currentTime,.2)}tick(t="tap"){if(!this.active||!this.ctx)return;let e=this.ctx,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(t==="scan"?220:560,e.currentTime),n.frequency.exponentialRampToValueAtTime(t==="scan"?880:360,e.currentTime+.12),s.gain.setValueAtTime(.009,e.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.13),n.connect(s),s.connect(this.master),n.start(),n.stop(e.currentTime+.15)}};var Ss={home:"https://ardor.cloud/",start:"https://console.ardor.cloud/",docs:"https://docs.ardor.cloud/",pricing:"https://ardor.cloud/pricing",download:"https://ardor.cloud/download"},In=[{id:"purple",label:"PURPLE",rgb:[.735,.58,1],bleed:[.85,.18,.95],haze:[.1,.14,.8]},{id:"pink",label:"PINK",rgb:[1,.57,.79],bleed:[1,.14,.45],haze:[.42,.1,.8]},{id:"orange",label:"ORANGE",rgb:[1,.55,.2],bleed:[1,.12,.11],haze:[.21,.085,.7]},{id:"blue",label:"BLUE",rgb:[.43,.72,1],bleed:[.12,.38,1],haze:[.34,.1,.78]},{id:"white",label:"WHITE",rgb:[1,1,1],bleed:[.32,.42,.95],haze:[.1,.16,.6]},{id:"green",label:"GREEN",rgb:[.2,1,.2],bleed:[0,.5,.22],haze:[0,.36,.6]},{id:"amber",label:"AMBER",rgb:[1,.69,0],bleed:[1,.36,.02],haze:[.6,.07,.24]},{id:"cyan",label:"CYAN",rgb:[.33,1,1],bleed:[0,.38,.92],haze:[.56,.1,.66]}],Ae={cloud:{number:"01",slug:"anywhere",name:"ALWAYS IN THE CLOUD",menu:"1 ALWAYS ON",field:"CLOSE YOUR LAPTOP. YOUR AGENT KEEPS WORKING.",shortField:"YOUR CLOUD COMPUTER NEVER LEAVES.",projection:"PHONE <-> CLOUD <-> LAPTOP",mobileProjection:"PHONE -> CLOUD",category:"people",lines:["CLOSE YOUR LAPTOP. YOUR AGENT KEEPS WORKING.","START THE NEXT TASK FROM YOUR PHONE."],mobile:["CLOSE YOUR LAPTOP. WORK GOES ON.","START ANY TASK FROM YOUR PHONE."],story:{id:"usp-cloud",title:"CLOSE YOUR LAPTOP. KEEP GOING.",tag:"01 / YOUR OWN CLOUD COMPUTER",body:`You do not have to worry about closing your laptop. Ardor keeps working on its own computer in the cloud.

Kick things off from your phone anytime. Start a new task wherever you are, without keeping your laptop half-open all day.

Your agent runs in the cloud. Your laptop and phone are simply ways to reach it.`}},team:{number:"02",slug:"together",name:"BUILD TOGETHER",menu:"2 BUILD TOGETHER",field:"VIBE-CODE TOGETHER. SHARE INSIDE YOUR COMPANY.",shortField:"YOUR TEAM. PRIVATE BY DEFAULT.",projection:"PEOPLE -> PRIVATE WORKSPACE",mobileProjection:"PEOPLE -> WORKSPACE",category:"teams",lines:["VIBE-CODE TOGETHER. KEEP TEAM AUTOMATIONS PRIVATE.","ONE PROPOSAL WORKFLOW. READY FOR THE WHOLE TEAM."],mobile:["BUILD APPS TOGETHER, LIVE.","PRIVATE AUTOMATIONS. SHARED TEAM."],story:{id:"usp-team",title:"BUILD ONCE. USE IT TOGETHER.",tag:"02 / PRIVATE TEAM WORKSPACE",body:`Vibe-code simple apps with other people at the same time. Share automations inside your team: private to your company, not public.

Say your team figures out how to generate commercial proposals. Everyone can use that workflow.

Nobody has to set up a project on their own computer, install GitHub tooling or repeat the technical setup just to run it.`}},apps:{number:"03",slug:"real-apps",name:"REAL APPS. LESS OPS.",menu:"3 REAL APPS",field:"BUILT IN THE CLOUD. POWERED BY SERVERLESS.",shortField:"REAL APPS. CLOUD FROM THE START.",projection:"REAL APP -> SERVERLESS",mobileProjection:"APP -> SERVERLESS",category:"devs",lines:["REAL APPS, NOT JUST ONE-PROMPT MVPS.","BUILT-IN SERVERLESS. NO EXPENSIVE SERVER TO RENT."],mobile:["REAL APPS. CLOUD FROM THE START.","SERVERLESS. NO SERVER TO RENT."],story:{id:"usp-apps",title:"BEYOND THE ONE-PROMPT MVP.",tag:"03 / BUILT-IN SERVERLESS",body:`Ardor can build real apps, not just Lovable-style one-prompt MVPs.

It does not run on your computer. Your app starts in the cloud, with built-in serverless infrastructure.

You do not need to rent expensive always-on servers. Usage-based infrastructure keeps costs lower by charging for the work your app actually does.`}}},Al=[{id:"people",label:"EVERYONE",description:"EVERYDAY IDEAS, MADE REAL"},{id:"devs",label:"DEVS",description:"FROM COMMIT TO PRODUCTION"},{id:"teams",label:"TEAMS",description:"KNOWLEDGE THAT WORKS TOGETHER"}],Kr=[{id:"spreadsheet",category:"people",title:"SPREADSHEET -> APP",tag:"FILES / EVERYDAY TOOLS",teaser:"Excel becomes a working app.",body:`Give Ardor an Excel file and explain how you want to use it. The agent understands your data and builds a practical app around it.

Your existing spreadsheet becomes the starting point for a tool you can work with daily.`,prompt:"Turn this spreadsheet into an app for managing our inventory."},{id:"portfolio",category:"people",title:"A PORTFOLIO THAT WORKS",tag:"CREATE / PUBLISH / UPDATE",teaser:"Give your work a home online.",body:`Bring your work samples and professional background. Ask Ardor to create a portfolio you can put online and keep up to date.

Send the finished site to a future client or employer. Hosting for static sites is free across all plans.`,prompt:"Build a portfolio from these projects and my experience."},{id:"personal-os",category:"people",title:"AN OS FOR YOUR LIFE",tag:"TASKS / CALENDAR / NOTES",teaser:"One system, across devices.",body:`Make a personal workspace for your schedule, to-dos, documents and regular routines. Ardor brings those pieces into a system built around your needs.

Use the chat to request changes and access your work from different devices.`,prompt:"Create a personal OS for my tasks, notes and weekly routines."},{id:"research",category:"people",title:"REDDIT -> REAL INSIGHT",tag:"RESEARCH / SOURCE LINKS",teaser:"Find signals in the threads.",body:`Point Ardor at specific Reddit communities or discussions. It studies what people say, identifies repeated problems and summarizes the sentiment.

Findings include quotations and links, so you can trace insights back to their sources.`,prompt:"Analyze these Reddit threads for recurring customer problems."},{id:"pipeline",category:"devs",title:"ONE PROMPT. FULL CI/CD.",tag:"BUILD / PREVIEW / DEPLOY",teaser:"Connect commit to production.",body:`Tell Ardor how you want to ship your code. It connects the build process, preview environments and production deployment into a CI/CD workflow.

Define the journey from a new commit to a live release in plain language.`,prompt:"Set up a CI/CD pipeline with previews and production deploys."},{id:"self-host",category:"devs",title:"SELF-HOST YOUR NEXT TOOL",tag:"3,000+ SELF-HOSTED APPS",teaser:"Your tools, on your terms.",body:`Choose from more than 3,000 free self-hosted applications and ask Ardor to deploy one. Options include Nextcloud, Mattermost, Plane, Jitsi Meet and Vaultwarden.

Running infrastructure has usage-based costs, separate from the free app itself.`,prompt:"Deploy Nextcloud so our team can share files in one place."},{id:"mcp",category:"devs",title:"CONNECT TOOLS OVER MCP",tag:"YOUR STACK / CONNECTED",teaser:"Let agents call your tools.",body:`Make your tools available to agents through MCP. Ardor supports connecting servers with OAuth, bearer-token authentication or custom headers.

Agents can find and use the connected tools without a separate custom wrapper.`,prompt:"Connect our MCP tools and help me work across our stack."},{id:"knowledge",category:"teams",title:"YOUR COMPANY KNOWLEDGE",tag:"SHARED SKILLS / CONTEXT",teaser:"One source for people and AI.",body:`Turn established company practices into a library of reusable skills. Both people and agents can draw on a consistent, current set of instructions.

Project context travels with the work, including the reasoning behind it.`,prompt:"Turn our operating procedures into reusable team skills."},{id:"proposals",category:"teams",title:"PROPOSALS, TOGETHER",tag:"SALES / REUSABLE SKILLS",teaser:"Consistent proposals, shared.",body:`Give your team a common starting point for sales proposals. Shared skills carry your company knowledge into each draft.

Colleagues can generate a proposal, then work together on revisions and the final result.`,prompt:"Create a sales proposal using our shared company skills."},{id:"onboarding",category:"teams",title:"ONBOARD IN ONE PROMPT",tag:"WORKSPACE / PERMISSIONS",teaser:"Give new people a head start.",body:`Explain the new teammate's role and ask Ardor to prepare their workspace. It can assemble the relevant project context and access permissions.

Collaboration features require a paid plan. Access remains under your control.`,prompt:"Prepare the workspace and context for our new team member."},{id:"seo",category:"teams",title:"SEO THAT KEEPS MOVING",tag:"MONITOR / REVIEW / UPDATE",teaser:"Keep every change reviewable.",body:`Use Ardor to follow your website's technical health and identify SEO problems. It prepares checked updates for page metadata, sitemaps and content priorities.

Review the proposed changes as you keep improving the site.`,prompt:"Check our technical SEO and prepare reviewable improvements."}],$r={id:"overview",title:"ONE AGENT. EVERY APP. ANY TASK.",tag:"ARDOR / PRODUCT OVERVIEW",body:`Ardor is an AI agent that builds, deploys and runs apps. Describe the result in plain words.

01 / ALWAYS IN THE CLOUD
Close your laptop. Start tasks from your phone. Your agent has its own cloud computer.

02 / BUILD TOGETHER
Vibe-code with other people and share private company automations, without making everyone set up a local project.

03 / REAL APPS. LESS OPS.
Go beyond one-prompt MVPs. Built-in serverless infrastructure runs your apps in the cloud, without renting expensive always-on servers.`},ardorFree={id:"free",title:"TOP GPT MODELS. FREE PLAN.",tag:"04 / FREE ACCESS / $0 A MONTH",body:`The Free plan costs nothing and comes with a generous token allowance, enough to build something real. It renews in rolling 5-hour and weekly windows.

GPT-6 ASTRA + GPT-6 SOL
Our top GPT models are open on every plan, Free included, in a limited-time promo with 10\xD7 usage.

GPT-5.6 TERRA + GPT-6 LUNA
Part of the Free plan as standard.`};var TM="M12.6454 7.20703L16.0854 3.76666C16.1385 3.71328 16.1683 3.64107 16.1683 3.56579C16.1683 3.49052 16.1385 3.4183 16.0854 3.36492L14.6391 1.91846C14.5857 1.86541 14.5135 1.83564 14.4382 1.83564C14.3629 1.83564 14.2907 1.86541 14.2373 1.91846L10.7973 5.35882C10.6165 5.5396 10.3101 5.40898 10.3101 5.15784V0.286275C10.3101 0.130554 10.1846 0 10.0239 0H7.97993C7.82426 0 7.69365 0.125544 7.69365 0.286275V5.15795C7.69365 5.41411 7.38734 5.53965 7.20656 5.35882L3.76148 1.91345C3.7081 1.86036 3.63587 1.83056 3.56058 1.83056C3.48529 1.83056 3.41306 1.86036 3.35968 1.91345L1.91339 3.35991C1.86036 3.41331 1.8306 3.48552 1.8306 3.56078C1.8306 3.63604 1.86036 3.70825 1.91339 3.76165L5.35347 7.20202C5.53424 7.38284 5.40369 7.68922 5.15254 7.68922H0.286275C0.130554 7.68922 0 7.81476 0 7.97549V10.0196C0 10.1753 0.125544 10.3058 0.286217 10.3058H3.00315C3.74138 10.3058 4.41938 9.92413 4.81605 9.30136C5.15386 8.77285 5.58835 8.31281 6.09671 7.94537C6.22225 7.85496 6.3478 7.76955 6.48336 7.69423C6.86005 7.47326 7.26179 7.29744 7.69365 7.18197C8.07416 7.07961 8.46502 7.02063 8.85879 7.00616H9.14501C9.5388 7.01653 9.92994 7.07386 10.3101 7.17691C10.742 7.29243 11.1538 7.46825 11.5305 7.68922C11.6611 7.76454 11.7866 7.84995 11.9122 7.94031C12.4244 8.30697 12.8613 8.76901 13.2028 9.30136C13.5995 9.92413 14.2775 10.3058 15.0157 10.3058H17.7226C17.8783 10.3058 18.0089 10.1803 18.0089 10.0196V7.97543C18.0089 7.81971 17.8833 7.68916 17.7226 7.68916H12.8563C12.5901 7.69417 12.4645 7.3878 12.6454 7.20703ZM5.85058 10.3108H5.84557L6.31762 9.83872C6.46864 9.65248 6.63864 9.48247 6.82487 9.33142C6.9454 9.23099 7.07595 9.14057 7.20651 9.06024L7.20962 9.05834L7.20651 9.05523C7.36217 8.9598 7.52284 8.87947 7.69359 8.80915C8.09539 8.64341 8.53733 8.55299 8.99931 8.55299C9.46134 8.55299 9.90328 8.64341 10.305 8.80915C10.4758 8.87947 10.6365 8.9598 10.7922 9.05523C10.9278 9.13556 11.0533 9.22598 11.1789 9.32641L11.2063 9.35388C11.3728 9.49172 11.5259 9.64487 11.6637 9.81131L11.6861 9.83371L12.1582 10.3058L13.9761 12.1239L16.0903 14.2383C16.1959 14.3488 16.1959 14.5296 16.0853 14.6401L14.639 16.0865C14.5285 16.197 14.3478 16.197 14.2373 16.0865L13.037 14.8862L11.9522 13.8014L10.3101 12.1591V18H7.69365V12.1606L4.97171 14.8862L3.76643 16.0915C3.71305 16.1446 3.64084 16.1744 3.56556 16.1744C3.49029 16.1744 3.41807 16.1446 3.36469 16.0915L1.91829 14.6451C1.86524 14.5917 1.83546 14.5195 1.83546 14.4442C1.83546 14.3689 1.86524 14.2967 1.91829 14.2433L4.03756 12.1239L5.84551 10.3158L5.85058 10.3108Z",ta=class{constructor(){this.frames=[],this.frame=0;let t=10,e=14,n=4,s=document.createElement("canvas");s.width=t*n,s.height=e*n;let r=s.getContext("2d",{willReadFrequently:!0}),a=new Path2D(TM);for(let o=0;o<80;o++){let l=o/80,c=Math.max(0,Math.min(1,(l-.44)/.4)),u=c*c*c*(c*(c*6-15)+10),h=u*Math.PI*2,d=Math.cos(h),p=Math.sign(d)*Math.max(.14,Math.abs(d));r.clearRect(0,0,s.width,s.height),r.save(),r.translate(s.width/2,s.height/2),r.scale(s.width/18*.94*p,s.height/18*.96),r.rotate(Math.sin(l*Math.PI*2)*.035),r.translate(-9,-9),r.fillStyle="#fff",r.fill(a,"evenodd"),r.restore();let g=r.getImageData(0,0,s.width,s.height).data,E=new Uint8Array(t*e);for(let f=0;f<e;f++)for(let S=0;S<t;S++){let x=0;for(let V=0;V<n;V++)for(let C=0;C<n;C++)x+=g[((f*n+V)*s.width+S*n+C)*4+3];E[f*t+S]=x/(n*n*255)>.38?1:0}let m=[];for(let f=0;f<e;f+=2)for(let S=0;S<t;S++){let x=E[f*t+S],V=E[(f+1)*t+S];m.push(x?V?"\u2588":"\u2580":V?"\u2584":" ")}this.frames.push(m)}}draw(t,e,n,s,r=!1){s=Math.max(0,s),this.frame=r?0:Math.min(this.frames.length-1,Math.floor(s%8/8*this.frames.length));let a=this.frames[this.frame],o=r?-20:s%3.4/3.4*13-3;a.forEach((l,c)=>{let u=Math.floor(c/10),h=c%10,d=Math.abs(h*.36+u-o)<.9;t.put(e+h,n+u,l,d?3:1)})}};var wu=" .,:;-=+*ox%#@MW";function IM(i,t,e,n){let s=Math.hypot(t+.5-n.x-5,(e+.5-n.y-3.5)*1.5),r=Math.max(0,Math.min(1,(s-7.2)/7.2)),a=1-n.clearance*(1-r*r*(3-2*r));return wu[Math.floor(Math.max(0,Math.min(1,i))*a*(wu.length-1))]}var ea=class{constructor(){this.duration=5200,this.started=null,this.skipAt=null,this.phase=0,this.presentation={x:0,y:0,clearance:0,opacity:0}}reset(){this.started=null,this.skipAt=null,this.phase=0,this.presentation={x:0,y:0,clearance:0,opacity:0}}skip(t){this.skipAt===null&&(this.skipAt=t)}elapsed(t){return this.started===null&&(this.started=t),Math.max(0,t-this.started)}remaining(t){return this.skipAt===null?this.duration-this.elapsed(t):Math.max(0,280-(t-this.skipAt))}draw(t,e){let n=this.elapsed(e),s=n*.001,r=Math.min(1,n/this.duration);this.phase=r<.28?0:r<.65?1:r<.84?2:3;let a=t.cols,o=t.rows,l=(a-1)/2,c=o*.47,u=(P,L)=>{let W=Math.max(0,Math.min(1,(r-P)/(L-P)));return W*W*(3-2*W)};this.presentation={x:Math.floor(l)-5,y:Math.floor(c)-3,clearance:u(.66,.765),opacity:u(.765,.9)};let h=new Float32Array(a*o).fill(-1/0),d=new Float32Array(a*o),p=(Math.sin(s*.92-1.2)+1)*.5,g=s*.39,E=s*.31,m=Math.cos(g),f=Math.sin(g),S=Math.cos(E),x=Math.sin(E),V=r>.74?1-Math.min(1,(r-.74)/.22):1,C=Math.min(a*.28,o*.45)*(.48+Math.min(1,s*.9)*.52)*(.35+V*.65),I=(P,L,W,B)=>{let $=L*m-W*f,G=L*f+W*m,ot=P*S+G*x,ht=G*S-P*x,pt=6.9/(6.9-ht),wt=Math.round(l+ot*C*.65*pt),kt=Math.round(c-$*C*.4*pt);if(wt<2||wt>=a-2||kt<7||kt>=o-8)return;let Y=kt*a+wt;ht>h[Y]&&(h[Y]=ht,d[Y]=Math.min(1,B*(.56+pt*.35)))};for(let P=0;P<210;P++){let L=P/210*Math.PI*2,W=Math.cos(L),B=Math.sin(L),$=1.5+.52*Math.cos(L*3+s*.24),G=$*Math.cos(L*2),ot=$*Math.sin(L*2),ht=.78*Math.sin(L*3);for(let pt=0;pt<15;pt++){let wt=pt/15*Math.PI*2+s*.23,kt=.26+.15*p,Y=(1.65+kt*Math.cos(wt))*W,it=(1.65+kt*Math.cos(wt))*B;I(Y*(1-p)+(G+kt*Math.cos(wt)*W)*p,it*(1-p)+(ot+kt*Math.cos(wt)*B)*p,kt*Math.sin(wt)+ht*p,.27+.65*(Math.cos(wt-.65)+1)/2)}}for(let P=0;P<3;P++)for(let L=0;L<160;L++){let W=L/160*Math.PI*2+s*(P%2?-.3:.3),B=2.35+P*.13;I(Math.cos(W)*B,Math.sin(W)*B*Math.cos(P*.86+s*.12),Math.sin(W)*B*Math.sin(P*.86+s*.12),.2+P*.06)}for(let P=0;P<d.length;P++)if(d[P]>.015){let L=d[P]*(r>.85?Math.max(0,(1-r)/.15):1),W=P%a,B=Math.floor(P/a),$=IM(L,W,B,this.presentation);$!==" "&&t.put(W,B,$,L>.72?3:L>.38?1:2)}let b=["EXCITING THE PHASE FIELD","FOLDING THE CHARACTER LATTICE","RESOLVING A COHERENT SIGNAL","OPENING THE INTERFACE"],U="A R D O R / SIGNAL GENESIS";t.text(Math.floor((a-U.length)/2),3,U,1),t.text(3,5,`PHASE 0${this.phase+1} / ${a}x${o}`,2),a>50&&t.text(a-24,5,"MONOCHROME / LIVE FIELD",2);let _=b[this.phase];t.text(Math.floor((a-_.length)/2),o-7,_,1);let y=Math.min(36,a-10),w=Math.floor(y*r);t.text(Math.floor((a-y-2)/2),o-5,"["+"=".repeat(w)+".".repeat(y-w)+"]",2);let H="[ ENTER / ESC ] SKIP SEQUENCE";return t.text(Math.floor((a-H.length)/2),o-3,H,2),this.skipAt===null?1:Math.max(0,1-(e-this.skipAt)/280)}};var na={source:"rickroll-roll.gif",sourceSha256:"08e2318b5fefed88c660f42ec527c20c27a4a3b9aa4982c4aa0cef1bacd25e1f",frameCount:40,durations:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],variants:{desktop:{width:52,height:25,packed:"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"},mobile:{width:30,height:25,packed:"MjREREUzVVVURUNVVDMzExIhI1VEVVMjRFVVVVQyMgEQJERDVCEAJDNVYyEQMRMzITNDJGQiMzVFVFMxEjMRIUMkm7yEECNVUlNEMhIDIzM53My6QiJVVVM0EzEBATR5mHeJZCNVYzVUM0ICAjN5mXh4RVVFYiIkExQhEjJHmIZmRTJVY0EzNDRTEzM3iHZlUkQ2VURCRCRUI0RUaJd1dUdlZDVDIiQ0I0NFWZd3/9uYdVVTUiIjM1ZoeJl47u//+2Q1REM0RXnvpWd+7e7t3mVFJEMRWe/u3arO3e7u73NVI0MRS/7u7brO3u7u73Q0I0Q0Wv7u7qvd3u7u37REM0EySv7u7sze3v7u7tdEMjNEOe/u7rzu7u7u3edUM0MTVp3+7c3u7u7+7vdVREM0ap3+/c3u7u7/7vdFREM0iq3//d3u7u//7vdEVUNFnc///s3u7u//7vZEVVVVaqrf/rvO7v//7tZEVmVVVlfN/rq+7v//7rVEMjREREUzVVVERUNVVDMzExIhI1VEVVMjRFVVVVQyMgEQJERDRCEAJDNVYyEQMRMzIjNDJnZUMzVFVFMxEjMRIUMkrNzKQCNFUlNEMhIDIzMnu6qZcyJVVVM0EzEBATNYmIdohCNVYzVUM0ICAjNXmJd3VVVFYiIkExQhEjMmmJhmVTJVY0EzNDRTEzM1aIdmY0Q2VURCRCRUI0RUOZh3u3h2ZDVDIiQ0I0NGaZiH3v/tuFVTUiIjM1Z7xpmH7e7u74U1REM0RYvv+Hie7e7t3qZFJEMhSP7u7qrO3e7u7rVVI0MRSP7u7bvd3u7u7sU0I0Q0R+7u7cve3u7u7vdEM0EyN9/u7rzd3u7u7fpUMjNENp/u7cve7u7+7e10M0MTVp/u7c3t7u7/7u1lREM0ea/+/czu7u7/7vpFREM1mY7//d7u7v//7vdEVUNEeq///rzu7e/+7rVEVVVVfLi//rrO7czu7ZVEVmVVVma9/rq//cve7WREIjREREUzVVVERUNVVDMzExIhI1VEVVMiRFVVVVQyMhEQJERDRCIhJDNVYyEQMRMzIjNDJ6qoYzVFVFMxEjMRIUMjnMzLpBNFUlNEMhIDIzMUuYd3lSJVVFM0EzEBATNEqZh4lSNVYzVUM0ICAjNVmIh2dVVFYyIkExQhEjMjeIh2VTJVY0EzNDRTEzM1Noh3ZnU2VURCRDRUE0RUOZl2n+yYdTVTIiQ0I0NXmZiWvu///XVUUiIjM2eu+Yh4/e7t3sY1REM0Rr7++3qu7e7u7sZFJEMRR+7u7brO3e7u7tVVI0MRN97u7cre3u7u7vc0M0Q0Rr/u7dvd3u7u7e1lM0EyNp/u7dzd3u7u7d+EMjNEJX3+7dzu7u7+7u+FIkMTVY/+7d3u3e7/7u1lREM0d67/7d3u287+7vhFRENHl47/7d3v26z+7aVEVUNFma/+/rvv+6zt7GREVVVVatif7rrv/avd7FREVmVVVWfu/arP/rre7mREIjREREUzVVVERUNVVDMzExIhI1VEVVISRFVVVVQyMgEQJERDREZlNDNVYyEQMRMzITNDKN3ctjVFVFMxEjMRIUMye6qZiDNFUlNEMhIDIzMSiphmeDJVVFM0EzEBATNCeYmHdSNVYzVUM0ICAjNEaYiGZVVFYyIkExQhEjMiV5h2VjNVY0IzNDRTEzM1NZmHapdWZURCRDRUI0VUWZiHf//spkVTMiQ0I0R62ZmWru7u/7ZUUiIjNHvv+4iL/d7u3tY1RFM0R+/u7Xqt3e7u7tZFJEMhR+7u7rq+3e7u7uZVI0MRN8/u7cvN3u7u7vtEI0Q0Rr/u7czd3v7u7t+VM0EyNo/u7czeu97u7t61MjNEJX7+7c3uua7u7u+VI0MTZY7//c3uyq7u7vxlREM1h57/7d7v273t3uZFREM2mI3/7sz/7Lz++2REVUREaL6r/rv//c3t7FREVVVVVoeO/rvv7t7t7nREVmVVVVfu/arO7e7t35REIjREREUzVVVERUNVVDMzExIhI1VEVUIjQ1VVVVQyMhEQJERDRGqqhjNVYyEQMRMzITNDOMzMy0VFVFMxEjMRIUMyW5iHeVNFUlNEMhIDIzMRS4mGeUJFVFM0EzEBATNCaYiXZzNVYzVUM0ICATNEV5iGZVVFYyIkExQhEjMiVpiGZkNVY0IzNDRTEzM1NImHfMlndURCRDRUI0VliZiJbu//6VVTIiQ0I2eu+6iFzu7u79dUUiIjRc7+7Zmc7e7u3uY1RFM0R+7u7nqt7e7u7udFJEMhR97u7qq+7v7u7vdFI0MRN97u7rvOqs/u7u9kIkQ0Rs/u7rzeqa7u7t+2M0EyNp/u7rzeua7u7u7nMjNENY/+7s3u3L7e7u+1IkMTZ43/7s3v7d7u7/5lREM0mIv/7s///u7u/JZFREM0eZz6/rz///7u+1REVUREV7tq/rvu7v7u73REVVVVVXWe7aru7t7u36REVmVVVVbc65rO3e7u3tZEIjREREUzVVVERUNVVDMzEhIhI1VEVUREVFVVVVQyMhEQJERDRHzdykNVYyEQMRMzITNDOLvMu5ZFVFMxEjMRIUMiOpl3aJRFUlNEMhIDIzMQOJiXiFJVVVM0EzEBATNCSIiYZzNVYzVUM0ICATNEVYmXZVVFYyIkExQhEjMiVYmYdlNVY0IzNDRTEzQ2VYiHfOuHdkRCRDRUI1aJ2piIbu//+2VTMiQ0JJvv66h27u7u3+dUUiIjRv7u7qmc3d3u3uY1RFQ0WP7u7nqsuc3+7vdFJEMhSO7u7qq9qZ3+7vdFI0MRSP7u7qvNup3u7u90I0Q0R+7u7rvd7K3d7u7XM0EyN97u7rzu7u7O7u75IjNENq3u7rzv/+/+7u/WIkMTaZvu7s3v//3///51REM0aYrv7s/v////+XZFREMzR6p6/az+7u7u7WREVUREVWZq7Kvt7u7u74REVVVVVVWt6pre3t7u7sVEVmVVVVbLuZm93d7u7uZEIjREREUzVVRERUNVVDMzExIhI1VEVURVZVVVVVQyMhEQJERDVH3dzGNVYyEQMRMzITNDKLu7u7ZFVGMxEjMRIUMiOJl2Z6RFUlNEMhIDIzMQKJmYiGJVVFM0EzEBATNCOJiIZjNVYzVUM0ICATNEVHmHZVVFYyIkExQhEjMiVYmYd1RVY0IzNDRTE0RHZoiHfeuHdkRCRDRUJGi++piXf9//+1VTMiQ0J+/+66h4/t7u39dUUiIjSf7u7ams2Zvu3uY1RFQ0Wv7u7Xq9qYnu7uZFJEMhW/7u7qvO/Jnu7vdVI0MRSv7u7qre7tzt7u+EI0Q0Wf/+7r3u7//M7u74M0EyWtvO7qvu7///7u77MzNESIm+7r3v/////u73IkMTaanP7s7u//3///+VREMzR7uv7r/u/u/u+nZFREMzRXeP7azu7u7u72REVUNEVVat25vt7u7u76VEVVVVVVXO6pre3u7u7uZEVmVVVVbdyom93e7u7vdEIjREREUzVVVERUNVVDMzExIhI1VEVURVZVVVVVQyMhEQJERDVFzdzHNVYyIQMRMzITNDJ7u8u7dFVGMxEjMRIUMiKKmHZ6VFUlNEMhIDIzMQJ5iYiHNVVVM0EzEBATNCOJiJZkNVYzVUM0ICATNEVHmHdlVFYyIkExQhEkMiVYmYdkNVY0IzNDRTFEVodomHbKdmVURCRDRUJYv/2peXju7slkVTMiQ1TP7u65hn7cq9/5ZUUiIkfu7u7KiN7biM3tY1RFRFnu7u+4mu7uqM7tZFNFQjv+7u/am/7v287uVVI0MUv+7//qre7v/+3fhFI0Rb3//Zq7rf7v//7u+3M0J63buZrKvv7////u77M0Nr7d3L7czu7////+75I0QWvd7//bzu7/7////GREMzV3n+7d3u7u7u+5dUREMzRVj+7b3u7u7u7nREVUREVWn+7avt7+7u78VEVVVVVVj+7Zvt3u7u7uZEVmVVVVj+/ZnO7e7u7vhEIjREREUzVVVERUNVVDMzExIhI1VEVVREZFVVVVQyMhEAJERDVGzNylRVZCIQMRMzITNDJ7vNy6ZFVWMxEjMRIUMyOZmHaKRFUlNEMhIDIzMQKJiXiINVVVM0EzEBATNCOIiYZkNVY0VUM0ICATNEVYmXZVVFYyIkExQhEkMiVpmXdTNVY0IzNDRTFFVoZomHaYZFVURCRDRUJpz/ypiIn/6ndTVTMiQ1f/7uyphW7dy962VUUjI1vu7u/Jid7tmJ75U1RFRG7u7u+4iu7v2K76VFNFQn/u7u/Zq/7u+6/6RFM0NL/u7//rnP7v/+7tU1M0bP7u/aqqvu7v//7vl1M0bd3c66q7vv7////u/3M0Xf7u7u/qv+7////u74M0NJzb///c3u7//////GVEM0Z33+/czu7u7u/upUREM0RX3+7d7u/u7u+mREVUREVX3+/avt7+/u74REVVVVVW3t7art3v7+79VEVmVVVW3//arO3e7+7vZEIjREREUzVVVERUNVVDMzExIhI1VEVVM0VFVVVVQyMhEAJERDVGu8uDRVZCIQMRMzITNDJ7zNzHVFVWMxEjMRIUMyOZh3eYRFUlNEMhIDIzMROZmXeHNFVVM0EzEBATNCWIiXVzNVY0VUM0ICATNEVYiGZVVFYyIkExQhEkMiVpiHZTNVY0IzNDRTFFVoZoh3ZnU1VURCRDRUR5z/qZiIr+uHZDVTMiQ2v/7vqZhm7u7ux1VUUiI33u3u+5mN7u2p3nQ1RFRa/u7u+niu7u6nrXVFNFRO/u7u/am/7u/IzWRFM0SP7u7//Zre7u/rzoQ1M1r+7+/qqrrf7u/+3sVVM2zd7d66qqvu7v///u10M1r+7u7v/rz+7////u/WM0WM7c///rv+7////++VVENFZ6/u/cz+7v7///pUREM0Vp/u/d7u7u7vx3REVUREVp/u/svu7+7u+1REVVVVVp/u/srt7v7u/XREVmVVVZ/u/dne3u7u7qVEIjREREUzVVVERUNVVDMzExIiI1VEVVIiRFVVVVQyMhEQJERDRXiGRDRVZCIQMRMzIjNDStzMxjVFVWMxEjMRIUMjipiImDNFUlNEMhIDIzMTmZh2iDNFVVM0EzICATNDeIl2dSNlY0VUM0ICAjNEeIh2ZVVFYyIkExQhEkMiaIhmVTNVY0IzNDRTFEVXSIh2Y1Q1VURCRDRVRnrdaZh43Xd1ZDVTMiQ33v/vepho7v/rhFVUUjJc/u7u6phv3u7v+FU1RFSP7u7u+XjO3u7u+lVFNFSf7u7u+pnO7u7syVRVNESv7u7//Jre7u/Zl0MkM1jf7/7b3Kzu7u/IiFRFNH3e7bmb7bvu7u/Ky2ZDM33d3cu9/b7u7//u7+dUM2v//d7//r7//////vZVVEVnnP7//c7//////6RFVEM0fv7u/e7v///byVREVURFj+7v/rz+7u/YVEREVVVVn+7v/rvu7/78ZEREVVVVj+7+/crt7u7+hEREIjREREUzVVVURUNVVDMzExIiJFVEVVIjRFVVVVQyMhEQJERDRVVDJDRVYyEQMRMzIjNCbN3Mk0VFVWMxEjMRIUMkmqqZtSRFUlNEMhIDIzMVqIdnpSJVVVM0EzICATNDiZd2hCNVY0VUM0IDATNEeIhmZVVFYyIkExQhEkMiaIdmRTNVY0IzNDRTFERHWYh2YlQ1VURCRDRVNXiqaZd3yFdlZDVDMiQ3nO//aplo//7IdFVTUjJe/u7uuZZv3d7v9lQ1RFSP7u7u6HjO3d7d+FVFNFSf7u7u+one3u7u+VRFNFOf7u7u+5ru7u3d2UMkM1W/7v/+/Jzu7vuIqFNENFfv/7zO7a3u7uua6UYzM2zNupvf/b7u7v3N75ZUM2vuy73//b7/////39VWVEasvf///c7//////nRFVENGr/7//e7v///ex0REVURGv+7v/q3+7u+WVEREVVVX3+7//qvu/u/WREREVVVW3+///qre3u/XREREIjRUREUzVVVERUNVVDMzExIiI1VEVVMiRFVVVVQyMhEQJERDRCIQJCRVYyEQMRMzITNDeKhkQzVFVGMxEjMRIUM43MzKMSRFUlNEMhIDIzNJmIeKUiJFVVM0EzECATRpmXd5dCNVY0VUM0IDATNWmXZnRVVFYyIkExQhEkM2iHZkRTNVY0EzNDRTFERGiHZmUkQ2VURCRDRUJFZ1iZdnVEZVZDVDMiQ1RorJepd8/8l3ZFVTUjJHvv/7V4dd3u//hFQ1RFSP/u7ux4jO3d3e5lVFNFSP7t7v2Zvt7u3u90RFNEOf7u7u+prdze7u90MkM1Wv7u7u+6zcma3d91NEM0Ov7u7u/K3tqb7u9kYzM0XP/v/u/b7/7M7u+kZUM1ea3v/u/b3//+3u73RWVEeYnv/+/a3v//7u+URFVEaav/7+/d3u/v/+hEREVUWd/////d7u7vh2REREVVVo/////Zve7vpUREREVVVa/u///YrO3fpUREREIjRUREUzVVVERUNVVDMzExMiI1VEVVIjRFVVVVQyMhEQJERDRCAAJCRVYyEQMRMzITNEV3QyMzVFVWMxEjMRIUNK3My1ISRFUlNEMhIDIzR6u6m4QiJFVVM0EzICATWIh2aYZCNVY0VUM0IDATNpmHeFRVVFYyIkExQhEkNYmGZ0RTNVY0EzNDRTFEQ3iHdVUkQ2VURCRDRUJFV1mZdlUzZVZDVDMiQ1NXimmZd+7JhmZFVTUjI1e//5aZdu3v/9dFQ0RVR+/+78hnfO3d3fhVVENFOP7t7vyYru7d3vtkRFNEOv7u7u6ZvL3t3u1kMkM1W/7u7u+pu5nO7u5lNEM0O/7v7u/L3anP7vxUYzM0XP7+7u/a3+ve7u+EZUM1a//+/u/b7v/t7u72RWVFd57//+7b3v//7v+URFVGmJ3//+/czu7//+hERFVUbe//7//e7u7uh2REREVVV6/////Zve7vhEREREVVVs/v///Hq+3fhEREREIjRUREUzVVVERUNVVDMzExMiJFVEVVIiRFVVVVQyMhEQJERDRCAAJCRVYyEAMRMzITNERmMiMzVFVGMxEjMRIURrzMuCICNFUlNEMhIDIzWcy7vVMiJFVVM0EzICAUWIh2imVCNVY0VUM0IDATR5l4aURVVFYiIkExQhEkN5mGZzRTNVY0EzNDRTFERJl3dFUkQ2VURCRDRUJEVomZdlQjZVZDVDMiQ1NHeImZeNyXdmZFVTUjI1ee/2iZaO7//5ZFQ0VFR8/+76ZmbO3d3fdVVENFSv7u7vyYvu3d3vdUNFNES/7t7vyZvN/t7vlUMkM1bP7u7u+qyonu7vpVNEM0TP7v7u+6y5nu7vlEYzM0bf7/7u/L79vu7u+EZUM1ac/+/u/a3//e7u/2NWVGh43//+7azv/+7u+URFVFiZ7//+7c3u7///hERFVUbv//7//e7+7uh2REREVVV6/////ZvO7vhEREREVVVt/v///Ymt7fhEREREMjRVREUzVVVERUNVVDMzExMiJFVEVVIiRFVVVVQyMhEQJERDVCAAJCRVYyEAMRMzITNDNVISMzVFVFMxEjMRIURpy5ZSICNFUlNEMhIDIzbMzb2jMiJFVVM0EzICAUZ4h3ukVCNVY0VUM0IDAkWZh3mTRVVFYyIkExQhEkWZZmhjRTNVYzEzNDRTE0SId2ZFUkQ1VUNCRDRUJEV5iZVjITZVZDVDMiQ1NXh6mZaXZVVFZFVDUjJFfP95mJbv/8h1VFQ0VVa+/++1Zljt3e/mVVVENGr+7e79mZ7t3d34VUNFNGv+7e7uqa7u7t76VUMkM2z+/u7vqL7cz+78ZVNEM2v/vf7v2r7smc/9ZEYzM2zKm/7v2s/+qc/vhFZUM3y6m/7u/M7/697v+VNWVXy9vv/u/M3//+7u90RFVH3O///+7L3u////lERFVVrv///+7d7u7/mHREREVVZ4/////bzO7vhEREREVVV//u///Yis7e1kREREMjRVREUzVVVERUNVVDMzExMiI1VEVVIiQ1VVVVQyMhEQJERDVCAAJCRVYyEAMRMzITNDFEISMzVFVFMxEjMRIURHh1VCECNFUlNEMhIDIzW9vMyCMiJFVFM0EzICAUV5iJu0UyNVY0VUM0IDAUWYdnqjRUVFYyIkExQhEkWYd3pzRTJVYzEzNDRTE0WYdmdFUkQ1VUNCRDRUJEaJeoVTIDZVZDVDMiQ1NXaZiod2U0VFZFVDUjNGnet6iInduXZVVFQ0VWnf//x2d2vu/+2EVlVENY7+7u/riJ/d3e/FVUNFNJ/u7u7qeL7t3t7WVUMkNJ/u///7is7d7u7mVVNENZ/v2qzNmb7u3N/WREYzNa/uup3ey87e65q4VFVUNs/t28//277u/avNpUNWV97d7//v287//93d1kRFV+7e/////M3//+7vdERFZY7////+7M3u//7ZREREVVd4////7N3e7vdkREREVVVu/u///Yms7u5kREREMjRVRFUzVVVERUNVVDMzExMiJFVEVVIiQ1VVVVQyMhEQJERDVCAAJCRVYyEAMRMzITNDJEISMzVFVFMwEjMRIUQjQzRCEBNFUlNEMhIDIzSL3bdSMhJFVFM0EzEBAUWs3c2kUyNVYzVUM0ICAkWId4y0RUVFYiIkExQhEkeXh3uTRSJVYzEzNDRTE1iHdnlVUkQ1VUNCRDRUJFiYiZVTIDZVZCVCMiQ1RWeZiZZVQkVFZEVDUjRWnMiZeHdmZVVFZFQkVZvv//aIh4/9p2VUZlVEOP/u7ut3V97u/+dFVlNFSv7u7u+4me7u7ftVVUMkW/7u7u+4ie7u7e1kVVNEbv7u7/qIm+7u7vxUVUUzj+7u78qqqt7u7vtUVFVUr+7u/839u+7u7vxmdVNGz+7vzv//y97u7++pmGRVz+7/////y9/u///bp1RVjv/+/v/+297////t10RFV4iN///+7O3v///9pkREVVVu/v//6onO77d2VEREMjRVRFUzVVVERUNVVDMzExMiJFVEVVIiQ1VVVVQyMhEQJERDVCAAJCRVYyEAMRMzITNDJEISMzVFVFMwEjMRIkQjQyRCEBNFUlNEMhIDIzR6zJZCMhJFVVM0EzEBAUW93c2UUyNVYzVUM0ICAUWId5y0RUVFYiIkExQhEliYl4uDRSJVYzEzNDRTE1iGdnpFUkQ1VUNCRDRUJFiYeZVTIDZVZCVCMjQ1NWeYiZZVQkVFZFVDUjRWm7iZd3ZlVVVVZFQkVpvv/+aZh4/rdlVUZlVESf/u7tloV97v/6RVVlNFXP7u7v+5md7u7vhFVUMkbv7u7v+7it7u7vhVVVNEj+7u79mJu97u7vhEVUUzv+7v/7qqmu7u7vhEVFVU3+7u/878y97u7vhEVlNG7u7v3v//y+7u7v13qnVV/u7////vy9/u///LqXRVz//////u297+///rumRFaIif///+7O3/////+lREVVWP7v//yZvf/ZmIdUREMjRVREUzVVVERUNVVDMzExMiJFVEVVIiQ1VVVVQyMhERJERDVCAAJCRVYyEAMRMzITNDJEISMzVFRFMwEjMRIkQjQyRCEBNFUlNEMhIDIzSL3JZCMhJFVFM0EzEBAUa93c1zUyNVYzVUM0ICAkWId5uTRUVFYiIkExQhEliYl4xyRSJVYzEzNDRTE1iHdnlFQkQ1VUNCRDRUJFiYeZVTIDZVYyVCMjQ1RXiYiZZUQkVFZEVDUkRWrMmZd4ZlVVVVZFQkVqz//9aZh4/rdkVUZlVES//u7tpnV97v/4NVVlNFb+7u7v+5mt7u7vZFVUMkf+7u7/+rme7u3vdFVVNEn+7u/KmZu97u7vdEVUUz3+7+/Jq8qt7u7udEVFVU7u7u/c/7zN7u7vdEZVNG7u7v7v/uy+7u7vlnqVRV/u7+///uy+/u//67qVRV3//////uzO////7LqFRFeIjP///+3d3+////50REVVbP7///yZzv+8y4ZEREMjRVRFUzVVVERENVVDMzExMiJFVEVVIiQ1VVVVQyQhERJERDVCAAJCRVYyEAMRMzITNDFEISMzVFRFMwEjMRIkRndTRCEBNFUlNEMhITI1nczMhCMhJFVFM0EzERAmiZmas0UyNVYzVUM0ICAniHdokyRUVFYiIkExQhE3iZd3UjRSJVYzEzNDRTFGiIdmVFQkQ1VUNCRDRUJFiZeZVTIDZVYyVCMjQ2Z6iaeZdlQkVFZEVDY1WM//epeK6odlVVZFQkWO//7vhXdb7/63VUZlVEXf7u7u+peN3d7+VVVlNFf+7u7u/Ii+3u3vY1VUMkf+7u7+7Zmu7e3vdFVVM0n+7/ze7qq+7u7vdEVUUzz+/qrO7su+7t7vdEVFVU3/7Krf7tq+7tzMdEVVNF7e7dz/7uy+7tyqlkVUVV7+7v///uy+//7bdUREVVr/3////u3N/v/8hURERVZ4z/////y9/9u5ZEREREVX7+////qb7/pVREREREMjRVRFUzVVVERENVVDMzEyMiJFVEVVIiQ1VVVVQyMhERJERDVCAAJCRVYyEAMRMzITNUNEISMzVFRFMxEjMRIkeauVRCEBNFUlNEMhITJIvczMZCMhJFVFM0EzIRA6iId5YkUyNVYzVUM0ICA5mZdnQiRUVFYiIkExQhE5iJdnMjRSJVYzEzNDRTFGiZd2RFQkQ1VUNCRDVVJGmZeZRTICZVYyVCMjRHetmqepmGQkVFZEVDY1a+//eZea/9qWVVZFQkWf/+3vpGZs7e/7VUZlVEXf7u3u+4ie3d3eZVVlNFb+7u7u7Yiu3d3uZFVUMkf+7u7u7pm+7u7vZFVVM0n+7/7u7ru+3e/vdEVUUzv+/s/u7sq927z/dEVVVUz/ya3+7uu+65m8hEVVNF3eypz/7vu+/8uslUVUVV3+7c///vy+/+3bZEVEVVjv3////+7N/8uWRERERVV5//////q9/9ZUREREREVt//////mc//hEREREREMjRVRFUzVVVERENVVDMzEyMiJFVEVVIiQ1VVVVQyMhERJERURCAAIyRVYyEAMRMzIVaYh1ISMzVFRFMwEjMRJazczYRCEBNFUlNEMhITO9u5mHRCMhJFVFM0EzIRGcqHZnMUUyNVYzVUM0IDB7mHh2ISNUVFYiIkExQhFKiXh1MjRSJVYzEzNDRTJGqZh2VFQkQ1VUNCVDVVWKmaeqd1QSZVYyVCMjZq3/ipiq7+x0VGY0VDZI3/7vpXhr7d73VVZFQka//t3e2YeL7d3qVUZlVEbu7u3d7Yi93d37RVVlNFf+7u7u7qq+/u79VFVUMkr+7u/u37qqrP7tZVVWM0v+7+7+3uzLme7udEVUUzz+7///7u3Oyu7vpUVVVU3+/v///uzP/t79ZEVVNF7fyK7//uzO/v+2REVUVV3/24v//+7O74dUREVUVVev/t///+vO78VERERERVa/7////+m+7vdEREREREff79/v/9ic7vhEREREREMjRVRFUzVVVENENVVDMzEyMiJFVEVVIiQ1VVVVQyMhERJEVlVSAAIyRVYyEAMRMzI3rdzHISMzVFRFMwEjMRSc3NzFNCEBNFUlNEMhITTcyYZlNBMhJFVVM0EzIRPduYh3MkUyNVYzVUM0IDGKmHeGISNUVFYiIkIxQhI5mYiGMjRSJVYzEzNEVUNnqZl2ZVQkQ1VUNCVTVnfKmZeazHUiZVYyVCMliu/veYiq3v+kVGZEVDWO/+3fpGZq7d3WVVZFQkfv7u3e+oiZ7d3mVUZlVEn+7u7t7Yq97d73NVVlNFv+7u7t7pu73v/5RFVUMT3+7u/+3svLqb3rVVVWM07u7+//7t3cqL3vdEVUUz7+7///7t3e/O79ZEVVVU7u7/7u/t3e///XREVVNF/u7bnd/93O/5dkREVUVVz+7srO/+7d74REREVUVVfP7u7//8vO7uZERERERVj//////7rO7vdEREREREr+78///6it7vhEREREREMjRVRFUzVVVENENVVDMzEyMiJFVVVVIiQ0VVVVQyQxERJFaYhzEAIyRVYyEAMRMzJazdzaMSMzVFRFMxEjMRbdzKmURCEBNFUlNEMhIUbdyoZWRBIhJFVFM0EzISTbuYaHMUUyNVYzVUM0IDF6mZaGIiNUVFYiIkIxQhJJmZh2MjRSJVYzEzREVlaYmZhmdnQkQ1VENCVEaK/4mYeK39ciZVYyVCRq3/7uZ3aa3d+EVFZEVDj/7u3fpniZ7d6mZVZFQkr+7u7d+XmY7d+lVUZlVE3+7u7t64vN7u+1NVVlNE7u7u/t7JvM3e/VNFVUMk7u/+/+3szsypm4RVVWM07u////7s7t7Kq7ZEVUUz7////+3c7t/+33VEVVVU7u//67zN7d//2VREVVNF/+//253u/d/XZUREVUVVjf7+7d/97d75REREVUVVf//////83d7tZERERERVr+/////7zd7vdEREREREv+/+///5nN7vhEREREREMjRVRFU0VVVENENVVDMzEyMiJFZnZ1IiQ0VVVVQyQhERJXvd3JIQJCRVYyEAMRMzSt3N3bQSMzVFRFMxEjMSft24dlRCIBNFUlNEMiIVjt2oiHRBIhJFVFM0I0ISTJmYZnMUUyNVYzVUQ0MDF6mZd1IiNUVFYiIkJCUzZpmZl2MjRSJVUzEzRVea7JiIeHdnQkQ1VENCeL7/7ll5Sa3+YTZVYyVCz/7t35Rmi63exEVFZEVD7u7t3fp53I7d51ZVZFQk7u7u3eyZzH7e5lVUZlVE7u7v7d+q3d7u5kNVVlNE7u/u/u7b3c7u+ERFVUMk7v///+7b3c7u+2VVVWM07u/+/+uqrd7//bl2VUUz7u7+/8qq3d///sqHZVVU//7//+3d/dzf/+qGVVNFm///7////d/Xd3ZUVUVVWv/////97d/2REREREVVa//////93d75RERERERVbf7v7//83d7sVEREREREfv7+///6vd3uZEREREREMjRVRFU0VVVENENVVDMzEyMiJFZnd1IiQ0VVVVQyQxERNYve3JMQJCRVYyEAMRMzSu3N3bQSMzVFRFMxEjMSjs24dlRCIBNFUlNEMiIVnd2oiHRCIhJFVFM0I0ISXImYZ3MUUyNVYzVUQ0MDJ6mZd1IiRUVFYiIkJCU0h5mZl2MjRSJVYzEzRXit+piHd2dmQkQ1VENCiu/+7lh5W677USZVYzVC/+7d3pZ2q63fk0VFZEVD7u7t3vua3I7exlZVZFQk7u7u3eyq3I7e1lVUZlVE7u7v7u+q7d7u5kNVVlNE7u/u/+7M7c7u90NFVUMj7u/+//65q97u+1RVVWM07u7u7+uYrd7v/YdmZUUz7u7v/+y77d////66l1VU//7/3v///dzv//65l3RGee/////v/e/nm93KhmRVWe/v///+7e/3RWZlVERVWf7u///+3e/4RERERERFa/7u///+ze76VEREREREbf7u7//+rN3sZEREREREMjRVRFU0VVVERENVVDMzEyMiJFZnZlIiQ0VVVVQyQxERNXvNzIIQJCRVYyEAMRMzSt3N3bQSMzVFRFMxEjMSjt24d1RCIBNFUlNEMiIVru2od2RCIhJFVFM0JEISbJmYZmMUUyNVYzVUQ0MDKJmZd0IiRUVFYiIkJCU0h5mZh1MjRSJVUzEzRnit+ZiHZmdVUkQ1VENCi//+7Wh5a63GMSZVYzVC/+7d7oZ1qq3vg0VGZEVD7u7t3vmJ3J7etlZVVFQk7u7u7euY3I/e1lVUZlVE7u7u7u2a7d7u50NVVlNE7v/u/+/K7c7u90NFVUMT7v/+//2ZrN7u+lRVVWM07u7u7uuqzd7u+2VEVUUz7u7v/v3f7d7v7+p3dVVU////7v//7d7v///rqYVVee///////d76///rqYZlWO/u////3e/4Z3iqhlVVWf7u////zO/6VERVRERFWf7u////vO77VEREREREa/7u7///q977VEREREREMjRVRFU0VVVERENVVDMzEyMiJFVWZlIiQ0VVVVQyQxERJGisulEQJCNVYyEAMRMzOM3dzcQSMzVFRFMxEkMSft25iFRCIBNFUlNEMiMVntyodmRCIhJFVFM0JEITe5qXZ2MUUyNVYzVUQ0MDKYmYd1IiRUVFYiIkJCUzVpmZdlMjRSJVUzEzRWeK6ZiIZWZFUkQ1VENCiL7/+4h4a6uFMTZVYyVC7/7d7WZ2i63/k0VFZEVD7u7d3vmJ7J7e1lZVZFQk7u7t3fqK257d9lVUZlVE7u7+7u2p7d7u+FNVVlNE7u/v7u+77N7u+ENFVUMT7v/+/+/Kzd7u+2RVVWM07v/+79uZvd7u/FVEVUUz7u7v/8ua7e7v/YdVVVVU////7u7d7e7v//+6mGNFm///7////e7v//7KqYZFV///////ze/3nf/9mGVFWP7u////vP/8VXeHVURFWP7u////u+79ZEREREREWP7u7///qt/+ZEREREREMzRVRFU0VVVERENVVDMzEyMiJFVVVVIiQ0VVVVQyQxERNGiamDEQJCNVYyEAMRMzN73czaMSMzVFRFMxEkMSjty5iURCIBNFUlNEMiIVjtyXZkNCIhJFVFM0JEITi7qHZ2IUUyNVUzVUQ0MDKZmYaFIiRUVFYiIkJCUyRZmZd1MjRSJVUzEzRUeIyZmJZWZFUkQ1VENCd4z/+5iIa6uFMSZVYyVCz/7d7mZ3a67/k0VFY0VD7u7d3viJ3J7d5lZVZFQk7u7t3uuJ257d91VUZlVE7u7+7uya7d7u+FNVVlNE7u/v7u+63N7u+ENFVUMj7v/+/u/M7d7u+2RVVWM07v/+/+3Lzd7u/FVEVUUz7u7u/8qZ3d7u/XZVVVVU/+///sqr/e7//+upZVNF////7u3f/e///+yoZlVVeO/+////3e/nz/+3VURVWP//////3P/7ZndkRERFWP7u////2+7+ZEREREREWP7u////y97vdEREREREMjRVRFU0VVVERENVVDMzEyMiJFVEVVIiQ0VVVVQyQxERJFZlVSEAJCNVYyEAMRMzNazd2lISMzVFRFMxEkMSjczdyjRCIBNFUlNEMiMUfcqHZjRCIhJFVFM0JEISbbmIeGIUUyNVUzVUQ0MDKZmHh0IiRUVFYiIkJCUyJamYdlMjRSJVUzEzREVlWJmZhWVFUkQ1VENCVVeL7KiYaqh1QTZVYyVCV77/72iJWa3/xEVGY0VDz/7t75ZmfJ7d+mZVZFQk3u7t3fuIzH7d+lVUZlVE7u7+7u2Yzc7u+lNVVlNE7u7v7u+q3b7u+1NFVUMT7u/v7u7a3b7v/GRVVWM07v/+/u7s7b3Ly1VEVUUz/////+7t3s7KiWVEVVVU7u///+7t3t/+umRFVVNG/+7/67vP3t///WREVVVVz/7+yqv/7t/ohlREREVVaf7u3N//zN/8VERERERVWf7v////y97vdEREREREWP7v////yt7vhEREREREMjRVRFU0VVVENENVVDMzEyMiJFVEVVIiQ0VVVVQyQxERJFVURCEAJCNVYyEAMRMzM4q7lkISMzVFRFMxEkMSWszNyjRCIBNFUlNEMiMUfbmHeDRCIhJFVFM0JEISXJiIeGIUUyNVUzVUQ0MESoh4djISNUVFYiIkJCQhJpmIdlMjRSJVUzEzRDVkNpmYdGVFUkQ1VENCVTVnm5mYead1QSZVYyVCQ2nP/2mIeK3/xkVGY0VDfP/u75R3WZ7d7WZVZFQkr+7t3vuIrX7d7mVUZlVEz+7t7u6Zzc7t7nNVVlNE3+7u7u+5zb7u73RFVUMT7u7v7u7b3bzf74RVVWM07u/+/u7r3bma3nVFVUUz7v///+797tyqztdEVVVU7/////7+3t/+7nRFVVNF7u7///7v3t//+UREVVVV/+/bvN/v/s7nZEREREVVe/zKq+//zN78VERERERVWP7d3v//u97vdEREREREWP//////us7flEREREREMjRVRFUzVVVENENVVDMzEyMiJFVEVVIiQ0VVVVQyQhERJERDRCEAJCNVYyEAMRMzImZ3REISMzVFRFMxEkMRSd3MyTRCIBNFUlNEMiMUfLupijRBIhJFVFM0FEISa5h2aGIUUyNVUzVUQ0IDOpiXZ0ISNUVFYiIkIyQiOZiXZlMjRSJVUzEzRDVUJZmXdGVFUkQ1VENCVTVWWKmYead1QTZVYzVCMkZ733qYiK3ut0VGY0VDVp3/75WJZq7d74ZVZFQkfv/t79l4jH7d35VUZlVEj+7t7v6Yvc7t76RVVlNEr+7u7u+5vb/u78VFVUMUv+7v7u7rzarP7uZVVWM0z+7+/u7szKmM/7ZEVUUzz+///+7+3t2u7vpUVVVUz+///+7+3d/978ZFVVNGz/////7v3d///GREVVVVz+zN///v7s74ZUREREVVe5mK3///3N79ZERERERFV9ur7///us7vdEREREREV/7/////yb3vpUREREREMjRVRFUzVVVENENVVDMzEyMyJFVEVVIiQ0VVVVQyQhERJERDVCEAJCNVYyEAMRMzIkRUJEISMjVFRFMxEjMRJavLlCRCIBNFUlNEMiMDStzcvDRBIhJFVFM0FEISSpiHi3IUUyNVUzVUQ0IDOph3eUISNUVFUiIkIxQhSJl2Z1MjRSJVUzEzNDVTJpmHdWVFUkQ1VENCVTVVNYiHeqZ0MSZVYzVCMjQ2aYmoepy6hlVGY0VDY0V8/5mYlq7v/9dVZFQkVq7/79ZoZq7d3fdUZlVESv/t7v6YnN7d7vpVVlNEW/7u3u+4q97u7v1VVUMTXP7v7u7Zq83v/u+FVWM0XP7u7u78u8yqz++EVUUzXP7+/u7+u9yonP/WVFVUXP///+7vzO/9ve/FVVNGWaz///7v3O//7v1kVVVVV4i////v297/ynZEREVVZ3i/////7d7vxURERERFVp3/////yr7u90REREREVX//////2Zvu+UREREREMjRVRFUzVVVENENVVDMzEyMyJFVEVVIiQ0VVVVQyQhERJERDVCEAIyNVYyEAMRMzIkNDJEISMjVFRFMxEjMRI3iIUyRCEBNFUlNEMhMTOdy8zENBIhJFVFM0FEIRGJmHm4MUUyNVUzVUQ0IDKYh3emISNUVFYiIkIxQhJpl3Z2MjRSJVYzEzNDRTJpmGZmVFUkQ1VENCVTVVJImHiqVjMSZVYzVCMjQ1V2qoepqXZVVGY1VDYzNX35mpiL///8dVZFQkVYrv/uZ4db7d3vtkZlVESP/u7vyZiu7d3u5lVlNESP7t7u+4m+7e3u+EVUMTSf7v7u/Zm+3u7u+lVWM0Sf/+7u7rq+3d7//FVUUzSf7v/u78q+3cqs7nVFVUR7ve/+7vy+/suZzaVVNGV4iu//7vyt///azGRVVVV4iv///v28//7tp1RERVV6vv///+7N7u+nZURERFVnjf////273+/FREREREVVnv////2Ynf7WREREREMjRVRFUzVVVENENVVDMzEyMyJFVEVVIiQ0VVVVQyQhERJERDVCAAIyNVYyEAMRMzIkNDJEISMjVFVFMxEjMRIkREQyRCEBNFUlNEMhMDJIrdylNBIhJFVFM0E0IRBLzLu9QUUyNVUzVUM0IDBYiHabUSNUVFYiIkExQhE4mIh5QjRSJVUzEzNDRTJXmHZ2VFUkQ1VENCVTRVJGmYeaVTMSZVYzVCMjQ1NGmYeqd1QkVGY1VDYzNFeLiZeK/aiHZVZFQkVWet//apl57v/+xkZlVENa/+7vlYV97e3e+VVlNFRt/t7u+4md7e7u+1VUMTR/7v7+/Jit7u7u/mVWM0R/79zN7omt7u7u73REUzR/3Jms77q97u7u76VFZUR+25rf7tqt7u7v7vlVNFWdvLz+7uus7u7v/tlUVVWezv//7uyr3u7/7Lp1RFWP/////uyrz+7//ql2REVXiK///+3Mzv//m9p1REVVVt/u//yYit//lWZVREMjRVRFUzVVVENENVVDMzEyMiJFVEVVIiQ0VVVVQyQhERJERDVCAAIyNVYyEAMRMzIjNDJEISMjVFRFMxEjMRIkQ0QiNCEBNFUlNEMiITJFisyVNBIhJFVFM0E0IRAozMy9cUQyNVUzVUM0ICA4iId6ciNUVFYiIkExQhE3mXh5YjRSJVYzEzNDRTFGiHZmVFUkQ1VENCVDRVJFiYeaVTMSZVYzVCMjQ1NFaZeadlQkVGY1VDYzM0Zoeqh52nd3ZVZFQkVWaK3/eph37//slkZlVENX3//vpIha7u3u+lVlNFNZ/u7u/KmM7e7u/WVUMUNc/u7//Zed7u7u73VWNERu/v3MzJmt7u7u76VEYzNt/tuZnJm97u7u79ZFZURu/tus3uus7e7u7vtVNVWezNzv/uus7u7u/+90VVav3e//7uu73u7u//6FRFZ//////uy7zu7v/+y6ZEVXiI///uy83f//3/yodUVVVY/u/+25id/v6ImIZEMjRVRFUzVVVENENVVDMzEyMyJFVEVVIiQ0VVVVQyQhERJERDVCAAIyNVYyEAMRMzIjNDJEISMjVFRFMxEjMRIkQjMiNCEBNFUlNEMhITIzWKuWRBIhJFVFM0E0IBAWvczMs0QyNVUzVUM0ICAmiId5tCNUVFYiIkExQhEleoiHlDRSJVYjEzNDRTFEeZdmdVUkQ1VENCVDRVI0aZeaZTMSZVYyVCMjQ1NFWZiadlQkVGY0VDUjM0VnaZh4qHd2VVZFQkVVV4vviKmGv//adkZlVENWr//vpYh43u7v/FVlNFNH3+7u/rmL7u7u72VUMkNI/u7v/Yq77u7u77VVNERZ/u78y6mc7u7u7+ZEYzNJ/v+piYu67u7u7vdFZURc/+2qvuuc7e7u7v1lNVWPzu3f/uvL3u7u/++UVVWf7d7//uzJzu7u//+VRFV8/////uy7vv7u//+4VEVXiI3//uy83e/v//26p1VVVW/+/+7Kmc/+/Luql0IjRVRFUzVVVENENVVTMzEyMiI1VEVVIiQ0VVVVQyQhERJERDVCEAJCNVYyEAMRMzIjNDJEISMjVFRFMxEjMRIkQjRDRCEBNFUlNEMiIDIzNqzcliIhJFVFM0EzIBAUWszLq1UyNVUzVUM0ICAUaYh2ekNUVFYiIkExQhEkWZl4eDRSJVUzEzNDRTE0R5l2ZlUkQ1VENCVDRUI0RomZdjMSZVYzVCMjQ0M1RYmZdmQkVGZEVDUjI0VXiImIeNmHdVZFQkVVRHnP/GmHaP//2nVlVENFN//+/HWHXe7e7+dUNFNFOv7u7+qZru7u7vhUMkM1bf7/7vqJvu7u7vpVNENEXf/N7vqqre7u7u5kYzM0bfupv/yave7u7u90ZUM1jNma3+27rO7u7u+lNVVVnMu//u7KrO7u7+/mRVVVrt3v/u67vO7u///mRFVVff/v/u7LvN/u/96lREVVV4i/7+7N3N7//suXVEVVVVb/7+7ZiJ3//8qHREIjRVRFUzVVVERENVVDMzEyMiI1VEVVIiQ0VVVVQyQhERJERDVCEAIyNVYyEAMRMzIjNDE0ISMzVFRFMxEjMRIkQkVmZSEBNFUlNEMiIDIzNbzMukIhJFVFM0EzIBATSKqYinUyNVUzVUM0ICATSYh2aXNUVFYiIkExQhEjNpmHZ1RSJVUzEzNDRTE0NYiHZmUkQ1VENCVDRUI0RVmJdkMTZVYzVCMiQ0NFRWmZdmdVZGY1VDUjI0VXm3mYdq/rmGZFQ0VVRFnf/4Vmdd7v/sllVENFQ6/+7riIau3e3vt0NFNFNd/u7v2pnO7u7u50MkM0R+7u7vyavO7u7u+VNEM0J8/+7u66m+7u7u+lYzM0R63P7u66vO7u7u/GZUM0Rpq/7u7bqt7u7u/YNVVUWZjP/u7KvN7u7/76VVVEaqnv/+7bu97u3f/nREVUWcz//+7cvN7uy62lREVVVXiv///dy83/66lkREVVVVW/7v/qd4z//7dURE"}}};var wM=" .,:;-=+*ox%#@MW",ia=class{constructor(t=!1){this.reduced=t,this.active=!1,this.playing=!1,this.position=0,this.lastTime=0,this.frame=0,this.decoded={};let e=0;this.ends=na.durations.map(n=>e+=n),this.duration=e,this.frameCount=na.frameCount}open(t){this.active=!0,this.playing=!this.reduced,this.position=0,this.lastTime=t,this.frame=0}close(){this.active=!1,this.playing=!1}tick(t){return this.active&&this.playing&&(this.position=(this.position+Math.max(0,Math.min(200,t-this.lastTime)))%this.duration),this.lastTime=t,this.frame=this.ends.findIndex(e=>this.position<e),this.frame}toggle(t){return this.tick(t),this.playing=!this.playing,this.playing}replay(t){this.position=0,this.frame=0,this.lastTime=t,this.playing=!0}suspend(t){this.lastTime=t}draw(t,e,n,s,r=1){let a=t.cols<50?"mobile":"desktop",o=na.variants[a];this.decoded[a]||(this.decoded[a]=Uint8Array.from(atob(o.packed),u=>u.charCodeAt(0))),this.tick(s);let l=this.decoded[a],c=this.frame*o.width*o.height;for(let u=0;u<o.width*o.height;u++){if(Math.floor(u/o.width)>=Math.ceil(o.height*r))continue;let h=c+u,d=l[h>>1]>>(h%2?0:4)&15;d&&t.put(e+u%o.width,n+Math.floor(u/o.width),wM[d],d>11?3:d>5?1:2)}}};function Uu(i,t,e){if(!i.length)return null;let n=i.find(u=>u.id===t)||i[0],s=e==="ArrowLeft"||e==="ArrowRight",r=e==="ArrowLeft"||e==="ArrowUp"?-1:1,a=n.x+n.w/2,o=n.y+n.h/2,l=i.filter(u=>u!==n).map(u=>{let h=u.x+u.w/2-a,d=u.y+u.h/2-o,p=(s?h:d)*r,g=Math.abs(s?d:h),E=s?Math.abs(d)<.8:u.x<=a&&u.x+u.w>=a;return{region:u,forward:p,side:g,score:p+g*(E?.14:3.8)+(E?0:9)}}),c=l.filter(u=>u.forward>.25).sort((u,h)=>u.score-h.score);return c.length?c[0].region.id:(l.sort((u,h)=>(u.side-h.side)*6+(u.forward-h.forward)),l[0]?.region.id||n.id)}function Tl(i,t,e=!1){if(!i.length)return null;let n=i.findIndex(s=>s.id===t);return n<0?i[e?i.length-1:0].id:i[(n+i.length+(e?-1:1))%i.length].id}var ze=document.getElementById("screen"),Pe=document.getElementById("terminal-input"),sa=document.getElementById("accessible-controls"),zu=document.getElementById("accessible-status"),Pu=document.getElementById("accessible-copy"),Ee=matchMedia("(prefers-reduced-motion: reduce)").matches,Me=new Xr,Ul=new ta,hn=new ea,Re=new ia(Ee),Lu="ardor-ideas-v1",Yn=[];try{let i=JSON.parse(localStorage.getItem(Lu)||"[]");Array.isArray(i)&&(Yn=[...new Set(i)].filter(t=>Kr.some(e=>e.id===t)))}catch{}var M={mode:"cloud",mobile:innerWidth<700,color:"orange",colorPreview:null,auto:!Ee,sound:!1,mosaic:!1,crt:!0,gain:1,lens:.11,glow:.9,scanning:!1,scanProgress:0,scanCount:0,dialog:null,dialogStart:0,dialogClosing:0,selection:0,message:null,category:"people",listPage:0,detailPage:0,detailPages:1,detailStart:0,hover:null,focus:null,hoverStart:0,pageStart:0,now:0,ready:!1,commandFocused:!1,commandHistory:[],historyIndex:0,lastLink:null,log:"START WITH ONE TASK. GROW INTO A WORKSPACE.",logAt:0,phase:Ee?"ready":"intro",revealAt:0,keyboard:!1,pendingFocus:null,modalOrigin:"cloud",colorReturn:null},Zt=[],tt,Il=0,Nl="",Nu="",ge=null,Wn=new Map,ra=null;function Ou(){let i=innerWidth<700;return i?{mobile:i,cols:40,rows:M.mode==="signal"?61:56,worldRect:{x:2,y:14,w:36,h:17}}:{mobile:i,cols:84,rows:46,worldRect:{x:3,y:14,w:54,h:18}}}function he(i){M.log=i.toUpperCase(),M.logAt=performance.now(),zu.textContent=i}function Ts(i,t){let e=[];for(let n of String(i).split(`
`)){if(!n){e.push("");continue}let s="";for(let r of n.split(" ")){for(s.length+r.length+(s?1:0)>t&&(s&&e.push(s),s="");r.length>t;)e.push(r.slice(0,t)),r=r.slice(t);s+=(s?" ":"")+r}s&&e.push(s)}return e}function UM(i,t,e,n,s,r){i.text(t,e,(`${n} ${s}`+".".repeat(r)).slice(0,r),1)}function bn(i,t=M.pageStart){if(Ee)return i;let e=Math.floor(i.length*Math.max(0,Math.min(1,(M.now-t)/430))),n=" .:\u259101";return[...i].map((s,r)=>r<e||s===" "?s:n[(r*7+Math.floor(M.now/65))%n.length]).join("")}function Xt(i,t,e,n,s,r,a,o=!1){let l={id:t,x:e,y:n,w:s,h:1,label:r,callback:a};Zt.push(l);let c=M.hover===t||M.focus===t,u=o||Ee?1:Math.min(1,(M.now-M.hoverStart)/150),h=o||c?Math.ceil(s*u):0,d=((M.keyboard&&M.focus===t?">":" ")+r).padEnd(s," ").slice(0,s);for(let p=0;p<s;p++){let g=p<h;i.put(e+p,n,d[p],g?5:1,g?c?1:4:0)}return l}function on(i,t,e,n,s,r,a){let o={id:t,x:e,y:n,w:s,h:1,label:r,callback:a};Zt.push(o);let l=M.focus===t;return l&&i.fill(e,n,s,1," ",5,4),i.text(e,n,r,l?5:M.hover===t?3:2,l?4:0,s),o}function NM(i,t,e){let n=M.hover==="close"||M.focus==="close";i.fill(t,e,3,1," ",n?5:1,n?4:0),i.put(t+1,e,"X",n?5:3,n?4:0),Zt.push({id:"close",x:t,y:e,w:3,h:1,label:"Close window. Escape.",callback:ku})}function Is(i){i=terminalLinkKey(i);M.lastLink=Ss[i],window.open(Ss[i],"_blank","noopener,noreferrer"),he(`${i==="start"?"The Ardor workspace":i==="home"?"Ardor.cloud":i} opens in a new tab.`)}function As(i,t,e,n,s,r,a,o=!1){let l=o?on(i,t,e,n,s,r,()=>Is(a)):Xt(i,t,e,n,s,r,()=>Is(a),!0);l.href=Ss[terminalLinkKey(a)]}function bl(i,t,e,n,s,r,a,o){let l=s-2,c=Math.max(0,Math.min(l-1,Math.round(r*(l-1)))),u=M.focus===t;i.text(e,n,"["+"\u2500".repeat(l)+"]",u?5:2,u?4:0),i.put(e+c+1,n,"\u2588",u?5:3,u?4:0),Zt.push({id:t,x:e,y:n,w:s,h:1,label:o,range:!0,value:r,onChange:a,callback:()=>a(Math.min(1,r+.1))})}function CM(i,t,e){Ul.draw(i,t,e,(M.now-(tt?.started||0))*.001,Ee),Zt.push({id:"brand",x:t,y:e,w:10,h:7,label:"Animated Ardor pixel mark. Open product overview.",callback:()=>oe("overview")})}function DM(i){if(M.mode==="signal")return renderSignalHeader(i);if(M.mode==="hermes")return renderHermesHeader(i);let t=M.mobile,e=i.cols,n=Ae[M.mode];i.text(3,2,(Ee||Math.floor(M.now/1e3)%2?"\u2197":"\u2192")+"ARDOR / IN COMMUNICATION",1),t||As(i,"source",e-18,2,14,"ARDOR.CLOUD \u2197","home",!0),CM(i,3,4);let s=t?14:17,r=e-s-4;i.fill(s,4,r,5," ",5,4),(t?["A R D O R","ONE AGENT. ANY TASK.","FREE: GPT-6 ASTRA","+ TOP GPT MODELS","GENEROUS TOKENS"]:["A R D O R / PRODUCT TERMINAL","ONE AGENT. EVERY APP. ANY TASK.","FREE PLAN: GPT-6 ASTRA AND TOP GPT MODELS. $0 TO START.","GENEROUS TOKEN LIMITS. 10\xD7 USAGE IN THE LIMITED-TIME PROMO.","ARROWS TO EXPLORE. ENTER TO OPEN."]).forEach((o,l)=>i.text(s+1,4+l,o,l===0?3:5,4,r-2)),t||i.text(e-5-n.name.length,4,bn(n.name),3,4,n.name.length),UM(i,3,11,"USP:",bn(n.name),e-7),t?i.text(3,12,bn(n.shortField),2,0,34):(i.text(3,12,bn(n.field),2,0,54),i.text(60,12,"CLOUD / TEAM / APPS",2))}function dn(i){if(!(!Ae[i]||M.mode===i)){i==="hermes"&&(M.hermesReturnMode=M.mode),M.mode=i,M.category=Ae[i].category,M.pageStart=performance.now(),tt.world.setMode(i==="signal"?"station":i),tt.worldVisibility=M.dialog?0:1;try{history.replaceState(null,"",`#${Ae[i].slug}`)}catch{}he(`${Ae[i].name}. ${Ae[i].field}`),Me.tick()}}function FM(){M.auto=!M.auto,tt.world.auto=M.auto,he(M.auto?"Continuous Y rotation on.":"Y rotation paused. Drag the 3D field to explore."),Me.tick()}function zl(i){let t=In.find(e=>e.id===i);t&&(M.color=i,M.colorPreview=null,tt.setColor(t,!0),he(`${t.label} phosphor selected.`),Me.tick())}function Pl(i){if(M.dialog!=="colors"||M.dialogClosing||!i?.startsWith("color-"))return;let t=In.find(e=>`color-${e.id}`===i);!t||M.colorPreview===t.id||(M.colorPreview=t.id,tt.setColor(t,!0),zu.textContent=`${t.label} live preview. Enter keeps it; Escape restores ${M.color}.`)}function bs(){return M.colorPreview||M.color}function Ki(){M.colorPreview=null,M.colorReturn=M.dialog,oe("colors")}function Ll(){let i=M.colorReturn,t=M.modalOrigin;M.colorReturn=null,M.colorPreview=null,tt.setColor(In.find(e=>e.id===M.color),!0),gi(()=>{i&&(oe(i),M.modalOrigin=t,i==="config"&&(M.pendingFocus="config-color"))})}function Bu(i){zl(i),Ll()}function aa(){oe("usp",Ae[M.mode].story)}function un(i){Zt.find(e=>e.id===i)&&(M.focus=i,M.pendingFocus=null,M.hover=null,M.hoverStart=performance.now(),Pl(i),i.startsWith("case-")&&(M.dialog==="list"||M.dialog==="saved")&&(M.selection=Math.max(0,ca().findIndex(e=>"case-"+e.id===i))),sa.querySelector(`[data-action="${i}"]`)?.focus({preventScroll:!0}))}function Cl(){M.phase==="intro"?hn.skip(performance.now()):M.phase==="reveal"&&(M.revealAt=performance.now()-1100)}function oa(){Re.close(),M.dialog=null,M.dialogClosing=0,ra=null,Pe.blur(),M.commandFocused=!1,M.phase=Ee?"ready":"intro",M.ready=Ee,M.revealAt=0,M.focus=null,M.pendingFocus=null,hn.reset(),tt.worldVisibility=0,tt.visibility=0,tt.started=performance.now(),document.body.dataset.ready=String(Ee),ze.focus({preventScroll:!0}),he(Ee?"Introduction is skipped because reduced motion is enabled.":"Signal genesis. Enter or Escape skips the introduction.")}function Ol(){M.mosaic=!M.mosaic,tt.targetMosaic=M.mosaic?1:0,he(`Raster: ${M.mosaic?"character blocks":"ASCII characters"}.`),Me.tick()}function zM(i){if(M.mode==="signal")return renderSignalMain(i);if(M.mode==="hermes")return renderHermesSection(i);let t=Ae[M.mode];if(M.mobile)i.text(3,13,`[ ${t.number} / ${t.mobileProjection} ]`,2,0,34),t.mobile.forEach((e,n)=>i.text(3,31+n,bn(e),n===0?1:2,0,34)),Xt(i,"cloud",3,34,16,"1 ALWAYS ON",()=>dn("cloud"),M.mode==="cloud"),Xt(i,"team",22,34,15,"2 TOGETHER",()=>dn("team"),M.mode==="team"),Xt(i,"apps",3,36,16,"3 REAL APPS",()=>dn("apps"),M.mode==="apps"),Xt(i,"free",22,36,15,"4 FREE ACCESS",()=>oe("free",ardorFree)),Xt(i,"config",3,38,16,"5 DISPLAY",()=>oe("config")),Xt(i,"hermes",22,38,15,"6 HERMES",()=>dn("hermes")),on(i,"color",3,39,18,`COLOR: ${bs().toUpperCase()} [C]`,Ki),on(i,"secret-signal",22,39,15,"SECRET [K] \u21B5",()=>oe("rickroll"));else{i.text(3,13,`[ ${t.number} / ${t.projection} ]`,2),i.text(60,14,"WHY ARDOR / 3 USPs",1),i.rule(60,15,20,2,".");for(let[e,n]of["cloud","team","apps"].entries())Xt(i,n,60,17+e*2,20,Ae[n].menu,()=>dn(n),M.mode===n);Xt(i,"free",60,23,20,"4 FREE ACCESS",()=>oe("free",ardorFree)),Xt(i,"config",60,25,20,"5 DISPLAY CONFIG.",()=>oe("config")),Xt(i,"hermes",60,27,20,"6 HERMES AGENT",()=>dn("hermes")),i.text(60,28,"\u2191\u2193\u2190\u2192 SELECT / \u21B5 OPEN",2),on(i,"story",60,30,20,"READ THIS USP [U] \u21B5",aa),on(i,"help",60,31,20,"ALL SHORTCUTS [?] \u21B5",()=>oe("help")),on(i,"color",60,33,20,`COLOR: ${bs().toUpperCase()} [C]`,Ki),on(i,"secret-signal",60,35,20,"SECRET SIGNAL [K] \u21B5",()=>oe("rickroll")),t.lines.forEach((e,n)=>i.text(3,33+n,bn(e),n===0?1:2,0,54))}if(M.scanning){let e=tt.rect,n=M.scanProgress,s=Math.round((e.w-10)*n);i.fill(e.x,e.y+e.h-3,e.w,3," ",1,0),i.text(e.x+1,e.y+e.h-3,"VISUAL FIELD SWEEP",3),i.text(e.x+1,e.y+e.h-1,"["+"\u2588".repeat(s)+"\u2591".repeat(e.w-10-s)+"] "+String(Math.floor(n*100)).padStart(2,"0")+"%",1)}}function Dl(){Pe.focus({preventScroll:!0}),M.commandFocused=!0,M.focus="command",M.hoverStart=performance.now()}function PM(i){if(M.mode==="signal")return renderSignalFooter(i);let t=M.mobile,e=i.cols,n=t?40:36,s=t?42:37,r=t?22:e-19,a=15,o=t?(M.mode==="hermes"?["explore capabilities","project on GitHub","official docs","optional cloud"]:["make something","meet your agent","read the docs","start for free"]):M.mode==="hermes"?["explore the six capabilities","read the project on GitHub","official documentation","deploy to the cloud"]:["what can you make with Ardor?","one agent, from idea to a running app","your tools, your team, your infrastructure","describe it once. give your idea a home"];i.rule(3,n,e-7,2),[["examples",M.mode==="hermes"?"FEATURES [E]":"EXAMPLES [E]",()=>M.mode==="hermes"?openHermesPage("features"):oe("list")],["overview",M.mode==="hermes"?"GITHUB ↗":"OVERVIEW [A]",()=>M.mode==="hermes"?Is("hermesGithub"):oe("overview")],["docs","DOCS [D] \u2197","docs"],["start",M.mode==="hermes"?"CLOUD [G]":"START FREE [G]","start"]].forEach(([S,x,V],C)=>{let I=o[C].slice(0,r-5);i.text(3,s+C,I,2),i.text(4+I.length,s+C,".".repeat(Math.max(0,r-I.length-5)),7),typeof V=="string"?As(i,S,r,s+C,a,x,V):Xt(i,S,r,s+C,a,x,V,!0)});let c=t?47:42,u=t?5:11,h=t?22:e-u-19;i.text(3,c,t?"> ":"YOU > ",1);let d=Pe.value.toUpperCase(),p=Math.max(0,d.length-h+1);i.text(u,c,(d.slice(p)+"\xB7".repeat(h)).slice(0,h),M.commandFocused?3:2),Zt.push({id:"command",x:u,y:c,w:h,h:1,label:"Enter an explorer command. Type HELP for commands.",callback:Dl}),(Ee||Math.floor(M.now/650)%2===0)&&i.put(u+Math.min(d.length,h-1),c,"\u2588",M.commandFocused?3:2),Xt(i,"send",t?29:e-17,c,t?8:13,"SEND \u21B5",()=>{Pe.value.trim()?Wu(Pe.value):Dl()},!0);let g=Ts(M.log,t?32:e-11),E=t?49:44,m=Ee?1/0:Math.floor((M.now-M.logAt)/12),f=0;for(let S=0;S<Math.min(t?2:1,g.length);S++)i.text(3,E+S,(S===0?"\u21B3 ":"  ")+g[S].slice(0,Math.max(0,m-f)),2,0,e-6),f+=g[S].length;t&&i.text(3,53,`${M.mode==="hermes"?"HERMES / NOUS":"ARDOR.CLOUD"} / ${M.sound?"AUDIO ON":"? FOR HELP"}`,2)}function ca(){return M.dialog==="saved"?Yn.map(i=>Kr.find(t=>t.id===i)):Kr.filter(i=>i.category===M.category)}function oe(i,t=null){M.dialog||(M.modalOrigin=M.focus||M.mode),M.dialog==="rickroll"&&Re.close(),M.dialog=i,M.message=t,M.dialogStart=performance.now(),M.detailStart=M.dialogStart,M.dialogClosing=0,M.selection=0,M.listPage=0,M.detailPage=0,M.detailPages=1,tt.worldVisibility=0,Pe.blur(),ze.focus({preventScroll:!0}),M.commandFocused=!1,M.focus=null,Me.tick(),M.pendingFocus=i==="rickroll"?"rick-play":i==="config"?"gain":i==="help"?"guide-return":i==="colors"?`color-${M.color}`:i==="list"||i==="saved"?"@list":"@detail",i==="rickroll"&&(Re.open(M.dialogStart),he("Secret signal acquired. You have been rickrolled. P pauses, 0 replays, Escape returns."))}function gi(i){M.dialog&&(M.dialog==="rickroll"&&Re.close(),Ee?(M.dialog=null,M.dialogClosing=0,tt.worldVisibility=1,M.pendingFocus=M.modalOrigin,i?.()):(M.dialogClosing=performance.now(),ra=i||null),ze.focus({preventScroll:!0}),Me.tick())}function ku(){if(M.mode==="signal"&&signalState.pending)return signalCommand("CANCELAR");M.dialog==="colors"?Ll():gi()}function LM(i){i&&(oe("message",i),he(`Explore: ${i.title}.`))}function OM(i){if(Yn.includes(i.id)){he("This idea is already saved. Type SAVED to find it.");return}Yn.push(i.id);let t=!0;try{localStorage.setItem(Lu,JSON.stringify(Yn))}catch{t=!1}he(t?"Idea saved on this device. Type SAVED to return to it.":"Idea saved for this session."),Me.tick()}function Qu(i){return i.body+(i.prompt?`

TRY ASKING ARDOR
> `+i.prompt:"")}function Fl(i){M.detailPage=Math.max(0,Math.min(M.detailPages-1,M.detailPage+i)),M.detailStart=performance.now(),M.pendingFocus="@detail",Me.tick()}function BM(i,t,e,n,s,r,a){let o=t+3,l=n-6,c=e+5;Ts(r.title,l).forEach(f=>i.text(o,c++,f,3)),c++,i.text(o,c++,r.tag,2,0,l),c++;let u=Ts(Qu(r),l),h=Math.max(1,e+s-9-c);M.detailPages=Math.max(1,Math.ceil(u.length/h)),M.detailPage=Math.min(M.detailPage,M.detailPages-1);let d=u.slice(M.detailPage*h,(M.detailPage+1)*h),p=Ee?1/0:Math.max(0,Math.floor((M.now-M.detailStart-180)/7)),g=0;for(let f of d)i.text(o,c++,f.slice(0,Math.max(0,p-g)),1),g+=f.length;let E=e+s-8;M.detailPages>1&&(M.detailPage>0&&Xt(i,"detail-prev",o,E,9,M.mode==="signal"?"< ATRAS":"< PREV",()=>Fl(-1)),i.text(t+Math.floor(n/2)-2,E,`${M.detailPage+1}/${M.detailPages}`,2),M.detailPage<M.detailPages-1&&Xt(i,"detail-next",t+n-12,E,9,M.mode==="signal"?"SIGUE >":"NEXT >",()=>Fl(1)));if(r.id.startsWith("signal-")){renderSignalDetailFooter(i,t,e,n,s);return}if(r.id.startsWith("hermes-")){renderHermesDetailFooter(i,t,e,n,s,r);return}As(i,"detail-source",o,e+s-6,l,"SOURCE: ARDOR.CLOUD \u2197","home",!0);let m=Math.floor((l-2)/2);a?As(i,"detail-docs",o,e+s-4,m,r.id==="free"?"PRICING \u2197":"DOCS \u2197",r.id==="free"?"pricing":"docs"):Xt(i,"preserve",o,e+s-4,m,Yn.includes(r.id)?"IDEA SAVED \u2713":"SAVE IDEA +",()=>OM(r),!0),As(i,"detail-start",o+m+2,e+s-4,l-m-2,"START FREE \u2197","start"),Xt(i,"detail-return",o,e+s-2,l,a?"RETURN TO TERMINAL \u21B5":"RETURN TO EXAMPLES \u21B5",()=>a?gi():oe("list"))}function kM(i){M.category=i,M.selection=0,M.listPage=0,M.detailStart=performance.now(),M.pendingFocus="@list",Me.tick()}function QM(i,t,e,n,s,r){let a=t+3,o=n-6;if(r)i.text(a,e+5,"IDEAS KEPT ON THIS DEVICE.",3,0,o);else{let u=Math.floor((o-2)/3);Al.forEach((h,d)=>Xt(i,`category-${h.id}`,a+d*(u+1),e+5,u,h.label,()=>kM(h.id),M.category===h.id))}let l=ca(),c=Math.max(1,Math.ceil(l.length/4));M.listPage=Math.min(M.listPage,c-1),i.text(a,e+7,r?`${l.length} SAVED / READY WHEN YOU ARE`:Al.find(u=>u.id===M.category).description,2,0,o),l.length||Ts("Your next idea belongs here. Open an example and choose SAVE IDEA to keep it on this device.",o).forEach((u,h)=>i.text(a,e+11+h,u,1)),l.slice(M.listPage*4,M.listPage*4+4).forEach((u,h)=>{let d=M.listPage*4+h,p=e+10+h*4;i.text(a,p-1,`${String(d+1).padStart(2,"0")} / ${u.tag}`,2,0,o),Xt(i,`case-${u.id}`,a,p,o,bn(u.title,M.detailStart),()=>LM(u),M.selection===d).label=u.title,i.text(a+1,p+1,bn(u.teaser,M.detailStart),2,0,o-1)}),c>1&&(M.listPage>0&&Xt(i,"list-prev",a,e+s-6,10,"< PREV",()=>{M.listPage--,M.selection=M.listPage*4,M.detailStart=performance.now()}),i.text(t+Math.floor(n/2)-2,e+s-6,`${M.listPage+1}/${c}`,2),M.listPage<c-1&&Xt(i,"list-next",t+n-13,e+s-6,10,"NEXT >",()=>{M.listPage++,M.selection=M.listPage*4,M.detailStart=performance.now()})),Xt(i,"saved-list",a,e+s-4,o,r?"EXPLORE ALL EXAMPLES \u21B5":`SAVED IDEAS [${String(Yn.length).padStart(2,"0")}] \u21B5`,()=>oe(r?"list":"saved")),Xt(i,"list-return",a,e+s-2,o,"RETURN TO TERMINAL \u21B5",()=>gi())}function HM(i,t,e,n,s){let r=t+3,a=n-6,o=[["ARROWS / TAB","SELECT A CONTROL"],["ENTER / SPACE","OPEN / APPLY"],["1 - 6 / H","SECTIONS / HERMES AGENT"],["U / E / A","STORY / EXAMPLES / OVERVIEW"],["C / T / M","COLOR / RASTER / AUDIO"],["D / G","DOCS / START FREE (NEW TAB)"],["SHIFT + ARROWS","ROTATE THE 3D IMAGE"],["+ - / R","ZOOM / RESET THE VIEW"],["B / /","REPLAY INTRO / COMMAND LINE"],["ESC / ? / K","CLOSE / HELP / SECRET SIGNAL"]],l=e+5;for(let[c,u]of o)M.mobile?(i.text(r,l++,c,3),i.text(r,l++,u,2,0,a),l++):(i.text(r,l,c,3),i.text(r+20,l,u,2,0,a-20),l+=2);Ts("Product explorer only. Real work starts in Ardor.",a).forEach((c,u)=>i.text(r,e+s-5+u,c,2)),Xt(i,"guide-return",r,e+s-2,a,"RETURN TO TERMINAL \u21B5",()=>gi())}function GM(i,t,e,n,s){let r=t+3,a=n-6;on(i,"config-replay",r,e+5,a,"REPLAY THE INTRO [B] \u21B5",oa),i.text(r,e+7,`PHOSPHOR GAIN ...... ${Math.round(M.gain*100)}%`,1,0,a),bl(i,"gain",r,e+8,a,(M.gain-.6)/1.2,o=>{M.gain=.6+o*1.2,tt.gain=M.gain},"Phosphor brightness"),i.text(r,e+10,`LENS CURVATURE ..... ${Math.round(M.lens*1e3)}`,1,0,a),bl(i,"lens",r,e+11,a,M.lens/.18,o=>{M.lens=o*.18,tt.curvature=M.lens},"Glass lens curvature"),Xt(i,"config-color",r,e+13,a,`PHOSPHOR COLOR: ${M.color.toUpperCase()} \u21B5`,Ki),i.text(r,e+15,`GLYPH GLOW ........ ${Math.round(M.glow*100)}%`,1,0,a),bl(i,"glow",r,e+16,a,M.glow/1.4,o=>{M.glow=o*1.4,tt.glow=M.glow},"Character glow, not a screen border"),Xt(i,"config-raster",r,e+18,a,`RASTER: ${M.mosaic?"CHARACTER BLOCKS":"ASCII CHARACTERS"} \u21B5`,Ol),Xt(i,"config-orbit",r,e+20,a,`Y ROTATION: ${M.auto?"ON":"OFF"} \u21B5`,FM),Xt(i,"config-crt",r,e+22,a,`SCANLINES: ${M.crt?"ON":"OFF"} \u21B5`,()=>{M.crt=!M.crt,tt.crt=M.crt?1:0}),Xt(i,"config-sound",r,e+24,a,`AMBIENT AUDIO: ${M.sound?"ON":"OFF"} \u21B5`,la),Xt(i,"config-reset",r,e+s-5,a,"RESTORE DISPLAY DEFAULTS \u21BA",JM),Xt(i,"config-return",r,e+s-3,a,"RETURN TO TERMINAL \u21B5",()=>gi())}function ZM(i,t,e,n,s){let r=t+3,a=n-6;i.text(r,e+5,"LIVE COLOR. EVERY CHARACTER.",2,0,a),In.forEach((o,l)=>{let c=bs()===o.id;Xt(i,`color-${o.id}`,r,e+8+l*2,a,`${l+1} ${o.label}${c?o.id===M.color?" / SELECTED":" / PREVIEW":""}`,()=>Bu(o.id),c)}),i.text(r,e+s-6,"HOVER / ARROWS = LIVE PREVIEW",2,0,a),i.text(r,e+s-5,"ENTER KEEP / ESC CANCEL",2,0,a),Xt(i,"colors-return",r,e+s-3,a,"KEEP ORIGINAL COLOR \u21B5",Ll)}function Hu(){let i=Re.toggle(performance.now());he(i?"ASCII Rickroll playing. P pauses.":"ASCII Rickroll paused. P resumes."),Me.tick()}function Gu(){Re.replay(performance.now()),he("Replaying the secret signal."),Me.tick()}function WM(i,t,e,n,s){let r=t+3,a=n-6;i.text(r,e+5,bn("NEVER GONNA GIVE YOU UP",M.dialogStart),3,0,a),i.text(r,e+6,M.mobile?"RICK ASTLEY / ASCII":"RICK ASTLEY / ASCII TRANSMISSION",2,0,a);let o=Ee?1:Math.max(0,Math.min(1,(M.now-M.dialogStart-230)/420));Re.draw(i,r,e+8,M.now,o);let l=Re.playing?"PLAYING":"PAUSED";i.text(r,e+s-6,`${l} / SILENT LOOP / 20 FPS`,2,0,a);let c=Math.floor((a-2)*Re.position/Re.duration);i.text(r,e+s-5,"["+"=".repeat(c)+".".repeat(a-2-c)+"]",2);let u=Math.floor((a-2)/2);Xt(i,"rick-play",r,e+s-3,u,`${Re.playing?"PAUSE":"PLAY"} [P]`,Hu),Xt(i,"rick-replay",r+u+2,e+s-3,a-u-2,"REPLAY [0]",Gu),on(i,"rick-return",r,e+s-2,a,"RETURN TO TERMINAL [ESC]",()=>gi())}function YM(i){if(M.dialog==="signal-file"){renderSignalFiles(i);return}if(M.dialog==="signal-puzzle")return renderSignalPuzzle(i);if(M.dialog==="signal-input")return renderSignalInput(i);if(!M.dialog)return;Zt=[];let t=M.mobile,e=M.dialog==="colors",n=M.dialog==="rickroll",s=t?36:e?40:58,r=n?40:e?17+In.length*2:t?39:30,a=Math.floor((i.cols-s)/2),o=n?Math.floor((i.rows-r)/2):e?Math.max(9,Math.floor((i.rows-r)/2)):t?9:10;for(let h=10;h<i.rows-1;h++)for(let d=2;d<i.cols-2;d++){let p=h*i.cols+d;i.current[p]=i.current[p]&1023|7168}let l=Ee?1:Math.min(1,(M.now-M.dialogStart)/230),c=Math.max(1,Math.floor(r*l));if(M.dialogClosing&&(c=Math.max(1,Math.floor(r*(1-Math.min(1,(M.now-M.dialogClosing)/180))))),i.box(a,o+Math.floor((r-c)/2),s,c,1,0),l<1||M.dialogClosing)return;let u={config:"DISPLAY CONFIGURATION",help:"TERMINAL FIELD GUIDE",list:"WHAT CAN YOU MAKE?",saved:"YOUR SAVED IDEAS",overview:"MEET YOUR CLOUD AGENT",message:"IDEAS INTO REALITY",usp:"WHY ARDOR / THE FULL STORY",free:"FREE ACCESS / THE DETAILS",colors:"CHOOSE YOUR PHOSPHOR",rickroll:"SECRET SIGNAL / 1987"};i.text(a+2,o+1,M.message?.id?.startsWith("signal-")?"NADIR / ULTIMA SENAL":M.message?.id?.startsWith("hermes-")?"HERMES / NOUS RESEARCH":u[M.dialog],2,0,s-7),NM(i,a+s-5,o+1),i.rule(a+1,o+3,s-2,7),["message","overview","usp","free"].includes(M.dialog)?BM(i,a,o,s,r,M.dialog==="overview"?$r:M.message,M.dialog!=="message"):M.dialog==="list"||M.dialog==="saved"?QM(i,a,o,s,r,M.dialog==="saved"):M.dialog==="help"?HM(i,a,o,s,r):M.dialog==="config"?GM(i,a,o,s,r):M.dialog==="colors"?ZM(i,a,o,s,r):M.dialog==="rickroll"&&WM(i,a,o,s,r)}function JM(){M.gain=1,M.lens=.11,M.glow=.9,M.crt=!0,M.mosaic=!1,M.auto=!Ee,tt.gain=1,tt.curvature=.11,tt.crt=1,tt.targetMosaic=0,tt.world.auto=M.auto,tt.glow=.9,zl("orange"),tt.world.reset(),he("Orange phosphor and original display settings restored."),Me.tick()}function Zu(){M.scanning||(M.scanning=!0,M.scanProgress=0,tt.world.startScan(),he("Sweeping the visual field. Explore ideas with CASES."),Me.tick("scan"))}function qM(i){M.scanProgress=i,tt.compositeUniforms.uScan.value=i}function jM(){M.scanning=!1,M.scanCount++,tt.compositeUniforms.uScan.value=-1,he("Field sweep complete. One agent. Every app. Any task."),Me.tick("scan")}async function la(){try{M.sound=await Me.toggle(),he(M.sound?"Ambient audio on.":"Ambient audio off.")}catch{he("Audio is unavailable in this browser.")}}function Wu(i){if(M.mode==="signal")return signalCommand(i);let t=i.trim();if(!t)return;M.commandHistory.push(t),M.historyIndex=M.commandHistory.length;let[e,n]=t.toUpperCase().split(/\s+/);Pe.value="",["HERMES","6","06"].includes(e)?dn("hermes"):["SCIIO","BACK"].includes(e)&&M.mode==="hermes"?returnFromHermes():M.mode==="hermes"&&["FEATURES","INSTALL","FAQS","PORTAL"].includes(e)?openHermesPage(e.toLowerCase()):["CLOUD","ANYWHERE","1","01"].includes(e)?dn("cloud"):["TEAM","TOGETHER","CONNECT","2","02"].includes(e)?dn("team"):["APPS","BUILD","RUN","DEPLOY","3","03"].includes(e)?dn("apps"):["CASES","EXAMPLES","READ"].includes(e)?oe("list"):e==="SAVED"?oe("saved"):["ABOUT","ARDOR","OVERVIEW"].includes(e)?oe("overview"):e==="HELP"||e==="?"?oe("help"):["FREE","ASTRA","GPT","MODELS","4","04"].includes(e)?oe("free",ardorFree):["CONFIG","DISPLAY","5","05"].includes(e)?oe("config"):e==="SOUND"||e==="MUTE"?la():e==="COLOR"?n&&In.some(s=>s.id===n.toLowerCase())?zl(n.toLowerCase()):n?he(`Colors: ${In.map(c=>c.label).join(", ")}.`):Ki():e==="STORY"||e==="USP"?aa():e==="INTRO"||e==="BOOT"?oa():e==="RICKROLL"||e==="SECRET"?oe("rickroll"):["DOCS","START","PRICING","DOWNLOAD"].includes(e)?Is(e.toLowerCase()):e==="SCAN"?Zu():e==="RESET"?(tt.world.reset(),he("View returned to its original projection.")):e==="CLEAR"?he("Start with one task. Grow into a workspace."):e==="ASCII"?(M.mosaic=!1,tt.targetMosaic=0,he("ASCII character raster on.")):e==="MOSAIC"?(M.mosaic=!0,tt.targetMosaic=1,he("Character block raster on.")):he(`Unknown command: ${e.slice(0,18)}. Type HELP.`),Me.tick()}function Cu(){let i=M.focus&&!Zt.some(n=>n.id===M.focus),t=Zt.map(n=>`${n.id}:${n.label}:${n.href||""}:${n.range?n.value:""}`).join("|");if(t!==Nl){Nl=t;let n=new Set(Zt.map(s=>s.id));for(let s of[...sa.children])n.has(s.dataset.action)||s.remove();for(let s of Zt){let r=sa.querySelector(`[data-action="${s.id}"]`);r||(r=document.createElement(s.href?"a":"button"),r.dataset.action=s.id,s.href&&(r.href=s.href,r.target="_blank",r.rel="noopener noreferrer"),r.addEventListener("focus",()=>{M.focus=r.dataset.action,M.hoverStart=performance.now(),Pl(r.dataset.action)}),r.addEventListener("blur",()=>{M.focus===r.dataset.action&&(M.focus=null)}),r.addEventListener("click",o=>{o.preventDefault(),Zt.find(l=>l.id===r.dataset.action)?.callback()}),r.addEventListener("keydown",o=>{let l=Zt.find(c=>c.id===r.dataset.action);l?.range&&["ArrowLeft","ArrowRight","Home","End"].includes(o.key)&&(o.preventDefault(),o.stopPropagation(),l.onChange(o.key==="Home"?0:o.key==="End"?1:Math.max(0,Math.min(1,l.value+(o.key==="ArrowRight"?.05:-.05)))))}),sa.append(r)),r.textContent=s.label,s.href&&(r.href=s.href);let a={cloud:"1",team:"2",apps:"3",config:"5",hermes:"6",color:"C",story:"U",examples:"E",overview:"A",docs:"D",start:"G",help:"?","secret-signal":"K","rick-play":"P","rick-replay":"0","rick-return":"Escape",close:"Escape"};a[s.id]&&r.setAttribute("aria-keyshortcuts",a[s.id]),s.range&&(r.setAttribute("role","slider"),r.setAttribute("aria-valuemin","0"),r.setAttribute("aria-valuemax","100"),r.setAttribute("aria-valuenow",String(Math.round(s.value*100))),r.setAttribute("aria-label",s.label))}}if(M.pendingFocus&&Zt.length&&!M.dialogClosing){let n=M.pendingFocus;n==="@list"&&(n=Zt.find(s=>s.id.startsWith("case-"))?.id||"saved-list"),n==="@detail"&&(n=Zt.some(s=>s.id==="detail-next")?"detail-next":"detail-return"),Zt.some(s=>s.id===n)||(n=Zt.find(s=>s.id===M.mode)?.id||Zt[0].id),un(n)}else i&&Zt.length&&M.ready&&!M.dialogClosing&&un(Zt.find(n=>n.id===M.mode)?.id||Zt[0].id);let e=M.mode==="signal"?signalAccessible():M.ready?M.dialog==="message"||M.dialog==="usp"||M.dialog==="free"?`${M.message.title}
${Qu(M.message)}`:M.dialog==="overview"?`${$r.title}
${$r.body}`:M.dialog==="colors"?`Choose one phosphor color: ${In.map(n=>n.label).join(", ")}. Live preview: ${bs()}. Hover, arrow keys or Tab recolor the interface immediately. Click or Enter keeps the color. Escape restores ${M.color}.`:M.dialog==="rickroll"?`You have been rickrolled. A silent, two-second ASCII loop of Rick Astley dancing at a microphone, from Never Gonna Give You Up. ${Re.playing?"Playing.":"Paused."} P toggles playback, 0 replays, and Escape closes the window. The clip starts paused when reduced motion is enabled.`:M.dialog==="list"||M.dialog==="saved"?ca().map(n=>n.title+`
`+n.teaser).join(`

`):M.mode==="hermes"?`Hermes Agent. ${hermesContent.pages.overview.title}. ${hermesContent.pages.overview.body} Animated 3D Hermes face and winged helmet. Drag or Shift with arrow keys rotates the image. Use 1 through 5 for overview, features, install, FAQs and Portal. 6 returns to SCIIO. HERMES opens this section; SCIIO returns.`:`Ardor. One agent. Every app. Any task.
Free plan: GPT-6 Astra and top GPT models, $0 to start. Generous token limits, with 10\xD7 usage in the limited-time promo.
${Ae[M.mode].name}
${Ae[M.mode].story.body}
Arrow keys select controls. Enter opens them. Shift with arrow keys rotates the image. This product explorer does not execute workspace tasks.`:"Abstract ASCII signal-genesis introduction. Press Enter or Escape to skip.";e!==Nu&&(Nu=e,Pu.textContent=e)}function Yu(i){if(requestAnimationFrame(Yu),!tt||document.hidden){Il=i;return}let t=Math.min(.15,(i-Il)/1e3||.016);if(Il=i,M.now=i,M.dialogClosing&&i-M.dialogClosing>180){M.dialog=null,M.dialogClosing=0,M.focus=null,tt.worldVisibility=1,M.pendingFocus=M.modalOrigin;let s=ra;ra=null,s?.()}let e=tt.grid;if(e.clear(),Zt=[],M.phase==="intro"){let s=hn.draw(e,i);if(tt.setIntro(hn.presentation),hn.remaining(i)>0){Zt.push({id:"boot-skip",x:Math.floor((e.cols-28)/2),y:e.rows-3,w:28,h:1,label:"Skip abstract introduction. Enter or Escape.",callback:Cl}),tt.boot=Math.min(1,(hn.elapsed(i)+60)/480),tt.worldVisibility=0,e.flush(),Cu(),tt.gain=M.gain*s,tt.draw(i,t),tt.gain=M.gain;return}M.phase="reveal",M.revealAt=i,M.pageStart=i,e.clear()}tt.setIntro(null);let n=M.phase==="reveal"?Math.max(0,Math.min(1,(i-M.revealAt)/1050)):1;n===1&&!M.ready&&(M.ready=!0,M.phase="ready",M.pageStart=i,M.pendingFocus=M.mode,document.body.dataset.ready="true"),DM(e),zM(e),PM(e),YM(e),Cu(),tt.boot=1,e.flush(n,!0),tt.worldVisibility=M.dialog||M.mode==="signal"&&signalAtLogin()?0:n,tt.draw(i,t)}function Du(i){return[...Zt].reverse().find(t=>i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y-.2&&i.y<t.y+t.h+.2)}function Fu(i){M.hover!==i&&(M.hover=i,M.hoverStart=performance.now(),M.dialog==="colors"&&i?.startsWith("color-")&&(M.keyboard=!1,un(i),M.hover=i))}function wl(i){let t=tt.rect;return M.ready&&!M.dialog&&i.x>=t.x&&i.x<t.x+t.w&&i.y>=t.y&&i.y<t.y+t.h}function XM(){ze.addEventListener("pointermove",e=>{if(!tt)return;let n=tt.locate(e.clientX,e.clientY);if(tt.targetPointer.set(Ee?0:n.u,Ee?0:n.v),Wn.has(e.pointerId)&&Wn.set(e.pointerId,{x:e.clientX,y:e.clientY}),ge){let r=e.clientX-ge.lastX,a=e.clientY-ge.lastY;if(ge.moved+=Math.abs(r)+Math.abs(a),ge.lastX=e.clientX,ge.lastY=e.clientY,Wn.size===2){let o=[...Wn.values()],l=Math.hypot(o[0].x-o[1].x,o[0].y-o[1].y);ge.pinch&&(tt.world.targetDistance=Math.max(9,Math.min(30,tt.world.targetDistance-(l-ge.pinch)*.035)),tt.world.hasZoomed=!0),ge.pinch=l,ge.moved=100}else if(ge.region?.range){let o=ge.region;o.onChange(Math.max(0,Math.min(1,(n.x-o.x-1)/(o.w-2))))}else ge.world&&(tt.world.targetYaw-=r*.009,tt.world.targetPitch=Math.max(.14,Math.min(1.16,tt.world.targetPitch+a*.005)),tt.world.dragging=!0);return}let s=Du(n);Fu(s?.id||null),ze.style.cursor=s?"pointer":wl(n)?"grab":"default"}),ze.addEventListener("pointerdown",e=>{if(!M.ready){Cl();return}let n=tt.locate(e.clientX,e.clientY),s=Du(n);M.keyboard=!1,s&&(M.focus=s.id,M.hoverStart=performance.now(),Pl(s.id)),Wn.set(e.pointerId,{x:e.clientX,y:e.clientY}),ze.setPointerCapture(e.pointerId),ge={region:s,world:wl(n),lastX:e.clientX,lastY:e.clientY,moved:0},s?.range&&s.onChange(Math.max(0,Math.min(1,(n.x-s.x-1)/(s.w-2))))}),ze.addEventListener("pointerup",e=>{Wn.delete(e.pointerId),ge&&ge.moved<7&&ge.region&&!ge.region.range&&(Me.tick(),ge.region.callback()),ge=null,tt.world.dragging=!1});let i=()=>{Wn.clear(),ge=null,tt.world.dragging=!1};ze.addEventListener("pointercancel",i),ze.addEventListener("lostpointercapture",()=>{Wn.size===0&&i()}),ze.addEventListener("pointerleave",()=>{Fu(null),tt.targetPointer.set(0,0)}),ze.addEventListener("wheel",e=>{let n=tt.locate(e.clientX,e.clientY);wl(n)&&(e.preventDefault(),tt.world.zoom(e.deltaY>0?1:-1))},{passive:!1}),Pe.addEventListener("focus",()=>M.commandFocused=!0),Pe.addEventListener("blur",()=>M.commandFocused=!1),Pe.addEventListener("keydown",e=>{e.key==="Tab"&&(e.preventDefault(),M.keyboard=!0,un(Tl(Zt,"command",e.shiftKey))),e.key==="Enter"&&(e.preventDefault(),Wu(Pe.value)),e.key==="Escape"&&(e.preventDefault(),Pe.blur(),ze.focus()),e.key==="ArrowUp"&&(e.preventDefault(),M.historyIndex=Math.max(0,M.historyIndex-1),Pe.value=M.commandHistory[M.historyIndex]||""),e.key==="ArrowDown"&&(e.preventDefault(),M.historyIndex=Math.min(M.commandHistory.length,M.historyIndex+1),Pe.value=M.commandHistory[M.historyIndex]||"")}),document.addEventListener("keydown",e=>{if(e.metaKey||e.ctrlKey||e.altKey||e.target===Pe)return;if(!M.ready){["Enter"," ","Escape"].includes(e.key)&&(e.preventDefault(),M.keyboard=!0,Cl()),e.key==="Tab"&&(e.preventDefault(),M.keyboard=!0,un("boot-skip"));return}let n=e.key,s=n.toLowerCase();if(M.dialog==="signal-file"&&["PageDown","PageUp"].includes(n)){e.preventDefault();signalFilePage(n==="PageDown"?1:-1);return}if(M.dialog==="signal-puzzle"&&(/^[1-9]$/.test(n)||n==="Enter")){e.preventDefault();if(!e.repeat)signalPuzzleKey(n);return}if(M.dialog==="signal-input"&&(/^[0-9]$/.test(n)||n==="Backspace"||n==="Enter")){e.preventDefault();if(n==="Enter")signalSubmitInput();else if(n==="Backspace")signalInput.value=signalInput.value.slice(0,-1);else if(signalInput.value.length<(signalInput.kind==="CLAVE"?4:3))signalInput.value+=n;return}if(n==="Escape"){e.preventDefault(),M.keyboard=!0,M.dialog?ku():un(M.mode);return}if(n==="Tab"){e.preventDefault(),M.keyboard=!0,un(Tl(Zt,M.focus,e.shiftKey));return}let r=Zt.find(c=>c.id===M.focus);if(n==="Enter"||n===" "){if(e.preventDefault(),M.keyboard=!0,e.repeat)return;(r||Zt.find(u=>u.id===M.mode)||Zt[0])?.callback(),Me.tick();return}if(n.startsWith("Arrow")){e.preventDefault(),M.keyboard=!0,e.shiftKey&&!M.dialog?(n==="ArrowLeft"&&(tt.world.targetYaw+=.16),n==="ArrowRight"&&(tt.world.targetYaw-=.16),n==="ArrowUp"&&(tt.world.targetPitch=Math.min(1.16,tt.world.targetPitch+.08)),n==="ArrowDown"&&(tt.world.targetPitch=Math.max(.14,tt.world.targetPitch-.08))):r?.range&&(n==="ArrowLeft"||n==="ArrowRight")?r.onChange(Math.max(0,Math.min(1,r.value+(n==="ArrowRight"?.05:-.05)))):un(Uu(Zt,M.focus,n));return}if(n==="Home"||n==="End"){e.preventDefault(),M.keyboard=!0,r?.range?r.onChange(n==="Home"?0:1):un(Zt[n==="Home"?0:Zt.length-1]?.id);return}if(n==="PageDown"||n==="PageUp"){let c=n==="PageDown"?1:-1;e.preventDefault(),["message","overview","usp","free"].includes(M.dialog)?Fl(c):(M.dialog==="list"||M.dialog==="saved")&&(M.listPage=Math.max(0,Math.min(Math.ceil(ca().length/4)-1,M.listPage+c)),M.selection=M.listPage*4,M.pendingFocus="@list",M.detailStart=performance.now());return}if(M.dialog==="colors"&&/^[1-9]$/.test(n)&&In[Number(n)-1]){e.preventDefault(),Bu(In[Number(n)-1].id);return}if(M.dialog==="rickroll"){(s==="p"||n==="0")&&(e.preventDefault(),e.repeat||(s==="p"?Hu():Gu()));return}if(M.dialog==="config"){s==="b"&&(e.preventDefault(),oa()),s==="c"&&(e.preventDefault(),Ki()),s==="m"&&(e.preventDefault(),la());return}if(M.dialog)return;if(M.mode==="signal"&&signalKey(n)){e.preventDefault();return}if(M.mode==="hermes"&&/^[1-6]$/.test(n)){e.preventDefault(),M.keyboard=!0,hermesNumberKey(n);return}let a={1:"cloud",2:"team",3:"apps"}[n];if(a){e.preventDefault(),M.keyboard=!0,dn(a),un(a);return}let o={4:()=>oe("free",ardorFree),5:()=>oe("config"),6:()=>dn("hermes"),h:()=>dn("hermes"),"?":()=>oe("help"),F1:()=>oe("help"),"/":Dl,c:Ki,u:aa,e:()=>M.mode==="hermes"?openHermesPage("features"):oe("list"),a:()=>M.mode==="hermes"?openHermesPage("overview"):oe("overview"),d:()=>Is("docs"),g:()=>Is("start"),k:()=>oe("rickroll"),m:la,t:Ol,b:oa,s:Zu,r:()=>{tt.world.reset(),he("View reset. Shift + arrows rotates the image.")},"+":()=>tt.world.zoom(-1),"=":()=>tt.world.zoom(-1),"-":()=>tt.world.zoom(1)},l=o[n]||o[s];l&&(e.preventDefault(),M.keyboard=!0,e.repeat||l())});let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{if(M.commandFocused&&innerWidth<700)return;let e=Ou();M.mobile=e.mobile,tt.grid.cols!==e.cols?(tt.reflow(e.cols,e.rows,e.worldRect),Nl=""):tt.resizeCanvas()},100)}),window.addEventListener("hashchange",()=>{let e=Object.keys(Ae).find(n=>Ae[n].slug===location.hash.slice(1)||n===location.hash.slice(1));e&&dn(e)}),document.addEventListener("visibilitychange",()=>{Re.suspend(performance.now()),Me.ctx&&M.sound&&(document.hidden?Me.ctx.suspend():Me.ctx.resume().catch(()=>{}))})}function KM(i){let t=Zt.find(o=>o.id===i);if(!t)return null;let e=(t.x+t.w/2)/tt.grid.cols*2-1,n=1-(t.y+.5)/tt.grid.rows*2,s=e,r=n;for(let o=0;o<12;o++){let l=1-Math.min((s*s+r*r)*.45,1),c=s*(1+r*r*tt.curvature)+tt.pointer.x*.009*l,u=r*(1+s*s*tt.curvature*.72)+tt.pointer.y*.009*l;s+=(e-c)*.8,r+=(n-u)*.8}let a=ze.getBoundingClientRect();return{x:a.x+(s*.5+.5)*a.width,y:a.y+(1-(r*.5+.5))*a.height}}document.getElementById("reconnect").addEventListener("click",()=>location.reload());async function $M(){await document.fonts.load("24px Terminal");try{let i=Ou();M.mobile=i.mobile,tt=new jr(ze,{...i,introMark:Ul,onScanProgress:qM,onScanComplete:jM,onError:()=>{document.getElementById("fallback").hidden=!1}}),tt.world.auto=M.auto,tt.setColor(In.find(e=>e.id===M.color)),tt.compositeUniforms.uScan.value=-1,M.logAt=performance.now(),M.pageStart=M.logAt,M.mode==="signal"&&syncSignalScene(),XM();let t={city:"cloud",build:"cloud",signal:"team",connect:"team",archive:"apps",run:"apps"},e=Object.keys(Ae).find(n=>Ae[n].slug===location.hash.slice(1)||n===location.hash.slice(1))||t[location.hash.slice(1)];e&&e!=="cloud"&&dn(e),window.__ardor={get status(){return{renderer:"single-character-matrix",palette:"solid-phosphor",color:bs(),committedColor:M.color,colorPreview:M.colorPreview,phosphor:tt.color.toArray(),ready:M.ready,phase:M.phase,cols:tt.grid.cols,rows:tt.grid.rows,mode:M.mode,view:Ae[M.mode].slug,introPhase:hn.phase,introElapsed:hn.started===null?0:M.now-hn.started,introLogo:tt.compositeUniforms.uIntro.value.toArray(),introClearance:M.phase==="intro"?hn.presentation.clearance:0,focus:M.focus,keyboard:M.keyboard,scanning:M.scanning,scanCount:M.scanCount,savedCount:Yn.length,dialog:M.dialog,message:M.message?.id,category:M.category,detailPage:M.detailPage,detailPages:M.detailPages,listPage:M.listPage,auto:M.auto,sound:M.sound,mosaic:M.mosaic,crt:M.crt,curvature:M.lens,gain:M.gain,glow:M.glow,webgl:tt.world.alive,sceneYaw:tt.world.yaw,sceneTargetYaw:tt.world.targetYaw,sceneRotationY:tt.world.groups[tt.world.mode].rotation.y,sceneDistance:tt.world.distance,sceneComponents:tt.world.components,lastLink:M.lastLink,source:Ss.home,reducedMotion:Ee,logoFrame:Ul.frame,rickroll:{active:Re.active,playing:Re.playing,frame:Re.frame,frameCount:Re.frameCount,position:Re.position,duration:Re.duration}}},hitTarget:KM,get controls(){return Zt.map(({id:n,label:s,x:r,y:a,w:o,h:l,href:c})=>({id:n,label:s,x:r,y:a,w:o,h:l,href:c}))},get copy(){return Pu.textContent},get text(){return tt.grid.toLines()}},requestAnimationFrame(Yu)}catch(i){console.error("ARDOR terminal initialization failed:",i),document.getElementById("fallback").hidden=!1}}
// Hermes uses the same character matrix, CRT shader and accessible controls as SCIIO.
// Build Hermes with the existing Three.js primitives and shared ASCII rasterizer.
Jr.prototype.buildHermes = function () {
  const group = new Se;
  group.name = 'Hermes winged helmet, face, shoulders and orbiting memory signals';
  const head = new Se;
  head.position.y = 1.35;
  group.add(head);
  this.hermesHead = head;
  const ellipsoid = (parent, position, scale, tone, edges = 0) => {
    const mesh = this.solid(new xs(1, 24, 16), tone, edges);
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    parent.add(mesh);
    return mesh;
  };
  ellipsoid(head, [0, 0, 0], [1.05, 1.3, .85], .31);
  ellipsoid(head, [0, -.48, .34], [.72, .8, .66], .29);
  ellipsoid(head, [0, -.04, .94], [.16, .4, .32], .66);
  for (const side of [-1, 1]) {
    ellipsoid(head, [side * .43, .22, .77], [.25, .14, .13], .04);
    ellipsoid(head, [side * .43, .19, .88], [.07, .075, .04], .87);
    head.add(Xi([[side * .13, .48, .83], [side * .42, .57, .8], [side * .72, .45, .69]], .7));
    ellipsoid(head, [side * 1.04, -.03, 0], [.2, .39, .2], .42);
  }
  head.add(Xi([[-.35, -.65, .88], [0, -.72, .97], [.35, -.65, .88]], .08));
  const helmet = this.solid(new xs(1.19, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), .46, .7);
  helmet.scale.set(1, .79, .88);
  helmet.position.y = .59;
  head.add(helmet);
  this.box(head, 0, .67, .89, 2.15, .17, .22, .63, .8);
  this.hermesWings = [];
  for (const side of [-1, 1]) {
    const wing = new Se;
    wing.position.set(side * 1.04, .72, -.12);
    head.add(wing);
    this.hermesWings.push(wing);
    for (let feather = 0; feather < 4; feather++) {
      const mesh = ellipsoid(wing, [side * (.25 + feather * .24), .45 + feather * .19, -feather * .1], [.16, .85 - feather * .09, .12], .35 + feather * .13, .5);
      mesh.rotation.z = -side * (.3 + feather * .18);
    }
  }
  ellipsoid(group, [0, -.5, -.05], [.45, .65, .45], .28);
  ellipsoid(group, [0, -1.05, -.12], [2.1, .6, .9], .23, .38);
  for (let side of [-1, 1]) {
    this.link(group, [[side * 1.4, -.7, 1.1], [side * 2.9, .7, .4], [side * 2.3, 2.6, -.8], [side * .7, 3.2, -.5]], side < 0 ? .1 : .6);
  }
  return group;
};

function animateHermesWorld(world, time) {
  world.hermesHead.position.y = 1.35 + Math.sin(time * .85) * .1;
  world.hermesHead.rotation.z = Math.sin(time * .55) * .055;
  world.hermesWings.forEach((wing, index) => {
    wing.rotation.z = (index ? 1 : -1) * Math.sin(time * 1.4) * .08;
  });
}

function hermesMarkFrame(time, reduced) {
  const angle = reduced ? .35 : time * .0007;
  const frame = Array.from({ length: 7 }, () => Array(10).fill(' '));
  const points = [];
  for (const z of [-1, 1]) for (const y of [-1, 1]) for (const x of [-1, 1]) {
    const depth = z * Math.cos(angle) - x * Math.sin(angle);
    points.push([4.5 + (x * Math.cos(angle) + z * Math.sin(angle)) * 2.5 / (1 - depth * .12), 3 + (y + depth * .25) * 1.9, depth]);
  }
  for (let index = 0; index < 8; index++) for (const bit of [1, 2, 4]) {
    const end = index ^ bit;
    if (end < index) continue;
    const a = points[index], b = points[end];
    const steps = Math.ceil(Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]))) * 2;
    for (let step = 0; step <= steps; step++) {
      const fraction = step / steps;
      const x = Math.round(a[0] + (b[0] - a[0]) * fraction);
      const y = Math.round(a[1] + (b[1] - a[1]) * fraction);
      if (frame[y]?.[x] !== undefined) frame[y][x] = a[2] + (b[2] - a[2]) * fraction > 0 ? '#' : ':';
    }
  }
  frame[3][4] = 'H';
  return frame.map(row => row.join(''));
}

const hermesContent = globalThis.SCIIO_HERMES;
Object.assign(Ss, hermesContent.links);
Ae.hermes = {
  number: '06', slug: 'hermes', name: 'HERMES / NOUS RESEARCH', menu: '6 HERMES AGENT',
  field: 'THE AGENT THAT GROWS WITH YOU.', shortField: 'AN AGENT THAT GROWS WITH YOU.',
  projection: 'MEMORY <-> SKILLS <-> ACTION', mobileProjection: 'MEMORY -> SKILLS',
  category: 'people', lines: ['OPEN SOURCE. PERSISTENT MEMORY. YOUR AGENT.', 'LOCAL / DESKTOP / MESSAGING / OPTIONAL CLOUD'],
  mobile: ['OPEN SOURCE. YOUR AGENT.', 'MEMORY / SKILLS / ACTION'], story: hermesContent.pages.overview,
};

function terminalLinkKey(key) {
  if (M.mode !== "hermes") return key;
  return { home: "hermesHome", docs: "hermesDocs", start: "hermesCloud", pricing: "hermesPlans", download: "hermesDownloads" }[key] || key;
}

function openHermesPage(page) {
  oe('usp', hermesContent.pages[page]);
}

function returnFromHermes() {
  dn(M.hermesReturnMode || 'cloud');
}

function hermesNumberKey(key) {
  const pages = ['overview', 'features', 'install', 'faqs', 'portal'];
  if (key === '6') returnFromHermes();
  else openHermesPage(pages[Number(key) - 1]);
}

function renderHermesHeader(grid) {
  const mobile = M.mobile;
  grid.text(3, 2, 'SCIIO / HERMES UPLINK', 1);
  if (!mobile) As(grid, 'hermes-source', 65, 2, 15, 'NOUS RESEARCH ↗', 'hermesHome', true);
  const mark = hermesMarkFrame(M.now, Ee);
  mark.forEach((line, row) => grid.text(3, 4 + row, line, row === 3 ? 3 : 1));
  const x = mobile ? 14 : 17;
  const width = grid.cols - x - 4;
  grid.fill(x, 4, width, 5, ' ', 5, 4);
  const lines = mobile
    ? ['H E R M E S', 'THE AGENT THAT', 'GROWS WITH YOU.', 'NOUS RESEARCH', 'OPEN SOURCE / MIT']
    : ['H E R M E S / NOUS RESEARCH', 'THE AGENT THAT GROWS WITH YOU.', 'ONE AGENT. PERSISTENT MEMORY. REUSABLE SKILLS.', 'YOUR TERMINAL. YOUR DESKTOP. YOUR MESSAGING APPS.', 'OPEN SOURCE / MIT / LOCAL OR OPTIONAL CLOUD'];
  lines.forEach((line, row) => grid.text(x + 1, 4 + row, line, 5, 4, width - 2));
  UM(grid, 3, 11, '06 /', bn('HERMES AGENT'), grid.cols - 7);
  grid.text(3, 12, bn(mobile ? 'AN AGENT THAT GROWS WITH YOU.' : 'THE INTERNET\'S OWN AI. BUILT BY NOUS RESEARCH.'), 2, 0, mobile ? 34 : 54);
}

function renderHermesSection(grid) {
  const mobile = M.mobile;
  grid.text(3, 13, '[ 06 / MEMORY <-> SKILLS ]', 2);
  const captions = mobile ? Ae.hermes.mobile : Ae.hermes.lines;
  captions.forEach((line, row) => grid.text(3, (mobile ? 31 : 33) + row, bn(line), row ? 2 : 1, 0, mobile ? 34 : 54));
  const pages = [
    ['overview', '1 OVERVIEW'], ['features', '2 FEATURES'], ['install', '3 INSTALL'],
    ['faqs', '4 FAQS'], ['portal', '5 NOUS PORTAL'],
  ];
  if (mobile) {
    pages.forEach(([page, label], index) => Xt(grid, 'hermes-' + page, index % 2 ? 22 : 3, 34 + Math.floor(index / 2) * 2, 16, label, () => openHermesPage(page)));
    Xt(grid, 'hermes-back', 22, 38, 15, '6 BACK TO SCIIO', returnFromHermes);
    on(grid, 'color', 3, 39, 18, `COLOR: ${bs().toUpperCase()} [C]`, Ki);
    on(grid, 'config', 22, 39, 15, 'DISPLAY CONFIG.', () => oe('config'));
  } else {
    grid.text(60, 12, 'MEMORY / SKILLS / AI', 2);
    grid.text(60, 14, 'EXPLORE HERMES', 1);
    grid.rule(60, 15, 20, 2, '.');
    pages.forEach(([page, label], index) => Xt(grid, 'hermes-' + page, 60, 17 + index * 2, 20, label, () => openHermesPage(page)));
    Xt(grid, 'hermes-back', 60, 27, 20, '6 BACK TO SCIIO', returnFromHermes);
    grid.text(60, 28, 'DRAG / SHIFT+ARROWS', 2);
    on(grid, 'color', 60, 30, 20, `COLOR: ${bs().toUpperCase()} [C]`, Ki);
    on(grid, 'config', 60, 31, 20, 'DISPLAY CONFIG.', () => oe('config'));
    As(grid, 'hermes-github', 60, 33, 20, 'GITHUB ↗', 'hermesGithub', true);
    As(grid, 'hermes-community', 60, 35, 20, 'COMMUNITY ↗', 'hermesCommunity', true);
  }
}

function renderHermesDetailFooter(grid, x, y, width, height, page) {
  const left = x + 3, available = width - 6, half = Math.floor((available - 2) / 2);
  As(grid, 'detail-source', left, y + height - 6, half, page.id === 'hermes-install' ? 'INSTALL PAGE ↗' : 'HERMES SITE ↗', page.id === 'hermes-install' ? 'hermesInstall' : 'hermesHome', true);
  As(grid, 'detail-docs', left + half + 2, y + height - 6, available - half - 2, 'DOCS ↗', 'hermesDocs', true);
  if (page.id === 'hermes-install') {
    Xt(grid, 'hermes-copy-install', left, y + height - 4, half, 'COPY INSTALL', async () => {
      try {
        await navigator.clipboard.writeText(hermesContent.installCommand);
        he('Official install command copied. Run it in your own terminal when ready.');
      } catch {
        he('Clipboard unavailable. Read the command on the official INSTALL PAGE.');
      }
    }, true);
    As(grid, 'hermes-downloads', left + half + 2, y + height - 4, available - half - 2, 'DOWNLOADS ↗', 'hermesDownloads');
  } else {
    As(grid, 'hermes-detail-github', left, y + height - 4, half, page.id === 'hermes-portal' ? 'CURRENT PLANS ↗' : 'GITHUB ↗', page.id === 'hermes-portal' ? 'hermesPlans' : 'hermesGithub');
    As(grid, 'hermes-detail-cloud', left + half + 2, y + height - 4, available - half - 2, 'CLOUD ↗', 'hermesCloud');
  }
  Xt(grid, 'detail-return', left, y + height - 2, available, 'RETURN TO HERMES ↵', () => gi());
}

// SIGNAL_GAME_BEGIN: native game UI inside the existing CRT renderer.
const signalRules = globalThis.UltimaSignal;
const signalSaveKey = 'sciio-ultima-senal-v1';
let signalState = signalRules.initial();
let signalSaveAvailable = true;
let signalInput = { kind: 'CLAVE', value: '' };
let signalPuzzle = 'sync';
let signalLoginFocused = false;
let signalLoginReply = '';
const signalAtLogin = () => !signalState.alias || !signalState.synced || !signalState.started;
try { signalState = signalRules.restore(localStorage.getItem(signalSaveKey)); } catch { signalSaveAvailable = false; }
Ae.signal = { slug: 'ultima-senal', name: 'ULTIMA SENAL', category: 'people', story: { body: '' } };

Jr.prototype.buildSignalStation = function () {
  const group = new Se;
  group.name = 'Nadir station, solar arrays and rotating transmission rings';
  this.box(group, 0, 1, 0, 2.8, 1.15, 1.3, .19, .65);
  this.box(group, 0, 1.72, 0, 1.5, .28, .9, .31, .7);
  for (const side of [-1, 1]) {
    this.box(group, side * 2.9, .83, 0, 2.4, .12, 1.55, .15, .62);
    this.box(group, side * 1.65, .83, 0, .9, .14, .2, .4, .7);
    for (let row = 0; row < 4; row++) group.add(Xi([[side * 1.75, .92, -.55 + row * .36], [side * 4.05, .92, -.55 + row * .36]], .38));
  }
  this.box(group, 0, 2.25, 0, .12, .9, .12, .65, .7);
  const dish = this.solid(new kr(.83, .085, 8, 36), .5, .75);
  dish.position.set(0, 2.8, 0);
  dish.rotation.x = -.45;
  group.add(dish);
  this.signalRing = this.solid(new kr(2.15, .045, 6, 52), .3, 0);
  this.signalRing.position.y = 1;
  this.signalRing.rotation.x = .45;
  group.add(this.signalRing);
  this.link(group, [[-3.8, -1, .8], [-2.5, 2, 1.7], [0, 3.5, -.5], [3.4, 1.6, -.8]], .2);
  return group;
};

function syncSignalScene() {
  tt.world.setMode(!signalState.synced || signalState.scene === 'eco' ? 'hermes' : signalState.scene === 'clinica' ? 'clinic' : signalState.scene === 'observatorio' ? 'observatory' : 'station');
}

function signalCommand(command) {
  const loggingIn = signalAtLogin();
  if (loggingIn) {
    const typed = String(command).trim().toUpperCase().replace(/\s+/g, ' ');
    const login = /^(?:LOGIN|INICIAR SESION)(?: (.*))?$/.exec(typed);
    if (login) command = signalState.alias ? 'ACCEDER ' + (login[1] || signalState.alias) : 'REGISTRAR ' + (login[1] || '');
    else if (/^[A-Z0-9_-]{2,16}$/.test(typed) && !['SINCRO', 'INICIAR', 'AYUDA', 'HELP', 'PISTA', 'CUADERNO', 'REINICIAR', 'CONFIRMAR', 'CANCELAR', 'ACCEDER', 'REPETIR'].includes(typed)) command = (signalState.alias ? 'ACCEDER ' : 'REGISTRAR ') + typed;
  }
  let result = signalRules.apply(signalState, command);
  if (loggingIn && signalState.synced && /^ACCEDER(?: |$)/i.test(command) && (!command.trim().split(/\s+/)[1] || command.trim().split(/\s+/)[1].toUpperCase() === signalState.alias)) result = signalRules.apply(result.state, 'INICIAR');
  signalState = result.state;
  try { localStorage.setItem(signalSaveKey, JSON.stringify(signalState)); } catch { signalSaveAvailable = false; }
  Pe.value = '';
  M.commandFocused = false;
  M.pageStart = performance.now();
  syncSignalScene();
  he(result.message);
  if (loggingIn && result.panel?.title.startsWith('PERFIL RECUPERADO')) {
    signalLoginReply = 'PERFIL LOCAL RECUPERADO: ' + signalState.alias + '. NO RECUERDAS HABER ESTADO AQUI.';
    result.panel = null;
  }
  if (result.file) { signalFile = { key: result.file, page: 0 }; M.fileOpenedAt = performance.now(); oe('signal-file'); M.pendingFocus = result.file === 'directory' ? 'signal-open-baliza' : result.file === 'tripulacion' ? 'signal-person-D-01' : result.file === 'guardia' ? 'signal-recover-1' : 'signal-file-close'; }
  else if (result.puzzle) { signalPuzzle = result.puzzle; oe('signal-puzzle'); M.pendingFocus = signalPuzzle === 'sync' ? 'signal-repeat' : signalPuzzle === 'memory' ? 'signal-fragment-1' : 'signal-check-circuit'; }
  else if (result.panel) oe('usp', result.panel);
  else { M.dialog = null; M.dialogClosing = 0; M.focus = null; M.pendingFocus = signalAtLogin() ? 'command' : 'signal-map-' + signalState.scene; if (signalAtLogin() && !M.mobile) { M.pendingFocus = null; Dl(); } else ze.focus({ preventScroll: true }); }
  Me.tick();
}

function signalAction(action) {
  if (action === '@alias' || action === '@login') { Dl(); Pe.value = (action === '@alias' ? 'REGISTRAR ' : 'ACCEDER ') + (action === '@login' ? signalState.alias : ''); he('Escribe un alias ficticio tras REGISTRAR y pulsa ENVIAR. No uses datos reales.'); return; }
  if (action === '@clave' || action === '@frecuencia') {
    signalInput = { kind: action === '@clave' ? 'CLAVE' : 'FRECUENCIA', value: '' };
    oe('signal-input');
    M.pendingFocus = 'signal-digit-1';
  } else if (action === '@final') oe('usp', signalRules.endingPanel(signalState, signalState.ending));
  else signalCommand(action);
}

function signalActions() {
  if (!signalState.alias) return [['@alias', 'REGISTRARSE', 'Elige un alias ficticio'], ['ACCEDER', 'INICIAR SESION', 'No recuerdas tu identificador'], ['AYUDA', 'COMO ACCEDER', 'Registro local, sin datos reales'], ['CUADERNO', 'LEER ESTADO', 'Memoria autobiografica ausente']];
  if (!signalState.synced) return [['SINCRO', 'SINCRONIZAR', 'Recupera tu ritmo de acceso'], ['@login', 'INICIAR SESION', 'Alias local: ' + signalState.alias], ['PISTA', 'NECESITO PISTA', 'Como repetir los pulsos'], ['REINICIAR', 'NUEVA SESION', 'Reiniciar con confirmacion']];
  if (signalState.ending) return [['@final', 'LEER FINAL', 'La ultima transmision'], ['REINICIAR', 'OTRA PARTIDA', 'Explorar otras decisiones'], ['CUADERNO', 'CUADERNO', 'Identidad y decisiones'], ['AYUDA', 'COMO JUGAR', 'Controles del terminal']];
  if (!signalState.started) return [['INICIAR', 'ABRIR SESION', 'ECO dice que has vuelto'], ['CUADERNO', 'CUADERNO', 'Perfil: ' + signalState.alias], ['AYUDA', 'COMO JUGAR', 'Investiga sin limite de tiempo'], ['REINICIAR', 'REINICIAR', 'Volver al acceso']];
  switch (signalState.scene) {
    case 'archivo': return signalState.archive ? [['LEER GUARDIA', 'GUARDIA.LOG', 'Recupera sus bloques danados'], ['LEER PROTOCOLO', 'LIA_LUCES.IMG', 'Inspecciona la imagen de Lia'], ['LEER TRIPULACION', 'IDENTIDADES.DB', '24 filas que puedes inspeccionar'], ['CUADERNO', 'CUADERNO', 'Tu registro de contradicciones']] : [['@clave', 'ABRIR ARCHIVO', 'Introduce cuatro cifras'], ['LEER BALIZA', 'RELEER MENSAJE', 'La hora que nunca cambia'], ['CUADERNO', 'CUADERNO', 'Consulta tus pistas'], ['PISTA', 'NECESITO PISTA', 'Una ayuda sin penalizacion']];
    case 'antena': return [['@frecuencia', 'SINTONIZAR', 'Introduce tres cifras en kHz'], ['VERIFICAR', 'VERIFICAR', 'Escucha la frecuencia actual'], ['LEER PROTOCOLO', 'PROTOCOLO', 'La cuenta que hacia Lia'], ['PISTA', 'NECESITO PISTA', 'Busca una voz entre el ruido']];
    case 'eco':
      if (!signalState.trust) return [['HABLAR IDENTIDAD', 'QUIEN SOY', 'Pregunta antes de elegir'], ['CONFIAR ECO', 'CONFIAR', 'Aceptar la guia de ECO'], ['CONFIAR DUDAR', 'DESCONFIAR', 'Exigir registros sin filtros'], ['CUADERNO', 'CUADERNO', 'Que sabes realmente']];
      return [['HABLAR IDENTIDAD', 'QUIEN SOY', 'Tu identificador no es tu nombre'], ['HABLAR ACCIDENTE', 'QUE OCURRIO', 'Dos versiones del pasado'], ['HABLAR PETICION', 'QUE QUIERES', 'La voz responde a tus decisiones'], ['CUADERNO', 'CUADERNO', 'Postura: ' + signalState.trust]];
    case 'clinica': return signalState.route !== 'clinica' ? [['DERIVAR CLINICA', 'DAR ENERGIA', 'La otra sala quedara aislada'], ['CUADERNO', 'CUADERNO', signalState.route ? 'Esta ruta ya esta sin energia' : 'Elige que quieres saber'], ['PISTA', 'NECESITO PISTA', 'Una decision de recorrido'], ['IR OBSERVATORIO', 'OBSERVATORIO', 'Ver la otra posibilidad']] : [['RECUERDO', signalState.memory ? 'RELEER MEMORIA' : 'RECONSTRUIR', 'Ordena tres fragmentos personales'], ['LEER TRIPULACION', 'MANIFIESTO', 'El derecho a cambiar de decision'], ['IR ECO', 'VOLVER A ECO', 'La voz no controla este recuerdo'], ['PISTA', 'NECESITO PISTA', 'Promesa, firma y puerta']];
    case 'observatorio': return signalState.route !== 'observatorio' ? [['DERIVAR OBSERVATORIO', 'DAR ENERGIA', 'La otra sala quedara aislada'], ['CUADERNO', 'CUADERNO', signalState.route ? 'Esta ruta ya esta sin energia' : 'Elige que quieres saber'], ['PISTA', 'NECESITO PISTA', 'Una decision de recorrido'], ['IR CLINICA', 'VER CLINICA', 'Ver la otra posibilidad']] : [['CIRCUITO', signalState.bridge ? 'RELEER SENAL' : 'ABRIR CIRCUITO', 'Conecta cinco piezas de senal'], ['LEER TRIPULACION', 'IDENTIDADES.DB', 'Consulta sus filas y adjuntos'], ['IR ECO', 'VOLVER A ECO', 'Pregunta por el origen de la senal'], ['PISTA', 'NECESITO PISTA', 'La entrada es la pieza 4']];
    case 'nucleo':
      if (!signalState.power) return [['RESTABLECER', 'RESTABLECER', 'El sistema pide tus decisiones'], ['LEER TRIPULACION', 'MANIFIESTO', 'Lee el derecho a la salida'], ['CUADERNO', 'CUADERNO', 'Que falta por descubrir'], ['PISTA', 'NECESITO PISTA', 'El siguiente paso']];
      return [['ELEGIR RESCATE', 'EXPORTAR YO', 'Llevar una identidad fuera'], ['ELEGIR MEMORIA', 'QUEDARME', 'Conservar las otras voces'], ['ELEGIR SILENCIO', 'ACEPTAR SALIDA', 'Seguir la salida del sistema'], signalState.memory && signalState.trust === 'dudar' ? ['ELEGIR DESPERTAR', 'REVOCAR', 'Invocar tu recuerdo y tu firma'] : ['CUADERNO', 'CUADERNO', 'Tus decisiones han abierto estas rutas']];
    default: return [['LEER BALIZA', 'NOTA_D17.TXT', 'Abre el archivo que dejaste'], ['IR ECO', 'BUSCAR A ECO', 'La voz que dice conocerte'], ['CUADERNO', 'CUADERNO', 'No perder lo que descubres'], ['REINICIAR', 'REINICIAR', 'El sistema ya ha visto esta orden']];
  }
}


function renderSignalLoginHeader(grid) {
  const x = M.mobile ? 3 : 6, width = grid.cols - x * 2;
  grid.text(x, 4, 'SCIIO SYSTEMS', 3, 0, width);
  grid.text(x, 6, 'NADIR OS / TERMINAL D-17', 1, 0, width);
  const boot = ['[OK] ENLACE CON EL SISTEMA', '[OK] MEMORIA DE SESION MONTADA', signalState.synced ? '[OK] IDENTIDAD VERIFICADA' : '[--] IDENTIDAD NO VERIFICADA'];
  boot.forEach((line, index) => grid.text(x, 10 + index * 2, bn(line), 2, 0, width));
  grid.text(x, 18, 'INICIO DE SESION REQUERIDO', 3, 0, width);
  const instruction = !signalState.alias ? 'Introduce tu alias para continuar.' : !signalState.synced ? 'Perfil: ' + signalState.alias + '. Verifica tu acceso.' : 'Identidad verificada: ' + signalState.alias + '.';
  Ts(instruction, width).forEach((line, row) => grid.text(x, 21 + row, line, 1, 0, width));
  const next = !signalState.alias ? 'No recuerdas tu nombre. Elige un alias.' : !signalState.synced ? 'Escribe SINCRO y pulsa Enter.' : 'Escribe INICIAR para abrir la sesion.';
  Ts(next, width).forEach((line, row) => grid.text(x, 25 + row, line, 2, 0, width));
}
function renderSignalLoginPrompt(grid) {
  const x = M.mobile ? 3 : 6, width = grid.cols - x * 2, row = 30;
  const prefix = signalState.alias ? 'nadir$ ' : 'login: ', inputX = x + prefix.length, inputWidth = width - prefix.length;
  grid.text(x, row, prefix, 3);
  const typed = Pe.value.toUpperCase().slice(-inputWidth + 1);
  grid.text(inputX, row, typed, 1, 0, inputWidth);
  if (Ee || Math.floor(M.now / 650) % 2 === 0) grid.put(inputX + typed.length, row, '\u2588', 3);
  Zt.push({ id: 'command', x, y: row - 1, w: width, h: 3, label: 'Inicio de sesion. Escribe tu alias o una orden y pulsa Enter.', callback: Dl });
  on(grid, 'send', x, row + 3, width, '[ ENTER ] CONTINUAR', () => Pe.value.trim() ? signalCommand(Pe.value) : Dl());
  const response = M.log && !M.log.startsWith('REGISTRA UN ALIAS') ? M.log : signalLoginReply;
  Ts(response || signalLoginReply, width).slice(0, 4).forEach((line, index) => grid.text(x, 36 + index, line, 2, 0, width));
  grid.text(x, M.mobile ? 55 : 42, 'PERFIL LOCAL / ALIAS FICTICIO', 2, 0, width);
  grid.text(x, M.mobile ? 57 : 44, 'SIN CORREO NI CONTRASENA REAL', 2, 0, width);
  if (M.ready && !M.dialog && !M.mobile && !signalLoginFocused) { signalLoginFocused = true; M.pendingFocus = null; Dl(); }
}

function renderSignalHeader(grid) {
  if (signalAtLogin()) return renderSignalLoginHeader(grid);
  const mobile = M.mobile, x = mobile ? 14 : 17, width = grid.cols - x - 4;
  grid.text(3, 2, 'SCIIO / SESION D-17', 1, 0, mobile ? 34 : 54);
  if (!mobile) grid.text(64, 2, signalSaveAvailable ? 'GUARDADO LOCAL' : 'SIN GUARDADO', 2);
  hermesMarkFrame(M.now, Ee).forEach((row, index) => grid.text(3, 4 + index, row.replace('H', '+'), 1));
  grid.fill(x, 4, width, 5, ' ', 5, 4);
  const lines = mobile ? ['ULTIMA SENAL', 'SESION D-17', 'MEMORIA:', 'NO DISPONIBLE', 'ECO TE ESPERA.'] : ['U L T I M A  S E N A L', 'SESION RESTABLECIDA / MEMORIA NO DISPONIBLE', 'NO RECUERDAS QUIEN ERES. SOLO EXISTE ESTA TERMINAL.', 'ECO: ESTA VEZ, INTENTA NO REINICIAR.', signalState.alias ? 'PERFIL LOCAL: ' + signalState.alias : 'REGISTRO FICTICIO / SIN CORREO NI CONTRASENA REAL'];
  lines.forEach((line, row) => grid.text(x + 1, 4 + row, line, 5, 4, width - 2));
  UM(grid, 3, 11, 'SECTOR:', signalRules.scenes[signalState.scene].name, grid.cols - 7);
  grid.text(3, 12, bn(signalRules.objective(signalState)), 2, 0, mobile ? 34 : 54);
}

function renderSignalMain(grid) {
  if (signalAtLogin()) return;
  const mobile = M.mobile;
  grid.text(3, 13, `[ ${signalState.frequency} KHZ / ${signalState.tuned ? 'VOZ LOCALIZADA' : 'ENLACE DE ESCUCHA'} ]`, 2, 0, mobile ? 34 : 54);
  const caption = !signalState.alias ? 'NO RECUERDAS TU NOMBRE. ELIGE UN ALIAS.' : !signalState.synced ? 'EL SISTEMA RECONOCE TU RITMO, NO TU CARA.' : signalState.scene === 'clinica' ? (signalState.route === 'clinica' ? 'UNA PROMESA. UNA FIRMA. UNA PUERTA.' : 'CLINICA SIN ASIGNACION DE ENERGIA.') : signalState.scene === 'observatorio' ? (signalState.route === 'observatorio' ? (signalState.compared ? '128/128 PULSOS IDENTICOS / ORIGEN LOCAL' : signalState.bridge ? 'DOS CAPTURAS DISPONIBLES PARA COMPARAR.' : 'CIRCUITO DE ENLACE / CAPTURAS PENDIENTES') : 'OBSERVATORIO SIN ENERGIA ASIGNADA.') : signalState.ending ? 'LA TRANSMISION HA TERMINADO.' : signalState.scene === 'eco' ? (signalState.tuned ? 'ECO: "NO SOY EL PRIMERO QUE TE ESPERA."' : 'UNA SILUETA. NINGUNA RESPUESTA.') : signalState.scene === 'archivo' ? (signalState.archive ? 'TRES REGISTROS HAN SOBREVIVIDO.' : 'ARCHIVO BLOQUEADO / CLAVE DE CUATRO CIFRAS') : signalState.scene === 'antena' ? `FRECUENCIA ACTUAL: ${signalState.frequency} KHZ` : signalState.scene === 'nucleo' ? (signalState.power ? 'ENERGIA DISPONIBLE. TU DECIDES.' : 'NUCLEO AISLADO. ECO TIENE LA LLAVE.') : 'NADIR NO FIGURA EN NINGUN MAPA.';
  grid.text(3, mobile ? 31 : 33, bn(caption), 1, 0, mobile ? 34 : 54);
  on(grid, 'signal-files', 3, mobile ? 32 : 34, mobile ? 34 : 20, 'ARCHIVOS [F]', () => signalCommand('ARCHIVOS'));
  if (!mobile) grid.text(25, 34, 'ARRASTRA PARA GIRAR', 2, 0, 30);
  const scenes = Object.entries(signalRules.scenes);
  if (!mobile) { grid.text(60, 14, 'MAPA DE NADIR', 1); grid.rule(60, 15, 20, 2, '.'); }
  scenes.forEach(([key, scene], index) => Xt(grid, 'signal-map-' + key, mobile ? (index % 2 ? 22 : 3) : 60, mobile ? 34 + Math.floor(index / 2) * 2 : 16 + index * 2, mobile ? 16 : 20, `${index + 1} ${scene.short}`, () => signalCommand('IR ' + key), signalState.scene === key));
  Xt(grid, 'signal-journal', mobile ? 22 : 60, mobile ? 40 : 30, mobile ? 15 : 20, mobile ? '8 CUADERNO' : `8 CUADERNO [${signalState.read.length}/6]`, () => signalCommand('CUADERNO'));
  on(grid, 'signal-hint', mobile ? 3 : 60, mobile ? 42 : 32, mobile ? 16 : 20, 'PISTA [P]', () => signalCommand('PISTA'));
  on(grid, 'signal-audio', mobile ? 22 : 60, mobile ? 42 : 34, mobile ? 15 : 20, `SONIDO: ${M.sound ? 'ON' : 'OFF'} [M]`, la);
  if (!mobile) grid.text(3, 35, `RUTA: ${signalState.route || 'SIN ASIGNAR'} / POSTURA: ${signalState.trust || 'SIN ELEGIR'} / FINALES ${signalState.found.length}/4`, 2, 0, 54);
}

function renderSignalFooter(grid) {
  if (signalAtLogin()) return renderSignalLoginPrompt(grid);
  const mobile = M.mobile, cols = grid.cols, y = mobile ? 45 : 37, right = mobile ? 22 : 65;
  grid.rule(3, y - 1, cols - 7, 2);
  signalActions().forEach(([action, label, description], index) => {
    grid.text(3, y + index, description, 2, 0, right - 5);
    Xt(grid, 'signal-action-' + index, right, y + index, 15, label, () => signalAction(action), true);
  });
  const commandRow = mobile ? 50 : 42, inputX = mobile ? 5 : 11, inputWidth = mobile ? 22 : 54;
  grid.text(3, commandRow, mobile ? '> ' : 'ORDEN > ', 1);
  const typed = Pe.value.toUpperCase().slice(-inputWidth + 1);
  grid.text(inputX, commandRow, (typed + '.'.repeat(inputWidth)).slice(0, inputWidth), M.commandFocused ? 3 : 2);
  if (Ee || Math.floor(M.now / 650) % 2 === 0) grid.put(inputX + typed.length, commandRow, '\u2588', 3);
  Zt.push({ id: 'command', x: inputX, y: commandRow, w: inputWidth, h: 1, label: 'Escribir una orden. Escribe AYUDA para ver comandos.', callback: Dl });
  Xt(grid, 'send', mobile ? 29 : 67, commandRow, mobile ? 8 : 13, 'ENVIAR', () => Pe.value.trim() ? signalCommand(Pe.value) : Dl(), true);
  Ts(M.log || signalRules.objective(signalState), mobile ? 32 : 76).slice(0, mobile ? 2 : 1).forEach((line, index) => grid.text(3, (mobile ? 52 : 44) + index, (index ? '  ' : '> ') + line, 2, 0, cols - 6));
  if (mobile) grid.text(3, 58, signalSaveAvailable ? 'GUARDADO LOCAL / AYUDA [?]' : 'SIN GUARDADO / NO CIERRES LA PAGINA', 2, 0, 34);
}

function renderSignalDetailFooter(grid, x, y, width, height) {
  const left = x + 3, available = width - 6, half = Math.floor((available - 2) / 2);
  if (signalState.pending) {
    Xt(grid, 'signal-confirm', left, y + height - 4, half, 'CONFIRMAR', () => signalCommand('CONFIRMAR'), true);
    Xt(grid, 'signal-cancel', left + half + 2, y + height - 4, available - half - 2, 'CANCELAR', () => signalCommand('CANCELAR'));
    grid.text(left, y + height - 2, 'LA ORDEN NO SE EJECUTA HASTA CONFIRMAR.', 2, 0, available);
  } else {
    on(grid, 'signal-note', left, y + height - 5, available, 'CUADERNO [J]', () => signalCommand('CUADERNO'));
    Xt(grid, 'detail-return', left, y + height - 2, available, 'VOLVER A LA ESTACION', () => gi());
  }
}

function signalSubmitInput() {
  signalCommand(signalInput.kind + ' ' + signalInput.value);
}

function renderSignalInput(grid) {
  Zt = [];
  const width = M.mobile ? 36 : 42, height = 27, x = Math.floor((grid.cols - width) / 2), y = M.mobile ? 13 : 10;
  grid.box(x, y, width, height, 1, 0);
  grid.text(x + 3, y + 2, signalInput.kind === 'CLAVE' ? 'ARCHIVO / CLAVE DE ACCESO' : 'ANTENA / FRECUENCIA KHZ', 3, 0, width - 6);
  NM(grid, x + width - 5, y + 2);
  grid.rule(x + 1, y + 4, width - 2, 2);
  grid.text(x + 4, y + 6, '[ ' + signalInput.value.padEnd(signalInput.kind === 'CLAVE' ? 4 : 3, '_') + ' ]', 3);
  const digit = key => { if (signalInput.value.length < (signalInput.kind === 'CLAVE' ? 4 : 3)) signalInput.value += key; };
  for (let index = 0; index < 9; index++) Xt(grid, 'signal-digit-' + (index + 1), x + 4 + index % 3 * 9, y + 9 + Math.floor(index / 3) * 3, 7, String(index + 1), () => digit(String(index + 1)), true);
  Xt(grid, 'signal-erase', x + 4, y + 18, 7, 'BORRAR', () => { signalInput.value = signalInput.value.slice(0, -1); });
  Xt(grid, 'signal-digit-0', x + 13, y + 18, 7, '0', () => digit('0'), true);
  Xt(grid, 'signal-enter', x + 22, y + 18, 8, 'ACEPTAR', signalSubmitInput, true);
  grid.text(x + 3, y + 22, 'TECLADO / BOTONES / ESC: VOLVER', 2, 0, width - 6);
}

function signalKey(key) {
  if (signalAtLogin()) { if (key === '/' || key === 'Enter') Dl(); return true; }
  const lower = key.toLowerCase();
  if (/^[1-7]$/.test(key)) signalCommand('IR ' + Object.keys(signalRules.scenes)[Number(key) - 1]);
  else if (key === '8' || lower === 'j') signalCommand('CUADERNO');
  else if (lower === 'p') signalCommand('PISTA');
  else if (lower === 'f') signalCommand('ARCHIVOS');
  else if (key === '?' || key === 'F1' || lower === 'h') signalCommand('AYUDA');
  else if (['/', 'c', 'm', '+', '-', '=', 'r', 't'].includes(lower)) return false;
  return true;
}

function signalAccessible() {
  if (M.dialog === 'signal-file') return signalFilesAccessible();
  if (M.dialog === 'signal-puzzle') return signalPuzzle === 'sync' ? 'Sincronizacion de acceso. Ronda ' + (signalState.syncRound + 1) + '. ' + (signalState.syncPhase === 'observe' ? 'Observa: ' + signalRules.syncSequences[Math.min(signalState.syncRound, 1)].join(', ') + '. Pulsa REPETIR cuando estes listo.' : 'Repite usando los botones 1 a 4. Pulsos recibidos: ' + signalState.syncInput.length) : signalPuzzle === 'memory' ? 'Ordena los fragmentos: 1 firme, 2 cerre, 3 prometi. Primero prometi, despues firme, al final cerre.' : 'Gira las piezas para conectar la entrada oeste de 4 con la salida este de 6. La ruta sube por 1, cruza 2 y baja por 3.';
  if (M.dialog === 'signal-input') return `${signalInput.kind}. ${signalInput.value || 'Sin cifras.'} Usa los digitos del teclado o los botones y ACEPTAR.`;
  if (M.dialog === 'usp' && M.message?.id?.startsWith('signal-')) return M.message.title + '\n' + M.message.body;
  if (signalAtLogin()) return 'SCIIO OS. Inicio de sesion requerido. ' + (signalState.alias ? 'Perfil local: ' + signalState.alias + '. ' + (signalState.synced ? 'Escribe INICIAR para abrir la sesion.' : 'Escribe SINCRO para verificar el acceso.') : 'Escribe un alias ficticio y pulsa Enter. Tambien puedes usar LOGIN alias o REGISTRAR alias.') + ' ' + signalLoginReply + ' ' + (M.log || '') + (signalSaveAvailable ? '' : ' El navegador no permite guardar.');
  return 'ULTIMA SENAL. Aventura de misterio. ' + signalRules.scenes[signalState.scene].name + '. ' + signalRules.scenes[signalState.scene].description + ' Objetivo: ' + signalRules.objective(signalState) + ' ' + signalActions().map(([, label, description]) => label + ': ' + description).join('. ') + (signalSaveAvailable ? ' Partida guardada localmente.' : ' El navegador no permite guardar. No cierres la pagina.') + ' Puedes usar los botones o escribir comandos. AYUDA explica los controles.';
}

if (location.pathname !== '/retro-computer' && (!location.hash || ['#ultima-senal', '#juego'].includes(location.hash))) {
  M.mode = 'signal';
  M.phase = Ee ? 'ready' : 'reveal';
  M.ready = Ee;
  M.revealAt = performance.now();
  M.log = signalRules.objective(signalState).toUpperCase();
}
function renderSignalPuzzle(grid) {
  Zt = [];
  const width = M.mobile ? 36 : 54, height = 31, x = Math.floor((grid.cols - width) / 2), y = M.mobile ? 12 : 8;
  grid.box(x, y, width, height, 1, 0);
  const titles = { sync: 'SINCRONIZAR ACCESO', memory: 'RECONSTRUIR RECUERDO', circuit: 'CONECTAR LA SENAL' };
  grid.text(x + 3, y + 2, titles[signalPuzzle], 3, 0, width - 6);
  NM(grid, x + width - 5, y + 2);
  grid.rule(x + 1, y + 4, width - 2, 2);
  if (signalPuzzle === 'sync') {
    const sequence = signalRules.syncSequences[Math.min(signalState.syncRound, 1)];
    const observing = signalState.syncPhase === 'observe';
    grid.text(x + 3, y + 6, `RONDA ${Math.min(signalState.syncRound + 1, 2)}/2 / ${observing ? 'OBSERVA' : 'REPITE'}`, 1);
    grid.text(x + 3, y + 8, observing ? sequence.join('   ') : '_   '.repeat(sequence.length).trim(), 3, 0, width - 6);
    grid.text(x + 3, y + 10, `PULSOS RECIBIDOS: ${signalState.syncInput.length}/${sequence.length}`, 2);
    for (let key = 1; key <= 4; key++) {
      const active = observing && sequence[Ee ? 0 : Math.floor(Math.max(0, M.now - M.dialogStart) / 650) % sequence.length] === key;
      Xt(grid, 'signal-pulse-' + key, x + 4 + (key - 1) % 2 * 15, y + 13 + Math.floor((key - 1) / 2) * 4, 12, 'PULSO ' + key, () => signalCommand('PULSO ' + key), active);
    }
    Xt(grid, 'signal-repeat', x + 3, y + 23, width - 6, observing ? 'REPETIR LA SECUENCIA' : 'VER SECUENCIA OTRA VEZ', () => signalCommand(observing ? 'REPETIR' : 'SINCRO'), true);
  } else if (signalPuzzle === 'memory') {
    Ts('Primero prometi. Despues firme. Al final cerre.', width - 6).forEach((line, row) => grid.text(x + 3, y + 6 + row, line, 2));
    signalRules.memoryFragments.forEach((fragment, index) => {
      Xt(grid, 'signal-fragment-' + (index + 1), x + 3, y + 11 + index * 4, width - 6, (index + 1) + ' ' + fragment, () => signalCommand('FRAGMENTO ' + (index + 1)), signalState.memoryInput.includes(index + 1));
    });
    grid.text(x + 3, y + 24, `RECONSTRUIDO: ${signalState.memoryInput.length}/3`, 1);
  } else {
    grid.text(x + 3, y + 6, 'ENTRA: OESTE DE 4 / SALE: ESTE DE 6', 2, 0, width - 6);
    const glyphs = { '0,1': '└', '1,2': '┌', '2,3': '┐', '0,3': '┘', '0,2': '│', '1,3': '─' };
    const traced = signalRules.traceCircuit(signalState.circuit);
    for (let index = 0; index < 9; index++) {
      const px = x + 4 + index % 3 * 9, py = y + 10 + Math.floor(index / 3) * 4;
      if (!signalRules.circuitTiles.includes(index)) { grid.text(px + 2, py, 'X', 7); continue; }
      const ports = signalRules.circuitPorts(index, signalState.circuit[index]).sort();
      const glyph = glyphs[ports.join(',')] || '?';
      const button = Xt(grid, 'signal-circuit-' + index, px, py, 7, `${index + 1} ${glyph}`, () => signalCommand('GIRAR ' + (index + 1)), traced.path.includes(index));
      if (button) button.label = `Girar pieza ${index + 1}. Conexiones ${ports.map(port => ['norte', 'este', 'sur', 'oeste'][port]).join(' y ')}.`;
    }
    Xt(grid, 'signal-check-circuit', x + 3, y + 24, width - 6, 'COMPROBAR CONEXION', () => signalCommand('COMPROBAR'), true);
  }
  grid.text(x + 3, y + 28, 'NUMEROS / ESC PARA VOLVER', 2, 0, width - 6);
}

function signalPuzzleKey(key) {
  if (signalPuzzle === 'sync') {
    if (/^[1-4]$/.test(key)) signalCommand('PULSO ' + key);
    else if (key === 'Enter') signalCommand(signalState.syncPhase === 'observe' ? 'REPETIR' : 'SINCRO');
  } else if (signalPuzzle === 'memory') {
    if (/^[1-3]$/.test(key)) signalCommand('FRAGMENTO ' + key);
  } else if (signalPuzzle === 'circuit') {
    if (/^[1-9]$/.test(key)) signalCommand('GIRAR ' + key);
    else if (key === 'Enter') signalCommand('COMPROBAR');
  }
}

Jr.prototype.buildSignalClinic = function () {
  const group = new Se;
  group.name = 'Memory clinic, suspended recall core and recovery pod';
  this.box(group, 0, -.5, 0, 4.8, .35, 2.1, .2, .65);
  this.box(group, 0, -.08, 0, 3.4, .32, 1.35, .12, .6);
  for (const side of [-1, 1]) this.box(group, side * 2.3, .5, -.7, .18, 2.2, .18, .3, .75);
  const ring = this.solid(new kr(1.5, .09, 8, 40), .4, .7);
  ring.position.set(0, 1.9, -.45); group.add(ring);
  this.signalRecall = this.solid(new ys(.65), .4, .8);
  this.signalRecall.position.set(0, 1.7, .1); group.add(this.signalRecall);
  this.link(group, [[-2, .6, 0], [-1, 1.5, .8], [0, 1.8, .1], [2, .6, 0]], .35);
  return group;
};

Jr.prototype.buildSignalObservatory = function () {
  const group = new Se;
  group.name = 'Signal observatory and nested orbital connections';
  this.signalScope = this.solid(new kr(2, .09, 8, 48), .35, .75);
  this.signalScope.position.y = 1.3; group.add(this.signalScope);
  const cross = this.solid(new kr(1.65, .065, 8, 40), .3, .7);
  cross.rotation.y = Math.PI / 2; cross.position.y = 1.3; group.add(cross);
  this.box(group, 0, -.7, 0, 2.3, .3, 1.8, .2, .6);
  this.box(group, 0, .1, 0, .15, 1.7, .15, .4, .6);
  this.link(group, [[-3, 2.4, -.4], [-1.5, 1.7, 1], [0, 2, .1], [1.7, 3, -.7], [3, .7, .5]], .1);
  return group;
};

let signalFile = { key: 'directory', page: 0 };
function signalFileRows() {
  const document = signalRules.evidence(signalState, signalFile.key);
  if (!document) return [];
  const width = M.mobile ? 30 : 64;
  return document.lines.flatMap(line => line.length <= width ? [line] : Ts(line, width));
}
function signalFilePage(delta) {
  const count = signalFile.key === 'tripulacion' ? 3 : Math.max(1, Math.ceil(signalFileRows().length / 22));
  signalFile.page = Math.max(0, Math.min(count - 1, signalFile.page + delta));
  M.fileOpenedAt = performance.now();
  M.pendingFocus = 'signal-file-next';
}
function signalFilesAccessible() {
  if (signalFile.key === 'directory') return 'Directorio /nadir. ' + Object.entries(signalRules.files).map(([key, entry]) => entry.name + '. ' + (signalRules.fileAvailable(signalState, key) ? 'Disponible para abrir.' : 'Bloqueado.')).join(' ');
  if (signalFile.key === 'tripulacion') return 'identidades.db. Pagina ' + (signalFile.page + 1) + '/3. ' + signalRules.identities.slice(signalFile.page * 8, signalFile.page * 8 + 8).map(person => person.id + ': ' + person.name).join('. ') + '. Selecciona una identidad para inspeccionar sus datos.';
  const document = signalRules.evidence(signalState, signalFile.key);
  return document ? document.name + '. ' + signalFileRows().slice(signalFile.page * 22, signalFile.page * 22 + 22).join('\n') : 'Archivo no disponible.';
}
function renderSignalFiles(grid) {
  Zt = [];
  const w = M.mobile ? 36 : 72, h = M.mobile ? 43 : 40, x = Math.floor((grid.cols - w) / 2), y = M.mobile ? 8 : 3, left = x + 3, width = w - 6;
  grid.box(x, y, w, h, 1, 0);
  const entry = signalRules.files[signalFile.key] || signalRules.evidence(signalState, signalFile.key);
  grid.text(left, y + 2, signalFile.key === 'directory' ? '/nadir / VOLUMEN LOCAL' : entry?.name || 'ARCHIVO NO DISPONIBLE', 3, 0, width - 3);
  grid.text(left, y + 3, entry ? entry.type + (entry.size ? ' / ' + entry.size : '') : '7 ARCHIVOS / 24 IDENTIDADES', 2, 0, width);
  NM(grid, x + w - 5, y + 2);
  grid.rule(x + 1, y + 4, w - 2, 2);
  if (signalFile.key === 'directory') {
    grid.text(left, y + 6, 'NOMBRE / ESTADO / TIPO', 2, 0, width);
    Object.entries(signalRules.files).forEach(([key, entry], index) => {
      const row = y + 8 + index * 3, available = signalRules.fileAvailable(signalState, key);
      Xt(grid, 'signal-open-' + key, left, row, width, (available ? '> ' : '# ') + entry.name, () => signalCommand('ABRIR ' + entry.name));
      grid.text(left + 1, row + 1, (available ? 'MONTADO' : 'BLOQUEADO') + ' / ' + entry.type + ' / ' + entry.size, 2, 0, width - 1);
    });
    grid.text(left, y + 31, 'ABRIR nombre / INSPECCIONAR D-17', 2, 0, width);
  } else if (signalFile.key === 'tripulacion') {
    grid.text(left, y + 6, 'ID     NOMBRE / SESION', 2, 0, width);
    signalRules.identities.slice(signalFile.page * 8, signalFile.page * 8 + 8).forEach((person, index) => {
      Xt(grid, 'signal-person-' + person.id, left, y + 8 + index * 2, width, person.id + '  ' + person.name + (signalState.inspected.includes(person.id) ? ' [VISTO]' : ''), () => signalCommand('INSPECCIONAR ' + person.id), person.id === 'D-17');
    });
    grid.text(left, y + 26, '24 FILAS / FICHAS + ADJUNTOS', 2, 0, width);
    grid.text(left, y + 28, 'SELECCIONA UNA IDENTIDAD.', 2, 0, width);
  } else {
    const rows = signalFileRows(), offset = signalFile.page * 22;
    rows.slice(offset, offset + 22).forEach((line, index) => grid.text(left, y + 6 + index, bn(line, M.fileOpenedAt + index * 16), line.includes('ERROR') ? 3 : 1, 0, width));
    if (signalFile.key === 'guardia') for (let block = 1; block <= 3; block++) Xt(grid, 'signal-recover-' + block, left + (block - 1) * Math.floor(width / 3), y + 30, Math.floor(width / 3) - 1, signalState.recovered.includes(block) ? 'CRC ' + block + ' OK' : 'REPARAR ' + block, () => signalCommand('RECUPERAR ' + block), !signalState.recovered.includes(block));
    if (signalFile.key === 'D-17') Xt(grid, 'signal-camera', left, y + 30, width, 'ABRIR FOTOGRAMA CAM-03', () => signalCommand('ABRIR cam_03_0317.img'), true);
    if (signalFile.key === 'diagnostico') Xt(grid, 'signal-compare', left, y + 30, width, signalState.compared ? 'COMPARACION COMPLETA' : 'SUPERPONER CAPTURAS', () => signalCommand('COMPARAR'), true);
  }
  if (signalFile.key !== 'directory') {
    const pages = signalFile.key === 'tripulacion' ? 3 : Math.max(1, Math.ceil(signalFileRows().length / 22));
    if (signalFile.page > 0) Xt(grid, 'signal-file-prev', left, y + h - 6, 12, '< ANTERIOR', () => signalFilePage(-1));
    grid.text(left + Math.floor(width / 2) - 2, y + h - 6, `${signalFile.page + 1}/${pages}`, 2);
    if (signalFile.page < pages - 1) Xt(grid, 'signal-file-next', x + w - 14, y + h - 6, 11, 'SIGUIENTE', () => signalFilePage(1));
    on(grid, 'signal-files-root', left, y + h - 4, width, '< VOLVER AL DIRECTORIO', () => signalCommand('ARCHIVOS'));
  }
  on(grid, 'signal-file-close', left, y + h - 2, width, 'CERRAR ARCHIVO [ESC]', () => gi());
}

// SIGNAL_GAME_END

$M();})();
