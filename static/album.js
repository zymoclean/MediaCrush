(function(){var confirm,confirmCallback,createCookie,dataURItoBlob,guid,readCookie,s4,switchTheme;readCookie=function(name){var c,ca,nameEQ,_i,_len;nameEQ=name+"=";ca=document.cookie.split(';');for(_i=0,_len=ca.length;_i<_len;_i++){c=ca[_i];while(c.charAt(0)===' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}return null;};window.readCookie=readCookie;createCookie=function(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else expires="; expires=Thu, 01-Jan-1970 00:00:01 GMT";return document.cookie=name+"="+value+expires+"; path=/";};window.createCookie=createCookie;dataURItoBlob=function(uri){var ab,byteString,i,ia,mimeString,_i,_ref;byteString=atob(uri.split(',')[1]);mimeString=uri.split(',')[0].split(':')[1].split(':')[0];ab=new ArrayBuffer(byteString.length);ia=new Uint8Array(ab);for(i=_i=0,_ref=byteString.length;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i)ia[i]=byteString.charCodeAt(i);return new Blob([ab],{type:'image/png'});};window.dataURItoBlob=dataURItoBlob;switchTheme=function(){if(readCookie('dark_theme'))createCookie('dark_theme','',-1);else createCookie('dark_theme',1,3650);return window.location.href=window.location.href;};window.switchTheme=switchTheme;confirmCallback=null;window.addEventListener('DOMContentLoaded',function(){var dialogNo,dialogYes,feedback,feedbackSend,feedbackToggle;if(document.getElementById('feedback')!==null){feedback=document.getElementById('feedback').querySelector('div');feedbackToggle=document.getElementById('toggle-feedback');if(feedbackToggle)feedbackToggle.addEventListener('click',function(e){e.preventDefault();if(feedbackToggle.parentElement.className.indexOf('active')===-1){feedbackToggle.parentElement.classList.add('active');return feedback.querySelector('textarea').focus();}else return feedbackToggle.parentElement.classList.remove('active');},false);feedbackSend=document.getElementById('send-feedback');if(feedbackSend)feedbackSend.addEventListener('click',function(e){var feedbackText,formData,xhr;e.preventDefault();feedbackText=document.getElementById('feedback-text');xhr=new XMLHttpRequest();formData=new FormData();xhr.open('POST','/api/feedback');formData.append('feedback',feedbackText.value);xhr.onload=function(){var result;result=(function(){switch(this.status){case 200:return "Thanks! We read every one of these. Keep in mind, though, this feedback is anonymous. <a href='mailto:support@mediacru.sh'>Email us</a> if you want a response.";case 420:return "Sorry, you can't send more feedback today. Try again in 24 hours!";case 413:return "Sorry, that feedback is too long.";default:return "Sorry, something unexpected happened.";}}).call(this);return feedback.innerHTML="<p>"+result+"</p>";};return xhr.send(formData);},false);}dialogYes=document.querySelector('.dialog .yes');dialogNo=document.querySelector('.dialog .no');if(dialogYes!==null){dialogYes.addEventListener('click',function(e){e.preventDefault();if(confirmCallback)confirmCallback(true);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');},false);return dialogNo.addEventListener('click',function(e){e.preventDefault();if(confirmCallback)confirmCallback(false);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');},false);}},false);confirm=function(callback){confirmCallback=callback;document.querySelector('.dialog').classList.remove('hidden');return document.querySelector('.dialog .no').focus();};window.confirm=confirm;window.addEventListener('keydown',function(e){if(confirmCallback===null)return;if(e.keyCode===27){if(confirmCallback)confirmCallback(false);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');}},false);s4=function(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);};guid=function(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();};window.guid=guid;window.getPosition=function(e){var x,y;x=0;y=0;while(true){x+=e.offsetLeft;y+=e.offsetTop;if(e.offsetParent===null)break;e=e.offsetParent;}return [x,y];};window.addEventListener('DOMContentLoaded',function(e){var link,_i,_len,_ref,_results;_ref=document.querySelectorAll('.ad-opt-out');_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){link=_ref[_i];_results.push(link.addEventListener('click',function(e){var a,ad,_j,_k,_l,_len1,_len2,_len3,_ref1,_ref2,_ref3,_results1;e.preventDefault();if(readCookie('ad-opt-out')){e.target.textContent='opt-out';_ref1=document.querySelectorAll('.ad-state');for(_j=0,_len1=_ref1.length;_j<_len1;_j++){a=_ref1[_j];a.textContent='opted-in';}createCookie('ad-opt-out','',-1);}else{e.target.textContent='opt-in';_ref2=document.querySelectorAll('.ad-state');for(_k=0,_len2=_ref2.length;_k<_len2;_k++){a=_ref2[_k];a.textContent='opted-out';}createCookie('ad-opt-out',1,3650);}_ref3=document.querySelectorAll('.advertisement');_results1=[];for(_l=0,_len3=_ref3.length;_l<_len3;_l++){ad=_ref3[_l];_results1.push(ad.innerHTML="Sorry! You won't see any ads again. If you change your mind, <a href='/advertising'>opt-in here</a>.");}return _results1;},false));}return _results;},false);if(!window.embedded)console.log("  -++++:--`                  \n -hddddddddhy+/.             \n-hddddddddddddddhy/.         \n`ydddddddddddddddddddy+`      \n+ddddddhsoooshyooooydddhs:    \nddddddo`     `      ydddddy:  \ndddddh` `yh+  :hy.  yddddddds`  Want to read the unobsfucated source? Check it out\nddddds  :dd:  sdy` .hddddddddh  at https://github.com/MediaCrush/MediaCrush\nddddd/  odh. `hdo  /dddddddh+`\nhdddh. `hds  :dh:  sddddddy-    Send us some pull requests!\n/dddhsssddyssydhssshdddh+-    \n`ydddddddddddddddddddy+`      \n-hddddddddddddddhy/.         \n -hdddddddddyo/-`            \n  -++++/--``                 \n\nTry exploring `window.API` and `window.UserHistory` to have some fun.");}).call(this);(function(){var MediaPlayer,subtitleRenderers;subtitleRenderers={};document.cancelFullScreen=document.cancelFullScreen||document.mozCancelFullScreen||document.webkitCancelFullScreen||document.msExitFullscreen;MediaPlayer=function(container){var adjustVolumeProgress,adjustingVolume,beginAdjustVolume,beginSeek,controls,debounce,endAdjustVolume,endSeek,event,ex,fullscreen,id,idleDebounce,idleEvent,idleUI,isAudio,isFullscreen,isVideo,leaveFullscreen,media,playPause,prefix,rate,rates,ready,seek,seekClick,seekProgress,seeking,startButton,timeout,toggleLoop,toggleSubs,updateMedia,volume,volumeClick,volumeIcon,wasPaused,_i,_j,_k,_len,_len1,_len2,_ref,_ref1;media=container.querySelector('video, audio');id=container.getAttribute('data-media');isVideo=media.tagName==='VIDEO';isAudio=media.tagName==='AUDIO';controls=container.querySelector('.controls');playPause=container.querySelector('.play-pause');startButton=container.querySelector('.start');fullscreen=container.querySelector('.fullscreen');isFullscreen=false;toggleLoop=container.querySelector('.loop');toggleSubs=container.querySelector('.subtitles');rates=container.querySelectorAll('.speeds a');seek=container.querySelector('.seek');volume=container.querySelector('.volume > div');ready=false;media.controls=false;if(isVideo){window.mediaSizeReporter=function(){return{width:media.videoWidth,height:media.videoHeight};};setTimeout(function(){if(window.updateSize!=null)return window.updateSize();},500);}updateMedia=function(){var loaded,s,_i,_len,_ref;if(!ready){ready=true;_ref=seek.querySelectorAll('.hidden');for(_i=0,_len=_ref.length;_i<_len;_i++){s=_ref[_i];s.classList.remove('hidden');}seek.querySelector('.progress').classList.add('hidden');}if(window.embedded)if(window.updateSize!=null)window.updateSize(media.videoWidth,media.videoHeight);if(media.buffered.length===0)loaded=100;else loaded=media.buffered.end(media.buffered.length-1)/media.duration*100;seek.querySelector('.loaded').style.width=loaded+'%';seek.querySelector('.played').style.width=media.currentTime/media.duration*100+'%';if(media.ended&&(startButton!=null))startButton.classList.remove('hidden');if(media.paused){if(isVideo)controls.classList.add('fixed');playPause.classList.remove('pause');return playPause.classList.add('play');}else{if(isVideo)controls.classList.remove('fixed');playPause.classList.remove('play');playPause.classList.add('pause');if(startButton!=null)return startButton.classList.add('hidden');}};updateMedia();_ref=['progress','timeupdate','pause','playing','seeked','ended','loadedmetadata'];for(_i=0,_len=_ref.length;_i<_len;_i++){event=_ref[_i];media.addEventListener(event,function(e){if(media.readyState>=3||ready)return updateMedia();},false);}if(toggleSubs)toggleSubs.addEventListener('click',function(e){e.preventDefault();if(container.className.indexOf('subs-off')===-1){if(subtitleRenderers[id]!=null)subtitleRenderers[id].disableSubs();container.classList.add('subs-off');toggleSubs.querySelector('.icon').classList.add('disabled');return toggleSubs.querySelector('.text').textContent='Subtitles OFF';}else{if(subtitleRenderers[id]!=null)subtitleRenderers[id].enableSubs();container.classList.remove('subs-off');toggleSubs.querySelector('.icon').classList.remove('disabled');return toggleSubs.querySelector('.text').textContent='Subtitles ON';}},false);if(volume!==null){volumeIcon=volume.parentElement.querySelector('.icon');volumeIcon.addEventListener('click',function(e){e.preventDefault();return media.muted=!media.muted;},false);media.addEventListener('volumechange',function(e){var iconSymbol,_ref1;if(media.muted){volume.parentElement.classList.add('muted');return volumeIcon.setAttribute('data-icon','\uF038');}else{volume.parentElement.classList.remove('muted');if(media.volume>0.66)iconSymbol='\uF03B';else if((0.33<(_ref1=media.volume)&&_ref1<=0.66))iconSymbol='\uF03A';else iconSymbol='\uF039';return volumeIcon.setAttribute('data-icon',iconSymbol);}},false);adjustingVolume=false;beginAdjustVolume=function(e){e.preventDefault();adjustingVolume=true;return adjustVolumeProgress(e);};adjustVolumeProgress=function(e){var amount,ex,height,width;e.preventDefault();if(!adjustingVolume)return;if(isVideo){height=volume.querySelector('.background').clientHeight;if(e.offsetY!=null)amount=(height-e.offsetY)/height;else amount=(height-e.layerY)/height;volume.querySelector('.amount').style.height=amount*100+'%';}else{width=volume.querySelector('.background').clientWidth;if(e.offsetX!=null)amount=e.offsetX/width;else amount=e.layerX/width;volume.querySelector('.amount').style.width=amount*100+'%';}media.volume=amount;try{return window.localStorage.volume=amount;}catch(_error){ex=_error;}};endAdjustVolume=function(e){e.preventDefault();return adjustingVolume=false;};try{if(window.localStorage.volume!=null){media.volume=window.localStorage.volume;if(isVideo)volume.querySelector('.amount').style.height=window.localStorage.volume*100+'%';else volume.querySelector('.amount').style.width=window.localStorage.volume*100+'%';}}catch(_error){ex=_error;}volumeClick=volume.querySelector('.clickable');volumeClick.addEventListener('mousedown',beginAdjustVolume,false);volumeClick.addEventListener('mouseup',endAdjustVolume,false);volumeClick.addEventListener('mousemove',adjustVolumeProgress,false);volumeClick.addEventListener('mouseleave',endAdjustVolume,false);}if(isVideo){idleDebounce=false;idleUI=function(){idleDebounce=true;controls.classList.add('idle');return media.classList.add('idle');};timeout=null;idleEvent=function(e){if(idleDebounce){idleDebounce=false;return false;}clearTimeout(timeout);controls.classList.remove('idle');media.classList.remove('idle');return true;};media.addEventListener('mousemove',function(e){if(idleEvent(e))return timeout=setTimeout(idleUI,3000);},false);controls.addEventListener('mousemove',idleEvent,false);}seeking=false;wasPaused=true;beginSeek=function(e){e.preventDefault();seeking=true;wasPaused=media.paused;media.pause();return seekProgress(e);};seekProgress=function(e){var amount;e.preventDefault();if(!seeking)return;if(e.offsetX!=null)amount=e.offsetX/seek.clientWidth;else amount=e.layerX/seek.clientWidth;return media.currentTime=media.duration*amount;};endSeek=function(e){e.preventDefault();if(!seeking)return;if(!wasPaused)media.play();return seeking=false;};seekClick=seek.querySelector('.clickable');seekClick.addEventListener('mousedown',beginSeek,false);seekClick.addEventListener('mouseup',endSeek,false);seekClick.addEventListener('mousemove',seekProgress,false);seekClick.addEventListener('mouseleave',endSeek,false);if(fullscreen!==null){debounce=true;_ref1=['','moz','webkit','ms'];for(_j=0,_len1=_ref1.length;_j<_len1;_j++){prefix=_ref1[_j];document.addEventListener(prefix+'fullscreenchange',function(e){if(debounce){debounce=false;return;}debounce=true;if(isFullscreen)return leaveFullscreen();},false);}fullscreen.addEventListener('click',function(e){e.preventDefault();if(!isFullscreen){isFullscreen=true;fullscreen.classList.add('disabled');if(container.requestFullScreen!=null)container.requestFullScreen();if(container.mozRequestFullScreen!=null)container.mozRequestFullScreen();if(container.webkitRequestFullScreen!=null)container.webkitRequestFullScreen();if(container.msRequestFullscreen!=null)container.msRequestFullscreen();container.classList.add('fullscreen');window.setTimeout(function(){if(subtitleRenderers[id]!=null)return subtitleRenderers[id].resize(media.offsetWidth,media.offsetHeight);},100);return timeout=setTimeout(idleUI,3000);}else return leaveFullscreen();},false);leaveFullscreen=function(){var _;isFullscreen=false;container.classList.remove('fullscreen');fullscreen.classList.remove('disabled');document.cancelFullScreen();_=document.querySelector('.media');if(_)_.style.right=0;return window.setTimeout(function(){if(_)_.style.right='-50%';if(subtitleRenderers[id]!=null)return subtitleRenderers[id].resize(media.offsetWidth,media.offsetHeight);},200);};}playPause.addEventListener('click',function(e){e.preventDefault();if(media.paused)return media.play();else return media.pause();},false);if(startButton!=null)startButton.addEventListener('click',function(e){e.preventDefault();return media.play();},false);toggleLoop.addEventListener('click',function(e){e.preventDefault();if(media.loop){media.loop=false;toggleLoop.querySelector('.icon').classList.add('disabled');return toggleLoop.querySelector('.text').textContent='Loop OFF';}else{media.loop=true;toggleLoop.querySelector('.icon').classList.remove('disabled');toggleLoop.querySelector('.text').textContent='Loop ON';if(media.ended){media.currentTime=0;return media.play();}}},false);for(_k=0,_len2=rates.length;_k<_len2;_k++){rate=rates[_k];rate.addEventListener('click',function(e){var speed;e.preventDefault();speed=parseFloat(e.target.getAttribute('data-speed'));container.querySelector('.speeds a.selected').classList.remove('selected');e.target.classList.add('selected');return media.playbackRate=speed;},false);}return window.resizeMedia=function(width,height){if(!isVideo)return;if(!ready)return;media.width=width;media.height=height-5;if(subtitleRenderers[id]!=null)return subtitleRenderers[id].resize(media.offsetWidth,media.offsetHeight);};};window.MediaPlayer=MediaPlayer;document.addEventListener('DOMContentLoaded',function(){var player,_i,_len,_ref,_results;_ref=document.querySelectorAll('.player.subtitled');_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){player=_ref[_i];_results.push((function(player){var ass,format,handleSubsReady,id,request,style,track,video;id=player.getAttribute('data-media');video=player.querySelector('video');track=video.querySelector('track');format=track.dataset.format;if(format==='ass'){style=document.getElementById('font-map-'+id);ass=null;handleSubsReady=function(video,ass){var height,renderer,width;if(video.readyState>=HTMLMediaElement.HAVE_METADATA&&ass){width=video.offsetWidth;height=video.offsetHeight;renderer=new libjass.renderers.DefaultRenderer(video,ass,{fontMap:libjass.renderers.RendererSettings.makeFontMapFromStyleElement(style)});renderer.resize(width,height);subtitleRenderers[id]={resize:function(){return renderer.resize.apply(renderer,arguments);},disableSubs:function(){return renderer.disable();},enableSubs:function(){return renderer.enable();}};if(video.parentElement.classList.contains('subs-off'))return renderer.disable();}};if(video.readyState<HTMLMediaElement.HAVE_METADATA)video.addEventListener('loadedmetadata',function(){return handleSubsReady(video,ass);},false);else handleSubsReady(video,ass);request=new XMLHttpRequest();request.open('GET',track.src||track.getAttribute('src'));request.onload=function(){ass=libjass.ASS.fromString(this.responseText);return handleSubsReady(video,ass);};request.send();}if(format==='vtt'){captionator.captionify(video,"en",{});subtitleRenderers[id]={resize:function(){},disableSubs:function(){return video.textTracks[0].mode='hidden';},enableSubs:function(){return video.textTracks[0].mode='showing';}};if(video.parentElement.classList.contains('subs-off'))return video.textTracks[0].mode='hidden';}})(player));}return _results;},false);}).call(this);(function(){var API;(function(xhr){var open;open=XMLHttpRequest.prototype.open;return xhr.prototype.open=function(){open.apply(this,arguments);return this.setRequestHeader('X-Requested-With','XMLHttpRequest');};})(XMLHttpRequest);API=new (function(){var self;self=this;self.uploadFile=function(file,progress,callback){var formData,xhr;xhr=new XMLHttpRequest();xhr.open('POST','/api/upload/file');xhr.upload.onprogress=progress;xhr.onload=function(){var error,response;switch(this.status){case 415:error="This media format is not supported.";break;case 420:error="You're uploading too much! Try again later.";break;case 409:response=JSON.parse(this.responseText);file.isUserOwned=false;file.hash=response.hash;file.isHashed=true;file.updateStatus('done');break;case 200:response=JSON.parse(this.responseText);file.isUserOwned=true;file.hash=response.hash;file.isHashed=true;file.updateStatus('pending');}if(error!=null){if(callback)return callback({error:error});}else if(callback)return callback({file:file});};formData=new FormData();formData.append('file',file.file);return xhr.send(formData);};self.uploadUrl=function(file,callback){var formData,xhr;xhr=new XMLHttpRequest();xhr.open('POST','/api/upload/url');file.updateStatus('uploading');file.preview.querySelector('.progress').style.width='100%';xhr.onload=function(){var error,response;switch(this.status){case 400:error="This URL is not valid.";break;case 404:error="That URL does not exist, so far as we can tell.";break;case 409:response=JSON.parse(this.responseText);file.isUserOwned=false;file.hash=response.hash;file.isHashed=true;file.updateStatus('done');break;case 413:error="This file is too large.";break;case 415:error="This filetype is not supported.";break;case 420:error="You're uploading too much! Try again later.";break;case 200:response=JSON.parse(this.responseText);file.isUserOwned=true;file.hash=response.hash;file.isHashed=true;file.updateStatus('pending');}if(error)if(callback)callback({file:file,error:error});if(callback)return callback({file:file});};formData=new FormData();formData.append('url',file.file);return xhr.send(formData);};self.checkExists=function(file,callback){var xhr;xhr=new XMLHttpRequest();xhr.open('GET',"/api/"+file.hash+"/exists");xhr.onload=function(){var response;response=JSON.parse(this.responseText);if(callback)return callback(response.exists);};return xhr.send();};self.checkStatus=function(files,callback){var xhr;xhr=new XMLHttpRequest();xhr.open('GET',"/api/status?list="+files);xhr.onload=function(){var response;response=JSON.parse(this.responseText);if(callback)return callback(response);};return xhr.send();};self.deleteFile=function(file){var xhr;xhr=new XMLHttpRequest();xhr.open('DELETE',"/api/"+file);xhr.send();return UserHistory.remove(file);};self.setFlags=function(file,flags){var flag,formData,value,xhr;xhr=new XMLHttpRequest();formData=new FormData();for(flag in flags){value=flags[flag];formData.append(flag,value);}xhr.open('POST',"/api/"+file+"/flags");return xhr.send(formData);};self.createAlbum=function(files,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('list',files.join(','));xhr.open('POST','/api/album/create');xhr.onload=function(){var result;if(this.status!==200)if(callback)callback({error:true});result=JSON.parse(this.responseText);if(result.error!=null)if(callback)callback({error:true});if(callback)return callback({hash:result.hash});};return xhr.send(formData);};self.zipAlbum=function(hash,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('hash',hash);xhr.open('POST','/api/album/zip');xhr.onload=function(){var result;if(this.status!==200)if(callback)callback({error:true});result=JSON.parse(this.responseText);if(result.error!=null)if(callback)callback({error:true});if(callback)return callback(result);};return xhr.send(formData);};self.reportFile=function(file){var xhr;xhr=new XMLHttpRequest();xhr.open('POST',"/report/"+window.filename);return xhr.send();};self.setText=function(hash,title,description,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('title',title);formData.append('description',description);xhr.open('POST',"/api/"+hash+"/text");xhr.onload=function(){if(callback)return callback(self);};return xhr.send(formData);};return self;})();if(typeof window!=="undefined"&&window!==null)window.API=API;}).call(this);(function(){var clickFocus,downloadAlbum,downloadFinishedZip,focusItem,focusLeft,focusRight,initializeFocus,initializeScrollLoading,loaded,pollZip,populateFocus,selected,showDownloadModal,zipComplete;window.addEventListener('DOMContentLoaded',function(){var input,_i,_len,_ref;_ref=document.querySelectorAll('input.selectall');for(_i=0,_len=_ref.length;_i<_len;_i++){input=_ref[_i];input.addEventListener('mouseenter',function(e){e.target.focus();return e.target.select();});}switch(window.albumType){case 'list':initializeScrollLoading(true,3);break;case 'focus':initializeFocus();}return document.getElementById('album-download').addEventListener('click',function(e){e.preventDefault();e.target.classList.add('hidden');return downloadAlbum();},false);},false);zipComplete=false;downloadAlbum=function(){return API.zipAlbum(window.filename,function(result){if(result.error!=null){alert('An error occured with your request.');return;}if(result.status==='done')return downloadFinishedZip();else if(result.status==='success'){showDownloadModal();window.onbeforeunload=function(){if(!zipComplete)return "If you leave this page, you won't get your zip file.";};return window.setTimeout(pollZip,1000);}else return alert('An error occured with your request.');});};downloadFinishedZip=function(){var iframe;iframe=document.createElement('iframe');iframe.src="/download/"+window.filename+".zip";iframe.className='hidden';document.body.appendChild(iframe);return zipComplete=true;};pollZip=function(){return API.zipAlbum(window.filename,function(result){if(result.status==='done')return downloadFinishedZip();else return window.setTimeout(pollZip,1000);});};showDownloadModal=function(){var dialogNo;document.querySelector('.album-pending').classList.remove('hidden');document.querySelector('.album-pending .no').focus();dialogNo=document.querySelector('.dialog .no');return dialogNo.addEventListener('click',function(e){e.preventDefault();return document.querySelector('.album-pending').classList.add('hidden');},false);};selected=0;loaded=6;focusLeft=function(e){var clearfix,focus,item,mediaItem,next,paused,sidebar,sidebarItem,target,video,xhr;if(e!=null)e.preventDefault();if(selected===0)return;focus=document.querySelector('.focus .selected');item=focus.firstElementChild;video=item.querySelector('video');if(video)paused=video.paused;focus.removeChild(item);sidebarItem=document.createElement('div');sidebarItem.className='item';mediaItem=document.createElement('div');mediaItem.className='media-item';mediaItem.dataset.index=selected;clearfix=document.createElement('div');clearfix.classList.add('clearfix');target=document.createElement('a');target.classList.add('target');target.href='#';target.addEventListener('click',clickFocus,false);mediaItem.appendChild(item);sidebarItem.appendChild(mediaItem);sidebarItem.appendChild(clearfix);sidebarItem.appendChild(target);sidebar=document.querySelector('.focus .items');sidebar.insertBefore(sidebarItem,sidebar.firstElementChild);if(video&&!paused)video.play();selected--;selected%=window.files.length;next=window.files[selected];xhr=new XMLHttpRequest();xhr.open('GET',"/"+next.hash+"/fragment");xhr.onload=function(){return focus.innerHTML=this.responseText;};xhr.send();return populateFocus();};focusRight=function(e){if(e!=null)e.preventDefault();if(selected===window.files.length-1)return;return focusItem(document.querySelector('.focus .items .item .media-item'));};focusItem=function(item){var container,focus,index,items,playing,temp,video;container=item.parentElement;items=container.parentElement;video=item.querySelector('video');if(video)playing=!video.paused;container.parentElement.removeChild(container);focus=document.querySelector('.focus .selected');focus.innerHTML='';focus.appendChild(item);if(video)item.style.maxWidth=video.videoWidth+'px';if(video&&playing)video.play();index=parseInt(item.dataset.index);temp=index-1;while(temp!==selected){items.removeChild(items.querySelector('.item'));temp-=1;}selected=index;return populateFocus();};populateFocus=function(){var next,_results;document.querySelector('.controls .index').textContent=selected+1;if(selected===0)document.querySelector('.controls .previous').classList.add('hidden');else document.querySelector('.controls .previous').classList.remove('hidden');if(selected===window.files.length-1)document.querySelector('.controls .next').classList.add('hidden');else document.querySelector('.controls .next').classList.remove('hidden');selected%=window.files.length;_results=[];while(loaded-selected<6){next=window.files[loaded%window.files.length];(function(loaded){var xhr;xhr=new XMLHttpRequest();xhr.open('GET',"/"+next.hash+"/fragment");xhr.onload=function(){var clearfix,hidden,item,mediaItem,target,_i,_len,_ref,_results1;item=document.createElement('div');item.className='item';mediaItem=document.createElement('div');mediaItem.className='media-item';mediaItem.dataset.hash=next.hash;mediaItem.dataset.index=loaded%window.files.length;clearfix=document.createElement('div');clearfix.classList.add('clearfix');target=document.createElement('a');target.classList.add('target');target.href='#';target.addEventListener('click',clickFocus,false);mediaItem.innerHTML=this.responseText;item.appendChild(mediaItem);item.appendChild(clearfix);item.appendChild(target);document.querySelector('.focus .items').appendChild(item);_ref=document.querySelectorAll('.hidden-if-noscript');_results1=[];for(_i=0,_len=_ref.length;_i<_len;_i++){hidden=_ref[_i];_results1.push(hidden.classList.remove('hidden-if-noscript'));}return _results1;};return xhr.send();})(loaded);_results.push(loaded++);}return _results;};clickFocus=function(e){e.preventDefault();return focusItem(e.target.parentElement.querySelector('.media-item'));};initializeFocus=function(){var item,_i,_len,_ref;_ref=document.querySelectorAll('.focus .right .item');for(_i=0,_len=_ref.length;_i<_len;_i++){item=_ref[_i];item.addEventListener('click',clickFocus,false);}window.addEventListener('keypress',function(e){if(e.keyCode===37)focusLeft();if(e.keyCode===39)return focusRight();},false);document.querySelector('.focus .controls .previous').addEventListener('click',focusLeft,false);return document.querySelector('.focus .controls .next').addEventListener('click',focusRight,false);};initializeScrollLoading=function(includeClearfix,itemsLoaded){var checkLoad,getBottomOfLastItem,getScroll,isLoading,lastItemY,viewPortHeight;getScroll=function(){var body,doc;doc=document.documentElement;body=document.body;return(window.pageYOffset||doc.scrollTop)-(doc.clientTop||0);};viewPortHeight=function(){var de;de=document.documentElement;if(window.innerWidth!=null)return window.innerHeight;return de.clientHeight;};getBottomOfLastItem=function(){var element,items;items=document.querySelectorAll('.media-wrapper');element=items[items.length-1];return getPosition(element)[1];};lastItemY=getBottomOfLastItem();if(window.files.length<3)itemsLoaded=window.files.length;isLoading=false;checkLoad=function(){var nextItem,xhr;if(itemsLoaded===window.files.length)return;if(isLoading)return;if(lastItemY-getScroll()<viewPortHeight()){isLoading=true;document.querySelector('.progress').classList.remove('hidden');nextItem=window.files[itemsLoaded];xhr=new XMLHttpRequest();xhr.open('GET',"/"+nextItem.hash+"/fragment");xhr.onload=function(){var clearfix,column,hidden,media,update,wrapper,_i,_len,_ref,_results;document.querySelector('.progress').classList.add('hidden');wrapper=document.createElement('div');wrapper.classList.add('media-wrapper');media=document.createElement('div');media.classList.add('media');column=document.createElement('div');column.classList.add('column');clearfix=document.createElement('div');clearfix.classList.add('clearfix');media.innerHTML=this.responseText;update=function(){lastItemY=getBottomOfLastItem();isLoading=false;itemsLoaded++;return checkLoad();};if(media.querySelector('img'))media.querySelector('img').addEventListener('load',update,false);if(media.querySelector('audio,video'))media.querySelector('video,audio').addEventListener('loadedmetadata',update,false);if(nextItem.blob_type==='audio'||nextItem.blob_type==='video')new MediaPlayer(media.querySelector('.player'));wrapper.appendChild(media);if(includeClearfix){document.getElementById('album-files').appendChild(wrapper);document.getElementById('album-files').appendChild(clearfix);}else{column.appendChild(wrapper);document.getElementById('album-files').appendChild(column);}_ref=document.querySelectorAll('.hidden-if-noscript');_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){hidden=_ref[_i];_results.push(hidden.classList.remove('hidden-if-noscript'));}return _results;};return xhr.send();}};checkLoad();return window.addEventListener('scroll',checkLoad);};}).call(this);