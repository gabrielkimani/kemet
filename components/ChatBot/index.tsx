import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Chatbot code
    window.__be = window.__be || {};
    window.__be.id = "64b508e6ebb51c00076dbe42";
    (function() {
      var be = document.createElement('script');
      be.type = 'text/javascript';
      be.async = true;
      be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(be, s);
    })();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Add other components or UI elements here */}
    </div>
  );
};

export default Chatbot;
