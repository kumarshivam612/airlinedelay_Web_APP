document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("9dea8380-42cb-4f56-8488-4b900751c954");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9dea8380-42cb-4f56-8488-4b900751c954' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"ab13b26b-13cd-4309-9594-923d0208b660":{"roots":{"references":[{"attributes":{},"id":"d05199d0-eeaa-4ebe-b173-872335982c36","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eeda58c8-d221-4ed2-ad5b-1e91dd0d7fd6","type":"Rect"},{"attributes":{"data_source":{"id":"37e92785-0dbf-4edd-8abf-c8e85aafbe88","type":"ColumnDataSource"},"glyph":{"id":"95b58166-8742-4658-8bc8-a5de65253eca","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"69dbc8e5-2c70-43d8-8b4f-132f4a9915b9","type":"GlyphRenderer"},{"attributes":{},"id":"c4cb72c3-59e6-4019-b335-08f7a9a0b635","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.4444444444444446,0.0,0.0,1.8571428571428572,2.111111111111111,1.3333333333333333,0.0,0.8,0.6666666666666666,0.75,0.0,2.111111111111111,0.0,0.25,0.0,2.3333333333333335,1.3333333333333333,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.3333333333333333,2.4285714285714284],"x":[12,13,16,17,9,11,13,15,16,18,9,12,13,18,9,11,12,16,18,9,10,16,7,8,15,14,17],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"797bd0cc-7e6c-44f8-a7ee-1651524298a5","type":"ColumnDataSource"},{"attributes":{},"id":"5895e4c4-0c05-4cb6-87e5-82061ddb8210","type":"ToolEvents"},{"attributes":{},"id":"36c17aea-6c06-42c9-8845-83216fef0c7a","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9ba1cc29-baa3-4412-89a8-1eca338ce6ea","type":"BasicTickFormatter"},"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"},"ticker":{"id":"1b1eb906-62ef-4c9b-963e-d1581ce87604","type":"BasicTicker"}},"id":"532f3123-d554-48f5-8888-960bd0b65149","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.75],"x":[15],"y":["Sunday"]}},"id":"77ac9675-5f4d-44b7-b086-831f12a22efb","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"f0080071-7e17-4b1a-be96-8bfb1897ccd7","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.22222222222222],"x":[11],"y":["Wednesday"]}},"id":"ca32afa0-51a0-405d-819f-06aa01d6e543","type":"ColumnDataSource"},{"attributes":{},"id":"79308684-64c5-4be9-904e-78dd12550c9c","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"243179e1-56f0-4c4f-a894-6770c7fab8d3","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"50a3e3d7-1b41-418b-8332-d01d372b1af0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3c48049-685c-4122-87af-ca1cbe0e133d","type":"CategoricalTicker"}},"id":"2c275fce-84f2-4bfe-ad93-58fb8df011de","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,29.0],"x":[11,13],"y":["Sunday","Sunday"]}},"id":"079693c6-80c8-4355-bc4b-0ac18ec4e840","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5470ef25-577f-46a1-852b-47f238d4156a","type":"ColumnDataSource"},"glyph":{"id":"270bad8f-7c18-4a39-b14d-7d5d8c2f9f7d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aaf64956-ab98-4043-aaa0-b4b944aae4f8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7c56abeb-1521-4f25-a9b1-42bbe49a5045","type":"ColumnDataSource"},"glyph":{"id":"d6038bcd-cea4-4a98-9a58-6b667fdbfbfa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8c21a539-4460-48f1-b46c-113bc23cfb8f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb72ac90-3872-4f74-b16a-4ae7d3144a54","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e03443b-8faa-4be5-9619-ea24bb99824f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"1f95e486-62b1-4670-9caa-abaec0ea4ffa","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"df14ac09-18cf-40b9-ad5c-bffd874f5a05","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dedeed8c-e481-4bd6-be8c-4f8f43963747","type":"PanTool"},{"id":"b4525467-71be-4adc-8583-1fcbf6d9cd73","type":"WheelZoomTool"},{"id":"cae975c5-dfbb-4f63-a412-1a15fd585a52","type":"BoxZoomTool"},{"id":"b6058397-48e3-4049-abff-ef93534981f3","type":"SaveTool"},{"id":"6cf17cd9-217e-486f-831c-fe66f7ace48f","type":"ResetTool"},{"id":"1f95e486-62b1-4670-9caa-abaec0ea4ffa","type":"HelpTool"}]},"id":"d863b70d-e1b9-43fe-b4d7-5eb8b9b04863","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5278dfc6-f77c-464b-b72b-499dafeb0090","type":"Rect"},{"attributes":{},"id":"ca68b299-ba60-48dd-afc3-2f2f76734f3d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"00197e80-3bd2-40dd-9adb-ca31d9d3c472","type":"ColumnDataSource"},"glyph":{"id":"6b7f266c-0cde-44a0-ad33-6798c932a734","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f5e4ecf7-fce1-41a0-b9c4-20856f29af2f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9a10bc22-382b-447c-9dc0-768a35444e5f","type":"BoxAnnotation"},"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"f97b189b-8791-436c-ab45-4054defba100","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"1b95cbbc-56bc-4e0b-a910-90d69aa86553","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.6666666666666665,5.0,3.8,4.75,5.761904761904762,4.5,6.375,5.444444444444445,4.125,6.333333333333333,4.485714285714286,4.111111111111111,5.625],"x":[11,15,14,17,14,15,17,12,17,10,14,12,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"5470ef25-577f-46a1-852b-47f238d4156a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.88888888888889,12.4,10.523809523809524,10.285714285714286,12.6],"x":[9,16,14,17,15],"y":["Monday","Wednesday","Thursday","Thursday","Friday"]}},"id":"37e92785-0dbf-4edd-8abf-c8e85aafbe88","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"b4525467-71be-4adc-8583-1fcbf6d9cd73","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"d2061123-ba31-4fa7-8df3-c7c678f11017","type":"ColumnDataSource"},"glyph":{"id":"faf417a0-864e-4385-908c-f49c57bc1c28","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9f33d937-012e-4854-bf84-f150ffccdb8c","type":"GlyphRenderer"},{"attributes":{},"id":"b3c48049-685c-4122-87af-ca1cbe0e133d","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"0f7ae8a4-ae4a-4567-8000-dd9e2bf6d9f4","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b7f266c-0cde-44a0-ad33-6798c932a734","type":"Rect"},{"attributes":{"data_source":{"id":"797bd0cc-7e6c-44f8-a7ee-1651524298a5","type":"ColumnDataSource"},"glyph":{"id":"5278dfc6-f77c-464b-b72b-499dafeb0090","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2438f141-636a-40fe-b630-1b05c03a09a9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"b6058397-48e3-4049-abff-ef93534981f3","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"26a82a94-de6f-4a28-9dc5-987f637b11dd","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"7d955ed8-d2e7-45d2-b3b9-b04438f5c5bf","type":"Range1d"},{"attributes":{"data_source":{"id":"e10bc68b-6853-4016-8aa4-ff647b4b10e2","type":"ColumnDataSource"},"glyph":{"id":"f87619bd-7bb7-4855-9b13-e367fbe76f57","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd7a4e2f-be44-4499-96ba-1e9be3430f59","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"531d0274-2e5c-4e93-bfe4-b511afd8816b","type":"ColumnDataSource"},"glyph":{"id":"6f647327-2174-4d4b-8942-550d79339e8f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2818da05-e5e0-47be-889a-25207cbb3edf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.8,17.75],"x":[15,18],"y":["Thursday","Sunday"]}},"id":"f37f2c4b-083d-47f6-8c83-f4ada5954995","type":"ColumnDataSource"},{"attributes":{},"id":"8457cd92-d7e0-4b76-abb1-24e28bdf558e","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"6d6a61db-690b-4802-b769-dd68721ef747","type":"ColumnDataSource"},"glyph":{"id":"26a82a94-de6f-4a28-9dc5-987f637b11dd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4dbfe3a5-f965-4c40-9a79-4a54db52ff50","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d05199d0-eeaa-4ebe-b173-872335982c36","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"},"ticker":{"id":"8457cd92-d7e0-4b76-abb1-24e28bdf558e","type":"CategoricalTicker"}},"id":"5d911c31-eb53-44cd-922c-04d66fef544c","type":"CategoricalAxis"},{"attributes":{"callback":null,"tabs":[{"id":"aee9c464-4ddb-49c6-a62d-69c1708f0e48","type":"Panel"},{"id":"02055358-20fb-4269-9b2b-2bce236daae0","type":"Panel"}]},"id":"de0ec1d8-31c4-4023-8238-59a0ea73b1c3","type":"Tabs"},{"attributes":{"child":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"aee9c464-4ddb-49c6-a62d-69c1708f0e48","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ae8e185-03ec-4857-bd86-11512d001527","type":"Rect"},{"attributes":{"child":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"02055358-20fb-4269-9b2b-2bce236daae0","type":"Panel"},{"attributes":{"data_source":{"id":"079693c6-80c8-4355-bc4b-0ac18ec4e840","type":"ColumnDataSource"},"glyph":{"id":"105dc3d0-5184-4a3f-a04a-de768ac2a9a1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"31ea9aaa-7263-4c38-92aa-19b63bea91e2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"34a1006f-2b72-4460-9bd4-19510cd730f2","type":"PanTool"},{"id":"1b95cbbc-56bc-4e0b-a910-90d69aa86553","type":"WheelZoomTool"},{"id":"f97b189b-8791-436c-ab45-4054defba100","type":"BoxZoomTool"},{"id":"e8b429f5-28e3-4afd-b14f-59aa14a4016c","type":"SaveTool"},{"id":"0f7ae8a4-ae4a-4567-8000-dd9e2bf6d9f4","type":"ResetTool"},{"id":"f0080071-7e17-4b1a-be96-8bfb1897ccd7","type":"HelpTool"}]},"id":"13b32ab7-a6ac-4112-ae30-4cdf65315200","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.6666666666666665,5.0,3.8,4.75,5.761904761904762,4.5,6.375,5.444444444444445,4.125,6.333333333333333,4.485714285714286,4.111111111111111,5.625],"x":[11,15,14,17,14,15,17,12,17,10,14,12,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"23c4397f-5d04-46d4-987e-ec427c5e95d4","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"db83f2a2-c0b4-4024-8a4e-aff748ac12b7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.368421052631579,8.5,7.666666666666667,6.75,9.238095238095237,9.333333333333334,7.428571428571429],"x":[14,18,12,11,14,18,9],"y":["Monday","Monday","Tuesday","Friday","Friday","Friday","Sunday"]}},"id":"531d0274-2e5c-4e93-bfe4-b511afd8816b","type":"ColumnDataSource"},{"attributes":{},"id":"1b1eb906-62ef-4c9b-963e-d1581ce87604","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"cfdf10c4-04e7-4ba5-bbe9-332bc3f37716","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.4444444444444446,0.0,0.0,1.8571428571428572,2.111111111111111,1.3333333333333333,0.0,0.8,0.6666666666666666,0.75,0.0,2.111111111111111,0.0,0.25,0.0,2.3333333333333335,1.3333333333333333,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.3333333333333333,2.4285714285714284],"x":[12,13,16,17,9,11,13,15,16,18,9,12,13,18,9,11,12,16,18,9,10,16,7,8,15,14,17],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"d2061123-ba31-4fa7-8df3-c7c678f11017","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"446ef163-a43f-4a74-a5a5-1b5e43fd023b","type":"LinearAxis"}],"left":[{"id":"2c275fce-84f2-4bfe-ad93-58fb8df011de","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9a10bc22-382b-447c-9dc0-768a35444e5f","type":"BoxAnnotation"},{"id":"dd7a4e2f-be44-4499-96ba-1e9be3430f59","type":"GlyphRenderer"},{"id":"f5e4ecf7-fce1-41a0-b9c4-20856f29af2f","type":"GlyphRenderer"},{"id":"a1b1b7c5-2ba8-4a18-9695-eb38ef3aa4f5","type":"GlyphRenderer"},{"id":"4dbfe3a5-f965-4c40-9a79-4a54db52ff50","type":"GlyphRenderer"},{"id":"35a8def8-60a4-4205-a45a-a17a184234cf","type":"GlyphRenderer"},{"id":"1103d1a2-aeb2-4ca9-99bd-8ea2642a7c4b","type":"GlyphRenderer"},{"id":"736c7f98-6f70-4152-87da-f8f8f2802b4f","type":"GlyphRenderer"},{"id":"2438f141-636a-40fe-b630-1b05c03a09a9","type":"GlyphRenderer"},{"id":"446ef163-a43f-4a74-a5a5-1b5e43fd023b","type":"LinearAxis"},{"id":"2c275fce-84f2-4bfe-ad93-58fb8df011de","type":"CategoricalAxis"},{"id":"387bcefe-c1b6-45a3-b067-b4dc6ee83037","type":"ColorBar"}],"right":[{"id":"387bcefe-c1b6-45a3-b067-b4dc6ee83037","type":"ColorBar"}],"title":{"id":"6f68a868-c4ae-473a-99a1-7062890705fc","type":"Title"},"tool_events":{"id":"5895e4c4-0c05-4cb6-87e5-82061ddb8210","type":"ToolEvents"},"toolbar":{"id":"13b32ab7-a6ac-4112-ae30-4cdf65315200","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7d955ed8-d2e7-45d2-b3b9-b04438f5c5bf","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"cfdf10c4-04e7-4ba5-bbe9-332bc3f37716","type":"FactorRange"}},"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.368421052631579,8.5,7.666666666666667,6.75,9.238095238095237,9.333333333333334,7.428571428571429],"x":[14,18,12,11,14,18,9],"y":["Monday","Monday","Tuesday","Friday","Friday","Friday","Sunday"]}},"id":"1ad9e8ee-d672-44e7-affd-bbd1cd53461d","type":"ColumnDataSource"},{"attributes":{},"id":"29c068e8-d77e-4ab5-9dd3-7f3b4b60ac7c","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"a30f9c62-07ad-49c3-9117-70e3225d2a13","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f647327-2174-4d4b-8942-550d79339e8f","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b8608683-fd93-46d1-b88b-1846a3572b63","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9a10bc22-382b-447c-9dc0-768a35444e5f","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"270bad8f-7c18-4a39-b14d-7d5d8c2f9f7d","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"22590371-02b2-4fd7-97fa-2636aefd178e","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"6cf17cd9-217e-486f-831c-fe66f7ace48f","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.88888888888889,12.4,10.523809523809524,10.285714285714286,12.6],"x":[9,16,14,17,15],"y":["Monday","Wednesday","Thursday","Thursday","Friday"]}},"id":"16d3a639-ae74-4903-9f75-a9ef231e4518","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23c4397f-5d04-46d4-987e-ec427c5e95d4","type":"ColumnDataSource"},"glyph":{"id":"cb72ac90-3872-4f74-b16a-4ae7d3144a54","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"736c7f98-6f70-4152-87da-f8f8f2802b4f","type":"GlyphRenderer"},{"attributes":{},"id":"9ba1cc29-baa3-4412-89a8-1eca338ce6ea","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,29.0],"x":[11,13],"y":["Sunday","Sunday"]}},"id":"e10bc68b-6853-4016-8aa4-ff647b4b10e2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16d3a639-ae74-4903-9f75-a9ef231e4518","type":"ColumnDataSource"},"glyph":{"id":"5ae8e185-03ec-4857-bd86-11512d001527","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"35a8def8-60a4-4205-a45a-a17a184234cf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.22222222222222],"x":[11],"y":["Wednesday"]}},"id":"00197e80-3bd2-40dd-9adb-ca31d9d3c472","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6038bcd-cea4-4a98-9a58-6b667fdbfbfa","type":"Rect"},{"attributes":{"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"dedeed8c-e481-4bd6-be8c-4f8f43963747","type":"PanTool"},{"attributes":{"color_mapper":{"id":"df14ac09-18cf-40b9-ad5c-bffd874f5a05","type":"LinearColorMapper"},"formatter":{"id":"a3403dea-a826-4cc3-86b4-737b53fe6c14","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"},"ticker":{"id":"36c17aea-6c06-42c9-8845-83216fef0c7a","type":"BasicTicker"}},"id":"bb072b33-a0ed-4688-a030-56f1514fef60","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a06ff5c-539f-420e-9e0a-aa14162d2c64","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f87619bd-7bb7-4855-9b13-e367fbe76f57","type":"Rect"},{"attributes":{},"id":"b0ebd2b1-6cfd-4238-8d99-e9d0999480e5","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.75],"x":[15],"y":["Sunday"]}},"id":"6d6a61db-690b-4802-b769-dd68721ef747","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"34a1006f-2b72-4460-9bd4-19510cd730f2","type":"PanTool"},{"attributes":{},"id":"50a3e3d7-1b41-418b-8332-d01d372b1af0","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"532f3123-d554-48f5-8888-960bd0b65149","type":"LinearAxis"}],"left":[{"id":"5d911c31-eb53-44cd-922c-04d66fef544c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"5e03443b-8faa-4be5-9619-ea24bb99824f","type":"BoxAnnotation"},{"id":"31ea9aaa-7263-4c38-92aa-19b63bea91e2","type":"GlyphRenderer"},{"id":"5adff471-b15a-4150-a474-1dfbbdd2f018","type":"GlyphRenderer"},{"id":"8c21a539-4460-48f1-b46c-113bc23cfb8f","type":"GlyphRenderer"},{"id":"d5a90204-2b59-4277-b89b-eba0625eb4f5","type":"GlyphRenderer"},{"id":"69dbc8e5-2c70-43d8-8b4f-132f4a9915b9","type":"GlyphRenderer"},{"id":"2818da05-e5e0-47be-889a-25207cbb3edf","type":"GlyphRenderer"},{"id":"aaf64956-ab98-4043-aaa0-b4b944aae4f8","type":"GlyphRenderer"},{"id":"9f33d937-012e-4854-bf84-f150ffccdb8c","type":"GlyphRenderer"},{"id":"532f3123-d554-48f5-8888-960bd0b65149","type":"LinearAxis"},{"id":"5d911c31-eb53-44cd-922c-04d66fef544c","type":"CategoricalAxis"},{"id":"bb072b33-a0ed-4688-a030-56f1514fef60","type":"ColorBar"}],"right":[{"id":"bb072b33-a0ed-4688-a030-56f1514fef60","type":"ColorBar"}],"title":{"id":"a30f9c62-07ad-49c3-9117-70e3225d2a13","type":"Title"},"tool_events":{"id":"ca68b299-ba60-48dd-afc3-2f2f76734f3d","type":"ToolEvents"},"toolbar":{"id":"d863b70d-e1b9-43fe-b4d7-5eb8b9b04863","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"15e43393-5367-4923-8f73-75e310f8b6dc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b8608683-fd93-46d1-b88b-1846a3572b63","type":"FactorRange"}},"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"1ad9e8ee-d672-44e7-affd-bbd1cd53461d","type":"ColumnDataSource"},"glyph":{"id":"243179e1-56f0-4c4f-a894-6770c7fab8d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1103d1a2-aeb2-4ca9-99bd-8ea2642a7c4b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.8,17.75],"x":[15,18],"y":["Thursday","Sunday"]}},"id":"7c56abeb-1521-4f25-a9b1-42bbe49a5045","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f37f2c4b-083d-47f6-8c83-f4ada5954995","type":"ColumnDataSource"},"glyph":{"id":"db83f2a2-c0b4-4024-8a4e-aff748ac12b7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a1b1b7c5-2ba8-4a18-9695-eb38ef3aa4f5","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"faf417a0-864e-4385-908c-f49c57bc1c28","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"79308684-64c5-4be9-904e-78dd12550c9c","type":"BasicTickFormatter"},"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"29c068e8-d77e-4ab5-9dd3-7f3b4b60ac7c","type":"BasicTicker"}},"id":"446ef163-a43f-4a74-a5a5-1b5e43fd023b","type":"LinearAxis"},{"attributes":{"overlay":{"id":"5e03443b-8faa-4be5-9619-ea24bb99824f","type":"BoxAnnotation"},"plot":{"id":"e3b7447a-2b71-4939-999f-fcd20583eca4","subtype":"Chart","type":"Plot"}},"id":"cae975c5-dfbb-4f63-a412-1a15fd585a52","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"105dc3d0-5184-4a3f-a04a-de768ac2a9a1","type":"Rect"},{"attributes":{"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"}},"id":"e8b429f5-28e3-4afd-b14f-59aa14a4016c","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"22590371-02b2-4fd7-97fa-2636aefd178e","type":"LinearColorMapper"},"formatter":{"id":"c4cb72c3-59e6-4019-b335-08f7a9a0b635","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b7a1f306-f086-4d72-98ff-790c205bcbb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"b0ebd2b1-6cfd-4238-8d99-e9d0999480e5","type":"BasicTicker"}},"id":"387bcefe-c1b6-45a3-b067-b4dc6ee83037","type":"ColorBar"},{"attributes":{"callback":null,"end":23},"id":"15e43393-5367-4923-8f73-75e310f8b6dc","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"95b58166-8742-4658-8bc8-a5de65253eca","type":"Rect"},{"attributes":{"data_source":{"id":"77ac9675-5f4d-44b7-b086-831f12a22efb","type":"ColumnDataSource"},"glyph":{"id":"5a06ff5c-539f-420e-9e0a-aa14162d2c64","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d5a90204-2b59-4277-b89b-eba0625eb4f5","type":"GlyphRenderer"},{"attributes":{},"id":"a3403dea-a826-4cc3-86b4-737b53fe6c14","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"6f68a868-c4ae-473a-99a1-7062890705fc","type":"Title"},{"attributes":{"data_source":{"id":"ca32afa0-51a0-405d-819f-06aa01d6e543","type":"ColumnDataSource"},"glyph":{"id":"eeda58c8-d221-4ed2-ad5b-1e91dd0d7fd6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5adff471-b15a-4150-a474-1dfbbdd2f018","type":"GlyphRenderer"}],"root_ids":["de0ec1d8-31c4-4023-8238-59a0ea73b1c3"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"ab13b26b-13cd-4309-9594-923d0208b660","elementid":"9dea8380-42cb-4f56-8488-4b900751c954","modelid":"de0ec1d8-31c4-4023-8238-59a0ea73b1c3"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});