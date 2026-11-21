var ju=0,Oc=1,td=2;var Ss=1,ed=2,cr=3,is=0,pn=1,qe=2,bs=0,hr=1,Bc=2,kc=3,zc=4,nd=5;var Ts=100,id=101,sd=102,rd=103,od=104,ad=200,ld=201,cd=202,hd=203,Gc=204,Hc=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,xd=212,_d=213,yd=214,ha=0,ua=1,da=2,er=3,fa=4,pa=5,ma=6,ga=7,Vc=0,vd=1,Md=2,di=0,Wc=1,Xc=2,qc=3,co=4,Yc=5,Zc=6,Jc=7;var $c=300,Es=301,ur=302,za=303,Ga=304,nr=1e3,ai=1001,xa=1002,Xe=1003,Sd=1004;var ho=1005;var un=1006,Ha=1007;var Ci=1008;var yn=1009,Kc=1010,Qc=1011,dr=1012,Va=1013,Qn=1014,Bn=1015,jn=1016,Wa=1017,Xa=1018,ws=1020,jc=35902,th=35899,eh=1021,nh=1022,ti=1023,Ai=1026,Pi=1027,qa=1028,Ya=1029,ss=1030,Za=1031;var Ja=1033,uo=33776,fo=33777,po=33778,mo=33779,$a=35840,Ka=35841,Qa=35842,ja=35843,tl=36196,el=37492,nl=37496,il=37488,sl=37489,go=37490,rl=37491,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,_l=37820,yl=37821,vl=36492,Ml=36494,Sl=36495,bl=36283,Tl=36284,xo=36285,El=36286;var Or=2300,_a=2301,la=2302,Cc=2303,Pc=2400,Ic=2401,Lc=2402;var bd=3200;var wl=0,Td=1,Ii="",hn="srgb",Br="srgb-linear",kr="linear",ue="srgb";var ca=7680;var Ed=519,wd=512,Ad=513,Rd=514,ih=515,Cd=516,Pd=517,sh=518,rh=519,Id=35044;var oh="300 es",Un=2e3,ir=2001;function qp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ld(){let n=zr("canvas");return n.style.display="block",n}var Ru={},sr=null;function ah(...n){let t="THREE."+n.shift();sr?sr("log",t,...n):console.log(t,...n)}function Dd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function kt(...n){n=Dd(n);let t="THREE."+n.shift();if(sr)sr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=Dd(n);let t="THREE."+n.shift();if(sr)sr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _s(...n){let t=n.join(" ");t in Ru||(Ru[t]=!0,kt(...n))}function Nd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ud={[ha]:ha,[da]:ma,[fa]:fa,[er]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:er},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,Gr=180/Math.PI;function _o(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Zp(n,t){return(n%t+t)%t}function lc(n,t,e){return(1-e)*n+e*t}function Fd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jp(n,t){if(t.constructor===Float32Array)return n;let e=lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function $p(n,t){if(t.constructor===Float32Array)return n;let e=lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var fh=class fh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;var jt=fh,En=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,l){let c=i[s+0],a=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||c!==d||a!==m||h!==g){let f=c*d+a*m+h*g+u*y;f<0&&(d=-d,m=-m,g=-g,y=-y,f=-f);let p=1-l;if(f<.9995){let M=Math.acos(f),R=Math.sin(M);p=Math.sin(p*M)/R,l=Math.sin(l*M)/R,c=c*p+d*l,a=a*p+m*l,h=h*p+g*l,u=u*p+y*l}else{c=c*p+d*l,a=a*p+m*l,h=h*p+g*l,u=u*p+y*l;let M=1/Math.sqrt(c*c+a*a+h*h+u*u);c*=M,a*=M,h*=M,u*=M}}t[e]=c,t[e+1]=a,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let l=i[s],c=i[s+1],a=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=l*g+h*u+c*m-a*d,t[e+1]=c*g+h*d+a*u-l*m,t[e+2]=a*g+h*m+l*d-c*u,t[e+3]=h*g-l*u-c*d-a*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,c=Math.sin,a=l(i/2),h=l(s/2),u=l(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+a*m*g,this._y=a*m*u-d*h*g,this._z=a*h*g+d*m*u,this._w=a*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+a*m*g,this._y=a*m*u-d*h*g,this._z=a*h*g-d*m*u,this._w=a*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-a*m*g,this._y=a*m*u+d*h*g,this._z=a*h*g+d*m*u,this._w=a*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-a*m*g,this._y=a*m*u+d*h*g,this._z=a*h*g-d*m*u,this._w=a*h*u+d*m*g;break;case"YZX":this._x=d*h*u+a*m*g,this._y=a*m*u+d*h*g,this._z=a*h*g-d*m*u,this._w=a*h*u-d*m*g;break;case"XZY":this._x=d*h*u-a*m*g,this._y=a*m*u-d*h*g,this._z=a*h*g+d*m*u,this._w=a*h*u+d*m*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],l=e[5],c=e[9],a=e[2],h=e[6],u=e[10],d=i+l+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-a)*m,this._z=(o-s)*m}else if(i>l&&i>u){let m=2*Math.sqrt(1+i-l-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+a)/m}else if(l>u){let m=2*Math.sqrt(1+l-i-u);this._w=(r-a)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-l);this._w=(o-s)/m,this._x=(r+a)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=e._x,c=e._y,a=e._z,h=e._w;return this._x=i*h+o*l+s*a-r*c,this._y=s*h+o*c+r*l-i*a,this._z=r*h+o*a+i*c-s*l,this._w=o*h-i*l-s*c-r*a,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-e;if(l<.9995){let a=Math.acos(l),h=Math.sin(a);c=Math.sin(c*a)/h,e=Math.sin(e*a)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,c=t.w,a=2*(o*s-l*i),h=2*(l*e-r*s),u=2*(r*i-o*e);return this.x=e+c*a+o*u-l*h,this.y=i+c*h+l*a-r*u,this.z=s+c*u+r*h-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var k=ph,cc=new k,Cu=new En,mh=class mh{constructor(t,e,i,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a)}set(t,e,i,s,r,o,l,c,a){let h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[3],c=i[6],a=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],y=s[0],f=s[3],p=s[6],M=s[1],R=s[4],S=s[7],A=s[2],w=s[5],x=s[8];return r[0]=o*y+l*M+c*A,r[3]=o*f+l*R+c*w,r[6]=o*p+l*S+c*x,r[1]=a*y+h*M+u*A,r[4]=a*f+h*R+u*w,r[7]=a*p+h*S+u*x,r[2]=d*y+m*M+g*A,r[5]=d*f+m*R+g*w,r[8]=d*p+m*S+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8];return e*o*h-e*l*a-i*r*h+i*l*c+s*r*a-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8],u=h*o-l*a,d=l*c-h*r,m=a*r-o*c,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*a-h*i)*y,t[2]=(l*i-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-l*e)*y,t[6]=m*y,t[7]=(i*c-a*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(i*c,i*a,-i*(c*o+a*l)+o+t,-s*a,s*c,-s*(-a*o+c*l)+l+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var Gt=mh,hc=new Gt,Pu=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kp(){let n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:t,whitePoint:i,transfer:kr,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}var se=Kp();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zs,ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=zr("canvas")),zs.width=t.width,zs.height=t.height;let s=zs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wi(e[i]/255)*255):e[i]=wi(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qp=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=_o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var jp=0,dc=new k,dn=class n extends li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ai,s=ai,r=un,o=Ci,l=ti,c=yn,a=n.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=_o(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=$c;dn.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,a=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],y=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(a+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(a+1)/2,S=(m+1)/2,A=(p+1)/2,w=(h+d)/4,x=(u+y)/4,T=(g+f)/4;return R>S&&R>A?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=w/i,r=x/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=T/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=T/r),this.set(i,s,r,e),this}let M=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((a+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var Ee=gh,va=class extends li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends va{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Hr=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ka=class ka{constructor(t,e,i,s,r,o,l,c,a,h,u,d,m,g,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a,h,u,d,m,g,y,f)}set(t,e,i,s,r,o,l,c,a,h,u,d,m,g,y,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=l,p[13]=c,p[2]=a,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*u,g=l*h,y=l*u;e[0]=c*h,e[4]=-c*u,e[8]=a,e[1]=m+g*a,e[5]=d-y*a,e[9]=-l*c,e[2]=y-d*a,e[6]=g+m*a,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=a*h,y=a*u;e[0]=d+y*l,e[4]=g*l-m,e[8]=o*a,e[1]=o*u,e[5]=o*h,e[9]=-l,e[2]=m*l-g,e[6]=y+d*l,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=a*h,y=a*u;e[0]=d-y*l,e[4]=-o*u,e[8]=g+m*l,e[1]=m+g*l,e[5]=o*h,e[9]=y-d*l,e[2]=-o*a,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=l*h,y=l*u;e[0]=c*h,e[4]=g*a-m,e[8]=d*a+y,e[1]=c*u,e[5]=y*a+d,e[9]=m*a-g,e[2]=-a,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*a,g=l*c,y=l*a;e[0]=c*h,e[4]=y-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-l*h,e[2]=-a*h,e[6]=m*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,m=o*a,g=l*c,y=l*a;e[0]=c*h,e[4]=-u,e[8]=a*h,e[1]=d*u+y,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=l*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,i){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Wi.crossVectors(i,Sn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Wi.crossVectors(i,Sn)),Wi.normalize(),Go.crossVectors(Sn,Wi),s[0]=Wi.x,s[4]=Go.x,s[8]=Sn.x,s[1]=Wi.y,s[5]=Go.y,s[9]=Sn.y,s[2]=Wi.z,s[6]=Go.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[4],c=i[8],a=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],y=i[6],f=i[10],p=i[14],M=i[3],R=i[7],S=i[11],A=i[15],w=s[0],x=s[4],T=s[8],N=s[12],P=s[1],U=s[5],z=s[9],X=s[13],b=s[2],C=s[6],D=s[10],F=s[14],Q=s[3],H=s[7],Z=s[11],et=s[15];return r[0]=o*w+l*P+c*b+a*Q,r[4]=o*x+l*U+c*C+a*H,r[8]=o*T+l*z+c*D+a*Z,r[12]=o*N+l*X+c*F+a*et,r[1]=h*w+u*P+d*b+m*Q,r[5]=h*x+u*U+d*C+m*H,r[9]=h*T+u*z+d*D+m*Z,r[13]=h*N+u*X+d*F+m*et,r[2]=g*w+y*P+f*b+p*Q,r[6]=g*x+y*U+f*C+p*H,r[10]=g*T+y*z+f*D+p*Z,r[14]=g*N+y*X+f*F+p*et,r[3]=M*w+R*P+S*b+A*Q,r[7]=M*x+R*U+S*C+A*H,r[11]=M*T+R*z+S*D+A*Z,r[15]=M*N+R*X+S*F+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],c=t[9],a=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],y=t[7],f=t[11],p=t[15],M=c*m-a*d,R=l*m-a*u,S=l*d-c*u,A=o*m-a*h,w=o*d-c*h,x=o*u-l*h;return e*(y*M-f*R+p*S)-i*(g*M-f*A+p*w)+s*(g*R-y*A+p*x)-r*(g*S-y*w+f*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],a=t[6],h=t[10];return e*(o*h-l*a)-i*(r*h-l*c)+s*(r*a-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],y=t[13],f=t[14],p=t[15],M=e*l-i*o,R=e*c-s*o,S=e*a-r*o,A=i*c-s*l,w=i*a-r*l,x=s*a-r*c,T=h*y-u*g,N=h*f-d*g,P=h*p-m*g,U=u*f-d*y,z=u*p-m*y,X=d*p-m*f,b=M*X-R*z+S*U+A*P-w*N+x*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return t[0]=(l*X-c*z+a*U)*C,t[1]=(s*z-i*X-r*U)*C,t[2]=(y*x-f*w+p*A)*C,t[3]=(d*w-u*x-m*A)*C,t[4]=(c*P-o*X-a*N)*C,t[5]=(e*X-s*P+r*N)*C,t[6]=(f*S-g*x-p*R)*C,t[7]=(h*x-d*S+m*R)*C,t[8]=(o*z-l*P+a*T)*C,t[9]=(i*P-e*z-r*T)*C,t[10]=(g*w-y*S+p*M)*C,t[11]=(u*S-h*w-m*M)*C,t[12]=(l*N-o*U-c*T)*C,t[13]=(e*U-i*N+s*T)*C,t[14]=(y*R-g*A-f*M)*C,t[15]=(h*A-u*R+d*M)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,l=t.y,c=t.z,a=r*o,h=r*l;return this.set(a*o+i,a*l-s*c,a*c+s*l,0,a*l+s*c,h*l+i,h*c-s*o,0,a*c-s*l,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,l=e._z,c=e._w,a=r+r,h=o+o,u=l+l,d=r*a,m=r*h,g=r*u,y=o*h,f=o*u,p=l*u,M=c*a,R=c*h,S=c*u,A=i.x,w=i.y,x=i.z;return s[0]=(1-(y+p))*A,s[1]=(m+S)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(d+p))*w,s[6]=(f+M)*w,s[7]=0,s[8]=(g+R)*x,s[9]=(f-M)*x,s[10]=(1-(d+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Gs.set(s[0],s[1],s[2]).length(),l=Gs.set(s[4],s[5],s[6]).length(),c=Gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yn.copy(this);let a=1/o,h=1/l,u=1/c;return Yn.elements[0]*=a,Yn.elements[1]*=a,Yn.elements[2]*=a,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,o,l=Un,c=!1){let a=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),m=(i+s)/(i-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(l===Un)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(l===ir)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o,l=Un,c=!1){let a=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),m=-(i+s)/(i-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(l===Un)g=-2/(o-r),y=-(o+r)/(o-r);else if(l===ir)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=0,a[12]=d,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=g,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ka.prototype.isMatrix4=!0;var me=ka,Gs=new k,Yn=new me,tm=new k(0,0,0),em=new k(1,1,1),Wi=new k,Go=new k,Sn=new k,Lu=new me,Du=new En,Kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,a),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nm=0,Nu=new k,Hs=new En,Mi=new me,Ho=new k,Ir=new k,im=new k,sm=new En,Uu=new k(1,0,0),Fu=new k(0,1,0),Ou=new k(0,0,1),Bu={type:"added"},rm={type:"removed"},Vs={type:"childadded",child:null},fc={type:"childremoved",child:null},an=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new Kn,i=new En,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Gt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Ou,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ho.copy(t):Ho.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ir,Ho,this.up):Mi.lookAt(Ho,Ir,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rm),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,h=c.length;a<h;a++){let u=c[a];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),a=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){let c=[];for(let a in l){let h=l[a];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new k(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},om={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(let y of t.hand.values()){let f=e.getJointPose(y,i),p=this._getHandJoint(a,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;a.inputState.pinching&&d>m+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&d<=m-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(om)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Zp(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let i=Od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return se.workingToColorSpace(on.copy(this),t),Math.round(re(on.r*255,0,255))*65536+Math.round(re(on.g*255,0,255))*256+Math.round(re(on.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(on.copy(this),e);let i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),l=Math.min(i,s,r),c,a,h=(l+o)/2;if(l===o)c=0,a=0;else{let u=o-l;switch(a=h<=.5?u/(o+l):u/(2-o-l),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=a,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=hn){se.workingToColorSpace(on.copy(this),t);let e=on.r,i=on.g,s=on.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Vo);let i=lc(Xi.h,Vo.h,e),s=lc(Xi.s,Vo.s,e),r=lc(Xi.l,Vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new qt;qt.NAMES=Od;var Wr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xr=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new k,Si=new k,mc=new k,bi=new k,Ws=new k,Xs=new k,ku=new k,gc=new k,xc=new k,_c=new k,yc=new Ee,vc=new Ee,Mc=new Ee,Ji=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zn.subVectors(s,e),Si.subVectors(i,e),mc.subVectors(t,e);let o=Zn.dot(Zn),l=Zn.dot(Si),c=Zn.dot(mc),a=Si.dot(Si),h=Si.dot(mc),u=o*a-l*l;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(a*c-l*h)*d,g=(o*h-l*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,i,s,r,o,l,c){return this.getBarycoord(t,e,i,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(l,bi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return yc.setScalar(0),vc.setScalar(0),Mc.setScalar(0),yc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),Mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yc,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),Si.subVectors(t,e),Zn.cross(Si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,l;Ws.subVectors(s,i),Xs.subVectors(r,i),gc.subVectors(t,i);let c=Ws.dot(gc),a=Xs.dot(gc);if(c<=0&&a<=0)return e.copy(i);xc.subVectors(t,s);let h=Ws.dot(xc),u=Xs.dot(xc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*a;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(i).addScaledVector(Ws,o);_c.subVectors(t,r);let m=Ws.dot(_c),g=Xs.dot(_c);if(g>=0&&m<=g)return e.copy(r);let y=m*a-c*g;if(y<=0&&a>=0&&g<=0)return l=a/(a-g),e.copy(i).addScaledVector(Xs,l);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return ku.subVectors(r,s),l=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(ku,l);let p=1/(f+y+d);return o=y*p,l=d*p,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Xo.subVectors(this.max,Lr),qs.subVectors(t.a,Lr),Ys.subVectors(t.b,Lr),Zs.subVectors(t.c,Lr),qi.subVectors(Ys,qs),Yi.subVectors(Zs,Ys),ps.subVectors(qs,Zs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ps.z,ps.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ps.z,0,-ps.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ps.y,ps.x,0];return!Sc(e,qs,Ys,Zs,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,qs,Ys,Zs,Xo))?!1:(qo.crossVectors(qi,Yi),e=[qo.x,qo.y,qo.z],Sc(e,qs,Ys,Zs,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new k,new k,new k,new k,new k,new k,new k,new k],Jn=new k,Wo=new ci,qs=new k,Ys=new k,Zs=new k,qi=new k,Yi=new k,ps=new k,Lr=new k,Xo=new k,qo=new k,ms=new k;function Sc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let l=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),c=t.dot(ms),a=e.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(c,a,h),Math.min(c,a,h))>l)return!1}return!0}var Ue=new k,Yo=new jt,am=0,Tn=class extends li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Id,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=t!==void 0?lh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):$p(t,this.array)}};var qr=class extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yr=class extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}},lm=new ci,Dr=new k,bc=new k,$i=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):lm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(bc)),this.expandByPoint(Dr.copy(t.center).sub(bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cm=0,Nn=new me,Tc=new an,Js=new k,bn=new ci,Nr=new ci,We=new k,fn=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qp(t)?Yr:qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];Nr.setFromBufferAttribute(l),this.morphTargetsRelative?(We.addVectors(bn.min,Nr.min),bn.expandByPoint(We),We.addVectors(bn.max,Nr.max),bn.expandByPoint(We)):(bn.expandByPoint(Nr.min),bn.expandByPoint(Nr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],c=this.morphTargetsRelative;for(let a=0,h=l.count;a<h;a++)We.fromBufferAttribute(l,a),c&&(Js.fromBufferAttribute(t,a),We.add(Js)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],c=[],a=new Uint8Array(i.count);for(let N=0;N<i.count;N++)l[N]=new k,c[N]=new k;let h=new k,u=new k,d=new k,m=new jt,g=new jt,y=new jt,f=new k,p=new k;function M(N,P,U){a[N]=a[P]=a[U]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,U),m.fromBufferAttribute(r,N),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,U),u.sub(h),d.sub(h),g.sub(m),y.sub(m);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(f.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(z),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(z),l[N].add(f),l[P].add(f),l[U].add(f),c[N].add(p),c[P].add(p),c[U].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let N=0,P=R.length;N<P;++N){let U=R[N],z=U.start,X=U.count;for(let b=z,C=z+X;b<C;b+=3)M(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let S=new k,A=new k,w=new k,x=new k;function T(N){w.fromBufferAttribute(s,N),x.copy(w);let P=l[N];S.copy(P),S.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(x,P);let z=A.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,z)}for(let N=0,P=i.count;N<P;++N)a[N]&&T(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,l=new k,c=new k,a=new k,h=new k,u=new k;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),y=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),a.fromBufferAttribute(i,f),l.add(h),c.add(h),a.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(f,a.x,a.y,a.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(l,c){let a=l.array,h=l.itemSize,u=l.normalized,d=new a.constructor(c.length*h),m=0,g=0;for(let y=0,f=c.length;y<f;y++){l.isInterleavedBufferAttribute?m=c[y]*l.data.stride+l.offset:m=c[y]*h;for(let p=0;p<h;p++)d[g++]=a[m++]}return new Tn(d,h,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=t(c,i);e.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let h=0,u=a.length;h<u;h++){let d=a[h],m=t(d,i);c.push(m)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(t[a]=c[a]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let a=i[c];t.data.attributes[c]=a.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],h=[];for(let u=0,d=a.length;u<d;u++){let m=a[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(e))}let r=t.morphAttributes;for(let a in r){let h=[],u=r[a];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[a]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ec=new k,hm=new k,um=new Gt,$n=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ec.subVectors(i,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||um.getNormalMatrix(t),s=this.coplanarPoint(Ec).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dm=0,Ki=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=hr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $n().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ei=new k,wc=new k,Zo=new k,Jo=new k,Sa=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wc.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Jo.copy(this.origin).sub(wc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zo),l=Jo.dot(this.direction),c=-Jo.dot(Zo),a=Jo.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-l,d=o*l-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,m=u*(u+o*d+2*l)+d*(o*u+d+2*c)+a}else d=r,u=Math.max(0,-(o*d+l)),m=-u*u+d*(d+2*c)+a;else d=-r,u=Math.max(0,-(o*d+l)),m=-u*u+d*(d+2*c)+a;else d<=-g?(u=Math.max(0,-(-o*r+l)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+a):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+a):(u=Math.max(0,-(o*r+l)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+a);else d=o>0?-r:r,u=Math.max(0,-(o*d+l)),m=-u*u+d*(d+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wc).addScaledVector(Zo,d),m}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,l,c,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return a>=0?(i=(t.min.x-d.x)*a,s=(t.max.x-d.x)*a):(i=(t.max.x-d.x)*a,s=(t.min.x-d.x)*a),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,h=l.z,u=t.x-o.x,d=t.y-o.y,m=t.z-o.z,g=e.x-o.x,y=e.y-o.y,f=e.z-o.z,p=i.x-o.x,M=i.y-o.y,R=i.z-o.z,S=Math.abs(c),A=Math.abs(a),w=Math.abs(h),x,T,N,P,U,z,X,b,C,D,F,Q;if(S>=A&&S>=w?(N=c,z=u,C=g,Q=p,c>=0?(x=a,T=h,P=d,U=m,X=y,b=f,D=M,F=R):(x=h,T=a,P=m,U=d,X=f,b=y,D=R,F=M)):A>=w?(N=a,z=d,C=y,Q=M,a>=0?(x=h,T=c,P=m,U=u,X=f,b=g,D=R,F=p):(x=c,T=h,P=u,U=m,X=g,b=f,D=p,F=R)):(N=h,z=m,C=f,Q=R,h>=0?(x=c,T=a,P=u,U=d,X=g,b=y,D=p,F=M):(x=a,T=c,P=d,U=u,X=y,b=g,D=M,F=p)),N===0)return null;let H=x/N,Z=T/N,et=1/N,Mt=P-H*z,At=U-Z*z,$=X-H*C,xt=b-Z*C,bt=D-H*Q,Ut=F-Z*Q,_t=bt*xt-Ut*$,Zt=Mt*Ut-At*bt,De=$*At-xt*Mt;if(s){if(_t<0||Zt<0||De<0)return null}else if((_t<0||Zt<0||De<0)&&(_t>0||Zt>0||De>0))return null;let Bt=_t+Zt+De;if(Bt===0)return null;let fe=et*(_t*z+Zt*C+De*Q);return(Bt>0?fe<0:fe>0)?null:this.at(fe/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zu=new me,gs=new Sa,$o=new $i,Gu=new k,Ko=new k,Qo=new k,jo=new k,Ac=new k,ta=new k,Hu=new k,ea=new k,Ct=class extends an{constructor(t=new fn,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){ta.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let h=l[c],u=r[c];h!==0&&(Ac.fromBufferAttribute(u,t),o?ta.addScaledVector(Ac,h):ta.addScaledVector(Ac.sub(e),h))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!($o.containsPoint(gs.origin)===!1&&(gs.intersectSphere($o,Gu)===null||gs.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(zu.copy(r).invert(),gs.copy(t.ray).applyMatrix4(zu),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),R=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,A=R;S<A;S+=3){let w=l.getX(S),x=l.getX(S+1),T=l.getX(S+2);s=na(this,p,t,i,a,h,u,w,x,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=g,p=y;f<p;f+=3){let M=l.getX(f),R=l.getX(f+1),S=l.getX(f+2);s=na(this,o,t,i,a,h,u,M,R,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),R=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let S=M,A=R;S<A;S+=3){let w=S,x=S+1,T=S+2;s=na(this,p,t,i,a,h,u,w,x,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=g,p=y;f<p;f+=3){let M=f,R=f+1,S=f+2;s=na(this,o,t,i,a,h,u,M,R,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function fm(n,t,e,i,s,r,o,l){let c;if(t.side===pn?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,t.side===is,l),c===null)return null;ea.copy(l),ea.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(ea);return a<e.near||a>e.far?null:{distance:a,point:ea.clone(),object:n}}function na(n,t,e,i,s,r,o,l,c,a){n.getVertexPosition(l,Ko),n.getVertexPosition(c,Qo),n.getVertexPosition(a,jo);let h=fm(n,t,e,i,Ko,Qo,jo,Hu);if(h){let u=new k;Ji.getBarycoord(Hu,Ko,Qo,jo,u),s&&(h.uv=Ji.getInterpolatedAttribute(s,l,c,a,u,new jt)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,l,c,a,u,new jt)),o&&(h.normal=Ji.getInterpolatedAttribute(o,l,c,a,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:a,normal:new k,materialIndex:0};Ji.getNormal(Ko,Qo,jo,d.normal),h.face=d,h.barycoord=u}return h}var Zr=class extends dn{constructor(t=null,e=1,i=1,s,r,o,l,c,a=Xe,h=Xe,u,d){super(null,o,l,c,a,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends Tn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new me,Vu=new me,ia=[],Wu=new ci,pm=new me,Ur=new Ct,Fr=new $i,Jr=class extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Wu.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$s),Fr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let l=0;l<i.length;l++)i[l]=s[o+l]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),t.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Vu.multiplyMatrices(i,$s),Ur.matrixWorld=Vu,Ur.raycast(t,ia);for(let o=0,l=ia.length;o<l;o++){let c=ia[o];c.instanceId=r,c.object=this,e.push(c)}ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,qa,Bn));let r=this.morphTexture.source.data.data,o=0;for(let a=0;a<i.length;a++)o+=i[a];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=l,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new $i,mm=new jt(.5,.5),sa=new k,Qi=class{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un,i=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],a=r[3],h=r[4],u=r[5],d=r[6],m=r[7],g=r[8],y=r[9],f=r[10],p=r[11],M=r[12],R=r[13],S=r[14],A=r[15];if(s[0].setComponents(a-o,m-h,p-g,A-M).normalize(),s[1].setComponents(a+o,m+h,p+g,A+M).normalize(),s[2].setComponents(a+l,m+u,p+y,A+R).normalize(),s[3].setComponents(a-l,m-u,p-y,A-R).normalize(),i)s[4].setComponents(c,d,f,S).normalize(),s[5].setComponents(a-c,m-d,p-f,A-S).normalize();else if(s[4].setComponents(a-c,m-d,p-f,A-S).normalize(),e===Un)s[5].setComponents(a+c,m+d,p+f,A+S).normalize();else if(e===ir)s[5].setComponents(c,d,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=mm.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xu=new me,ba=class n{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Qi),i[s].setFromProjectionMatrix(Xu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var $r=class extends dn{constructor(t=[],e=Es,i,s,r,o,l,c,a,h){super(t,e,i,s,r,o,l,c,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kr=class extends dn{constructor(t,e,i,s,r,o,l,c,a){super(t,e,i,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends dn{constructor(t,e,i=Qn,s,r,o,l=Xe,c=Xe,a,h=Ai,u=1){if(h!==Ai&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,l,c,h,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qr=class extends Ri{constructor(t,e=Qn,i=Es,s,r,o=Xe,l=Xe,c,a=Ai){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,l,c,a),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},te=class n extends fn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(y,f,p,M,R,S,A,w,x,T,N){let P=S/x,U=A/T,z=S/2,X=A/2,b=w/2,C=x+1,D=T+1,F=0,Q=0,H=new k;for(let Z=0;Z<D;Z++){let et=Z*U-X;for(let Mt=0;Mt<C;Mt++){let At=Mt*P-z;H[y]=At*M,H[f]=et*R,H[p]=b,a.push(H.x,H.y,H.z),H[y]=0,H[f]=0,H[p]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(Mt/x),u.push(1-Z/T),F+=1}}for(let Z=0;Z<T;Z++)for(let et=0;et<x;et++){let Mt=d+et+C*Z,At=d+et+C*(Z+1),$=d+(et+1)+C*(Z+1),xt=d+(et+1)+C*Z;c.push(Mt,At,xt),c.push(At,$,xt),Q+=6}l.addGroup(m,Q,N),m+=Q,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},to=class n extends fn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],l=[],c=[],a=[],h=e/2,u=Math.PI/2*t,d=e,m=2*u+d,g=i*2+r,y=s+1,f=new k,p=new k;for(let M=0;M<=g;M++){let R=0,S=0,A=0,w=0;if(M<=i){let N=M/i,P=N*Math.PI/2;S=-h-t*Math.cos(P),A=t*Math.sin(P),w=-t*Math.cos(P),R=N*u}else if(M<=i+r){let N=(M-i)/r;S=-h+N*e,A=t,w=0,R=u+N*d}else{let N=(M-i-r)/i,P=N*Math.PI/2;S=h+t*Math.sin(P),A=t*Math.cos(P),w=t*Math.sin(P),R=u+d+N*u}let x=Math.max(0,Math.min(1,R/m)),T=0;M===0?T=.5/s:M===g&&(T=-.5/s);for(let N=0;N<=s;N++){let P=N/s,U=P*Math.PI*2,z=Math.sin(U),X=Math.cos(U);p.x=-A*X,p.y=S,p.z=A*z,l.push(p.x,p.y,p.z),f.set(-A*X,w,A*z),f.normalize(),c.push(f.x,f.y,f.z),a.push(P+T,x)}if(M>0){let N=(M-1)*y;for(let P=0;P<s;P++){let U=N+P,z=N+P+1,X=M*y+P,b=M*y+P+1;o.push(U,z,X),o.push(z,b,X)}}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ys=class n extends fn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],l=[],c=[],a=new k,h=new jt;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=i+u/e*s;a.x=t*Math.cos(m),a.y=t*Math.sin(m),o.push(a.x,a.y,a.z),l.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hi=class n extends fn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,y=[],f=i/2,p=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(m,2));function M(){let S=new k,A=new k,w=0,x=(e-t)/i;for(let T=0;T<=r;T++){let N=[],P=T/r,U=P*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,b=X*c+l,C=Math.sin(b),D=Math.cos(b);A.x=U*C,A.y=-P*i+f,A.z=U*D,u.push(A.x,A.y,A.z),S.set(C,x,D).normalize(),d.push(S.x,S.y,S.z),m.push(X,1-P),N.push(g++)}y.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){let P=y[N][T],U=y[N+1][T],z=y[N+1][T+1],X=y[N][T+1];(t>0||N!==0)&&(h.push(P,U,X),w+=3),(e>0||N!==r-1)&&(h.push(U,z,X),w+=3)}a.addGroup(p,w,0),p+=w}function R(S){let A=g,w=new jt,x=new k,T=0,N=S===!0?t:e,P=S===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,f*P,0),d.push(0,P,0),m.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let b=z/s*c+l,C=Math.cos(b),D=Math.sin(b);x.x=N*D,x.y=f*P,x.z=N*C,u.push(x.x,x.y,x.z),d.push(0,P,0),w.x=C*.5+.5,w.y=D*.5*P+.5,m.push(w.x,w.y),g++}for(let z=0;z<s;z++){let X=A+z,b=U+z;S===!0?h.push(b,b+1,X):h.push(b+1,b,X),T+=3}a.addGroup(p,T,S===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},eo=class n extends hi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,t,e,i,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ge=class n extends fn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(i),c=Math.floor(s),a=l+1,h=c+1,u=t/l,d=e/c,m=[],g=[],y=[],f=[];for(let p=0;p<h;p++){let M=p*d-o;for(let R=0;R<a;R++){let S=R*u-r;g.push(S,-M,0),y.push(0,0,1),f.push(R/l),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<l;M++){let R=M+a*p,S=M+a*(p+1),A=M+1+a*(p+1),w=M+1+a*p;m.push(R,S,w),m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var _n=class n extends fn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+l,Math.PI),a=0,h=[],u=new k,d=new k,m=[],g=[],y=[],f=[];for(let p=0;p<=i;p++){let M=[],R=p/i,S=o+R*l,A=t*Math.cos(S),w=Math.sqrt(t*t-A*A),x=0;p===0&&o===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let N=T/e,P=s+N*r;u.x=-w*Math.cos(P),u.y=A,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(N+x,1-R),M.push(a++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let R=h[p][M+1],S=h[p][M],A=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&m.push(R,S,w),(p!==i-1||c<Math.PI)&&m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vs=class n extends fn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},i=Math.floor(i),s=Math.floor(s);let c=[],a=[],h=[],u=[],d=new k,m=new k,g=new k;for(let y=0;y<=i;y++){let f=o+y/i*l;for(let p=0;p<=s;p++){let M=p/s*r;m.x=(t+e*Math.cos(f))*Math.cos(M),m.y=(t+e*Math.cos(f))*Math.sin(M),m.z=e*Math.sin(f),a.push(m.x,m.y,m.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let f=1;f<=s;f++){let p=(s+1)*y+f-1,M=(s+1)*(y-1)+f-1,R=(s+1)*(y-1)+f,S=(s+1)*y+f;c.push(p,M,S),c.push(M,R,S)}this.setIndex(c),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function As(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(qu(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ln(n){let t={};for(let e=0;e<n.length;e++){let i=As(n[e]);for(let s in i)t[s]=i[s]}return t}function qu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function gm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Bd={clone:As,merge:ln},xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ta=class extends ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ji=class extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},no=class extends ji{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return _s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){_s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ea=class extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wa=class extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ks(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ra(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ts=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends ts{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ic:r=t,l=2*e-i;break;case Lc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ic:o=t,c=2*i-e;break;case Lc:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let a=(i-e)*.5,h=this.valueSize;this._weightPrev=a/(e-l),this._weightNext=a/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),y=g*g,f=y*g,p=-d*f+2*d*y-d*g,M=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*g+1,R=(-1-m)*f+(1.5+m)*y+.5*g,S=m*f-m*y;for(let A=0;A!==l;++A)r[A]=p*o[h+A]+M*o[a+A]+R*o[c+A]+S*o[u+A];return r}},Ra=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==l;++d)r[d]=o[a+d]*u+o[c+d]*h;return r}},Ca=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pa=class extends ts{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),y=1-g;for(let f=0;f!==l;++f)r[f]=o[a+f]*y+o[c+f]*g;return r}let d=l*2,m=t-1;for(let g=0;g!==l;++g){let y=o[a+g],f=o[c+g],p=m*d+g*2,M=u[p],R=u[p+1],S=t*d+g*2,A=h[S],w=h[S+1],x=vm(i,e,M,A,s);r[g]=kd(x,y,R,w,f)}return r}};function kd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function ym(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function vm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let l=kd(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=ym(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var An=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ra(t.settings)&&(i.settings={inTangents:Ks(t.settings.inTangents,Array),outTangents:Ks(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case _a:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;ra(this.settings)&&(Yu(this.settings.inTangents,t),Yu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ra(this.settings)&&(Zu(this.settings.inTangents,t),Zu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){zt("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(s!==void 0&&Yp(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){zt("KeyframeTrack: Value is not a valid number.",this,l,a),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=t[l],h=t[l+1];if(a!==h&&(l!==1||a!==t[0]))if(s)c=!0;else{let u=l*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[m+g]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let u=l*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,c=o*i,a=0;a!==i;++a)e[c+a]=e[l+a];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Zu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=_a;var es=class extends An{constructor(t,e,i){super(t,e,i)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends An{constructor(t,e,i,s){super(t,e,i,s)}};Ia.prototype.ValueTypeName="color";var La=class extends An{constructor(t,e,i,s){super(t,e,i,s)}};La.prototype.ValueTypeName="number";var Da=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),a=t*l;for(let h=a+l;a!==h;a+=4)En.slerpFlat(r,0,o,a-l,o,a,c);return r}},io=class extends An{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends An{constructor(t,e,i){super(t,e,i)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Or;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends An{constructor(t,e,i,s){super(t,e,i,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(t,e,i){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=a.length;u<d;u+=2){let m=a[u],g=a[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zd=new Ua,Fa=class{constructor(t){this.manager=t!==void 0?t:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends an{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},so=class extends Ms{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rc=new me,Ju=new k,$u=new k,ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),$u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($u),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,a=s?s.y/r.y:0;t.coordinateSystem===ir||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+a,0,0,.5,.5,0,0,0,1),e.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oa=new k,aa=new En,oi=new k,oo=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,aa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oa,aa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new k,Ku=new jt,Qu=new jt,Qe=class extends oo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ku,Qu),e.subVectors(Qu,Ku)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/a,s*=o.width/c,i*=o.height/a}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Dc=class extends ro{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Gr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ao=class extends Ms{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Nc=class extends ro{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},On=class extends Ms{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Oa=class extends oo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var lo=class extends Ms{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qs=-90,js=1,lr=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Qs,js,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Qs,js,t,e);r.layers=this.layers,this.add(r);let o=new Qe(Qs,js,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Qs,js,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Qs,js,t,e);c.layers=this.layers,this.add(c);let a=new Qe(Qs,js,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,l,c]=e;for(let a of e)this.remove(a);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ba=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var hh="\\[\\]\\.:\\/",Mm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Sm="[^"+hh.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Tm=/(WCOD+)?/.source.replace("WCOD",Sm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Am=new RegExp("^"+bm+Tm+Em+wm+"$"),Rm=["material","materials","bones","map"],Uc=class{constructor(t,e,i){let s=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(t){let e=Am.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===a){a=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(a!==void 0){if(t[a]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[a]}}let o=t[s];if(o===void 0){let a=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Uc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var xh=class xh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};xh.prototype.isMatrix2=!0;var Fc=xh;function dh(n,t,e,i){let s=Cm(i);switch(e){case eh:return n*t;case qa:return n*t/s.components*s.byteLength;case Ya:return n*t/s.components*s.byteLength;case ss:return n*t*2/s.components*s.byteLength;case Za:return n*t*2/s.components*s.byteLength;case nh:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Ja:return n*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:case ja:return Math.max(n,16)*Math.max(t,8)/4;case $a:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case tl:case el:case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nl:case go:case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vl:case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xo:case El:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cm(n){switch(n){case yn:case Kc:return{byteLength:1,components:1};case dr:case Qc:case jn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Qn:case Va:case Bn:return{byteLength:4,components:1};case jc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function km(n){let t=new WeakMap;function e(l,c){let a=l.array,h=l.usage,u=a.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,a,h),l.onUploadCallback();let m;if(a instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=n.SHORT;else if(a instanceof Uint32Array)m=n.UNSIGNED_INT;else if(a instanceof Int32Array)m=n.INT;else if(a instanceof Int8Array)m=n.BYTE;else if(a instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function i(l,c,a){let h=c.array,u=c.updateRanges;if(n.bindBuffer(a,l),u.length===0)n.bufferSubData(a,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],y=u[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let y=u[m];n.bufferSubData(a,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=t.get(l);if(a===void 0)t.set(l,e(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,t0=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
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
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform float backgroundBlurriness;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,tx=`uniform vec3 diffuse;
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
}`,ex=`#define LAMBERT
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,rx=`#define NORMAL
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
}`,ox=`#define NORMAL
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
}`,ax=`#define PHONG
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
}`,lx=`#define PHONG
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
}`,cx=`#define STANDARD
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
}`,hx=`#define STANDARD
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
}`,ux=`#define TOON
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
}`,dx=`#define TOON
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
}`,fx=`uniform float size;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:zm,alphahash_pars_fragment:Gm,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:$m,beginnormal_vertex:Km,bsdfs:Qm,iridescence_fragment:jm,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:l0,common:c0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:_0,envmap_pars_fragment:y0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:I0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:E0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:z0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:Z0,map_particle_pars_fragment:J0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Q0,morphcolor_vertex:j0,morphnormal_vertex:tg,morphtarget_pars_vertex:eg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:xg,dithering_pars_fragment:_g,roughnessmap_fragment:yg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Sg,shadowmap_vertex:bg,shadowmask_pars_fragment:Tg,skinbase_vertex:Eg,skinning_pars_vertex:wg,skinning_vertex:Ag,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Pg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ng,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:kg,background_frag:zg,backgroundCube_vert:Gg,backgroundCube_frag:Hg,cube_vert:Vg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distance_vert:Yg,distance_frag:Zg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:Kg,linedashed_frag:Qg,meshbasic_vert:jg,meshbasic_frag:tx,meshlambert_vert:ex,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:sx,meshnormal_vert:rx,meshnormal_frag:ox,meshphong_vert:ax,meshphong_frag:lx,meshphysical_vert:cx,meshphysical_frag:hx,meshtoon_vert:ux,meshtoon_frag:dx,points_vert:fx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:xx,sprite_frag:_x},gt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},pi={basic:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ln([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ln([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ln([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ln([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ln([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ln([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:ln([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:ln([gt.lights,gt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};pi.physical={uniforms:ln([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Al={r:0,b:0,g:0},yx=new me,hf=new Gt;hf.set(-1,0,0,0,1,0,0,0,1);function vx(n,t,e,i,s,r){let o=new qt(0),l=s===!0?0:1,c,a,h=null,u=0,d=null;function m(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function g(M){let R=!1,S=m(M);S===null?f(o,l):S&&S.isColor&&(f(S,1),R=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,R){let S=m(R);S&&S.isCubeTexture?(a===void 0&&(a=new Ct(new te(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:As(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=S,a.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(hf),a.material.toneMapped=se.getTransfer(S.colorSpace)!==ue,(h!==S||u!==S.version||d!==n.toneMapping)&&(a.material.needsUpdate=!0,h=S,u=S.version,d=n.toneMapping),a.layers.enableAll(),M.unshift(a,a.geometry,a.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ct(new ge(2,2),new ui({name:"BackgroundMaterial",uniforms:As(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=se.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,R){M.getRGB(Al,ch(n)),e.buffers.color.setClear(Al.r,Al.g,Al.b,R,r)}function p(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),l=R,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:y,dispose:p}}function Mx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function l(U,z,X,b,C){let D=!1,F=u(U,b,X,z);r!==F&&(r=F,a(r.object)),D=m(U,b,X,C),D&&g(U,b,X,C),C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(U,z,X,b),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function c(){return n.createVertexArray()}function a(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,z,X,b){let C=b.wireframe===!0,D=i[z.id];D===void 0&&(D={},i[z.id]=D);let F=U.isInstancedMesh===!0?U.id:0,Q=D[F];Q===void 0&&(Q={},D[F]=Q);let H=Q[X.id];H===void 0&&(H={},Q[X.id]=H);let Z=H[C];return Z===void 0&&(Z=d(c()),H[C]=Z),Z}function d(U){let z=[],X=[],b=[];for(let C=0;C<e;C++)z[C]=0,X[C]=0,b[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:b,object:U,attributes:{},index:null}}function m(U,z,X,b){let C=r.attributes,D=z.attributes,F=0,Q=X.getAttributes();for(let H in Q)if(Q[H].location>=0){let et=C[H],Mt=D[H];if(Mt===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor)),et===void 0||et.attribute!==Mt||Mt&&et.data!==Mt.data)return!0;F++}return r.attributesNum!==F||r.index!==b}function g(U,z,X,b){let C={},D=z.attributes,F=0,Q=X.getAttributes();for(let H in Q)if(Q[H].location>=0){let et=D[H];et===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let Mt={};Mt.attribute=et,et&&et.data&&(Mt.data=et.data),C[H]=Mt,F++}r.attributes=C,r.attributesNum=F,r.index=b}function y(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function f(U){p(U,0)}function p(U,z){let X=r.newAttributes,b=r.enabledAttributes,C=r.attributeDivisors;X[U]=1,b[U]===0&&(n.enableVertexAttribArray(U),b[U]=1),C[U]!==z&&(n.vertexAttribDivisor(U,z),C[U]=z)}function M(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,b=z.length;X<b;X++)z[X]!==U[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function R(U,z,X,b,C,D,F){F===!0?n.vertexAttribIPointer(U,z,X,C,D):n.vertexAttribPointer(U,z,X,b,C,D)}function S(U,z,X,b){y();let C=b.attributes,D=X.getAttributes(),F=z.defaultAttributeValues;for(let Q in D){let H=D[Q];if(H.location>=0){let Z=C[Q];if(Z===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){let et=Z.normalized,Mt=Z.itemSize,At=t.get(Z);if(At===void 0)continue;let $=At.buffer,xt=At.type,bt=At.bytesPerElement,Ut=xt===n.INT||xt===n.UNSIGNED_INT||Z.gpuType===Va;if(Z.isInterleavedBufferAttribute){let _t=Z.data,Zt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,De=Z.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt,_t.meshPerAttribute);U.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)f(H.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Bt=0;Bt<H.locationSize;Bt++)R(H.location+Bt,Mt/H.locationSize,xt,et,Zt*bt,(De+Mt/H.locationSize*Bt)*bt,Ut)}else{if(Z.isInstancedBufferAttribute){for(let _t=0;_t<H.locationSize;_t++)p(H.location+_t,Z.meshPerAttribute);U.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _t=0;_t<H.locationSize;_t++)f(H.location+_t);n.bindBuffer(n.ARRAY_BUFFER,$);for(let _t=0;_t<H.locationSize;_t++)R(H.location+_t,Mt/H.locationSize,xt,et,Mt*bt,Mt/H.locationSize*_t*bt,Ut)}}else if(F!==void 0){let et=F[Q];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}M()}function A(){N();for(let U in i){let z=i[U];for(let X in z){let b=z[X];for(let C in b){let D=b[C];for(let F in D)h(D[F].object),delete D[F];delete b[C]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let X in z){let b=z[X];for(let C in b){let D=b[C];for(let F in D)h(D[F].object),delete D[F];delete b[C]}}delete i[U.id]}function x(U){for(let z in i){let X=i[z];for(let b in X){let C=X[b];if(C[U.id]===void 0)continue;let D=C[U.id];for(let F in D)h(D[F].object),delete D[F];delete C[U.id]}}}function T(U){for(let z in i){let X=i[z],b=U.isInstancedMesh===!0?U.id:0,C=X[b];if(C!==void 0){for(let D in C){let F=C[D];for(let Q in F)h(F[Q].object),delete F[Q];delete C[D]}delete X[b],Object.keys(X).length===0&&delete i[z]}}}function N(){P(),o=!0,r!==s&&(r=s,a(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:N,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:f,disableUnusedAttributes:M}}function Sx(n,t,e){let i;function s(c){i=c}function r(c,a){n.drawArrays(i,c,a),e.update(a,i,1)}function o(c,a,h){h!==0&&(n.drawArraysInstanced(i,c,a,h),e.update(a,i,h))}function l(c,a,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,a,0,h);let d=0;for(let m=0;m<h;m++)d+=a[m];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function bx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ti&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){let T=x===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==yn&&x!==Bn&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp",h=c(a);h!==a&&(kt("WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:w}}function Tx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new $n,l=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):a();else{let M=r?0:i,R=M*4,S=p.clippingState||null;c.value=S,S=h(g,d,R,m);for(let A=0;A!==R;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function a(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){let y=u!==null?u.length:0,f=null;if(y!==0){if(f=c.value,g!==!0||f===null){let p=m+y*4,M=d.matrixWorldInverse;l.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let R=0,S=m;R!==y;++R,S+=4)o.copy(u[R]).applyMatrix4(M,l),o.normal.toArray(f,S),f[S+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}var Mo=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:bs});r.uniforms.tEquirect.value=e;let o=new Ct(s,r),l=e.minFilter;return e.minFilter===Ci&&(e.minFilter=un),new lr(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Gd=256,Ex=3,wx=20,uf=256,df=16,Ax=3,Rx=new k,Cx=new qt,Cl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new Ct(new te(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:l=Rx}=r,c=this._renderer;this._setSize(o);let a=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(Cx));let f=new lr(i,s,h);return f.position.copy(l),f.update(c,t),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=m,c.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(a,e)),this._applyPMREM(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gd,Fd(t))}_fromTexture(t,e){t.mapping===Es||t.mapping===ur?this._setSize(t.image.length===0?Gd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Hd(t,!1,!1),i=Math.log2(t)-Ex;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Hd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Es||t.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Px(),this._integrationMaterial=Ix());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/df);for(let o=0;o<=i;o++){let l=n.lodToRoughness(o,i);if(o>i-Ax)r.roughness.value=l,this._renderCube(t,o,this._integrationMaterial);else{let c=l>0?Math.log2(e)+.5*Math.log2(6/(uf*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Lx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Hd(n,t,e){return new Mo(n,{minFilter:Ci,generateMipmaps:t,type:jn,colorSpace:Br,depthBuffer:e})}function So(n,t,e){return new ui({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:pn,blending:bs,depthTest:!1,depthWrite:!1})}function Px(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uf}u

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
	`)}function Ix(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function Lx(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wx}
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
	`)}function Vd(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wd(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,m=!1){return d==null?null:m?o(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===za||m===Ga)if(t.has(d)){let g=t.get(d).texture;return l(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Mo(g.height);return y.fromEquirectangularTexture(n,d),t.set(d,y),d.addEventListener("dispose",a),l(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===za||m===Ga,y=m===Es||m===ur;if(g||y){let f=e.get(d),p=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Cl(n)),f=g?i.fromEquirectangular(d,f):i.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),f.texture;if(f!==void 0)return f.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&c(M)?(i===null&&(i=new Cl(n)),f=g?i.fromEquirectangular(d):i.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function l(d,m){return m===za?d.mapping=Es:m===Ga&&(d.mapping=ur),d}function c(d){let m=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&m++;return m===g}function a(d){let m=d.target;m.removeEventListener("dispose",a);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Nx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_s("WebGLRenderer: "+i+" extension not supported."),s}}}function Ux(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function l(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",l),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",l),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let f in y)t.update(y[f],n.ARRAY_BUFFER)}function u(g){let y=g.index,f=g.attributes.position,p=0;if(f===void 0)return;let M=y!==null?y.array.length:f.array.length/3-1,R=f.count>=65535?Yr:qr,S=new R(Math.ceil(M/3)*6,1),A=S.array;if(y!==null){let x=y.array;p=y.version;for(let T=0,N=0;T<M;T+=3){let P=x[T+0],U=x[T+1],z=x[T+2];A[N++]=P,A[N++]=U,A[N++]=U,A[N++]=z,A[N++]=z,A[N++]=P}}else{p=f.version;for(let x=0,T=0;x<M;x+=3){let N=x+0,P=x+1,U=x+2;A[T++]=N,A[T++]=P,A[T++]=P,A[T++]=U,A[T++]=U,A[T++]=N}}S.version=p;let w=r.get(g);w&&t.remove(w),r.set(g,S)}function d(g){let y=r.get(g);if(y){let f=g.index;f!==null&&y.version<f.version&&u(g)}else u(g);return r.get(g)}function m(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:a,update:h,getWireframeAttribute:d,dispose:m}}function Fx(n,t,e){let i;function s(u){i=u}let r,o;function l(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function a(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*o,m),e.update(d,i,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let y=0;for(let f=0;f<m;f++)y+=d[f];e.update(y,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=h}function Ox(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Bx(n,t,e){let i=new WeakMap,s=new Ee;function r(o,l,c){let a=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(l);if(d===void 0||d.count!==u){let N=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let m=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],R=0;m===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let S=l.attributes.position.count*R,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*u),x=new Hr(w,S,A,u);x.type=Bn,x.needsUpdate=!0;let T=R*4;for(let P=0;P<u;P++){let U=f[P],z=p[P],X=M[P],b=S*A*4*P;for(let C=0;C<U.count;C++){let D=C*T;m===!0&&(s.fromBufferAttribute(U,C),w[b+D+0]=s.x,w[b+D+1]=s.y,w[b+D+2]=s.z,w[b+D+3]=0),g===!0&&(s.fromBufferAttribute(z,C),w[b+D+4]=s.x,w[b+D+5]=s.y,w[b+D+6]=s.z,w[b+D+7]=0),y===!0&&(s.fromBufferAttribute(X,C),w[b+D+8]=s.x,w[b+D+9]=s.y,w[b+D+10]=s.z,w[b+D+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new jt(S,A)},i.set(l,d),l.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<a.length;y++)m+=a[y];let g=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function kx(n,t,e,i,s){let r=new WeakMap;function o(a){let h=s.render.frame,u=a.geometry,d=t.get(a,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==h&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,h))),a.isSkinnedMesh){let m=a.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function l(){r=new WeakMap}function c(a){let h=a.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:l}}var zx={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[co]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function Gx(n,t,e,i,s,r){let o=new wn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=null,h=new fn;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let u=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(h,u),m=new Oa(-1,1,1,-1,0,1),g=null,y=null,f=!1,p,M=null,R=[],S=!1;this.setSize=function(A,w){o.setSize(A,w),l!==null&&l.setSize(A,w),c!==null&&c.setSize(A,w);for(let x=0;x<R.length;x++){let T=R[x];T.setSize&&T.setSize(A,w)}},this.setEffects=function(A){R=A,S=R.length>0&&R[0].isRenderPass===!0;let w=o.width,x=o.height;R.length>0&&l===null&&(l=new wn(w,x,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new wn(w,x,{type:jn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&R.some(N=>N.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&a===null&&(a=new Ri(w,x),r===!0&&(a.format=Pi,a.type=ws)),o.dispose(),o.depthTexture=T?a:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let N=0;N<R.length;N++){let P=R[N];P.setSize&&P.setSize(w,x),T&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(a)}},this.begin=function(A,w){if(f||A.toneMapping===di&&R.length===0)return!1;if(M=w,w!==null){let x=w.width,T=w.height;(o.width!==x||o.height!==T)&&this.setSize(x,T)}return S===!1&&A.setRenderTarget(o),p=A.toneMapping,A.toneMapping=di,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=p,f=!0;let x=o,T=l;for(let N=0;N<R.length;N++){let P=R[N];P.enabled!==!1&&(P.render(A,T,x,w),P.needsSwap!==!1&&(x=T,T=T===l?c:l))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,u.defines={},se.getTransfer(g)===ue&&(u.defines.SRGB_TRANSFER="");let N=zx[y];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(d,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var ff=new dn,pf=new Ri(1,1),mf=new Qr(1),gf=new Hr,xf=new Ma,_f=new $r,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function pr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,n[o].toArray(r,l)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Il(n,t){let e=qd[t];e===void 0&&(e=new Int32Array(t),qd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Hx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function Wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function Xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function qx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),ke(e,i)}}function Yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),ke(e,i)}}function Zx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),ke(e,i)}}function Jx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function Kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function Qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function jx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function Ll(n){return n.version===0&&(n.compareFunction=rh,n.needsUpdate=!0),n}function i_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ll(pf):r=ff,e.setTexture2D(t||r,s)}function s_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xf,s)}function r_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ll(mf):r=_f,e.setTextureCube(t||r,s)}function o_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gf,s)}function a_(n){switch(n){case 5126:return Hx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return $x;case 35668:case 35672:return Kx;case 35669:case 35673:return Qx;case 5125:return jx;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(n,t){n.uniform1fv(this.addr,t)}function c_(n,t){let e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function h_(n,t){let e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function u_(n,t){let e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function d_(n,t){let e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function f_(n,t){let e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p_(n,t){let e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function m_(n,t){n.uniform1iv(this.addr,t)}function g_(n,t){n.uniform2iv(this.addr,t)}function x_(n,t){n.uniform3iv(this.addr,t)}function __(n,t){n.uniform4iv(this.addr,t)}function y_(n,t){n.uniform1uiv(this.addr,t)}function v_(n,t){n.uniform2uiv(this.addr,t)}function M_(n,t){n.uniform3uiv(this.addr,t)}function S_(n,t){n.uniform4uiv(this.addr,t)}function b_(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ll(pf):o=ff;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function T_(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xf,r[o])}function E_(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ll(mf):o=_f;for(let l=0;l!==s;++l)e.setTextureCube(t[l]||o,r[l])}function w_(n,t,e){let i=this.cache,s=t.length,r=Il(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return __;case 5125:return y_;case 36294:return v_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}var vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}},Mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}},Sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;function $d(n,t){n.seq.push(t),n.map[t.id]=t}function R_(n,t,e){let i=n.name,s=i.length;for(_h.lastIndex=0;;){let r=_h.exec(i),o=_h.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){$d(e,a===void 0?new vh(l,n,t):new Mh(l,n,t));break}else{let u=e.map[l];u===void 0&&(u=new Sh(l),$d(e,u)),e=u}}}var fr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);R_(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Kd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var C_=37297,P_=0;function I_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var Qd=new Gt;function L_(n){se._getMatrix(Qd,se.workingColorSpace,n);let t=`mat3( ${Qd.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case kr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+I_(n.getShaderSource(t),l)}else return r}function D_(n,t){let e=L_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var N_={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[co]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function U_(n,t){let e=N_[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new k;function F_(){se.getLuminanceCoefficients(Rl);let n=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function B_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function k_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:l}}return e}function vo(n){return n!==""}function tf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ef(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(z_,G_)}function G_(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bh(e)}var H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(H_,V_)}function V_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var W_={[Ss]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function X_(n){return W_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var q_={[ur]:"ENVMAP_MODE_REFRACTION"};function Y_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[Md]:"ENVMAP_BLENDING_ADD"};function J_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[n.combine]||"ENVMAP_BLENDING_NONE"}function $_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,c=X_(e),a=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Y_(e),u=J_(e),d=O_(e),m=B_(r),g=s.createProgram(),y,f,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vo).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vo).join(`
`),f.length>0&&(f+=`
`)):(y=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),f=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Qt.tonemapping_pars_fragment:"",e.toneMapping!==di?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),F_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=bh(o),o=tf(o,e),o=ef(o,e),l=bh(l),l=tf(l,e),l=ef(l,e),o=nf(o),l=nf(l),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=p+y+o,R=p+f+l,S=Kd(s,s.VERTEX_SHADER,M),A=Kd(s,s.FRAGMENT_SHADER,R);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(S)||"",X=s.getShaderInfoLog(A)||"",b=U.trim(),C=z.trim(),D=X.trim(),F=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,A);else{let H=jd(s,S,"vertex"),Z=jd(s,A,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+b+`
`+H+`
`+Z)}else b!==""?kt("WebGLProgram: Program Info Log:",b):(C===""||D==="")&&(Q=!1);Q&&(P.diagnostics={runnable:F,programLog:b,vertexShader:{log:C,prefix:y},fragmentShader:{log:D,prefix:f}})}s.deleteShader(S),s.deleteShader(A),x=new fr(s,g),T=k_(s,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,C_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var K_=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Eh(t),e.set(t,i)),i}},Eh=class{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}};function Q_(n){return n===ss||n===go||n===xo}function j_(n,t,e,i,s,r){let o=new Vr,l=new Th,c=new Set,a=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,T,N,P,U,z){let X=P.fog,b=U.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||C,D),Q=d[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let Z=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,et=Z!==void 0?Z.length:0,Mt=0;b.morphAttributes.position!==void 0&&(Mt=1),b.morphAttributes.normal!==void 0&&(Mt=2),b.morphAttributes.color!==void 0&&(Mt=3);let At,$,xt,bt;if(Q){let mt=pi[Q];At=mt.vertexShader,$=mt.fragmentShader}else{At=x.vertexShader,$=x.fragmentShader;let mt=l.getVertexShaderStage(x),pe=l.getFragmentShaderStage(x);l.update(x,mt,pe),xt=mt.id,bt=pe.id}let Ut=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Zt=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,Bt=!!x.map,fe=!!x.matcap,_e=!!F,ee=_e&&F.isPMREMTexture===!0,$e=!!x.aoMap,Fe=!!x.lightMap,xn=!!x.bumpMap&&x.wireframe===!1,Re=!!x.normalMap,ri=!!x.displacementMap,Ge=!!x.emissiveMap,Pn=!!x.metalnessMap,In=!!x.roughnessMap,Ln=x.anisotropy>0,O=x.clearcoat>0,Dn=x.diffuseRoughness>0,be=x.dispersion>0,Te=x.retroreflectivity>0,pt=x.iridescence>0,Oe=x.sheen>0,Ft=x.transmission>0,Ht=Ln&&!!x.anisotropyMap,E=O&&!!x.clearcoatMap,_=O&&!!x.clearcoatNormalMap,V=O&&!!x.clearcoatRoughnessMap,it=Dn&&!!x.diffuseRoughnessMap,tt=pt&&!!x.iridescenceMap,at=pt&&!!x.iridescenceThicknessMap,dt=Oe&&!!x.sheenColorMap,J=Oe&&!!x.sheenRoughnessMap,K=!!x.specularMap,ct=!!x.specularColorMap,I=!!x.specularIntensityMap,j=Ft&&!!x.transmissionMap,Y=Ft&&!!x.thicknessMap,ht=!!x.gradientMap,ot=!!x.alphaMap,lt=x.alphaTest>0,Lt=!!x.alphaHash,Kt=!!x.extensions,st=di;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(st=n.toneMapping);let Dt=ee?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,$t={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:$,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:bt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&U.instanceColor!==null,instancingMorph:Zt&&U.morphTexture!==null,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:fe,envMap:_e,envMapMode:_e&&F.mapping,envMapPMREM:ee,envMapMaxLod:ee?Dt.length-1:null,envMapSize:ee?Dt[0].width:null,aoMap:$e,lightMap:Fe,bumpMap:xn,normalMap:Re,displacementMap:ri,emissiveMap:Ge,normalMapObjectSpace:Re&&x.normalMapType===Td,normalMapTangentSpace:Re&&x.normalMapType===wl,packedNormalMap:Re&&x.normalMapType===wl&&Q_(x.normalMap.format),metalnessMap:Pn,roughnessMap:In,anisotropy:Ln,anisotropyMap:Ht,clearcoat:O,clearcoatMap:E,clearcoatNormalMap:_,clearcoatRoughnessMap:V,diffuseRoughness:Dn,diffuseRoughnessMap:it,dispersion:be,retroreflection:Te,iridescence:pt,iridescenceMap:tt,iridescenceThicknessMap:at,sheen:Oe,sheenColorMap:dt,sheenRoughnessMap:J,specularMap:K,specularColorMap:ct,specularIntensityMap:I,transmission:Ft,transmissionMap:j,thicknessMap:Y,gradientMap:ht,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:lt,alphaHash:Lt,combine:x.combine,mapUv:Bt&&m(x.map.channel),aoMapUv:$e&&m(x.aoMap.channel),lightMapUv:Fe&&m(x.lightMap.channel),bumpMapUv:xn&&m(x.bumpMap.channel),normalMapUv:Re&&m(x.normalMap.channel),displacementMapUv:ri&&m(x.displacementMap.channel),emissiveMapUv:Ge&&m(x.emissiveMap.channel),metalnessMapUv:Pn&&m(x.metalnessMap.channel),roughnessMapUv:In&&m(x.roughnessMap.channel),anisotropyMapUv:Ht&&m(x.anisotropyMap.channel),clearcoatMapUv:E&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(x.sheenRoughnessMap.channel),specularMapUv:K&&m(x.specularMap.channel),specularColorMapUv:ct&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:j&&m(x.transmissionMap.channel),thicknessMapUv:Y&&m(x.thicknessMap.channel),alphaMapUv:ot&&m(x.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(Re||Ln),vertexNormals:!!b.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!b.attributes.uv&&(Bt||ot),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||b.attributes.normal===void 0&&Re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qe,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||De)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function y(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(f(T,x),p(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function p(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let T=d[x.type],N;if(T){let P=pi[T];N=Bd.clone(P.uniforms)}else N=x.uniforms;return N}function R(x,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new $_(n,T,x,s),a.push(N),h.set(T,N)),N}function S(x){if(--x.usedTimes===0){let T=a.indexOf(x);a[T]=a[a.length-1],a.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:a,dispose:w}}function ty(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ey(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function rf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function of(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function l(d,m,g,y,f,p){let M=n[t];return M===void 0?(M={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:f,group:p},n[t]=M):(M.id=d.id,M.object=d,M.geometry=m,M.material=g,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=f,M.group=p),t++,M}function c(d,m,g,y,f,p,M){M.reversedDepth===!0&&(f=-f);let R=l(d,m,g,y,f,p);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):e.push(R)}function a(d,m,g,y,f,p){let M=l(d,m,g,y,f,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,m){e.length>1&&e.sort(d||ey),i.length>1&&i.sort(m||rf),s.length>1&&s.sort(m||rf)}function u(){for(let d=t,m=n.length;d<m;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:u,sort:h}}function ny(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new of,n.set(i,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function iy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new qt};break;case"SpotLight":e={position:new k,direction:new k,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function sy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ry=0;function oy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ay(n){let t=new iy,e=sy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new k);let s=new k,r=new me,o=new me;function l(a){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,g=0,y=0,f=0,p=0,M=0,R=0,S=0,A=0,w=0,x=0,T=0,N=0,P=0;a.sort(oy);for(let z=0,X=a.length;z<X;z++){let b=a[z],C=b.color,D=b.intensity,F=b.distance,Q=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===ss?Q=b.shadow.map.texture:Q=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=C.r*D,u+=C.g*D,d+=C.b*D;else if(b.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],D);P++}else if(b.isSunLight){let H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Z=b.shadow,et=e.get(b);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=Q;let Mt=Z.getViewportCount();for(let At=0;At<Mt;At++)i.sunShadowMatrix[y+At]=Z.getMatrix(At),i.sunShadowCascade[y+At]=Z._cascadeData[At];y+=Mt,g++}i.sun[m]=H,m++}else if(b.isDirectionalLight){let H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Z=b.shadow,et=e.get(b);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.directionalShadow[f]=et,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=b.shadow.matrix,A++}i.directional[f]=H,f++}else if(b.isSpotLight){let H=t.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(C).multiplyScalar(D),H.distance=F,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[M]=H;let Z=b.shadow;if(b.map&&(i.spotLightMap[T]=b.map,T++,Z.updateMatrices(b),b.castShadow&&N++),i.spotLightMatrix[M]=Z.matrix,b.castShadow){let et=e.get(b);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.spotShadow[M]=et,i.spotShadowMap[M]=Q,x++}M++}else if(b.isRectAreaLight){let H=t.get(b);H.color.copy(C).multiplyScalar(D),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[R]=H,R++}else if(b.isPointLight){let H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){let Z=b.shadow,et=e.get(b);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,et.shadowCameraNear=Z.camera.near,et.shadowCameraFar=Z.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=b.shadow.matrix,w++}i.point[p]=H,p++}else if(b.isHemisphereLight){let H=t.get(b);H.skyColor.copy(b.color).multiplyScalar(D),H.groundColor.copy(b.groundColor).multiplyScalar(D),i.hemi[S]=H,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.sunLength!==m||U.directionalLength!==f||U.pointLength!==p||U.spotLength!==M||U.rectAreaLength!==R||U.hemiLength!==S||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==T||U.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=f,i.spot.length=M,i.rectArea.length=R,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,U.sunLength=m,U.directionalLength=f,U.pointLength=p,U.spotLength=M,U.rectAreaLength=R,U.hemiLength=S,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=T,U.numLightProbes=P,i.version=ry++)}function c(a,h){let u=0,d=0,m=0,g=0,y=0,f=0,p=h.matrixWorldInverse;for(let M=0,R=a.length;M<R;M++){let S=a[M];if(S.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),u++}else if(S.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(S.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let A=i.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){let A=i.hemi[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function af(n){let t=new ay(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function l(u){i.push(u)}function c(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function a(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:a,pushLight:o,pushShadow:l}}function ly(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new af(n),t.set(s,[l])):r>=o.length?(l=new af(n),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`,uy=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],dy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],lf=new me,yo=new k,yh=new k;function fy(n,t,e){let i=new Qi,s=new jt,r=new jt,o=new Ee,l=new Ea,c=new wa,a={},h=e.maxTextureSize,u={[is]:pn,[pn]:is,[qe]:qe},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(w,x,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===ed&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let N=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=p!==this.type;X&&x.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(C=>C.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,C=w.length;b<C;b++){let D=w[b],F=D.shadow;if(F===void 0){kt("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Q=F.getFrameExtents();s.multiply(Q),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,F.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||X===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===cr){if(D.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new wn(s.x,s.y,{format:ss,type:jn,minFilter:un,magFilter:un,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new Ri(s.x,s.y,Bn),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Ai,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xe,F.map.depthTexture.magFilter=Xe}else D.isPointLight?(F.map=new Mo(s.x),F.map.depthTexture=new Qr(s.x,Qn)):(F.map=new wn(s.x,s.y),F.map.depthTexture=new Ri(s.x,s.y,Qn)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Ai,this.type===Ss?(F.map.depthTexture.compareFunction=H?sh:ih,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xe,F.map.depthTexture.magFilter=Xe);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let Z=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();D.isPointLight!==!0&&F.updateMatrices(D,T);let et=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:T.layers;for(let Mt=0;Mt<Z;Mt++){let At=F.getCamera(Mt);if(D.isPointLight){let $=F.camera,xt=F.matrix,bt=D.distance||$.far;bt!==$.far&&($.far=bt,$.updateProjectionMatrix()),yo.setFromMatrixPosition(D.matrixWorld),$.position.copy(yo),yh.copy($.position),yh.add(uy[Mt]),$.up.copy(dy[Mt]),$.lookAt(yh),$.updateMatrixWorld(),xt.makeTranslation(-yo.x,-yo.y,-yo.z),lf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lf,$.coordinateSystem,$.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Mt),n.clear();else{Mt===0&&(n.setRenderTarget(F.map),n.clear());let $=F.getViewport(Mt);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),z.viewport(o)}i=F.getFrustum(Mt),S(x,T,At,D,et,this.type)}F.isPointLightShadow!==!0&&this.type===cr&&M(F,T),F.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(N,P,U)};function M(w,x){let T=t.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new wn(s.x,s.y,{format:ss,type:jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,T,d,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,T,m,y,null)}function R(w,x,T,N){let P=null,U=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=T.isPointLight===!0?c:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=P.uuid,X=x.uuid,b=a[z];b===void 0&&(b={},a[z]=b);let C=b[X];C===void 0&&(C=P.clone(),b[X]=C,x.addEventListener("dispose",A)),P=C}if(P.visible=x.visible,P.wireframe=x.wireframe,N===cr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=n.properties.get(P);z.light=T}return P}function S(w,x,T,N,P,U){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===cr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let b=t.update(w),C=w.material;if(Array.isArray(C)){let D=b.groups;for(let F=0,Q=D.length;F<Q;F++){let H=D[F],Z=C[H.materialIndex];if(Z&&Z.visible){let et=R(w,Z,N,U);w.onBeforeShadow(n,w,x,T,b,et,H),n.renderBufferDirect(T,null,b,et,w,H),w.onAfterShadow(n,w,x,T,b,et,H)}}}else if(C.visible){let D=R(w,C,N,U);w.onBeforeShadow(n,w,x,T,b,D,null),n.renderBufferDirect(T,null,b,D,w,null),w.onAfterShadow(n,w,x,T,b,D,null)}}let X=w.children;for(let b=0,C=X.length;b<C;b++)S(X[b],x,T,N,P,U)}function A(w){w.target.removeEventListener("dispose",A);for(let T in a){let N=a[T],P=w.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function py(n,t){function e(){let I=!1,j=new Ee,Y=null,ht=new Ee(0,0,0,0);return{setMask:function(ot){Y!==ot&&!I&&(n.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){I=ot},setClear:function(ot,lt,Lt,Kt,st){st===!0&&(ot*=Kt,lt*=Kt,Lt*=Kt),j.set(ot,lt,Lt,Kt),ht.equals(j)===!1&&(n.clearColor(ot,lt,Lt,Kt),ht.copy(j))},reset:function(){I=!1,Y=null,ht.set(-1,0,0,0)}}}function i(){let I=!1,j=!1,Y=null,ht=null,ot=null;return{setReversed:function(lt){if(j!==lt){let Lt=t.get("EXT_clip_control");lt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),j=lt;let Kt=ot;ot=null,this.setClear(Kt)}},getReversed:function(){return j},setTest:function(lt){lt?_t(n.DEPTH_TEST):Zt(n.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!I&&(n.depthMask(lt),Y=lt)},setFunc:function(lt){if(j&&(lt=Ud[lt]),ht!==lt){switch(lt){case ha:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=lt}},setLocked:function(lt){I=lt},setClear:function(lt){ot!==lt&&(ot=lt,j&&(lt=1-lt),n.clearDepth(lt))},reset:function(){I=!1,Y=null,ht=null,ot=null,j=!1}}}function s(){let I=!1,j=null,Y=null,ht=null,ot=null,lt=null,Lt=null,Kt=null,st=null;return{setTest:function(Dt){I||(Dt?_t(n.STENCIL_TEST):Zt(n.STENCIL_TEST))},setMask:function(Dt){j!==Dt&&!I&&(n.stencilMask(Dt),j=Dt)},setFunc:function(Dt,$t,mt){(Y!==Dt||ht!==$t||ot!==mt)&&(n.stencilFunc(Dt,$t,mt),Y=Dt,ht=$t,ot=mt)},setOp:function(Dt,$t,mt){(lt!==Dt||Lt!==$t||Kt!==mt)&&(n.stencilOp(Dt,$t,mt),lt=Dt,Lt=$t,Kt=mt)},setLocked:function(Dt){I=Dt},setClear:function(Dt){st!==Dt&&(n.clearStencil(Dt),st=Dt)},reset:function(){I=!1,j=null,Y=null,ht=null,ot=null,lt=null,Lt=null,Kt=null,st=null}}}let r=new e,o=new i,l=new s,c={},a=new WeakMap,h={},u={},d={},m=new WeakMap,g=[],y=null,f=!1,p=null,M=null,R=null,S=null,A=null,w=null,x=null,T=new qt(0,0,0),N=0,P=!1,U=null,z=null,X=null,b=null,C=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Q>=2);let Z=null,et={},Mt=n.getParameter(n.SCISSOR_BOX),At=n.getParameter(n.VIEWPORT),$=new Ee().fromArray(Mt),xt=new Ee().fromArray(At);function bt(I,j,Y,ht){let ot=new Uint8Array(4),lt=n.createTexture();n.bindTexture(I,lt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Y;Lt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(j+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return lt}let Ut={};Ut[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ut[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ut[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),_t(n.DEPTH_TEST),o.setFunc(er),xn(!1),Re(Oc),_t(n.CULL_FACE),$e(bs);function _t(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Zt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function De(I,j){return d[I]!==j?(n.bindFramebuffer(I,j),d[I]=j,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=j),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Bt(I,j){let Y=g,ht=!1;if(I){Y=m.get(j),Y===void 0&&(Y=[],m.set(j,Y));let ot=I.textures;if(Y.length!==ot.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Lt=ot.length;lt<Lt;lt++)Y[lt]=n.COLOR_ATTACHMENT0+lt;Y.length=ot.length,ht=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ht=!0);ht&&n.drawBuffers(Y)}function fe(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let _e={[Ts]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};_e[rd]=n.MIN,_e[od]=n.MAX;let ee={[ad]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[xd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[yd]:n.ONE_MINUS_CONSTANT_ALPHA};function $e(I,j,Y,ht,ot,lt,Lt,Kt,st,Dt){if(I===bs){f===!0&&(Zt(n.BLEND),f=!1);return}if(f===!1&&(_t(n.BLEND),f=!0),I!==nd){if(I!==p||Dt!==P){if((M!==Ts||A!==Ts)&&(n.blendEquation(n.FUNC_ADD),M=Ts,A=Ts),Dt)switch(I){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFunc(n.ONE,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",I);break}else switch(I){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",I);break}R=null,S=null,w=null,x=null,T.set(0,0,0),N=0,p=I,P=Dt}return}ot=ot||j,lt=lt||Y,Lt=Lt||ht,(j!==M||ot!==A)&&(n.blendEquationSeparate(_e[j],_e[ot]),M=j,A=ot),(Y!==R||ht!==S||lt!==w||Lt!==x)&&(n.blendFuncSeparate(ee[Y],ee[ht],ee[lt],ee[Lt]),R=Y,S=ht,w=lt,x=Lt),(Kt.equals(T)===!1||st!==N)&&(n.blendColor(Kt.r,Kt.g,Kt.b,st),T.copy(Kt),N=st),p=I,P=!1}function Fe(I,j){I.side===qe?Zt(n.CULL_FACE):_t(n.CULL_FACE);let Y=I.side===pn;j&&(Y=!Y),xn(Y),I.blending===hr&&I.transparent===!1?$e(bs):$e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let ht=I.stencilWrite;l.setTest(ht),ht&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xn(I){U!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),U=I)}function Re(I){I!==ju?(_t(n.CULL_FACE),I!==z&&(I===Oc?n.cullFace(n.BACK):I===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Zt(n.CULL_FACE),z=I}function ri(I){I!==X&&(F&&n.lineWidth(I),X=I)}function Ge(I,j,Y){I?(_t(n.POLYGON_OFFSET_FILL),(b!==j||C!==Y)&&(b=j,C=Y,o.getReversed()&&(j=-j,Y=-Y),n.polygonOffset(j,Y))):Zt(n.POLYGON_OFFSET_FILL)}function Pn(I){I?_t(n.SCISSOR_TEST):Zt(n.SCISSOR_TEST)}function In(I){I===void 0&&(I=n.TEXTURE0+D-1),Z!==I&&(n.activeTexture(I),Z=I)}function Ln(I,j,Y){Y===void 0&&(Z===null?Y=n.TEXTURE0+D-1:Y=Z);let ht=et[Y];ht===void 0&&(ht={type:void 0,texture:void 0},et[Y]=ht),(ht.type!==I||ht.texture!==j)&&(Z!==Y&&(n.activeTexture(Y),Z=Y),n.bindTexture(I,j||Ut[I]),ht.type=I,ht.texture=j)}function O(){let I=et[Z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Dn(){try{n.compressedTexImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function be(){try{n.compressedTexImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function Te(){try{n.texSubImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function pt(){try{n.texSubImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function Oe(){try{n.compressedTexSubImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function Ht(){try{n.texStorage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function E(){try{n.texStorage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function _(){try{n.texImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function V(){try{n.texImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function it(I){return u[I]!==void 0?u[I]:n.getParameter(I)}function tt(I,j){u[I]!==j&&(n.pixelStorei(I,j),u[I]=j)}function at(I){$.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),$.copy(I))}function dt(I){xt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),xt.copy(I))}function J(I,j){let Y=a.get(j);Y===void 0&&(Y=new WeakMap,a.set(j,Y));let ht=Y.get(I);ht===void 0&&(ht=n.getUniformBlockIndex(j,I.name),n.uniformBlockBinding(j,ht,ht),Y.set(I,ht))}function K(I,j,Y){let ot=a.get(j).get(I);c[ot]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ot,Y),c[ot]=Y)}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,et={},d={},c={},m=new WeakMap,g=[],y=null,f=!1,p=null,M=null,R=null,S=null,A=null,w=null,x=null,T=new qt(0,0,0),N=0,P=!1,U=null,z=null,X=null,b=null,C=null,$.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:_t,disable:Zt,bindFramebuffer:De,drawBuffers:Bt,useProgram:fe,setBlending:$e,setMaterial:Fe,setFlipSided:xn,setCullFace:Re,setLineWidth:ri,setPolygonOffset:Ge,setScissorTest:Pn,activeTexture:In,bindTexture:Ln,unbindTexture:O,compressedTexImage2D:Dn,compressedTexImage3D:be,texImage2D:_,texImage3D:V,pixelStorei:tt,getParameter:it,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:Ht,texStorage3D:E,texSubImage2D:Te,texSubImage3D:pt,compressedTexSubImage2D:Oe,compressedTexSubImage3D:Ft,scissor:at,viewport:dt,reset:ct}}function my(n,t,e,i,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new jt,h=new WeakMap,u=new Set,d,m=new WeakMap,g=new Set,y=new FinalizationRegistry(E=>g.delete(E)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,_){return f?new OffscreenCanvas(E,_):zr("canvas")}function M(E,_,V){let it=1,tt=Ht(E);if((tt.width>V||tt.height>V)&&(it=V/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let at=Math.floor(it*tt.width),dt=Math.floor(it*tt.height);d===void 0&&(d=p(at,dt));let J=_?p(at,dt):d;return J.width=at,J.height=dt,J.getContext("2d").drawImage(E,0,0,at,dt),kt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+at+"x"+dt+")."),J}else return"data"in E&&kt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function R(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,_,V,it,tt,at=!1){if(E!==null){if(n[E]!==void 0)return n[E];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt;it&&(dt=t.get("EXT_texture_norm16"),dt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8),V===n.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),V===n.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),_===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8),V===n.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),V===n.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(V===n.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),V===n.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){let K=at?kr:se.getTransfer(tt);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=K===ue?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),V===n.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(E,_){let V;return E?_===null||_===Qn||_===ws?V=n.DEPTH24_STENCIL8:_===Bn?V=n.DEPTH32F_STENCIL8:_===dr&&(V=n.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===ws?V=n.DEPTH_COMPONENT24:_===Bn?V=n.DEPTH_COMPONENT32F:_===dr&&(V=n.DEPTH_COMPONENT16),V}function T(E,_){return R(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xe&&E.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function N(E){let _=new WeakRef(E);i.get(E).__ref=_,g.add(_),y.register(E,_,_)}function P(E){let _=i.get(E).__ref;_!==void 0&&(g.delete(_),y.unregister(_))}function U(E){X(E.target)}function z(E){b(E.target)}function X(E){E.removeEventListener("dispose",U),P(E),D(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function b(E){E.removeEventListener("dispose",z),P(E),Q(E)}function C(){for(let E of g){let _=E.deref();_!==void 0&&(_.isRenderTarget===!0?b(_):X(_))}g.clear(),u.clear()}function D(E){let _=i.get(E);if(_.__webglInit===void 0)return;let V=E.source,it=m.get(V);if(it){let tt=it[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&F(E),Object.keys(it).length===0&&m.delete(V)}i.remove(E)}function F(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let V=E.source,it=m.get(V);delete it[_.__cacheKey],o.memory.textures--}function Q(E){let _=i.get(E);_.__depthDisposeCallback&&_.__depthDisposeCallback();let V=E.depthTexture;if(V&&V.renderTarget===E&&X(V),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(_.__webglFramebuffer[tt]))for(let at=0;at<_.__webglFramebuffer[tt].length;at++)n.deleteFramebuffer(_.__webglFramebuffer[tt][at]);else n.deleteFramebuffer(_.__webglFramebuffer[tt]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[tt])}else{if(Array.isArray(_.__webglFramebuffer))for(let tt=0;tt<_.__webglFramebuffer.length;tt++)n.deleteFramebuffer(_.__webglFramebuffer[tt]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let tt=0;tt<_.__webglColorRenderbuffer.length;tt++)_.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[tt]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let it=E.textures;for(let tt=0,at=it.length;tt<at;tt++){let dt=i.get(it[tt]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(it[tt])}i.remove(E)}let H=0;function Z(){H=0}function et(){return H}function Mt(E){H=E}function At(){let E=H;return E>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,E}function $(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.mipmapsAutoUpdate),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function xt(E,_){let V=i.get(E);if(E.isVideoTexture&&Oe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&V.__version!==E.version){let it=E.image;if(it===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(V,E,_);return}}else E.isExternalTexture&&(V.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function bt(E,_){let V=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){Fe(V,E,_);return}else E.isExternalTexture&&(V.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function Ut(E,_){let V=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){Fe(V,E,_);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function _t(E,_){let V=i.get(E);if(E.version>0&&V.__version!==E.version){xn(V,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}let Zt={[nr]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},De={[Xe]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Bt={[wd]:n.NEVER,[rh]:n.ALWAYS,[Ad]:n.LESS,[ih]:n.LEQUAL,[Rd]:n.EQUAL,[sh]:n.GEQUAL,[Cd]:n.GREATER,[Pd]:n.NOTEQUAL};function fe(E,_){if(_.type===Bn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Ha||_.magFilter===ho||_.magFilter===Ci||_.minFilter===un||_.minFilter===Ha||_.minFilter===ho||_.minFilter===Ci)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Zt[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Zt[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Zt[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,De[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Bt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xe||_.minFilter!==ho&&_.minFilter!==Ci||_.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _e(E,_){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",U),N(_));let it=_.source,tt=m.get(it);tt===void 0&&(tt={},m.set(it,tt));let at=$(_);if(at!==E.__cacheKey){tt[at]===void 0&&(tt[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[at].usedTimes++;let dt=tt[E.__cacheKey];dt!==void 0&&(tt[E.__cacheKey].usedTimes--,dt.usedTimes===0&&F(_)),E.__cacheKey=at,E.__webglTexture=tt[at].texture}return V}function ee(E,_,V){return Math.floor(Math.floor(E/V)/_)}function $e(E,_,V,it){let at=E.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,V,it,_.data);else{at.sort((I,j)=>I.start-j.start);let dt=0;for(let I=1;I<at.length;I++){let j=at[dt],Y=at[I],ht=j.start+j.count,ot=ee(Y.start,_.width,4),lt=ee(j.start,_.width,4);Y.start<=ht+1&&ot===lt&&ee(Y.start+Y.count-1,_.width,4)===ot?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++dt,at[dt]=Y)}at.length=dt+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let I=0,j=at.length;I<j;I++){let Y=at[I],ht=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),lt=ht%_.width,Lt=Math.floor(ht/_.width),Kt=ot,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(n.TEXTURE_2D,0,lt,Lt,Kt,st,V,it,_.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function Fe(E,_,V){let it=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(it=n.TEXTURE_3D);let tt=_e(E,_),at=_.source;e.bindTexture(it,E.__webglTexture,n.TEXTURE0+V);let dt=i.get(at);if(at.version!==dt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=se.getPrimaries(se.workingColorSpace),Dt=_.colorSpace===Ii?null:se.getPrimaries(_.colorSpace),$t=_.colorSpace===Ii||st===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let K=M(_.image,!1,s.maxTextureSize);K=Ft(_,K);let ct=r.convert(_.format,_.colorSpace),I=r.convert(_.type),j=w(_.internalFormat,ct,I,_.normalized,_.colorSpace,_.isVideoTexture);fe(it,_);let Y,ht=_.mipmaps,ot=_.isVideoTexture!==!0,lt=dt.__version===void 0||tt===!0,Lt=at.dataReady,Kt=T(_,K);if(_.isDepthTexture)j=x(_.format===Pi,_.type),lt&&(ot?e.texStorage2D(n.TEXTURE_2D,1,j,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,ct,I,null));else if(_.isDataTexture)if(ht.length>0){ot&&lt&&e.texStorage2D(n.TEXTURE_2D,Kt,j,ht[0].width,ht[0].height);for(let st=0,Dt=ht.length;st<Dt;st++)Y=ht[st],ot?Lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,I,Y.data):e.texImage2D(n.TEXTURE_2D,st,j,Y.width,Y.height,0,ct,I,Y.data);_.generateMipmaps=!1}else ot?(lt&&e.texStorage2D(n.TEXTURE_2D,Kt,j,K.width,K.height),Lt&&$e(_,K,ct,I)):e.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,ct,I,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ot&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,j,ht[0].width,ht[0].height,K.depth);for(let st=0,Dt=ht.length;st<Dt;st++)if(Y=ht[st],_.format!==ti)if(ct!==null)if(ot){if(Lt)if(_.layerUpdates.size>0){let $t=dh(Y.width,Y.height,_.format,_.type);for(let mt of _.layerUpdates){let pe=Y.data.subarray(mt*$t/Y.data.BYTES_PER_ELEMENT,(mt+1)*$t/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,mt,Y.width,Y.height,1,ct,pe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,K.depth,ct,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,j,Y.width,Y.height,K.depth,0,Y.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,K.depth,ct,I,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,j,Y.width,Y.height,K.depth,0,ct,I,Y.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ot&&lt&&e.texStorage2D(n.TEXTURE_2D,Kt,j,ht[0].width,ht[0].height);for(let st=0,Dt=ht.length;st<Dt;st++)Y=ht[st],_.format!==ti?ct!==null?ot?Lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,st,j,Y.width,Y.height,0,Y.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,I,Y.data):e.texImage2D(n.TEXTURE_2D,st,j,Y.width,Y.height,0,ct,I,Y.data)}else if(_.isDataArrayTexture)if(ot){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,j,K.width,K.height,K.depth),Lt)if(_.layerUpdates.size>0){let st=dh(K.width,K.height,_.format,_.type);for(let Dt of _.layerUpdates){let $t=K.data.subarray(Dt*st/K.data.BYTES_PER_ELEMENT,(Dt+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Dt,K.width,K.height,1,ct,I,$t)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ct,I,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,ct,I,K.data);else if(_.isData3DTexture)ot?(lt&&e.texStorage3D(n.TEXTURE_3D,Kt,j,K.width,K.height,K.depth),Lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ct,I,K.data)):e.texImage3D(n.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,ct,I,K.data);else if(_.isFramebufferTexture){if(lt)if(ot)e.texStorage2D(n.TEXTURE_2D,Kt,j,K.width,K.height);else{let st=K.width,Dt=K.height;for(let $t=0;$t<Kt;$t++)e.texImage2D(n.TEXTURE_2D,$t,j,st,Dt,0,ct,I,null),st>>=1,Dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),u.add(_),st.onpaint=Dt=>{let $t=Dt.changedElements;for(let mt of u)$t.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let $t=n.RGBA,mt=n.RGBA,pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$t,mt,pe,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ht.length>0){if(ot&&lt){let st=Ht(ht[0]);e.texStorage2D(n.TEXTURE_2D,Kt,j,st.width,st.height)}for(let st=0,Dt=ht.length;st<Dt;st++)Y=ht[st],ot?Lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ct,I,Y):e.texImage2D(n.TEXTURE_2D,st,j,ct,I,Y);_.generateMipmaps=!1}else if(ot){if(lt){let st=Ht(K);e.texStorage2D(n.TEXTURE_2D,Kt,j,st.width,st.height)}Lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,I,K)}else e.texImage2D(n.TEXTURE_2D,0,j,ct,I,K);R(_)&&_.mipmapsAutoUpdate===!0&&S(it),dt.__version=at.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xn(E,_,V){if(_.image.length!==6)return;let it=_e(E,_),tt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);let at=i.get(tt);if(tt.version!==at.__version||it===!0){e.activeTexture(n.TEXTURE0+V);let dt=se.getPrimaries(se.workingColorSpace),J=_.colorSpace===Ii?null:se.getPrimaries(_.colorSpace),K=_.colorSpace===Ii||dt===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ct=_.isCompressedTexture||_.image[0].isCompressedTexture,I=_.image[0]&&_.image[0].isDataTexture,j=[];for(let mt=0;mt<6;mt++)!ct&&!I?j[mt]=M(_.image[mt],!0,s.maxCubemapSize):j[mt]=I?_.image[mt].image:_.image[mt],j[mt]=Ft(_,j[mt]);let Y=j[0],ht=r.convert(_.format,_.colorSpace),ot=r.convert(_.type),lt=w(_.internalFormat,ht,ot,_.normalized,_.colorSpace),Lt=_.isVideoTexture!==!0,Kt=at.__version===void 0||it===!0,st=tt.dataReady,Dt=T(_,Y);fe(n.TEXTURE_CUBE_MAP,_);let $t;if(_.isDepthTexture){if(lt=x(_.format===Pi,_.type),Kt)if(Lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,Y.width,Y.height);else for(let mt=0;mt<6;mt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,Y.width,Y.height,0,ht,ot,null)}else if(ct){Lt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,lt,Y.width,Y.height);for(let mt=0;mt<6;mt++){$t=j[mt].mipmaps;for(let pe=0;pe<$t.length;pe++){let He=$t[pe];_.format!==ti?ht!==null?Lt?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,0,0,He.width,He.height,ht,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,lt,He.width,He.height,0,He.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,0,0,He.width,He.height,ht,ot,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,lt,He.width,He.height,0,ht,ot,He.data)}}}else{if($t=_.mipmaps,Lt&&Kt){$t.length>0&&Dt++;let mt=Ht(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,lt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(I){Lt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,j[mt].width,j[mt].height,ht,ot,j[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,j[mt].width,j[mt].height,0,ht,ot,j[mt].data);for(let pe=0;pe<$t.length;pe++){let Hi=$t[pe].image[mt].image;Lt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,0,0,Hi.width,Hi.height,ht,ot,Hi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,lt,Hi.width,Hi.height,0,ht,ot,Hi.data)}}else{Lt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ht,ot,j[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,lt,ht,ot,j[mt]);for(let pe=0;pe<$t.length;pe++){let He=$t[pe];Lt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,0,0,ht,ot,He.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,lt,ht,ot,He.image[mt])}}}R(_)&&_.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),at.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Re(E,_,V,it,tt,at){let dt=r.convert(V.format,V.colorSpace),J=r.convert(V.type),K=w(V.internalFormat,dt,J,V.normalized,V.colorSpace),ct=i.get(_),I=i.get(V);if(I.__renderTarget=_,!ct.__hasExternalTextures){let j=Math.max(1,_.width>>at),Y=Math.max(1,_.height>>at);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,at,K,j,Y,_.depth,0,dt,J,null):e.texImage2D(tt,at,K,j,Y,0,dt,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),pt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,tt,I.__webglTexture,0,Te(_)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,tt,I.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ri(E,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){let it=_.depthTexture,tt=it&&it.isDepthTexture?it.type:null,at=x(_.stencilBuffer,tt),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(_),at,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(_),at,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,at,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,E)}else{let it=_.textures;for(let tt=0;tt<it.length;tt++){let at=it[tt],dt=r.convert(at.format,at.colorSpace),J=r.convert(at.type),K=w(at.internalFormat,dt,J,at.normalized,at.colorSpace);pt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(_),K,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(_),K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(E,_,V){let it=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(_.depthTexture);tt.__renderTarget=_;let at=it?_.depthTexture.image[0]:_.depthTexture.image;(!tt.__webglTexture||at.width!==_.width||at.height!==_.height)&&(at.width=_.width,at.height=_.height,_.depthTexture.needsUpdate=!0),it?_t(_.depthTexture,0):xt(_.depthTexture,0);let dt=tt.__webglTexture,J=Te(_),K=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ct=_.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ai)pt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,K,dt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ct,K,dt,0);else if(_.depthTexture.format===Pi)pt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,K,dt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ct,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pn(E){let _=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let it=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),it){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=it}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let it=0;it<6;it++)Ge(_.__webglFramebuffer[it],E,it);else E.texture.mipmaps.length>0?Ge(_.__webglFramebuffer[0],E,0):Ge(_.__webglFramebuffer,E,0);else if(V){_.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[it]),_.__webglDepthbuffer[it]===void 0)_.__webglDepthbuffer[it]=n.createRenderbuffer(),ri(_.__webglDepthbuffer[it],E,!1);else{let tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,at)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ri(_.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function In(E,_,V){let it=i.get(E);_!==void 0&&Re(it.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Pn(E)}function Ln(E){let _=E.texture,V=i.get(E),it=i.get(_);E.addEventListener("dispose",z),N(E);let tt=E.textures,at=E.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=_.version,o.memory.textures++),at){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let K=0;K<_.mipmaps.length;K++)V.__webglFramebuffer[J][K]=n.createFramebuffer()}else V.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)V.__webglFramebuffer[J]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(dt)for(let J=0,K=tt.length;J<K;J++){let ct=i.get(tt[J]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&pt(E)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){let K=tt[J];V.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[J]);let ct=r.convert(K.format,K.colorSpace),I=r.convert(K.type),j=w(K.internalFormat,ct,I,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),Y=Te(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,j,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,V.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ri(V.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),fe(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Re(V.__webglFramebuffer[J][K],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else Re(V.__webglFramebuffer[J],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);R(_)?S(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let J=0,K=tt.length;J<K;J++){let ct=tt[J],I=i.get(ct),j=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,I.__webglTexture),fe(j,ct),Re(V.__webglFramebuffer,E,ct,n.COLOR_ATTACHMENT0+J,j,0),R(ct)&&S(j)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,it.__webglTexture),fe(J,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Re(V.__webglFramebuffer[K],E,_,n.COLOR_ATTACHMENT0,J,K);else Re(V.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,J,0);R(_)?S(J):_.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&Pn(E)}function O(E){let _=E.textures;for(let V=0,it=_.length;V<it;V++){let tt=_[V];if(R(tt)&&tt.mipmapsAutoUpdate===!0){let at=A(E),dt=i.get(tt).__webglTexture;e.bindTexture(at,dt),S(at),e.unbindTexture()}}}let Dn=[];function be(E){if(E.samples>0){if(pt(E)===!1){let _=E.textures,V=E.width,it=E.height,tt=n.COLOR_BUFFER_BIT,at=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(E),J=_.length>1;if(J)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(_[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,V,it,0,0,V,it,tt,n.NEAREST),c===!0&&(Dn.length=0,Dn.push(n.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Dn.push(at),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(_[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Te(E){return Math.min(s.maxSamples,E.samples)}function pt(E){let _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ft(E,_){let V=E.colorSpace,it=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==Br&&V!==Ii&&(se.getTransfer(V)===ue?(it!==ti||tt!==yn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",V)),_}function Ht(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(a.width=E.naturalWidth||E.width,a.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(a.width=E.displayWidth,a.height=E.displayHeight):(a.width=E.width,a.height=E.height),a}this.allocateTextureUnit=At,this.resetTextureUnits=Z,this.getTextureUnits=et,this.setTextureUnits=Mt,this.setTexture2D=xt,this.setTexture2DArray=bt,this.setTexture3D=Ut,this.setTextureCube=_t,this.rebindTextures=In,this.setupRenderTarget=Ln,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Pn,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=pt,this.dispose=C}function gy(n,t){function e(i,s=Ii){let r,o=se.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return n.BYTE;if(i===Qc)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===Va)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===jn)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===nh)return n.RGB;if(i===ti)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===qa)return n.RED;if(i===Ya)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===Za)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===Ka||i===Qa||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tl||i===el||i===nl||i===il||i===sl||i===go||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tl||i===el)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===il)return r.COMPRESSED_R11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===go)return r.COMPRESSED_RG11_EAC;if(i===rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===Ml||i===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vl)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Tl||i===xo||i===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ui({vertexShader:xy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new ge(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends li{constructor(t,e){super();let i=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,h=null,u=null,d=null,m=null,g=null,y=typeof XRWebGLBinding<"u",f=new wh,p={},M=e.getContextAttributes(),R=null,S=null,A=[],w=[],x=new jt,T=null,N=null,P=new Qe;P.viewport=new Ee;let U=new Qe;U.viewport=new Ee;let z=[P,U],X=new Ba,b=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let xt=A[$];return xt===void 0&&(xt=new or,A[$]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function($){let xt=A[$];return xt===void 0&&(xt=new or,A[$]=xt),xt.getGripSpace()},this.getHand=function($){let xt=A[$];return xt===void 0&&(xt=new or,A[$]=xt),xt.getHandSpace()};function D($){let xt=w.indexOf($.inputSource);if(xt===-1)return;let bt=A[xt];bt!==void 0&&(bt.update($.inputSource,$.frame,a||o),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<A.length;$++){let xt=w[$];xt!==null&&(w[$]=null,A[$].disconnect(xt))}b=null,C=null,f.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(R),m=null,d=null,u=null,s=null,S=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(x.width,x.height,!1),N!==null){let $=N.camera;$.fov=N.fov,$.zoom=N.zoom,$.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function($){a=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ut=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=M.stencil?Pi:Ai,Ut=M.stencil?ws:Qn);let Zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new wn(d.textureWidth,d.textureHeight,{format:ti,type:yn,depthTexture:new Ri(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new wn(m.framebufferWidth,m.framebufferHeight,{format:ti,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Q($){for(let xt=0;xt<$.removed.length;xt++){let bt=$.removed[xt],Ut=w.indexOf(bt);Ut>=0&&(w[Ut]=null,A[Ut].disconnect(bt))}for(let xt=0;xt<$.added.length;xt++){let bt=$.added[xt],Ut=w.indexOf(bt);if(Ut===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=w.length){w.push(bt),Ut=Zt;break}else if(w[Zt]===null){w[Zt]=bt,Ut=Zt;break}if(Ut===-1)break}let _t=A[Ut];_t&&_t.connect(bt)}}function H($,xt){xt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(xt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let xt=$.near,bt=$.far;f.texture!==null&&(f.depthNear>0&&(xt=f.depthNear),f.depthFar>0&&(bt=f.depthFar)),X.near=U.near=P.near=xt,X.far=U.far=P.far=bt,(b!==X.near||C!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),b=X.near,C=X.far),X.layers.mask=$.layers.mask|6,P.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let Ut=$.parent,_t=X.cameras;H(X,Ut);for(let Zt=0;Zt<_t.length;Zt++)H(_t[Zt],Ut);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&$.isPerspectiveCamera&&(N={camera:$,fov:$.fov,zoom:$.zoom}),Z($,X,Ut)};function Z($,xt,bt){bt===null?$.matrix.copy(xt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(xt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function($){return p[$]};let et=null;function Mt($,xt){if(h=xt.getViewerPose(a||o),g=xt,h!==null){let bt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Ut=!1;bt.length!==X.cameras.length&&(X.cameras.length=0,Ut=!0);for(let Bt=0;Bt<bt.length;Bt++){let fe=bt[Bt],_e=null;if(m!==null)_e=m.getViewport(fe);else{let $e=u.getViewSubImage(d,fe);_e=$e.viewport,Bt===0&&(t.setRenderTargetTextures(S,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(S))}let ee=z[Bt];ee===void 0&&(ee=new Qe,ee.layers.enable(Bt),ee.viewport=new Ee,z[Bt]=ee),ee.matrix.fromArray(fe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(fe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(_e.x,_e.y,_e.width,_e.height),Bt===0&&(X.matrix.copy(ee.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ut===!0&&X.cameras.push(ee)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Bt=u.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&f.init(Bt,s.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Bt=0;Bt<bt.length;Bt++){let fe=bt[Bt].camera;if(fe){let _e=p[fe];_e||(_e=new jr,p[fe]=_e);let ee=u.getCameraImage(fe);_e.sourceTexture=ee}}}}for(let bt=0;bt<A.length;bt++){let Ut=w[bt],_t=A[bt];Ut!==null&&_t!==void 0&&_t.update(Ut,xt,a||o)}et&&et($,xt),xt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xt}),g=null}let At=new cf;At.setAnimationLoop(Mt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}},yy=new me,yf=new Gt;yf.set(-1,0,0,0,1,0,0,0,1);function vy(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,ch(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&l(f,p)):p.isPointsMaterial?c(f,p,M,R):p.isSpriteMaterial?a(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===pn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===pn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M=t.get(p),R=M.envMap,S=M.envMapRotation;R&&(f.envMap.value=R,f.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(yf),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function l(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,M,R){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=R*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){let M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function My(n,t,e,i){let s={},r={};function o(M,R){let S=R.program;i.uniformBlockBinding(M,S,s[M.id])}function l(M,R){let S=s[M.id];S===void 0&&(g(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",f));let A=R.program;i.updateUBOMapping(M,A);let w=t.render.frame;r[M.id]!==w&&(a(M),r[M.id]=w)}function c(M){let R=n.createBuffer(),S=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function a(M){let R=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,x=S.length;w<x;w++){let T=S[w];if(Array.isArray(T))for(let N=0,P=T.length;N<P;N++)h(T[N],w,N,A);else h(T,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,R,S,A){if(d(M,R,S,A)===!0){let w=M.__offset,x=M.value;if(Array.isArray(x)){let T=0;for(let N=0;N<x.length;N++){let P=x[N],U=y(P,!0);u(P,M.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,M.__data)}}function u(M,R,S){typeof M=="number"||typeof M=="boolean"?R[S]=M:M.isMatrix3?(R[S]=M.elements[0],R[S+1]=M.elements[1],R[S+2]=M.elements[2],R[S+3]=0,R[S+4]=M.elements[3],R[S+5]=M.elements[4],R[S+6]=M.elements[5],R[S+7]=0,R[S+8]=M.elements[6],R[S+9]=M.elements[7],R[S+10]=M.elements[8],R[S+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-S),S):M.toArray(R,S)}function d(M,R,S,A){let w=M.value,x=R+"_"+S;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let T=A[x],N=!1;for(let P=0;P<w.length;P++)m(w[P],T,P)===!0&&(N=!0);return N}return m(w,A,x)}function m(M,R,S){if(R[S]===void 0)return typeof M=="number"||typeof M=="boolean"?R[S]=M:ArrayBuffer.isView(M)?R[S]=M.slice():R[S]=M.clone(),!0;{let A=R[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let R=M.uniforms,S=0,A=16;for(let x=0,T=R.length;x<T;x++){let N=Array.isArray(R[x])?R[x]:[R[x]];for(let P=0,U=N.length;P<U;P++){let z=N[P],X=Array.isArray(z.value)?z.value:[z.value],b=Array.isArray(R[x])||Array.isArray(z.value),C=S;for(let F=0,Q=X.length;F<Q;F++){let H=X[F],Z=y(H,b),et=S%A,Mt=et%Z.boundary,At=et+Mt;S+=Mt,At!==0&&A-At<Z.storage&&(S+=A-At),F===0&&(C=S),S+=Z.storage}let D=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new D((S-C)/Float32Array.BYTES_PER_ELEMENT),z.__offset=C}}let w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function y(M,R){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function f(M){let R=M.target;R.removeEventListener("dispose",f),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:l,dispose:p}}var Sy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function by(){return fi===null&&(fi=new Zr(Sy,16,16,ss,jn),fi.name="DFG_LUT",fi.minFilter=un,fi.magFilter=un,fi.wrapS=ai,fi.wrapT=ai,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Pl=class{constructor(t={}){let{canvas:e=Ld(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=yn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=m,f=new Set([Ja,Za,Ya]),p=new Set([yn,Qn,dr,ws,Wa,Xa]),M=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],T=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,z=null,X=null,b=null,C=null;this._outputColorSpace=hn;let D=0,F=0,Q=null,H=-1,Z=null,et=new Ee,Mt=new Ee,At=null,$=new qt(0),xt=0,bt=e.width,Ut=e.height,_t=1,Zt=null,De=null,Bt=new Ee(0,0,bt,Ut),fe=new Ee(0,0,bt,Ut),_e=!1,ee=new Qi,$e=new ba,Fe=!1,xn=!1,Re=new me,ri=new k,Ge=new Ee,Pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},In=!1;function Ln(){return Q===null?_t:1}let O=i;function Dn(v,L){return e.getContext(v,L)}let be,Te,pt,Oe,Ft,Ht,E,_,V,it,tt,at,dt,J,K,ct,I,j,Y,ht,ot,lt,Lt;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),O===null){let L="webgl2";if(O=Dn(L,v),O===null)throw Dn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(v){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),zt("WebGLRenderer: "+v.message),v}function Kt(){be=new Nx(O),be.init(),ot=new gy(O,be),Te=new bx(O,be,t,ot),pt=new py(O,be),Te.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),X=O.createFramebuffer(),b=O.createFramebuffer(),C=O.createFramebuffer(),Oe=new Ox(O),Ft=new ty,Ht=new my(O,be,pt,Ft,Te,ot,Oe),E=new Dx(P),_=new km(O),lt=new Mx(O,_),V=new Ux(O,_,Oe,lt),it=new kx(O,V,_,lt,Oe),j=new Bx(O,Te,Ht),K=new Tx(Ft),tt=new j_(P,E,be,Te,lt,K),at=new vy(P,Ft),dt=new ny,J=new ly(be),I=new vx(P,E,pt,it,g,c),ct=new fy(P,it,Te),Lt=new My(O,Oe,Te,pt),Y=new Sx(O,be,Oe),ht=new Fx(O,be,Oe),Oe.programs=tt.programs,P.capabilities=Te,P.extensions=be,P.properties=Ft,P.renderLists=dt,P.shadowMap=ct,P.state=pt,P.info=Oe}y!==yn&&(N=new Gx(y,e.width,e.height,l,s,r));let st=new Ah(P,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=be.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=be.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(v){v!==void 0&&(_t=v,this.setSize(bt,Ut,!1))},this.getSize=function(v){return v.set(bt,Ut)},this.setSize=function(v,L,q=!0){if(st.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=v,Ut=L,e.width=Math.floor(v*_t),e.height=Math.floor(L*_t),q===!0&&(e.style.width=v+"px",e.style.height=L+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(bt*_t,Ut*_t).floor()},this.setDrawingBufferSize=function(v,L,q){bt=v,Ut=L,_t=q,e.width=Math.floor(v*q),e.height=Math.floor(L*q),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(y===yn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(Bt)},this.setViewport=function(v,L,q,G){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,L,q,G),pt.viewport(et.copy(Bt).multiplyScalar(Ln()).round())},this.getScissor=function(v){return v.copy(fe)},this.setScissor=function(v,L,q,G){v.isVector4?fe.set(v.x,v.y,v.z,v.w):fe.set(v,L,q,G),pt.scissor(Mt.copy(fe).multiplyScalar(Ln()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(v){pt.setScissorTest(_e=v)},this.setOpaqueSort=function(v){Zt=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,q=!0){let G=0;if(v){let W=!1;if(Q!==null){let ft=Q.texture.format;W=f.has(ft)}if(W){let ft=Q.texture.type,St=p.has(ft),ut=I.getClearColor(),yt=I.getClearAlpha(),Rt=ut.r,Xt=ut.g,ne=ut.b;St?(M[0]=Rt,M[1]=Xt,M[2]=ne,M[3]=yt,O.clearBufferuiv(O.COLOR,0,M)):(R[0]=Rt,R[1]=Xt,R[2]=ne,R[3]=yt,O.clearBufferiv(O.COLOR,0,R))}else G|=O.COLOR_BUFFER_BIT}L&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),I.dispose(),dt.dispose(),J.dispose(),Ht.dispose(),Ft.dispose(),E.dispose(),it.dispose(),V.dispose(),lt.dispose(),Lt.dispose(),tt.dispose(),st.dispose(),st.removeEventListener("sessionstart",_u),st.removeEventListener("sessionend",yu),us.stop()};function Dt(v){v.preventDefault(),ah("WebGLRenderer: Context Lost."),U=!0}function $t(){ah("WebGLRenderer: Context Restored."),U=!1;let v=Oe.autoReset,L=ct.enabled,q=ct.autoUpdate,G=ct.needsUpdate,W=ct.type;Kt(),Oe.autoReset=v,ct.enabled=L,ct.autoUpdate=q,ct.needsUpdate=G,ct.type=W}function mt(v){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function pe(v){let L=v.target;L.removeEventListener("dispose",pe),He(L)}function He(v){Hi(v),Ft.remove(v)}function Hi(v){let L=Ft.get(v).programs;L!==void 0&&(L.forEach(function(q){tt.releaseProgram(q)}),v.isShaderMaterial&&tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,q,G,W,ft){L===null&&(L=Pn);let St=W.isMesh&&W.matrixWorld.determinantAffine()<0,ut=Vp(v,L,q,G,W);pt.setMaterial(G,St);let yt=q.index,Rt=1;if(G.wireframe===!0){if(yt=V.getWireframeAttribute(q),yt===void 0)return;Rt=2}let Xt=q.drawRange,ne=q.attributes.position,Tt=Xt.start*Rt,ie=(Xt.start+Xt.count)*Rt;ft!==null&&(Tt=Math.max(Tt,ft.start*Rt),ie=Math.min(ie,(ft.start+ft.count)*Rt)),yt!==null?(Tt=Math.max(Tt,0),ie=Math.min(ie,yt.count)):ne!=null&&(Tt=Math.max(Tt,0),ie=Math.min(ie,ne.count));let Ne=ie-Tt;if(Ne<0||Ne===1/0)return;lt.setup(W,G,ut,q,yt);let Me,ye=Y;if(yt!==null&&(Me=_.get(yt),ye=ht,ye.setIndex(Me)),W.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*Ln()),ye.setMode(O.LINES)):ye.setMode(O.TRIANGLES);else if(W.isLine){let nn=G.linewidth;nn===void 0&&(nn=1),pt.setLineWidth(nn*Ln()),W.isLineSegments?ye.setMode(O.LINES):W.isLineLoop?ye.setMode(O.LINE_LOOP):ye.setMode(O.LINE_STRIP)}else W.isPoints?ye.setMode(O.POINTS):W.isSprite&&ye.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(be.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let nn=W._multiDrawStarts,Et=W._multiDrawCounts,cn=W._multiDrawCount,ce=yt?_.get(yt).bytesPerElement:1,ds=Ft.get(G).currentProgram.getUniforms();for(let sn=0;sn<cn;sn++)ds.setValue(O,"_gl_DrawID",sn),ye.render(nn[sn]/ce,Et[sn])}else if(W.isInstancedMesh)ye.renderInstances(Tt,Ne,W.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,nn);ye.renderInstances(Tt,Ne,Et)}else ye.render(Tt,Ne)};function xu(v,L,q,G){z!==null&&v.isNodeMaterial&&z.setObject(G,v),Fe===!0&&K.setState(v,q,!1),v.transparent===!0&&v.side===qe&&v.forceSinglePass===!1?(v.side=pn,v.needsUpdate=!0,Pr(v,L,G),v.side=is,v.needsUpdate=!0,Pr(v,L,G),v.side=qe):Pr(v,L,G)}this.compile=function(v,L,q=null){q===null&&(q=v),z!==null&&z.renderStart(v,L,q),w=J.get(q),w.init(L),T.push(w),q.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),v!==q&&v.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),xn=this.localClippingEnabled,Fe=K.init(this.clippingPlanes,xn),Fe===!0&&K.setGlobalState(this.clippingPlanes,L),z!==null&&ct.render(w.state.shadowsArray,q,L);let G=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ft=W.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){let ut=ft[St];xu(ut,q,L,W),G.add(ut)}else xu(ft,q,L,W),G.add(ft)}),w=T.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(v,L,q=null){let G=this.compile(v,L,q);return new Promise(W=>{function ft(){if(G.forEach(function(St){let yt=Ft.get(St).currentProgram;(yt===void 0||yt.isReady())&&G.delete(St)}),G.size===0){W(v);return}setTimeout(ft,10)}be.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let rc=null;function Gp(v){rc&&rc(v)}function _u(){us.stop()}function yu(){us.start()}let us=new cf;us.setAnimationLoop(Gp),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(v){rc=v,st.setAnimationLoop(v),v===null?us.stop():us.start()},st.addEventListener("sessionstart",_u),st.addEventListener("sessionend",yu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(v,L);let q=st.enabled===!0&&st.isPresenting===!0,G=N!==null&&(Q===null||q)&&N.begin(P,Q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(L),L=st.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,L,Q),w=J.get(v,T.length),w.init(L),w.state.textureUnits=Ht.getTextureUnits(),T.push(w),Re.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?$e.setFromArrayCamera(L):ee.setFromProjectionMatrix(Re,Un,L.reversedDepth),xn=this.localClippingEnabled,Fe=K.init(this.clippingPlanes,xn),A=dt.get(v,x.length),A.init(),x.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&oc(St,L,-1/0,P.sortObjects)}oc(v,L,0,P.sortObjects),A.finish(),z!==null&&z.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Zt,De),In=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,In&&I.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&K.beginShadows();let W=w.state.shadowsArray;if(ct.render(W,v,L),Fe===!0&&K.endShadows(),(G&&N.hasRenderPass())===!1){let St=A.opaque,ut=A.transmissive;if(w.setupLights(),L.isArrayCamera){let yt=L.cameras;if(ut.length>0)for(let Rt=0,Xt=yt.length;Rt<Xt;Rt++){let ne=yt[Rt];Mu(St,ut,v,ne)}In&&I.render(v);for(let Rt=0,Xt=yt.length;Rt<Xt;Rt++){let ne=yt[Rt];vu(A,v,ne,ne.viewport)}}else ut.length>0&&Mu(St,ut,v,L),In&&I.render(v),vu(A,v,L)}Q!==null&&F===0&&(Ht.updateMultisampleRenderTarget(Q),Ht.updateRenderTargetMipmap(Q)),G&&N.end(P),v.isScene===!0&&v.onAfterRender(P,v,L),lt.resetDefaultState(),H=-1,Z=null,T.pop(),T.length>0?(w=T[T.length-1],Ht.setTextureUnits(w.state.textureUnits),Fe===!0&&K.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function oc(v,L,q,G){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let St=L.isArrayCamera?$e:ee;if(!v.frustumCulled||v.intersectsFrustum(St)){G&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Re);let ut=it.update(v),yt=v.material;yt.visible&&A.push(v,ut,yt,q,Ge.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){let St=L.isArrayCamera?$e:ee;if(!v.frustumCulled||v.intersectsFrustum(St)){let ut=it.update(v),yt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ge.copy(ut.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(Re)),Array.isArray(yt)){let Rt=ut.groups;for(let Xt=0,ne=Rt.length;Xt<ne;Xt++){let Tt=Rt[Xt],ie=yt[Tt.materialIndex];ie&&ie.visible&&A.push(v,ut,ie,q,Ge.z,Tt,L)}}else yt.visible&&A.push(v,ut,yt,q,Ge.z,null,L)}}}let ft=v.children;for(let St=0,ut=ft.length;St<ut;St++)oc(ft[St],L,q,G)}function vu(v,L,q,G){let{opaque:W,transmissive:ft,transparent:St}=v;w.setupLightsView(q),Fe===!0&&K.setGlobalState(P.clippingPlanes,q),G&&pt.viewport(et.copy(G)),W.length>0&&ko(W,L,q),ft.length>0&&ko(ft,L,q),St.length>0&&ko(St,L,q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Mu(v,L,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Tt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new wn(1,1,{generateMipmaps:!0,type:Tt?jn:yn,minFilter:Ci,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let ft=w.state.transmissionRenderTarget[G.id],St=G.viewport||et;ft.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),yt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(ft),P.getClearColor($),xt=P.getClearAlpha(),xt<1&&P.setClearColor(16777215,.5),P.clear(),In&&I.render(q);let Xt=P.toneMapping;P.toneMapping=di;let ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Fe===!0&&K.setGlobalState(P.clippingPlanes,G),ko(v,q,G),Ht.updateMultisampleRenderTarget(ft),Ht.updateRenderTargetMipmap(ft),be.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ie=0,Ne=L.length;ie<Ne;ie++){let Me=L[ie],{object:ye,geometry:nn,material:Et,group:cn}=Me;if(Et.side===qe&&ye.layers.test(G.layers)){let ce=Et.side;Et.side=pn,Et.needsUpdate=!0,Su(ye,q,G,nn,Et,cn),Et.side=ce,Et.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ht.updateMultisampleRenderTarget(ft),Ht.updateRenderTargetMipmap(ft))}P.setRenderTarget(ut,yt,Rt),P.setClearColor($,xt),ne!==void 0&&(G.viewport=ne),P.toneMapping=Xt}function ko(v,L,q){let G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,ft=v.length;W<ft;W++){let St=v[W],{object:ut,geometry:yt,group:Rt}=St,Xt=St.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),ut.layers.test(q.layers)&&Su(ut,L,q,yt,Xt,Rt)}}function Su(v,L,q,G,W,ft){z!==null&&W.isNodeMaterial&&z.setObject(v,W),v.onBeforeRender(P,L,q,G,W,ft),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(P,L,q,G,v,ft),W.transparent===!0&&W.side===qe&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,P.renderBufferDirect(q,L,G,W,v,ft),W.side=is,W.needsUpdate=!0,P.renderBufferDirect(q,L,G,W,v,ft),W.side=qe):P.renderBufferDirect(q,L,G,W,v,ft),v.onAfterRender(P,L,q,G,W,ft)}function bu(v){let L=0;for(let q of v)q.texture!==null&&L++;return L}function Pr(v,L,q){L.isScene!==!0&&(L=Pn);let G=Ft.get(v),W=w.state.lights,ft=w.state.shadowsArray,St=W.state.version,ut=tt.getParameters(v,W.state,ft,L,q,w.state.lightProbeGridArray),yt=tt.getProgramCacheKey(ut),Rt=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let Xt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=E.get(v.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",pe),Rt=new Map,G.programs=Rt,G.programVariants=new Map);let ne=Rt.get(yt);if(ne!==void 0){if(G.currentProgram===ne&&G.lightsStateVersion===St)return Eu(v,ut),ne}else ut.uniforms=tt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,q,ut),v.onBeforeCompile(ut,P),ne=tt.acquireProgram(ut,yt),Rt.set(yt,ne),G.uniforms=ut.uniforms;let Tt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=K.uniform),Eu(v,ut),G.needsLights=Xp(v),G.lightsStateVersion=St,G.needsLights&&(Tt.ambientLightColor.value=W.state.ambient,Tt.lightProbe.value=W.state.probe,Tt.sunLights.value=W.state.sun,Tt.sunLightShadows.value=W.state.sunShadow,Tt.directionalLights.value=W.state.directional,Tt.directionalLightShadows.value=W.state.directionalShadow,Tt.spotLights.value=W.state.spot,Tt.spotLightShadows.value=W.state.spotShadow,Tt.rectAreaLights.value=W.state.rectArea,Tt.ltc_1.value=W.state.rectAreaLTC1,Tt.ltc_2.value=W.state.rectAreaLTC2,Tt.pointLights.value=W.state.point,Tt.pointLightShadows.value=W.state.pointShadow,Tt.hemisphereLights.value=W.state.hemi,Tt.sunShadowMatrix.value=W.state.sunShadowMatrix,Tt.sunShadowCascade.value=W.state.sunShadowCascade,Tt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Tt.spotLightMatrix.value=W.state.spotLightMatrix,Tt.spotLightMap.value=W.state.spotLightMap,Tt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=bu(w.state.lightProbeGridArray),G.currentProgram=ne,G.uniformsList=null,ne}function Hp(v,L,q,G,W){let ft=Ft.get(v),St=ft.currentProgram.id+","+G+","+W,ut=ft.programVariants.get(St);return ut===void 0?(ut=Pr(v,L,q),ft.programVariants.set(St,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=G,ft.toneMapping=W),ut}function Tu(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=fr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Eu(v,L){let q=Ft.get(v);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function Vp(v,L,q,G,W){L.isScene!==!0&&(L=Pn),Ht.resetTextureUnits();let ft=L.fog,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,ut=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:se.workingColorSpace,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=E.get(G.envMap||St,yt),Xt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ne=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!q.morphAttributes.position,ie=!!q.morphAttributes.normal,Ne=!!q.morphAttributes.color,Me=di;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Me=P.toneMapping);let ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=ye!==void 0?ye.length:0,Et=Ft.get(G),cn=w.state.lights;if(Fe===!0&&(xn===!0||v!==Z)){let Ce=v===Z&&G.id===H;K.setState(G,v,Ce)}let ce=!1,ds=!1;G.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==cn.state.version||W.isBatchedMesh&&Et.batching===!1||!W.isBatchedMesh&&Et.batching===!0||W.isBatchedMesh&&Et.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Et.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Et.instancing===!1||!W.isInstancedMesh&&Et.instancing===!0||W.isSkinnedMesh&&Et.skinning===!1||!W.isSkinnedMesh&&Et.skinning===!0||W.isInstancedMesh&&Et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Et.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Et.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Et.instancingMorph===!1&&W.morphTexture!==null||Et.envMap!==Rt||G.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==K.numPlanes||Et.numIntersection!==K.numIntersection)||Et.vertexAlphas!==Xt||Et.vertexTangents!==ne||Et.morphTargets!==Tt||Et.morphNormals!==ie||Et.morphColors!==Ne||Et.morphTargetsCount!==nn||Et.numLightProbeGrids!==bu(w.state.lightProbeGridArray)?ce=!0:(Et.outputColorSpace!==ut||Et.toneMapping!==Me)&&(ds=!0):(ce=!0,Et.__version=G.version);let sn=Et.currentProgram;(ce===!0||ds===!0)&&(sn=ds===!0?Hp(G,L,W,ut,Me):Pr(G,L,W),z&&G.isNodeMaterial&&z.onUpdateProgram(G,sn,Et));let zo=!1,Vi=!1,fs=!1,le=sn.getUniforms(),Ke=Et.uniforms;if(pt.useProgram(sn.program)&&(zo=!0,Vi=!0,fs=!0),G.id!==H&&(H=G.id,Vi=!0),zo||Z!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),le.setValue(O,"projectionMatrix",v.projectionMatrix),le.setValue(O,"viewMatrix",v.matrixWorldInverse);let Ve=le.map.cameraPosition;Ve!==void 0&&Ve.setValue(O,ri.setFromMatrixPosition(v.matrixWorld)),Te.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,Vi=!0,fs=!0)}if(Et.needsLights&&(cn.state.sunShadowMap.length>0&&le.setValue(O,"sunShadowMap",cn.state.sunShadowMap,Ht),cn.state.directionalShadowMap.length>0&&le.setValue(O,"directionalShadowMap",cn.state.directionalShadowMap,Ht),cn.state.spotShadowMap.length>0&&le.setValue(O,"spotShadowMap",cn.state.spotShadowMap,Ht),cn.state.pointShadowMap.length>0&&le.setValue(O,"pointShadowMap",cn.state.pointShadowMap,Ht)),W.isSkinnedMesh){le.setOptional(O,W,"bindMatrix"),le.setOptional(O,W,"bindMatrixInverse");let Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),le.setValue(O,"boneTexture",Ce.boneTexture,Ht))}W.isBatchedMesh&&(le.setOptional(O,W,"batchingTexture"),le.setValue(O,"batchingTexture",W._matricesTexture,Ht),le.setOptional(O,W,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",W._indirectTexture,Ht),le.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",W._colorsTexture,Ht));let qn=q.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&j.update(W,q,sn),(Vi||Et.receiveShadow!==W.receiveShadow)&&(Et.receiveShadow=W.receiveShadow,le.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Ke.envMapIntensity.value=L.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=by()),Vi){if(le.setValue(O,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Wp(Ke,fs),ft&&G.fog===!0&&at.refreshFogUniforms(Ke,ft),at.refreshMaterialUniforms(Ke,G,_t,Ut,w.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){let Ce=S,Ve=0;for(let vi of w.state.lightProbeGridArray)vi.texture!==null&&(Ce.textures[Ve]=vi.texture,Ce.min[Ve]=vi.boundingBox.min,Ce.max[Ve]=vi.boundingBox.max,Ce.resolution[Ve]=vi.resolution,Ve++);for(let vi in Ce)Ce[vi].length=Ve;Ke.probesSH.value=Ce.textures,Ke.probesMin.value=Ce.min,Ke.probesMax.value=Ce.max,Ke.probesResolution.value=Ce.resolution}fr.upload(O,Tu(Et),Ke,Ht)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fr.upload(O,Tu(Et),Ke,Ht),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(O,"center",W.center),le.setValue(O,"modelViewMatrix",W.modelViewMatrix),le.setValue(O,"normalMatrix",W.normalMatrix),le.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ce=G.uniformsGroups;for(let Ve=0,vi=Ce.length;Ve<vi;Ve++){let Au=Ce[Ve];Lt.update(Au,sn),Lt.bind(Au,sn)}}return sn}function Wp(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Xp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(v,L,q){let G=Ft.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ft.get(v.texture).__webglTexture=L,Ft.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let q=Ft.get(v);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,q=0){Q=v,D=L,F=q;let G=null,W=!1,ft=!1;if(v){let ut=Ft.get(v);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(v.viewport),Mt.copy(v.scissor),At=v.scissorTest,pt.viewport(et),pt.scissor(Mt),pt.setScissorTest(At),H=-1;return}else if(ut.__webglFramebuffer===void 0)Ht.setupRenderTarget(v);else if(ut.__hasExternalTextures)Ht.rebindTextures(v,Ft.get(v.texture).__webglTexture,Ft.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Xt=v.depthTexture;if(ut.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(v.width!==Xt.image.width||v.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ft=!0);let Rt=Ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?G=Rt[L][q]:G=Rt[L],W=!0):v.samples>0&&Ht.useMultisampledRTT(v)===!1?G=Ft.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[q]:G=Rt,et.copy(v.viewport),Mt.copy(v.scissor),At=v.scissorTest}else et.copy(Bt).multiplyScalar(_t).floor(),Mt.copy(fe).multiplyScalar(_t).floor(),At=_e;if(q!==0&&(G=X),pt.bindFramebuffer(O.FRAMEBUFFER,G)&&pt.drawBuffers(v,G),pt.viewport(et),pt.scissor(Mt),pt.setScissorTest(At),W){let ut=Ft.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,q)}else if(ft){let ut=L;for(let yt=0;yt<v.textures.length;yt++){let Rt=Ft.get(v.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,Rt.__webglTexture,q,ut)}}else if(v!==null&&q!==0){let ut=Ft.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,q)}H=-1};function wu(v){let L=Ft.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=Te.textureFormatReadable(v.format),L.__typeReadable=Te.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,q,G,W,ft,St,ut=0){if(!(v&&v.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){pt.bindFramebuffer(O.FRAMEBUFFER,yt);try{let Rt=v.textures[ut],Xt=Rt.format,ne=Rt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let Tt=wu(Rt);if(Tt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-G&&q>=0&&q<=v.height-W&&O.readPixels(L,q,G,W,ot.convert(Xt),ot.convert(ne),ft)}finally{let Rt=Q!==null?Ft.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,L,q,G,W,ft,St,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(L>=0&&L<=v.width-G&&q>=0&&q<=v.height-W){pt.bindFramebuffer(O.FRAMEBUFFER,yt);let Rt=v.textures[ut],Xt=Rt.format,ne=Rt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let Tt=wu(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(L,q,G,W,ot.convert(Xt),ot.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ne=Q!==null?Ft.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,Ne);let Me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Nd(O,Me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ie),O.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,q=0){let G=Math.pow(2,-q),W=Math.floor(v.image.width*G),ft=Math.floor(v.image.height*G),St=L!==null?L.x:0,ut=L!==null?L.y:0;Ht.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,St,ut,W,ft),pt.unbindTexture()},this.copyTextureToTexture=function(v,L,q=null,G=null,W=0,ft=0){let St,ut,yt,Rt,Xt,ne,Tt,ie,Ne,Me=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(q!==null)St=q.max.x-q.min.x,ut=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,Rt=q.min.x,Xt=q.min.y,ne=q.isBox3?q.min.z:0;else{let le=Math.pow(2,-W);St=Math.floor(Me.width*le),ut=Math.floor(Me.height*le),v.isDataArrayTexture?yt=Me.depth:v.isData3DTexture?yt=Math.floor(Me.depth*le):yt=1,Rt=0,Xt=0,ne=0}G!==null?(Tt=G.x,ie=G.y,Ne=G.z):(Tt=0,ie=0,Ne=0);let ye=ot.convert(L.format),nn=ot.convert(L.type),Et;L.isData3DTexture?(Ht.setTexture3D(L,0),Et=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ht.setTexture2DArray(L,0),Et=O.TEXTURE_2D_ARRAY):(Ht.setTexture2D(L,0),Et=O.TEXTURE_2D),pt.activeTexture(O.TEXTURE0),pt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),pt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),pt.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let cn=pt.getParameter(O.UNPACK_ROW_LENGTH),ce=pt.getParameter(O.UNPACK_IMAGE_HEIGHT),ds=pt.getParameter(O.UNPACK_SKIP_PIXELS),sn=pt.getParameter(O.UNPACK_SKIP_ROWS),zo=pt.getParameter(O.UNPACK_SKIP_IMAGES);pt.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),pt.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let Vi=v.isDataArrayTexture||v.isData3DTexture,fs=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let le=Ft.get(v),Ke=Ft.get(L),qn=Ft.get(le.__renderTarget),Ce=Ft.get(Ke.__renderTarget);pt.bindFramebuffer(O.READ_FRAMEBUFFER,qn.__webglFramebuffer),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ve=0;Ve<yt;Ve++)Vi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(v).__webglTexture,W,ne+Ve),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(L).__webglTexture,ft,Ne+Ve)),O.blitFramebuffer(Rt,Xt,Rt+St,Xt+ut,Tt,ie,Tt+St,ie+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||Ft.has(v)){let le=Ft.get(v),Ke=Ft.get(L);pt.bindFramebuffer(O.READ_FRAMEBUFFER,b),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,C);for(let qn=0;qn<yt;qn++)Vi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,le.__webglTexture,W,ne+qn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,le.__webglTexture,W),fs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,ft,Ne+qn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ke.__webglTexture,ft),W!==0?O.blitFramebuffer(Rt,Xt,Rt+St,Xt+ut,Tt,ie,Tt+St,ie+ut,O.COLOR_BUFFER_BIT,O.NEAREST):fs?O.copyTexSubImage3D(Et,ft,Tt,ie,Ne+qn,Rt,Xt,St,ut):O.copyTexSubImage2D(Et,ft,Tt,ie,Rt,Xt,St,ut);pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fs?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Et,ft,Tt,ie,Ne,St,ut,yt,ye,nn,Me.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,ft,Tt,ie,Ne,St,ut,yt,ye,Me.data):O.texSubImage3D(Et,ft,Tt,ie,Ne,St,ut,yt,ye,nn,Me):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,Tt,ie,St,ut,ye,nn,Me.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,Tt,ie,Me.width,Me.height,ye,Me.data):O.texSubImage2D(O.TEXTURE_2D,ft,Tt,ie,St,ut,ye,nn,Me);pt.pixelStorei(O.UNPACK_ROW_LENGTH,cn),pt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce),pt.pixelStorei(O.UNPACK_SKIP_PIXELS,ds),pt.pixelStorei(O.UNPACK_SKIP_ROWS,sn),pt.pixelStorei(O.UNPACK_SKIP_IMAGES,zo),ft===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&O.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(v){Ft.get(v).__webglFramebuffer===void 0&&Ht.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ht.setTextureCube(v,0):v.isData3DTexture?Ht.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ht.setTexture2DArray(v,0):Ht.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){D=0,F=0,Q=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};function Dl(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},l=n[0].morphTargetsRelative,c=new fn;c.morphTargetsRelative=l;let a=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,m=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,g,h),a+=g}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let m=n[d].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=vf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let m=[];for(let y=0;y<o[h].length;++y)m.push(o[h][y][d]);let g=vf(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function vf(n){let t,e,i,s=-1,r=0;for(let a=0;a<n.length;++a){let h=n[a];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),l=new Tn(o,e,i),c=0;for(let a=0;a<n.length;++a){let h=n[a];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);l.setComponent(d+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(l.gpuType=s),l}var rt=Math.random;function ae(n,t,e,{repeat:i=[1,1],srgb:s=!0,aniso:r=4}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let l=o.getContext("2d");e(l,n,t);let c=new Kr(o);return c.wrapS=c.wrapT=nr,c.repeat.set(i[0],i[1]),s&&(c.colorSpace=hn),c.anisotropy=r,c}function Ie(n,t,e,i){let s=n.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){if(r[o+3]===0)continue;let l=(rt()-.5)*i;r[o]+=l,r[o+1]+=l,r[o+2]+=l}n.putImageData(s,0,0)}function vn(n,t,e,i,s,r=.12,o=.25){for(let l=0;l<i;l++){let c=rt()*t,a=rt()*e,h=(.03+rt()*o)*Math.max(t,e),u=n.createRadialGradient(c,a,0,c,a,h);u.addColorStop(0,`rgba(${s},${rt()*r})`),u.addColorStop(1,`rgba(${s},0)`),n.fillStyle=u,n.fillRect(c-h,a-h,h*2,h*2)}}var Ch=()=>ae(256,512,(n,t,e)=>{n.fillStyle="#cbc4ae",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#6f9184",n.fillRect(0,i,t,e-i),n.fillStyle="#41544c",n.fillRect(0,i-6,t,7),n.fillStyle="#2e2a24",n.fillRect(0,e-14,t,14),vn(n,t,e,18,"60,50,30",.1,.3);let s=n.createLinearGradient(0,e-90,0,e);s.addColorStop(0,"rgba(30,25,15,0)"),s.addColorStop(1,"rgba(30,25,15,.35)"),n.fillStyle=s,n.fillRect(0,e-90,t,90);for(let r=0;r<6;r++){n.strokeStyle=`rgba(40,30,20,${rt()*.15})`,n.lineWidth=1,n.beginPath();let o=rt()*t;n.moveTo(o,rt()*i),n.lineTo(o+(rt()-.5)*30,i+rt()*40),n.stroke()}Ie(n,t,e,18)}),Nl=()=>ae(256,256,(n,t,e)=>{for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=140+rt()*14;n.fillStyle=`rgb(${r-4},${r},${r-10})`,n.fillRect(s*128,i*128,128,128)}for(let i=0;i<1600;i++){let s=rt()*2.2;n.fillStyle=rt()<.5?"rgba(70,72,66,.55)":"rgba(220,220,210,.45)",n.fillRect(rt()*t,rt()*e,s,s)}vn(n,t,e,10,"40,35,25",.18,.2);for(let i=0;i<8;i++){n.strokeStyle="rgba(20,20,20,.15)",n.lineWidth=1+rt()*2,n.beginPath();let s=rt()*t,r=rt()*e;n.moveTo(s,r),n.lineTo(s+(rt()-.5)*60,r+(rt()-.5)*20),n.stroke()}n.strokeStyle="rgba(30,30,28,.6)",n.lineWidth=2,n.strokeRect(1,1,127,127),n.strokeRect(129,1,126,127),n.strokeRect(1,129,127,126),n.strokeRect(129,129,126,126),Ie(n,t,e,14)}),Ph=()=>ae(256,256,(n,t,e)=>{let i=e/4;for(let s=0;s<4;s++){let r=rt()*t,o=95+rt()*30;n.fillStyle=`rgb(${o+30},${o},${o-35})`,n.fillRect(0,s*i,t,i);for(let l=0;l<22;l++){n.strokeStyle=`rgba(50,30,10,${.08+rt()*.12})`,n.lineWidth=1,n.beginPath();let c=s*i+rt()*i;n.moveTo(0,c),n.bezierCurveTo(t*.3,c+(rt()-.5)*6,t*.6,c+(rt()-.5)*6,t,c+(rt()-.5)*4),n.stroke()}n.fillStyle="rgba(25,15,5,.7)",n.fillRect(0,s*i,t,2),n.fillRect(r%t,s*i,2,i)}vn(n,t,e,10,"20,10,0",.2,.2),Ie(n,t,e,16)}),Ih=()=>ae(256,256,(n,t,e)=>{n.fillStyle="#8f9590",n.fillRect(0,0,t,e);let i=8,s=t/i;for(let r=0;r<i;r++)for(let o=0;o<i;o++){let l=200+rt()*25;n.fillStyle=`rgb(${l},${l+3},${l+2})`,n.fillRect(o*s+1.5,r*s+1.5,s-3,s-3)}vn(n,t,e,14,"90,80,40",.22,.18),Ie(n,t,e,10)}),Ul=()=>ae(256,256,(n,t,e)=>{n.fillStyle="#b9b6aa",n.fillRect(0,0,t,e);for(let i=0;i<2600;i++)n.fillStyle="rgba(60,58,50,.5)",n.fillRect(rt()*t,rt()*e,1.4,1.4);vn(n,t,e,5,"110,80,30",.25,.2),n.strokeStyle="#6d6a60",n.lineWidth=3,n.strokeRect(0,0,t/2,e/2),n.strokeRect(t/2,0,t/2,e/2),n.strokeRect(0,e/2,t/2,e/2),n.strokeRect(t/2,e/2,t/2,e/2),Ie(n,t,e,10)}),Mf=()=>ae(256,128,(n,t,e)=>{n.fillStyle="#b8935f",n.fillRect(0,0,t,e);for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,55,20,${.08+rt()*.15})`,n.lineWidth=1+rt(),n.beginPath();let s=rt()*e;n.moveTo(0,s),n.bezierCurveTo(t*.3,s+(rt()-.5)*10,t*.7,s+(rt()-.5)*10,t,s+(rt()-.5)*8),n.stroke()}for(let i=0;i<5;i++){n.strokeStyle=`rgba(30,30,60,${.2+rt()*.3})`,n.lineWidth=1,n.beginPath();let s=rt()*t,r=rt()*e;n.moveTo(s,r),n.lineTo(s+rt()*30,r+(rt()-.5)*8),n.stroke()}Ie(n,t,e,12)}),rs=(n="#7c8288")=>ae(128,128,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i);for(let s=0;s<60;s++){t.strokeStyle=`rgba(255,255,255,${rt()*.06})`,t.beginPath();let r=rt()*i;t.moveTo(0,r),t.lineTo(e,r+(rt()-.5)*3),t.stroke()}vn(t,e,i,6,"60,40,20",.15,.3),Ie(t,e,i,14)}),Sf=()=>ae(128,256,(n,t,e)=>{n.fillStyle="#5d6a73",n.fillRect(0,0,t,e),n.strokeStyle="#2f363b",n.lineWidth=3,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#262c30";for(let i=0;i<6;i++)n.fillRect(28,20+i*9,t-56,4);n.fillStyle="#9aa3a8",n.fillRect(t-28,e*.48,8,34),n.fillStyle="#ddd",n.fillRect(30,e*.36,40,16),n.fillStyle="#333",n.font="bold 12px sans-serif",n.fillText(String(10+(rt()*40|0)),36,e*.36+12),vn(n,t,e,8,"80,50,20",.2,.25),Ie(n,t,e,16)}),bf=n=>ae(1024,256,(t,e,i)=>{t.fillStyle="#20382c",t.fillRect(0,0,e,i);for(let s=0;s<30;s++)t.fillStyle=`rgba(200,220,210,${rt()*.05})`,t.beginPath(),t.ellipse(rt()*e,rt()*i,60+rt()*120,10+rt()*25,rt()-.5,0,7),t.fill();t.fillStyle="rgba(235,240,230,.92)",t.font='bold 54px "Nanum Pen Script", "Comic Sans MS", cursive, sans-serif',t.textAlign="center",t.fillText(n,e/2,i/2+18),t.font="30px sans-serif",t.fillStyle="rgba(235,240,230,.5)",t.fillText("\uC8FC\uBC88: ____   \uACB0\uC11D: 31\uBA85",e*.82,i-28),Ie(t,e,i,10)},{aniso:8}),Tf=()=>ae(256,192,(n,t,e)=>{n.fillStyle="#a07a4c",n.fillRect(0,0,t,e);for(let s=0;s<1500;s++)n.fillStyle=rt()<.5?"rgba(70,45,20,.5)":"rgba(200,160,110,.4)",n.fillRect(rt()*t,rt()*e,2,2);let i=[["\uAC00\uC815\uD1B5\uC2E0\uBB38","#eee"],["\uAE09\uC2DD \uC2DD\uB2E8\uD45C","#f4f0d0"],["\uC2E4\uC885","#ddd"],["\uAD50\uCE59 \uC81C1\uC870","#e8e8e8"]];for(let[s,r]of i){let o=10+rt()*(t-90),l=10+rt()*(e-80);n.save(),n.translate(o,l),n.rotate((rt()-.5)*.15),n.fillStyle=r,n.fillRect(0,0,70,60),n.fillStyle="#333",n.font="11px sans-serif",n.fillText(s,6,16);for(let c=0;c<4;c++)n.fillRect(6,24+c*8,40+rt()*18,2);n.fillStyle="#c33",n.beginPath(),n.arc(35,3,3,0,7),n.fill(),n.restore()}Ie(n,t,e,10)}),Lh=(n,t="#e8e4d8",e="#1d2a4a")=>ae(256,96,(i,s,r)=>{i.fillStyle=t,i.fillRect(0,0,s,r),i.strokeStyle="#3a3a3a",i.lineWidth=6,i.strokeRect(3,3,s-6,r-6),i.fillStyle=e,i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,s/2,r/2+2),vn(i,s,r,4,"60,50,20",.2,.4),Ie(i,s,r,10)}),Dh=()=>ae(256,96,(n,t,e)=>{n.fillStyle="#19b35a",n.fillRect(0,0,t,e),n.fillStyle="#fff",n.fillRect(16,16,46,64),n.fillStyle="#19b35a",n.fillRect(26,22,30,56),n.fillStyle="#fff",n.beginPath(),n.arc(90,26,9,0,7),n.fill(),n.lineWidth=8,n.strokeStyle="#fff",n.lineCap="round",n.beginPath(),n.moveTo(88,38),n.lineTo(80,60),n.lineTo(66,76),n.moveTo(80,60),n.lineTo(96,76),n.moveTo(86,44),n.lineTo(72,52),n.moveTo(88,44),n.lineTo(104,50),n.stroke(),n.font="bold 34px sans-serif",n.textBaseline="middle",n.fillText("\uBE44\uC0C1\uAD6C",120,50)}),Fl=()=>ae(128,160,(n,t,e)=>{n.fillStyle="#e6dfc8",n.fillRect(0,0,t,e),n.strokeStyle="rgba(90,120,170,.35)";for(let i=24;i<e;i+=12)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.strokeStyle="rgba(40,40,60,.75)",n.lineWidth=1.5;for(let i=34;i<e-20;i+=12){n.beginPath(),n.moveTo(10,i);let s=10;for(;s<t-14-rt()*30;)s+=4+rt()*6,n.lineTo(s,i+(rt()-.5)*2);n.stroke()}vn(n,t,e,4,"120,90,40",.25,.3),Ie(n,t,e,12)}),Ef=()=>ae(64,128,(n,t,e)=>{n.fillStyle="#fff",n.fillRect(0,0,t,e),n.fillStyle="rgba(0,0,0,.25)",n.fillRect(0,10,t,4),n.fillRect(0,e-20,t,4),n.fillStyle="rgba(255,255,255,.4)",n.fillRect(8,30,t-16,40),Ie(n,t,e,20)});var Nh=n=>ae(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2,r=2,o=(l,c,a,h,u)=>{let d=t.createRadialGradient(l,c,0,l,c,Math.max(a,h));d.addColorStop(0,u),d.addColorStop(1,"rgba(0,0,0,0)"),t.save(),t.translate(l,c),t.scale(a/Math.max(a,h),h/Math.max(a,h)),t.translate(-l,-c),t.fillStyle=d,t.beginPath(),t.arc(l,c,Math.max(a,h),0,7),t.fill(),t.restore()};for(let l of[-1,1]){let c=s+l*44*r,a=112*r;o(c,a+4,34*r,22*r,n?"rgba(40,10,10,.55)":"rgba(90,50,40,.28)"),o(s+l*52*r,150*r,26*r,16*r,n?"rgba(160,40,40,.22)":"rgba(200,110,100,.12)"),t.strokeStyle="rgba(25,16,10,.9)",t.lineCap="round";for(let y=0;y<9;y++){t.lineWidth=(6-Math.abs(y-3)*.6)*r*.6,t.beginPath();let f=s+l*(20+y*5)*r;t.moveTo(f,(88-(n?10:0)+Math.abs(y-3)*.6)*r),t.lineTo(f+l*6*r,(86-(n?12:0)+Math.abs(y-3)*.6)*r),t.stroke()}let h=(n?17:19)*r,u=(n?14:7.5)*r;t.fillStyle=n?"#efe9dc":"#e9e2d6",t.beginPath(),t.ellipse(c,a,h,u,0,0,7),t.fill(),t.save(),t.beginPath(),t.ellipse(c,a,h,u,0,0,7),t.clip();let d=c+(n?0:l*-3*r),m=(n?5:8.5)*r,g=t.createRadialGradient(d,a,0,d,a,m);g.addColorStop(0,"#1a0f08"),g.addColorStop(.45,"#3d2617"),g.addColorStop(1,"#22150c"),t.fillStyle=g,t.beginPath(),t.arc(d,a,m,0,7),t.fill(),t.fillStyle="#030303",t.beginPath(),t.arc(d,a,(n?1.8:3.8)*r,0,7),t.fill(),n||(t.fillStyle="rgba(255,255,255,.8)",t.beginPath(),t.arc(d+3*r,a-3*r,1.6*r,0,7),t.fill()),t.fillStyle="rgba(0,0,0,.25)",t.fillRect(c-h,a-u,h*2,u*.5),t.restore(),t.strokeStyle="#140c07",t.lineWidth=3*r,t.beginPath(),t.ellipse(c,a,h,u,0,Math.PI*1.02,Math.PI*1.98),t.stroke(),t.strokeStyle="rgba(70,40,30,.45)",t.lineWidth=1.5*r,t.beginPath(),t.ellipse(c,a-5*r,h*.95,u+3*r,0,Math.PI*1.1,Math.PI*1.9),t.stroke(),t.strokeStyle="rgba(80,45,35,.35)",t.lineWidth=1.2*r,t.beginPath(),t.ellipse(c,a+1*r,h*.95,u,0,.15,Math.PI-.15),t.stroke()}o(s,140*r,12*r,26*r,"rgba(120,70,55,.15)"),t.strokeStyle="rgba(110,60,45,.45)",t.lineWidth=2*r,t.beginPath(),t.moveTo(s-6*r,118*r),t.quadraticCurveTo(s-9*r,140*r,s-12*r,152*r),t.stroke(),t.fillStyle="rgba(70,35,28,.55)";for(let l of[-1,1])t.beginPath(),t.ellipse(s+l*7*r,156*r,4*r,2.4*r,l*.3,0,7),t.fill();t.strokeStyle="rgba(110,60,45,.35)",t.lineWidth=1.5*r,t.beginPath(),t.moveTo(s-14*r,154*r),t.quadraticCurveTo(s,162*r,s+14*r,154*r),t.stroke(),t.strokeStyle="rgba(110,60,45,.2)",t.lineWidth=1.5*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*3*r,163*r),t.lineTo(s+l*4*r,176*r),t.stroke();if(!n)t.fillStyle="#a5625a",t.beginPath(),t.moveTo(s-22*r,184*r),t.quadraticCurveTo(s-8*r,177*r,s,180*r),t.quadraticCurveTo(s+8*r,177*r,s+22*r,184*r),t.quadraticCurveTo(s,186*r,s-22*r,184*r),t.fill(),t.fillStyle="#b4706a",t.beginPath(),t.moveTo(s-20*r,185*r),t.quadraticCurveTo(s,198*r,s+20*r,185*r),t.fill(),t.strokeStyle="#5a2a26",t.lineWidth=1.8*r,t.beginPath(),t.moveTo(s-22*r,184.5*r),t.quadraticCurveTo(s,187*r,s+22*r,184.5*r),t.stroke(),o(s,205*r,18*r,7*r,"rgba(90,50,40,.2)");else{t.fillStyle="#120303",t.beginPath(),t.moveTo(s-84*r,156*r),t.quadraticCurveTo(s,262*r,s+84*r,156*r),t.quadraticCurveTo(s,196*r,s-84*r,156*r),t.fill();for(let l=-7;l<=7;l++){let c=s+l*10.5*r,a=(172+(1-Math.abs(l)/8)*16)*r,h=t.createLinearGradient(0,a,0,a+13*r);h.addColorStop(0,"#e9dfc6"),h.addColorStop(1,"#b9a98a"),t.fillStyle=h,t.beginPath(),t.roundRect?t.roundRect(c-4.5*r,a,9*r,13*r,2*r):t.rect(c-4.5*r,a,9*r,13*r),t.fill()}for(let l=-6;l<=6;l++){let c=s+l*10.5*r,a=(205+(1-Math.abs(l)/7)*18)*r;t.fillStyle="#cbbd9e",t.fillRect(c-4*r,a,8*r,9*r)}t.strokeStyle="#6a1414",t.lineWidth=3*r,t.beginPath(),t.moveTo(s-86*r,156*r),t.quadraticCurveTo(s,264*r,s+86*r,156*r),t.stroke(),t.strokeStyle="rgba(60,10,10,.5)",t.lineWidth=2*r;for(let l of[-1,1])t.beginPath(),t.moveTo(s+l*86*r,156*r),t.lineTo(s+l*96*r,146*r),t.stroke()}},{aniso:8}),wf=()=>ae(256,256,(n,t,e)=>{n.fillStyle="#16171a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=3)for(let s=0;s<t;s+=4)n.fillStyle=`rgba(255,255,255,${.02+rt()*.03})`,n.fillRect(s,i,2,2);n.fillStyle="#eef0f2",n.beginPath(),n.moveTo(t*.22,0),n.lineTo(t/2,e*.55),n.lineTo(t*.78,0),n.fill(),n.fillStyle="#3b4250",n.beginPath(),n.moveTo(t/2-10,0),n.lineTo(t/2+10,0),n.lineTo(t/2+14,e*.5),n.lineTo(t/2,e*.56),n.lineTo(t/2-14,e*.5),n.fill(),n.strokeStyle="rgba(255,255,255,.12)",n.lineWidth=2;for(let i=0;i<8;i++)n.beginPath(),n.moveTo(t/2-12,i*18),n.lineTo(t/2+12,i*18+10),n.stroke();n.strokeStyle="#e8e8e8",n.lineWidth=7,n.beginPath(),n.moveTo(t*.2,0),n.lineTo(t/2,e*.58),n.lineTo(t*.8,0),n.stroke(),n.strokeStyle="#16171a",n.lineWidth=6,n.beginPath(),n.moveTo(t*.16,0),n.lineTo(t/2,e*.63),n.lineTo(t*.84,0),n.stroke(),n.strokeStyle="#d8d8d8",n.lineWidth=4,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t/2,e*.67),n.lineTo(t*.88,0),n.stroke(),n.fillStyle="rgba(255,255,255,.08)";for(let i=0;i<t;i+=6)n.fillRect(i,e-18,3,18)}),Af=()=>ae(64,64,(n,t,e)=>{n.fillStyle="#16171a",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=3)for(let s=0;s<t;s+=4)n.fillStyle=`rgba(255,255,255,${.02+rt()*.03})`,n.fillRect(s,i,2,2)}),Uh=()=>ae(64,64,(n,t,e)=>{n.fillStyle="#4a4d52",n.fillRect(0,0,t,e),n.strokeStyle="rgba(30,30,35,.5)",n.lineWidth=1;for(let i=0;i<t;i+=6)n.beginPath(),n.moveTo(i,0),n.lineTo(i,e),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();Ie(n,t,e,16)},{repeat:[3,6]});var Rf=()=>ae(512,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.strokeStyle="rgba(255,255,255,.75)";let i=t*(.3+rt()*.4),s=e*.5;for(let r=0;r<18;r++){n.lineWidth=1+rt()*2,n.beginPath();let o=i,l=s;n.moveTo(o,l);let c=rt()*7;for(let a=0;a<6;a++)o+=Math.cos(c+(rt()-.5))*40,l+=Math.sin(c+(rt()-.5))*30,n.lineTo(o,l);n.stroke()}for(let r=20;r<90;r+=25){n.lineWidth=1,n.beginPath();for(let o=0;o<7;o+=.6)n.lineTo(i+Math.cos(o)*r*(.8+rt()*.4),s+Math.sin(o)*r*.6);n.closePath(),n.stroke()}});var bo=(n=0,t=!1)=>ae(256,400,(e,i,s)=>{e.clearRect(0,0,i,s);let r=n*9301+49297,o=()=>(r=(r*9301+49297)%233280,r/233280),l=t?{top:"#1b1b20",sh:"#f0f0f0",pants:"#5a5d63",skin:"#e8b896"}:[{top:"#2a3f7a",sh:"#f2f2f2",pants:"#2a2a40",skin:"#e9b593"},{top:"#7a1f2a",sh:"#f2f2f2",pants:"#3a2a20",skin:"#e3a985"},{top:"#2f5a3a",sh:"#efefe6",pants:"#33363a",skin:"#efc3a2"}][n%3],c=(S,A,w=60,x=2)=>{e.strokeStyle=A,e.lineCap="round";let T=S.map(b=>b[0]),N=S.map(b=>b[1]),P=Math.min(...T),U=Math.max(...T),z=Math.min(...N),X=Math.max(...N);e.save(),e.beginPath(),S.forEach(([b,C],D)=>D?e.lineTo(b,C):e.moveTo(b,C)),e.closePath(),e.clip();for(let b=0;b<w;b++){e.globalAlpha=.25+o()*.4,e.lineWidth=x*(.6+o()),e.beginPath();let C=z+o()*(X-z),D=P-10;e.moveTo(D,C),e.lineTo(U+10,C+(o()-.3)*30),e.stroke()}e.restore(),e.globalAlpha=1},a=(S,A="#151010",w=2.2)=>{for(let x=0;x<2;x++)e.strokeStyle=A,e.globalAlpha=.7,e.lineWidth=w,e.beginPath(),S.forEach(([T,N],P)=>{let U=()=>(o()-.5)*2.5;P?e.lineTo(T+U(),N+U()):e.moveTo(T+U(),N+U())}),e.closePath(),e.stroke();e.globalAlpha=1},h=S=>S.map(([A,w])=>[i/2-A,w]),u=S=>S.map(([A,w])=>[i/2+A,w]),d=o()*30-15,m=120+o()*80,g=20+o()*40,y=60,f=y+40+g;for(let S of[h,u]){let A=S([[8,f+110],[26,f+110],[30+d*.3,s-14],[16,s-12]]);c(A,l.pants,40),a(A)}let p=[[i/2-38,f],[i/2+38,f],[i/2+34,f+115],[i/2-34,f+115]];c(p,l.sh,40),c(t?[[i/2-38,f],[i/2-6,f+60],[i/2+6,f+60],[i/2+38,f],[i/2+34,f+105],[i/2-34,f+105]]:p,l.top,70),a(p),t&&(e.strokeStyle="#eee",e.lineWidth=3,e.beginPath(),e.moveTo(i/2-34,f),e.lineTo(i/2,f+64),e.lineTo(i/2+34,f),e.stroke(),c([[i/2-5,f],[i/2+5,f],[i/2+6,f+55],[i/2-6,f+55]],"#3b4250",20));for(let S of[-1,1]){let A=i/2+S*38,w=[[A,f+4],[A+S*14,f+4],[A+S*(30+d*S),f+m],[A+S*(16+d*S),f+m+6]];c(w,l.sh,30),a(w);let x=A+S*(24+d*S),T=f+m+8;e.strokeStyle="#2a1a14",e.lineWidth=2;for(let N=0;N<5;N++)e.beginPath(),e.moveTo(x,T),e.lineTo(x+S*(N-2)*6,T+18+o()*16),e.stroke()}let M=[[i/2-7,y+30],[i/2+7,y+30],[i/2+7,f],[i/2-7,f]];c(M,l.skin,20),a(M,"#2a1a14",1.5);let R=[];for(let S=0;S<6.28;S+=.3)R.push([i/2+Math.cos(S)*34,y+Math.sin(S)*40]);c(R,l.skin,50),a(R),e.fillStyle="#120a0a";for(let S=0;S<40;S++)e.globalAlpha=.5,e.fillRect(i/2-36+o()*72,y-44+o()*26,2,10+o()*14);e.globalAlpha=1;for(let S of[-1,1])e.fillStyle="#050505",e.beginPath(),e.ellipse(i/2+S*13,y-2,8,11,0,0,7),e.fill(),e.strokeStyle="#7a0a0a",e.lineWidth=2,e.beginPath(),e.moveTo(i/2+S*13,y+8),e.lineTo(i/2+S*14,y+26+o()*30),e.stroke();e.fillStyle="#120505",e.beginPath(),e.moveTo(i/2-22,y+20),e.quadraticCurveTo(i/2,y+42,i/2+22,y+20),e.quadraticCurveTo(i/2,y+28,i/2-22,y+20),e.fill(),e.fillStyle="rgba(120,10,10,.75)",e.font='bold 18px "Nanum Pen Script", cursive, sans-serif',e.save(),e.translate(14,s-30),e.rotate(-.08),e.fillText(t?"\uB108":["\uC0B4\uB824\uC918","\uC5EC\uAE30 \uC788\uC5B4","\uC870\uC6A9\uD788 \uD574"][n%3],0,0),e.restore()});var Fh=n=>ae(512,512,(t,e,i)=>{t.clearRect(0,0,e,i);let s=e/2;for(let r of[-1,1])t.fillStyle="#151515",t.beginPath(),t.ellipse(s+r*70,230,22,n?34:28,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(s+r*70+7,220,7,0,7),t.fill(),t.strokeStyle="#151515",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(s+r*48,182),t.quadraticCurveTo(s+r*70,172,s+r*94,184),t.stroke(),t.fillStyle="rgba(240,110,120,.45)",t.beginPath(),t.ellipse(s+r*95,290,34,18,0,0,7),t.fill();if(t.strokeStyle="#a0504a",t.lineWidth=4,t.beginPath(),t.moveTo(s-6,270),t.lineTo(s,282),t.stroke(),!n)t.strokeStyle="#7a2020",t.lineWidth=7,t.beginPath(),t.arc(s,300,40,.25,Math.PI-.25),t.stroke();else{t.fillStyle="#2a0505",t.beginPath(),t.moveTo(s-150,280),t.quadraticCurveTo(s,470,s+150,280),t.quadraticCurveTo(s,350,s-150,280),t.fill(),t.fillStyle="#efe6d0";for(let r=-9;r<=9;r++)t.beginPath(),t.moveTo(s+r*14-6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14+6,300+(1-Math.abs(r)/10)*30),t.lineTo(s+r*14,322+(1-Math.abs(r)/10)*30),t.fill()}},{aniso:8}),Cf=()=>ae(512,512,(n,t,e)=>{n.fillStyle="#060607",n.fillRect(0,0,t,e);let i=t/2;for(let s of[-1,1]){let r=n.createRadialGradient(i+s*80,210,0,i+s*80,210,60);r.addColorStop(0,"#fffef6"),r.addColorStop(.75,"#e8e4d8"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.beginPath(),n.ellipse(i+s*80,210,58,64,0,0,7),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(i+s*80+s*-6,214,9,0,7),n.fill()}n.fillStyle="#e8e2d2",n.beginPath(),n.moveTo(i-190,300),n.quadraticCurveTo(i,440,i+190,300),n.quadraticCurveTo(i,360,i-190,300),n.fill(),n.strokeStyle="#060607",n.lineWidth=4;for(let s=-12;s<=12;s++)n.beginPath(),n.moveTo(i+s*15,320+(1-Math.abs(s)/13)*25),n.lineTo(i+s*15,350+(1-Math.abs(s)/13)*45),n.stroke()}),Oh=(n=0)=>ae(256,128,(t,e,i)=>{t.fillStyle=["#c8651e","#e9e6dc","#d8d1b0"][n%3],t.fillRect(0,0,e,i),t.strokeStyle="rgba(20,10,5,.7)",t.lineWidth=3,t.beginPath(),t.moveTo(0,i/2),t.lineTo(e,i/2),t.moveTo(e/4,0),t.lineTo(e/4,i),t.moveTo(e*3/4,0),t.lineTo(e*3/4,i),t.stroke();let s=e/2;t.fillStyle="#100808";for(let r of[-1,1])t.beginPath(),t.ellipse(s+r*14,50,6,9,0,0,7),t.fill();t.beginPath(),t.ellipse(s,80,12,18,0,0,7),t.fill(),t.fillStyle="rgba(20,10,5,.8)";for(let r=0;r<30;r++)t.fillRect(s-24+rt()*48,18+rt()*10,2,8);Ie(t,e,i,16)});var Pf=()=>ae(256,256,(n,t,e)=>{n.fillStyle="#d9d4c8",n.fillRect(0,0,t,e);for(let i=0;i<160;i++){n.strokeStyle=`rgba(30,30,35,${.08+rt()*.2})`,n.lineWidth=1,n.beginPath();let s=rt()*t,r=rt()*e;n.moveTo(s,r),n.lineTo(s+18,r+24),n.stroke()}vn(n,t,e,8,"60,50,40",.2,.2),Ie(n,t,e,14)}),If=()=>ae(256,256,(n,t,e)=>{for(let i=0;i<8;i++){let s=150+rt()*30;n.fillStyle=`rgb(${s+40},${s+10},${s-40})`,n.fillRect(0,i*32,t,32),n.fillStyle="rgba(60,30,0,.4)",n.fillRect(0,i*32,t,1),n.fillRect(rt()*t,i*32,1,32)}for(let i=0;i<40;i++){n.strokeStyle=`rgba(90,50,10,${rt()*.15})`,n.beginPath();let s=rt()*e;n.moveTo(0,s),n.lineTo(t,s+(rt()-.5)*4),n.stroke()}Ie(n,t,e,12)}),To=()=>ae(128,256,(n,t,e)=>{n.fillStyle="#1d2a4f",n.fillRect(0,0,t,e),n.fillStyle="#e8e8e8",n.fillRect(8,0,6,e),n.fillRect(t-14,0,6,e),Ie(n,t,e,10)}),Lf=()=>ae(512,512,(n,t,e)=>{n.fillStyle="#e4dfcc",n.fillRect(0,0,t,e);for(let i=0;i<260;i++){n.strokeStyle=`rgba(35,40,30,${.06+rt()*.16})`,n.lineWidth=1+rt()*1.2,n.beginPath();let s=rt()*t,r=rt()*e,o=.6+(rt()-.5)*.3;n.moveTo(s,r),n.lineTo(s+Math.cos(o)*60,r+Math.sin(o)*60),n.stroke()}for(let i=0;i<6;i++)n.strokeStyle="rgba(30,30,30,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(rt()*t,0),n.bezierCurveTo(rt()*t,e*.3,rt()*t,e*.7,rt()*t,e),n.stroke();vn(n,t,e,8,"90,80,50",.15,.25),Ie(n,t,e,12)}),Df=()=>ae(256,512,(n,t,e)=>{n.fillStyle="#b9bf8c",n.fillRect(0,0,t,e);let i=e*.6;n.fillStyle="#7f8d63",n.fillRect(0,i,t,e-i),n.fillStyle="#4f5a3c",n.fillRect(0,i-5,t,6),n.fillStyle="#2e3324",n.fillRect(0,e-14,t,14);for(let r=0;r<t;r+=16)n.fillStyle="rgba(80,90,50,.12)",n.fillRect(r,0,2,i-6);vn(n,t,e,22,"70,60,20",.14,.3);let s=n.createLinearGradient(0,e-100,0,e);s.addColorStop(0,"rgba(30,25,10,0)"),s.addColorStop(1,"rgba(30,25,10,.4)"),n.fillStyle=s,n.fillRect(0,e-100,t,100),Ie(n,t,e,16)}),Nf=()=>ae(256,256,(n,t,e)=>{n.fillStyle="#8c8a5a",n.fillRect(0,0,t,e);for(let i=0;i<9e3;i++){let s=100+rt()*70;n.fillStyle=`rgba(${s},${s-4},${s-50},.35)`,n.fillRect(rt()*t,rt()*e,1.5,1.5)}vn(n,t,e,12,"50,40,20",.25,.25),Ie(n,t,e,10)}),Uf=()=>ae(128,256,(n,t,e)=>{n.fillStyle="#5a1818",n.fillRect(0,0,t,e),n.strokeStyle="#2a0a0a",n.lineWidth=4,n.strokeRect(10,10,t-20,e-20),n.strokeRect(20,30,t-40,80),n.fillStyle="#b8b0a0",n.fillRect(t-26,e*.52,10,22),n.fillStyle="#eee",n.font="bold 20px sans-serif",n.textAlign="center",n.fillText("\u25BC \uC544\uB798\uB85C",t/2,76),vn(n,t,e,10,"20,0,0",.3,.3),Ie(n,t,e,14)});var Eo=new k;function kn(n,t,e,i,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;Eo.copy(t),Eo[i]=0,Eo.normalize();let a=.5*o/(o+l),h=1-Eo.angleTo(n)/c;return Math.sign(Eo[e])===1?h*a:l/(o+l)+a+a*(1-h)}var Li=class n extends te{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new k,a=new k,h=new k(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,g=u.length/6,y=new k,f=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(c.fromArray(u,p),a.copy(c),a.x-=Math.sign(a.x)*f,a.y-=Math.sign(a.y)*f,a.z-=Math.sign(a.z)*f,a.normalize(),u[p+0]=h.x*Math.sign(c.x)+a.x*r,u[p+1]=h.y*Math.sign(c.y)+a.y*r,u[p+2]=h.z*Math.sign(c.z)+a.z*r,d[p+0]=a.x,d[p+1]=a.y,d[p+2]=a.z,Math.floor(p/g)){case 0:y.set(1,0,0),m[M+0]=kn(y,a,"z","y",r,i),m[M+1]=1-kn(y,a,"y","z",r,e);break;case 1:y.set(-1,0,0),m[M+0]=1-kn(y,a,"z","y",r,i),m[M+1]=1-kn(y,a,"y","z",r,e);break;case 2:y.set(0,1,0),m[M+0]=1-kn(y,a,"x","z",r,t),m[M+1]=kn(y,a,"z","x",r,i);break;case 3:y.set(0,-1,0),m[M+0]=1-kn(y,a,"x","z",r,t),m[M+1]=1-kn(y,a,"z","x",r,i);break;case 4:y.set(0,0,1),m[M+0]=1-kn(y,a,"x","y",r,t),m[M+1]=1-kn(y,a,"y","x",r,e);break;case 5:y.set(0,0,-1),m[M+0]=kn(y,a,"x","y",r,t),m[M+1]=1-kn(y,a,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var wt=n=>new ji(n),Of={},oe=(n,t)=>Of[n]||(Of[n]=t()),vt={skin:()=>oe("skin",()=>wt({color:14202274,roughness:.5})),hair:()=>oe("hair",()=>wt({color:1511693,roughness:.55})),shirt:()=>oe("shirt",()=>wt({color:15659250,roughness:.75})),knit:()=>oe("knit",()=>wt({map:Af(),roughness:.95})),pants:()=>oe("pants",()=>wt({map:Uh(),roughness:.85})),shoeBlk:()=>oe("shoeBlk",()=>wt({color:1315860,roughness:.9})),shoeWht:()=>oe("shoeWht",()=>wt({color:15328991,roughness:.7})),suit:()=>oe("suit",()=>wt({color:1776672,roughness:.8})),paleSkin:()=>oe("pale",()=>wt({color:13222840,roughness:.4})),steel:()=>oe("steel",()=>wt({color:9146518,metalness:.8,roughness:.35})),darkSteel:()=>oe("dsteel",()=>wt({map:rs("#55595e"),metalness:.6,roughness:.5})),laminate:()=>oe("lam",()=>wt({map:Mf(),roughness:.55})),plywood:()=>oe("ply",()=>wt({color:10253382,roughness:.7})),locker:()=>oe("locker",()=>wt({map:Sf(),metalness:.5,roughness:.55})),lockerSide:()=>oe("lockerSide",()=>wt({map:rs("#56626b"),metalness:.5,roughness:.55})),ceramic:()=>oe("cer",()=>wt({color:15330282,roughness:.15,metalness:.05})),partition:()=>oe("part",()=>wt({color:9214624,roughness:.6})),blackTop:()=>oe("btop",()=>wt({color:1710618,roughness:.3})),whiteCab:()=>oe("wcab",()=>wt({color:14210766,roughness:.6})),shelfWood:()=>oe("shelf",()=>wt({color:7227948,roughness:.75})),piano:()=>oe("piano",()=>wt({color:723723,roughness:.15,metalness:.1})),plastic:()=>oe("plas",()=>wt({color:4020864,roughness:.5})),canvas:()=>oe("canv",()=>wt({color:15262936,roughness:.9})),monitorBlk:()=>oe("mon",()=>wt({color:1381653,roughness:.4})),doorWood:()=>oe("door",()=>wt({color:8016435,roughness:.7})),paper:()=>oe("paper",()=>wt({map:Fl(),roughness:.9,side:qe})),red:()=>oe("red",()=>wt({color:11541018,roughness:.4,metalness:.2}))},ve=(n,t,e=0,i=0,s=0,r=!0)=>{let o=new Ct(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=!0,o},Ot=(n,t,e,i,s,r,o)=>ve(new te(n,t,e),i,s,r,o),mn=(n,t,e,i,s,r,o,l=12)=>ve(new hi(n,t,e,l),i,s,r,o),mi=(n,t,e,i,s,r)=>ve(new to(n,t,6,12),e,i,s,r);function wo(n={}){let t=new Nt,e=n.faceTex||Nh(!1),i=Nh(!0),s=n.hairColor?wt({color:n.hairColor,roughness:.55}):vt.hair(),r=[],o=[],l=n.girl?oe("skirt",()=>wt({map:Uh(),color:8095400,roughness:.85})):vt.pants();for(let p of[-1,1]){let M=new Nt;M.position.set(p*.1,.92,0),t.add(M),M.add(mi(n.girl?.06:.078,.3,n.girl?vt.skin():vt.pants(),0,-.22,0));let R=new Nt;R.position.set(0,-.44,0),M.add(R),R.add(mi(n.girl?.052:.07,.3,n.girl?oe("sock",()=>wt({color:15658734,roughness:.8})):vt.pants(),0,-.2,0));let S=new Nt;S.position.set(0,-.42,.04),R.add(S),S.add(Ot(.11,.035,.28,vt.shoeWht(),0,-.02,0)),S.add(Ot(.1,.07,.24,vt.shoeBlk(),0,.03,-.01)),S.add(Ot(.1,.05,.05,vt.shoeWht(),0,.01,.12)),r.push(M),o.push(R)}if(n.girl){let p=ve(new hi(.17,.27,.42,20,1,!0),l,0,.84,0);p.material.side=qe,t.add(p)}else t.add(ve(new Li(.36,.14,.22,3,.06),vt.pants(),0,.95,0));let c=[vt.knit(),vt.knit(),vt.knit(),vt.knit(),oe("vestF",()=>wt({map:wf(),roughness:.95})),vt.knit()];t.add(ve(new Li(n.girl?.34:.38,.5,.21,4,.08),c,0,1.24,0)),t.add(ve(new Li(n.girl?.36:.4,.08,.2,3,.04),vt.shirt(),0,1.5,0));let a=[];for(let p of[-1,1]){let M=new Nt;M.position.set(p*(n.girl?.215:.235),1.47,0),M.rotation.z=p*.06,t.add(M),M.add(mi(.052,.42,vt.shirt(),0,-.26,0)),M.add(ve(new _n(.045,10,8),vt.skin(),0,-.55,0)),a.push(M)}t.add(mn(.05,.055,.1,vt.skin(),0,1.56,0));for(let p of[-1,1]){let M=Ot(.08,.035,.06,vt.shirt(),p*.05,1.56,.04);M.rotation.z=p*-.5,t.add(M)}let h=new Nt;h.position.set(0,1.7,0),t.add(h);let u=ve(new _n(.112,24,18),vt.skin());u.scale.set(.9,1.12,1),h.add(u);let d=wt({map:e,transparent:!0,roughness:.6,depthWrite:!1}),m=ve(new _n(.1135,24,18,Math.PI/2-.95,1.9,.62,1.55),d,0,0,0,!1);m.scale.copy(u.scale),h.add(m);for(let p of[-1,1])h.add(ve(new _n(.025,8,8),vt.skin(),p*.1,-.01,0));let g=n.girl?2.45:1.75,y=ve(new _n(.121,28,18,Math.PI/2+1.05,Math.PI*2-2.1,0,g),s);y.scale.set(n.girl?1.02:.93,1.13,1.06),y.position.set(0,.006,-.004),h.add(y);let f=ve(new _n(.1215,24,12,Math.PI/2-1.1,2.2,0,1.02),s);if(f.scale.copy(y.scale),f.position.set(0,.006,-.002),h.add(f),n.glasses){let p=oe("glass",()=>wt({color:1118481,roughness:.3,metalness:.6}));for(let M of[-1,1]){let R=ve(new vs(.026,.004,6,16),p,M*.042,.015,.108,!1);h.add(R)}h.add(Ot(.03,.004,.004,p,0,.018,.112))}if(n.ribbon){let p=wt({color:11540520,roughness:.5});for(let M of[-1,1]){let R=Ot(.07,.05,.02,p,M*.04,.02,-.125);R.rotation.z=M*.4,h.add(R)}}return t.userData={legs:r,knees:o,arms:a,head:h,faceMat:d,faceN:e,faceG:i,faceY:1.7},t}function Bf(n){let t=n.userData;for(let e of t.legs)e.rotation.x=-Math.PI/2;for(let e of t.knees)e.rotation.x=Math.PI/2;for(let e of t.arms)e.rotation.x=-.9;n.position.y-=.44}function kf(){let n=wo({girl:!0,ribbon:!0,hairColor:854538,faceTex:Fh(!1)}),t=n.userData;t.faceG=Fh(!0),n.scale.setScalar(1.12);for(let e of t.arms){e.clear(),e.add(mi(.045,1.05,vt.shirt(),0,-.58,0));let i=new Nt;i.position.set(0,-1.18,0),e.add(i),i.add(Ot(.06,.08,.03,vt.skin(),0,0,0));for(let s=0;s<4;s++){i.add(Ot(.01,.09,.01,vt.skin(),-.022+s*.015,-.08,0));let r=ve(new eo(.006,.09,6),oe("nail",()=>wt({color:2760736,roughness:.3})),-.022+s*.015,-.17,0);r.rotation.x=Math.PI,i.add(r)}}return t.faceY=1.7*1.12,n}function zf(){let n=new Nt,t=oe("handSkin",()=>wt({map:Pf(),color:13818548,roughness:.85})),e=ve(new Li(.85,.2,.8,4,.08),t,0,0,0);n.add(e);let i=[],s=[-.31,-.105,.105,.31],r=[.5,.62,.6,.45];for(let u=0;u<4;u++){let d=new Nt;d.position.set(s[u],0,.38),n.add(d);let m=d,g=[];for(let f=0;f<3;f++){let p=r[u]*[.45,.32,.25][f],M=.075-f*.012,R=mi(M,p,t,0,0,p/2);R.rotation.x=Math.PI/2,d.add(R);let S=new Nt;S.position.set(0,0,p+M*.6),d.add(S),g.push(d),d=S}let y=ve(new te(.09,.02,.08),oe("handNail",()=>wt({color:10132096,roughness:.4})),0,.05,-.02);d.add(y),i.push({base:m,segs:g})}let o=new Nt;o.position.set(.45,0,.02),o.rotation.y=.9,n.add(o);let l=mi(.085,.26,t,0,0,.13);l.rotation.x=Math.PI/2,o.add(l);let c=new Nt;c.position.set(0,0,.3),o.add(c);let a=mi(.07,.2,t,0,0,.1);a.rotation.x=Math.PI/2,c.add(a);let h=mi(.24,.5,t,0,.02,-.55);return h.rotation.x=Math.PI/2,n.add(h),n.scale.setScalar(1.9),n.userData={fingers:i,thumb:[o,c],skin:t,faceY:.15},n}function Bh(n,t,e,i){n.userData.fingers.forEach((s,r)=>{let o=e?Math.sin(t*9+r*1.6)*.5:0;s.segs[0].rotation.x=-.15+o*.6+i*.9,s.segs[1].rotation.x=.2+Math.max(0,o)*.5+i*1.2,s.segs[2].rotation.x=.15+i*1}),n.userData.thumb[0].rotation.x=i*.8,n.userData.thumb[1].rotation.x=i*.9}function Gf(){let n=new Nt,t=oe("track",()=>wt({map:To(),roughness:.8})),e=[];for(let o of[-1,1]){let l=new Nt;l.position.set(o*.13,1.15,0),n.add(l),l.add(mi(.08,.95,t,0,-.52,0)),l.add(Ot(.12,.08,.32,vt.shoeWht(),0,-1.1,.06)),e.push(l)}n.add(ve(new Li(.52,.8,.28,4,.1),t,0,1.55,0));let i=[];for(let o of[-1,1]){let l=new Nt;l.position.set(o*.3,1.88,0),n.add(l),l.add(mi(.065,1.05,t,0,-.58,0)),l.add(ve(new Li(.13,.18,.06,2,.02),vt.skin(),0,-1.2,0)),i.push(l)}n.add(mn(.05,.06,.12,vt.skin(),0,2,0));let s=new Nt;s.position.set(0,2.17,0),n.add(s),s.add(ve(new _n(.13,24,18),wt({color:657931,roughness:.8})));let r=ve(new _n(.1315,24,18,Math.PI/2-.95,1.9,.6,1.6),new Fn({map:Cf(),transparent:!0}),0,0,0,!1);return s.add(r),s.add(Ot(.05,.025,.05,wt({color:13637656,roughness:.3}),0,-.05,.14)),n.userData={legs:e,arms:i,head:s,faceY:2.17},n}function Hf(n){let t=new Nt,e=ve(new _n(.24,24,16),wt({map:Oh(n),roughness:.6}),0,.24,0);return t.add(e),t.userData={ball:e,faceY:.24},t}function kh(){let n=new Nt;n.add(Ot(1.8,1.05,.04,wt({color:15658734,roughness:.3,transparent:!0,opacity:.85}),0,3-.6,0)),n.add(Ot(.6,.45,.045,wt({color:16777215,roughness:.3}),0,2.35,.005));let t=ve(new vs(.23,.012,8,24),wt({color:13783066,metalness:.5,roughness:.4}),0,2.05,.28);return t.rotation.x=Math.PI/2,n.add(t),n}function Vf(){let n=new Nt;n.add(Ot(.9,.6,.6,wt({map:rs("#555c62"),metalness:.6,roughness:.5,wireframe:!1}),0,.5,0));for(let t=0;t<6;t++)n.add(ve(new _n(.12,14,10),wt({map:Oh(t),roughness:.6}),-.3+t%3*.3,.88,-.12+Math.floor(t/3)*.24));return n}function Wf(){let n=new Nt;n.add(Ot(.6,.4,.45,wt({color:10254924,roughness:.9}),0,.2,0));let t=Ot(.5,.08,.38,oe("track",()=>wt({map:To(),roughness:.8})),0,.42,0);return t.rotation.y=.2,n.add(t),n}function Xf(){let n=new Nt,t=mn(.014,.014,1.2,wt({color:9071162,roughness:.7}),0,.03,0);return t.rotation.z=Math.PI/2,n.add(t),n.add(Ot(.06,.1,.32,wt({color:12032602,roughness:.95}),.62,.05,0)),n}function Rs(n,t){let e=n.userData;e.faceMat.map=t?e.faceG:e.faceN,e.faceMat.needsUpdate=!0}function zh(n,t,e,i=.5){let s=n.userData;if(!s.legs)return;let r=Math.sin(t*e)*i;s.legs[0].rotation.x=r,s.legs[1].rotation.x=-r,s.arms&&(s.arms[0].rotation.x=-r*.3,s.arms[1].rotation.x=r*.3)}function Ol(){let n=new Nt;n.add(Ot(.62,.025,.44,vt.laminate(),0,.72,0)),n.add(Ot(.58,.12,.38,vt.darkSteel(),0,.64,-.02));for(let[i,s]of[[-.28,-.18],[.28,-.18],[-.28,.18],[.28,.18]])n.add(mn(.012,.012,.7,vt.steel(),i,.35,s,8));n.add(Ot(.56,.015,.015,vt.steel(),0,.12,-.18));let t=new Nt;t.position.set(0,0,.42),t.rotation.y=(Math.random()-.5)*.4,n.add(t),t.add(Ot(.4,.02,.38,vt.plywood(),0,.44,0));let e=Ot(.38,.22,.015,vt.plywood(),0,.68,.2);e.rotation.x=-.1,t.add(e);for(let[i,s]of[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]])t.add(mn(.011,.011,.44,vt.steel(),i,.22,s,8));if(t.add(mn(.011,.011,.32,vt.steel(),-.18,.6,.19,8)),t.add(mn(.011,.011,.32,vt.steel(),.18,.6,.19,8)),Math.random()<.4){let i=Ot(.21,.03,.28,wt({color:[8006186,2771578,3828282][Math.random()*3|0],roughness:.7}),(Math.random()-.5)*.3,.75,0);i.rotation.y=Math.random(),n.add(i)}return n}function qf(){let n=new Nt;return n.add(Ot(1.8,.04,.75,vt.laminate(),0,.78,0)),n.add(Ot(1.76,.74,.04,vt.plywood(),0,.38,.33)),n.add(Ot(.5,.74,.7,vt.plywood(),-.62,.38,0)),n.add(Ot(.5,.74,.7,vt.plywood(),.62,.38,0)),n.add(Ot(.3,.04,.22,wt({color:820,roughness:.6}),.3,.82,-.05)),n}function Gh(){let n=new Nt;for(let t of[-1,1])n.add(ve(new te(.56,1.85,.5),[vt.lockerSide(),vt.lockerSide(),vt.lockerSide(),vt.lockerSide(),vt.locker(),vt.lockerSide()],t*.29,.925,0));return n}function Yf(){let n=new Nt;n.add(Ot(1.1,.04,.7,wt({color:9145480,roughness:.5}),0,.74,0)),n.add(Ot(.4,.7,.65,wt({color:7303534,roughness:.5}),.33,.36,0)),n.add(Ot(.5,.32,.03,vt.monitorBlk(),-.1,1,-.2)),n.add(Ot(.06,.12,.06,vt.monitorBlk(),-.1,.81,-.2)),n.add(Ot(.42,.02,.14,vt.monitorBlk(),-.1,.77,.05));for(let e=0;e<4;e++){let i=Ot(.21,.004,.29,wt({color:15657696,roughness:.9}),-.3+Math.random()*.2,.765+e*.004,.15);i.rotation.y=Math.random()-.5,n.add(i)}let t=new Nt;return t.position.set(-.1,0,.55),n.add(t),t.add(mn(.22,.22,.07,wt({color:546,roughness:.8}),0,.48,0,16)),t.add(mn(.02,.02,.4,vt.steel(),0,.25,0)),t.add(Ot(.42,.5,.06,wt({color:546,roughness:.8}),0,.82,.22)),n}function Zf(){let n=new Nt;n.add(Ot(1.2,.04,.9,vt.blackTop(),0,.88,0)),n.add(Ot(1.14,.84,.84,vt.whiteCab(),0,.43,0));for(let t=-1;t<=1;t++)n.add(Ot(.005,.7,.8,wt({color:2457,roughness:.6}),t*.38,.43,.425));return Math.random()<.5&&(n.add(mn(.05,.07,.15,wt({color:13625583,transparent:!0,opacity:.5,roughness:.05}),.2,.98,.1)),n.add(mn(.012,.012,.3,vt.steel(),-.4,1.05,-.35))),n}function Jf(){let n=new Nt;n.add(Ot(1.2,2.1,.03,vt.shelfWood(),0,1.05,0));for(let t of[-1,1])n.add(Ot(.03,2.1,.62,vt.shelfWood(),t*.585,1.05,0));for(let t=0;t<5;t++)n.add(Ot(1.17,.025,.62,vt.shelfWood(),0,.08+t*.48,0));return n}function $f(n){let t=new Nt;t.add(Ot(n,.06,.5,wt({color:5987936,roughness:.3}),0,.82,.25)),t.add(Ot(n,.78,.04,wt({color:4869456,roughness:.5}),0,.4,.48));for(let e=0;e<3;e++){let i=-n/2+n*(e+.5)/3,s=ve(new hi(.2,.14,.12,20,1,!0),vt.ceramic(),i,.8,.25);s.material.side=qe,t.add(s),t.add(mn(.015,.015,.18,vt.steel(),i,.94,.05));let r=mn(.012,.012,.14,vt.steel(),i,1.02,.11);r.rotation.x=Math.PI/2,t.add(r)}return t}function Kf(){let n=new Nt;n.add(Ot(.03,2,1.4,vt.partition(),-.6,1.1,0));let t=Ot(.75,1.8,.03,vt.partition(),-.15,1.05,.7);return t.rotation.y=-.6,t.position.x=.05,n.add(t),n.add(Ot(.38,.4,.5,vt.ceramic(),.2,.2,-.35)),n.add(Ot(.4,.05,.55,vt.ceramic(),.2,.42,-.33)),n.add(Ot(.42,.35,.18,vt.ceramic(),.2,.62,-.62)),n}function Qf(){let n=new Nt;return n.add(mn(.08,.08,.48,vt.red(),0,.26,0,16)),n.add(mn(.03,.05,.08,vt.monitorBlk(),0,.54,0)),n.add(Ot(.12,.03,.03,vt.monitorBlk(),.04,.6,0)),n}function jf(){let n=new Nt,t=wt({color:13214247,metalness:.9,roughness:.3}),e=ve(new vs(.03,.007,8,16),t);e.rotation.x=Math.PI/2,n.add(e),n.add(Ot(.09,.006,.012,t,.07,0,0)),n.add(Ot(.012,.006,.025,t,.1,0,.012));let i=Ot(.05,.004,.08,wt({color:10491928,roughness:.6}),-.06,0,.03);return i.rotation.y=.4,n.add(i),n}var Ey="44\uAD50\uC2DC \uC0DD\uC874\uC218\uC5C5",wy=location.hostname.endsWith("onrender.com")?"":"https://random-football-cflg.onrender.com",Wl={bell:{text:"\uC218\uC5C5 \uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uAD50\uC2E4 \uC548\uC5D0 \uC788\uC744 \uAC83. \uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB2C8\uB294 \uC0AC\uB78C\uB9CC \uC8FD\uC778\uB2E4.",why:'\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uBCF5\uB3C4\uC5D0 \uC788\uC5C8\uB2E4. "\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!"'},run:{text:"\uBCF5\uB3C4\uC5D0\uC11C\uB294 \uB5A0\uB4E4\uC9C0 \uB9D0 \uAC83. \uB370\uCE7C\uCF54\uB9C8\uB2C8\uB294 \uB208\uC774 \uC5C6\uB294 \uB300\uC2E0 \uC18C\uB9AC\uB97C \uB4E3\uACE0, \uBCBD\uACFC \uBC14\uB2E5\uC744 \uC811\uC5B4 \uC0AC\uB78C\uC744 \uADF8\uB9BC\uC73C\uB85C \uB9CC\uB4E0\uB2E4.",why:'"\uB370\uCE7C\uCF54\uB9C8\uB2C8?" \uBCBD\uC774 \uC811\uD614\uB2E4. \uB098\uB294 \uBCBD\uC5D0 \uADF8\uB824\uC9C4 \uADF8\uB9BC\uC774 \uB418\uC5C8\uB2E4.'},mirror:{text:"\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uC18D\uC758 \uB098\uC640 \uC624\uB798 \uB208\uC744 \uB9C8\uC8FC\uCE58\uC9C0 \uB9D0 \uAC83. \uB3C4\uD50C\uAC31\uC5B4\uB294 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C\uB294 \uBABB \uB098\uC628\uB2E4.",why:"\uAC70\uC6B8 \uC18D\uC758 \uB0B4\uAC00 \uC6C3\uC5C8\uB2E4. \uADF8\uB9AC\uACE0 \uB098\uB97C \uAC70\uC6B8 \uC18D\uC73C\uB85C \uB04C\uACE0 \uB4E4\uC5B4\uAC00 \uB0B4 \uBAB8\uC744 \uCC28\uC9C0\uD588\uB2E4."},gym:{text:"\uCCB4\uC721\uAD00 \uC548\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uCCB4\uC721\uBCF5\uC744 \uC785\uC744 \uAC83. \uD638\uB8E8\uB77C\uAE30\uAC00 \uC6B8\uB9AC\uBA74 \uACF5\uC774 \uB2EC\uB824\uB4E0\uB2E4.",why:"\uAD50\uBCF5\uC744 \uC785\uC740 \uCC44 \uCCB4\uC721\uAD00\uC5D0 \uB4E4\uC5B4\uAC14\uB2E4. \uC091\u2014 \uD638\uB8E8\uB77C\uAE30 \uC18C\uB9AC\uC640 \uD568\uAED8 \uB098\uB3C4 \uACF5\uC774 \uB418\uC5C8\uB2E4."}},yr={n1:{t:"\uCE60\uD310",b:'"\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83."'},n2:{t:"\uD654\uC7A5\uC2E4 \uBCBD \uB099\uC11C",b:`\uAC70\uC6B8 \uC18D \uC560\uB4E4\uC740 \uB2E8\uCD94\uAC00 \uBC18\uB300\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC5B4.
\uACC4\uC18D \uBCF4\uACE0 \uC788\uC73C\uBA74 \uBA48\uCDC4\uB2E4\uAC00\u2026 \uC6C3\uC5B4.
\uC6C3\uC73C\uBA74 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C \uB3C4\uB9DD\uCCD0. \uAC54\uB294 \uD654\uC7A5\uC2E4 \uBC16\uC73C\uB85C\uB294 \uBABB \uB098\uC640.`},n3:{t:"1\uD559\uB144 3\uBC18 \uCABD\uC9C0",b:`3\uBC18\uC740 \uB2E4 \uB05D\uB0AC\uC5B4.
"\uB370\uCE7C\uCF54\uB9C8\uB2C8?" \uD558\uB294 \uC18C\uB9AC\uAC00 \uB4E4\uB9AC\uBA74 \uC228\uB3C4 \uC26C\uC9C0 \uB9C8.
\uAC54\uB294 \uB208\uC774 \uC5C6\uC5B4. \uC18C\uB9AC \uB098\uB294 \uACF3\uC744 \uBCBD\uC9F8\uB85C \uC811\uC5B4 \uBC84\uB824.
\uBB3C\uAC74\uC744 \uB358\uC9C0\uBA74 \uADF8\uCABD\uC73C\uB85C \uAC00. \uBE57\uC790\uB8E8\uB4E0 \uD578\uB4DC\uD3F0\uC774\uB4E0.`},n4:{t:"\uAD50\uBB34\uC2E4 \uBA54\uBAA8",b:`[\uCCB4\uC721\uAD00 \uAD50\uCE59] \uCCB4\uC721\uAD00 \uC548\uC5D0\uC11C\uB294 \uBC18\uB4DC\uC2DC \uCCB4\uC721\uBCF5 \uCC29\uC6A9.
\uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0 \uCCB4\uC721\uBCF5 \uD55C \uBC8C \uC788\uC74C.
\uC9C0\uD558 \uACC4\uB2E8 \uCCA0\uBB38 \uC5F4\uC1E0 \u2014 \uCCB4\uC721\uAD00 \uB18D\uAD6C \uACE8\uB300 \uC544\uB798 \uBCF4\uAD00.`},n5:{t:"\uACFC\uD559\uC2E4 \uCABD\uC9C0",b:`\uC0AC\uBB3C\uD568\uC5D0 \uC228\uC73C\uBA74 \uB370\uCE7C\uCF54\uB9C8\uB2C8\uD55C\uD14C \uC548 \uB4E4\uCF1C.
\uADFC\uB370 \uC548\uC740 \uC881\uC544\uC11C 8\uCD08 \uC774\uC0C1\uC740 \uBABB \uBC84\uD168.
\uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uC218\uC5C5 \uC2DC\uAC04\uC5D0\uB9CC \uB098\uC640. \uAD50\uC2E4 \uC548\uC5D0\uB9CC \uC788\uC73C\uBA74 \uC6C3\uC73C\uBA74\uC11C \uBCF4\uAE30\uB9CC \uD574.`},n6:{t:"\uB3C4\uC11C\uC2E4 \uC2E0\uBB38 \uC2A4\uD06C\uB7A9",b:`\u300C\uC138\uACC4 \uACF3\uACF3\uC5D0 \uC815\uCCB4\uBD88\uBA85\uC758 '\uAC80\uC740 \uC6D0' \uBC1C\uC0DD\u2026 \uC2E4\uC885\uC790 \uCC9C \uBA85 \uB118\uC5B4\u300D

\uC5EC\uBC31\uC5D0 \uC801\uD78C \uAE00\uC528:
\uC548\uC5D0\uC11C\uC758 1\uB144\uC740 \uBC16\uC5D0\uC11C\uC758 \uD558\uB8E8.
\uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uC5D0 \uC788\uB2E4.`}},Ay=[{name:"\uB0A8\uC815\uC6B0",x:5,y:5,o:{glasses:!0},lines:["\uB3C4\uC724\uC544, \uC885 \uCE58\uAE30 \uC804\uC5D0 \uBB34\uC870\uAC74 \uAD50\uC2E4\uB85C \uB3CC\uC544\uC640. \uC120\uC0DD\uB2D8\uCC98\uB7FC \uB418\uAE30 \uC2EB\uC73C\uBA74.","\uAD50\uBB34\uC2E4 \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0 \uCCB4\uC721\uBCF5\uC774 \uC788\uC5C8\uB358 \uAC83 \uAC19\uC544. \uCCB4\uC721\uAD00\uC740 \uCCB4\uC721\uBCF5 \uC5C6\uC774 \uB4E4\uC5B4\uAC00\uBA74 \uC548 \uB3FC.","\uCD9C\uAD6C\uB294 \uB9E8 \uC544\uB798\uB77C\uACE0 \uD588\uC5B4. \uC9C0\uD558\uB85C \uAC00\uB294 \uACC4\uB2E8\uC744 \uCC3E\uC544."]},{name:"\uC784\uC120\uC544",x:9,y:5,o:{girl:!0,hairColor:2759186},lines:["\uBCF5\uB3C4\uC5D0\uC120 \uC808\uB300 \uC18C\uB9AC \uB0B4\uC9C0 \uB9C8. 3\uBC18\uC774\u2026 \uC804\uBD80 \uBCBD\uC5D0 \uADF8\uB824\uC838 \uC788\uC5C8\uC5B4.","\uAC54\uD55C\uD14C \uCAD3\uAE30\uBA74 \uBB50\uB4E0 \uB358\uC838. \uC18C\uB9AC \uB098\uB294 \uCABD\uC73C\uB85C \uAC00\uB2C8\uAE4C."]},{name:"\uCD5C\uC6D0\uADE0",x:3,y:7,o:{},big:!0,lines:["\uB098, \uB098\uB294 \uC5EC\uAE30\uC11C \uC548 \uB098\uAC08 \uAC70\uC57C\u2026","\uC544\uAE4C \uBCF5\uB3C4\uC5D0\uC11C \uBAA9\uC18C\uB9AC \uB4E4\uB838\uC5B4. \uC0AC\uB78C \uBAA9\uC18C\uB9AC\uC600\uB294\uB370\u2026 \uC0AC\uB78C \uC544\uB2C8\uC5C8\uB358 \uAC83 \uAC19\uC544."]},{name:"\uC804\uC11D\uC624",x:11,y:3,o:{},lines:["\uD654\uC7A5\uC2E4 \uAC70\uC6B8 \uBCF4\uC9C0 \uB9C8. \uAC70\uC6B8 \uC18D \uC560\uB4E4\uC774 \uC6B0\uB9AC\uBCF4\uB2E4 \uB2A6\uAC8C \uC6C0\uC9C1\uC600\uC5B4.","\uAD34\uBB3C\uC774\uB4E0 \uBB50\uB4E0 \uB2E4 \uAC19\uC774 \uB36E\uCE58\uBA74 \uC774\uAE38 \uC218 \uC788\uC744 \uC904 \uC54C\uC558\uB294\uB370\u2026"]},{name:"\uD55C\uC218\uC9C4",x:9,y:7,o:{girl:!0,hairColor:3810328},lines:["\uAD34\uBB3C\uB4E4\uC740 \uB2E4 \uAD50\uCE59\uC774\uB791 \uAD00\uB828 \uC788\uB294 \uAC83 \uAC19\uC544. \uAD50\uCE59\uB9CC \uC9C0\uD0A4\uBA74 \uC0B4 \uC218 \uC788\uC5B4.","\uAD6D\uC5B4\uCC45 \uAD34\uBB3C\uC740 \uAD50\uC2E4 \uC548\uAE4C\uC9C0\uB294 \uC548 \uB4E4\uC5B4\uC640. \uC218\uC5C5 \uC2DC\uAC04\uC5D4 \uBB34\uC870\uAC74 \uC5EC\uAE30 \uC788\uC5B4."]}],B=1.2,Ze=3,de=58,Pe=27,os=0,Rn=1,Qh=3,jl=4,Lo=5,jh=6,Xl=7,ql=8,Mn=new Uint8Array(de*Pe).fill(Rn),Ds=new Uint8Array(de*Pe),Vt=(n,t)=>t*de+n,tc=(n,t)=>n<0||t<0||n>=de||t>=Pe?Rn:Mn[Vt(n,t)],gn=(n,t)=>n<0||t<0||n>=de||t>=Pe?0:Ds[Vt(n,t)];function Gi(n,t,e,i,s){for(let r=t;r<=i;r++)for(let o=n;o<=e;o++)Mn[Vt(o,r)]=os,Ds[Vt(o,r)]=s}var Ry=["\uBCF5\uB3C4","1-4","\uD654\uC7A5\uC2E4","1-3","\uAD50\uBB34\uC2E4","\uACC4\uB2E8","\uCCB4\uC721\uAD00","\uACFC\uD559\uC2E4","\uB3C4\uC11C\uC2E4"];Gi(1,11,56,14,0);Gi(1,1,13,9,1);Gi(15,1,22,9,2);Gi(24,1,35,9,3);Gi(37,1,46,9,4);Gi(48,1,56,9,5);Gi(1,16,16,25,6);Gi(18,16,34,25,7);Gi(36,16,56,25,8);var mp=[[7,10,1],[18,10,2],[29,10,3],[41,10,4],[8,15,6],[26,15,7],[46,15,8]];for(let[n,t]of mp)Mn[Vt(n,t)]=Qh;Mn[Vt(52,10)]=jl;for(let n=16;n<=21;n++)Mn[Vt(n,0)]=Xl;for(let n=51;n<=53;n++)for(let t=2;t<=3;t++)Mn[Vt(n,t)]=Lo;var wr=[[3,3],[5,3],[9,3],[11,3],[3,5],[5,5],[9,5],[11,5],[3,7],[5,7],[9,7],[11,7],[6,2],[7,2],[8,2],[26,3],[29,3],[32,3],[26,6],[32,6],[39,3],[40,3],[43,3],[44,3],[39,6],[40,6],[43,6],[44,6],[2,24],[20,18],[21,18],[22,18],[26,18],[27,18],[28,18],[31,18],[32,18],[20,22],[21,22],[22,22],[26,22],[27,22],[28,22],[31,22],[32,22]];for(let n of[18,21,24]){for(let t=38;t<=44;t++)wr.push([t,n]);for(let t=48;t<=54;t++)wr.push([t,n])}for(let n=5;n<=9;n++)for(let t of[21,22])wr.push([t,n]);for(let[n,t]of wr)Mn[Vt(n,t)]=ql;var Oo=[[4,11],[11,11],[21,11],[33,11],[45,11],[13,14],[20,14],[31,14],[39,14],[53,14]].map(([n,t])=>[n,t,0,t===11?1:-1]);for(let[n,t]of Oo)Mn[Vt(n,t)]=jh;var Ps=!1,ii=(n,t)=>{let e=tc(n,t);return e===Rn||e===ql||e===jh||e===Xl||e===jl&&!Ps},gp=(n,t)=>!ii(n,t)&&gn(n,t)!==1,Yl={n2:[16.5,8.5],n3:[28.5,1.6],n4:[45.5,2.5],n5:[33.5,24.5],n6:[55.5,16.5]},Cy=[8.5,25.3],Ar=[38.5,8.3],tp=[8.5,21.5],Py=[[2.5,13.6],[23.5,13.6],[47.5,11.5]],Ae={notes:["n1"],rules:[],deaths:0,clears:0,best:0},yi=localStorage.getItem("hor_tok")||"",tu="";try{let n=JSON.parse(localStorage.getItem("hor_save")||"null");n&&(Ae=Object.assign(Ae,n))}catch{}var ep=n=>[...new Set(n)],Iy=(n,t)=>({notes:ep([...n.notes||[],...t.notes||[]]),rules:ep([...n.rules||[],...t.rules||[]]),deaths:Math.max(n.deaths||0,t.deaths||0),clears:Math.max(n.clears||0,t.clears||0),best:[n.best,t.best].filter(e=>e>0).sort((e,i)=>e-i)[0]||0}),np=0;function ec(){localStorage.setItem("hor_save",JSON.stringify(Ae)),yi&&(clearTimeout(np),np=setTimeout(()=>eu("/api/horror/save",{save:Ae}).catch(()=>{}),800))}async function eu(n,t){let e=await fetch(wy+n,{method:t?"POST":"GET",headers:Object.assign({"Content-Type":"application/json"},yi?{Authorization:"Bearer "+yi}:{}),body:t?JSON.stringify(t):void 0}),i=await e.json().catch(()=>({}));if(!e.ok){let s=new Error(i.error||"http_"+e.status);throw s.status=e.status,s}return i}async function xp(){let n=await eu("/api/horror/save");tu=n.nick||"",n.save&&(Ae=Iy(Ae,n.save)),ec()}var Pt=n=>document.getElementById(n),Ni=Pt("cv"),_i=new Pl({canvas:Ni,antialias:!0,powerPreference:"high-performance"});_i.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));_i.shadowMap.enabled=!0;_i.shadowMap.type=Ss;_i.toneMapping=co;_i.toneMappingExposure=1.15;var It=new Xr;It.background=new qt(0);It.fog=new Wr(658189,.022);var we=new Qe(72,1,.04,70);It.add(we);function nu(){_i.setSize(innerWidth,innerHeight,!1),we.aspect=innerWidth/innerHeight,we.fov=innerWidth<innerHeight?80:70,we.updateProjectionMatrix()}addEventListener("resize",nu);nu();It.add(new so(12107980,3814444,1.5));It.add(new lo(10133672,.55));var Ly=new Set(It.children),Vn=new ao(16773334,30,22,.6,.6,1.6);Vn.position.set(.1,-.13,-.5);Vn.castShadow=!0;Vn.shadow.mapSize.set(1024,1024);Vn.shadow.camera.near=.15;Vn.shadow.camera.far=22;Vn.shadow.bias=-8e-4;we.add(Vn);Vn.target.position.set(0,-.8,-6);we.add(Vn.target);var Hh=new Nt,Dy=new On(16770760,.5,3.2,2);we.add(Dy);var Jt=n=>new ji(n),Ny=Jt({map:Ch(),roughness:.85}),Ui={vinyl:Jt({map:Nl(),roughness:.55}),vinylWarm:Jt({map:Nl(),color:14207152,roughness:.6}),vinylCold:Jt({map:Nl(),color:11584712,roughness:.5}),wood:Jt({map:Ph(),roughness:.6}),woodDark:Jt({map:Ph(),color:10125424,roughness:.7}),tile:Jt({map:Ih(),roughness:.25}),gym:Jt({map:If(),roughness:.35})},_p=(n,t)=>{let e=tc(n,t);return e===Qh||e===jl?"vinyl":["vinyl","wood","tile","wood","vinylWarm","vinyl","gym","vinylCold","woodDark"][gn(n,t)]},ls={walls:[]};for(let n in Ui)ls[n]=[];var cs=(n,t,e,i)=>(n.translate(t,e,i),n);for(let n=0;n<Pe;n++)for(let t=0;t<de;t++){let e=Mn[Vt(t,n)],i=(t+.5)*B,s=(n+.5)*B;if(e===Rn){let r=!1;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){let c=tc(t+l,n+o);c!==Rn&&c!==Xl&&(r=!0)}r&&ls.walls.push(cs(new te(B,Ze,B),i,Ze/2,s));continue}if(e===Xl){ls.walls.push(cs(new te(B,1,B),i,.5,s)),ls.walls.push(cs(new te(B,.75,B),i,Ze-.375,s));continue}if(e!==Lo){let r=new ge(B,B);r.rotateX(-Math.PI/2),ls[_p(t,n)].push(cs(r,i,0,s))}(e===Qh||e===jl)&&ls.walls.push(cs(new te(B,.75,B),i,Ze-.375,s))}var yp=(n,t,e=!0)=>{if(!n.length)return;let i=new Ct(Dl(n),t);return i.receiveShadow=!0,i.castShadow=e,It.add(i),i};yp(ls.walls,Ny);for(let n in Ui)yp(ls[n],Ui[n],!1);{let n=Ul();n.repeat.set(de,Pe);let t=new Ct(new ge(de*B,Pe*B),Jt({map:n,roughness:.95}));t.rotation.x=Math.PI/2,t.position.set(de*B/2,Ze,Pe*B/2),t.receiveShadow=!0,It.add(t)}var iu=new Nt;It.add(iu);var zn=(n,t,e,i=0,s=0)=>(n.position.set(t*B,s,e*B),n.rotation.y=i,n.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),iu.add(n),n);function vp(n,t=It){n.updateMatrixWorld(!0);let e=new Map,i=[];n.traverse(s=>{if(!s.isMesh)return;if(Array.isArray(s.material)||s.isInstancedMesh){i.push(s);return}let r=s.geometry.clone().applyMatrix4(s.matrixWorld);r.index&&(r=r.toNonIndexed());for(let l of Object.keys(r.attributes))["position","normal","uv"].includes(l)||r.deleteAttribute(l);if(!r.attributes.uv)return;e.has(s.material)||e.set(s.material,{list:[],cast:!1});let o=e.get(s.material);o.list.push(r),o.cast=o.cast||s.castShadow});for(let s of i){let r=s.matrixWorld.clone();s.removeFromParent(),r.decompose(s.position,s.quaternion,s.scale),t.add(s)}for(let[s,r]of e){let o=new Ct(Dl(r.list),s);o.castShadow=r.cast,o.receiveShadow=!0,t.add(o)}n.removeFromParent()}for(let[n,t]of wr){let e=gn(n,t),i=n+.5,s=t+.5;if(e===1&&t!==2)zn(Ol(),i,s-.15);else if(e===3){let r=zn(Ol(),i,s,(Math.random()-.5)*2.4);Math.random()<.4&&(r.rotation.z=Math.PI/2,r.position.y=.36)}else e===4?zn(Yf(),i,s,t===3?0:Math.PI):e===6?zn(Vf(),i,s,.3):e===7?zn(Zf(),i,s):e===8&&zn(Jf(),i,s)}zn(qf(),7.5,2.5);{let n=ae(512,640,(e,i,s)=>{e.clearRect(0,0,i,s),e.strokeStyle="rgba(240,240,240,.8)",e.lineWidth=5,e.strokeRect(10,10,i-20,s-20),e.beginPath(),e.moveTo(10,s/2),e.lineTo(i-10,s/2),e.stroke(),e.beginPath(),e.arc(i/2,s/2,60,0,7),e.stroke();for(let r of[10,s-10])e.beginPath(),e.arc(i/2,r,140,r<s/2?0:Math.PI,r<s/2?Math.PI:7),e.stroke()}),t=new Ct(new ge(15*B,9.6*B),Jt({map:n,transparent:!0,depthWrite:!1,roughness:.4}));t.rotation.x=-Math.PI/2,t.position.set(9*B,.005,21*B),It.add(t)}zn(kh(),8.5,16.08);zn(kh(),8.5,25.92,Math.PI);zn(Wf(),Ar[0],Ar[1]+.3);{let n=new Ct(new ys(.9,24),Jt({map:ae(256,256,(t,e,i)=>{t.clearRect(0,0,e,i);for(let s=0;s<30;s++){let r=t.createRadialGradient(128+(Math.random()-.5)*120,128+(Math.random()-.5)*120,0,128,128,30+Math.random()*40);r.addColorStop(0,"rgba(70,5,5,.7)"),r.addColorStop(1,"rgba(70,5,5,0)"),t.fillStyle=r,t.fillRect(0,0,e,i)}}),transparent:!0,depthWrite:!1,roughness:.2}));n.rotation.x=-Math.PI/2,n.position.set(7.5*B,.004,12.2*B),It.add(n)}{let n=wr.filter(([a,h])=>gn(a,h)===8),t=n.length*4*2*22,e=new Jr(new te(1,1,1),Jt({map:Ef(),roughness:.8}),t),i=new me,s=new En,r=new Kn,o=new qt,l=0,c=[8006186,2768746,3103290,6969898,4860506,9075306,2039583,10111530];for(let[a,h]of n)for(let u=0;u<4;u++)for(let d of[-1,1]){let m=-.55;for(;m<.53&&l<t;){let g=.025+Math.random()*.04,y=.2+Math.random()*.14;if(Math.random()<.06){m+=.08;continue}let f=Math.random()<.05?.25:0;r.set(0,0,f),s.setFromEuler(r),i.compose(new k((a+.5)*B+m+g/2,.1+u*.48+y/2,(h+.5)*B+d*.16),s,new k(g,y,.2)),e.setMatrixAt(l,i),e.setColorAt(l,o.setHex(c[Math.random()*c.length|0]).multiplyScalar(.7+Math.random()*.4)),l++,m+=g+.002}}e.count=l,e.castShadow=!0,e.receiveShadow=!0,It.add(e)}for(let[n,t]of Oo)zn(Gh(),n+.5,t===11?11+.25:15-.25,t===11?0:Math.PI);{let n=new Ct(new ge(9*B,1.25),Jt({map:bf("\uC885\uC774 \uC6B8\uB9AC\uBA74 \uBC18\uB4DC\uC2DC \uC790\uB9AC\uC5D0 \uC549\uC744 \uAC83"),roughness:.9}));n.position.set(7.5*B,1.7,B+.025),n.receiveShadow=!0,It.add(n);let t=Jt({color:5914664,roughness:.7}),e=new Ct(new te(9*B,.04,.1),t);e.position.set(7.5*B,1.07,B+.06),It.add(e);let i=new Ct(new te(9*B+.1,.06,.06),t);i.position.set(7.5*B,2.35,B+.03),It.add(i);let s=new Ct(new ys(.17,32),Jt({map:ae(128,128,r=>{r.fillStyle="#eee",r.beginPath(),r.arc(64,64,62,0,7),r.fill(),r.strokeStyle="#222",r.lineWidth=5,r.stroke(),r.lineWidth=4,r.beginPath(),r.moveTo(64,64),r.lineTo(64,22),r.moveTo(64,64),r.lineTo(92,74),r.stroke();for(let o=0;o<12;o++){let l=o/12*6.283;r.fillStyle="#222",r.fillRect(64+Math.cos(l)*52-2,64+Math.sin(l)*52-2,4,4)}}),roughness:.4}));s.position.set(7.5*B,2.65,B+.02),It.add(s)}for(let[n,t,e]of[[25.5,11,0],[42.5,15,Math.PI],[5,15,Math.PI]]){let i=new Ct(new ge(2.2,1),Jt({map:Tf(),roughness:.9}));i.position.set(n*B,1.55,t*B+(e?-.02:.02)),i.rotation.y=e,It.add(i)}for(let[n,t,e]of[[15.5,11,0],[34.5,11,0],[17.5,15,Math.PI],[35.5,15,Math.PI]])zn(Qf(),n,t+(e?-.1:.1),e,0);vp(iu);var Uy=Jt({color:4863008,roughness:.7});for(let[n,t,e]of mp){let i=(t+(t===10?1:0))*B,s=t===10?1:-1;for(let c of[0,1]){let a=new Ct(new te(.07,2.25,B+.04),Uy);a.position.set((n+c)*B+(c?-.035:.035),1.125,(t+.5)*B),a.receiveShadow=!0,It.add(a)}let r=new Ct(new te(.95,2.1,.04),vt.doorWood());r.position.set((n+1)*B+.5,1.07,i+s*.03),r.castShadow=r.receiveShadow=!0,It.add(r);let o=new Ct(new ge(.5,.6),Jt({color:658448,roughness:.1,metalness:.3}));o.position.set((n+1)*B+.5,1.6,i+s*.052),s<0&&(o.rotation.y=Math.PI),It.add(o);let l=new Ct(new ge(.5,.19),Jt({map:Lh(Ry[e]),roughness:.7,side:qe}));l.position.set(n*B+.05,2.5,i+s*.27),l.rotation.y=Math.PI/2,It.add(l)}var si=new Ct(new te(B-.04,2.25,.07),Jt({map:rs("#4b5a50"),metalness:.6,roughness:.45}));si.position.set(52.5*B,1.125,10.5*B+.3);si.castShadow=si.receiveShadow=!0;It.add(si);{let n=new Ct(new te(.8,.05,.06),vt.steel());n.position.set(0,0,.06),si.add(n)}{let n=new Ct(new te(.62,.23,.06),[0,0,0,0,0,0].map((e,i)=>i===4?new Fn({map:Dh()}):Jt({color:14540253})));n.position.set(52.5*B,2.6,11*B+.05),It.add(n);let t=new On(3211136,.25,2,2);t.position.set(52.5*B,2.45,11*B+.3),It.add(t)}{let n=new Ct(new ge(.5,.19),Jt({map:Lh("\uC9C0\uD558","#7a1515","#fff"),roughness:.7,side:qe}));n.position.set(52*B+.05,2.5,11*B+.27),n.rotation.y=Math.PI/2,It.add(n)}{let n=Jt({map:rs("#6c6a64"),roughness:.8}),t=Jt({color:657930,roughness:1});for(let i=0;i<9;i++){let s=new Ct(new te(3*B,.18,.3),n);s.position.set(52.5*B,-.09-.18*i,4*B-.15-i*.3),s.receiveShadow=!0,It.add(s)}for(let i of[51,54]){let s=new Ct(new te(.05,2,2.4),t);s.position.set(i*B,-1,3*B),It.add(s)}let e=new Ct(new te(3*B,2,.05),t);e.position.set(52.5*B,-1,2*B),It.add(e)}var Mp=Jt({color:13421772,emissive:15659775,emissiveIntensity:1.4}),su=Jt({color:1911,emissive:546,emissiveIntensity:.1,roughness:.4}),Sp=new te(1.2,.05,.28),bp=[],Tp=[];for(let n=3;n<56;n+=4){let t=n===11||n===31||n===47,e=new Ct(Sp,t?Mp.clone():su);if(e.position.set(n*B,Ze-.03,12.5*B),It.add(e),t){let i=new On(14674175,5,9,2);i.position.set(n*B,Ze-.25,12.5*B),It.add(i),bp.push({l:e,p:i,base:5,t:Math.random()*5})}}for(let[n,t]of[[4,3.5],[11,3.5],[4,7],[11,7]]){let e=new Ct(Sp,su.clone());e.position.set(n*B,Ze-.03,t*B),It.add(e),Tp.push(e)}var Zl=new On(16773853,0,14,1.6);Zl.position.set(7.5*B,2.6,5.5*B);It.add(Zl);function Ep(n,t){let e=$f(6*B-.1);e.position.set(19*B,0,B),n.add(e);for(let i=0;i<3;i++){let s=Kf();s.position.set(22*B-.05,0,5*B+.95+i*1.95),s.rotation.y=-Math.PI/2,n.add(s)}if(t){let i=Ih();i.repeat.set(8,9);let s=new Ct(new ge(8*B,9*B),Jt({map:i,roughness:.25}));s.rotation.x=-Math.PI/2,s.position.set(19*B,.001,5.5*B),s.receiveShadow=!0,n.add(s);let r=Ul();r.repeat.set(8,9);let o=new Ct(new ge(8*B,9*B),Jt({map:r,roughness:.95}));o.rotation.x=Math.PI/2,o.position.set(19*B,Ze,5.5*B),n.add(o);let l=d=>{let m=Ch();return m.repeat.set(d,1),Jt({map:m,roughness:.85})},c=new Ct(new ge(9*B,Ze),l(9));c.position.set(15*B,Ze/2,5.5*B),c.rotation.y=Math.PI/2,n.add(c);let a=c.clone();a.position.x=23*B,a.rotation.y=-Math.PI/2,n.add(a);let h=new Ct(new ge(8*B,Ze),l(8));h.position.set(19*B,Ze/2,10*B),h.rotation.y=Math.PI,n.add(h);let u=new Ct(new ge(B,2.25),new Fn({color:0}));u.position.set(18.5*B,1.125,10*B-.01),u.rotation.y=Math.PI,n.add(u),n.traverse(d=>{d.isMesh&&(d.receiveShadow=!0)})}}Ep(It,!1);var nc=new Nt;nc.position.z=2*B;nc.scale.z=-1;It.add(nc);Ep(nc,!0);var Fy=Rf(),Oy=new no({color:10466496,roughness:.04,metalness:.1,transparent:!0,opacity:.16}),ru=new Ct(new ge(6*B,1.25),Oy);ru.position.set(19*B,1.625,B+.002);It.add(ru);var Rr=new Ct(new ge(6*B,1.25),new Fn({map:Fy,transparent:!0,depthWrite:!1}));Rr.position.set(19*B,1.625,B+.004);Rr.visible=!1;It.add(Rr);{let n=vt.steel();for(let[t,e,i,s]of[[6*B+.06,.03,19*B,2.25],[6*B+.06,.03,19*B,1],[.03,1.25,16*B,1.625],[.03,1.25,22*B,1.625]]){let r=new Ct(new te(t,e,.03),n);r.position.set(i,s,B+.01),It.add(r)}}var ei=wo();It.add(ei);ei.visible=!1;var ou=new Nt;It.add(ou);var By=[[25.5,1,0],[27.3,1,0],[30.5,1,0],[32.4,1,0],[34.4,1,0],[24,4,3],[24,7.5,3],[36,3,2],[36,6.5,2],[26.5,10,1],[32,10,1],[27.3,11,0],[31,11,0],[36.5,11,0],[24,15,1],[29,15,1]],ip=[[38.5,11,0],[43,15,1],[50,15,1],[55.5,15,1]],vr={};function sp(n,t,e,i){let s=new Ct(new ge(.95,1.5),Jt({map:n,transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),r=e*B;s.position.set(t*B,.42+.75+(Math.random()-.5)*.15,i===0?r+.012:i===1?r-.012:r),i===1&&(s.rotation.y=Math.PI),i===2&&(s.rotation.y=-Math.PI/2,s.position.x=t*B-.012),i===3&&(s.rotation.y=Math.PI/2,s.position.x=t*B+.012),s.rotation.z=(Math.random()-.5)*.12,ou.add(s)}function ky(){ou.clear(),By.forEach(([n,t,e],i)=>sp(vr[i]||(vr[i]=bo(i+1,!1)),n,t,e));for(let n=0;n<Math.min(ip.length,Ae.folds||0);n++){let[t,e,i]=ip[n];sp(vr["me"+n]||(vr["me"+n]=bo(100+n,!0)),t,e,i)}}var Vh="";function zy(){return Vh||(Vh=bo(7,!0).image.toDataURL()),Vh}var Bs={};for(let n in Yl){let[t,e]=Yl[n],i=new Ct(new ge(.21,.28),Jt({map:Fl(),roughness:.9,emissive:2762776,side:qe}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*3,i.position.set(t*B,.006,e*B),i.receiveShadow=!0,It.add(i),Bs[n]=i}var Do=jf();It.add(Do);var au=[],Cr=new Ct(new te(.5,.07,.38),Jt({map:To(),roughness:.8}));Cr.position.set(Ar[0]*B,.45,(Ar[1]+.3)*B);Cr.rotation.y=.2;It.add(Cr);var wp=Py.map(([n,t])=>{let e=Xf();return e.position.set(n*B,0,t*B),e.rotation.y=Math.random()*3,e.userData.x=n,e.userData.y=t,It.add(e),e});for(let n of Ay){let t=wo(n.o);n.big&&t.scale.set(1.12,1.03,1.12);let e=(n.y+.5-.15)*B+.42;t.position.set((n.x+.5)*B,0,e),t.rotation.y=Math.PI,Bf(t),t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),It.add(t),au.push({model:t,px:n.x+.5,py:n.y+.85,name:n.name,lines:n.lines,i:0})}var ic=new Nt;for(let n of It.children.slice())Ly.has(n)||ic.add(n);It.add(ic);var lu={depth:0,T:Mn,RM:Ds,LOCKERS:Oo,start:[7.5,8.5],group:ic},Sr={},Gy=n=>{let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}},Hy=Jt({map:Df(),roughness:.9}),Ap=Jt({map:Nf(),roughness:.95}),Vy=Jt({map:Uf(),roughness:.6});function Wy(n){if(Sr[n])return Sr[n];let t=Gy(n*7919+13),e=new Uint8Array(de*Pe).fill(Rn),i=new Uint8Array(de*Pe),s=[];for(let b=0;b<400&&s.length<14;b++){let C=4+(t()*8|0),D=3+(t()*5|0),F=1+(t()*(de-C-2)|0),Q=1+(t()*(Pe-D-2)|0);s.some(H=>F<H.x+H.w+2&&F+C+2>H.x&&Q<H.y+H.h+2&&Q+D+2>H.y)||s.push({x:F,y:Q,w:C,h:D})}s.forEach((b,C)=>{b.type=C<3?1:C===3||C===7?3:0;for(let D=b.y;D<b.y+b.h;D++)for(let F=b.x;F<b.x+b.w;F++)e[Vt(F,D)]=os,i[Vt(F,D)]=b.type});let r=b=>b.x+(b.w>>1),o=b=>b.y+(b.h>>1),l=(b,C)=>{if(b<1||C<1||b>=de-1||C>=Pe-1)return;let D=Vt(b,C);e[D]===Rn&&(e[D]=os,i[D]=0)},c=(b,C)=>{let D=r(b),F=o(b),Q=r(C),H=o(C),Z=t()<.5?2:3,et=()=>{for(;D!==Q;){for(let At=0;At<Z;At++)l(D,F+At);D+=Math.sign(Q-D)}},Mt=()=>{for(;F!==H;){for(let At=0;At<Z;At++)l(D+At,F);F+=Math.sign(H-F)}};t()<.5?(et(),Mt()):(Mt(),et());for(let At=0;At<Z;At++)for(let $=0;$<Z;$++)l(D+At,F+$)};for(let b=1;b<s.length;b++){let C=0,D=1e9;for(let F=0;F<b;F++){let Q=Math.hypot(r(s[b])-r(s[F]),o(s[b])-o(s[F]));Q<D&&(D=Q,C=F)}c(s[b],s[C])}for(let b=0;b<4;b++){let C=s[t()*s.length|0],D=s[t()*s.length|0];C!==D&&c(C,D)}for(let b of s){if(b.type===0&&b.w>=7&&b.h>=5)for(let C=b.y+2;C<b.y+b.h-2;C+=3)for(let D=b.x+2;D<b.x+b.w-2;D+=3)e[Vt(D,C)]=Rn;if(b.type===1&&b.w>=6&&b.h>=5)for(let C=b.y+1;C<b.y+b.h-1;C+=2)for(let D=b.x+1;D<b.x+b.w-1;D+=2)e[Vt(D,C)]=ql}let a=[s[0].x+(s[0].w>>1)+.5,s[0].y+s[0].h-.5],h=[Mn,Ds];Mn=e,Ds=i;let u=new Int32Array(de*Pe).fill(-1),d=[Vt(s[0].x,s[0].y)];u[d[0]]=0;for(let b=0;b<d.length;b++){let C=d[b],D=C%de,F=C/de|0;for(let[Q,H]of[[1,0],[-1,0],[0,1],[0,-1]]){let Z=Vt(D+Q,F+H);ii(D+Q,F+H)||u[Z]>=0||(u[Z]=u[C]+1,d.push(Z))}}let m=s.slice(1).filter(b=>b.type!==1&&u[Vt(r(b),o(b))]>0).sort((b,C)=>u[Vt(r(C),o(C))]-u[Vt(r(b),o(b))]),g=m[0]||s[s.length-1],y=m[1]||s[1],f=[r(g),o(g)];for(let b=f[1];b<=f[1]+1;b++)for(let C=f[0];C<=f[0]+1;C++)C<g.x+g.w&&b<g.y+g.h&&(e[Vt(C,b)]=Lo);let p=[r(y),y.y],M=[];for(let b=0;b<400&&M.length<7;b++){let C=2+(t()*(de-4)|0),D=2+(t()*(Pe-4)|0);if(e[Vt(C,D)]!==os||i[Vt(C,D)]!==0)continue;let F=e[Vt(C,D-1)]===Rn,Q=e[Vt(C,D+1)]===Rn;if(F===Q||e[Vt(C-1,D)]!==os||e[Vt(C+1,D)]!==os)continue;let H=F?1:-1;e[Vt(C,D+H)]!==os||e[Vt(C,D+2*H)]!==os||(e[Vt(C,D)]=jh,M.push([C,D,0,H]))}let R=[];for(let b=0;b<Pe;b++)for(let C=0;C<de;C++)!ii(C,b)&&i[Vt(C,b)]===0&&u[Vt(C,b)]>12&&R.push([C+.5,b+.5]);Mn=h[0],Ds=h[1];let S=new Nt;S.visible=!1,It.add(S);let A=[],w={carpet:[],wood:[],woodDark:[]},x=[];for(let b=0;b<Pe;b++)for(let C=0;C<de;C++){let D=e[Vt(C,b)],F=(C+.5)*B,Q=(b+.5)*B;if(D===Rn){let H=!1;for(let Z=-1;Z<=1;Z++)for(let et=-1;et<=1;et++){let Mt=C+et,At=b+Z;Mt>=0&&At>=0&&Mt<de&&At<Pe&&e[Vt(Mt,At)]!==Rn&&(H=!0)}H&&A.push(cs(new te(B,Ze,B),F,Ze/2,Q));continue}if(D!==Lo){let H=new ge(B,B);H.rotateX(-Math.PI/2),w[i[Vt(C,b)]===1?"wood":i[Vt(C,b)]===3?"woodDark":"carpet"].push(cs(H,F,0,Q))}C%3===1&&b%3===1&&x.push(cs(new te(1.1,.05,.5),F,Ze-.03,Q))}let T=(b,C,D=!0)=>{if(!b.length)return null;let F=new Ct(Dl(b),C);return F.receiveShadow=!0,F.castShadow=D,S.add(F),F};T(A,Hy),T(w.carpet,Ap,!1),T(w.wood,Ui.wood,!1),T(w.woodDark,Ui.woodDark,!1);let N=Jt({color:15658717,emissive:16052424,emissiveIntensity:1.2});T(x,N,!1);{let b=Ul();b.repeat.set(de,Pe);let C=new Ct(new ge(de*B,Pe*B),Jt({map:b,color:14210224,roughness:.95}));C.rotation.x=Math.PI/2,C.position.set(de*B/2,Ze,Pe*B/2),S.add(C)}let P=new Nt;S.add(P);for(let b=0;b<Pe;b++)for(let C=0;C<de;C++)if(e[Vt(C,b)]===ql){let D=Ol();D.position.set((C+.5)*B,0,(b+.35)*B),t()<.25&&(D.rotation.z=Math.PI/2,D.position.y=.36),D.rotation.y=(t()-.5)*.6,P.add(D)}for(let[b,C,,D]of M){let F=Gh();F.position.set((b+.5)*B,0,(C+(D>0?.25:.75))*B),F.rotation.y=D>0?0:Math.PI,P.add(F)}vp(P,S);{let b=Jt({map:rs("#6c6a64"),roughness:.8}),C=Jt({color:328965,roughness:1});for(let H=0;H<7;H++){let Z=new Ct(new te(2*B,.18,.32),b);Z.position.set((f[0]+1)*B,-.09-.18*H,(f[1]+2)*B-.16-.32*H),S.add(Z)}let D=new Ct(new te(2*B,.02,2*B),C);D.position.set((f[0]+1)*B,-1.4,(f[1]+1)*B),S.add(D);let F=new Ct(new te(.62,.23,.06),[0,0,0,0,0,0].map((H,Z)=>Z===4||Z===5?new Fn({map:Dh()}):Jt({color:14540253})));F.position.set((f[0]+1)*B,2.55,(f[1]+1)*B),S.add(F);let Q=new On(3211136,1.2,4,2);Q.position.set((f[0]+1)*B,2.2,(f[1]+1)*B),S.add(Q)}{let b=new Ct(new ge(1,2.1),Vy);b.position.set((p[0]+.5)*B,1.05,p[1]*B+.012),S.add(b);let C=new On(16724e3,1,4,2);C.position.set((p[0]+.5)*B,2.2,p[1]*B+.6),S.add(C)}let U=[];for(let b of s.filter(C=>C.type===3))for(let C=b.x;C<b.x+b.w;C+=2)e[Vt(C,b.y-1)]===Rn&&U.push([C+.5,b.y,0]);U.slice(0,10).forEach(([b,C,D],F)=>{let Q=new Ct(new ge(.95,1.5),Jt({map:vr[F]||(vr[F]=bo(F+1,!1)),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));Q.position.set(b*B,1.15,C*B+.012),Q.rotation.z=(t()-.5)*.15,S.add(Q)});let z=[];for(let b=0;b<Math.min(5,x.length);b++){let C=t()*x.length|0,D=x[C].boundingBox||(x[C].computeBoundingBox(),x[C].boundingBox),F=new k;D.getCenter(F);let Q=new On(16773824,4,10,2);Q.position.set(F.x,Ze-.3,F.z),S.add(Q),z.push({p:Q,base:4,t:t()*4,l:null})}let X={depth:n,T:e,RM:i,LOCKERS:M,start:a,group:S,spawn:R,stair:f,door:p,flick:z};return Sr[n]=X,X}var Je=0,Bi=lu,Wh=!1;function Rp(n){Mn=n.T,Ds=n.RM,Oo=n.LOCKERS,ic.visible=n===lu;for(let t in Sr)Sr[t].group.visible=Sr[t]===n;Bi=n,Je=n.depth,It.fog.color.set(Je?1315852:658189)}var Cp=n=>n===0?"1\uCE35":"\uC9C0\uD558 "+n+"\uCE35";function Zh(){Wh||(Wh=!0,No(0),Uo(null),Pt("fade").classList.add("show"),Le(1.2,.5,150,0,1),setTimeout(()=>{let n=Wy(Je+1);Rp(n),Ae.deep=Math.max(Ae.deep||0,Je),ec(),Bo(!0),Pt("floorBig").textContent=Cp(Je),Pt("floorBig").classList.add("show"),setTimeout(()=>{Pt("fade").classList.remove("show"),Wh=!1},400),setTimeout(()=>Pt("floorBig").classList.remove("show"),2600)},700))}var tn={},en=0,hs=0;addEventListener("keydown",n=>{let t=n.key.toLowerCase();tn[t]=!0,t==="c"&&Dp(),t==="e"&&kp(),(t==="f"||t==="q")&&du()});addEventListener("keyup",n=>{tn[n.key.toLowerCase()]=!1});var ze={id:null,ox:0,oy:0,x:0,y:0},cu=new Map;Ni.addEventListener("pointerdown",n=>{if(ks(),n.pointerType==="mouse"){ki&&!sc()&&!document.pointerLockElement&&Ni.requestPointerLock&&Ni.requestPointerLock();return}ze.id===null&&n.clientX<innerWidth*.45?(ze.id=n.pointerId,ze.ox=n.clientX,ze.oy=n.clientY,ze.x=ze.y=0):cu.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ni.setPointerCapture(n.pointerId)});Ni.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"){document.pointerLockElement===Ni&&rp(n.movementX*.0024,n.movementY*.0024);return}if(n.pointerId===ze.id){let e=n.clientX-ze.ox,i=n.clientY-ze.oy,s=Math.hypot(e,i),r=55;s>r&&(e*=r/s,i*=r/s),ze.x=e/r,ze.y=i/r;return}let t=cu.get(n.pointerId);t&&(rp((n.clientX-t.x)*.0055,(n.clientY-t.y)*.0055),t.x=n.clientX,t.y=n.clientY)});var Pp=n=>{n.pointerId===ze.id&&(ze.id=null,ze.x=ze.y=0),cu.delete(n.pointerId)};Ni.addEventListener("pointerup",Pp);Ni.addEventListener("pointercancel",Pp);function rp(n,t){!ki||!Hn||he||(en-=n,hs=Math.max(-1.2,Math.min(1.2,hs-t)))}var hu=!1,gi=!1,br=Pt("runB"),Ip=Pt("sneakB"),Jh=Pt("hideB");br.addEventListener("pointerdown",n=>{n.preventDefault(),ks(),hu=!0,br.classList.add("on"),br.setPointerCapture(n.pointerId)});var Lp=()=>{hu=!1,br.classList.remove("on")};br.addEventListener("pointerup",Lp);br.addEventListener("pointercancel",Lp);function Dp(){gi=!gi,Ip.classList.toggle("on",gi)}Ip.addEventListener("pointerdown",n=>{n.preventDefault(),ks(),Dp()});Jh.addEventListener("pointerdown",n=>{n.preventDefault(),kp()});Pt("throwB").addEventListener("pointerdown",n=>{n.preventDefault(),du()});var op=0;function je(n,t=2400){let e=Pt("toast");e.innerHTML=n,e.style.opacity=1,clearTimeout(op),op=setTimeout(()=>e.style.opacity=0,t)}var Xn=(n,t)=>{Pt(n).classList.toggle("show",t),t&&document.pointerLockElement&&document.exitPointerLock()},sc=()=>document.querySelector(".modal.show"),Wt=null,Fi=null,Jl=null,Cs=null,Ao=null;var Xh=0;function ks(){if(Wt){Wt.state==="suspended"&&Wt.resume();return}try{Wt=new(window.AudioContext||window.webkitAudioContext)}catch{return}Fi=Wt.createGain(),Fi.gain.value=.85,Fi.connect(Wt.destination);let n=Wt.createOscillator(),t=Wt.createGain(),e=Wt.createOscillator(),i=Wt.createGain(),s=Wt.createBiquadFilter();n.type="sawtooth",n.frequency.value=46,t.gain.value=.03,e.frequency.value=.13,i.gain.value=5,s.type="lowpass",s.frequency.value=170,e.connect(i),i.connect(n.frequency),n.connect(s),s.connect(t),t.connect(Fi),n.start(),e.start(),fetch("steps.mp3").then(r=>r.arrayBuffer()).then(r=>Wt.decodeAudioData(r)).then(r=>{Jl=r}).catch(()=>{})}function Ns(n,t,e,i=.2,s="sine"){if(!Wt)return;let r=Wt.createOscillator(),o=Wt.createGain();r.type=s,r.frequency.value=n,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(o),o.connect(Fi),r.start(t),r.stop(t+e+.05)}function $h(n=1){if(!Wt)return;let t=Wt.currentTime;[659,523,587,392,392,587,659,523].forEach((e,i)=>{Ns(e*n,t+i*.42,1.5,.15),Ns(e*2*n,t+i*.42,.6,.03),Ns(e*n*1.01,t+i*.42,1.5,.05)})}function Xy(){if(!Wt)return;let n=Wt.currentTime;Ns(880,n,.8,.12),Ns(880,n+.35,.8,.12)}function Le(n,t,e=1200,i=0,s=1){if(!Wt)return;let r=Wt.createBufferSource(),o=Wt.createBuffer(1,Math.max(1,Wt.sampleRate*n),Wt.sampleRate),l=o.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=(Math.random()*2-1)*(1-u/l.length);r.buffer=o;let c=Wt.createBiquadFilter();c.type="bandpass",c.frequency.value=e,c.Q.value=s;let a=Wt.createGain();a.gain.value=t;let h=a;if(r.connect(c),c.connect(a),Wt.createStereoPanner){let u=Wt.createStereoPanner();u.pan.value=i,a.connect(u),h=u}h.connect(Fi),r.start()}var qy=n=>Le(.07,n,350+Math.random()*200,0,2);function Yy(){if(!Wt)return;let n=Wt.currentTime;Ns(55,n,.18,.35),Ns(50,n+.22,.2,.28)}function Zy(){if(!Wt)return;let n=Wt.currentTime;Le(1.3,1.3,1800,0,.7);let t=Wt.createOscillator(),e=Wt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(950,n),t.frequency.exponentialRampToValueAtTime(130,n+1.1),e.gain.setValueAtTime(.42,n),e.gain.exponentialRampToValueAtTime(.001,n+1.2),t.connect(e),e.connect(Fi),t.start(n),t.stop(n+1.25)}var Jy=()=>{Le(.9,1,5e3,0,.5),Le(.4,.6,2500,0,1)},ap=-1;function No(n){if(!Wt||!Jl||(Cs||(Cs=Wt.createBufferSource(),Cs.buffer=Jl,Cs.loop=!0,Ao=Wt.createGain(),Ao.gain.value=0,Cs.connect(Ao),Ao.connect(Fi),Cs.start()),n===ap))return;ap=n;let t=n===2?1:n===1?.6:n===.5?.12:0,e=n===2?1.75:n===1?1.15:.7;Ao.gain.setTargetAtTime(t,Wt.currentTime,n?.04:.08),n&&Cs.playbackRate.setTargetAtTime(e,Wt.currentTime,.05)}var Bl=0;function Uo(n){if(!n){Bl=0;return}if(Bl-=1/60,Bl>0)return;Bl=.55;let t=Math.hypot(n.x-nt.x,n.y-nt.y),e=Math.max(.03,Math.min(1.2,2.2/(1+t*.3))),i=xi(n.x,n.y);Le(.05,e,3200,i,3),Le(.09,e*.7,260,i,2)}function xi(n,t){let e=n-nt.x,i=t-nt.y,s=Math.cos(en),r=-Math.sin(en),o=Math.hypot(e,i)||1;return Math.max(-1,Math.min(1,(e*s+i*r)/o))}var nt,Wn,Cn,Gn,Is,Np,he,Fo,Hn,ki=!1,Mr=null,as=0,Us=!1,Tr,Co=0,zl=1.6,Yt={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},Ls=!1,zi=1,$l=[],Gl=null,_r=0,Po=!1;var mr=null,lp=(n,t)=>!ii(n,t)&&(gn(n,t)===2||n===18&&t===10),$y=(n,t)=>!ii(n,t)&&gn(n,t)===6,uu=n=>Math.max(35,62-n*5),Up=22,Ky=new hi(.2,.23,1,10,1,!0);function Fs(n,t,e){let i=n==="doll"?zf():n==="monitor"?kf():n==="pe"?Gf():n==="ball"?Hf(Math.random()*3|0):wo();n==="mirror"&&Rs(i,!0),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),It.add(i);let s={kind:n,x:t,y:e,path:[],pathT:0,state:"wander",alertT:0,target:null,rustleT:0,model:i,life:13,fx:0,fy:1};if(n==="doll"){s.trailG=new Nt,It.add(s.trailG),s.trail=[];for(let r=0;r<26;r++){let o=new Ct(Ky,i.userData.skin);o.castShadow=!0,o.visible=!1,s.trailG.add(o)}}return Wn.push(s),s}function Hl(n){It.remove(n.model),n.trailG&&It.remove(n.trailG),Wn=Wn.filter(t=>t!==n)}function Kl(){let n=Bi.spawn,t=n[0],e=-1;for(let i=0;i<40;i++){let s=n[Math.random()*n.length|0],r=Math.hypot(s[0]-nt.x,s[1]-nt.y);r>e&&(e=r,t=s)}return t}function Bo(){if(Wn)for(let n of Wn.slice())Hl(n);nt={x:Bi.start[0],y:Bi.start[1]},en=0,hs=0,Wn=[],Cn="break",Is=1,Gn=uu(1),he=null,Fo=0,Hn=!0,Mr=null,as=0;for(let n of $l)It.remove(n.obj);if($l=[],Er=[],Ye&&Op(),Pt("vent").classList.remove("show"),Je===0){Np=0,Fs("doll",30.5,5.5),Gl=Fs("pe",tp[0],tp[1]),Gl.state="idle",Ps=!1,si.visible=!0,si.position.y=1.125,Us=!1,Ls=!1,zi=1,_r=0,Po=!1,Tr=Cy,Do.visible=!0,Do.position.set(Tr[0]*B,.008,Tr[1]*B),Cr.visible=!0;for(let n of wp)n.visible=!0;for(let n in Bs)Bs[n].visible=!Ae.notes.includes(n);Yt={st:"normal",t:0,hist:[],pose:null,cd:0,chaser:null},Rs(ei,!1),Rr.visible=!1,ru.visible=!0,ky()}else{Gl=null,zi=Math.max(zi,1+(Je>2?1:0));let n=Math.min(3,1+Math.floor(Je/2));for(let t=0;t<n;t++){let e=Kl();Fs("doll",e[0],e[1])}}Os(),Uo(null),No(0),Pt("floorChip").textContent=Cp(Je)}function Os(){Pt("keyChip").textContent=(Us?"\u{1F511} \uC5F4\uC1E0":"\u{1F511} \uC5C6\uC74C")+" \xB7 "+(Ls?"\u{1F455} \uCCB4\uC721\uBCF5":"\u{1F454} \uAD50\uBCF5"),Pt("keyChip").classList.toggle("got",Us),Pt("throwB").innerHTML="<span>"+(zi?"\u{1F4F1}":"\u270B")+"</span>\uB358\uC9C0\uAE30 "+zi,Pt("throwB").style.opacity=zi?1:.4}function gr(n,t,e,i,s=gp){if(n|=0,t|=0,e|=0,i|=0,n===e&&t===i)return[];let r=new Int32Array(de*Pe).fill(-1),o=[Vt(n,t)];r[Vt(n,t)]=Vt(n,t);for(let a=0;a<o.length;a++){let h=o[a],u=h%de,d=h/de|0;if(u===e&&d===i)break;for(let[m,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let y=u+m,f=d+g;if(!s(y,f))continue;let p=Vt(y,f);r[p]===-1&&(r[p]=h,o.push(p))}}let l=Vt(e,i);if(r[l]===-1)return null;let c=[];for(let a=l;a!==Vt(n,t);a=r[a])c.push([a%de+.5,(a/de|0)+.5]);return c.reverse()}function Qy(){for(let n=0;n<200;n++){let t=Math.random()*de|0,e=Math.random()*Pe|0;if(gp(t,e)&&(gn(t,e)===0||Math.random()<.5))return[t,e]}return[28,12]}function Ro(n,t,e){if(!n.path||!n.path.length)return!0;let[i,s]=n.path[0],r=i-n.x,o=s-n.y,l=Math.hypot(r,o),c=t*e;return l<=c?(n.x=i,n.y=s,n.path.shift()):(n.x+=r/l*c,n.y+=o/l*c,n.fx=r/l,n.fy=o/l),!n.path.length}var Fp=()=>gn(nt.x|0,nt.y|0)===1;function cp(){if(Wn.some(e=>e.kind==="monitor"))return;let n=Je?[Kl(),Kl()]:[[1.5,12.5],[56.5,12.5]].sort((e,i)=>Math.hypot(i[0]-nt.x,i[1]-nt.y)-Math.hypot(e[0]-nt.x,e[1]-nt.y)),t=Fs("monitor",n[0][0],n[0][1]);t.state="patrol",t.target=n[1],je("\u{1F514} \uC218\uC5C5 \uC2DC\uAC04\uC774\uB2E4. \uBCF5\uB3C4\uC5D0\uC11C \uBC1C\uC18C\uB9AC\uAC00 \uB4E4\uB9B0\uB2E4\u2026",2600)}function jy(n){Np+=n;let t=Gn;if(Gn-=n,Cn==="break"&&t>10&&Gn<=10&&(Xy(),je("\u26A0\uFE0F \uACE7 \uC218\uC5C5 \uC885\uC774 \uC6B8\uB824\uC694! \uAD50\uC2E4\uB85C \uB3CC\uC544\uAC00\uC138\uC694")),Gn<=0)if(Cn==="break")Cn="class",Gn=Up,$h(),cp();else{Cn="break",Is++,Gn=uu(Is),$h(1.06);for(let a of Wn.filter(h=>h.kind==="monitor"))Hl(a);Uo(null),Is===3&&Wn.filter(a=>a.kind==="doll").length<2?(Fs("doll",20.5,24.5),je("\u{1F58D}\uFE0F \uBCF5\uB3C4 \uC5B4\uB518\uAC00\uC5D0\uC11C \uBCBD\uC774 \uC811\uD788\uB294 \uC18C\uB9AC\uAC00 \uD558\uB098 \uB354 \uB4E4\uB9B0\uB2E4\u2026",3e3)):je(Is+"\uAD50\uC2DC \uC26C\uB294 \uC2DC\uAC04")}Cn==="class"&&cp();let e=ze.x,i=ze.y;(tn.w||tn.arrowup)&&(i=-1),(tn.s||tn.arrowdown)&&(i=1),(tn.a||tn.arrowleft)&&(e=-1),(tn.d||tn.arrowright)&&(e=1);let s=Math.hypot(e,i),r=0,o=(hu||tn.shift)&&!gi&&i<.3;if(he)Fo+=n,Fo>8&&(mu(),je("\uC228\uC774 \uB9C9\uD600\uC11C \uB6F0\uCCD0\uB098\uC654\uB2E4!"),r=6);else if(s>.15){let a=-Math.sin(en),h=-Math.cos(en),u=Math.cos(en),d=-Math.sin(en),m=o?3.9:gi?1.1:2.2,g=m*n*Math.min(1,s)/s;lv((a*-i+u*e)*g,(h*-i+d*e)*g),r=o?7.5:gi?.6:3;let y=Co;Co+=n*(o?11:gi?4.5:7.5),!Jl&&Math.floor(y/Math.PI)!==Math.floor(Co/Math.PI)&&qy(o?.55:gi?.04:.2),No(o?2:gi?.5:1)}if((he||s<=.15)&&No(0),nt.noise=r,Je===0){for(let a in Yl)if(Bs[a].visible){let[h,u]=Yl[a];Math.hypot(h-nt.x,u-nt.y)<.75&&(Bs[a].visible=!1,Ae.notes.includes(a)||(Ae.notes.push(a),ec()),uv(a))}!Us&&Math.hypot(Tr[0]-nt.x,Tr[1]-nt.y)<.75&&(Us=!0,Do.visible=!1,Os(),Le(.4,.5,4e3,0,3),nt.noise=6,je("\u{1F511} \uC9C0\uD558 \uACC4\uB2E8 \uC5F4\uC1E0\uB97C \uC8FC\uC6E0\uB2E4! <br>\uCC30\uB791\u2014 \uC18C\uB9AC\uAC00 \uC6B8\uB838\uB2E4\u2026")),!Ls&&Cr.visible&&Math.hypot(Ar[0]-nt.x,Ar[1]-nt.y)<.9&&(Ls=!0,Cr.visible=!1,Os(),je("\u{1F455} \uBD84\uC2E4\uBB3C \uC0C1\uC790\uC5D0\uC11C \uCCB4\uC721\uBCF5\uC744 \uAEBC\uB0B4 \uAC08\uC544\uC785\uC5C8\uB2E4"));for(let a of wp)a.visible&&Math.hypot(a.userData.x-nt.x,a.userData.y-nt.y)<.8&&(a.visible=!1,zi++,Os(),je("\u{1F9F9} \uBE57\uC790\uB8E8\uB97C \uC8FC\uC6E0\uB2E4 (\uB358\uC9C0\uAE30 +1)",1500));!Ps&&Math.hypot(52.5-nt.x,11.5-nt.y)<1.3&&(Us?(Ps=!0,Le(.8,.6,600,0,2),je("\uCCA0\uBB38\uC774 \uC5F4\uB838\uB2E4. \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uB294 \uACC4\uB2E8\uC774\uB2E4\u2026")):je("\u{1F512} \uC9C0\uD558 \uACC4\uB2E8 \uCCA0\uBB38\uC774 \uC7A0\uACA8 \uC788\uB2E4. \uC5F4\uC1E0\uAC00 \uD544\uC694\uD558\uB2E4",1200)),Ps&&si.position.y<3.4&&(si.position.y+=n*1.5),Ps&&si.position.y>=3.4&&(si.visible=!1)}if(tc(nt.x|0,nt.y|0)===Lo)return Zh();if(Je&&Bi.door&&Math.hypot(Bi.door[0]+.5-nt.x,Bi.door[1]+.45-nt.y)<.75)return je("\uBE68\uAC04 \uBB38\uC744 \uC5F4\uC5C8\uB2E4\u2026"),Zh();if(Jh.style.visibility=he||Bp()?"visible":"hidden",Jh.innerHTML=he?"<span>\u{1F6AA}</span>\uB098\uAC00\uAE30":"<span>\u{1F6AA}</span>\uC228\uAE30",Je===0&&cv(n),!Hn||(ov(n),!Hn))return;let l=99,c=null;for(let a of Wn.slice()){a.pathT-=n;let h=Math.hypot(a.x-nt.x,a.y-nt.y);if(a.kind==="doll"){if(Ye&&Ye.m===a){l=Math.min(l,h);continue}let u=(m,g)=>{a.state!=="hunt"&&(Le(.5,.6,700,xi(a.x,a.y),1.5),h<18&&Kh("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,Math.max(.25,1-h/18))),a.state="hunt",a.alertT=2.5,a.target=[m|0,g|0],a.pathT=Math.min(a.pathT,0)};for(let m of Er)Math.hypot(m.x-a.x,m.y-a.y)<m.r&&u(m.x,m.y);!he&&nt.noise>0&&h<nt.noise&&gn(nt.x|0,nt.y|0)!==1&&u(nt.x,nt.y),(a.pathT<=0||!a.path||!a.path.length)&&(a.pathT=a.state==="hunt"?.3:3,a.state==="wander"&&(!a.path||!a.path.length)&&(a.target=Qy()),a.target&&(a.path=gr(a.x,a.y,a.target[0],a.target[1])||[]));let d=Ro(a,a.state==="hunt"?3.3:1,n);a.state==="hunt"&&(a.alertT-=n,d&&!Ye?dp(a):d&&a.alertT<=0&&(a.state="wander",a.path=[])),a.rustleT-=n,a.rustleT<=0&&(a.rustleT=1.6+Math.random()*2,h<14&&Le(.35,.3*(1-h/14),250+Math.random()*150,xi(a.x,a.y),3)),!he&&h<.7&&!Ye&&(a.target=[nt.x,nt.y],dp(a))}else if(a.kind==="monitor"){c=a;let u=!Fp();if(u&&a.state!=="chase"&&(a.state="chase",Rs(a.model,!0),h<30&&Kh("\uC218\uC5C5 \uC2DC\uAC04\uC5D0 \uB3CC\uC544\uB2E4\uB154\uC5B4!!",1.7,1.1,1)),!u&&a.state==="chase"&&(a.state="patrol",Rs(a.model,!1),a.path=[]),a.state==="chase"){if(a.pathT<=0){a.pathT=.25;let d=he?he[0]+he[2]:nt.x,m=he?he[1]+he[3]:nt.y;a.path=gr(a.x,a.y,d,m)||[]}Ro(a,3.15,n)}else(!a.path||!a.path.length)&&(a.target=Je?Kl():a.x<28?[56,12]:[1,12],a.path=gr(a.x,a.y,a.target[0],a.target[1])||[]),Ro(a,1.1,n);if(a.state==="chase"&&h<(he?1.2:.65))return Vl("bell",a)}else if(a.kind==="mirror"){if(a.life-=n,a.pathT<=0&&(a.pathT=.2,a.path=he?[]:gr(a.x,a.y,nt.x,nt.y,lp)||[],!a.path.length&&!he&&(a.path=gr(a.x,a.y,18,10,lp)||[])),Ro(a,3.6,n),a.life<=0){Hl(a),Yt.chaser=null,je("\uADF8 \uC560\uAC00\u2026 \uC0AC\uB77C\uC84C\uB2E4",1800);continue}if(!he&&h<.6)return Vl("mirror",a)}else if(a.kind==="pe"){let u=gn(nt.x|0,nt.y|0)===6;if(u){a.fx=nt.x-a.x,a.fy=nt.y-a.y;let d=Math.hypot(a.fx,a.fy)||1;a.fx/=d,a.fy/=d}if(u&&!Ls){if(_r+=n,_r>1&&!Po){Po=!0,tv(),je("\uC091\u2014 \uC090\uC775\u2014!",1500);for(let d=0;d<3;d++){let m=Fs("ball",2.5+d*.4,23.5+d%2);m.state="chase"}}}else u&&Ls&&_r===0&&(_r=.01,je("\uCCB4\uC721 \uC120\uC0DD\uB2D8\uC774 \uCCB4\uC721\uBCF5\uC744 \uBCF4\uB354\uB2C8 \uACE0\uAC1C\uB97C \uB3CC\uB838\uB2E4\u2026",2200));u||(_r=0,Po=!1);continue}else if(a.kind==="ball"){if(gn(nt.x|0,nt.y|0)!==6&&(a.life-=n*4,a.life<=0)){Hl(a);continue}a.pathT<=0&&(a.pathT=.2,a.path=gr(a.x,a.y,nt.x,nt.y,$y)||[]);let u=a.x,d=a.y;if(Ro(a,3.7,n),a.roll=(a.roll||0)+Math.hypot(a.x-u,a.y-d)*B/.24,a.rustleT-=n,a.rustleT<=0&&(a.rustleT=.8+Math.random(),Le(.3,.4,900+Math.random()*600,xi(a.x,a.y),6)),h<.55)return Vl("gym",Gl)}l=Math.min(l,h)}Er=Er.filter(a=>(a.t-=n)>0),ev(n),Je===0&&nv(n),Uo(c),Xh-=n,l<8&&Xh<=0&&(Yy(),Xh=.35+l/8*.9)}var Er=[],hp=0;function Kh(n,t,e,i){if(je("\u300C"+n+"\u300D",1600),!(!window.speechSynthesis||performance.now()-hp<1500)){hp=performance.now();try{let s=new SpeechSynthesisUtterance(n);s.lang="ko-KR",s.pitch=t,s.rate=e,s.volume=i,speechSynthesis.cancel(),speechSynthesis.speak(s)}catch{}}}function tv(){if(!Wt)return;let n=Wt.currentTime;for(let[t,e]of[[0,.35],[.5,1.2]]){let i=Wt.createOscillator(),s=Wt.createGain(),r=Wt.createOscillator(),o=Wt.createGain();i.frequency.value=2900,r.frequency.value=38,o.gain.value=180,r.connect(o),o.connect(i.frequency),s.gain.setValueAtTime(0,n+t),s.gain.linearRampToValueAtTime(.35,n+t+.03),s.gain.setValueAtTime(.35,n+e-.05),s.gain.linearRampToValueAtTime(0,n+e),i.connect(s),s.connect(Fi),i.start(n+t),r.start(n+t),i.stop(n+e+.05),r.stop(n+e+.05)}}function du(){if(!ki||!Hn||sc()||he||zi<=0)return;zi--,Os(),ks();let n=-Math.sin(en),t=-Math.cos(en),e=.5;for(;e<8;)if(e+=.1,ii(Math.floor(nt.x+n*e),Math.floor(nt.y+t*e))){e-=.3;break}let i=new Ct(new te(.07,.015,.14),Jt({color:546,roughness:.3,metalness:.4}));i.castShadow=!0,It.add(i),$l.push({obj:i,sx:nt.x,sy:nt.y,ex:nt.x+n*e,ey:nt.y+t*e,t:0,dur:.25+e*.06,landed:!1}),Le(.15,.2,500,0,2)}function ev(n){for(let t of $l){if(t.landed)continue;t.t+=n;let e=Math.min(1,t.t/t.dur);t.obj.position.set((t.sx+(t.ex-t.sx)*e)*B,1.4*(1-e)+Math.sin(e*Math.PI)*.8+.01,(t.sy+(t.ey-t.sy)*e)*B),t.obj.rotation.x+=n*12,t.obj.rotation.y+=n*7,e>=1&&(t.landed=!0,t.obj.rotation.set(0,Math.random()*3,0),t.obj.position.y=.01,Le(.25,.9,1800,xi(t.ex,t.ey),1.5),Le(.2,.6,400,xi(t.ex,t.ey),2),Er.push({x:t.ex,y:t.ey,r:14,t:.3}))}}var qh=0;function nv(n){qh-=n,qh<=0&&Pt("talk").classList.remove("show");for(let t of au){let e=Math.hypot(t.px-nt.x,t.py-nt.y),i=t.model.userData.head,s=e<3.5?Math.max(-1,Math.min(1,Math.atan2(t.px-nt.x,t.py-nt.y))):0;if(i.rotation.y+=(s-i.rotation.y)*Math.min(1,n*3),e<1.4&&mr!==t){mr=t;let r=t.lines[t.i++%t.lines.length];Pt("talkN").textContent=t.name,Pt("talkB").textContent=r,Pt("talk").classList.add("show"),qh=5}}mr&&Math.hypot(mr.px-nt.x,mr.py-nt.y)>2.2&&(mr=null)}var up=new k,iv=new k(0,1,0),G1=new En;function sv(n,t,e){let i=t.userData;Ye&&Ye.m===n&&Ye.grip?(t.position.copy(Ye.grip),t.lookAt(Ye.hingeMid),Bh(t,ni,!1,Math.min(1,Ye.t*3))):(t.position.set(n.x*B,.3+(n.state==="hunt"?Math.abs(Math.sin(ni*14))*.2:0),n.y*B),t.rotation.set(0,Math.atan2(n.fx,n.fy),0),Bh(t,ni*(n.state==="hunt"?2.2:.8),!0,0));let s=t.localToWorld(up.set(0,.05,-.8)).clone(),r=n.trail;if(!r.length||r[0].distanceTo(s)>.5?(r.unshift(s.clone()),r.length>27&&r.pop()):r[0].copy(s),r.length===1)for(let o=1;o<6;o++)r.push(s.clone().add(new k(-Math.sin(t.rotation.y),.05*o,-Math.cos(t.rotation.y)).multiplyScalar(.4*o)));n.trailG.children.forEach((o,l)=>{let c=r[l],a=r[l+1];if(!c||!a){o.visible=!1;return}let h=c.distanceTo(a);if(h<.01){o.visible=!1;return}o.visible=!0,o.position.copy(c).add(a).multiplyScalar(.5),o.position.y=Math.max(o.position.y,.42+l*.02),o.quaternion.setFromUnitVectors(iv,up.copy(a).sub(c).normalize()),o.scale.set(1.9+l*.03,h+.15,1.9+l*.03)})}var Ye=null,xr=Jt({map:Lf(),roughness:.9}),Di=new Nt;Di.visible=!1;It.add(Di);var fu=4,Ql=[],pu=[];{let n=Di;for(let t=0;t<fu;t++){let e=new Nt;n.add(e);let i=new Ct(new te(1,.05,1),[xr,xr,xr,xr,xr,xr]);i.castShadow=i.receiveShadow=!0,e.add(i),Ql.push(e),pu.push(i),n=e}}var Oi=new Ct(new ge(1,1),new Fn({color:131586}));Oi.rotation.x=-Math.PI/2;Oi.visible=!1;It.add(Oi);function rv(n,t){if(Je){let e=gn(n,t);return e===1?Ui.wood:e===3?Ui.woodDark:Ap}return Ui[_p(n,t)]||Ui.vinyl}function dp(n){let t=Math.floor(n.target?n.target[0]:n.x),e=Math.floor(n.target?n.target[1]:n.y),i=(f,p)=>{let M=0;for(;M<6&&!ii(t+f*(M+1),e+p*(M+1));)M++;return M},s=i(1,0)+i(-1,0)>=i(0,1)+i(0,-1),r,o;if(s?(r=e-i(0,-1),o=e+i(0,1)):(r=t-i(-1,0),o=t+i(1,0)),o-r>4){let f=s?e:t;r=Math.max(r,f-2),o=Math.min(o,f+2)}let l=3.4,c=(s?t:e)+.5,a=Math.random()<.5?1:-1,h=c-a*l/2,u=(r+o+1)/2,d=(o-r+1)*B,m=l*B/fu;s?(Di.position.set(h*B,.03,u*B),Di.rotation.set(0,a*Math.PI/2,0)):(Di.position.set(u*B,.03,h*B),Di.rotation.set(0,a>0?0:Math.PI,0)),Di.visible=!0;let g=rv(t,e);Ql.forEach((f,p)=>{f.position.set(0,0,p?m:0),f.rotation.set(0,0,0)}),pu.forEach(f=>{f.scale.set(d,1,m),f.position.set(0,0,m/2),f.material[2]=g}),Oi.scale.set(s?l*B:d,s?d:l*B,1),Oi.visible=!1,Oi.position.set(s?c*B:u*B,.004,s?u*B:c*B),Oi.rotation.set(-Math.PI/2,0,0);let y=s?new k(h*B,.4,u*B):new k(u*B,.4,h*B);Ye={m:n,t:0,killed:!1,axisX:s,a0:r,a1:o,c,L:l,x:t+.5,y:e+.5,hingeMid:y,grip:null,start:n.model.position.clone()},Kh("\uB370\uCE7C\uCF54\uB9C8\uB2C8?",.2,.75,1)}function Op(){if(Di.visible=!1,Oi.visible=!1,Ye){let n=Ye.m;n.state="wander",n.path=[],n.alertT=0,n.target=null}Ye=null}function ov(n){if(!Ye)return;let t=Ye;t.t+=n;let e=t.t,i=Math.hypot(t.x-nt.x,t.y-nt.y),s=e<.45?0:e<.8?(e-.45)/.35:e<1.6?1:e<2.3?1-(e-1.6)/.7:0,r=s*s*(3-2*s),o=r*2.3,l=[.42,.25,.18,.15];Ql.forEach((a,h)=>{a.rotation.x=-o*l[h]-(e<.45?Math.sin(e*60)*.015:0)}),Oi.visible=o>.08;let c=Ql[fu-1];if(t.grip=c.localToWorld(new k(0,.12,pu[0].scale.z)),e<.45){let a=t.grip.clone();t.grip=t.start.clone().lerp(a,Math.min(1,e/.3))}if(e>.3&&e-n<=.3&&(Le(.25,1.3,140,xi(t.x,t.y),1.2),Le(.15,.8,2200,xi(t.x,t.y),1),i<14&&(av(),Io=.25)),e>.45&&e-n<=.45&&(Le(.7,.9,600,xi(t.x,t.y),.5),Le(.5,.6,3500,xi(t.x,t.y),.7)),!t.killed&&o>1){t.killed=!0,Io=i<10?.4:0;let a=t.axisX?nt.y:nt.x,h=t.axisX?nt.x:nt.y;if(!he&&a>t.a0-.2&&a<t.a1+1.2&&Math.abs(h-t.c)<t.L/2+.3){Vl("run",null);return}}e>2.35&&Op()}function av(){let n=Pt("tak");n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}var Io=0;function lv(n,t){let i=(s,r)=>ii(Math.floor(s-.28),Math.floor(r-.28))||ii(Math.floor(s+.28),Math.floor(r-.28))||ii(Math.floor(s-.28),Math.floor(r+.28))||ii(Math.floor(s+.28),Math.floor(r+.28))||gn(s|0,r|0)===2&&r<1.75&&s>15.9&&s<22.1;i(nt.x+n,nt.y)||(nt.x+=n),i(nt.x,nt.y+t)||(nt.y+=t)}function Bp(){for(let n of Oo)if(Math.hypot(n[0]+.5+n[2]*.6-nt.x,n[1]+.5+n[3]*.6-nt.y)<1)return n;return null}function kp(){if(!Hn||sc()||!ki)return;if(he)return mu();let n=Bp();n&&(he=n,Fo=0,nt.back=[nt.x,nt.y,en],nt.x=n[0]+.5-n[2]*.25,nt.y=n[1]+.5-n[3]*.25,en=Math.atan2(-n[2],-n[3]),hs=0,Le(.15,.35,300),Pt("vent").classList.add("show"))}function mu(){he&&(nt.x=nt.back[0],nt.y=nt.back[1],he=null,Le(.15,.35,300),Pt("vent").classList.remove("show"))}function cv(n){let t=gn(nt.x|0,nt.y|0)===2||nt.x>15&&nt.x<23&&nt.y<11&&nt.y>9.5,e=-Math.cos(en),i=gn(nt.x|0,nt.y|0)===2&&nt.y<7&&e<-.6&&Math.abs(hs)<.55&&!he;if(Yt.hist.push({x:nt.x,y:nt.y,yaw:en,eye:zl}),Yt.hist.length>90&&Yt.hist.shift(),Yt.st==="broken"){Yt.cd-=n,ei.visible=!1,Yt.cd<=0&&!t&&(Yt.st="normal",Yt.t=0,Rr.visible=!1,Rs(ei,!1));return}if(ei.visible=t,Yt.st==="normal"||Yt.st==="lag"){Yt.t=i?Yt.t+n:Math.max(0,Yt.t-n*1.5),Yt.st=Yt.t>1.3?"lag":"normal";let o=Yt.st==="lag"?Yt.hist[Math.max(0,Yt.hist.length-1-24)]:Yt.hist[Yt.hist.length-1];Yt.pose=o,Yt.t>2.7&&(Yt.st="stare",Yt.t=0)}else Yt.t+=n;let s=Yt.pose;ei.position.set(s.x*B,0,(2-s.y)*B),ei.rotation.y=-s.yaw;let r=ei.userData.head;if(Yt.st==="stare"||Yt.st==="grin"){let o=new k;if(we.getWorldPosition(o),r.lookAt(o),Yt.st==="grin"&&r.rotateZ(Math.sin(Yt.t*3)*.08+.25),Yt.st==="stare"&&Yt.t>.9)Yt.st="grin",Yt.t=0,Rs(ei,!0),Le(.6,.25,900,0,4);else if(Yt.st==="grin"&&Yt.t>.9){Yt.st="broken",Yt.cd=45,Rr.visible=!0,Jy(),ei.visible=!1;let l=Fs("mirror",Math.min(21.5,Math.max(16.5,s.x)),1.9);Yt.chaser=l,je("\uAC70\uC6B8\uC774 \uAE68\uC84C\uB2E4! \uB3C4\uB9DD\uCCD0!",2200)}}else r.rotation.set(-hs*.6,0,0)}function Vl(n,t){Hn=!1,Mr={rule:n,m:t},as=0,Pt("toast").style.opacity=0,Zy(),navigator.vibrate&&navigator.vibrate([200,80,300]),he&&mu(),Uo(null);let e=!Ae.rules.includes(n);e&&Ae.rules.push(n),Ae.deaths++,n==="run"&&(Ae.folds=(Ae.folds||0)+1),ec(),No(0),n==="run"&&setTimeout(()=>{Pt("drawShow").style.backgroundImage="url("+zy()+")",Pt("drawShow").classList.add("show")},450),setTimeout(()=>{Pt("deadWhy").textContent=Wl[n].why,Pt("deadRule").textContent="\u{1F4D3} "+Wl[n].text,Pt("deadNew").textContent=e?"\uC0C8 \uADDC\uCE59\uC774 \uC218\uCCA9\uC5D0 \uC801\uD614\uB2E4.":"\uC774\uBBF8 \uC54C\uACE0 \uC788\uB358 \uADDC\uCE59\uC774\uB2E4\u2026",Xn("dead",!0)},1500)}var hv=n=>Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0");function uv(n){Pt("noteT").textContent=yr[n].t,Pt("noteB").textContent=yr[n].b,Xn("note",!0)}var ni=0,fp=performance.now(),pp=!1,Yh=0,kl=0;function zp(){let n=performance.now(),t=Math.min(.05,(n-fp)/1e3);if(fp=n,ni+=t,ki&&Hn&&!sc()&&jy(t),ki&&!Hn&&(as+=t),nt){zl+=((he?1.55:gi?1.12:1.6)-zl)*Math.min(1,t*8);let i=Math.hypot(ze.x,ze.y)>.15||tn.w||tn.a||tn.s||tn.d||tn.arrowup||tn.arrowdown,s=i&&!he?Math.sin(Co*2)*.025:0;Io>0&&(Io-=t);let r=Io>0?(Math.random()-.5)*.05:0;we.position.set(nt.x*B+r,zl+s+r,nt.y*B),we.rotation.set(0,0,0),we.rotateY(en),we.rotateX(hs),Hh.position.y=-.2+s*.6,Hh.position.x=.12+(i?Math.cos(Co)*.008:0),Vn.intensity=he?0:30*(Math.random()<.004?.2:1),Hh.visible=!he;for(let u of Wn){let d=u.model;d.position.set(u.x*B,0,u.y*B);let m=Math.atan2(u.fx,u.fy);if(d.rotation.y+=((m-d.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI)*Math.min(1,t*6),u.kind==="doll")sv(u,d,t);else if(u.kind==="monitor"){if(zh(d,ni,u.state==="chase"?11:4,u.state==="chase"?.7:.35),d.userData.head.rotation.z=u.state==="chase"?.3:Math.sin(ni*1.3)*.15,u.state==="chase")for(let g of d.userData.arms)g.rotation.x=-1.2+Math.sin(ni*11)*.3}else u.kind==="pe"?(d.userData.head.rotation.z=Math.sin(ni*.8)*.2,d.userData.arms[1].rotation.x=Po?-2.4:-.1):u.kind==="ball"?(d.userData.ball.rotation.set(0,0,0),d.rotation.y=Math.atan2(u.fx,u.fy),d.userData.ball.rotation.x=u.roll||0,d.position.y=Math.abs(Math.sin(ni*9+u.x))*.25):(zh(d,ni,13,.8),d.userData.head.lookAt(we.position))}let o=innerWidth<innerHeight?80:70,l=(Yt.st==="stare"||Yt.st==="grin")&&Hn?o*.55:o;Math.abs(we.fov-l)>.1&&(we.fov+=(l-we.fov)*Math.min(1,t*(l<we.fov?1.2:5)),we.updateProjectionMatrix());let c=Cn==="class"?1:0;Zl.intensity+=(c*9-Zl.intensity)*Math.min(1,t*3);for(let u of Tp)u.material=c?Mp:su;if(Je)for(let u of Bi.flick)u.t-=t,u.t<0&&(u.on=!u.on,u.t=u.on?.6+Math.random()*5:.03+Math.random()*.2),u.p.intensity=u.on===!1?.3:u.base;for(let u of bp)u.t-=t,u.t<0&&(u.on=!u.on,u.t=u.on?.5+Math.random()*4:.04+Math.random()*.25),u.p.intensity=u.on===!1?.2:u.base,u.l.material.emissiveIntensity=u.on===!1?.1:1.4;for(let u in Bs){let d=Bs[u];d.visible&&(d.material.emissiveIntensity=.6+Math.sin(ni*3)*.4)}if(Do.rotation.y+=t,Mr&&Mr.m&&as<1.4){let u=Mr.m.model,d=new k(0,0,-1).applyQuaternion(we.quaternion),m=u.userData.faceY||1.7,g=.42-as*.08;if(u.position.set(we.position.x+d.x*g,we.position.y-m+d.y*g+(Math.random()-.5)*.02,we.position.z+d.z*g),u.rotation.set(0,en,0),u.userData.head&&u.userData.head.rotation.set(0,0,.3),u.userData.head){u.updateMatrixWorld(!0);let y=new k;u.userData.head.getWorldPosition(y);let f=we.position.clone().addScaledVector(d,Mr.m.kind==="monitor"?.4-as*.06:.5-as*.08);u.position.add(f.sub(y))}Vn.intensity=as<.1?120:30}let a=Cn==="break"?uu(Is):Up;Pt("bellTxt").textContent=Is+"\uAD50\uC2DC \xB7 "+(Cn==="break"?"\uC26C\uB294 \uC2DC\uAC04":"\uC218\uC5C5 \uC2DC\uAC04"),Pt("bell").querySelector("small").textContent=hv(Math.max(0,Gn))+(Cn==="break"&&Gn<10?"  \u26A0\uFE0F \uACE7 \uC885\uC774 \uC6B8\uB824\uC694":"");let h=Pt("bar").firstElementChild;h.style.width=Math.max(0,Gn/a*100)+"%",h.style.background=Cn==="class"?"#c33":Gn<10?"#fb3":"#9ad",Pt("ventTxt").textContent=he?"\uC0AC\uBB3C\uD568 \uC548 \xB7 \uC228 \uCC38\uAE30 "+Math.max(0,8-Fo).toFixed(1)+"\uCD08":"",Pt("classTxt").style.opacity=Cn==="class"&&Fp()&&Hn?1:0}_i.render(It,we),ki&&!pp&&(Yh++,kl+=t,kl>4&&(Yh/kl<24&&(pp=!0,_i.setPixelRatio(1),_i.shadowMap.enabled=!1,Vn.castShadow=!1,It.traverse(e=>{e.material&&[].concat(e.material).forEach(i=>i.needsUpdate=!0)}),nu()),Yh=0,kl=0)),requestAnimationFrame(zp)}requestAnimationFrame(zp);function dv(){if(!ki)return;let n=Object.keys(Wl).map(e=>Ae.rules.includes(e)?'<div class="rule">'+Wl[e].text+"</div>":'<div class="rule" style="opacity:.35">??? (\uC544\uC9C1 \uBAA8\uB974\uB294 \uADDC\uCE59)</div>').join(""),t=Object.keys(yr).filter(e=>Ae.notes.includes(e)).map(e=>'<div class="rule n"><b>'+yr[e].t+"</b><br>"+yr[e].b.replace(/\n/g,"<br>")+"</div>").join("");Pt("bookB").innerHTML='<p><b>\uC54C\uC544\uB0B8 \uADDC\uCE59</b> <span class="muted">(\uC8FD\uC73C\uBA74\uC11C \uBC30\uC6B4\uB2E4)</span></p>'+n+"<p><b>\uC8FC\uC6B4 \uCABD\uC9C0</b> "+Ae.notes.length+"/"+Object.keys(yr).length+"</p>"+t+'<p class="muted">\uC8FD\uC740 \uD69F\uC218 '+Ae.deaths+" \xB7 \uAC00\uC7A5 \uAE4A\uC774 \uB0B4\uB824\uAC04 \uACF3: "+(Ae.deep?"\uC9C0\uD558 "+Ae.deep+"\uCE35":"1\uCE35")+"</p>",Pt("acctLine").textContent=yi?"\uB85C\uADF8\uC778: "+(tu||"\uACC4\uC815")+" \xB7 \uC11C\uBC84\uC5D0 \uC800\uC7A5 \uC911":"\uAC8C\uC2A4\uD2B8 \xB7 \uC774 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5 \uC911",Pt("logoutB").style.display=yi?"":"none",Xn("book",!0)}Pt("bookBtn").onclick=dv;Pt("bookOk").onclick=()=>Xn("book",!1);Pt("noteOk").onclick=()=>Xn("note",!1);Pt("logoutB").onclick=()=>{yi="",tu="",localStorage.removeItem("hor_tok"),Xn("book",!1),je("\uB85C\uADF8\uC544\uC6C3\uD588\uC5B4\uC694 (\uAC8C\uC2A4\uD2B8\uB85C \uACC4\uC18D)")};Pt("retryB").onclick=()=>{Xn("dead",!1),Pt("drawShow").classList.remove("show"),Bo()};Pt("restartB").onclick=()=>{Xn("dead",!1),Pt("drawShow").classList.remove("show"),Rp(lu),Bo()};Pt("againB").onclick=()=>{Xn("win",!1),Bo()};Pt("startB").onclick=()=>{ks(),Xn("intro",!1),Bo(),ki=!0,$h(1.06)};function gu(){Xn("login",!1),Xn("intro",!0)}Pt("guestB").onclick=()=>{ks(),gu()};Pt("loginB").onclick=async()=>{ks();let n=Pt("lu").value.trim(),t=Pt("lp").value,e=Pt("lmsg");if(!n||!t){e.textContent="\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694";return}Pt("loginB").disabled=!0,e.textContent="\uC11C\uBC84\uC5D0 \uC5F0\uACB0 \uC911\u2026 (\uCC98\uC74C\uC5D4 1\uBD84\uCBE4 \uAC78\uB9B4 \uC218 \uC788\uC5B4\uC694)";try{yi=(await eu("/api/signin",{username:n,password:t})).session,localStorage.setItem("hor_tok",yi),await xp(),e.textContent="",gu()}catch(i){e.textContent=i.status===401?"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC5B4\uC694":i.status===429?"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}Pt("loginB").disabled=!1};yi&&(Pt("lmsg").textContent="\uC800\uC7A5\uB41C \uB85C\uADF8\uC778\uC73C\uB85C \uC811\uC18D \uC911\u2026",xp().then(gu).catch(n=>{n.status===401&&(yi="",localStorage.removeItem("hor_tok")),Pt("lmsg").textContent=n.status===401?"\uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694":"\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uAC8C\uC2A4\uD2B8\uB85C \uBA3C\uC800 \uD574 \uBCF4\uC138\uC694"}));document.title=Ey;window.__g={descend:Zh,get level(){return Je},get LV(){return Bi},get fold(){return Ye},get noiseEvents(){return Er},throwItem:du,get npcs(){return au},givePE(){Ls=!0,Os()},get calls(){return _i.info.render.calls},get P(){return nt},get mons(){return Wn},get mir(){return Yt},set yaw(n){en=n},set pitch(n){hs=n},get alive(){return Hn},get save(){return Ae},setPhaseT(n){Gn=n},get phase(){return Cn},get stairsOpen(){return Ps},giveKey(){Us=!0,Os()},get keyPos(){return Tr}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
