
(function($) { acf.addAction( 'ready', function($el){

  if(!wp.data) {

    return; 
  }

  /* STATE 

  // https://github.com/WordPress/gutenberg/issues/4674#issuecomment-404587928
  // https://riad.blog/2018/06/07/efficient-client-data-management-for-wordpress-plugins/
  // https://github.com/front/gutenberg-js
  // https://developer.wordpress.org/block-editor/packages/packages-core-data/
  // https://developer.wordpress.org/block-editor/data/data-core-editor/
  // core, core/blocks, core/data, core/edit-post, core/editor, core/viewport

  */
  // console.log(wp.data.select('core/editor'));

  let el = wp.element.createElement;
  let postUpdated = true;
  let stageDataExcelChanged = false;
  let inited = false;
  let postid;
  let $ExcelData;

  wp.data.subscribe(function() {

    postid = wp.data.select('core/editor').getCurrentPostId();

    if(
      postid
      &&
      !inited
    ) {

      inited = true;
      getStageJSONData();
    }

    // Reload json data on save post

    if(wp.data.select('core/editor').isSavingPost()) {

      postUpdated = false; // Debouncing multiple calls
    }

    if(
      wp.data.select('core/editor').didPostSaveRequestSucceed()
      && 
      !postUpdated
      &&
      stageDataExcelChanged
    ) {      

      postUpdated = true;
      stageDataExcelChanged = false;

      getStageJSONData(postid);
    }
  });

  /* STAGE DATA */

  function getStageJSONData() {

    let config = {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stageid: postid
      })
    };

    fetch( 
      '/wp-json/poeticplaylite/get-stage-data',
      config
    )
    .then(function(response) { return response.json(); })
    .then(function(stageJSONData) {

      if(stageJSONData.Status.Code == 'OK') {

        wp.element.render(
          el(
            ExcelDataComponent,
            stageJSONData
          ),
          $ExcelData[0]
        );

      } else {

        $ExcelData.html(
          `<div class="Error">
            ${stageJSONData.Status.Reason}
          </div>`
        ); 
      }
    }); 
  }

  // UI React components

  function TestComponent(data) {
      
    return el(
      'div', { className: 'Test' },
      'TEST'
    );
  }

  function ExcelDataComponent(data) {
      
    return el(
      'div', { className: 'Sheets' },
      data.Data.map(SheetComponent)
    );
  }

  function SheetComponent(sheet) {

    let HeaderRow = sheet.Rows.shift();

    return el(
      'div', { className: 'Sheet' },
      el(
        'div', { className: 'Title' },
        sheet.Name
      ),
      el(
        SheetHeaderComponent,        
        { columns: HeaderRow }
      ),
      sheet.Rows.map(SheetRowComponent)
    );
  }

  function SheetHeaderComponent(Data) {

    return el(
      'div', { className: 'Header' },
      Data.columns.map(SheetCellComponent)
    )
  }

  function SheetRowComponent(Data) {

    return el(
      'div', { className: 'Row' },
      Data.map(SheetCellComponent)
    )
  }

  function SheetCellComponent(Value) {

    return el(
      'div', { className: 'Cell' },
      Value
    )
  }

  /* Field DOM & Events */ 

  let $FieldContainer = $('.poetic_wp_play_lite_stage_data_excel_file');

  $FieldContainer.on(
    'change', 
    function (evt) {

      stageDataExcelChanged = true;
    }
  );

  // Data table container

  $ExcelData = $FieldContainer.append(
    `<div class="PWPL_ExcelData">
      <div class="Tools"></div>
      <div class="Data"></div>
    </div>`
  )
  .find('.Data');
  
});})(jQuery);	