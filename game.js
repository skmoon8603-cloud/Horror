var Mg=Object.defineProperty;var Sg=(n,t)=>{for(var e in t)Mg(n,e,{get:t[e],enumerable:!0})};var Gd=0,au=1,Vd=2;var Qs=1,Wd=2,Zr=3,Es=0,In=1,Ve=2,js=0,Jr=1,lu=2,cu=3,hu=4,Xd=5;var tr=100,qd=101,Yd=102,Zd=103,Jd=104,$d=200,Kd=201,Qd=202,jd=203,uu=204,fu=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,lp=214,El=0,wl=1,Al=2,Br=3,Rl=4,Cl=5,Pl=6,Il=7,du=0,cp=1,hp=2,Ci=0,pu=1,mu=2,gu=3,ha=4,xu=5,_u=6,yu=7;var vu=300,er=301,$r=302,ec=303,nc=304,kr=1e3,Ei=1001,Ll=1002,cn=1003,up=1004;var ua=1005;var Rn=1006,ic=1007;var Zi=1008;var Fn=1009,Mu=1010,Su=1011,Kr=1012,sc=1013,pi=1014,ii=1015,mi=1016,rc=1017,oc=1018,nr=1020,bu=35902,Tu=35899,Eu=1021,wu=1022,gi=1023,Wi=1026,Ji=1027,ac=1028,lc=1029,ws=1030,cc=1031;var hc=1033,fa=33776,da=33777,pa=33778,ma=33779,uc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,xc=37496,_c=37488,yc=37489,ga=37490,vc=37491,Mc=37808,Sc=37809,bc=37810,Tc=37811,Ec=37812,wc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Oc=36494,Fc=36495,Bc=36283,kc=36284,xa=36285,zc=36286;var Bo=2300,Dl=2301,bl=2302,jh=2303,tu=2400,eu=2401,nu=2402;var fp=3200;var Hc=0,dp=1,$i="",An="srgb",ko="srgb-linear",zo="linear",ye="srgb";var Tl=7680;var pp=519,mp=512,gp=513,xp=514,Au=515,_p=516,yp=517,Ru=518,Cu=519,Pu=35044;var Iu="300 es",ni=2e3,zr=2001;function bg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vp(){let n=Ho("canvas");return n.style.display="block",n}var pd={},Hr=null;function Go(...n){let t="THREE."+n.shift();Hr?Hr("log",t,...n):console.log(t,...n)}function Mp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Mp(n);let t="THREE."+n.shift();if(Hr)Hr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=Mp(n);let t="THREE."+n.shift();if(Hr)Hr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ys(...n){let t=n.join(" ");t in pd||(pd[t]=!0,zt(...n))}function Sp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var bp={[El]:El,[Al]:Pl,[Rl]:Rl,[Br]:Cl,[wl]:wl,[Pl]:Al,[Il]:Il,[Cl]:Br},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ph=Math.PI/180,Vo=180/Math.PI;function ir(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function Eg(n,t){return(n%t+t)%t}function Ih(n,t,e){return(1-e)*n+e*t}function Tp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ep(n,t){if(t.constructor===Float32Array)return n;let e=Gc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function wp(n,t){if(t.constructor===Float32Array)return n;let e=Gc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ou=class Ou{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ou.prototype.isVector2=!0;var Yt=Ou,Wn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,l){let c=i[s+0],a=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||c!==f||a!==d||h!==g){let p=c*f+a*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-l;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);m=Math.sin(m*M)/R,l=Math.sin(l*M)/R,c=c*m+f*l,a=a*m+d*l,h=h*m+g*l,u=u*m+y*l}else{c=c*m+f*l,a=a*m+d*l,h=h*m+g*l,u=u*m+y*l;let M=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=M,a*=M,h*=M,u*=M}}t[e]=c,t[e+1]=a,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let l=i[s],c=i[s+1],a=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=l*g+h*u+c*d-a*f,t[e+1]=c*g+h*f+a*u-l*d,t[e+2]=a*g+h*d+l*f-c*u,t[e+3]=h*g-l*u-c*f-a*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,c=Math.sin,a=l(i/2),h=l(s/2),u=l(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+a*d*g,this._y=a*d*u-f*h*g,this._z=a*h*g+f*d*u,this._w=a*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+a*d*g,this._y=a*d*u-f*h*g,this._z=a*h*g-f*d*u,this._w=a*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-a*d*g,this._y=a*d*u+f*h*g,this._z=a*h*g+f*d*u,this._w=a*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-a*d*g,this._y=a*d*u+f*h*g,this._z=a*h*g-f*d*u,this._w=a*h*u+f*d*g;break;case"YZX":this._x=f*h*u+a*d*g,this._y=a*d*u+f*h*g,this._z=a*h*g-f*d*u,this._w=a*h*u-f*d*g;break;case"XZY":this._x=f*h*u-a*d*g,this._y=a*d*u-f*h*g,this._z=a*h*g+f*d*u,this._w=a*h*u+f*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],l=e[5],c=e[9],a=e[2],h=e[6],u=e[10],f=i+l+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-a)*d,this._z=(o-s)*d}else if(i>l&&i>u){let d=2*Math.sqrt(1+i-l-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+a)/d}else if(l>u){let d=2*Math.sqrt(1+l-i-u);this._w=(r-a)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-l);this._w=(o-s)/d,this._x=(r+a)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=e._x,c=e._y,a=e._z,h=e._w;return this._x=i*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-i*a,this._z=r*h+o*a+i*c-s*l,this._w=o*h-i*l-s*c-r*a,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-e;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,e=Math.sin(e*a)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fu=class Fu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(md.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,c=t.w,a=2*(o*s-l*i),h=2*(l*e-r*s),u=2*(r*i-o*e);return this.x=e+c*a+o*u-l*h,this.y=i+c*h+l*a-r*u,this.z=s+c*u+r*h-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;var k=Fu,Lh=new k,md=new Wn,Bu=class Bu{constructor(t,e,i,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a)}set(t,e,i,s,r,o,l,c,a){let h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[3],c=i[6],a=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],M=s[1],R=s[4],S=s[7],A=s[2],w=s[5],x=s[8];return r[0]=o*y+l*M+c*A,r[3]=o*p+l*R+c*w,r[6]=o*m+l*S+c*x,r[1]=a*y+h*M+u*A,r[4]=a*p+h*R+u*w,r[7]=a*m+h*S+u*x,r[2]=f*y+d*M+g*A,r[5]=f*p+d*R+g*w,r[8]=f*m+d*S+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8];return e*o*h-e*l*a-i*r*h+i*l*c+s*r*a-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8],u=h*o-l*a,f=l*c-h*r,d=a*r-o*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*a-h*i)*y,t[2]=(l*i-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-l*e)*y,t[6]=d*y,t[7]=(i*c-a*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(i*c,i*a,-i*(c*o+a*l)+o+t,-s*a,s*c,-s*(-a*o+c*l)+l+e,0,0,1),this}scale(t,e){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(t,e)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-t)),this}translate(t,e){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;var Xt=Bu,Dh=new Xt,gd=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){let n={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ko]:{primaries:t,whitePoint:i,transfer:zo,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}var he=wg();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yr,Nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{yr===void 0&&(yr=Ho("canvas")),yr.width=t.width,yr.height=t.height;let s=yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=yr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ho("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ag=0,Gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Rg=0,Uh=new k,Cn=class n extends wi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=Rn,o=Zi,l=gi,c=Fn,a=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ir(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=vu;Cn.DEFAULT_ANISOTROPY=1;var ku=class ku{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,a=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(a+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(a+1)/2,S=(d+1)/2,A=(m+1)/2,w=(h+f)/4,x=(u+y)/4,b=(g+p)/4;return R>S&&R>A?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=w/i,r=x/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-y)/M,this.z=(f-h)/M,this.w=Math.acos((a+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ue(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ku.prototype.isVector4=!0;var Oe=ku,Ul=class extends wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Cn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Wo=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var tc=class tc{constructor(t,e,i,s,r,o,l,c,a,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a,h,u,f,d,g,y,p)}set(t,e,i,s,r,o,l,c,a,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vr.setFromMatrixColumn(t,0).length(),r=1/vr.setFromMatrixColumn(t,1).length(),o=1/vr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=l*h,y=l*u;e[0]=c*h,e[4]=-c*u,e[8]=a,e[1]=d+g*a,e[5]=f-y*a,e[9]=-l*c,e[2]=y-f*a,e[6]=g+d*a,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=a*h,y=a*u;e[0]=f+y*l,e[4]=g*l-d,e[8]=o*a,e[1]=o*u,e[5]=o*h,e[9]=-l,e[2]=d*l-g,e[6]=y+f*l,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=a*h,y=a*u;e[0]=f-y*l,e[4]=-o*u,e[8]=g+d*l,e[1]=d+g*l,e[5]=o*h,e[9]=y-f*l,e[2]=-o*a,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=l*h,y=l*u;e[0]=c*h,e[4]=g*a-d,e[8]=f*a+y,e[1]=c*u,e[5]=y*a+f,e[9]=d*a-g,e[2]=-a,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*a,g=l*c,y=l*a;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-l*h,e[2]=-a*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*a,g=l*c,y=l*a;e[0]=c*h,e[4]=-u,e[8]=a*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=l*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Pg)}lookAt(t,e,i){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ds.crossVectors(i,Gn),ds.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ds.crossVectors(i,Gn)),ds.normalize(),ja.crossVectors(Gn,ds),s[0]=ds.x,s[4]=ja.x,s[8]=Gn.x,s[1]=ds.y,s[5]=ja.y,s[9]=Gn.y,s[2]=ds.z,s[6]=ja.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[4],c=i[8],a=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],M=i[3],R=i[7],S=i[11],A=i[15],w=s[0],x=s[4],b=s[8],U=s[12],P=s[1],O=s[5],z=s[9],q=s[13],I=s[2],E=s[6],C=s[10],D=s[14],X=s[3],H=s[7],Y=s[11],et=s[15];return r[0]=o*w+l*P+c*I+a*X,r[4]=o*x+l*O+c*E+a*H,r[8]=o*b+l*z+c*C+a*Y,r[12]=o*U+l*q+c*D+a*et,r[1]=h*w+u*P+f*I+d*X,r[5]=h*x+u*O+f*E+d*H,r[9]=h*b+u*z+f*C+d*Y,r[13]=h*U+u*q+f*D+d*et,r[2]=g*w+y*P+p*I+m*X,r[6]=g*x+y*O+p*E+m*H,r[10]=g*b+y*z+p*C+m*Y,r[14]=g*U+y*q+p*D+m*et,r[3]=M*w+R*P+S*I+A*X,r[7]=M*x+R*O+S*E+A*H,r[11]=M*b+R*z+S*C+A*Y,r[15]=M*U+R*q+S*D+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],c=t[9],a=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],M=c*d-a*f,R=l*d-a*u,S=l*f-c*u,A=o*d-a*h,w=o*f-c*h,x=o*u-l*h;return e*(y*M-p*R+m*S)-i*(g*M-p*A+m*w)+s*(g*R-y*A+m*x)-r*(g*S-y*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],a=t[6],h=t[10];return e*(o*h-l*a)-i*(r*h-l*c)+s*(r*a-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],M=e*l-i*o,R=e*c-s*o,S=e*a-r*o,A=i*c-s*l,w=i*a-r*l,x=s*a-r*c,b=h*y-u*g,U=h*p-f*g,P=h*m-d*g,O=u*p-f*y,z=u*m-d*y,q=f*m-d*p,I=M*q-R*z+S*O+A*P-w*U+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/I;return t[0]=(l*q-c*z+a*O)*E,t[1]=(s*z-i*q-r*O)*E,t[2]=(y*x-p*w+m*A)*E,t[3]=(f*w-u*x-d*A)*E,t[4]=(c*P-o*q-a*U)*E,t[5]=(e*q-s*P+r*U)*E,t[6]=(p*S-g*x-m*R)*E,t[7]=(h*x-f*S+d*R)*E,t[8]=(o*z-l*P+a*b)*E,t[9]=(i*P-e*z-r*b)*E,t[10]=(g*w-y*S+m*M)*E,t[11]=(u*S-h*w-d*M)*E,t[12]=(l*U-o*O-c*b)*E,t[13]=(e*O-i*U+s*b)*E,t[14]=(y*R-g*A-p*M)*E,t[15]=(h*A-u*R+f*M)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,l=t.y,c=t.z,a=r*o,h=r*l;return this.set(a*o+i,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+i,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,l=e._z,c=e._w,a=r+r,h=o+o,u=l+l,f=r*a,d=r*h,g=r*u,y=o*h,p=o*u,m=l*u,M=c*a,R=c*h,S=c*u,A=i.x,w=i.y,x=i.z;return s[0]=(1-(y+m))*A,s[1]=(d+S)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(f+m))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(g+R)*x,s[9]=(p-M)*x,s[10]=(1-(f+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),l=vr.set(s[4],s[5],s[6]).length(),c=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let a=1/o,h=1/l,u=1/c;return ci.elements[0]*=a,ci.elements[1]*=a,ci.elements[2]*=a,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,o,l=ni,c=!1){let a=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(l===ni)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(l===zr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o,l=ni,c=!1){let a=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(l===ni)g=-2/(o-r),y=-(o+r)/(o-r);else if(l===zr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=f,a[1]=0,a[5]=u,a[9]=0,a[13]=d,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};tc.prototype.isMatrix4=!0;var ve=tc,vr=new k,ci=new ve,Cg=new k(0,0,0),Pg=new k(1,1,1),ds=new k,ja=new k,Gn=new k,_d=new ve,yd=new Wn,di=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _d.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_d,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yd.setFromEuler(this),this.setFromQuaternion(yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ig=0,vd=new k,Mr=new Wn,Fi=new ve,tl=new k,Co=new k,Lg=new k,Dg=new Wn,Md=new k(1,0,0),Sd=new k(0,1,0),bd=new k(0,0,1),Td={type:"added"},Ng={type:"removed"},Sr={type:"childadded",child:null},Oh={type:"childremoved",child:null},gn=class n extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new di,i=new Wn,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Xt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return vd.copy(t).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?tl.copy(t):tl.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Co,tl,this.up):Fi.lookAt(tl,Co,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Mr.setFromRotationMatrix(Fi),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Td),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ng),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Td),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Lg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Dg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),a=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new k(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(a,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;a.inputState.pinching&&f>d+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&f<=d-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},el={h:0,s:0,l:0};function Fh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Eg(t,1),e=ue(e,0,1),i=ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Fh(o,r,t+1/3),this.g=Fh(o,r,t),this.b=Fh(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let i=Ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return he.workingToColorSpace(Sn.copy(this),t),Math.round(ue(Sn.r*255,0,255))*65536+Math.round(ue(Sn.g*255,0,255))*256+Math.round(ue(Sn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),l=Math.min(i,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=a,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=An){he.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+e,ps.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ps),t.getHSL(el);let i=Ih(ps.h,el.h,e),s=Ih(ps.s,el.s,e),r=Ih(ps.l,el.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Zt;Zt.NAMES=Ap;var qo=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yo=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},hi=new k,Bi=new k,Bh=new k,ki=new k,br=new k,Tr=new k,Ed=new k,kh=new k,zh=new k,Hh=new k,Gh=new Oe,Vh=new Oe,Wh=new Oe,Gi=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hi.subVectors(t,e),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hi.subVectors(s,e),Bi.subVectors(i,e),Bh.subVectors(t,e);let o=hi.dot(hi),l=hi.dot(Bi),c=hi.dot(Bh),a=Bi.dot(Bi),h=Bi.dot(Bh),u=o*a-l*l;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(a*c-l*h)*f,g=(o*h-l*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,s,r,o,l,c){return this.getBarycoord(t,e,i,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(l,ki.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Gh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),Gh.fromBufferAttribute(t,e),Vh.fromBufferAttribute(t,i),Wh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Gh,r.x),o.addScaledVector(Vh,r.y),o.addScaledVector(Wh,r.z),o}static isFrontFacing(t,e,i,s){return hi.subVectors(i,e),Bi.subVectors(t,e),hi.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,l;br.subVectors(s,i),Tr.subVectors(r,i),kh.subVectors(t,i);let c=br.dot(kh),a=Tr.dot(kh);if(c<=0&&a<=0)return e.copy(i);zh.subVectors(t,s);let h=br.dot(zh),u=Tr.dot(zh);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*a;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(i).addScaledVector(br,o);Hh.subVectors(t,r);let d=br.dot(Hh),g=Tr.dot(Hh);if(g>=0&&d<=g)return e.copy(r);let y=d*a-c*g;if(y<=0&&a>=0&&g<=0)return l=a/(a-g),e.copy(i).addScaledVector(Tr,l);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Ed.subVectors(r,s),l=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ed,l);let m=1/(p+y+f);return o=y*m,l=f*m,e.copy(i).addScaledVector(br,o).addScaledVector(Tr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ai=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(t.matrixWorld),this.union(nl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),il.subVectors(this.max,Po),Er.subVectors(t.a,Po),wr.subVectors(t.b,Po),Ar.subVectors(t.c,Po),ms.subVectors(wr,Er),gs.subVectors(Ar,wr),Vs.subVectors(Er,Ar);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Vs.z,Vs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Vs.z,0,-Vs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Vs.y,Vs.x,0];return!Xh(e,Er,wr,Ar,il)||(e=[1,0,0,0,1,0,0,0,1],!Xh(e,Er,wr,Ar,il))?!1:(sl.crossVectors(ms,gs),e=[sl.x,sl.y,sl.z],Xh(e,Er,wr,Ar,il))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zi=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,nl=new Ai,Er=new k,wr=new k,Ar=new k,ms=new k,gs=new k,Vs=new k,Po=new k,il=new k,sl=new k,Ws=new k;function Xh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ws.fromArray(n,r);let l=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),c=t.dot(Ws),a=e.dot(Ws),h=i.dot(Ws);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var Ze=new k,rl=new Yt,Og=0,Un=class extends wi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=t!==void 0?Gc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rl.fromBufferAttribute(this,e),rl.applyMatrix3(t),this.setXY(e,rl.x,rl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ep(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):wp(t,this.array)}};var Zo=class extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Jo=class extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Te=class extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}},Fg=new Ai,Io=new k,qh=new k,_s=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Fg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);let e=Io.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(qh)),this.expandByPoint(Io.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bg=0,ei=new ve,Yh=new gn,Rr=new k,Vn=new Ai,Lo=new Ai,ln=new k,bn=class n extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bg(t)?Jo:Zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];Lo.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(Vn.min,Lo.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Lo.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Lo.min),Vn.expandByPoint(Lo.max))}Vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ln.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ln));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)ln.fromBufferAttribute(l,a),c&&(Rr.fromBufferAttribute(t,a),ln.add(Rr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],c=[],a=new Uint8Array(i.count);for(let U=0;U<i.count;U++)l[U]=new k,c[U]=new k;let h=new k,u=new k,f=new k,d=new Yt,g=new Yt,y=new Yt,p=new k,m=new k;function M(U,P,O){a[U]=a[P]=a[O]=1,h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,O),d.fromBufferAttribute(r,U),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,O),u.sub(h),f.sub(h),g.sub(d),y.sub(d);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(p.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(z),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(z),l[U].add(p),l[P].add(p),l[O].add(p),c[U].add(m),c[P].add(m),c[O].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,P=R.length;U<P;++U){let O=R[U],z=O.start,q=O.count;for(let I=z,E=z+q;I<E;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new k,A=new k,w=new k,x=new k;function b(U){w.fromBufferAttribute(s,U),x.copy(w);let P=l[U];S.copy(P),S.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(x,P);let z=A.dot(c[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,z)}for(let U=0,P=i.count;U<P;++U)a[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,l=new k,c=new k,a=new k,h=new k,u=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.fromBufferAttribute(i,p),l.add(h),c.add(h),a.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,a.x,a.y,a.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(l,c){let a=l.array,h=l.itemSize,u=l.normalized,f=new a.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){l.isInterleavedBufferAttribute?d=c[y]*l.data.stride+l.offset:d=c[y]*h;for(let m=0;m<h;m++)f[g++]=a[d++]}return new Un(f,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=t(c,i);e.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let f=a[h],d=t(f,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(t[a]=c[a]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let a=i[c];t.data.attributes[c]=a.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,f=a.length;u<f;u++){let d=a[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(e))}let r=t.morphAttributes;for(let a in r){let h=[],u=r[a];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[a]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pu,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function wd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ir()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var wn=new k,Wr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Gc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ep(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):wp(t,this.data.array)}},Zh=new k,kg=new k,zg=new Xt,fi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Zh.subVectors(i,e).cross(kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zg.getNormalMatrix(t),s=this.coplanarPoint(Zh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hg=0,Xi=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Jr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=fu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Yt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Xr=class extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cr,Do=new k,Pr=new k,Ir=new k,Lr=new Yt,No=new Yt,Rp=new ve,ol=new k,Uo=new k,al=new k,Ad=new Yt,Jh=new Yt,Rd=new Yt,Ko=class extends gn{constructor(t=new Xr){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new bn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $o(e,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new Wr(i,3,0,!1)),Cr.setAttribute("uv",new Wr(i,2,3,!1))}this.geometry=Cr,this.material=t,this.center=new Yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),Rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Ir.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ll(ol.set(-.5,-.5,0),Ir,o,Pr,s,r),ll(Uo.set(.5,-.5,0),Ir,o,Pr,s,r),ll(al.set(.5,.5,0),Ir,o,Pr,s,r),Ad.set(0,0),Jh.set(1,0),Rd.set(1,1);let l=t.ray.intersectTriangle(ol,Uo,al,!1,Do);if(l===null&&(ll(Uo.set(-.5,.5,0),Ir,o,Pr,s,r),Jh.set(0,1),l=t.ray.intersectTriangle(ol,al,Uo,!1,Do),l===null))return;let c=t.ray.origin.distanceTo(Do);c<t.near||c>t.far||e.push({distance:c,point:Do.clone(),uv:Gi.getInterpolation(Do,ol,Uo,al,Ad,Jh,Rd,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ll(n,t,e,i,s,r){Lr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(No.x=r*Lr.x-s*Lr.y,No.y=s*Lr.x+r*Lr.y):No.copy(Lr),n.copy(t),n.x+=No.x,n.y+=No.y,n.applyMatrix4(Rp)}var Hi=new k,$h=new k,cl=new k,hl=new k,Fl=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$h.copy(t).add(e).multiplyScalar(.5),cl.copy(e).sub(t).normalize(),hl.copy(this.origin).sub($h);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cl),l=hl.dot(this.direction),c=-hl.dot(cl),a=hl.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-l,f=o*l-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*l)+f*(o*u+f+2*c)+a}else f=r,u=Math.max(0,-(o*f+l)),d=-u*u+f*(f+2*c)+a;else f=-r,u=Math.max(0,-(o*f+l)),d=-u*u+f*(f+2*c)+a;else f<=-g?(u=Math.max(0,-(-o*r+l)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+a):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+a):(u=Math.max(0,-(o*r+l)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+a);else f=o>0?-r:r,u=Math.max(0,-(o*f+l)),d=-u*u+f*(f+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($h).addScaledVector(cl,f),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return a>=0?(i=(t.min.x-f.x)*a,s=(t.max.x-f.x)*a):(i=(t.max.x-f.x)*a,s=(t.min.x-f.x)*a),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=i.x-o.x,M=i.y-o.y,R=i.z-o.z,S=Math.abs(c),A=Math.abs(a),w=Math.abs(h),x,b,U,P,O,z,q,I,E,C,D,X;if(S>=A&&S>=w?(U=c,z=u,E=g,X=m,c>=0?(x=a,b=h,P=f,O=d,q=y,I=p,C=M,D=R):(x=h,b=a,P=d,O=f,q=p,I=y,C=R,D=M)):A>=w?(U=a,z=f,E=y,X=M,a>=0?(x=h,b=c,P=d,O=u,q=p,I=g,C=R,D=m):(x=c,b=h,P=u,O=d,q=g,I=p,C=m,D=R)):(U=h,z=d,E=p,X=R,h>=0?(x=c,b=a,P=u,O=f,q=g,I=y,C=m,D=M):(x=a,b=c,P=f,O=u,q=y,I=g,C=M,D=m)),U===0)return null;let H=x/U,Y=b/U,et=1/U,St=P-H*z,Lt=O-Y*z,$=q-H*E,mt=I-Y*E,Rt=C-H*X,Ot=D-Y*X,yt=Rt*mt-Ot*$,Kt=St*Ot-Lt*Rt,qe=$*Lt-mt*St;if(s){if(yt<0||Kt<0||qe<0)return null}else if((yt<0||Kt<0||qe<0)&&(yt>0||Kt>0||qe>0))return null;let kt=yt+Kt+qe;if(kt===0)return null;let Se=et*(yt*z+Kt*E+qe*X);return(kt>0?Se<0:Se>0)?null:this.at(Se/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cd=new ve,Xs=new Fl,ul=new _s,Pd=new k,fl=new k,dl=new k,pl=new k,Kh=new k,ml=new k,Id=new k,gl=new k,Et=class extends gn{constructor(t=new bn,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ml.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],u=r[c];h!==0&&(Kh.fromBufferAttribute(u,t),o?ml.addScaledVector(Kh,h):ml.addScaledVector(Kh.sub(e),h))}e.add(ml)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),Xs.copy(t.ray).recast(t.near),!(ul.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(ul,Pd)===null||Xs.origin.distanceToSquared(Pd)>(t.far-t.near)**2))&&(Cd.copy(r).invert(),Xs.copy(t.ray).applyMatrix4(Cd),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),R=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,A=R;S<A;S+=3){let w=l.getX(S),x=l.getX(S+1),b=l.getX(S+2);s=xl(this,m,t,i,a,h,u,w,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=l.getX(p),R=l.getX(p+1),S=l.getX(p+2);s=xl(this,o,t,i,a,h,u,M,R,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),R=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,A=R;S<A;S+=3){let w=S,x=S+1,b=S+2;s=xl(this,m,t,i,a,h,u,w,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=p,R=p+1,S=p+2;s=xl(this,o,t,i,a,h,u,M,R,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Gg(n,t,e,i,s,r,o,l){let c;if(t.side===In?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,t.side===Es,l),c===null)return null;gl.copy(l),gl.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(gl);return a<e.near||a>e.far?null:{distance:a,point:gl.clone(),object:n}}function xl(n,t,e,i,s,r,o,l,c,a){n.getVertexPosition(l,fl),n.getVertexPosition(c,dl),n.getVertexPosition(a,pl);let h=Gg(n,t,e,i,fl,dl,pl,Id);if(h){let u=new k;Gi.getBarycoord(Id,fl,dl,pl,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,l,c,a,u,new Yt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,l,c,a,u,new Yt)),o&&(h.normal=Gi.getInterpolatedAttribute(o,l,c,a,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:l,b:c,c:a,normal:new k,materialIndex:0};Gi.getNormal(fl,dl,pl,f.normal),h.face=f,h.barycoord=u}return h}var Qo=class extends Cn{constructor(t=null,e=1,i=1,s,r,o,l,c,a=cn,h=cn,u,f){super(null,o,l,c,a,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Un{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dr=new ve,Ld=new ve,_l=[],Dd=new Ai,Vg=new ve,Oo=new Et,Fo=new _s,jo=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dr),Dd.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dr),Fo.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Fo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let l=0;l<i.length;l++)i[l]=s[o+l]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),t.ray.intersectsSphere(Fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Ld.multiplyMatrices(i,Dr),Oo.matrixWorld=Ld,Oo.raycast(t,_l);for(let o=0,l=_l.length;o<l;o++){let c=_l[o];c.instanceId=r,c.object=this,e.push(c)}_l.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(s*this.count),s,this.count,ac,ii));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<i.length;a++)o+=i[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new _s,Wg=new Yt(.5,.5),yl=new k,ys=class{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],R=r[13],S=r[14],A=r[15];if(s[0].setComponents(a-o,d-h,m-g,A-M).normalize(),s[1].setComponents(a+o,d+h,m+g,A+M).normalize(),s[2].setComponents(a+l,d+u,m+y,A+R).normalize(),s[3].setComponents(a-l,d-u,m-y,A-R).normalize(),i)s[4].setComponents(c,f,p,S).normalize(),s[5].setComponents(a-c,d-f,m-p,A-S).normalize();else if(s[4].setComponents(a-c,d-f,m-p,A-S).normalize(),e===ni)s[5].setComponents(a+c,d+f,m+p,A+S).normalize();else if(e===zr)s[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){qs.center.set(0,0,0);let e=Wg.distanceTo(t.center);return qs.radius=.7071067811865476+e,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(yl.x=s.normal.x>0?t.max.x:t.min.x,yl.y=s.normal.y>0?t.max.y:t.min.y,yl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nd=new ve,Bl=class n{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Nd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ys),i[s].setFromProjectionMatrix(Nd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ys),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var ta=class extends Cn{constructor(t=[],e=er,i,s,r,o,l,c,a,h){super(t,e,i,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zs=class extends Cn{constructor(t,e,i,s,r,o,l,c,a){super(t,e,i,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Cn{constructor(t,e,i=pi,s,r,o,l=cn,c=cn,a,h=Wi,u=1){if(h!==Wi&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,l,c,h,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends qi{constructor(t,e=pi,i=er,s,r,o=cn,l=cn,c,a=Wi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,l,c,a),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},na=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ne=class n extends bn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(y,p,m,M,R,S,A,w,x,b,U){let P=S/x,O=A/b,z=S/2,q=A/2,I=w/2,E=x+1,C=b+1,D=0,X=0,H=new k;for(let Y=0;Y<C;Y++){let et=Y*O-q;for(let St=0;St<E;St++){let Lt=St*P-z;H[y]=Lt*M,H[p]=et*R,H[m]=I,a.push(H.x,H.y,H.z),H[y]=0,H[p]=0,H[m]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(St/x),u.push(1-Y/b),D+=1}}for(let Y=0;Y<b;Y++)for(let et=0;et<x;et++){let St=f+et+E*Y,Lt=f+et+E*(Y+1),$=f+(et+1)+E*(Y+1),mt=f+(et+1)+E*Y;c.push(St,Lt,mt),c.push(Lt,$,mt),X+=6}l.addGroup(d,X,U),d+=X,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ia=class n extends bn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],l=[],c=[],a=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=i*2+r,y=s+1,p=new k,m=new k;for(let M=0;M<=g;M++){let R=0,S=0,A=0,w=0;if(M<=i){let U=M/i,P=U*Math.PI/2;S=-h-t*Math.cos(P),A=t*Math.sin(P),w=-t*Math.cos(P),R=U*u}else if(M<=i+r){let U=(M-i)/r;S=-h+U*e,A=t,w=0,R=u+U*f}else{let U=(M-i-r)/i,P=U*Math.PI/2;S=h+t*Math.sin(P),A=t*Math.cos(P),w=t*Math.sin(P),R=u+f+U*u}let x=Math.max(0,Math.min(1,R/d)),b=0;M===0?b=.5/s:M===g&&(b=-.5/s);for(let U=0;U<=s;U++){let P=U/s,O=P*Math.PI*2,z=Math.sin(O),q=Math.cos(O);m.x=-A*q,m.y=S,m.z=A*z,l.push(m.x,m.y,m.z),p.set(-A*q,w,A*z),p.normalize(),c.push(p.x,p.y,p.z),a.push(P+b,x)}if(M>0){let U=(M-1)*y;for(let P=0;P<s;P++){let O=U+P,z=U+P+1,q=M*y+P,I=M*y+P+1;o.push(O,z,q),o.push(z,I,q)}}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class n extends bn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],l=[],c=[],a=new k,h=new Yt;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;a.x=t*Math.cos(d),a.y=t*Math.sin(d),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class n extends bn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=i/2,m=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function M(){let S=new k,A=new k,w=0,x=(e-t)/i;for(let b=0;b<=r;b++){let U=[],P=b/r,O=P*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,I=q*c+l,E=Math.sin(I),C=Math.cos(I);A.x=O*E,A.y=-P*i+p,A.z=O*C,u.push(A.x,A.y,A.z),S.set(E,x,C).normalize(),f.push(S.x,S.y,S.z),d.push(q,1-P),U.push(g++)}y.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let P=y[U][b],O=y[U+1][b],z=y[U+1][b+1],q=y[U][b+1];(t>0||U!==0)&&(h.push(P,O,q),w+=3),(e>0||U!==r-1)&&(h.push(O,z,q),w+=3)}a.addGroup(m,w,0),m+=w}function R(S){let A=g,w=new Yt,x=new k,b=0,U=S===!0?t:e,P=S===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,p*P,0),f.push(0,P,0),d.push(.5,.5),g++;let O=g;for(let z=0;z<=s;z++){let I=z/s*c+l,E=Math.cos(I),C=Math.sin(I);x.x=U*C,x.y=p*P,x.z=U*E,u.push(x.x,x.y,x.z),f.push(0,P,0),w.x=E*.5+.5,w.y=C*.5*P+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){let q=A+z,I=O+z;S===!0?h.push(I,I+1,q):h.push(I+1,I,q),b+=3}a.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Js=class n extends Pn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,t,e,i,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Me=class n extends bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(i),c=Math.floor(s),a=l+1,h=c+1,u=t/l,f=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let M=m*f-o;for(let R=0;R<a;R++){let S=R*u-r;g.push(S,-M,0),y.push(0,0,1),p.push(R/l),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<l;M++){let R=M+a*m,S=M+a*(m+1),A=M+1+a*(m+1),w=M+1+a*m;d.push(R,S,w),d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var xn=class n extends bn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new k,f=new k,d=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let M=[],R=m/i,S=o+R*l,A=t*Math.cos(S),w=Math.sqrt(t*t-A*A),x=0;m===0&&o===0?x=.5/e:m===i&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let U=b/e,P=s+U*r;u.x=-w*Math.cos(P),u.y=A,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(U+x,1-R),M.push(a++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let R=h[m][M+1],S=h[m][M],A=h[m+1][M],w=h[m+1][M+1];(m!==0||o>0)&&d.push(R,S,w),(m!==i-1||c<Math.PI)&&d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vs=class n extends bn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},i=Math.floor(i),s=Math.floor(s);let c=[],a=[],h=[],u=[],f=new k,d=new k,g=new k;for(let y=0;y<=i;y++){let p=o+y/i*l;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(M),d.y=(t+e*Math.cos(p))*Math.sin(M),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,M=(s+1)*(y-1)+p-1,R=(s+1)*(y-1)+p,S=(s+1)*y+p;c.push(m,M,S),c.push(M,R,S)}this.setIndex(c),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function sr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ud(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ud(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=sr(n[e]);for(let s in i)t[s]=i[s]}return t}function Ud(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Cp={clone:sr,merge:Tn},qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=Xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kl=class extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ms=class extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$s=class extends Ms{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var zl=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ss=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gl=class extends Ss{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case eu:r=t,l=2*e-i;break;case nu:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case eu:o=t,c=2*i-e;break;case nu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let a=(i-e)*.5,h=this.valueSize;this._weightPrev=a/(e-l),this._weightNext=a/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,M=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,R=(-1-d)*p+(1.5+d)*y+.5*g,S=d*p-d*y;for(let A=0;A!==l;++A)r[A]=m*o[h+A]+M*o[a+A]+R*o[c+A]+S*o[u+A];return r}},Vl=class extends Ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==l;++f)r[f]=o[a+f]*u+o[c+f]*h;return r}},Wl=class extends Ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xl=class extends Ss{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==l;++p)r[p]=o[a+p]*y+o[c+p]*g;return r}let f=l*2,d=t-1;for(let g=0;g!==l;++g){let y=o[a+g],p=o[c+g],m=d*f+g*2,M=u[m],R=u[m+1],S=t*f+g*2,A=h[S],w=h[S+1],x=Jg(i,e,M,A,s);r[g]=Pp(x,y,R,w,p)}return r}};function Pp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Zg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Jg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let l=Pp(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=Zg(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vl(t.settings)&&(i.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Dl:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break;case jh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;vl(this.settings)&&(Od(this.settings.inTangents,t),Od(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vl(this.settings)&&(Fd(this.settings.inTangents,t),Fd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){Gt("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(s!==void 0&&Tg(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){Gt("KeyframeTrack: Value is not a valid number.",this,l,a),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bl,r=t.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=t[l],h=t[l+1];if(a!==h&&(l!==1||a!==t[0]))if(s)c=!0;else{let u=l*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let u=l*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,c=o*i,a=0;a!==i;++a)e[c+a]=e[l+a];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Od(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Fd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Dl;var bs=class extends qn{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Bo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};ql.prototype.ValueTypeName="color";var Yl=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};Yl.prototype.ValueTypeName="number";var Zl=class extends Ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),a=t*l;for(let h=a+l;a!==h;a+=4)Wn.slerpFlat(r,0,o,a-l,o,a,c);return r}},sa=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends qn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Bo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};Jl.prototype.ValueTypeName="vector";var $l=class{constructor(t,e,i){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=a.length;u<f;u+=2){let d=a[u],g=a[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new $l,Kl=class{constructor(t){this.manager=t!==void 0?t:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends gn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ra=class extends Ks{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qh=new ve,Bd=new k,kd=new k,oa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Qh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;t.coordinateSystem===zr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),e.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ml=new k,Sl=new Wn,Ti=new k,aa=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ml,Sl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ml,Sl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new k,zd=new Yt,Hd=new Yt,mn=class extends aa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,zd,Hd),e.subVectors(Hd,zd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ph*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/a,s*=o.width/c,i*=o.height/a}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},iu=class extends oa{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Vo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},la=class extends Ks{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},su=class extends oa{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Yn=class extends Ks{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ql=class extends aa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ca=class extends Ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ur=-90,Or=1,Yr=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Ur,Or,t,e);s.layers=this.layers,this.add(s);let r=new mn(Ur,Or,t,e);r.layers=this.layers,this.add(r);let o=new mn(Ur,Or,t,e);o.layers=this.layers,this.add(o);let l=new mn(Ur,Or,t,e);l.layers=this.layers,this.add(l);let c=new mn(Ur,Or,t,e);c.layers=this.layers,this.add(c);let a=new mn(Ur,Or,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,l,c]=e;for(let a of e)this.remove(a);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jl=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Du="\\[\\]\\.:\\/",$g=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",Kg="[^"+Du.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Nu),jg=/(WCOD+)?/.source.replace("WCOD",Kg),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),nx=new RegExp("^"+Qg+jg+tx+ex+"$"),ix=["material","materials","bones","map"],ru=class{constructor(t,e,i){let s=i||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($g,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ix.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===a){a=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(a!==void 0){if(t[a]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[a]}}let o=t[s];if(o===void 0){let a=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=ru;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u1=new Float32Array(1);var zu=class zu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};zu.prototype.isMatrix2=!0;var ou=zu;function Uu(n,t,e,i){let s=sx(i);switch(e){case Eu:return n*t;case ac:return n*t/s.components*s.byteLength;case lc:return n*t/s.components*s.byteLength;case ws:return n*t*2/s.components*s.byteLength;case cc:return n*t*2/s.components*s.byteLength;case wu:return n*t*3/s.components*s.byteLength;case gi:return n*t*4/s.components*s.byteLength;case hc:return n*t*4/s.components*s.byteLength;case fa:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(t,8)/4;case uc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case mc:case gc:case _c:case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xc:case ga:case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xa:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sx(n){switch(n){case Fn:case Mu:return{byteLength:1,components:1};case Kr:case Su:case mi:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case pi:case sc:case ii:return{byteLength:4,components:1};case bu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fx(n){let t=new WeakMap;function e(l,c){let a=l.array,h=l.usage,u=a.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,a,h),l.onUploadCallback();let d;if(a instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)d=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)d=n.SHORT;else if(a instanceof Uint32Array)d=n.UNSIGNED_INT;else if(a instanceof Int32Array)d=n.INT;else if(a instanceof Int8Array)d=n.BYTE;else if(a instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:f,type:d,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function i(l,c,a){let h=c.array,u=c.updateRanges;if(n.bindBuffer(a,l),u.length===0)n.bufferSubData(a,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(a,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=t.get(l);if(a===void 0)t.set(l,e(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,px=`#ifdef USE_ALPHAHASH
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
#endif`,mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
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
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ax=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c_=`PhysicalMaterial material;
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
#endif`,h_=`uniform sampler2D dfgLUT;
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
}`,u_=`
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,m_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S_=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
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
#endif`,A_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
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
#endif`,C_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K_=`float getShadowMask() {
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
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform float backgroundBlurriness;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,vy=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Iy=`#define MATCAP
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
}`,Ly=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,By=`#define TOON
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
}`,ky=`#define TOON
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
}`,zy=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:dx,alphahash_pars_fragment:px,alphamap_fragment:mx,alphamap_pars_fragment:gx,alphatest_fragment:xx,alphatest_pars_fragment:_x,aomap_fragment:yx,aomap_pars_fragment:vx,batching_pars_vertex:Mx,batching_vertex:Sx,begin_vertex:bx,beginnormal_vertex:Tx,bsdfs:Ex,iridescence_fragment:wx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Px,clipping_planes_vertex:Ix,color_fragment:Lx,color_pars_fragment:Dx,color_pars_vertex:Nx,color_vertex:Ux,common:Ox,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Bx,displacementmap_vertex:kx,emissivemap_fragment:zx,emissivemap_pars_fragment:Hx,colorspace_fragment:Gx,colorspace_pars_fragment:Vx,envmap_fragment:Wx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:qx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:s_,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:$x,fog_fragment:Kx,fog_pars_fragment:Qx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:t_,lights_lambert_fragment:e_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:r_,lights_toon_pars_fragment:o_,lights_phong_fragment:a_,lights_phong_pars_fragment:l_,lights_physical_fragment:c_,lights_physical_pars_fragment:h_,lights_fragment_begin:u_,lights_fragment_maps:f_,lights_fragment_end:d_,lightprobes_pars_fragment:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:g_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:__,map_fragment:y_,map_pars_fragment:v_,map_particle_fragment:M_,map_particle_pars_fragment:S_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:T_,morphinstance_vertex:E_,morphcolor_vertex:w_,morphnormal_vertex:A_,morphtarget_pars_vertex:R_,morphtarget_vertex:C_,normal_fragment_begin:P_,normal_fragment_maps:I_,normal_pars_fragment:L_,normal_pars_vertex:D_,normal_vertex:N_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:F_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:k_,opaque_fragment:z_,packing:H_,premultiplied_alpha_fragment:G_,project_vertex:V_,dithering_fragment:W_,dithering_pars_fragment:X_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:$_,shadowmask_pars_fragment:K_,skinbase_vertex:Q_,skinning_pars_vertex:j_,skinning_vertex:ty,skinnormal_vertex:ey,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:hy,worldpos_vertex:uy,background_vert:fy,background_frag:dy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:xy,depth_vert:_y,depth_frag:yy,distance_vert:vy,distance_frag:My,equirect_vert:Sy,equirect_frag:by,linedashed_vert:Ty,linedashed_frag:Ey,meshbasic_vert:wy,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Iy,meshnormal_vert:Ly,meshnormal_frag:Dy,meshphong_vert:Ny,meshphong_frag:Uy,meshphysical_vert:Oy,meshphysical_frag:Fy,meshtoon_vert:By,meshtoon_frag:ky,points_vert:zy,points_frag:Hy,shadow_vert:Gy,shadow_frag:Vy,sprite_vert:Wy,sprite_frag:Xy},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ii={basic:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Tn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Tn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Tn([_t.points,_t.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Tn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Tn([_t.common,_t.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Tn([_t.sprite,_t.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:Tn([_t.common,_t.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:Tn([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Ii.physical={uniforms:Tn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Vc={r:0,b:0,g:0},qy=new ve,tm=new Xt;tm.set(-1,0,0,0,1,0,0,0,1);function Yy(n,t,e,i,s,r){let o=new Zt(0),l=s===!0?0:1,c,a,h=null,u=0,f=null;function d(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function g(M){let R=!1,S=d(M);S===null?p(o,l):S&&S.isColor&&(p(S,1),R=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,R){let S=d(R);S&&S.isCubeTexture?(a===void 0&&(a=new Et(new ne(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:sr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=S,a.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(tm),a.material.toneMapped=he.getTransfer(S.colorSpace)!==ye,(h!==S||u!==S.version||f!==n.toneMapping)&&(a.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),a.layers.enableAll(),M.unshift(a,a.geometry,a.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Et(new Me(2,2),new Ri({name:"BackgroundMaterial",uniforms:sr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=he.getTransfer(S.colorSpace)!==ye,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,R){M.getRGB(Vc,Lu(n)),e.buffers.color.setClear(Vc.r,Vc.g,Vc.b,R,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),l=R,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:y,dispose:m}}function Zy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function l(O,z,q,I,E){let C=!1,D=u(O,I,q,z);r!==D&&(r=D,a(r.object)),C=d(O,I,q,E),C&&g(O,I,q,E),E!==null&&t.update(E,n.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,S(O,z,q,I),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function c(){return n.createVertexArray()}function a(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function u(O,z,q,I){let E=I.wireframe===!0,C=i[z.id];C===void 0&&(C={},i[z.id]=C);let D=O.isInstancedMesh===!0?O.id:0,X=C[D];X===void 0&&(X={},C[D]=X);let H=X[q.id];H===void 0&&(H={},X[q.id]=H);let Y=H[E];return Y===void 0&&(Y=f(c()),H[E]=Y),Y}function f(O){let z=[],q=[],I=[];for(let E=0;E<e;E++)z[E]=0,q[E]=0,I[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:I,object:O,attributes:{},index:null}}function d(O,z,q,I){let E=r.attributes,C=z.attributes,D=0,X=q.getAttributes();for(let H in X)if(X[H].location>=0){let et=E[H],St=C[H];if(St===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(St=O.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;D++}return r.attributesNum!==D||r.index!==I}function g(O,z,q,I){let E={},C=z.attributes,D=0,X=q.getAttributes();for(let H in X)if(X[H].location>=0){let et=C[H];et===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(et=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(et=O.instanceColor));let St={};St.attribute=et,et&&et.data&&(St.data=et.data),E[H]=St,D++}r.attributes=E,r.attributesNum=D,r.index=I}function y(){let O=r.newAttributes;for(let z=0,q=O.length;z<q;z++)O[z]=0}function p(O){m(O,0)}function m(O,z){let q=r.newAttributes,I=r.enabledAttributes,E=r.attributeDivisors;q[O]=1,I[O]===0&&(n.enableVertexAttribArray(O),I[O]=1),E[O]!==z&&(n.vertexAttribDivisor(O,z),E[O]=z)}function M(){let O=r.newAttributes,z=r.enabledAttributes;for(let q=0,I=z.length;q<I;q++)z[q]!==O[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function R(O,z,q,I,E,C,D){D===!0?n.vertexAttribIPointer(O,z,q,E,C):n.vertexAttribPointer(O,z,q,I,E,C)}function S(O,z,q,I){y();let E=I.attributes,C=q.getAttributes(),D=z.defaultAttributeValues;for(let X in C){let H=C[X];if(H.location>=0){let Y=E[X];if(Y===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor)),Y!==void 0){let et=Y.normalized,St=Y.itemSize,Lt=t.get(Y);if(Lt===void 0)continue;let $=Lt.buffer,mt=Lt.type,Rt=Lt.bytesPerElement,Ot=mt===n.INT||mt===n.UNSIGNED_INT||Y.gpuType===sc;if(Y.isInterleavedBufferAttribute){let yt=Y.data,Kt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,qe=Y.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt,yt.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let kt=0;kt<H.locationSize;kt++)p(H.location+kt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let kt=0;kt<H.locationSize;kt++)R(H.location+kt,St/H.locationSize,mt,et,Kt*Rt,(qe+St/H.locationSize*kt)*Rt,Ot)}else{if(Y.isInstancedBufferAttribute){for(let yt=0;yt<H.locationSize;yt++)m(H.location+yt,Y.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let yt=0;yt<H.locationSize;yt++)p(H.location+yt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let yt=0;yt<H.locationSize;yt++)R(H.location+yt,St/H.locationSize,mt,et,St*Rt,St/H.locationSize*yt*Rt,Ot)}}else if(D!==void 0){let et=D[X];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}M()}function A(){U();for(let O in i){let z=i[O];for(let q in z){let I=z[q];for(let E in I){let C=I[E];for(let D in C)h(C[D].object),delete C[D];delete I[E]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let z=i[O.id];for(let q in z){let I=z[q];for(let E in I){let C=I[E];for(let D in C)h(C[D].object),delete C[D];delete I[E]}}delete i[O.id]}function x(O){for(let z in i){let q=i[z];for(let I in q){let E=q[I];if(E[O.id]===void 0)continue;let C=E[O.id];for(let D in C)h(C[D].object),delete C[D];delete E[O.id]}}}function b(O){for(let z in i){let q=i[z],I=O.isInstancedMesh===!0?O.id:0,E=q[I];if(E!==void 0){for(let C in E){let D=E[C];for(let X in D)h(D[X].object),delete D[X];delete E[C]}delete q[I],Object.keys(q).length===0&&delete i[z]}}}function U(){P(),o=!0,r!==s&&(r=s,a(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:U,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Jy(n,t,e){let i;function s(c){i=c}function r(c,a){n.drawArrays(i,c,a),e.update(a,i,1)}function o(c,a,h){h!==0&&(n.drawArraysInstanced(i,c,a,h),e.update(a,i,h))}function l(c,a,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,a,0,h);let f=0;for(let d=0;d<h;d++)f+=a[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function $y(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==gi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){let b=x===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Fn&&x!==ii&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp",h=c(a);h!==a&&(zt("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:w}}function Ky(n){let t=this,e=null,i=0,s=!1,r=!1,o=new fi,l=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):a();else{let M=r?0:i,R=M*4,S=m.clippingState||null;c.value=S,S=h(g,f,R,d);for(let A=0;A!==R;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function a(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,S=d;R!==y;++R,S+=4)o.copy(u[R]).applyMatrix4(M,l),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var va=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ta(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ne(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:js});r.uniforms.tEquirect.value=e;let o=new Et(s,r),l=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Rn),new Yr(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Lp=256,Qy=3,jy=20,em=256,nm=16,tv=3,ev=new k,nv=new Zt,Xc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yr(1,10,null),this._boxMesh=new Et(new ne(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:l=ev}=r,c=this._renderer;this._setSize(o);let a=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(nv));let p=new Yr(i,s,h);return p.position.copy(l),p.update(c,t),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(a,e)),this._applyPMREM(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Lp,Tp(t))}_fromTexture(t,e){t.mapping===er||t.mapping===$r?this._setSize(t.image.length===0?Lp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Dp(t,!1,!1),i=Math.log2(t)-Qy;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Dp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===er||t.mapping===$r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Np()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=iv(),this._integrationMaterial=sv());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/nm);for(let o=0;o<=i;o++){let l=n.lodToRoughness(o,i);if(o>i-tv)r.roughness.value=l,this._renderCube(t,o,this._integrationMaterial);else{let c=l>0?Math.log2(e)+.5*Math.log2(6/(em*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=rv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Dp(n,t,e){return new va(n,{minFilter:Zi,generateMipmaps:t,type:mi,colorSpace:ko,depthBuffer:e})}function Ma(n,t,e){return new Ri({name:n,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:In,blending:js,depthTest:!1,depthWrite:!1})}function iv(){return Ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${em}u

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
	`)}function sv(){return Ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nm}},`

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
	`)}function rv(){return Ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jy}
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
	`)}function Np(){return Ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Up(){return Ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ov(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ec||d===nc)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new va(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",a),l(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===ec||d===nc,y=d===er||d===$r;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Xc(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new Xc(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function l(f,d){return d===ec?f.mapping=er:d===nc&&(f.mapping=$r),f}function c(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function a(f){let d=f.target;d.removeEventListener("dispose",a);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function av(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ys("WebGLRenderer: "+i+" extension not supported."),s}}}function lv(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function l(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",l),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",l),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function u(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=y!==null?y.array.length:p.array.length/3-1,R=p.count>=65535?Jo:Zo,S=new R(Math.ceil(M/3)*6,1),A=S.array;if(y!==null){let x=y.array;m=y.version;for(let b=0,U=0;b<M;b+=3){let P=x[b+0],O=x[b+1],z=x[b+2];A[U++]=P,A[U++]=O,A[U++]=O,A[U++]=z,A[U++]=z,A[U++]=P}}else{m=p.version;for(let x=0,b=0;x<M;x+=3){let U=x+0,P=x+1,O=x+2;A[b++]=U,A[b++]=P,A[b++]=P,A[b++]=O,A[b++]=O,A[b++]=U}}S.version=m;let w=r.get(g);w&&t.remove(w),r.set(g,S)}function f(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:a,update:h,getWireframeAttribute:f,dispose:d}}function cv(n,t,e){let i;function s(u){i=u}let r,o;function l(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function a(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function hv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function uv(n,t,e){let i=new WeakMap,s=new Oe;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(l);if(f===void 0||f.count!==u){let U=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let S=l.attributes.position.count*R,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*u),x=new Wo(w,S,A,u);x.type=ii,x.needsUpdate=!0;let b=R*4;for(let P=0;P<u;P++){let O=p[P],z=m[P],q=M[P],I=S*A*4*P;for(let E=0;E<O.count;E++){let C=E*b;d===!0&&(s.fromBufferAttribute(O,E),w[I+C+0]=s.x,w[I+C+1]=s.y,w[I+C+2]=s.z,w[I+C+3]=0),g===!0&&(s.fromBufferAttribute(z,E),w[I+C+4]=s.x,w[I+C+5]=s.y,w[I+C+6]=s.z,w[I+C+7]=0),y===!0&&(s.fromBufferAttribute(q,E),w[I+C+8]=s.x,w[I+C+9]=s.y,w[I+C+10]=s.z,w[I+C+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new Yt(S,A)},i.set(l,f),l.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<a.length;y++)d+=a[y];let g=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function fv(n,t,e,i,s){let r=new WeakMap;function o(a){let h=s.render.frame,u=a.geometry,f=t.get(a,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let d=a.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:l}}var dv={[pu]:"LINEAR_TONE_MAPPING",[mu]:"REINHARD_TONE_MAPPING",[gu]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[_u]:"AGX_TONE_MAPPING",[yu]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function pv(n,t,e,i,s,r){let o=new Xn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=null,h=new bn;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Et(h,u),d=new Ql(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,M=null,R=[],S=!1;this.setSize=function(A,w){o.setSize(A,w),l!==null&&l.setSize(A,w),c!==null&&c.setSize(A,w);for(let x=0;x<R.length;x++){let b=R[x];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){R=A,S=R.length>0&&R[0].isRenderPass===!0;let w=o.width,x=o.height;R.length>0&&l===null&&(l=new Xn(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&R.some(U=>U.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&a===null&&(a=new qi(w,x),r===!0&&(a.format=Ji,a.type=nr)),o.dispose(),o.depthTexture=b?a:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let U=0;U<R.length;U++){let P=R[U];P.setSize&&P.setSize(w,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(a)}},this.begin=function(A,w){if(p||A.toneMapping===Ci&&R.length===0)return!1;if(M=w,w!==null){let x=w.width,b=w.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&A.setRenderTarget(o),m=A.toneMapping,A.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=m,p=!0;let x=o,b=l;for(let U=0;U<R.length;U++){let P=R[U];P.enabled!==!1&&(P.render(A,b,x,w),P.needsSwap!==!1&&(x=b,b=b===l?c:l))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,u.defines={},he.getTransfer(g)===ye&&(u.defines.SRGB_TRANSFER="");let U=dv[y];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var im=new Cn,sm=new qi(1,1),rm=new ea(1),om=new Wo,am=new Ol,lm=new ta,Op=[],Fp=[],Bp=new Float32Array(16),kp=new Float32Array(9),zp=new Float32Array(4);function jr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,n[o].toArray(r,l)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yc(n,t){let e=Fp[t];e===void 0&&(e=new Int32Array(t),Fp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function yv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;zp.set(i),n.uniformMatrix2fv(this.addr,!1,zp),Qe(e,i)}}function vv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;kp.set(i),n.uniformMatrix3fv(this.addr,!1,kp),Qe(e,i)}}function Mv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;Bp.set(i),n.uniformMatrix4fv(this.addr,!1,Bp),Qe(e,i)}}function Sv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function Tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function Ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function wv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function Rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function Cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function Zc(n){return n.version===0&&(n.compareFunction=Cu,n.needsUpdate=!0),n}function Pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Zc(sm):r=im,e.setTexture2D(t||r,s)}function Iv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||am,s)}function Lv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Zc(rm):r=lm,e.setTextureCube(t||r,s)}function Dv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||om,s)}function Nv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return _v;case 35674:return yv;case 35675:return vv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return bv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Uv(n,t){n.uniform1fv(this.addr,t)}function Ov(n,t){let e=jr(t,this.size,2);n.uniform2fv(this.addr,e)}function Fv(n,t){let e=jr(t,this.size,3);n.uniform3fv(this.addr,e)}function Bv(n,t){let e=jr(t,this.size,4);n.uniform4fv(this.addr,e)}function kv(n,t){let e=jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zv(n,t){let e=jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Hv(n,t){let e=jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gv(n,t){n.uniform1iv(this.addr,t)}function Vv(n,t){n.uniform2iv(this.addr,t)}function Wv(n,t){n.uniform3iv(this.addr,t)}function Xv(n,t){n.uniform4iv(this.addr,t)}function qv(n,t){n.uniform1uiv(this.addr,t)}function Yv(n,t){n.uniform2uiv(this.addr,t)}function Zv(n,t){n.uniform3uiv(this.addr,t)}function Jv(n,t){n.uniform4uiv(this.addr,t)}function $v(n,t,e){let i=this.cache,s=t.length,r=Yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zc(sm):o=im;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function Kv(n,t,e){let i=this.cache,s=t.length,r=Yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||am,r[o])}function Qv(n,t,e){let i=this.cache,s=t.length,r=Yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Zc(rm):o=lm;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||o,r[l])}function jv(n,t,e){let i=this.cache,s=t.length,r=Yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||om,r[o])}function tM(n){switch(n){case 5126:return Uv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return kv;case 35675:return zv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return jv}}var Vu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}},Wu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tM(e.type)}},Xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Hp(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){let i=n.name,s=i.length;for(Hu.lastIndex=0;;){let r=Hu.exec(i),o=Hu.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){Hp(e,a===void 0?new Vu(l,n,t):new Wu(l,n,t));break}else{let u=e.map[l];u===void 0&&(u=new Xu(l),Hp(e,u)),e=u}}}var Qr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);eM(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Gp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var nM=37297,iM=0;function sM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var Vp=new Xt;function rM(n){he._getMatrix(Vp,he.workingColorSpace,n);let t=`mat3( ${Vp.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case zo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Wp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sM(n.getShaderSource(t),l)}else return r}function oM(n,t){let e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var aM={[pu]:"Linear",[mu]:"Reinhard",[gu]:"Cineon",[ha]:"ACESFilmic",[_u]:"AgX",[yu]:"Neutral",[xu]:"Custom"};function lM(n,t){let e=aM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wc=new k;function cM(){he.getLuminanceCoefficients(Wc);let n=Wc.x.toFixed(4),t=Wc.y.toFixed(4),e=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function uM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:l}}return e}function ya(n){return n!==""}function Xp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function qp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(n){return n.replace(dM,pM)}function pM(n,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qu(e)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(n){return n.replace(mM,gM)}function gM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xM={[Qs]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function _M(n){return xM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yM={[$r]:"ENVMAP_MODE_REFRACTION"};function vM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MM={[du]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function SM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":MM[n.combine]||"ENVMAP_BLENDING_NONE"}function bM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,c=_M(e),a=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vM(e),u=SM(e),f=hM(e),d=uM(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ya).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(y=[Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ci?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ya).join(`
`)),o=qu(o),o=Xp(o,e),o=qp(o,e),l=qu(l),l=Xp(l,e),l=qp(l,e),o=Yp(o),l=Yp(l),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+y+o,R=m+p+l,S=Gp(s,s.VERTEX_SHADER,M),A=Gp(s,s.FRAGMENT_SHADER,R);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(S)||"",q=s.getShaderInfoLog(A)||"",I=O.trim(),E=z.trim(),C=q.trim(),D=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,A);else{let H=Wp(s,S,"vertex"),Y=Wp(s,A,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+H+`
`+Y)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(E===""||C==="")&&(X=!1);X&&(P.diagnostics={runnable:D,programLog:I,vertexShader:{log:E,prefix:y},fragmentShader:{log:C,prefix:p}})}s.deleteShader(S),s.deleteShader(A),x=new Qr(s,g),b=fM(s,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,nM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var TM=0,Yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zu(t),e.set(t,i)),i}},Zu=class{constructor(t){this.id=TM++,this.code=t,this.usedTimes=0}};function EM(n){return n===ws||n===ga||n===xa}function wM(n,t,e,i,s,r){let o=new Xo,l=new Yu,c=new Set,a=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,b,U,P,O,z){let q=P.fog,I=O.geometry,E=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||E,C),X=f[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=Y!==void 0?Y.length:0,St=0;I.morphAttributes.position!==void 0&&(St=1),I.morphAttributes.normal!==void 0&&(St=2),I.morphAttributes.color!==void 0&&(St=3);let Lt,$,mt,Rt;if(X){let xt=Ii[X];Lt=xt.vertexShader,$=xt.fragmentShader}else{Lt=x.vertexShader,$=x.fragmentShader;let xt=l.getVertexShaderStage(x),be=l.getFragmentShaderStage(x);l.update(x,xt,be),mt=xt.id,Rt=be.id}let Ot=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Kt=O.isInstancedMesh===!0,qe=O.isBatchedMesh===!0,kt=!!x.map,Se=!!x.matcap,Ae=!!D,ae=Ae&&D.isPMREMTexture===!0,dn=!!x.aoMap,Je=!!x.lightMap,Nn=!!x.bumpMap&&x.wireframe===!1,Be=!!x.normalMap,bi=!!x.displacementMap,rn=!!x.emissiveMap,Kn=!!x.metalnessMap,Qn=!!x.roughnessMap,jn=x.anisotropy>0,B=x.clearcoat>0,ti=x.diffuseRoughness>0,Ne=x.dispersion>0,Ue=x.retroreflectivity>0,gt=x.iridescence>0,$e=x.sheen>0,Ft=x.transmission>0,qt=jn&&!!x.anisotropyMap,T=B&&!!x.clearcoatMap,_=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,st=ti&&!!x.diffuseRoughnessMap,nt=gt&&!!x.iridescenceMap,lt=gt&&!!x.iridescenceThicknessMap,dt=$e&&!!x.sheenColorMap,Q=$e&&!!x.sheenRoughnessMap,j=!!x.specularMap,ht=!!x.specularColorMap,L=!!x.specularIntensityMap,tt=Ft&&!!x.transmissionMap,K=Ft&&!!x.thicknessMap,ut=!!x.gradientMap,at=!!x.alphaMap,ct=x.alphaTest>0,Dt=!!x.alphaHash,ee=!!x.extensions,rt=Ci;x.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(rt=n.toneMapping);let Nt=ae?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,jt={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:$,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:Rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:qe,batchingColor:qe&&O._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&O.instanceColor!==null,instancingMorph:Kt&&O.morphTexture!==null,outputColorSpace:Ot===null?n.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Se,envMap:Ae,envMapMode:Ae&&D.mapping,envMapPMREM:ae,envMapMaxLod:ae?Nt.length-1:null,envMapSize:ae?Nt[0].width:null,aoMap:dn,lightMap:Je,bumpMap:Nn,normalMap:Be,displacementMap:bi,emissiveMap:rn,normalMapObjectSpace:Be&&x.normalMapType===dp,normalMapTangentSpace:Be&&x.normalMapType===Hc,packedNormalMap:Be&&x.normalMapType===Hc&&EM(x.normalMap.format),metalnessMap:Kn,roughnessMap:Qn,anisotropy:jn,anisotropyMap:qt,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:V,diffuseRoughness:ti,diffuseRoughnessMap:st,dispersion:Ne,retroreflection:Ue,iridescence:gt,iridescenceMap:nt,iridescenceThicknessMap:lt,sheen:$e,sheenColorMap:dt,sheenRoughnessMap:Q,specularMap:j,specularColorMap:ht,specularIntensityMap:L,transmission:Ft,transmissionMap:tt,thicknessMap:K,gradientMap:ut,opaque:x.transparent===!1&&x.blending===Jr&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:ct,alphaHash:Dt,combine:x.combine,mapUv:kt&&d(x.map.channel),aoMapUv:dn&&d(x.aoMap.channel),lightMapUv:Je&&d(x.lightMap.channel),bumpMapUv:Nn&&d(x.bumpMap.channel),normalMapUv:Be&&d(x.normalMap.channel),displacementMapUv:bi&&d(x.displacementMap.channel),emissiveMapUv:rn&&d(x.emissiveMap.channel),metalnessMapUv:Kn&&d(x.metalnessMap.channel),roughnessMapUv:Qn&&d(x.roughnessMap.channel),anisotropyMapUv:qt&&d(x.anisotropyMap.channel),clearcoatMapUv:T&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(x.sheenRoughnessMap.channel),specularMapUv:j&&d(x.specularMap.channel),specularColorMapUv:ht&&d(x.specularColorMap.channel),specularIntensityMapUv:L&&d(x.specularIntensityMap.channel),transmissionMapUv:tt&&d(x.transmissionMap.channel),thicknessMapUv:K&&d(x.thicknessMap.channel),alphaMapUv:at&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Be||jn),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(kt||at),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:rn&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ve,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||qe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=f[x.type],U;if(b){let P=Ii[b];U=Cp.clone(P.uniforms)}else U=x.uniforms;return U}function R(x,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new bM(n,b,x,s),a.push(U),h.set(b,U)),U}function S(x){if(--x.usedTimes===0){let b=a.indexOf(x);a[b]=a[a.length-1],a.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:a,dispose:w}}function AM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Jp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $p(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function l(f,d,g,y,p,m){let M=n[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},n[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=o(f),M.groupOrder=y,M.renderOrder=f.renderOrder,M.z=p,M.group=m),t++,M}function c(f,d,g,y,p,m,M){M.reversedDepth===!0&&(p=-p);let R=l(f,d,g,y,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):e.push(R)}function a(f,d,g,y,p,m){let M=l(f,d,g,y,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||RM),i.length>1&&i.sort(d||Jp),s.length>1&&s.sort(d||Jp)}function u(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:u,sort:h}}function CM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new $p,n.set(i,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Zt};break;case"SpotLight":e={position:new k,direction:new k,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function IM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var LM=0;function DM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){let t=new PM,e=IM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new k);let s=new k,r=new ve,o=new ve;function l(a){let h=0,u=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,M=0,R=0,S=0,A=0,w=0,x=0,b=0,U=0,P=0;a.sort(DM);for(let z=0,q=a.length;z<q;z++){let I=a[z],E=I.color,C=I.intensity,D=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ws?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=E.r*C,u+=E.g*C,f+=E.b*C;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],C);P++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,et=e.get(I);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=X;let St=Y.getViewportCount();for(let Lt=0;Lt<St;Lt++)i.sunShadowMatrix[y+Lt]=Y.getMatrix(Lt),i.sunShadowCascade[y+Lt]=Y._cascadeData[Lt];y+=St,g++}i.sun[d]=H,d++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,et=e.get(I);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,i.directionalShadow[p]=et,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=I.shadow.matrix,A++}i.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(E).multiplyScalar(C),H.distance=D,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[M]=H;let Y=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,Y.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[M]=Y.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,i.spotShadow[M]=et,i.spotShadowMap[M]=X,x++}M++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(E).multiplyScalar(C),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[R]=H,R++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Y=I.shadow,et=e.get(I);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,et.shadowCameraNear=Y.camera.near,et.shadowCameraFar=Y.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,w++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(C),H.groundColor.copy(I.groundColor).multiplyScalar(C),i.hemi[S]=H,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let O=i.hash;(O.sunLength!==d||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==M||O.rectAreaLength!==R||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==A||O.numPointShadows!==w||O.numSpotShadows!==x||O.numSpotMaps!==b||O.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=p,i.spot.length=M,i.rectArea.length=R,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=P,O.sunLength=d,O.directionalLength=p,O.pointLength=m,O.spotLength=M,O.rectAreaLength=R,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=A,O.numPointShadows=w,O.numSpotShadows=x,O.numSpotMaps=b,O.numLightProbes=P,i.version=LM++)}function c(a,h){let u=0,f=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let M=0,R=a.length;M<R;M++){let S=a[M];if(S.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(S.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Kp(n){let t=new NM(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function l(u){i.push(u)}function c(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function a(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:a,pushLight:o,pushShadow:l}}function UM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new Kp(n),t.set(s,[l])):r>=o.length?(l=new Kp(n),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`,BM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],kM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Qp=new ve,_a=new k,Gu=new k;function zM(n,t,e){let i=new ys,s=new Yt,r=new Yt,o=new Oe,l=new zl,c=new Hl,a={},h=e.maxTextureSize,u={[Es]:In,[In]:Es,[Ve]:Ve},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new bn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let m=this.type;this.render=function(w,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Wd&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let U=n.getRenderTarget(),P=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),z=n.state;z.setBlending(js),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==this.type;q&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(E=>E.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,E=w.length;I<E;I++){let C=w[I],D=C.shadow;if(D===void 0){zt("WebGLShadowMap:",C,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let X=D.getFrameExtents();s.multiply(X),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,D.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=H,D.map===null||q===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Zr){if(C.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Xn(s.x,s.y,{format:ws,type:mi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),D.map.texture.name=C.name+".shadowMap",D.map.depthTexture=new qi(s.x,s.y,ii),D.map.depthTexture.name=C.name+".shadowMapDepth",D.map.depthTexture.format=Wi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=cn,D.map.depthTexture.magFilter=cn}else C.isPointLight?(D.map=new va(s.x),D.map.depthTexture=new ea(s.x,pi)):(D.map=new Xn(s.x,s.y),D.map.depthTexture=new qi(s.x,s.y,pi)),D.map.depthTexture.name=C.name+".shadowMap",D.map.depthTexture.format=Wi,this.type===Qs?(D.map.depthTexture.compareFunction=H?Ru:Au,D.map.depthTexture.minFilter=Rn,D.map.depthTexture.magFilter=Rn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=cn,D.map.depthTexture.magFilter=cn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let Y=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();C.isPointLight!==!0&&D.updateMatrices(C,b);let et=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:b.layers;for(let St=0;St<Y;St++){let Lt=D.getCamera(St);if(C.isPointLight){let $=D.camera,mt=D.matrix,Rt=C.distance||$.far;Rt!==$.far&&($.far=Rt,$.updateProjectionMatrix()),_a.setFromMatrixPosition(C.matrixWorld),$.position.copy(_a),Gu.copy($.position),Gu.add(BM[St]),$.up.copy(kM[St]),$.lookAt(Gu),$.updateMatrixWorld(),mt.makeTranslation(-_a.x,-_a.y,-_a.z),Qp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Qp,$.coordinateSystem,$.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,St),n.clear();else{St===0&&(n.setRenderTarget(D.map),n.clear());let $=D.getViewport(St);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),z.viewport(o)}i=D.getFrustum(St),S(x,b,Lt,C,et,this.type)}D.isPointLightShadow!==!0&&this.type===Zr&&M(D,b),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(U,P,O)};function M(w,x){let b=t.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Xn(s.x,s.y,{format:ws,type:mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,b,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,b,d,y,null)}function R(w,x,b,U){let P=null,O=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)P=O;else if(P=b.isPointLight===!0?c:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=P.uuid,q=x.uuid,I=a[z];I===void 0&&(I={},a[z]=I);let E=I[q];E===void 0&&(E=P.clone(),I[q]=E,x.addEventListener("dispose",A)),P=E}if(P.visible=x.visible,P.wireframe=x.wireframe,U===Zr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=n.properties.get(P);z.light=b}return P}function S(w,x,b,U,P,O){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Zr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),E=w.material;if(Array.isArray(E)){let C=I.groups;for(let D=0,X=C.length;D<X;D++){let H=C[D],Y=E[H.materialIndex];if(Y&&Y.visible){let et=R(w,Y,U,O);w.onBeforeShadow(n,w,x,b,I,et,H),n.renderBufferDirect(b,null,I,et,w,H),w.onAfterShadow(n,w,x,b,I,et,H)}}}else if(E.visible){let C=R(w,E,U,O);w.onBeforeShadow(n,w,x,b,I,C,null),n.renderBufferDirect(b,null,I,C,w,null),w.onAfterShadow(n,w,x,b,I,C,null)}}let q=w.children;for(let I=0,E=q.length;I<E;I++)S(q[I],x,b,U,P,O)}function A(w){w.target.removeEventListener("dispose",A);for(let b in a){let U=a[b],P=w.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function HM(n,t){function e(){let L=!1,tt=new Oe,K=null,ut=new Oe(0,0,0,0);return{setMask:function(at){K!==at&&!L&&(n.colorMask(at,at,at,at),K=at)},setLocked:function(at){L=at},setClear:function(at,ct,Dt,ee,rt){rt===!0&&(at*=ee,ct*=ee,Dt*=ee),tt.set(at,ct,Dt,ee),ut.equals(tt)===!1&&(n.clearColor(at,ct,Dt,ee),ut.copy(tt))},reset:function(){L=!1,K=null,ut.set(-1,0,0,0)}}}function i(){let L=!1,tt=!1,K=null,ut=null,at=null;return{setReversed:function(ct){if(tt!==ct){let Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),tt=ct;let ee=at;at=null,this.setClear(ee)}},getReversed:function(){return tt},setTest:function(ct){ct?yt(n.DEPTH_TEST):Kt(n.DEPTH_TEST)},setMask:function(ct){K!==ct&&!L&&(n.depthMask(ct),K=ct)},setFunc:function(ct){if(tt&&(ct=bp[ct]),ut!==ct){switch(ct){case El:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Al:n.depthFunc(n.LESS);break;case Br:n.depthFunc(n.LEQUAL);break;case Rl:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=ct}},setLocked:function(ct){L=ct},setClear:function(ct){at!==ct&&(at=ct,tt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){L=!1,K=null,ut=null,at=null,tt=!1}}}function s(){let L=!1,tt=null,K=null,ut=null,at=null,ct=null,Dt=null,ee=null,rt=null;return{setTest:function(Nt){L||(Nt?yt(n.STENCIL_TEST):Kt(n.STENCIL_TEST))},setMask:function(Nt){tt!==Nt&&!L&&(n.stencilMask(Nt),tt=Nt)},setFunc:function(Nt,jt,xt){(K!==Nt||ut!==jt||at!==xt)&&(n.stencilFunc(Nt,jt,xt),K=Nt,ut=jt,at=xt)},setOp:function(Nt,jt,xt){(ct!==Nt||Dt!==jt||ee!==xt)&&(n.stencilOp(Nt,jt,xt),ct=Nt,Dt=jt,ee=xt)},setLocked:function(Nt){L=Nt},setClear:function(Nt){rt!==Nt&&(n.clearStencil(Nt),rt=Nt)},reset:function(){L=!1,tt=null,K=null,ut=null,at=null,ct=null,Dt=null,ee=null,rt=null}}}let r=new e,o=new i,l=new s,c={},a=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,R=null,S=null,A=null,w=null,x=null,b=new Zt(0,0,0),U=0,P=!1,O=null,z=null,q=null,I=null,E=null,C=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,X=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=X>=2);let Y=null,et={},St=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),$=new Oe().fromArray(St),mt=new Oe().fromArray(Lt);function Rt(L,tt,K,ut){let at=new Uint8Array(4),ct=n.createTexture();n.bindTexture(L,ct),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<K;Dt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(tt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ct}let Ot={};Ot[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ot[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ot[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),yt(n.DEPTH_TEST),o.setFunc(Br),Nn(!1),Be(au),yt(n.CULL_FACE),dn(js);function yt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Kt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function qe(L,tt){return f[L]!==tt?(n.bindFramebuffer(L,tt),f[L]=tt,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=tt),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function kt(L,tt){let K=g,ut=!1;if(L){K=d.get(tt),K===void 0&&(K=[],d.set(tt,K));let at=L.textures;if(K.length!==at.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=at.length;ct<Dt;ct++)K[ct]=n.COLOR_ATTACHMENT0+ct;K.length=at.length,ut=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ut=!0);ut&&n.drawBuffers(K)}function Se(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Ae={[tr]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};Ae[Zd]=n.MIN,Ae[Jd]=n.MAX;let ae={[$d]:n.ZERO,[Kd]:n.ONE,[Qd]:n.SRC_COLOR,[uu]:n.SRC_ALPHA,[sp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[tp]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[fu]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[rp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[lp]:n.ONE_MINUS_CONSTANT_ALPHA};function dn(L,tt,K,ut,at,ct,Dt,ee,rt,Nt){if(L===js){p===!0&&(Kt(n.BLEND),p=!1);return}if(p===!1&&(yt(n.BLEND),p=!0),L!==Xd){if(L!==m||Nt!==P){if((M!==tr||A!==tr)&&(n.blendEquation(n.FUNC_ADD),M=tr,A=tr),Nt)switch(L){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",L);break}R=null,S=null,w=null,x=null,b.set(0,0,0),U=0,m=L,P=Nt}return}at=at||tt,ct=ct||K,Dt=Dt||ut,(tt!==M||at!==A)&&(n.blendEquationSeparate(Ae[tt],Ae[at]),M=tt,A=at),(K!==R||ut!==S||ct!==w||Dt!==x)&&(n.blendFuncSeparate(ae[K],ae[ut],ae[ct],ae[Dt]),R=K,S=ut,w=ct,x=Dt),(ee.equals(b)===!1||rt!==U)&&(n.blendColor(ee.r,ee.g,ee.b,rt),b.copy(ee),U=rt),m=L,P=!1}function Je(L,tt){L.side===Ve?Kt(n.CULL_FACE):yt(n.CULL_FACE);let K=L.side===In;tt&&(K=!K),Nn(K),L.blending===Jr&&L.transparent===!1?dn(js):dn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ut=L.stencilWrite;l.setTest(ut),ut&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nn(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function Be(L){L!==Gd?(yt(n.CULL_FACE),L!==z&&(L===au?n.cullFace(n.BACK):L===Vd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Kt(n.CULL_FACE),z=L}function bi(L){L!==q&&(D&&n.lineWidth(L),q=L)}function rn(L,tt,K){L?(yt(n.POLYGON_OFFSET_FILL),(I!==tt||E!==K)&&(I=tt,E=K,o.getReversed()&&(tt=-tt,K=-K),n.polygonOffset(tt,K))):Kt(n.POLYGON_OFFSET_FILL)}function Kn(L){L?yt(n.SCISSOR_TEST):Kt(n.SCISSOR_TEST)}function Qn(L){L===void 0&&(L=n.TEXTURE0+C-1),Y!==L&&(n.activeTexture(L),Y=L)}function jn(L,tt,K){K===void 0&&(Y===null?K=n.TEXTURE0+C-1:K=Y);let ut=et[K];ut===void 0&&(ut={type:void 0,texture:void 0},et[K]=ut),(ut.type!==L||ut.texture!==tt)&&(Y!==K&&(n.activeTexture(K),Y=K),n.bindTexture(L,tt||Ot[L]),ut.type=L,ut.texture=tt)}function B(){let L=et[Y];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ti(){try{n.compressedTexImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ne(){try{n.compressedTexImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ue(){try{n.texSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function gt(){try{n.texSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function $e(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function qt(){try{n.texStorage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function T(){try{n.texStorage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function _(){try{n.texImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function V(){try{n.texImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function st(L){return u[L]!==void 0?u[L]:n.getParameter(L)}function nt(L,tt){u[L]!==tt&&(n.pixelStorei(L,tt),u[L]=tt)}function lt(L){$.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function dt(L){mt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),mt.copy(L))}function Q(L,tt){let K=a.get(tt);K===void 0&&(K=new WeakMap,a.set(tt,K));let ut=K.get(L);ut===void 0&&(ut=n.getUniformBlockIndex(tt,L.name),n.uniformBlockBinding(tt,ut,ut),K.set(L,ut))}function j(L,tt,K){let at=a.get(tt).get(L);c[at]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,K),c[at]=K)}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,et={},f={},c={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,R=null,S=null,A=null,w=null,x=null,b=new Zt(0,0,0),U=0,P=!1,O=null,z=null,q=null,I=null,E=null,$.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:yt,disable:Kt,bindFramebuffer:qe,drawBuffers:kt,useProgram:Se,setBlending:dn,setMaterial:Je,setFlipSided:Nn,setCullFace:Be,setLineWidth:bi,setPolygonOffset:rn,setScissorTest:Kn,activeTexture:Qn,bindTexture:jn,unbindTexture:B,compressedTexImage2D:ti,compressedTexImage3D:Ne,texImage2D:_,texImage3D:V,pixelStorei:nt,getParameter:st,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:qt,texStorage3D:T,texSubImage2D:Ue,texSubImage3D:gt,compressedTexSubImage2D:$e,compressedTexSubImage3D:Ft,scissor:lt,viewport:dt,reset:ht}}function GM(n,t,e,i,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Yt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,_){return p?new OffscreenCanvas(T,_):Ho("canvas")}function M(T,_,V){let st=1,nt=qt(T);if((nt.width>V||nt.height>V)&&(st=V/Math.max(nt.width,nt.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let lt=Math.floor(st*nt.width),dt=Math.floor(st*nt.height);f===void 0&&(f=m(lt,dt));let Q=_?m(lt,dt):f;return Q.width=lt,Q.height=dt,Q.getContext("2d").drawImage(T,0,0,lt,dt),zt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+lt+"x"+dt+")."),Q}else return"data"in T&&zt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function R(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,_,V,st,nt,lt=!1){if(T!==null){if(n[T]!==void 0)return n[T];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8),V===n.UNSIGNED_SHORT&&dt&&(Q=dt.R16_EXT),V===n.SHORT&&dt&&(Q=dt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),_===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8),V===n.UNSIGNED_SHORT&&dt&&(Q=dt.RG16_EXT),V===n.SHORT&&dt&&(Q=dt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),_===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),_===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),_===n.RGB&&(V===n.UNSIGNED_SHORT&&dt&&(Q=dt.RGB16_EXT),V===n.SHORT&&dt&&(Q=dt.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),_===n.RGBA){let j=lt?zo:he.getTransfer(nt);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=j===ye?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&dt&&(Q=dt.RGBA16_EXT),V===n.SHORT&&dt&&(Q=dt.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(T,_){let V;return T?_===null||_===pi||_===nr?V=n.DEPTH24_STENCIL8:_===ii?V=n.DEPTH32F_STENCIL8:_===Kr&&(V=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===nr?V=n.DEPTH_COMPONENT24:_===ii?V=n.DEPTH_COMPONENT32F:_===Kr&&(V=n.DEPTH_COMPONENT16),V}function b(T,_){return R(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==Rn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function U(T){let _=new WeakRef(T);i.get(T).__ref=_,g.add(_),y.register(T,_,_)}function P(T){let _=i.get(T).__ref;_!==void 0&&(g.delete(_),y.unregister(_))}function O(T){q(T.target)}function z(T){I(T.target)}function q(T){T.removeEventListener("dispose",O),P(T),C(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function I(T){T.removeEventListener("dispose",z),P(T),X(T)}function E(){for(let T of g){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?I(_):q(_))}g.clear(),u.clear()}function C(T){let _=i.get(T);if(_.__webglInit===void 0)return;let V=T.source,st=d.get(V);if(st){let nt=st[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&D(T),Object.keys(st).length===0&&d.delete(V)}i.remove(T)}function D(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let V=T.source,st=d.get(V);delete st[_.__cacheKey],o.memory.textures--}function X(T){let _=i.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let V=T.depthTexture;if(V&&V.renderTarget===T&&q(V),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(_.__webglFramebuffer[nt]))for(let lt=0;lt<_.__webglFramebuffer[nt].length;lt++)n.deleteFramebuffer(_.__webglFramebuffer[nt][lt]);else n.deleteFramebuffer(_.__webglFramebuffer[nt]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[nt])}else{if(Array.isArray(_.__webglFramebuffer))for(let nt=0;nt<_.__webglFramebuffer.length;nt++)n.deleteFramebuffer(_.__webglFramebuffer[nt]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let nt=0;nt<_.__webglColorRenderbuffer.length;nt++)_.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[nt]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let st=T.textures;for(let nt=0,lt=st.length;nt<lt;nt++){let dt=i.get(st[nt]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(st[nt])}i.remove(T)}let H=0;function Y(){H=0}function et(){return H}function St(T){H=T}function Lt(){let T=H;return T>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}function $(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function mt(T,_){let V=i.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let st=T.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Je(V,T,_);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function Rt(T,_){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Je(V,T,_);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function Ot(T,_){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Je(V,T,_);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function yt(T,_){let V=i.get(T);if(T.version>0&&V.__version!==T.version){Nn(V,T,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}let Kt={[kr]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},qe={[cn]:n.NEAREST,[up]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ic]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},kt={[mp]:n.NEVER,[Cu]:n.ALWAYS,[gp]:n.LESS,[Au]:n.LEQUAL,[xp]:n.EQUAL,[Ru]:n.GEQUAL,[_p]:n.GREATER,[yp]:n.NOTEQUAL};function Se(T,_){if(_.type===ii&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Rn||_.magFilter===ic||_.magFilter===ua||_.magFilter===Zi||_.minFilter===Rn||_.minFilter===ic||_.minFilter===ua||_.minFilter===Zi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Kt[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Kt[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Kt[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,qe[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,kt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==ua&&_.minFilter!==Zi||_.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ae(T,_){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",O),U(_));let st=_.source,nt=d.get(st);nt===void 0&&(nt={},d.set(st,nt));let lt=$(_);if(lt!==T.__cacheKey){nt[lt]===void 0&&(nt[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[lt].usedTimes++;let dt=nt[T.__cacheKey];dt!==void 0&&(nt[T.__cacheKey].usedTimes--,dt.usedTimes===0&&D(_)),T.__cacheKey=lt,T.__webglTexture=nt[lt].texture}return V}function ae(T,_,V){return Math.floor(Math.floor(T/V)/_)}function dn(T,_,V,st){let lt=T.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,V,st,_.data);else{lt.sort((L,tt)=>L.start-tt.start);let dt=0;for(let L=1;L<lt.length;L++){let tt=lt[dt],K=lt[L],ut=tt.start+tt.count,at=ae(K.start,_.width,4),ct=ae(tt.start,_.width,4);K.start<=ut+1&&at===ct&&ae(K.start+K.count-1,_.width,4)===at?tt.count=Math.max(tt.count,K.start+K.count-tt.start):(++dt,lt[dt]=K)}lt.length=dt+1;let Q=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ht=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let L=0,tt=lt.length;L<tt;L++){let K=lt[L],ut=Math.floor(K.start/4),at=Math.ceil(K.count/4),ct=ut%_.width,Dt=Math.floor(ut/_.width),ee=at,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,ct,Dt,ee,rt,V,st,_.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ht)}}function Je(T,_,V){let st=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(st=n.TEXTURE_3D);let nt=Ae(T,_),lt=_.source;e.bindTexture(st,T.__webglTexture,n.TEXTURE0+V);let dt=i.get(lt);if(lt.version!==dt.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=he.getPrimaries(he.workingColorSpace),Nt=_.colorSpace===$i?null:he.getPrimaries(_.colorSpace),jt=_.colorSpace===$i||rt===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=M(_.image,!1,s.maxTextureSize);j=Ft(_,j);let ht=r.convert(_.format,_.colorSpace),L=r.convert(_.type),tt=w(_.internalFormat,ht,L,_.normalized,_.colorSpace,_.isVideoTexture);Se(st,_);let K,ut=_.mipmaps,at=_.isVideoTexture!==!0,ct=dt.__version===void 0||nt===!0,Dt=lt.dataReady,ee=b(_,j);if(_.isDepthTexture)tt=x(_.format===Ji,_.type),ct&&(at?e.texStorage2D(n.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,tt,j.width,j.height,0,ht,L,null));else if(_.isDataTexture)if(ut.length>0){at&&ct&&e.texStorage2D(n.TEXTURE_2D,ee,tt,ut[0].width,ut[0].height);for(let rt=0,Nt=ut.length;rt<Nt;rt++)K=ut[rt],at?Dt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(n.TEXTURE_2D,rt,tt,K.width,K.height,0,ht,L,K.data);_.generateMipmaps=!1}else at?(ct&&e.texStorage2D(n.TEXTURE_2D,ee,tt,j.width,j.height),Dt&&dn(_,j,ht,L)):e.texImage2D(n.TEXTURE_2D,0,tt,j.width,j.height,0,ht,L,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){at&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,tt,ut[0].width,ut[0].height,j.depth);for(let rt=0,Nt=ut.length;rt<Nt;rt++)if(K=ut[rt],_.format!==gi)if(ht!==null)if(at){if(Dt)if(_.layerUpdates.size>0){let jt=Uu(K.width,K.height,_.format,_.type);for(let xt of _.layerUpdates){let be=K.data.subarray(xt*jt/K.data.BYTES_PER_ELEMENT,(xt+1)*jt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,xt,K.width,K.height,1,ht,be)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,j.depth,ht,K.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,tt,K.width,K.height,j.depth,0,K.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,j.depth,ht,L,K.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,tt,K.width,K.height,j.depth,0,ht,L,K.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{at&&ct&&e.texStorage2D(n.TEXTURE_2D,ee,tt,ut[0].width,ut[0].height);for(let rt=0,Nt=ut.length;rt<Nt;rt++)K=ut[rt],_.format!==gi?ht!==null?at?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ht,K.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,tt,K.width,K.height,0,K.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Dt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(n.TEXTURE_2D,rt,tt,K.width,K.height,0,ht,L,K.data)}else if(_.isDataArrayTexture)if(at){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,tt,j.width,j.height,j.depth),Dt)if(_.layerUpdates.size>0){let rt=Uu(j.width,j.height,_.format,_.type);for(let Nt of _.layerUpdates){let jt=j.data.subarray(Nt*rt/j.data.BYTES_PER_ELEMENT,(Nt+1)*rt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,j.width,j.height,1,ht,L,jt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,ht,L,j.data);else if(_.isData3DTexture)at?(ct&&e.texStorage3D(n.TEXTURE_3D,ee,tt,j.width,j.height,j.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)):e.texImage3D(n.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,ht,L,j.data);else if(_.isFramebufferTexture){if(ct)if(at)e.texStorage2D(n.TEXTURE_2D,ee,tt,j.width,j.height);else{let rt=j.width,Nt=j.height;for(let jt=0;jt<ee;jt++)e.texImage2D(n.TEXTURE_2D,jt,tt,rt,Nt,0,ht,L,null),rt>>=1,Nt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),j.parentNode!==rt){rt.appendChild(j),u.add(_),rt.onpaint=Nt=>{let jt=Nt.changedElements;for(let xt of u)jt.includes(xt.image)&&(xt.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let jt=n.RGBA,xt=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,jt,xt,be,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ut.length>0){if(at&&ct){let rt=qt(ut[0]);e.texStorage2D(n.TEXTURE_2D,ee,tt,rt.width,rt.height)}for(let rt=0,Nt=ut.length;rt<Nt;rt++)K=ut[rt],at?Dt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ht,L,K):e.texImage2D(n.TEXTURE_2D,rt,tt,ht,L,K);_.generateMipmaps=!1}else if(at){if(ct){let rt=qt(j);e.texStorage2D(n.TEXTURE_2D,ee,tt,rt.width,rt.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,L,j)}else e.texImage2D(n.TEXTURE_2D,0,tt,ht,L,j);R(_)&&_.mipmapsAutoUpdate===!0&&S(st),dt.__version=lt.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Nn(T,_,V){if(_.image.length!==6)return;let st=Ae(T,_),nt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);let lt=i.get(nt);if(nt.version!==lt.__version||st===!0){e.activeTexture(n.TEXTURE0+V);let dt=he.getPrimaries(he.workingColorSpace),Q=_.colorSpace===$i?null:he.getPrimaries(_.colorSpace),j=_.colorSpace===$i||dt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,tt=[];for(let xt=0;xt<6;xt++)!ht&&!L?tt[xt]=M(_.image[xt],!0,s.maxCubemapSize):tt[xt]=L?_.image[xt].image:_.image[xt],tt[xt]=Ft(_,tt[xt]);let K=tt[0],ut=r.convert(_.format,_.colorSpace),at=r.convert(_.type),ct=w(_.internalFormat,ut,at,_.normalized,_.colorSpace),Dt=_.isVideoTexture!==!0,ee=lt.__version===void 0||st===!0,rt=nt.dataReady,Nt=b(_,K);Se(n.TEXTURE_CUBE_MAP,_);let jt;if(_.isDepthTexture){if(ct=x(_.format===Ji,_.type),ee)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ct,K.width,K.height);else for(let xt=0;xt<6;xt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,K.width,K.height,0,ut,at,null)}else if(ht){Dt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,K.width,K.height);for(let xt=0;xt<6;xt++){jt=tt[xt].mipmaps;for(let be=0;be<jt.length;be++){let on=jt[be];_.format!==gi?ut!==null?Dt?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be,0,0,on.width,on.height,ut,on.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be,ct,on.width,on.height,0,on.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be,0,0,on.width,on.height,ut,at,on.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be,ct,on.width,on.height,0,ut,at,on.data)}}}else{if(jt=_.mipmaps,Dt&&ee){jt.length>0&&Nt++;let xt=qt(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(L){Dt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,tt[xt].width,tt[xt].height,ut,at,tt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,tt[xt].width,tt[xt].height,0,ut,at,tt[xt].data);for(let be=0;be<jt.length;be++){let us=jt[be].image[xt].image;Dt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be+1,0,0,us.width,us.height,ut,at,us.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be+1,ct,us.width,us.height,0,ut,at,us.data)}}else{Dt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ut,at,tt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,ut,at,tt[xt]);for(let be=0;be<jt.length;be++){let on=jt[be];Dt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be+1,0,0,ut,at,on.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,be+1,ct,ut,at,on.image[xt])}}}R(_)&&_.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),lt.__version=nt.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Be(T,_,V,st,nt,lt){let dt=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),j=w(V.internalFormat,dt,Q,V.normalized,V.colorSpace),ht=i.get(_),L=i.get(V);if(L.__renderTarget=_,!ht.__hasExternalTextures){let tt=Math.max(1,_.width>>lt),K=Math.max(1,_.height>>lt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,lt,j,tt,K,_.depth,0,dt,Q,null):e.texImage2D(nt,lt,j,tt,K,0,dt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),gt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,nt,L.__webglTexture,0,Ue(_)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,nt,L.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bi(T,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let st=_.depthTexture,nt=st&&st.isDepthTexture?st.type:null,lt=x(_.stencilBuffer,nt),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(_),lt,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(_),lt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,lt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,T)}else{let st=_.textures;for(let nt=0;nt<st.length;nt++){let lt=st[nt],dt=r.convert(lt.format,lt.colorSpace),Q=r.convert(lt.type),j=w(lt.internalFormat,dt,Q,lt.normalized,lt.colorSpace);gt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(_),j,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rn(T,_,V){let st=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(_.depthTexture);nt.__renderTarget=_;let lt=st?_.depthTexture.image[0]:_.depthTexture.image;(!nt.__webglTexture||lt.width!==_.width||lt.height!==_.height)&&(lt.width=_.width,lt.height=_.height,_.depthTexture.needsUpdate=!0),st?yt(_.depthTexture,0):mt(_.depthTexture,0);let dt=nt.__webglTexture,Q=Ue(_),j=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ht=_.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)gt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,j,dt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ht,j,dt,0);else if(_.depthTexture.format===Ji)gt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,j,dt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ht,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kn(T){let _=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let st=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),st){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,st.removeEventListener("dispose",nt)};st.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=st}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let st=0;st<6;st++)rn(_.__webglFramebuffer[st],T,st);else T.texture.mipmaps.length>0?rn(_.__webglFramebuffer[0],T,0):rn(_.__webglFramebuffer,T,0);else if(V){_.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[st]),_.__webglDepthbuffer[st]===void 0)_.__webglDepthbuffer[st]=n.createRenderbuffer(),bi(_.__webglDepthbuffer[st],T,!1);else{let nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,lt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),bi(_.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qn(T,_,V){let st=i.get(T);_!==void 0&&Be(st.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Kn(T)}function jn(T){let _=T.texture,V=i.get(T),st=i.get(_);T.addEventListener("dispose",z),U(T);let nt=T.textures,lt=T.isWebGLCubeRenderTarget===!0,dt=nt.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=_.version,o.memory.textures++),lt){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let j=0;j<_.mipmaps.length;j++)V.__webglFramebuffer[Q][j]=n.createFramebuffer()}else V.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(_.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)V.__webglFramebuffer[Q]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(dt)for(let Q=0,j=nt.length;Q<j;Q++){let ht=i.get(nt[Q]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&gt(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){let j=nt[Q];V.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let ht=r.convert(j.format,j.colorSpace),L=r.convert(j.type),tt=w(j.internalFormat,ht,L,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),K=Ue(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),bi(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),Se(n.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Be(V.__webglFramebuffer[Q][j],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else Be(V.__webglFramebuffer[Q],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);R(_)?S(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Q=0,j=nt.length;Q<j;Q++){let ht=nt[Q],L=i.get(ht),tt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(tt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,L.__webglTexture),Se(tt,ht),Be(V.__webglFramebuffer,T,ht,n.COLOR_ATTACHMENT0+Q,tt,0),R(ht)&&S(tt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,st.__webglTexture),Se(Q,_),_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Be(V.__webglFramebuffer[j],T,_,n.COLOR_ATTACHMENT0,Q,j);else Be(V.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,Q,0);R(_)?S(Q):_.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Kn(T)}function B(T){let _=T.textures;for(let V=0,st=_.length;V<st;V++){let nt=_[V];if(R(nt)&&nt.mipmapsAutoUpdate===!0){let lt=A(T),dt=i.get(nt).__webglTexture;e.bindTexture(lt,dt),S(lt),e.unbindTexture()}}}let ti=[];function Ne(T){if(T.samples>0){if(gt(T)===!1){let _=T.textures,V=T.width,st=T.height,nt=n.COLOR_BUFFER_BIT,lt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(T),Q=_.length>1;if(Q)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let L=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,V,st,0,0,V,st,nt,n.NEAREST),c===!0&&(ti.length=0,ti.push(n.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ti.push(lt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ti))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);let L=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,L,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ue(T){return Math.min(s.maxSamples,T.samples)}function gt(T){let _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $e(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ft(T,_){let V=T.colorSpace,st=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==ko&&V!==$i&&(he.getTransfer(V)===ye?(st!==gi||nt!==Fn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",V)),_}function qt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(a.width=T.naturalWidth||T.width,a.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(a.width=T.displayWidth,a.height=T.displayHeight):(a.width=T.width,a.height=T.height),a}this.allocateTextureUnit=Lt,this.resetTextureUnits=Y,this.getTextureUnits=et,this.setTextureUnits=St,this.setTexture2D=mt,this.setTexture2DArray=Rt,this.setTexture3D=Ot,this.setTextureCube=yt,this.rebindTextures=Qn,this.setupRenderTarget=jn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Kn,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=gt,this.dispose=E}function VM(n,t){function e(i,s=$i){let r,o=he.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Eu)return n.ALPHA;if(i===wu)return n.RGB;if(i===gi)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===ac)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===hc)return n.RGBA_INTEGER;if(i===fa||i===da||i===pa||i===ma)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===xc||i===_c||i===yc||i===ga||i===vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_c)return r.COMPRESSED_R11_EAC;if(i===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mc||i===Sc||i===bc||i===Tc||i===Ec||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===Oc||i===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Uc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===kc||i===xa||i===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ri({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Me(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends wi{constructor(t,e){super();let i=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Ju,m={},M=e.getContextAttributes(),R=null,S=null,A=[],w=[],x=new Yt,b=null,U=null,P=new mn;P.viewport=new Oe;let O=new mn;O.viewport=new Oe;let z=[P,O],q=new jl,I=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let mt=A[$];return mt===void 0&&(mt=new Vr,A[$]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function($){let mt=A[$];return mt===void 0&&(mt=new Vr,A[$]=mt),mt.getGripSpace()},this.getHand=function($){let mt=A[$];return mt===void 0&&(mt=new Vr,A[$]=mt),mt.getHandSpace()};function C($){let mt=w.indexOf($.inputSource);if(mt===-1)return;let Rt=A[mt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,a||o),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",X);for(let $=0;$<A.length;$++){let mt=w[$];mt!==null&&(w[$]=null,A[$].disconnect(mt))}I=null,E=null,p.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(R),d=null,f=null,u=null,s=null,S=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),U!==null){let $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function($){a=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",D),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ot=null,yt=null;M.depth&&(yt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=M.stencil?Ji:Wi,Ot=M.stencil?nr:pi);let Kt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Xn(f.textureWidth,f.textureHeight,{format:gi,type:Fn,depthTexture:new qi(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Rt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xn(d.framebufferWidth,d.framebufferHeight,{format:gi,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X($){for(let mt=0;mt<$.removed.length;mt++){let Rt=$.removed[mt],Ot=w.indexOf(Rt);Ot>=0&&(w[Ot]=null,A[Ot].disconnect(Rt))}for(let mt=0;mt<$.added.length;mt++){let Rt=$.added[mt],Ot=w.indexOf(Rt);if(Ot===-1){for(let Kt=0;Kt<A.length;Kt++)if(Kt>=w.length){w.push(Rt),Ot=Kt;break}else if(w[Kt]===null){w[Kt]=Rt,Ot=Kt;break}if(Ot===-1)break}let yt=A[Ot];yt&&yt.connect(Rt)}}function H($,mt){mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let mt=$.near,Rt=$.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Rt=p.depthFar)),q.near=O.near=P.near=mt,q.far=O.far=P.far=Rt,(I!==q.near||E!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,E=q.far),q.layers.mask=$.layers.mask|6,P.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let Ot=$.parent,yt=q.cameras;H(q,Ot);for(let Kt=0;Kt<yt.length;Kt++)H(yt[Kt],Ot);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),Y($,q,Ot)};function Y($,mt,Rt){Rt===null?$.matrix.copy(mt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(mt.projectionMatrix),$.projectionMatrixInverse.copy(mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function($){return m[$]};let et=null;function St($,mt){if(h=mt.getViewerPose(a||o),g=mt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ot=!1;Rt.length!==q.cameras.length&&(q.cameras.length=0,Ot=!0);for(let kt=0;kt<Rt.length;kt++){let Se=Rt[kt],Ae=null;if(d!==null)Ae=d.getViewport(Se);else{let dn=u.getViewSubImage(f,Se);Ae=dn.viewport,kt===0&&(t.setRenderTargetTextures(S,dn.colorTexture,dn.depthStencilTexture),t.setRenderTarget(S))}let ae=z[kt];ae===void 0&&(ae=new mn,ae.layers.enable(kt),ae.viewport=new Oe,z[kt]=ae),ae.matrix.fromArray(Se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),kt===0&&(q.matrix.copy(ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ot===!0&&q.cameras.push(ae)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let kt=u.getDepthInformation(Rt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let kt=0;kt<Rt.length;kt++){let Se=Rt[kt].camera;if(Se){let Ae=m[Se];Ae||(Ae=new na,m[Se]=Ae);let ae=u.getCameraImage(Se);Ae.sourceTexture=ae}}}}for(let Rt=0;Rt<A.length;Rt++){let Ot=w[Rt],yt=A[Rt];Ot!==null&&yt!==void 0&&yt.update(Ot,mt,a||o)}et&&et($,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Lt=new jp;Lt.setAnimationLoop(St),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}},qM=new ve,cm=new Xt;cm.set(-1,0,0,0,1,0,0,0,1);function YM(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Lu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&l(p,m)):m.isPointsMaterial?c(p,m,M,R):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===In&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===In&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),R=M.envMap,S=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function l(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZM(n,t,e,i){let s={},r={};function o(M,R){let S=R.program;i.uniformBlockBinding(M,S,s[M.id])}function l(M,R){let S=s[M.id];S===void 0&&(g(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",p));let A=R.program;i.updateUBOMapping(M,A);let w=t.render.frame;r[M.id]!==w&&(a(M),r[M.id]=w)}function c(M){let R=n.createBuffer(),S=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function a(M){let R=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,x=S.length;w<x;w++){let b=S[w];if(Array.isArray(b))for(let U=0,P=b.length;U<P;U++)h(b[U],w,U,A);else h(b,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,R,S,A){if(f(M,R,S,A)===!0){let w=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let U=0;U<x.length;U++){let P=x[U],O=y(P,!0);u(P,M.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,M.__data)}}function u(M,R,S){typeof M=="number"||typeof M=="boolean"?R[S]=M:M.isMatrix3?(R[S]=M.elements[0],R[S+1]=M.elements[1],R[S+2]=M.elements[2],R[S+3]=0,R[S+4]=M.elements[3],R[S+5]=M.elements[4],R[S+6]=M.elements[5],R[S+7]=0,R[S+8]=M.elements[6],R[S+9]=M.elements[7],R[S+10]=M.elements[8],R[S+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-S),S):M.toArray(R,S)}function f(M,R,S,A){let w=M.value,x=R+"_"+S;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let b=A[x],U=!1;for(let P=0;P<w.length;P++)d(w[P],b,P)===!0&&(U=!0);return U}return d(w,A,x)}function d(M,R,S){if(R[S]===void 0)return typeof M=="number"||typeof M=="boolean"?R[S]=M:ArrayBuffer.isView(M)?R[S]=M.slice():R[S]=M.clone(),!0;{let A=R[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let R=M.uniforms,S=0,A=16;for(let x=0,b=R.length;x<b;x++){let U=Array.isArray(R[x])?R[x]:[R[x]];for(let P=0,O=U.length;P<O;P++){let z=U[P],q=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(R[x])||Array.isArray(z.value),E=S;for(let D=0,X=q.length;D<X;D++){let H=q[D],Y=y(H,I),et=S%A,St=et%Y.boundary,Lt=et+St;S+=St,Lt!==0&&A-Lt<Y.storage&&(S+=A-Lt),D===0&&(E=S),S+=Y.storage}let C=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new C((S-E)/Float32Array.BYTES_PER_ELEMENT),z.__offset=E}}let w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function y(M,R){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let R=M.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:l,dispose:m}}var JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function $M(){return Pi===null&&(Pi=new Qo(JM,16,16,ws,mi),Pi.name="DFG_LUT",Pi.minFilter=Rn,Pi.magFilter=Rn,Pi.wrapS=Ei,Pi.wrapT=Ei,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var qc=class{constructor(t={}){let{canvas:e=vp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Fn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=d,p=new Set([hc,cc,lc]),m=new Set([Fn,pi,Kr,nr,rc,oc]),M=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,z=null,q=null,I=null,E=null;this._outputColorSpace=An;let C=0,D=0,X=null,H=-1,Y=null,et=new Oe,St=new Oe,Lt=null,$=new Zt(0),mt=0,Rt=e.width,Ot=e.height,yt=1,Kt=null,qe=null,kt=new Oe(0,0,Rt,Ot),Se=new Oe(0,0,Rt,Ot),Ae=!1,ae=new ys,dn=new Bl,Je=!1,Nn=!1,Be=new ve,bi=new k,rn=new Oe,Kn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qn=!1;function jn(){return X===null?yt:1}let B=i;function ti(v,N){return e.getContext(v,N)}let Ne,Ue,gt,$e,Ft,qt,T,_,V,st,nt,lt,dt,Q,j,ht,L,tt,K,ut,at,ct,Dt;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),B===null){let N="webgl2";if(B=ti(N,v),B===null)throw ti(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(v){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Gt("WebGLRenderer: "+v.message),v}function ee(){Ne=new av(B),Ne.init(),at=new VM(B,Ne),Ue=new $y(B,Ne,t,at),gt=new HM(B,Ne),Ue.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),q=B.createFramebuffer(),I=B.createFramebuffer(),E=B.createFramebuffer(),$e=new hv(B),Ft=new AM,qt=new GM(B,Ne,gt,Ft,Ue,at,$e),T=new ov(P),_=new fx(B),ct=new Zy(B,_),V=new lv(B,_,$e,ct),st=new fv(B,V,_,ct,$e),tt=new uv(B,Ue,qt),j=new Ky(Ft),nt=new wM(P,T,Ne,Ue,ct,j),lt=new YM(P,Ft),dt=new CM,Q=new UM(Ne),L=new Yy(P,T,gt,st,g,c),ht=new zM(P,st,Ue),Dt=new ZM(B,$e,Ue,gt),K=new Jy(B,Ne,$e),ut=new cv(B,Ne,$e),$e.programs=nt.programs,P.capabilities=Ue,P.extensions=Ne,P.properties=Ft,P.renderLists=dt,P.shadowMap=ht,P.state=gt,P.info=$e}y!==Fn&&(U=new pv(y,e.width,e.height,l,s,r));let rt=new $u(P,B);this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=Ne.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ne.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(v){v!==void 0&&(yt=v,this.setSize(Rt,Ot,!1))},this.getSize=function(v){return v.set(Rt,Ot)},this.setSize=function(v,N,Z=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=v,Ot=N,e.width=Math.floor(v*yt),e.height=Math.floor(N*yt),Z===!0&&(e.style.width=v+"px",e.style.height=N+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Rt*yt,Ot*yt).floor()},this.setDrawingBufferSize=function(v,N,Z){Rt=v,Ot=N,yt=Z,e.width=Math.floor(v*Z),e.height=Math.floor(N*Z),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(y===Fn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(kt)},this.setViewport=function(v,N,Z,G){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,N,Z,G),gt.viewport(et.copy(kt).multiplyScalar(jn()).round())},this.getScissor=function(v){return v.copy(Se)},this.setScissor=function(v,N,Z,G){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,N,Z,G),gt.scissor(St.copy(Se).multiplyScalar(jn()).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(v){gt.setScissorTest(Ae=v)},this.setOpaqueSort=function(v){Kt=v},this.setTransparentSort=function(v){qe=v},this.getClearColor=function(v){return v.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,Z=!0){let G=0;if(v){let W=!1;if(X!==null){let pt=X.texture.format;W=p.has(pt)}if(W){let pt=X.texture.type,Tt=m.has(pt),ft=L.getClearColor(),vt=L.getClearAlpha(),It=ft.r,Jt=ft.g,le=ft.b;Tt?(M[0]=It,M[1]=Jt,M[2]=le,M[3]=vt,B.clearBufferuiv(B.COLOR,0,M)):(R[0]=It,R[1]=Jt,R[2]=le,R[3]=vt,B.clearBufferiv(B.COLOR,0,R))}else G|=B.COLOR_BUFFER_BIT}N&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),L.dispose(),dt.dispose(),Q.dispose(),qt.dispose(),Ft.dispose(),T.dispose(),st.dispose(),V.dispose(),ct.dispose(),Dt.dispose(),nt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",sd),rt.removeEventListener("sessionend",rd),zs.stop()};function Nt(v){v.preventDefault(),Go("WebGLRenderer: Context Lost."),O=!0}function jt(){Go("WebGLRenderer: Context Restored."),O=!1;let v=$e.autoReset,N=ht.enabled,Z=ht.autoUpdate,G=ht.needsUpdate,W=ht.type;ee(),$e.autoReset=v,ht.enabled=N,ht.autoUpdate=Z,ht.needsUpdate=G,ht.type=W}function xt(v){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function be(v){let N=v.target;N.removeEventListener("dispose",be),on(N)}function on(v){us(v),Ft.remove(v)}function us(v){let N=Ft.get(v).programs;N!==void 0&&(N.forEach(function(Z){nt.releaseProgram(Z)}),v.isShaderMaterial&&nt.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,Z,G,W,pt){N===null&&(N=Kn);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,ft=_g(v,N,Z,G,W);gt.setMaterial(G,Tt);let vt=Z.index,It=1;if(G.wireframe===!0){if(vt=V.getWireframeAttribute(Z),vt===void 0)return;It=2}let Jt=Z.drawRange,le=Z.attributes.position,Ct=Jt.start*It,ce=(Jt.start+Jt.count)*It;pt!==null&&(Ct=Math.max(Ct,pt.start*It),ce=Math.min(ce,(pt.start+pt.count)*It)),vt!==null?(Ct=Math.max(Ct,0),ce=Math.min(ce,vt.count)):le!=null&&(Ct=Math.max(Ct,0),ce=Math.min(ce,le.count));let Ye=ce-Ct;if(Ye<0||Ye===1/0)return;ct.setup(W,G,ft,Z,vt);let Pe,Re=K;if(vt!==null&&(Pe=_.get(vt),Re=ut,Re.setIndex(Pe)),W.isMesh)G.wireframe===!0?(gt.setLineWidth(G.wireframeLinewidth*jn()),Re.setMode(B.LINES)):Re.setMode(B.TRIANGLES);else if(W.isLine){let yn=G.linewidth;yn===void 0&&(yn=1),gt.setLineWidth(yn*jn()),W.isLineSegments?Re.setMode(B.LINES):W.isLineLoop?Re.setMode(B.LINE_LOOP):Re.setMode(B.LINE_STRIP)}else W.isPoints?Re.setMode(B.POINTS):W.isSprite&&Re.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let yn=W._multiDrawStarts,Pt=W._multiDrawCounts,En=W._multiDrawCount,_e=vt?_.get(vt).bytesPerElement:1,Hs=Ft.get(G).currentProgram.getUniforms();for(let vn=0;vn<En;vn++)Hs.setValue(B,"_gl_DrawID",vn),Re.render(yn[vn]/_e,Pt[vn])}else if(W.isInstancedMesh)Re.renderInstances(Ct,Ye,W.count);else if(Z.isInstancedBufferGeometry){let yn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pt=Math.min(Z.instanceCount,yn);Re.renderInstances(Ct,Ye,Pt)}else Re.render(Ct,Ye)};function id(v,N,Z,G){z!==null&&v.isNodeMaterial&&z.setObject(G,v),Je===!0&&j.setState(v,Z,!1),v.transparent===!0&&v.side===Ve&&v.forceSinglePass===!1?(v.side=In,v.needsUpdate=!0,Ro(v,N,G),v.side=Es,v.needsUpdate=!0,Ro(v,N,G),v.side=Ve):Ro(v,N,G)}this.compile=function(v,N,Z=null){Z===null&&(Z=v),z!==null&&z.renderStart(v,N,Z),w=Q.get(Z),w.init(N),b.push(w),Z.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),v!==Z&&v.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Nn=this.localClippingEnabled,Je=j.init(this.clippingPlanes,Nn),Je===!0&&j.setGlobalState(this.clippingPlanes,N),z!==null&&ht.render(w.state.shadowsArray,Z,N);let G=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pt=W.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){let ft=pt[Tt];id(ft,Z,N,W),G.add(ft)}else id(pt,Z,N,W),G.add(pt)}),w=b.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(v,N,Z=null){let G=this.compile(v,N,Z);return new Promise(W=>{function pt(){if(G.forEach(function(Tt){let vt=Ft.get(Tt).currentProgram;(vt===void 0||vt.isReady())&&G.delete(Tt)}),G.size===0){W(v);return}setTimeout(pt,10)}Ne.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Rh=null;function gg(v){Rh&&Rh(v)}function sd(){zs.stop()}function rd(){zs.start()}let zs=new jp;zs.setAnimationLoop(gg),typeof self<"u"&&zs.setContext(self),this.setAnimationLoop=function(v){Rh=v,rt.setAnimationLoop(v),v===null?zs.stop():zs.start()},rt.addEventListener("sessionstart",sd),rt.addEventListener("sessionend",rd),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(v,N);let Z=rt.enabled===!0&&rt.isPresenting===!0,G=U!==null&&(X===null||Z)&&U.begin(P,X);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,X),w=Q.get(v,b.length),w.init(N),w.state.textureUnits=qt.getTextureUnits(),b.push(w),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?dn.setFromArrayCamera(N):ae.setFromProjectionMatrix(Be,ni,N.reversedDepth),Nn=this.localClippingEnabled,Je=j.init(this.clippingPlanes,Nn),A=dt.get(v,x.length),A.init(),x.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Tt=P.xr.getDepthSensingMesh();Tt!==null&&Ch(Tt,N,-1/0,P.sortObjects)}Ch(v,N,0,P.sortObjects),A.finish(),z!==null&&z.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Kt,qe),Qn=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Qn&&L.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),Je===!0&&j.beginShadows();let W=w.state.shadowsArray;if(ht.render(W,v,N),Je===!0&&j.endShadows(),(G&&U.hasRenderPass())===!1){let Tt=A.opaque,ft=A.transmissive;if(w.setupLights(),N.isArrayCamera){let vt=N.cameras;if(ft.length>0)for(let It=0,Jt=vt.length;It<Jt;It++){let le=vt[It];ad(Tt,ft,v,le)}Qn&&L.render(v);for(let It=0,Jt=vt.length;It<Jt;It++){let le=vt[It];od(A,v,le,le.viewport)}}else ft.length>0&&ad(Tt,ft,v,N),Qn&&L.render(v),od(A,v,N)}X!==null&&D===0&&(qt.updateMultisampleRenderTarget(X),qt.updateRenderTargetMipmap(X)),G&&U.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),ct.resetDefaultState(),H=-1,Y=null,b.pop(),b.length>0?(w=b[b.length-1],qt.setTextureUnits(w.state.textureUnits),Je===!0&&j.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function Ch(v,N,Z,G){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)Z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let Tt=N.isArrayCamera?dn:ae;if(!v.frustumCulled||v.intersectsFrustum(Tt)){G&&rn.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Be);let ft=st.update(v),vt=v.material;vt.visible&&A.push(v,ft,vt,Z,rn.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){let Tt=N.isArrayCamera?dn:ae;if(!v.frustumCulled||v.intersectsFrustum(Tt)){let ft=st.update(v),vt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),rn.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),rn.copy(ft.boundingSphere.center)),rn.applyMatrix4(v.matrixWorld).applyMatrix4(Be)),Array.isArray(vt)){let It=ft.groups;for(let Jt=0,le=It.length;Jt<le;Jt++){let Ct=It[Jt],ce=vt[Ct.materialIndex];ce&&ce.visible&&A.push(v,ft,ce,Z,rn.z,Ct,N)}}else vt.visible&&A.push(v,ft,vt,Z,rn.z,null,N)}}}let pt=v.children;for(let Tt=0,ft=pt.length;Tt<ft;Tt++)Ch(pt[Tt],N,Z,G)}function od(v,N,Z,G){let{opaque:W,transmissive:pt,transparent:Tt}=v;w.setupLightsView(Z),Je===!0&&j.setGlobalState(P.clippingPlanes,Z),G&&gt.viewport(et.copy(G)),W.length>0&&Ka(W,N,Z),pt.length>0&&Ka(pt,N,Z),Tt.length>0&&Ka(Tt,N,Z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ad(v,N,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Ct=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Xn(1,1,{generateMipmaps:!0,type:Ct?mi:Fn,minFilter:Zi,samples:Math.max(4,Ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let pt=w.state.transmissionRenderTarget[G.id],Tt=G.viewport||et;pt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);let ft=P.getRenderTarget(),vt=P.getActiveCubeFace(),It=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor($),mt=P.getClearAlpha(),mt<1&&P.setClearColor(16777215,.5),P.clear(),Qn&&L.render(Z);let Jt=P.toneMapping;P.toneMapping=Ci;let le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Je===!0&&j.setGlobalState(P.clippingPlanes,G),Ka(v,Z,G),qt.updateMultisampleRenderTarget(pt),qt.updateRenderTargetMipmap(pt),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ce=0,Ye=N.length;ce<Ye;ce++){let Pe=N[ce],{object:Re,geometry:yn,material:Pt,group:En}=Pe;if(Pt.side===Ve&&Re.layers.test(G.layers)){let _e=Pt.side;Pt.side=In,Pt.needsUpdate=!0,ld(Re,Z,G,yn,Pt,En),Pt.side=_e,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(qt.updateMultisampleRenderTarget(pt),qt.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,vt,It),P.setClearColor($,mt),le!==void 0&&(G.viewport=le),P.toneMapping=Jt}function Ka(v,N,Z){let G=N.isScene===!0?N.overrideMaterial:null;for(let W=0,pt=v.length;W<pt;W++){let Tt=v[W],{object:ft,geometry:vt,group:It}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&G!==null&&(Jt=G),ft.layers.test(Z.layers)&&ld(ft,N,Z,vt,Jt,It)}}function ld(v,N,Z,G,W,pt){z!==null&&W.isNodeMaterial&&z.setObject(v,W),v.onBeforeRender(P,N,Z,G,W,pt),v.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(P,N,Z,G,v,pt),W.transparent===!0&&W.side===Ve&&W.forceSinglePass===!1?(W.side=In,W.needsUpdate=!0,P.renderBufferDirect(Z,N,G,W,v,pt),W.side=Es,W.needsUpdate=!0,P.renderBufferDirect(Z,N,G,W,v,pt),W.side=Ve):P.renderBufferDirect(Z,N,G,W,v,pt),v.onAfterRender(P,N,Z,G,W,pt)}function cd(v){let N=0;for(let Z of v)Z.texture!==null&&N++;return N}function Ro(v,N,Z){N.isScene!==!0&&(N=Kn);let G=Ft.get(v),W=w.state.lights,pt=w.state.shadowsArray,Tt=W.state.version,ft=nt.getParameters(v,W.state,pt,N,Z,w.state.lightProbeGridArray),vt=nt.getProgramCacheKey(ft),It=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let Jt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=T.get(v.envMap||G.environment,Jt),G.envMapRotation=G.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,It===void 0&&(v.addEventListener("dispose",be),It=new Map,G.programs=It,G.programVariants=new Map);let le=It.get(vt);if(le!==void 0){if(G.currentProgram===le&&G.lightsStateVersion===Tt)return ud(v,ft),le}else ft.uniforms=nt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,Z,ft),v.onBeforeCompile(ft,P),le=nt.acquireProgram(ft,vt),It.set(vt,le),G.uniforms=ft.uniforms;let Ct=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ct.clippingPlanes=j.uniform),ud(v,ft),G.needsLights=vg(v),G.lightsStateVersion=Tt,G.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=cd(w.state.lightProbeGridArray),G.currentProgram=le,G.uniformsList=null,le}function xg(v,N,Z,G,W){let pt=Ft.get(v),Tt=pt.currentProgram.id+","+G+","+W,ft=pt.programVariants.get(Tt);return ft===void 0?(ft=Ro(v,N,Z),pt.programVariants.set(Tt,ft)):(pt.currentProgram=ft,pt.uniformsList=null,pt.outputColorSpace=G,pt.toneMapping=W),ft}function hd(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Qr.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function ud(v,N){let Z=Ft.get(v);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function _g(v,N,Z,G,W){N.isScene!==!0&&(N=Kn),qt.resetTextureUnits();let pt=N.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,ft=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:he.workingColorSpace,vt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,It=T.get(G.envMap||Tt,vt),Jt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,le=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,Ye=!!Z.morphAttributes.color,Pe=Ci;G.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Pe=P.toneMapping);let Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yn=Re!==void 0?Re.length:0,Pt=Ft.get(G),En=w.state.lights;if(Je===!0&&(Nn===!0||v!==Y)){let ke=v===Y&&G.id===H;j.setState(G,v,ke)}let _e=!1,Hs=!1;G.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==En.state.version||W.isBatchedMesh&&Pt.batching===!1||!W.isBatchedMesh&&Pt.batching===!0||W.isBatchedMesh&&Pt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Pt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Pt.instancing===!1||!W.isInstancedMesh&&Pt.instancing===!0||W.isSkinnedMesh&&Pt.skinning===!1||!W.isSkinnedMesh&&Pt.skinning===!0||W.isInstancedMesh&&Pt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pt.instancingMorph===!1&&W.morphTexture!==null||Pt.envMap!==It||G.fog===!0&&Pt.fog!==pt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==j.numPlanes||Pt.numIntersection!==j.numIntersection)||Pt.vertexAlphas!==Jt||Pt.vertexTangents!==le||Pt.morphTargets!==Ct||Pt.morphNormals!==ce||Pt.morphColors!==Ye||Pt.morphTargetsCount!==yn||Pt.numLightProbeGrids!==cd(w.state.lightProbeGridArray)?_e=!0:(Pt.outputColorSpace!==ft||Pt.toneMapping!==Pe)&&(Hs=!0):(_e=!0,Pt.__version=G.version);let vn=Pt.currentProgram;(_e===!0||Hs===!0)&&(vn=Hs===!0?xg(G,N,W,ft,Pe):Ro(G,N,W),z&&G.isNodeMaterial&&z.onUpdateProgram(G,vn,Pt));let Qa=!1,fs=!1,Gs=!1,pe=vn.getUniforms(),pn=Pt.uniforms;if(gt.useProgram(vn.program)&&(Qa=!0,fs=!0,Gs=!0),G.id!==H&&(H=G.id,fs=!0),Qa||Y!==v){gt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(B,"projectionMatrix",v.projectionMatrix),pe.setValue(B,"viewMatrix",v.matrixWorldInverse);let an=pe.map.cameraPosition;an!==void 0&&an.setValue(B,bi.setFromMatrixPosition(v.matrixWorld)),Ue.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),Y!==v&&(Y=v,fs=!0,Gs=!0)}if(Pt.needsLights&&(En.state.sunShadowMap.length>0&&pe.setValue(B,"sunShadowMap",En.state.sunShadowMap,qt),En.state.directionalShadowMap.length>0&&pe.setValue(B,"directionalShadowMap",En.state.directionalShadowMap,qt),En.state.spotShadowMap.length>0&&pe.setValue(B,"spotShadowMap",En.state.spotShadowMap,qt),En.state.pointShadowMap.length>0&&pe.setValue(B,"pointShadowMap",En.state.pointShadowMap,qt)),W.isSkinnedMesh){pe.setOptional(B,W,"bindMatrix"),pe.setOptional(B,W,"bindMatrixInverse");let ke=W.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),pe.setValue(B,"boneTexture",ke.boneTexture,qt))}W.isBatchedMesh&&(pe.setOptional(B,W,"batchingTexture"),pe.setValue(B,"batchingTexture",W._matricesTexture,qt),pe.setOptional(B,W,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",W._indirectTexture,qt),pe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",W._colorsTexture,qt));let li=Z.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&tt.update(W,Z,vn),(fs||Pt.receiveShadow!==W.receiveShadow)&&(Pt.receiveShadow=W.receiveShadow,pe.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=$M()),fs){if(pe.setValue(B,"toneMappingExposure",P.toneMappingExposure),Pt.needsLights&&yg(pn,Gs),pt&&G.fog===!0&&lt.refreshFogUniforms(pn,pt),lt.refreshMaterialUniforms(pn,G,yt,Ot,w.state.transmissionRenderTarget[v.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let ke=S,an=0;for(let Oi of w.state.lightProbeGridArray)Oi.texture!==null&&(ke.textures[an]=Oi.texture,ke.min[an]=Oi.boundingBox.min,ke.max[an]=Oi.boundingBox.max,ke.resolution[an]=Oi.resolution,an++);for(let Oi in ke)ke[Oi].length=an;pn.probesSH.value=ke.textures,pn.probesMin.value=ke.min,pn.probesMax.value=ke.max,pn.probesResolution.value=ke.resolution}Qr.upload(B,hd(Pt),pn,qt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(B,hd(Pt),pn,qt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(B,"center",W.center),pe.setValue(B,"modelViewMatrix",W.modelViewMatrix),pe.setValue(B,"normalMatrix",W.normalMatrix),pe.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ke=G.uniformsGroups;for(let an=0,Oi=ke.length;an<Oi;an++){let dd=ke[an];Dt.update(dd,vn),Dt.bind(dd,vn)}}return vn}function yg(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function vg(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(v,N,Z){let G=Ft.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ft.get(v.texture).__webglTexture=N,Ft.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let Z=Ft.get(v);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,Z=0){X=v,C=N,D=Z;let G=null,W=!1,pt=!1;if(v){let ft=Ft.get(v);if(ft.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(B.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(v.viewport),St.copy(v.scissor),Lt=v.scissorTest,gt.viewport(et),gt.scissor(St),gt.setScissorTest(Lt),H=-1;return}else if(ft.__webglFramebuffer===void 0)qt.setupRenderTarget(v);else if(ft.__hasExternalTextures)qt.rebindTextures(v,Ft.get(v.texture).__webglTexture,Ft.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Jt=v.depthTexture;if(ft.__boundDepthTexture!==Jt){if(Jt!==null&&Ft.has(Jt)&&(v.width!==Jt.image.width||v.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(v)}}let vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(pt=!0);let It=Ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[N])?G=It[N][Z]:G=It[N],W=!0):v.samples>0&&qt.useMultisampledRTT(v)===!1?G=Ft.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[Z]:G=It,et.copy(v.viewport),St.copy(v.scissor),Lt=v.scissorTest}else et.copy(kt).multiplyScalar(yt).floor(),St.copy(Se).multiplyScalar(yt).floor(),Lt=Ae;if(Z!==0&&(G=q),gt.bindFramebuffer(B.FRAMEBUFFER,G)&&gt.drawBuffers(v,G),gt.viewport(et),gt.scissor(St),gt.setScissorTest(Lt),W){let ft=Ft.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,Z)}else if(pt){let ft=N;for(let vt=0;vt<v.textures.length;vt++){let It=Ft.get(v.textures[vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+vt,It.__webglTexture,Z,ft)}}else if(v!==null&&Z!==0){let ft=Ft.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ft.__webglTexture,Z)}H=-1};function fd(v){let N=Ft.get(v);return(N.__readFormat!==v.format||N.__readType!==v.type)&&(N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=Ue.textureFormatReadable(v.format),N.__typeReadable=Ue.textureTypeReadable(v.type)),N}this.readRenderTargetPixels=function(v,N,Z,G,W,pt,Tt,ft=0){if(!(v&&v.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0&&(vt=vt[Tt],Array.isArray(vt)&&(vt=vt[0])),vt){gt.bindFramebuffer(B.FRAMEBUFFER,vt);try{let It=v.textures[ft],Jt=It.format,le=It.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let Ct=fd(It);if(Ct.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-G&&Z>=0&&Z<=v.height-W&&B.readPixels(N,Z,G,W,at.convert(Jt),at.convert(le),pt)}finally{let It=X!==null?Ft.get(X).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(v,N,Z,G,W,pt,Tt,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0&&(vt=vt[Tt],Array.isArray(vt)&&(vt=vt[0])),vt)if(N>=0&&N<=v.width-G&&Z>=0&&Z<=v.height-W){gt.bindFramebuffer(B.FRAMEBUFFER,vt);let It=v.textures[ft],Jt=It.format,le=It.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let Ct=fd(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),B.readPixels(N,Z,G,W,at.convert(Jt),at.convert(le),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ye=X!==null?Ft.get(X).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,Ye);let Pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Sp(B,Pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ce),B.deleteSync(Pe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,Z=0){let G=Math.pow(2,-Z),W=Math.floor(v.image.width*G),pt=Math.floor(v.image.height*G),Tt=N!==null?N.x:0,ft=N!==null?N.y:0;qt.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Tt,ft,W,pt),gt.unbindTexture()},this.copyTextureToTexture=function(v,N,Z=null,G=null,W=0,pt=0){let Tt,ft,vt,It,Jt,le,Ct,ce,Ye,Pe=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(Z!==null)Tt=Z.max.x-Z.min.x,ft=Z.max.y-Z.min.y,vt=Z.isBox3?Z.max.z-Z.min.z:1,It=Z.min.x,Jt=Z.min.y,le=Z.isBox3?Z.min.z:0;else{let pe=Math.pow(2,-W);Tt=Math.floor(Pe.width*pe),ft=Math.floor(Pe.height*pe),v.isDataArrayTexture?vt=Pe.depth:v.isData3DTexture?vt=Math.floor(Pe.depth*pe):vt=1,It=0,Jt=0,le=0}G!==null?(Ct=G.x,ce=G.y,Ye=G.z):(Ct=0,ce=0,Ye=0);let Re=at.convert(N.format),yn=at.convert(N.type),Pt;N.isData3DTexture?(qt.setTexture3D(N,0),Pt=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(qt.setTexture2DArray(N,0),Pt=B.TEXTURE_2D_ARRAY):(qt.setTexture2D(N,0),Pt=B.TEXTURE_2D),gt.activeTexture(B.TEXTURE0),gt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),gt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),gt.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let En=gt.getParameter(B.UNPACK_ROW_LENGTH),_e=gt.getParameter(B.UNPACK_IMAGE_HEIGHT),Hs=gt.getParameter(B.UNPACK_SKIP_PIXELS),vn=gt.getParameter(B.UNPACK_SKIP_ROWS),Qa=gt.getParameter(B.UNPACK_SKIP_IMAGES);gt.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),gt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),gt.pixelStorei(B.UNPACK_SKIP_PIXELS,It),gt.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),gt.pixelStorei(B.UNPACK_SKIP_IMAGES,le);let fs=v.isDataArrayTexture||v.isData3DTexture,Gs=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let pe=Ft.get(v),pn=Ft.get(N),li=Ft.get(pe.__renderTarget),ke=Ft.get(pn.__renderTarget);gt.bindFramebuffer(B.READ_FRAMEBUFFER,li.__webglFramebuffer),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let an=0;an<vt;an++)fs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(v).__webglTexture,W,le+an),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(N).__webglTexture,pt,Ye+an)),B.blitFramebuffer(It,Jt,It+Tt,Jt+ft,Ct,ce,Ct+Tt,ce+ft,B.DEPTH_BUFFER_BIT,B.NEAREST);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||Ft.has(v)){let pe=Ft.get(v),pn=Ft.get(N);gt.bindFramebuffer(B.READ_FRAMEBUFFER,I),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,E);for(let li=0;li<vt;li++)fs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pe.__webglTexture,W,le+li):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,W),Gs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,pt,Ye+li):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,pt),W!==0?B.blitFramebuffer(It,Jt,It+Tt,Jt+ft,Ct,ce,Ct+Tt,ce+ft,B.COLOR_BUFFER_BIT,B.NEAREST):Gs?B.copyTexSubImage3D(Pt,pt,Ct,ce,Ye+li,It,Jt,Tt,ft):B.copyTexSubImage2D(Pt,pt,Ct,ce,It,Jt,Tt,ft);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Gs?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(Pt,pt,Ct,ce,Ye,Tt,ft,vt,Re,yn,Pe.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,pt,Ct,ce,Ye,Tt,ft,vt,Re,Pe.data):B.texSubImage3D(Pt,pt,Ct,ce,Ye,Tt,ft,vt,Re,yn,Pe):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pt,Ct,ce,Tt,ft,Re,yn,Pe.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pt,Ct,ce,Pe.width,Pe.height,Re,Pe.data):B.texSubImage2D(B.TEXTURE_2D,pt,Ct,ce,Tt,ft,Re,yn,Pe);gt.pixelStorei(B.UNPACK_ROW_LENGTH,En),gt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e),gt.pixelStorei(B.UNPACK_SKIP_PIXELS,Hs),gt.pixelStorei(B.UNPACK_SKIP_ROWS,vn),gt.pixelStorei(B.UNPACK_SKIP_IMAGES,Qa),pt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&B.generateMipmap(Pt),gt.unbindTexture()},this.initRenderTarget=function(v){Ft.get(v).__webglFramebuffer===void 0&&qt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?qt.setTextureCube(v,0):v.isData3DTexture?qt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?qt.setTexture2DArray(v,0):qt.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){C=0,D=0,X=null,gt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function Jc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},l=n[0].morphTargetsRelative,c=new bn;c.morphTargetsRelative=l;let a=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,g,h),a+=g}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=hm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=hm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function hm(n){let t,e,i,s=-1,r=0;for(let a=0;a<n.length;++a){let h=n[a];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),l=new Un(o,e,i),c=0;for(let a=0;a<n.length;++a){let h=n[a];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);l.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(l.gpuType=s),l}var ot=Math.random;function de(n,t,e,{repeat:i=[1,1],srgb:s=!0,aniso:r=4}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let l=o.getContext("2d");e(l,n,t);let c=new Zs(o);return c.wrapS=c.wrapT=kr,c.repeat.set(i[0],i[1]),s&&(c.colorSpace=An),c.anisotropy=r,c}function We(n,t,e,i){let s=n.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){if(r[o+3]===0)continue;let l=(ot()-.5)*i;r[o]+=l,r[o+1]+=l,r[o+2]+=l}n.putImageData(s,0,0)}function Bn(n,t,e,i,s,r=.12,o=.25){for(let l=0;l<i;l++){let c=ot()*t,a=ot()*e,h=(.03+ot()*o)*Math.max(t,e),u=n.createRadialGradient(c,a,0,c,a,h);u.addColorStop(0,`rgba(${s},${ot()*r})`),u.addColorStop(1,`rgba(${s},0)`),n.fillStyle=u,n.fillRect(c-h,a-h,h*2,h*2)}}var Qu=()=>de(256,512,(n,t,e)=>{n.fillStyle="#cbc4ae",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#6f9184",n.fillRect(0,i,t,e-i),n.fillStyle="#41544c",n.fillRect(0,i-6,t,7),n.fillStyle="#2e2a24",n.fillRect(0,e-14,t,14),Bn(n,t,e,18,"60,50,30",.1,.3);let s=n.createLinearGradient(0,e-90,0,e);s.addColorStop(0,"rgba(30,25,15,0)"),s.addColorStop(1,"rgba(30,25,15,.35)"),n.fillStyle=s,n.fillRect(0,e-90,t,90);for(let r=0;r<6;r++){n.strokeStyle=`rgba(40,30,20,${ot()*.15})`,n.lineWidth=1,n.beginPath();let o=ot()*t;n.moveTo(o,ot()*i),n.lineTo(o+(ot()-.5)*30,i+ot()*40),n.stroke()}We(n,t,e,18)}),$c=()=>de(256,256,(n,t,e)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=140+ot()*14;n.fillStyle=`rgb(${r-4},${r},${r-10})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1600;i++){let s=ot()*2.2;n.fillStyle=ot()<.5?"rgba(70,72,66,.55)":"rgba(220,220,210,.45)",n.fillRect(ot()*t,ot()*e,s,s)}Bn(n,t,e,10,"40,35,25",.18,.2);for(let i=0;i<8;i++){n.strokeStyle="rgba(20,20,20,.15)",n.lineWidth=1+ot()*2,n.beginPath();let s=ot()*t,r=ot()*e;n.moveTo(s,r),n.lineTo(s+(ot()-.5)*60,r+(ot()-.5)*20),n.stroke()}n.strokeStyle="rgba(30,30,28,.6)",n.lineWidth=2,n.strokeRect(1,1,127,127),n.strokeRect(129,1,126,127),n.strokeRect(1,129,127,126),n.strokeRect(129,129,126,126),We(n,t,e,14)}),ju=()=>de(256,256,(n,t,e)=>{let i=e/4;for(let s=0;s<4;s++){let r=ot()*t,o=95+ot()*30;n.fillStyle=`rgb(${o+30},${o},${o-35})`,n.fillRect(0,s*i,t,i);for(let l=0;l<22;l++){n.strokeStyle=`rgba(50,30,10,${.08+ot()*.12})`,n.lineWidth=1,n.beginPath();let c=s*i+ot()*i;n.moveTo(0,c),n.bezierCurveTo(t*.3,c+(ot()-.5)*6,t*.6,c+(ot()-.5)*6,t,c+(ot()-.5)*4),n.stroke()}n.fillStyle="rgba(25,15,5,.7)",n.fillRect(0,s*i,t,2),n.fillRect(r%t,s*i,2,i)}Bn(n,t,e,10,"20,10,0",.2,.2),We(n,t,e,16)}),tf=()=>de(256,256,(n,t,e)=>{n.fillStyle="#8f9590",n.fillRect(0,0,t,e);let i=8,s=t/i;for(let r=0;r<i;r++)for(let o=0;o<i;o++){let l=200+ot()*25;n.fillStyle=`rgb(${l},${l+3},${l+2})`,n.fillRect(o*s+1.5,r*s+1.5,s-3,s-3)}Bn(n,t,e,14,"90,80,40",.22,.18),We(n,t,e,10)}),Kc=()=>de(256,256,(n,t,e)=>{n.fillStyle="#b9b6aa",n.fillRect(0,0,t,e);for(let i=0;i<2600;i++)n.fillStyle="rgba(60,58,50,.5)",n.fillRect(ot()*t,ot()*e,1.4,1.4);Bn(n,t,e,5,"110,80,30",.25,.2),n.strokeStyle="#6d6a60",n.lineWidth=3,n.strokeRect(0,0,t/2,e/2),n.strokeRect(t/2,0,t/2,e/2),n.strokeRect(0,e/2,t/2,e/2),n.strokeRect(t/2,e/2,t/2,e/2),We(n,t,e,10)}),um=()=>de(256,128,(n,t,e)=>{n.fillStyle="#b8935f",n.fillRect(0,0,t,e);for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,55,20,${.08+ot()*.15})`,n.lineWidth=1+ot(),n.beginPath();let s=ot()*e;n.moveTo(0,s),n.bezierCurveTo(t*.3,s+(ot()-.5)*10,t*.7,s+(ot()-.5)*10,t,s+(ot()-.5)*8),n.stroke()}for(let i=0;i<5;i++){n.strokeStyle=`rgba(30,30,60,${.2+ot()*.3})`,n.lineWidth=1,n.beginPath();let s=ot()*t,r=ot()*e;n.moveTo(s,r),n.lineTo(s+ot()*30,r+(ot()-.5)*8),n.stroke()}We(n,t,e,12)}),As=(n="#7c8288")=>de(128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<60;s++){t.strokeStyle=`rgba(255,255,255,${ot()*.06})`,t.beginPath();let r=ot()*i;t.moveTo(0,r),t.lineTo(e,r+(ot()-.5)*3),t.stroke()}Bn(t,e,i,6,"60,40,20",.15,.3),We(t,e,i,14)}),fm=()=>de(128,256,(n,t,e)=>{n.fillStyle="#5d6a73",n.fillRect(0,0,t,e),n.strokeStyle="#2f363b",n.lineWidth=3,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#262c30";for(let i=0;i<6;i++)n.fillRect(28,20+i*9,t-56,4);n.fillStyle="#9aa3a8",n.fillRect(t-28,e*.48,8,34),n.fillStyle="#ddd",n.fillRect(30,e*.36,40,16),n.fillStyle="#333",n.font="bold 12px sans-serif",n.fillText(String(10+(ot()*40|0)),36,e*.36+12),Bn(n,t,e,8,"80,50,20",.2,.25),We(n,t,e,16)}),dm=n=>de(1024,256,(t,e,i)=>{t.fillStyle="#20382c",t.fillRect(0,0,e,i);for(let s=0;s<30;s++)t.fillStyle=`rgba(200,220,210,${ot()*.05})`,t.beginPath(),t.ellipse(ot()*e,ot()*i,60+ot()*120,10+ot()*25,ot()-.5,0,7),t.fill();t.fillStyle="rgba(235,240,230,.92)",t.font='bold 54px "Nanum Pen Script", "Comic Sans MS", cursive, sans-serif',t.textAlign="center",t.fillText(n,e/2,i/2+18),t.font="30px sans-serif",t.fillStyle="rgba(235,240,230,.5)",t.fillText("\uC8FC\uBC88: ____   \uACB0\uC11D: 31\uBA85",e*.82,i-28),We(t,e,i,10)},{aniso:8}),pm=()=>de(256,192,(n,t,e)=>{n.fillStyle="#a07a4c",n.fillRect(0,0,t,e);for(let s=0;s<1500;s++)n.fillStyle=ot()<.5?"rgba(70,45,20,.5)":"rgba(200,160,110,.4)",n.fillRect(ot()*t,ot()*e,2,2);let i=[["\uAC00\uC815\uD1B5\uC2E0\uBB38","#eee"],["\uAE09\uC2DD \uC2DD\uB2E8\uD45C","#f4f0d0"],["\uC2E4\uC885","#ddd"],["\uAD50\uCE59 \uC81C1\uC870","#e8e8e8"]];for(let[s,r]of i){let o=10+ot()*(t-90),l=10+ot()*(e-80);n.save(),n.translate(o,l),n.rotate((ot()-.5)*.15),n.fillStyle=r,n.fillRect(0,0,70,60),n.fillStyle="#333",n.font="11px sans-serif",n.fillText(s,6,16);for(let c=0;c<4;c++)n.fillRect(6,24+c*8,40+ot()*18,2);n.fillStyle="#c33",n.beginPath(),n.arc(35,3,3,0,7),n.fill(),n.restore()}We(n,t,e,10)}),Qc=(n,t="#e8e4d8",e="#1d2a4a")=>de(256,96,(i,s,r)=>{i.fillStyle=t,i.fillRect(0,0,s,r),i.strokeStyle="#3a3a3a",i.lineWidth=6,i.strokeRect(3,3,s-6,r-6),i.fillStyle=e,i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+2),Bn(i,s,r,4,"60,50,20",.2,.4),We(i,s,r,10)}),ef=()=>de(256,96,(n,t,e)=>{n.fillStyle="#19b35a",n.fillRect(0,0,t,e),n.fillStyle="#fff",n.fillRect(16,16,46,64),n.fillStyle="#19b35a",n.fillRect(26,22,30,56),n.fillStyle="#fff",n.beginPath(),n.arc(90,26,9,0,7),n.fill(),n.lineWidth=8,n.strokeStyle="#fff",n.lineCap="round",n.beginPath(),n.moveTo(88,38),n.lineTo(80,60),n.lineTo(66,76),n.moveTo(80,60),n.lineTo(96,76),n.moveTo(86,44),n.lineTo(72,52),n.moveTo(88,44),n.lineTo(104,50),n.stroke(),n.font="bold 34px sans-serif",n.textBaseline="middle",n.fillText("\uBE44\uC0C1\uAD6C",120,50)}),jc=()=>de(128,160,(n,t,e)=>{n.fillStyle="#e6dfc8",n.fillRect(0,0,t,e),n.strokeStyle="rgba(90,120,170,.35)";for(let i=24;i<e;i+=12)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.strokeStyle="rgba(40,40,60,.75)",n.lineWidth=1.5;for(let i=34;i<e-20;i+=12){n.beginPath(),n.moveTo(10,i);let s=10;for(;s<t-14-ot()*30;)s+=4+ot()*6,n.lineTo(s,i+(ot()-.5)*2);n.stroke()}Bn(n,t,e,4,"120,90,40",.25,.3),We(n,t,e,12)}),mm=()=>de(64,128,(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="rgba(0,0,0,.25)",n.fillRect(0,10,t,4),n.fillRect(0,e-20,t,4),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(8,30,t-16,40),We(n,t,e,20)});var nf=n=>de(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2,r=2,o=(l,c,a,h,u)=>{let f=t.createRadialGradient(l,c,0,l,c,Math.max(a,h));f.addColorStop(0,u),f.addColorStop(1,"rgba(0,0,0,0)"),t.save(),t.translate(l,c),t.scale(a/Math.max(a,h),h/Math.max(a,h)),t.translate(-l,-c),t.fillStyle=f,t.beginPath(),t.arc(l,c,Math.max(a,h),0,7),t.fill(),t.restore()};for(let l of[-1,1]){let c=s+l*44*r,a=112*r;o(c,a+4,34*r,22*r,n?"rgba(40,10,10,.55)":"rgba(90,50,40,.28)"),o(s+l*52*r,150*r,26*r,16*r,n?"rgba(160,40,40,.22)":"rgba(200,110,100,.12)"),t.strokeStyle="rgba(25,16,10,.9)",t.lineCap="round";for(let y=0;y<9;y++){t.lineWidth=(6-Math.abs(y-3)*.6)*r*.6,t.beginPath();let p=s+l*(20+y*5)*r;t.moveTo(p,(88-(n?10:0)+Math.abs(y-3)*.6)*r),t.lineTo(p+l*6*r,(86-(n?12:0)+Math.abs(y-3)*.6)*r),t.stroke()}let h=(n?17:19)*r,u=(n?14:7.5)*r;t.fillStyle=n?"#efe9dc":"#e9e2d6",t.beginPath(),t.ellipse(c,a,h,u,0,0,7),t.fill(),t.save(),t.beginPath(),t.ellipse(c,a,h,u,0,0,7),t.clip();let f=c+(n?0:l*-3*r),d=(n?5:8.5)*r,g=t.createRadialGradient(f,a,0,f,a,d);g.addColorStop(0,"#1a0f08"),g.addColorStop(.45,"#3d2617"),g.addColorStop(1,"#22150c"),t.fillStyle=g,t.beginPath(),t.arc(f,a,d,0,7),t.fill(),t.fillStyle="#030303",t.beginPath(),t.arc(f,a,(n?1.8:3.8)*r,0,7),t.fill(),n||(t.fillStyle="rgba(255,255,255,.8)",t.beginPath(),t.arc(f+3*r,a-3*r,1.6*r,0,7),t.fill()),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(c-h,a-u,h*2,u*.5),t.restore(),t.strokeStyle="#140c07",t.lineWidth=3*r,t.beginPath(),t.ellipse(c,a,h,u,0,Math.PI*1.02,Math.PI*1.98),t.stroke(),t.strokeStyle="rgba(70,40,30,.45)",t.lineWidth=1.5*r,t.beginPath(),t.ellipse(c,a-5*r,h*.95,u+3*r,0,Math.PI*1.1,Math.PI*1.9),t.stroke(),t.strokeStyle="rgba(80,45,35,.35)",t.lineWidth=1.2*r,t.beginPath(),t.ellipse(c,a+1*r,h*.95,u,0,.15,Math.PI-.15),t.stroke()}o(s,140*r,12*r,26*r,"rgba(120,70,55,.15)"),t.strokeStyle="rgba(110,60,45,.45)",t.lineWidth=2*r,t.beginPath(),t.moveTo(s-6*r,118*r),t.quadraticCurveTo(s-9*r,140*r,s-12*r,152*r),t.stroke(),t.fillStyle="rgba(70,35,28,.55)";for(let l of[-1,1])t.beginPath(),t.ellipse(s+l*7*r,156*r,4*r,2.4*r,l*.3,0,7),t.fill();t.strokeStyle="rgba(110,60,45,.35)",t.lineWidth=1.5*r,t.beginPath(),t.moveTo(s-14*r,154*r),t.quadraticCurveTo(s,162*r,s+14*r,154*r),t.stroke(),t.strokeStyle="rgba(110,60,45,.2)",t.lineWidth=1.5*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*3*r,163*r),t.lineTo(s+l*4*r,176*r),t.stroke();if(!n)t.fillStyle="#a5625a",t.beginPath(),t.moveTo(s-22*r,184*r),t.quadraticCurveTo(s-8*r,177*r,s,180*r),t.quadraticCurveTo(s+8*r,177*r,s+22*r,184*r),t.quadraticCurveTo(s,186*r,s-22*r,184*r),t.fill(),t.fillStyle="#b4706a",t.beginPath(),t.moveTo(s-20*r,185*r),t.quadraticCurveTo(s,198*r,s+20*r,185*r),t.fill(),t.strokeStyle="#5a2a26",t.lineWidth=1.8*r,t.beginPath(),t.moveTo(s-22*r,184.5*r),t.quadraticCurveTo(s,187*r,s+22*r,184.5*r),t.stroke(),o(s,205*r,18*r,7*r,"rgba(90,50,40,.2)");else{t.fillStyle="#120303",t.beginPath(),t.moveTo(s-84*r,156*r),t.quadraticCurveTo(s,262*r,s+84*r,156*r),t.quadraticCurveTo(s,196*r,s-84*r,156*r),t.fill();for(let l=-7;l<=7;l++){let c=s+l*10.5*r,a=(172+(1-Math.abs(l)/8)*16)*r,h=t.createLinearGradient(0,a,0,a+13*r);h.addColorStop(0,"#e9dfc6"),h.addColorStop(1,"#b9a98a"),t.fillStyle=h,t.beginPath(),t.roundRect?t.roundRect(c-4.5*r,a,9*r,13*r,2*r):t.rect(c-4.5*r,a,9*r,13*r),t.fill()}for(let l=-6;l<=6;l++){let c=s+l*10.5*r,a=(205+(1-Math.abs(l)/7)*18)*r;t.fillStyle="#cbbd9e",t.fillRect(c-4*r,a,8*r,9*r)}t.strokeStyle="#6a1414",t.lineWidth=3*r,t.beginPath(),t.moveTo(s-86*r,156*r),t.quadraticCurveTo(s,264*r,s+86*r,156*r),t.stroke(),t.strokeStyle="rgba(60,10,10,.5)",t.lineWidth=2*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*86*r,156*r),t.lineTo(s+l*96*r,146*r),t.stroke()}},{aniso:8}),gm=()=>de(256,256,(n,t,e)=>{n.fillStyle="#16171a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=3)for(let s=0;s<t;s+=4)n.fillStyle=`rgba(255,255,255,${.02+ot()*.03})`,n.fillRect(s,i,2,2);n.fillStyle="#eef0f2",n.beginPath(),n.moveTo(t*.22,0),n.lineTo(t/2,e*.55),n.lineTo(t*.78,0),n.fill(),n.fillStyle="#3b4250",n.beginPath(),n.moveTo(t/2-10,0),n.lineTo(t/2+10,0),n.lineTo(t/2+14,e*.5),n.lineTo(t/2,e*.56),n.lineTo(t/2-14,e*.5),n.fill(),n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=2;for(let i=0;i<8;i++)n.beginPath(),n.moveTo(t/2-12,i*18),n.lineTo(t/2+12,i*18+10),n.stroke();n.strokeStyle="#e8e8e8",n.lineWidth=7,n.beginPath(),n.moveTo(t*.2,0),n.lineTo(t/2,e*.58),n.lineTo(t*.8,0),n.stroke(),n.strokeStyle="#16171a",n.lineWidth=6,n.beginPath(),n.moveTo(t*.16,0),n.lineTo(t/2,e*.63),n.lineTo(t*.84,0),n.stroke(),n.strokeStyle="#d8d8d8",n.lineWidth=4,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t/2,e*.67),n.lineTo(t*.88,0),n.stroke(),n.fillStyle="rgba(255,255,255,.08)";for(let i=0;i<t;i+=6)n.fillRect(i,e-18,3,18)}),xm=()=>de(64,64,(n,t,e)=>{n.fillStyle="#16171a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=3)for(let s=0;s<t;s+=4)n.fillStyle=`rgba(255,255,255,${.02+ot()*.03})`,n.fillRect(s,i,2,2)}),sf=()=>de(64,64,(n,t,e)=>{n.fillStyle="#4a4d52",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,30,35,.5)",n.lineWidth=1;for(let i=0;i<t;i+=6)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();We(n,t,e,16)},{repeat:[3,6]});var _m=()=>de(512,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.75)";let i=t*(.3+ot()*.4),s=e*.5;for(let r=0;r<18;r++){n.lineWidth=1+ot()*2,n.beginPath();let o=i,l=s;n.moveTo(o,l);let c=ot()*7;for(let a=0;a<6;a++)o+=Math.cos(c+(ot()-.5))*40,l+=Math.sin(c+(ot()-.5))*30,n.lineTo(o,l);n.stroke()}for(let r=20;r<90;r+=25){n.lineWidth=1,n.beginPath();for(let o=0;o<7;o+=.6)n.lineTo(i+Math.cos(o)*r*(.8+ot()*.4),s+Math.sin(o)*r*.6);n.closePath(),n.stroke()}});var Sa=(n=0,t=!1)=>de(256,400,(e,i,s)=>{e.clearRect(0,0,i,s);let r=n*9301+49297,o=()=>(r=(r*9301+49297)%233280,r/233280),l=t?{top:"#1b1b20",sh:"#f0f0f0",pants:"#5a5d63",skin:"#e8b896"}:[{top:"#2a3f7a",sh:"#f2f2f2",pants:"#2a2a40",skin:"#e9b593"},{top:"#7a1f2a",sh:"#f2f2f2",pants:"#3a2a20",skin:"#e3a985"},{top:"#2f5a3a",sh:"#efefe6",pants:"#33363a",skin:"#efc3a2"}][n%3],c=(S,A,w=60,x=2)=>{e.strokeStyle=A,e.lineCap="round";let b=S.map(I=>I[0]),U=S.map(I=>I[1]),P=Math.min(...b),O=Math.max(...b),z=Math.min(...U),q=Math.max(...U);e.save(),e.beginPath(),S.forEach(([I,E],C)=>C?e.lineTo(I,E):e.moveTo(I,E)),e.closePath(),e.clip();for(let I=0;I<w;I++){e.globalAlpha=.25+o()*.4,e.lineWidth=x*(.6+o()),e.beginPath();let E=z+o()*(q-z),C=P-10;e.moveTo(C,E),e.lineTo(O+10,E+(o()-.3)*30),e.stroke()}e.restore(),e.globalAlpha=1},a=(S,A="#151010",w=2.2)=>{for(let x=0;x<2;x++)e.strokeStyle=A,e.globalAlpha=.7,e.lineWidth=w,e.beginPath(),S.forEach(([b,U],P)=>{let O=()=>(o()-.5)*2.5;P?e.lineTo(b+O(),U+O()):e.moveTo(b+O(),U+O())}),e.closePath(),e.stroke();e.globalAlpha=1},h=S=>S.map(([A,w])=>[i/2-A,w]),u=S=>S.map(([A,w])=>[i/2+A,w]),f=o()*30-15,d=120+o()*80,g=20+o()*40,y=60,p=y+40+g;for(let S of[h,u]){let A=S([[8,p+110],[26,p+110],[30+f*.3,s-14],[16,s-12]]);c(A,l.pants,40),a(A)}let m=[[i/2-38,p],[i/2+38,p],[i/2+34,p+115],[i/2-34,p+115]];c(m,l.sh,40),c(t?[[i/2-38,p],[i/2-6,p+60],[i/2+6,p+60],[i/2+38,p],[i/2+34,p+105],[i/2-34,p+105]]:m,l.top,70),a(m),t&&(e.strokeStyle="#eee",e.lineWidth=3,e.beginPath(),e.moveTo(i/2-34,p),e.lineTo(i/2,p+64),e.lineTo(i/2+34,p),e.stroke(),c([[i/2-5,p],[i/2+5,p],[i/2+6,p+55],[i/2-6,p+55]],"#3b4250",20));for(let S of[-1,1]){let A=i/2+S*38,w=[[A,p+4],[A+S*14,p+4],[A+S*(30+f*S),p+d],[A+S*(16+f*S),p+d+6]];c(w,l.sh,30),a(w);let x=A+S*(24+f*S),b=p+d+8;e.strokeStyle="#2a1a14",e.lineWidth=2;for(let U=0;U<5;U++)e.beginPath(),e.moveTo(x,b),e.lineTo(x+S*(U-2)*6,b+18+o()*16),e.stroke()}let M=[[i/2-7,y+30],[i/2+7,y+30],[i/2+7,p],[i/2-7,p]];c(M,l.skin,20),a(M,"#2a1a14",1.5);let R=[];for(let S=0;S<6.28;S+=.3)R.push([i/2+Math.cos(S)*34,y+Math.sin(S)*40]);c(R,l.skin,50),a(R),e.fillStyle="#120a0a";for(let S=0;S<40;S++)e.globalAlpha=.5,e.fillRect(i/2-36+o()*72,y-44+o()*26,2,10+o()*14);e.globalAlpha=1;for(let S of[-1,1])e.fillStyle="#050505",e.beginPath(),e.ellipse(i/2+S*13,y-2,8,11,0,0,7),e.fill(),e.strokeStyle="#7a0a0a",e.lineWidth=2,e.beginPath(),e.moveTo(i/2+S*13,y+8),e.lineTo(i/2+S*14,y+26+o()*30),e.stroke();e.fillStyle="#120505",e.beginPath(),e.moveTo(i/2-22,y+20),e.quadraticCurveTo(i/2,y+42,i/2+22,y+20),e.quadraticCurveTo(i/2,y+28,i/2-22,y+20),e.fill(),e.fillStyle="rgba(120,10,10,.75)",e.font='bold 18px "Nanum Pen Script", cursive, sans-serif',e.save(),e.translate(14,s-30),e.rotate(-.08),e.fillText(t?"\uB108":["\uC0B4\uB824\uC918","\uC5EC\uAE30 \uC788\uC5B4","\uC870\uC6A9\uD788 \uD574"][n%3],0,0),e.restore()});var rf=n=>de(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2;for(let r of[-1,1])t.fillStyle="#151515",t.beginPath(),t.ellipse(s+r*70,230,22,n?34:28,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(s+r*70+7,220,7,0,7),t.fill(),t.strokeStyle="#151515",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(s+r*48,182),t.quadraticCurveTo(s+r*70,172,s+r*94,184),t.stroke(),t.fillStyle="rgba(240,110,120,.45)",t.beginPath(),t.ellipse(s+r*95,290,34,18,0,0,7),t.fill();if(t.strokeStyle="#a0504a",t.lineWidth=4,t.beginPath(),t.moveTo(s-6,270),t.lineTo(s,282),t.stroke(),!n)t.strokeStyle="#7a2020",t.lineWidth=7,t.beginPath(),t.arc(s,300,40,.25,Math.PI-.25),t.stroke();else{t.fillStyle="#2a0505",t.beginPath(),t.moveTo(s-150,280),t.quadraticCurveTo(s,470,s+150,280),t.quadraticCurveTo(s,350,s-150,280),t.fill(),t.fillStyle="#efe6d0";for(let r=-9;r<=9;r++)t.beginPath(),t.moveTo(s+r*14-6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14+6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14,322+(1-Math.abs(r)/10)*30),t.fill()}},{aniso:8}),ym=()=>de(512,512,(n,t,e)=>{n.fillStyle="#060607",n.fillRect(0,0,t,e);let i=t/2;for(let s of[-1,1]){let r=n.createRadialGradient(i+s*80,210,0,i+s*80,210,60);r.addColorStop(0,"#fffef6"),r.addColorStop(.75,"#e8e4d8"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.beginPath(),n.ellipse(i+s*80,210,58,64,0,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(i+s*80+s*-6,214,9,0,7),n.fill()}n.fillStyle="#e8e2d2",n.beginPath(),n.moveTo(i-190,300),n.quadraticCurveTo(i,440,i+190,300),n.quadraticCurveTo(i,360,i-190,300),n.fill(),n.strokeStyle="#060607",n.lineWidth=4;for(let s=-12;s<=12;s++)n.beginPath(),n.moveTo(i+s*15,320+(1-Math.abs(s)/13)*25),n.lineTo(i+s*15,350+(1-Math.abs(s)/13)*45),n.stroke()}),of=(n=0)=>de(256,128,(t,e,i)=>{t.fillStyle=["#c8651e","#e9e6dc","#d8d1b0"][n%3],t.fillRect(0,0,e,i),t.strokeStyle="rgba(20,10,5,.7)",t.lineWidth=3,t.beginPath(),t.moveTo(0,i/2),t.lineTo(e,i/2),t.moveTo(e/4,0),t.lineTo(e/4,i),t.moveTo(e*3/4,0),t.lineTo(e*3/4,i),t.stroke();let s=e/2;t.fillStyle="#100808";for(let r of[-1,1])t.beginPath(),t.ellipse(s+r*14,50,6,9,0,0,7),t.fill();t.beginPath(),t.ellipse(s,80,12,18,0,0,7),t.fill(),t.fillStyle="rgba(20,10,5,.8)";for(let r=0;r<30;r++)t.fillRect(s-24+ot()*48,18+ot()*10,2,8);We(t,e,i,16)});var vm=()=>de(256,256,(n,t,e)=>{n.fillStyle="#d9d4c8",n.fillRect(0,0,t,e);for(let i=0;i<160;i++){n.strokeStyle=`rgba(30,30,35,${.08+ot()*.2})`,n.lineWidth=1,n.beginPath();let s=ot()*t,r=ot()*e;n.moveTo(s,r),n.lineTo(s+18,r+24),n.stroke()}Bn(n,t,e,8,"60,50,40",.2,.2),We(n,t,e,14)}),Mm=()=>de(256,256,(n,t,e)=>{for(let i=0;i<8;i++){let s=150+ot()*30;n.fillStyle=`rgb(${s+40},${s+10},${s-40})`,n.fillRect(0,i*32,t,32),n.fillStyle="rgba(60,30,0,.4)",n.fillRect(0,i*32,t,1),n.fillRect(ot()*t,i*32,1,32)}for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,50,10,${ot()*.15})`,n.beginPath();let s=ot()*e;n.moveTo(0,s),n.lineTo(t,s+(ot()-.5)*4),n.stroke()}We(n,t,e,12)}),to=()=>de(128,256,(n,t,e)=>{n.fillStyle="#1d2a4f",n.fillRect(0,0,t,e),n.fillStyle="#e8e8e8",n.fillRect(8,0,6,e),n.fillRect(t-14,0,6,e),We(n,t,e,10)}),Sm=()=>de(512,512,(n,t,e)=>{n.fillStyle="#e4dfcc",n.fillRect(0,0,t,e);for(let i=0;i<260;i++){n.strokeStyle=`rgba(35,40,30,${.06+ot()*.16})`,n.lineWidth=1+ot()*1.2,n.beginPath();let s=ot()*t,r=ot()*e,o=.6+(ot()-.5)*.3;n.moveTo(s,r),n.lineTo(s+Math.cos(o)*60,r+Math.sin(o)*60),n.stroke()}for(let i=0;i<6;i++)n.strokeStyle="rgba(30,30,30,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(ot()*t,0),n.bezierCurveTo(ot()*t,e*.3,ot()*t,e*.7,ot()*t,e),n.stroke();Bn(n,t,e,8,"90,80,50",.15,.25),We(n,t,e,12)}),bm=()=>de(256,512,(n,t,e)=>{n.fillStyle="#b9bf8c",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#7f8d63",n.fillRect(0,i,t,e-i),n.fillStyle="#4f5a3c",n.fillRect(0,i-5,t,6),n.fillStyle="#2e3324",n.fillRect(0,e-14,t,14);for(let r=0;r<t;r+=16)n.fillStyle="rgba(80,90,50,.12)",n.fillRect(r,0,2,i-6);Bn(n,t,e,22,"70,60,20",.14,.3);let s=n.createLinearGradient(0,e-100,0,e);s.addColorStop(0,"rgba(30,25,10,0)"),s.addColorStop(1,"rgba(30,25,10,.4)"),n.fillStyle=s,n.fillRect(0,e-100,t,100),We(n,t,e,16)}),Tm=()=>de(256,256,(n,t,e)=>{n.fillStyle="#8c8a5a",n.fillRect(0,0,t,e);for(let i=0;i<9e3;i++){let s=100+ot()*70;n.fillStyle=`rgba(${s},${s-4},${s-50},.35)`,n.fillRect(ot()*t,ot()*e,1.5,1.5)}Bn(n,t,e,12,"50,40,20",.25,.25),We(n,t,e,10)}),Em=()=>de(128,256,(n,t,e)=>{n.fillStyle="#5a1818",n.fillRect(0,0,t,e),n.strokeStyle="#2a0a0a",n.lineWidth=4,n.strokeRect(10,10,t-20,e-20),n.strokeRect(20,30,t-40,80),n.fillStyle="#b8b0a0",n.fillRect(t-26,e*.52,10,22),n.fillStyle="#eee",n.font="bold 20px sans-serif",n.textAlign="center",n.fillText("\u25BC \uC544\uB798\uB85C",t/2,76),Bn(n,t,e,10,"20,0,0",.3,.3),We(n,t,e,14)});var ba=new k;function si(n,t,e,i,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;ba.copy(t),ba[i]=0,ba.normalize();let a=.5*o/(o+l),h=1-ba.angleTo(n)/c;return Math.sign(ba[e])===1?h*a:l/(o+l)+a+a*(1-h)}var Ki=class n extends ne{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new k,a=new k,h=new k(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,y=new k,p=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(c.fromArray(u,m),a.copy(c),a.x-=Math.sign(a.x)*p,a.y-=Math.sign(a.y)*p,a.z-=Math.sign(a.z)*p,a.normalize(),u[m+0]=h.x*Math.sign(c.x)+a.x*r,u[m+1]=h.y*Math.sign(c.y)+a.y*r,u[m+2]=h.z*Math.sign(c.z)+a.z*r,f[m+0]=a.x,f[m+1]=a.y,f[m+2]=a.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[M+0]=si(y,a,"z","y",r,i),d[M+1]=1-si(y,a,"y","z",r,e);break;case 1:y.set(-1,0,0),d[M+0]=1-si(y,a,"z","y",r,i),d[M+1]=1-si(y,a,"y","z",r,e);break;case 2:y.set(0,1,0),d[M+0]=1-si(y,a,"x","z",r,t),d[M+1]=si(y,a,"z","x",r,i);break;case 3:y.set(0,-1,0),d[M+0]=1-si(y,a,"x","z",r,t),d[M+1]=1-si(y,a,"z","x",r,i);break;case 4:y.set(0,0,1),d[M+0]=1-si(y,a,"x","y",r,t),d[M+1]=1-si(y,a,"y","x",r,e);break;case 5:y.set(0,0,-1),d[M+0]=si(y,a,"x","y",r,t),d[M+1]=1-si(y,a,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Mt=n=>new Ms(n),Am={},re=(n,t)=>Am[n]||(Am[n]=t()),bt={skin:()=>re("skin",()=>Mt({color:14202274,roughness:.5})),hair:()=>re("hair",()=>Mt({color:1511693,roughness:.55})),shirt:()=>re("shirt",()=>Mt({color:15659250,roughness:.75})),knit:()=>re("knit",()=>Mt({map:xm(),roughness:.95})),pants:()=>re("pants",()=>Mt({map:sf(),roughness:.85})),shoeBlk:()=>re("shoeBlk",()=>Mt({color:1315860,roughness:.9})),shoeWht:()=>re("shoeWht",()=>Mt({color:15328991,roughness:.7})),suit:()=>re("suit",()=>Mt({color:1776672,roughness:.8})),paleSkin:()=>re("pale",()=>Mt({color:13222840,roughness:.4})),steel:()=>re("steel",()=>Mt({color:9146518,metalness:.8,roughness:.35})),darkSteel:()=>re("dsteel",()=>Mt({map:As("#55595e"),metalness:.6,roughness:.5})),laminate:()=>re("lam",()=>Mt({map:um(),roughness:.55})),plywood:()=>re("ply",()=>Mt({color:10253382,roughness:.7})),locker:()=>re("locker",()=>Mt({map:fm(),metalness:.5,roughness:.55})),lockerSide:()=>re("lockerSide",()=>Mt({map:As("#56626b"),metalness:.5,roughness:.55})),ceramic:()=>re("cer",()=>Mt({color:15330282,roughness:.15,metalness:.05})),partition:()=>re("part",()=>Mt({color:9214624,roughness:.6})),blackTop:()=>re("btop",()=>Mt({color:1710618,roughness:.3})),whiteCab:()=>re("wcab",()=>Mt({color:14210766,roughness:.6})),shelfWood:()=>re("shelf",()=>Mt({color:7227948,roughness:.75})),piano:()=>re("piano",()=>Mt({color:723723,roughness:.15,metalness:.1})),plastic:()=>re("plas",()=>Mt({color:4020864,roughness:.5})),canvas:()=>re("canv",()=>Mt({color:15262936,roughness:.9})),monitorBlk:()=>re("mon",()=>Mt({color:1381653,roughness:.4})),doorWood:()=>re("door",()=>Mt({color:8016435,roughness:.7})),paper:()=>re("paper",()=>Mt({map:jc(),roughness:.9,side:Ve})),red:()=>re("red",()=>Mt({color:11541018,roughness:.4,metalness:.2}))},se=(n,t,e=0,i=0,s=0,r=!0)=>{let o=new Et(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=!0,o},Ht=(n,t,e,i,s,r,o)=>se(new ne(n,t,e),i,s,r,o),je=(n,t,e,i,s,r,o,l=12)=>se(new Pn(n,t,e,l),i,s,r,o),xi=(n,t,e,i,s,r)=>se(new ia(n,t,6,12),e,i,s,r);function rr(n={}){let t=new Ut,e=n.faceTex||nf(!1),i=nf(!0),s=n.hairColor?Mt({color:n.hairColor,roughness:.55}):bt.hair(),r=[],o=[],l=n.girl?re("skirt",()=>Mt({map:sf(),color:8095400,roughness:.85})):bt.pants();for(let m of[-1,1]){let M=new Ut;M.position.set(m*.1,.92,0),t.add(M),M.add(xi(n.girl?.06:.078,.3,n.girl?bt.skin():bt.pants(),0,-.22,0));let R=new Ut;R.position.set(0,-.44,0),M.add(R),R.add(xi(n.girl?.052:.07,.3,n.girl?re("sock",()=>Mt({color:15658734,roughness:.8})):bt.pants(),0,-.2,0));let S=new Ut;S.position.set(0,-.42,.04),R.add(S),S.add(Ht(.11,.035,.28,bt.shoeWht(),0,-.02,0)),S.add(Ht(.1,.07,.24,bt.shoeBlk(),0,.03,-.01)),S.add(Ht(.1,.05,.05,bt.shoeWht(),0,.01,.12)),r.push(M),o.push(R)}if(n.girl){let m=se(new Pn(.17,.27,.42,20,1,!0),l,0,.84,0);m.material.side=Ve,t.add(m)}else t.add(se(new Ki(.36,.14,.22,3,.06),bt.pants(),0,.95,0));let c=[bt.knit(),bt.knit(),bt.knit(),bt.knit(),re("vestF",()=>Mt({map:gm(),roughness:.95})),bt.knit()];t.add(se(new Ki(n.girl?.34:.38,.5,.21,4,.08),c,0,1.24,0)),t.add(se(new Ki(n.girl?.36:.4,.08,.2,3,.04),bt.shirt(),0,1.5,0));let a=[];for(let m of[-1,1]){let M=new Ut;M.position.set(m*(n.girl?.215:.235),1.47,0),M.rotation.z=m*.06,t.add(M),M.add(xi(.052,.42,bt.shirt(),0,-.26,0)),M.add(se(new xn(.045,10,8),bt.skin(),0,-.55,0)),a.push(M)}t.add(je(.05,.055,.1,bt.skin(),0,1.56,0));for(let m of[-1,1]){let M=Ht(.08,.035,.06,bt.shirt(),m*.05,1.56,.04);M.rotation.z=m*-.5,t.add(M)}let h=new Ut;h.position.set(0,1.7,0),t.add(h);let u=se(new xn(.112,24,18),bt.skin());u.scale.set(.9,1.12,1),h.add(u);let f=Mt({map:e,transparent:!0,roughness:.6,depthWrite:!1}),d=se(new xn(.1135,24,18,Math.PI/2-.95,1.9,.62,1.55),f,0,0,0,!1);d.scale.copy(u.scale),h.add(d);for(let m of[-1,1])h.add(se(new xn(.025,8,8),bt.skin(),m*.1,-.01,0));let g=n.girl?2.45:1.75,y=se(new xn(.121,28,18,Math.PI/2+1.05,Math.PI*2-2.1,0,g),s);y.scale.set(n.girl?1.02:.93,1.13,1.06),y.position.set(0,.006,-.004),h.add(y);let p=se(new xn(.1215,24,12,Math.PI/2-1.1,2.2,0,1.02),s);if(p.scale.copy(y.scale),p.position.set(0,.006,-.002),h.add(p),n.glasses){let m=re("glass",()=>Mt({color:1118481,roughness:.3,metalness:.6}));for(let M of[-1,1]){let R=se(new vs(.026,.004,6,16),m,M*.042,.015,.108,!1);h.add(R)}h.add(Ht(.03,.004,.004,m,0,.018,.112))}if(n.cast){let m=Mt({color:15921902,roughness:.9});a[0].add(xi(.07,.34,m,0,-.38,0));let M=Ht(.06,.4,.02,Mt({color:5601194,roughness:.8}),.06,1.3,.12);M.rotation.z=.6,t.add(M)}if(n.ribbon){let m=Mt({color:11540520,roughness:.5});for(let M of[-1,1]){let R=Ht(.07,.05,.02,m,M*.04,.02,-.125);R.rotation.z=M*.4,h.add(R)}}return t.userData={legs:r,knees:o,arms:a,head:h,faceMat:f,faceN:e,faceG:i,faceY:1.7},t}function af(n){let t=n.userData;for(let e of t.legs)e.rotation.x=-Math.PI/2;for(let e of t.knees)e.rotation.x=Math.PI/2;for(let e of t.arms)e.rotation.x=-.9;n.position.y-=.44}function Rm(){let n=rr({girl:!0,ribbon:!0,hairColor:854538,faceTex:rf(!1)}),t=n.userData;t.faceG=rf(!0),n.scale.setScalar(1.12);for(let e of t.arms){e.clear(),e.add(xi(.045,1.05,bt.shirt(),0,-.58,0));let i=new Ut;i.position.set(0,-1.18,0),e.add(i),i.add(Ht(.06,.08,.03,bt.skin(),0,0,0));for(let s=0;s<4;s++){i.add(Ht(.01,.09,.01,bt.skin(),-.022+s*.015,-.08,0));let r=se(new Js(.006,.09,6),re("nail",()=>Mt({color:2760736,roughness:.3})),-.022+s*.015,-.17,0);r.rotation.x=Math.PI,i.add(r)}}return t.faceY=1.7*1.12,n}function Cm(){let n=new Ut,t=re("handSkin",()=>Mt({map:vm(),color:13818548,roughness:.85})),e=se(new Ki(.85,.2,.8,4,.08),t,0,0,0);n.add(e);let i=[],s=[-.31,-.105,.105,.31],r=[.5,.62,.6,.45];for(let u=0;u<4;u++){let f=new Ut;f.position.set(s[u],0,.38),n.add(f);let d=f,g=[];for(let p=0;p<3;p++){let m=r[u]*[.45,.32,.25][p],M=.075-p*.012,R=xi(M,m,t,0,0,m/2);R.rotation.x=Math.PI/2,f.add(R);let S=new Ut;S.position.set(0,0,m+M*.6),f.add(S),g.push(f),f=S}let y=se(new ne(.09,.02,.08),re("handNail",()=>Mt({color:10132096,roughness:.4})),0,.05,-.02);f.add(y),i.push({base:d,segs:g})}let o=new Ut;o.position.set(.45,0,.02),o.rotation.y=.9,n.add(o);let l=xi(.085,.26,t,0,0,.13);l.rotation.x=Math.PI/2,o.add(l);let c=new Ut;c.position.set(0,0,.3),o.add(c);let a=xi(.07,.2,t,0,0,.1);a.rotation.x=Math.PI/2,c.add(a);let h=xi(.24,.5,t,0,.02,-.55);return h.rotation.x=Math.PI/2,n.add(h),n.scale.setScalar(1.9),n.userData={fingers:i,thumb:[o,c],skin:t,faceY:.15},n}function lf(n,t,e,i){n.userData.fingers.forEach((s,r)=>{let o=e?Math.sin(t*9+r*1.6)*.5:0;s.segs[0].rotation.x=-.15+o*.6+i*.9,s.segs[1].rotation.x=.2+Math.max(0,o)*.5+i*1.2,s.segs[2].rotation.x=.15+i*1}),n.userData.thumb[0].rotation.x=i*.8,n.userData.thumb[1].rotation.x=i*.9}function Pm(){let n=new Ut,t=re("glassM",()=>new $s({color:13625070,roughness:.05,metalness:0,transparent:!0,opacity:.35,side:Ve})),e=re("liqM",()=>Mt({color:2042436,roughness:.1,transparent:!0,opacity:.85})),i=bt.steel();for(let f=0;f<3;f++){let d=f/3*Math.PI*2,g=je(.018,.018,1.05,i,Math.cos(d)*.22,.5,Math.sin(d)*.22,8);g.rotation.set(Math.sin(d)*.25,0,-Math.cos(d)*.25),n.add(g)}let s=se(new vs(.2,.015,8,24),i,0,1,0);s.rotation.x=Math.PI/2,n.add(s),n.add(se(new xn(.17,20,14),t,0,1.15,0)),n.add(se(new xn(.15,16,12,0,Math.PI*2,Math.PI/2,Math.PI/2),Mt({color:9089240,transparent:!0,opacity:.7}),0,1.15,0)),n.add(je(.03,.03,.08,Mt({color:1911}),0,1.33,0));let r=se(new Js(.05,.22,12),new On({color:16754240,transparent:!0,opacity:.9}),0,1.48,0,!1);n.add(r);let o=se(new Js(.025,.12,10),new On({color:6990079}),0,1.43,0,!1);n.add(o);let l=new Yn(16751168,1.6,4,2);l.position.set(0,1.5,0),n.add(l);let c=se(new Pn(.33,.42,1.05,24,1,!0,.35,Math.PI*2-.7),Mt({color:15658730,roughness:.8,side:Ve}),0,1.4,0);n.add(c),n.add(se(new Pn(.36,.33,.12,24,1,!0),Mt({color:15658730,roughness:.8,side:Ve}),0,1.95,0));let a=se(new Pn(.07,.32,.55,28,1,!0),t,0,2.2,0);n.add(a),n.add(se(new Pn(.06,.27,.32,24),e,0,2.08,0)),n.add(se(new Pn(.07,.07,.25,16,1,!0),t,0,2.6,0));let h=[];for(let f of[-1,1]){let d=new Ut;d.position.set(f*.36,1.85,0),n.add(d);let g=je(.045,.045,.75,t,0,-.4,0,12);d.add(g),d.add(je(.04,.04,.35,e,0,-.62,0,10)),d.add(se(new xn(.045,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),t,0,-.77,0)),h.push(d)}let u=se(new Yi(1.1,28),Mt({color:1712694,roughness:.05,metalness:.2,transparent:!0,opacity:.9,depthWrite:!1}),0,.006,0,!1);return u.rotation.x=-Math.PI/2,n.add(u),n.userData={flame:r,inner:o,light:l,arms:h,faceY:2.2},n}function Im(){let n=new Ut,t=re("track",()=>Mt({map:to(),roughness:.8})),e=[];for(let o of[-1,1]){let l=new Ut;l.position.set(o*.13,1.15,0),n.add(l),l.add(xi(.08,.95,t,0,-.52,0)),l.add(Ht(.12,.08,.32,bt.shoeWht(),0,-1.1,.06)),e.push(l)}n.add(se(new Ki(.52,.8,.28,4,.1),t,0,1.55,0));let i=[];for(let o of[-1,1]){let l=new Ut;l.position.set(o*.3,1.88,0),n.add(l),l.add(xi(.065,1.05,t,0,-.58,0)),l.add(se(new Ki(.13,.18,.06,2,.02),bt.skin(),0,-1.2,0)),i.push(l)}n.add(je(.05,.06,.12,bt.skin(),0,2,0));let s=new Ut;s.position.set(0,2.17,0),n.add(s),s.add(se(new xn(.13,24,18),Mt({color:657931,roughness:.8})));let r=se(new xn(.1315,24,18,Math.PI/2-.95,1.9,.6,1.6),new On({map:ym(),transparent:!0}),0,0,0,!1);return s.add(r),s.add(Ht(.05,.025,.05,Mt({color:13637656,roughness:.3}),0,-.05,.14)),n.userData={legs:e,arms:i,head:s,faceY:2.17},n}function Lm(n){let t=new Ut,e=se(new xn(.24,24,16),Mt({map:of(n),roughness:.6}),0,.24,0);return t.add(e),t.userData={ball:e,faceY:.24},t}function cf(){let n=new Ut;n.add(Ht(1.8,1.05,.04,Mt({color:15658734,roughness:.3,transparent:!0,opacity:.85}),0,3-.6,0)),n.add(Ht(.6,.45,.045,Mt({color:16777215,roughness:.3}),0,2.35,.005));let t=se(new vs(.23,.012,8,24),Mt({color:13783066,metalness:.5,roughness:.4}),0,2.05,.28);return t.rotation.x=Math.PI/2,n.add(t),n}function Dm(){let n=new Ut;n.add(Ht(.9,.6,.6,Mt({map:As("#555c62"),metalness:.6,roughness:.5,wireframe:!1}),0,.5,0));for(let t=0;t<6;t++)n.add(se(new xn(.12,14,10),Mt({map:of(t),roughness:.6}),-.3+t%3*.3,.88,-.12+Math.floor(t/3)*.24));return n}function Nm(){let n=new Ut;n.add(Ht(.6,.4,.45,Mt({color:10254924,roughness:.9}),0,.2,0));let t=Ht(.5,.08,.38,re("track",()=>Mt({map:to(),roughness:.8})),0,.42,0);return t.rotation.y=.2,n.add(t),n}function th(){let n=new Ut,t=je(.014,.014,1.2,Mt({color:9071162,roughness:.7}),0,.03,0);return t.rotation.z=Math.PI/2,n.add(t),n.add(Ht(.06,.1,.32,Mt({color:12032602,roughness:.95}),.62,.05,0)),n}function Rs(n,t){let e=n.userData;e.faceMat.map=t?e.faceG:e.faceN,e.faceMat.needsUpdate=!0}function eh(n,t,e,i=.5){let s=n.userData;if(!s.legs)return;let r=Math.sin(t*e)*i;s.legs[0].rotation.x=r,s.legs[1].rotation.x=-r,s.arms&&(s.arms[0].rotation.x=-r*.3,s.arms[1].rotation.x=r*.3)}function Ta(){let n=new Ut;n.add(Ht(.62,.025,.44,bt.laminate(),0,.72,0)),n.add(Ht(.58,.12,.38,bt.darkSteel(),0,.64,-.02));for(let[i,s]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])n.add(je(.012,.012,.7,bt.steel(),i,.35,s,8));n.add(Ht(.56,.015,.015,bt.steel(),0,.12,-.18));let t=new Ut;t.position.set(0,0,.42),t.rotation.y=(Math.random()-.5)*.4,n.add(t),t.add(Ht(.4,.02,.38,bt.plywood(),0,.44,0));let e=Ht(.38,.22,.015,bt.plywood(),0,.68,.2);e.rotation.x=-.1,t.add(e);for(let[i,s]of[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]])t.add(je(.011,.011,.44,bt.steel(),i,.22,s,8));if(t.add(je(.011,.011,.32,bt.steel(),-.18,.6,.19,8)),t.add(je(.011,.011,.32,bt.steel(),.18,.6,.19,8)),Math.random()<.4){let i=Ht(.21,.03,.28,Mt({color:[8006186,2771578,3828282][Math.random()*3|0],roughness:.7}),(Math.random()-.5)*.3,.75,0);i.rotation.y=Math.random(),n.add(i)}return n}function Um(){let n=new Ut;return n.add(Ht(1.8,.04,.75,bt.laminate(),0,.78,0)),n.add(Ht(1.76,.74,.04,bt.plywood(),0,.38,.33)),n.add(Ht(.5,.74,.7,bt.plywood(),-.62,.38,0)),n.add(Ht(.5,.74,.7,bt.plywood(),.62,.38,0)),n.add(Ht(.3,.04,.22,Mt({color:820,roughness:.6}),.3,.82,-.05)),n}function hf(){let n=new Ut;for(let t of[-1,1])n.add(se(new ne(.56,1.85,.5),[bt.lockerSide(),bt.lockerSide(),bt.lockerSide(),bt.lockerSide(),bt.locker(),bt.lockerSide()],t*.29,.925,0));return n}function Om(){let n=new Ut;n.add(Ht(1.1,.04,.7,Mt({color:9145480,roughness:.5}),0,.74,0)),n.add(Ht(.4,.7,.65,Mt({color:7303534,roughness:.5}),.33,.36,0)),n.add(Ht(.5,.32,.03,bt.monitorBlk(),-.1,1,-.2)),n.add(Ht(.06,.12,.06,bt.monitorBlk(),-.1,.81,-.2)),n.add(Ht(.42,.02,.14,bt.monitorBlk(),-.1,.77,.05));for(let e=0;e<4;e++){let i=Ht(.21,.004,.29,Mt({color:15657696,roughness:.9}),-.3+Math.random()*.2,.765+e*.004,.15);i.rotation.y=Math.random()-.5,n.add(i)}let t=new Ut;return t.position.set(-.1,0,.55),n.add(t),t.add(je(.22,.22,.07,Mt({color:546,roughness:.8}),0,.48,0,16)),t.add(je(.02,.02,.4,bt.steel(),0,.25,0)),t.add(Ht(.42,.5,.06,Mt({color:546,roughness:.8}),0,.82,.22)),n}function Fm(){let n=new Ut;n.add(Ht(1.2,.04,.9,bt.blackTop(),0,.88,0)),n.add(Ht(1.14,.84,.84,bt.whiteCab(),0,.43,0));for(let t=-1;t<=1;t++)n.add(Ht(.005,.7,.8,Mt({color:2457,roughness:.6}),t*.38,.43,.425));return Math.random()<.5&&(n.add(je(.05,.07,.15,Mt({color:13625583,transparent:!0,opacity:.5,roughness:.05}),.2,.98,.1)),n.add(je(.012,.012,.3,bt.steel(),-.4,1.05,-.35))),n}function Bm(n){let t=new Ut;t.add(Ht(n,.06,.5,Mt({color:5987936,roughness:.3}),0,.82,.25)),t.add(Ht(n,.78,.04,Mt({color:4869456,roughness:.5}),0,.4,.48));for(let e=0;e<3;e++){let i=-n/2+n*(e+.5)/3,s=se(new Pn(.2,.14,.12,20,1,!0),bt.ceramic(),i,.8,.25);s.material.side=Ve,t.add(s),t.add(je(.015,.015,.18,bt.steel(),i,.94,.05));let r=je(.012,.012,.14,bt.steel(),i,1.02,.11);r.rotation.x=Math.PI/2,t.add(r)}return t}function km(){let n=new Ut;n.add(Ht(.03,2,1.4,bt.partition(),-.6,1.1,0));let t=Ht(.75,1.8,.03,bt.partition(),-.15,1.05,.7);return t.rotation.y=-.6,t.position.x=.05,n.add(t),n.add(Ht(.38,.4,.5,bt.ceramic(),.2,.2,-.35)),n.add(Ht(.4,.05,.55,bt.ceramic(),.2,.42,-.33)),n.add(Ht(.42,.35,.18,bt.ceramic(),.2,.62,-.62)),n}function zm(){let n=new Ut;return n.add(je(.08,.08,.48,bt.red(),0,.26,0,16)),n.add(je(.03,.05,.08,bt.monitorBlk(),0,.54,0)),n.add(Ht(.12,.03,.03,bt.monitorBlk(),.04,.6,0)),n}function Hm(){let n=new Ut,t=Mt({color:13214247,metalness:.9,roughness:.3}),e=se(new vs(.03,.007,8,16),t);e.rotation.x=Math.PI/2,n.add(e),n.add(Ht(.09,.006,.012,t,.07,0,0)),n.add(Ht(.012,.006,.025,t,.1,0,.012));let i=Ht(.05,.004,.08,Mt({color:10491928,roughness:.6}),-.06,0,.03);return i.rotation.y=.4,n.add(i),n}var _i=Object.create(null);_i.open="0";_i.close="1";_i.ping="2";_i.pong="3";_i.message="4";_i.upgrade="5";_i.noop="6";var Ea=Object.create(null);Object.keys(_i).forEach(n=>{Ea[_i[n]]=n});var wa={type:"error",data:"parser error"};var Wm=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xm=typeof ArrayBuffer=="function",qm=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Aa=({type:n,data:t},e,i)=>Wm&&t instanceof Blob?e?i(t):Gm(t,i):Xm&&(t instanceof ArrayBuffer||qm(t))?e?i(t):Gm(new Blob([t]),i):i(_i[n]+(t||"")),Gm=(n,t)=>{let e=new FileReader;return e.onload=function(){let i=e.result.split(",")[1];t("b"+(i||""))},e.readAsDataURL(n)};function Vm(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}var uf;function Ym(n,t){if(Wm&&n.data instanceof Blob)return n.data.arrayBuffer().then(Vm).then(t);if(Xm&&(n.data instanceof ArrayBuffer||qm(n.data)))return t(Vm(n.data));Aa(n,!1,e=>{uf||(uf=new TextEncoder),t(uf.encode(e))})}var Zm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ra=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Zm.length;n++)Ra[Zm.charCodeAt(n)]=n;var Jm=n=>{let t=n.length*.75,e=n.length,i,s=0,r,o,l,c;n[n.length-1]==="="&&(t--,n[n.length-2]==="="&&t--);let a=new ArrayBuffer(t),h=new Uint8Array(a);for(i=0;i<e;i+=4)r=Ra[n.charCodeAt(i)],o=Ra[n.charCodeAt(i+1)],l=Ra[n.charCodeAt(i+2)],c=Ra[n.charCodeAt(i+3)],h[s++]=r<<2|o>>4,h[s++]=(o&15)<<4|l>>2,h[s++]=(l&3)<<6|c&63;return a};var QM=typeof ArrayBuffer=="function",Ca=(n,t)=>{if(typeof n!="string")return{type:"message",data:$m(n,t)};let e=n.charAt(0);return e==="b"?{type:"message",data:jM(n.substring(1),t)}:Ea[e]?n.length>1?{type:Ea[e],data:n.substring(1)}:{type:Ea[e]}:wa},jM=(n,t)=>{if(QM){let e=Jm(n);return $m(e,t)}else return{base64:!0,data:n}},$m=(n,t)=>t==="blob"?n instanceof Blob?n:new Blob([n]):n instanceof ArrayBuffer?n:n.buffer;var Km="",Qm=(n,t)=>{let e=n.length,i=new Array(e),s=0;n.forEach((r,o)=>{Aa(r,!1,l=>{i[o]=l,++s===e&&t(i.join(Km))})})},jm=(n,t)=>{let e=n.split(Km),i=[];for(let s=0;s<e.length;s++){let r=Ca(e[s],t);if(i.push(r),r.type==="error")break}return i};function t0(){return new TransformStream({transform(n,t){Ym(n,e=>{let i=e.length,s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);let r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{s=new Uint8Array(9);let r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}var ff;function nh(n){return n.reduce((t,e)=>t+e.length,0)}function ih(n,t){if(n[0].length===t)return n.shift();let e=new Uint8Array(t),i=0;for(let s=0;s<t;s++)e[s]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),e}function e0(n,t){ff||(ff=new TextDecoder);let e=[],i=0,s=-1,r=!1;return new TransformStream({transform(o,l){for(e.push(o);;){if(i===0){if(nh(e)<1)break;let c=ih(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(nh(e)<2)break;let c=ih(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(nh(e)<8)break;let c=ih(e,8),a=new DataView(c.buffer,c.byteOffset,c.length),h=a.getUint32(0);if(h>Math.pow(2,21)-1){l.enqueue(wa);break}s=h*Math.pow(2,32)+a.getUint32(4),i=3}else{if(nh(e)<s)break;let c=ih(e,s);l.enqueue(Ca(r?c:ff.decode(c),t)),i=0}if(s===0||s>n){l.enqueue(wa);break}}}})}var df=4;function Ie(n){if(n)return tS(n)}function tS(n){for(var t in Ie.prototype)n[t]=Ie.prototype[t];return n}Ie.prototype.on=Ie.prototype.addEventListener=function(n,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(t),this};Ie.prototype.once=function(n,t){function e(){this.off(n,e),t.apply(this,arguments)}return e.fn=t,this.on(n,e),this};Ie.prototype.off=Ie.prototype.removeListener=Ie.prototype.removeAllListeners=Ie.prototype.removeEventListener=function(n,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+n];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,s=0;s<e.length;s++)if(i=e[s],i===t||i.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+n],this};Ie.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+n],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,s=e.length;i<s;++i)e[i].apply(this,t)}return this};Ie.prototype.emitReserved=Ie.prototype.emit;Ie.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};Ie.prototype.hasListeners=function(n){return!!this.listeners(n).length};var Qi=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),Ln=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),n0="arraybuffer";function sh(n,...t){return t.reduce((e,i)=>(n.hasOwnProperty(i)&&(e[i]=n[i]),e),{})}var eS=Ln.setTimeout,nS=Ln.clearTimeout;function ji(n,t){t.useNativeTimers?(n.setTimeoutFn=eS.bind(Ln),n.clearTimeoutFn=nS.bind(Ln)):(n.setTimeoutFn=Ln.setTimeout.bind(Ln),n.clearTimeoutFn=Ln.clearTimeout.bind(Ln))}var iS=1.33;function i0(n){return typeof n=="string"?sS(n):Math.ceil((n.byteLength||n.size)*iS)}function sS(n){let t=0,e=0;for(let i=0,s=n.length;i<s;i++)t=n.charCodeAt(i),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(i++,e+=4);return e}function rh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function s0(n){let t="";for(let e in n)n.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]));return t}function r0(n){let t={},e=n.split("&");for(let i=0,s=e.length;i<s;i++){let r=e[i].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r.slice(1).join("="))}return t}var oh=class extends Error{constructor(t,e,i){super(t),this.description=e,this.context=i,this.type="TransportError"}},ts=class extends Ie{constructor(t){super(),this.writable=!1,ji(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,i){return super.emitReserved("error",new oh(t,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){let e=Ca(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){let t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){let e=s0(t);return e.length?"?"+e:""}};var Pa=class extends ts{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";let e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){let e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};jm(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Qm(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=rh()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}};var o0=!1;try{o0=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}var a0=o0;function rS(){}var pf=class extends Pa{constructor(t){if(super(t),typeof location<"u"){let e=location.protocol==="https:",i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,e){let i=this.request({method:"POST",data:t});i.on("success",e),i.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){let t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=t}},Cs=class n extends Ie{constructor(t,e,i){super(),this.createRequest=t,ji(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;let e=sh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;let i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=n.requestsCount++,n.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=rS,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete n.requests[this._index],this._xhr=null}}_onLoad(){let t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Cs.requestsCount=0;Cs.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",l0);else if(typeof addEventListener=="function"){let n="onpagehide"in Ln?"pagehide":"unload";addEventListener(n,l0,!1)}}function l0(){for(let n in Cs.requests)Cs.requests.hasOwnProperty(n)&&Cs.requests[n].abort()}var oS=(function(){let n=c0({xdomain:!1});return n&&n.responseType!==null})(),Ps=class extends pf{constructor(t){super(t);let e=t&&t.forceBase64;this.supportsBinary=oS&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Cs(c0,this.uri(),t)}};function c0(n){let t=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||a0))return new XMLHttpRequest}catch{}if(!t)try{return new Ln[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}var h0=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",gf=class extends ts{get name(){return"websocket"}doOpen(){let t=this.uri(),e=this.opts.protocols,i=h0?{}:sh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let i=t[e],s=e===t.length-1;Aa(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch{}s&&Qi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=rh()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}},mf=Ln.WebSocket||Ln.MozWebSocket,Is=class extends gf{createSocket(t,e,i){return h0?new mf(t,e,i):e?new mf(t,e):new mf(t)}doWrite(t,e){this.ws.send(e)}};var eo=class extends ts{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{let e=e0(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(e).getReader(),s=t0();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();let r=()=>{i.read().then(({done:l,value:c})=>{l||(this.onPacket(c),r())}).catch(l=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let i=t[e],s=e===t.length-1;this._writer.write(i).then(()=>{s&&Qi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}};var xf={websocket:Is,webtransport:eo,polling:Ps};var aS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,lS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function no(n){if(n.length>8e3)throw"URI too long";let t=n,e=n.indexOf("["),i=n.indexOf("]");e!=-1&&i!=-1&&(n=n.substring(0,e)+n.substring(e,i).replace(/:/g,";")+n.substring(i,n.length));let s=aS.exec(n||""),r={},o=14;for(;o--;)r[lS[o]]=s[o]||"";return e!=-1&&i!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=cS(r,r.path),r.queryKey=hS(r,r.query),r}function cS(n,t){let e=/\/{2,9}/g,i=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function hS(n,t){let e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,r){s&&(e[s]=r)}),e}var _f=typeof addEventListener=="function"&&typeof removeEventListener=="function",ah=[];_f&&addEventListener("offline",()=>{ah.forEach(n=>n())},!1);var or=class n extends Ie{constructor(t,e={}){var i,s;if(super(),this.binaryType=n0,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){let r=no(t);e.hostname=r.host,e.secure=r.protocol==="https"||r.protocol==="wss",e.port=r.port,r.query&&(e.query=r.query)}else e.host&&(e.hostname=no(e.host).host);if(ji(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),e.transportImplementations&&e.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");e.transportImplementations||!((i=e.transports)===null||i===void 0)&&i.length&&typeof e.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=e.transportImplementations)!==null&&s!==void 0?s:e.transports).forEach(r=>{let o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=e.transports?[...e.transports]:["polling","websocket","webtransport"],this._transportsByName=xf),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=r0(this.opts.query)),_f&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ah.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){let e=Object.assign({},this.opts.query);e.EIO=df,e.transport=t,this.id&&(e.sid=this.id);let i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let t=this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}_probe(t){let e=this.createTransport(t),i=!1;n.priorWebsocketSuccess=!1;let s=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",u=>{if(!i)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;n.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{let f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){i||(i=!0,h(),e.close(),e=null)}let o=u=>{let f=new Error("probe error: "+u);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function l(){o("transport closed")}function c(){o("socket closed")}function a(u){e&&u.name!==e.name&&r()}let h=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",l),this.off("close",c),this.off("upgrading",a)};e.once("open",s),e.once("error",o),e.once("close",l),this.once("close",c),this.once("upgrading",a),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onOpen(){if(this.readyState="open",n.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){let s=this.writeBuffer[i].data;if(s&&(e+=i0(s)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Qi(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,i){return this._sendPacket("message",t,e,i),this}send(t,e,i){return this._sendPacket("message",t,e,i),this}_sendPacket(t,e,i,s){if(typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;let r={type:t,data:e,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){let t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(n.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),_f&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let i=ah.indexOf(this._offlineEventListener);i!==-1&&ah.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){let e=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}};or.protocol=df;var zw=or.protocol;function u0(n,t="",e){let i=n;e=e||typeof location<"u"&&location,n==null&&(n=e.protocol+"//"+e.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=e.protocol+n:n=e.host+n),/^(https?|wss?):\/\//.test(n)||(typeof e<"u"?n=e.protocol+"//"+n:n="https://"+n),i=no(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";let r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(e&&e.port===i.port?"":":"+i.port),i}var bf={};Sg(bf,{Decoder:()=>Mf,Encoder:()=>vf,PacketType:()=>te,isPacketValid:()=>yS,protocol:()=>g0});var fS=typeof ArrayBuffer=="function",dS=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,f0=Object.prototype.toString,pS=typeof Blob=="function"||typeof Blob<"u"&&f0.call(Blob)==="[object BlobConstructor]",mS=typeof File=="function"||typeof File<"u"&&f0.call(File)==="[object FileConstructor]";function La(n){return fS&&(n instanceof ArrayBuffer||dS(n))||pS&&n instanceof Blob||mS&&n instanceof File}function Ia(n,t){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let e=0,i=n.length;e<i;e++)if(Ia(n[e]))return!0;return!1}if(La(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Ia(n.toJSON(),!0);for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&Ia(n[e]))return!0;return!1}function d0(n){let t=[],e=n.data,i=n;return i.data=lh(e,t),i.attachments=t.length,{packet:i,buffers:t}}function lh(n,t,e){if(!n)return n;if(La(n)){let i={_placeholder:!0,num:t.length};return t.push(n),i}else if(Array.isArray(n)){let i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=lh(n[s],t);return i}else if(typeof n=="object"&&!(n instanceof Date)){if(n.toJSON&&typeof n.toJSON=="function"&&!e)return lh(n.toJSON(),t,!0);let i={};for(let s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=lh(n[s],t));return i}return n}function p0(n,t){return n.data=yf(n.data,t),delete n.attachments,n}function yf(n,t){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<t.length)return t[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let e=0;e<n.length;e++)n[e]=yf(n[e],t);else if(typeof n=="object")for(let e in n)Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=yf(n[e],t));return n}var m0=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],g0=5,te;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(te||(te={}));var vf=class{constructor(t){this.replacer=t}encode(t){return(t.type===te.EVENT||t.type===te.ACK)&&Ia(t)?this.encodeAsBinary({type:t.type===te.EVENT?te.BINARY_EVENT:te.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===te.BINARY_EVENT||t.type===te.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){let e=d0(t),i=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(i),s}},Mf=class n extends Ie{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);let i=e.type===te.BINARY_EVENT;i||e.type===te.BINARY_ACK?(e.type=i?te.EVENT:te.ACK,this.reconstructor=new Sf(e)):super.emitReserved("decoded",e)}else if(La(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0,i={type:Number(t.charAt(0))};if(te[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===te.BINARY_EVENT||i.type===te.BINARY_ACK){let r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);let o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");let l=Number(o);if(!x0(l)||l<1)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=l}if(t.charAt(e+1)==="/"){let r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););i.nsp=t.substring(r,e)}else i.nsp="/";let s=t.charAt(e+1);if(s!==""&&Number(s)==s){let r=e+1;for(;++e;){let o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}i.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){let r=this.tryParse(t.substr(e));if(n.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case te.CONNECT:return ch(e);case te.DISCONNECT:return e===void 0;case te.CONNECT_ERROR:return typeof e=="string"||ch(e);case te.EVENT:case te.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&m0.indexOf(e[0])===-1);case te.ACK:case te.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},Sf=class{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){let e=p0(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function gS(n){return typeof n=="string"}var x0=Number.isInteger||function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n};function xS(n){return n===void 0||x0(n)}function ch(n){return Object.prototype.toString.call(n)==="[object Object]"}function _S(n,t){switch(n){case te.CONNECT:return t===void 0||ch(t);case te.DISCONNECT:return t===void 0;case te.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&m0.indexOf(t[0])===-1);case te.ACK:return Array.isArray(t);case te.CONNECT_ERROR:return typeof t=="string"||ch(t);default:return!1}}function yS(n){return gS(n.nsp)&&xS(n.id)&&_S(n.type,n.data)}function Zn(n,t,e){return n.on(t,e),function(){n.off(t,e)}}var vS=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),io=class extends Ie{constructor(t,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let t=this.io;this.subs=[Zn(t,"open",this.onopen.bind(this)),Zn(t,"packet",this.onpacket.bind(this)),Zn(t,"error",this.onerror.bind(this)),Zn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var i,s,r;if(vS.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;let o={type:te.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){let h=this.ids++,u=e.pop();this._registerAckCallback(h,u),o.id=h}let l=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!l||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var i;let s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);e.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(r),e.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((i,s)=>{let r=(o,l)=>o?s(o):i(l);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());let i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;let e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:te.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){let i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case te.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case te.EVENT:case te.BINARY_EVENT:this.onevent(t);break;case te.ACK:case te.BINARY_ACK:this.onack(t);break;case te.DISCONNECT:this.ondisconnect();break;case te.CONNECT_ERROR:this.destroy();let i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){let e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){let e=this._anyListeners.slice();for(let i of e)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){let e=this,i=!1;return function(...s){i||(i=!0,e.packet({type:te.ACK,id:t,data:s}))}}onack(t){let e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:te.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){let e=this._anyListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){let e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(t===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let e=this._anyOutgoingListeners.slice();for(let i of e)i.apply(this,t.data)}}};function ar(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}ar.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*n);n=(Math.floor(t*10)&1)==0?n-e:n+e}return Math.min(n,this.max)|0};ar.prototype.reset=function(){this.attempts=0};ar.prototype.setMin=function(n){this.ms=n};ar.prototype.setMax=function(n){this.max=n};ar.prototype.setJitter=function(n){this.jitter=n};var so=class extends Ie{constructor(t,e){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,ji(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ar({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;let s=e.parser||bf;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new or(this.uri,this.opts);let e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;let s=Zn(e,"open",function(){i.onopen(),t&&t()}),r=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=Zn(e,"error",r);if(this._timeout!==!1){let l=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},l);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let t=this.engine;this.subs.push(Zn(t,"ping",this.onping.bind(this)),Zn(t,"data",this.ondata.bind(this)),Zn(t,"error",this.onerror.bind(this)),Zn(t,"close",this.onclose.bind(this)),Zn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Qi(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new io(this,t,e),this.nsps[t]=i),i}_destroy(t){let e=Object.keys(this.nsps);for(let i of e)if(this.nsps[i].active)return;this._close()}_packet(t){let e=this.encoder.encode(t);for(let i=0;i<e.length;i++)this.engine.write(e[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let e=this.backoff.duration();this._reconnecting=!0;let i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){let t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}};var Da={};function Na(n,t){typeof n=="object"&&(t=n,n=void 0),t=t||{};let e=u0(n,t.path||"/socket.io"),i=e.source,s=e.id,r=e.path,o=Da[s]&&r in Da[s].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o,c;return l?c=new so(i,t):(Da[s]||(Da[s]=new so(i,t)),c=Da[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Na,{Manager:so,Socket:io,io:Na,connect:Na});var MS="44\uAD50\uC2DC \uC0DD\uC874\uC218\uC5C5",O0=new URLSearchParams(location.search).get("srv")||(location.hostname.endsWith("onrender.com")?"":"https://random-football-cflg.onrender.com"),xo={bell:{text:"\uC218\uC5C5 \uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uAD50\uC2E4 \uC548\uC5D0 \uC788\uC744 \uAC83. \uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB2C8\uB294 \uC0AC\uB78C\uB9CC \uC8FD\uC778\uB2E4.",why:'\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uBCF5\uB3C4\uC5D0 \uC788\uC5C8\uB2E4. "\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!"'},run:{text:"\uBCF5\uB3C4\uC5D0\uC11C\uB294 \uB5A0\uB4E4\uC9C0 \uB9D0 \uAC83. \uB370\uCE7C\uCF54\uB9C8\uB2C8\uB294 \uB208\uC774 \uC5C6\uB294 \uB300\uC2E0 \uC18C\uB9AC\uB97C \uB4E3\uACE0, \uBCBD\uACFC \uBC14\uB2E5\uC744 \uC811\uC5B4 \uC0AC\uB78C\uC744 \uADF8\uB9BC\uC73C\uB85C \uB9CC\uB4E0\uB2E4.",why:'"\uB370\uCE7C\uCF54\uB9C8\uB2C8?" \uBCBD\uC774 \uC811\uD614\uB2E4. \uB098\uB294 \uBCBD\uC5D0 \uADF8\uB824\uC9C4 \uADF8\uB9BC\uC774 \uB418\uC5C8\uB2E4.'},mirror:{text:"\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uC18D\uC758 \uB098\uC640 \uC624\uB798 \uB208\uC744 \uB9C8\uC8FC\uCE58\uC9C0 \uB9D0 \uAC83. \uB3C4\uD50C\uAC31\uC5B4\uB294 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C\uB294 \uBABB \uB098\uC628\uB2E4.",why:"\uAC70\uC6B8 \uC18D\uC758 \uB0B4\uAC00 \uC6C3\uC5C8\uB2E4. \uADF8\uB9AC\uACE0 \uB098\uB97C \uAC70\uC6B8 \uC18D\uC73C\uB85C \uB04C\uACE0 \uB4E4\uC5B4\uAC00 \uB0B4 \uBAB8\uC744 \uCC28\uC9C0\uD588\uB2E4."},sci:{text:"\uACFC\uD559 \uC2E4\uD5D8\uC2E4 \uC548\uC804 \uC218\uCE59: \uC2E4\uD5D8 \uC911 \uC7A5\uB09C\uC744 \uCE58\uAC70\uB098 \uC790\uB9AC\uB97C \uBE44\uC6B0\uC9C0 \uC54A\uB294\uB2E4. \uACFC\uD559\uC2E4 \uAD34\uBB3C \uC55E\uC5D0\uC11C \uB4F1\uC744 \uB3CC\uB824 \uB3C4\uB9DD\uCE58\uC9C0 \uB9D0 \uAC83. \uC0AC\uACE0\uAC00 \uB098\uBA74 \uD070 \uC18C\uB9AC\uB85C \uC54C\uB9B0\uB2E4 \u2014 \u300C\uC120\uC0DD\uB2D8!\u300D",why:"\uB4F1\uC744 \uB3CC\uB824 \uB3C4\uB9DD\uCCE4\uB2E4. \uC2DC\uD5D8\uAD00\uC774 \uB098\uB97C \uAC00\uB9AC\uD0A4\uC790 \uBAB8\uC774 \uAD73\uC5C8\uACE0, \uD50C\uB77C\uC2A4\uD06C \uC18D\uC73C\uB85C \uBE68\uB824 \uB4E4\uC5B4\uAC00 \uC54C\uCF54\uC62C\uB7A8\uD504 \uBD88\uAF43\uC5D0 \uB179\uC544\uB0B4\uB838\uB2E4."},bc:{text:"\uBC29\uC1A1 \uAD34\uB2F4: \uBC29\uC1A1\uC774 \uB098\uC624\uBA74 \uADC0\uB97C \uB9C9\uC744 \uAC83. \uBC29\uC1A1\uC744 \uB530\uB77C\uAC00\uBA74 \uB3CC\uC544\uC624\uC9C0 \uBABB\uD55C\uB2E4.",why:"\uBC29\uC1A1\uC744 \uB05D\uAE4C\uC9C0 \uB4E4\uC5B4 \uBC84\uB838\uB2E4. \uC815\uC2E0\uC744 \uCC28\uB838\uC744 \uB550 \uC774\uBBF8 \uBC29\uC1A1\uC2E4 \uBB38 \uC55E\uC774\uC5C8\uB2E4. \uADF8\uB9AC\uACE0 \uB2E4\uC2DC\uB294 \uB3CC\uC544\uC624\uC9C0 \uBABB\uD588\uB2E4."},gym:{text:"\uCCB4\uC721\uAD00 \uC548\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uCCB4\uC721\uBCF5\uC744 \uC785\uC744 \uAC83. \uD638\uB8E8\uB77C\uAE30\uAC00 \uC6B8\uB9AC\uBA74 \uACF5\uC774 \uB2EC\uB824\uB4E0\uB2E4.",why:"\uAD50\uBCF5\uC744 \uC785\uC740 \uCC44 \uCCB4\uC721\uAD00\uC5D0 \uB4E4\uC5B4\uAC14\uB2E4. \uC091\u2014 \uD638\uB8E8\uB77C\uAE30 \uC18C\uB9AC\uC640 \uD568\uAED8 \uB098\uB3C4 \uACF5\uC774 \uB418\uC5C8\uB2E4."}},lo={n1:{t:"\uCE60\uD310",b:'"\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83."'},n2:{t:"\uD654\uC7A5\uC2E4 \uBCBD \uB099\uC11C",b:`\uAC70\uC6B8 \uC18D \uC560\uB4E4\uC740 \uB2E8\uCD94\uAC00 \uBC18\uB300\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC5B4.
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
\uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uC5D0 \uC788\uB2E4.`}},SS=[{name:"\uCD5C\uC6D0\uADE0 (A\uC870)",x:3,y:7,o:{},big:!0,lines:["\uB098, \uB098\uB294 \uC5EC\uAE30\uC11C \uC548 \uB098\uAC08 \uAC70\uC57C\u2026","\uCCAB \uD0D0\uC0C9 \uB54C \uD63C\uC790 \uB3C4\uB9DD\uCCD0\uC11C\u2026 \uBBF8\uC548\uD588\uC5B4, \uB3C4\uC724\uC544."]},{name:"\uC784\uC120\uC544 (A\uC870)",x:5,y:7,o:{girl:!0,hairColor:2759186},lines:["\uBCF5\uB3C4\uC5D0\uC120 \uC808\uB300 \uC18C\uB9AC \uB0B4\uC9C0 \uB9C8. 3\uBC18\uC774\u2026 \uC804\uBD80 \uBCBD\uC5D0 \uADF8\uB824\uC838 \uC788\uC5C8\uC5B4.","\uB370\uCE7C\uCF54\uB9C8\uB2C8\uD55C\uD14C \uCAD3\uAE30\uBA74 \uBB50\uB4E0 \uB358\uC838. \uC18C\uB9AC \uB098\uB294 \uCABD\uC73C\uB85C \uAC00\uB2C8\uAE4C."]},{name:"\uCD5C\uC11C\uC815 (A\uC870)",x:11,y:7,o:{girl:!0,hairColor:5913122},big:!0,lines:["\uD654\uC7A5\uC2E4\uC5D0\uC11C \uB098\uC628 \uC608\uB9BC\uC774 \uC190\uC774\u2026 \uC774\uC0C1\uD588\uC5B4. \uC9C4\uC9DC \uC608\uB9BC\uC774\uB294 \uAC70\uC6B8 \uC18D\uC5D0\uC11C \uC0B4\uB824 \uB2EC\uB77C\uACE0 \uD588\uACE0."]},{name:"\uAE40\uD0DC\uD604 (B\uC870)",x:3,y:3,o:{hairColor:13148232,cast:!0},lines:["\uD314\uC740 \uC2E0\uACBD \uC4F0\uC9C0 \uB9C8. \uCCB4\uC721\uAD00 \uAC08 \uB550 \uCCB4\uC721\uBCF5 \uAF2D \uCC59\uACA8. \uC0C1\uC758\uB4E0 \uD558\uC758\uB4E0 \uD558\uB098\uB9CC \uC785\uC5B4\uB3C4 \uB41C\uB300."]},{name:"\uB0A8\uC815\uC6B0 (B\uC870)",x:5,y:5,o:{glasses:!0},lines:["\uB3C4\uC724\uC544, \uC885 \uCE58\uAE30 \uC804\uC5D0 \uBB34\uC870\uAC74 \uAD50\uC2E4\uB85C \uB3CC\uC544\uC640. \uC120\uC0DD\uB2D8\uCC98\uB7FC \uB418\uAE30 \uC2EB\uC73C\uBA74.","\uC870\uBCC4\uB85C \uAD6C\uC5ED \uB098\uB220\uC11C \uC9C0\uB3C4 \uB9CC\uB4E4\uACE0 \uC788\uC5B4. \uB10C A\uC870\uC57C. \uAC00\uBC29\uC5D0 \uC9C0\uB3C4 \uB123\uC5B4 \uB1A8\uC5B4.","\uAD50\uBB34\uC2E4 \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0 \uCCB4\uC721\uBCF5 \uC0C1\uC758\uAC00 \uC788\uC5C8\uACE0, \uAD50\uC2E4 \uB4A4 \uC0AC\uBB3C\uD568 \uCABD\uC5D0 \uD558\uC758\uAC00 \uC788\uC744 \uAC70\uC57C."]},{name:"\uD55C\uC218\uC9C4 (B\uC870)",x:9,y:5,o:{girl:!0,hairColor:3810328},lines:["\uAD34\uBB3C\uB4E4\uC740 \uB2E4 \uAD50\uCE59\uC774\uB791 \uAD00\uB828 \uC788\uB294 \uAC83 \uAC19\uC544. \uAD50\uCE59\uB9CC \uC9C0\uD0A4\uBA74 \uC0B4 \uC218 \uC788\uC5B4.","\uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uAD50\uC2E4 \uC548\uAE4C\uC9C0\uB294 \uC548 \uB4E4\uC5B4\uC640. \uC218\uC5C5 \uC2DC\uAC04\uC5D4 \uBB34\uC870\uAC74 \uC5EC\uAE30 \uC788\uC5B4."]},{name:"\uCD5C\uB098\uB9AC (B\uC870)",x:11,y:5,o:{girl:!0,hairColor:2233616},lines:["3\uBC18\uC5D0 \uCE5C\uAD6C \uC788\uC5C8\uB294\uB370\u2026 \uC5F0\uB77D\uC774 \uC548 \uB3FC. \uD578\uB4DC\uD3F0\uC740 \uCF1C\uC9C0\uB294\uB370 \uC2E0\uD638\uAC00 \uD558\uB098\uB3C4 \uC548 \uC7A1\uD600."]},{name:"\uC774\uC18C\uD55C (C\uC870)",x:9,y:3,o:{hairColor:2763312},lines:["\uC6B0\uB9AC \uC0BC\uCD0C\uC740 \uAC80\uC740 \uC6D0\uC5D0\uC11C \uB098\uC628 \uC801 \uC788\uC5B4. \uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uB798.","\uC548\uC5D0\uC11C\uC758 1\uB144\uC774 \uBC16\uC5D0\uC11C\uB294 \uD558\uB8E8\uB798. \uADF8\uB7EC\uB2C8\uAE4C \uAD76\uC5B4 \uC8FD\uC744 \uAC71\uC815\uC740 \uC5C6\uC5B4.","\uACFC\uD559\uC2E4 \uAD34\uBB3C \uC55E\uC5D0\uC11C\uB294 \uC808\uB300 \uB4F1 \uB3CC\uB9AC\uC9C0 \uB9C8."]},{name:"\uAE40\uC9C0\uC740 (C\uC870)",x:11,y:3,o:{girl:!0,glasses:!0,hairColor:6965802},lines:["\uACFC\uD559\uC2E4 \uAD34\uBB3C\uD55C\uD14C \uC7A1\uD788\uBA74 \uD06C\uAC8C \uC18C\uB9AC\uCCD0. \u300C\uC120\uC0DD\uB2D8!\u300D \uD558\uACE0. \uC0AC\uACE0\uAC00 \uB098\uBA74 \uD070 \uC18C\uB9AC\uB85C \uC54C\uB9AC\uB77C\uB294 \uC218\uCE59\uC774 \uC788\uAC70\uB4E0.","\uADFC\uB370 \uC18C\uB9AC\uCE58\uBA74\u2026 \uB370\uCE7C\uCF54\uB9C8\uB2C8\uAC00 \uB4E4\uC744 \uAC70\uC57C."]},{name:"\uCD5C\uD604\uC900 (D\uC870)",x:3,y:5,o:{hairColor:8022672},lines:["\uD654\uC7A5\uC2E4\uC5D0\uC11C \uB098\uC628 \uC560 \uC190\uC744 \uBD24\uC5B4. \uB2E8\uCD94\uAC00 \uBC18\uB300\uCABD\uC774\uC5C8\uC5B4. \uAC70\uC6B8 \uC18D \uC560\uB4E4\uC740 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB860 \uBABB \uB098\uC640."]},{name:"\uC591\uC18C\uC5F0 (D\uC870)",x:9,y:7,o:{girl:!0,hairColor:9079438},lines:["\uBC29\uC1A1 \uB098\uC624\uBA74 \uBB34\uC870\uAC74 \uADC0 \uB9C9\uC544. 2\uD559\uB144 \uC120\uBC30\uB4E4\uC774 \uBC29\uC1A1 \uB4E3\uACE0 \uC120\uC0DD\uB2D8 \uB530\uB77C \uB2E4 \uB098\uAC00 \uBC84\uB838\uB300."]},{name:"\uC804\uC11D\uC624 (D\uC870)",x:5,y:3,o:{},lines:["\uAD34\uBB3C\uC774\uB4E0 \uBB50\uB4E0 \uB2E4 \uAC19\uC774 \uB36E\uCE58\uBA74 \uC774\uAE38 \uC218 \uC788\uC744 \uC904 \uC54C\uC558\uB294\uB370\u2026","\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uC624\uB798 \uBCF4\uC9C0 \uB9C8. \uC9C4\uC9DC\uC57C."]}],bS=[{name:"\uAE40\uB3C4\uD604 (2-1, \uB204\uB098)",o:{girl:!0,hairColor:2758672},lines:["\uB3C4\uC724\uC544\u2026! \uB108 \uC0B4\uC544 \uC788\uC5C8\uAD6C\uB098. \uB09C \uADF8\uB54C \uBCF4\uAC74\uC2E4\uC5D0 \uC788\uC5B4\uC11C \uC0B4\uC558\uC5B4.","\uC6B0\uB9AC \uBC18 \uC808\uBC18\uC740 \uBC29\uC1A1 \uB4E3\uACE0 \uB2F4\uC784 \uC120\uC0DD\uB2D8 \uB530\uB77C \uB098\uAC14\uC5B4. \uBC29\uC1A1 \uB098\uC624\uBA74 \uBB34\uC870\uAC74 \uADC0 \uB9C9\uC544.","\uAC19\uC774 \uB0B4\uB824\uAC00\uC790. \uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uC57C."]},{name:"2\uD559\uB144 1\uBC18 \uBC18\uC7A5",o:{glasses:!0},lines:["\uC5EC\uAE30 \uAD50\uC2E4\uB3C4 \uC774\uC81C \uC548\uC804\uD558\uC9C0 \uC54A\uC744 \uAC70\uC57C\u2026","\uCCB4\uC721\uAD00\uC5D0\uC11C \uC14B\uC774\uB098 \uB2F9\uD588\uC5B4. \uCCB4\uC721\uBCF5 \uC548 \uC785\uC740 \uCC44\uB85C."]},{name:"\uAE40\uC728 (2-1)",o:{},lines:["\uBC29\uC1A1\uC774 \uB05D\uB0A0 \uB54C\uAE4C\uC9C0 \uADC0\uB9CC \uB9C9\uACE0 \uC788\uC73C\uBA74 \uAD1C\uCC2E\uC544."]},{name:"2\uD559\uB144 \uD559\uC0DD",o:{girl:!0,hairColor:3811866},lines:["\u2026\uC9D1\uC5D0 \uAC00\uACE0 \uC2F6\uC5B4."]},{name:"2\uD559\uB144 \uD559\uC0DD",o:{},lines:["\uACC4\uB2E8 \uCC3E\uC73C\uBA74 \uC6B0\uB9AC\uB3C4 \uB370\uB824\uAC00 \uC918."]}],F=1.2,un=3,fe=58,Ee=27,Ls=0,zn=1,yh=3,vh=4,_o=5,Mh=6,Va=7,uo=8,Hn=new Uint8Array(fe*Ee).fill(zn),fr=new Uint8Array(fe*Ee),Bt=(n,t)=>t*fe+n,Ao=(n,t)=>n<0||t<0||n>=fe||t>=Ee?zn:Hn[Bt(n,t)],Xe=(n,t)=>n<0||t<0||n>=fe||t>=Ee?0:fr[Bt(n,t)];function hs(n,t,e,i,s){for(let r=t;r<=i;r++)for(let o=n;o<=e;o++)Hn[Bt(o,r)]=Ls,fr[Bt(o,r)]=s}var F0=["\uBCF5\uB3C4","1-4","\uD654\uC7A5\uC2E4","1-3","\uAD50\uBB34\uC2E4","\uACC4\uB2E8","\uCCB4\uC721\uAD00","\uACFC\uD559\uC2E4","1-1"];hs(1,11,56,14,0);hs(1,1,13,9,1);hs(15,1,22,9,2);hs(24,1,35,9,3);hs(37,1,46,9,4);hs(48,1,56,9,5);hs(1,16,16,25,6);hs(18,16,34,25,7);hs(36,16,56,25,8);var B0=[[7,10,1],[18,10,2],[29,10,3],[41,10,4],[8,15,6],[26,15,7],[46,15,8]];for(let[n,t]of B0)Hn[Bt(n,t)]=yh;Hn[Bt(52,10)]=vh;for(let n=16;n<=21;n++)Hn[Bt(n,0)]=Va;for(let n=51;n<=53;n++)for(let t=2;t<=3;t++)Hn[Bt(n,t)]=_o;var Sh=[[3,3],[5,3],[9,3],[11,3],[3,5],[5,5],[9,5],[11,5],[3,7],[5,7],[9,7],[11,7],[6,2],[7,2],[8,2],[26,3],[29,3],[32,3],[26,6],[32,6],[39,3],[40,3],[43,3],[44,3],[39,6],[40,6],[43,6],[44,6],[2,24],[20,18],[21,18],[22,18],[26,18],[27,18],[28,18],[31,18],[32,18],[20,22],[21,22],[22,22],[26,22],[27,22],[28,22],[31,22],[32,22]];for(let n of[18,21,24])for(let t of[38,40,43,49,51,54])Sh.push([t,n]);for(let n=5;n<=9;n++)for(let t of[21,22])Sh.push([t,n]);for(let[n,t]of Sh)Hn[Bt(n,t)]=uo;var Za=[[4,11],[11,11],[21,11],[33,11],[45,11],[13,14],[20,14],[31,14],[39,14],[53,14]].map(([n,t])=>[n,t,0,t===11?1:-1]);for(let[n,t]of Za)Hn[Bt(n,t)]=Mh;var hr=!1,$n=(n,t)=>{let e=Ao(n,t);return e===zn||e===uo||e===Mh||e===Va||e===vh&&!hr},k0=(n,t)=>!$n(n,t)&&Xe(n,t)!==1,dh={n2:[16.5,8.5],n3:[28.5,1.6],n4:[45.5,2.5],n5:[33.5,24.5],n6:[55.5,16.5],n7:[19.5,16.6]},TS=[8.5,25.3],ph=[12.5,9.3],yo=[38.5,8.3],_0=[8.5,21.5],ES=[[2.5,13.6],[23.5,13.6],[47.5,11.5]],we={notes:["n1"],rules:[],deaths:0,clears:0,best:0},Si=localStorage.getItem("hor_tok")||"",Ff="";try{let n=JSON.parse(localStorage.getItem("hor_save")||"null");n&&(we=Object.assign(we,n))}catch{}var y0=n=>[...new Set(n)],wS=(n,t)=>({notes:y0([...n.notes||[],...t.notes||[]]),rules:y0([...n.rules||[],...t.rules||[]]),deaths:Math.max(n.deaths||0,t.deaths||0),clears:Math.max(n.clears||0,t.clears||0),best:[n.best,t.best].filter(e=>e>0).sort((e,i)=>e-i)[0]||0}),v0=0;function Ja(){localStorage.setItem("hor_save",JSON.stringify(we)),Si&&(clearTimeout(v0),v0=setTimeout(()=>Bf("/api/horror/save",{save:we}).catch(()=>{}),800))}async function Bf(n,t){let e=await fetch(O0+n,{method:t?"POST":"GET",headers:Object.assign({"Content-Type":"application/json"},Si?{Authorization:"Bearer "+Si}:{}),body:t?JSON.stringify(t):void 0}),i=await e.json().catch(()=>({}));if(!e.ok){let s=new Error(i.error||"http_"+e.status);throw s.status=e.status,s}return i}async function z0(){let n=await Bf("/api/horror/save");Ff=n.nick||"",n.save&&(we=wS(we,n.save)),Ja()}var it=n=>document.getElementById(n),is=it("cv"),Ni=new qc({canvas:is,antialias:!0,powerPreference:"high-performance"});Ni.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));Ni.shadowMap.enabled=!0;Ni.shadowMap.type=Qs;Ni.toneMapping=ha;Ni.toneMappingExposure=1.15;var At=new Yo;At.background=new Zt(0);At.fog=new qo(658189,.022);var Fe=new mn(72,1,.04,70);At.add(Fe);function kf(){Ni.setSize(innerWidth,innerHeight,!1),Fe.aspect=innerWidth/innerHeight,Fe.fov=innerWidth<innerHeight?80:70,Fe.updateProjectionMatrix()}addEventListener("resize",kf);kf();At.add(new ra(12107980,3814444,1.5));At.add(new ca(10133672,.55));var AS=new Set(At.children),ai=new la(16773334,30,22,.6,.6,1.6);ai.position.set(.1,-.13,-.5);ai.castShadow=!0;ai.shadow.mapSize.set(1024,1024);ai.shadow.camera.near=.15;ai.shadow.camera.far=22;ai.shadow.bias=-8e-4;Fe.add(ai);ai.target.position.set(0,-.8,-6);Fe.add(ai.target);var Tf=new Ut,RS=new Yn(16770760,.5,3.2,2);Fe.add(RS);var Wt=n=>new Ms(n),CS=Wt({map:Qu(),roughness:.85}),ss={vinyl:Wt({map:$c(),roughness:.55}),vinylWarm:Wt({map:$c(),color:14207152,roughness:.6}),vinylCold:Wt({map:$c(),color:11584712,roughness:.5}),wood:Wt({map:ju(),roughness:.6}),woodDark:Wt({map:ju(),color:10125424,roughness:.7}),tile:Wt({map:tf(),roughness:.25}),gym:Wt({map:Mm(),roughness:.35})},H0=(n,t)=>{let e=Ao(n,t);return e===yh||e===vh?"vinyl":["vinyl","wood","tile","wood","vinylWarm","vinyl","gym","vinylCold","wood"][Xe(n,t)]},Ns={walls:[]};for(let n in ss)Ns[n]=[];var Us=(n,t,e,i)=>(n.translate(t,e,i),n);for(let n=0;n<Ee;n++)for(let t=0;t<fe;t++){let e=Hn[Bt(t,n)],i=(t+.5)*F,s=(n+.5)*F;if(e===zn){let r=!1;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){let c=Ao(t+l,n+o);c!==zn&&c!==Va&&(r=!0)}r&&Ns.walls.push(Us(new ne(F,un,F),i,un/2,s));continue}if(e===Va){Ns.walls.push(Us(new ne(F,1,F),i,.5,s)),Ns.walls.push(Us(new ne(F,.75,F),i,un-.375,s));continue}if(e!==_o){let r=new Me(F,F);r.rotateX(-Math.PI/2),Ns[H0(t,n)].push(Us(r,i,0,s))}(e===yh||e===vh)&&Ns.walls.push(Us(new ne(F,.75,F),i,un-.375,s))}var G0=(n,t,e=!0)=>{if(!n.length)return;let i=new Et(Jc(n),t);return i.receiveShadow=!0,i.castShadow=e,At.add(i),i};G0(Ns.walls,CS);for(let n in ss)G0(Ns[n],ss[n],!1);{let n=Kc();n.repeat.set(fe,Ee);let t=new Et(new Me(fe*F,Ee*F),Wt({map:n,roughness:.95}));t.rotation.x=Math.PI/2,t.position.set(fe*F/2,un,Ee*F/2),t.receiveShadow=!0,At.add(t)}var zf=new Ut;At.add(zf);var ri=(n,t,e,i=0,s=0)=>(n.position.set(t*F,s,e*F),n.rotation.y=i,n.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),zf.add(n),n);function V0(n,t=At){n.updateMatrixWorld(!0);let e=new Map,i=[];n.traverse(s=>{if(!s.isMesh)return;if(Array.isArray(s.material)||s.isInstancedMesh){i.push(s);return}let r=s.geometry.clone().applyMatrix4(s.matrixWorld);r.index&&(r=r.toNonIndexed());for(let l of Object.keys(r.attributes))["position","normal","uv"].includes(l)||r.deleteAttribute(l);if(!r.attributes.uv)return;e.has(s.material)||e.set(s.material,{list:[],cast:!1});let o=e.get(s.material);o.list.push(r),o.cast=o.cast||s.castShadow});for(let s of i){let r=s.matrixWorld.clone();s.removeFromParent(),r.decompose(s.position,s.quaternion,s.scale),t.add(s)}for(let[s,r]of e){let o=new Et(Jc(r.list),s);o.castShadow=r.cast,o.receiveShadow=!0,t.add(o)}n.removeFromParent()}for(let[n,t]of Sh){let e=Xe(n,t),i=n+.5,s=t+.5;if(e===1&&t!==2)ri(Ta(),i,s-.15);else if(e===3){let r=ri(Ta(),i,s,(Math.random()-.5)*2.4);Math.random()<.4&&(r.rotation.z=Math.PI/2,r.position.y=.36)}else if(e===4)ri(Om(),i,s,t===3?0:Math.PI);else if(e===6)ri(Dm(),i,s,.3);else if(e===7)ri(Fm(),i,s);else if(e===8){let r=ri(Ta(),i,s,(Math.random()-.5)*2);Math.random()<.5&&(r.rotation.z=Math.PI/2,r.position.y=.36)}}ri(Um(),7.5,2.5);{let n=de(512,640,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,240,240,.8)",e.lineWidth=5,e.strokeRect(10,10,i-20,s-20),e.beginPath(),e.moveTo(10,s/2),e.lineTo(i-10,s/2),e.stroke(),e.beginPath(),e.arc(i/2,s/2,60,0,7),e.stroke();for(let r of[10,s-10])e.beginPath(),e.arc(i/2,r,140,r<s/2?0:Math.PI,r<s/2?Math.PI:7),e.stroke()}),t=new Et(new Me(15*F,9.6*F),Wt({map:n,transparent:!0,depthWrite:!1,roughness:.4}));t.rotation.x=-Math.PI/2,t.position.set(9*F,.005,21*F),At.add(t)}ri(cf(),8.5,16.08);ri(cf(),8.5,25.92,Math.PI);ri(Nm(),yo[0],yo[1]+.3);for(let[n,t,e]of[[41.5,19.5,.9],[46.5,22.5,1.2],[52.5,17.5,.8],[45.5,13.5,.7],[37.5,23.5,.6]]){let i=new Et(new Yi(e,24),Wt({color:1712694,roughness:.05,metalness:.2,transparent:!0,opacity:.85,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(n*F,.005,t*F),At.add(i)}{let n=new Et(new Yi(.9,24),Wt({map:de(256,256,(t,e,i)=>{t.clearRect(0,0,e,i);for(let s=0;s<30;s++){let r=t.createRadialGradient(128+(Math.random()-.5)*120,128+(Math.random()-.5)*120,0,128,128,30+Math.random()*40);r.addColorStop(0,"rgba(70,5,5,.7)"),r.addColorStop(1,"rgba(70,5,5,0)"),t.fillStyle=r,t.fillRect(0,0,e,i)}}),transparent:!0,depthWrite:!1,roughness:.2}));n.rotation.x=-Math.PI/2,n.position.set(7.5*F,.004,12.2*F),At.add(n)}{let n=[],e=new jo(new ne(1,1,1),Wt({map:mm(),roughness:.8}),1),i=new ve,s=new Wn,r=new di,o=new Zt,l=0,c=[8006186,2768746,3103290,6969898,4860506,9075306,2039583,10111530];for(let[a,h]of n)for(let u=0;u<4;u++)for(let f of[-1,1]){let d=-.55;for(;d<.53&&l<1;){let g=.025+Math.random()*.04,y=.2+Math.random()*.14;if(Math.random()<.06){d+=.08;continue}let p=Math.random()<.05?.25:0;r.set(0,0,p),s.setFromEuler(r),i.compose(new k((a+.5)*F+d+g/2,.1+u*.48+y/2,(h+.5)*F+f*.16),s,new k(g,y,.2)),e.setMatrixAt(l,i),e.setColorAt(l,o.setHex(c[Math.random()*c.length|0]).multiplyScalar(.7+Math.random()*.4)),l++,d+=g+.002}}e.count=l,e.castShadow=!0,e.receiveShadow=!0,At.add(e)}for(let[n,t]of Za)ri(hf(),n+.5,t===11?11+.25:15-.25,t===11?0:Math.PI);{let n=new Et(new Me(9*F,1.25),Wt({map:dm("\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83"),roughness:.9}));n.position.set(7.5*F,1.7,F+.025),n.receiveShadow=!0,At.add(n);let t=Wt({color:5914664,roughness:.7}),e=new Et(new ne(9*F,.04,.1),t);e.position.set(7.5*F,1.07,F+.06),At.add(e);let i=new Et(new ne(9*F+.1,.06,.06),t);i.position.set(7.5*F,2.35,F+.03),At.add(i);let s=new Et(new Yi(.17,32),Wt({map:de(128,128,r=>{r.fillStyle="#eee",r.beginPath(),r.arc(64,64,62,0,7),r.fill(),r.strokeStyle="#222",r.lineWidth=5,r.stroke(),r.lineWidth=4,r.beginPath(),r.moveTo(64,64),r.lineTo(64,22),r.moveTo(64,64),r.lineTo(92,74),r.stroke();for(let o=0;o<12;o++){let l=o/12*6.283;r.fillStyle="#222",r.fillRect(64+Math.cos(l)*52-2,64+Math.sin(l)*52-2,4,4)}}),roughness:.4}));s.position.set(7.5*F,2.65,F+.02),At.add(s)}for(let[n,t,e]of[[25.5,11,0],[42.5,15,Math.PI],[5,15,Math.PI]]){let i=new Et(new Me(2.2,1),Wt({map:pm(),roughness:.9}));i.position.set(n*F,1.55,t*F+(e?-.02:.02)),i.rotation.y=e,At.add(i)}for(let[n,t,e]of[[15.5,11,0],[34.5,11,0],[17.5,15,Math.PI],[35.5,15,Math.PI]])ri(zm(),n,t+(e?-.1:.1),e,0);V0(zf);var PS=Wt({color:4863008,roughness:.7});for(let[n,t,e]of B0){let i=(t+(t===10?1:0))*F,s=t===10?1:-1;for(let c of[0,1]){let a=new Et(new ne(.07,2.25,F+.04),PS);a.position.set((n+c)*F+(c?-.035:.035),1.125,(t+.5)*F),a.receiveShadow=!0,At.add(a)}let r=new Et(new ne(.95,2.1,.04),bt.doorWood());r.position.set((n+1)*F+.5,1.07,i+s*.03),r.castShadow=r.receiveShadow=!0,At.add(r);let o=new Et(new Me(.5,.6),Wt({color:658448,roughness:.1,metalness:.3}));o.position.set((n+1)*F+.5,1.6,i+s*.052),s<0&&(o.rotation.y=Math.PI),At.add(o);let l=new Et(new Me(.5,.19),Wt({map:Qc(F0[e]),roughness:.7,side:Ve}));l.position.set(n*F+.05,2.5,i+s*.27),l.rotation.y=Math.PI/2,At.add(l)}var vi=new Et(new ne(F-.04,2.25,.07),Wt({map:As("#4b5a50"),metalness:.6,roughness:.45}));vi.position.set(52.5*F,1.125,10.5*F+.3);vi.castShadow=vi.receiveShadow=!0;At.add(vi);{let n=new Et(new ne(.8,.05,.06),bt.steel());n.position.set(0,0,.06),vi.add(n)}{let n=new Et(new ne(.62,.23,.06),[0,0,0,0,0,0].map((e,i)=>i===4?new On({map:ef()}):Wt({color:14540253})));n.position.set(52.5*F,2.6,11*F+.05),At.add(n);let t=new Yn(3211136,.25,2,2);t.position.set(52.5*F,2.45,11*F+.3),At.add(t)}{let n=new Et(new Me(.5,.19),Wt({map:Qc("\uC9C0\uD558","#7a1515","#fff"),roughness:.7,side:Ve}));n.position.set(52*F+.05,2.5,11*F+.27),n.rotation.y=Math.PI/2,At.add(n)}{let n=Wt({map:As("#6c6a64"),roughness:.8}),t=Wt({color:657930,roughness:1});for(let i=0;i<9;i++){let s=new Et(new ne(3*F,.18,.3),n);s.position.set(52.5*F,-.09-.18*i,4*F-.15-i*.3),s.receiveShadow=!0,At.add(s)}for(let i of[51,54]){let s=new Et(new ne(.05,2,2.4),t);s.position.set(i*F,-1,3*F),At.add(s)}let e=new Et(new ne(3*F,2,.05),t);e.position.set(52.5*F,-1,2*F),At.add(e)}var W0=Wt({color:13421772,emissive:15659775,emissiveIntensity:1.4}),Hf=Wt({color:1911,emissive:546,emissiveIntensity:.1,roughness:.4}),X0=new ne(1.2,.05,.28),q0=[],Y0=[];for(let n=3;n<56;n+=4){let t=n===11||n===31||n===47,e=new Et(X0,t?W0.clone():Hf);if(e.position.set(n*F,un-.03,12.5*F),At.add(e),t){let i=new Yn(14674175,5,9,2);i.position.set(n*F,un-.25,12.5*F),At.add(i),q0.push({l:e,p:i,base:5,t:Math.random()*5})}}for(let[n,t]of[[4,3.5],[11,3.5],[4,7],[11,7]]){let e=new Et(X0,Hf.clone());e.position.set(n*F,un-.03,t*F),At.add(e),Y0.push(e)}var mh=new Yn(16773853,0,14,1.6);mh.position.set(7.5*F,2.6,5.5*F);At.add(mh);function Z0(n,t){let e=Bm(6*F-.1);e.position.set(19*F,0,F),n.add(e);for(let i=0;i<3;i++){let s=km();s.position.set(22*F-.05,0,5*F+.95+i*1.95),s.rotation.y=-Math.PI/2,n.add(s)}if(t){let i=tf();i.repeat.set(8,9);let s=new Et(new Me(8*F,9*F),Wt({map:i,roughness:.25}));s.rotation.x=-Math.PI/2,s.position.set(19*F,.001,5.5*F),s.receiveShadow=!0,n.add(s);let r=Kc();r.repeat.set(8,9);let o=new Et(new Me(8*F,9*F),Wt({map:r,roughness:.95}));o.rotation.x=Math.PI/2,o.position.set(19*F,un,5.5*F),n.add(o);let l=f=>{let d=Qu();return d.repeat.set(f,1),Wt({map:d,roughness:.85})},c=new Et(new Me(9*F,un),l(9));c.position.set(15*F,un/2,5.5*F),c.rotation.y=Math.PI/2,n.add(c);let a=c.clone();a.position.x=23*F,a.rotation.y=-Math.PI/2,n.add(a);let h=new Et(new Me(8*F,un),l(8));h.position.set(19*F,un/2,10*F),h.rotation.y=Math.PI,n.add(h);let u=new Et(new Me(F,2.25),new On({color:0}));u.position.set(18.5*F,1.125,10*F-.01),u.rotation.y=Math.PI,n.add(u),n.traverse(f=>{f.isMesh&&(f.receiveShadow=!0)})}}Z0(At,!1);var bh=new Ut;bh.position.z=2*F;bh.scale.z=-1;At.add(bh);Z0(bh,!0);var IS=_m(),LS=new $s({color:10466496,roughness:.04,metalness:.1,transparent:!0,opacity:.16}),Gf=new Et(new Me(6*F,1.25),LS);Gf.position.set(19*F,1.625,F+.002);At.add(Gf);var vo=new Et(new Me(6*F,1.25),new On({map:IS,transparent:!0,depthWrite:!1}));vo.position.set(19*F,1.625,F+.004);vo.visible=!1;At.add(vo);{let n=bt.steel();for(let[t,e,i,s]of[[6*F+.06,.03,19*F,2.25],[6*F+.06,.03,19*F,1],[.03,1.25,16*F,1.625],[.03,1.25,22*F,1.625]]){let r=new Et(new ne(t,e,.03),n);r.position.set(i,s,F+.01),At.add(r)}}var yi=rr();At.add(yi);yi.visible=!1;var Vf=new Ut;At.add(Vf);var DS=[[25.5,1,0],[27.3,1,0],[30.5,1,0],[32.4,1,0],[34.4,1,0],[24,4,3],[24,7.5,3],[36,3,2],[36,6.5,2],[26.5,10,1],[32,10,1],[27.3,11,0],[31,11,0],[36.5,11,0],[24,15,1],[29,15,1]],M0=[[38.5,11,0],[43,15,1],[50,15,1],[55.5,15,1]],co={};function S0(n,t,e,i){let s=new Et(new Me(.95,1.5),Wt({map:n,transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),r=e*F;s.position.set(t*F,.42+.75+(Math.random()-.5)*.15,i===0?r+.012:i===1?r-.012:r),i===1&&(s.rotation.y=Math.PI),i===2&&(s.rotation.y=-Math.PI/2,s.position.x=t*F-.012),i===3&&(s.rotation.y=Math.PI/2,s.position.x=t*F+.012),s.rotation.z=(Math.random()-.5)*.12,Vf.add(s)}function NS(){Vf.clear(),DS.forEach(([n,t,e],i)=>S0(co[i]||(co[i]=Sa(i+1,!1)),n,t,e));for(let n=0;n<Math.min(M0.length,we.folds||0);n++){let[t,e,i]=M0[n];S0(co["me"+n]||(co["me"+n]=Sa(100+n,!0)),t,e,i)}}var Ef="";function US(){return Ef||(Ef=Sa(7,!0).image.toDataURL()),Ef}var dr={};for(let n in dh){let[t,e]=dh[n],i=new Et(new Me(.21,.28),Wt({map:jc(),roughness:.9,emissive:2762776,side:Ve}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*3,i.position.set(t*F,.006,e*F),i.receiveShadow=!0,At.add(i),dr[n]=i}var Wa=Hm();At.add(Wa);var Wf=[],Mo=new Et(new ne(.5,.07,.38),Wt({map:to(),roughness:.8}));Mo.position.set(yo[0]*F,.45,(yo[1]+.3)*F);Mo.rotation.y=.2;At.add(Mo);var So=new Et(new ne(.45,.06,.32),Wt({map:to(),roughness:.8}));So.position.set(ph[0]*F,.03,ph[1]*F);So.rotation.y=-.4;At.add(So);var J0=ES.map(([n,t])=>{let e=th();return e.position.set(n*F,0,t*F),e.rotation.y=Math.random()*3,e.userData.x=n,e.userData.y=t,At.add(e),e});for(let n of SS){let t=rr(n.o);n.big&&t.scale.set(1.12,1.03,1.12);let e=(n.y+.5-.15)*F+.42;t.position.set((n.x+.5)*F,0,e),t.rotation.y=Math.PI,af(t),t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),At.add(t),Wf.push({model:t,px:n.x+.5,py:n.y+.85,name:n.name,lines:n.lines,i:0})}var Th=new Ut;for(let n of At.children.slice())AS.has(n)||Th.add(n);At.add(Th);var $a={depth:0,T:Hn,RM:fr,LOCKERS:Za,start:[7.5,8.5],group:Th},fo={},OS=n=>{let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}},FS=Wt({map:bm(),roughness:.9}),$0=Wt({map:Tm(),roughness:.95}),BS=Wt({map:Em(),roughness:.6});function K0(n){if(fo[n])return fo[n];let t=OS(n*7919+13),e=new Uint8Array(fe*Ee).fill(zn),i=new Uint8Array(fe*Ee),s=[];for(let E=0;E<400&&s.length<14;E++){let C=4+(t()*8|0),D=3+(t()*5|0),X=1+(t()*(fe-C-2)|0),H=1+(t()*(Ee-D-2)|0);s.some(Y=>X<Y.x+Y.w+2&&X+C+2>Y.x&&H<Y.y+Y.h+2&&H+D+2>Y.y)||s.push({x:X,y:H,w:C,h:D})}s.forEach((E,C)=>{E.type=C<3?1:C===3||C===7?3:0;for(let D=E.y;D<E.y+E.h;D++)for(let X=E.x;X<E.x+E.w;X++)e[Bt(X,D)]=Ls,i[Bt(X,D)]=E.type});let r=E=>E.x+(E.w>>1),o=E=>E.y+(E.h>>1),l=(E,C)=>{if(E<1||C<1||E>=fe-1||C>=Ee-1)return;let D=Bt(E,C);e[D]===zn&&(e[D]=Ls,i[D]=0)},c=(E,C)=>{let D=r(E),X=o(E),H=r(C),Y=o(C),et=t()<.5?2:3,St=()=>{for(;D!==H;){for(let $=0;$<et;$++)l(D,X+$);D+=Math.sign(H-D)}},Lt=()=>{for(;X!==Y;){for(let $=0;$<et;$++)l(D+$,X);X+=Math.sign(Y-X)}};t()<.5?(St(),Lt()):(Lt(),St());for(let $=0;$<et;$++)for(let mt=0;mt<et;mt++)l(D+$,X+mt)};for(let E=1;E<s.length;E++){let C=0,D=1e9;for(let X=0;X<E;X++){let H=Math.hypot(r(s[E])-r(s[X]),o(s[E])-o(s[X]));H<D&&(D=H,C=X)}c(s[E],s[C])}for(let E=0;E<4;E++){let C=s[t()*s.length|0],D=s[t()*s.length|0];C!==D&&c(C,D)}for(let E of s){if(E.type===0&&E.w>=7&&E.h>=5)for(let C=E.y+2;C<E.y+E.h-2;C+=3)for(let D=E.x+2;D<E.x+E.w-2;D+=3)e[Bt(D,C)]=zn;if(E.type===1&&E.w>=6&&E.h>=5)for(let C=E.y+1;C<E.y+E.h-1;C+=2)for(let D=E.x+1;D<E.x+E.w-1;D+=2)e[Bt(D,C)]=uo}let a=[s[0].x+(s[0].w>>1)+.5,s[0].y+s[0].h-.5],h=[Hn,fr];Hn=e,fr=i;let u=new Int32Array(fe*Ee).fill(-1),f=[Bt(s[0].x,s[0].y)];u[f[0]]=0;for(let E=0;E<f.length;E++){let C=f[E],D=C%fe,X=C/fe|0;for(let[H,Y]of[[1,0],[-1,0],[0,1],[0,-1]]){let et=Bt(D+H,X+Y);$n(D+H,X+Y)||u[et]>=0||(u[et]=u[C]+1,f.push(et))}}let d=s.slice(1).filter(E=>E.type!==1&&u[Bt(r(E),o(E))]>0).sort((E,C)=>u[Bt(r(C),o(C))]-u[Bt(r(E),o(E))]),g=d[0]||s[s.length-1],y=d[1]||s[1],p=[r(g),o(g)];for(let E=p[1];E<=p[1]+1;E++)for(let C=p[0];C<=p[0]+1;C++)C<g.x+g.w&&E<g.y+g.h&&(e[Bt(C,E)]=_o);let m=[r(y),y.y],M=[];for(let E=0;E<400&&M.length<7;E++){let C=2+(t()*(fe-4)|0),D=2+(t()*(Ee-4)|0);if(e[Bt(C,D)]!==Ls||i[Bt(C,D)]!==0)continue;let X=e[Bt(C,D-1)]===zn,H=e[Bt(C,D+1)]===zn;if(X===H||e[Bt(C-1,D)]!==Ls||e[Bt(C+1,D)]!==Ls)continue;let Y=X?1:-1;e[Bt(C,D+Y)]!==Ls||e[Bt(C,D+2*Y)]!==Ls||(e[Bt(C,D)]=Mh,M.push([C,D,0,Y]))}let R=[];for(let E=0;E<Ee;E++)for(let C=0;C<fe;C++)!$n(C,E)&&i[Bt(C,E)]===0&&u[Bt(C,E)]>12&&R.push([C+.5,E+.5]);Hn=h[0],fr=h[1];let S=new Ut;S.visible=!1,At.add(S);let A=[],w={carpet:[],wood:[],woodDark:[]},x=[];for(let E=0;E<Ee;E++)for(let C=0;C<fe;C++){let D=e[Bt(C,E)],X=(C+.5)*F,H=(E+.5)*F;if(D===zn){let Y=!1;for(let et=-1;et<=1;et++)for(let St=-1;St<=1;St++){let Lt=C+St,$=E+et;Lt>=0&&$>=0&&Lt<fe&&$<Ee&&e[Bt(Lt,$)]!==zn&&(Y=!0)}Y&&A.push(Us(new ne(F,un,F),X,un/2,H));continue}if(D!==_o){let Y=new Me(F,F);Y.rotateX(-Math.PI/2),w[i[Bt(C,E)]===1?"wood":i[Bt(C,E)]===3?"woodDark":"carpet"].push(Us(Y,X,0,H))}C%3===1&&E%3===1&&x.push(Us(new ne(1.1,.05,.5),X,un-.03,H))}let b=(E,C,D=!0)=>{if(!E.length)return null;let X=new Et(Jc(E),C);return X.receiveShadow=!0,X.castShadow=D,S.add(X),X};b(A,FS),b(w.carpet,$0,!1),b(w.wood,ss.wood,!1),b(w.woodDark,ss.woodDark,!1);let U=Wt({color:15658717,emissive:16052424,emissiveIntensity:1.2});b(x,U,!1);{let E=Kc();E.repeat.set(fe,Ee);let C=new Et(new Me(fe*F,Ee*F),Wt({map:E,color:14210224,roughness:.95}));C.rotation.x=Math.PI/2,C.position.set(fe*F/2,un,Ee*F/2),S.add(C)}let P=new Ut;S.add(P);for(let E=0;E<Ee;E++)for(let C=0;C<fe;C++)if(e[Bt(C,E)]===uo){let D=Ta();D.position.set((C+.5)*F,0,(E+.35)*F),t()<.25&&(D.rotation.z=Math.PI/2,D.position.y=.36),D.rotation.y=(t()-.5)*.6,P.add(D)}for(let[E,C,,D]of M){let X=hf();X.position.set((E+.5)*F,0,(C+(D>0?.25:.75))*F),X.rotation.y=D>0?0:Math.PI,P.add(X)}V0(P,S);{let E=Wt({map:As("#6c6a64"),roughness:.8}),C=Wt({color:328965,roughness:1});for(let Y=0;Y<7;Y++){let et=new Et(new ne(2*F,.18,.32),E);et.position.set((p[0]+1)*F,-.09-.18*Y,(p[1]+2)*F-.16-.32*Y),S.add(et)}let D=new Et(new ne(2*F,.02,2*F),C);D.position.set((p[0]+1)*F,-1.4,(p[1]+1)*F),S.add(D);let X=new Et(new ne(.62,.23,.06),[0,0,0,0,0,0].map((Y,et)=>et===4||et===5?new On({map:ef()}):Wt({color:14540253})));X.position.set((p[0]+1)*F,2.55,(p[1]+1)*F),S.add(X);let H=new Yn(3211136,1.2,4,2);H.position.set((p[0]+1)*F,2.2,(p[1]+1)*F),S.add(H)}{let E=new Et(new Me(1,2.1),BS);E.position.set((m[0]+.5)*F,1.05,m[1]*F+.012),S.add(E);let C=new Yn(16724e3,1,4,2);C.position.set((m[0]+.5)*F,2.2,m[1]*F+.6),S.add(C)}let O=[];for(let E of s.filter(C=>C.type===3))for(let C=E.x;C<E.x+E.w;C+=2)e[Bt(C,E.y-1)]===zn&&O.push([C+.5,E.y,0]);O.slice(0,10).forEach(([E,C,D],X)=>{let H=new Et(new Me(.95,1.5),Wt({map:co[X]||(co[X]=Sa(X+1,!1)),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));H.position.set(E*F,1.15,C*F+.012),H.rotation.z=(t()-.5)*.15,S.add(H)});let z=[];for(let E=0;E<Math.min(5,x.length);E++){let C=t()*x.length|0,D=x[C].boundingBox||(x[C].computeBoundingBox(),x[C].boundingBox),X=new k;D.getCenter(X);let H=new Yn(16773824,4,10,2);H.position.set(X.x,un-.3,X.z),S.add(H),z.push({p:H,base:4,t:t()*4,l:null})}let q=[];if(n===1){let E=s[1],C=[];for(let X=E.y;X<E.y+E.h;X++)for(let H=E.x;H<E.x+E.w;H++)e[Bt(H,X)]===uo&&C.push([H,X]);bS.forEach((X,H)=>{let Y=C[H],et=Y?Y[0]+.5:E.x+1.5+H,St=Y?Y[1]+.85:E.y+E.h-1.5,Lt=rr(X.o);Lt.position.set(et*F,0,(St-.35)*F+.42-.18),Lt.rotation.y=Math.PI,Y?af(Lt):Lt.userData.standing=!0,Lt.traverse($=>{$.isMesh&&($.castShadow=!0)}),S.add(Lt),q.push({model:Lt,px:et,py:St,name:X.name,lines:X.lines,i:0})});let D=new Et(new Me(.5,.19),Wt({map:Qc("2-1"),roughness:.7,side:Ve}));D.position.set((E.x+E.w/2)*F,2.5,E.y*F+.02),S.add(D)}let I={depth:n,T:e,RM:i,LOCKERS:M,start:a,group:S,spawn:R,stair:p,door:m,flick:z,npcs:q,rooms:s};return fo[n]=I,I}var Qt=0,De=$a,po=!1;function Eh(n){Hn=n.T,fr=n.RM,Za=n.LOCKERS,Th.visible=n===$a;for(let t in fo)fo[t].group.visible=fo[t]===n;De=n,Qt=n.depth,At.fog.color.set(Qt?1315852:658189)}var wh=n=>n===0?"1\uCE35":"\uC9C0\uD558 "+n+"\uCE35";function gh(){po||(po=!0,Xa(0),To(null),it("fade").classList.add("show"),Ge(1.2,.5,150,0,1),setTimeout(()=>{let n=K0(Qt+1);Eh(n),we.deep=Math.max(we.deep||0,Qt),Ja(),_r(!0),it("floorBig").textContent=wh(Qt),it("floorBig").classList.add("show"),setTimeout(()=>{it("fade").classList.remove("show"),po=!1},400),setTimeout(()=>it("floorBig").classList.remove("show"),2600)},700))}var _n={},ze=0,Bs=0;addEventListener("keydown",n=>{let t=n.key.toLowerCase();_n[t]=!0,t==="c"&&eg(),t==="e"&&fg(),(t==="f"||t==="q")&&$f(),t==="g"&&lg(),t==="h"&&(gr=!0,it("earB").classList.add("on")),(t==="i"||t==="b")&&td(),t==="m"&&ed()});addEventListener("keyup",n=>{_n[n.key.toLowerCase()]=!1,n.key.toLowerCase()==="h"&&(gr=!1,it("earB").classList.remove("on"))});var tn={id:null,ox:0,oy:0,x:0,y:0},Xf=new Map;is.addEventListener("pointerdown",n=>{if(Ui(),n.pointerType==="mouse"){Dn&&!pr()&&!document.pointerLockElement&&is.requestPointerLock&&is.requestPointerLock();return}tn.id===null&&n.clientX<innerWidth*.45?(tn.id=n.pointerId,tn.ox=n.clientX,tn.oy=n.clientY,tn.x=tn.y=0):Xf.set(n.pointerId,{x:n.clientX,y:n.clientY}),is.setPointerCapture(n.pointerId)});is.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"){document.pointerLockElement===is&&b0(n.movementX*.0024,n.movementY*.0024);return}if(n.pointerId===tn.id){let e=n.clientX-tn.ox,i=n.clientY-tn.oy,s=Math.hypot(e,i),r=55;s>r&&(e*=r/s,i*=r/s),tn.x=e/r,tn.y=i/r;return}let t=Xf.get(n.pointerId);t&&(b0((n.clientX-t.x)*.0055,(n.clientY-t.y)*.0055),t.x=n.clientX,t.y=n.clientY)});var Q0=n=>{n.pointerId===tn.id&&(tn.id=null,tn.x=tn.y=0),Xf.delete(n.pointerId)};is.addEventListener("pointerup",Q0);is.addEventListener("pointercancel",Q0);function b0(n,t){!Dn||!fn||me||(ze-=n,Bs=Math.max(-1.2,Math.min(1.2,Bs-t)))}var qf=!1,Li=!1,mo=it("runB"),j0=it("sneakB"),Lf=it("hideB");mo.addEventListener("pointerdown",n=>{n.preventDefault(),Ui(),qf=!0,mo.classList.add("on"),mo.setPointerCapture(n.pointerId)});var tg=()=>{qf=!1,mo.classList.remove("on")};mo.addEventListener("pointerup",tg);mo.addEventListener("pointercancel",tg);function eg(){Li=!Li,j0.classList.toggle("on",Li)}j0.addEventListener("pointerdown",n=>{n.preventDefault(),Ui(),eg()});Lf.addEventListener("pointerdown",n=>{n.preventDefault(),fg()});it("throwB").addEventListener("pointerdown",n=>{n.preventDefault(),$f()});it("shoutB").addEventListener("pointerdown",n=>{n.preventDefault(),lg()});var kS=n=>{n.preventDefault(),gr=!0,it("earB").classList.add("on")},Yf=()=>{gr=!1,it("earB").classList.remove("on")};it("earB").addEventListener("pointerdown",kS);it("earB").addEventListener("pointerup",Yf);it("earB").addEventListener("pointercancel",Yf);it("earB").addEventListener("pointerleave",Yf);var T0=0;function ge(n,t=2400){let e=it("toast");e.innerHTML=n,e.style.opacity=1,clearTimeout(T0),T0=setTimeout(()=>e.style.opacity=0,t)}var Ce=(n,t)=>{it(n).classList.toggle("show",t),t&&document.pointerLockElement&&document.exitPointerLock()},pr=()=>document.querySelector(".modal.show"),Vt=null,rs=null,xh=null,lr=null,Ua=null;var wf=0;function Ui(){if(Vt){Vt.state==="suspended"&&Vt.resume();return}try{Vt=new(window.AudioContext||window.webkitAudioContext)}catch{return}rs=Vt.createGain(),rs.gain.value=.85,rs.connect(Vt.destination);let n=Vt.createOscillator(),t=Vt.createGain(),e=Vt.createOscillator(),i=Vt.createGain(),s=Vt.createBiquadFilter();n.type="sawtooth",n.frequency.value=46,t.gain.value=.03,e.frequency.value=.13,i.gain.value=5,s.type="lowpass",s.frequency.value=170,e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(t),t.connect(rs),n.start(),e.start(),fetch("steps.mp3").then(r=>r.arrayBuffer()).then(r=>Vt.decodeAudioData(r)).then(r=>{xh=r}).catch(()=>{})}function Os(n,t,e,i=.2,s="sine"){if(!Vt)return;let r=Vt.createOscillator(),o=Vt.createGain();r.type=s,r.frequency.value=n,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(o),o.connect(rs),r.start(t),r.stop(t+e+.05)}function bo(n=1){if(!Vt)return;let t=Vt.currentTime;[659,523,587,392,392,587,659,523].forEach((e,i)=>{Os(e*n,t+i*.42,1.5,.15),Os(e*2*n,t+i*.42,.6,.03),Os(e*n*1.01,t+i*.42,1.5,.05)})}function ng(){if(!Vt)return;let n=Vt.currentTime;Os(880,n,.8,.12),Os(880,n+.35,.8,.12)}function Ge(n,t,e=1200,i=0,s=1){if(!Vt)return;let r=Vt.createBufferSource(),o=Vt.createBuffer(1,Math.max(1,Vt.sampleRate*n),Vt.sampleRate),l=o.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);r.buffer=o;let c=Vt.createBiquadFilter();c.type="bandpass",c.frequency.value=e,c.Q.value=s;let a=Vt.createGain();a.gain.value=t;let h=a;if(r.connect(c),c.connect(a),Vt.createStereoPanner){let u=Vt.createStereoPanner();u.pan.value=i,a.connect(u),h=u}h.connect(rs),r.start()}var zS=n=>Ge(.07,n,350+Math.random()*200,0,2);function HS(){if(!Vt)return;let n=Vt.currentTime;Os(55,n,.18,.35),Os(50,n+.22,.2,.28)}function GS(){if(!Vt)return;let n=Vt.currentTime;Ge(1.3,1.3,1800,0,.7);let t=Vt.createOscillator(),e=Vt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(950,n),t.frequency.exponentialRampToValueAtTime(130,n+1.1),e.gain.setValueAtTime(.42,n),e.gain.exponentialRampToValueAtTime(.001,n+1.2),t.connect(e),e.connect(rs),t.start(n),t.stop(n+1.25)}var VS=()=>{Ge(.9,1,5e3,0,.5),Ge(.4,.6,2500,0,1)},E0=-1;function Xa(n){if(!Vt||!xh||(lr||(lr=Vt.createBufferSource(),lr.buffer=xh,lr.loop=!0,Ua=Vt.createGain(),Ua.gain.value=0,lr.connect(Ua),Ua.connect(rs),lr.start()),n===E0))return;E0=n;let t=n===2?1:n===1?.6:n===.5?.12:0,e=n===2?1.75:n===1?1.15:.7;Ua.gain.setTargetAtTime(t,Vt.currentTime,n?.04:.08),n&&lr.playbackRate.setTargetAtTime(e,Vt.currentTime,.05)}var hh=0;function To(n){if(!n){hh=0;return}if(hh-=1/60,hh>0)return;hh=.55;let t=Math.hypot(n.x-J.x,n.y-J.y),e=Math.max(.03,Math.min(1.2,2.2/(1+t*.3))),i=Mi(n.x,n.y);Ge(.05,e,3200,i,3),Ge(.09,e*.7,260,i,2)}function Mi(n,t){let e=n-J.x,i=t-J.y,s=Math.cos(ze),r=-Math.sin(ze),o=Math.hypot(e,i)||1;return Math.max(-1,Math.min(1,(e*s+i*r)/o))}var J,sn,en,hn,oi,Zf,me,qa,fn,Dn=!1,ho=null,Ds=0,Fs=!1,go,Oa=0,Fa=1.6,$t={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},He={phone:1,broom:0,peTop:!1,peBottom:!1,map:!0},mr="broom",ls=!1,xe=null,gr=!1,Df=1,Eo=!1;var Ya=[],fh=null,ao=0,Ba=!1;var ro=null,w0=(n,t)=>!$n(n,t)&&(Xe(n,t)===2||n===18&&t===10),WS=(n,t)=>!$n(n,t)&&Xe(n,t)===6,Ah=n=>Math.max(35,62-n*5),ig=22,XS=new Pn(.2,.23,1,10,1,!0),qS=0;function Di(n,t,e){let i=n==="sci"?Pm():n==="doll"?Cm():n==="monitor"?Rm():n==="pe"?Im():n==="ball"?Lm(Math.random()*3|0):rr();n==="mirror"&&Rs(i,!0),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),At.add(i);let s={kind:n,x:t,y:e,path:[],pathT:0,state:"wander",alertT:0,target:null,rustleT:0,model:i,life:13,fx:0,fy:1,nid:++qS};if(n==="doll"){s.trailG=new Ut,At.add(s.trailG),s.trail=[];for(let r=0;r<26;r++){let o=new Et(XS,i.userData.skin);o.castShadow=!0,o.visible=!1,s.trailG.add(o)}}return sn.push(s),s}function ka(n){At.remove(n.model),n.trailG&&At.remove(n.trailG),sn=sn.filter(t=>t!==n)}function xr(){let n=De.spawn,t=n[0],e=-1;for(let i=0;i<40;i++){let s=n[Math.random()*n.length|0],r=Math.hypot(s[0]-J.x,s[1]-J.y);r>e&&(e=r,t=s)}return t}function _r(){if(sn)for(let n of sn.slice())ka(n);J={x:De.start[0],y:De.start[1]},ze=0,Bs=0,sn=[],en="break",oi=1,hn=Ah(1),me=null,qa=0,fn=!0,ho=null,Ds=0,ls=!1,Uf(),Df=2+(Math.random()*2|0);for(let n of Ya)At.remove(n.obj);if(Ya=[],cs=[],nn&&hg(),it("vent").classList.remove("show"),Qt===0){Zf=0,Jn()&&(Di("doll",30.5,5.5),Di("sci",46.5,20.5)),fh=Di("pe",_0[0],_0[1]),fh.state="idle",hr=!1,vi.visible=!0,vi.position.y=1.125,Fs=!1,Eo=!1,He={phone:1,broom:0,peTop:!1,peBottom:!1,map:!0},ao=0,Ba=!1,So.visible=!0,go=TS,Wa.visible=!0,Wa.position.set(go[0]*F,.008,go[1]*F),Mo.visible=!0;for(let n of J0)n.visible=!0;for(let n in dr)dr[n].visible=!we.notes.includes(n);$t={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},Rs(yi,!1),vo.visible=!1,Gf.visible=!0,NS()}else{fh=null,He.broom=Math.max(He.broom,1);let n=Math.min(3,1+Math.floor(Qt/2));if(Jn()){for(let t=0;t<n;t++){let e=xr();Di("doll",e[0],e[1])}if(Qt>=2){let t=xr();Di("sci",t[0],t[1])}}}os(),To(null),Xa(0),it("floorChip").textContent=wh(Qt)}function os(){Eo=He.peTop||He.peBottom;let n=He.phone+He.broom;it("keyChip").textContent=(Fs?"\u{1F511} \uC5F4\uC1E0":"\u{1F511} \uC5C6\uC74C")+" \xB7 "+(Eo?"\u{1F455} \uCCB4\uC721\uBCF5":"\u{1F454} \uAD50\uBCF5"),it("keyChip").classList.toggle("got",Fs);let t=He[mr]>0?mr:He.broom>0?"broom":"phone";it("throwB").innerHTML="<span>"+(n?t==="broom"?"\u{1F9F9}":"\u{1F4F1}":"\u270B")+"</span>\uB358\uC9C0\uAE30 "+n,it("throwB").style.opacity=n?1:.4}function es(n,t,e,i,s=k0){if(n|=0,t|=0,e|=0,i|=0,n===e&&t===i)return[];let r=new Int32Array(fe*Ee).fill(-1),o=[Bt(n,t)];r[Bt(n,t)]=Bt(n,t);for(let a=0;a<o.length;a++){let h=o[a],u=h%fe,f=h/fe|0;if(u===e&&f===i)break;for(let[d,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let y=u+d,p=f+g;if(!s(y,p))continue;let m=Bt(y,p);r[m]===-1&&(r[m]=h,o.push(m))}}let l=Bt(e,i);if(r[l]===-1)return null;let c=[];for(let a=l;a!==Bt(n,t);a=r[a])c.push([a%fe+.5,(a/fe|0)+.5]);return c.reverse()}function sg(){for(let n=0;n<200;n++){let t=Math.random()*fe|0,e=Math.random()*Ee|0;if(k0(t,e)&&(Xe(t,e)===0||Math.random()<.5))return[t,e]}return[28,12]}function cr(n,t,e){if(!n.path||!n.path.length)return!0;let[i,s]=n.path[0],r=i-n.x,o=s-n.y,l=Math.hypot(r,o),c=t*e;return l<=c?(n.x=i,n.y=s,n.path.shift()):(n.x+=r/l*c,n.y+=o/l*c,n.fx=r/l,n.fy=o/l),!n.path.length}var za=()=>Xe(J.x|0,J.y|0)===1;function A0(){if(sn.some(e=>e.kind==="monitor"))return;let n=Qt?[xr(),xr()]:[[1.5,12.5],[56.5,12.5]].sort((e,i)=>Math.hypot(i[0]-J.x,i[1]-J.y)-Math.hypot(e[0]-J.x,e[1]-J.y)),t=Di("monitor",n[0][0],n[0][1]);t.state="patrol",t.target=n[1],ge("\u{1F514} \uC218\uC5C5 \uC2DC\uAC04\uC774\uB2E4. \uBCF5\uB3C4\uC5D0\uC11C \uBC1C\uC18C\uB9AC\uAC00 \uB4E4\uB9B0\uB2E4\u2026",2600)}function YS(n){Zf+=n;let t=hn;if(hn-=n,Jn()){if(en==="break"&&t>10&&hn<=10&&(ng(),ge("\u26A0\uFE0F \uACE7 \uC218\uC5C5 \uC885\uC774 \uC6B8\uB824\uC694! \uAD50\uC2E4\uB85C \uB3CC\uC544\uAC00\uC138\uC694")),hn<=0)if(en==="break")en="class",hn=ig,bo(),A0();else{en="break",oi++,hn=Ah(oi),bo(1.06);for(let a of sn.filter(h=>h.kind==="monitor"))ka(a);To(null),oi===3&&sn.filter(a=>a.kind==="doll").length<2?(Di("doll",20.5,24.5),ge("\u{1F58D}\uFE0F \uBCF5\uB3C4 \uC5B4\uB518\uAC00\uC5D0\uC11C \uBCBD\uC774 \uC811\uD788\uB294 \uC18C\uB9AC\uAC00 \uD558\uB098 \uB354 \uB4E4\uB9B0\uB2E4\u2026",3e3)):ge(oi+"\uAD50\uC2DC \uC26C\uB294 \uC2DC\uAC04")}en==="class"&&A0()}let e=tn.x,i=tn.y;(_n.w||_n.arrowup)&&(i=-1),(_n.s||_n.arrowdown)&&(i=1),(_n.a||_n.arrowleft)&&(e=-1),(_n.d||_n.arrowright)&&(e=1);let s=0,r=(qf||_n.shift)&&!Li&&i<.3,o=Math.hypot(e,i)*(ls||xe&&xe.pulled?0:1);if(xe&&xe.pulled){(!xe.path||!xe.path.length||(xe.pt-=n)<0)&&(xe.pt=1,xe.path=es(J.x,J.y,xe.tx,xe.ty,(d,g)=>!$n(d,g))||[]);let a=xe.path[0]||[xe.tx,xe.ty];Math.hypot(a[0]-J.x,a[1]-J.y)<.3&&xe.path.shift();let h=a[0]-J.x,u=a[1]-J.y,f=Math.hypot(h,u)||1;e=0,i=0,Of(h/f*1.5*n,u/f*1.5*n),ze+=((Math.atan2(-h,-u)-ze+Math.PI*3)%(Math.PI*2)-Math.PI)*n*2}if(ls&&(e=0,i=0),me)qa+=n,qa>8&&(jf(),ge("\uC228\uC774 \uB9C9\uD600\uC11C \uB6F0\uCCD0\uB098\uC654\uB2E4!"),s=6);else if(o>.15){let a=-Math.sin(ze),h=-Math.cos(ze),u=Math.cos(ze),f=-Math.sin(ze),d=(r?3.9:Li?1.1:2.2)*(gr?.5:1),g=d*n*Math.min(1,o)/o;Of((a*-i+u*e)*g,(h*-i+f*e)*g),s=r?7.5:Li?.6:3;let y=Oa;Oa+=n*(r?11:Li?4.5:7.5),!xh&&Math.floor(y/Math.PI)!==Math.floor(Oa/Math.PI)&&zS(r?.55:Li?.04:.2),Xa(r?2:Li?.5:1)}if((me||o<=.15)&&Xa(0),J.noise=s,Qt===0){for(let a in dh)if(dr[a].visible){let[h,u]=dh[a];Math.hypot(h-J.x,u-J.y)<.75&&(dr[a].visible=!1,we.notes.includes(a)||(we.notes.push(a),Ja()),c1(a))}!Fs&&Math.hypot(go[0]-J.x,go[1]-J.y)<.75&&(Fs=!0,Wa.visible=!1,os(),Ge(.4,.5,4e3,0,3),J.noise=6,ge("\u{1F511} \uC9C0\uD558 \uACC4\uB2E8 \uC5F4\uC1E0\uB97C \uC8FC\uC6E0\uB2E4! <br>\uCC30\uB791\u2014 \uC18C\uB9AC\uAC00 \uC6B8\uB838\uB2E4\u2026")),Mo.visible&&Math.hypot(yo[0]-J.x,yo[1]-J.y)<.9&&(He.peTop=!0,Mo.visible=!1,os(),ge("\u{1F455} \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0\uC11C \uCCB4\uC721\uBCF5 \uC0C1\uC758\uB97C \uAEBC\uB0B4 \uC785\uC5C8\uB2E4")),So.visible&&Math.hypot(ph[0]-J.x,ph[1]-J.y)<.8&&(He.peBottom=!0,So.visible=!1,os(),ge("\u{1F456} \uAD50\uC2E4 \uB4A4\uC5D0\uC11C \uCCB4\uC721\uBCF5 \uD558\uC758\uB97C \uCC3E\uC544 \uC785\uC5C8\uB2E4"));for(let a of J0)a.visible&&Math.hypot(a.userData.x-J.x,a.userData.y-J.y)<.8&&(a.visible=!1,He.broom++,os(),ge("\u{1F9F9} \uBE57\uC790\uB8E8\uB97C \uC8FC\uC6E0\uB2E4 (\uAC00\uBC29\uC5D0 \uB123\uC74C)",1500));!hr&&Math.hypot(52.5-J.x,11.5-J.y)<1.3&&(Fs?(hr=!0,Ge(.8,.6,600,0,2),ge("\uCCA0\uBB38\uC774 \uC5F4\uB838\uB2E4. \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uB294 \uACC4\uB2E8\uC774\uB2E4\u2026")):ge("\u{1F512} \uC9C0\uD558 \uACC4\uB2E8 \uCCA0\uBB38\uC774 \uC7A0\uACA8 \uC788\uB2E4. \uC5F4\uC1E0\uAC00 \uD544\uC694\uD558\uB2E4",1200)),hr&&vi.position.y<3.4&&(vi.position.y+=n*1.5),hr&&vi.position.y>=3.4&&(vi.visible=!1)}if(Ao(J.x|0,J.y|0)===_o){if(Jn())return gh();J.askedDown||(J.askedDown=!0,ks({t:"stairs",lv:Qt}),ge("\u{1F465} \uACC4\uB2E8\uC744 \uCC3E\uC558\uB2E4! \uB2E4 \uAC19\uC774 \uB0B4\uB824\uAC04\uB2E4\u2026",2e3))}if(Qt&&De.door&&Math.hypot(De.door[0]+.5-J.x,De.door[1]+.45-J.y)<.75){if(Jn())return ge("\uBE68\uAC04 \uBB38\uC744 \uC5F4\uC5C8\uB2E4\u2026"),gh();J.askedDown||(J.askedDown=!0,ks({t:"stairs",lv:Qt}),ge("\u{1F465} \uBE68\uAC04 \uBB38\uC744 \uC5F4\uC5C8\uB2E4! \uB2E4 \uAC19\uC774 \uB0B4\uB824\uAC04\uB2E4\u2026",2e3))}Lf.style.visibility=me||ug()?"visible":"hidden",it("shoutB").style.visibility=ls||sn.some(a=>a.kind==="sci"&&a.state!=="retreat"&&Math.hypot(a.x-J.x,a.y-J.y)<10)?"visible":"hidden",Lf.innerHTML=me?"<span>\u{1F6AA}</span>\uB098\uAC00\uAE30":"<span>\u{1F6AA}</span>\uC228\uAE30";{let a=De.seen||(De.seen=new Uint8Array(fe*Ee));for(let h=Math.max(0,(J.y|0)-4);h<=Math.min(Ee-1,(J.y|0)+4);h++)for(let u=Math.max(0,(J.x|0)-4);u<=Math.min(fe-1,(J.x|0)+4);u++)a[Bt(u,h)]=1}if(jS(n),!fn||(Qt===0&&l1(n),!fn)||(o1(n),!fn))return;let l=99,c=null;for(let a of sn.slice()){a.pathT-=n;let h=Math.hypot(a.x-J.x,a.y-J.y);if(a.remote){if(a.tx!=null&&(a.x+=(a.tx-a.x)*Math.min(1,n*8),a.y+=(a.ty-a.y)*Math.min(1,n*8)),a.kind==="monitor"&&(c=a,en==="class"&&!za()&&h<(me?1.2:.65)))return ur("bell",a);if(a.kind==="sci"&&I0(a,h,n))return;l=Math.min(l,h);continue}if(a.kind==="doll"){if(nn&&nn.m===a){l=Math.min(l,h);continue}let u=(d,g)=>{a.state!=="hunt"&&(Ge(.5,.6,700,Mi(a.x,a.y),1.5),h<18&&wo("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,Math.max(.25,1-h/18))),a.state="hunt",a.alertT=2.5,a.target=[d|0,g|0],a.pathT=Math.min(a.pathT,0)};for(let d of cs)Math.hypot(d.x-a.x,d.y-a.y)<d.r&&u(d.x,d.y);!me&&J.noise>0&&h<J.noise&&Xe(J.x|0,J.y|0)!==1&&u(J.x,J.y);for(let d of wt.others.values())Nf(d)&&!d.c&&d.n>0&&Math.hypot(d.x-a.x,d.y-a.y)<d.n&&u(d.x,d.y);(a.pathT<=0||!a.path||!a.path.length)&&(a.pathT=a.state==="hunt"?.3:3,a.state==="wander"&&(!a.path||!a.path.length)&&(a.target=sg()),a.target&&(a.path=es(a.x,a.y,a.target[0],a.target[1])||[]));let f=cr(a,a.state==="hunt"?3.3:1,n);if(a.state==="hunt"&&(a.alertT-=n,f&&!nn?Pf(a):f&&a.alertT<=0&&(a.state="wander",a.path=[])),a.rustleT-=n,a.rustleT<=0&&(a.rustleT=1.6+Math.random()*2,h<14&&Ge(.35,.3*(1-h/14),250+Math.random()*150,Mi(a.x,a.y),3)),!me&&h<.7&&!nn&&(a.target=[J.x,J.y],Pf(a)),!nn){for(let d of wt.others.values())if(Nf(d)&&Math.hypot(d.x-a.x,d.y-a.y)<.7){a.target=[d.x,d.y],Pf(a);break}}}else if(a.kind==="monitor"){c=a;let u=!za()&&fn?me?[me[0]+me[2],me[1]+me[3]]:[J.x,J.y]:null,f=u?h:1e9;for(let g of wt.others.values())if(g.lv===Qt&&g.a&&!g.c){let y=Math.hypot(g.x-a.x,g.y-a.y);y<f&&(f=y,u=[g.x,g.y])}let d=!!u;if(d&&a.state!=="chase"&&(a.state="chase",Rs(a.model,!0),h<30&&wo("\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!",1.7,1.1,1)),!d&&a.state==="chase"&&(a.state="patrol",Rs(a.model,!1),a.path=[]),a.state==="chase"?(a.pathT<=0&&(a.pathT=.25,a.path=es(a.x,a.y,u[0],u[1])||[]),cr(a,3.15,n)):((!a.path||!a.path.length)&&(a.target=Qt?xr():a.x<28?[56,12]:[1,12],a.path=es(a.x,a.y,a.target[0],a.target[1])||[]),cr(a,1.1,n)),a.state==="chase"&&!za()&&h<(me?1.2:.65))return ur("bell",a)}else if(a.kind==="mirror"){if(a.life-=n,a.pathT<=0&&(a.pathT=.2,a.path=me?[]:es(a.x,a.y,J.x,J.y,w0)||[],!a.path.length&&!me&&(a.path=es(a.x,a.y,18,10,w0)||[])),cr(a,3.6,n),a.life<=0){ka(a),$t.chaser=null,ge("\uADF8 \uC560\uAC00\u2026 \uC0AC\uB77C\uC84C\uB2E4",1800);continue}if(!me&&h<.6)return ur("mirror",a)}else if(a.kind==="sci"){if(I0(a,h,n))return}else if(a.kind==="pe"){let u=Xe(J.x|0,J.y|0)===6;if(u){a.fx=J.x-a.x,a.fy=J.y-a.y;let f=Math.hypot(a.fx,a.fy)||1;a.fx/=f,a.fy/=f}if(u&&!Eo){if(ao+=n,ao>1&&!Ba){Ba=!0,t1(),ge("\uC091\u2014 \uC090\uC775\u2014!",1500);for(let f=0;f<3;f++){let d=Di("ball",2.5+f*.4,23.5+f%2);d.state="chase"}}}else u&&Eo&&ao===0&&(ao=.01,ge("\uCCB4\uC721 \uC120\uC0DD\uB2D8\uC774 \uCCB4\uC721\uBCF5\uC744 \uBCF4\uB354\uB2C8 \uACE0\uAC1C\uB97C \uB3CC\uB838\uB2E4\u2026",2200));u||(ao=0,Ba=!1);continue}else if(a.kind==="ball"){if(Xe(J.x|0,J.y|0)!==6&&(a.life-=n*4,a.life<=0)){ka(a);continue}a.pathT<=0&&(a.pathT=.2,a.path=es(a.x,a.y,J.x,J.y,WS)||[]);let u=a.x,f=a.y;if(cr(a,3.7,n),a.roll=(a.roll||0)+Math.hypot(a.x-u,a.y-f)*F/.24,a.rustleT-=n,a.rustleT<=0&&(a.rustleT=.8+Math.random(),Ge(.3,.4,900+Math.random()*600,Mi(a.x,a.y),6)),h<.55)return ur("gym",fh)}l=Math.min(l,h)}cs=cs.filter(a=>(a.t-=n)>0),e1(n),n1(n),To(c),wf-=n,l<8&&wf<=0&&(HS(),wf=.35+l/8*.9)}var R0={doll:1,monitor:2,sci:3},ZS=["","doll","monitor","sci"],rg=["wander","hunt","patrol","chase","lock","retreat","idle"],wt={on:!1,host:!0,code:"",me:"",slot:0,roster:[],others:new Map,sendT:0,monT:0,lastS:"",lastSt:0,lastM:"",lastMt:0},oe=null,Jn=()=>!wt.on||wt.host,Nf=n=>n.lv===Qt&&n.a&&!n.h;function og(n){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle="rgba(0,0,0,.55)",e.beginPath(),e.roundRect?e.roundRect(8,10,240,44,12):e.rect(8,10,240,44),e.fill(),e.fillStyle="#fff",e.font="bold 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,128,33);let i=new Ko(new Xr({map:new Zs(t),depthTest:!1,transparent:!0}));return i.scale.set(.9,.225,1),i.renderOrder=10,i}function C0(n,t){let e=wt.others.get(n);if(!e){let i=rr({hairColor:[1971472,3810328,2763312,5913122][wt.others.size%4]});i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),At.add(i);let s=og(t||"\uCE5C\uAD6C");s.position.y=2.05,i.add(s),e={id:n,nick:t,model:i,tag:s,x:0,y:0,rx:0,ry:0,yaw:0,e:1.6,lv:-1,a:1,h:0,n:0,c:0,walk:0,bub:null,bubT:0},wt.others.set(n,e)}return e}function P0(n){let t=wt.others.get(n);t&&(At.remove(t.model),wt.others.delete(n))}function ag(n){if(oe){n&&oe.emit("join",n);return}it("mpMsg").textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\u2026 (\uCC98\uC74C\uC5D4 1\uBD84\uCBE4 \uAC78\uB9B4 \uC218 \uC788\uC5B4\uC694)",oe=Na(O0+"/horror",{auth:{token:Si},transports:["websocket","polling"],reconnectionAttempts:20}),oe.on("connect",()=>{wt.wantCode&&oe.emit("join",wt.wantCode)}),oe.on("connect_error",()=>{it("mpMsg").textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uD574 \uBCF4\uC138\uC694"}),oe.on("rooms",t=>{it("mpRooms").innerHTML=t.length?t.map(e=>'<button class="g" data-c="'+e.code+'">\uBC29 '+e.code+" \xB7 "+e.n+"\uBA85 \u2014 \uCC38\uAC00</button>").join(""):'<p class="muted">\uC9C0\uAE08 \uC5F4\uB9B0 \uBC29\uC774 \uC5C6\uC5B4\uC694. \uC0C8\uB85C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694!</p>'}),oe.on("joinErr",t=>{it("mpMsg").textContent=t==="full"?"\uBC29\uC774 \uAF49 \uCC3C\uC5B4\uC694 (\uCD5C\uB300 6\uBA85)":"\uBC29 \uBC88\uD638\uB294 \uC22B\uC790 4\uC790\uB9AC\uC608\uC694"}),oe.on("joined",t=>{wt.on=!0,wt.code=t.code,wt.me=t.me,wt.slot=t.s,wt.host=!!t.host,wt.nick=t.nick,Ce("mp",!1),Ce("intro",!1),Ui(),Dn||(wt.host||Eh($a),_r(),Dn=!0,bo(1.06)),ge("\u{1F465} \uBC29 "+t.code+"\uC5D0 \uB4E4\uC5B4\uC654\uC5B4\uC694"+(wt.host?" (\uBC29\uC7A5)":"")+"<br>\uCE5C\uAD6C\uC5D0\uAC8C \uBC29 \uBC88\uD638\uB97C \uC54C\uB824 \uC8FC\uC138\uC694",3500),Af()}),oe.on("roster",t=>{wt.roster=t;let e=t.find(i=>i.id===wt.me);e&&(wt.host=!!e.host);for(let i of[...wt.others.keys()])t.some(s=>s.s===i)||P0(i);for(let i of t)i.id!==wt.me&&C0(i.s,i.nick);Af()}),oe.on("host",()=>{wt.host=!0,ge("\u{1F451} \uBC29\uC7A5\uC774 \uB418\uC5C8\uB2E4 \u2014 \uC774\uC81C \uAD34\uBB3C\uC740 \uB0B4 \uD654\uBA74\uC5D0\uC11C \uACC4\uC0B0\uB41C\uB2E4",2500),Af()}),oe.on("gone",t=>P0(t)),oe.on("p",t=>{let[e,i,s,r,o,l,c]=t;if(e===wt.slot)return;let a=C0(e,(wt.roster.find(h=>h.s===e)||{}).nick);Object.assign(a,{rx:s/10,ry:r/10,yaw:o/100,lv:i,a:l&1,h:l>>1&1,e:l&4?1.1:1.6,c:l>>3&1,n:c/10}),!a.x&&!a.y&&(a.x=a.rx,a.y=a.ry)}),oe.on("m",t=>KS(t)),oe.on("ev",t=>JS(t)),oe.on("chat",t=>{ge("\u{1F4AC} <b>"+Ha(t.nick)+"</b>: "+Ha(t.t),3500);let e=wt.others.get(t.s);e&&(e.bub&&e.model.remove(e.bub),e.bub=og("\u{1F4AC} "+t.t.slice(0,14)),e.bub.position.y=2.35,e.model.add(e.bub),e.bubT=4)}),oe.on("disconnect",()=>{wt.on&&ge("\uC11C\uBC84 \uC5F0\uACB0\uC774 \uB04A\uACBC\uC5B4\uC694\u2026 \uB2E4\uC2DC \uC5F0\uACB0\uD558\uB294 \uC911",2500)})}var Ha=n=>String(n).replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]);function Af(){it("mpChip").style.display=wt.on?"":"none",it("mpChip").textContent="\u{1F465} \uBC29 "+wt.code+" \xB7 "+wt.roster.length+"\uBA85"+(wt.host?" \u{1F451}":""),it("restartB").style.display=wt.on&&!wt.host?"none":""}function ks(n){wt.on&&oe&&oe.emit("ev",n)}function JS(n){let t=wt.others.get(n.f),e=t?t.nick:"\uB204\uAD70\uAC00";if(n.t==="noise"&&Jn())cs.push({x:n.x,y:n.y,r:n.r,t:.3});else if(n.t==="shout"){if(Jn()){cs.push({x:n.x,y:n.y,r:15,t:.3});for(let i of sn)i.kind==="sci"&&Math.hypot(i.x-n.x,i.y-n.y)<10&&(i.state="retreat",i.retreatT=18,i.pathT=0,i.path=[])}n.lv===Qt&&ge("\u{1F4E2} "+Ha(e)+": \u300C\uC120\uC0DD\uB2D8!\u300D",1500)}else if(n.t==="fold"&&!Jn()&&n.lv===Qt){let i=sn.find(s=>s.remote&&s.nid===n.mid);i&&cg(i,n.p)}else if(n.t==="bc"&&!Jn()&&!xe)Jf();else if(n.t==="stairs"&&Jn()&&n.lv===Qt)ge("\u{1F465} "+Ha(e)+" \uB2D8\uC774 \uACC4\uB2E8\uC744 \uCC3E\uC558\uB2E4! \uBAA8\uB450 \uD568\uAED8 \uB0B4\uB824\uAC04\uB2E4",2500),gh();else if(n.t==="dead")ge("\u2620\uFE0F "+Ha(e)+" \u2014 "+(xo[n.rule]?xo[n.rule].why.slice(0,40)+"\u2026":"\uC8FD\uC5C8\uB2E4"),3e3);else if(n.t==="thrown"&&n.lv===Qt){let i=n.k==="broom"?th():new Et(new ne(.07,.015,.14),Wt({color:546}));At.add(i),Ya.push({obj:i,sx:n.sx,sy:n.sy,ex:n.ex,ey:n.ey,t:0,dur:n.dur,landed:!1,remote:!0})}}function $S(n){if(!wt.on||!oe)return;let t=performance.now();if(wt.sendT-=n,wt.sendT<=0){wt.sendT=.2;let e=(fn?1:0)|(me?2:0)|(Fa<1.3?4:0)|(za()?8:0),i=[Qt,Math.round(J.x*10),Math.round(J.y*10),Math.round(ze*100)%629,e,Math.round((J.noise||0)*10)],s=i.join();(s!==wt.lastS||t-wt.lastSt>3e3)&&(wt.lastS=s,wt.lastSt=t,oe.volatile.emit("s",i))}if(wt.host&&(wt.monT-=n,wt.monT<=0)){wt.monT=.25;let e=[Qt,en==="class"?1:0,Math.ceil(hn),oi];for(let s of sn)R0[s.kind]&&e.push(s.nid,R0[s.kind],Math.round(s.x*10),Math.round(s.y*10),(Math.round(Math.atan2(s.fx,s.fy)/(Math.PI*2)*64)+64)%64,rg.indexOf(s.kind==="sci"&&s.state==="lock"?"wander":s.state));let i=e.join();(i!==wt.lastM||t-wt.lastMt>2e3)&&(wt.lastM=i,wt.lastMt=t,oe.volatile.emit("m",e))}}function KS(n){if(Jn()||!Dn)return;let t={lv:n[0],ph:n[1],pt:n[2],pd:n[3],m:[]};for(let s=4;s+5<n.length;s+=6){let r=n[s+4]/64*Math.PI*2;t.m.push([n[s],n[s+1],n[s+2]/10,n[s+3]/10,Math.sin(r),Math.cos(r),n[s+5]])}if(t.lv!==Qt&&!po){po=!0,it("fade").classList.add("show"),setTimeout(()=>{Eh(t.lv?K0(t.lv):$a),we.deep=Math.max(we.deep||0,Qt),Ja(),_r(),it("floorBig").textContent=wh(Qt),it("floorBig").classList.add("show"),setTimeout(()=>{it("fade").classList.remove("show"),po=!1},400),setTimeout(()=>it("floorBig").classList.remove("show"),2600)},700);return}let e=t.ph?"class":"break";e!==en&&(e==="class"?bo():(bo(1.06),To(null))),en==="break"&&hn>10&&t.pt<=10&&e==="break"&&(ng(),ge("\u26A0\uFE0F \uACE7 \uC218\uC5C5 \uC885\uC774 \uC6B8\uB824\uC694! \uAD50\uC2E4\uB85C \uB3CC\uC544\uAC00\uC138\uC694")),en=e,Math.abs(hn-t.pt)>1.2&&(hn=t.pt),oi=t.pd;let i=new Set;for(let[s,r,o,l,c,a,h]of t.m){i.add(s);let u=sn.find(d=>d.remote&&d.nid===s);u||(u=Di(ZS[r],o,l),u.nid=s,u.remote=!0),u.tx=o,u.ty=l,u.fx=c,u.fy=a;let f=rg[h]||"wander";u.kind==="monitor"&&f!==u.state&&Rs(u.model,f==="chase"),u.kind==="doll"&&f==="hunt"&&u.state!=="hunt"&&Math.hypot(o-J.x,l-J.y)<18&&wo("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,.7),u.kind==="sci"&&u.state==="lock"||(u.state=f)}for(let s of sn.slice())s.remote&&!i.has(s.nid)&&ka(s)}function QS(n){for(let t of wt.others.values()){let e=Nf(t);if(t.model.visible=e,!e)continue;let i=t.x,s=t.y;t.x+=(t.rx-t.x)*Math.min(1,n*10),t.y+=(t.ry-t.y)*Math.min(1,n*10);let r=Math.hypot(t.x-i,t.y-s)/Math.max(n,.001);t.walk+=n*Math.min(14,r*4),t.model.position.set(t.x*F,t.e<1.3?-.35:0,t.y*F),t.model.rotation.y=t.yaw+Math.PI,eh(t.model,t.walk,1,r>.3?.5:0),t.model.userData.head.rotation.x=0,t.bub&&(t.bubT-=n,t.bubT<=0&&(t.model.remove(t.bub),t.bub=null))}}var Rf=(n,t)=>!$n(n,t)&&Xe(n,t)!==1&&(Qt||Xe(n,t)===7||Xe(n,t)===8||Xe(n,t)===0&&n>24||Ao(n,t)===yh);function I0(n,t,e){let i=n.model.userData;if(!(n.remote&&n.state!=="lock")){if(n.state==="retreat"){if(n.retreatT-=e,n.pathT<=0){n.pathT=1;let s=Qt?xr():[50.5,22.5];n.path=es(n.x,n.y,s[0],s[1],Rf)||[]}return cr(n,.9,e),n.retreatT<=0&&(n.state="wander"),!1}}if(n.state==="lock"){n.lockT+=e,ls=!0,n.fx=J.x-n.x,n.fy=J.y-n.y;let s=Math.hypot(n.fx,n.fy)||1;if(n.fx/=s,n.fy/=s,n.lockT>1.1){let r=Math.min(1,(n.lockT-1.1)*.8);Of(-n.fx*1.6*e*r,-n.fy*1.6*e*r)}return n.lockT>3.4||t<.7?(ls=!1,ur("sci",n),!0):!1}if(!n.remote&&(n.pathT<=0||!n.path||!n.path.length)){n.pathT=4;let s=sg();Rf(s[0],s[1])&&(n.path=es(n.x,n.y,s[0],s[1],Rf)||[])}if(n.remote||cr(n,.55,e),n.state==="retreat")return!1;if(t<6.5&&!me&&fn){let s=-Math.sin(ze),r=-Math.cos(ze),o=(n.x-J.x)/(t||1),l=(n.y-J.y)/(t||1),c=s*o+r*l<-.35,a=J.noise>.7;(c&&a||J.noise>5)&&(n.state="lock",n.lockT=0,ls=!0,n.remote&&(n.localLock=!0),Ge(.4,.6,1800,Mi(n.x,n.y),8),ge("\u{1F9EA} \uC2DC\uD5D8\uAD00\uC774 \uB098\uB97C \uAC00\uB9AC\uCF30\uB2E4\u2026 \uBAB8\uC774 \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uB294\uB2E4!<br><b>\u{1F4E2} \uC120\uC0DD\uB2D8! \uC744 \uC678\uCCD0!</b>",2600))}return!1}function lg(){if(!Dn||!fn||pr())return;Ui(),wo("\uC120\uC0DD\uB2D8!",1.1,1.05,1),cs.push({x:J.x,y:J.y,r:15,t:.3}),J.noise=8,ks({t:"shout",x:J.x,y:J.y,lv:Qt});let n=!1;for(let t of sn)t.kind==="sci"&&Math.hypot(t.x-J.x,t.y-J.y)<10&&t.state!=="retreat"&&(t.state="retreat",t.retreatT=18,t.pathT=0,t.path=[],n=!0);n&&(ls=!1,ge("\uBD88\uAF43\uC774 \uAEBC\uC9C0\uB354\uB2C8\u2026 \uACFC\uD559\uC2E4 \uAD34\uBB3C\uC774 \uB4F1\uC744 \uB3CC\uB824 \uC0AC\uB77C\uC84C\uB2E4",2400))}function Jf(){let n=Qt?xr():[1.5,12.5];if(xe={t:0,exp:0,tx:n[0],ty:n[1],pulled:!1},Jn()&&ks({t:"bc"}),Vt){let t=Vt.currentTime;[523,659,784,1047].forEach((e,i)=>Os(e,t+i*.35,1.2,.12))}setTimeout(()=>{xe&&wo("\uD559\uC0DD \uC5EC\uB7EC\uBD84\uAED8 \uC54C\uB9BD\uB2C8\uB2E4. \uC9C0\uAE08 \uC989\uC2DC \uD558\uB358 \uC77C\uC744 \uBA48\uCD94\uACE0, \uB2F4\uC784 \uC120\uC0DD\uB2D8\uC744 \uB530\uB77C \uBC29\uC1A1\uC2E4\uB85C \uBAA8\uC5EC \uC8FC\uC2ED\uC2DC\uC624.",.6,.8,1)},1500),it("earB").style.display="flex",document.body.classList.add("bcast")}function Uf(){if(xe=null,it("earB").style.display="none",document.body.classList.remove("bcast"),window.speechSynthesis)try{speechSynthesis.cancel()}catch{}}function jS(n){if(!xe){Jn()&&en==="break"&&oi>=Df&&hn<Ah(oi)-12&&hn>14&&(Df=oi+2+(Math.random()*2|0),Jf());return}if(xe.t+=n,xe.t>1.5&&!gr?xe.exp+=n:xe.exp=Math.max(0,xe.exp-n*.5),xe.pulled=xe.exp>1.6,it("bcTxt").textContent=gr?"\u{1F649} \uADC0\uB97C \uB9C9\uC558\uB2E4\u2026 (\uBC29\uC1A1 "+Math.max(0,12-xe.t).toFixed(0)+"\uCD08)":xe.pulled?"\u2026\uBC29\uC1A1\uC2E4\uB85C\u2026 \uAC00\uC57C \uD574\u2026":"\u{1F4E2} \uC9C0\uC9C0\uC9C1\u2026 \uBC29\uC1A1\uC774 \uB098\uC628\uB2E4! \uADC0\uB97C \uB9C9\uC544!",xe.exp>5){Uf(),ur("bc",null);return}xe.t>12&&(Uf(),ge("\uBC29\uC1A1\uC774 \uB05D\uB0AC\uB2E4\u2026",1500))}var cs=[],L0=0;function wo(n,t,e,i){if(ge("\u300C"+n+"\u300D",1600),!(!window.speechSynthesis||performance.now()-L0<1500)){L0=performance.now();try{let s=new SpeechSynthesisUtterance(n);s.lang="ko-KR",s.pitch=t,s.rate=e,s.volume=i,speechSynthesis.cancel(),speechSynthesis.speak(s)}catch{}}}function t1(){if(!Vt)return;let n=Vt.currentTime;for(let[t,e]of[[0,.35],[.5,1.2]]){let i=Vt.createOscillator(),s=Vt.createGain(),r=Vt.createOscillator(),o=Vt.createGain();i.frequency.value=2900,r.frequency.value=38,o.gain.value=180,r.connect(o),o.connect(i.frequency),s.gain.setValueAtTime(0,n+t),s.gain.linearRampToValueAtTime(.35,n+t+.03),s.gain.setValueAtTime(.35,n+e-.05),s.gain.linearRampToValueAtTime(0,n+e),i.connect(s),s.connect(rs),i.start(n+t),r.start(n+t),i.stop(n+e+.05),r.stop(n+e+.05)}}function $f(){if(!Dn||!fn||pr()||me||ls||He.phone+He.broom<=0)return;let n=He[mr]>0?mr:He.broom>0?"broom":"phone";He[n]--,os(),Ui();let t=-Math.sin(ze),e=-Math.cos(ze),i=.5;for(;i<8;)if(i+=.1,$n(Math.floor(J.x+t*i),Math.floor(J.y+e*i))){i-=.3;break}let s=n==="broom"?th():new Et(new ne(.07,.015,.14),Wt({color:546,roughness:.3,metalness:.4}));s.castShadow=!0,At.add(s),Ya.push({obj:s,sx:J.x,sy:J.y,ex:J.x+t*i,ey:J.y+e*i,t:0,dur:.25+i*.06,landed:!1}),ks({t:"thrown",k:n,sx:J.x,sy:J.y,ex:J.x+t*i,ey:J.y+e*i,dur:.25+i*.06,lv:Qt}),Ge(.15,.2,500,0,2)}function e1(n){for(let t of Ya){if(t.landed)continue;t.t+=n;let e=Math.min(1,t.t/t.dur);t.obj.position.set((t.sx+(t.ex-t.sx)*e)*F,1.4*(1-e)+Math.sin(e*Math.PI)*.8+.01,(t.sy+(t.ey-t.sy)*e)*F),t.obj.rotation.x+=n*12,t.obj.rotation.y+=n*7,e>=1&&(t.landed=!0,t.obj.rotation.set(0,Math.random()*3,0),t.obj.position.y=.01,Ge(.25,.9,1800,Mi(t.ex,t.ey),1.5),Ge(.2,.6,400,Mi(t.ex,t.ey),2),cs.push({x:t.ex,y:t.ey,r:14,t:.3}),t.remote||ks({t:"noise",x:t.ex,y:t.ey,r:14}))}}var Cf=0;function n1(n){Cf-=n,Cf<=0&&it("talk").classList.remove("show");for(let t of Qt===0?Wf:De.npcs||[]){let e=Math.hypot(t.px-J.x,t.py-J.y);if(t.model.userData.standing&&e<6){let r=Math.atan2(J.x-t.px,J.y-t.py);t.model.rotation.y+=((r-t.model.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,n*4)}let i=t.model.userData.head,s=e<3.5?Math.max(-1,Math.min(1,Math.atan2(t.px-J.x,t.py-J.y))):0;if(i.rotation.y+=(s-i.rotation.y)*Math.min(1,n*3),e<1.4&&ro!==t){ro=t;let r=t.lines[t.i++%t.lines.length];it("talkN").textContent=t.name,it("talkB").textContent=r,it("talk").classList.add("show"),Cf=5}}ro&&Math.hypot(ro.px-J.x,ro.py-J.y)>2.2&&(ro=null)}var D0=new k,i1=new k(0,1,0),AA=new Wn;function s1(n,t,e){let i=t.userData;nn&&nn.m===n&&nn.grip?(t.position.copy(nn.grip),t.lookAt(nn.hingeMid),lf(t,kn,!1,Math.min(1,nn.t*3))):(t.position.set(n.x*F,.3+(n.state==="hunt"?Math.abs(Math.sin(kn*14))*.2:0),n.y*F),t.rotation.set(0,Math.atan2(n.fx,n.fy),0),lf(t,kn*(n.state==="hunt"?2.2:.8),!0,0));let s=t.localToWorld(D0.set(0,.05,-.8)).clone(),r=n.trail;if(!r.length||r[0].distanceTo(s)>.5?(r.unshift(s.clone()),r.length>27&&r.pop()):r[0].copy(s),r.length===1)for(let o=1;o<6;o++)r.push(s.clone().add(new k(-Math.sin(t.rotation.y),.05*o,-Math.cos(t.rotation.y)).multiplyScalar(.4*o)));n.trailG.children.forEach((o,l)=>{let c=r[l],a=r[l+1];if(!c||!a){o.visible=!1;return}let h=c.distanceTo(a);if(h<.01){o.visible=!1;return}o.visible=!0,o.position.copy(c).add(a).multiplyScalar(.5),o.position.y=Math.max(o.position.y,.42+l*.02),o.quaternion.setFromUnitVectors(i1,D0.copy(a).sub(c).normalize()),o.scale.set(1.9+l*.03,h+.15,1.9+l*.03)})}var nn=null,oo=Wt({map:Sm(),roughness:.9}),ns=new Ut;ns.visible=!1;At.add(ns);var Kf=4,_h=[],Qf=[];{let n=ns;for(let t=0;t<Kf;t++){let e=new Ut;n.add(e);let i=new Et(new ne(1,.05,1),[oo,oo,oo,oo,oo,oo]);i.castShadow=i.receiveShadow=!0,e.add(i),_h.push(e),Qf.push(i),n=e}}var as=new Et(new Me(1,1),new On({color:131586}));as.rotation.x=-Math.PI/2;as.visible=!1;At.add(as);function r1(n,t){if(Qt){let e=Xe(n,t);return e===1?ss.wood:e===3?ss.woodDark:$0}return ss[H0(n,t)]||ss.vinyl}function Pf(n){let t=Math.floor(n.target?n.target[0]:n.x),e=Math.floor(n.target?n.target[1]:n.y),i=(c,a)=>{let h=0;for(;h<6&&!$n(t+c*(h+1),e+a*(h+1));)h++;return h},s=i(1,0)+i(-1,0)>=i(0,1)+i(0,-1),r,o;if(s?(r=e-i(0,-1),o=e+i(0,1)):(r=t-i(-1,0),o=t+i(1,0)),o-r>4){let c=s?e:t;r=Math.max(r,c-2),o=Math.min(o,c+2)}let l={axisX:s,a0:r,a1:o,c:(s?t:e)+.5,sgn:Math.random()<.5?1:-1,tx:t,ty:e};ks({t:"fold",mid:n.nid,p:l,lv:Qt}),cg(n,l)}function cg(n,t){let{axisX:e,a0:i,a1:s,tx:r,ty:o,sgn:l}=t,c=3.4,a=t.c,h=a-l*c/2,u=(i+s+1)/2,f=(s-i+1)*F,d=c*F/Kf;e?(ns.position.set(h*F,.03,u*F),ns.rotation.set(0,l*Math.PI/2,0)):(ns.position.set(u*F,.03,h*F),ns.rotation.set(0,l>0?0:Math.PI,0)),ns.visible=!0;let g=r1(r,o);_h.forEach((p,m)=>{p.position.set(0,0,m?d:0),p.rotation.set(0,0,0)}),Qf.forEach(p=>{p.scale.set(f,1,d),p.position.set(0,0,d/2),p.material[2]=g}),as.scale.set(e?c*F:f,e?f:c*F,1),as.visible=!1,as.position.set(e?a*F:u*F,.004,e?u*F:a*F),as.rotation.set(-Math.PI/2,0,0);let y=e?new k(h*F,.4,u*F):new k(u*F,.4,h*F);nn={m:n,t:0,killed:!1,axisX:e,a0:i,a1:s,c:a,L:c,x:r+.5,y:o+.5,hingeMid:y,grip:null,start:n.model.position.clone()},wo("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,1)}function hg(){if(ns.visible=!1,as.visible=!1,nn){let n=nn.m;n.state="wander",n.path=[],n.alertT=0,n.target=null}nn=null}function o1(n){if(!nn)return;let t=nn;t.t+=n;let e=t.t,i=Math.hypot(t.x-J.x,t.y-J.y),s=e<.45?0:e<.8?(e-.45)/.35:e<1.6?1:e<2.3?1-(e-1.6)/.7:0,r=s*s*(3-2*s),o=r*2.3,l=[.42,.25,.18,.15];_h.forEach((a,h)=>{a.rotation.x=-o*l[h]-(e<.45?Math.sin(e*60)*.015:0)}),as.visible=o>.08;let c=_h[Kf-1];if(t.grip=c.localToWorld(new k(0,.12,Qf[0].scale.z)),e<.45){let a=t.grip.clone();t.grip=t.start.clone().lerp(a,Math.min(1,e/.3))}if(e>.3&&e-n<=.3&&(Ge(.25,1.3,140,Mi(t.x,t.y),1.2),Ge(.15,.8,2200,Mi(t.x,t.y),1),i<14&&(a1(),Ga=.25)),e>.45&&e-n<=.45&&(Ge(.7,.9,600,Mi(t.x,t.y),.5),Ge(.5,.6,3500,Mi(t.x,t.y),.7)),!t.killed&&o>1){t.killed=!0,Ga=i<10?.4:0;let a=t.axisX?J.y:J.x,h=t.axisX?J.x:J.y;if(!me&&a>t.a0-.2&&a<t.a1+1.2&&Math.abs(h-t.c)<t.L/2+.3){ur("run",null);return}}e>2.35&&hg()}function a1(){let n=it("tak");n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}var Ga=0;function Of(n,t){let i=(s,r)=>$n(Math.floor(s-.28),Math.floor(r-.28))||$n(Math.floor(s+.28),Math.floor(r-.28))||$n(Math.floor(s-.28),Math.floor(r+.28))||$n(Math.floor(s+.28),Math.floor(r+.28))||Xe(s|0,r|0)===2&&r<1.75&&s>15.9&&s<22.1;i(J.x+n,J.y)||(J.x+=n),i(J.x,J.y+t)||(J.y+=t)}function ug(){for(let n of Za)if(Math.hypot(n[0]+.5+n[2]*.6-J.x,n[1]+.5+n[3]*.6-J.y)<1)return n;return null}function fg(){if(!fn||pr()||!Dn)return;if(me)return jf();let n=ug();n&&(me=n,qa=0,J.back=[J.x,J.y,ze],J.x=n[0]+.5-n[2]*.25,J.y=n[1]+.5-n[3]*.25,ze=Math.atan2(-n[2],-n[3]),Bs=0,Ge(.15,.35,300),it("vent").classList.add("show"))}function jf(){me&&(J.x=J.back[0],J.y=J.back[1],me=null,Ge(.15,.35,300),it("vent").classList.remove("show"))}function l1(n){let t=Xe(J.x|0,J.y|0)===2||J.x>15&&J.x<23&&J.y<11&&J.y>9.5,e=-Math.cos(ze),i=Xe(J.x|0,J.y|0)===2&&J.y<7&&e<-.6&&Math.abs(Bs)<.55&&!me;if($t.hist.push({x:J.x,y:J.y,yaw:ze,eye:Fa}),$t.hist.length>90&&$t.hist.shift(),$t.st==="broken"){$t.cd-=n,yi.visible=!1,$t.cd<=0&&!t&&($t.st="normal",$t.t=0,vo.visible=!1,Rs(yi,!1));return}if(yi.visible=t,$t.st==="normal"||$t.st==="lag"){$t.t=i?$t.t+n:Math.max(0,$t.t-n*1.5),$t.st=$t.t>1.3?"lag":"normal";let o=$t.st==="lag"?$t.hist[Math.max(0,$t.hist.length-1-24)]:$t.hist[$t.hist.length-1];$t.pose=o,$t.t>2.7&&($t.st="stare",$t.t=0)}else $t.t+=n;let s=$t.pose;yi.position.set(s.x*F,0,(2-s.y)*F),yi.rotation.y=-s.yaw;let r=yi.userData.head;if($t.st==="stare"||$t.st==="grin"){let o=new k;if(Fe.getWorldPosition(o),r.lookAt(o),$t.st==="grin"&&r.rotateZ(Math.sin($t.t*3)*.08+.25),$t.st==="stare"&&$t.t>.9)$t.st="grin",$t.t=0,Rs(yi,!0),Ge(.6,.25,900,0,4);else if($t.st==="grin"&&$t.t>.9){$t.st="broken",$t.cd=45,vo.visible=!0,VS(),yi.visible=!1;let l=Di("mirror",Math.min(21.5,Math.max(16.5,s.x)),1.9);$t.chaser=l,ge("\uAC70\uC6B8\uC774 \uAE68\uC84C\uB2E4! \uB3C4\uB9DD\uCCD0!",2200)}}else r.rotation.set(-Bs*.6,0,0)}function ur(n,t){fn=!1,ho={rule:n,m:t},Ds=0,it("toast").style.opacity=0,GS(),navigator.vibrate&&navigator.vibrate([200,80,300]),me&&jf(),To(null),ks({t:"dead",rule:n});let e=!we.rules.includes(n);e&&we.rules.push(n),we.deaths++,n==="run"&&(we.folds=(we.folds||0)+1),Ja(),Xa(0),n==="run"&&setTimeout(()=>{it("drawShow").style.backgroundImage="url("+US()+")",it("drawShow").classList.add("show")},450),setTimeout(()=>{it("deadWhy").textContent=xo[n].why,it("deadRule").textContent="\u{1F4D3} "+xo[n].text,it("deadNew").textContent=e?"\uC0C8 \uADDC\uCE59\uC774 \uC218\uCCA9\uC5D0 \uC801\uD614\uB2E4.":"\uC774\uBBF8 \uC54C\uACE0 \uC788\uB358 \uADDC\uCE59\uC774\uB2E4\u2026",Ce("dead",!0)},1500)}var dg=n=>Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0");function c1(n){it("noteT").textContent=lo[n].t,it("noteB").textContent=lo[n].b,Ce("note",!0)}var kn=0,N0=performance.now(),U0=!1,If=0,uh=0;function pg(){let n=performance.now(),t=Math.min(.05,(n-N0)/1e3);if(N0=n,kn+=t,Dn&&fn&&!pr()&&YS(t),Dn&&!fn&&(Ds+=t),J){Fa+=((me?1.55:Li?1.12:1.6)-Fa)*Math.min(1,t*8);let i=Math.hypot(tn.x,tn.y)>.15||_n.w||_n.a||_n.s||_n.d||_n.arrowup||_n.arrowdown,s=i&&!me?Math.sin(Oa*2)*.025:0;Ga>0&&(Ga-=t);let r=Ga>0?(Math.random()-.5)*.05:0;Fe.position.set(J.x*F+r,Fa+s+r,J.y*F),Fe.rotation.set(0,0,0),Fe.rotateY(ze),Fe.rotateX(Bs),Tf.position.y=-.2+s*.6,Tf.position.x=.12+(i?Math.cos(Oa)*.008:0),ai.intensity=me?0:30*(Math.random()<.004?.2:1),Tf.visible=!me;for(let u of sn){let f=u.model;f.position.set(u.x*F,0,u.y*F);let d=Math.atan2(u.fx,u.fy);if(f.rotation.y+=((d-f.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,t*6),u.kind==="doll")s1(u,f,t);else if(u.kind==="monitor"){if(eh(f,kn,u.state==="chase"?11:4,u.state==="chase"?.7:.35),f.userData.head.rotation.z=u.state==="chase"?.3:Math.sin(kn*1.3)*.15,u.state==="chase")for(let g of f.userData.arms)g.rotation.x=-1.2+Math.sin(kn*11)*.3}else if(u.kind==="sci"){let g=f.userData,y=u.state==="lock",p=u.state==="retreat",m=p?.05:y?1+u.lockT*.9:1+Math.sin(kn*9)*.1;g.flame.scale.set(m,m*(y?1.6:1),m),g.inner.visible=!p,g.light.intensity=p?0:y?3+u.lockT*2:1.6,y?g.arms[1].rotation.x=-1.4:g.arms[1].rotation.x=Math.sin(kn)*.1,f.position.y=Math.abs(Math.sin(kn*3))*.03}else u.kind==="pe"?(f.userData.head.rotation.z=Math.sin(kn*.8)*.2,f.userData.arms[1].rotation.x=Ba?-2.4:-.1):u.kind==="ball"?(f.userData.ball.rotation.set(0,0,0),f.rotation.y=Math.atan2(u.fx,u.fy),f.userData.ball.rotation.x=u.roll||0,f.position.y=Math.abs(Math.sin(kn*9+u.x))*.25):(eh(f,kn,13,.8),f.userData.head.lookAt(Fe.position))}let o=innerWidth<innerHeight?80:70,l=($t.st==="stare"||$t.st==="grin")&&fn?o*.55:o;Math.abs(Fe.fov-l)>.1&&(Fe.fov+=(l-Fe.fov)*Math.min(1,t*(l<Fe.fov?1.2:5)),Fe.updateProjectionMatrix()),QS(t),$S(t);let c=en==="class"?1:0;mh.intensity+=(c*9-mh.intensity)*Math.min(1,t*3);for(let u of Y0)u.material=c?W0:Hf;if(Qt)for(let u of De.flick)u.t-=t,u.t<0&&(u.on=!u.on,u.t=u.on?.6+Math.random()*5:.03+Math.random()*.2),u.p.intensity=u.on===!1?.3:u.base;for(let u of q0)u.t-=t,u.t<0&&(u.on=!u.on,u.t=u.on?.5+Math.random()*4:.04+Math.random()*.25),u.p.intensity=u.on===!1?.2:u.base,u.l.material.emissiveIntensity=u.on===!1?.1:1.4;for(let u in dr){let f=dr[u];f.visible&&(f.material.emissiveIntensity=.6+Math.sin(kn*3)*.4)}if(Wa.rotation.y+=t,ho&&ho.m&&Ds<1.4){let u=ho.m.model,f=new k(0,0,-1).applyQuaternion(Fe.quaternion),d=u.userData.faceY||1.7,g=.42-Ds*.08;if(u.position.set(Fe.position.x+f.x*g,Fe.position.y-d+f.y*g+(Math.random()-.5)*.02,Fe.position.z+f.z*g),u.rotation.set(0,ze,0),u.userData.head&&u.userData.head.rotation.set(0,0,.3),u.userData.head){u.updateMatrixWorld(!0);let y=new k;u.userData.head.getWorldPosition(y);let p=Fe.position.clone().addScaledVector(f,ho.m.kind==="monitor"?.4-Ds*.06:.5-Ds*.08);u.position.add(p.sub(y))}ai.intensity=Ds<.1?120:30}let a=en==="break"?Ah(oi):ig;it("bellTxt").textContent=oi+"\uAD50\uC2DC \xB7 "+(en==="break"?"\uC26C\uB294 \uC2DC\uAC04":"\uC218\uC5C5 \uC2DC\uAC04"),it("bell").querySelector("small").textContent=dg(Math.max(0,hn))+(en==="break"&&hn<10?"  \u26A0\uFE0F \uACE7 \uC885\uC774 \uC6B8\uB824\uC694":"");let h=it("bar").firstElementChild;h.style.width=Math.max(0,hn/a*100)+"%",h.style.background=en==="class"?"#c33":hn<10?"#fb3":"#9ad",it("ventTxt").textContent=me?"\uC0AC\uBB3C\uD568 \uC548 \xB7 \uC228 \uCC38\uAE30 "+Math.max(0,8-qa).toFixed(1)+"\uCD08":"",it("classTxt").style.opacity=en==="class"&&za()&&fn?1:0}Ni.render(At,Fe),Dn&&!U0&&(If++,uh+=t,uh>4&&(If/uh<24&&(U0=!0,Ni.setPixelRatio(1),Ni.shadowMap.enabled=!1,ai.castShadow=!1,At.traverse(e=>{e.material&&[].concat(e.material).forEach(i=>i.needsUpdate=!0)}),kf()),If=0,uh=0)),requestAnimationFrame(pg)}requestAnimationFrame(pg);function mg(){if(!Dn)return;let n=Object.keys(xo).map(e=>we.rules.includes(e)?'<div class="rule">'+xo[e].text+"</div>":'<div class="rule" style="opacity:.35">??? (\uC544\uC9C1 \uBAA8\uB974\uB294 \uADDC\uCE59)</div>').join(""),t=Object.keys(lo).filter(e=>we.notes.includes(e)).map(e=>'<div class="rule n"><b>'+lo[e].t+"</b><br>"+lo[e].b.replace(/\n/g,"<br>")+"</div>").join("");it("bookB").innerHTML='<p><b>\uC54C\uC544\uB0B8 \uADDC\uCE59</b> <span class="muted">(\uC8FD\uC73C\uBA74\uC11C \uBC30\uC6B4\uB2E4)</span></p>'+n+"<p><b>\uC8FC\uC6B4 \uCABD\uC9C0</b> "+we.notes.length+"/"+Object.keys(lo).length+"</p>"+t+'<p class="muted">\uC8FD\uC740 \uD69F\uC218 '+we.deaths+" \xB7 \uAC00\uC7A5 \uAE4A\uC774 \uB0B4\uB824\uAC04 \uACF3: "+(we.deep?"\uC9C0\uD558 "+we.deep+"\uCE35":"1\uCE35")+"</p>",it("acctLine").textContent=Si?"\uB85C\uADF8\uC778: "+(Ff||"\uACC4\uC815")+" \xB7 \uC11C\uBC84\uC5D0 \uC800\uC7A5 \uC911":"\uAC8C\uC2A4\uD2B8 \xB7 \uC774 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5 \uC911",it("logoutB").style.display=Si?"":"none",Ce("book",!0)}function td(){if(!Dn||!fn)return;let n=[["\u{1F4F1}","\uD578\uB4DC\uD3F0",He.phone?"\uC2E0\uD638\uB294 \uC548 \uC7A1\uD788\uB294\uB370 \uCF1C\uC9C0\uAE30\uB294 \uD55C\uB2E4":"(\uB358\uC838 \uBC84\uB838\uB2E4)",He.phone?[["\uC2DC\uACC4 \uBCF4\uAE30","clock"],[mr==="phone"?"\u2714 \uB358\uC9C8 \uBB3C\uAC74":"\uB358\uC9C8 \uBB3C\uAC74\uC73C\uB85C","selphone"]]:[]],["\u{1F9F9}","\uBE57\uC790\uB8E8 \xD7 "+He.broom,"\uB358\uC9C0\uBA74 \uD070 \uC18C\uB9AC\uAC00 \uB098\uC11C \uB370\uCE7C\uCF54\uB9C8\uB2C8\uB97C \uAF88 \uC218 \uC788\uB2E4",He.broom?[[mr==="broom"?"\u2714 \uB358\uC9C8 \uBB3C\uAC74":"\uB358\uC9C8 \uBB3C\uAC74\uC73C\uB85C","selbroom"]]:[]],["\u{1F455}","\uCCB4\uC721\uBCF5 \uC0C1\uC758",He.peTop?"\uC785\uACE0 \uC788\uC74C":"\uC5C6\uC74C \u2014 \uAD50\uBB34\uC2E4 \uBD84\uC2E4\uBB3C \uC0C1\uC790?",[]],["\u{1F456}","\uCCB4\uC721\uBCF5 \uD558\uC758",He.peBottom?"\uC785\uACE0 \uC788\uC74C":"\uC5C6\uC74C \u2014 \uAD50\uC2E4 \uB4A4\uCABD?",[]],["\u{1F511}","\uC9C0\uD558 \uACC4\uB2E8 \uC5F4\uC1E0",Fs||Qt?"\uC788\uC74C":"\uC5C6\uC74C \u2014 \uCCB4\uC721\uAD00 \uACE8\uB300 \uC544\uB798",[]],["\u{1F5FA}\uFE0F","A\uC870 \uD0D0\uC0C9 \uC9C0\uB3C4","\uC9C0\uB098\uAC04 \uACF3\uC774 \uC800\uC808\uB85C \uADF8\uB824\uC9C4\uB2E4",[["\uC9C0\uB3C4 \uBCF4\uAE30","map"]]],["\u{1F4D3}","\uCABD\uC9C0 "+we.notes.length+"\uC7A5 \xB7 \uADDC\uCE59 "+we.rules.length+"\uAC1C","",[["\uC218\uCCA9 \uBCF4\uAE30","book"]]]];it("bagB").innerHTML=n.map(([t,e,i,s])=>'<div class="item"><span class="ic">'+t+"</span><div><b>"+e+"</b><small>"+i+'</small></div><div class="acts">'+s.map(([r,o])=>'<button data-a="'+o+'">'+r+"</button>").join("")+"</div></div>").join(""),Ce("bag",!0)}it("bagB").addEventListener("click",n=>{let t=n.target.dataset&&n.target.dataset.a;if(t){if(t==="selphone"||t==="selbroom")mr=t.slice(3),os(),td();else if(t==="map")Ce("bag",!1),ed();else if(t==="book")Ce("bag",!1),mg();else if(t==="clock"){let e=Zf,i=e/365;Ce("bag",!1),it("noteT").textContent="\u{1F4F1} \uD578\uB4DC\uD3F0",it("noteB").textContent="\uC2E0\uD638 \uC5C6\uC74C \xB7 \uBC30\uD130\uB9AC "+Math.max(1,100-Math.floor(e/60))+`%

\uAC80\uC740 \uC6D0 \uC548\uC5D0\uC11C \uD750\uB978 \uC2DC\uAC04: `+dg(e)+`
\uBC14\uAE65\uC5D0\uC11C \uD750\uB978 \uC2DC\uAC04: `+i.toFixed(1)+`\uCD08

(\uC548\uC5D0\uC11C\uC758 1\uB144\uC774 \uBC16\uC5D0\uC11C\uB294 \uD558\uB8E8)`,Ce("note",!0)}}});function ed(){if(!Dn)return;let n=it("mapC"),t=n.getContext("2d"),e=Math.floor(Math.min(innerWidth-60,640)/fe);n.width=fe*e,n.height=Ee*e,t.fillStyle="#0b0b0d",t.fillRect(0,0,n.width,n.height);let i=De.seen||new Uint8Array(fe*Ee),s=["#5d6a5e","#8a6a45","#7c9aa6","#7a5a4a","#8a8060","#556","#a07a3a","#5a8a8a","#6a5a7a"];for(let r=0;r<Ee;r++)for(let o=0;o<fe;o++){if(!i[Bt(o,r)])continue;let l=Ao(o,r);t.fillStyle=l===zn||l===Va?"#26262a":l===_o?"#2fd070":l===Mh?"#9aa":l===uo?"#4a3a2a":Qt?Xe(o,r)===1?"#8a6a45":Xe(o,r)===3?"#7a5a4a":"#8c8a5a":s[Xe(o,r)],t.fillRect(o*e,r*e,e,e)}if(t.font="bold "+Math.max(9,e)+"px sans-serif",t.textAlign="center",t.fillStyle="#fff",Qt)De.door&&i[Bt(De.door[0],De.door[1])]&&(t.fillStyle="#d03030",t.fillRect(De.door[0]*e,De.door[1]*e-2,e,4));else{let r=[[7,5,1],[18.5,5,2],[30,5,3],[42,5,4],[52.5,6,5],[8.5,21,6],[26,21,7],[46,21,8]];for(let[o,l,c]of r)i[Bt(o|0,l|0)]&&t.fillText(F0[c],o*e,l*e)}Qt===1&&De.rooms&&i[Bt(De.rooms[1].x+1,De.rooms[1].y+1)]&&(t.fillStyle="#fff",t.fillText("2-1",(De.rooms[1].x+De.rooms[1].w/2)*e,(De.rooms[1].y+De.rooms[1].h/2)*e)),t.save(),t.translate(J.x*e,J.y*e),t.rotate(-ze),t.fillStyle="#ffd23a",t.beginPath(),t.moveTo(0,-e*1.1),t.lineTo(e*.7,e*.7),t.lineTo(-e*.7,e*.7),t.closePath(),t.fill(),t.restore(),it("mapT").textContent="\u{1F5FA}\uFE0F "+wh(Qt)+" \uC9C0\uB3C4 (A\uC870)",Ce("mapM",!0)}it("bagBtn").onclick=td;it("mapBtn").onclick=ed;it("bagOk").onclick=()=>Ce("bag",!1);it("mapOk").onclick=()=>Ce("mapM",!1);it("bookBtn").onclick=mg;it("mpB").onclick=()=>{Ui(),Ce("intro",!1),Ce("mp",!0),ag(null),oe&&oe.emit("rooms")};it("mpNew").onclick=()=>{let n=String(1e3+Math.floor(Math.random()*9e3));wt.wantCode=n,it("mpMsg").textContent="\uBC29 "+n+" \uB9CC\uB4DC\uB294 \uC911\u2026",oe&&oe.connected&&oe.emit("join",n)};it("mpJoin").onclick=()=>{let n=it("mpCode").value.replace(/\D/g,"");if(n.length!==4){it("mpMsg").textContent="\uBC29 \uBC88\uD638 4\uC790\uB9AC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694";return}wt.wantCode=n,it("mpMsg").textContent="\uBC29 "+n+" \uB4E4\uC5B4\uAC00\uB294 \uC911\u2026",oe&&oe.connected&&oe.emit("join",n)};it("mpRefresh").onclick=()=>{oe&&oe.emit("rooms")};it("mpRooms").addEventListener("click",n=>{let t=n.target.dataset&&n.target.dataset.c;t&&(wt.wantCode=t,oe&&oe.connected&&oe.emit("join",t))});it("mpBack").onclick=()=>{Ce("mp",!1),Ce("intro",!0)};it("mpChip").onclick=()=>{let n=wt.roster.map(t=>(t.host?"\u{1F451} ":"")+t.nick+(t.id===wt.me?" (\uB098)":"")).join(`
`);it("noteT").textContent="\u{1F465} \uBC29 "+wt.code,it("noteB").textContent=n+`

\uCE5C\uAD6C\uC5D0\uAC8C \uBC29 \uBC88\uD638 `+wt.code+` \uB97C \uC54C\uB824 \uC8FC\uBA74 \uAC19\uC774 \uD560 \uC218 \uC788\uC5B4\uC694.
\uBC29\uC7A5 \uD654\uBA74\uC5D0\uC11C \uAD34\uBB3C\uACFC \uC885\uC18C\uB9AC\uAC00 \uACC4\uC0B0\uB3FC\uC694.`,Ce("note",!0)};it("chatBtn").onclick=()=>{if(!wt.on){ge("\uAC19\uC774 \uD558\uAE30 \uBC29\uC5D0 \uB4E4\uC5B4\uAC00\uC57C \uCC44\uD305\uD560 \uC218 \uC788\uC5B4\uC694");return}let n=prompt("\uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uBCF4\uB0BC \uB9D0");n&&oe&&oe.emit("chat",n.slice(0,50))};it("bookOk").onclick=()=>Ce("book",!1);it("noteOk").onclick=()=>Ce("note",!1);it("logoutB").onclick=()=>{Si="",Ff="",localStorage.removeItem("hor_tok"),Ce("book",!1),ge("\uB85C\uADF8\uC544\uC6C3\uD588\uC5B4\uC694 (\uAC8C\uC2A4\uD2B8\uB85C \uACC4\uC18D)")};it("retryB").onclick=()=>{Ce("dead",!1),it("drawShow").classList.remove("show"),_r()};it("restartB").onclick=()=>{Ce("dead",!1),it("drawShow").classList.remove("show"),Eh($a),_r()};it("againB").onclick=()=>{Ce("win",!1),_r()};it("startB").onclick=()=>{Ui(),Ce("intro",!1),_r(),Dn=!0,bo(1.06)};function nd(){Ce("login",!1),Ce("intro",!0)}it("guestB").onclick=()=>{Ui(),nd()};it("loginB").onclick=async()=>{Ui();let n=it("lu").value.trim(),t=it("lp").value,e=it("lmsg");if(!n||!t){e.textContent="\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694";return}it("loginB").disabled=!0,e.textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\u2026 (\uCC98\uC74C\uC5D4 1\uBD84\uCBE4 \uAC78\uB9B4 \uC218 \uC788\uC5B4\uC694)";try{Si=(await Bf("/api/signin",{username:n,password:t})).session,localStorage.setItem("hor_tok",Si),await z0(),e.textContent="",nd()}catch(i){e.textContent=i.status===401?"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC5B4\uC694":i.status===429?"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}it("loginB").disabled=!1};Si&&(it("lmsg").textContent="\uC800\uC7A5\uB41C \uB85C\uADF8\uC778\uC73C\uB85C \uC811\uC18D \uC911\u2026",z0().then(nd).catch(n=>{n.status===401&&(Si="",localStorage.removeItem("hor_tok")),it("lmsg").textContent=n.status===401?"\uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}));document.title=MS;window.__g={mp:wt,mpConnect:ag,get bc(){return xe},get anyM(){return pr()&&pr().id},startBc:Jf,descend:gh,get level(){return Qt},get LV(){return De},get fold(){return nn},get noiseEvents(){return cs},throwItem:$f,get npcs(){return Wf},givePE(){Eo=!0,os()},get calls(){return Ni.info.render.calls},get P(){return J},get mons(){return sn},get mir(){return $t},set yaw(n){ze=n},set pitch(n){Bs=n},get alive(){return fn},get save(){return we},setPhaseT(n){hn=n},get phase(){return en},get stairsOpen(){return hr},giveKey(){Fs=!0,os()},get keyPos(){return go}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
