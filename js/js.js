
/**
 * Created by 做信的恋人 on 2016-07-07.
 */
var sidleNode=document.getElementById('sidle');
var lisNode=sidleNode.getElementsByTagName('li');
  for(var i=0;i<lisNode.length;i++)
{
    lisNode[i].index=i;
    lisNode[i].onmouseenter=function(){
        if(this.className=="current")
        {
            return;
        }
        var curPos=this.index;
        var oldPos;
        for( var j=0;j<lisNode.length;j++){
            if(lisNode[j].className=="current"){
                oldPos=j;
                break;
            }
        }
        lisNode[curPos].style.width="798px";
        lisNode[curPos].style.marginTop="0px";
        lisNode[curPos].className="current";

        lisNode[oldPos].style.width="48px";
        lisNode[oldPos].style.marginTop="-1px";
        lisNode[oldPos].className="";
        }
}