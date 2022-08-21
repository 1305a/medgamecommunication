(function(){var t={724:function(t,e,a){"use strict";var o=a(144),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.showChat?e("ViewChat",{attrs:{chatList:t.chatList,actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers,qualityReception:t.qualityReception,doctorComfort:t.doctorComfort},on:{pushmessage:function(e){return t.pushToChatList()},action:function(e){return t.doAction(e)},actionanswer:function(e){return t.doAction(e)},deleteanswer:function(e){return t.deleteanswer(e)}}}):t._e(),t.showModal?e("InfoModal",{attrs:{modalInfo:t.modalInfo},on:{action:function(e){return t.doAction(e)}}}):t._e()],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal modal-disclaimer",staticStyle:{display:"flex"}},[t.modalInfo.head?e("InfoHead",{attrs:{head:t.modalInfo.head}}):t._e(),t.modalInfo.body?e("InfoBody",{attrs:{body:t.modalInfo.body}}):t._e(),t.modalInfo.choicePatient?e("ChoicePatient",{attrs:{patientList:t.modalInfo.choicePatient},on:{action:function(e){return t.buttonAction(e)}}}):t._e(),t.modalInfo.btnList?e("div",{staticClass:"modal_body modal-btn-list"},[e("ButtonList",{attrs:{btnList:t.modalInfo.btnList},on:{action:function(e){return t.buttonAction(e)}}})],1):t._e(),t.modalInfo.body2?e("InfoBody",{attrs:{body:t.modalInfo.body2}}):t._e(),t.modalInfo.footer?e("InfoFooter",{class:t.addClass,attrs:{footerData:t.modalInfo.footer},on:{action:function(e){return t.buttonAction(e)}}}):t._e()],1)},r=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_header"},[t._v(" "+t._s(t.head)+" ")])},l=[],d={props:{head:String}},u=d,p=a(1),h=(0,p.Z)(u,c,l,!1,null,null,null),f=h.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_body",domProps:{innerHTML:t._s(t.body)}})},m=[],x={props:{body:String}},w=x,b=(0,p.Z)(w,y,m,!1,null,null,null),g=b.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_footer"},[t.footerData.checkbox?e("InfoCheckbox",{attrs:{checkboxText:t.footerData.checkboxText},on:{changecheckbox:function(e){return t.changecheckbox(e)}}}):t._e(),t._l(t.footerData.btnData,(function(a,o){return e("InfoButton",{key:o,attrs:{btnDataItem:a,isDisabled:t.isDisabled},on:{action:function(e){return t.buttonAction(e)}}})}))],2)},v=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"accept"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"accept",type:"checkbox",name:"ok"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:[function(e){var a=t.checked,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&(t.checked=a.concat([i])):n>-1&&(t.checked=a.slice(0,n).concat(a.slice(n+1)))}else t.checked=s},t.changeCheckbox]}}),e("label",{attrs:{for:"accept"}},[t._v(t._s(t.checkboxText))])])},D=[],_={data(){return{checked:!1}},props:{checkboxText:String},methods:{changeCheckbox(){this.$emit("changecheckbox",this.checked)}},mounted(){this.changeCheckbox()}},A=_,I=(0,p.Z)(A,C,D,!1,null,null,null),Q=I.exports,S=function(){var t=this,e=t._self._c;return e("div",{class:t.choiceDiv},[e("button",{class:t.choiceButton,attrs:{disabled:t.isDisabled},on:{click:t.buttonAction}},[t._v(t._s(t.btnDataItem.name))])])},L=[],M={props:{btnDataItem:{},isDisabled:Boolean},methods:{buttonAction(){this.$emit("action",this.btnDataItem.action)}},computed:{choiceDiv(){return"choice"===this.btnDataItem.class?"choice-div":""},choiceButton(){return"choice"===this.btnDataItem.class?"choice-button":""}},mounted(){}},T=M,j=(0,p.Z)(T,S,L,!1,null,null,null),P=j.exports,$={data(){return{isDisabled:!1}},components:{InfoCheckbox:Q,InfoButton:P},props:{footerData:{}},methods:{buttonAction(t){this.$emit("action",t)},changecheckbox(t){this.isDisabled=!t}}},N=$,B=(0,p.Z)(N,k,v,!1,null,null,null),O=B.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-list"},t._l(t.btnList,(function(a,o){return e("span",{key:o,on:{click:function(e){return t.buttonAction(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0)},q=[],R={props:{btnList:[]},methods:{buttonAction(t){this.$emit("action",t.action)}}},H=R,E=(0,p.Z)(H,Z,q,!1,null,null,null),F=E.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"choice-patient"},t._l(t.patientList,(function(a,o){return e("div",{key:o,staticClass:"patient-card",on:{click:function(e){return t.buttonAction(a)}}},[e("div",{staticClass:"modal_header patient-head"},[t._v(" "+t._s(a.head)+" ")]),e("div",[e("img",{attrs:{src:t.getImage(o),alt:"choice patient"}})]),e("div",{staticClass:"patient-text"},[t._v(" "+t._s(a.text)+" ")])])})),0)},V=[],J={props:{patientList:[]},methods:{getImage(t){return a(990)(`./${this.patientList[t].image}`)},buttonAction(t){this.$emit("action",t.action)}}},z=J,G=(0,p.Z)(z,U,V,!1,null,null,null),K=G.exports,W={components:{InfoHead:f,InfoBody:g,InfoFooter:O,ButtonList:F,ChoicePatient:K},props:{modalInfo:{}},computed:{addClass(){return this.modalInfo.footer.class}},methods:{buttonAction(t){this.$emit("action",t)}}},X=W,Y=(0,p.Z)(X,n,r,!1,null,null,null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return!1!==t.actualState.showChat?e("div",{staticClass:"content"},[e("div",{ref:"chartbox",staticClass:"chart box margin-chat"},[e("TopProgress",{attrs:{qualityReception:t.qualityReception,doctorComfort:t.doctorComfort}}),t._l(t.chatList,(function(a,o){return e("ChatMessage",{key:o,attrs:{message:t.chatList[o]},on:{scrolldown:t.scrollDown}})})),t.actualState.data.chatImage?e("ImageModal",{attrs:{chatImage:t.actualState.data.chatImage}}):t._e()],2),e("ChatQuestions",{attrs:{actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers},on:{actionanswer:function(e){return t.actionAnswer(e)},deleteanswer:function(e){return t.deleteAnswer(e)}}})],1):t._e()},at=[],ot=function(){var t=this,e=t._self._c;return t.message.isDoctor?e("div",{ref:"answerDoctor",staticClass:"medic"},[e("div",{staticClass:"dialog-arrow"})]):e("div",{ref:"answerPatient",staticClass:"patient"},[e("div",{staticClass:"dialog-arrow"})])},st=[],it={props:{message:{}},mounted(){async function t(t,e,o){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500)}async function e(t,e,o){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',o.$emit("scrolldown"),await a(500)}function a(t){return new Promise((e=>setTimeout(e,t)))}this.message.isDoctor&&t(this.$refs.answerDoctor,this.message.text,this),this.message.isDoctor||e(this.$refs.answerPatient,this.message.text,this)}},nt=it,rt=(0,p.Z)(nt,ot,st,!1,null,null,null),ct=rt.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions box",staticStyle:{display:"flex"}},[t._m(0),"answer"===t.actualState.type?e("div",{staticClass:"body"},t._l(t.answers,(function(a,o){return e("div",{key:o,staticClass:"question",class:t.disableAnswers,on:{click:function(e){return t.actionAnswer(o,a)}}},[t._v(" "+t._s(a.text)+" ")])})),0):t._e()])},dt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("img",{attrs:{src:a(8)}}),e("div",{staticClass:"title"},[t._v(" Выберите вариант: ")])])}],ut={props:{actualState:{},answers:[],disableAnswers:String},methods:{actionAnswer(t,e){this.$emit("actionanswer",e.action),e.deleteAnswer&&this.$emit("deleteanswer",t)}}},pt=ut,ht=(0,p.Z)(pt,lt,dt,!1,null,null,null),ft=ht.exports,yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-modal",attrs:{src:t.getImage,alt:"chat image"}})])},mt=[],xt={props:{chatImage:String},computed:{getImage(){return a(990)(`./${this.chatImage}`)}}},wt=xt,bt=(0,p.Z)(wt,yt,mt,!1,null,null,null),gt=bt.exports,kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-progress"},[e("div",{staticClass:"progress-item"},[t._m(0),e("div",{staticClass:"progress-name-line"},[e("div",{staticClass:"progress-name"},[t._v("Качество приема")]),e("progress",{attrs:{max:"100"},domProps:{value:t.qualityReception}})])]),e("div",{staticClass:"progress-item"},[t._m(1),e("div",{staticClass:"progress-name-line"},[e("div",{staticClass:"progress-name"},[t._v("Комфорт врача")]),e("progress",{attrs:{max:"100"},domProps:{value:t.doctorComfort}})])])])},vt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-block"},[e("img",{attrs:{src:a(714)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-block"},[e("img",{attrs:{src:a(17)}})])}],Ct={props:{qualityReception:Number,doctorComfort:Number}},Dt=Ct,_t=(0,p.Z)(Dt,kt,vt,!1,null,null,null),At=_t.exports,It={components:{ChatMessage:ct,ChatQuestions:ft,ImageModal:gt,TopProgress:At},props:{chatList:[],actualState:{},answers:[],disableAnswers:String,qualityReception:Number,doctorComfort:Number},methods:{actionAnswer(t){this.$emit("actionanswer",t)},deleteAnswer(t){this.$emit("deleteanswer",t)},scrollDown(){this.$refs.chartbox.scrollTop=this.$refs.chartbox.scrollHeight}}},Qt=It,St=(0,p.Z)(Qt,et,at,!1,null,null,null),Lt=St.exports,Mt=JSON.parse('[{"type":"info","data":{"head":"Подготовка к приёму","body":"Вы врач-акушер-гинеколог поликлиники, ведёте амбулаторный приём. Только что закончили работу с пациенткой и она покидает кабинет. В коридоре ожидает следующая пациентка.<br><b>Ваши действия:</b>","footer":{"btnData":[{"class":"choice","name":"Дописать карту (отложить на потом) и пригласить пациентку","action":{"type":"editQualityComfort","addComfort":-5,"action":{"type":"next"}}},{"class":"choice","name":"Пригласить пациентку и продолжить дописывать карту для экономия времени","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"info","data":{"head":"Комфорт в кабинете","body":"<b>Ваши действия перед тем как войдёт пациентка:</b>","footer":{"btnData":[{"class":"choice","name":"Проветрить кондиционер, настроить освещение и др","action":{"type":"editQualityComfort","action":{"type":"next"}}},{"class":"choice","name":"Не тратить на это время, работать можно в любых условиях","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"info","data":{"head":"Данные о пациентке","body":"<b>Ваши действия перед тем как позвать пациентку:</b>","footer":{"btnData":[{"class":"choice","name":"Просмотреть данные о пациентки в мед карте","action":{"type":"editQualityComfort","action":{"type":"next"}}},{"class":"choice","name":"Не тратить на это время. Выяснить и уточнить всё по ходу осмотра пациентки","action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}]}}},{"type":"info","data":{"head":"Личные потребности","body":"Пациентка ожидает в коридоре. Однако, у Вас возникла головная боль, хочется воды, а так же желание посетить туалет. <br><b>Ваши действия:</b>","footer":{"btnData":[{"class":"choice","name":"Принять таблетку, утолить жажду, посетить туалет","action":{"type":"editQualityComfort","action":{"type":"next"}}},{"class":"choice","name":"Потерпеть, не тратить на это время и быстрее закончить приём","action":{"type":"editQualityComfort","addQuality":-5,"addComfort":-5,"action":{"type":"next"}}}]}}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Здравствуйте, доктор! Мой врач заболел, поэтому меня направили к Вам."}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Добрый день! Меня зовут Иванова Татьяна Викторовна. Я врач-гинеколог, сегодня мы с вами будем общаться. Прошу, проходите.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Добрый день! Меня зовут Иванова Татьяна Викторовна. Я врач-гинеколог, сегодня мы с вами будем общаться. Прошу, проходите."}],"action":{"type":"next"}}}},{"text":"Не обязательно представляться, это может выглядеть глупо. Пациент и так знает к кому он записывался на прием.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Не обязательно представляться, это может выглядеть глупо. Пациент и так знает к кому он записывался на прием."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Доктор, со мной муж. Очень беспокоится за меня. Можно он будет со мной здесь?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Присутствие родственника может мешать вести прием, это лишние вопросы.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Присутствие родственника может мешать вести прием, это лишние вопросы."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}},{"text":"Да, конечно, можете позвать его.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Да, конечно, можете позвать его."}],"action":{"type":"next"}}}},{"text":"В кабинете не должно быть третьих лиц.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"В кабинете не должно быть третьих лиц."}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"answer","data":{"answers":[{"text":"Расскажите, что Вас беспокоит?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Расскажите, что Вас беспокоит?"}],"action":{"type":"next"}}}},{"text":"Почему Вы не дождались выхода своего врача. У Вас что-то острое?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Почему Вы не дождались выхода своего врача. У Вас что-то острое?"},{"isDoctor":false,"text":"Не знаю. Я не уверена."}],"action":{"type":"editQualityComfort","addQuality":-5}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Меня беспокоит нарушение менструального цикла. Это началось 5 мес назад, когда мы с моим мужем вернулись из Египта. В Египте нам конечно очень понравилось: море и развлечения, еда, напитки сколько хочешь, хотя есть и минусы…"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Продолжайте…","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Продолжайте…"}],"action":{"type":"next"}}}},{"text":"Давайте ближе к делу, кроме Вас есть ещё пациентки.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Давайте ближе к делу, кроме Вас есть ещё пациентки."}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"jumpToStep","stepId":"table8"}}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Цикл стал то 14 дней то 45 дней, менструации стали не обильные. Сначала меня это не сильно беспокоило. Месяц назад подруга посоветовала начать прием КОК, так как они ей помогли и цикл на них стал ходить « как часы» плюс можно не предохраняться"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Продолжайте, я вас слушаю.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Продолжайте, я вас слушаю."}],"action":{"type":"next"}}}},{"text":"Ладно, всё понятно. Ответьте мне лучше на некоторые вопросы.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Ладно, всё понятно. Ответьте мне лучше на некоторые вопросы."}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"jumpToStep","stepId":"table8"}}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Я купила таблетки, пропила 1 упаковку (28 табл.), как я поняла должны были придти месячные, чтобы начать пить новую пачку. Но они не пришли и я не знаю когда мне начинать новую упаковку."}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Итак: Вы начали прием КОК по примеру подруги, у Вас не пришли менструации и Вы не знаете пить ли дальше таблетки, правильно?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Итак: Вы начали прием КОК по примеру подруги, у Вас не пришли менструации и Вы не знаете пить ли дальше таблетки, правильно?"},{"isDoctor":false,"text":"Да, верно. Также я хотела бы поменять таблетки, так как мне кажется, что у меня от них есть побочных эффекта в виде тошноты после приема"}],"action":{"type":"next"}}}},{"text":"Ясно. Ответьте мне лучше на ряд вопросов.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Ясно. Ответьте мне лучше на ряд вопросов."}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"next"}}}}}]}},{"id":"table8","type":"answer","data":{"answers":[{"text":"Было ли такое ранее?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Было ли такое ранее?"},{"isDoctor":false,"text":"Нет, всегда было все нормально."}],"action":{"type":"checkAnswerList"}}}},{"text":"Болезненные ли у вас менструации?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Болезненные ли у вас менструации?"},{"isDoctor":false,"text":"Менструации безболезненные."}],"action":{"type":"checkAnswerList"}}}},{"text":"Предохраняетесь ли вы от беременности?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Предохраняетесь ли вы от беременности?"},{"isDoctor":false,"text":"Принимаю КОКи последний месяц, до этого прерванный половой акт."}],"action":{"type":"checkAnswerList"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Были ли у вас проблемы по гинекологии в прошлом?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Были ли у вас проблемы по гинекологии в прошлом?"},{"isDoctor":false,"text":"Проблем никогда не было"}],"action":{"type":"checkAnswerList"}}}},{"text":"Давно ли вы делали УЗИ?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Давно ли вы делали УЗИ?"},{"isDoctor":false,"text":"УЗИ никогда не делала."}],"action":{"type":"checkAnswerList"}}}},{"text":"Вы сдавали когда-либо гормоны?","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Вы сдавали когда-либо гормоны?"},{"isDoctor":false,"text":"Гормоны никогда не сдавала"}],"action":{"type":"checkAnswerList"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Мне необходимо провести физикальное (в т.ч. влагалищное) обследование и УЗИ. Подпишите информированное согласие","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Мне необходимо провести физикальное (в т.ч. влагалищное) обследование и УЗИ. Подпишите информированное согласие"},{"isDoctor":false,"text":"Хорошо"}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"jumpToStep","stepId":"info1"}}}}},{"text":"Продолжить сбор анамнез.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Продолжить сбор анамнез."},{"isDoctor":false,"text":"Возраст менархе: 12 лет<br>Длительность цикла: 25-28 дней<br>Аллергические реакции: не было<br>Хронических заболеваний нет<br>Беременностей не было<br>ИППП не было"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Сейчас я проведу Вам физикальное (в т.ч. влагалищное) обследование и УЗИ. Подпишите информированное согласие.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Сейчас я проведу Вам физикальное (в т.ч. влагалищное) обследование и УЗИ. Подпишите информированное согласие."},{"isDoctor":false,"text":"Хорошо."}],"action":{"type":"next"}}}}]}},{"id":"info1","type":"info","data":{"head":"Данные обследования","body":"О.З.: ш/матки чистая, выделения бели, умеренные.<p>По данным УЗИ: беременность 20 недель.</p>","footer":{"btnData":[{"name":"Далее","action":{"type":"next"}}]}}},{"type":"answer","data":{"answers":[{"text":"Это был не сбой менструального цикла. Во время поездки в Египет наступила беременность.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Это был не сбой менструального цикла. Во время поездки в Египет наступила беременность."},{"isDoctor":false,"text":"Это неожиданно!"}],"action":{"type":"next"}}}},{"text":"Как можно было не заметить, что вы беременны!?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Как можно было не заметить, что вы беременны!?"},{"isDoctor":false,"text":"Я и подумать не могла…"}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"answer","data":{"answers":[{"text":"Иногда в дни предполагаемых месячных могут быть кровянистые выделения во время беременности, поэтому вы не заподозрили беременность. А поле приема КОК выделения прекратились.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Иногда в дни предполагаемых месячных могут быть кровянистые выделения во время беременности, поэтому вы не заподозрили беременность. А поле приема КОК выделения прекратились."},{"isDoctor":false,"text":"Что же теперь делать? Что будет с беременностью?"}],"action":{"type":"next"}}}},{"text":"Вы понимаете, что прием таблеток (КОК) без консультации врача, теперь может навредить вашей беременности.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Вы понимаете, что прием таблеток (КОК) без консультации врача, теперь может навредить вашей беременности."},{"isDoctor":false,"text":"Я в полном смятении (плачет). Я всё испортила, что теперь будет с беременностью?"}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"next"}}}}}]}},{"type":"answer","data":{"answers":[{"text":"Вы уже пропустили все важные скрининги. Теперь надо срочно сдавать много анализов и вставать на учет.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Вы уже пропустили все важные скрининги. Теперь надо срочно сдавать много анализов и вставать на учет."},{"isDoctor":false,"text":"(Плачет)"}],"action":{"type":"editQualityComfort","addQuality":-10,"action":{"type":"next"}}}}},{"text":"По данным УЗИ у Вас уже середина беременности. С малышом все в порядке, отклонений в развитии нет. У Вас нет никакой гинекологической патологии, вы просто беременны.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"По данным УЗИ у Вас уже середина беременности. С малышом все в порядке, отклонений в развитии нет. У Вас нет никакой гинекологической патологии, вы просто беременны."},{"isDoctor":false,"text":"Ох, Вы меня успокоили, это очень хорошо!"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Необходимо будет пройти перечень определенных анализов и дообследований. Вас устроит, если я вас запишу через 3 дня на прием?","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Необходимо будет пройти перечень определенных анализов и дообследований. Вас устроит, если я вас запишу через 3 дня на прием?"},{"isDoctor":false,"text":"Да, конечно! Огромное спасибо!"}],"action":{"type":"next"}}}},{"text":"Вот вам список анализов. Завтра все сдавайте и приходите через 3 дня. До свидания!","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Вот вам список анализов. Завтра все сдавайте и приходите через 3 дня. До свидания!"},{"isDoctor":false,"text":"Хорошо. До свидания!"}],"action":{"type":"editQualityComfort","addQuality":-5,"action":{"type":"next"}}}}}]}},{"type":"answer","data":{"chatImage":"resumeImage2.png","answers":[{"text":"","action":{"type":"info","data":{"head":"Сообщение","body":"Очень хорошо!","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}}]'),Tt={name:"App",data(){return{patientAnswersArray:[],stepNumber:0,showModal:!1,showImageModal:!1,modalInfo:{},modalImageData:{},showChat:!0,disableAnswers:"",answers:[],chatList:[],mainBranch:Mt,actualState:{},qualityReception:100,doctorComfort:100}},components:{InfoModal:tt,ViewChat:Lt},methods:{sleep(t){return new Promise((e=>setTimeout(e,t)))},async addMessages(t,e){for(let a=0;a<t.length;a++)this.chatList.push(t[a]),await this.sleep(1e3);e()},doAction(t){if("next"===t.type&&this.stepNumber<this.mainBranch.length-1)this.stepNumber+=1,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState);else if("close"===t.type)this.showModal=!1;else if("closeCheck"===t.type)this.showModal=!1,this.doAction(t.action);else if("info"===t.type)this.modalInfo=t.data,this.showModal=!0;else if("answer"===t.type){this.actualState=t;for(let t=0;t<this.actualState.data.answers.length;t++)this.answers.push(this.actualState.data.answers[t])}else if("talk"===t.type)this.disableAnswers="disable-answer",this.addMessages(t.data.talk,(()=>{"next"===t.data.action.type&&(this.answers.length=0),this.doAction(t.data.action),this.disableAnswers=""}));else if("checkAnswerList"===t.type)0===this.answers.length&&this.doAction({type:"next"});else if("jumpToStep"===t.type){const e=this.mainBranch.findIndex((e=>e.id===t.stepId));-1===e?console.log(`Error: can't find stepId "${t.stepId}" in data`):(this.stepNumber=e,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState))}else if("jumpToStepClearChat"===t.type)this.stepNumber=this.mainBranch.findIndex((e=>e.id===t.stepId)),this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.chatList.length=0,this.doAction(this.actualState);else if("openLink"===t.type)window.open(t.url,"_blank");else if("writePatientChoice"===t.type)this.showModal=!1,this.patientAnswersArray.push([t.questionNumber,t.answerNumber]),this.doAction(t.action);else if("runChoiceAnswers"===t.type){const e=this.patientAnswersArray;e.sort(((t,e)=>t[0]-e[0]));const a=e.map((t=>t[1])).join("");this.patientAnswersArray.length=0;const o=t.data.resumeArray.find((t=>t.choiceAnswers==a));this.doAction(o.action)}else"editQualityComfort"===t.type&&(this.changeQualityComfort(t),t.action&&this.doAction(t.action))},changeQualityComfort(t){if(t.addQuality){let e=this.qualityReception+=t.addQuality;this.qualityReception=e<0?0:e>100?100:e}if(t.addComfort){let e=this.doctorComfort+=t.addComfort;this.doctorComfort=e<0?0:e>100?100:e}},deleteanswer(t){this.answers.splice(t,1)}},created(){this.actualState=this.mainBranch[this.stepNumber],this.doAction(this.actualState)}},jt=Tt,Pt=(0,p.Z)(jt,s,i,!1,null,null,null),$t=Pt.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t($t)}).$mount("#app")},990:function(t,e,a){var o={"./background.jpeg":380,"./choicePatient1.jpg":708,"./choicePatient2.jpg":241,"./doctor2.svg":8,"./girl_doctor.svg":17,"./girl_patient.svg":714,"./green1.jpg":396,"./patient2.svg":75,"./resumeImage.png":873,"./resumeImage2.png":890,"./risk1.jpg":579};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=i,t.exports=s,s.id=990},8:function(t,e,a){"use strict";t.exports=a.p+"img/doctor2.ba1adc31.svg"},17:function(t,e,a){"use strict";t.exports=a.p+"img/girl_doctor.94f80eee.svg"},714:function(t,e,a){"use strict";t.exports=a.p+"img/girl_patient.10914cde.svg"},75:function(t,e,a){"use strict";t.exports=a.p+"img/patient2.e2899c44.svg"},380:function(t,e,a){"use strict";t.exports=a.p+"img/background.390c800b.jpeg"},708:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient1.1b16df50.jpg"},241:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient2.b1a8d607.jpg"},396:function(t,e,a){"use strict";t.exports=a.p+"img/green1.f964c776.jpg"},873:function(t,e,a){"use strict";t.exports=a.p+"img/resumeImage.14f81d3e.png"},890:function(t,e,a){"use strict";t.exports=a.p+"img/resumeImage2.f12a4de1.png"},579:function(t,e,a){"use strict";t.exports=a.p+"img/risk1.cf191b99.jpg"}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,i){if(!o){var n=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],i=t[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[c])}))?o.splice(c--,1):(r=!1,i<n&&(n=i));if(r){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,s,i]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,n=o[0],r=o[1],c=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(c)var d=c(a)}for(e&&e(o);l<n.length;l++)i=n[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},o=self["webpackChunkmedtest3"]=self["webpackChunkmedtest3"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(724)}));o=a.O(o)})();
//# sourceMappingURL=app.c599715e.js.map