   var Images=document.getElementsByClassName('Images');
	var Images1=document.getElementsByClassName('Images1');
	function changeImages()
	{
		var x = event.clientX;
   	var y = event.clientY;
   	var C = "Image height   " + Images[0].height + ", Width   " + Images[0].width ;
    	document.getElementById("test").innerHTML =C ;

    	var i,j,col=0,row=0;
      col=x/140;
      row=y/140; 
      col=Math.floor(col);
      row=Math.floor(row);         
      console.log(col+"   "+row+"");   
      if(row==0)
      {
         for(i=col+1;i<Images.length;i++)
         {
            Images[i].src="images/s5.png";
             Images1[i].src="images/s5.png";
         }
         for(i=0;i<col;i++)
         {
            Images[i].src="images/s8.png";
            Images1[i].src="images/s8.png";
         }
            Images[col].src="images/s3.png";
            Images1[col].src="images/s3.png";
      }
      else if(row==1)
      {
         for(i=col+1;i<Images.length;i++)
         {
            Images[i].src="images/s9.png";
            Images1[i].src="images/s5.png";
         }
         for(i=0;i<col;i++)
         {
            Images[i].src="images/s6.png";
            Images1[i].src="images/s8.png";
         }
            Images[col].src="images/s1.png";
            Images1[col].src="images/s3.png";
      }
      else if(row==2)
      {
         for(i=col+1;i<Images.length;i++)
         {
            Images[i].src="images/s7.png";
            Images1[i].src="images/s9.png";
         }
         for(i=0;i<col;i++)
         {
            Images[i].src="images/s2.png";
            Images1[i].src="images/s6.png";
         }
            Images[col].src="images/s4.png";
            Images1[col].src="images/s1.png";
      }
      else
      {
         for(i=col+1;i<Images.length;i++)
         {
            Images[i].src="images/s7.png";
            Images1[i].src="images/s7.png";f
         }
         for(i=0;i<col;i++)
         {
            Images[i].src="images/s2.png";
            Images1[i].src="images/s2.png";
         }
            Images[col].src="images/s4.png";
            Images1[col].src="images/s4.png";
      }
}
