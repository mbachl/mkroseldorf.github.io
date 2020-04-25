var current = null;
var prev=null;
	
function banner() {
	if(current==null) {
		current=document.getElementById('banner').firstChild.nextSibling;
	}
			
	current.className='visible';
	if(prev!=null) {
		prev.className='';
	}
			
	prev=current;
	current=current.nextSibling.nextSibling;
			
	setTimeout('banner()',5000);
}

document.addEventListener("DOMContentLoaded", banner);

