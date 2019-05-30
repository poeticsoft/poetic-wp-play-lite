
(function($) { $(function() { 

  let el = wp.element.createElement;
  let TabPanel = wp.components.TabPanel;
  let $Tools = $('poetic-play-lite-tools');

  console.log(wp.data);

  wp.data.withSelect(function() {
    
    console.log(wp.data.select('core'));
  });

  const onSelect = (tabName) => {

    console.log(tabName);
  };

  wp.element.render(
    el(
      TabPanel,
      {
        className: 'my-tab-panel',
        activeClass: 'active-tab',
        onSelect: onSelect,
        tabs: [
          {
            name: 'tab1',
            title: 'Tab 1',
            className: 'tab-one',
          },
          {
            name: 'tab2',
            title: 'Tab 2',
            className: 'tab-two',
          }
        ]
      },
      (tab) => { tab.title }
    ),
    $Tools[0] 
  );

}); })(jQuery);