const loadDynamicModules = () => {
   const modules = {
       basics: () => {
           import('./Basics/index');
       },
       hotKeys: () => {
           import('./HotKeys/index');
       }
   };
};

const index = () => {
    document.addEventListener(
        "DOMContentLoaded",
        function(){
            loadDynamicModules();
        }
    );
};

index();