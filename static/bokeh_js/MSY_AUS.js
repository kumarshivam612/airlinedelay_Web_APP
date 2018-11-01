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
      };var element = document.getElementById("ed43bdf3-4972-4450-9ff9-7c0c1e7da57a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ed43bdf3-4972-4450-9ff9-7c0c1e7da57a' but no matching script tag was found. ")
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
                  var docs_json = {"6d35b951-0e72-4fb7-a668-0141203cae66":{"roots":{"references":[{"attributes":{"callback":null,"end":23},"id":"036c3dee-4301-4381-af2f-58a05000184c","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5d7f470e-2daf-40b6-bf4c-a47c2e266578","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.636363636363637,23.0],"x":[13,13],"y":["Saturday","Sunday"]}},"id":"1c7d9356-2236-4a4b-9224-7ac660050416","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"da501a4b-280b-4043-b9a8-02fb9d91da0b","type":"BasicTickFormatter"},"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"},"ticker":{"id":"c464b488-a849-46ce-ac49-1793b984c592","type":"BasicTicker"}},"id":"e29c5ec3-42c2-452c-8589-7f48f0235c53","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a45b8f3d-5472-490e-b913-0f26e5d5fcab","type":"ColumnDataSource"},"glyph":{"id":"603c15c2-c694-4128-9628-b8b1a0b61ef2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5c77a193-d738-4895-b4a1-fd14c1116d91","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"7cf62f33-4521-47db-9180-c580894af71a","type":"ResetTool"},{"attributes":{"data_source":{"id":"c319c3a0-4bbf-43e2-b0fa-9219be332780","type":"ColumnDataSource"},"glyph":{"id":"b7d0a1a6-fe8d-419b-88ad-0d6776cb5a0e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a282dc25-1e83-40e1-a49d-df75189cc516","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"2baeb197-4490-4fe5-844f-31ac4e4cc804","type":"SaveTool"},{"attributes":{"overlay":{"id":"a6ae2eab-2166-4abf-af5a-33a9ef567f93","type":"BoxAnnotation"},"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"eb1f8247-53b6-4392-9d23-c263ab3914ed","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"60872276-355e-4e1e-9f6a-4891a1a5f5fd","type":"HelpTool"},{"attributes":{"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"3b0f723c-ae95-46e1-8254-b7fb5e0d23e2","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,6.423076923076923,3.769230769230769,5.448275862068965,6.454545454545454,5.125],"x":[8,10,10,14,12,16],"y":["Wednesday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"208165f4-c519-406b-9052-11b36de9867e","type":"ColumnDataSource"},{"attributes":{},"id":"185bec25-ece1-4aec-82ff-da90632590d9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.0,8.833333333333334,9.932203389830509,8.666666666666666,9.0,9.444444444444445,10.0,7.333333333333333,8.166666666666666,8.354166666666666,8.2,9.916666666666666],"x":[8,10,14,16,8,12,8,8,9,10,16,11],"y":["Monday","Monday","Tuesday","Tuesday","Thursday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"642633c5-cd24-417d-a588-b5ad713b3cd3","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"18385463-851d-4c24-9422-3c48d1edcf54","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"87f7d3ad-22fb-4fbc-993d-68a7bcec494d","type":"Rect"},{"attributes":{"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"85e54ab8-0f86-4613-a257-b591d2ed1e73","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"39adeba9-878e-4fee-a810-66c17ac1bfb2","type":"PanTool"},{"id":"9c898abd-0bf1-4a31-b7d8-ace8f4ba1e37","type":"WheelZoomTool"},{"id":"ba389bba-08b1-4014-b8f9-076cec781197","type":"BoxZoomTool"},{"id":"85e54ab8-0f86-4613-a257-b591d2ed1e73","type":"SaveTool"},{"id":"7cf62f33-4521-47db-9180-c580894af71a","type":"ResetTool"},{"id":"60872276-355e-4e1e-9f6a-4891a1a5f5fd","type":"HelpTool"}]},"id":"92e24b4f-b7c4-4fae-9e07-c4d84600ecf8","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.916666666666666,10.518518518518519,11.5,12.88888888888889,12.0,11.76271186440678,13.2,12.448275862068966,12.0,10.459016393442623,13.029411764705882],"x":[14,10,16,7,13,14,16,14,16,14,15],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"6a8add93-d7e5-4ae8-884e-396402a7da1e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"669677d0-1368-4422-811e-83bbba756b11","type":"ColumnDataSource"},"glyph":{"id":"84be7db4-b312-487e-aa20-aa97da9a72d6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bfeec6cc-0873-4768-a543-ad08930541cc","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"edd69d16-7c95-4e28-a4c5-3b8af161ac8a","type":"FactorRange"},{"attributes":{"child":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"d1ca7662-3586-4e13-9c44-7d965bd21c6d","type":"Panel"},{"attributes":{},"id":"3462b017-6b08-48fd-bdda-2925564ad01b","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4cc3ee39-c770-4a9e-ba7c-d92d4e47fe95","type":"ColumnDataSource"},"glyph":{"id":"e4392c00-bcee-4c22-8ff0-effb13e1e949","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f079d19f-c4a8-420d-bd0a-c66ec6174687","type":"GlyphRenderer"},{"attributes":{},"id":"1d8b0594-83b3-47a6-bbb7-eddd3bfcfbcd","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"adf7b940-0779-48e3-a49f-fa462061cac4","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f5f3204d-b0f7-49e2-b4d4-c09c397459cd","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"5d7f470e-2daf-40b6-bf4c-a47c2e266578","type":"LinearColorMapper"},"formatter":{"id":"9b7f2aad-76e2-44de-a154-4cc098daccc0","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"},"ticker":{"id":"e1e11a78-36a4-4a1b-b061-1e7198f31e6f","type":"BasicTicker"}},"id":"843ea3f1-1f05-4696-9a7f-1e3abff02afd","type":"ColorBar"},{"attributes":{"data_source":{"id":"1c7d9356-2236-4a4b-9224-7ac660050416","type":"ColumnDataSource"},"glyph":{"id":"adf7b940-0779-48e3-a49f-fa462061cac4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bc28ea63-f30e-4dfd-8f8c-42ff801758cf","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6ae2eab-2166-4abf-af5a-33a9ef567f93","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7d0a1a6-fe8d-419b-88ad-0d6776cb5a0e","type":"Rect"},{"attributes":{"data_source":{"id":"1b771222-6b6c-4424-a636-c4c7874ccdf4","type":"ColumnDataSource"},"glyph":{"id":"87f7d3ad-22fb-4fbc-993d-68a7bcec494d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a6c5cdb5-dd89-4af9-9c92-962c715bba0f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c2e85d4-ed9e-465c-b692-830a10e9f8f5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"795a0e23-77e5-4a09-95ab-8e715ef8ffd2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"da1ed62f-d745-4f30-83b1-de3b0f5864e2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,6.423076923076923,3.769230769230769,5.448275862068965,6.454545454545454,5.125],"x":[8,10,10,14,12,16],"y":["Wednesday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"4cc3ee39-c770-4a9e-ba7c-d92d4e47fe95","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.884615384615385,14.552631578947368,16.406779661016948,15.461538461538462],"x":[10,15,14,15],"y":["Tuesday","Tuesday","Wednesday","Saturday"]}},"id":"a45b8f3d-5472-490e-b913-0f26e5d5fcab","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"202e5557-5637-498f-8a2f-0ba0fbb022e2","type":"FactorRange"},{"attributes":{},"id":"9b7f2aad-76e2-44de-a154-4cc098daccc0","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"913f8937-dadf-420e-9afb-c94c9c3fb20b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"},"ticker":{"id":"d534d54a-2f7a-48e0-9ad1-99e78507dfbc","type":"CategoricalTicker"}},"id":"939a9428-8e01-4bc2-8ccf-697c019fc38d","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"f5f3204d-b0f7-49e2-b4d4-c09c397459cd","type":"BoxAnnotation"},"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"ba389bba-08b1-4014-b8f9-076cec781197","type":"BoxZoomTool"},{"attributes":{},"id":"30c9c7f0-17eb-4330-b3a4-384804b5fc55","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c1b8f28-1ab5-4e27-8218-e2a7c0439fef","type":"Rect"},{"attributes":{"data_source":{"id":"1835a140-7b4b-42f9-b9e9-1045fcd4065c","type":"ColumnDataSource"},"glyph":{"id":"3fa2b20e-d95b-46bf-88d5-95b441a03d78","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a6076c67-58fc-4b45-bf90-b5088fe6b159","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1191cc7a-6b6c-4d5f-81f8-3c3172ea3ec1","type":"ColumnDataSource"},"glyph":{"id":"847d9dc9-0bb4-48f3-9791-8213ad08548f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59fbdfdc-8ca7-49ca-a394-801a2c0eb9af","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"39adeba9-878e-4fee-a810-66c17ac1bfb2","type":"PanTool"},{"attributes":{"data_source":{"id":"c250ec4c-901a-454d-a13a-bcd9ec2a7da9","type":"ColumnDataSource"},"glyph":{"id":"d7a08380-bb95-4018-ada3-83b8d9dd3cfa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dba06d06-69b8-4612-ba69-29892805826c","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"c36aac99-3d82-4bf6-8316-bea2ae50cc91","type":"LinearColorMapper"},"formatter":{"id":"1d8b0594-83b3-47a6-bbb7-eddd3bfcfbcd","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"},"ticker":{"id":"b4e11684-c796-48f4-a928-971330a25262","type":"BasicTicker"}},"id":"21355e47-66c4-4c10-a2e2-7885e9e5083b","type":"ColorBar"},{"attributes":{},"id":"619a4411-b7ed-49f9-9703-1b83ae56c9ec","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"38a00718-fe89-4c5a-9abc-b3b6d790c23e","type":"Rect"},{"attributes":{"data_source":{"id":"402fc7ad-a6cd-4a3b-8860-2fb573087b57","type":"ColumnDataSource"},"glyph":{"id":"da1ed62f-d745-4f30-83b1-de3b0f5864e2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4d7f43e-5c5b-4b6a-8629-b0660d6c7d21","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6a8add93-d7e5-4ae8-884e-396402a7da1e","type":"ColumnDataSource"},"glyph":{"id":"18385463-851d-4c24-9422-3c48d1edcf54","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a982fe67-ddf2-4efe-a68f-3b8f929e2a3d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fa2b20e-d95b-46bf-88d5-95b441a03d78","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"84be7db4-b312-487e-aa20-aa97da9a72d6","type":"Rect"},{"attributes":{"child":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"440cbcee-ddd6-4da8-9cb2-4a4bcdc1c2bc","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c36aac99-3d82-4bf6-8316-bea2ae50cc91","type":"LinearColorMapper"},{"attributes":{},"id":"b4e11684-c796-48f4-a928-971330a25262","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"847d9dc9-0bb4-48f3-9791-8213ad08548f","type":"Rect"},{"attributes":{},"id":"d534d54a-2f7a-48e0-9ad1-99e78507dfbc","type":"CategoricalTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"185bec25-ece1-4aec-82ff-da90632590d9","type":"BasicTickFormatter"},"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"},"ticker":{"id":"f104903f-49ce-4f01-a6ff-52e24466feab","type":"BasicTicker"}},"id":"b3502cf9-767e-4b92-9046-3fd48aae520b","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6493f23d-8361-469f-b4e7-2521a3cbd65d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.22222222222222,19.88888888888889,19.666666666666668],"x":[15,12,15],"y":["Wednesday","Friday","Friday"]}},"id":"1835a140-7b4b-42f9-b9e9-1045fcd4065c","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"2ba10609-b645-437a-a742-8cb0beff4a5c","type":"Title"},{"attributes":{},"id":"c04068b6-3972-4390-bf93-b51008b3b48e","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"a51f6359-b798-4b6b-90ee-b865c26ba1c0","type":"WheelZoomTool"},{"attributes":{},"id":"913f8937-dadf-420e-9afb-c94c9c3fb20b","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f104903f-49ce-4f01-a6ff-52e24466feab","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.884615384615385,14.552631578947368,16.406779661016948,15.461538461538462],"x":[10,15,14,15],"y":["Tuesday","Tuesday","Wednesday","Saturday"]}},"id":"d0988e70-8a51-4eef-9891-dcb297c9fe62","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"cd76e0f9-07d7-429e-b492-49aa7aa8b3ae","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.0,29.63157894736842,28.11111111111111,30.0],"x":[11,15,12,15],"y":["Monday","Monday","Tuesday","Thursday"]}},"id":"1b771222-6b6c-4424-a636-c4c7874ccdf4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"cb760df8-7293-4aeb-a640-4fd6ce6ffa41","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.3,0.0,1.0,3.1666666666666665,0.2222222222222222,3.0,0.0,1.6,3.0,0.75,0.0,0.0,0.0,0.0,2.473684210526316,0.0,2.28],"x":[7,9,12,16,7,8,11,7,11,12,7,13,7,11,12,8,10],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"c319c3a0-4bbf-43e2-b0fa-9219be332780","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e29c5ec3-42c2-452c-8589-7f48f0235c53","type":"LinearAxis"}],"left":[{"id":"939a9428-8e01-4bc2-8ccf-697c019fc38d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"f5f3204d-b0f7-49e2-b4d4-c09c397459cd","type":"BoxAnnotation"},{"id":"a6c5cdb5-dd89-4af9-9c92-962c715bba0f","type":"GlyphRenderer"},{"id":"bfeec6cc-0873-4768-a543-ad08930541cc","type":"GlyphRenderer"},{"id":"9402c617-4316-4f95-a029-afbcb1023ac2","type":"GlyphRenderer"},{"id":"5c77a193-d738-4895-b4a1-fd14c1116d91","type":"GlyphRenderer"},{"id":"dba06d06-69b8-4612-ba69-29892805826c","type":"GlyphRenderer"},{"id":"a4a72c40-387a-4772-bb04-1cbb87c1b243","type":"GlyphRenderer"},{"id":"f079d19f-c4a8-420d-bd0a-c66ec6174687","type":"GlyphRenderer"},{"id":"59fbdfdc-8ca7-49ca-a394-801a2c0eb9af","type":"GlyphRenderer"},{"id":"e29c5ec3-42c2-452c-8589-7f48f0235c53","type":"LinearAxis"},{"id":"939a9428-8e01-4bc2-8ccf-697c019fc38d","type":"CategoricalAxis"},{"id":"843ea3f1-1f05-4696-9a7f-1e3abff02afd","type":"ColorBar"}],"right":[{"id":"843ea3f1-1f05-4696-9a7f-1e3abff02afd","type":"ColorBar"}],"title":{"id":"cd76e0f9-07d7-429e-b492-49aa7aa8b3ae","type":"Title"},"tool_events":{"id":"30c9c7f0-17eb-4330-b3a4-384804b5fc55","type":"ToolEvents"},"toolbar":{"id":"92e24b4f-b7c4-4fae-9e07-c4d84600ecf8","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9eeb85e7-8458-42da-8cab-14837533701f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"202e5557-5637-498f-8a2f-0ba0fbb022e2","type":"FactorRange"}},"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"}},"id":"abfc4362-306b-4d41-9cb0-8625b3ea77d3","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7a08380-bb95-4018-ada3-83b8d9dd3cfa","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.22222222222222,19.88888888888889,19.666666666666668],"x":[15,12,15],"y":["Wednesday","Friday","Friday"]}},"id":"df476b3b-605b-4e7f-a410-7982ef29ffa1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.636363636363637,23.0],"x":[13,13],"y":["Saturday","Sunday"]}},"id":"669677d0-1368-4422-811e-83bbba756b11","type":"ColumnDataSource"},{"attributes":{},"id":"da501a4b-280b-4043-b9a8-02fb9d91da0b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.916666666666666,10.518518518518519,11.5,12.88888888888889,12.0,11.76271186440678,13.2,12.448275862068966,12.0,10.459016393442623,13.029411764705882],"x":[14,10,16,7,13,14,16,14,16,14,15],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"c250ec4c-901a-454d-a13a-bcd9ec2a7da9","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"b3502cf9-767e-4b92-9046-3fd48aae520b","type":"LinearAxis"}],"left":[{"id":"9b7b9f8a-51f1-466a-8b4a-9bf125950f20","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a6ae2eab-2166-4abf-af5a-33a9ef567f93","type":"BoxAnnotation"},{"id":"8c8c44f8-cb69-40fa-9ac1-6884e0b58d03","type":"GlyphRenderer"},{"id":"bc28ea63-f30e-4dfd-8f8c-42ff801758cf","type":"GlyphRenderer"},{"id":"a6076c67-58fc-4b45-bf90-b5088fe6b159","type":"GlyphRenderer"},{"id":"bb29d93f-9a79-410c-a1a7-06a6aced7214","type":"GlyphRenderer"},{"id":"a982fe67-ddf2-4efe-a68f-3b8f929e2a3d","type":"GlyphRenderer"},{"id":"a4d7f43e-5c5b-4b6a-8629-b0660d6c7d21","type":"GlyphRenderer"},{"id":"8835222f-1c1a-4ece-b6cb-9c1d844e312c","type":"GlyphRenderer"},{"id":"a282dc25-1e83-40e1-a49d-df75189cc516","type":"GlyphRenderer"},{"id":"b3502cf9-767e-4b92-9046-3fd48aae520b","type":"LinearAxis"},{"id":"9b7b9f8a-51f1-466a-8b4a-9bf125950f20","type":"CategoricalAxis"},{"id":"21355e47-66c4-4c10-a2e2-7885e9e5083b","type":"ColorBar"}],"right":[{"id":"21355e47-66c4-4c10-a2e2-7885e9e5083b","type":"ColorBar"}],"title":{"id":"2ba10609-b645-437a-a742-8cb0beff4a5c","type":"Title"},"tool_events":{"id":"3462b017-6b08-48fd-bdda-2925564ad01b","type":"ToolEvents"},"toolbar":{"id":"d1c2184d-54cf-4d23-8dea-35c2e312fc08","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"036c3dee-4301-4381-af2f-58a05000184c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"edd69d16-7c95-4e28-a4c5-3b8af161ac8a","type":"FactorRange"}},"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"208165f4-c519-406b-9052-11b36de9867e","type":"ColumnDataSource"},"glyph":{"id":"795a0e23-77e5-4a09-95ab-8e715ef8ffd2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8835222f-1c1a-4ece-b6cb-9c1d844e312c","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4392c00-bcee-4c22-8ff0-effb13e1e949","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"603c15c2-c694-4128-9628-b8b1a0b61ef2","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"9eeb85e7-8458-42da-8cab-14837533701f","type":"Range1d"},{"attributes":{"data_source":{"id":"d2514901-0d88-463e-a59f-9824f1f1b3c2","type":"ColumnDataSource"},"glyph":{"id":"2c1b8f28-1ab5-4e27-8218-e2a7c0439fef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8c8c44f8-cb69-40fa-9ac1-6884e0b58d03","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d0988e70-8a51-4eef-9891-dcb297c9fe62","type":"ColumnDataSource"},"glyph":{"id":"6493f23d-8361-469f-b4e7-2521a3cbd65d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bb29d93f-9a79-410c-a1a7-06a6aced7214","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"df476b3b-605b-4e7f-a410-7982ef29ffa1","type":"ColumnDataSource"},"glyph":{"id":"4c2e85d4-ed9e-465c-b692-830a10e9f8f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9402c617-4316-4f95-a029-afbcb1023ac2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cb760df8-7293-4aeb-a640-4fd6ce6ffa41","type":"PanTool"},{"id":"a51f6359-b798-4b6b-90ee-b865c26ba1c0","type":"WheelZoomTool"},{"id":"eb1f8247-53b6-4392-9d23-c263ab3914ed","type":"BoxZoomTool"},{"id":"2baeb197-4490-4fe5-844f-31ac4e4cc804","type":"SaveTool"},{"id":"abfc4362-306b-4d41-9cb0-8625b3ea77d3","type":"ResetTool"},{"id":"3b0f723c-ae95-46e1-8254-b7fb5e0d23e2","type":"HelpTool"}]},"id":"d1c2184d-54cf-4d23-8dea-35c2e312fc08","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.3,0.0,1.0,3.1666666666666665,0.2222222222222222,3.0,0.0,1.6,3.0,0.75,0.0,0.0,0.0,0.0,2.473684210526316,0.0,2.28],"x":[7,9,12,16,7,8,11,7,11,12,7,13,7,11,12,8,10],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"1191cc7a-6b6c-4d5f-81f8-3c3172ea3ec1","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"440cbcee-ddd6-4da8-9cb2-4a4bcdc1c2bc","type":"Panel"},{"id":"d1ca7662-3586-4e13-9c44-7d965bd21c6d","type":"Panel"}]},"id":"b6d3d925-fa5d-4bbe-b8b2-d4cf15959126","type":"Tabs"},{"attributes":{},"id":"e1e11a78-36a4-4a1b-b061-1e7198f31e6f","type":"BasicTicker"},{"attributes":{},"id":"c464b488-a849-46ce-ac49-1793b984c592","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.0,29.63157894736842,28.11111111111111,30.0],"x":[11,15,12,15],"y":["Monday","Monday","Tuesday","Thursday"]}},"id":"d2514901-0d88-463e-a59f-9824f1f1b3c2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7fae112e-4824-4734-8a65-1a31f81cdc36","subtype":"Chart","type":"Plot"}},"id":"9c898abd-0bf1-4a31-b7d8-ace8f4ba1e37","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.0,8.833333333333334,9.932203389830509,8.666666666666666,9.0,9.444444444444445,10.0,7.333333333333333,8.166666666666666,8.354166666666666,8.2,9.916666666666666],"x":[8,10,14,16,8,12,8,8,9,10,16,11],"y":["Monday","Monday","Tuesday","Tuesday","Thursday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"402fc7ad-a6cd-4a3b-8860-2fb573087b57","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c04068b6-3972-4390-bf93-b51008b3b48e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4fbdcb75-2439-4754-ab84-55ef175c8221","subtype":"Chart","type":"Plot"},"ticker":{"id":"619a4411-b7ed-49f9-9703-1b83ae56c9ec","type":"CategoricalTicker"}},"id":"9b7b9f8a-51f1-466a-8b4a-9bf125950f20","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"642633c5-cd24-417d-a588-b5ad713b3cd3","type":"ColumnDataSource"},"glyph":{"id":"38a00718-fe89-4c5a-9abc-b3b6d790c23e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4a72c40-387a-4772-bb04-1cbb87c1b243","type":"GlyphRenderer"}],"root_ids":["b6d3d925-fa5d-4bbe-b8b2-d4cf15959126"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"6d35b951-0e72-4fb7-a668-0141203cae66","elementid":"ed43bdf3-4972-4450-9ff9-7c0c1e7da57a","modelid":"b6d3d925-fa5d-4bbe-b8b2-d4cf15959126"}];
                  
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