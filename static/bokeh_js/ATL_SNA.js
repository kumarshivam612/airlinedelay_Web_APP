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
      };var element = document.getElementById("03db7bdb-e24a-4ef5-80d7-0eb9544ec11f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '03db7bdb-e24a-4ef5-80d7-0eb9544ec11f' but no matching script tag was found. ")
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
                  var docs_json = {"106a59c0-d62a-41e4-a494-b620e8c53043":{"roots":{"references":[{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"4eebde3c-c0d7-4807-b3c9-837a8324be50","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"},"ticker":{"id":"b7d61110-2d98-4e9e-8ec4-8891cdc43b33","type":"CategoricalTicker"}},"id":"73c6e2b4-087c-49d7-b78a-bf1784242fcf","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":23},"id":"c77d7906-4152-48bb-86eb-a9daff7c3c09","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.206896551724139],"x":[20],"y":["Saturday"]}},"id":"9bb7ec71-b8d1-46db-a87f-eac3ec699fa1","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"ba4c6049-a5ee-460b-a845-b06c7ced5360","type":"LinearColorMapper"},"formatter":{"id":"440ee620-1501-4776-a05b-753bf557fd72","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"e789163a-93c9-49d2-b0b4-be2c420c7601","type":"BasicTicker"}},"id":"6c9939bc-1891-4a98-9d8b-f4dedb641e21","type":"ColorBar"},{"attributes":{},"id":"61f1a04e-aa31-465a-aa21-369ea160639e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15, 18]"],"chart_index":[{"POS_ARR_DELAY":"(15, 18]"}],"values":[16.142857142857142],"x":[18],"y":["Thursday"]}},"id":"21f0bba1-aa0a-41d9-b121-db38ee53cfea","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"110a72d0-368b-4937-8fee-d4e3030a9c90","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f8dfe588-3d9d-4eb0-a76c-233e446881d0","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8907842-105d-425b-9fa9-930984fc5500","type":"Rect"},{"attributes":{"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"92cb41c4-7185-4752-8442-977e998bec67","type":"ResetTool"},{"attributes":{"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"0a77a7c1-2b17-49e7-ac9d-7893fd494f9f","type":"SaveTool"},{"attributes":{"data_source":{"id":"76173c2d-37ce-492b-a517-6623a1cd0b73","type":"ColumnDataSource"},"glyph":{"id":"145e24e6-74bc-41c6-bbb8-2273032437e2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e6264dcd-1b51-4b45-a9a5-cd1258435136","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 15]"],"chart_index":[{"POS_ARR_DELAY":"(12, 15]"}],"values":[14.206896551724139],"x":[20],"y":["Saturday"]}},"id":"dda78372-2bbf-4d4f-a9c2-cc5699a6e5dd","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e01acf4d-f79a-4370-83be-84309041608f","type":"Rect"},{"attributes":{},"id":"e789163a-93c9-49d2-b0b4-be2c420c7601","type":"BasicTicker"},{"attributes":{"data_source":{"id":"21f0bba1-aa0a-41d9-b121-db38ee53cfea","type":"ColumnDataSource"},"glyph":{"id":"d2b4de77-f435-4fec-a6c3-f5ec0ceb1060","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7ec7892d-244c-410e-80d7-0088b3fa6201","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"11a96a9c-eb0f-4b8e-b1ff-12b020f3b0e6","type":"ColumnDataSource"},"glyph":{"id":"3deb2597-2fb9-4aec-87bc-3ec6a340cad2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bd5a0f39-c7fc-4542-956a-0ea2f6e2ea9b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"542b7aff-be8f-41e1-8680-a001e841d42e","type":"ColumnDataSource"},"glyph":{"id":"5f564c3c-e019-4261-ac88-f80e0e38cea4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"becdbc2e-7f4a-49c4-8a45-c6ee888ba349","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"29423545-9a97-4e07-80c2-0b2afc7ee0c1","type":"ColumnDataSource"},"glyph":{"id":"6f9e431b-2217-4536-9018-eacf99664587","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"37f83796-d86c-4890-950d-eb8909332c21","type":"GlyphRenderer"},{"attributes":{},"id":"4ef84842-6c31-4454-9f44-3c0608406d10","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4ef84842-6c31-4454-9f44-3c0608406d10","type":"BasicTickFormatter"},"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"426b8a13-f981-4734-8cea-d1af3075e8c9","type":"BasicTicker"}},"id":"dd477b54-6bf5-45d4-ab90-42905f720264","type":"LinearAxis"},{"attributes":{"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"f791fa0a-c9fe-42f4-b7de-f999a5786fe9","type":"WheelZoomTool"},{"attributes":{"child":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"12d4c881-3b0b-4747-b4c0-845d5dac576e","type":"Panel"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"dd477b54-6bf5-45d4-ab90-42905f720264","type":"LinearAxis"}],"left":[{"id":"4ccc0004-a136-4657-a912-e88e2868ebde","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"f8dfe588-3d9d-4eb0-a76c-233e446881d0","type":"BoxAnnotation"},{"id":"bd5a0f39-c7fc-4542-956a-0ea2f6e2ea9b","type":"GlyphRenderer"},{"id":"becdbc2e-7f4a-49c4-8a45-c6ee888ba349","type":"GlyphRenderer"},{"id":"682124aa-eac9-448a-af00-47845d15789d","type":"GlyphRenderer"},{"id":"8a7d01bf-1ee5-41e8-b3d1-288199c26ced","type":"GlyphRenderer"},{"id":"6b6dbb04-1c3c-43ec-a32c-a20f8a1bdb4b","type":"GlyphRenderer"},{"id":"21322d95-1e7f-4e40-a6ad-e5aff5afd389","type":"GlyphRenderer"},{"id":"45db1c01-c5c7-4cbe-89ca-9d65bfa38c0a","type":"GlyphRenderer"},{"id":"e6264dcd-1b51-4b45-a9a5-cd1258435136","type":"GlyphRenderer"},{"id":"dd477b54-6bf5-45d4-ab90-42905f720264","type":"LinearAxis"},{"id":"4ccc0004-a136-4657-a912-e88e2868ebde","type":"CategoricalAxis"},{"id":"6c9939bc-1891-4a98-9d8b-f4dedb641e21","type":"ColorBar"}],"right":[{"id":"6c9939bc-1891-4a98-9d8b-f4dedb641e21","type":"ColorBar"}],"title":{"id":"110a72d0-368b-4937-8fee-d4e3030a9c90","type":"Title"},"tool_events":{"id":"af430baf-906f-4be0-b54b-701a4d1c3abd","type":"ToolEvents"},"toolbar":{"id":"c7a15be4-52fb-4c4d-bc21-1a8d86b117c7","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"29669e6b-1781-4658-bd0a-a6a8348e3084","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e4ad60bc-5203-4ae6-8b0a-08c4425d1fd5","type":"FactorRange"}},"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"839b1f30-fe23-4cd4-beb4-e462e64e158f","type":"BoxAnnotation"},"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"3dfc8ef2-b4bd-4e48-8c16-929c4aad3321","type":"BoxZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"12d4c881-3b0b-4747-b4c0-845d5dac576e","type":"Panel"},{"id":"3a934932-359f-4497-b621-bf423918e5e4","type":"Panel"}]},"id":"52a87336-f380-4998-9215-fef28170245e","type":"Tabs"},{"attributes":{},"id":"996c42a5-e19f-40af-8bf4-881b8fe2e667","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"fc54d900-07d7-4cfd-8423-4c0ea807e4a1","type":"FactorRange"},{"attributes":{"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"d870be5c-40d0-4d2a-8846-9333cc81c4f1","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"919515e3-81fb-4836-b57c-1a0fdcf5e81d","type":"PanTool"},{"id":"f791fa0a-c9fe-42f4-b7de-f999a5786fe9","type":"WheelZoomTool"},{"id":"22779730-36a5-473a-bd29-d956948081ab","type":"BoxZoomTool"},{"id":"159314eb-4a47-4fab-b4b5-4e07780504b7","type":"SaveTool"},{"id":"92cb41c4-7185-4752-8442-977e998bec67","type":"ResetTool"},{"id":"5d1f4970-e562-46f0-a06a-45921fd9603b","type":"HelpTool"}]},"id":"c7a15be4-52fb-4c4d-bc21-1a8d86b117c7","type":"Toolbar"},{"attributes":{"child":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"3a934932-359f-4497-b621-bf423918e5e4","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[2.129032258064516,0.0,2.5757575757575757,0.8571428571428571,2.4361702127659575,0.0,0.0,2.0],"x":[9,13,16,18,10,12,13,18],"y":["Tuesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Sunday"]}},"id":"e1f487fa-1742-494a-8fa0-de1dd1fea39e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1e8aa34d-4f6e-4599-abd9-70a6092c4b1b","type":"ColumnDataSource"},"glyph":{"id":"e01acf4d-f79a-4370-83be-84309041608f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6b6dbb04-1c3c-43ec-a32c-a20f8a1bdb4b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"919515e3-81fb-4836-b57c-1a0fdcf5e81d","type":"PanTool"},{"attributes":{"data_source":{"id":"39b6908d-f57e-4c08-9ee8-e5448f0cbee5","type":"ColumnDataSource"},"glyph":{"id":"26e16aab-5de0-4983-8db0-9d9693d0d73b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"21322d95-1e7f-4e40-a6ad-e5aff5afd389","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"29669e6b-1781-4658-bd0a-a6a8348e3084","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"75bcfd3d-2e10-4197-8b25-c73831a6b6f0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b00d02bf-a399-4c39-93f7-2267b945623d","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e5d8879a-1ae0-48ca-8259-a423c57c7367","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"159314eb-4a47-4fab-b4b5-4e07780504b7","type":"SaveTool"},{"attributes":{"data_source":{"id":"f94f1153-d66b-462b-ab06-76b0cc3d6697","type":"ColumnDataSource"},"glyph":{"id":"0892897c-5787-4d80-977c-4b061596e742","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45a934f3-caeb-45ca-91bf-ec513e5a083f","type":"GlyphRenderer"},{"attributes":{},"id":"4eebde3c-c0d7-4807-b3c9-837a8324be50","type":"CategoricalTickFormatter"},{"attributes":{},"id":"af430baf-906f-4be0-b54b-701a4d1c3abd","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]"],"chart_index":[{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"}],"values":[3.180327868852459,5.163636363636364,5.3578947368421055,5.508474576271187,4.142857142857143,4.463917525773196,3.175438596491228,3.3728813559322033,3.2065217391304346,5.73,3.3559322033898304,4.521739130434782,4.451612903225806,4.631578947368421,4.255102040816326],"x":[9,20,10,9,18,19,9,9,10,19,9,19,9,10,19],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"d4951e8a-6a95-4592-a508-5c1509f1c1a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.4375,6.277777777777778,8.345454545454546,7.222222222222222,8.654545454545454,6.103092783505154,7.9787234042553195,7.053191489361702,8.305555555555555,7.076923076923077,6.457142857142857,6.795918367346939,8.743362831858407,7.224489795918367,6.705882352941177,9.0,6.385964912280702],"x":[10,16,17,16,17,19,20,10,16,20,16,19,17,20,16,8,17],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"39b6908d-f57e-4c08-9ee8-e5448f0cbee5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28cb56ad-b93f-479d-8503-4c9032ebd3e7","type":"ColumnDataSource"},"glyph":{"id":"c1435e01-6c3f-461b-91ee-41e0ceb7c4e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5e0cb696-6e3c-47b8-95a3-4da330ffdbd0","type":"GlyphRenderer"},{"attributes":{},"id":"4088f311-12f5-405d-b47f-52c5e203de0e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7dfeadf8-af65-461e-80bc-58dfc2813107","type":"PanTool"},{"id":"74aad569-bf32-471d-a7fa-262a4ceb0e8f","type":"WheelZoomTool"},{"id":"3dfc8ef2-b4bd-4e48-8c16-929c4aad3321","type":"BoxZoomTool"},{"id":"0a77a7c1-2b17-49e7-ac9d-7893fd494f9f","type":"SaveTool"},{"id":"d870be5c-40d0-4d2a-8846-9333cc81c4f1","type":"ResetTool"},{"id":"997ca550-03dc-49ee-a951-11d577ed00be","type":"HelpTool"}]},"id":"55750bfa-3760-43e1-8399-68704350ad10","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2b4de77-f435-4fec-a6c3-f5ec0ceb1060","type":"Rect"},{"attributes":{},"id":"426b8a13-f981-4734-8cea-d1af3075e8c9","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[27.0],"x":[12],"y":["Sunday"]}},"id":"28cb56ad-b93f-479d-8503-4c9032ebd3e7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"38cab010-c286-4cb3-a35a-f98fbfcd59e3","type":"ColumnDataSource"},"glyph":{"id":"f8907842-105d-425b-9fa9-930984fc5500","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45db1c01-c5c7-4cbe-89ca-9d65bfa38c0a","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3deb2597-2fb9-4aec-87bc-3ec6a340cad2","type":"Rect"},{"attributes":{"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"74aad569-bf32-471d-a7fa-262a4ceb0e8f","type":"WheelZoomTool"},{"attributes":{"color_mapper":{"id":"e5d8879a-1ae0-48ca-8259-a423c57c7367","type":"LinearColorMapper"},"formatter":{"id":"62d21b5b-b571-4807-a851-d8aa51d18d37","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"},"ticker":{"id":"4088f311-12f5-405d-b47f-52c5e203de0e","type":"BasicTicker"}},"id":"1bf9e7a8-54d2-4872-9436-669804996eb2","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c497f048-7895-4524-9843-17eed57217b2","type":"Rect"},{"attributes":{"data_source":{"id":"dda78372-2bbf-4d4f-a9c2-cc5699a6e5dd","type":"ColumnDataSource"},"glyph":{"id":"c497f048-7895-4524-9843-17eed57217b2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3baa62d5-1dd9-4e29-bc49-f9f149987e28","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0892897c-5787-4d80-977c-4b061596e742","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ba4c6049-a5ee-460b-a845-b06c7ced5360","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[2.129032258064516,0.0,2.5757575757575757,0.8571428571428571,2.4361702127659575,0.0,0.0,2.0],"x":[9,13,16,18,10,12,13,18],"y":["Tuesday","Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Sunday"]}},"id":"76173c2d-37ce-492b-a517-6623a1cd0b73","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9bb7ec71-b8d1-46db-a87f-eac3ec699fa1","type":"ColumnDataSource"},"glyph":{"id":"7292f8a0-ad0e-44a5-91a6-0a665342546c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a7d01bf-1ee5-41e8-b3d1-288199c26ced","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f564c3c-e019-4261-ac88-f80e0e38cea4","type":"Rect"},{"attributes":{},"id":"d27ac7b1-b05f-44b6-9aa7-89e957216755","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"d91c5ffb-839f-4f43-bc9d-1ec6a79d1ff1","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24, 27]"],"chart_index":[{"POS_ARR_DELAY":"(24, 27]"}],"values":[27.0],"x":[12],"y":["Sunday"]}},"id":"11a96a9c-eb0f-4b8e-b1ff-12b020f3b0e6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"997ca550-03dc-49ee-a951-11d577ed00be","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]","(3, 6]"],"chart_index":[{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"},{"POS_ARR_DELAY":"(3, 6]"}],"values":[3.180327868852459,5.163636363636364,5.3578947368421055,5.508474576271187,4.142857142857143,4.463917525773196,3.175438596491228,3.3728813559322033,3.2065217391304346,5.73,3.3559322033898304,4.521739130434782,4.451612903225806,4.631578947368421,4.255102040816326],"x":[9,20,10,9,18,19,9,9,10,19,9,19,9,10,19],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"38cab010-c286-4cb3-a35a-f98fbfcd59e3","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"f8dfe588-3d9d-4eb0-a76c-233e446881d0","type":"BoxAnnotation"},"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"22779730-36a5-473a-bd29-d956948081ab","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4042c0ec-e33b-4100-8a32-9e07d34a02f0","type":"Rect"},{"attributes":{"data_source":{"id":"f5c3c3dd-eb05-4f2b-9f33-089a8d43c464","type":"ColumnDataSource"},"glyph":{"id":"75bcfd3d-2e10-4197-8b25-c73831a6b6f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3aebe03b-91af-43fa-be6c-def4112d897b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e1f487fa-1742-494a-8fa0-de1dd1fea39e","type":"ColumnDataSource"},"glyph":{"id":"f171681e-a159-4dbd-b16c-abf670642a97","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7fafff78-ed30-441a-aee9-598368d4cf4e","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7292f8a0-ad0e-44a5-91a6-0a665342546c","type":"Rect"},{"attributes":{},"id":"90c571d5-e1db-425b-845c-d30d91c80c86","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[9.833333333333334,9.21875,10.4,9.598130841121495,9.378947368421052,10.3125,10.10576923076923,9.266666666666667,9.428571428571429,9.145454545454545],"x":[18,19,18,17,10,20,17,18,16,20],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Sunday","Sunday"]}},"id":"1e8aa34d-4f6e-4599-abd9-70a6092c4b1b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bf77333f-6824-4f5f-a154-3e7abd5700ec","type":"ColumnDataSource"},"glyph":{"id":"b00d02bf-a399-4c39-93f7-2267b945623d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"682124aa-eac9-448a-af00-47845d15789d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d4951e8a-6a95-4592-a508-5c1509f1c1a2","type":"ColumnDataSource"},"glyph":{"id":"4042c0ec-e33b-4100-8a32-9e07d34a02f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6d0e141e-2ba8-4586-8e7b-a8c127f844f9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"}},"id":"7dfeadf8-af65-461e-80bc-58dfc2813107","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18, 21]"],"chart_index":[{"POS_ARR_DELAY":"(18, 21]"}],"values":[18.663636363636364],"x":[17],"y":["Thursday"]}},"id":"f94f1153-d66b-462b-ab06-76b0cc3d6697","type":"ColumnDataSource"},{"attributes":{},"id":"fca1a026-54ff-4ac6-92ea-07223b3e01cd","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15, 18]"],"chart_index":[{"POS_ARR_DELAY":"(15, 18]"}],"values":[16.142857142857142],"x":[18],"y":["Thursday"]}},"id":"bf77333f-6824-4f5f-a154-3e7abd5700ec","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1435e01-6c3f-461b-91ee-41e0ceb7c4e4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f9e431b-2217-4536-9018-eacf99664587","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"839b1f30-fe23-4cd4-beb4-e462e64e158f","type":"BoxAnnotation"},{"attributes":{},"id":"440ee620-1501-4776-a05b-753bf557fd72","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"26e16aab-5de0-4983-8db0-9d9693d0d73b","type":"Rect"},{"attributes":{"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"}},"id":"5d1f4970-e562-46f0-a06a-45921fd9603b","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"145e24e6-74bc-41c6-bbb8-2273032437e2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]","(9, 12]"],"chart_index":[{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"},{"POS_ARR_DELAY":"(9, 12]"}],"values":[9.833333333333334,9.21875,10.4,9.598130841121495,9.378947368421052,10.3125,10.10576923076923,9.266666666666667,9.428571428571429,9.145454545454545],"x":[18,19,18,17,10,20,17,18,16,20],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Sunday","Sunday"]}},"id":"f5c3c3dd-eb05-4f2b-9f33-089a8d43c464","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"90c571d5-e1db-425b-845c-d30d91c80c86","type":"BasicTickFormatter"},"plot":{"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"},"ticker":{"id":"61f1a04e-aa31-465a-aa21-369ea160639e","type":"BasicTicker"}},"id":"5750e789-a562-4fbc-862f-8268b726edaa","type":"LinearAxis"},{"attributes":{},"id":"62d21b5b-b571-4807-a851-d8aa51d18d37","type":"BasicTickFormatter"},{"attributes":{},"id":"b7d61110-2d98-4e9e-8ec4-8891cdc43b33","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]","(6, 9]"],"chart_index":[{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"},{"POS_ARR_DELAY":"(6, 9]"}],"values":[6.4375,6.277777777777778,8.345454545454546,7.222222222222222,8.654545454545454,6.103092783505154,7.9787234042553195,7.053191489361702,8.305555555555555,7.076923076923077,6.457142857142857,6.795918367346939,8.743362831858407,7.224489795918367,6.705882352941177,9.0,6.385964912280702],"x":[10,16,17,16,17,19,20,10,16,20,16,19,17,20,16,8,17],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"29423545-9a97-4e07-80c2-0b2afc7ee0c1","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5750e789-a562-4fbc-862f-8268b726edaa","type":"LinearAxis"}],"left":[{"id":"73c6e2b4-087c-49d7-b78a-bf1784242fcf","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"839b1f30-fe23-4cd4-beb4-e462e64e158f","type":"BoxAnnotation"},{"id":"5e0cb696-6e3c-47b8-95a3-4da330ffdbd0","type":"GlyphRenderer"},{"id":"45a934f3-caeb-45ca-91bf-ec513e5a083f","type":"GlyphRenderer"},{"id":"7ec7892d-244c-410e-80d7-0088b3fa6201","type":"GlyphRenderer"},{"id":"3baa62d5-1dd9-4e29-bc49-f9f149987e28","type":"GlyphRenderer"},{"id":"3aebe03b-91af-43fa-be6c-def4112d897b","type":"GlyphRenderer"},{"id":"37f83796-d86c-4890-950d-eb8909332c21","type":"GlyphRenderer"},{"id":"6d0e141e-2ba8-4586-8e7b-a8c127f844f9","type":"GlyphRenderer"},{"id":"7fafff78-ed30-441a-aee9-598368d4cf4e","type":"GlyphRenderer"},{"id":"5750e789-a562-4fbc-862f-8268b726edaa","type":"LinearAxis"},{"id":"73c6e2b4-087c-49d7-b78a-bf1784242fcf","type":"CategoricalAxis"},{"id":"1bf9e7a8-54d2-4872-9436-669804996eb2","type":"ColorBar"}],"right":[{"id":"1bf9e7a8-54d2-4872-9436-669804996eb2","type":"ColorBar"}],"title":{"id":"d91c5ffb-839f-4f43-bc9d-1ec6a79d1ff1","type":"Title"},"tool_events":{"id":"fca1a026-54ff-4ac6-92ea-07223b3e01cd","type":"ToolEvents"},"toolbar":{"id":"55750bfa-3760-43e1-8399-68704350ad10","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c77d7906-4152-48bb-86eb-a9daff7c3c09","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"fc54d900-07d7-4cfd-8423-4c0ea807e4a1","type":"FactorRange"}},"id":"369d6d1e-a02f-45f1-b7bd-c2733366f0cb","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d27ac7b1-b05f-44b6-9aa7-89e957216755","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a25384e6-6acf-4f38-a757-edabe4e228d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"996c42a5-e19f-40af-8bf4-881b8fe2e667","type":"CategoricalTicker"}},"id":"4ccc0004-a136-4657-a912-e88e2868ebde","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(18, 21]"],"chart_index":[{"POS_ARR_DELAY":"(18, 21]"}],"values":[18.663636363636364],"x":[17],"y":["Thursday"]}},"id":"542b7aff-be8f-41e1-8680-a001e841d42e","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"e4ad60bc-5203-4ae6-8b0a-08c4425d1fd5","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f171681e-a159-4dbd-b16c-abf670642a97","type":"Rect"}],"root_ids":["52a87336-f380-4998-9215-fef28170245e"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"106a59c0-d62a-41e4-a494-b620e8c53043","elementid":"03db7bdb-e24a-4ef5-80d7-0eb9544ec11f","modelid":"52a87336-f380-4998-9215-fef28170245e"}];
                  
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