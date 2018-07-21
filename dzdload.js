   function getQueryParam(param) {
    var result =  window.location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );
    return result ? result[3] : false;
    }
    var counter = 20;
	var el = document.getElementById('waktu')
    el.addEventListener('click',countDown,false);
    function countDown()
    {
        if(counter>=0)
        {
            document.getElementById("waktu").innerHTML = counter;
        }
        else
        {
            download();
            return;
        }
        counter -= 1; 

        var counter2 = setTimeout("countDown()",1000);
        return;
    }
    function download()
	{ var aId = getQueryParam("aId");
	  if ( aId == "df" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://depositfiles.com/files/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "ss" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://sendspace.com/file/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "up" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://uppit.com/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "tf" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://tusfiles.net/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "hf" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://hugefiles.net/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "sb" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://www.sharebeast.com/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "sf" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://www.solidfiles.com/d/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "df" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://depositfiles.com/files/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "gt" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://ge.tt/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "fh" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://datafilehost.com/d/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else if ( aId == "tb" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://turbobit.net/" + getQueryParam("id") + ".html' title='Download File'>Download File</a>"; }
	  else if ( aId == "ff" )
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='http://files.fm/u/" + getQueryParam("id") + "' title='Download File'>Download File</a>"; }
	  else
	  { document.getElementById("taut").innerHTML = "<a id='neolink' href='#' title='Error Link'>Error on URL!</a><span id='notlink'>Link ID not supported.<br /><a id='alist' style='color:#0000ff;' href='link-list.html' title='Link List'>View Supported Link ID</a></span>"; }
	  }
