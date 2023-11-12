import{c as U,p as sn}from"./constant-6af51708.js";import{aP as en,aQ as Y,aR as S,aS as an,aT as y,aK as ln,aU as z,aV as b,aW as rn,aX as t,aY as un,aZ as on,a_ as tn}from"./mermaid.core-1a973435.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,D,q,h,v,V,a){var s=D-l,n=q-x,m=V-h,i=a-v,r=i*s-m*n;if(!(r*r<y))return r=(m*(x-v)-i*(l-h))/r,[l+r*s,x+r*n]}function H(l,x,D,q,h,v,V){var a=l-D,s=x-q,n=(V?v:-v)/z(a*a+s*s),m=n*s,i=-n*a,r=l+m,f=x+i,c=D+m,E=q+i,o=(r+c)/2,I=(f+E)/2,p=c-r,g=E-f,R=p*p+g*g,K=h-v,P=r*E-c*f,O=(g<0?-1:1)*z(tn(0,K*K*R-P*P)),Q=(P*g-p*O)/R,d=(-P*p-g*O)/R,A=(P*g+p*O)/R,T=(-P*p+g*O)/R,e=Q-o,u=d-I,W=A-o,X=T-I;return e*e+u*u>W*W+X*X&&(Q=A,d=T),{cx:Q,cy:d,x01:-m,y01:-i,x11:Q*(h/K-1),y11:d*(h/K-1)}}function hn(){var l=fn,x=cn,D=U(0),q=null,h=yn,v=gn,V=mn,a=null;function s(){var n,m,i=+l.apply(this,arguments),r=+x.apply(this,arguments),f=h.apply(this,arguments)-an,c=v.apply(this,arguments)-an,E=rn(c-f),o=c>f;if(a||(a=n=sn()),r<i&&(m=r,r=i,i=m),!(r>y))a.moveTo(0,0);else if(E>ln-y)a.moveTo(r*Y(f),r*S(f)),a.arc(0,0,r,f,c,!o),i>y&&(a.moveTo(i*Y(c),i*S(c)),a.arc(0,0,i,c,f,o));else{var I=f,p=c,g=f,R=c,K=E,P=E,O=V.apply(this,arguments)/2,Q=O>y&&(q?+q.apply(this,arguments):z(i*i+r*r)),d=b(rn(r-i)/2,+D.apply(this,arguments)),A=d,T=d,e,u;if(Q>y){var W=un(Q/i*S(O)),X=un(Q/r*S(O));(K-=W*2)>y?(W*=o?1:-1,g+=W,R-=W):(K=0,g=R=(f+c)/2),(P-=X*2)>y?(X*=o?1:-1,I+=X,p-=X):(P=0,I=p=(f+c)/2)}var Z=r*Y(I),j=r*S(I),B=i*Y(R),C=i*S(R);if(d>y){var F=r*Y(p),G=r*S(p),J=i*Y(g),L=i*S(g),w;if(E<en&&(w=pn(Z,j,J,L,F,G,B,C))){var M=Z-w[0],N=j-w[1],$=F-w[0],k=G-w[1],_=1/S(on((M*$+N*k)/(z(M*M+N*N)*z($*$+k*k)))/2),nn=z(w[0]*w[0]+w[1]*w[1]);A=b(d,(i-nn)/(_-1)),T=b(d,(r-nn)/(_+1))}}P>y?T>y?(e=H(J,L,Z,j,r,T,o),u=H(F,G,B,C,r,T,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),T<d?a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,T,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Z,j),a.arc(0,0,r,I,p,!o)):a.moveTo(Z,j),!(i>y)||!(K>y)?a.lineTo(B,C):A>y?(e=H(B,C,F,G,i,-A,o),u=H(Z,j,J,L,i,-A,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),A<d?a.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,A,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,i,R,g,o)}if(a.closePath(),n)return a=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-en/2;return[Y(m)*n,S(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:U(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:U(+n),s):x},s.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:U(+n),s):D},s.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:U(+n),s):q},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:U(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:U(+n),s):v},s.padAngle=function(n){return arguments.length?(V=typeof n=="function"?n:U(+n),s):V},s.context=function(n){return arguments.length?(a=n??null,s):a},s}export{hn as a};