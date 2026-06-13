export function TrafficPixel() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var s=sessionStorage.getItem('_sid');if(!s){s=Math.random().toString(36).slice(2)+Date.now().toString(36);sessionStorage.setItem('_sid',s)}var i=new Image();i.src='https://b4f8d651-c82a-450f-89e2-f8472bd40ae7.lovableproject.com/api/public/px/5f919e4d-0a2d-46bb-8c8e-2018124ed89c.gif?p='+encodeURIComponent(location.pathname)+'&q='+encodeURIComponent(location.search)+'&r='+encodeURIComponent(document.referrer||'')+'&sid='+encodeURIComponent(s)+'&t='+Date.now()}catch(e){}})();`,
      }}
    />
  );
}
