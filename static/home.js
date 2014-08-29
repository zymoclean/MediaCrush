(function(){Array.prototype.remove=function(from,to){var rest,_ref;rest=this.slice((to||from)+1||this.length);this.length=(_ref=from<0)!=null?_ref:this.length+{from:from};return this.push.apply(this,rest);};Array.prototype.contains=function(a){var i,_i,_ref;for(i=_i=0,_ref=this.length;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i)if(this[i]===a)return true;return false;};if(!("classList" in document.documentElement)&&Object.defineProperty&&typeof HTMLElement!=='undefined')Object.defineProperty(HTMLElement.prototype,'classList',{get:function(){var self=this;function update(fn){return function(value){var classes=self.className.split(/\s+/),index=classes.indexOf(value);fn(classes,index,value);self.className=classes.join(" ");};}var ret={add:update(function(classes,index,value){~index||classes.push(value);}),remove:update(function(classes,index){~index&&classes.splice(index,1);}),toggle:update(function(classes,index,value){~index?classes.splice(index,1):classes.push(value);}),contains:function(value){return !!~self.className.split(/\s+/).indexOf(value);},item:function(i){return self.className.split(/\s+/)[i]||null;}};Object.defineProperty(ret,'length',{get:function(){return self.className.split(/\s+/).length;}});return ret;}});;}).call(this);(function(){var confirm,confirmCallback,createCookie,dataURItoBlob,guid,readCookie,s4,switchTheme;readCookie=function(name){var c,ca,nameEQ,_i,_len;nameEQ=name+"=";ca=document.cookie.split(';');for(_i=0,_len=ca.length;_i<_len;_i++){c=ca[_i];while(c.charAt(0)===' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);}return null;};window.readCookie=readCookie;createCookie=function(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else expires="; expires=Thu, 01-Jan-1970 00:00:01 GMT";return document.cookie=name+"="+value+expires+"; path=/";};window.createCookie=createCookie;dataURItoBlob=function(uri){var ab,byteString,i,ia,mimeString,_i,_ref;byteString=atob(uri.split(',')[1]);mimeString=uri.split(',')[0].split(':')[1].split(':')[0];ab=new ArrayBuffer(byteString.length);ia=new Uint8Array(ab);for(i=_i=0,_ref=byteString.length;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i)ia[i]=byteString.charCodeAt(i);return new Blob([ab],{type:'image/png'});};window.dataURItoBlob=dataURItoBlob;switchTheme=function(){if(readCookie('dark_theme'))createCookie('dark_theme','',-1);else createCookie('dark_theme',1,3650);return window.location.href=window.location.href;};window.switchTheme=switchTheme;confirmCallback=null;window.addEventListener('DOMContentLoaded',function(){var dialogNo,dialogYes,feedback,feedbackSend,feedbackToggle;if(document.getElementById('feedback')!==null){feedback=document.getElementById('feedback').querySelector('div');feedbackToggle=document.getElementById('toggle-feedback');if(feedbackToggle)feedbackToggle.addEventListener('click',function(e){e.preventDefault();if(feedbackToggle.parentElement.className.indexOf('active')===-1){feedbackToggle.parentElement.classList.add('active');return feedback.querySelector('textarea').focus();}else return feedbackToggle.parentElement.classList.remove('active');},false);feedbackSend=document.getElementById('send-feedback');if(feedbackSend)feedbackSend.addEventListener('click',function(e){var feedbackText,formData,xhr;e.preventDefault();feedbackText=document.getElementById('feedback-text');xhr=new XMLHttpRequest();formData=new FormData();xhr.open('POST','/api/feedback');formData.append('feedback',feedbackText.value);xhr.onload=function(){var result;result=(function(){switch(this.status){case 200:return "Thanks! We read every one of these. Keep in mind, though, this feedback is anonymous. <a href='mailto:support@mediacru.sh'>Email us</a> if you want a response.";case 420:return "Sorry, you can't send more feedback today. Try again in 24 hours!";case 413:return "Sorry, that feedback is too long.";default:return "Sorry, something unexpected happened.";}}).call(this);return feedback.innerHTML="<p>"+result+"</p>";};return xhr.send(formData);},false);}dialogYes=document.querySelector('.dialog .yes');dialogNo=document.querySelector('.dialog .no');if(dialogYes!==null){dialogYes.addEventListener('click',function(e){e.preventDefault();if(confirmCallback)confirmCallback(true);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');},false);return dialogNo.addEventListener('click',function(e){e.preventDefault();if(confirmCallback)confirmCallback(false);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');},false);}},false);confirm=function(callback){confirmCallback=callback;document.querySelector('.dialog').classList.remove('hidden');return document.querySelector('.dialog .no').focus();};window.confirm=confirm;window.addEventListener('keydown',function(e){if(confirmCallback===null)return;if(e.keyCode===27){if(confirmCallback)confirmCallback(false);confirmCallback=null;return document.querySelector('.dialog').classList.add('hidden');}},false);s4=function(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);};guid=function(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();};window.guid=guid;window.getPosition=function(e){var x,y;x=0;y=0;while(true){x+=e.offsetLeft;y+=e.offsetTop;if(e.offsetParent===null)break;e=e.offsetParent;}return [x,y];};window.addEventListener('DOMContentLoaded',function(e){var link,_i,_len,_ref,_results;_ref=document.querySelectorAll('.ad-opt-out');_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){link=_ref[_i];_results.push(link.addEventListener('click',function(e){var a,ad,_j,_k,_l,_len1,_len2,_len3,_ref1,_ref2,_ref3,_results1;e.preventDefault();if(readCookie('ad-opt-out')){e.target.textContent='opt-out';_ref1=document.querySelectorAll('.ad-state');for(_j=0,_len1=_ref1.length;_j<_len1;_j++){a=_ref1[_j];a.textContent='opted-in';}createCookie('ad-opt-out','',-1);}else{e.target.textContent='opt-in';_ref2=document.querySelectorAll('.ad-state');for(_k=0,_len2=_ref2.length;_k<_len2;_k++){a=_ref2[_k];a.textContent='opted-out';}createCookie('ad-opt-out',1,3650);}_ref3=document.querySelectorAll('.advertisement');_results1=[];for(_l=0,_len3=_ref3.length;_l<_len3;_l++){ad=_ref3[_l];_results1.push(ad.innerHTML="Sorry! You won't see any ads again. If you change your mind, <a href='/advertising'>opt-in here</a>.");}return _results1;},false));}return _results;},false);if(!window.embedded)console.log("  -++++:--`                  \n -hddddddddhy+/.             \n-hddddddddddddddhy/.         \n`ydddddddddddddddddddy+`      \n+ddddddhsoooshyooooydddhs:    \nddddddo`     `      ydddddy:  \ndddddh` `yh+  :hy.  yddddddds`  Want to read the unobsfucated source? Check it out\nddddds  :dd:  sdy` .hddddddddh  at https://github.com/MediaCrush/MediaCrush\nddddd/  odh. `hdo  /dddddddh+`\nhdddh. `hds  :dh:  sddddddy-    Send us some pull requests!\n/dddhsssddyssydhssshdddh+-    \n`ydddddddddddddddddddy+`      \n-hddddddddddddddhy/.         \n -hdddddddddyo/-`            \n  -++++/--``                 \n\nTry exploring `window.API` and `window.UserHistory` to have some fun.");}).call(this);(function(){window.UserHistory=new (function(){var historyEnabled,self,userHistory;self=this;userHistory=[];historyEnabled=true;self.getHistory=function(){return userHistory;};self.getHistoryEnabled=function(){return historyEnabled;};historyEnabled=readCookie('hist-opt-out')===null;userHistory=JSON.parse(window.localStorage.getItem('history'));if(!userHistory)userHistory=[];self.save=function(){return window.localStorage.setItem('history',JSON.stringify(userHistory));};self.add=function(hash){var item,_i,_len;if(!historyEnabled)return;for(_i=0,_len=userHistory.length;_i<_len;_i++){item=userHistory[_i];if(item===hash)return item;}userHistory.push(hash);return self.save();};self.clear=function(){userHistory=[];return self.save();};self.remove=function(hash){var i,_i,_ref;for(i=_i=0,_ref=userHistory.length;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i)if(userHistory[i]===hash){userHistory.splice(i,1);break;}return self.save();};self.toggleHistoryEnabled=function(){if(historyEnabled)createCookie('hist-opt-out','1',3650);else createCookie('hist-opt-out','',0);historyEnabled=!historyEnabled;return historyEnabled;};self.loadDetailedHistory=function(items,callback){var hashes,xhr;if(items.length===0)callback([]);hashes=items.join(',');xhr=new XMLHttpRequest();xhr.open('GET','/api/info?list='+hashes);xhr.onload=function(){if(xhr.status!==200){document.getElementById('items').innerHTML='There was an error showing your history, sorry.';return;}if(callback)return callback(JSON.parse(this.response));};return xhr.send();};return self;})();}).call(this);(function(){var API;(function(xhr){var open;open=XMLHttpRequest.prototype.open;return xhr.prototype.open=function(){open.apply(this,arguments);return this.setRequestHeader('X-Requested-With','XMLHttpRequest');};})(XMLHttpRequest);API=new (function(){var self;self=this;self.uploadFile=function(file,progress,callback){var formData,xhr;xhr=new XMLHttpRequest();xhr.open('POST','/api/upload/file');xhr.upload.onprogress=progress;xhr.onload=function(){var error,response;switch(this.status){case 415:error="This media format is not supported.";break;case 420:error="You're uploading too much! Try again later.";break;case 409:response=JSON.parse(this.responseText);file.isUserOwned=false;file.hash=response.hash;file.isHashed=true;file.updateStatus('done');break;case 200:response=JSON.parse(this.responseText);file.isUserOwned=true;file.hash=response.hash;file.isHashed=true;file.updateStatus('pending');}if(error!=null){if(callback)return callback({error:error});}else if(callback)return callback({file:file});};formData=new FormData();formData.append('file',file.file);return xhr.send(formData);};self.uploadUrl=function(file,callback){var formData,xhr;xhr=new XMLHttpRequest();xhr.open('POST','/api/upload/url');file.updateStatus('uploading');file.preview.querySelector('.progress').style.width='100%';xhr.onload=function(){var error,response;switch(this.status){case 400:error="This URL is not valid.";break;case 404:error="That URL does not exist, so far as we can tell.";break;case 409:response=JSON.parse(this.responseText);file.isUserOwned=false;file.hash=response.hash;file.isHashed=true;file.updateStatus('done');break;case 413:error="This file is too large.";break;case 415:error="This filetype is not supported.";break;case 420:error="You're uploading too much! Try again later.";break;case 200:response=JSON.parse(this.responseText);file.isUserOwned=true;file.hash=response.hash;file.isHashed=true;file.updateStatus('pending');}if(error)if(callback)callback({file:file,error:error});if(callback)return callback({file:file});};formData=new FormData();formData.append('url',file.file);return xhr.send(formData);};self.checkExists=function(file,callback){var xhr;xhr=new XMLHttpRequest();xhr.open('GET',"/api/"+file.hash+"/exists");xhr.onload=function(){var response;response=JSON.parse(this.responseText);if(callback)return callback(response.exists);};return xhr.send();};self.checkStatus=function(files,callback){var xhr;xhr=new XMLHttpRequest();xhr.open('GET',"/api/status?list="+files);xhr.onload=function(){var response;response=JSON.parse(this.responseText);if(callback)return callback(response);};return xhr.send();};self.deleteFile=function(file){var xhr;xhr=new XMLHttpRequest();xhr.open('DELETE',"/api/"+file);xhr.send();return UserHistory.remove(file);};self.setFlags=function(file,flags){var flag,formData,value,xhr;xhr=new XMLHttpRequest();formData=new FormData();for(flag in flags){value=flags[flag];formData.append(flag,value);}xhr.open('POST',"/api/"+file+"/flags");return xhr.send(formData);};self.createAlbum=function(files,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('list',files.join(','));xhr.open('POST','/api/album/create');xhr.onload=function(){var result;if(this.status!==200)if(callback)callback({error:true});result=JSON.parse(this.responseText);if(result.error!=null)if(callback)callback({error:true});if(callback)return callback({hash:result.hash});};return xhr.send(formData);};self.zipAlbum=function(hash,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('hash',hash);xhr.open('POST','/api/album/zip');xhr.onload=function(){var result;if(this.status!==200)if(callback)callback({error:true});result=JSON.parse(this.responseText);if(result.error!=null)if(callback)callback({error:true});if(callback)return callback(result);};return xhr.send(formData);};self.reportFile=function(file){var xhr;xhr=new XMLHttpRequest();xhr.open('POST',"/report/"+window.filename);return xhr.send();};self.setText=function(hash,title,description,callback){var formData,xhr;xhr=new XMLHttpRequest();formData=new FormData();formData.append('title',title);formData.append('description',description);xhr.open('POST',"/api/"+hash+"/text");xhr.onload=function(){if(callback)return callback(self);};return xhr.send(formData);};return self;})();if(typeof window!=="undefined"&&window!==null)window.API=API;}).call(this);(function(){var keys;keys=[];window.addEventListener('keydown',function(e){var audio,done,item,_i,_len,_ref;keys.push(e.keyCode);done=false;if(keys.length>=10)keys.splice(0,1);if(!done&&keys.join(',')==='38,40,40,37,39,37,39,66,65'){done=true;audio=document.createElement('audio');audio.src='/static/konami.mp3';audio.autoplay=true;audio.loop=true;if(window.localStorage.volume!=null)audio.volume=window.localStorage.volume;document.body.appendChild(audio);_ref=document.querySelectorAll('.konami');for(_i=0,_len=_ref.length;_i<_len;_i++){item=_ref[_i];item.classList.remove('hidden');}document.body.classList.add('konami');document.querySelector('.brand img').src='/static/konami-brand.svg';document.querySelector('#blurb').classList.add('hidden');return document.querySelector('#types').classList.add('hidden');}},false);}).call(this);(function(){var audioContext,gotMedia,info,mediaStream,record,recording,stopRecording;if(!navigator.getUserMedia)navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;window.AudioContext=window.AudioContext||window.webkitAudioContext;recording=false;mediaStream=null;audioContext=null;record=null;info=null;window.addEventListener('DOMContentLoaded',function(){record=document.getElementById('record').querySelector('.record');info=document.getElementById('record').querySelector('.info');if(navigator.getUserMedia){audioContext=new AudioContext();document.getElementById('record').classList.remove('hidden');return record.addEventListener('click',function(e){e.preventDefault();if(recording)return stopRecording();else{record.setAttribute('data-icon','\uF16A');info.textContent='Recording...';info.classList.remove('hidden');if(mediaStream!==null){backgroundWorker.postMessage({action:'initialize-audio'});return recording=true;}else return navigator.getUserMedia({audio:true},function(e){mediaStream=e;gotMedia();return recording=true;},function(e){info.classList.remove('hidden');record.classList.add('hidden');return info.textContent='An error occured.';},false);}},false);}},false);gotMedia=function(e){var bufferSize,input,recorder,sampleRate,volume;volume=audioContext.createGain();input=audioContext.createMediaStreamSource(mediaStream);input.connect(volume);bufferSize=2048;if(audioContext.createScriptProcessor!=null)recorder=audioContext.createScriptProcessor(bufferSize,2,2);else recorder=audioContext.createJavaScriptNode(bufferSize,2,2);sampleRate=volume.context.sampleRate;recorder.onaudioprocess=function(e){var left,right;if(!recording)return;left=e.inputBuffer.getChannelData(0);right=e.inputBuffer.getChannelData(1);return backgroundWorker.postMessage({action:'push-audio',left:new Float32Array(left),right:new Float32Array(right)});};volume.connect(recorder);recorder.connect(audioContext.destination);return backgroundWorker.postMessage({action:'initialize-audio',sampleRate:sampleRate});};stopRecording=function(){recording=false;record.setAttribute('data-icon','\uF141');info.textContent='Processing...';return backgroundWorker.postMessage({action:'finish-audio',callback:'audioDone'});};window.audioDone=function(blob){blob.name='Microphone';window.handleFiles([blob]);info.classList.add('hidden');return record.setAttribute('data-icon','\uF073');};}).call(this);(function(){var MediaFile,index;window.uploadedFiles={};index=0;MediaFile=(function(){function MediaFile(file){this.file=file;if(this.file instanceof Blob||this.file instanceof File){this.isUrl=false;this.name=this.file.name;}else{this.name=this.file;this.isUrl=true;}this.status='none';this.hash=guid();this.isHashed=false;this.index=index++;}MediaFile.prototype.setError=function(error){this.updateStatus('error');return this.preview.querySelector('.error').textContent=error;};MediaFile.prototype.updateStatus=function(status){var error,oldStatus,progress;oldStatus=this.status;this.status=status;if(window.statusChanged)window.statusChanged(this,this.status,oldStatus);this.preview.querySelector('.status').textContent=(function(){switch(status){case 'local-pending':return "Pending...";case 'preparing':return "Preparing...";case 'uploading':return "Uploading...";case 'pending':return "Waiting to process...";case 'processing':return "Processing... (this may take a while)";case 'ready':return "Upload complete!";case 'done':return "Upload complete!";}})();progress=this.preview.querySelector('.progress');if(status==='preparing'||status==='local-pending'){progress.className='progress progress-grey';return progress.style.width='100%';}else if(status==='pending'){progress.className='progress progress-grey';return progress.style.width='100%';}else if(status==='uploading'){progress.className='progress';return progress.style.width='0%';}else if(status==='processing'){progress.className='progress progress-green';return progress.style.width='100%';}else if(status==='done'||status==='ready')return progress.style.display='none';else if(status==='unrecognized'){this.preview.querySelector('.status').style.display='none';error=this.preview.querySelector('.error');error.classList.remove('hidden');error.textContent='MediaCrush does not accept this kind of file.';return progress.className='progress progress-stalled progress-red';}else{this.preview.querySelector('.status').style.display='none';error=this.preview.querySelector('.error');error.classList.remove('hidden');error.textContent='There was a problem with this file.';return progress.className='progress progress-stalled progress-red';}};MediaFile.prototype.loadPreview=function(){var fallback,source,uri,_;if(this.isUrl){this.loadUrlPreview();return;}uri=URL.createObjectURL(this.file);if(this.file.type.indexOf('image/')===0){_=document.createElement('img');_.src=uri;}else if(this.file.type.indexOf('audio/')===0){_=document.createElement('img');_.src='/static/audio.png';}else if(this.file.type.indexOf('video/')===0){_=document.createElement('video');_.setAttribute('loop','true');source=document.createElement('source');fallback=document.createElement('img');fallback.src='/static/video.png';source.addEventListener('error',function(){return _.parentElement.replaceChild(fallback,_);},false);source.setAttribute('src',uri);source.setAttribute('type',this.file.type);_.appendChild(source);_.volume=0;_.play();}else{_=document.createElement('img');_.src='/static/video.png';}return this.preview.querySelector('.preview').appendChild(_);};MediaFile.prototype.loadUrlPreview=function(){var _;_=document.createElement('img');_.src=this.file;return this.preview.querySelector('.preview').appendChild(_);};MediaFile.prototype.updateProgress=function(amount){return this.preview.querySelector('.progress').style.width=(amount*100)+'%';};MediaFile.prototype.setFlags=function(flags){var flag,input,label,list,name,self,span,updateFlag,value;if(this.flags!=null)return;this.flags=flags;list=this.preview.querySelector('.flags');self=this;updateFlag=function(e){var flag;flag=e.target.getAttribute('data-flag');self.flags[flag]=!self.flags[flag];return API.setFlags(self.hash,self.flags);};for(flag in flags){value=flags[flag];name=flag;if(name==='nsfw')name='NSFW?';else{name=flag.substr(1);name=flag[0].toUpperCase()+name;}input=document.createElement('input');input.type='checkbox';input.name=input.id="flag-"+flag+"-"+this.hash;input.setAttribute('data-flag',flag);input.setAttribute('data-media',this.hash);input.checked=value;input.addEventListener('change',updateFlag,false);label=document.createElement('label');label["for"]="flag-"+flag+"-"+this.hash;label.className='checkbox';if(name==='NSFW?')label.className+=' red';span=document.createElement('span');span.textContent=name;label.appendChild(input);label.appendChild(span);list.appendChild(label);}return list.classList.remove('hidden');};MediaFile.prototype.finish=function(){var deleteLink,editTitle,largeLink,link,saveTitle,self;UserHistory.add(this.hash);largeLink=this.preview.querySelector('.full-size');link=this.preview.querySelector('.link');link.textContent=window.location.origin+("/"+this.hash);largeLink.href=link.href="/"+this.hash;link.classList.remove('hidden');largeLink.classList.remove('hidden');this.preload();if(this.isUserOwned){editTitle=this.preview.querySelector('.toggle-title');editTitle.classList.remove('hidden');saveTitle=this.preview.querySelector('.title-editor button.save');deleteLink=this.preview.querySelector('.delete');deleteLink.href="/api/"+this.hash+"/delete";self=this;deleteLink.addEventListener('click',function(e){e.preventDefault();return confirm(function(result){var oldStatus;if(result){API.deleteFile(self.hash);self.preview.parentElement.removeChild(self.preview);oldStatus=self.status;self.status='deleted';delete uploadedFiles[self.hash];if(Object.keys(uploadedFiles).length===0)document.getElementById('droparea').classList.remove('files');if(window.statusHook)return window.statusHook(self,self.status,oldStatus);}});},false);saveTitle.addEventListener('click',function(e){var description,title;e.preventDefault();title=self.preview.querySelector('.title-editor input').value;description=self.preview.querySelector('.title-editor textarea').value;return API.setText(self.hash,title,description,function(){return self.preview.classList.remove('titled');});},false);return deleteLink.classList.remove('hidden');}};MediaFile.prototype.preload=function(){var file,_,_i,_len,_ref,_results;if(this.blob==null)return;_ref=this.blob.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];console.log(file.type);if(file.type.indexOf('image/')===0&&file.type!=='image/gif'){_=document.createElement('img');_results.push(_.src=file.url);}else if(file.type.indexOf('video/')===0){_=document.createElement('video');_.preload='auto';_results.push(_.src=file.url);}else if(file.type.indexOf('audio/')===0){_=document.createElement('audio');_.preload='auto';_results.push(_.src=file.url);}else _results.push(void 0);}return _results;};return MediaFile;})();window.MediaFile=MediaFile;}).call(this);(function(){var albumAttached,createAlbum,createHistoryItem,createPreview,createTitleUI,dragNop,fileStatusChanged,finish,forceFocus,handleDragDrop,handleFiles,handlePaste,handleWorkerMessage,hashCompleted,maxConcurrentUploads,pendingFiles,pendingUrls,updateAlbumUI,updateQueue,uploadFile,uploadPendingFiles,uploadUrlFile,uploadUrls,worker;worker=new Worker('/static/worker.js');window.backgroundWorker=worker;albumAttached=false;maxConcurrentUploads=3;window.addEventListener('DOMContentLoaded',function(){var albumUI,blurb,historyContainer,historyEnabled,historyList,items,pasteTarget,spinner;window.addEventListener('dragenter',dragNop,false);window.addEventListener('dragleave',dragNop,false);window.addEventListener('dragover',dragNop,false);window.addEventListener('drop',handleDragDrop,false);document.getElementById('browse-link').addEventListener('click',function(e){e.preventDefault();return document.getElementById('browse').click();},false);document.getElementById('browse').addEventListener('change',function(e){return handleFiles(e.target.files);},false);albumUI=document.getElementById('albumUI');albumUI.querySelector('.button').addEventListener('click',function(e){e.preventDefault();albumUI.querySelector('.button').classList.add('hidden');albumUI.querySelector('.status').classList.remove('hidden');albumUI.querySelector('.status').textContent='Processing, please wait...';albumAttached=true;return createAlbum();},false);worker.addEventListener('message',handleWorkerMessage);worker.postMessage({action:'load'});window.statusChange=function(file,status,oldStatus){if(oldStatus==='uploading')return uploadPendingItems();};setInterval(uploadPendingFiles,10000);pasteTarget=document.getElementById('paste-target');pasteTarget.addEventListener('paste',handlePaste,false);forceFocus();historyEnabled=document.getElementById('historyEnabled');if(!UserHistory.getHistoryEnabled())historyEnabled.textContent='Enable local history';historyEnabled.addEventListener('click',function(e){e.preventDefault();if(UserHistory.toggleHistoryEnabled())return historyEnabled.textContent='Disable local history';else return historyEnabled.textContent='Enable local history';},false);items=UserHistory.getHistory().slice(0).reverse().slice(0,5);historyContainer=document.getElementById('history');historyList=historyContainer.querySelector('ul');blurb=document.getElementById('blurb');if(items.length!==0){spinner=document.createElement('div');spinner.className='progress';blurb.appendChild(spinner);return UserHistory.loadDetailedHistory(items,function(result){var item,_i,_len,_results;blurb.classList.add('hidden');historyContainer.classList.remove('hidden');spinner.parentElement.removeChild(spinner);_results=[];for(_i=0,_len=items.length;_i<_len;_i++){item=items[_i];if(result[item])_results.push(historyList.appendChild(createHistoryItem({item:result[item],hash:item})));else _results.push(void 0);}return _results;});}},false);forceFocus=function(){var pasteTarget,_ref;if((_ref=document.activeElement.tagName)==='TEXTAREA'||_ref==='INPUT'||_ref==='IFRAME'){setTimeout(forceFocus,250);return;}pasteTarget=document.getElementById('paste-target');pasteTarget.focus();return setTimeout(forceFocus,250);};createHistoryItem=function(h,noLink){var a,container,file,item,preview,source,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_ref2;if(noLink==null)noLink=false;item=h.item;container=null;if(h.base!=null)container=document.createElement(data.base);else container=document.createElement('li');if(item.blob_type==='video'){preview=document.createElement('video');preview.setAttribute('loop','true');preview.poster='/'+item.hash+'.jpg';_ref=item.files;for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.type.indexOf('video/')===0){source=document.createElement('source');source.src=window.cdn+file.file;source.type=file.type;preview.appendChild(source);}}preview.volume=0;preview.className='item-view';preview.onmouseenter=function(e){return e.target.play();};preview.onmouseleave=function(e){return e.target.pause();};}else if(item.blob_type==='image'){preview=document.createElement('img');_ref1=item.files;for(_j=0,_len1=_ref1.length;_j<_len1;_j++){file=_ref1[_j];if(!file.type.indexOf('image/')===0)continue;preview.src=window.cdn+file.file;break;}preview.className='item-view';}else if(item.blob_type==='audio'){preview=document.createElement('img');preview.src='/static/audio-player-narrow.png';preview.className='item-view';}else if(item.type==='application/album'){preview=document.createElement('div');preview.className='album-preview';_ref2=item.files;for(_k=0,_len2=_ref2.length;_k<_len2;_k++){file=_ref2[_k];preview.appendChild(createHistoryItem(file,true));}}if(preview)if(!noLink){a=document.createElement('a');a.href='/'+h.hash;a.appendChild(preview);container.appendChild(a);}return container;};window.onbeforeunload=function(){var f,_ref;for(f in uploadedFiles)if((_ref=uploadedFiles[f].status)!=='done'&&_ref!=='error'&&_ref!=='ready')return 'If you leave this page, your uploads will be cancelled.';};handleWorkerMessage=function(e){if(e.data.execute!=null)eval(e.data.execute);if(e.data.event!=null)switch(e.data.event){case 'file-status-change':return fileStatusChanged(e.data);}};dragNop=function(e){e.stopPropagation();return e.preventDefault();};handleDragDrop=function(e){var droparea,files;dragNop(e);droparea=document.getElementById('droparea');if(droparea.classList.contains('hover'))droparea.classList.remove('hover');files=e.dataTransfer.files;if(files.length>0)return handleFiles(files);};pendingFiles=[];updateQueue=function(){var file,fileList,files,scrollingContainer,url,urls,_fn,_fn1,_i,_j,_len,_len1;files=pendingFiles.splice(0,5);urls=pendingUrls.splice(0,5);fileList=document.getElementById('files');scrollingContainer=document.getElementById('droparea');_fn=function(file){var mediaFile,_;mediaFile=new MediaFile(file);mediaFile.preview=createPreview(file.name);_=scrollingContainer.scrollTop;fileList.appendChild(mediaFile.preview);scrollingContainer.scrollTop=_;mediaFile.preview=fileList.lastElementChild;mediaFile.loadPreview();mediaFile.hash=new String(guid());mediaFile.updateStatus('local-pending');return uploadedFiles[mediaFile.hash]=mediaFile;};for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];_fn(file);}_fn1=function(url){var mediaFile,_;mediaFile=new MediaFile(url);mediaFile.preview=createPreview(mediaFile.name);_=scrollingContainer.scrollTop;fileList.appendChild(mediaFile.preview);scrollingContainer.scrollTop=_;mediaFile.preview=fileList.lastElementChild;mediaFile.loadPreview();mediaFile.hash=new String(guid());mediaFile.updateStatus('local-pending');return uploadedFiles[mediaFile.hash]=mediaFile;};for(_j=0,_len1=urls.length;_j<_len1;_j++){url=urls[_j];_fn1(url);}if(pendingFiles.length+pendingUrls.length>0)setTimeout(updateQueue,500);if(files.length>0)return uploadPendingFiles();};handleFiles=function(files){var dropArea,file,_i,_len;if(albumAttached){albumUI.querySelector('.button').classList.add('hidden');albumUI.querySelector('.status').classList.remove('hidden');albumUI.querySelector('.status').textContent='Processing, please wait...';albumUI.querySelector('.result').classList.add('hidden');}if(Object.keys(uploadedFiles).length===0){document.getElementById('files').innerHTML='';dropArea=document.getElementById('droparea');dropArea.style.overflowY='scroll';dropArea.classList.add('files');}for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];pendingFiles.push(file);}return updateQueue();};window.handleFiles=handleFiles;uploadPendingFiles=function(){var file,hash,toUpload,uploading,_i,_len,_ref,_results;toUpload=[];uploading=0;for(hash in uploadedFiles){file=uploadedFiles[hash];if((_ref=file.status)==='preparing'||_ref==='uploading'){uploading++;if(uploading>=maxConcurrentUploads)return;}else if(file.status==='local-pending'&&toUpload.length<5)toUpload.push(file);}_results=[];for(_i=0,_len=toUpload.length;_i<_len;_i++){file=toUpload[_i];_results.push((function(file){var reader;if(file.isUrl)return uploadUrlFile(file);else{reader=new FileReader();reader.onloadend=function(e){var data;try{data=e.target.result;file.updateStatus('preparing');return worker.postMessage({action:'compute-hash',data:data,callback:'hashCompleted',id:file.hash});}catch(_error){e=_error;return uploadFile(file);}};return reader.readAsBinaryString(file.file);}})(file));}return _results;};hashCompleted=function(id,result){var file;file=uploadedFiles[id];file.hash=result;delete uploadedFiles[id];uploadedFiles[result]=file;file.isHashed=true;return uploadFile(file);};handlePaste=function(e){var check,file,item,target,text,url,urls,_i,_len,_ref,_results;target=document.getElementById('paste-target');if(e.clipboardData){text=e.clipboardData.getData('text/plain');if(text){if(text.indexOf('http://')===0||text.indexOf('https://')===0){urls=text.split('\n');uploadUrls((function(){var _i,_len,_results;_results=[];for(_i=0,_len=urls.length;_i<_len;_i++){url=urls[_i];if(url.indexOf('http://')===0||url.indexOf('https://')===0)_results.push(url.trim());}return _results;})());return target.innerHTML='';}else{}}else if(e.clipboardData.items){_ref=e.clipboardData.items;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){item=_ref[_i];if(item.type.indexOf('image/')===0){file=item.getAsFile;file.name='Clipboard';_results.push(handleFiles([file]));}else _results.push(void 0);}return _results;}else{check=function(){var blob,img;if(target.innerHTML!==''){img=target.firstChild.src;if(img.indexOf('data:image/png;base64,')===0){blob=dataURItoBlob(img);blob.name='Clipboard';handleFiles([blob]);}return target.innerHTML='';}else return setTimeout(check,100);};return check();}}};pendingUrls=[];uploadUrls=function(urls){var dropArea,url,_i,_len;if(albumAttached){albumUI.querySelector('.button').classList.add('hidden');albumUI.querySelector('.status').classList.remove('hidden');albumUI.querySelector('.status').textContent='Processing, please wait...';albumUI.querySelector('.result').classList.add('hidden');}if(Object.keys(uploadedFiles).length===0){document.getElementById('files').innerHTML='';dropArea=document.getElementById('droparea');dropArea.style.overflowY='scroll';dropArea.classList.add('files');}for(_i=0,_len=urls.length;_i<_len;_i++){url=urls[_i];pendingUrls.push(url);}return updateQueue();};uploadUrlFile=function(file){var oldHash;oldHash=file.hash;return API.uploadUrl(file,function(result){uploadedFiles[file.hash]=file;if(result.error!=null){file.setError(result.error);return;}file=result.file;delete uploadedFiles[oldHash];uploadedFiles[file.hash]=file;if(file.status==='done')return finish(file);else{file.isUserOwned=true;return worker.postMessage({action:'monitor-status',hash:file.hash});}});};uploadFile=function(file){var oldHash,upload;oldHash=file.hash;upload=function(){file.updateStatus('uploading');return API.uploadFile(file,function(e){if(e.lengthComputable)return file.updateProgress(e.loaded/e.total);},function(result){file.file=null;if(result.error!=null){file.setError(result.error);return;}if(file.hash!==oldHash){delete uploadedFiles[oldHash];uploadedFiles[file.hash]=file;}if(file.status==='done')return finish(file);else{file.isUserOwned=true;return worker.postMessage({action:'monitor-status',hash:file.hash});}});};if(file.isHashed)return API.checkExists(file,function(exists){if(exists){file.file=null;file.isUserOwned=false;file.updateStatus('done');finish(file);}else return upload();});};fileStatusChanged=function(e){var _ref;uploadedFiles[e.hash].updateStatus(e.status);if((e.file!=null)&&(e.file.flags!=null))uploadedFiles[e.hash].setFlags(e.file.flags);if((_ref=e.status)==='ready'||_ref==='done'){uploadedFiles[e.hash].blob=e.file;return finish(uploadedFiles[e.hash]);}};finish=function(file){file.finish();return updateAlbumUI();};updateAlbumUI=function(){var albumUI,f,keys,v,_ref;if(albumAttached)return createAlbum();else{keys=[];for(f in uploadedFiles){v=uploadedFiles[f];if((_ref=v.status)==='processing'||_ref==='pending'||_ref==='ready'||_ref==='done'||_ref==='uploading')keys.push(f);}albumUI=document.getElementById('albumUI');if(keys.length>=2)return albumUI.querySelector('.button').classList.remove('hidden');else return albumUI.querySelector('.button').classList.add('hidden');}};createAlbum=function(){var a,f,keys,v,_ref;keys=[];for(f in uploadedFiles){v=uploadedFiles[f];if((_ref=v.status)==='done'||_ref==='ready')keys.push(v);else return;}if(!(keys.length>=2))return;keys.sort(function(a,b){return a.index-b.index;});keys=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=keys.length;_i<_len;_i++){a=keys[_i];_results.push(a.hash);}return _results;})();return API.createAlbum(keys,function(result){var albumUI;albumUI=document.getElementById('albumUI');if(result.error!=null){albumUI.querySelector('.status').classList.remove('hidden');albumUI.querySelector('.status').textContent='An error occured creating this album.';albumUI.querySelector('.button').classList.remove('hidden');return albumUI.querySelector('.button').textContent='Try again';}else{albumUI.querySelector('.status').classList.add('hidden');albumUI.querySelector('.result a').textContent=window.location.origin+("/"+result.hash);albumUI.querySelector('.result a').href=window.location.origin+("/"+result.hash);return albumUI.querySelector('.result').classList.remove('hidden');}});};window.statusHook=function(file,status,oldStatus){if(oldStatus!=null)if(status==='ready'&&oldStatus==='done')return;return updateAlbumUI();};createTitleUI=function(){var cancel,container,description,save,title;container=document.createElement('div');container.classList.add('title-editor');title=document.createElement('input');title.type='text';title.placeholder='Title...';description=document.createElement('textarea');description.placeholder='Description...';description.rows=4;save=document.createElement('button');save.classList.add('save');save.textContent='Save';cancel=document.createElement('button');cancel.textContent='Cancel';cancel.classList.add('cancel');cancel.onclick=function(){return container.parentElement.classList.remove('titled');};container.appendChild(title);container.appendChild(description);container.appendChild(save);container.appendChild(cancel);return container;};createPreview=function(name){var container,create,deleteLink,error,fade,flags,fullSize,link,preview,progress,status,title,titleUI,toggleTitle;create=function(element,className){var _;_=document.createElement(element);if(className!=null)_.className=className;return _;};container=create('div','media-preview');preview=create('div','preview');fade=create('div','respondive-fade');title=create('h2');title.title=name;title.textContent=name;flags=create('div','flags hidden');status=create('div','status');error=create('div','error hidden');link=create('a','link hidden');deleteLink=create('a','delete hidden');deleteLink.textContent='Delete';fullSize=create('a','full-size hidden');progress=create('div','progress');progress.style.width=0;toggleTitle=create('a','toggle-title hidden');toggleTitle.innerHTML='<span class="icon" data-icon="\uF030"></span> Edit title/description';toggleTitle.href='#';toggleTitle.onclick=function(e){e.preventDefault();return container.classList.add('titled');};titleUI=createTitleUI();container.appendChild(preview);container.appendChild(fade);container.appendChild(title);container.appendChild(flags);container.appendChild(status);container.appendChild(error);container.appendChild(link);container.appendChild(toggleTitle);container.appendChild(titleUI);container.appendChild(deleteLink);container.appendChild(fullSize);container.appendChild(progress);return container;};}).call(this);