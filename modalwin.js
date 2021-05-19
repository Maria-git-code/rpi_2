class ModalWindow extends HTMLElement {
	constructor() {
		super();
	
		function loader() {
			let session = sessionStorage.getItem('ref');
			if (session == null) {
        		localStorage.setItem('disableTips', 'false');
    		}
    		sessionStorage.setItem('ref', 1);
			if (localStorage.getItem('disableTips') === 'true') {
				return false;
			} else {
				setTimeout(function() { createModalWindow(); }, 5000);
			}
		}

		window.addEventListener('load', loader);

		
		function createModalWindow() {
			let currentPage = 0;
			let arrMessage = new Array();
			arrMessage.push("<b>Понедельник: яйца в любом виде</b><br>" +
					"Куриное яйцо содержит до 14% дневной нормы белка, " +
					"большой запас необходимых аминокислот, без которых " +
					"невозможно нормальное функционирование организма. " + 
					"А еще основные витамины и минералы, а также антиоксиданты, " +
					"которые помогают от многих болезней. На завтрак можно " +
					"отварить яйца вкрутую или приготовить, например, " +
					"яйца бенедикт или омлет с разными добавками.");

			arrMessage.push("<b>Вторник: мюсли или гранола</b><br>" +
					"Да, готовые мюсли – не самая полезная штука на свете. " +
					"Чтобы получить от них максимум пользы, их можно " +
					"приготовить самостоятельно. Для это нужно замочить " +
					"в воде или молоке геркулесовые хлопья, а когда они " +
					"набухнут, просто добавить в них свежих ягод, фруктов, " +
					"горсть орехов и ложку меда или варенья.");

			arrMessage.push("<b>Среда: творог</b><br>" +
					"Творог из тех продуктов, которые хорошие в любом виде. " +
					"Из него можно делать сырники, запеканки или есть просто так " +
					"с медом, фруктами или сухофруктами. А если взбить творог в " +
					"блендере с любимыми фруктами и ягодами, то получится " +
					"отличный творожный мусс, который можно намазывать на хлеб.");

			arrMessage.push("<b>Четверг: бутерброд</b><br>" +
					"Бутерброд – это отличный завтрак. К тому же еще и самый " +
					"быстрый. Только если делать его без белого хлеба и непонятно " +
					"какой колбасы. Например, можно взять зерновой хлеб или с " + 
					"отрубями. Намазать на него перетертый творог с зеленью, а " +
					"сверху выложить кусок отварного мяса – что тут вредного?");

			arrMessage.push("<b>Пятница: оладушки, блинчики</b><br>" +
					"С бананами, шоколадом, яблоками, сметаной, медом и вареньем " +
					"– что может быть лучше под чашечку чая с лимоном с утра? " +
					"Это, конечно, готовить не так просто, как бутерброды, но " +
					"тоже не так уж и сложно. Оладьи, кстати, можно делать не " +
					"только из теста – из моркови, например, или любых других овощей. " +
					"А блины для разнообразия можно сделать разноцветными.");
	
			arrMessage.push("<b>Суббота: цельнозерновая каша</b><br>" +
					"Ключевое слово здесь – цельнозерновая. Поэтому запаренная " +
					"смесь из пакетика не покатит. А вот овсяная или гречневая " +
					"очень даже да. Рисовая тоже подойдет, если вы ее приготовите " +
					"на молоке – совсем как в детстве, ага. Если нет времени готовить " +
					"кашу с утра, запарьте просто крупу на ночь в термосе.");

			arrMessage.push("<b>Воскресенье: мясо с овощами</b><br>" +
					"Внезапно, да. Но мы сейчас не говорим о жирной свиной " +
					"отбивной и жареной картошке. Речь идет об отварном постном " +
					"мясе и отварных овощах – это отличный вариант белкового " +
					"завтрака. В крайнем случае мясо и овощи можно не отваривать, " +
					"а запечь.");



			const divModalWindow = document.createElement('DIV');
			divModalWindow.setAttribute('class', 'divModalWindow');
			document.body.appendChild(divModalWindow);		
    

			const btnExit = document.createElement("BUTTON");   
			//btnExit.innerHTML = "X";
			btnExit.setAttribute('id', 'btnExit');
			divModalWindow.appendChild(btnExit);
			btnExit.onclick = function() {
				//alert(localStorage.getItem('disableTips'));
				divModalWindow.style.display = 'none';
				return false;
			}   

			const heading = document.createElement('A');
			heading.innerHTML = "ПОЛЕЗНЫЙ ЗАВТРАК";
			heading.setAttribute('class', 'heading');
			divModalWindow.appendChild(heading);
	
			const delimiter = document.createElement('DIV');
			delimiter.setAttribute('class', 'delimiter');
			divModalWindow.appendChild(delimiter);	

			const ptext = document.createElement('P');
			ptext.innerHTML = arrMessage[currentPage];
			ptext.setAttribute('class', 'inner_text');
			divModalWindow.appendChild(ptext);

			const divPagesIndicator = document.createElement('DIV');
			divPagesIndicator.setAttribute('class', 'divPagesIndicator');
			divModalWindow.appendChild(divPagesIndicator);	

			const btnPagePrev = document.createElement("BUTTON");
			//btnPagePrev.innerHTML = "<";
			btnPagePrev.setAttribute('class', 'btnPagePrev');
			divPagesIndicator.appendChild(btnPagePrev);
		
			const btnPageNext = document.createElement("BUTTON");
			//btnPageNext.innerHTML = ">";
			btnPageNext.setAttribute('class', 'btnPageNext');

			var reply_click = function() {
				document.getElementById(currentPage).setAttribute('class', 'btnPage-default');	
				currentPage = this.id;
				ptext.innerHTML = arrMessage[currentPage];
				this.setAttribute('class', 'btnPage-primary');
			}  

			for (var i = 0; i < arrMessage.length; i++) {
				var btnPage = document.createElement("BUTTON");
				btnPage.setAttribute('class', 'btnPage-default');
				btnPage.setAttribute('id', i);
				btnPage.onclick = reply_click;	
				divPagesIndicator.appendChild(btnPage);
			} 
			document.getElementById('0').setAttribute('class', 'btnPage-primary');	
			divPagesIndicator.appendChild(btnPageNext);
	
			function nextPage() {
				if (currentPage < (arrMessage.length - 1)) {
					document.getElementById(currentPage).setAttribute('class', 'btnPage-default');	
					currentPage++;
					document.getElementById(currentPage).setAttribute('class', 'btnPage-primary');	
				}
				ptext.innerHTML = arrMessage[currentPage];	
			}

			function prevPage() {
				if (currentPage > 0) {
					document.getElementById(currentPage).setAttribute('class', 'btnPage-default');	
					currentPage--;
					document.getElementById(currentPage).setAttribute('class', 'btnPage-primary');	
				}
				ptext.innerHTML = arrMessage[currentPage];
			}
	
			btnPagePrev.onclick = function () {
				prevPage();
			}

			btnPageNext.onclick = function (){	
				nextPage();
			}

			document.addEventListener('keyup', (event) => {
  				var name = event.key;
  				if (name === 'ArrowLeft') {
    				prevPage();		
  				} else if (name === 'ArrowRight') {
					nextPage();
				} else if (name === 'Escape') {
					//alert(localStorage.getItem('disableTips'));
					divModalWindow.style.display = 'none';			
				}
			}, false);

			const divDisableTips = document.createElement('DIV');
			divDisableTips.setAttribute('class', 'divDisableTips');
			divModalWindow.appendChild(divDisableTips);	
	
			const chboxDisableTips = document.createElement('INPUT');
			chboxDisableTips.type = 'checkbox';
			divDisableTips.appendChild(chboxDisableTips);

			const label = document.createElement('LABEL');
			label.setAttribute('class', 'label');
			label.appendChild(document.createTextNode('Disable Tips'));
			divDisableTips.appendChild(label);

			chboxDisableTips.onchange = function() {
				localStorage.setItem('disableTips', chboxDisableTips.checked);
			}

			divModalWindow.style.display = 'block';	 
			
			var fileref=document.createElement("link");
        	fileref.setAttribute("rel", "stylesheet");
        	fileref.setAttribute("type", "text/css");
        	fileref.setAttribute("href", 'modalwin.css');
			document.getElementsByTagName("head")[0].appendChild(fileref);
			
		}
	}
}

customElements.define('modal-win', ModalWindow);

// in html: <script src="modalwin.js"></script>
//			<modal-win></modal-win>

