(function(e,d,i){
	//------------------
	// imgCheck 開始タグ
	d.write('<div>');
	//------------------
	// dllist作成
	for(i = 0, len = e.length; i < len; i++){
		var item      = e[i],
			getWidth  = item.getAttribute('width'),
			getHeight = item.getAttribute('height'),
			url       = item.src.replace('http://' + document.location.hostname,''),
			list      = '<dl><dt><img src="' + item.src + '"></dt>';
		list += '<dd><span class="bold">[ALT]</span> ' + item.alt + '</dd>';
		if (!getWidth || !getHeight || item.width !== item.naturalWidth || item.height !== item.naturalHeight ) {
			list += '<dd><span class="bold">[SIZE]</span> <span class="error">';
			list += item.naturalWidth + 'x' + item.naturalHeight + ' (';
			list += getWidth + 'x' + getHeight;
			list += ')</span></dd>';
		} else {
			list += '<dd><span class="bold">[SIZE]</span> ';
			list += item.naturalWidth + 'x' + item.naturalHeight + ' (';
			list += getWidth + 'x' + getHeight;
			list += ')</dd>';
		}
		list += '<dd><span class="bold">[URL]</span> ' + url + '</dd></dl>';
		d.write(list);
	}
	//------------------
	// imgCheck 終了タグ
	d.write('</div>');
	//------------------
	// 出力を終了
	d.close();
	//------------------
	// ページタイトル代入
	var pageName = document.title;
	d.title = '画像一覧 - ' + pageName;
	//------------------
	// CSS追加
	_appendCss('reset.css');
	_appendCss('style.css');
	//------------------
	// CSS追加用関数
	function _appendCss(file) {
		var link = d.createElement('link'),
			head = d.getElementsByTagName('head'),
			dir  = 'http://kaico.xsrv.jp/freepage/imgcheck/';
		link.href = dir + file;
		link.rel  = 'stylesheet';
		head.item(0).appendChild(link);
	}
})(document.getElementsByTagName('img'),window.open().document);
