var Dg=Object.defineProperty;var Ng=(n,t)=>{for(var e in t)Dg(n,e,{get:t[e],enumerable:!0})};var Qd=0,pu=1,jd=2;var nr=1,tp=2,$r=3,ws=0,Ln=1,We=2,ir=0,Kr=1,mu=2,gu=3,xu=4,ep=5;var sr=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,lp=202,cp=203,_u=204,yu=205,hp=206,up=207,fp=208,dp=209,pp=210,mp=211,gp=212,xp=213,_p=214,Cl=0,Pl=1,Il=2,zr=3,Ll=4,Dl=5,Nl=6,Ul=7,vu=0,yp=1,vp=2,Ii=0,Mu=1,Su=2,bu=3,fa=4,Tu=5,Eu=6,wu=7;var Au=300,rr=301,Qr=302,rc=303,oc=304,Hr=1e3,Ai=1001,Ol=1002,un=1003,Mp=1004;var da=1005;var Pn=1006,ac=1007;var $i=1008;var kn=1009,Ru=1010,Cu=1011,jr=1012,lc=1013,xi=1014,si=1015,_i=1016,cc=1017,hc=1018,or=1020,Pu=35902,Iu=35899,Lu=1021,Du=1022,yi=1023,qi=1026,Ki=1027,uc=1028,fc=1029,As=1030,dc=1031;var pc=1033,pa=33776,ma=33777,ga=33778,xa=33779,mc=35840,gc=35841,xc=35842,_c=35843,yc=36196,vc=37492,Mc=37496,Sc=37488,bc=37489,_a=37490,Tc=37491,Ec=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Dc=37816,Nc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,kc=36492,zc=36494,Hc=36495,Gc=36283,Vc=36284,ya=36285,Wc=36286;var zo=2300,Fl=2301,Al=2302,ou=2303,au=2400,lu=2401,cu=2402;var Sp=3200;var Xc=0,bp=1,Qi="",Cn="srgb",Ho="srgb-linear",Go="linear",be="srgb";var Rl=7680;var Tp=519,Ep=512,wp=513,Ap=514,Nu=515,Rp=516,Cp=517,Uu=518,Ou=519,Fu=35044;var Bu="300 es",ii=2e3,Gr=2001;function Ug(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pp(){let n=Vo("canvas");return n.style.display="block",n}var Td={},Vr=null;function Wo(...n){let t="THREE."+n.shift();Vr?Vr("log",t,...n):console.log(t,...n)}function Ip(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Ip(n);let t="THREE."+n.shift();if(Vr)Vr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=Ip(n);let t="THREE."+n.shift();if(Vr)Vr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function $s(...n){let t=n.join(" ");t in Td||(Td[t]=!0,zt(...n))}function Lp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Dp={[Cl]:Cl,[Il]:Nl,[Ll]:Ll,[zr]:Dl,[Pl]:Pl,[Nl]:Il,[Ul]:Ul,[Dl]:zr},Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fh=Math.PI/180,Xo=180/Math.PI;function ar(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function Fg(n,t){return(n%t+t)%t}function Bh(n,t,e){return(1-e)*n+e*t}function Np(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Up(n,t){if(t.constructor===Float32Array)return n;let e=qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Op(n,t){if(t.constructor===Float32Array)return n;let e=qc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Vu=class Vu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;var Ot=Vu,Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,l){let c=i[s+0],a=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(h!==_||c!==f||a!==d||u!==g){let p=c*f+a*d+u*g+h*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-l;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);m=Math.sin(m*M)/R,l=Math.sin(l*M)/R,c=c*m+f*l,a=a*m+d*l,u=u*m+g*l,h=h*m+_*l}else{c=c*m+f*l,a=a*m+d*l,u=u*m+g*l,h=h*m+_*l;let M=1/Math.sqrt(c*c+a*a+u*u+h*h);c*=M,a*=M,u*=M,h*=M}}t[e]=c,t[e+1]=a,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let l=i[s],c=i[s+1],a=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=l*g+u*h+c*d-a*f,t[e+1]=c*g+u*f+a*h-l*d,t[e+2]=a*g+u*d+l*f-c*h,t[e+3]=u*g-l*h-c*f-a*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,c=Math.sin,a=l(i/2),u=l(s/2),h=l(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+a*d*g,this._y=a*d*h-f*u*g,this._z=a*u*g+f*d*h,this._w=a*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+a*d*g,this._y=a*d*h-f*u*g,this._z=a*u*g-f*d*h,this._w=a*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-a*d*g,this._y=a*d*h+f*u*g,this._z=a*u*g+f*d*h,this._w=a*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-a*d*g,this._y=a*d*h+f*u*g,this._z=a*u*g-f*d*h,this._w=a*u*h+f*d*g;break;case"YZX":this._x=f*u*h+a*d*g,this._y=a*d*h+f*u*g,this._z=a*u*g-f*d*h,this._w=a*u*h-f*d*g;break;case"XZY":this._x=f*u*h-a*d*g,this._y=a*d*h-f*u*g,this._z=a*u*g+f*d*h,this._w=a*u*h+f*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],l=e[5],c=e[9],a=e[2],u=e[6],h=e[10],f=i+l+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-a)*d,this._z=(o-s)*d}else if(i>l&&i>h){let d=2*Math.sqrt(1+i-l-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+a)/d}else if(l>h){let d=2*Math.sqrt(1+l-i-h);this._w=(r-a)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-l);this._w=(o-s)/d,this._x=(r+a)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=e._x,c=e._y,a=e._z,u=e._w;return this._x=i*u+o*l+s*a-r*c,this._y=s*u+o*c+r*l-i*a,this._z=r*u+o*a+i*c-s*l,this._w=o*u-i*l-s*c-r*a,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-e;if(l<.9995){let a=Math.acos(l),u=Math.sin(a);c=Math.sin(c*a)/u,e=Math.sin(e*a)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,c=t.w,a=2*(o*s-l*i),u=2*(l*e-r*s),h=2*(r*i-o*e);return this.x=e+c*a+o*h-l*u,this.y=i+c*u+l*a-r*h,this.z=s+c*h+r*u-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var B=Wu,kh=new B,Ed=new Bn,Xu=class Xu{constructor(t,e,i,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a)}set(t,e,i,s,r,o,l,c,a){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[3],c=i[6],a=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],p=s[3],m=s[6],M=s[1],R=s[4],S=s[7],A=s[2],E=s[5],x=s[8];return r[0]=o*_+l*M+c*A,r[3]=o*p+l*R+c*E,r[6]=o*m+l*S+c*x,r[1]=a*_+u*M+h*A,r[4]=a*p+u*R+h*E,r[7]=a*m+u*S+h*x,r[2]=f*_+d*M+g*A,r[5]=f*p+d*R+g*E,r[8]=f*m+d*S+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],u=t[8];return e*o*u-e*l*a-i*r*u+i*l*c+s*r*a-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],u=t[8],h=u*o-l*a,f=l*c-u*r,d=a*r-o*c,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(s*a-u*i)*_,t[2]=(l*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-l*e)*_,t[6]=d*_,t[7]=(i*c-a*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(i*c,i*a,-i*(c*o+a*l)+o+t,-s*a,s*c,-s*(-a*o+c*l)+l+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zh.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zh.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xu.prototype.isMatrix3=!0;var qt=Xu,zh=new qt,wd=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){let n={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ho]:{primaries:t,whitePoint:i,transfer:Go,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:be,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),n}var fe=Bg();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,Bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mr===void 0&&(Mr=Vo("canvas")),Mr.width=t.width,Mr.height=t.height;let s=Mr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Mr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kg=0,Wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Hh(s[o].image)):r.push(Hh(s[o]))}else r=Hh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Hh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var zg=0,Gh=new B,In=class n extends Ri{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ai,s=Ai,r=Pn,o=$i,l=yi,c=kn,a=n.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ar(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Au;In.DEFAULT_ANISOTROPY=1;var qu=class qu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,a=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(a+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(a+1)/2,S=(d+1)/2,A=(m+1)/2,E=(u+f)/4,x=(h+_)/4,b=(g+p)/4;return R>S&&R>A?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=E/i,r=x/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((a+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qu.prototype.isVector4=!0;var Be=qu,kl=class extends Ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends kl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},qo=class extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends In{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sc=class sc{constructor(t,e,i,s,r,o,l,c,a,u,h,f,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a,u,h,f,d,g,_,p)}set(t,e,i,s,r,o,l,c,a,u,h,f,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Sr.setFromMatrixColumn(t,0).length(),r=1/Sr.setFromMatrixColumn(t,1).length(),o=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),a=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=l*u,_=l*h;e[0]=c*u,e[4]=-c*h,e[8]=a,e[1]=d+g*a,e[5]=f-_*a,e[9]=-l*c,e[2]=_-f*a,e[6]=g+d*a,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=a*u,_=a*h;e[0]=f+_*l,e[4]=g*l-d,e[8]=o*a,e[1]=o*h,e[5]=o*u,e[9]=-l,e[2]=d*l-g,e[6]=_+f*l,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=a*u,_=a*h;e[0]=f-_*l,e[4]=-o*h,e[8]=g+d*l,e[1]=d+g*l,e[5]=o*u,e[9]=_-f*l,e[2]=-o*a,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=l*u,_=l*h;e[0]=c*u,e[4]=g*a-d,e[8]=f*a+_,e[1]=c*h,e[5]=_*a+f,e[9]=d*a-g,e[2]=-a,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*a,g=l*c,_=l*a;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-l*u,e[2]=-a*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*c,d=o*a,g=l*c,_=l*a;e[0]=c*u,e[4]=-h,e[8]=a*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=l*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hg,t,Gg)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ps.crossVectors(i,Vn),ps.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ps.crossVectors(i,Vn)),ps.normalize(),il.crossVectors(Vn,ps),s[0]=ps.x,s[4]=il.x,s[8]=Vn.x,s[1]=ps.y,s[5]=il.y,s[9]=Vn.y,s[2]=ps.z,s[6]=il.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[4],c=i[8],a=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],R=i[7],S=i[11],A=i[15],E=s[0],x=s[4],b=s[8],I=s[12],P=s[1],O=s[5],H=s[9],Y=s[13],C=s[2],Z=s[6],V=s[10],T=s[14],N=s[3],D=s[7],z=s[11],$=s[15];return r[0]=o*E+l*P+c*C+a*N,r[4]=o*x+l*O+c*Z+a*D,r[8]=o*b+l*H+c*V+a*z,r[12]=o*I+l*Y+c*T+a*$,r[1]=u*E+h*P+f*C+d*N,r[5]=u*x+h*O+f*Z+d*D,r[9]=u*b+h*H+f*V+d*z,r[13]=u*I+h*Y+f*T+d*$,r[2]=g*E+_*P+p*C+m*N,r[6]=g*x+_*O+p*Z+m*D,r[10]=g*b+_*H+p*V+m*z,r[14]=g*I+_*Y+p*T+m*$,r[3]=M*E+R*P+S*C+A*N,r[7]=M*x+R*O+S*Z+A*D,r[11]=M*b+R*H+S*V+A*z,r[15]=M*I+R*Y+S*T+A*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],c=t[9],a=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],M=c*d-a*f,R=l*d-a*h,S=l*f-c*h,A=o*d-a*u,E=o*f-c*u,x=o*h-l*u;return e*(_*M-p*R+m*S)-i*(g*M-p*A+m*E)+s*(g*R-_*A+m*x)-r*(g*S-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],a=t[6],u=t[10];return e*(o*u-l*a)-i*(r*u-l*c)+s*(r*a-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=e*l-i*o,R=e*c-s*o,S=e*a-r*o,A=i*c-s*l,E=i*a-r*l,x=s*a-r*c,b=u*_-h*g,I=u*p-f*g,P=u*m-d*g,O=h*p-f*_,H=h*m-d*_,Y=f*m-d*p,C=M*Y-R*H+S*O+A*P-E*I+x*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/C;return t[0]=(l*Y-c*H+a*O)*Z,t[1]=(s*H-i*Y-r*O)*Z,t[2]=(_*x-p*E+m*A)*Z,t[3]=(f*E-h*x-d*A)*Z,t[4]=(c*P-o*Y-a*I)*Z,t[5]=(e*Y-s*P+r*I)*Z,t[6]=(p*S-g*x-m*R)*Z,t[7]=(u*x-f*S+d*R)*Z,t[8]=(o*H-l*P+a*b)*Z,t[9]=(i*P-e*H-r*b)*Z,t[10]=(g*E-_*S+m*M)*Z,t[11]=(h*S-u*E-d*M)*Z,t[12]=(l*I-o*O-c*b)*Z,t[13]=(e*O-i*I+s*b)*Z,t[14]=(_*R-g*A-p*M)*Z,t[15]=(u*A-h*R+f*M)*Z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,l=t.y,c=t.z,a=r*o,u=r*l;return this.set(a*o+i,a*l-s*c,a*c+s*l,0,a*l+s*c,u*l+i,u*c-s*o,0,a*c-s*l,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,l=e._z,c=e._w,a=r+r,u=o+o,h=l+l,f=r*a,d=r*u,g=r*h,_=o*u,p=o*h,m=l*h,M=c*a,R=c*u,S=c*h,A=i.x,E=i.y,x=i.z;return s[0]=(1-(_+m))*A,s[1]=(d+S)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(f+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+R)*x,s[9]=(p-M)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Sr.set(s[0],s[1],s[2]).length(),l=Sr.set(s[4],s[5],s[6]).length(),c=Sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);let a=1/o,u=1/l,h=1/c;return fi.elements[0]*=a,fi.elements[1]*=a,fi.elements[2]*=a,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,e.setFromRotationMatrix(fi),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,o,l=ii,c=!1){let a=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(l===ii)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(l===Gr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=h,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=_,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o,l=ii,c=!1){let a=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(l===ii)g=-2/(o-r),_=-(o+r)/(o-r);else if(l===Gr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=h,a[9]=0,a[13]=d,a[2]=0,a[6]=0,a[10]=g,a[14]=_,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};sc.prototype.isMatrix4=!0;var Me=sc,Sr=new B,fi=new Me,Hg=new B(0,0,0),Gg=new B(1,1,1),ps=new B,il=new B,Vn=new B,Rd=new Me,Cd=new Bn,gi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vg=0,Pd=new B,br=new Bn,ki=new Me,sl=new B,Io=new B,Wg=new B,Xg=new Bn,Id=new B(1,0,0),Ld=new B(0,1,0),Dd=new B(0,0,1),Nd={type:"added"},qg={type:"removed"},Tr={type:"childadded",child:null},Vh={type:"childremoved",child:null},_n=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new B,e=new gi,i=new Bn,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new qt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Id,t)}rotateY(t){return this.rotateOnAxis(Ld,t)}rotateZ(t){return this.rotateOnAxis(Dd,t)}translateOnAxis(t,e){return Pd.copy(t).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Id,t)}translateY(t){return this.translateOnAxis(Ld,t)}translateZ(t){return this.translateOnAxis(Dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?sl.copy(t):sl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Io,sl,this.up):ki.lookAt(sl,Io,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),br.setFromRotationMatrix(ki),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qg),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,u=c.length;a<u;a++){let h=c[a];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),a=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){let c=[];for(let a in l){let u=l[a];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new B(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),m=this._getHandJoint(a,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=a.joints["index-finger-tip"],h=a.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;a.inputState.pinching&&f>d+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&f<=d-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Wh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=Fg(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wh(o,r,t+1/3),this.g=Wh(o,r,t),this.b=Wh(o,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Cn){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){let i=Fp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return fe.workingToColorSpace(Tn.copy(this),t),Math.round(ae(Tn.r*255,0,255))*65536+Math.round(ae(Tn.g*255,0,255))*256+Math.round(ae(Tn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Tn.copy(this),e);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),l=Math.min(i,s,r),c,a,u=(l+o)/2;if(l===o)c=0,a=0;else{let h=o-l;switch(a=u<=.5?h/(o+l):h/(2-o-l),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=a,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=Cn){fe.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,i=Tn.g,s=Tn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(rl);let i=Bh(ms.h,rl.h,e),s=Bh(ms.s,rl.s,e),r=Bh(ms.l,rl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Zt;Zt.NAMES=Fp;var Zo=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jo=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new B,zi=new B,Xh=new B,Hi=new B,Er=new B,wr=new B,Ud=new B,qh=new B,Yh=new B,Zh=new B,Jh=new Be,$h=new Be,Kh=new Be,Wi=class n{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){di.subVectors(s,e),zi.subVectors(i,e),Xh.subVectors(t,e);let o=di.dot(di),l=di.dot(zi),c=di.dot(Xh),a=zi.dot(zi),u=zi.dot(Xh),h=o*a-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(a*c-l*u)*f,g=(o*u-l*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,r,o,l,c){return this.getBarycoord(t,e,i,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(l,Hi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Jh.setScalar(0),$h.setScalar(0),Kh.setScalar(0),Jh.fromBufferAttribute(t,e),$h.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jh,r.x),o.addScaledVector($h,r.y),o.addScaledVector(Kh,r.z),o}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),zi.subVectors(t,e),di.cross(zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,l;Er.subVectors(s,i),wr.subVectors(r,i),qh.subVectors(t,i);let c=Er.dot(qh),a=wr.dot(qh);if(c<=0&&a<=0)return e.copy(i);Yh.subVectors(t,s);let u=Er.dot(Yh),h=wr.dot(Yh);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*a;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),e.copy(i).addScaledVector(Er,o);Zh.subVectors(t,r);let d=Er.dot(Zh),g=wr.dot(Zh);if(g>=0&&d<=g)return e.copy(r);let _=d*a-c*g;if(_<=0&&a>=0&&g<=0)return l=a/(a-g),e.copy(i).addScaledVector(wr,l);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Ud.subVectors(r,s),l=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Ud,l);let m=1/(p+_+f);return o=_*m,l=f*m,e.copy(i).addScaledVector(Er,o).addScaledVector(wr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ci=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ol.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(t.matrixWorld),this.union(ol)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),al.subVectors(this.max,Lo),Ar.subVectors(t.a,Lo),Rr.subVectors(t.b,Lo),Cr.subVectors(t.c,Lo),gs.subVectors(Rr,Ar),xs.subVectors(Cr,Rr),qs.subVectors(Ar,Cr);let e=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-qs.z,qs.y,gs.z,0,-gs.x,xs.z,0,-xs.x,qs.z,0,-qs.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-qs.y,qs.x,0];return!Qh(e,Ar,Rr,Cr,al)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,Ar,Rr,Cr,al))?!1:(ll.crossVectors(gs,xs),e=[ll.x,ll.y,ll.z],Qh(e,Ar,Rr,Cr,al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new B,new B,new B,new B,new B,new B,new B,new B],pi=new B,ol=new Ci,Ar=new B,Rr=new B,Cr=new B,gs=new B,xs=new B,qs=new B,Lo=new B,al=new B,ll=new B,Ys=new B;function Qh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ys.fromArray(n,r);let l=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),c=t.dot(Ys),a=e.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(c,a,u),Math.min(c,a,u))>l)return!1}return!0}var Je=new B,cl=new Ot,Zg=0,Fn=class extends Ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=t!==void 0?qc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cl.fromBufferAttribute(this,e),cl.applyMatrix3(t),this.setXY(e,cl.x,cl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Up(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Op(t,this.array)}};var $o=class extends Fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ko=class extends Fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Se=class extends Fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Jg=new Ci,Do=new B,jh=new B,ys=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Jg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);let e=Do.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Do,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(jh)),this.expandByPoint(Do.copy(t.center).sub(jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$g=0,ni=new Me,tu=new _n,Pr=new B,Wn=new Ci,No=new Ci,hn=new B,yn=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ug(t)?Ko:$o)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return tu.lookAt(t),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];No.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(Wn.min,No.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,No.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(No.min),Wn.expandByPoint(No.max))}Wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],c=this.morphTargetsRelative;for(let a=0,u=l.count;a<u;a++)hn.fromBufferAttribute(l,a),c&&(Pr.fromBufferAttribute(t,a),hn.add(Pr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],c=[],a=new Uint8Array(i.count);for(let I=0;I<i.count;I++)l[I]=new B,c[I]=new B;let u=new B,h=new B,f=new B,d=new Ot,g=new Ot,_=new Ot,p=new B,m=new B;function M(I,P,O){a[I]=a[P]=a[O]=1,u.fromBufferAttribute(i,I),h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,O),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,O),h.sub(u),f.sub(u),g.sub(d),_.sub(d);let H=1/(g.x*_.y-_.x*g.y);isFinite(H)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(H),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(H),l[I].add(p),l[P].add(p),l[O].add(p),c[I].add(m),c[P].add(m),c[O].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let I=0,P=R.length;I<P;++I){let O=R[I],H=O.start,Y=O.count;for(let C=H,Z=H+Y;C<Z;C+=3)M(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let S=new B,A=new B,E=new B,x=new B;function b(I){E.fromBufferAttribute(s,I),x.copy(E);let P=l[I];S.copy(P),S.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(x,P);let H=A.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,H)}for(let I=0,P=i.count;I<P;++I)a[I]&&b(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new B,r=new B,o=new B,l=new B,c=new B,a=new B,u=new B,h=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),a.fromBufferAttribute(i,p),l.add(u),c.add(u),a.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,a.x,a.y,a.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(l,c){let a=l.array,u=l.itemSize,h=l.normalized,f=new a.constructor(c.length*u),d=0,g=0;for(let _=0,p=c.length;_<p;_++){l.isInterleavedBufferAttribute?d=c[_]*l.data.stride+l.offset:d=c[_]*u;for(let m=0;m<u;m++)f[g++]=a[d++]}return new Fn(f,u,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=t(c,i);e.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let u=0,h=a.length;u<h;u++){let f=a[u],d=t(f,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(t[a]=c[a]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let a=i[c];t.data.attributes[c]=a.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],u=[];for(let h=0,f=a.length;h<f;h++){let d=a[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let a in s){let u=s[a];this.setAttribute(a,u.clone(e))}let r=t.morphAttributes;for(let a in r){let u=[],h=r[a];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[a]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let a=0,u=o.length;a<u;a++){let h=o[a];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Od(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Od(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Od(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ar()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Rn=new B,qr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?qc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Up(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Op(t,this.data.array)}},eu=new B,Kg=new B,Qg=new qt,mi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=eu.subVectors(i,e).cross(Kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(eu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qg.getNormalMatrix(t),s=this.coplanarPoint(eu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jg=0,Yi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Kr,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=yu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yr=class extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ir,Uo=new B,Lr=new B,Dr=new B,Nr=new Ot,Oo=new Ot,Bp=new Me,hl=new B,Fo=new B,ul=new B,Fd=new Ot,nu=new Ot,Bd=new Ot,jo=class extends _n{constructor(t=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new yn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qo(e,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new qr(i,3,0,!1)),Ir.setAttribute("uv",new qr(i,2,3,!1))}this.geometry=Ir,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),Bp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;fl(hl.set(-.5,-.5,0),Dr,o,Lr,s,r),fl(Fo.set(.5,-.5,0),Dr,o,Lr,s,r),fl(ul.set(.5,.5,0),Dr,o,Lr,s,r),Fd.set(0,0),nu.set(1,0),Bd.set(1,1);let l=t.ray.intersectTriangle(hl,Fo,ul,!1,Uo);if(l===null&&(fl(Fo.set(-.5,.5,0),Dr,o,Lr,s,r),nu.set(0,1),l=t.ray.intersectTriangle(hl,ul,Fo,!1,Uo),l===null))return;let c=t.ray.origin.distanceTo(Uo);c<t.near||c>t.far||e.push({distance:c,point:Uo.clone(),uv:Wi.getInterpolation(Uo,hl,Fo,ul,Fd,nu,Bd,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function fl(n,t,e,i,s,r){Nr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Oo.x=r*Nr.x-s*Nr.y,Oo.y=s*Nr.x+r*Nr.y):Oo.copy(Nr),n.copy(t),n.x+=Oo.x,n.y+=Oo.y,n.applyMatrix4(Bp)}var Vi=new B,iu=new B,dl=new B,pl=new B,Hl=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){iu.copy(t).add(e).multiplyScalar(.5),dl.copy(e).sub(t).normalize(),pl.copy(this.origin).sub(iu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(dl),l=pl.dot(this.direction),c=-pl.dot(dl),a=pl.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-l,f=o*l-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*l)+f*(o*h+f+2*c)+a}else f=r,h=Math.max(0,-(o*f+l)),d=-h*h+f*(f+2*c)+a;else f=-r,h=Math.max(0,-(o*f+l)),d=-h*h+f*(f+2*c)+a;else f<=-g?(h=Math.max(0,-(-o*r+l)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+a):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+a):(h=Math.max(0,-(o*r+l)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+a);else f=o>0?-r:r,h=Math.max(0,-(o*f+l)),d=-h*h+f*(f+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(iu).addScaledVector(dl,f),d}intersectSphere(t,e){if(t.radius<0)return null;Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,l,c,a=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return a>=0?(i=(t.min.x-f.x)*a,s=(t.max.x-f.x)*a):(i=(t.max.x-f.x)*a,s=(t.min.x-f.x)*a),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(l=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,u=l.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,_=e.y-o.y,p=e.z-o.z,m=i.x-o.x,M=i.y-o.y,R=i.z-o.z,S=Math.abs(c),A=Math.abs(a),E=Math.abs(u),x,b,I,P,O,H,Y,C,Z,V,T,N;if(S>=A&&S>=E?(I=c,H=h,Z=g,N=m,c>=0?(x=a,b=u,P=f,O=d,Y=_,C=p,V=M,T=R):(x=u,b=a,P=d,O=f,Y=p,C=_,V=R,T=M)):A>=E?(I=a,H=f,Z=_,N=M,a>=0?(x=u,b=c,P=d,O=h,Y=p,C=g,V=R,T=m):(x=c,b=u,P=h,O=d,Y=g,C=p,V=m,T=R)):(I=u,H=d,Z=p,N=R,u>=0?(x=c,b=a,P=h,O=f,Y=g,C=_,V=m,T=M):(x=a,b=c,P=f,O=h,Y=_,C=g,V=M,T=m)),I===0)return null;let D=x/I,z=b/I,$=1/I,rt=P-D*H,Tt=O-z*H,K=Y-D*Z,at=C-z*Z,pt=V-D*N,Dt=T-z*N,St=pt*at-Dt*K,Qt=rt*Dt-Tt*pt,Ye=K*Tt-at*rt;if(s){if(St<0||Qt<0||Ye<0)return null}else if((St<0||Qt<0||Ye<0)&&(St>0||Qt>0||Ye>0))return null;let kt=St+Qt+Ye;if(kt===0)return null;let Te=$*(St*H+Qt*Z+Ye*N);return(kt>0?Te<0:Te>0)?null:this.at(Te/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qn=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kd=new Me,Zs=new Hl,ml=new ys,zd=new B,gl=new B,xl=new B,_l=new B,su=new B,yl=new B,Hd=new B,vl=new B,Et=class extends _n{constructor(t=new yn,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){yl.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let u=l[c],h=r[c];u!==0&&(su.fromBufferAttribute(h,t),o?yl.addScaledVector(su,u):yl.addScaledVector(su.sub(e),u))}e.add(yl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),Zs.copy(t.ray).recast(t.near),!(ml.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(ml,zd)===null||Zs.origin.distanceToSquared(zd)>(t.far-t.near)**2))&&(kd.copy(r).invert(),Zs.copy(t.ray).applyMatrix4(kd),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),R=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,A=R;S<A;S+=3){let E=l.getX(S),x=l.getX(S+1),b=l.getX(S+2);s=Ml(this,m,t,i,a,u,h,E,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=l.getX(p),R=l.getX(p+1),S=l.getX(p+2);s=Ml(this,o,t,i,a,u,h,M,R,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),R=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,A=R;S<A;S+=3){let E=S,x=S+1,b=S+2;s=Ml(this,m,t,i,a,u,h,E,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let M=p,R=p+1,S=p+2;s=Ml(this,o,t,i,a,u,h,M,R,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function tx(n,t,e,i,s,r,o,l){let c;if(t.side===Ln?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,t.side===ws,l),c===null)return null;vl.copy(l),vl.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(vl);return a<e.near||a>e.far?null:{distance:a,point:vl.clone(),object:n}}function Ml(n,t,e,i,s,r,o,l,c,a){n.getVertexPosition(l,gl),n.getVertexPosition(c,xl),n.getVertexPosition(a,_l);let u=tx(n,t,e,i,gl,xl,_l,Hd);if(u){let h=new B;Wi.getBarycoord(Hd,gl,xl,_l,h),s&&(u.uv=Wi.getInterpolatedAttribute(s,l,c,a,h,new Ot)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,l,c,a,h,new Ot)),o&&(u.normal=Wi.getInterpolatedAttribute(o,l,c,a,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:c,c:a,normal:new B,materialIndex:0};Wi.getNormal(gl,xl,_l,f.normal),u.face=f,u.barycoord=h}return u}var ta=class extends In{constructor(t=null,e=1,i=1,s,r,o,l,c,a=un,u=un,h,f){super(null,o,l,c,a,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zr=class extends Fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ur=new Me,Gd=new Me,Sl=[],Vd=new Ci,ex=new Me,Bo=new Et,ko=new ys,ea=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),Vd.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Vd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ur),ko.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(ko)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let l=0;l<i.length;l++)i[l]=s[o+l]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),t.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),Gd.multiplyMatrices(i,Ur),Bo.matrixWorld=Gd,Bo.raycast(t,Sl);for(let o=0,l=Sl.length;o<l;o++){let c=Sl[o];c.instanceId=r,c.object=this,e.push(c)}Sl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ta(new Float32Array(s*this.count),s,this.count,uc,si));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<i.length;a++)o+=i[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Js=new ys,nx=new Ot(.5,.5),bl=new B,vs=class{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],a=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],R=r[13],S=r[14],A=r[15];if(s[0].setComponents(a-o,d-u,m-g,A-M).normalize(),s[1].setComponents(a+o,d+u,m+g,A+M).normalize(),s[2].setComponents(a+l,d+h,m+_,A+R).normalize(),s[3].setComponents(a-l,d-h,m-_,A-R).normalize(),i)s[4].setComponents(c,f,p,S).normalize(),s[5].setComponents(a-c,d-f,m-p,A-S).normalize();else if(s[4].setComponents(a-c,d-f,m-p,A-S).normalize(),e===ii)s[5].setComponents(a+c,d+f,m+p,A+S).normalize();else if(e===Gr)s[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){Js.center.set(0,0,0);let e=nx.distanceTo(t.center);return Js.radius=.7071067811865476+e,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(bl.x=s.normal.x>0?t.max.x:t.min.x,bl.y=s.normal.y>0?t.max.y:t.min.y,bl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wd=new Me,Gl=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Wd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new vs),i[s].setFromProjectionMatrix(Wd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new vs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var na=class extends In{constructor(t=[],e=rr,i,s,r,o,l,c,a,u){super(t,e,i,s,r,o,l,c,a,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ks=class extends In{constructor(t,e,i,s,r,o,l,c,a){super(t,e,i,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends In{constructor(t,e,i=xi,s,r,o,l=un,c=un,a,u=qi,h=1){if(u!==qi&&u!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,l,c,u,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ia=class extends Zi{constructor(t,e=xi,i=rr,s,r,o=un,l=un,c,a=qi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,l,c,a),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sa=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},se=class n extends yn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function g(_,p,m,M,R,S,A,E,x,b,I){let P=S/x,O=A/b,H=S/2,Y=A/2,C=E/2,Z=x+1,V=b+1,T=0,N=0,D=new B;for(let z=0;z<V;z++){let $=z*O-Y;for(let rt=0;rt<Z;rt++){let Tt=rt*P-H;D[_]=Tt*M,D[p]=$*R,D[m]=C,a.push(D.x,D.y,D.z),D[_]=0,D[p]=0,D[m]=E>0?1:-1,u.push(D.x,D.y,D.z),h.push(rt/x),h.push(1-z/b),T+=1}}for(let z=0;z<b;z++)for(let $=0;$<x;$++){let rt=f+$+Z*z,Tt=f+$+Z*(z+1),K=f+($+1)+Z*(z+1),at=f+($+1)+Z*z;c.push(rt,Tt,at),c.push(Tt,K,at),N+=6}l.addGroup(d,N,I),d+=N,f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qs=class n extends yn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],l=[],c=[],a=[],u=e/2,h=Math.PI/2*t,f=e,d=2*h+f,g=i*2+r,_=s+1,p=new B,m=new B;for(let M=0;M<=g;M++){let R=0,S=0,A=0,E=0;if(M<=i){let I=M/i,P=I*Math.PI/2;S=-u-t*Math.cos(P),A=t*Math.sin(P),E=-t*Math.cos(P),R=I*h}else if(M<=i+r){let I=(M-i)/r;S=-u+I*e,A=t,E=0,R=h+I*f}else{let I=(M-i-r)/i,P=I*Math.PI/2;S=u+t*Math.sin(P),A=t*Math.cos(P),E=t*Math.sin(P),R=h+f+I*h}let x=Math.max(0,Math.min(1,R/d)),b=0;M===0?b=.5/s:M===g&&(b=-.5/s);for(let I=0;I<=s;I++){let P=I/s,O=P*Math.PI*2,H=Math.sin(O),Y=Math.cos(O);m.x=-A*Y,m.y=S,m.z=A*H,l.push(m.x,m.y,m.z),p.set(-A*Y,E,A*H),p.normalize(),c.push(p.x,p.y,p.z),a.push(P+b,x)}if(M>0){let I=(M-1)*_;for(let P=0;P<s;P++){let O=I+P,H=I+P+1,Y=M*_+P,C=M*_+P+1;o.push(O,H,Y),o.push(H,C,Y)}}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class n extends yn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],l=[],c=[],a=new B,u=new Ot;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=i+h/e*s;a.x=t*Math.cos(d),a.y=t*Math.sin(d),o.push(a.x,a.y,a.z),l.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class n extends yn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,_=[],p=i/2,m=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function M(){let S=new B,A=new B,E=0,x=(e-t)/i;for(let b=0;b<=r;b++){let I=[],P=b/r,O=P*(e-t)+t;for(let H=0;H<=s;H++){let Y=H/s,C=Y*c+l,Z=Math.sin(C),V=Math.cos(C);A.x=O*Z,A.y=-P*i+p,A.z=O*V,h.push(A.x,A.y,A.z),S.set(Z,x,V).normalize(),f.push(S.x,S.y,S.z),d.push(Y,1-P),I.push(g++)}_.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let P=_[I][b],O=_[I+1][b],H=_[I+1][b+1],Y=_[I][b+1];(t>0||I!==0)&&(u.push(P,O,Y),E+=3),(e>0||I!==r-1)&&(u.push(O,H,Y),E+=3)}a.addGroup(m,E,0),m+=E}function R(S){let A=g,E=new Ot,x=new B,b=0,I=S===!0?t:e,P=S===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,p*P,0),f.push(0,P,0),d.push(.5,.5),g++;let O=g;for(let H=0;H<=s;H++){let C=H/s*c+l,Z=Math.cos(C),V=Math.sin(C);x.x=I*V,x.y=p*P,x.z=I*Z,h.push(x.x,x.y,x.z),f.push(0,P,0),E.x=Z*.5+.5,E.y=V*.5*P+.5,d.push(E.x,E.y),g++}for(let H=0;H<s;H++){let Y=A+H,C=O+H;S===!0?u.push(C,C+1,Y):u.push(C+1,C,Y),b+=3}a.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},js=class n extends fn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,t,e,i,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ra=class n extends yn{constructor(t=[new Ot(0,-.5),new Ot(.5,0),new Ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ae(s,0,Math.PI*2);let r=[],o=[],l=[],c=[],a=[],u=1/e,h=new B,f=new Ot,d=new B,g=new B,_=new B,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){let R=i+M*u*s,S=Math.sin(R),A=Math.cos(R);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*S,h.y=t[E].y,h.z=t[E].x*A,o.push(h.x,h.y,h.z),f.x=M/e,f.y=E/(t.length-1),l.push(f.x,f.y);let x=c[3*E+0]*S,b=c[3*E+1],I=c[3*E+0]*A;a.push(x,b,I)}}for(let M=0;M<e;M++)for(let R=0;R<t.length-1;R++){let S=R+M*t.length,A=S,E=S+t.length,x=S+t.length+1,b=S+1;r.push(A,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(l,2)),this.setAttribute("normal",new Se(a,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var _e=class n extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(i),c=Math.floor(s),a=l+1,u=c+1,h=t/l,f=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let M=m*f-o;for(let R=0;R<a;R++){let S=R*h-r;g.push(S,-M,0),_.push(0,0,1),p.push(R/l),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<l;M++){let R=M+a*m,S=M+a*(m+1),A=M+1+a*(m+1),E=M+1+a*m;d.push(R,S,E),d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var tn=class n extends yn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+l,Math.PI),a=0,u=[],h=new B,f=new B,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){let M=[],R=m/i,S=o+R*l,A=t*Math.cos(S),E=Math.sqrt(t*t-A*A),x=0;m===0&&o===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let I=b/e,P=s+I*r;h.x=-E*Math.cos(P),h.y=A,h.z=E*Math.sin(P),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(I+x,1-R),M.push(a++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let R=u[m][M+1],S=u[m][M],A=u[m+1][M],E=u[m+1][M+1];(m!==0||o>0)&&d.push(R,S,E),(m!==i-1||c<Math.PI)&&d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ms=class n extends yn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},i=Math.floor(i),s=Math.floor(s);let c=[],a=[],u=[],h=[],f=new B,d=new B,g=new B;for(let _=0;_<=i;_++){let p=o+_/i*l;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(M),d.y=(t+e*Math.cos(p))*Math.sin(M),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(m/s),h.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,M=(s+1)*(_-1)+p-1,R=(s+1)*(_-1)+p,S=(s+1)*_+p;c.push(m,M,S),c.push(M,R,S)}this.setIndex(c),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function lr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Xd(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Xd(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=lr(n[e]);for(let s in i)t[s]=i[s]}return t}function Xd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ix(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ku(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var kp={clone:lr,merge:En},sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=ix(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vl=class extends Pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ss=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tr=class extends Ss{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return $s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){$s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wl=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xl=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Tl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var bs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ql=class extends bs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case lu:r=t,l=2*e-i;break;case cu:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lu:o=t,c=2*i-e;break;case cu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let a=(i-e)*.5,u=this.valueSize;this._weightPrev=a/(e-l),this._weightNext=a/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,R=(-1-d)*p+(1.5+d)*_+.5*g,S=d*p-d*_;for(let A=0;A!==l;++A)r[A]=m*o[u+A]+M*o[a+A]+R*o[c+A]+S*o[h+A];return r}},Yl=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==l;++f)r[f]=o[a+f]*h+o[c+f]*u;return r}},Zl=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jl=class extends bs{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-e)/(s-e),_=1-g;for(let p=0;p!==l;++p)r[p]=o[a+p]*_+o[c+p]*g;return r}let f=l*2,d=t-1;for(let g=0;g!==l;++g){let _=o[a+g],p=o[c+g],m=d*f+g*2,M=h[m],R=h[m+1],S=t*f+g*2,A=u[S],E=u[S+1],x=ax(i,e,M,A,s);r[g]=zp(x,_,R,E,p)}return r}};function zp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function ox(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ax(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let l=zp(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=ox(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Yn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Tl(t.settings)&&(i.settings={inTangents:Or(t.settings.inTangents,Array),outTangents:Or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case Fl:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break;case ou:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return ou}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Tl(this.settings)&&(qd(this.settings.inTangents,t),qd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Tl(this.settings)&&(Yd(this.settings.inTangents,t),Yd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){Gt("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(s!==void 0&&Og(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){Gt("KeyframeTrack: Value is not a valid number.",this,l,a),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=t[l],u=t[l+1];if(a!==u&&(l!==1||a!==t[0]))if(s)c=!0;else{let h=l*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let h=l*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,c=o*i,a=0;a!==i;++a)e[c+a]=e[l+a];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Yd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Fl;var Ts=class extends Yn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=zo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};$l.prototype.ValueTypeName="color";var Kl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};Kl.prototype.ValueTypeName="number";var Ql=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),a=t*l;for(let u=a+l;a!==u;a+=4)Bn.slerpFlat(r,0,o,a-l,o,a,c);return r}},oa=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Yn{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=zo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Yn{constructor(t,e,i,s){super(t,e,i,s)}};jl.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,i){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,l),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return a.push(u,h),this},this.removeHandler=function(u){let h=a.indexOf(u);return h!==-1&&a.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=a.length;h<f;h+=2){let d=a[h],g=a[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends _n{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},aa=class extends er{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ru=new Me,Zd=new B,Jd=new B,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ru.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ru,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;t.coordinateSystem===Gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),e.multiply(ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},El=new B,wl=new Bn,wi=new B,ca=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(El,wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,wl,wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(El,wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,wl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new B,$d=new Ot,Kd=new Ot,xn=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,$d,Kd),e.subVectors(Kd,$d)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/a,s*=o.width/c,i*=o.height/a}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hu=class extends la{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Xo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ha=class extends er{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},uu=class extends la{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},Zn=class extends er{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},nc=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ua=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fr=-90,Br=1,Jr=class extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Fr,Br,t,e);s.layers=this.layers,this.add(s);let r=new xn(Fr,Br,t,e);r.layers=this.layers,this.add(r);let o=new xn(Fr,Br,t,e);o.layers=this.layers,this.add(o);let l=new xn(Fr,Br,t,e);l.layers=this.layers,this.add(l);let c=new xn(Fr,Br,t,e);c.layers=this.layers,this.add(c);let a=new xn(Fr,Br,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,l,c]=e;for(let a of e)this.remove(a);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ic=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var zu="\\[\\]\\.:\\/",lx=new RegExp("["+zu+"]","g"),Hu="[^"+zu+"]",cx="[^"+zu.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",Hu),ux=/(WCOD+)?/.source.replace("WCOD",cx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hu),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hu),px=new RegExp("^"+hx+ux+fx+dx+"$"),mx=["material","materials","bones","map"],fu=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(t){let e=px.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);mx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===a){a=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(a!==void 0){if(t[a]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[a]}}let o=t[s];if(o===void 0){let a=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=fu;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TS=new Float32Array(1);var Yu=class Yu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var du=Yu;function Gu(n,t,e,i){let s=gx(i);switch(e){case Lu:return n*t;case uc:return n*t/s.components*s.byteLength;case fc:return n*t/s.components*s.byteLength;case As:return n*t*2/s.components*s.byteLength;case dc:return n*t*2/s.components*s.byteLength;case Du:return n*t*3/s.components*s.byteLength;case yi:return n*t*4/s.components*s.byteLength;case pc:return n*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:case _c:return Math.max(n,16)*Math.max(t,8)/4;case mc:case xc:return Math.max(n,8)*Math.max(t,8)/2;case yc:case vc:case Sc:case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mc:case _a:case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kc:case zc:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gc:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ya:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gx(n){switch(n){case kn:case Ru:return{byteLength:1,components:1};case jr:case Cu:case _i:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case xi:case lc:case si:return{byteLength:4,components:1};case Pu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Tx(n){let t=new WeakMap;function e(l,c){let a=l.array,u=l.usage,h=a.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,a,u),l.onUploadCallback();let d;if(a instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)d=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)d=n.SHORT;else if(a instanceof Uint32Array)d=n.UNSIGNED_INT;else if(a instanceof Int32Array)d=n.INT;else if(a instanceof Int8Array)d=n.BYTE;else if(a instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:d,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,a){let u=c.array,h=c.updateRanges;if(n.bindBuffer(a,l),h.length===0)n.bufferSubData(a,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];n.bufferSubData(a,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=t.get(l);if(a===void 0)t.set(l,e(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,g_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,S_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ly=`#define DISTANCE
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
}`,Dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,zy=`#define LAMBERT
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
}`,Hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gy=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qy=`#define PHONG
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
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,$y=`#define TOON
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
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Qy=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Ex,alphahash_pars_fragment:wx,alphamap_fragment:Ax,alphamap_pars_fragment:Rx,alphatest_fragment:Cx,alphatest_pars_fragment:Px,aomap_fragment:Ix,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Nx,begin_vertex:Ux,beginnormal_vertex:Ox,bsdfs:Fx,iridescence_fragment:Bx,bumpmap_pars_fragment:kx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Vx,color_fragment:Wx,color_pars_fragment:Xx,color_pars_vertex:qx,color_vertex:Yx,common:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:$x,displacementmap_vertex:Kx,emissivemap_fragment:Qx,emissivemap_pars_fragment:jx,colorspace_fragment:t_,colorspace_pars_fragment:e_,envmap_fragment:n_,envmap_common_pars_fragment:i_,envmap_pars_fragment:s_,envmap_pars_vertex:r_,envmap_physical_pars_fragment:g_,envmap_vertex:o_,fog_vertex:a_,fog_pars_vertex:l_,fog_fragment:c_,fog_pars_fragment:h_,gradientmap_pars_fragment:u_,lightmap_pars_fragment:f_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:p_,lights_pars_begin:m_,lights_toon_fragment:x_,lights_toon_pars_fragment:__,lights_phong_fragment:y_,lights_phong_pars_fragment:v_,lights_physical_fragment:M_,lights_physical_pars_fragment:S_,lights_fragment_begin:b_,lights_fragment_maps:T_,lights_fragment_end:E_,lightprobes_pars_fragment:w_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:I_,map_pars_fragment:L_,map_particle_fragment:D_,map_particle_pars_fragment:N_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:O_,morphinstance_vertex:F_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:K_,opaque_fragment:Q_,packing:j_,premultiplied_alpha_fragment:ty,project_vertex:ey,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:hy,skinning_pars_vertex:uy,skinning_vertex:fy,skinnormal_vertex:dy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:xy,transmission_fragment:_y,transmission_pars_fragment:yy,uv_pars_fragment:vy,uv_pars_vertex:My,uv_vertex:Sy,worldpos_vertex:by,background_vert:Ty,background_frag:Ey,backgroundCube_vert:wy,backgroundCube_frag:Ay,cube_vert:Ry,cube_frag:Cy,depth_vert:Py,depth_frag:Iy,distance_vert:Ly,distance_frag:Dy,equirect_vert:Ny,equirect_frag:Uy,linedashed_vert:Oy,linedashed_frag:Fy,meshbasic_vert:By,meshbasic_frag:ky,meshlambert_vert:zy,meshlambert_frag:Hy,meshmatcap_vert:Gy,meshmatcap_frag:Vy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:$y,meshtoon_frag:Ky,points_vert:Qy,points_frag:jy,shadow_vert:tv,shadow_frag:ev,sprite_vert:nv,sprite_frag:iv},Mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Di={basic:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:En([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:En([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:En([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:En([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:En([Mt.points,Mt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:En([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:En([Mt.common,Mt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:En([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:En([Mt.sprite,Mt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:En([Mt.common,Mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:En([Mt.lights,Mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Di.physical={uniforms:En([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Yc={r:0,b:0,g:0},sv=new Me,hm=new qt;hm.set(-1,0,0,0,1,0,0,0,1);function rv(n,t,e,i,s,r){let o=new Zt(0),l=s===!0?0:1,c,a,u=null,h=0,f=null;function d(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function g(M){let R=!1,S=d(M);S===null?p(o,l):S&&S.isColor&&(p(S,1),R=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,R){let S=d(R);S&&S.isCubeTexture?(a===void 0&&(a=new Et(new se(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:lr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(A,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=S,a.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(hm),a.material.toneMapped=fe.getTransfer(S.colorSpace)!==be,(u!==S||h!==S.version||f!==n.toneMapping)&&(a.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),a.layers.enableAll(),M.unshift(a,a.geometry,a.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Et(new _e(2,2),new Pi({name:"BackgroundMaterial",uniforms:lr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,R){M.getRGB(Yc,ku(n)),e.buffers.color.setClear(Yc.r,Yc.g,Yc.b,R,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),l=R,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:_,dispose:m}}function ov(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function l(O,H,Y,C,Z){let V=!1,T=h(O,C,Y,H);r!==T&&(r=T,a(r.object)),V=d(O,C,Y,Z),V&&g(O,C,Y,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(O,H,Y,C),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return n.createVertexArray()}function a(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function h(O,H,Y,C){let Z=C.wireframe===!0,V=i[H.id];V===void 0&&(V={},i[H.id]=V);let T=O.isInstancedMesh===!0?O.id:0,N=V[T];N===void 0&&(N={},V[T]=N);let D=N[Y.id];D===void 0&&(D={},N[Y.id]=D);let z=D[Z];return z===void 0&&(z=f(c()),D[Z]=z),z}function f(O){let H=[],Y=[],C=[];for(let Z=0;Z<e;Z++)H[Z]=0,Y[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:C,object:O,attributes:{},index:null}}function d(O,H,Y,C){let Z=r.attributes,V=H.attributes,T=0,N=Y.getAttributes();for(let D in N)if(N[D].location>=0){let $=Z[D],rt=V[D];if(rt===void 0&&(D==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),D==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),$===void 0||$.attribute!==rt||rt&&$.data!==rt.data)return!0;T++}return r.attributesNum!==T||r.index!==C}function g(O,H,Y,C){let Z={},V=H.attributes,T=0,N=Y.getAttributes();for(let D in N)if(N[D].location>=0){let $=V[D];$===void 0&&(D==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),D==="instanceColor"&&O.instanceColor&&($=O.instanceColor));let rt={};rt.attribute=$,$&&$.data&&(rt.data=$.data),Z[D]=rt,T++}r.attributes=Z,r.attributesNum=T,r.index=C}function _(){let O=r.newAttributes;for(let H=0,Y=O.length;H<Y;H++)O[H]=0}function p(O){m(O,0)}function m(O,H){let Y=r.newAttributes,C=r.enabledAttributes,Z=r.attributeDivisors;Y[O]=1,C[O]===0&&(n.enableVertexAttribArray(O),C[O]=1),Z[O]!==H&&(n.vertexAttribDivisor(O,H),Z[O]=H)}function M(){let O=r.newAttributes,H=r.enabledAttributes;for(let Y=0,C=H.length;Y<C;Y++)H[Y]!==O[Y]&&(n.disableVertexAttribArray(Y),H[Y]=0)}function R(O,H,Y,C,Z,V,T){T===!0?n.vertexAttribIPointer(O,H,Y,Z,V):n.vertexAttribPointer(O,H,Y,C,Z,V)}function S(O,H,Y,C){_();let Z=C.attributes,V=Y.getAttributes(),T=H.defaultAttributeValues;for(let N in V){let D=V[N];if(D.location>=0){let z=Z[N];if(z===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),z!==void 0){let $=z.normalized,rt=z.itemSize,Tt=t.get(z);if(Tt===void 0)continue;let K=Tt.buffer,at=Tt.type,pt=Tt.bytesPerElement,Dt=at===n.INT||at===n.UNSIGNED_INT||z.gpuType===lc;if(z.isInterleavedBufferAttribute){let St=z.data,Qt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,Ye=z.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let kt=0;kt<D.locationSize;kt++)m(D.location+kt,St.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let kt=0;kt<D.locationSize;kt++)p(D.location+kt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let kt=0;kt<D.locationSize;kt++)R(D.location+kt,rt/D.locationSize,at,$,Qt*pt,(Ye+rt/D.locationSize*kt)*pt,Dt)}else{if(z.isInstancedBufferAttribute){for(let St=0;St<D.locationSize;St++)m(D.location+St,z.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let St=0;St<D.locationSize;St++)p(D.location+St);n.bindBuffer(n.ARRAY_BUFFER,K);for(let St=0;St<D.locationSize;St++)R(D.location+St,rt/D.locationSize,at,$,rt*pt,rt/D.locationSize*St*pt,Dt)}}else if(T!==void 0){let $=T[N];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(D.location,$);break;case 3:n.vertexAttrib3fv(D.location,$);break;case 4:n.vertexAttrib4fv(D.location,$);break;default:n.vertexAttrib1fv(D.location,$)}}}}M()}function A(){I();for(let O in i){let H=i[O];for(let Y in H){let C=H[Y];for(let Z in C){let V=C[Z];for(let T in V)u(V[T].object),delete V[T];delete C[Z]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;let H=i[O.id];for(let Y in H){let C=H[Y];for(let Z in C){let V=C[Z];for(let T in V)u(V[T].object),delete V[T];delete C[Z]}}delete i[O.id]}function x(O){for(let H in i){let Y=i[H];for(let C in Y){let Z=Y[C];if(Z[O.id]===void 0)continue;let V=Z[O.id];for(let T in V)u(V[T].object),delete V[T];delete Z[O.id]}}}function b(O){for(let H in i){let Y=i[H],C=O.isInstancedMesh===!0?O.id:0,Z=Y[C];if(Z!==void 0){for(let V in Z){let T=Z[V];for(let N in T)u(T[N].object),delete T[N];delete Z[V]}delete Y[C],Object.keys(Y).length===0&&delete i[H]}}}function I(){P(),o=!0,r!==s&&(r=s,a(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function av(n,t,e){let i;function s(c){i=c}function r(c,a){n.drawArrays(i,c,a),e.update(a,i,1)}function o(c,a,u){u!==0&&(n.drawArraysInstanced(i,c,a,u),e.update(a,i,u))}function l(c,a,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,a,0,u);let f=0;for(let d=0;d<u;d++)f+=a[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function lv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==yi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){let b=x===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==kn&&x!==si&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp",u=c(a);u!==a&&(zt("WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:E}}function cv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new mi,l=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):a();else{let M=r?0:i,R=M*4,S=m.clippingState||null;c.value=S,S=u(g,f,R,d);for(let A=0;A!==R;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function a(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=d+_*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,S=d;R!==_;++R,S+=4)o.copy(h[R]).applyMatrix4(M,l),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Sa=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new na(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:ir});r.uniforms.tEquirect.value=e;let o=new Et(s,r),l=e.minFilter;return e.minFilter===$i&&(e.minFilter=Pn),new Jr(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Gp=256,hv=3,uv=20,um=256,fm=16,fv=3,dv=new B,pv=new Zt,Jc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jr(1,10,null),this._boxMesh=new Et(new se(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:l=dv}=r,c=this._renderer;this._setSize(o);let a=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,_=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(t.background=c.getClearColor(pv));let p=new Jr(i,s,u);return p.position.copy(l),p.update(c,t),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(a,e)),this._applyPMREM(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gp,Np(t))}_fromTexture(t,e){t.mapping===rr||t.mapping===Qr?this._setSize(t.image.length===0?Gp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Vp(t,!1,!1),i=Math.log2(t)-hv;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rr||t.mapping===Qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mv(),this._integrationMaterial=gv());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/fm);for(let o=0;o<=i;o++){let l=n.lodToRoughness(o,i);if(o>i-fv)r.roughness.value=l,this._renderCube(t,o,this._integrationMaterial);else{let c=l>0?Math.log2(e)+.5*Math.log2(6/(um*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Vp(n,t,e){return new Sa(n,{minFilter:$i,generateMipmaps:t,type:_i,colorSpace:Ho,depthBuffer:e})}function ba(n,t,e){return new Pi({name:n,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:Ln,blending:ir,depthTest:!1,depthWrite:!1})}function mv(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${um}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gv(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xv(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wp(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xp(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _v(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===rc||d===oc)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Sa(g.height);return _.fromEquirectangularTexture(n,f),t.set(f,_),f.addEventListener("dispose",a),l(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===rc||d===oc,_=d===rr||d===Qr;if(g||_){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Jc(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new Jc(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function l(f,d){return d===rc?f.mapping=rr:d===oc&&(f.mapping=Qr),f}function c(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function a(f){let d=f.target;d.removeEventListener("dispose",a);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function yv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$s("WebGLRenderer: "+i+" extension not supported."),s}}}function vv(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function l(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",l),delete s[g.id],o.unregister(g);let _=r.get(g);_&&(t.remove(_),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",l),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function u(g){let _=g.attributes;for(let p in _)t.update(_[p],n.ARRAY_BUFFER)}function h(g){let _=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=_!==null?_.array.length:p.array.length/3-1,R=p.count>=65535?Ko:$o,S=new R(Math.ceil(M/3)*6,1),A=S.array;if(_!==null){let x=_.array;m=_.version;for(let b=0,I=0;b<M;b+=3){let P=x[b+0],O=x[b+1],H=x[b+2];A[I++]=P,A[I++]=O,A[I++]=O,A[I++]=H,A[I++]=H,A[I++]=P}}else{m=p.version;for(let x=0,b=0;x<M;x+=3){let I=x+0,P=x+1,O=x+2;A[b++]=I,A[b++]=P,A[b++]=P,A[b++]=O,A[b++]=O,A[b++]=I}}S.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,S)}function f(g){let _=r.get(g);if(_){let p=g.index;p!==null&&_.version<p.version&&h(g)}else h(g);return r.get(g)}function d(){for(let g in s){let _=s[g].deref();_!==void 0&&c(_)}}return{get:a,update:u,getWireframeAttribute:f,dispose:d}}function Mv(n,t,e){let i;function s(h){i=h}let r,o;function l(h){r=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function a(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];e.update(_,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=u}function Sv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function bv(n,t,e){let i=new WeakMap,s=new Be;function r(o,l,c){let a=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(l);if(f===void 0||f.count!==h){let I=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let S=l.attributes.position.count*R,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*A*4*h),x=new qo(E,S,A,h);x.type=si,x.needsUpdate=!0;let b=R*4;for(let P=0;P<h;P++){let O=p[P],H=m[P],Y=M[P],C=S*A*4*P;for(let Z=0;Z<O.count;Z++){let V=Z*b;d===!0&&(s.fromBufferAttribute(O,Z),E[C+V+0]=s.x,E[C+V+1]=s.y,E[C+V+2]=s.z,E[C+V+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),E[C+V+4]=s.x,E[C+V+5]=s.y,E[C+V+6]=s.z,E[C+V+7]=0),_===!0&&(s.fromBufferAttribute(Y,Z),E[C+V+8]=s.x,E[C+V+9]=s.y,E[C+V+10]=s.z,E[C+V+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new Ot(S,A)},i.set(l,f),l.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<a.length;_++)d+=a[_];let g=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tv(n,t,e,i,s){let r=new WeakMap;function o(a){let u=s.render.frame,h=a.geometry,f=t.get(a,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==u&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,u))),a.isSkinnedMesh){let d=a.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function l(){r=new WeakMap}function c(a){let u=a.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:l}}var Ev={[Mu]:"LINEAR_TONE_MAPPING",[Su]:"REINHARD_TONE_MAPPING",[bu]:"CINEON_TONE_MAPPING",[fa]:"ACES_FILMIC_TONE_MAPPING",[Eu]:"AGX_TONE_MAPPING",[wu]:"NEUTRAL_TONE_MAPPING",[Tu]:"CUSTOM_TONE_MAPPING"};function wv(n,t,e,i,s,r){let o=new Xn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=null,u=new yn;u.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Se([0,2,0,0,2,0],2));let h=new Vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Et(u,h),d=new nc(-1,1,1,-1,0,1),g=null,_=null,p=!1,m,M=null,R=[],S=!1;this.setSize=function(A,E){o.setSize(A,E),l!==null&&l.setSize(A,E),c!==null&&c.setSize(A,E);for(let x=0;x<R.length;x++){let b=R[x];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){R=A,S=R.length>0&&R[0].isRenderPass===!0;let E=o.width,x=o.height;R.length>0&&l===null&&(l=new Xn(E,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(E,x,{type:_i,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&R.some(I=>I.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&a===null&&(a=new Zi(E,x),r===!0&&(a.format=Ki,a.type=or)),o.dispose(),o.depthTexture=b?a:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let I=0;I<R.length;I++){let P=R[I];P.setSize&&P.setSize(E,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(a)}},this.begin=function(A,E){if(p||A.toneMapping===Ii&&R.length===0)return!1;if(M=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&A.setRenderTarget(o),m=A.toneMapping,A.toneMapping=Ii,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=m,p=!0;let x=o,b=l;for(let I=0;I<R.length;I++){let P=R[I];P.enabled!==!1&&(P.render(A,b,x,E),P.needsSwap!==!1&&(x=b,b=b===l?c:l))}if(g!==A.outputColorSpace||_!==A.toneMapping){g=A.outputColorSpace,_=A.toneMapping,h.defines={},fe.getTransfer(g)===be&&(h.defines.SRGB_TRANSFER="");let I=Ev[_];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var dm=new In,pm=new Zi(1,1),mm=new ia(1),gm=new qo,xm=new zl,_m=new na,qp=[],Yp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),$p=new Float32Array(4);function eo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=qp[s];if(r===void 0&&(r=new Float32Array(s),qp[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,n[o].toArray(r,l)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kc(n,t){let e=Yp[t];e===void 0&&(e=new Int32Array(t),Yp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Av(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function Cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function Pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function Iv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;$p.set(i),n.uniformMatrix2fv(this.addr,!1,$p),nn(e,i)}}function Lv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;Jp.set(i),n.uniformMatrix3fv(this.addr,!1,Jp),nn(e,i)}}function Dv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;Zp.set(i),n.uniformMatrix4fv(this.addr,!1,Zp),nn(e,i)}}function Nv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Uv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function Ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function Fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function Bv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function Hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function Qc(n){return n.version===0&&(n.compareFunction=Ou,n.needsUpdate=!0),n}function Gv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Qc(pm):r=dm,e.setTexture2D(t||r,s)}function Vv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xm,s)}function Wv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Qc(mm):r=_m,e.setTextureCube(t||r,s)}function Xv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gm,s)}function qv(n){switch(n){case 5126:return Av;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Ov;case 35669:case 35673:return Fv;case 5125:return Bv;case 36294:return kv;case 36295:return zv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(n,t){n.uniform1fv(this.addr,t)}function Zv(n,t){let e=eo(t,this.size,2);n.uniform2fv(this.addr,e)}function Jv(n,t){let e=eo(t,this.size,3);n.uniform3fv(this.addr,e)}function $v(n,t){let e=eo(t,this.size,4);n.uniform4fv(this.addr,e)}function Kv(n,t){let e=eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qv(n,t){let e=eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function jv(n,t){let e=eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function tM(n,t){n.uniform1iv(this.addr,t)}function eM(n,t){n.uniform2iv(this.addr,t)}function nM(n,t){n.uniform3iv(this.addr,t)}function iM(n,t){n.uniform4iv(this.addr,t)}function sM(n,t){n.uniform1uiv(this.addr,t)}function rM(n,t){n.uniform2uiv(this.addr,t)}function oM(n,t){n.uniform3uiv(this.addr,t)}function aM(n,t){n.uniform4uiv(this.addr,t)}function lM(n,t,e){let i=this.cache,s=t.length,r=Kc(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Qc(pm):o=dm;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function cM(n,t,e){let i=this.cache,s=t.length,r=Kc(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xm,r[o])}function hM(n,t,e){let i=this.cache,s=t.length,r=Kc(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Qc(mm):o=_m;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||o,r[l])}function uM(n,t,e){let i=this.cache,s=t.length,r=Kc(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gm,r[o])}function fM(n){switch(n){case 5126:return Yv;case 35664:return Zv;case 35665:return Jv;case 35666:return $v;case 35674:return Kv;case 35675:return Qv;case 35676:return jv;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}var $u=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qv(e.type)}},Ku=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fM(e.type)}},Qu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function Kp(n,t){n.seq.push(t),n.map[t.id]=t}function dM(n,t,e){let i=n.name,s=i.length;for(Zu.lastIndex=0;;){let r=Zu.exec(i),o=Zu.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){Kp(e,a===void 0?new $u(l,n,t):new Ku(l,n,t));break}else{let h=e.map[l];h===void 0&&(h=new Qu(l),Kp(e,h)),e=h}}}var to=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);dM(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Qp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var pM=37297,mM=0;function gM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var jp=new qt;function xM(n){fe._getMatrix(jp,fe.workingColorSpace,n);let t=`mat3( ${jp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case Go:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gM(n.getShaderSource(t),l)}else return r}function _M(n,t){let e=xM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yM={[Mu]:"Linear",[Su]:"Reinhard",[bu]:"Cineon",[fa]:"ACESFilmic",[Eu]:"AgX",[wu]:"Neutral",[Tu]:"Custom"};function vM(n,t){let e=yM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zc=new B;function MM(){fe.getLuminanceCoefficients(Zc);let n=Zc.x.toFixed(4),t=Zc.y.toFixed(4),e=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function bM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function TM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:l}}return e}function Ma(n){return n!==""}function em(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(n){return n.replace(EM,wM)}function wM(n,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ju(e)}var AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(n){return n.replace(AM,RM)}function RM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var CM={[nr]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function PM(n){return CM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IM={[Qr]:"ENVMAP_MODE_REFRACTION"};function LM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DM={[vu]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function NM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":DM[n.combine]||"ENVMAP_BLENDING_NONE"}function UM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,c=PM(e),a=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=LM(e),h=NM(e),f=SM(e),d=bM(r),g=s.createProgram(),_,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ma).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(_=[sm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[sm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?re.tonemapping_pars_fragment:"",e.toneMapping!==Ii?vM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,_M("linearToOutputTexel",e.outputColorSpace),MM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),o=ju(o),o=em(o,e),o=nm(o,e),l=ju(l),l=em(l,e),l=nm(l,e),o=im(o),l=im(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+_+o,R=m+p+l,S=Qp(s,s.VERTEX_SHADER,M),A=Qp(s,s.FRAGMENT_SHADER,R);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(S)||"",Y=s.getShaderInfoLog(A)||"",C=O.trim(),Z=H.trim(),V=Y.trim(),T=!0,N=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(T=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,A);else{let D=tm(s,S,"vertex"),z=tm(s,A,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+D+`
`+z)}else C!==""?zt("WebGLProgram: Program Info Log:",C):(Z===""||V==="")&&(N=!1);N&&(P.diagnostics={runnable:T,programLog:C,vertexShader:{log:Z,prefix:_},fragmentShader:{log:V,prefix:p}})}s.deleteShader(S),s.deleteShader(A),x=new to(s,g),b=TM(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,pM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var OM=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ef(t),e.set(t,i)),i}},ef=class{constructor(t){this.id=OM++,this.code=t,this.usedTimes=0}};function FM(n){return n===As||n===_a||n===ya}function BM(n,t,e,i,s,r){let o=new Yo,l=new tf,c=new Set,a=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,b,I,P,O,H){let Y=P.fog,C=O.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,T=t.get(x.envMap||Z,V),N=f[x.type],D=i.precision;x.precision!==null&&(D=i.getMaxPrecision(x.precision),D!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));let z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,$=z!==void 0?z.length:0,rt=0;C.morphAttributes.position!==void 0&&(rt=1),C.morphAttributes.normal!==void 0&&(rt=2),C.morphAttributes.color!==void 0&&(rt=3);let Tt,K,at,pt;if(N){let vt=Di[N];Tt=vt.vertexShader,K=vt.fragmentShader}else{Tt=x.vertexShader,K=x.fragmentShader;let vt=l.getVertexShaderStage(x),Ee=l.getFragmentShaderStage(x);l.update(x,vt,Ee),at=vt.id,pt=Ee.id}let Dt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Qt=O.isInstancedMesh===!0,Ye=O.isBatchedMesh===!0,kt=!!x.map,Te=!!x.matcap,Ce=!!T,ce=Ce&&T.isPMREMTexture===!0,mn=!!x.aoMap,Qe=!!x.lightMap,On=!!x.bumpMap&&x.wireframe===!1,He=!!x.normalMap,Ei=!!x.displacementMap,an=!!x.emissiveMap,Qn=!!x.metalnessMap,jn=!!x.roughnessMap,ti=x.anisotropy>0,k=x.clearcoat>0,ei=x.diffuseRoughness>0,Oe=x.dispersion>0,Fe=x.retroreflectivity>0,yt=x.iridescence>0,je=x.sheen>0,Ut=x.transmission>0,Yt=ti&&!!x.anisotropyMap,w=k&&!!x.clearcoatMap,y=k&&!!x.clearcoatNormalMap,W=k&&!!x.clearcoatRoughnessMap,ot=ei&&!!x.diffuseRoughnessMap,nt=yt&&!!x.iridescenceMap,ht=yt&&!!x.iridescenceThicknessMap,gt=je&&!!x.sheenColorMap,j=je&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ft=!!x.specularColorMap,L=!!x.specularIntensityMap,et=Ut&&!!x.transmissionMap,Q=Ut&&!!x.thicknessMap,dt=!!x.gradientMap,ct=!!x.alphaMap,ut=x.alphaTest>0,Lt=!!x.alphaHash,ie=!!x.extensions,lt=Ii;x.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(lt=n.toneMapping);let Nt=ce?T.isCompressedCubeTexture?T.image[0].mipmaps:T.mipmaps:null,ee={shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:Tt,fragmentShader:K,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:Ye,batchingColor:Ye&&O._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&O.instanceColor!==null,instancingMorph:Qt&&O.morphTexture!==null,outputColorSpace:Dt===null?n.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Te,envMap:Ce,envMapMode:Ce&&T.mapping,envMapPMREM:ce,envMapMaxLod:ce?Nt.length-1:null,envMapSize:ce?Nt[0].width:null,aoMap:mn,lightMap:Qe,bumpMap:On,normalMap:He,displacementMap:Ei,emissiveMap:an,normalMapObjectSpace:He&&x.normalMapType===bp,normalMapTangentSpace:He&&x.normalMapType===Xc,packedNormalMap:He&&x.normalMapType===Xc&&FM(x.normalMap.format),metalnessMap:Qn,roughnessMap:jn,anisotropy:ti,anisotropyMap:Yt,clearcoat:k,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:W,diffuseRoughness:ei,diffuseRoughnessMap:ot,dispersion:Oe,retroreflection:Fe,iridescence:yt,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:je,sheenColorMap:gt,sheenRoughnessMap:j,specularMap:tt,specularColorMap:ft,specularIntensityMap:L,transmission:Ut,transmissionMap:et,thicknessMap:Q,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Kr&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:ut,alphaHash:Lt,combine:x.combine,mapUv:kt&&d(x.map.channel),aoMapUv:mn&&d(x.aoMap.channel),lightMapUv:Qe&&d(x.lightMap.channel),bumpMapUv:On&&d(x.bumpMap.channel),normalMapUv:He&&d(x.normalMap.channel),displacementMapUv:Ei&&d(x.displacementMap.channel),emissiveMapUv:an&&d(x.emissiveMap.channel),metalnessMapUv:Qn&&d(x.metalnessMap.channel),roughnessMapUv:jn&&d(x.roughnessMap.channel),anisotropyMapUv:Yt&&d(x.anisotropyMap.channel),clearcoatMapUv:w&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&d(x.sheenRoughnessMap.channel),specularMapUv:tt&&d(x.specularMap.channel),specularColorMapUv:ft&&d(x.specularColorMap.channel),specularIntensityMapUv:L&&d(x.specularIntensityMap.channel),transmissionMapUv:et&&d(x.transmissionMap.channel),thicknessMapUv:Q&&d(x.thicknessMap.channel),alphaMapUv:ct&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(He||ti),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!C.attributes.uv&&(kt||ct),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&He===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:rt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&fe.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:an&&x.emissiveMap.isVideoTexture===!0&&fe.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===We,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||Ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=f[x.type],I;if(b){let P=Di[b];I=kp.clone(P.uniforms)}else I=x.uniforms;return I}function R(x,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new UM(n,b,x,s),a.push(I),u.set(b,I)),I}function S(x){if(--x.usedTimes===0){let b=a.indexOf(x);a[b]=a[a.length-1],a.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:M,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:a,dispose:E}}function kM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function rm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function om(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,g,_,p,m){let M=n[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=o(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=p,M.group=m),t++,M}function c(f,d,g,_,p,m,M){M.reversedDepth===!0&&(p=-p);let R=l(f,d,g,_,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):e.push(R)}function a(f,d,g,_,p,m){let M=l(f,d,g,_,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(f,d){e.length>1&&e.sort(f||zM),i.length>1&&i.sort(d||rm),s.length>1&&s.sort(d||rm)}function h(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:h,sort:u}}function HM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new om,n.set(i,[o])):s>=r.length?(o=new om,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function GM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Zt};break;case"SpotLight":e={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function VM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var WM=0;function XM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qM(n){let t=new GM,e=VM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new B);let s=new B,r=new Me,o=new Me;function l(a){let u=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,R=0,S=0,A=0,E=0,x=0,b=0,I=0,P=0;a.sort(XM);for(let H=0,Y=a.length;H<Y;H++){let C=a[H],Z=C.color,V=C.intensity,T=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===As?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=Z.r*V,h+=Z.g*V,f+=Z.b*V;else if(C.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(C.sh.coefficients[D],V);P++}else if(C.isSunLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,$=e.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=N;let rt=z.getViewportCount();for(let Tt=0;Tt<rt;Tt++)i.sunShadowMatrix[_+Tt]=z.getMatrix(Tt),i.sunShadowCascade[_+Tt]=z._cascadeData[Tt];_+=rt,g++}i.sun[d]=D,d++}else if(C.isDirectionalLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,$=e.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=D,p++}else if(C.isSpotLight){let D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(Z).multiplyScalar(V),D.distance=T,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,i.spot[M]=D;let z=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[M]=z.matrix,C.castShadow){let $=e.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=N,x++}M++}else if(C.isRectAreaLight){let D=t.get(C);D.color.copy(Z).multiplyScalar(V),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),i.rectArea[R]=D,R++}else if(C.isPointLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let z=C.shadow,$=e.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=C.shadow.matrix,E++}i.point[m]=D,m++}else if(C.isHemisphereLight){let D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(V),D.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[S]=D,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let O=i.hash;(O.sunLength!==d||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==M||O.rectAreaLength!==R||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==A||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==b||O.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=p,i.spot.length=M,i.rectArea.length=R,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-I,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,O.sunLength=d,O.directionalLength=p,O.pointLength=m,O.spotLength=M,O.rectAreaLength=R,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=A,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=b,O.numLightProbes=P,i.version=WM++)}function c(a,u){let h=0,f=0,d=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let M=0,R=a.length;M<R;M++){let S=a[M];if(S.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),h++}else if(S.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(S.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function am(n){let t=new qM(n),e=[],i=[],s=[];function r(h){u.camera=h,e.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function l(h){i.push(h)}function c(){t.setup(e),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function a(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:a,pushLight:o,pushShadow:l}}function YM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new am(n),t.set(s,[l])):r>=o.length?(l=new am(n),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$M=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],KM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],lm=new Me,va=new B,Ju=new B;function QM(n,t,e){let i=new vs,s=new Ot,r=new Ot,o=new Be,l=new Wl,c=new Xl,a={},u=e.maxTextureSize,h={[ws]:Ln,[Ln]:ws,[We]:We},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:ZM,fragmentShader:JM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new yn;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let m=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===tp&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let I=n.getRenderTarget(),P=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ir),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=m!==this.type;Y&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(Z=>Z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,Z=E.length;C<Z;C++){let V=E[C],T=V.shadow;if(T===void 0){zt("WebGLShadowMap:",V,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);let N=T.getFrameExtents();s.multiply(N),r.copy(T.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/N.x),s.x=r.x*N.x,T.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/N.y),s.y=r.y*N.y,T.mapSize.y=r.y));let D=n.state.buffers.depth.getReversed();if(T.camera._reversedDepth=D,T.map===null||Y===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===$r){if(V.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new Xn(s.x,s.y,{format:As,type:_i,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),T.map.texture.name=V.name+".shadowMap",T.map.depthTexture=new Zi(s.x,s.y,si),T.map.depthTexture.name=V.name+".shadowMapDepth",T.map.depthTexture.format=qi,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=un,T.map.depthTexture.magFilter=un}else V.isPointLight?(T.map=new Sa(s.x),T.map.depthTexture=new ia(s.x,xi)):(T.map=new Xn(s.x,s.y),T.map.depthTexture=new Zi(s.x,s.y,xi)),T.map.depthTexture.name=V.name+".shadowMap",T.map.depthTexture.format=qi,this.type===nr?(T.map.depthTexture.compareFunction=D?Uu:Nu,T.map.depthTexture.minFilter=Pn,T.map.depthTexture.magFilter=Pn):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=un,T.map.depthTexture.magFilter=un);T.camera.updateProjectionMatrix()}T.map.isWebGLCubeRenderTarget!==!0&&(T.map.width!==s.x||T.map.height!==s.y)&&T.map.setSize(s.x,s.y);let z=T.map.isWebGLCubeRenderTarget?6:T.getViewportCount();V.isPointLight!==!0&&T.updateMatrices(V,b);let $=(T.camera.layers.mask&4294967294)!==0?T.camera.layers:b.layers;for(let rt=0;rt<z;rt++){let Tt=T.getCamera(rt);if(V.isPointLight){let K=T.camera,at=T.matrix,pt=V.distance||K.far;pt!==K.far&&(K.far=pt,K.updateProjectionMatrix()),va.setFromMatrixPosition(V.matrixWorld),K.position.copy(va),Ju.copy(K.position),Ju.add($M[rt]),K.up.copy(KM[rt]),K.lookAt(Ju),K.updateMatrixWorld(),at.makeTranslation(-va.x,-va.y,-va.z),lm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),T._frustum.setFromProjectionMatrix(lm,K.coordinateSystem,K.reversedDepth)}if(T.map.isWebGLCubeRenderTarget)n.setRenderTarget(T.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(T.map),n.clear());let K=T.getViewport(rt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),H.viewport(o)}i=T.getFrustum(rt),S(x,b,Tt,V,$,this.type)}T.isPointLightShadow!==!0&&this.type===$r&&M(T,b),T.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(I,P,O)};function M(E,x){let b=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xn(s.x,s.y,{format:As,type:_i}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(x,null,b,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(x,null,b,d,_,null)}function R(E,x,b,I){let P=null,O=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)P=O;else if(P=b.isPointLight===!0?c:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=P.uuid,Y=x.uuid,C=a[H];C===void 0&&(C={},a[H]=C);let Z=C[Y];Z===void 0&&(Z=P.clone(),C[Y]=Z,x.addEventListener("dispose",A)),P=Z}if(P.visible=x.visible,P.wireframe=x.wireframe,I===$r?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:h[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=b}return P}function S(E,x,b,I,P,O){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===$r)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let C=t.update(E),Z=E.material;if(Array.isArray(Z)){let V=C.groups;for(let T=0,N=V.length;T<N;T++){let D=V[T],z=Z[D.materialIndex];if(z&&z.visible){let $=R(E,z,I,O);E.onBeforeShadow(n,E,x,b,C,$,D),n.renderBufferDirect(b,null,C,$,E,D),E.onAfterShadow(n,E,x,b,C,$,D)}}}else if(Z.visible){let V=R(E,Z,I,O);E.onBeforeShadow(n,E,x,b,C,V,null),n.renderBufferDirect(b,null,C,V,E,null),E.onAfterShadow(n,E,x,b,C,V,null)}}let Y=E.children;for(let C=0,Z=Y.length;C<Z;C++)S(Y[C],x,b,I,P,O)}function A(E){E.target.removeEventListener("dispose",A);for(let b in a){let I=a[b],P=E.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function jM(n,t){function e(){let L=!1,et=new Be,Q=null,dt=new Be(0,0,0,0);return{setMask:function(ct){Q!==ct&&!L&&(n.colorMask(ct,ct,ct,ct),Q=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ut,Lt,ie,lt){lt===!0&&(ct*=ie,ut*=ie,Lt*=ie),et.set(ct,ut,Lt,ie),dt.equals(et)===!1&&(n.clearColor(ct,ut,Lt,ie),dt.copy(et))},reset:function(){L=!1,Q=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,et=!1,Q=null,dt=null,ct=null;return{setReversed:function(ut){if(et!==ut){let Lt=t.get("EXT_clip_control");ut?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),et=ut;let ie=ct;ct=null,this.setClear(ie)}},getReversed:function(){return et},setTest:function(ut){ut?St(n.DEPTH_TEST):Qt(n.DEPTH_TEST)},setMask:function(ut){Q!==ut&&!L&&(n.depthMask(ut),Q=ut)},setFunc:function(ut){if(et&&(ut=Dp[ut]),dt!==ut){switch(ut){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ct!==ut&&(ct=ut,et&&(ut=1-ut),n.clearDepth(ut))},reset:function(){L=!1,Q=null,dt=null,ct=null,et=!1}}}function s(){let L=!1,et=null,Q=null,dt=null,ct=null,ut=null,Lt=null,ie=null,lt=null;return{setTest:function(Nt){L||(Nt?St(n.STENCIL_TEST):Qt(n.STENCIL_TEST))},setMask:function(Nt){et!==Nt&&!L&&(n.stencilMask(Nt),et=Nt)},setFunc:function(Nt,ee,vt){(Q!==Nt||dt!==ee||ct!==vt)&&(n.stencilFunc(Nt,ee,vt),Q=Nt,dt=ee,ct=vt)},setOp:function(Nt,ee,vt){(ut!==Nt||Lt!==ee||ie!==vt)&&(n.stencilOp(Nt,ee,vt),ut=Nt,Lt=ee,ie=vt)},setLocked:function(Nt){L=Nt},setClear:function(Nt){lt!==Nt&&(n.clearStencil(Nt),lt=Nt)},reset:function(){L=!1,et=null,Q=null,dt=null,ct=null,ut=null,Lt=null,ie=null,lt=null}}}let r=new e,o=new i,l=new s,c={},a=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,M=null,R=null,S=null,A=null,E=null,x=null,b=new Zt(0,0,0),I=0,P=!1,O=null,H=null,Y=null,C=null,Z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),T=!1,N=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(D)[1]),T=N>=1):D.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),T=N>=2);let z=null,$={},rt=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),K=new Be().fromArray(rt),at=new Be().fromArray(Tt);function pt(L,et,Q,dt){let ct=new Uint8Array(4),ut=n.createTexture();n.bindTexture(L,ut),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Q;Lt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(et+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return ut}let Dt={};Dt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),St(n.DEPTH_TEST),o.setFunc(zr),On(!1),He(pu),St(n.CULL_FACE),mn(ir);function St(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Qt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ye(L,et){return f[L]!==et?(n.bindFramebuffer(L,et),f[L]=et,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=et),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=et),!0):!1}function kt(L,et){let Q=g,dt=!1;if(L){Q=d.get(et),Q===void 0&&(Q=[],d.set(et,Q));let ct=L.textures;if(Q.length!==ct.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Lt=ct.length;ut<Lt;ut++)Q[ut]=n.COLOR_ATTACHMENT0+ut;Q.length=ct.length,dt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,dt=!0);dt&&n.drawBuffers(Q)}function Te(L){return _!==L?(n.useProgram(L),_=L,!0):!1}let Ce={[sr]:n.FUNC_ADD,[np]:n.FUNC_SUBTRACT,[ip]:n.FUNC_REVERSE_SUBTRACT};Ce[sp]=n.MIN,Ce[rp]=n.MAX;let ce={[op]:n.ZERO,[ap]:n.ONE,[lp]:n.SRC_COLOR,[_u]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[cp]:n.ONE_MINUS_SRC_COLOR,[yu]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[up]:n.ONE_MINUS_DST_ALPHA,[mp]:n.CONSTANT_COLOR,[gp]:n.ONE_MINUS_CONSTANT_COLOR,[xp]:n.CONSTANT_ALPHA,[_p]:n.ONE_MINUS_CONSTANT_ALPHA};function mn(L,et,Q,dt,ct,ut,Lt,ie,lt,Nt){if(L===ir){p===!0&&(Qt(n.BLEND),p=!1);return}if(p===!1&&(St(n.BLEND),p=!0),L!==ep){if(L!==m||Nt!==P){if((M!==sr||A!==sr)&&(n.blendEquation(n.FUNC_ADD),M=sr,A=sr),Nt)switch(L){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFunc(n.ONE,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",L);break}else switch(L){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",L);break}R=null,S=null,E=null,x=null,b.set(0,0,0),I=0,m=L,P=Nt}return}ct=ct||et,ut=ut||Q,Lt=Lt||dt,(et!==M||ct!==A)&&(n.blendEquationSeparate(Ce[et],Ce[ct]),M=et,A=ct),(Q!==R||dt!==S||ut!==E||Lt!==x)&&(n.blendFuncSeparate(ce[Q],ce[dt],ce[ut],ce[Lt]),R=Q,S=dt,E=ut,x=Lt),(ie.equals(b)===!1||lt!==I)&&(n.blendColor(ie.r,ie.g,ie.b,lt),b.copy(ie),I=lt),m=L,P=!1}function Qe(L,et){L.side===We?Qt(n.CULL_FACE):St(n.CULL_FACE);let Q=L.side===Ln;et&&(Q=!Q),On(Q),L.blending===Kr&&L.transparent===!1?mn(ir):mn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;l.setTest(dt),dt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),an(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):Qt(n.SAMPLE_ALPHA_TO_COVERAGE)}function On(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function He(L){L!==Qd?(St(n.CULL_FACE),L!==H&&(L===pu?n.cullFace(n.BACK):L===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qt(n.CULL_FACE),H=L}function Ei(L){L!==Y&&(T&&n.lineWidth(L),Y=L)}function an(L,et,Q){L?(St(n.POLYGON_OFFSET_FILL),(C!==et||Z!==Q)&&(C=et,Z=Q,o.getReversed()&&(et=-et,Q=-Q),n.polygonOffset(et,Q))):Qt(n.POLYGON_OFFSET_FILL)}function Qn(L){L?St(n.SCISSOR_TEST):Qt(n.SCISSOR_TEST)}function jn(L){L===void 0&&(L=n.TEXTURE0+V-1),z!==L&&(n.activeTexture(L),z=L)}function ti(L,et,Q){Q===void 0&&(z===null?Q=n.TEXTURE0+V-1:Q=z);let dt=$[Q];dt===void 0&&(dt={type:void 0,texture:void 0},$[Q]=dt),(dt.type!==L||dt.texture!==et)&&(z!==Q&&(n.activeTexture(Q),z=Q),n.bindTexture(L,et||Dt[L]),dt.type=L,dt.texture=et)}function k(){let L=$[z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ei(){try{n.compressedTexImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Oe(){try{n.compressedTexImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Fe(){try{n.texSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function yt(){try{n.texSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function je(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Yt(){try{n.texStorage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function w(){try{n.texStorage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function y(){try{n.texImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function W(){try{n.texImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function ot(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function nt(L,et){h[L]!==et&&(n.pixelStorei(L,et),h[L]=et)}function ht(L){K.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function gt(L){at.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function j(L,et){let Q=a.get(et);Q===void 0&&(Q=new WeakMap,a.set(et,Q));let dt=Q.get(L);dt===void 0&&(dt=n.getUniformBlockIndex(et,L.name),n.uniformBlockBinding(et,dt,dt),Q.set(L,dt))}function tt(L,et,Q){let ct=a.get(et).get(L);c[ct]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ct,Q),c[ct]=Q)}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,$={},f={},c={},d=new WeakMap,g=[],_=null,p=!1,m=null,M=null,R=null,S=null,A=null,E=null,x=null,b=new Zt(0,0,0),I=0,P=!1,O=null,H=null,Y=null,C=null,Z=null,K.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:St,disable:Qt,bindFramebuffer:Ye,drawBuffers:kt,useProgram:Te,setBlending:mn,setMaterial:Qe,setFlipSided:On,setCullFace:He,setLineWidth:Ei,setPolygonOffset:an,setScissorTest:Qn,activeTexture:jn,bindTexture:ti,unbindTexture:k,compressedTexImage2D:ei,compressedTexImage3D:Oe,texImage2D:y,texImage3D:W,pixelStorei:nt,getParameter:ot,updateUBOMapping:j,uniformBlockBinding:tt,texStorage2D:Yt,texStorage3D:w,texSubImage2D:Fe,texSubImage3D:yt,compressedTexSubImage2D:je,compressedTexSubImage3D:Ut,scissor:ht,viewport:gt,reset:ft}}function t1(n,t,e,i,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Ot,u=new WeakMap,h=new Set,f,d=new WeakMap,g=new Set,_=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):Vo("canvas")}function M(w,y,W){let ot=1,nt=Yt(w);if((nt.width>W||nt.height>W)&&(ot=W/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ht=Math.floor(ot*nt.width),gt=Math.floor(ot*nt.height);f===void 0&&(f=m(ht,gt));let j=y?m(ht,gt):f;return j.width=ht,j.height=gt,j.getContext("2d").drawImage(w,0,0,ht,gt),zt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+gt+")."),j}else return"data"in w&&zt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function R(w){return w.generateMipmaps}function S(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,y,W,ot,nt,ht=!1){if(w!==null){if(n[w]!==void 0)return n[w];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let gt;ot&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8),W===n.UNSIGNED_SHORT&&gt&&(j=gt.R16_EXT),W===n.SHORT&&gt&&(j=gt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),y===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8),W===n.UNSIGNED_SHORT&&gt&&(j=gt.RG16_EXT),W===n.SHORT&&gt&&(j=gt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(W===n.UNSIGNED_SHORT&&gt&&(j=gt.RGB16_EXT),W===n.SHORT&&gt&&(j=gt.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){let tt=ht?Go:fe.getTransfer(nt);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=tt===be?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&gt&&(j=gt.RGBA16_EXT),W===n.SHORT&&gt&&(j=gt.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(w,y){let W;return w?y===null||y===xi||y===or?W=n.DEPTH24_STENCIL8:y===si?W=n.DEPTH32F_STENCIL8:y===jr&&(W=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===or?W=n.DEPTH_COMPONENT24:y===si?W=n.DEPTH_COMPONENT32F:y===jr&&(W=n.DEPTH_COMPONENT16),W}function b(w,y){return R(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function I(w){let y=new WeakRef(w);i.get(w).__ref=y,g.add(y),_.register(w,y,y)}function P(w){let y=i.get(w).__ref;y!==void 0&&(g.delete(y),_.unregister(y))}function O(w){Y(w.target)}function H(w){C(w.target)}function Y(w){w.removeEventListener("dispose",O),P(w),V(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function C(w){w.removeEventListener("dispose",H),P(w),N(w)}function Z(){for(let w of g){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):Y(y))}g.clear(),h.clear()}function V(w){let y=i.get(w);if(y.__webglInit===void 0)return;let W=w.source,ot=d.get(W);if(ot){let nt=ot[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(w),Object.keys(ot).length===0&&d.delete(W)}i.remove(w)}function T(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let W=w.source,ot=d.get(W);delete ot[y.__cacheKey],o.memory.textures--}function N(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let W=w.depthTexture;if(W&&W.renderTarget===w&&Y(W),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let ht=0;ht<y.__webglFramebuffer[nt].length;ht++)n.deleteFramebuffer(y.__webglFramebuffer[nt][ht]);else n.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[nt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ot=w.textures;for(let nt=0,ht=ot.length;nt<ht;nt++){let gt=i.get(ot[nt]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(ot[nt])}i.remove(w)}let D=0;function z(){D=0}function $(){return D}function rt(w){D=w}function Tt(){let w=D;return w>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function K(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function at(w,y){let W=i.get(w);if(w.isVideoTexture&&je(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let ot=w.image;if(ot===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(W,w,y);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+y)}function pt(w,y){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){Qe(W,w,y);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+y)}function Dt(w,y){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){Qe(W,w,y);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+y)}function St(w,y){let W=i.get(w);if(w.version>0&&W.__version!==w.version){On(W,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+y)}let Qt={[Hr]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},Ye={[un]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[ac]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},kt={[Ep]:n.NEVER,[Ou]:n.ALWAYS,[wp]:n.LESS,[Nu]:n.LEQUAL,[Ap]:n.EQUAL,[Uu]:n.GEQUAL,[Rp]:n.GREATER,[Cp]:n.NOTEQUAL};function Te(w,y){if(y.type===si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===ac||y.magFilter===da||y.magFilter===$i||y.minFilter===Pn||y.minFilter===ac||y.minFilter===da||y.minFilter===$i)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Qt[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Qt[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Qt[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ye[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ye[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,kt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==da&&y.minFilter!==$i||y.type===si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ce(w,y){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",O),I(y));let ot=y.source,nt=d.get(ot);nt===void 0&&(nt={},d.set(ot,nt));let ht=K(y);if(ht!==w.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[ht].usedTimes++;let gt=nt[w.__cacheKey];gt!==void 0&&(nt[w.__cacheKey].usedTimes--,gt.usedTimes===0&&T(y)),w.__cacheKey=ht,w.__webglTexture=nt[ht].texture}return W}function ce(w,y,W){return Math.floor(Math.floor(w/W)/y)}function mn(w,y,W,ot){let ht=w.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,W,ot,y.data);else{ht.sort((L,et)=>L.start-et.start);let gt=0;for(let L=1;L<ht.length;L++){let et=ht[gt],Q=ht[L],dt=et.start+et.count,ct=ce(Q.start,y.width,4),ut=ce(et.start,y.width,4);Q.start<=dt+1&&ct===ut&&ce(Q.start+Q.count-1,y.width,4)===ct?et.count=Math.max(et.count,Q.start+Q.count-et.start):(++gt,ht[gt]=Q)}ht.length=gt+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),ft=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let L=0,et=ht.length;L<et;L++){let Q=ht[L],dt=Math.floor(Q.start/4),ct=Math.ceil(Q.count/4),ut=dt%y.width,Lt=Math.floor(dt/y.width),ie=ct,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(n.TEXTURE_2D,0,ut,Lt,ie,lt,W,ot,y.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,ft)}}function Qe(w,y,W){let ot=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ot=n.TEXTURE_3D);let nt=Ce(w,y),ht=y.source;e.bindTexture(ot,w.__webglTexture,n.TEXTURE0+W);let gt=i.get(ht);if(ht.version!==gt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let lt=fe.getPrimaries(fe.workingColorSpace),Nt=y.colorSpace===Qi?null:fe.getPrimaries(y.colorSpace),ee=y.colorSpace===Qi||lt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let tt=M(y.image,!1,s.maxTextureSize);tt=Ut(y,tt);let ft=r.convert(y.format,y.colorSpace),L=r.convert(y.type),et=E(y.internalFormat,ft,L,y.normalized,y.colorSpace,y.isVideoTexture);Te(ot,y);let Q,dt=y.mipmaps,ct=y.isVideoTexture!==!0,ut=gt.__version===void 0||nt===!0,Lt=ht.dataReady,ie=b(y,tt);if(y.isDepthTexture)et=x(y.format===Ki,y.type),ut&&(ct?e.texStorage2D(n.TEXTURE_2D,1,et,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,et,tt.width,tt.height,0,ft,L,null));else if(y.isDataTexture)if(dt.length>0){ct&&ut&&e.texStorage2D(n.TEXTURE_2D,ie,et,dt[0].width,dt[0].height);for(let lt=0,Nt=dt.length;lt<Nt;lt++)Q=dt[lt],ct?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,ft,L,Q.data):e.texImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,ft,L,Q.data);y.generateMipmaps=!1}else ct?(ut&&e.texStorage2D(n.TEXTURE_2D,ie,et,tt.width,tt.height),Lt&&mn(y,tt,ft,L)):e.texImage2D(n.TEXTURE_2D,0,et,tt.width,tt.height,0,ft,L,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ct&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ie,et,dt[0].width,dt[0].height,tt.depth);for(let lt=0,Nt=dt.length;lt<Nt;lt++)if(Q=dt[lt],y.format!==yi)if(ft!==null)if(ct){if(Lt)if(y.layerUpdates.size>0){let ee=Gu(Q.width,Q.height,y.format,y.type);for(let vt of y.layerUpdates){let Ee=Q.data.subarray(vt*ee/Q.data.BYTES_PER_ELEMENT,(vt+1)*ee/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,vt,Q.width,Q.height,1,ft,Ee)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,tt.depth,ft,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,et,Q.width,Q.height,tt.depth,0,Q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Q.width,Q.height,tt.depth,ft,L,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,et,Q.width,Q.height,tt.depth,0,ft,L,Q.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ct&&ut&&e.texStorage2D(n.TEXTURE_2D,ie,et,dt[0].width,dt[0].height);for(let lt=0,Nt=dt.length;lt<Nt;lt++)Q=dt[lt],y.format!==yi?ft!==null?ct?Lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,ft,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,Q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Q.width,Q.height,ft,L,Q.data):e.texImage2D(n.TEXTURE_2D,lt,et,Q.width,Q.height,0,ft,L,Q.data)}else if(y.isDataArrayTexture)if(ct){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ie,et,tt.width,tt.height,tt.depth),Lt)if(y.layerUpdates.size>0){let lt=Gu(tt.width,tt.height,y.format,y.type);for(let Nt of y.layerUpdates){let ee=tt.data.subarray(Nt*lt/tt.data.BYTES_PER_ELEMENT,(Nt+1)*lt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,tt.width,tt.height,1,ft,L,ee)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,L,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,et,tt.width,tt.height,tt.depth,0,ft,L,tt.data);else if(y.isData3DTexture)ct?(ut&&e.texStorage3D(n.TEXTURE_3D,ie,et,tt.width,tt.height,tt.depth),Lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,L,tt.data)):e.texImage3D(n.TEXTURE_3D,0,et,tt.width,tt.height,tt.depth,0,ft,L,tt.data);else if(y.isFramebufferTexture){if(ut)if(ct)e.texStorage2D(n.TEXTURE_2D,ie,et,tt.width,tt.height);else{let lt=tt.width,Nt=tt.height;for(let ee=0;ee<ie;ee++)e.texImage2D(n.TEXTURE_2D,ee,et,lt,Nt,0,ft,L,null),lt>>=1,Nt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),tt.parentNode!==lt){lt.appendChild(tt),h.add(y),lt.onpaint=Nt=>{let ee=Nt.changedElements;for(let vt of h)ee.includes(vt.image)&&(vt.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let ee=n.RGBA,vt=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ee,vt,Ee,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ct&&ut){let lt=Yt(dt[0]);e.texStorage2D(n.TEXTURE_2D,ie,et,lt.width,lt.height)}for(let lt=0,Nt=dt.length;lt<Nt;lt++)Q=dt[lt],ct?Lt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ft,L,Q):e.texImage2D(n.TEXTURE_2D,lt,et,ft,L,Q);y.generateMipmaps=!1}else if(ct){if(ut){let lt=Yt(tt);e.texStorage2D(n.TEXTURE_2D,ie,et,lt.width,lt.height)}Lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,L,tt)}else e.texImage2D(n.TEXTURE_2D,0,et,ft,L,tt);R(y)&&y.mipmapsAutoUpdate===!0&&S(ot),gt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function On(w,y,W){if(y.image.length!==6)return;let ot=Ce(w,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+W);let ht=i.get(nt);if(nt.version!==ht.__version||ot===!0){e.activeTexture(n.TEXTURE0+W);let gt=fe.getPrimaries(fe.workingColorSpace),j=y.colorSpace===Qi?null:fe.getPrimaries(y.colorSpace),tt=y.colorSpace===Qi||gt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ft=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,et=[];for(let vt=0;vt<6;vt++)!ft&&!L?et[vt]=M(y.image[vt],!0,s.maxCubemapSize):et[vt]=L?y.image[vt].image:y.image[vt],et[vt]=Ut(y,et[vt]);let Q=et[0],dt=r.convert(y.format,y.colorSpace),ct=r.convert(y.type),ut=E(y.internalFormat,dt,ct,y.normalized,y.colorSpace),Lt=y.isVideoTexture!==!0,ie=ht.__version===void 0||ot===!0,lt=nt.dataReady,Nt=b(y,Q);Te(n.TEXTURE_CUBE_MAP,y);let ee;if(y.isDepthTexture){if(ut=x(y.format===Ki,y.type),ie)if(Lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ut,Q.width,Q.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ut,Q.width,Q.height,0,dt,ct,null)}else if(ft){Lt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ut,Q.width,Q.height);for(let vt=0;vt<6;vt++){ee=et[vt].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){let ln=ee[Ee];y.format!==yi?dt!==null?Lt?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee,0,0,ln.width,ln.height,dt,ln.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee,ut,ln.width,ln.height,0,ln.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee,0,0,ln.width,ln.height,dt,ct,ln.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee,ut,ln.width,ln.height,0,dt,ct,ln.data)}}}else{if(ee=y.mipmaps,Lt&&ie){ee.length>0&&Nt++;let vt=Yt(et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ut,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(L){Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,et[vt].width,et[vt].height,dt,ct,et[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ut,et[vt].width,et[vt].height,0,dt,ct,et[vt].data);for(let Ee=0;Ee<ee.length;Ee++){let fs=ee[Ee].image[vt].image;Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee+1,0,0,fs.width,fs.height,dt,ct,fs.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee+1,ut,fs.width,fs.height,0,dt,ct,fs.data)}}else{Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,ct,et[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ut,dt,ct,et[vt]);for(let Ee=0;Ee<ee.length;Ee++){let ln=ee[Ee];Lt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee+1,0,0,dt,ct,ln.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ee+1,ut,dt,ct,ln.image[vt])}}}R(y)&&y.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ht.__version=nt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function He(w,y,W,ot,nt,ht){let gt=r.convert(W.format,W.colorSpace),j=r.convert(W.type),tt=E(W.internalFormat,gt,j,W.normalized,W.colorSpace),ft=i.get(y),L=i.get(W);if(L.__renderTarget=y,!ft.__hasExternalTextures){let et=Math.max(1,y.width>>ht),Q=Math.max(1,y.height>>ht);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,tt,et,Q,y.depth,0,gt,j,null):e.texImage2D(nt,ht,tt,et,Q,0,gt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),yt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,nt,L.__webglTexture,0,Fe(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,nt,L.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ei(w,y,W){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let ot=y.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,ht=x(y.stencilBuffer,nt),gt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(y),ht,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(y),ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,w)}else{let ot=y.textures;for(let nt=0;nt<ot.length;nt++){let ht=ot[nt],gt=r.convert(ht.format,ht.colorSpace),j=r.convert(ht.type),tt=E(ht.internalFormat,gt,j,ht.normalized,ht.colorSpace);yt(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe(y),tt,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe(y),tt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,tt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function an(w,y,W){let ot=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(y.depthTexture);nt.__renderTarget=y;let ht=ot?y.depthTexture.image[0]:y.depthTexture.image;(!nt.__webglTexture||ht.width!==y.width||ht.height!==y.height)&&(ht.width=y.width,ht.height=y.height,y.depthTexture.needsUpdate=!0),ot?St(y.depthTexture,0):at(y.depthTexture,0);let gt=nt.__webglTexture,j=Fe(y),tt=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,ft=y.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===qi)yt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,tt,gt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ft,tt,gt,0);else if(y.depthTexture.format===Ki)yt(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,tt,gt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ft,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qn(w){let y=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let ot=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ot){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=ot}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let ot=0;ot<6;ot++)an(y.__webglFramebuffer[ot],w,ot);else w.texture.mipmaps.length>0?an(y.__webglFramebuffer[0],w,0):an(y.__webglFramebuffer,w,0);else if(W){y.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ot]),y.__webglDepthbuffer[ot]===void 0)y.__webglDepthbuffer[ot]=n.createRenderbuffer(),Ei(y.__webglDepthbuffer[ot],w,!1);else{let nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ht)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ei(y.__webglDepthbuffer,w,!1);else{let nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jn(w,y,W){let ot=i.get(w);y!==void 0&&He(ot.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Qn(w)}function ti(w){let y=w.texture,W=i.get(w),ot=i.get(y);w.addEventListener("dispose",H),I(w);let nt=w.textures,ht=w.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=y.version,o.memory.textures++),ht){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let tt=0;tt<y.mipmaps.length;tt++)W.__webglFramebuffer[j][tt]=n.createFramebuffer()}else W.__webglFramebuffer[j]=n.createFramebuffer()}else{if(y.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)W.__webglFramebuffer[j]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(gt)for(let j=0,tt=nt.length;j<tt;j++){let ft=i.get(nt[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<nt.length;j++){let tt=nt[j];W.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let ft=r.convert(tt.format,tt.colorSpace),L=r.convert(tt.type),et=E(tt.internalFormat,ft,L,tt.normalized,tt.colorSpace,w.isXRRenderTarget===!0),Q=Fe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,et,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,W.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ei(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),Te(n.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)He(W.__webglFramebuffer[j][tt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else He(W.__webglFramebuffer[j],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);R(y)?S(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let j=0,tt=nt.length;j<tt;j++){let ft=nt[j],L=i.get(ft),et=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,L.__webglTexture),Te(et,ft),He(W.__webglFramebuffer,w,ft,n.COLOR_ATTACHMENT0+j,et,0),R(ft)&&S(et)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,ot.__webglTexture),Te(j,y),y.mipmaps.length>0)for(let tt=0;tt<y.mipmaps.length;tt++)He(W.__webglFramebuffer[tt],w,y,n.COLOR_ATTACHMENT0,j,tt);else He(W.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,j,0);R(y)?S(j):y.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&Qn(w)}function k(w){let y=w.textures;for(let W=0,ot=y.length;W<ot;W++){let nt=y[W];if(R(nt)&&nt.mipmapsAutoUpdate===!0){let ht=A(w),gt=i.get(nt).__webglTexture;e.bindTexture(ht,gt),S(ht),e.unbindTexture()}}}let ei=[];function Oe(w){if(w.samples>0){if(yt(w)===!1){let y=w.textures,W=w.width,ot=w.height,nt=n.COLOR_BUFFER_BIT,ht=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(w),j=y.length>1;if(j)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);let L=i.get(y[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,W,ot,0,0,W,ot,nt,n.NEAREST),c===!0&&(ei.length=0,ei.push(n.COLOR_ATTACHMENT0+ft),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ei.push(ht),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ei))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);let L=i.get(y[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,L,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Fe(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function je(w){let y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Ut(w,y){let W=w.colorSpace,ot=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Ho&&W!==Qi&&(fe.getTransfer(W)===be?(ot!==yi||nt!==kn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",W)),y}function Yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(a.width=w.naturalWidth||w.width,a.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(a.width=w.displayWidth,a.height=w.displayHeight):(a.width=w.width,a.height=w.height),a}this.allocateTextureUnit=Tt,this.resetTextureUnits=z,this.getTextureUnits=$,this.setTextureUnits=rt,this.setTexture2D=at,this.setTexture2DArray=pt,this.setTexture3D=Dt,this.setTextureCube=St,this.rebindTextures=jn,this.setupRenderTarget=ti,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Qn,this.setupFrameBufferTexture=He,this.useMultisampledRTT=yt,this.dispose=Z}function e1(n,t){function e(i,s=Qi){let r,o=fe.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ru)return n.BYTE;if(i===Cu)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Lu)return n.ALPHA;if(i===Du)return n.RGB;if(i===yi)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===uc)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===As)return n.RG;if(i===dc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===xa)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===xc||i===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===vc||i===Mc||i===Sc||i===bc||i===_a||i===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===vc)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sc)return r.COMPRESSED_R11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_a)return r.COMPRESSED_RG11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ec||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===zc||i===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gc||i===Vc||i===ya||i===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
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

}`,nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Pi({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new _e(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sf=class extends Ri{constructor(t,e){super();let i=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,u=null,h=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new nf,m={},M=e.getContextAttributes(),R=null,S=null,A=[],E=[],x=new Ot,b=null,I=null,P=new xn;P.viewport=new Be;let O=new xn;O.viewport=new Be;let H=[P,O],Y=new ic,C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=A[K];return at===void 0&&(at=new Xr,A[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=A[K];return at===void 0&&(at=new Xr,A[K]=at),at.getGripSpace()},this.getHand=function(K){let at=A[K];return at===void 0&&(at=new Xr,A[K]=at),at.getHandSpace()};function V(K){let at=E.indexOf(K.inputSource);if(at===-1)return;let pt=A[at];pt!==void 0&&(pt.update(K.inputSource,K.frame,a||o),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function T(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",N);for(let K=0;K<A.length;K++){let at=E[K];at!==null&&(E[K]=null,A[K].disconnect(at))}C=null,Z=null,p.reset();for(let K in m)delete m[K];if(t.setRenderTarget(R),d=null,f=null,h=null,s=null,S=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),I!==null){let K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(K){a=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",T),s.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Ki:qi,Dt=M.stencil?or:xi);let Qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Xn(f.textureWidth,f.textureHeight,{format:yi,type:kn,depthTexture:new Zi(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xn(d.framebufferWidth,d.framebufferHeight,{format:yi,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Tt.setContext(s),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(K){for(let at=0;at<K.removed.length;at++){let pt=K.removed[at],Dt=E.indexOf(pt);Dt>=0&&(E[Dt]=null,A[Dt].disconnect(pt))}for(let at=0;at<K.added.length;at++){let pt=K.added[at],Dt=E.indexOf(pt);if(Dt===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=E.length){E.push(pt),Dt=Qt;break}else if(E[Qt]===null){E[Qt]=pt,Dt=Qt;break}if(Dt===-1)break}let St=A[Dt];St&&St.connect(pt)}}function D(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let at=K.near,pt=K.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(pt=p.depthFar)),Y.near=O.near=P.near=at,Y.far=O.far=P.far=pt,(C!==Y.near||Z!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),C=Y.near,Z=Y.far),Y.layers.mask=K.layers.mask|6,P.layers.mask=Y.layers.mask&-5,O.layers.mask=Y.layers.mask&-3;let Dt=K.parent,St=Y.cameras;D(Y,Dt);for(let Qt=0;Qt<St.length;Qt++)D(St[Qt],Dt);Y.projectionMatrix.copy(P.projectionMatrix),Y.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),z(K,Y,Dt)};function z(K,at,pt){pt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(K){return m[K]};let $=null;function rt(K,at){if(u=at.getViewerPose(a||o),g=at,u!==null){let pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Dt=!1;pt.length!==Y.cameras.length&&(Y.cameras.length=0,Dt=!0);for(let kt=0;kt<pt.length;kt++){let Te=pt[kt],Ce=null;if(d!==null)Ce=d.getViewport(Te);else{let mn=h.getViewSubImage(f,Te);Ce=mn.viewport,kt===0&&(t.setRenderTargetTextures(S,mn.colorTexture,mn.depthStencilTexture),t.setRenderTarget(S))}let ce=H[kt];ce===void 0&&(ce=new xn,ce.layers.enable(kt),ce.viewport=new Be,H[kt]=ce),ce.matrix.fromArray(Te.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Te.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),kt===0&&(Y.matrix.copy(ce.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Dt===!0&&Y.cameras.push(ce)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let kt=h.getDepthInformation(pt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let kt=0;kt<pt.length;kt++){let Te=pt[kt].camera;if(Te){let Ce=m[Te];Ce||(Ce=new sa,m[Te]=Ce);let ce=h.getCameraImage(Te);Ce.sourceTexture=ce}}}}for(let pt=0;pt<A.length;pt++){let Dt=E[pt],St=A[pt];Dt!==null&&St!==void 0&&St.update(Dt,at,a||o)}$&&$(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}let Tt=new cm;Tt.setAnimationLoop(rt),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}},s1=new Me,ym=new qt;ym.set(-1,0,0,0,1,0,0,0,1);function r1(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ku(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&l(p,m)):m.isPointsMaterial?c(p,m,M,R):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),R=M.envMap,S=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ym),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function l(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o1(n,t,e,i){let s={},r={};function o(M,R){let S=R.program;i.uniformBlockBinding(M,S,s[M.id])}function l(M,R){let S=s[M.id];S===void 0&&(g(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",p));let A=R.program;i.updateUBOMapping(M,A);let E=t.render.frame;r[M.id]!==E&&(a(M),r[M.id]=E)}function c(M){let R=n.createBuffer(),S=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function a(M){let R=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,x=S.length;E<x;E++){let b=S[E];if(Array.isArray(b))for(let I=0,P=b.length;I<P;I++)u(b[I],E,I,A);else u(b,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,R,S,A){if(f(M,R,S,A)===!0){let E=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){let P=x[I],O=_(P,!0);h(P,M.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,M.__data)}}function h(M,R,S){typeof M=="number"||typeof M=="boolean"?R[S]=M:M.isMatrix3?(R[S]=M.elements[0],R[S+1]=M.elements[1],R[S+2]=M.elements[2],R[S+3]=0,R[S+4]=M.elements[3],R[S+5]=M.elements[4],R[S+6]=M.elements[5],R[S+7]=0,R[S+8]=M.elements[6],R[S+9]=M.elements[7],R[S+10]=M.elements[8],R[S+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-S),S):M.toArray(R,S)}function f(M,R,S,A){let E=M.value,x=R+"_"+S;if(Array.isArray(E)){A[x]===void 0&&(A[x]=[]);let b=A[x],I=!1;for(let P=0;P<E.length;P++)d(E[P],b,P)===!0&&(I=!0);return I}return d(E,A,x)}function d(M,R,S){if(R[S]===void 0)return typeof M=="number"||typeof M=="boolean"?R[S]=M:ArrayBuffer.isView(M)?R[S]=M.slice():R[S]=M.clone(),!0;{let A=R[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let R=M.uniforms,S=0,A=16;for(let x=0,b=R.length;x<b;x++){let I=Array.isArray(R[x])?R[x]:[R[x]];for(let P=0,O=I.length;P<O;P++){let H=I[P],Y=Array.isArray(H.value)?H.value:[H.value],C=Array.isArray(R[x])||Array.isArray(H.value),Z=S;for(let T=0,N=Y.length;T<N;T++){let D=Y[T],z=_(D,C),$=S%A,rt=$%z.boundary,Tt=$+rt;S+=rt,Tt!==0&&A-Tt<z.storage&&(S+=A-Tt),T===0&&(Z=S),S+=z.storage}let V=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new V((S-Z)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Z}}let E=S%A;return E>0&&(S+=A-E),M.__size=S,M.__cache={},this}function _(M,R){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let R=M.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:l,dispose:m}}var a1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function l1(){return Li===null&&(Li=new ta(a1,16,16,As,_i),Li.name="DFG_LUT",Li.minFilter=Pn,Li.magFilter=Pn,Li.wrapS=Ai,Li.wrapT=Ai,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var $c=class{constructor(t={}){let{canvas:e=Pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=kn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let _=d,p=new Set([pc,dc,fc]),m=new Set([kn,xi,jr,or,cc,hc]),M=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,E=null,x=[],b=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,H=null,Y=null,C=null,Z=null;this._outputColorSpace=Cn;let V=0,T=0,N=null,D=-1,z=null,$=new Be,rt=new Be,Tt=null,K=new Zt(0),at=0,pt=e.width,Dt=e.height,St=1,Qt=null,Ye=null,kt=new Be(0,0,pt,Dt),Te=new Be(0,0,pt,Dt),Ce=!1,ce=new vs,mn=new Gl,Qe=!1,On=!1,He=new Me,Ei=new B,an=new Be,Qn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jn=!1;function ti(){return N===null?St:1}let k=i;function ei(v,U){return e.getContext(v,U)}let Oe,Fe,yt,je,Ut,Yt,w,y,W,ot,nt,ht,gt,j,tt,ft,L,et,Q,dt,ct,ut,Lt;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){let U="webgl2";if(k=ei(U,v),k===null)throw ei(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(v){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Gt("WebGLRenderer: "+v.message),v}function ie(){Oe=new yv(k),Oe.init(),ct=new e1(k,Oe),Fe=new lv(k,Oe,t,ct),yt=new jM(k,Oe),Fe.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),Y=k.createFramebuffer(),C=k.createFramebuffer(),Z=k.createFramebuffer(),je=new Sv(k),Ut=new kM,Yt=new t1(k,Oe,yt,Ut,Fe,ct,je),w=new _v(P),y=new Tx(k),ut=new ov(k,y),W=new vv(k,y,je,ut),ot=new Tv(k,W,y,ut,je),et=new bv(k,Fe,Yt),tt=new cv(Ut),nt=new BM(P,w,Oe,Fe,ut,tt),ht=new r1(P,Ut),gt=new HM,j=new YM(Oe),L=new rv(P,w,yt,ot,g,c),ft=new QM(P,ot,Fe),Lt=new o1(k,je,Fe,yt),Q=new av(k,Oe,je),dt=new Mv(k,Oe,je),je.programs=nt.programs,P.capabilities=Fe,P.extensions=Oe,P.properties=Ut,P.renderLists=gt,P.shadowMap=ft,P.state=yt,P.info=je}_!==kn&&(I=new wv(_,e.width,e.height,l,s,r));let lt=new sf(P,k);this.xr=lt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(v){v!==void 0&&(St=v,this.setSize(pt,Dt,!1))},this.getSize=function(v){return v.set(pt,Dt)},this.setSize=function(v,U,J=!0){if(lt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=v,Dt=U,e.width=Math.floor(v*St),e.height=Math.floor(U*St),J===!0&&(e.style.width=v+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(pt*St,Dt*St).floor()},this.setDrawingBufferSize=function(v,U,J){pt=v,Dt=U,St=J,e.width=Math.floor(v*J),e.height=Math.floor(U*J),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(_===kn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy($)},this.getViewport=function(v){return v.copy(kt)},this.setViewport=function(v,U,J,G){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,U,J,G),yt.viewport($.copy(kt).multiplyScalar(ti()).round())},this.getScissor=function(v){return v.copy(Te)},this.setScissor=function(v,U,J,G){v.isVector4?Te.set(v.x,v.y,v.z,v.w):Te.set(v,U,J,G),yt.scissor(rt.copy(Te).multiplyScalar(ti()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(v){yt.setScissorTest(Ce=v)},this.setOpaqueSort=function(v){Qt=v},this.setTransparentSort=function(v){Ye=v},this.getClearColor=function(v){return v.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,J=!0){let G=0;if(v){let X=!1;if(N!==null){let xt=N.texture.format;X=p.has(xt)}if(X){let xt=N.texture.type,wt=m.has(xt),mt=L.getClearColor(),bt=L.getClearAlpha(),It=mt.r,$t=mt.g,he=mt.b;wt?(M[0]=It,M[1]=$t,M[2]=he,M[3]=bt,k.clearBufferuiv(k.COLOR,0,M)):(R[0]=It,R[1]=$t,R[2]=he,R[3]=bt,k.clearBufferiv(k.COLOR,0,R))}else G|=k.COLOR_BUFFER_BIT}U&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),L.dispose(),gt.dispose(),j.dispose(),Yt.dispose(),Ut.dispose(),w.dispose(),ot.dispose(),W.dispose(),ut.dispose(),Lt.dispose(),nt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",pd),lt.removeEventListener("sessionend",md),Vs.stop()};function Nt(v){v.preventDefault(),Wo("WebGLRenderer: Context Lost."),O=!0}function ee(){Wo("WebGLRenderer: Context Restored."),O=!1;let v=je.autoReset,U=ft.enabled,J=ft.autoUpdate,G=ft.needsUpdate,X=ft.type;ie(),je.autoReset=v,ft.enabled=U,ft.autoUpdate=J,ft.needsUpdate=G,ft.type=X}function vt(v){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ee(v){let U=v.target;U.removeEventListener("dispose",Ee),ln(U)}function ln(v){fs(v),Ut.remove(v)}function fs(v){let U=Ut.get(v).programs;U!==void 0&&(U.forEach(function(J){nt.releaseProgram(J)}),v.isShaderMaterial&&nt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,J,G,X,xt){U===null&&(U=Qn);let wt=X.isMesh&&X.matrixWorld.determinantAffine()<0,mt=Pg(v,U,J,G,X);yt.setMaterial(G,wt);let bt=J.index,It=1;if(G.wireframe===!0){if(bt=W.getWireframeAttribute(J),bt===void 0)return;It=2}let $t=J.drawRange,he=J.attributes.position,Ct=$t.start*It,ue=($t.start+$t.count)*It;xt!==null&&(Ct=Math.max(Ct,xt.start*It),ue=Math.min(ue,(xt.start+xt.count)*It)),bt!==null?(Ct=Math.max(Ct,0),ue=Math.min(ue,bt.count)):he!=null&&(Ct=Math.max(Ct,0),ue=Math.min(ue,he.count));let Ze=ue-Ct;if(Ze<0||Ze===1/0)return;ut.setup(X,G,mt,J,bt);let Le,Pe=Q;if(bt!==null&&(Le=y.get(bt),Pe=dt,Pe.setIndex(Le)),X.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*ti()),Pe.setMode(k.LINES)):Pe.setMode(k.TRIANGLES);else if(X.isLine){let Mn=G.linewidth;Mn===void 0&&(Mn=1),yt.setLineWidth(Mn*ti()),X.isLineSegments?Pe.setMode(k.LINES):X.isLineLoop?Pe.setMode(k.LINE_LOOP):Pe.setMode(k.LINE_STRIP)}else X.isPoints?Pe.setMode(k.POINTS):X.isSprite&&Pe.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Mn=X._multiDrawStarts,Pt=X._multiDrawCounts,An=X._multiDrawCount,ve=bt?y.get(bt).bytesPerElement:1,Ws=Ut.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<An;Sn++)Ws.setValue(k,"_gl_DrawID",Sn),Pe.render(Mn[Sn]/ve,Pt[Sn])}else if(X.isInstancedMesh)Pe.renderInstances(Ct,Ze,X.count);else if(J.isInstancedBufferGeometry){let Mn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pt=Math.min(J.instanceCount,Mn);Pe.renderInstances(Ct,Ze,Pt)}else Pe.render(Ct,Ze)};function dd(v,U,J,G){H!==null&&v.isNodeMaterial&&H.setObject(G,v),Qe===!0&&tt.setState(v,J,!1),v.transparent===!0&&v.side===We&&v.forceSinglePass===!1?(v.side=Ln,v.needsUpdate=!0,Po(v,U,G),v.side=ws,v.needsUpdate=!0,Po(v,U,G),v.side=We):Po(v,U,G)}this.compile=function(v,U,J=null){J===null&&(J=v),H!==null&&H.renderStart(v,U,J),E=j.get(J),E.init(U),b.push(E),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),v!==J&&v.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),On=this.localClippingEnabled,Qe=tt.init(this.clippingPlanes,On),Qe===!0&&tt.setGlobalState(this.clippingPlanes,U),H!==null&&ft.render(E.state.shadowsArray,J,U);let G=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xt=X.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let mt=xt[wt];dd(mt,J,U,X),G.add(mt)}else dd(xt,J,U,X),G.add(xt)}),E=b.pop(),H!==null&&H.renderEnd(),G},this.compileAsync=function(v,U,J=null){let G=this.compile(v,U,J);return new Promise(X=>{function xt(){if(G.forEach(function(wt){let bt=Ut.get(wt).currentProgram;(bt===void 0||bt.isReady())&&G.delete(wt)}),G.size===0){X(v);return}setTimeout(xt,10)}Oe.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Uh=null;function Rg(v){Uh&&Uh(v)}function pd(){Vs.stop()}function md(){Vs.start()}let Vs=new cm;Vs.setAnimationLoop(Rg),typeof self<"u"&&Vs.setContext(self),this.setAnimationLoop=function(v){Uh=v,lt.setAnimationLoop(v),v===null?Vs.stop():Vs.start()},lt.addEventListener("sessionstart",pd),lt.addEventListener("sessionend",md),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(v,U);let J=lt.enabled===!0&&lt.isPresenting===!0,G=I!==null&&(N===null||J)&&I.begin(P,N);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(U),U=lt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,U,N),E=j.get(v,b.length),E.init(U),E.state.textureUnits=Yt.getTextureUnits(),b.push(E),He.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?mn.setFromArrayCamera(U):ce.setFromProjectionMatrix(He,ii,U.reversedDepth),On=this.localClippingEnabled,Qe=tt.init(this.clippingPlanes,On),A=gt.get(v,x.length),A.init(),x.push(A),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let wt=P.xr.getDepthSensingMesh();wt!==null&&Oh(wt,U,-1/0,P.sortObjects)}Oh(v,U,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Qt,Ye),jn=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,jn&&L.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),Qe===!0&&tt.beginShadows();let X=E.state.shadowsArray;if(ft.render(X,v,U),Qe===!0&&tt.endShadows(),(G&&I.hasRenderPass())===!1){let wt=A.opaque,mt=A.transmissive;if(E.setupLights(),U.isArrayCamera){let bt=U.cameras;if(mt.length>0)for(let It=0,$t=bt.length;It<$t;It++){let he=bt[It];xd(wt,mt,v,he)}jn&&L.render(v);for(let It=0,$t=bt.length;It<$t;It++){let he=bt[It];gd(A,v,he,he.viewport)}}else mt.length>0&&xd(wt,mt,v,U),jn&&L.render(v),gd(A,v,U)}N!==null&&T===0&&(Yt.updateMultisampleRenderTarget(N),Yt.updateRenderTargetMipmap(N)),G&&I.end(P),v.isScene===!0&&v.onAfterRender(P,v,U),ut.resetDefaultState(),D=-1,z=null,b.pop(),b.length>0?(E=b[b.length-1],Yt.setTextureUnits(E.state.textureUnits),Qe===!0&&tt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,H!==null&&H.renderEnd()};function Oh(v,U,J,G){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)J=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let wt=U.isArrayCamera?mn:ce;if(!v.frustumCulled||v.intersectsFrustum(wt)){G&&an.setFromMatrixPosition(v.matrixWorld).applyMatrix4(He);let mt=ot.update(v),bt=v.material;bt.visible&&A.push(v,mt,bt,J,an.z,null,U)}}else if(v.isMesh||v.isLine||v.isPoints){let wt=U.isArrayCamera?mn:ce;if(!v.frustumCulled||v.intersectsFrustum(wt)){let mt=ot.update(v),bt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),an.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),an.copy(mt.boundingSphere.center)),an.applyMatrix4(v.matrixWorld).applyMatrix4(He)),Array.isArray(bt)){let It=mt.groups;for(let $t=0,he=It.length;$t<he;$t++){let Ct=It[$t],ue=bt[Ct.materialIndex];ue&&ue.visible&&A.push(v,mt,ue,J,an.z,Ct,U)}}else bt.visible&&A.push(v,mt,bt,J,an.z,null,U)}}}let xt=v.children;for(let wt=0,mt=xt.length;wt<mt;wt++)Oh(xt[wt],U,J,G)}function gd(v,U,J,G){let{opaque:X,transmissive:xt,transparent:wt}=v;E.setupLightsView(J),Qe===!0&&tt.setGlobalState(P.clippingPlanes,J),G&&yt.viewport($.copy(G)),X.length>0&&el(X,U,J),xt.length>0&&el(xt,U,J),wt.length>0&&el(wt,U,J),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function xd(v,U,J,G){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Ct=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Xn(1,1,{generateMipmaps:!0,type:Ct?_i:kn,minFilter:$i,samples:Math.max(4,Fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let xt=E.state.transmissionRenderTarget[G.id],wt=G.viewport||$;xt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),bt=P.getActiveCubeFace(),It=P.getActiveMipmapLevel();P.setRenderTarget(xt),P.getClearColor(K),at=P.getClearAlpha(),at<1&&P.setClearColor(16777215,.5),P.clear(),jn&&L.render(J);let $t=P.toneMapping;P.toneMapping=Ii;let he=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Qe===!0&&tt.setGlobalState(P.clippingPlanes,G),el(v,J,G),Yt.updateMultisampleRenderTarget(xt),Yt.updateRenderTargetMipmap(xt),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ue=0,Ze=U.length;ue<Ze;ue++){let Le=U[ue],{object:Pe,geometry:Mn,material:Pt,group:An}=Le;if(Pt.side===We&&Pe.layers.test(G.layers)){let ve=Pt.side;Pt.side=Ln,Pt.needsUpdate=!0,_d(Pe,J,G,Mn,Pt,An),Pt.side=ve,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Yt.updateMultisampleRenderTarget(xt),Yt.updateRenderTargetMipmap(xt))}P.setRenderTarget(mt,bt,It),P.setClearColor(K,at),he!==void 0&&(G.viewport=he),P.toneMapping=$t}function el(v,U,J){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,xt=v.length;X<xt;X++){let wt=v[X],{object:mt,geometry:bt,group:It}=wt,$t=wt.material;$t.allowOverride===!0&&G!==null&&($t=G),mt.layers.test(J.layers)&&_d(mt,U,J,bt,$t,It)}}function _d(v,U,J,G,X,xt){H!==null&&X.isNodeMaterial&&H.setObject(v,X),v.onBeforeRender(P,U,J,G,X,xt),v.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(P,U,J,G,v,xt),X.transparent===!0&&X.side===We&&X.forceSinglePass===!1?(X.side=Ln,X.needsUpdate=!0,P.renderBufferDirect(J,U,G,X,v,xt),X.side=ws,X.needsUpdate=!0,P.renderBufferDirect(J,U,G,X,v,xt),X.side=We):P.renderBufferDirect(J,U,G,X,v,xt),v.onAfterRender(P,U,J,G,X,xt)}function yd(v){let U=0;for(let J of v)J.texture!==null&&U++;return U}function Po(v,U,J){U.isScene!==!0&&(U=Qn);let G=Ut.get(v),X=E.state.lights,xt=E.state.shadowsArray,wt=X.state.version,mt=nt.getParameters(v,X.state,xt,U,J,E.state.lightProbeGridArray),bt=nt.getProgramCacheKey(mt),It=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let $t=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=w.get(v.envMap||G.environment,$t),G.envMapRotation=G.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,It===void 0&&(v.addEventListener("dispose",Ee),It=new Map,G.programs=It,G.programVariants=new Map);let he=It.get(bt);if(he!==void 0){if(G.currentProgram===he&&G.lightsStateVersion===wt)return Md(v,mt),he}else mt.uniforms=nt.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,J,mt),v.onBeforeCompile(mt,P),he=nt.acquireProgram(mt,bt),It.set(bt,he),G.uniforms=mt.uniforms;let Ct=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ct.clippingPlanes=tt.uniform),Md(v,mt),G.needsLights=Lg(v),G.lightsStateVersion=wt,G.needsLights&&(Ct.ambientLightColor.value=X.state.ambient,Ct.lightProbe.value=X.state.probe,Ct.sunLights.value=X.state.sun,Ct.sunLightShadows.value=X.state.sunShadow,Ct.directionalLights.value=X.state.directional,Ct.directionalLightShadows.value=X.state.directionalShadow,Ct.spotLights.value=X.state.spot,Ct.spotLightShadows.value=X.state.spotShadow,Ct.rectAreaLights.value=X.state.rectArea,Ct.ltc_1.value=X.state.rectAreaLTC1,Ct.ltc_2.value=X.state.rectAreaLTC2,Ct.pointLights.value=X.state.point,Ct.pointLightShadows.value=X.state.pointShadow,Ct.hemisphereLights.value=X.state.hemi,Ct.sunShadowMatrix.value=X.state.sunShadowMatrix,Ct.sunShadowCascade.value=X.state.sunShadowCascade,Ct.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ct.spotLightMatrix.value=X.state.spotLightMatrix,Ct.spotLightMap.value=X.state.spotLightMap,Ct.pointShadowMatrix.value=X.state.pointShadowMatrix),G.numLightProbeGrids=yd(E.state.lightProbeGridArray),G.currentProgram=he,G.uniformsList=null,he}function Cg(v,U,J,G,X){let xt=Ut.get(v),wt=xt.currentProgram.id+","+G+","+X,mt=xt.programVariants.get(wt);return mt===void 0?(mt=Po(v,U,J),xt.programVariants.set(wt,mt)):(xt.currentProgram=mt,xt.uniformsList=null,xt.outputColorSpace=G,xt.toneMapping=X),mt}function vd(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=to.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Md(v,U){let J=Ut.get(v);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function Pg(v,U,J,G,X){U.isScene!==!0&&(U=Qn),Yt.resetTextureUnits();let xt=U.fog,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,mt=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fe.workingColorSpace,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,It=w.get(G.envMap||wt,bt),$t=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,he=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!J.morphAttributes.position,ue=!!J.morphAttributes.normal,Ze=!!J.morphAttributes.color,Le=Ii;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Le=P.toneMapping);let Pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mn=Pe!==void 0?Pe.length:0,Pt=Ut.get(G),An=E.state.lights;if(Qe===!0&&(On===!0||v!==z)){let Ge=v===z&&G.id===D;tt.setState(G,v,Ge)}let ve=!1,Ws=!1;G.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==An.state.version||X.isBatchedMesh&&Pt.batching===!1||!X.isBatchedMesh&&Pt.batching===!0||X.isBatchedMesh&&Pt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pt.instancing===!1||!X.isInstancedMesh&&Pt.instancing===!0||X.isSkinnedMesh&&Pt.skinning===!1||!X.isSkinnedMesh&&Pt.skinning===!0||X.isInstancedMesh&&Pt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pt.instancingMorph===!1&&X.morphTexture!==null||Pt.envMap!==It||G.fog===!0&&Pt.fog!==xt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==tt.numPlanes||Pt.numIntersection!==tt.numIntersection)||Pt.vertexAlphas!==$t||Pt.vertexTangents!==he||Pt.morphTargets!==Ct||Pt.morphNormals!==ue||Pt.morphColors!==Ze||Pt.morphTargetsCount!==Mn||Pt.numLightProbeGrids!==yd(E.state.lightProbeGridArray)?ve=!0:(Pt.outputColorSpace!==mt||Pt.toneMapping!==Le)&&(Ws=!0):(ve=!0,Pt.__version=G.version);let Sn=Pt.currentProgram;(ve===!0||Ws===!0)&&(Sn=Ws===!0?Cg(G,U,X,mt,Le):Po(G,U,X),H&&G.isNodeMaterial&&H.onUpdateProgram(G,Sn,Pt));let nl=!1,ds=!1,Xs=!1,ge=Sn.getUniforms(),gn=Pt.uniforms;if(yt.useProgram(Sn.program)&&(nl=!0,ds=!0,Xs=!0),G.id!==D&&(D=G.id,ds=!0),nl||z!==v){yt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ge.setValue(k,"projectionMatrix",v.projectionMatrix),ge.setValue(k,"viewMatrix",v.matrixWorldInverse);let cn=ge.map.cameraPosition;cn!==void 0&&cn.setValue(k,Ei.setFromMatrixPosition(v.matrixWorld)),Fe.logarithmicDepthBuffer&&ge.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,ds=!0,Xs=!0)}if(Pt.needsLights&&(An.state.sunShadowMap.length>0&&ge.setValue(k,"sunShadowMap",An.state.sunShadowMap,Yt),An.state.directionalShadowMap.length>0&&ge.setValue(k,"directionalShadowMap",An.state.directionalShadowMap,Yt),An.state.spotShadowMap.length>0&&ge.setValue(k,"spotShadowMap",An.state.spotShadowMap,Yt),An.state.pointShadowMap.length>0&&ge.setValue(k,"pointShadowMap",An.state.pointShadowMap,Yt)),X.isSkinnedMesh){ge.setOptional(k,X,"bindMatrix"),ge.setOptional(k,X,"bindMatrixInverse");let Ge=X.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ge.setValue(k,"boneTexture",Ge.boneTexture,Yt))}X.isBatchedMesh&&(ge.setOptional(k,X,"batchingTexture"),ge.setValue(k,"batchingTexture",X._matricesTexture,Yt),ge.setOptional(k,X,"batchingIdTexture"),ge.setValue(k,"batchingIdTexture",X._indirectTexture,Yt),ge.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&ge.setValue(k,"batchingColorTexture",X._colorsTexture,Yt));let ui=J.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&et.update(X,J,Sn),(ds||Pt.receiveShadow!==X.receiveShadow)&&(Pt.receiveShadow=X.receiveShadow,ge.setValue(k,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=l1()),ds){if(ge.setValue(k,"toneMappingExposure",P.toneMappingExposure),Pt.needsLights&&Ig(gn,Xs),xt&&G.fog===!0&&ht.refreshFogUniforms(gn,xt),ht.refreshMaterialUniforms(gn,G,St,Dt,E.state.transmissionRenderTarget[v.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Ge=S,cn=0;for(let Bi of E.state.lightProbeGridArray)Bi.texture!==null&&(Ge.textures[cn]=Bi.texture,Ge.min[cn]=Bi.boundingBox.min,Ge.max[cn]=Bi.boundingBox.max,Ge.resolution[cn]=Bi.resolution,cn++);for(let Bi in Ge)Ge[Bi].length=cn;gn.probesSH.value=Ge.textures,gn.probesMin.value=Ge.min,gn.probesMax.value=Ge.max,gn.probesResolution.value=Ge.resolution}to.upload(k,vd(Pt),gn,Yt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(to.upload(k,vd(Pt),gn,Yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(k,"center",X.center),ge.setValue(k,"modelViewMatrix",X.modelViewMatrix),ge.setValue(k,"normalMatrix",X.normalMatrix),ge.setValue(k,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Ge=G.uniformsGroups;for(let cn=0,Bi=Ge.length;cn<Bi;cn++){let bd=Ge[cn];Lt.update(bd,Sn),Lt.bind(bd,Sn)}}return Sn}function Ig(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Lg(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,U,J){let G=Ut.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ut.get(v.texture).__webglTexture=U,Ut.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:J,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let J=Ut.get(v);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,J=0){N=v,V=U,T=J;let G=null,X=!1,xt=!1;if(v){let mt=Ut.get(v);if(mt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(k.FRAMEBUFFER,mt.__webglFramebuffer),$.copy(v.viewport),rt.copy(v.scissor),Tt=v.scissorTest,yt.viewport($),yt.scissor(rt),yt.setScissorTest(Tt),D=-1;return}else if(mt.__webglFramebuffer===void 0)Yt.setupRenderTarget(v);else if(mt.__hasExternalTextures)Yt.rebindTextures(v,Ut.get(v.texture).__webglTexture,Ut.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let $t=v.depthTexture;if(mt.__boundDepthTexture!==$t){if($t!==null&&Ut.has($t)&&(v.width!==$t.image.width||v.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(v)}}let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(xt=!0);let It=Ut.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[U])?G=It[U][J]:G=It[U],X=!0):v.samples>0&&Yt.useMultisampledRTT(v)===!1?G=Ut.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[J]:G=It,$.copy(v.viewport),rt.copy(v.scissor),Tt=v.scissorTest}else $.copy(kt).multiplyScalar(St).floor(),rt.copy(Te).multiplyScalar(St).floor(),Tt=Ce;if(J!==0&&(G=Y),yt.bindFramebuffer(k.FRAMEBUFFER,G)&&yt.drawBuffers(v,G),yt.viewport($),yt.scissor(rt),yt.setScissorTest(Tt),X){let mt=Ut.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,J)}else if(xt){let mt=U;for(let bt=0;bt<v.textures.length;bt++){let It=Ut.get(v.textures[bt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+bt,It.__webglTexture,J,mt)}}else if(v!==null&&J!==0){let mt=Ut.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mt.__webglTexture,J)}D=-1};function Sd(v){let U=Ut.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=Fe.textureFormatReadable(v.format),U.__typeReadable=Fe.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,J,G,X,xt,wt,mt=0){if(!(v&&v.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0&&(bt=bt[wt],Array.isArray(bt)&&(bt=bt[0])),bt){yt.bindFramebuffer(k.FRAMEBUFFER,bt);try{let It=v.textures[mt],$t=It.format,he=It.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+mt);let Ct=Sd(It);if(Ct.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-G&&J>=0&&J<=v.height-X&&k.readPixels(U,J,G,X,ct.convert($t),ct.convert(he),xt)}finally{let It=N!==null?Ut.get(N).__webglFramebuffer:null;yt.bindFramebuffer(k.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(v,U,J,G,X,xt,wt,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0&&(bt=bt[wt],Array.isArray(bt)&&(bt=bt[0])),bt)if(U>=0&&U<=v.width-G&&J>=0&&J<=v.height-X){yt.bindFramebuffer(k.FRAMEBUFFER,bt);let It=v.textures[mt],$t=It.format,he=It.type;v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+mt);let Ct=Sd(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.bufferData(k.PIXEL_PACK_BUFFER,xt.byteLength,k.STREAM_READ),k.readPixels(U,J,G,X,ct.convert($t),ct.convert(he),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ze=N!==null?Ut.get(N).__webglFramebuffer:null;yt.bindFramebuffer(k.FRAMEBUFFER,Ze);let Le=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Lp(k,Le,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ue),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ue),k.deleteSync(Le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,J=0){let G=Math.pow(2,-J),X=Math.floor(v.image.width*G),xt=Math.floor(v.image.height*G),wt=U!==null?U.x:0,mt=U!==null?U.y:0;Yt.setTexture2D(v,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,wt,mt,X,xt),yt.unbindTexture()},this.copyTextureToTexture=function(v,U,J=null,G=null,X=0,xt=0){let wt,mt,bt,It,$t,he,Ct,ue,Ze,Le=v.isCompressedTexture?v.mipmaps[xt]:v.image;if(J!==null)wt=J.max.x-J.min.x,mt=J.max.y-J.min.y,bt=J.isBox3?J.max.z-J.min.z:1,It=J.min.x,$t=J.min.y,he=J.isBox3?J.min.z:0;else{let ge=Math.pow(2,-X);wt=Math.floor(Le.width*ge),mt=Math.floor(Le.height*ge),v.isDataArrayTexture?bt=Le.depth:v.isData3DTexture?bt=Math.floor(Le.depth*ge):bt=1,It=0,$t=0,he=0}G!==null?(Ct=G.x,ue=G.y,Ze=G.z):(Ct=0,ue=0,Ze=0);let Pe=ct.convert(U.format),Mn=ct.convert(U.type),Pt;U.isData3DTexture?(Yt.setTexture3D(U,0),Pt=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Yt.setTexture2DArray(U,0),Pt=k.TEXTURE_2D_ARRAY):(Yt.setTexture2D(U,0),Pt=k.TEXTURE_2D),yt.activeTexture(k.TEXTURE0),yt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),yt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),yt.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);let An=yt.getParameter(k.UNPACK_ROW_LENGTH),ve=yt.getParameter(k.UNPACK_IMAGE_HEIGHT),Ws=yt.getParameter(k.UNPACK_SKIP_PIXELS),Sn=yt.getParameter(k.UNPACK_SKIP_ROWS),nl=yt.getParameter(k.UNPACK_SKIP_IMAGES);yt.pixelStorei(k.UNPACK_ROW_LENGTH,Le.width),yt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Le.height),yt.pixelStorei(k.UNPACK_SKIP_PIXELS,It),yt.pixelStorei(k.UNPACK_SKIP_ROWS,$t),yt.pixelStorei(k.UNPACK_SKIP_IMAGES,he);let ds=v.isDataArrayTexture||v.isData3DTexture,Xs=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let ge=Ut.get(v),gn=Ut.get(U),ui=Ut.get(ge.__renderTarget),Ge=Ut.get(gn.__renderTarget);yt.bindFramebuffer(k.READ_FRAMEBUFFER,ui.__webglFramebuffer),yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let cn=0;cn<bt;cn++)ds&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.get(v).__webglTexture,X,he+cn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,xt,Ze+cn)),k.blitFramebuffer(It,$t,It+wt,$t+mt,Ct,ue,Ct+wt,ue+mt,k.DEPTH_BUFFER_BIT,k.NEAREST);yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Ut.has(v)){let ge=Ut.get(v),gn=Ut.get(U);yt.bindFramebuffer(k.READ_FRAMEBUFFER,C),yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Z);for(let ui=0;ui<bt;ui++)ds?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ge.__webglTexture,X,he+ui):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ge.__webglTexture,X),Xs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,xt,Ze+ui):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,xt),X!==0?k.blitFramebuffer(It,$t,It+wt,$t+mt,Ct,ue,Ct+wt,ue+mt,k.COLOR_BUFFER_BIT,k.NEAREST):Xs?k.copyTexSubImage3D(Pt,xt,Ct,ue,Ze+ui,It,$t,wt,mt):k.copyTexSubImage2D(Pt,xt,Ct,ue,It,$t,wt,mt);yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Xs?v.isDataTexture||v.isData3DTexture?k.texSubImage3D(Pt,xt,Ct,ue,Ze,wt,mt,bt,Pe,Mn,Le.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,xt,Ct,ue,Ze,wt,mt,bt,Pe,Le.data):k.texSubImage3D(Pt,xt,Ct,ue,Ze,wt,mt,bt,Pe,Mn,Le):v.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xt,Ct,ue,wt,mt,Pe,Mn,Le.data):v.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xt,Ct,ue,Le.width,Le.height,Pe,Le.data):k.texSubImage2D(k.TEXTURE_2D,xt,Ct,ue,wt,mt,Pe,Mn,Le);yt.pixelStorei(k.UNPACK_ROW_LENGTH,An),yt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve),yt.pixelStorei(k.UNPACK_SKIP_PIXELS,Ws),yt.pixelStorei(k.UNPACK_SKIP_ROWS,Sn),yt.pixelStorei(k.UNPACK_SKIP_IMAGES,nl),xt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Pt),yt.unbindTexture()},this.initRenderTarget=function(v){Ut.get(v).__webglFramebuffer===void 0&&Yt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Yt.setTextureCube(v,0):v.isData3DTexture?Yt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Yt.setTexture2DArray(v,0):Yt.setTexture2D(v,0),yt.unbindTexture()},this.resetState=function(){V=0,T=0,N=null,yt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function jc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},l=n[0].morphTargetsRelative,c=new yn;c.morphTargetsRelative=l;let a=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in h.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(h.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in h.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,g,u),a+=g}}if(e){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=vm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let g=vm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function vm(n){let t,e,i,s=-1,r=0;for(let a=0;a<n.length;++a){let u=n[a];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),l=new Fn(o,e,i),c=0;for(let a=0;a<n.length;++a){let u=n[a];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let _=u.getComponent(f,g);l.setComponent(f+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(l.gpuType=s),l}var st=Math.random;function oe(n,t,e,{repeat:i=[1,1],srgb:s=!0,aniso:r=4}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let l=o.getContext("2d");e(l,n,t);let c=new Ks(o);return c.wrapS=c.wrapT=Hr,c.repeat.set(i[0],i[1]),s&&(c.colorSpace=Cn),c.anisotropy=r,c}function ke(n,t,e,i){let s=n.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){if(r[o+3]===0)continue;let l=(st()-.5)*i;r[o]+=l,r[o+1]+=l,r[o+2]+=l}n.putImageData(s,0,0)}function zn(n,t,e,i,s,r=.12,o=.25){for(let l=0;l<i;l++){let c=st()*t,a=st()*e,u=(.03+st()*o)*Math.max(t,e),h=n.createRadialGradient(c,a,0,c,a,u);h.addColorStop(0,`rgba(${s},${st()*r})`),h.addColorStop(1,`rgba(${s},0)`),n.fillStyle=h,n.fillRect(c-u,a-u,u*2,u*2)}}var of=()=>oe(256,512,(n,t,e)=>{n.fillStyle="#cbc4ae",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#6f9184",n.fillRect(0,i,t,e-i),n.fillStyle="#41544c",n.fillRect(0,i-6,t,7),n.fillStyle="#2e2a24",n.fillRect(0,e-14,t,14),zn(n,t,e,18,"60,50,30",.1,.3);let s=n.createLinearGradient(0,e-90,0,e);s.addColorStop(0,"rgba(30,25,15,0)"),s.addColorStop(1,"rgba(30,25,15,.35)"),n.fillStyle=s,n.fillRect(0,e-90,t,90);for(let r=0;r<6;r++){n.strokeStyle=`rgba(40,30,20,${st()*.15})`,n.lineWidth=1,n.beginPath();let o=st()*t;n.moveTo(o,st()*i),n.lineTo(o+(st()-.5)*30,i+st()*40),n.stroke()}ke(n,t,e,18)}),th=()=>oe(256,256,(n,t,e)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=140+st()*14;n.fillStyle=`rgb(${r-4},${r},${r-10})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1600;i++){let s=st()*2.2;n.fillStyle=st()<.5?"rgba(70,72,66,.55)":"rgba(220,220,210,.45)",n.fillRect(st()*t,st()*e,s,s)}zn(n,t,e,10,"40,35,25",.18,.2);for(let i=0;i<8;i++){n.strokeStyle="rgba(20,20,20,.15)",n.lineWidth=1+st()*2,n.beginPath();let s=st()*t,r=st()*e;n.moveTo(s,r),n.lineTo(s+(st()-.5)*60,r+(st()-.5)*20),n.stroke()}n.strokeStyle="rgba(30,30,28,.6)",n.lineWidth=2,n.strokeRect(1,1,127,127),n.strokeRect(129,1,126,127),n.strokeRect(1,129,127,126),n.strokeRect(129,129,126,126),ke(n,t,e,14)}),af=()=>oe(256,256,(n,t,e)=>{let i=e/4;for(let s=0;s<4;s++){let r=st()*t,o=95+st()*30;n.fillStyle=`rgb(${o+30},${o},${o-35})`,n.fillRect(0,s*i,t,i);for(let l=0;l<22;l++){n.strokeStyle=`rgba(50,30,10,${.08+st()*.12})`,n.lineWidth=1,n.beginPath();let c=s*i+st()*i;n.moveTo(0,c),n.bezierCurveTo(t*.3,c+(st()-.5)*6,t*.6,c+(st()-.5)*6,t,c+(st()-.5)*4),n.stroke()}n.fillStyle="rgba(25,15,5,.7)",n.fillRect(0,s*i,t,2),n.fillRect(r%t,s*i,2,i)}zn(n,t,e,10,"20,10,0",.2,.2),ke(n,t,e,16)}),lf=()=>oe(256,256,(n,t,e)=>{n.fillStyle="#8f9590",n.fillRect(0,0,t,e);let i=8,s=t/i;for(let r=0;r<i;r++)for(let o=0;o<i;o++){let l=200+st()*25;n.fillStyle=`rgb(${l},${l+3},${l+2})`,n.fillRect(o*s+1.5,r*s+1.5,s-3,s-3)}zn(n,t,e,14,"90,80,40",.22,.18),ke(n,t,e,10)}),eh=()=>oe(256,256,(n,t,e)=>{n.fillStyle="#b9b6aa",n.fillRect(0,0,t,e);for(let i=0;i<2600;i++)n.fillStyle="rgba(60,58,50,.5)",n.fillRect(st()*t,st()*e,1.4,1.4);zn(n,t,e,5,"110,80,30",.25,.2),n.strokeStyle="#6d6a60",n.lineWidth=3,n.strokeRect(0,0,t/2,e/2),n.strokeRect(t/2,0,t/2,e/2),n.strokeRect(0,e/2,t/2,e/2),n.strokeRect(t/2,e/2,t/2,e/2),ke(n,t,e,10)}),Mm=()=>oe(256,128,(n,t,e)=>{n.fillStyle="#b8935f",n.fillRect(0,0,t,e);for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,55,20,${.08+st()*.15})`,n.lineWidth=1+st(),n.beginPath();let s=st()*e;n.moveTo(0,s),n.bezierCurveTo(t*.3,s+(st()-.5)*10,t*.7,s+(st()-.5)*10,t,s+(st()-.5)*8),n.stroke()}for(let i=0;i<5;i++){n.strokeStyle=`rgba(30,30,60,${.2+st()*.3})`,n.lineWidth=1,n.beginPath();let s=st()*t,r=st()*e;n.moveTo(s,r),n.lineTo(s+st()*30,r+(st()-.5)*8),n.stroke()}ke(n,t,e,12)}),Rs=(n="#7c8288")=>oe(128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<60;s++){t.strokeStyle=`rgba(255,255,255,${st()*.06})`,t.beginPath();let r=st()*i;t.moveTo(0,r),t.lineTo(e,r+(st()-.5)*3),t.stroke()}zn(t,e,i,6,"60,40,20",.15,.3),ke(t,e,i,14)}),Sm=()=>oe(128,256,(n,t,e)=>{n.fillStyle="#5d6a73",n.fillRect(0,0,t,e),n.strokeStyle="#2f363b",n.lineWidth=3,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#262c30";for(let i=0;i<6;i++)n.fillRect(28,20+i*9,t-56,4);n.fillStyle="#9aa3a8",n.fillRect(t-28,e*.48,8,34),n.fillStyle="#ddd",n.fillRect(30,e*.36,40,16),n.fillStyle="#333",n.font="bold 12px sans-serif",n.fillText(String(10+(st()*40|0)),36,e*.36+12),zn(n,t,e,8,"80,50,20",.2,.25),ke(n,t,e,16)}),bm=n=>oe(1024,256,(t,e,i)=>{t.fillStyle="#20382c",t.fillRect(0,0,e,i);for(let s=0;s<30;s++)t.fillStyle=`rgba(200,220,210,${st()*.05})`,t.beginPath(),t.ellipse(st()*e,st()*i,60+st()*120,10+st()*25,st()-.5,0,7),t.fill();t.fillStyle="rgba(235,240,230,.92)",t.font='bold 54px "Nanum Pen Script", "Comic Sans MS", cursive, sans-serif',t.textAlign="center",t.fillText(n,e/2,i/2+18),t.font="30px sans-serif",t.fillStyle="rgba(235,240,230,.5)",t.fillText("\uC8FC\uBC88: ____   \uACB0\uC11D: 31\uBA85",e*.82,i-28),ke(t,e,i,10)},{aniso:8}),Tm=()=>oe(256,192,(n,t,e)=>{n.fillStyle="#a07a4c",n.fillRect(0,0,t,e);for(let s=0;s<1500;s++)n.fillStyle=st()<.5?"rgba(70,45,20,.5)":"rgba(200,160,110,.4)",n.fillRect(st()*t,st()*e,2,2);let i=[["\uAC00\uC815\uD1B5\uC2E0\uBB38","#eee"],["\uAE09\uC2DD \uC2DD\uB2E8\uD45C","#f4f0d0"],["\uC2E4\uC885","#ddd"],["\uAD50\uCE59 \uC81C1\uC870","#e8e8e8"]];for(let[s,r]of i){let o=10+st()*(t-90),l=10+st()*(e-80);n.save(),n.translate(o,l),n.rotate((st()-.5)*.15),n.fillStyle=r,n.fillRect(0,0,70,60),n.fillStyle="#333",n.font="11px sans-serif",n.fillText(s,6,16);for(let c=0;c<4;c++)n.fillRect(6,24+c*8,40+st()*18,2);n.fillStyle="#c33",n.beginPath(),n.arc(35,3,3,0,7),n.fill(),n.restore()}ke(n,t,e,10)}),nh=(n,t="#e8e4d8",e="#1d2a4a")=>oe(256,96,(i,s,r)=>{i.fillStyle=t,i.fillRect(0,0,s,r),i.strokeStyle="#3a3a3a",i.lineWidth=6,i.strokeRect(3,3,s-6,r-6),i.fillStyle=e,i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+2),zn(i,s,r,4,"60,50,20",.2,.4),ke(i,s,r,10)}),cf=()=>oe(256,96,(n,t,e)=>{n.fillStyle="#19b35a",n.fillRect(0,0,t,e),n.fillStyle="#fff",n.fillRect(16,16,46,64),n.fillStyle="#19b35a",n.fillRect(26,22,30,56),n.fillStyle="#fff",n.beginPath(),n.arc(90,26,9,0,7),n.fill(),n.lineWidth=8,n.strokeStyle="#fff",n.lineCap="round",n.beginPath(),n.moveTo(88,38),n.lineTo(80,60),n.lineTo(66,76),n.moveTo(80,60),n.lineTo(96,76),n.moveTo(86,44),n.lineTo(72,52),n.moveTo(88,44),n.lineTo(104,50),n.stroke(),n.font="bold 34px sans-serif",n.textBaseline="middle",n.fillText("\uBE44\uC0C1\uAD6C",120,50)}),ih=()=>oe(128,160,(n,t,e)=>{n.fillStyle="#e6dfc8",n.fillRect(0,0,t,e),n.strokeStyle="rgba(90,120,170,.35)";for(let i=24;i<e;i+=12)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.strokeStyle="rgba(40,40,60,.75)",n.lineWidth=1.5;for(let i=34;i<e-20;i+=12){n.beginPath(),n.moveTo(10,i);let s=10;for(;s<t-14-st()*30;)s+=4+st()*6,n.lineTo(s,i+(st()-.5)*2);n.stroke()}zn(n,t,e,4,"120,90,40",.25,.3),ke(n,t,e,12)}),Em=()=>oe(64,128,(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="rgba(0,0,0,.25)",n.fillRect(0,10,t,4),n.fillRect(0,e-20,t,4),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(8,30,t-16,40),ke(n,t,e,20)});var hf=n=>oe(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2,r=2,o=(l,c,a,u,h)=>{let f=t.createRadialGradient(l,c,0,l,c,Math.max(a,u));f.addColorStop(0,h),f.addColorStop(1,"rgba(0,0,0,0)"),t.save(),t.translate(l,c),t.scale(a/Math.max(a,u),u/Math.max(a,u)),t.translate(-l,-c),t.fillStyle=f,t.beginPath(),t.arc(l,c,Math.max(a,u),0,7),t.fill(),t.restore()};for(let l of[-1,1]){let c=s+l*44*r,a=112*r;o(c,a+4,34*r,22*r,n?"rgba(40,10,10,.55)":"rgba(90,50,40,.28)"),o(s+l*52*r,150*r,26*r,16*r,n?"rgba(160,40,40,.22)":"rgba(200,110,100,.12)"),t.strokeStyle="rgba(25,16,10,.9)",t.lineCap="round";for(let _=0;_<9;_++){t.lineWidth=(6-Math.abs(_-3)*.6)*r*.6,t.beginPath();let p=s+l*(20+_*5)*r;t.moveTo(p,(88-(n?10:0)+Math.abs(_-3)*.6)*r),t.lineTo(p+l*6*r,(86-(n?12:0)+Math.abs(_-3)*.6)*r),t.stroke()}let u=(n?17:19)*r,h=(n?14:7.5)*r;t.fillStyle=n?"#efe9dc":"#e9e2d6",t.beginPath(),t.ellipse(c,a,u,h,0,0,7),t.fill(),t.save(),t.beginPath(),t.ellipse(c,a,u,h,0,0,7),t.clip();let f=c+(n?0:l*-3*r),d=(n?5:8.5)*r,g=t.createRadialGradient(f,a,0,f,a,d);g.addColorStop(0,"#1a0f08"),g.addColorStop(.45,"#3d2617"),g.addColorStop(1,"#22150c"),t.fillStyle=g,t.beginPath(),t.arc(f,a,d,0,7),t.fill(),t.fillStyle="#030303",t.beginPath(),t.arc(f,a,(n?1.8:3.8)*r,0,7),t.fill(),n||(t.fillStyle="rgba(255,255,255,.8)",t.beginPath(),t.arc(f+3*r,a-3*r,1.6*r,0,7),t.fill()),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(c-u,a-h,u*2,h*.5),t.restore(),t.strokeStyle="#140c07",t.lineWidth=3*r,t.beginPath(),t.ellipse(c,a,u,h,0,Math.PI*1.02,Math.PI*1.98),t.stroke(),t.strokeStyle="rgba(70,40,30,.45)",t.lineWidth=1.5*r,t.beginPath(),t.ellipse(c,a-5*r,u*.95,h+3*r,0,Math.PI*1.1,Math.PI*1.9),t.stroke(),t.strokeStyle="rgba(80,45,35,.35)",t.lineWidth=1.2*r,t.beginPath(),t.ellipse(c,a+1*r,u*.95,h,0,.15,Math.PI-.15),t.stroke()}o(s,140*r,12*r,26*r,"rgba(120,70,55,.15)"),t.strokeStyle="rgba(110,60,45,.45)",t.lineWidth=2*r,t.beginPath(),t.moveTo(s-6*r,118*r),t.quadraticCurveTo(s-9*r,140*r,s-12*r,152*r),t.stroke(),t.fillStyle="rgba(70,35,28,.55)";for(let l of[-1,1])t.beginPath(),t.ellipse(s+l*7*r,156*r,4*r,2.4*r,l*.3,0,7),t.fill();t.strokeStyle="rgba(110,60,45,.35)",t.lineWidth=1.5*r,t.beginPath(),t.moveTo(s-14*r,154*r),t.quadraticCurveTo(s,162*r,s+14*r,154*r),t.stroke(),t.strokeStyle="rgba(110,60,45,.2)",t.lineWidth=1.5*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*3*r,163*r),t.lineTo(s+l*4*r,176*r),t.stroke();if(!n)t.fillStyle="#a5625a",t.beginPath(),t.moveTo(s-22*r,184*r),t.quadraticCurveTo(s-8*r,177*r,s,180*r),t.quadraticCurveTo(s+8*r,177*r,s+22*r,184*r),t.quadraticCurveTo(s,186*r,s-22*r,184*r),t.fill(),t.fillStyle="#b4706a",t.beginPath(),t.moveTo(s-20*r,185*r),t.quadraticCurveTo(s,198*r,s+20*r,185*r),t.fill(),t.strokeStyle="#5a2a26",t.lineWidth=1.8*r,t.beginPath(),t.moveTo(s-22*r,184.5*r),t.quadraticCurveTo(s,187*r,s+22*r,184.5*r),t.stroke(),o(s,205*r,18*r,7*r,"rgba(90,50,40,.2)");else{t.fillStyle="#120303",t.beginPath(),t.moveTo(s-84*r,156*r),t.quadraticCurveTo(s,262*r,s+84*r,156*r),t.quadraticCurveTo(s,196*r,s-84*r,156*r),t.fill();for(let l=-7;l<=7;l++){let c=s+l*10.5*r,a=(172+(1-Math.abs(l)/8)*16)*r,u=t.createLinearGradient(0,a,0,a+13*r);u.addColorStop(0,"#e9dfc6"),u.addColorStop(1,"#b9a98a"),t.fillStyle=u,t.beginPath(),t.roundRect?t.roundRect(c-4.5*r,a,9*r,13*r,2*r):t.rect(c-4.5*r,a,9*r,13*r),t.fill()}for(let l=-6;l<=6;l++){let c=s+l*10.5*r,a=(205+(1-Math.abs(l)/7)*18)*r;t.fillStyle="#cbbd9e",t.fillRect(c-4*r,a,8*r,9*r)}t.strokeStyle="#6a1414",t.lineWidth=3*r,t.beginPath(),t.moveTo(s-86*r,156*r),t.quadraticCurveTo(s,264*r,s+86*r,156*r),t.stroke(),t.strokeStyle="rgba(60,10,10,.5)",t.lineWidth=2*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*86*r,156*r),t.lineTo(s+l*96*r,146*r),t.stroke()}},{aniso:8});var wm=()=>oe(64,64,(n,t,e)=>{n.fillStyle="#16171a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=3)for(let s=0;s<t;s+=4)n.fillStyle=`rgba(255,255,255,${.02+st()*.03})`,n.fillRect(s,i,2,2)}),uf=()=>oe(64,64,(n,t,e)=>{n.fillStyle="#4a4d52",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,30,35,.5)",n.lineWidth=1;for(let i=0;i<t;i+=6)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();ke(n,t,e,16)},{repeat:[3,6]});var Am=()=>oe(512,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.75)";let i=t*(.3+st()*.4),s=e*.5;for(let r=0;r<18;r++){n.lineWidth=1+st()*2,n.beginPath();let o=i,l=s;n.moveTo(o,l);let c=st()*7;for(let a=0;a<6;a++)o+=Math.cos(c+(st()-.5))*40,l+=Math.sin(c+(st()-.5))*30,n.lineTo(o,l);n.stroke()}for(let r=20;r<90;r+=25){n.lineWidth=1,n.beginPath();for(let o=0;o<7;o+=.6)n.lineTo(i+Math.cos(o)*r*(.8+st()*.4),s+Math.sin(o)*r*.6);n.closePath(),n.stroke()}});var sh=(n=0,t=!1)=>oe(256,400,(e,i,s)=>{e.clearRect(0,0,i,s);let r=n*9301+49297,o=()=>(r=(r*9301+49297)%233280,r/233280),l=t?{top:"#1b1b20",sh:"#f0f0f0",pants:"#5a5d63",skin:"#e8b896"}:[{top:"#2a3f7a",sh:"#f2f2f2",pants:"#2a2a40",skin:"#e9b593"},{top:"#7a1f2a",sh:"#f2f2f2",pants:"#3a2a20",skin:"#e3a985"},{top:"#2f5a3a",sh:"#efefe6",pants:"#33363a",skin:"#efc3a2"}][n%3],c=(S,A,E=60,x=2)=>{e.strokeStyle=A,e.lineCap="round";let b=S.map(C=>C[0]),I=S.map(C=>C[1]),P=Math.min(...b),O=Math.max(...b),H=Math.min(...I),Y=Math.max(...I);e.save(),e.beginPath(),S.forEach(([C,Z],V)=>V?e.lineTo(C,Z):e.moveTo(C,Z)),e.closePath(),e.clip();for(let C=0;C<E;C++){e.globalAlpha=.25+o()*.4,e.lineWidth=x*(.6+o()),e.beginPath();let Z=H+o()*(Y-H),V=P-10;e.moveTo(V,Z),e.lineTo(O+10,Z+(o()-.3)*30),e.stroke()}e.restore(),e.globalAlpha=1},a=(S,A="#151010",E=2.2)=>{for(let x=0;x<2;x++)e.strokeStyle=A,e.globalAlpha=.7,e.lineWidth=E,e.beginPath(),S.forEach(([b,I],P)=>{let O=()=>(o()-.5)*2.5;P?e.lineTo(b+O(),I+O()):e.moveTo(b+O(),I+O())}),e.closePath(),e.stroke();e.globalAlpha=1},u=S=>S.map(([A,E])=>[i/2-A,E]),h=S=>S.map(([A,E])=>[i/2+A,E]),f=o()*30-15,d=120+o()*80,g=20+o()*40,_=60,p=_+40+g;for(let S of[u,h]){let A=S([[8,p+110],[26,p+110],[30+f*.3,s-14],[16,s-12]]);c(A,l.pants,40),a(A)}let m=[[i/2-38,p],[i/2+38,p],[i/2+34,p+115],[i/2-34,p+115]];c(m,l.sh,40),c(t?[[i/2-38,p],[i/2-6,p+60],[i/2+6,p+60],[i/2+38,p],[i/2+34,p+105],[i/2-34,p+105]]:m,l.top,70),a(m),t&&(e.strokeStyle="#eee",e.lineWidth=3,e.beginPath(),e.moveTo(i/2-34,p),e.lineTo(i/2,p+64),e.lineTo(i/2+34,p),e.stroke(),c([[i/2-5,p],[i/2+5,p],[i/2+6,p+55],[i/2-6,p+55]],"#3b4250",20));for(let S of[-1,1]){let A=i/2+S*38,E=[[A,p+4],[A+S*14,p+4],[A+S*(30+f*S),p+d],[A+S*(16+f*S),p+d+6]];c(E,l.sh,30),a(E);let x=A+S*(24+f*S),b=p+d+8;e.strokeStyle="#2a1a14",e.lineWidth=2;for(let I=0;I<5;I++)e.beginPath(),e.moveTo(x,b),e.lineTo(x+S*(I-2)*6,b+18+o()*16),e.stroke()}let M=[[i/2-7,_+30],[i/2+7,_+30],[i/2+7,p],[i/2-7,p]];c(M,l.skin,20),a(M,"#2a1a14",1.5);let R=[];for(let S=0;S<6.28;S+=.3)R.push([i/2+Math.cos(S)*34,_+Math.sin(S)*40]);c(R,l.skin,50),a(R),e.fillStyle="#120a0a";for(let S=0;S<40;S++)e.globalAlpha=.5,e.fillRect(i/2-36+o()*72,_-44+o()*26,2,10+o()*14);e.globalAlpha=1;for(let S of[-1,1])e.fillStyle="#050505",e.beginPath(),e.ellipse(i/2+S*13,_-2,8,11,0,0,7),e.fill(),e.strokeStyle="#7a0a0a",e.lineWidth=2,e.beginPath(),e.moveTo(i/2+S*13,_+8),e.lineTo(i/2+S*14,_+26+o()*30),e.stroke();e.fillStyle="#120505",e.beginPath(),e.moveTo(i/2-22,_+20),e.quadraticCurveTo(i/2,_+42,i/2+22,_+20),e.quadraticCurveTo(i/2,_+28,i/2-22,_+20),e.fill(),e.fillStyle="rgba(120,10,10,.75)",e.font='bold 18px "Nanum Pen Script", cursive, sans-serif',e.save(),e.translate(14,s-30),e.rotate(-.08),e.fillText(t?"\uB108":["\uC0B4\uB824\uC918","\uC5EC\uAE30 \uC788\uC5B4","\uC870\uC6A9\uD788 \uD574"][n%3],0,0),e.restore()});var ff=n=>oe(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2;for(let r of[-1,1])t.fillStyle="#151515",t.beginPath(),t.ellipse(s+r*70,230,22,n?34:28,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(s+r*70+7,220,7,0,7),t.fill(),t.strokeStyle="#151515",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(s+r*48,182),t.quadraticCurveTo(s+r*70,172,s+r*94,184),t.stroke(),t.fillStyle="rgba(240,110,120,.45)",t.beginPath(),t.ellipse(s+r*95,290,34,18,0,0,7),t.fill();if(t.strokeStyle="#a0504a",t.lineWidth=4,t.beginPath(),t.moveTo(s-6,270),t.lineTo(s,282),t.stroke(),!n)t.strokeStyle="#7a2020",t.lineWidth=7,t.beginPath(),t.arc(s,300,40,.25,Math.PI-.25),t.stroke();else{t.fillStyle="#2a0505",t.beginPath(),t.moveTo(s-150,280),t.quadraticCurveTo(s,470,s+150,280),t.quadraticCurveTo(s,350,s-150,280),t.fill(),t.fillStyle="#efe6d0";for(let r=-9;r<=9;r++)t.beginPath(),t.moveTo(s+r*14-6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14+6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14,322+(1-Math.abs(r)/10)*30),t.fill()}},{aniso:8}),df=()=>oe(512,512,(n,t,e)=>{n.fillStyle="#060607",n.fillRect(0,0,t,e);let i=t/2;for(let s of[-1,1]){let r=n.createRadialGradient(i+s*80,210,0,i+s*80,210,60);r.addColorStop(0,"#fffef6"),r.addColorStop(.75,"#e8e4d8"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.beginPath(),n.ellipse(i+s*80,210,58,64,0,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(i+s*80+s*-6,214,9,0,7),n.fill()}n.fillStyle="#e8e2d2",n.beginPath(),n.moveTo(i-190,300),n.quadraticCurveTo(i,440,i+190,300),n.quadraticCurveTo(i,360,i-190,300),n.fill(),n.strokeStyle="#060607",n.lineWidth=4;for(let s=-12;s<=12;s++)n.beginPath(),n.moveTo(i+s*15,320+(1-Math.abs(s)/13)*25),n.lineTo(i+s*15,350+(1-Math.abs(s)/13)*45),n.stroke()}),pf=(n=0)=>oe(256,128,(t,e,i)=>{t.fillStyle=["#c8651e","#e9e6dc","#d8d1b0"][n%3],t.fillRect(0,0,e,i),t.strokeStyle="rgba(20,10,5,.7)",t.lineWidth=3,t.beginPath(),t.moveTo(0,i/2),t.lineTo(e,i/2),t.moveTo(e/4,0),t.lineTo(e/4,i),t.moveTo(e*3/4,0),t.lineTo(e*3/4,i),t.stroke();let s=e/2;t.fillStyle="#100808";for(let r of[-1,1])t.beginPath(),t.ellipse(s+r*14,50,6,9,0,0,7),t.fill();t.beginPath(),t.ellipse(s,80,12,18,0,0,7),t.fill(),t.fillStyle="rgba(20,10,5,.8)";for(let r=0;r<30;r++)t.fillRect(s-24+st()*48,18+st()*10,2,8);ke(t,e,i,16)});var Rm=()=>oe(256,256,(n,t,e)=>{n.fillStyle="#d9d4c8",n.fillRect(0,0,t,e);for(let i=0;i<160;i++){n.strokeStyle=`rgba(30,30,35,${.08+st()*.2})`,n.lineWidth=1,n.beginPath();let s=st()*t,r=st()*e;n.moveTo(s,r),n.lineTo(s+18,r+24),n.stroke()}zn(n,t,e,8,"60,50,40",.2,.2),ke(n,t,e,14)}),Cm=()=>oe(256,256,(n,t,e)=>{for(let i=0;i<8;i++){let s=150+st()*30;n.fillStyle=`rgb(${s+40},${s+10},${s-40})`,n.fillRect(0,i*32,t,32),n.fillStyle="rgba(60,30,0,.4)",n.fillRect(0,i*32,t,1),n.fillRect(st()*t,i*32,1,32)}for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,50,10,${st()*.15})`,n.beginPath();let s=st()*e;n.moveTo(0,s),n.lineTo(t,s+(st()-.5)*4),n.stroke()}ke(n,t,e,12)}),Ta=()=>oe(128,256,(n,t,e)=>{n.fillStyle="#1d2a4f",n.fillRect(0,0,t,e),n.fillStyle="#e8e8e8",n.fillRect(8,0,6,e),n.fillRect(t-14,0,6,e),ke(n,t,e,10)}),Pm=()=>oe(512,512,(n,t,e)=>{n.fillStyle="#e4dfcc",n.fillRect(0,0,t,e);for(let i=0;i<260;i++){n.strokeStyle=`rgba(35,40,30,${.06+st()*.16})`,n.lineWidth=1+st()*1.2,n.beginPath();let s=st()*t,r=st()*e,o=.6+(st()-.5)*.3;n.moveTo(s,r),n.lineTo(s+Math.cos(o)*60,r+Math.sin(o)*60),n.stroke()}for(let i=0;i<6;i++)n.strokeStyle="rgba(30,30,30,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(st()*t,0),n.bezierCurveTo(st()*t,e*.3,st()*t,e*.7,st()*t,e),n.stroke();zn(n,t,e,8,"90,80,50",.15,.25),ke(n,t,e,12)}),Im=()=>oe(256,512,(n,t,e)=>{n.fillStyle="#b9bf8c",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#7f8d63",n.fillRect(0,i,t,e-i),n.fillStyle="#4f5a3c",n.fillRect(0,i-5,t,6),n.fillStyle="#2e3324",n.fillRect(0,e-14,t,14);for(let r=0;r<t;r+=16)n.fillStyle="rgba(80,90,50,.12)",n.fillRect(r,0,2,i-6);zn(n,t,e,22,"70,60,20",.14,.3);let s=n.createLinearGradient(0,e-100,0,e);s.addColorStop(0,"rgba(30,25,10,0)"),s.addColorStop(1,"rgba(30,25,10,.4)"),n.fillStyle=s,n.fillRect(0,e-100,t,100),ke(n,t,e,16)}),Lm=()=>oe(256,256,(n,t,e)=>{n.fillStyle="#8c8a5a",n.fillRect(0,0,t,e);for(let i=0;i<9e3;i++){let s=100+st()*70;n.fillStyle=`rgba(${s},${s-4},${s-50},.35)`,n.fillRect(st()*t,st()*e,1.5,1.5)}zn(n,t,e,12,"50,40,20",.25,.25),ke(n,t,e,10)}),Dm=()=>oe(128,256,(n,t,e)=>{n.fillStyle="#5a1818",n.fillRect(0,0,t,e),n.strokeStyle="#2a0a0a",n.lineWidth=4,n.strokeRect(10,10,t-20,e-20),n.strokeRect(20,30,t-40,80),n.fillStyle="#b8b0a0",n.fillRect(t-26,e*.52,10,22),n.fillStyle="#eee",n.font="bold 20px sans-serif",n.textAlign="center",n.fillText("\u25BC \uC544\uB798\uB85C",t/2,76),zn(n,t,e,10,"20,0,0",.3,.3),ke(n,t,e,14)}),mf=(n={})=>oe(512,256,(t,e,i)=>{t.fillStyle=n.base||"#16171a",t.fillRect(0,0,e,i);for(let l=0;l<i;l+=3)for(let c=0;c<e;c+=4)t.fillStyle=`rgba(255,255,255,${.02+st()*.03})`,t.fillRect(c,l,2,2);let s=e/2,r=e*.085,o=i*.5;t.fillStyle="#eef0f2",t.beginPath(),t.moveTo(s-r,0),t.lineTo(s,o),t.lineTo(s+r,0),t.fill(),n.noTie||(t.fillStyle=n.tie||"#3b4250",t.beginPath(),t.moveTo(s-6,0),t.lineTo(s+6,0),t.lineTo(s+9,o*.9),t.lineTo(s,o*.98),t.lineTo(s-9,o*.9),t.fill()),n.ribbon&&(t.fillStyle="#b01828",t.beginPath(),t.moveTo(s,18),t.lineTo(s-24,6),t.lineTo(s-24,30),t.closePath(),t.moveTo(s,18),t.lineTo(s+24,6),t.lineTo(s+24,30),t.closePath(),t.fill()),t.strokeStyle="#e4e4e4",t.lineWidth=5,t.beginPath(),t.moveTo(s-r-4,0),t.lineTo(s,o+6),t.lineTo(s+r+4,0),t.stroke(),t.strokeStyle=n.base||"#16171a",t.lineWidth=4,t.beginPath(),t.moveTo(s-r-9,0),t.lineTo(s,o+12),t.lineTo(s+r+9,0),t.stroke(),t.strokeStyle="#d6d6d6",t.lineWidth=3,t.beginPath(),t.moveTo(s-r-13,0),t.lineTo(s,o+17),t.lineTo(s+r+13,0),t.stroke(),t.fillStyle="rgba(255,255,255,.07)";for(let l=0;l<e;l+=6)t.fillRect(l,i-22,3,22);t.fillStyle="#e4e4e4",t.fillRect(0,i-26,e,3)}),Nm=()=>oe(256,128,(n,t,e)=>{n.fillStyle="#1b2850",n.fillRect(0,0,t,e),n.fillStyle="#e8e8e8",n.fillRect(t*.25-4,0,5,e),n.fillRect(t*.75,0,5,e),n.fillRect(t/2-2,0,3,e*.6),ke(n,t,e,10)}),Um=()=>oe(512,256,(n,t,e)=>{n.fillStyle="#2b2d33",n.fillRect(0,0,t,e);let i=t/2;n.fillStyle="#e4e2da",n.beginPath(),n.moveTo(i-34,0),n.lineTo(i,e*.5),n.lineTo(i+34,0),n.fill(),n.fillStyle="#7a1414",n.fillRect(i-6,0,12,e*.45),n.strokeStyle="#18191d",n.lineWidth=5,n.beginPath(),n.moveTo(i-40,0),n.lineTo(i,e*.55),n.lineTo(i,e),n.moveTo(i+40,0),n.lineTo(i,e*.55),n.stroke(),ke(n,t,e,10)}),Om=()=>oe(256,256,(n,t,e)=>{n.fillStyle="#e9e3d2",n.fillRect(0,0,t,e),n.strokeStyle="#b3121a",n.lineWidth=14,n.beginPath(),n.arc(t/2,e/2,100,0,7),n.stroke(),n.fillStyle="#b3121a",n.font="bold 74px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("\uBC8C\uC810",t/2,e/2);for(let i=0;i<400;i++)n.fillStyle="rgba(233,227,210,.9)",n.fillRect(st()*t,st()*e,2,2)}),Fm=(n=7)=>oe(256,420,(t,e,i)=>{t.clearRect(0,0,e,i);let s=document.createElement("canvas");s.width=e/2,s.height=i;let r=s.getContext("2d"),o=sh(n,!0).image;r.drawImage(o,0,10,e,i-20),r.globalAlpha=.85;let l=(a,u,h)=>{r.fillStyle="rgba(10,6,6,.85)",r.beginPath();for(let f=0;f<6.3;f+=.4){let d=h*(.6+st()*.6);r.lineTo(a+Math.cos(f)*d,u+Math.sin(f)*d)}r.fill()};for(let a=0;a<18;a++)l(e/2-st()*40,60+st()*(i-100),2+st()*9);r.strokeStyle="rgba(10,6,6,.8)",r.lineWidth=2;for(let a=0;a<8;a++)r.beginPath(),r.moveTo(e/2-10-st()*50,60+st()*200),r.lineTo(e/2-70-st()*50,100+st()*280),r.stroke();t.drawImage(s,0,0),t.save(),t.translate(e,0),t.scale(-1,1),t.drawImage(s,0,0),t.restore();let c=t.createLinearGradient(e/2-6,0,e/2+6,0);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(20,10,10,.6)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(e/2-6,0,12,i),t.fillStyle="rgba(130,10,10,.85)",t.font='bold 22px "Nanum Pen Script", cursive, sans-serif',t.fillText("\uAE40\uB3C4\uC724",12,i-14)});var Ea=new B;function ri(n,t,e,i,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;Ea.copy(t),Ea[i]=0,Ea.normalize();let a=.5*o/(o+l),u=1-Ea.angleTo(n)/c;return Math.sign(Ea[e])===1?u*a:l/(o+l)+a+a*(1-u)}var cr=class n extends se{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new B,a=new B,u=new B(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,_=new B,p=.5/o;for(let m=0,M=0;m<h.length;m+=3,M+=2)switch(c.fromArray(h,m),a.copy(c),a.x-=Math.sign(a.x)*p,a.y-=Math.sign(a.y)*p,a.z-=Math.sign(a.z)*p,a.normalize(),h[m+0]=u.x*Math.sign(c.x)+a.x*r,h[m+1]=u.y*Math.sign(c.y)+a.y*r,h[m+2]=u.z*Math.sign(c.z)+a.z*r,f[m+0]=a.x,f[m+1]=a.y,f[m+2]=a.z,Math.floor(m/g)){case 0:_.set(1,0,0),d[M+0]=ri(_,a,"z","y",r,i),d[M+1]=1-ri(_,a,"y","z",r,e);break;case 1:_.set(-1,0,0),d[M+0]=1-ri(_,a,"z","y",r,i),d[M+1]=1-ri(_,a,"y","z",r,e);break;case 2:_.set(0,1,0),d[M+0]=1-ri(_,a,"x","z",r,t),d[M+1]=ri(_,a,"z","x",r,i);break;case 3:_.set(0,-1,0),d[M+0]=1-ri(_,a,"x","z",r,t),d[M+1]=1-ri(_,a,"z","x",r,i);break;case 4:_.set(0,0,1),d[M+0]=1-ri(_,a,"x","y",r,t),d[M+1]=1-ri(_,a,"y","x",r,e);break;case 5:_.set(0,0,-1),d[M+0]=ri(_,a,"x","y",r,t),d[M+1]=1-ri(_,a,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var _t=n=>new Ss(n),km={},jt=(n,t)=>km[n]||(km[n]=t()),Ht={skin:()=>jt("skin",()=>_t({color:14202274,roughness:.5})),hair:()=>jt("hair",()=>_t({color:1511693,roughness:.55})),shirt:()=>jt("shirt",()=>_t({color:15659250,roughness:.75})),knit:()=>jt("knit",()=>_t({map:wm(),roughness:.95})),pants:()=>jt("pants",()=>_t({map:uf(),roughness:.85})),shoeBlk:()=>jt("shoeBlk",()=>_t({color:1315860,roughness:.9})),shoeWht:()=>jt("shoeWht",()=>_t({color:15328991,roughness:.7})),suit:()=>jt("suit",()=>_t({color:1776672,roughness:.8})),paleSkin:()=>jt("pale",()=>_t({color:13222840,roughness:.4})),steel:()=>jt("steel",()=>_t({color:9146518,metalness:.8,roughness:.35})),darkSteel:()=>jt("dsteel",()=>_t({map:Rs("#55595e"),metalness:.6,roughness:.5})),laminate:()=>jt("lam",()=>_t({map:Mm(),roughness:.55})),plywood:()=>jt("ply",()=>_t({color:10253382,roughness:.7})),locker:()=>jt("locker",()=>_t({map:Sm(),metalness:.5,roughness:.55})),lockerSide:()=>jt("lockerSide",()=>_t({map:Rs("#56626b"),metalness:.5,roughness:.55})),ceramic:()=>jt("cer",()=>_t({color:15330282,roughness:.15,metalness:.05})),partition:()=>jt("part",()=>_t({color:9214624,roughness:.6})),blackTop:()=>jt("btop",()=>_t({color:1710618,roughness:.3})),whiteCab:()=>jt("wcab",()=>_t({color:14210766,roughness:.6})),shelfWood:()=>jt("shelf",()=>_t({color:7227948,roughness:.75})),piano:()=>jt("piano",()=>_t({color:723723,roughness:.15,metalness:.1})),plastic:()=>jt("plas",()=>_t({color:4020864,roughness:.5})),canvas:()=>jt("canv",()=>_t({color:15262936,roughness:.9})),monitorBlk:()=>jt("mon",()=>_t({color:1381653,roughness:.4})),doorWood:()=>jt("door",()=>_t({color:8016435,roughness:.7})),paper:()=>jt("paper",()=>_t({map:ih(),roughness:.9,side:We})),red:()=>jt("red",()=>_t({color:11541018,roughness:.4,metalness:.2}))},Jt=(n,t,e=0,i=0,s=0,r=!0)=>{let o=new Et(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=!0,o},te=(n,t,e,i,s,r,o)=>Jt(new se(n,t,e),i,s,r,o),$e=(n,t,e,i,s,r,o,l=12)=>Jt(new fn(n,t,e,l),i,s,r,o),rh=(n,t,e,i,s,r)=>Jt(new Qs(n,t,6,12),e,i,s,r),wa=(n,t,e,i,s=14)=>{let r=Jt(new fn(t,n,e,s,1),i);return r.position.y=-e/2,r},Aa=(n,t)=>Jt(new tn(n,14,10),t);function oh(n={}){let t=new Bt,e=(n.height||1.72)/1.72,i=.84*e*(n.legMul||1),s=(n.armMul||1)*e,r=!!n.girl,o=n.skinMat||Ht.skin(),l=n.sleeveMat||Ht.shirt(),c=n.torsoMat||jt("vestWrap",()=>_t({map:mf(),roughness:.92})),a=n.lowerMat||(r?jt("skirtM",()=>_t({map:uf(),color:8095400,roughness:.85,side:We})):Ht.pants()),u=n.legMat||(r?o:a),h=r?jt("sock",()=>_t({color:15658734,roughness:.8})):u,f=n.shoeMat||Ht.shoeBlk(),d=Ht.shoeWht(),g=i+.05*e,_=[],p=[];for(let V of[-1,1]){let T=new Bt;T.position.set(V*.095*e,g,0),t.add(T),T.add(Aa(.088*e,u));let N=wa(.088*e,.062*e,i*.5,u);T.add(N);let D=new Bt;D.position.y=-i*.5,T.add(D),D.add(Aa(.06*e,r?h:u)),D.add(wa(.06*e,.045*e,i*.47,r?h:u));let z=new Bt;z.position.y=-i*.49,D.add(z),z.add(Jt(new cr(.1*e,.075*e,.26*e,3,.03*e),f,0,-.01,.045*e)),z.add(Jt(new cr(.105*e,.028*e,.27*e,2,.012*e),d,0,-.045*e,.045*e)),_.push(T),p.push(D)}let m=Jt(new tn(.16*e,18,12),a,0,g+.02*e,0);if(m.scale.set(1.05,.75,.72),t.add(m),r){let V=Jt(new fn(.16*e,.27*e,.4*e,22,1,!0),a,0,g-.1*e,0);t.add(V)}let M=r?.9:1,R=[[.13,0],[.128,.06],[.135,.16],[.155,.28],[.17,.38],[.172,.45],[.155,.51],[.1,.55],[.055,.565]].map(([V,T])=>new Ot(V*e*M,T*e)),S=Jt(new ra(R,28,Math.PI,Math.PI*2),c,0,g+.04*e,0);S.scale.z=.66,t.add(S);let A=g+.04*e+.55*e;for(let V of[-1,1]){let T=te(.075*e,.03*e,.05*e,l,V*.045*e,A+.015*e,.05*e);T.rotation.z=V*-.55,t.add(T)}t.add(Jt(new fn(.048*e,.054*e,.11*e,14),o,0,A+.045*e,0));let E=[],x=[];for(let V of[-1,1]){let T=new Bt;T.position.set(V*.19*e*M,A-.055*e,0),T.rotation.z=V*.07,t.add(T),T.add(Aa(.058*e,l)),T.add(wa(.056*e,.046*e,.29*s,l));let N=new Bt;N.position.y=-.29*s,N.rotation.x=-.12,T.add(N),N.add(Aa(.046*e,l)),N.add(wa(.045*e,.034*e,.25*s,l));let D=new Bt;D.position.y=-.25*s,N.add(D),D.add(Aa(.032*e,o)),D.add(Jt(new cr(.075*e,.085*e,.03*e,2,.012*e),o,0,-.05*e,0));let z=n.claws?.12:.065;for(let rt=0;rt<4;rt++){let Tt=(-.027+rt*.018)*e,K=Jt(new Qs(.0085*e,z*e,3,6),o,Tt,-.1*e-z*e/2,.004);if(K.rotation.x=.15,D.add(K),n.claws){let at=Jt(new js(.008*e,.07*e,6),jt("nail",()=>_t({color:1709076,roughness:.3})),Tt,-.1*e-z*e-.04*e,.01);at.rotation.x=Math.PI,D.add(at)}}let $=Jt(new Qs(.01*e,.045*e,3,6),o,V*-.04*e,-.045*e,.015*e);$.rotation.z=V*.6,D.add($),E.push(T),x.push(N)}let b=new Bt;b.position.set(0,A+.19*e,.005*e),t.add(b);let I=e*(n.headMul||1),P=Jt(new tn(.105*I,28,20),n.headMat||o);P.scale.set(.9,1.06,1),b.add(P);let O=Jt(new tn(.08*I,20,14),n.headMat||o,0,-.06*I,.018*I);if(O.scale.set(.95,.72,.92),b.add(O),!n.noFaceParts){for(let T of[-1,1]){let N=Jt(new tn(.022*I,10,8),o,T*.094*I,-.012*I,-.005);N.scale.set(.5,1,.8),b.add(N)}let V=Jt(new tn(.016*I,10,8),o,0,-.02*I,.1*I);V.scale.set(.9,1.3,1),b.add(V)}let H=n.faceTex||hf(!1),Y=n.faceTexG||hf(!0),C=_t({map:H,transparent:!0,roughness:.6,depthWrite:!1}),Z=Jt(new tn(.1065*I,28,20,Math.PI/2-.95,1.9,.68,1.55),C,0,0,0,!1);if(Z.scale.copy(P.scale),b.add(Z),n.hair!==!1){let V=n.hairColor?_t({color:n.hairColor,roughness:.55}):Ht.hair(),T=r?2.35:1.7,N=Jt(new tn(.116*I,28,18,Math.PI/2+1.05,Math.PI*2-2.1,0,T),V);N.scale.set(r?1:.93,1.1,1.05),N.position.set(0,.008*I,-.006*I),b.add(N);let D=Jt(new tn(.1165*I,24,12,Math.PI/2-1.1,2.2,0,1),V);if(D.scale.copy(N.scale),D.position.set(0,.008*I,-.002),b.add(D),r)for(let z of[-1,1]){let $=Jt(new tn(.117*I,14,10,Math.PI/2+z*1.15-.22,.44,.9,1.35),V);$.scale.copy(N.scale),$.position.y=.008*I,b.add($)}}if(n.glasses){let V=jt("glass",()=>_t({color:1118481,roughness:.3,metalness:.6}));for(let T of[-1,1])b.add(Jt(new Ms(.024*I,.0035*I,6,16),V,T*.04*I,.01*I,.1*I,!1));b.add(te(.028*I,.004,.004,V,0,.012*I,.104*I))}if(n.ribbon){let V=_t({color:11540520,roughness:.5});for(let T of[-1,1]){let N=te(.07*I,.05*I,.02,V,T*.04*I,.03*I,-.118*I);N.rotation.z=T*.4,b.add(N)}}if(n.cast){let V=_t({color:15921902,roughness:.9});x[0].add(wa(.06*e,.05*e,.24*s,V))}return t.userData={legs:_,knees:p,arms:E,elbows:x,head:b,faceMat:C,faceN:H,faceG:Y,faceY:b.position.y,hipY:g},t}function no(n={}){return oh(n)}function gf(n){let t=n.userData;for(let e of t.legs)e.rotation.x=-Math.PI/2;for(let e of t.knees)e.rotation.x=Math.PI/2;for(let e of t.arms)e.rotation.x=-.75;for(let e of t.elbows||[])e.rotation.x=-.6;n.position.y-=t.hipY-.47}function zm(){let n=oh({girl:!0,ribbon:!0,hairColor:854538,height:1.8,armMul:1.85,claws:!0,headMul:1.12,torsoMat:jt("girlTop",()=>_t({map:mf({base:"#e9e8e2",noTie:!0,ribbon:!0}),roughness:.85})),faceTex:ff(!1),faceTexG:ff(!0),noFaceParts:!0});for(let t of n.userData.arms)t.rotation.z*=.4;return n.userData.faceY=n.userData.head.position.y,n}function Hm(){let n=new Bt,t=jt("handSkin",()=>_t({map:Rm(),color:13818548,roughness:.85})),e=Jt(new cr(.85,.2,.8,4,.08),t,0,0,0);n.add(e);let i=[],s=[-.31,-.105,.105,.31],r=[.5,.62,.6,.45];for(let h=0;h<4;h++){let f=new Bt;f.position.set(s[h],0,.38),n.add(f);let d=f,g=[];for(let p=0;p<3;p++){let m=r[h]*[.45,.32,.25][p],M=.075-p*.012,R=rh(M,m,t,0,0,m/2);R.rotation.x=Math.PI/2,f.add(R);let S=new Bt;S.position.set(0,0,m+M*.6),f.add(S),g.push(f),f=S}let _=Jt(new se(.09,.02,.08),jt("handNail",()=>_t({color:10132096,roughness:.4})),0,.05,-.02);f.add(_),i.push({base:d,segs:g})}let o=new Bt;o.position.set(.45,0,.02),o.rotation.y=.9,n.add(o);let l=rh(.085,.26,t,0,0,.13);l.rotation.x=Math.PI/2,o.add(l);let c=new Bt;c.position.set(0,0,.3),o.add(c);let a=rh(.07,.2,t,0,0,.1);a.rotation.x=Math.PI/2,c.add(a);let u=rh(.24,.5,t,0,.02,-.55);return u.rotation.x=Math.PI/2,n.add(u),n.scale.setScalar(1.9),n.userData={fingers:i,thumb:[o,c],skin:t,faceY:.15},n}function xf(n,t,e,i){n.userData.fingers.forEach((s,r)=>{let o=e?Math.sin(t*9+r*1.6)*.5:0;s.segs[0].rotation.x=-.15+o*.6+i*.9,s.segs[1].rotation.x=.2+Math.max(0,o)*.5+i*1.2,s.segs[2].rotation.x=.15+i*1}),n.userData.thumb[0].rotation.x=i*.8,n.userData.thumb[1].rotation.x=i*.9}function Gm(){let n=new Bt,t=jt("glassM",()=>new tr({color:13625070,roughness:.05,metalness:0,transparent:!0,opacity:.35,side:We})),e=jt("liqM",()=>_t({color:2042436,roughness:.1,transparent:!0,opacity:.85})),i=Ht.steel();for(let f=0;f<3;f++){let d=f/3*Math.PI*2,g=$e(.018,.018,1.05,i,Math.cos(d)*.22,.5,Math.sin(d)*.22,8);g.rotation.set(Math.sin(d)*.25,0,-Math.cos(d)*.25),n.add(g)}let s=Jt(new Ms(.2,.015,8,24),i,0,1,0);s.rotation.x=Math.PI/2,n.add(s),n.add(Jt(new tn(.17,20,14),t,0,1.15,0)),n.add(Jt(new tn(.15,16,12,0,Math.PI*2,Math.PI/2,Math.PI/2),_t({color:9089240,transparent:!0,opacity:.7}),0,1.15,0)),n.add($e(.03,.03,.08,_t({color:1911}),0,1.33,0));let r=Jt(new js(.05,.22,12),new qn({color:16754240,transparent:!0,opacity:.9}),0,1.48,0,!1);n.add(r);let o=Jt(new js(.025,.12,10),new qn({color:6990079}),0,1.43,0,!1);n.add(o);let l=new Zn(16751168,1.6,4,2);l.position.set(0,1.5,0),n.add(l);let c=Jt(new fn(.33,.42,1.05,24,1,!0,.35,Math.PI*2-.7),_t({color:15658730,roughness:.8,side:We}),0,1.4,0);n.add(c),n.add(Jt(new fn(.36,.33,.12,24,1,!0),_t({color:15658730,roughness:.8,side:We}),0,1.95,0));let a=Jt(new fn(.07,.32,.55,28,1,!0),t,0,2.2,0);n.add(a),n.add(Jt(new fn(.06,.27,.32,24),e,0,2.08,0)),n.add(Jt(new fn(.07,.07,.25,16,1,!0),t,0,2.6,0));let u=[];for(let f of[-1,1]){let d=new Bt;d.position.set(f*.36,1.85,0),n.add(d);let g=$e(.045,.045,.75,t,0,-.4,0,12);d.add(g),d.add($e(.04,.04,.35,e,0,-.62,0,10)),d.add(Jt(new tn(.045,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),t,0,-.77,0)),u.push(d)}let h=Jt(new Ji(1.1,28),_t({color:1712694,roughness:.05,metalness:.2,transparent:!0,opacity:.9,depthWrite:!1}),0,.006,0,!1);return h.rotation.x=-Math.PI/2,n.add(h),n.userData={flame:r,inner:o,light:l,arms:u,faceY:2.2},n}function Vm(){let n=jt("trackW",()=>_t({map:Nm(),roughness:.8})),t=oh({height:2.3,armMul:1.45,legMul:1.05,headMul:1.05,torsoMat:n,sleeveMat:n,lowerMat:n,shoeMat:Ht.shoeWht(),hairColor:657930,headMat:jt("shadowHead",()=>_t({color:723724,roughness:.9})),faceTex:df(),noFaceParts:!0}),e=t.userData;e.faceMat.map=df(),e.faceMat.transparent=!1;let i=te(.05,.025,.05,_t({color:13637656,roughness:.3}),0,-.055,.115);e.head.add(i),e.head.add($e(.003,.003,.25,_t({color:546}),.03,-.18,.08,6));for(let s of e.arms)s.scale.set(1.25,1,1.25);return t}function Wm(){let n=jt("suitW",()=>_t({map:Um(),roughness:.8})),t=jt("suitD",()=>_t({color:2829619,roughness:.8})),e=oh({height:2.05,armMul:1.2,torsoMat:n,sleeveMat:t,lowerMat:t,hair:!1,noFaceParts:!0,headMat:jt("stampH",()=>_t({color:5913120,roughness:.7}))}),i=e.userData;i.head.clear(),i.head.add($e(.05,.06,.22,_t({color:6964260,roughness:.6}),0,.02,0,16));let s=Jt(new fn(.2,.2,.08,32),[_t({color:9048080,roughness:.6}),_t({map:Om(),roughness:.7}),_t({color:9048080})],0,-.14,.02);s.rotation.x=Math.PI/2,i.head.add(s);let r=te(.13,.06,.13,_t({color:12589080,roughness:.6}),0,-.1,0);i.arms[0].add(r);let o=$e(.016,.02,.9,_t({color:8017200,roughness:.6}),0,-.45,.04,8);return i.elbows[1].children[2]?i.elbows[1].add(o):i.arms[1].add(o),o.position.y=-.55,o.rotation.x=.3,i.faceY=i.head.position.y-.14,e}function Xm(n){let t=new Bt,e=Jt(new tn(.24,24,16),_t({map:pf(n),roughness:.6}),0,.24,0);return t.add(e),t.userData={ball:e,faceY:.24},t}function _f(){let n=new Bt;n.add(te(1.8,1.05,.04,_t({color:15658734,roughness:.3,transparent:!0,opacity:.85}),0,3-.6,0)),n.add(te(.6,.45,.045,_t({color:16777215,roughness:.3}),0,2.35,.005));let t=Jt(new Ms(.23,.012,8,24),_t({color:13783066,metalness:.5,roughness:.4}),0,2.05,.28);return t.rotation.x=Math.PI/2,n.add(t),n}function qm(){let n=new Bt;n.add(te(.9,.6,.6,_t({map:Rs("#555c62"),metalness:.6,roughness:.5,wireframe:!1}),0,.5,0));for(let t=0;t<6;t++)n.add(Jt(new tn(.12,14,10),_t({map:pf(t),roughness:.6}),-.3+t%3*.3,.88,-.12+Math.floor(t/3)*.24));return n}function Ym(){let n=new Bt;n.add(te(.6,.4,.45,_t({color:10254924,roughness:.9}),0,.2,0));let t=te(.5,.08,.38,jt("track",()=>_t({map:Ta(),roughness:.8})),0,.42,0);return t.rotation.y=.2,n.add(t),n}function ah(){let n=new Bt,t=$e(.014,.014,1.2,_t({color:9071162,roughness:.7}),0,.03,0);return t.rotation.z=Math.PI/2,n.add(t),n.add(te(.06,.1,.32,_t({color:12032602,roughness:.95}),.62,.05,0)),n}function Cs(n,t){let e=n.userData;e.faceMat.map=t?e.faceG:e.faceN,e.faceMat.needsUpdate=!0}function Ra(n,t,e,i=.5){let s=n.userData;if(!s.legs)return;let r=Math.sin(t*e)*i;s.legs[0].rotation.x=r,s.legs[1].rotation.x=-r,s.arms&&(s.arms[0].rotation.x=-r*.3,s.arms[1].rotation.x=r*.3)}function Ca(){let n=new Bt;n.add(te(.62,.025,.44,Ht.laminate(),0,.72,0)),n.add(te(.58,.12,.38,Ht.darkSteel(),0,.64,-.02));for(let[i,s]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])n.add($e(.012,.012,.7,Ht.steel(),i,.35,s,8));n.add(te(.56,.015,.015,Ht.steel(),0,.12,-.18));let t=new Bt;t.position.set(0,0,.42),t.rotation.y=(Math.random()-.5)*.4,n.add(t),t.add(te(.4,.02,.38,Ht.plywood(),0,.44,0));let e=te(.38,.22,.015,Ht.plywood(),0,.68,.2);e.rotation.x=-.1,t.add(e);for(let[i,s]of[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]])t.add($e(.011,.011,.44,Ht.steel(),i,.22,s,8));if(t.add($e(.011,.011,.32,Ht.steel(),-.18,.6,.19,8)),t.add($e(.011,.011,.32,Ht.steel(),.18,.6,.19,8)),Math.random()<.4){let i=te(.21,.03,.28,_t({color:[8006186,2771578,3828282][Math.random()*3|0],roughness:.7}),(Math.random()-.5)*.3,.75,0);i.rotation.y=Math.random(),n.add(i)}return n}function Zm(){let n=new Bt;return n.add(te(1.8,.04,.75,Ht.laminate(),0,.78,0)),n.add(te(1.76,.74,.04,Ht.plywood(),0,.38,.33)),n.add(te(.5,.74,.7,Ht.plywood(),-.62,.38,0)),n.add(te(.5,.74,.7,Ht.plywood(),.62,.38,0)),n.add(te(.3,.04,.22,_t({color:820,roughness:.6}),.3,.82,-.05)),n}function yf(){let n=new Bt;for(let t of[-1,1])n.add(Jt(new se(.56,1.85,.5),[Ht.lockerSide(),Ht.lockerSide(),Ht.lockerSide(),Ht.lockerSide(),Ht.locker(),Ht.lockerSide()],t*.29,.925,0));return n}function Jm(){let n=new Bt;n.add(te(1.1,.04,.7,_t({color:9145480,roughness:.5}),0,.74,0)),n.add(te(.4,.7,.65,_t({color:7303534,roughness:.5}),.33,.36,0)),n.add(te(.5,.32,.03,Ht.monitorBlk(),-.1,1,-.2)),n.add(te(.06,.12,.06,Ht.monitorBlk(),-.1,.81,-.2)),n.add(te(.42,.02,.14,Ht.monitorBlk(),-.1,.77,.05));for(let e=0;e<4;e++){let i=te(.21,.004,.29,_t({color:15657696,roughness:.9}),-.3+Math.random()*.2,.765+e*.004,.15);i.rotation.y=Math.random()-.5,n.add(i)}let t=new Bt;return t.position.set(-.1,0,.55),n.add(t),t.add($e(.22,.22,.07,_t({color:546,roughness:.8}),0,.48,0,16)),t.add($e(.02,.02,.4,Ht.steel(),0,.25,0)),t.add(te(.42,.5,.06,_t({color:546,roughness:.8}),0,.82,.22)),n}function $m(){let n=new Bt;n.add(te(1.2,.04,.9,Ht.blackTop(),0,.88,0)),n.add(te(1.14,.84,.84,Ht.whiteCab(),0,.43,0));for(let t=-1;t<=1;t++)n.add(te(.005,.7,.8,_t({color:2457,roughness:.6}),t*.38,.43,.425));return Math.random()<.5&&(n.add($e(.05,.07,.15,_t({color:13625583,transparent:!0,opacity:.5,roughness:.05}),.2,.98,.1)),n.add($e(.012,.012,.3,Ht.steel(),-.4,1.05,-.35))),n}function Km(n){let t=new Bt;t.add(te(n,.06,.5,_t({color:5987936,roughness:.3}),0,.82,.25)),t.add(te(n,.78,.04,_t({color:4869456,roughness:.5}),0,.4,.48));for(let e=0;e<3;e++){let i=-n/2+n*(e+.5)/3,s=Jt(new fn(.2,.14,.12,20,1,!0),Ht.ceramic(),i,.8,.25);s.material.side=We,t.add(s),t.add($e(.015,.015,.18,Ht.steel(),i,.94,.05));let r=$e(.012,.012,.14,Ht.steel(),i,1.02,.11);r.rotation.x=Math.PI/2,t.add(r)}return t}function Qm(){let n=new Bt;n.add(te(.03,2,1.4,Ht.partition(),-.6,1.1,0));let t=te(.75,1.8,.03,Ht.partition(),-.15,1.05,.7);return t.rotation.y=-.6,t.position.x=.05,n.add(t),n.add(te(.38,.4,.5,Ht.ceramic(),.2,.2,-.35)),n.add(te(.4,.05,.55,Ht.ceramic(),.2,.42,-.33)),n.add(te(.42,.35,.18,Ht.ceramic(),.2,.62,-.62)),n}function jm(){let n=new Bt;return n.add($e(.08,.08,.48,Ht.red(),0,.26,0,16)),n.add($e(.03,.05,.08,Ht.monitorBlk(),0,.54,0)),n.add(te(.12,.03,.03,Ht.monitorBlk(),.04,.6,0)),n}function t0(){let n=new Bt,t=_t({color:13214247,metalness:.9,roughness:.3}),e=Jt(new Ms(.03,.007,8,16),t);e.rotation.x=Math.PI/2,n.add(e),n.add(te(.09,.006,.012,t,.07,0,0)),n.add(te(.012,.006,.025,t,.1,0,.012));let i=te(.05,.004,.08,_t({color:10491928,roughness:.6}),-.06,0,.03);return i.rotation.y=.4,n.add(i),n}var vi=Object.create(null);vi.open="0";vi.close="1";vi.ping="2";vi.pong="3";vi.message="4";vi.upgrade="5";vi.noop="6";var Pa=Object.create(null);Object.keys(vi).forEach(n=>{Pa[vi[n]]=n});var Ia={type:"error",data:"parser error"};var i0=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",s0=typeof ArrayBuffer=="function",r0=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,La=({type:n,data:t},e,i)=>i0&&t instanceof Blob?e?i(t):e0(t,i):s0&&(t instanceof ArrayBuffer||r0(t))?e?i(t):e0(new Blob([t]),i):i(vi[n]+(t||"")),e0=(n,t)=>{let e=new FileReader;return e.onload=function(){let i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function n0(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}var vf;function o0(n,t){if(i0&&n.data instanceof Blob)return n.data.arrayBuffer().then(n0).then(t);if(s0&&(n.data instanceof ArrayBuffer||r0(n.data)))return t(n0(n.data));La(n,!1,e=>{vf||(vf=new TextEncoder),t(vf.encode(e))})}var a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Da=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<a0.length;n++)Da[a0.charCodeAt(n)]=n;var l0=n=>{let t=n.length*.75,e=n.length,i,s=0,r,o,l,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);let a=new ArrayBuffer(t),u=new Uint8Array(a);for(i=0;i<e;i+=4)r=Da[n.charCodeAt(i)],o=Da[n.charCodeAt(i+1)],l=Da[n.charCodeAt(i+2)],c=Da[n.charCodeAt(i+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|l>>2,u[s++]=(l&3)<<6|c&63;return a};var h1=typeof ArrayBuffer=="function",Na=(n,t)=>{if(typeof n!="string")return{type:"message",data:c0(n,t)};let e=n.charAt(0);return e==="b"?{type:"message",data:u1(n.substring(1),t)}:Pa[e]?n.length>1?{type:Pa[e],data:n.substring(1)}:{type:Pa[e]}:Ia},u1=(n,t)=>{if(h1){let e=l0(n);return c0(e,t)}else return{base64:!0,data:n}},c0=(n,t)=>t==="blob"?n instanceof Blob?n:new Blob([n]):n instanceof ArrayBuffer?n:n.buffer;var h0="",u0=(n,t)=>{let e=n.length,i=new Array(e),s=0;n.forEach((r,o)=>{La(r,!1,l=>{i[o]=l,++s===e&&t(i.join(h0))})})},f0=(n,t)=>{let e=n.split(h0),i=[];for(let s=0;s<e.length;s++){let r=Na(e[s],t);if(i.push(r),r.type==="error")break}return i};function d0(){return new TransformStream({transform(n,t){o0(n,e=>{let i=e.length,s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);let r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);let r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}var Mf;function lh(n){return n.reduce((t,e)=>t+e.length,0)}function ch(n,t){if(n[0].length===t)return n.shift();let e=new Uint8Array(t),i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function p0(n,t){Mf||(Mf=new TextDecoder);let e=[],i=0,s=-1,r=!1;return new TransformStream({transform(o,l){for(e.push(o);;){if(i===0){if(lh(e)<1)break;let c=ch(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(lh(e)<2)break;let c=ch(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(lh(e)<8)break;let c=ch(e,8),a=new DataView(c.buffer,c.byteOffset,c.length),u=a.getUint32(0);if(u>Math.pow(2,21)-1){l.enqueue(Ia);break}s=u*Math.pow(2,32)+a.getUint32(4),i=3}else{if(lh(e)<s)break;let c=ch(e,s);l.enqueue(Na(r?c:Mf.decode(c),t)),i=0}if(s===0||s>n){l.enqueue(Ia);break}}}})}var Sf=4;function De(n){if(n)return f1(n)}function f1(n){for(var t in De.prototype)n[t]=De.prototype[t];return n}De.prototype.on=De.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};De.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};De.prototype.off=De.prototype.removeListener=De.prototype.removeAllListeners=De.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};De.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};De.prototype.emitReserved=De.prototype.emit;De.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};De.prototype.hasListeners=function(n){return!!this.listeners(n).length};var ji=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),Dn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),m0="arraybuffer";function hh(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}var d1=Dn.setTimeout,p1=Dn.clearTimeout;function ts(n,t){t.useNativeTimers?(n.setTimeoutFn=d1.bind(Dn),n.clearTimeoutFn=p1.bind(Dn)):(n.setTimeoutFn=Dn.setTimeout.bind(Dn),n.clearTimeoutFn=Dn.clearTimeout.bind(Dn))}var m1=1.33;function g0(n){return typeof n=="string"?g1(n):Math.ceil((n.byteLength||n.size)*m1)}function g1(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function uh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function x0(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function _0(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r.slice(1).join("="))}return t}var fh=class extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}},es=class extends De{constructor(t){super(),this.writable=!1,ts(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new fh(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){let e=Na(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){let t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){let e=x0(t);return e.length?"?"+e:""}};var Ua=class extends es{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";let e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){let e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};f0(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,u0(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=uh()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}};var y0=!1;try{y0=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}var v0=y0;function x1(){}var bf=class extends Ua{constructor(t){if(super(t),typeof location<"u"){let e=location.protocol==="https:",i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){let i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){let t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}},Ps=class n extends De{constructor(t,e,i){super(),this.createRequest=t,ts(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;let e=hh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;let i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=n.requestsCount++,n.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=x1,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete n.requests[this._index],this._xhr=null}}_onLoad(){let t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Ps.requestsCount=0;Ps.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",M0);else if(typeof addEventListener=="function"){let n="onpagehide"in Dn?"pagehide":"unload";addEventListener(n,M0,!1)}}function M0(){for(let n in Ps.requests)Ps.requests.hasOwnProperty(n)&&Ps.requests[n].abort()}var _1=(function(){let n=S0({xdomain:!1});return n&&n.responseType!==null})(),Is=class extends bf{constructor(t){super(t);let e=t&&t.forceBase64;this.supportsBinary=_1&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Ps(S0,this.uri(),t)}};function S0(n){let t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||v0))return new XMLHttpRequest}catch{}if(!t)try{return new Dn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}var b0=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",Ef=class extends es{get name(){return"websocket"}doOpen(){let t=this.uri(),e=this.opts.protocols,i=b0?{}:hh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let i=t[e],s=e===t.length-1;La(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&ji(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=uh()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}},Tf=Dn.WebSocket||Dn.MozWebSocket,Ls=class extends Ef{createSocket(t,e,i){return b0?new Tf(t,e,i):e?new Tf(t,e):new Tf(t)}doWrite(t,e){this.ws.send(e)}};var io=class extends es{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{let e=p0(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=d0();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();let r=()=>{i.read().then(({done:l,value:c})=>{l||(this.onPacket(c),r())}).catch(l=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let i=t[e],s=e===t.length-1;this._writer.write(i).then(()=>{s&&ji(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}};var wf={websocket:Ls,webtransport:io,polling:Is};var y1=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,v1=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function so(n){if(n.length>8e3)throw"URI too long";let t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=y1.exec(n||""),r={},o=14;for(;o--;)r[v1[o]]=s[o]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=M1(r,r.path),r.queryKey=S1(r,r.query),r}function M1(n,t){let e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function S1(n,t){let e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}var Af=typeof addEventListener=="function"&&typeof removeEventListener=="function",dh=[];Af&&addEventListener("offline",()=>{dh.forEach(n=>n())},!1);var hr=class n extends De{constructor(t,e={}){var i,s;if(super(),this.binaryType=m0,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){let r=so(t);e.hostname=r.host,e.secure=r.protocol==="https"||r.protocol==="wss",e.port=r.port,r.query&&(e.query=r.query)}else e.host&&(e.hostname=so(e.host).host);if(ts(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),e.transportImplementations&&e.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");e.transportImplementations||!((i=e.transports)===null||i===void 0)&&i.length&&typeof e.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=e.transportImplementations)!==null&&s!==void 0?s:e.transports).forEach(r=>{let o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=e.transports?[...e.transports]:["polling","websocket","webtransport"],this._transportsByName=wf),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=_0(this.opts.query)),Af&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},dh.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){let e=Object.assign({},this.opts.query);e.EIO=Sf,e.transport=t,this.id&&(e.sid=this.id);let i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let t=this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}_probe(t){let e=this.createTransport(t),i=!1;n.priorWebsocketSuccess=!1;let s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",h=>{if(!i)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;n.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{let f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){i||(i=!0,u(),e.close(),e=null)}let o=h=>{let f=new Error("probe error: "+h);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function l(){o("transport closed")}function c(){o("socket closed")}function a(h){e&&h.name!==e.name&&r()}let u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",l),this.off("close",c),this.off("upgrading",a)};e.once("open",s),e.once("error",o),e.once("close",l),this.once("close",c),this.once("upgrading",a),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onOpen(){if(this.readyState="open",n.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){let s=this.writeBuffer[i].data;if(s&&(e+=g0(s)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ji(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;let r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){let t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Af&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let i=dh.indexOf(this._offlineEventListener);i!==-1&&dh.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){let e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}};hr.protocol=Sf;var Qw=hr.protocol;function T0(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=so(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";let r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}var Lf={};Ng(Lf,{Decoder:()=>Pf,Encoder:()=>Cf,PacketType:()=>ne,isPacketValid:()=>I1,protocol:()=>C0});var T1=typeof ArrayBuffer=="function",E1=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,E0=Object.prototype.toString,w1=typeof Blob=="function"||typeof Blob<"u"&&E0.call(Blob)==="[object BlobConstructor]",A1=typeof File=="function"||typeof File<"u"&&E0.call(File)==="[object FileConstructor]";function Fa(n){return T1&&(n instanceof ArrayBuffer||E1(n))||w1&&n instanceof Blob||A1&&n instanceof File}function Oa(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(Oa(n[e]))return!0;return!1}if(Fa(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Oa(n.toJSON(),!0);for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&Oa(n[e]))return!0;return!1}function w0(n){let t=[],e=n.data,i=n;return i.data=ph(e,t),i.attachments=t.length,{packet:i,buffers:t}}function ph(n,t,e){if(!n)return n;if(Fa(n)){let i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){let i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=ph(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return ph(n.toJSON(),t,!0);let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=ph(n[s],t));return i}return n}function A0(n,t){return n.data=Rf(n.data,t),delete n.attachments,n}function Rf(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=Rf(n[e],t);else if(typeof n=="object")for(let e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=Rf(n[e],t));return n}var R0=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],C0=5,ne;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(ne||(ne={}));var Cf=class{constructor(t){this.replacer=t}encode(t){return(t.type===ne.EVENT||t.type===ne.ACK)&&Oa(t)?this.encodeAsBinary({type:t.type===ne.EVENT?ne.BINARY_EVENT:ne.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===ne.BINARY_EVENT||t.type===ne.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){let e=w0(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}},Pf=class n extends De{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);let i=e.type===ne.BINARY_EVENT;i||e.type===ne.BINARY_ACK?(e.type=i?ne.EVENT:ne.ACK,this.reconstructor=new If(e)):super.emitReserved("decoded",e)}else if(Fa(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0,i={type:Number(t.charAt(0))};if(ne[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===ne.BINARY_EVENT||i.type===ne.BINARY_ACK){let r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);let o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");let l=Number(o);if(!P0(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=l}if(t.charAt(e+1)==="/"){let r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";let s=t.charAt(e+1);if(s!==""&&Number(s)==s){let r=e+1;for(;++e;){let o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){let r=this.tryParse(t.substr(e));if(n.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case ne.CONNECT:return mh(e);case ne.DISCONNECT:return e===void 0;case ne.CONNECT_ERROR:return typeof e=="string"||mh(e);case ne.EVENT:case ne.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&R0.indexOf(e[0])===-1);case ne.ACK:case ne.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},If=class{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){let e=A0(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function R1(n){return typeof n=="string"}var P0=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function C1(n){return n===void 0||P0(n)}function mh(n){return Object.prototype.toString.call(n)==="[object Object]"}function P1(n,t){switch(n){case ne.CONNECT:return t===void 0||mh(t);case ne.DISCONNECT:return t===void 0;case ne.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&R0.indexOf(t[0])===-1);case ne.ACK:return Array.isArray(t);case ne.CONNECT_ERROR:return typeof t=="string"||mh(t);default:return!1}}function I1(n){return R1(n.nsp)&&C1(n.id)&&P1(n.type,n.data)}function Jn(n,t,e){return n.on(t,e),function(){n.off(t,e)}}var L1=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),ro=class extends De{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let t=this.io;this.subs=[Jn(t,"open",this.onopen.bind(this)),Jn(t,"packet",this.onpacket.bind(this)),Jn(t,"error",this.onerror.bind(this)),Jn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,s,r;if(L1.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;let o={type:ne.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){let u=this.ids++,h=e.pop();this._registerAckCallback(u,h),o.id=u}let l=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var i;let s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);e.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(r),e.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((i,s)=>{let r=(o,l)=>o?s(o):i(l);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());let i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;let e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:ne.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){let i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case ne.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ne.EVENT:case ne.BINARY_EVENT:this.onevent(t);break;case ne.ACK:case ne.BINARY_ACK:this.onack(t);break;case ne.DISCONNECT:this.ondisconnect();break;case ne.CONNECT_ERROR:this.destroy();let i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){let e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){let e=this._anyListeners.slice();for(let i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){let e=this,i=!1;return function(...s){i||(i=!0,e.packet({type:ne.ACK,id:t,data:s}))}}onack(t){let e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ne.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){let e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){let e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let e=this._anyOutgoingListeners.slice();for(let i of e)i.apply(this,t.data)}}};function ur(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ur.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};ur.prototype.reset=function(){this.attempts=0};ur.prototype.setMin=function(n){this.ms=n};ur.prototype.setMax=function(n){this.max=n};ur.prototype.setJitter=function(n){this.jitter=n};var oo=class extends De{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,ts(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ur({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;let s=e.parser||Lf;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new hr(this.uri,this.opts);let e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;let s=Jn(e,"open",function(){i.onopen(),t&&t()}),r=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=Jn(e,"error",r);if(this._timeout!==!1){let l=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let t=this.engine;this.subs.push(Jn(t,"ping",this.onping.bind(this)),Jn(t,"data",this.ondata.bind(this)),Jn(t,"error",this.onerror.bind(this)),Jn(t,"close",this.onclose.bind(this)),Jn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){ji(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new ro(this,t,e),this.nsps[t]=i),i}_destroy(t){let e=Object.keys(this.nsps);for(let i of e)if(this.nsps[i].active)return;this._close()}_packet(t){let e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let e=this.backoff.duration();this._reconnecting=!0;let i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){let t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}};var Ba={};function ka(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};let e=T0(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,o=Ba[s]&&r in Ba[s].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o,c;return l?c=new oo(i,t):(Ba[s]||(Ba[s]=new oo(i,t)),c=Ba[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(ka,{Manager:oo,Socket:ro,io:ka,connect:ka});var D1="44\uAD50\uC2DC \uC0DD\uC874\uC218\uC5C5",Y0=new URLSearchParams(location.search).get("srv")||(location.hostname.endsWith("onrender.com")?"":"https://random-football-cflg.onrender.com"),yo={bell:{text:"\uC218\uC5C5 \uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uAD50\uC2E4 \uC548\uC5D0 \uC788\uC744 \uAC83. \uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB2C8\uB294 \uC0AC\uB78C\uB9CC \uC8FD\uC778\uB2E4.",why:'\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uBCF5\uB3C4\uC5D0 \uC788\uC5C8\uB2E4. "\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!"'},run:{text:"\uBCF5\uB3C4\uC5D0\uC11C\uB294 \uB5A0\uB4E4\uC9C0 \uB9D0 \uAC83. \uB370\uCE7C\uCF54\uB9C8\uB2C8\uB294 \uB208\uC774 \uC5C6\uB294 \uB300\uC2E0 \uC18C\uB9AC\uB97C \uB4E3\uACE0, \uBCBD\uACFC \uBC14\uB2E5\uC744 \uC811\uC5B4 \uC0AC\uB78C\uC744 \uADF8\uB9BC\uC73C\uB85C \uB9CC\uB4E0\uB2E4.",why:'"\uB370\uCE7C\uCF54\uB9C8\uB2C8?" \uBCBD\uC774 \uC811\uD614\uB2E4. \uB098\uB294 \uBCBD\uC5D0 \uADF8\uB824\uC9C4 \uADF8\uB9BC\uC774 \uB418\uC5C8\uB2E4.'},mirror:{text:"\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uC18D\uC758 \uB098\uC640 \uC624\uB798 \uB208\uC744 \uB9C8\uC8FC\uCE58\uC9C0 \uB9D0 \uAC83. \uB3C4\uD50C\uAC31\uC5B4\uB294 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C\uB294 \uBABB \uB098\uC628\uB2E4.",why:"\uAC70\uC6B8 \uC18D\uC758 \uB0B4\uAC00 \uC6C3\uC5C8\uB2E4. \uADF8\uB9AC\uACE0 \uB098\uB97C \uAC70\uC6B8 \uC18D\uC73C\uB85C \uB04C\uACE0 \uB4E4\uC5B4\uAC00 \uB0B4 \uBAB8\uC744 \uCC28\uC9C0\uD588\uB2E4."},sci:{text:"\uACFC\uD559 \uC2E4\uD5D8\uC2E4 \uC548\uC804 \uC218\uCE59: \uC2E4\uD5D8 \uC911 \uC7A5\uB09C\uC744 \uCE58\uAC70\uB098 \uC790\uB9AC\uB97C \uBE44\uC6B0\uC9C0 \uC54A\uB294\uB2E4. \uACFC\uD559\uC2E4 \uAD34\uBB3C \uC55E\uC5D0\uC11C \uB4F1\uC744 \uB3CC\uB824 \uB3C4\uB9DD\uCE58\uC9C0 \uB9D0 \uAC83. \uC0AC\uACE0\uAC00 \uB098\uBA74 \uD070 \uC18C\uB9AC\uB85C \uC54C\uB9B0\uB2E4 \u2014 \u300C\uC120\uC0DD\uB2D8!\u300D",why:"\uB4F1\uC744 \uB3CC\uB824 \uB3C4\uB9DD\uCCE4\uB2E4. \uC2DC\uD5D8\uAD00\uC774 \uB098\uB97C \uAC00\uB9AC\uD0A4\uC790 \uBAB8\uC774 \uAD73\uC5C8\uACE0, \uD50C\uB77C\uC2A4\uD06C \uC18D\uC73C\uB85C \uBE68\uB824 \uB4E4\uC5B4\uAC00 \uC54C\uCF54\uC62C\uB7A8\uD504 \uBD88\uAF43\uC5D0 \uB179\uC544\uB0B4\uB838\uB2E4."},bc:{text:"\uBC29\uC1A1 \uAD34\uB2F4: \uBC29\uC1A1\uC774 \uB098\uC624\uBA74 \uADC0\uB97C \uB9C9\uC744 \uAC83. \uBC29\uC1A1\uC744 \uB530\uB77C\uAC00\uBA74 \uB3CC\uC544\uC624\uC9C0 \uBABB\uD55C\uB2E4.",why:"\uBC29\uC1A1\uC744 \uB05D\uAE4C\uC9C0 \uB4E4\uC5B4 \uBC84\uB838\uB2E4. \uC815\uC2E0\uC744 \uCC28\uB838\uC744 \uB550 \uC774\uBBF8 \uBC29\uC1A1\uC2E4 \uBB38 \uC55E\uC774\uC5C8\uB2E4. \uADF8\uB9AC\uACE0 \uB2E4\uC2DC\uB294 \uB3CC\uC544\uC624\uC9C0 \uBABB\uD588\uB2E4."},hall:{text:"\uBCF5\uB3C4\uC5D0\uC11C \uB6F0\uC9C0 \uC54A\uB294\uB2E4. \uB6F0\uBA74 \uD559\uC0DD\uC8FC\uC784\uC774 \uC628\uB2E4. \uAD50\uC2E4\uC774\uB098 \uC0AC\uBB3C\uD568\uC73C\uB85C \uD53C\uD560 \uAC83.",why:'\uBCF5\uB3C4\uC5D0\uC11C \uB6F0\uC5C8\uB2E4. "\uBC8C\uC810." \uCEE4\uB2E4\uB780 \uB3C4\uC7A5\uC774 \uB0B4 \uC704\uB85C \uCF85 \uD558\uACE0 \uCC0D\uD614\uB2E4.'},phone:{text:"\uAD50\uB0B4\uC5D0\uC11C \uD734\uB300\uD3F0 \uC0AC\uC6A9 \uAE08\uC9C0. \uD734\uB300\uD3F0\uC744 \uAEBC\uB0B4\uBA74 \uD559\uC0DD\uC8FC\uC784\uC774 \uC628\uB2E4.",why:"\uD734\uB300\uD3F0\uC744 \uAEBC\uB0C8\uB2E4. \uD559\uC0DD\uC8FC\uC784\uC774 \uD734\uB300\uD3F0\uACFC \uD568\uAED8 \uB098\uB97C \uC555\uC218\uD588\uB2E4."},gym:{text:"\uCCB4\uC721\uAD00 \uC548\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uCCB4\uC721\uBCF5\uC744 \uC785\uC744 \uAC83. \uD638\uB8E8\uB77C\uAE30\uAC00 \uC6B8\uB9AC\uBA74 \uACF5\uC774 \uB2EC\uB824\uB4E0\uB2E4.",why:"\uAD50\uBCF5\uC744 \uC785\uC740 \uCC44 \uCCB4\uC721\uAD00\uC5D0 \uB4E4\uC5B4\uAC14\uB2E4. \uC091\u2014 \uD638\uB8E8\uB77C\uAE30 \uC18C\uB9AC\uC640 \uD568\uAED8 \uB098\uB3C4 \uACF5\uC774 \uB418\uC5C8\uB2E4."}},ho={n1:{t:"\uCE60\uD310",b:'"\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83."'},n2:{t:"\uD654\uC7A5\uC2E4 \uBCBD \uB099\uC11C",b:`\uAC70\uC6B8 \uC18D \uC560\uB4E4\uC740 \uB2E8\uCD94\uAC00 \uBC18\uB300\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC5B4.
\uACC4\uC18D \uBCF4\uACE0 \uC788\uC73C\uBA74 \uBA48\uCDC4\uB2E4\uAC00\u2026 \uC6C3\uC5B4.
\uC6C3\uC73C\uBA74 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C \uB3C4\uB9DD\uCCD0. \uAC54\uB294 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C\uB294 \uBABB \uB098\uC640.`},n3:{t:"1\uD559\uB144 3\uBC18 \uCABD\uC9C0",b:`3\uBC18\uC740 \uB2E4 \uB05D\uB0AC\uC5B4.
"\uB370\uCE7C\uCF54\uB9C8\uB2C8?" \uD558\uB294 \uC18C\uB9AC\uAC00 \uB4E4\uB9AC\uBA74 \uC228\uB3C4 \uC26C\uC9C0 \uB9C8.
\uAC54\uB294 \uB208\uC774 \uC5C6\uC5B4. \uC18C\uB9AC \uB098\uB294 \uACF3\uC744 \uBCBD\uC9F8\uB85C \uC811\uC5B4 \uBC84\uB824.
\uBB3C\uAC74\uC744 \uB358\uC9C0\uBA74 \uADF8\uCABD\uC73C\uB85C \uAC00. \uBE57\uC790\uB8E8\uB4E0 \uD578\uB4DC\uD3F0\uC774\uB4E0.`},n4:{t:"\uAD50\uBB34\uC2E4 \uBA54\uBAA8",b:`[\uCCB4\uC721\uAD00 \uAD50\uCE59] \uCCB4\uC721\uAD00 \uC548\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uCCB4\uC721\uBCF5 \uCC29\uC6A9.
\uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0 \uCCB4\uC721\uBCF5 \uD55C \uBC8C \uC788\uC74C.
\uC9C0\uD558 \uACC4\uB2E8 \uCCA0\uBB38 \uC5F4\uC1E0 \u2014 \uCCB4\uC721\uAD00 \uB18D\uAD6C \uACE8\uB300 \uC544\uB798 \uBCF4\uAD00.`},n5:{t:"\uACFC\uD559 \uC2E4\uD5D8\uC2E4 \uC548\uC804 \uC218\uCE59 (\uBCBD\uC5D0 \uBD99\uC740 \uC885\uC774)",b:`1. \uC0AC\uACE0\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uD070 \uC18C\uB9AC\uB85C \uC54C\uB9B0\uB2E4.
2. \uC2E4\uD5D8 \uC911 \uC7A5\uB09C\uC744 \uCE58\uAC70\uB098 \uC790\uB9AC\uB97C \uBE44\uC6B0\uC9C0 \uC54A\uB294\uB2E4.
3. \uC2E4\uD5D8 \uAE30\uAD6C\uC640 \uC57D\uD488\uC744 \uBC16\uC73C\uB85C \uAC00\uC838\uAC00\uC9C0 \uC54A\uB294\uB2E4.
4. \uC2E4\uD5D8 \uC804\xB7\uD6C4\uC5D0 \uC2E4\uD5D8\uB300 \uC8FC\uBCC0\uC744 \uC815\uB9AC\uC815\uB3C8\uD55C\uB2E4.
5. \uC548\uC804\uC7A5\uAD6C\uB97C \uCC29\uC6A9\uD558\uACE0 \uAE34 \uBA38\uB9AC\uB294 \uBB36\uB294\uB2E4.

\uC544\uB798\uC5D0 \uBCFC\uD39C\uC73C\uB85C: \uB4F1 \uB3CC\uB9AC\uC9C0 \uB9C8. \uB6F0\uC9C0 \uB9C8. \uC7A1\uD788\uBA74 \uC120\uC0DD\uB2D8 \uBD88\uB7EC.`},n7:{t:"\uACFC\uD559\uC2E4 \uCABD\uC9C0",b:`\uC0AC\uBB3C\uD568\uC5D0 \uC228\uC73C\uBA74 \uB370\uCE7C\uCF54\uB9C8\uB2C8\uD55C\uD14C \uC548 \uB4E4\uCF1C.
\uADFC\uB370 \uC548\uC740 \uC881\uC544\uC11C 8\uCD08 \uC774\uC0C1\uC740 \uBABB \uBC84\uD168.
\uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uC218\uC5C5 \uC2DC\uAC04\uC5D0\uB9CC \uB098\uC640. \uAD50\uC2E4 \uC548\uC5D0\uB9CC \uC788\uC73C\uBA74 \uC6C3\uC73C\uBA74\uC11C \uBCF4\uAE30\uB9CC \uD574.`},n6:{t:"1\uD559\uB144 1\uBC18 \uCC45\uC0C1 \uC704 \uC2E0\uBB38 \uC2A4\uD06C\uB7A9",b:`\u300C\uC138\uACC4 \uACF3\uACF3\uC5D0 \uC815\uCCB4\uBD88\uBA85\uC758 '\uAC80\uC740 \uC6D0' \uBC1C\uC0DD\u2026 \uC2E4\uC885\uC790 \uCC9C \uBA85 \uB118\uC5B4\u300D

\uC5EC\uBC31\uC5D0 \uC801\uD78C \uAE00\uC528:
\uC548\uC5D0\uC11C\uC758 1\uB144\uC740 \uBC16\uC5D0\uC11C\uC758 \uD558\uB8E8.
\uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uC5D0 \uC788\uB2E4.`}},N1=[{name:"\uCD5C\uC6D0\uADE0 (A\uC870)",x:3,y:7,o:{},big:!0,lines:["\uB098, \uB098\uB294 \uC5EC\uAE30\uC11C \uC548 \uB098\uAC08 \uAC70\uC57C\u2026","\uCCAB \uD0D0\uC0C9 \uB54C \uD63C\uC790 \uB3C4\uB9DD\uCCD0\uC11C\u2026 \uBBF8\uC548\uD588\uC5B4, \uB3C4\uC724\uC544."]},{name:"\uC784\uC120\uC544 (A\uC870)",x:5,y:7,o:{girl:!0,hairColor:2759186},lines:["\uBCF5\uB3C4\uC5D0\uC120 \uC808\uB300 \uC18C\uB9AC \uB0B4\uC9C0 \uB9C8. 3\uBC18\uC774\u2026 \uC804\uBD80 \uBCBD\uC5D0 \uADF8\uB824\uC838 \uC788\uC5C8\uC5B4.","\uB370\uCE7C\uCF54\uB9C8\uB2C8\uD55C\uD14C \uCAD3\uAE30\uBA74 \uBB50\uB4E0 \uB358\uC838. \uC18C\uB9AC \uB098\uB294 \uCABD\uC73C\uB85C \uAC00\uB2C8\uAE4C."]},{name:"\uCD5C\uC11C\uC815 (A\uC870)",x:11,y:7,o:{girl:!0,hairColor:5913122},big:!0,lines:["\uD654\uC7A5\uC2E4\uC5D0\uC11C \uB098\uC628 \uC608\uB9BC\uC774 \uC190\uC774\u2026 \uC774\uC0C1\uD588\uC5B4. \uC9C4\uC9DC \uC608\uB9BC\uC774\uB294 \uAC70\uC6B8 \uC18D\uC5D0\uC11C \uC0B4\uB824 \uB2EC\uB77C\uACE0 \uD588\uACE0."]},{name:"\uAE40\uD0DC\uD604 (B\uC870)",x:3,y:3,o:{hairColor:13148232,cast:!0},lines:["\uD314\uC740 \uC2E0\uACBD \uC4F0\uC9C0 \uB9C8. \uCCB4\uC721\uAD00 \uAC08 \uB550 \uCCB4\uC721\uBCF5 \uAF2D \uCC59\uACA8. \uC0C1\uC758\uB4E0 \uD558\uC758\uB4E0 \uD558\uB098\uB9CC \uC785\uC5B4\uB3C4 \uB41C\uB300."]},{name:"\uB0A8\uC815\uC6B0 (B\uC870)",x:5,y:5,o:{glasses:!0},lines:["\uB3C4\uC724\uC544, \uC885 \uCE58\uAE30 \uC804\uC5D0 \uBB34\uC870\uAC74 \uAD50\uC2E4\uB85C \uB3CC\uC544\uC640. \uC120\uC0DD\uB2D8\uCC98\uB7FC \uB418\uAE30 \uC2EB\uC73C\uBA74.","\uC870\uBCC4\uB85C \uAD6C\uC5ED \uB098\uB220\uC11C \uC9C0\uB3C4 \uB9CC\uB4E4\uACE0 \uC788\uC5B4. \uB10C A\uC870\uC57C. \uAC00\uBC29\uC5D0 \uC9C0\uB3C4 \uB123\uC5B4 \uB1A8\uC5B4.","\uAD50\uBB34\uC2E4 \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0 \uCCB4\uC721\uBCF5 \uC0C1\uC758\uAC00 \uC788\uC5C8\uACE0, \uAD50\uC2E4 \uB4A4 \uC0AC\uBB3C\uD568 \uCABD\uC5D0 \uD558\uC758\uAC00 \uC788\uC744 \uAC70\uC57C."]},{name:"\uD55C\uC218\uC9C4 (B\uC870)",x:9,y:5,o:{girl:!0,hairColor:3810328},lines:["\uAD34\uBB3C\uB4E4\uC740 \uB2E4 \uAD50\uCE59\uC774\uB791 \uAD00\uB828 \uC788\uB294 \uAC83 \uAC19\uC544. \uAD50\uCE59\uB9CC \uC9C0\uD0A4\uBA74 \uC0B4 \uC218 \uC788\uC5B4.","\uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uAD50\uC2E4 \uC548\uAE4C\uC9C0\uB294 \uC548 \uB4E4\uC5B4\uC640. \uC218\uC5C5 \uC2DC\uAC04\uC5D4 \uBB34\uC870\uAC74 \uC5EC\uAE30 \uC788\uC5B4."]},{name:"\uCD5C\uB098\uB9AC (B\uC870)",x:11,y:5,o:{girl:!0,hairColor:2233616},lines:["3\uBC18\uC5D0 \uCE5C\uAD6C \uC788\uC5C8\uB294\uB370\u2026 \uC5F0\uB77D\uC774 \uC548 \uB3FC. \uD578\uB4DC\uD3F0\uC740 \uCF1C\uC9C0\uB294\uB370 \uC2E0\uD638\uAC00 \uD558\uB098\uB3C4 \uC548 \uC7A1\uD600."]},{name:"\uC774\uC18C\uD55C (C\uC870)",x:9,y:3,o:{hairColor:2763312},lines:["\uC6B0\uB9AC \uC0BC\uCD0C\uC740 \uAC80\uC740 \uC6D0\uC5D0\uC11C \uB098\uC628 \uC801 \uC788\uC5B4. \uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uB798.","\uC548\uC5D0\uC11C\uC758 1\uB144\uC774 \uBC16\uC5D0\uC11C\uB294 \uD558\uB8E8\uB798. \uADF8\uB7EC\uB2C8\uAE4C \uAD76\uC5B4 \uC8FD\uC744 \uAC71\uC815\uC740 \uC5C6\uC5B4.","\uACFC\uD559\uC2E4 \uAD34\uBB3C \uC55E\uC5D0\uC11C\uB294 \uC808\uB300 \uB4F1 \uB3CC\uB9AC\uC9C0 \uB9C8."]},{name:"\uAE40\uC9C0\uC740 (C\uC870)",x:11,y:3,o:{girl:!0,glasses:!0,hairColor:6965802},lines:["\uACFC\uD559\uC2E4 \uAD34\uBB3C\uD55C\uD14C \uC7A1\uD788\uBA74 \uD06C\uAC8C \uC18C\uB9AC\uCCD0. \u300C\uC120\uC0DD\uB2D8!\u300D \uD558\uACE0. \uC0AC\uACE0\uAC00 \uB098\uBA74 \uD070 \uC18C\uB9AC\uB85C \uC54C\uB9AC\uB77C\uB294 \uC218\uCE59\uC774 \uC788\uAC70\uB4E0.","\uADFC\uB370 \uC18C\uB9AC\uCE58\uBA74\u2026 \uB370\uCE7C\uCF54\uB9C8\uB2C8\uAC00 \uB4E4\uC744 \uAC70\uC57C."]},{name:"\uCD5C\uD604\uC900 (D\uC870)",x:3,y:5,o:{hairColor:8022672},lines:["\uD654\uC7A5\uC2E4\uC5D0\uC11C \uB098\uC628 \uC560 \uC190\uC744 \uBD24\uC5B4. \uB2E8\uCD94\uAC00 \uBC18\uB300\uCABD\uC774\uC5C8\uC5B4. \uAC70\uC6B8 \uC18D \uC560\uB4E4\uC740 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB860 \uBABB \uB098\uC640."]},{name:"\uC591\uC18C\uC5F0 (D\uC870)",x:9,y:7,o:{girl:!0,hairColor:9079438},lines:["\uBC29\uC1A1 \uB098\uC624\uBA74 \uBB34\uC870\uAC74 \uADC0 \uB9C9\uC544. 2\uD559\uB144 \uC120\uBC30\uB4E4\uC774 \uBC29\uC1A1 \uB4E3\uACE0 \uC120\uC0DD\uB2D8 \uB530\uB77C \uB2E4 \uB098\uAC00 \uBC84\uB838\uB300."]},{name:"\uC804\uC11D\uC624 (D\uC870)",x:5,y:3,o:{},lines:["\uAD34\uBB3C\uC774\uB4E0 \uBB50\uB4E0 \uB2E4 \uAC19\uC774 \uB36E\uCE58\uBA74 \uC774\uAE38 \uC218 \uC788\uC744 \uC904 \uC54C\uC558\uB294\uB370\u2026","\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uC624\uB798 \uBCF4\uC9C0 \uB9C8. \uC9C4\uC9DC\uC57C."]}],yh={decal:"\uBCF5\uB3C4\uC5D0\uC11C \uB5A0\uB4E4\uC9C0 \uC54A\uB294\uB2E4",sci:"\uC2E4\uD5D8 \uC911 \uC7A5\uB09C\uC744 \uCE58\uAC70\uB098 \uC790\uB9AC\uB97C \uBE44\uC6B0\uC9C0 \uC54A\uB294\uB2E4",bc:"\uBC29\uC1A1\uC774 \uB098\uC624\uBA74 \uD558\uB358 \uC77C\uC744 \uBA48\uCD94\uACE0 \uADC0\uB97C \uB9C9\uB294\uB2E4",run:"\uBCF5\uB3C4\uC5D0\uC11C \uB6F0\uC9C0 \uC54A\uB294\uB2E4",phone:"\uAD50\uB0B4\uC5D0\uC11C \uD734\uB300\uD3F0\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4"},U1=[{name:"\uAE40\uB3C4\uD604 (2-1, \uB204\uB098)",o:{girl:!0,hairColor:2758672},lines:["\uB3C4\uC724\uC544\u2026! \uB108 \uC0B4\uC544 \uC788\uC5C8\uAD6C\uB098. \uB09C \uADF8\uB54C \uBCF4\uAC74\uC2E4\uC5D0 \uC788\uC5B4\uC11C \uC0B4\uC558\uC5B4.","\uC6B0\uB9AC \uBC18 \uC808\uBC18\uC740 \uBC29\uC1A1 \uB4E3\uACE0 \uB2F4\uC784 \uC120\uC0DD\uB2D8 \uB530\uB77C \uB098\uAC14\uC5B4. \uBC29\uC1A1 \uB098\uC624\uBA74 \uBB34\uC870\uAC74 \uADC0 \uB9C9\uC544.","\uAC19\uC774 \uB0B4\uB824\uAC00\uC790. \uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uC57C."]},{name:"2\uD559\uB144 1\uBC18 \uBC18\uC7A5",o:{glasses:!0},lines:["\uC5EC\uAE30 \uAD50\uC2E4\uB3C4 \uC774\uC81C \uC548\uC804\uD558\uC9C0 \uC54A\uC744 \uAC70\uC57C\u2026","\uCCB4\uC721\uAD00\uC5D0\uC11C \uC14B\uC774\uB098 \uB2F9\uD588\uC5B4. \uCCB4\uC721\uBCF5 \uC548 \uC785\uC740 \uCC44\uB85C."]},{name:"\uAE40\uC728 (2-1)",o:{},lines:["\uBC29\uC1A1\uC774 \uB05D\uB0A0 \uB54C\uAE4C\uC9C0 \uADC0\uB9CC \uB9C9\uACE0 \uC788\uC73C\uBA74 \uAD1C\uCC2E\uC544."]},{name:"2\uD559\uB144 \uD559\uC0DD",o:{girl:!0,hairColor:3811866},lines:["\u2026\uC9D1\uC5D0 \uAC00\uACE0 \uC2F6\uC5B4."]},{name:"2\uD559\uB144 \uD559\uC0DD",o:{},lines:["\uACC4\uB2E8 \uCC3E\uC73C\uBA74 \uC6B0\uB9AC\uB3C4 \uB370\uB824\uAC00 \uC918."]}],F=1.2,pn=3,de=58,Ae=27,Ds=0,Hn=1,Ah=3,Rh=4,vo=5,Ch=6,qa=7,po=8,Gn=new Uint8Array(de*Ae).fill(Hn),pr=new Uint8Array(de*Ae),Ft=(n,t)=>t*de+n,Ro=(n,t)=>n<0||t<0||n>=de||t>=Ae?Hn:Gn[Ft(n,t)],qe=(n,t)=>n<0||t<0||n>=de||t>=Ae?0:pr[Ft(n,t)];function us(n,t,e,i,s){for(let r=t;r<=i;r++)for(let o=n;o<=e;o++)Gn[Ft(o,r)]=Ds,pr[Ft(o,r)]=s}var Z0=["\uBCF5\uB3C4","1-4","\uD654\uC7A5\uC2E4","1-3","\uAD50\uBB34\uC2E4","\uACC4\uB2E8","\uCCB4\uC721\uAD00","\uACFC\uD559\uC2E4","1-1"];us(1,11,56,14,0);us(1,1,13,9,1);us(15,1,22,9,2);us(24,1,35,9,3);us(37,1,46,9,4);us(48,1,56,9,5);us(1,16,16,25,6);us(18,16,34,25,7);us(36,16,56,25,8);var J0=[[7,10,1],[18,10,2],[29,10,3],[41,10,4],[8,15,6],[26,15,7],[46,15,8]];for(let[n,t]of J0)Gn[Ft(n,t)]=Ah;Gn[Ft(52,10)]=Rh;for(let n=16;n<=21;n++)Gn[Ft(n,0)]=qa;for(let n=51;n<=53;n++)for(let t=2;t<=3;t++)Gn[Ft(n,t)]=vo;var Ph=[[3,3],[5,3],[9,3],[11,3],[3,5],[5,5],[9,5],[11,5],[3,7],[5,7],[9,7],[11,7],[6,2],[7,2],[8,2],[26,3],[29,3],[32,3],[26,6],[32,6],[39,3],[40,3],[43,3],[44,3],[39,6],[40,6],[43,6],[44,6],[2,24],[20,18],[21,18],[22,18],[26,18],[27,18],[28,18],[31,18],[32,18],[20,22],[21,22],[22,22],[26,22],[27,22],[28,22],[31,22],[32,22]];for(let n of[18,21,24])for(let t of[38,40,43,49,51,54])Ph.push([t,n]);for(let n=5;n<=9;n++)for(let t of[21,22])Ph.push([t,n]);for(let[n,t]of Ph)Gn[Ft(n,t)]=po;var Ka=[[4,11],[11,11],[21,11],[33,11],[45,11],[13,14],[20,14],[31,14],[39,14],[53,14]].map(([n,t])=>[n,t,0,t===11?1:-1]);for(let[n,t]of Ka)Gn[Ft(n,t)]=Ch;var dr=!1,Kn=(n,t)=>{let e=Ro(n,t);return e===Hn||e===po||e===Ch||e===qa||e===Rh&&!dr},$0=(n,t)=>!Kn(n,t)&&qe(n,t)!==1,vh={n2:[16.5,8.5],n3:[28.5,1.6],n4:[45.5,2.5],n5:[33.5,24.5],n6:[55.5,16.5],n7:[19.5,16.6]},O1=[8.5,25.3],Mh=[12.5,9.3],Mo=[38.5,8.3],I0=[8.5,21.5],F1=[[2.5,13.6],[23.5,13.6],[47.5,11.5]],Re={notes:["n1"],rules:[],deaths:0,clears:0,best:0},Ti=localStorage.getItem("hor_tok")||"",Yf="";try{let n=JSON.parse(localStorage.getItem("hor_save")||"null");n&&(Re=Object.assign(Re,n))}catch{}var L0=n=>[...new Set(n)],B1=(n,t)=>({notes:L0([...n.notes||[],...t.notes||[]]),rules:L0([...n.rules||[],...t.rules||[]]),deaths:Math.max(n.deaths||0,t.deaths||0),clears:Math.max(n.clears||0,t.clears||0),best:[n.best,t.best].filter(e=>e>0).sort((e,i)=>e-i)[0]||0}),D0=0;function Qa(){localStorage.setItem("hor_save",JSON.stringify(Re)),Ti&&(clearTimeout(D0),D0=setTimeout(()=>Zf("/api/horror/save",{save:Re}).catch(()=>{}),800))}async function Zf(n,t){let e=await fetch(Y0+n,{method:t?"POST":"GET",headers:Object.assign({"Content-Type":"application/json"},Ti?{Authorization:"Bearer "+Ti}:{}),body:t?JSON.stringify(t):void 0}),i=await e.json().catch(()=>({}));if(!e.ok){let s=new Error(i.error||"http_"+e.status);throw s.status=e.status,s}return i}async function K0(){let n=await Zf("/api/horror/save");Yf=n.nick||"",n.save&&(Re=B1(Re,n.save)),Qa()}var it=n=>document.getElementById(n),ss=it("cv"),Oi=new $c({canvas:ss,antialias:!0,powerPreference:"high-performance"});Oi.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));Oi.shadowMap.enabled=!0;Oi.shadowMap.type=nr;Oi.toneMapping=fa;Oi.toneMappingExposure=1.15;var Rt=new Jo;Rt.background=new Zt(0);Rt.fog=new Zo(658189,.022);var we=new xn(72,1,.04,70);Rt.add(we);function Jf(){Oi.setSize(innerWidth,innerHeight,!1),we.aspect=innerWidth/innerHeight,we.fov=innerWidth<innerHeight?80:70,we.updateProjectionMatrix()}addEventListener("resize",Jf);Jf();Rt.add(new aa(12107980,3814444,1.5));Rt.add(new ua(10133672,.55));var k1=new Set(Rt.children),hi=new ha(16773334,30,22,.6,.6,1.6);hi.position.set(.1,-.13,-.5);hi.castShadow=!0;hi.shadow.mapSize.set(1024,1024);hi.shadow.camera.near=.15;hi.shadow.camera.far=22;hi.shadow.bias=-8e-4;we.add(hi);hi.target.position.set(0,-.8,-6);we.add(hi.target);var Df=new Bt,z1=new Zn(16770760,.5,3.2,2);we.add(z1);var Vt=n=>new Ss(n),H1=Vt({map:of(),roughness:.85}),rs={vinyl:Vt({map:th(),roughness:.55}),vinylWarm:Vt({map:th(),color:14207152,roughness:.6}),vinylCold:Vt({map:th(),color:11584712,roughness:.5}),wood:Vt({map:af(),roughness:.6}),woodDark:Vt({map:af(),color:10125424,roughness:.7}),tile:Vt({map:lf(),roughness:.25}),gym:Vt({map:Cm(),roughness:.35})},Q0=(n,t)=>{let e=Ro(n,t);return e===Ah||e===Rh?"vinyl":["vinyl","wood","tile","wood","vinylWarm","vinyl","gym","vinylCold","wood"][qe(n,t)]},Us={walls:[]};for(let n in rs)Us[n]=[];var Os=(n,t,e,i)=>(n.translate(t,e,i),n);for(let n=0;n<Ae;n++)for(let t=0;t<de;t++){let e=Gn[Ft(t,n)],i=(t+.5)*F,s=(n+.5)*F;if(e===Hn){let r=!1;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){let c=Ro(t+l,n+o);c!==Hn&&c!==qa&&(r=!0)}r&&Us.walls.push(Os(new se(F,pn,F),i,pn/2,s));continue}if(e===qa){Us.walls.push(Os(new se(F,1,F),i,.5,s)),Us.walls.push(Os(new se(F,.75,F),i,pn-.375,s));continue}if(e!==vo){let r=new _e(F,F);r.rotateX(-Math.PI/2),Us[Q0(t,n)].push(Os(r,i,0,s))}(e===Ah||e===Rh)&&Us.walls.push(Os(new se(F,.75,F),i,pn-.375,s))}var j0=(n,t,e=!0)=>{if(!n.length)return;let i=new Et(jc(n),t);return i.receiveShadow=!0,i.castShadow=e,Rt.add(i),i};j0(Us.walls,H1);for(let n in rs)j0(Us[n],rs[n],!1);{let n=eh();n.repeat.set(de,Ae);let t=new Et(new _e(de*F,Ae*F),Vt({map:n,roughness:.95}));t.rotation.x=Math.PI/2,t.position.set(de*F/2,pn,Ae*F/2),t.receiveShadow=!0,Rt.add(t)}var $f=new Bt;Rt.add($f);var oi=(n,t,e,i=0,s=0)=>(n.position.set(t*F,s,e*F),n.rotation.y=i,n.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),$f.add(n),n);function tg(n,t=Rt){n.updateMatrixWorld(!0);let e=new Map,i=[];n.traverse(s=>{if(!s.isMesh)return;if(Array.isArray(s.material)||s.isInstancedMesh){i.push(s);return}let r=s.geometry.clone().applyMatrix4(s.matrixWorld);r.index&&(r=r.toNonIndexed());for(let l of Object.keys(r.attributes))["position","normal","uv"].includes(l)||r.deleteAttribute(l);if(!r.attributes.uv)return;e.has(s.material)||e.set(s.material,{list:[],cast:!1});let o=e.get(s.material);o.list.push(r),o.cast=o.cast||s.castShadow});for(let s of i){let r=s.matrixWorld.clone();s.removeFromParent(),r.decompose(s.position,s.quaternion,s.scale),t.add(s)}for(let[s,r]of e){let o=new Et(jc(r.list),s);o.castShadow=r.cast,o.receiveShadow=!0,t.add(o)}n.removeFromParent()}for(let[n,t]of Ph){let e=qe(n,t),i=n+.5,s=t+.5;if(e===1&&t!==2)oi(Ca(),i,s-.15);else if(e===3){let r=oi(Ca(),i,s,(Math.random()-.5)*2.4);Math.random()<.4&&(r.rotation.z=Math.PI/2,r.position.y=.36)}else if(e===4)oi(Jm(),i,s,t===3?0:Math.PI);else if(e===6)oi(qm(),i,s,.3);else if(e===7)oi($m(),i,s);else if(e===8){let r=oi(Ca(),i,s,(Math.random()-.5)*2);Math.random()<.5&&(r.rotation.z=Math.PI/2,r.position.y=.36)}}oi(Zm(),7.5,2.5);{let n=oe(512,640,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,240,240,.8)",e.lineWidth=5,e.strokeRect(10,10,i-20,s-20),e.beginPath(),e.moveTo(10,s/2),e.lineTo(i-10,s/2),e.stroke(),e.beginPath(),e.arc(i/2,s/2,60,0,7),e.stroke();for(let r of[10,s-10])e.beginPath(),e.arc(i/2,r,140,r<s/2?0:Math.PI,r<s/2?Math.PI:7),e.stroke()}),t=new Et(new _e(15*F,9.6*F),Vt({map:n,transparent:!0,depthWrite:!1,roughness:.4}));t.rotation.x=-Math.PI/2,t.position.set(9*F,.005,21*F),Rt.add(t)}oi(_f(),8.5,16.08);oi(_f(),8.5,25.92,Math.PI);oi(Ym(),Mo[0],Mo[1]+.3);for(let[n,t,e]of[[41.5,19.5,.9],[46.5,22.5,1.2],[52.5,17.5,.8],[45.5,13.5,.7],[37.5,23.5,.6]]){let i=new Et(new Ji(e,24),Vt({color:1712694,roughness:.05,metalness:.2,transparent:!0,opacity:.85,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(n*F,.005,t*F),Rt.add(i)}{let n=new Et(new Ji(.9,24),Vt({map:oe(256,256,(t,e,i)=>{t.clearRect(0,0,e,i);for(let s=0;s<30;s++){let r=t.createRadialGradient(128+(Math.random()-.5)*120,128+(Math.random()-.5)*120,0,128,128,30+Math.random()*40);r.addColorStop(0,"rgba(70,5,5,.7)"),r.addColorStop(1,"rgba(70,5,5,0)"),t.fillStyle=r,t.fillRect(0,0,e,i)}}),transparent:!0,depthWrite:!1,roughness:.2}));n.rotation.x=-Math.PI/2,n.position.set(7.5*F,.004,12.2*F),Rt.add(n)}{let n=[],e=new ea(new se(1,1,1),Vt({map:Em(),roughness:.8}),1),i=new Me,s=new Bn,r=new gi,o=new Zt,l=0,c=[8006186,2768746,3103290,6969898,4860506,9075306,2039583,10111530];for(let[a,u]of n)for(let h=0;h<4;h++)for(let f of[-1,1]){let d=-.55;for(;d<.53&&l<1;){let g=.025+Math.random()*.04,_=.2+Math.random()*.14;if(Math.random()<.06){d+=.08;continue}let p=Math.random()<.05?.25:0;r.set(0,0,p),s.setFromEuler(r),i.compose(new B((a+.5)*F+d+g/2,.1+h*.48+_/2,(u+.5)*F+f*.16),s,new B(g,_,.2)),e.setMatrixAt(l,i),e.setColorAt(l,o.setHex(c[Math.random()*c.length|0]).multiplyScalar(.7+Math.random()*.4)),l++,d+=g+.002}}e.count=l,e.castShadow=!0,e.receiveShadow=!0,Rt.add(e)}for(let[n,t]of Ka)oi(yf(),n+.5,t===11?11+.25:15-.25,t===11?0:Math.PI);{let n=new Et(new _e(9*F,1.25),Vt({map:bm("\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83"),roughness:.9}));n.position.set(7.5*F,1.7,F+.025),n.receiveShadow=!0,Rt.add(n);let t=Vt({color:5914664,roughness:.7}),e=new Et(new se(9*F,.04,.1),t);e.position.set(7.5*F,1.07,F+.06),Rt.add(e);let i=new Et(new se(9*F+.1,.06,.06),t);i.position.set(7.5*F,2.35,F+.03),Rt.add(i);let s=new Et(new Ji(.17,32),Vt({map:oe(128,128,r=>{r.fillStyle="#eee",r.beginPath(),r.arc(64,64,62,0,7),r.fill(),r.strokeStyle="#222",r.lineWidth=5,r.stroke(),r.lineWidth=4,r.beginPath(),r.moveTo(64,64),r.lineTo(64,22),r.moveTo(64,64),r.lineTo(92,74),r.stroke();for(let o=0;o<12;o++){let l=o/12*6.283;r.fillStyle="#222",r.fillRect(64+Math.cos(l)*52-2,64+Math.sin(l)*52-2,4,4)}}),roughness:.4}));s.position.set(7.5*F,2.65,F+.02),Rt.add(s)}for(let[n,t,e]of[[25.5,11,0],[42.5,15,Math.PI],[5,15,Math.PI]]){let i=new Et(new _e(2.2,1),Vt({map:Tm(),roughness:.9}));i.position.set(n*F,1.55,t*F+(e?-.02:.02)),i.rotation.y=e,Rt.add(i)}for(let[n,t,e]of[[15.5,11,0],[34.5,11,0],[17.5,15,Math.PI],[35.5,15,Math.PI]])oi(jm(),n,t+(e?-.1:.1),e,0);tg($f);var G1=Vt({color:4863008,roughness:.7});for(let[n,t,e]of J0){let i=(t+(t===10?1:0))*F,s=t===10?1:-1;for(let c of[0,1]){let a=new Et(new se(.07,2.25,F+.04),G1);a.position.set((n+c)*F+(c?-.035:.035),1.125,(t+.5)*F),a.receiveShadow=!0,Rt.add(a)}let r=new Et(new se(.95,2.1,.04),Ht.doorWood());r.position.set((n+1)*F+.5,1.07,i+s*.03),r.castShadow=r.receiveShadow=!0,Rt.add(r);let o=new Et(new _e(.5,.6),Vt({color:658448,roughness:.1,metalness:.3}));o.position.set((n+1)*F+.5,1.6,i+s*.052),s<0&&(o.rotation.y=Math.PI),Rt.add(o);let l=new Et(new _e(.5,.19),Vt({map:nh(Z0[e]),roughness:.7,side:We}));l.position.set(n*F+.05,2.5,i+s*.27),l.rotation.y=Math.PI/2,Rt.add(l)}var bi=new Et(new se(F-.04,2.25,.07),Vt({map:Rs("#4b5a50"),metalness:.6,roughness:.45}));bi.position.set(52.5*F,1.125,10.5*F+.3);bi.castShadow=bi.receiveShadow=!0;Rt.add(bi);{let n=new Et(new se(.8,.05,.06),Ht.steel());n.position.set(0,0,.06),bi.add(n)}{let n=new Et(new se(.62,.23,.06),[0,0,0,0,0,0].map((e,i)=>i===4?new qn({map:cf()}):Vt({color:14540253})));n.position.set(52.5*F,2.6,11*F+.05),Rt.add(n);let t=new Zn(3211136,.25,2,2);t.position.set(52.5*F,2.45,11*F+.3),Rt.add(t)}{let n=new Et(new _e(.5,.19),Vt({map:nh("\uC9C0\uD558","#7a1515","#fff"),roughness:.7,side:We}));n.position.set(52*F+.05,2.5,11*F+.27),n.rotation.y=Math.PI/2,Rt.add(n)}{let n=Vt({map:Rs("#6c6a64"),roughness:.8}),t=Vt({color:657930,roughness:1});for(let i=0;i<9;i++){let s=new Et(new se(3*F,.18,.3),n);s.position.set(52.5*F,-.09-.18*i,4*F-.15-i*.3),s.receiveShadow=!0,Rt.add(s)}for(let i of[51,54]){let s=new Et(new se(.05,2,2.4),t);s.position.set(i*F,-1,3*F),Rt.add(s)}let e=new Et(new se(3*F,2,.05),t);e.position.set(52.5*F,-1,2*F),Rt.add(e)}var eg=Vt({color:13421772,emissive:15659775,emissiveIntensity:1.4}),Kf=Vt({color:1911,emissive:546,emissiveIntensity:.1,roughness:.4}),ng=new se(1.2,.05,.28),ig=[],sg=[];for(let n=3;n<56;n+=4){let t=n===11||n===31||n===47,e=new Et(ng,t?eg.clone():Kf);if(e.position.set(n*F,pn-.03,12.5*F),Rt.add(e),t){let i=new Zn(14674175,5,9,2);i.position.set(n*F,pn-.25,12.5*F),Rt.add(i),ig.push({l:e,p:i,base:5,t:Math.random()*5})}}for(let[n,t]of[[4,3.5],[11,3.5],[4,7],[11,7]]){let e=new Et(ng,Kf.clone());e.position.set(n*F,pn-.03,t*F),Rt.add(e),sg.push(e)}var Sh=new Zn(16773853,0,14,1.6);Sh.position.set(7.5*F,2.6,5.5*F);Rt.add(Sh);function rg(n,t){let e=Km(6*F-.1);e.position.set(19*F,0,F),n.add(e);for(let i=0;i<3;i++){let s=Qm();s.position.set(22*F-.05,0,5*F+.95+i*1.95),s.rotation.y=-Math.PI/2,n.add(s)}if(t){let i=lf();i.repeat.set(8,9);let s=new Et(new _e(8*F,9*F),Vt({map:i,roughness:.25}));s.rotation.x=-Math.PI/2,s.position.set(19*F,.001,5.5*F),s.receiveShadow=!0,n.add(s);let r=eh();r.repeat.set(8,9);let o=new Et(new _e(8*F,9*F),Vt({map:r,roughness:.95}));o.rotation.x=Math.PI/2,o.position.set(19*F,pn,5.5*F),n.add(o);let l=f=>{let d=of();return d.repeat.set(f,1),Vt({map:d,roughness:.85})},c=new Et(new _e(9*F,pn),l(9));c.position.set(15*F,pn/2,5.5*F),c.rotation.y=Math.PI/2,n.add(c);let a=c.clone();a.position.x=23*F,a.rotation.y=-Math.PI/2,n.add(a);let u=new Et(new _e(8*F,pn),l(8));u.position.set(19*F,pn/2,10*F),u.rotation.y=Math.PI,n.add(u);let h=new Et(new _e(F,2.25),new qn({color:0}));h.position.set(18.5*F,1.125,10*F-.01),h.rotation.y=Math.PI,n.add(h),n.traverse(f=>{f.isMesh&&(f.receiveShadow=!0)})}}rg(Rt,!1);var Ih=new Bt;Ih.position.z=2*F;Ih.scale.z=-1;Rt.add(Ih);rg(Ih,!0);var V1=Am(),W1=new tr({color:10466496,roughness:.04,metalness:.1,transparent:!0,opacity:.16}),Qf=new Et(new _e(6*F,1.25),W1);Qf.position.set(19*F,1.625,F+.002);Rt.add(Qf);var So=new Et(new _e(6*F,1.25),new qn({map:V1,transparent:!0,depthWrite:!1}));So.position.set(19*F,1.625,F+.004);So.visible=!1;Rt.add(So);{let n=Ht.steel();for(let[t,e,i,s]of[[6*F+.06,.03,19*F,2.25],[6*F+.06,.03,19*F,1],[.03,1.25,16*F,1.625],[.03,1.25,22*F,1.625]]){let r=new Et(new se(t,e,.03),n);r.position.set(i,s,F+.01),Rt.add(r)}}var Mi=no();Rt.add(Mi);Mi.visible=!1;var jf=new Bt;Rt.add(jf);var X1=[[25.5,1,0],[27.3,1,0],[30.5,1,0],[32.4,1,0],[34.4,1,0],[24,4,3],[24,7.5,3],[36,3,2],[36,6.5,2],[26.5,10,1],[32,10,1],[27.3,11,0],[31,11,0],[36.5,11,0],[24,15,1],[29,15,1]];var bh={};function q1(n,t,e,i){let s=new Et(new _e(.95,1.5),Vt({map:n,transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),r=e*F;s.position.set(t*F,.42+.75+(Math.random()-.5)*.15,i===0?r+.012:i===1?r-.012:r),i===1&&(s.rotation.y=Math.PI),i===2&&(s.rotation.y=-Math.PI/2,s.position.x=t*F-.012),i===3&&(s.rotation.y=Math.PI/2,s.position.x=t*F+.012),s.rotation.z=(Math.random()-.5)*.12,jf.add(s)}function Y1(){jf.clear(),X1.forEach(([n,t,e],i)=>q1(bh[i]||(bh[i]=sh(i+1,!1)),n,t,e))}var mr={};for(let n in vh){let[t,e]=vh[n],i=new Et(new _e(.21,.28),Vt({map:ih(),roughness:.9,emissive:2762776,side:We}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*3,i.position.set(t*F,.006,e*F),i.receiveShadow=!0,Rt.add(i),mr[n]=i}var Ya=t0();Rt.add(Ya);var td=[],bo=new Et(new se(.5,.07,.38),Vt({map:Ta(),roughness:.8}));bo.position.set(Mo[0]*F,.45,(Mo[1]+.3)*F);bo.rotation.y=.2;Rt.add(bo);var To=new Et(new se(.45,.06,.32),Vt({map:Ta(),roughness:.8}));To.position.set(Mh[0]*F,.03,Mh[1]*F);To.rotation.y=-.4;Rt.add(To);var og=F1.map(([n,t])=>{let e=ah();return e.position.set(n*F,0,t*F),e.rotation.y=Math.random()*3,e.userData.x=n,e.userData.y=t,Rt.add(e),e});for(let n of N1){let t=no(n.o);n.big&&t.scale.set(1.12,1.03,1.12);let e=(n.y+.5-.15)*F+.42;t.position.set((n.x+.5)*F,0,e),t.rotation.y=Math.PI,gf(t),t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),Rt.add(t),td.push({model:t,px:n.x+.5,py:n.y+.85,name:n.name,lines:n.lines,i:0})}var ja=new Bt;for(let n of Rt.children.slice())k1.has(n)||ja.add(n);Rt.add(ja);var tl={depth:0,T:Gn,RM:pr,LOCKERS:Ka,start:[7.5,8.5],group:ja,rules:["decal","mirror","sci","gym","bc"]},mo={},Z1=n=>{let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}},J1=Vt({map:Im(),roughness:.9}),ag=Vt({map:Lm(),roughness:.95}),$1=Vt({map:Dm(),roughness:.6});function lg(n){if(mo[n])return mo[n];let t=Z1(n*7919+13),e=new Uint8Array(de*Ae).fill(Hn),i=new Uint8Array(de*Ae),s=[];for(let T=0;T<400&&s.length<14;T++){let N=4+(t()*8|0),D=3+(t()*5|0),z=1+(t()*(de-N-2)|0),$=1+(t()*(Ae-D-2)|0);s.some(rt=>z<rt.x+rt.w+2&&z+N+2>rt.x&&$<rt.y+rt.h+2&&$+D+2>rt.y)||s.push({x:z,y:$,w:N,h:D})}s.forEach((T,N)=>{T.type=N<3?1:N===3||N===7?3:0;for(let D=T.y;D<T.y+T.h;D++)for(let z=T.x;z<T.x+T.w;z++)e[Ft(z,D)]=Ds,i[Ft(z,D)]=T.type});let r=T=>T.x+(T.w>>1),o=T=>T.y+(T.h>>1),l=(T,N)=>{if(T<1||N<1||T>=de-1||N>=Ae-1)return;let D=Ft(T,N);e[D]===Hn&&(e[D]=Ds,i[D]=0)},c=(T,N)=>{let D=r(T),z=o(T),$=r(N),rt=o(N),Tt=t()<.5?2:3,K=()=>{for(;D!==$;){for(let pt=0;pt<Tt;pt++)l(D,z+pt);D+=Math.sign($-D)}},at=()=>{for(;z!==rt;){for(let pt=0;pt<Tt;pt++)l(D+pt,z);z+=Math.sign(rt-z)}};t()<.5?(K(),at()):(at(),K());for(let pt=0;pt<Tt;pt++)for(let Dt=0;Dt<Tt;Dt++)l(D+pt,z+Dt)};for(let T=1;T<s.length;T++){let N=0,D=1e9;for(let z=0;z<T;z++){let $=Math.hypot(r(s[T])-r(s[z]),o(s[T])-o(s[z]));$<D&&(D=$,N=z)}c(s[T],s[N])}for(let T=0;T<4;T++){let N=s[t()*s.length|0],D=s[t()*s.length|0];N!==D&&c(N,D)}for(let T of s){if(T.type===0&&T.w>=7&&T.h>=5)for(let N=T.y+2;N<T.y+T.h-2;N+=3)for(let D=T.x+2;D<T.x+T.w-2;D+=3)e[Ft(D,N)]=Hn;if(T.type===1&&T.w>=6&&T.h>=5)for(let N=T.y+1;N<T.y+T.h-1;N+=2)for(let D=T.x+1;D<T.x+T.w-1;D+=2)e[Ft(D,N)]=po}let a=[s[0].x+(s[0].w>>1)+.5,s[0].y+s[0].h-.5],u=[Gn,pr];Gn=e,pr=i;let h=new Int32Array(de*Ae).fill(-1),f=[Ft(s[0].x,s[0].y)];h[f[0]]=0;for(let T=0;T<f.length;T++){let N=f[T],D=N%de,z=N/de|0;for(let[$,rt]of[[1,0],[-1,0],[0,1],[0,-1]]){let Tt=Ft(D+$,z+rt);Kn(D+$,z+rt)||h[Tt]>=0||(h[Tt]=h[N]+1,f.push(Tt))}}let d=s.slice(1).filter(T=>T.type!==1&&h[Ft(r(T),o(T))]>0).sort((T,N)=>h[Ft(r(N),o(N))]-h[Ft(r(T),o(T))]),g=d[0]||s[s.length-1],_=d[1]||s[1],p=[r(g),o(g)];for(let T=p[1];T<=p[1]+1;T++)for(let N=p[0];N<=p[0]+1;N++)N<g.x+g.w&&T<g.y+g.h&&(e[Ft(N,T)]=vo);let m=[r(_),_.y],M=[];for(let T=0;T<400&&M.length<7;T++){let N=2+(t()*(de-4)|0),D=2+(t()*(Ae-4)|0);if(e[Ft(N,D)]!==Ds||i[Ft(N,D)]!==0)continue;let z=e[Ft(N,D-1)]===Hn,$=e[Ft(N,D+1)]===Hn;if(z===$||e[Ft(N-1,D)]!==Ds||e[Ft(N+1,D)]!==Ds)continue;let rt=z?1:-1;e[Ft(N,D+rt)]!==Ds||e[Ft(N,D+2*rt)]!==Ds||(e[Ft(N,D)]=Ch,M.push([N,D,0,rt]))}let R=[];for(let T=0;T<Ae;T++)for(let N=0;N<de;N++)!Kn(N,T)&&i[Ft(N,T)]===0&&h[Ft(N,T)]>12&&R.push([N+.5,T+.5]);Gn=u[0],pr=u[1];let S=new Bt;S.visible=!1,Rt.add(S);let A=[],E={carpet:[],wood:[],woodDark:[]},x=[];for(let T=0;T<Ae;T++)for(let N=0;N<de;N++){let D=e[Ft(N,T)],z=(N+.5)*F,$=(T+.5)*F;if(D===Hn){let rt=!1;for(let Tt=-1;Tt<=1;Tt++)for(let K=-1;K<=1;K++){let at=N+K,pt=T+Tt;at>=0&&pt>=0&&at<de&&pt<Ae&&e[Ft(at,pt)]!==Hn&&(rt=!0)}rt&&A.push(Os(new se(F,pn,F),z,pn/2,$));continue}if(D!==vo){let rt=new _e(F,F);rt.rotateX(-Math.PI/2),E[i[Ft(N,T)]===1?"wood":i[Ft(N,T)]===3?"woodDark":"carpet"].push(Os(rt,z,0,$))}N%3===1&&T%3===1&&x.push(Os(new se(1.1,.05,.5),z,pn-.03,$))}let b=(T,N,D=!0)=>{if(!T.length)return null;let z=new Et(jc(T),N);return z.receiveShadow=!0,z.castShadow=D,S.add(z),z};b(A,J1),b(E.carpet,ag,!1),b(E.wood,rs.wood,!1),b(E.woodDark,rs.woodDark,!1);let I=Vt({color:15658717,emissive:16052424,emissiveIntensity:1.2});b(x,I,!1);{let T=eh();T.repeat.set(de,Ae);let N=new Et(new _e(de*F,Ae*F),Vt({map:T,color:14210224,roughness:.95}));N.rotation.x=Math.PI/2,N.position.set(de*F/2,pn,Ae*F/2),S.add(N)}let P=new Bt;S.add(P);for(let T=0;T<Ae;T++)for(let N=0;N<de;N++)if(e[Ft(N,T)]===po){let D=Ca();D.position.set((N+.5)*F,0,(T+.35)*F),t()<.25&&(D.rotation.z=Math.PI/2,D.position.y=.36),D.rotation.y=(t()-.5)*.6,P.add(D)}for(let[T,N,,D]of M){let z=yf();z.position.set((T+.5)*F,0,(N+(D>0?.25:.75))*F),z.rotation.y=D>0?0:Math.PI,P.add(z)}tg(P,S);{let T=Vt({map:Rs("#6c6a64"),roughness:.8}),N=Vt({color:328965,roughness:1});for(let rt=0;rt<7;rt++){let Tt=new Et(new se(2*F,.18,.32),T);Tt.position.set((p[0]+1)*F,-.09-.18*rt,(p[1]+2)*F-.16-.32*rt),S.add(Tt)}let D=new Et(new se(2*F,.02,2*F),N);D.position.set((p[0]+1)*F,-1.4,(p[1]+1)*F),S.add(D);let z=new Et(new se(.62,.23,.06),[0,0,0,0,0,0].map((rt,Tt)=>Tt===4||Tt===5?new qn({map:cf()}):Vt({color:14540253})));z.position.set((p[0]+1)*F,2.55,(p[1]+1)*F),S.add(z);let $=new Zn(3211136,1.2,4,2);$.position.set((p[0]+1)*F,2.2,(p[1]+1)*F),S.add($)}{let T=new Et(new _e(1,2.1),$1);T.position.set((m[0]+.5)*F,1.05,m[1]*F+.012),S.add(T);let N=new Zn(16724e3,1,4,2);N.position.set((m[0]+.5)*F,2.2,m[1]*F+.6),S.add(N)}let O=[];for(let T of s.filter(N=>N.type===3))for(let N=T.x;N<T.x+T.w;N+=2)e[Ft(N,T.y-1)]===Hn&&O.push([N+.5,T.y,0]);O.slice(0,10).forEach(([T,N,D],z)=>{let $=new Et(new _e(.95,1.5),Vt({map:bh[z]||(bh[z]=sh(z+1,!1)),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));$.position.set(T*F,1.15,N*F+.012),$.rotation.z=(t()-.5)*.15,S.add($)});let H=[];for(let T=0;T<Math.min(5,x.length);T++){let N=t()*x.length|0,D=x[N].boundingBox||(x[N].computeBoundingBox(),x[N].boundingBox),z=new B;D.getCenter(z);let $=new Zn(16773824,4,10,2);$.position.set(z.x,pn-.3,z.z),S.add($),H.push({p:$,base:4,t:t()*4,l:null})}let Y=[];if(n===1){let T=s[1],N=[];for(let z=T.y;z<T.y+T.h;z++)for(let $=T.x;$<T.x+T.w;$++)e[Ft($,z)]===po&&N.push([$,z]);U1.forEach((z,$)=>{let rt=N[$],Tt=rt?rt[0]+.5:T.x+1.5+$,K=rt?rt[1]+.85:T.y+T.h-1.5,at=no(z.o);at.position.set(Tt*F,0,(K-.35)*F+.42-.18),at.rotation.y=Math.PI,rt?gf(at):at.userData.standing=!0,at.traverse(pt=>{pt.isMesh&&(pt.castShadow=!0)}),S.add(at),Y.push({model:at,px:Tt,py:K,name:z.name,lines:z.lines,i:0})});let D=new Et(new _e(.5,.19),Vt({map:nh("2-1"),roughness:.7,side:We}));D.position.set((T.x+T.w/2)*F,2.5,T.y*F+.02),S.add(D)}let C=["decal","sci","bc","run","phone"];for(let T=C.length-1;T>0;T--){let N=t()*(T+1)|0;[C[T],C[N]]=[C[N],C[T]]}let Z=C.slice(0,n<3?1:n<6?2:3),V={depth:n,T:e,RM:i,LOCKERS:M,start:a,group:S,spawn:R,stair:p,door:m,flick:H,npcs:Y,rooms:s,rules:Z};return mo[n]=V,V}var Xt=0,xe=tl,go=!1;function Lh(n){Gn=n.T,pr=n.RM,Ka=n.LOCKERS,ja.visible=n===tl;for(let t in mo)mo[t].group.visible=mo[t]===n;xe=n,Xt=n.depth,Rt.fog.color.set(Xt?1315852:658189)}var Co=n=>n===0?"1\uCE35":"\uC9C0\uD558 "+n+"\uCE35";function Th(){go||(go=!0,Za(0),wo(null),it("fade").classList.add("show"),ze(1.2,.5,150,0,1),setTimeout(()=>{let n=lg(Xt+1);Lh(n),Re.deep=Math.max(Re.deep||0,Xt),Qa(),vr(!0),it("floorBig").textContent=Co(Xt),it("floorBig").classList.add("show"),setTimeout(()=>{it("fade").classList.remove("show"),go=!1},400),setTimeout(()=>it("floorBig").classList.remove("show"),2600)},700))}var vn={},Ue=0,zs=0;addEventListener("keydown",n=>{let t=n.key.toLowerCase();vn[t]=!0,t==="c"&&fg(),t==="e"&&Tg(),(t==="f"||t==="q")&&od(),t==="g"&&yg(),t==="h"&&(_r=!0,it("earB").classList.add("on")),(t==="i"||t==="b")&&hd(),t==="m"&&ud()});addEventListener("keyup",n=>{vn[n.key.toLowerCase()]=!1,n.key.toLowerCase()==="h"&&(_r=!1,it("earB").classList.remove("on"))});var sn={id:null,ox:0,oy:0,x:0,y:0},ed=new Map;ss.addEventListener("pointerdown",n=>{if(Fi(),n.pointerType==="mouse"){Un&&!gr()&&!document.pointerLockElement&&ss.requestPointerLock&&ss.requestPointerLock();return}sn.id===null&&n.clientX<innerWidth*.45?(sn.id=n.pointerId,sn.ox=n.clientX,sn.oy=n.clientY,sn.x=sn.y=0):ed.set(n.pointerId,{x:n.clientX,y:n.clientY}),ss.setPointerCapture(n.pointerId)});ss.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"){document.pointerLockElement===ss&&N0(n.movementX*.0024,n.movementY*.0024);return}if(n.pointerId===sn.id){let e=n.clientX-sn.ox,i=n.clientY-sn.oy,s=Math.hypot(e,i),r=55;s>r&&(e*=r/s,i*=r/s),sn.x=e/r,sn.y=i/r;return}let t=ed.get(n.pointerId);t&&(N0((n.clientX-t.x)*.0055,(n.clientY-t.y)*.0055),t.x=n.clientX,t.y=n.clientY)});var cg=n=>{n.pointerId===sn.id&&(sn.id=null,sn.x=sn.y=0),ed.delete(n.pointerId)};ss.addEventListener("pointerup",cg);ss.addEventListener("pointercancel",cg);function N0(n,t){!Un||!Ke||pe||(Ue-=n,zs=Math.max(-1.2,Math.min(1.2,zs-t)))}var nd=!1,Ui=!1,xo=it("runB"),hg=it("sneakB"),zf=it("hideB");xo.addEventListener("pointerdown",n=>{n.preventDefault(),Fi(),nd=!0,xo.classList.add("on"),xo.setPointerCapture(n.pointerId)});var ug=()=>{nd=!1,xo.classList.remove("on")};xo.addEventListener("pointerup",ug);xo.addEventListener("pointercancel",ug);function fg(){Ui=!Ui,hg.classList.toggle("on",Ui)}hg.addEventListener("pointerdown",n=>{n.preventDefault(),Fi(),fg()});zf.addEventListener("pointerdown",n=>{n.preventDefault(),Tg()});it("throwB").addEventListener("pointerdown",n=>{n.preventDefault(),od()});it("shoutB").addEventListener("pointerdown",n=>{n.preventDefault(),yg()});var K1=n=>{n.preventDefault(),_r=!0,it("earB").classList.add("on")},id=()=>{_r=!1,it("earB").classList.remove("on")};it("earB").addEventListener("pointerdown",K1);it("earB").addEventListener("pointerup",id);it("earB").addEventListener("pointercancel",id);it("earB").addEventListener("pointerleave",id);var U0=0;function me(n,t=2400){let e=it("toast");e.innerHTML=n,e.style.opacity=1,clearTimeout(U0),U0=setTimeout(()=>e.style.opacity=0,t)}var Ie=(n,t)=>{it(n).classList.toggle("show",t),t&&document.pointerLockElement&&document.exitPointerLock()},gr=()=>document.querySelector(".modal.show"),Wt=null,os=null,Eh=null,fr=null,za=null;var Nf=0;function Fi(){if(Wt){Wt.state==="suspended"&&Wt.resume();return}try{Wt=new(window.AudioContext||window.webkitAudioContext)}catch{return}os=Wt.createGain(),os.gain.value=.85,os.connect(Wt.destination);let n=Wt.createOscillator(),t=Wt.createGain(),e=Wt.createOscillator(),i=Wt.createGain(),s=Wt.createBiquadFilter();n.type="sawtooth",n.frequency.value=46,t.gain.value=.03,e.frequency.value=.13,i.gain.value=5,s.type="lowpass",s.frequency.value=170,e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(t),t.connect(os),n.start(),e.start(),fetch("steps.mp3").then(r=>r.arrayBuffer()).then(r=>Wt.decodeAudioData(r)).then(r=>{Eh=r}).catch(()=>{})}function Bs(n,t,e,i=.2,s="sine"){if(!Wt)return;let r=Wt.createOscillator(),o=Wt.createGain();r.type=s,r.frequency.value=n,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(o),o.connect(os),r.start(t),r.stop(t+e+.05)}function Eo(n=1){if(!Wt)return;let t=Wt.currentTime;[659,523,587,392,392,587,659,523].forEach((e,i)=>{Bs(e*n,t+i*.42,1.5,.15),Bs(e*2*n,t+i*.42,.6,.03),Bs(e*n*1.01,t+i*.42,1.5,.05)})}function dg(){if(!Wt)return;let n=Wt.currentTime;Bs(880,n,.8,.12),Bs(880,n+.35,.8,.12)}function ze(n,t,e=1200,i=0,s=1){if(!Wt)return;let r=Wt.createBufferSource(),o=Wt.createBuffer(1,Math.max(1,Wt.sampleRate*n),Wt.sampleRate),l=o.getChannelData(0);for(let h=0;h<l.length;h++)l[h]=(Math.random()*2-1)*(1-h/l.length);r.buffer=o;let c=Wt.createBiquadFilter();c.type="bandpass",c.frequency.value=e,c.Q.value=s;let a=Wt.createGain();a.gain.value=t;let u=a;if(r.connect(c),c.connect(a),Wt.createStereoPanner){let h=Wt.createStereoPanner();h.pan.value=i,a.connect(h),u=h}u.connect(os),r.start()}var Q1=n=>ze(.07,n,350+Math.random()*200,0,2);function j1(){if(!Wt)return;let n=Wt.currentTime;Bs(55,n,.18,.35),Bs(50,n+.22,.2,.28)}function tS(){if(!Wt)return;let n=Wt.currentTime;ze(1.3,1.3,1800,0,.7);let t=Wt.createOscillator(),e=Wt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(950,n),t.frequency.exponentialRampToValueAtTime(130,n+1.1),e.gain.setValueAtTime(.42,n),e.gain.exponentialRampToValueAtTime(.001,n+1.2),t.connect(e),e.connect(os),t.start(n),t.stop(n+1.25)}var eS=()=>{ze(.9,1,5e3,0,.5),ze(.4,.6,2500,0,1)},O0=-1;function Za(n){if(!Wt||!Eh||(fr||(fr=Wt.createBufferSource(),fr.buffer=Eh,fr.loop=!0,za=Wt.createGain(),za.gain.value=0,fr.connect(za),za.connect(os),fr.start()),n===O0))return;O0=n;let t=n===2?1:n===1?.6:n===.5?.12:0,e=n===2?1.75:n===1?1.15:.7;za.gain.setTargetAtTime(t,Wt.currentTime,n?.04:.08),n&&fr.playbackRate.setTargetAtTime(e,Wt.currentTime,.05)}var gh=0;function wo(n){if(!n){gh=0;return}if(gh-=1/60,gh>0)return;gh=.55;let t=Math.hypot(n.x-q.x,n.y-q.y),e=Math.max(.03,Math.min(1.2,2.2/(1+t*.3))),i=li(n.x,n.y);ze(.05,e,3200,i,3),ze(.09,e*.7,260,i,2)}function li(n,t){let e=n-q.x,i=t-q.y,s=Math.cos(Ue),r=-Math.sin(Ue),o=Math.hypot(e,i)||1;return Math.max(-1,Math.min(1,(e*s+i*r)/o))}var q,on,rn,dn,ci,sd,pe,Ja,Ke,Un=!1,Nn=null,Si=0,ks=!1,_o,Ha=0,Ga=1.6,Kt={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},Ve={phone:1,broom:0,peTop:!1,peBottom:!1,map:!0},xr="broom",cs=!1,ye=null,_r=!1,Hf=1,Ao=!1;var $a=[],_h=null,co=0,Va=!1;var ao=null,F0=(n,t)=>!Kn(n,t)&&(qe(n,t)===2||n===18&&t===10),nS=(n,t)=>!Kn(n,t)&&qe(n,t)===6,Dh=n=>Math.max(35,62-n*5),pg=22,iS=new fn(.2,.23,1,10,1,!0),sS=0;function ai(n,t,e){let i=n==="hak"?Wm():n==="sci"?Gm():n==="doll"?Hm():n==="monitor"?zm():n==="pe"?Vm():n==="ball"?Xm(Math.random()*3|0):no();n==="mirror"&&Cs(i,!0),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Rt.add(i);let s={kind:n,x:t,y:e,path:[],pathT:0,state:"wander",alertT:0,target:null,rustleT:0,model:i,life:13,fx:0,fy:1,nid:++sS};if(n==="doll"){s.trailG=new Bt,Rt.add(s.trailG),s.trail=[];for(let r=0;r<26;r++){let o=new Et(iS,i.userData.skin);o.castShadow=!0,o.visible=!1,s.trailG.add(o)}}return on.push(s),s}function uo(n){Rt.remove(n.model),n.trailG&&Rt.remove(n.trailG),on=on.filter(t=>t!==n)}function Hs(){let n=xe.spawn,t=n[0],e=-1;for(let i=0;i<40;i++){let s=n[Math.random()*n.length|0],r=Math.hypot(s[0]-q.x,s[1]-q.y);r>e&&(e=r,t=s)}return t}function vr(){if(is=null,on)for(let n of on.slice())uo(n);q={x:xe.start[0],y:xe.start[1]},Ue=0,zs=0,on=[],rn="break",ci=1,dn=Dh(1),pe=null,Ja=0,Ke=!0,Nn=null,Si=0,cs=!1,Vf(),Hf=2+(Math.random()*2|0);for(let n of $a)Rt.remove(n.obj);if($a=[],hs=[],Xe&&Mg(),it("vent").classList.remove("show"),Xt===0){sd=0,$n()&&(ai("doll",30.5,5.5),ai("sci",46.5,20.5)),_h=ai("pe",I0[0],I0[1]),_h.state="idle",dr=!1,bi.visible=!0,bi.position.y=1.125,ks=!1,Ao=!1,Ve={phone:1,broom:0,peTop:!1,peBottom:!1,map:!0},co=0,Va=!1,To.visible=!0,_o=O1,Ya.visible=!0,Ya.position.set(_o[0]*F,.008,_o[1]*F),bo.visible=!0;for(let n of og)n.visible=!0;for(let n in mr)mr[n].visible=!Re.notes.includes(n);Kt={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},Cs(Mi,!1),So.visible=!1,Qf.visible=!0,Y1()}else{if(_h=null,Ve.broom=Math.max(Ve.broom,1),$n()){if(xe.rules.includes("decal")){let n=Hs();ai("doll",n[0],n[1])}if(xe.rules.includes("sci")){let n=Hs();ai("sci",n[0],n[1])}}Xf()}as(),wo(null),Za(0),it("floorChip").textContent=Co(Xt)}function as(){Ao=Ve.peTop||Ve.peBottom;let n=Ve.phone+Ve.broom;it("keyChip").textContent=(ks?"\u{1F511} \uC5F4\uC1E0":"\u{1F511} \uC5C6\uC74C")+" \xB7 "+(Ao?"\u{1F455} \uCCB4\uC721\uBCF5":"\u{1F454} \uAD50\uBCF5"),it("keyChip").classList.toggle("got",ks);let t=Ve[xr]>0?xr:Ve.broom>0?"broom":"phone";it("throwB").innerHTML="<span>"+(n?t==="broom"?"\u{1F9F9}":"\u{1F4F1}":"\u270B")+"</span>\uB358\uC9C0\uAE30 "+n,it("throwB").style.opacity=n?1:.4}function Ni(n,t,e,i,s=$0){if(n|=0,t|=0,e|=0,i|=0,n===e&&t===i)return[];let r=new Int32Array(de*Ae).fill(-1),o=[Ft(n,t)];r[Ft(n,t)]=Ft(n,t);for(let a=0;a<o.length;a++){let u=o[a],h=u%de,f=u/de|0;if(h===e&&f===i)break;for(let[d,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=h+d,p=f+g;if(!s(_,p))continue;let m=Ft(_,p);r[m]===-1&&(r[m]=u,o.push(m))}}let l=Ft(e,i);if(r[l]===-1)return null;let c=[];for(let a=l;a!==Ft(n,t);a=r[a])c.push([a%de+.5,(a/de|0)+.5]);return c.reverse()}function mg(){for(let n=0;n<200;n++){let t=Math.random()*de|0,e=Math.random()*Ae|0;if($0(t,e)&&(qe(t,e)===0||Math.random()<.5))return[t,e]}return[28,12]}function Ns(n,t,e){if(!n.path||!n.path.length)return!0;let[i,s]=n.path[0],r=i-n.x,o=s-n.y,l=Math.hypot(r,o),c=t*e;return l<=c?(n.x=i,n.y=s,n.path.shift()):(n.x+=r/l*c,n.y+=o/l*c,n.fx=r/l,n.fy=o/l),!n.path.length}var fo=()=>qe(q.x|0,q.y|0)===1;function B0(){if(on.some(e=>e.kind==="monitor"))return;let n=Xt?[Hs(),Hs()]:[[1.5,12.5],[56.5,12.5]].sort((e,i)=>Math.hypot(i[0]-q.x,i[1]-q.y)-Math.hypot(e[0]-q.x,e[1]-q.y)),t=ai("monitor",n[0][0],n[0][1]);t.state="patrol",t.target=n[1],me("\u{1F514} \uC218\uC5C5 \uC2DC\uAC04\uC774\uB2E4. \uBCF5\uB3C4\uC5D0\uC11C \uBC1C\uC18C\uB9AC\uAC00 \uB4E4\uB9B0\uB2E4\u2026",2600)}function rS(n){sd+=n;let t=dn;if(dn-=n,$n()){if(rn==="break"&&t>10&&dn<=10&&(dg(),me("\u26A0\uFE0F \uACE7 \uC218\uC5C5 \uC885\uC774 \uC6B8\uB824\uC694! \uAD50\uC2E4\uB85C \uB3CC\uC544\uAC00\uC138\uC694")),dn<=0)if(rn==="break")rn="class",dn=pg,Eo(),B0();else{rn="break",ci++,dn=Dh(ci),Eo(1.06);for(let a of on.filter(u=>u.kind==="monitor"))uo(a);wo(null),ci===3&&on.filter(a=>a.kind==="doll").length<2?(ai("doll",20.5,24.5),me("\u{1F58D}\uFE0F \uBCF5\uB3C4 \uC5B4\uB518\uAC00\uC5D0\uC11C \uBCBD\uC774 \uC811\uD788\uB294 \uC18C\uB9AC\uAC00 \uD558\uB098 \uB354 \uB4E4\uB9B0\uB2E4\u2026",3e3)):me(ci+"\uAD50\uC2DC \uC26C\uB294 \uC2DC\uAC04")}rn==="class"&&B0()}let e=sn.x,i=sn.y;(vn.w||vn.arrowup)&&(i=-1),(vn.s||vn.arrowdown)&&(i=1),(vn.a||vn.arrowleft)&&(e=-1),(vn.d||vn.arrowright)&&(e=1);let s=0,r=(nd||vn.shift)&&!Ui&&i<.3,o=Math.hypot(e,i)*(cs||ye&&ye.pulled?0:1);if(ye&&ye.pulled){(!ye.path||!ye.path.length||(ye.pt-=n)<0)&&(ye.pt=1,ye.path=Ni(q.x,q.y,ye.tx,ye.ty,(d,g)=>!Kn(d,g))||[]);let a=ye.path[0]||[ye.tx,ye.ty];Math.hypot(a[0]-q.x,a[1]-q.y)<.3&&ye.path.shift();let u=a[0]-q.x,h=a[1]-q.y,f=Math.hypot(u,h)||1;e=0,i=0,qf(u/f*1.5*n,h/f*1.5*n),Ue+=((Math.atan2(-u,-h)-Ue+Math.PI*3)%(Math.PI*2)-Math.PI)*n*2}if(cs&&(e=0,i=0),pe)Ja+=n,Ja>8&&(cd(),me("\uC228\uC774 \uB9C9\uD600\uC11C \uB6F0\uCCD0\uB098\uC654\uB2E4!"),s=6);else if(o>.15){let a=-Math.sin(Ue),u=-Math.cos(Ue),h=Math.cos(Ue),f=-Math.sin(Ue),d=(r?3.9:Ui?1.1:2.2)*(_r?.5:1),g=d*n*Math.min(1,o)/o;qf((a*-i+h*e)*g,(u*-i+f*e)*g),s=r?7.5:Ui?.6:3;let _=Ha;Ha+=n*(r?11:Ui?4.5:7.5),!Eh&&Math.floor(_/Math.PI)!==Math.floor(Ha/Math.PI)&&Q1(r?.55:Ui?.04:.2),Za(r?2:Ui?.5:1)}if((pe||o<=.15)&&Za(0),q.noise=s,Wf-=n,r&&o>.15&&Xt&&qe(q.x|0,q.y|0)===0&&Nh("run"),Xt===0){for(let a in vh)if(mr[a].visible){let[u,h]=vh[a];Math.hypot(u-q.x,h-q.y)<.75&&(mr[a].visible=!1,Re.notes.includes(a)||(Re.notes.push(a),Qa()),SS(a))}!ks&&Math.hypot(_o[0]-q.x,_o[1]-q.y)<.75&&(ks=!0,Ya.visible=!1,as(),ze(.4,.5,4e3,0,3),q.noise=6,me("\u{1F511} \uC9C0\uD558 \uACC4\uB2E8 \uC5F4\uC1E0\uB97C \uC8FC\uC6E0\uB2E4! <br>\uCC30\uB791\u2014 \uC18C\uB9AC\uAC00 \uC6B8\uB838\uB2E4\u2026")),bo.visible&&Math.hypot(Mo[0]-q.x,Mo[1]-q.y)<.9&&(Ve.peTop=!0,bo.visible=!1,as(),me("\u{1F455} \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0\uC11C \uCCB4\uC721\uBCF5 \uC0C1\uC758\uB97C \uAEBC\uB0B4 \uC785\uC5C8\uB2E4")),To.visible&&Math.hypot(Mh[0]-q.x,Mh[1]-q.y)<.8&&(Ve.peBottom=!0,To.visible=!1,as(),me("\u{1F456} \uAD50\uC2E4 \uB4A4\uC5D0\uC11C \uCCB4\uC721\uBCF5 \uD558\uC758\uB97C \uCC3E\uC544 \uC785\uC5C8\uB2E4"));for(let a of og)a.visible&&Math.hypot(a.userData.x-q.x,a.userData.y-q.y)<.8&&(a.visible=!1,Ve.broom++,as(),me("\u{1F9F9} \uBE57\uC790\uB8E8\uB97C \uC8FC\uC6E0\uB2E4 (\uAC00\uBC29\uC5D0 \uB123\uC74C)",1500));!dr&&Math.hypot(52.5-q.x,11.5-q.y)<1.3&&(ks?(dr=!0,ze(.8,.6,600,0,2),me("\uCCA0\uBB38\uC774 \uC5F4\uB838\uB2E4. \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uB294 \uACC4\uB2E8\uC774\uB2E4\u2026")):me("\u{1F512} \uC9C0\uD558 \uACC4\uB2E8 \uCCA0\uBB38\uC774 \uC7A0\uACA8 \uC788\uB2E4. \uC5F4\uC1E0\uAC00 \uD544\uC694\uD558\uB2E4",1200)),dr&&bi.position.y<3.4&&(bi.position.y+=n*1.5),dr&&bi.position.y>=3.4&&(bi.visible=!1)}if(Ro(q.x|0,q.y|0)===vo){if($n())return Th();q.askedDown||(q.askedDown=!0,Gs({t:"stairs",lv:Xt}),me("\u{1F465} \uACC4\uB2E8\uC744 \uCC3E\uC558\uB2E4! \uB2E4 \uAC19\uC774 \uB0B4\uB824\uAC04\uB2E4\u2026",2e3))}if(Xt&&xe.door&&Math.hypot(xe.door[0]+.5-q.x,xe.door[1]+.45-q.y)<.75){if($n())return me("\uBE68\uAC04 \uBB38\uC744 \uC5F4\uC5C8\uB2E4\u2026"),Th();q.askedDown||(q.askedDown=!0,Gs({t:"stairs",lv:Xt}),me("\u{1F465} \uBE68\uAC04 \uBB38\uC744 \uC5F4\uC5C8\uB2E4! \uB2E4 \uAC19\uC774 \uB0B4\uB824\uAC04\uB2E4\u2026",2e3))}zf.style.visibility=pe||bg()?"visible":"hidden",it("shoutB").style.visibility=cs||on.some(a=>a.kind==="sci"&&a.state!=="retreat"&&Math.hypot(a.x-q.x,a.y-q.y)<10)?"visible":"hidden",zf.innerHTML=pe?"<span>\u{1F6AA}</span>\uB098\uAC00\uAE30":"<span>\u{1F6AA}</span>\uC228\uAE30";{let a=xe.seen||(xe.seen=new Uint8Array(de*Ae));for(let u=Math.max(0,(q.y|0)-4);u<=Math.min(Ae-1,(q.y|0)+4);u++)for(let h=Math.max(0,(q.x|0)-4);h<=Math.min(de-1,(q.x|0)+4);h++)a[Ft(h,u)]=1}if(uS(n),!Ke||(Xt===0&&yS(n),!Ke)||(Sg(n),!Ke))return;let l=99,c=null;for(let a of on.slice()){a.pathT-=n;let u=Math.hypot(a.x-q.x,a.y-q.y);if(a.remote){if(a.tx!=null&&(a.x+=(a.tx-a.x)*Math.min(1,n*8),a.y+=(a.ty-a.y)*Math.min(1,n*8)),a.kind==="monitor"&&(c=a,rn==="class"&&!fo()&&u<(pe?1.2:.65)))return Fs("bell",a);if(a.kind==="sci"&&G0(a,u,n))return;l=Math.min(l,u);continue}if(a.kind==="doll"){if(Xe&&Xe.m===a){l=Math.min(l,u);continue}let h=(d,g)=>{a.state!=="hunt"&&(ze(.5,.6,700,li(a.x,a.y),1.5),u<18&&yr("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,Math.max(.25,1-u/18))),a.state="hunt",a.alertT=2.5,a.target=[d|0,g|0],a.pathT=Math.min(a.pathT,0)};for(let d of hs)Math.hypot(d.x-a.x,d.y-a.y)<d.r&&h(d.x,d.y);!pe&&q.noise>0&&u<q.noise&&qe(q.x|0,q.y|0)!==1&&h(q.x,q.y);for(let d of At.others.values())Gf(d)&&!d.c&&d.n>0&&Math.hypot(d.x-a.x,d.y-a.y)<d.n&&h(d.x,d.y);(a.pathT<=0||!a.path||!a.path.length)&&(a.pathT=a.state==="hunt"?.3:3,a.state==="wander"&&(!a.path||!a.path.length)&&(a.target=mg()),a.target&&(a.path=Ni(a.x,a.y,a.target[0],a.target[1])||[]));let f=Ns(a,a.state==="hunt"?3.3:1,n);if(a.state==="hunt"&&(a.alertT-=n,f&&!Xe?Bf(a):f&&a.alertT<=0&&(a.state="wander",a.path=[])),a.rustleT-=n,a.rustleT<=0&&(a.rustleT=1.6+Math.random()*2,u<14&&ze(.35,.3*(1-u/14),250+Math.random()*150,li(a.x,a.y),3)),!pe&&u<.7&&!Xe&&(a.target=[q.x,q.y],Bf(a)),!Xe){for(let d of At.others.values())if(Gf(d)&&Math.hypot(d.x-a.x,d.y-a.y)<.7){a.target=[d.x,d.y],Bf(a);break}}}else if(a.kind==="monitor"){c=a;let h=!fo()&&Ke?pe?[pe[0]+pe[2],pe[1]+pe[3]]:[q.x,q.y]:null,f=h?u:1e9;for(let g of At.others.values())if(g.lv===Xt&&g.a&&!g.c){let _=Math.hypot(g.x-a.x,g.y-a.y);_<f&&(f=_,h=[g.x,g.y])}let d=!!h;if(d&&a.state!=="chase"&&(a.state="chase",Cs(a.model,!0),u<30&&yr("\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!",1.7,1.1,1)),!d&&a.state==="chase"&&(a.state="patrol",Cs(a.model,!1),a.path=[]),a.state==="chase"?(a.pathT<=0&&(a.pathT=.25,a.path=Ni(a.x,a.y,h[0],h[1])||[]),Ns(a,3.15,n)):((!a.path||!a.path.length)&&(a.target=Xt?Hs():a.x<28?[56,12]:[1,12],a.path=Ni(a.x,a.y,a.target[0],a.target[1])||[]),Ns(a,1.1,n)),a.state==="chase"&&!fo()&&u<(pe?1.2:.65))return Fs("bell",a)}else if(a.kind==="mirror"){if(a.life-=n,a.pathT<=0&&(a.pathT=.2,a.path=pe?[]:Ni(a.x,a.y,q.x,q.y,F0)||[],!a.path.length&&!pe&&(a.path=Ni(a.x,a.y,18,10,F0)||[])),Ns(a,3.6,n),a.life<=0){uo(a),Kt.chaser=null,me("\uADF8 \uC560\uAC00\u2026 \uC0AC\uB77C\uC84C\uB2E4",1800);continue}if(!pe&&u<.6)return Fs("mirror",a)}else if(a.kind==="sci"){if(G0(a,u,n))return}else if(a.kind==="hak"){if(a.life-=n,a.pathT<=0&&(a.pathT=.3,a.path=pe||fo()?[]:Ni(a.x,a.y,q.x,q.y)||[]),Ns(a,2.9,n),a.rustleT-=n,a.rustleT<=0&&(a.rustleT=.5,ze(.06,Math.min(.8,2/(1+u*.3)),2600,li(a.x,a.y),3)),a.life<=0){uo(a),me("\uD559\uC0DD\uC8FC\uC784\uC774 \uB3CC\uC544\uAC14\uB2E4\u2026",1500);continue}if(!pe&&u<.65)return Fs(a.why||"hall",a)}else if(a.kind==="pe"){let h=qe(q.x|0,q.y|0)===6;if(h){a.fx=q.x-a.x,a.fy=q.y-a.y;let f=Math.hypot(a.fx,a.fy)||1;a.fx/=f,a.fy/=f}if(h&&!Ao){if(co+=n,co>1&&!Va){Va=!0,fS(),me("\uC091\u2014 \uC090\uC775\u2014!",1500);for(let f=0;f<3;f++){let d=ai("ball",2.5+f*.4,23.5+f%2);d.state="chase"}}}else h&&Ao&&co===0&&(co=.01,me("\uCCB4\uC721 \uC120\uC0DD\uB2D8\uC774 \uCCB4\uC721\uBCF5\uC744 \uBCF4\uB354\uB2C8 \uACE0\uAC1C\uB97C \uB3CC\uB838\uB2E4\u2026",2200));h||(co=0,Va=!1);continue}else if(a.kind==="ball"){if(qe(q.x|0,q.y|0)!==6&&(a.life-=n*4,a.life<=0)){uo(a);continue}a.pathT<=0&&(a.pathT=.2,a.path=Ni(a.x,a.y,q.x,q.y,nS)||[]);let h=a.x,f=a.y;if(Ns(a,3.7,n),a.roll=(a.roll||0)+Math.hypot(a.x-h,a.y-f)*F/.24,a.rustleT-=n,a.rustleT<=0&&(a.rustleT=.8+Math.random(),ze(.3,.4,900+Math.random()*600,li(a.x,a.y),6)),u<.55)return Fs("gym",_h)}l=Math.min(l,u)}hs=hs.filter(a=>(a.t-=n)>0),dS(n),pS(n),wo(c),Nf-=n,l<8&&Nf<=0&&(j1(),Nf=.35+l/8*.9)}var k0={doll:1,monitor:2,sci:3},oS=["","doll","monitor","sci"],gg=["wander","hunt","patrol","chase","lock","retreat","idle"],At={on:!1,host:!0,code:"",me:"",slot:0,roster:[],others:new Map,sendT:0,monT:0,lastS:"",lastSt:0,lastM:"",lastMt:0},le=null,$n=()=>!At.on||At.host,Gf=n=>n.lv===Xt&&n.a&&!n.h;function xg(n){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle="rgba(0,0,0,.55)",e.beginPath(),e.roundRect?e.roundRect(8,10,240,44,12):e.rect(8,10,240,44),e.fill(),e.fillStyle="#fff",e.font="bold 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,128,33);let i=new jo(new Yr({map:new Ks(t),depthTest:!1,transparent:!0}));return i.scale.set(.9,.225,1),i.renderOrder=10,i}function z0(n,t){let e=At.others.get(n);if(!e){let i=no({hairColor:[1971472,3810328,2763312,5913122][At.others.size%4]});i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),Rt.add(i);let s=xg(t||"\uCE5C\uAD6C");s.position.y=2.05,i.add(s),e={id:n,nick:t,model:i,tag:s,x:0,y:0,rx:0,ry:0,yaw:0,e:1.6,lv:-1,a:1,h:0,n:0,c:0,walk:0,bub:null,bubT:0},At.others.set(n,e)}return e}function H0(n){let t=At.others.get(n);t&&(Rt.remove(t.model),At.others.delete(n))}function _g(n){if(le){n&&le.emit("join",n);return}it("mpMsg").textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\u2026 (\uCC98\uC74C\uC5D4 1\uBD84\uCBE4 \uAC78\uB9B4 \uC218 \uC788\uC5B4\uC694)",le=ka(Y0+"/horror",{auth:{token:Ti},transports:["websocket","polling"],reconnectionAttempts:20}),le.on("connect",()=>{At.wantCode&&le.emit("join",At.wantCode)}),le.on("connect_error",()=>{it("mpMsg").textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694"}),le.on("rooms",t=>{it("mpRooms").innerHTML=t.length?t.map(e=>'<button class="g" data-c="'+e.code+'">\uBC29 '+e.code+" \xB7 "+e.n+"\uBA85 \u2014 \uCC38\uAC00</button>").join(""):'<p class="muted">\uC9C0\uAE08 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC5B4\uC694. \uC0C8\uB85C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694!</p>'}),le.on("joinErr",t=>{it("mpMsg").textContent=t==="full"?"\uBC29\uC774 \uAF49 \uCC3C\uC5B4\uC694 (\uCD5C\uB300 6\uBA85)":"\uBC29 \uBC88\uD638\uB294 \uC22B\uC790 4\uC790\uB9AC\uC608\uC694"}),le.on("joined",t=>{At.on=!0,At.code=t.code,At.me=t.me,At.slot=t.s,At.host=!!t.host,At.nick=t.nick,Ie("mp",!1),Ie("intro",!1),Fi(),Un||(At.host||Lh(tl),vr(),Un=!0,Eo(1.06)),me("\u{1F465} \uBC29 "+t.code+"\uC5D0 \uB4E4\uC5B4\uC654\uC5B4\uC694"+(At.host?" (\uBC29\uC7A5)":"")+"<br>\uCE5C\uAD6C\uC5D0\uAC8C \uBC29 \uBC88\uD638\uB97C \uC54C\uB824 \uC8FC\uC138\uC694",3500),Uf()}),le.on("roster",t=>{At.roster=t;let e=t.find(i=>i.id===At.me);e&&(At.host=!!e.host);for(let i of[...At.others.keys()])t.some(s=>s.s===i)||H0(i);for(let i of t)i.id!==At.me&&z0(i.s,i.nick);Uf()}),le.on("host",()=>{At.host=!0,me("\u{1F451} \uBC29\uC7A5\uC774 \uB418\uC5C8\uB2E4 \u2014 \uC774\uC81C \uAD34\uBB3C\uC740 \uB0B4 \uD654\uBA74\uC5D0\uC11C \uACC4\uC0B0\uB41C\uB2E4",2500),Uf()}),le.on("gone",t=>H0(t)),le.on("p",t=>{let[e,i,s,r,o,l,c]=t;if(e===At.slot)return;let a=z0(e,(At.roster.find(u=>u.s===e)||{}).nick);Object.assign(a,{rx:s/10,ry:r/10,yaw:o/100,lv:i,a:l&1,h:l>>1&1,e:l&4?1.1:1.6,c:l>>3&1,n:c/10}),!a.x&&!a.y&&(a.x=a.rx,a.y=a.ry)}),le.on("m",t=>cS(t)),le.on("ev",t=>aS(t)),le.on("chat",t=>{me("\u{1F4AC} <b>"+Wa(t.nick)+"</b>: "+Wa(t.t),3500);let e=At.others.get(t.s);e&&(e.bub&&e.model.remove(e.bub),e.bub=xg("\u{1F4AC} "+t.t.slice(0,14)),e.bub.position.y=2.35,e.model.add(e.bub),e.bubT=4)}),le.on("disconnect",()=>{At.on&&me("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694\u2026 \uB2E4\uC2DC \uC5F0\uACB0\uD558\uB294 \uC911",2500)})}var Wa=n=>String(n).replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]);function Uf(){it("mpChip").style.display=At.on?"":"none",it("mpChip").textContent="\u{1F465} \uBC29 "+At.code+" \xB7 "+At.roster.length+"\uBA85"+(At.host?" \u{1F451}":""),it("restartB").style.display=At.on&&!At.host?"none":""}function Gs(n){At.on&&le&&le.emit("ev",n)}function aS(n){let t=At.others.get(n.f),e=t?t.nick:"\uB204\uAD70\uAC00";if(n.t==="noise"&&$n())hs.push({x:n.x,y:n.y,r:n.r,t:.3});else if(n.t==="shout"){if($n()){hs.push({x:n.x,y:n.y,r:15,t:.3});for(let i of on)i.kind==="sci"&&Math.hypot(i.x-n.x,i.y-n.y)<10&&(i.state="retreat",i.retreatT=18,i.pathT=0,i.path=[])}n.lv===Xt&&me("\u{1F4E2} "+Wa(e)+": \u300C\uC120\uC0DD\uB2D8!\u300D",1500)}else if(n.t==="fold"&&!$n()&&n.lv===Xt){let i=on.find(s=>s.remote&&s.nid===n.mid);i&&vg(i,n.p)}else if(n.t==="bc"&&!$n()&&!ye)rd();else if(n.t==="stairs"&&$n()&&n.lv===Xt)me("\u{1F465} "+Wa(e)+" \uB2D8\uC774 \uACC4\uB2E8\uC744 \uCC3E\uC558\uB2E4! \uBAA8\uB450 \uD568\uAED8 \uB0B4\uB824\uAC04\uB2E4",2500),Th();else if(n.t==="dead")me("\u2620\uFE0F "+Wa(e)+" \u2014 "+(yo[n.rule]?yo[n.rule].why.slice(0,40)+"\u2026":"\uC8FD\uC5C8\uB2E4"),3e3);else if(n.t==="thrown"&&n.lv===Xt){let i=n.k==="broom"?ah():new Et(new se(.07,.015,.14),Vt({color:546}));Rt.add(i),$a.push({obj:i,sx:n.sx,sy:n.sy,ex:n.ex,ey:n.ey,t:0,dur:n.dur,landed:!1,remote:!0})}}function lS(n){if(!At.on||!le)return;let t=performance.now();if(At.sendT-=n,At.sendT<=0){At.sendT=.2;let e=(Ke?1:0)|(pe?2:0)|(Ga<1.3?4:0)|(fo()?8:0),i=[Xt,Math.round(q.x*10),Math.round(q.y*10),Math.round(Ue*100)%629,e,Math.round((q.noise||0)*10)],s=i.join();(s!==At.lastS||t-At.lastSt>3e3)&&(At.lastS=s,At.lastSt=t,le.volatile.emit("s",i))}if(At.host&&(At.monT-=n,At.monT<=0)){At.monT=.25;let e=[Xt,rn==="class"?1:0,Math.ceil(dn),ci];for(let s of on)k0[s.kind]&&e.push(s.nid,k0[s.kind],Math.round(s.x*10),Math.round(s.y*10),(Math.round(Math.atan2(s.fx,s.fy)/(Math.PI*2)*64)+64)%64,gg.indexOf(s.kind==="sci"&&s.state==="lock"?"wander":s.state));let i=e.join();(i!==At.lastM||t-At.lastMt>2e3)&&(At.lastM=i,At.lastMt=t,le.volatile.emit("m",e))}}function cS(n){if($n()||!Un)return;let t={lv:n[0],ph:n[1],pt:n[2],pd:n[3],m:[]};for(let s=4;s+5<n.length;s+=6){let r=n[s+4]/64*Math.PI*2;t.m.push([n[s],n[s+1],n[s+2]/10,n[s+3]/10,Math.sin(r),Math.cos(r),n[s+5]])}if(t.lv!==Xt&&!go){go=!0,it("fade").classList.add("show"),setTimeout(()=>{Lh(t.lv?lg(t.lv):tl),Re.deep=Math.max(Re.deep||0,Xt),Qa(),vr(),it("floorBig").textContent=Co(Xt),it("floorBig").classList.add("show"),setTimeout(()=>{it("fade").classList.remove("show"),go=!1},400),setTimeout(()=>it("floorBig").classList.remove("show"),2600)},700);return}let e=t.ph?"class":"break";e!==rn&&(e==="class"?Eo():(Eo(1.06),wo(null))),rn==="break"&&dn>10&&t.pt<=10&&e==="break"&&(dg(),me("\u26A0\uFE0F \uACE7 \uC218\uC5C5 \uC885\uC774 \uC6B8\uB824\uC694! \uAD50\uC2E4\uB85C \uB3CC\uC544\uAC00\uC138\uC694")),rn=e,Math.abs(dn-t.pt)>1.2&&(dn=t.pt),ci=t.pd;let i=new Set;for(let[s,r,o,l,c,a,u]of t.m){i.add(s);let h=on.find(d=>d.remote&&d.nid===s);h||(h=ai(oS[r],o,l),h.nid=s,h.remote=!0),h.tx=o,h.ty=l,h.fx=c,h.fy=a;let f=gg[u]||"wander";h.kind==="monitor"&&f!==h.state&&Cs(h.model,f==="chase"),h.kind==="doll"&&f==="hunt"&&h.state!=="hunt"&&Math.hypot(o-q.x,l-q.y)<18&&yr("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,.7),h.kind==="sci"&&h.state==="lock"||(h.state=f)}for(let s of on.slice())s.remote&&!i.has(s.nid)&&uo(s)}function hS(n){for(let t of At.others.values()){let e=Gf(t);if(t.model.visible=e,!e)continue;let i=t.x,s=t.y;t.x+=(t.rx-t.x)*Math.min(1,n*10),t.y+=(t.ry-t.y)*Math.min(1,n*10);let r=Math.hypot(t.x-i,t.y-s)/Math.max(n,.001);t.walk+=n*Math.min(14,r*4),t.model.position.set(t.x*F,t.e<1.3?-.35:0,t.y*F),t.model.rotation.y=t.yaw+Math.PI,Ra(t.model,t.walk,1,r>.3?.5:0),t.model.userData.head.rotation.x=0,t.bub&&(t.bubT-=n,t.bubT<=0&&(t.model.remove(t.bub),t.bub=null))}}var Of=(n,t)=>!Kn(n,t)&&qe(n,t)!==1&&(Xt||qe(n,t)===7||qe(n,t)===8||qe(n,t)===0&&n>24||Ro(n,t)===Ah);function G0(n,t,e){let i=n.model.userData;if(!(n.remote&&n.state!=="lock")){if(n.state==="retreat"){if(n.retreatT-=e,n.pathT<=0){n.pathT=1;let s=Xt?Hs():[50.5,22.5];n.path=Ni(n.x,n.y,s[0],s[1],Of)||[]}return Ns(n,.9,e),n.retreatT<=0&&(n.state="wander"),!1}}if(n.state==="lock"){n.lockT+=e,cs=!0,n.fx=q.x-n.x,n.fy=q.y-n.y;let s=Math.hypot(n.fx,n.fy)||1;if(n.fx/=s,n.fy/=s,n.lockT>1.1){let r=Math.min(1,(n.lockT-1.1)*.8);qf(-n.fx*1.6*e*r,-n.fy*1.6*e*r)}return n.lockT>3.4||t<.7?(cs=!1,Fs("sci",n),!0):!1}if(!n.remote&&(n.pathT<=0||!n.path||!n.path.length)){n.pathT=4;let s=mg();Of(s[0],s[1])&&(n.path=Ni(n.x,n.y,s[0],s[1],Of)||[])}if(n.remote||Ns(n,.55,e),n.state==="retreat")return!1;if(t<6.5&&!pe&&Ke){let s=-Math.sin(Ue),r=-Math.cos(Ue),o=(n.x-q.x)/(t||1),l=(n.y-q.y)/(t||1),c=s*o+r*l<-.35,a=q.noise>.7;(c&&a||q.noise>5)&&(n.state="lock",n.lockT=0,cs=!0,n.remote&&(n.localLock=!0),ze(.4,.6,1800,li(n.x,n.y),8),me("\u{1F9EA} \uC2DC\uD5D8\uAD00\uC774 \uB098\uB97C \uAC00\uB9AC\uCF30\uB2E4\u2026 \uBAB8\uC774 \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uB294\uB2E4!<br><b>\u{1F4E2} \uC120\uC0DD\uB2D8! \uC744 \uC678\uCCD0!</b>",2600))}return!1}function yg(){if(!Un||!Ke||gr())return;Fi(),yr("\uC120\uC0DD\uB2D8!",1.1,1.05,1),hs.push({x:q.x,y:q.y,r:15,t:.3}),q.noise=8,Gs({t:"shout",x:q.x,y:q.y,lv:Xt});let n=!1;for(let t of on)t.kind==="sci"&&Math.hypot(t.x-q.x,t.y-q.y)<10&&t.state!=="retreat"&&(t.state="retreat",t.retreatT=18,t.pathT=0,t.path=[],n=!0);n&&(cs=!1,me("\uBD88\uAF43\uC774 \uAEBC\uC9C0\uB354\uB2C8\u2026 \uACFC\uD559\uC2E4 \uAD34\uBB3C\uC774 \uB4F1\uC744 \uB3CC\uB824 \uC0AC\uB77C\uC84C\uB2E4",2400))}function rd(){let n=Xt?Hs():[1.5,12.5];if(ye={t:0,exp:0,tx:n[0],ty:n[1],pulled:!1},$n()&&Gs({t:"bc"}),Wt){let t=Wt.currentTime;[523,659,784,1047].forEach((e,i)=>Bs(e,t+i*.35,1.2,.12))}setTimeout(()=>{ye&&yr("\uD559\uC0DD \uC5EC\uB7EC\uBD84\uAED8 \uC54C\uB9BD\uB2C8\uB2E4. \uC9C0\uAE08 \uC989\uC2DC \uD558\uB358 \uC77C\uC744 \uBA48\uCD94\uACE0, \uB2F4\uC784 \uC120\uC0DD\uB2D8\uC744 \uB530\uB77C \uBC29\uC1A1\uC2E4\uB85C \uBAA8\uC5EC \uC8FC\uC2ED\uC2DC\uC624.",.6,.8,1)},1500),it("earB").style.display="flex",document.body.classList.add("bcast")}function Vf(){if(ye=null,it("earB").style.display="none",document.body.classList.remove("bcast"),window.speechSynthesis)try{speechSynthesis.cancel()}catch{}}function uS(n){if(!ye){$n()&&xe.rules.includes("bc")&&rn==="break"&&ci>=Hf&&dn<Dh(ci)-12&&dn>14&&(Hf=ci+2+(Math.random()*2|0),rd());return}if(ye.t+=n,ye.t>1.5&&!_r?ye.exp+=n:ye.exp=Math.max(0,ye.exp-n*.5),ye.pulled=ye.exp>1.6,it("bcTxt").textContent=_r?"\u{1F649} \uADC0\uB97C \uB9C9\uC558\uB2E4\u2026 (\uBC29\uC1A1 "+Math.max(0,12-ye.t).toFixed(0)+"\uCD08)":ye.pulled?"\u2026\uBC29\uC1A1\uC2E4\uB85C\u2026 \uAC00\uC57C \uD574\u2026":"\u{1F4E2} \uC9C0\uC9C0\uC9C1\u2026 \uBC29\uC1A1\uC774 \uB098\uC628\uB2E4! \uADC0\uB97C \uB9C9\uC544!",ye.exp>5){Vf(),Fs("bc",null);return}ye.t>12&&(Vf(),me("\uBC29\uC1A1\uC774 \uB05D\uB0AC\uB2E4\u2026",1500))}var Wf=0;function Nh(n){if(!xe.rules||!xe.rules.includes(n)||Wf>0||!Ke)return;Wf=18;let t=Hs(),e=ai("hak",t[0],t[1]);e.life=16,e.why=n==="run"?"hall":"phone",yr("\uAC70\uAE30! \uAD50\uCE59 \uC704\uBC18\uC774\uB2E4!",.5,.9,1),me("\u{1F4E2} \u300C"+yh[n]+"\u300D \uC704\uBC18!<br>\uD559\uC0DD\uC8FC\uC784\uC774 \uC628\uB2E4 \u2014 \uAD50\uC2E4\uC774\uB098 \uC0AC\uBB3C\uD568\uC73C\uB85C \uD53C\uD574!",3e3)}function Xf(){let n=["\uC218\uC5C5 \uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uAD50\uC2E4 \uC548\uC5D0 \uC788\uB294\uB2E4"].concat((xe.rules||[]).filter(t=>yh[t]).map(t=>yh[t]));it("ruleBoard").innerHTML="<b>\u{1F4CB} "+Co(Xt)+"\uC758 \uAD50\uCE59</b>"+n.map((t,e)=>"<div>"+(e+1)+". "+t+"</div>").join(""),it("ruleBoard").classList.add("show"),clearTimeout(Xf.t),Xf.t=setTimeout(()=>it("ruleBoard").classList.remove("show"),6500)}var hs=[],V0=0;function yr(n,t,e,i){if(me("\u300C"+n+"\u300D",1600),!(!window.speechSynthesis||performance.now()-V0<1500)){V0=performance.now();try{let s=new SpeechSynthesisUtterance(n);s.lang="ko-KR",s.pitch=t,s.rate=e,s.volume=i,speechSynthesis.cancel(),speechSynthesis.speak(s)}catch{}}}function fS(){if(!Wt)return;let n=Wt.currentTime;for(let[t,e]of[[0,.35],[.5,1.2]]){let i=Wt.createOscillator(),s=Wt.createGain(),r=Wt.createOscillator(),o=Wt.createGain();i.frequency.value=2900,r.frequency.value=38,o.gain.value=180,r.connect(o),o.connect(i.frequency),s.gain.setValueAtTime(0,n+t),s.gain.linearRampToValueAtTime(.35,n+t+.03),s.gain.setValueAtTime(.35,n+e-.05),s.gain.linearRampToValueAtTime(0,n+e),i.connect(s),s.connect(os),i.start(n+t),r.start(n+t),i.stop(n+e+.05),r.stop(n+e+.05)}}function od(){if(!Un||!Ke||gr()||pe||cs||Ve.phone+Ve.broom<=0)return;let n=Ve[xr]>0?xr:Ve.broom>0?"broom":"phone";Ve[n]--,as(),Fi(),n==="phone"&&Xt&&Nh("phone");let t=-Math.sin(Ue),e=-Math.cos(Ue),i=.5;for(;i<8;)if(i+=.1,Kn(Math.floor(q.x+t*i),Math.floor(q.y+e*i))){i-=.3;break}let s=n==="broom"?ah():new Et(new se(.07,.015,.14),Vt({color:546,roughness:.3,metalness:.4}));s.castShadow=!0,Rt.add(s),$a.push({obj:s,sx:q.x,sy:q.y,ex:q.x+t*i,ey:q.y+e*i,t:0,dur:.25+i*.06,landed:!1}),Gs({t:"thrown",k:n,sx:q.x,sy:q.y,ex:q.x+t*i,ey:q.y+e*i,dur:.25+i*.06,lv:Xt}),ze(.15,.2,500,0,2)}function dS(n){for(let t of $a){if(t.landed)continue;t.t+=n;let e=Math.min(1,t.t/t.dur);t.obj.position.set((t.sx+(t.ex-t.sx)*e)*F,1.4*(1-e)+Math.sin(e*Math.PI)*.8+.01,(t.sy+(t.ey-t.sy)*e)*F),t.obj.rotation.x+=n*12,t.obj.rotation.y+=n*7,e>=1&&(t.landed=!0,t.obj.rotation.set(0,Math.random()*3,0),t.obj.position.y=.01,ze(.25,.9,1800,li(t.ex,t.ey),1.5),ze(.2,.6,400,li(t.ex,t.ey),2),hs.push({x:t.ex,y:t.ey,r:14,t:.3}),t.remote||Gs({t:"noise",x:t.ex,y:t.ey,r:14}))}}var Ff=0;function pS(n){Ff-=n,Ff<=0&&it("talk").classList.remove("show");for(let t of Xt===0?td:xe.npcs||[]){let e=Math.hypot(t.px-q.x,t.py-q.y);if(t.model.userData.standing&&e<6){let r=Math.atan2(q.x-t.px,q.y-t.py);t.model.rotation.y+=((r-t.model.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,n*4)}let i=t.model.userData.head,s=e<3.5?Math.max(-1,Math.min(1,Math.atan2(t.px-q.x,t.py-q.y))):0;if(i.rotation.y+=(s-i.rotation.y)*Math.min(1,n*3),e<1.4&&ao!==t){ao=t;let r=t.lines[t.i++%t.lines.length];it("talkN").textContent=t.name,it("talkB").textContent=r,it("talk").classList.add("show"),Ff=5}}ao&&Math.hypot(ao.px-q.x,ao.py-q.y)>2.2&&(ao=null)}var W0=new B,mS=new B(0,1,0),kA=new Bn;function gS(n,t,e){let i=t.userData;Xe&&Xe.m===n&&Xe.grip?(t.position.copy(Xe.grip),t.lookAt(Xe.hingeMid),xf(t,wn,!1,Math.min(1,Xe.t*3))):(t.position.set(n.x*F,.3+(n.state==="hunt"?Math.abs(Math.sin(wn*14))*.2:0),n.y*F),t.rotation.set(0,Math.atan2(n.fx,n.fy),0),xf(t,wn*(n.state==="hunt"?2.2:.8),!0,0));let s=t.localToWorld(W0.set(0,.05,-.8)).clone(),r=n.trail;if(!r.length||r[0].distanceTo(s)>.5?(r.unshift(s.clone()),r.length>27&&r.pop()):r[0].copy(s),r.length===1)for(let o=1;o<6;o++)r.push(s.clone().add(new B(-Math.sin(t.rotation.y),.05*o,-Math.cos(t.rotation.y)).multiplyScalar(.4*o)));n.trailG.children.forEach((o,l)=>{let c=r[l],a=r[l+1];if(!c||!a){o.visible=!1;return}let u=c.distanceTo(a);if(u<.01){o.visible=!1;return}o.visible=!0,o.position.copy(c).add(a).multiplyScalar(.5),o.position.y=Math.max(o.position.y,.42+l*.02),o.quaternion.setFromUnitVectors(mS,W0.copy(a).sub(c).normalize()),o.scale.set(1.9+l*.03,u+.15,1.9+l*.03)})}var Xe=null,lo=Vt({map:Pm(),roughness:.9}),ns=new Bt;ns.visible=!1;Rt.add(ns);var ad=4,wh=[],ld=[];{let n=ns;for(let t=0;t<ad;t++){let e=new Bt;n.add(e);let i=new Et(new se(1,.05,1),[lo,lo,lo,lo,lo,lo]);i.castShadow=i.receiveShadow=!0,e.add(i),wh.push(e),ld.push(i),n=e}}var ls=new Et(new _e(1,1),new qn({color:131586}));ls.rotation.x=-Math.PI/2;ls.visible=!1;Rt.add(ls);function xS(n,t){if(Xt){let e=qe(n,t);return e===1?rs.wood:e===3?rs.woodDark:ag}return rs[Q0(n,t)]||rs.vinyl}function Bf(n){let t=Math.floor(n.target?n.target[0]:n.x),e=Math.floor(n.target?n.target[1]:n.y),i=(c,a)=>{let u=0;for(;u<6&&!Kn(t+c*(u+1),e+a*(u+1));)u++;return u},s=i(1,0)+i(-1,0)>=i(0,1)+i(0,-1),r,o;if(s?(r=e-i(0,-1),o=e+i(0,1)):(r=t-i(-1,0),o=t+i(1,0)),o-r>4){let c=s?e:t;r=Math.max(r,c-2),o=Math.min(o,c+2)}let l={axisX:s,a0:r,a1:o,c:(s?t:e)+.5,sgn:Math.random()<.5?1:-1,tx:t,ty:e};Gs({t:"fold",mid:n.nid,p:l,lv:Xt}),vg(n,l)}function vg(n,t){let{axisX:e,a0:i,a1:s,tx:r,ty:o,sgn:l}=t,c=3.4,a=t.c,u=a-l*c/2,h=(i+s+1)/2,f=(s-i+1)*F,d=c*F/ad;e?(ns.position.set(u*F,.03,h*F),ns.rotation.set(0,l*Math.PI/2,0)):(ns.position.set(h*F,.03,u*F),ns.rotation.set(0,l>0?0:Math.PI,0)),ns.visible=!0;let g=xS(r,o);wh.forEach((p,m)=>{p.position.set(0,0,m?d:0),p.rotation.set(0,0,0)}),ld.forEach(p=>{p.scale.set(f,1,d),p.position.set(0,0,d/2),p.material[2]=g}),ls.scale.set(e?c*F:f,e?f:c*F,1),ls.visible=!1,ls.position.set(e?a*F:h*F,.004,e?h*F:a*F),ls.rotation.set(-Math.PI/2,0,0);let _=e?new B(u*F,.4,h*F):new B(h*F,.4,u*F);Xe={m:n,t:0,killed:!1,axisX:e,a0:i,a1:s,c:a,L:c,x:r+.5,y:o+.5,hingeMid:_,grip:null,start:n.model.position.clone()},yr("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,1)}function Mg(){if(ns.visible=!1,ls.visible=!1,Xe){let n=Xe.m;n.state="wander",n.path=[],n.alertT=0,n.target=null}Xe=null}function Sg(n){if(!Xe)return;let t=Xe;t.t+=n;let e=t.t,i=Math.hypot(t.x-q.x,t.y-q.y),s=e<.45?0:e<.8?(e-.45)/.35:e<1.6?1:e<2.3?1-(e-1.6)/.7:0,r=s*s*(3-2*s),o=r*2.3,l=[.42,.25,.18,.15];wh.forEach((a,u)=>{a.rotation.x=-o*l[u]-(e<.45?Math.sin(e*60)*.015:0)}),ls.visible=o>.08;let c=wh[ad-1];if(t.grip=c.localToWorld(new B(0,.12,ld[0].scale.z)),e<.45){let a=t.grip.clone();t.grip=t.start.clone().lerp(a,Math.min(1,e/.3))}if(e>.3&&e-n<=.3&&(ze(.25,1.3,140,li(t.x,t.y),1.2),ze(.15,.8,2200,li(t.x,t.y),1),i<14&&(_S(),Xa=.25)),e>.45&&e-n<=.45&&(ze(.7,.9,600,li(t.x,t.y),.5),ze(.5,.6,3500,li(t.x,t.y),.7)),!t.killed&&o>1){t.killed=!0,Xa=i<10?.4:0;let a=t.axisX?q.y:q.x,u=t.axisX?q.x:q.y;if(!pe&&a>t.a0-.2&&a<t.a1+1.2&&Math.abs(u-t.c)<t.L/2+.3){Fs("run",null);return}}e>2.35&&Mg()}function _S(){let n=it("tak");n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}var Xa=0;function qf(n,t){let i=(s,r)=>Kn(Math.floor(s-.28),Math.floor(r-.28))||Kn(Math.floor(s+.28),Math.floor(r-.28))||Kn(Math.floor(s-.28),Math.floor(r+.28))||Kn(Math.floor(s+.28),Math.floor(r+.28))||qe(s|0,r|0)===2&&r<1.75&&s>15.9&&s<22.1;i(q.x+n,q.y)||(q.x+=n),i(q.x,q.y+t)||(q.y+=t)}function bg(){for(let n of Ka)if(Math.hypot(n[0]+.5+n[2]*.6-q.x,n[1]+.5+n[3]*.6-q.y)<1)return n;return null}function Tg(){if(!Ke||gr()||!Un)return;if(pe)return cd();let n=bg();n&&(pe=n,Ja=0,q.back=[q.x,q.y,Ue],q.x=n[0]+.5-n[2]*.25,q.y=n[1]+.5-n[3]*.25,Ue=Math.atan2(-n[2],-n[3]),zs=0,ze(.15,.35,300),it("vent").classList.add("show"))}function cd(){pe&&(q.x=q.back[0],q.y=q.back[1],pe=null,ze(.15,.35,300),it("vent").classList.remove("show"))}function yS(n){let t=qe(q.x|0,q.y|0)===2||q.x>15&&q.x<23&&q.y<11&&q.y>9.5,e=-Math.cos(Ue),i=qe(q.x|0,q.y|0)===2&&q.y<7&&e<-.6&&Math.abs(zs)<.55&&!pe;if(Kt.hist.push({x:q.x,y:q.y,yaw:Ue,eye:Ga}),Kt.hist.length>90&&Kt.hist.shift(),Kt.st==="broken"){Kt.cd-=n,Mi.visible=!1,Kt.cd<=0&&!t&&(Kt.st="normal",Kt.t=0,So.visible=!1,Cs(Mi,!1));return}if(Mi.visible=t,Kt.st==="normal"||Kt.st==="lag"){Kt.t=i?Kt.t+n:Math.max(0,Kt.t-n*1.5),Kt.st=Kt.t>1.3?"lag":"normal";let o=Kt.st==="lag"?Kt.hist[Math.max(0,Kt.hist.length-1-24)]:Kt.hist[Kt.hist.length-1];Kt.pose=o,Kt.t>2.7&&(Kt.st="stare",Kt.t=0)}else Kt.t+=n;let s=Kt.pose;Mi.position.set(s.x*F,0,(2-s.y)*F),Mi.rotation.y=-s.yaw;let r=Mi.userData.head;if(Kt.st==="stare"||Kt.st==="grin"){let o=new B;if(we.getWorldPosition(o),r.lookAt(o),Kt.st==="grin"&&r.rotateZ(Math.sin(Kt.t*3)*.08+.25),Kt.st==="stare"&&Kt.t>.9)Kt.st="grin",Kt.t=0,Cs(Mi,!0),ze(.6,.25,900,0,4);else if(Kt.st==="grin"&&Kt.t>.9){Kt.st="broken",Kt.cd=45,So.visible=!0,eS(),Mi.visible=!1;let l=ai("mirror",Math.min(21.5,Math.max(16.5,s.x)),1.9);Kt.chaser=l,me("\uAC70\uC6B8\uC774 \uAE68\uC84C\uB2E4! \uB3C4\uB9DD\uCCD0!",2200)}}else r.rotation.set(-zs*.6,0,0)}function Fs(n,t){Ke=!1,Nn={rule:n,m:t},Si=0,it("toast").style.opacity=0,tS(),navigator.vibrate&&navigator.vibrate([200,80,300]),pe&&cd(),wo(null),Gs({t:"dead",rule:n});let e=!Re.rules.includes(n);e&&Re.rules.push(n),Re.deaths++,n==="run"&&(Re.folds=(Re.folds||0)+1),Qa(),Za(0),n==="run"&&Xe&&MS(),Nn.show=()=>{it("deadWhy").textContent=yo[n].why,it("deadRule").textContent="\u{1F4D3} "+yo[n].text,it("deadNew").textContent=e?"\uC0C8 \uADDC\uCE59\uC774 \uC218\uCCA9\uC5D0 \uC801\uD614\uB2E4.":"\uC774\uBBF8 \uC54C\uACE0 \uC788\uB358 \uADDC\uCE59\uC774\uB2E4\u2026",Ie("dead",!0)},Nn.at=n==="run"&&is?3:1.4}var is=null,vS=()=>Vt({map:Fm(7+(Re.folds||0)),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});function MS(){let n=Xe,t=Xt?xe.group:ja,e=vS(),i,s,r;if(n.axisX){let a=q.y-n.a0<n.a1+1-q.y;i=new B(q.x*F,1,(a?n.a0:n.a1+1)*F+(a?.015:-.015)),s=a?0:Math.PI,r=new B(0,0,a?1:-1)}else{let a=q.x-n.a0<n.a1+1-q.x;i=new B((a?n.a0:n.a1+1)*F+(a?.015:-.015),1,q.y*F),s=a?Math.PI/2:-Math.PI/2,r=new B(a?1:-1,0,0)}let o=new Et(new _e(1.15,1.9),e);o.position.copy(i),o.rotation.y=s,o.rotation.z=(Math.random()-.5)*.1,t.add(o);let l=new Et(new _e(1.15,1.9),e);l.rotation.set(-Math.PI/2,0,s),l.position.set(i.x+r.x*1,.012,i.z+r.z*1),t.add(l);let c=n.axisX?new B(1,0,0):new B(0,0,1);c.dot(new B(-Math.sin(Ue),0,-Math.cos(Ue)))>0&&c.negate(),is={from:we.position.clone(),to:i.clone().addScaledVector(r,3.4).addScaledVector(c,.8).setY(1.55),look:i.clone().setY(.95),q0:we.quaternion.clone()}}var Eg=n=>Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0");function SS(n){it("noteT").textContent=ho[n].t,it("noteB").textContent=ho[n].b,Ie("note",!0)}var wn=0,X0=performance.now(),q0=!1,kf=0,xh=0;function wg(){let n=performance.now(),t=Math.min(.05,(n-X0)/1e3);if(X0=n,wn+=t,Un&&Ke&&!gr()&&rS(t),Un&&!Ke){if(Si+=t,Nn&&Nn.show&&Si>=Nn.at){let e=Nn.show;Nn.show=null,e()}Xe&&Nn&&Nn.rule==="run"&&Sg(t)}if(q){Ga+=((pe?1.55:Ui?1.12:1.6)-Ga)*Math.min(1,t*8);let i=Math.hypot(sn.x,sn.y)>.15||vn.w||vn.a||vn.s||vn.d||vn.arrowup||vn.arrowdown,s=i&&!pe?Math.sin(Ha*2)*.025:0;Xa>0&&(Xa-=t);let r=Xa>0?(Math.random()-.5)*.05:0;if(we.position.set(q.x*F+r,Ga+s+r,q.y*F),we.rotation.set(0,0,0),we.rotateY(Ue),we.rotateX(zs),is&&!Ke){let h=Math.min(1,Math.max(0,(Si-.6)/1.3)),f=h*h*(3-2*h);we.position.lerpVectors(is.from,is.to,f);let d=new Me().lookAt(we.position,is.look,new B(0,1,0)),g=new Bn().setFromRotationMatrix(d);we.quaternion.slerpQuaternions(is.q0,g,f)}Df.position.y=-.2+s*.6,Df.position.x=.12+(i?Math.cos(Ha)*.008:0),hi.intensity=pe?0:30*(Math.random()<.004?.2:1),Df.visible=!pe;for(let h of on){let f=h.model;f.position.set(h.x*F,0,h.y*F);let d=Math.atan2(h.fx,h.fy);if(f.rotation.y+=((d-f.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,t*6),h.kind==="doll")gS(h,f,t);else if(h.kind==="monitor"){if(Ra(f,wn,h.state==="chase"?11:4,h.state==="chase"?.7:.35),f.userData.head.rotation.z=h.state==="chase"?.3:Math.sin(wn*1.3)*.15,h.state==="chase")for(let g of f.userData.arms)g.rotation.x=-1.2+Math.sin(wn*11)*.3}else if(h.kind==="hak")Ra(f,wn,7,.5),f.userData.arms[1].rotation.x=-.6+Math.sin(wn*7)*.5;else if(h.kind==="sci"){let g=f.userData,_=h.state==="lock",p=h.state==="retreat",m=p?.05:_?1+h.lockT*.9:1+Math.sin(wn*9)*.1;g.flame.scale.set(m,m*(_?1.6:1),m),g.inner.visible=!p,g.light.intensity=p?0:_?3+h.lockT*2:1.6,_?g.arms[1].rotation.x=-1.4:g.arms[1].rotation.x=Math.sin(wn)*.1,f.position.y=Math.abs(Math.sin(wn*3))*.03}else h.kind==="pe"?(f.userData.head.rotation.z=Math.sin(wn*.8)*.2,f.userData.arms[1].rotation.x=Va?-2.4:-.1):h.kind==="ball"?(f.userData.ball.rotation.set(0,0,0),f.rotation.y=Math.atan2(h.fx,h.fy),f.userData.ball.rotation.x=h.roll||0,f.position.y=Math.abs(Math.sin(wn*9+h.x))*.25):(Ra(f,wn,13,.8),f.userData.head.lookAt(we.position))}let o=innerWidth<innerHeight?80:70,l=(Kt.st==="stare"||Kt.st==="grin")&&Ke?o*.55:o;Math.abs(we.fov-l)>.1&&(we.fov+=(l-we.fov)*Math.min(1,t*(l<we.fov?1.2:5)),we.updateProjectionMatrix()),hS(t),lS(t);let c=rn==="class"?1:0;Sh.intensity+=(c*9-Sh.intensity)*Math.min(1,t*3);for(let h of sg)h.material=c?eg:Kf;if(Xt)for(let h of xe.flick)h.t-=t,h.t<0&&(h.on=!h.on,h.t=h.on?.6+Math.random()*5:.03+Math.random()*.2),h.p.intensity=h.on===!1?.3:h.base;for(let h of ig)h.t-=t,h.t<0&&(h.on=!h.on,h.t=h.on?.5+Math.random()*4:.04+Math.random()*.25),h.p.intensity=h.on===!1?.2:h.base,h.l.material.emissiveIntensity=h.on===!1?.1:1.4;for(let h in mr){let f=mr[h];f.visible&&(f.material.emissiveIntensity=.6+Math.sin(wn*3)*.4)}if(Ya.rotation.y+=t,Nn&&Nn.m&&Si<1.4){let h=Nn.m.model,f=new B(0,0,-1).applyQuaternion(we.quaternion),d=h.userData.faceY||1.7,g=.42-Si*.08;if(h.position.set(we.position.x+f.x*g,we.position.y-d+f.y*g+(Math.random()-.5)*.02,we.position.z+f.z*g),h.rotation.set(0,Ue,0),h.userData.head&&h.userData.head.rotation.set(0,0,.3),h.userData.head){h.updateMatrixWorld(!0);let _=new B;h.userData.head.getWorldPosition(_);let p=we.position.clone().addScaledVector(f,Nn.m.kind==="monitor"?.4-Si*.06:.5-Si*.08);h.position.add(p.sub(_))}hi.intensity=Si<.1?120:30}let a=rn==="break"?Dh(ci):pg;it("bellTxt").textContent=ci+"\uAD50\uC2DC \xB7 "+(rn==="break"?"\uC26C\uB294 \uC2DC\uAC04":"\uC218\uC5C5 \uC2DC\uAC04"),it("bell").querySelector("small").textContent=Eg(Math.max(0,dn))+(rn==="break"&&dn<10?"  \u26A0\uFE0F \uACE7 \uC885\uC774 \uC6B8\uB824\uC694":"");let u=it("bar").firstElementChild;u.style.width=Math.max(0,dn/a*100)+"%",u.style.background=rn==="class"?"#c33":dn<10?"#fb3":"#9ad",it("ventTxt").textContent=pe?"\uC0AC\uBB3C\uD568 \uC548 \xB7 \uC228 \uCC38\uAE30 "+Math.max(0,8-Ja).toFixed(1)+"\uCD08":"",it("classTxt").style.opacity=rn==="class"&&fo()&&Ke?1:0}Oi.render(Rt,we),Un&&!q0&&(kf++,xh+=t,xh>4&&(kf/xh<24&&(q0=!0,Oi.setPixelRatio(1),Oi.shadowMap.enabled=!1,hi.castShadow=!1,Rt.traverse(e=>{e.material&&[].concat(e.material).forEach(i=>i.needsUpdate=!0)}),Jf()),kf=0,xh=0)),requestAnimationFrame(wg)}requestAnimationFrame(wg);function Ag(){if(!Un)return;let n=Object.keys(yo).map(e=>Re.rules.includes(e)?'<div class="rule">'+yo[e].text+"</div>":'<div class="rule" style="opacity:.35">??? (\uC544\uC9C1 \uBAA8\uB974\uB294 \uADDC\uCE59)</div>').join(""),t=Object.keys(ho).filter(e=>Re.notes.includes(e)).map(e=>'<div class="rule n"><b>'+ho[e].t+"</b><br>"+ho[e].b.replace(/\n/g,"<br>")+"</div>").join("");it("bookB").innerHTML="<p><b>\u{1F4CB} "+Co(Xt)+"\uC758 \uAD50\uCE59</b></p>"+["\uC218\uC5C5 \uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uAD50\uC2E4 \uC548\uC5D0 \uC788\uB294\uB2E4"].concat((Xt?xe.rules:[]).map(e=>yh[e]).filter(Boolean)).map(e=>'<div class="rule n">'+e+"</div>").join("")+'<p><b>\uC54C\uC544\uB0B8 \uADDC\uCE59</b> <span class="muted">(\uC8FD\uC73C\uBA74\uC11C \uBC30\uC6B4\uB2E4)</span></p>'+n+"<p><b>\uC8FC\uC6B4 \uCABD\uC9C0</b> "+Re.notes.length+"/"+Object.keys(ho).length+"</p>"+t+'<p class="muted">\uC8FD\uC740 \uD69F\uC218 '+Re.deaths+" \xB7 \uAC00\uC7A5 \uAE4A\uC774 \uB0B4\uB824\uAC04 \uACF3: "+(Re.deep?"\uC9C0\uD558 "+Re.deep+"\uCE35":"1\uCE35")+"</p>",it("acctLine").textContent=Ti?"\uB85C\uADF8\uC778: "+(Yf||"\uACC4\uC815")+" \xB7 \uC11C\uBC84\uC5D0 \uC800\uC7A5 \uC911":"\uAC8C\uC2A4\uD2B8 \xB7 \uC774 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5 \uC911",it("logoutB").style.display=Ti?"":"none",Ie("book",!0)}function hd(){if(!Un||!Ke)return;let n=[["\u{1F4F1}","\uD578\uB4DC\uD3F0",Ve.phone?"\uC2E0\uD638\uB294 \uC548 \uC7A1\uD788\uB294\uB370 \uCF1C\uC9C0\uAE30\uB294 \uD55C\uB2E4":"(\uB358\uC838 \uBC84\uB838\uB2E4)",Ve.phone?[["\uC2DC\uACC4 \uBCF4\uAE30","clock"],[xr==="phone"?"\u2714 \uB358\uC9C8 \uBB3C\uAC74":"\uB358\uC9C8 \uBB3C\uAC74\uC73C\uB85C","selphone"]]:[]],["\u{1F9F9}","\uBE57\uC790\uB8E8 \xD7 "+Ve.broom,"\uB358\uC9C0\uBA74 \uD070 \uC18C\uB9AC\uAC00 \uB098\uC11C \uB370\uCE7C\uCF54\uB9C8\uB2C8\uB97C \uAF88 \uC218 \uC788\uB2E4",Ve.broom?[[xr==="broom"?"\u2714 \uB358\uC9C8 \uBB3C\uAC74":"\uB358\uC9C8 \uBB3C\uAC74\uC73C\uB85C","selbroom"]]:[]],["\u{1F455}","\uCCB4\uC721\uBCF5 \uC0C1\uC758",Ve.peTop?"\uC785\uACE0 \uC788\uC74C":"\uC5C6\uC74C \u2014 \uAD50\uBB34\uC2E4 \uBD84\uC2E4\uBB3C \uC0C1\uC790?",[]],["\u{1F456}","\uCCB4\uC721\uBCF5 \uD558\uC758",Ve.peBottom?"\uC785\uACE0 \uC788\uC74C":"\uC5C6\uC74C \u2014 \uAD50\uC2E4 \uB4A4\uCABD?",[]],["\u{1F511}","\uC9C0\uD558 \uACC4\uB2E8 \uC5F4\uC1E0",ks||Xt?"\uC788\uC74C":"\uC5C6\uC74C \u2014 \uCCB4\uC721\uAD00 \uACE8\uB300 \uC544\uB798",[]],["\u{1F5FA}\uFE0F","A\uC870 \uD0D0\uC0C9 \uC9C0\uB3C4","\uC9C0\uB098\uAC04 \uACF3\uC774 \uC800\uC808\uB85C \uADF8\uB824\uC9C4\uB2E4",[["\uC9C0\uB3C4 \uBCF4\uAE30","map"]]],["\u{1F4D3}","\uCABD\uC9C0 "+Re.notes.length+"\uC7A5 \xB7 \uADDC\uCE59 "+Re.rules.length+"\uAC1C","",[["\uC218\uCCA9 \uBCF4\uAE30","book"]]]];it("bagB").innerHTML=n.map(([t,e,i,s])=>'<div class="item"><span class="ic">'+t+"</span><div><b>"+e+"</b><small>"+i+'</small></div><div class="acts">'+s.map(([r,o])=>'<button data-a="'+o+'">'+r+"</button>").join("")+"</div></div>").join(""),Ie("bag",!0)}it("bagB").addEventListener("click",n=>{let t=n.target.dataset&&n.target.dataset.a;if(t){if(t==="selphone"||t==="selbroom")xr=t.slice(3),as(),hd();else if(t==="map")Ie("bag",!1),ud();else if(t==="book")Ie("bag",!1),Ag();else if(t==="clock"){Xt&&Nh("phone");let e=sd,i=e/365;Ie("bag",!1),it("noteT").textContent="\u{1F4F1} \uD578\uB4DC\uD3F0",it("noteB").textContent="\uC2E0\uD638 \uC5C6\uC74C \xB7 \uBC30\uD130\uB9AC "+Math.max(1,100-Math.floor(e/60))+`%

\uAC80\uC740 \uC6D0 \uC548\uC5D0\uC11C \uD750\uB978 \uC2DC\uAC04: `+Eg(e)+`
\uBC14\uAE65\uC5D0\uC11C \uD750\uB978 \uC2DC\uAC04: `+i.toFixed(1)+`\uCD08

(\uC548\uC5D0\uC11C\uC758 1\uB144\uC774 \uBC16\uC5D0\uC11C\uB294 \uD558\uB8E8)`,Ie("note",!0)}}});function ud(){if(!Un)return;let n=it("mapC"),t=n.getContext("2d"),e=Math.floor(Math.min(innerWidth-60,640)/de);n.width=de*e,n.height=Ae*e,t.fillStyle="#0b0b0d",t.fillRect(0,0,n.width,n.height);let i=xe.seen||new Uint8Array(de*Ae),s=["#5d6a5e","#8a6a45","#7c9aa6","#7a5a4a","#8a8060","#556","#a07a3a","#5a8a8a","#6a5a7a"];for(let r=0;r<Ae;r++)for(let o=0;o<de;o++){if(!i[Ft(o,r)])continue;let l=Ro(o,r);t.fillStyle=l===Hn||l===qa?"#26262a":l===vo?"#2fd070":l===Ch?"#9aa":l===po?"#4a3a2a":Xt?qe(o,r)===1?"#8a6a45":qe(o,r)===3?"#7a5a4a":"#8c8a5a":s[qe(o,r)],t.fillRect(o*e,r*e,e,e)}if(t.font="bold "+Math.max(9,e)+"px sans-serif",t.textAlign="center",t.fillStyle="#fff",Xt)xe.door&&i[Ft(xe.door[0],xe.door[1])]&&(t.fillStyle="#d03030",t.fillRect(xe.door[0]*e,xe.door[1]*e-2,e,4));else{let r=[[7,5,1],[18.5,5,2],[30,5,3],[42,5,4],[52.5,6,5],[8.5,21,6],[26,21,7],[46,21,8]];for(let[o,l,c]of r)i[Ft(o|0,l|0)]&&t.fillText(Z0[c],o*e,l*e)}Xt===1&&xe.rooms&&i[Ft(xe.rooms[1].x+1,xe.rooms[1].y+1)]&&(t.fillStyle="#fff",t.fillText("2-1",(xe.rooms[1].x+xe.rooms[1].w/2)*e,(xe.rooms[1].y+xe.rooms[1].h/2)*e)),t.save(),t.translate(q.x*e,q.y*e),t.rotate(-Ue),t.fillStyle="#ffd23a",t.beginPath(),t.moveTo(0,-e*1.1),t.lineTo(e*.7,e*.7),t.lineTo(-e*.7,e*.7),t.closePath(),t.fill(),t.restore(),it("mapT").textContent="\u{1F5FA}\uFE0F "+Co(Xt)+" \uC9C0\uB3C4 (A\uC870)",Ie("mapM",!0)}it("bagBtn").onclick=hd;it("mapBtn").onclick=ud;it("bagOk").onclick=()=>Ie("bag",!1);it("mapOk").onclick=()=>Ie("mapM",!1);it("bookBtn").onclick=Ag;it("mpB").onclick=()=>{Fi(),Ie("intro",!1),Ie("mp",!0),_g(null),le&&le.emit("rooms")};it("mpNew").onclick=()=>{let n=String(1e3+Math.floor(Math.random()*9e3));At.wantCode=n,it("mpMsg").textContent="\uBC29 "+n+" \uB9CC\uB4DC\uB294 \uC911\u2026",le&&le.connected&&le.emit("join",n)};it("mpJoin").onclick=()=>{let n=it("mpCode").value.replace(/\D/g,"");if(n.length!==4){it("mpMsg").textContent="\uBC29 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694";return}At.wantCode=n,it("mpMsg").textContent="\uBC29 "+n+" \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026",le&&le.connected&&le.emit("join",n)};it("mpRefresh").onclick=()=>{le&&le.emit("rooms")};it("mpRooms").addEventListener("click",n=>{let t=n.target.dataset&&n.target.dataset.c;t&&(At.wantCode=t,le&&le.connected&&le.emit("join",t))});it("mpBack").onclick=()=>{Ie("mp",!1),Ie("intro",!0)};it("mpChip").onclick=()=>{let n=At.roster.map(t=>(t.host?"\u{1F451} ":"")+t.nick+(t.id===At.me?" (\uB098)":"")).join(`
`);it("noteT").textContent="\u{1F465} \uBC29 "+At.code,it("noteB").textContent=n+`

\uCE5C\uAD6C\uC5D0\uAC8C \uBC29 \uBC88\uD638 `+At.code+` \uB97C \uC54C\uB824 \uC8FC\uBA74 \uAC19\uC774 \uD560 \uC218 \uC788\uC5B4\uC694.
\uBC29\uC7A5 \uD654\uBA74\uC5D0\uC11C \uAD34\uBB3C\uACFC \uC885\uC18C\uB9AC\uAC00 \uACC4\uC0B0\uB3FC\uC694.`,Ie("note",!0)};it("chatBtn").onclick=()=>{if(!At.on){me("\uAC19\uC774 \uD558\uAE30 \uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uC57C \uCC44\uD305\uD560 \uC218 \uC788\uC5B4\uC694");return}let n=prompt("\uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uBCF4\uB0BC \uB9D0");n&&le&&le.emit("chat",n.slice(0,50))};it("bookOk").onclick=()=>Ie("book",!1);it("noteOk").onclick=()=>Ie("note",!1);it("logoutB").onclick=()=>{Ti="",Yf="",localStorage.removeItem("hor_tok"),Ie("book",!1),me("\uB85C\uADF8\uC544\uC6C3\uD588\uC5B4\uC694 (\uAC8C\uC2A4\uD2B8\uB85C \uACC4\uC18D)")};it("retryB").onclick=()=>{Ie("dead",!1),it("drawShow").classList.remove("show"),vr()};it("restartB").onclick=()=>{Ie("dead",!1),it("drawShow").classList.remove("show"),Lh(tl),vr()};it("againB").onclick=()=>{Ie("win",!1),vr()};it("startB").onclick=()=>{Fi(),Ie("intro",!1),vr(),Un=!0,Eo(1.06)};function fd(){Ie("login",!1),Ie("intro",!0)}it("guestB").onclick=()=>{Fi(),fd()};it("loginB").onclick=async()=>{Fi();let n=it("lu").value.trim(),t=it("lp").value,e=it("lmsg");if(!n||!t){e.textContent="\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694";return}it("loginB").disabled=!0,e.textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\u2026 (\uCC98\uC74C\uC5D4 1\uBD84\uCBE4 \uAC78\uB9B4 \uC218 \uC788\uC5B4\uC694)";try{Ti=(await Zf("/api/signin",{username:n,password:t})).session,localStorage.setItem("hor_tok",Ti),await K0(),e.textContent="",fd()}catch(i){e.textContent=i.status===401?"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC5B4\uC694":i.status===429?"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}it("loginB").disabled=!1};Ti&&(it("lmsg").textContent="\uC800\uC7A5\uB41C \uB85C\uADF8\uC778\uC73C\uB85C \uC811\uC18D \uC911\u2026",K0().then(fd).catch(n=>{n.status===401&&(Ti="",localStorage.removeItem("hor_tok")),it("lmsg").textContent=n.status===401?"\uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}));document.title=D1;window.__g={get deadT(){return Si},addMon:ai,violate:Nh,get deathCam(){return is},mp:At,mpConnect:_g,get bc(){return ye},get anyM(){return gr()&&gr().id},startBc:rd,descend:Th,get level(){return Xt},get LV(){return xe},get fold(){return Xe},get noiseEvents(){return hs},throwItem:od,get npcs(){return td},givePE(){Ao=!0,as()},get calls(){return Oi.info.render.calls},get P(){return q},get mons(){return on},get mir(){return Kt},set yaw(n){Ue=n},set pitch(n){zs=n},get alive(){return Ke},get save(){return Re},setPhaseT(n){dn=n},get phase(){return rn},get stairsOpen(){return dr},giveKey(){ks=!0,as()},get keyPos(){return _o}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
