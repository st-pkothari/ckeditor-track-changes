/* Source version: 1.2.12 */
(function(o){var h,r,d,j,n,q,f,m,b,k,c,e=[].slice,p=[].indexOf||function(u){for(var t=0,s=this.length;t<s;t++){if(t in this&&this[t]===u){return t}}return -1},g={}.hasOwnProperty;h=(function(){i.prototype.STICKS_OUT_TOP=1;i.prototype.STICKS_OUT_BOTTOM=2;i.prototype.STICKS_OUT_LEFT=1;i.prototype.STICKS_OUT_RIGHT=2;i.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"};function i(u,H,K,z){var B,F,E,s,y,A,v,t,I,J,D,x,w,C,G=this;this.id=++i.lastId;this.adapter=i.adapter;z=this.adapter.clone(z);if(typeof H==="object"){z=H;H=K=void 0}else{if(typeof K==="object"){z=K;K=void 0}}this._element=u;this._boundingElement=z.boundingElement;this._document=u.ownerDocument;this._window=this._document.defaultView;this._body=this._document.body;i.addTip(this);B=i.getTips(u);B.push(this);i.setTips(u,B);this.triggerElement=this.adapter.wrap(u);if(this.triggerElement.length>1){throw new Error("You can't call Opentip on multiple elements.")}if(this.triggerElement.length<1){throw new Error("Invalid element.")}this.loaded=false;this.loading=false;this.visible=false;this.currentPosition={left:0,top:0};this.dimensions={width:100,height:50};this.content="";this.redraw=true;this.currentObservers={showing:false,visible:false,hiding:false,hidden:false};if(K!=null){z.title=K}if(H!=null){this.setContent(H)}if(z["extends"]==null){if(z.style!=null){z["extends"]=z.style}else{z["extends"]=i.defaultStyle}}s=[z];C=z;while(C["extends"]){A=C["extends"];C=i.styles[A];if(C==null){throw new Error("Invalid style: "+A)}s.unshift(C);if(!((C["extends"]!=null)||A==="standard")){C["extends"]="standard"}}z=(D=this.adapter).extend.apply(D,[{}].concat(e.call(s)));z.hideTriggers=(function(){var O,N,L,M;L=z.hideTriggers;M=[];for(O=0,N=L.length;O<N;O++){F=L[O];M.push(F)}return M})();if(z.hideTrigger&&z.hideTriggers.length===0){z.hideTriggers.push(z.hideTrigger)}x=["tipJoint","targetJoint","stem"];for(v=0,I=x.length;v<I;v++){y=x[v];if(z[y]&&typeof z[y]==="string"){z[y]=new i.Joint(z[y])}}if(z.ajax&&(z.ajax===true||!z.ajax)){if(this.adapter.tagName(this.triggerElement)==="A"){z.ajax=this.adapter.attr(this.triggerElement,"href")}else{z.ajax=false}}if(z.showOn==="click"&&this.adapter.tagName(this.triggerElement)==="A"){this.adapter.observe(this.triggerElement,"click",function(L){L.preventDefault();L.stopPropagation();return L.stopped=true})}if(z.target){z.fixed=true}if(z.stem===true){z.stem=new i.Joint(z.tipJoint)}if(z.target===true){z.target=this.triggerElement}else{if(z.target){z.target=this.adapter.wrap(z.target)}}this.currentStem=z.stem;if(z.delay==null){z.delay=z.showOn==="mouseover"?0.2:0}if(z.targetJoint==null){z.targetJoint=new i.Joint(z.tipJoint).flip()}this.showTriggers=[];this.showTriggersWhenVisible=[];this.hideTriggers=[];if(z.showOn&&z.showOn!=="creation"){this.showTriggers.push({element:this.triggerElement,event:z.showOn})}if(z.ajaxCache!=null){z.cache=z.ajaxCache;delete z.ajaxCache}this.options=z;this.bound={};w=["prepareToShow","prepareToHide","show","hide","reposition"];for(t=0,J=w.length;t<J;t++){E=w[t];this.bound[E]=(function(L){return function(){return G[L].apply(G,arguments)}})(E)}this.adapter.domReady(function(){G.activate();if(G.options.showOn==="creation"){return G.prepareToShow()}})}i.prototype._setup=function(){var x,B,C,z,w,v,A,s,y,u,t;this.debug("Setting up the tooltip.");this._buildContainer(this.triggerElement);this.hideTriggers=[];y=this.options.hideTriggers;for(z=w=0,A=y.length;w<A;z=++w){B=y[z];C=null;x=this.options.hideOn instanceof Array?this.options.hideOn[z]:this.options.hideOn;if(typeof B==="string"){switch(B){case"trigger":x=x||"mouseout";C=this.triggerElement;break;case"tip":x=x||"mouseover";C=this.container;break;case"target":x=x||"mouseover";C=this.options.target;break;case"closeButton":break;default:throw new Error("Unknown hide trigger: "+B+".")}}else{x=x||"mouseover";C=this.adapter.wrap(B)}if(C){this.hideTriggers.push({element:C,event:x,original:B})}}u=this.hideTriggers;t=[];for(v=0,s=u.length;v<s;v++){B=u[v];t.push(this.showTriggersWhenVisible.push({element:B.element,event:"mouseover"}))}return t};i.prototype._buildContainer=function(s){this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>',this._document);this.adapter.css(this.container,{position:"absolute"});if(this.options.ajax){this.adapter.addClass(this.container,this["class"].loading)}if(this.options.fixed){this.adapter.addClass(this.container,this["class"].fixed)}if(this.options.showEffect){this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect)}if(this.options.hideEffect){return this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect)}};i.prototype._buildElements=function(){var s,u,t=this._document;this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>',t);this.backgroundCanvas=this.adapter.wrap(t.createElement("canvas"));this.adapter.css(this.backgroundCanvas,{position:"absolute"});if(typeof G_vmlCanvasManager!=="undefined"&&G_vmlCanvasManager!==null){G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas))}s=this.adapter.find(this.tooltipElement,"."+this["class"].header);if(this.options.title){u=this.adapter.create("<h1></h1>",t);this.adapter.update(u,this.options.title,this.options.escapeTitle);this.adapter.append(s,u)}if(this.options.ajax&&!this.loaded){this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>',t))}if(p.call(this.options.hideTriggers,"closeButton")>=0){this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>',t);this.adapter.append(s,this.closeButtonElement)}this.adapter.append(this.container,this.backgroundCanvas);this.adapter.append(this.container,this.tooltipElement);this.adapter.append(this._body,this.container);this._newContent=true;return this.redraw=true};i.prototype.setContent=function(s){this.content=s;this._newContent=true;if(typeof this.content==="function"){this._contentFunction=this.content;this.content=""}else{this._contentFunction=null}if(this.visible){return this._updateElementContent()}};i.prototype._updateElementContent=function(){var s;if(this._newContent||(!this.options.cache&&this._contentFunction)){s=this.adapter.find(this.container,"."+this["class"].content);if(s!=null){if(this._contentFunction){this.debug("Executing content function.");this.content=this._contentFunction(this)}this.adapter.update(s,this.content,this.options.escapeContent)}this._newContent=false}this._storeAndLockDimensions();return this.reposition()};i.prototype._storeAndLockDimensions=function(){var s;if(!this.container){return}s=this.dimensions;this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"});this.dimensions=this.adapter.dimensions(this.container);this.dimensions.width+=1;this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"});if(!this._dimensionsEqual(this.dimensions,s)){this.redraw=true;return this._draw()}};i.prototype.activate=function(){return this._setupObservers("hidden","hiding")};i.prototype.deactivate=function(s){if(s){this.adapter.extend(this.options,s)}this.hide();i.removeTip(this);return this._setupObservers("-showing","-visible","-hidden","-hiding")};i.prototype._setupObservers=function(){var E,H,u,I,w,C,B,z,x,G,v,t,s,D,A,y,F=this;I=1<=arguments.length?e.call(arguments,0):[];for(C=0,G=I.length;C<G;C++){u=I[C];H=false;if(u.charAt(0)==="-"){H=true;u=u.substr(1)}if(this.currentObservers[u]===!H){continue}this.currentObservers[u]=!H;E=function(){var K,L,J;K=1<=arguments.length?e.call(arguments,0):[];if(H){return(L=F.adapter).stopObserving.apply(L,K)}else{return(J=F.adapter).observe.apply(J,K)}};switch(u){case"showing":D=this.hideTriggers;for(B=0,v=D.length;B<v;B++){w=D[B];E(w.element,w.event,this.bound.prepareToHide)}E((document.onresize!=null?document:window),"resize",this.bound.reposition);E(window,"scroll",this.bound.reposition);break;case"visible":A=this.showTriggersWhenVisible;for(z=0,t=A.length;z<t;z++){w=A[z];E(w.element,w.event,this.bound.prepareToShow)}break;case"hiding":y=this.showTriggers;for(x=0,s=y.length;x<s;x++){w=y[x];E(w.element,w.event,this.bound.prepareToShow)}break;case"hidden":break;default:throw new Error("Unknown state: "+u)}}return null};i.prototype.prepareToShow=function(){this._abortHiding();this._abortShowing();if(this.visible){return}this.debug("Showing in "+this.options.delay+"s.");if(this.container==null){this._setup()}if(this.options.group){i._abortShowingGroup(this.options.group,this)}this.preparingToShow=true;this._setupObservers("-hidden","-hiding","showing");this._followMousePosition();if(this.options.fixed&&!this.options.target){this.initialMousePosition=n}this.reposition();return this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0)};i.prototype.show=function(){var s=this;this._abortHiding();if(this.visible){return}this._clearTimeouts();if(!this._triggerElementExists()){return this.deactivate()}this.debug("Showing now.");if(this.container==null){this._setup()}if(this.options.group){i._hideGroup(this.options.group,this)}this.visible=true;this.preparingToShow=false;if(this.tooltipElement==null){this._buildElements()}this._updateElementContent();if(this.options.ajax&&(!this.loaded||!this.options.cache)){this._loadAjax()}this._searchAndActivateCloseButtons();this._startEnsureTriggerElement();this.adapter.css(this.container,{zIndex:i.lastZIndex++});this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible");if(this.options.fixed&&!this.options.target){this.initialMousePosition=n}this.reposition();this.adapter.removeClass(this.container,this["class"].hiding);this.adapter.removeClass(this.container,this["class"].hidden);this.adapter.addClass(this.container,this["class"].goingToShow);this.setCss3Style(this.container,{transitionDuration:"0s"});this.defer(function(){var t;if(!s.visible||s.preparingToHide){return}s.adapter.removeClass(s.container,s["class"].goingToShow);s.adapter.addClass(s.container,s["class"].showing);t=0;if(s.options.showEffect&&s.options.showEffectDuration){t=s.options.showEffectDuration}s.setCss3Style(s.container,{transitionDuration:""+t+"s"});s._visibilityStateTimeoutId=s.setTimeout(function(){s.adapter.removeClass(s.container,s["class"].showing);return s.adapter.addClass(s.container,s["class"].visible)},t);return s._activateFirstInput()});return this._draw()};i.prototype._abortShowing=function(){if(this.preparingToShow){this.debug("Aborting showing.");this._clearTimeouts();this._stopFollowingMousePosition();this.preparingToShow=false;return this._setupObservers("-showing","-visible","hiding","hidden")}};i.prototype.prepareToHide=function(){this._abortShowing();this._abortHiding();if(!this.visible){return}this.preparingToHide=true;this._setupObservers("-showing","visible","-hidden","hiding");return this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)};i.prototype.hide=function(){var v=this,t;this._abortShowing();if(!this.visible){return}this._clearTimeouts();this.visible=false;this.preparingToHide=false;this._stopEnsureTriggerElement();this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden");if(this._element){var s=this.adapter.data(this._element,"__opentips")||[];for(var u=s.length;u--;){if(s[u]==this){s.slice(u,1)}}i.setTips(this._element,s)}if(!this.options.fixed){this._stopFollowingMousePosition()}if(!this.container){return}t=this["class"];this.adapter.removeClass(this.container,t.visible);this.adapter.removeClass(this.container,t.showing);this.adapter.addClass(this.container,t.goingToHide);this.setCss3Style(this.container,{transitionDuration:"0s"});return this.defer(function(){var w;v.adapter.removeClass(v.container,v["class"].goingToHide);v.adapter.addClass(v.container,v["class"].hiding);w=0;if(v.options.hideEffect&&v.options.hideEffectDuration){w=v.options.hideEffectDuration}v.setCss3Style(v.container,{transitionDuration:""+w+"s"});return v._visibilityStateTimeoutId=v.setTimeout(function(){v.adapter.removeClass(v.container,v["class"].hiding);v.adapter.addClass(v.container,v["class"].hidden);v.setCss3Style(v.container,{transitionDuration:"0s"});if(v.options.removeElementsOnHide){v.adapter.remove(v.container);delete v.container;return delete v.tooltipElement}},w)})};i.prototype._abortHiding=function(){if(this.preparingToHide){this.debug("Aborting hiding.");this._clearTimeouts();this.preparingToHide=false;return this._setupObservers("-hiding","showing","visible")}};i.prototype.reposition=function(){var s,u,t,v=this;s=this.getPosition();if(s==null){return}u=this.options.stem;if(this.options.containInViewport){t=this._ensureViewportContainment(s),s=t.position,u=t.stem}if(this._positionsEqual(s,this.currentPosition)){return}if(!(!this.options.stem||u.eql(this.currentStem))){this.redraw=true}this.currentPosition=s;this.currentStem=u;this._draw();this.adapter.css(this.container,{left:""+s.left+"px",top:""+s.top+"px"});return this.defer(function(){var x,w;x=v.adapter.unwrap(v.container);x.style.visibility="hidden";w=x.offsetHeight;return x.style.visibility="visible"})};i.prototype.getPosition=function(D,F,v){var s,u,E,y,C,t,w,B,x,z=this._body,A=this._window;if(!this.container){return}if(D==null){D=this.options.tipJoint}if(F==null){F=this.options.targetJoint}y={};if(this.options.target){w=this.adapter.offset(this.options.target);t=this.adapter.dimensions(this.options.target);y=w;if(F.right){B=this.adapter.unwrap(this.options.target);if(B.getBoundingClientRect!=null){y.left=B.getBoundingClientRect().right+((x=A.pageXOffset)!=null?x:z.scrollLeft)}else{y.left+=t.width}}else{if(F.center){y.left+=Math.round(t.width/2)}}if(F.bottom){y.top+=t.height}else{if(F.middle){y.top+=Math.round(t.height/2)}}if(this.options.borderWidth){if(this.options.tipJoint.left){y.left+=this.options.borderWidth}if(this.options.tipJoint.right){y.left-=this.options.borderWidth}if(this.options.tipJoint.top){y.top+=this.options.borderWidth}else{if(this.options.tipJoint.bottom){y.top-=this.options.borderWidth}}}}else{if(this.initialMousePosition){y={top:this.initialMousePosition.y,left:this.initialMousePosition.x}}else{y={top:n.y,left:n.x}}}if(this.options.autoOffset){C=this.options.stem?this.options.stemLength:0;E=C&&this.options.fixed?2:10;s=D.middle&&!this.options.fixed?15:0;u=D.center&&!this.options.fixed?15:0;if(D.right){y.left-=E+s}else{if(D.left){y.left+=E+s}}if(D.bottom){y.top-=E+u}else{if(D.top){y.top+=E+u}}if(C){if(v==null){v=this.options.stem}if(v.right){y.left-=C}else{if(v.left){y.left+=C}}if(v.bottom){y.top-=C}else{if(v.top){y.top+=C}}}}y.left+=this.options.offset[0];y.top+=this.options.offset[1];if(D.right){y.left-=this.dimensions.width}else{if(D.center){y.left-=Math.round(this.dimensions.width/2)}}if(D.bottom){y.top-=this.dimensions.height}else{if(D.middle){y.top-=Math.round(this.dimensions.height/2)}}return y};i.prototype._ensureViewportContainment=function(z){var E,w,A,v,u,y,t,x,F,C,B,s,D=this._document;t=this.options.stem;A={position:z,stem:t};if(!(this.visible&&z)){return A}x=this._sticksOut(z);if(!(x[0]||x[1])){return A}C=new i.Joint(this.options.tipJoint);if(this.options.targetJoint){F=new i.Joint(this.options.targetJoint)}y=this.adapter.scrollOffset(this._window,this._document);B=this._boundingElement?this.adapter.dimensions(this._boundingElement):this.adapter.viewportDimensions(D);s=[z.left-y[0],z.top-y[1]];E=false;if(B.width>=this.dimensions.width){if(x[0]){E=true;switch(x[0]){case this.STICKS_OUT_LEFT:C.setHorizontal("right");if(this.options.targetJoint){F.setHorizontal("right")}break;case this.STICKS_OUT_RIGHT:C.setHorizontal("left");if(this.options.targetJoint){F.setHorizontal("left")}}}}if(B.height>=this.dimensions.height){if(x[1]){E=true;switch(x[1]){case this.STICKS_OUT_TOP:C.setVertical("top");if(this.options.targetJoint){F.setVertical("bottom")}break;case this.STICKS_OUT_BOTTOM:C.setVertical("bottom");if(this.options.targetJoint){F.setVertical("top")}}}}if(!E){return A}if(this.options.stem){t=C}z=this.getPosition(C,F,t);w=this._sticksOut(z);v=false;u=false;if(w[0]&&(w[0]!==x[0])){v=true;C.setHorizontal(this.options.tipJoint.horizontal);if(this.options.targetJoint){F.setHorizontal(this.options.targetJoint.horizontal)}}if(w[1]&&(w[1]!==x[1])){u=true;C.setVertical(this.options.tipJoint.vertical);if(this.options.targetJoint){F.setVertical(this.options.targetJoint.vertical)}}if(v&&u){return A}if(v||u){if(this.options.stem){t=C}z=this.getPosition(C,F,t)}return{position:z,stem:t}};i.prototype._sticksOut=function(t){var u,v,s,w;v=this.adapter.scrollOffset(this._window,this._document);w=this._boundingElement?this.adapter.dimensions(this._boundingElement):this.adapter.viewportDimensions(doc);u=[t.left-v[0],t.top-v[1]];s=[false,false];if(u[0]<0){s[0]=this.STICKS_OUT_LEFT}else{if(u[0]+this.dimensions.width>w.width){s[0]=this.STICKS_OUT_RIGHT}}if(u[1]<0){s[1]=this.STICKS_OUT_TOP}else{if(u[1]+this.dimensions.height>w.height){s[1]=this.STICKS_OUT_BOTTOM}}return s};i.prototype._draw=function(){var E,D,B,x,t,H,I,F,z,C,y,L,s,J,u,K,A,w,v,G=this;if(!(this.backgroundCanvas&&this.redraw)){return}this.debug("Drawing background.");this.redraw=false;if(this.currentStem){A=["top","right","bottom","left"];for(u=0,K=A.length;u<K;u++){L=A[u];this.adapter.removeClass(this.container,"stem-"+L)}this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal);this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}H=[0,0];I=[0,0];if(p.call(this.options.hideTriggers,"closeButton")>=0){t=new i.Joint(((w=this.currentStem)!=null?w.toString():void 0)==="top right"?"top left":"top right");H=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]];I=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]}B=this.adapter.clone(this.dimensions);x=[0,0];if(this.options.borderWidth){B.width+=this.options.borderWidth*2;B.height+=this.options.borderWidth*2;x[0]-=this.options.borderWidth;x[1]-=this.options.borderWidth}if(this.options.shadow){B.width+=this.options.shadowBlur*2;B.width+=Math.max(0,this.options.shadowOffset[0]-this.options.shadowBlur*2);B.height+=this.options.shadowBlur*2;B.height+=Math.max(0,this.options.shadowOffset[1]-this.options.shadowBlur*2);x[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]);x[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1])}D={left:0,right:0,top:0,bottom:0};if(this.currentStem){if(this.currentStem.left){D.left=this.options.stemLength}else{if(this.currentStem.right){D.right=this.options.stemLength}}if(this.currentStem.top){D.top=this.options.stemLength}else{if(this.currentStem.bottom){D.bottom=this.options.stemLength}}}if(t){if(t.left){D.left=Math.max(D.left,I[0])}else{if(t.right){D.right=Math.max(D.right,I[0])}}if(t.top){D.top=Math.max(D.top,I[1])}else{if(t.bottom){D.bottom=Math.max(D.bottom,I[1])}}}B.width+=D.left+D.right;B.height+=D.top+D.bottom;x[0]-=D.left;x[1]-=D.top;if(this.currentStem&&this.options.borderWidth){v=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),J=v.stemLength,s=v.stemBase}E=this.adapter.unwrap(this.backgroundCanvas);E.width=B.width;E.height=B.height;this.adapter.css(this.backgroundCanvas,{width:""+E.width+"px",height:""+E.height+"px",left:""+x[0]+"px",top:""+x[1]+"px"});F=E.getContext("2d");F.setTransform(1,0,0,1,0,0);F.clearRect(0,0,E.width,E.height);F.beginPath();F.fillStyle=this._getColor(F,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal);F.lineJoin="miter";F.miterLimit=500;y=this.options.borderWidth/2;if(this.options.borderWidth){F.strokeStyle=this.options.borderColor;F.lineWidth=this.options.borderWidth}else{J=this.options.stemLength;s=this.options.stemBase}if(s==null){s=0}C=function(M,O,N){if(N){F.moveTo(Math.max(s,G.options.borderRadius,H[0])+1-y,-y)}if(O){F.lineTo(M/2-s/2,-y);F.lineTo(M/2,-J-y);return F.lineTo(M/2+s/2,-y)}};z=function(S,N,O){var R,P,M,Q;if(S){F.lineTo(-s+y,0-y);F.lineTo(J+y,-J-y);return F.lineTo(y,s-y)}else{if(N){Q=G.options.closeButtonOffset;M=H[0];if(O%2!==0){Q=[Q[1],Q[0]];M=H[1]}R=Math.acos(Q[1]/G.options.closeButtonRadius);P=Math.acos(Q[0]/G.options.closeButtonRadius);F.lineTo(-M+y,-y);return F.arc(y-Q[0],-y+Q[1],G.options.closeButtonRadius,-(Math.PI/2+R),P,false)}else{F.lineTo(-G.options.borderRadius+y,-y);return F.quadraticCurveTo(y,-y,y,G.options.borderRadius-y)}}};F.translate(-x[0],-x[1]);F.save();(function(){var S,R,M,N,V,U,T,W,Q,O,P;P=[];for(R=Q=0,O=i.positions.length/2;0<=O?Q<O:Q>O;R=0<=O?++Q:--Q){V=R*2;U=R===0||R===3?0:G.dimensions.width;T=R<2?0:G.dimensions.height;W=(Math.PI/2)*R;M=R%2===0?G.dimensions.width:G.dimensions.height;N=new i.Joint(i.positions[V]);S=new i.Joint(i.positions[V+1]);F.save();F.translate(U,T);F.rotate(W);C(M,N.eql(G.currentStem),R===0);F.translate(M,0);z(S.eql(G.currentStem),S.eql(t),R);P.push(F.restore())}return P})();F.closePath();F.save();if(this.options.shadow){F.shadowColor=this.options.shadowColor;F.shadowBlur=this.options.shadowBlur;F.shadowOffsetX=this.options.shadowOffset[0];F.shadowOffsetY=this.options.shadowOffset[1]}F.fill();F.restore();if(this.options.borderWidth){F.stroke()}F.restore();if(t){return(function(){var N,M,Q,P,O;Q=M=G.options.closeButtonRadius*2;if(t.toString()==="top right"){O=[G.dimensions.width-G.options.closeButtonOffset[0],G.options.closeButtonOffset[1]];N=[O[0]+y,O[1]-y]}else{O=[G.options.closeButtonOffset[0],G.options.closeButtonOffset[1]];N=[O[0]-y,O[1]-y]}F.translate(N[0],N[1]);P=G.options.closeButtonCrossSize/2;F.save();F.beginPath();F.strokeStyle=G.options.closeButtonCrossColor;F.lineWidth=G.options.closeButtonCrossLineWidth;F.lineCap="round";F.moveTo(-P,-P);F.lineTo(P,P);F.stroke();F.beginPath();F.moveTo(P,-P);F.lineTo(-P,P);F.stroke();F.restore();return G.adapter.css(G.closeButtonElement,{left:""+(O[0]-P-G.options.closeButtonLinkOverscan)+"px",top:""+(O[1]-P-G.options.closeButtonLinkOverscan)+"px",width:""+(G.options.closeButtonCrossSize+G.options.closeButtonLinkOverscan*2)+"px",height:""+(G.options.closeButtonCrossSize+G.options.closeButtonLinkOverscan*2)+"px"})})()}};i.prototype._getPathStemMeasures=function(v,B,s){var w,t,z,y,x,u,A;y=s/2;z=Math.atan((v/2)/B);w=z*2;x=y/Math.sin(w);t=2*x*Math.cos(z);A=y+B-t;if(A<0){throw new Error("Sorry but your stemLength / stemBase ratio is strange.")}u=(Math.tan(z)*A)*2;return{stemLength:A,stemBase:u}};i.prototype._getColor=function(A,s,u,t){var x,z,w,v,y;if(t==null){t=false}if(typeof u==="string"){return u}if(t){z=A.createLinearGradient(0,0,s.width,0)}else{z=A.createLinearGradient(0,0,0,s.height)}for(w=v=0,y=u.length;v<y;w=++v){x=u[w];z.addColorStop(x[0],x[1])}return z};i.prototype._searchAndActivateCloseButtons=function(){var t,v,s,u;u=this.adapter.findAll(this.container,"."+this["class"].close);for(v=0,s=u.length;v<s;v++){t=u[v];this.hideTriggers.push({element:this.adapter.wrap(t),event:"click"})}if(this.currentObservers.showing){this._setupObservers("-showing","showing")}if(this.currentObservers.visible){return this._setupObservers("-visible","visible")}};i.prototype._activateFirstInput=function(){var s;s=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea"));return s!=null?typeof s.focus==="function"?s.focus():void 0:void 0};i.prototype._followMousePosition=function(){if(!this.options.fixed){return i._observeMousePosition(this.bound.reposition)}};i.prototype._stopFollowingMousePosition=function(){if(!this.options.fixed){return i._stopObservingMousePosition(this.bound.reposition)}};i.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)};i.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)};i.prototype._clearTimeouts=function(){clearTimeout(this._visibilityStateTimeoutId);this._clearShowTimeout();return this._clearHideTimeout()};i.prototype._triggerElementExists=function(){var s;s=this.adapter.unwrap(this.triggerElement);while(s.parentNode){if(s.parentNode.tagName==="BODY"){return true}s=s.parentNode}return false};i.prototype._loadAjax=function(){var s=this;if(this.loading){return}this.loaded=false;this.loading=true;this.adapter.addClass(this.container,this["class"].loading);this.setContent("");this.debug("Loading content from "+this.options.ajax);return this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(t){s.debug("Loading successful.");s.adapter.removeClass(s.container,s["class"].loading);return s.setContent(t)},onError:function(t){var u;u=s.options.ajaxErrorMessage;s.debug(u,t);s.setContent(u);return s.adapter.addClass(s.container,s["class"].ajaxError)},onComplete:function(){s.adapter.removeClass(s.container,s["class"].loading);s.loading=false;s.loaded=true;s._searchAndActivateCloseButtons();s._activateFirstInput();return s.reposition()}})};i.prototype._ensureTriggerElement=function(){if(!this._triggerElementExists()){this.deactivate();return this._stopEnsureTriggerElement()}};i.prototype._ensureTriggerElementInterval=1000;i.prototype._startEnsureTriggerElement=function(){var s=this;return this._ensureTriggerElementTimeoutId=setInterval((function(){return s._ensureTriggerElement()}),this._ensureTriggerElementInterval)};i.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)};return i})();m=["khtml","ms","o","moz","webkit"];h.prototype.setCss3Style=function(t,u){var x,v,w,s,i;t=this.adapter.unwrap(t);i=[];for(x in u){if(!g.call(u,x)){continue}v=u[x];if(t.style[x]!=null){i.push(t.style[x]=v)}else{i.push((function(){var A,y,z;z=[];for(A=0,y=m.length;A<y;A++){w=m[A];s=""+(this.ucfirst(w))+(this.ucfirst(x));if(t.style[s]!=null){z.push(t.style[s]=v)}else{z.push(void 0)}}return z}).call(this))}}return i};h.prototype.defer=function(i){return setTimeout(i,0)};h.prototype.setTimeout=function(i,s){return setTimeout(i,s?s*1000:0)};h.prototype.ucfirst=function(i){if(i==null){return""}return i.charAt(0).toUpperCase()+i.slice(1)};h.prototype.dasherize=function(i){return i.replace(/([A-Z])/g,function(s,t){return"-"+(t.toLowerCase())})};q=[];n={x:0,y:0};j=function(v){var t,u,s,i;n=h.adapter.mousePosition(v);i=[];for(u=0,s=q.length;u<s;u++){t=q[u];i.push(t())}return i};h._observeMousePosition=function(i){return q.push(i)};h._stopObservingMousePosition=function(i){var s;return q=(function(){var v,u,t;t=[];for(v=0,u=q.length;v<u;v++){s=q[v];if(s!==i){t.push(s)}}return t})()};h.Joint=(function(){function i(s){if(s==null){return}if(s instanceof h.Joint){s=s.toString()}this.set(s);this}i.prototype.set=function(s){s=s.toLowerCase();this.setHorizontal(s);this.setVertical(s);return this};i.prototype.setHorizontal=function(v){var w,y,z,x,u,t,s;y=["left","center","right"];for(z=0,u=y.length;z<u;z++){w=y[z];if(~v.indexOf(w)){this.horizontal=w.toLowerCase()}}if(this.horizontal==null){this.horizontal="center"}s=[];for(x=0,t=y.length;x<t;x++){w=y[x];s.push(this[w]=this.horizontal===w?w:void 0)}return s};i.prototype.setVertical=function(v){var w,y,z,x,u,t,s;y=["top","middle","bottom"];for(z=0,u=y.length;z<u;z++){w=y[z];if(~v.indexOf(w)){this.vertical=w.toLowerCase()}}if(this.vertical==null){this.vertical="middle"}s=[];for(x=0,t=y.length;x<t;x++){w=y[x];s.push(this[w]=this.vertical===w?w:void 0)}return s};i.prototype.eql=function(s){return(s!=null)&&this.horizontal===s.horizontal&&this.vertical===s.vertical};i.prototype.flip=function(){var s,t;t=h.position[this.toString(true)];s=(t+4)%8;this.set(h.positions[s]);return this};i.prototype.toString=function(u){var s,t;if(u==null){u=false}t=this.vertical==="middle"?"":this.vertical;s=this.horizontal==="center"?"":this.horizontal;if(t&&s){if(u){s=h.prototype.ucfirst(s)}else{s=" "+s}}return""+t+s};return i})();h.prototype._positionsEqual=function(i,s){return(i!=null)&&(s!=null)&&i.left===s.left&&i.top===s.top};h.prototype._dimensionsEqual=function(s,i){return(s!=null)&&(i!=null)&&s.width===i.width&&s.height===i.height};h.prototype.debug=function(){var i;i=1<=arguments.length?e.call(arguments,0):[];if(h.debug&&((typeof console!=="undefined"&&console!==null?console.debug:void 0)!=null)){i.unshift("#"+this.id+" |");return console.debug.apply(console,i)}};h.version="2.4.6";h.debug=false;h.lastId=0;h.lastZIndex=100;h.tips=[];h._abortShowingGroup=function(x,w){var t,v,s,u,i;u=h.tips;i=[];for(v=0,s=u.length;v<s;v++){t=u[v];if(t!==w&&t.options.group===x){i.push(t._abortShowing())}else{i.push(void 0)}}return i};h._hideGroup=function(x,w){var t,v,s,u,i;u=h.tips;i=[];for(v=0,s=u.length;v<s;v++){t=u[v];if(t!==w&&t.options.group===x){i.push(t.hide())}else{i.push(void 0)}}return i};h.adapters={};h.adapter=null;r=true;h.addAdapter=function(i){h.adapters[i.name]=i;if(r){h.adapter=i;return r=false}};h.positions=["top","topRight","right","bottomRight","bottom","bottomLeft","left","topLeft"];h.position={};c=h.positions;for(d=b=0,k=c.length;b<k;d=++b){f=c[d];h.position[f]=d}h.styles={standard:{"extends":null,title:void 0,escapeTitle:true,escapeContent:false,className:"standard",stem:true,delay:null,hideDelay:0.1,fixed:false,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:false,offset:[0,0],containInViewport:true,autoOffset:true,showEffect:"appear",hideEffect:"fade",showEffectDuration:0.3,hideEffectDuration:0.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:true,ajax:false,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,style:null,background:"#fff18f",backgroundGradientHorizontal:false,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:true,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[0.5,"rgba(255, 255, 255, 0.8)"],[0.5,"rgba(250, 250, 250, 0.9)"],[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[0.5,"rgba(30, 30, 30, 0.8)"],[0.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[0.5,"rgba(203, 15, 19, 0.8)"],[0.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}};h.defaultStyle="standard";h.getTips=function(i){return h.adapter.data(i,"__opentips")||[]};h.setTips=function(s,i){return h.adapter.data(s,"__opentips",i||[])};h.removeTip=function(t){for(var s=h.tips.length;s--;){var t=h.tips[s];if(t){return h.tips.splice(s,1)}}};h.addTip=function(i){h.tips.push(i)};if(typeof module!=="undefined"&&module!==null){module.exports=h}else{window.Opentip=h}var e=[].slice;(function(i){var s;jQuery.fn.opentip=function(u,v,t){return new h(this,u,v,t)};s=(function(){function t(){}t.prototype.name="jquery";t.prototype.domReady=function(u){return jQuery(u)};t.prototype.create=function(u,v){if(v){var w=v.createElement("div");w.innerHTML=u;w=w.firstChild;w.parentNode.removeChild(w);return jQuery(w)}else{return jQuery(u)}};t.prototype.wrap=function(u){u=i(u);if(u.length>1){throw new Error("Multiple elements provided.")}return u};t.prototype.unwrap=function(u){return i(u)[0]};t.prototype.tagName=function(u){return this.unwrap(u).tagName};t.prototype.attr=function(){var u,v,w;v=arguments[0],u=2<=arguments.length?e.call(arguments,1):[];return(w=i(v)).attr.apply(w,u)};t.prototype.data=function(){var u,v,w;v=arguments[0],u=2<=arguments.length?e.call(arguments,1):[];return(w=jQuery(v)).data.apply(w,u)};t.prototype.find=function(v,u){return jQuery(v).find(u).get(0)};t.prototype.findAll=function(v,u){return jQuery(v).find(u)};t.prototype.update=function(u,w,v){u=jQuery(u);if(v){return u.text(w)}else{return u.html(w)}};t.prototype.append=function(u,v){return i(u).append(v)};t.prototype.remove=function(u){return i(u).remove()};t.prototype.addClass=function(u,v){return i(u).addClass(v)};t.prototype.removeClass=function(u,v){return i(u).removeClass(v)};t.prototype.css=function(v,u){return i(v).css(u)};t.prototype.dimensions=function(u){return{width:i(u).outerWidth(),height:i(u).outerHeight()}};t.prototype.scrollOffset=function(v,u){return[v.pageXOffset||u.documentElement.scrollLeft||u.body.scrollLeft,v.pageYOffset||u.documentElement.scrollTop||u.body.scrollTop]};t.prototype.viewportDimensions=function(u){return{width:u.documentElement.clientWidth,height:u.documentElement.clientHeight}};t.prototype.mousePosition=function(u){if(u==null){return null}return{x:u.pageX,y:u.pageY}};t.prototype.offset=function(u){var v;v=jQuery(u).offset();return{left:v.left,top:v.top}};t.prototype.observe=function(w,v,u){return i(w).bind(v,u)};t.prototype.stopObserving=function(w,v,u){return i(w).unbind(v,u)};t.prototype.ajax=function(v){var w,u;if(v.url==null){throw new Error("No url provided")}return jQuery.ajax({url:v.url,type:(w=(u=v.method)!=null?u.toUpperCase():void 0)!=null?w:"GET"}).done(function(x){return typeof v.onSuccess==="function"?v.onSuccess(x):void 0}).fail(function(x){return typeof v.onError==="function"?v.onError("Server responded with status "+x.status):void 0}).always(function(){return typeof v.onComplete==="function"?v.onComplete():void 0})};t.prototype.clone=function(u){return jQuery.extend({},u)};t.prototype.extend=function(){var u,v;v=arguments[0],u=2<=arguments.length?e.call(arguments,1):[];return jQuery.extend.apply(i,[v].concat(e.call(u)))};return t})();return h.addAdapter(new s)})(jQuery);var l={removeElementsOnHide:true,fixed:true,showOn:"creation"};var a={titleTemplate:"Changed by %u %t",delay:1000};o.OpentipAdapter=function(){};o.OpentipAdapter.prototype={init:function(i){this._options=jQuery.extend(a,i||{});this._tips=[]},showTooltip:function(s,v,u){var i=jQuery.extend({target:s,boundingElement:u},l),t=new h(s,v,i);t.show();jQuery(s).data("_lite_tip_",t)},hideAll:function(s){var u={hideDelay:0,hideEffectDuration:0};try{for(var t=h.tips.length;t--;){h.tips[t].deactivate()}}catch(v){}if(s&&s.ownerDocument){try{h.adapter.wrap(s.ownerDocument.body).find("div."+h.prototype["class"]["container"]).remove()}catch(v){}}},hideTooltip:function(w,t){var s=h.getTips(w);if(s){var u={};if(t){u.hideDelay=0;u.hideEffectDuration=0}for(var v=s.length;v--;){s[v].deactivate(u)}}}}})(window);
/* Copyright (C) 2015 LoopIndex - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the LoopIndex Comments CKEditor plugin license.
 *
 * You should have received a copy of the LoopIndex Comments CKEditor plugin license with
 * this file. If not, please write to: loopindex@gmail.com, or visit http://www.loopindex.com
 * written by (David *)Frenkiel (https://github.com/imdfl) 
 */